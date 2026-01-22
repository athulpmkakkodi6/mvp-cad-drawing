
import { useStore } from '../store/useStore';
import { ToolType } from '../types';

const tools: { id: ToolType; icon: string; label: string }[] = [
  { id: 'select', icon: 'cursor', label: 'Select' },
  { id: 'pan', icon: 'move', label: 'Pan' },
  { id: 'rect', icon: 'square', label: 'Rectangle' },
  { id: 'circle', icon: 'circle', label: 'Circle' },
  { id: 'line', icon: 'minus', label: 'Line' },
];

const Toolbar = () => {
  const { tool, setTool, undo, redo, shapes, setExportRequested } = useStore();

  const handleSave = async () => {
    const data = JSON.stringify({ shapes, version: 1 });
    // @ts-ignore
    await window.api.saveProject(data);
  };

  const handleLoad = async () => {
    // @ts-ignore
    const content = await window.api.loadProject();
    if (content) {
      const data = JSON.parse(content);
      // We need a way to set state entirely.
      // For now, simpler: reload app? No, update store.
      // Store needs setShapes or loadProject action.
      // Let's assume we implement loadProjectAction in store or just use setShapes if exposed?
      // Store doesn't have setShapes exposed directly, but we can access verify.
      // Actually, let's just use window.location.reload() for MVP laziness? No.
      // Let's add loadProject to store.
      useStore.setState({ shapes: data.shapes, past: [], future: [], selectedIds: [] });
    }
  };

  return (
    <div style={{
      position: 'absolute',
      left: 10,
      top: 10,
      zIndex: 100,
      background: 'white',
      padding: '8px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {tools.map((t) => (
        <button
          key={t.id}
          onClick={() => setTool(t.id)}
          title={t.label}
          style={{
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            background: tool === t.id ? '#e0e0ff' : 'white',
            cursor: 'pointer',
            fontWeight: tool === t.id ? 'bold' : 'normal'
          }}
        >
          {t.label}
        </button>
      ))}
      <div style={{ height: '1px', background: '#eee', margin: '4px 0' }} />
      <button onClick={undo} title="Undo (Ctrl+Z)" style={{ padding: '8px', cursor: 'pointer' }}>Undo</button>
      <button onClick={redo} title="Redo (Ctrl+Y)" style={{ padding: '8px', cursor: 'pointer' }}>Redo</button>
      <div style={{ height: '1px', background: '#eee', margin: '4px 0' }} />
      <button onClick={handleSave} title="Save Project" style={{ padding: '8px', cursor: 'pointer' }}>Save</button>
      <button onClick={handleLoad} title="Load Project" style={{ padding: '8px', cursor: 'pointer' }}>Load</button>
      <div style={{ height: '1px', background: '#eee', margin: '4px 0' }} />
      <button onClick={() => setExportRequested(true)} title="Export PNG" style={{ padding: '8px', cursor: 'pointer' }}>Export PNG</button>
    </div>
  );
};

export default Toolbar;
