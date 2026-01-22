import React from 'react';
import { Line } from 'react-konva';
import { GRID_SIZE } from '../utils/geometry';

interface GridProps {
  scale: number;
  stagePos: { x: number; y: number };
  width: number;
  height: number;
}

const Grid: React.FC<GridProps> = ({ scale, stagePos, width, height }) => {
  // Calculate visible area in scene coordinates
  const startX = Math.floor((-stagePos.x / scale) / GRID_SIZE) * GRID_SIZE;
  const startY = Math.floor((-stagePos.y / scale) / GRID_SIZE) * GRID_SIZE;
  const endX = Math.ceil(((-stagePos.x + width) / scale) / GRID_SIZE) * GRID_SIZE;
  const endY = Math.ceil(((-stagePos.y + height) / scale) / GRID_SIZE) * GRID_SIZE;

  const lines: JSX.Element[] = [];

  // Vertical Lines
  for (let x = startX; x <= endX; x += GRID_SIZE) {
    lines.push(
      <Line
        key={`v${x}`}
        points={[x, startY, x, endY]}
        stroke="#ddd"
        strokeWidth={1 / scale} // Keep line width constant on screen
        listening={false}
      />
    );
  }

  // Horizontal Lines
  for (let y = startY; y <= endY; y += GRID_SIZE) {
    lines.push(
      <Line
        key={`h${y}`}
        points={[startX, y, endX, y]}
        stroke="#ddd"
        strokeWidth={1 / scale}
        listening={false}
      />
    );
  }

  return <>{lines}</>;
};

export default Grid;
