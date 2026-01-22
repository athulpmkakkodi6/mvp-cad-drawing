import { useRef, useState, useEffect } from 'react';
import { Stage, Layer, Rect, Circle, Line, Transformer } from 'react-konva';
import Konva from 'konva';
import Grid from './Grid';
import { useStore } from '../store/useStore';
import { Shape } from '../types';

const CanvasArea = () => {
  const { shapes, tool, addShape, updateShape, selectShape, selectedIds, saveSnapshot, exportRequested, setExportRequested } = useStore();
  const stageRef = useRef<Konva.Stage>(null);

  useEffect(() => {
    if (exportRequested && stageRef.current) {
      const uri = stageRef.current.toDataURL({ pixelRatio: 2 }); // Higher quality
      // @ts-ignore
      window.api.saveImage(uri).finally(() => {
        setExportRequested(false);
      });
    }
  }, [exportRequested, setExportRequested]);
  
  // Viewport State
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Drawing State
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentShapeId, setCurrentShapeId] = useState<string | null>(null);

  const handleWheel = (e: Konva.KonvaEventObject<WheelEvent>) => {
    e.evt.preventDefault();
    const stage = stageRef.current;
    if (!stage) return;

    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();
    if (!pointer) return;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    let newScale = e.evt.deltaY > 0 ? oldScale * 0.9 : oldScale * 1.1; // Zoom direction
    // Limit scale
    newScale = Math.max(0.1, Math.min(newScale, 10));

    const newPos = {
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    };

    setScale(newScale);
    setPosition(newPos);
  };

  const getStagePos = (stage: Konva.Stage) => {
    const pointer = stage.getPointerPosition();
    if (!pointer) return { x: 0, y: 0 };
    const scale = stage.scaleX();
    return {
      x: (pointer.x - stage.x()) / scale,
      y: (pointer.y - stage.y()) / scale,
    };
  };

  const handleMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (tool === 'select' || tool === 'pan') return;
    
    const stage = e.target.getStage();
    if (!stage) return;
    
    const pos = getStagePos(stage);
    const id = crypto.randomUUID();
    
    setIsDrawing(true);
    setCurrentShapeId(id);

    // Initial shape
    const baseProps = {
      id,
      x: pos.x,
      y: pos.y,
      stroke: 'black',
      strokeWidth: 2,
    };

    if (tool === 'rect') {
      addShape({ ...baseProps, type: 'rect', width: 0, height: 0 } as Shape);
    } else if (tool === 'circle') {
      addShape({ ...baseProps, type: 'circle', radius: 0 } as Shape);
    } else if (tool === 'line') {
      addShape({ ...baseProps, type: 'line', points: [0, 0] } as Shape);
    }
  };

  const handleMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
    if (!isDrawing || !currentShapeId) return;
    
    const stage = e.target.getStage();
    if (!stage) return;
    const pos = getStagePos(stage);
    const shape = shapes.find(s => s.id === currentShapeId);
    if (!shape) return;

    if (shape.type === 'rect') {
      updateShape(currentShapeId, {
        width: pos.x - shape.x,
        height: pos.y - shape.y
      });
    } else if (shape.type === 'circle') {
      const dx = pos.x - shape.x;
      const dy = pos.y - shape.y;
      const radius = Math.sqrt(dx * dx + dy * dy);
      updateShape(currentShapeId, { radius });
    } else if (shape.type === 'line') {
      updateShape(currentShapeId, {
        points: [0, 0, pos.x - shape.x, pos.y - shape.y]
      });
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setCurrentShapeId(null);
  };

  // Basic rendering mapping
  const renderShape = (shape: Shape) => {
    const isSelected = selectedIds.includes(shape.id);
    const commonProps = {
      key: shape.id,
      id: shape.id,
      x: shape.x,
      y: shape.y,
      stroke: isSelected ? 'blue' : shape.stroke,
      strokeWidth: shape.strokeWidth,
      draggable: tool === 'select',
      rotation: shape.rotation || 0,
      onClick: (e: any) => {
        if (tool === 'select') {
          e.cancelBubble = true;
          selectShape(shape.id, e.evt.shiftKey);
        }
      },
      onDragStart: () => {
        saveSnapshot();
      },
      onDragEnd: (e: any) => {
        updateShape(shape.id, {
          x: e.target.x(),
          y: e.target.y()
        });
      }
    };

    switch (shape.type) {
      case 'rect':
        return <Rect {...commonProps} width={shape.width} height={shape.height} />;
      case 'circle':
        return <Circle {...commonProps} radius={shape.radius} />;
      case 'line':
        return <Line {...commonProps} points={shape.points} closed={false} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleResize = () => {
       if (stageRef.current) {
           // Responsive resize logic if needed
       }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const trRef = useRef<Konva.Transformer>(null);

  useEffect(() => {
    if (stageRef.current && trRef.current) {
      // We only support single selection for now as per MVP
      const selectedId = selectedIds[0];
      if (selectedId) {
        const selectedNode = stageRef.current.findOne('#' + selectedId);
        if (selectedNode) {
          trRef.current.nodes([selectedNode]);
          trRef.current.getLayer()?.batchDraw();
        } else {
          trRef.current.nodes([]);
        }
      } else {
        trRef.current.nodes([]);
      }
    }
  }, [selectedIds, shapes]); // Update when selection or shapes change

  return (
    <div className="canvas-container" style={{ width: '100%', height: '100vh', overflow: 'hidden', background: '#f0f0f0' }}>
      <Stage
        ref={stageRef}
        width={window.innerWidth}
        height={window.innerHeight}
        onWheel={handleWheel}
        scaleX={scale}
        scaleY={scale}
        x={position.x}
        y={position.y}
        draggable={tool === 'select' || tool === 'pan'} // Or use specialized pan tool check
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onDragEnd={(e) => {
            if (e.target === stageRef.current) {
                setPosition({ x: e.target.x(), y: e.target.y() });
            }
        }}
        onClick={(e) => {
          if (e.target === stageRef.current && tool === 'select') {
             selectShape(null);
          }
        }}
      >
        <Layer>
            <Grid scale={scale} stagePos={position} width={window.innerWidth} height={window.innerHeight} />
        </Layer>
        <Layer>
          {shapes.map(renderShape)}
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // Limit resize
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
            onTransformEnd={() => {
                // Update shape in store after transform
                const node = trRef.current?.nodes()[0];
                if (node) {
                    const id = node.id();
                    const scaleX = node.scaleX();
                    const scaleY = node.scaleY();
                    
                    // Reset scale to 1 and update width/height/radius
                    // This prevents scale drift
                    node.scaleX(1);
                    node.scaleY(1);
                    
                    const shape = shapes.find(s => s.id === id);
                    if (shape) {
                       saveSnapshot(); // Snapshot before applying transform changes? No, after?
                       // Actually we should snapshot BEFORE transform start.
                       // onTransformStart prop on Transformer.
                       
                       // For now, let's just update the geometry.
                       const updateAttrs: any = {
                           x: node.x(),
                           y: node.y(),
                           rotation: node.rotation()
                       };

                       if (shape.type === 'rect') {
                           updateAttrs.width = Math.max(5, node.width() * scaleX);
                           updateAttrs.height = Math.max(5, node.height() * scaleY);
                       } else if (shape.type === 'circle') {
                           updateAttrs.radius = Math.max(5, (node as Konva.Circle).radius() * scaleX);
                       }
                       // Lines don't work well with standard transformer box resize without logic
                       
                       updateShape(id, updateAttrs);
                    }
                }
            }}
            onTransformStart={() => {
                saveSnapshot();
            }}
          />
        </Layer>
      </Stage>
    </div>
  );
};

export default CanvasArea;
