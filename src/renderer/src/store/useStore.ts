import { create } from 'zustand';
import { Shape, ToolType } from '../types';

interface AppState {
  shapes: Shape[];
  selectedIds: string[];
  tool: ToolType;
  
  // History
  past: Shape[][];
  future: Shape[][];

  // Export
  exportRequested: boolean;
  setExportRequested: (val: boolean) => void;

  // Actions
  setTool: (tool: ToolType) => void;
  addShape: (shape: Shape) => void;
  updateShape: (id: string, attrs: Partial<Shape>) => void;
  deleteShapes: (ids: string[]) => void;
  selectShape: (id: string | null, multi?: boolean) => void;
  
  undo: () => void;
  redo: () => void;
  saveSnapshot: () => void; // Internal helper
}

export const useStore = create<AppState>((set, get) => ({
  shapes: [],
  selectedIds: [],
  tool: 'select',
  past: [],
  future: [],

  exportRequested: false,

  setExportRequested: (val) => set({ exportRequested: val }),

  saveSnapshot: () => {
    set((state) => ({
      past: [...state.past, state.shapes],
      future: []
    }));
  },

  setTool: (tool) => set({ tool, selectedIds: [] }),

  addShape: (shape) => {
    get().saveSnapshot();
    set((state) => ({ shapes: [...state.shapes, shape] }));
  },

  updateShape: (id, attrs) => {
    // For drag/resize during interaction, we might not want to snapshot EVERY pixel move.
    // Ideally, snapshot is called on DragStart or DragEnd.
    // For now, simpler: user calls update, we snapshot? 
    // If updateShape is called 60fps during drag, history will explode.
    // We should separate "committing" a change from "updating" it.
    // For MVP, handling this in component (snapshot on DragStart) is better.
    // BUT, updateShape is used by CanvasArea on DragEnd. So that's fine.
    // It's also used by MouseMove during drawing. That's BAD for history.
    
    // We need a way to bypass snapshot for temporary updates?
    // Let's add a `skipHistory` flag to updateShape.
    
    set((state) => ({
      shapes: state.shapes.map((s) => (s.id === id ? { ...s, ...attrs } as Shape : s))
    }));
  },

  // Specialized wrapper for updates that should be recorded
  // We'll trust the component to call saveSnapshot() before "major" changes if we expose it,
  // OR we refine the API. 
  // Let's change addShape and updateShape to logic below.
  
  deleteShapes: (ids) => {
    get().saveSnapshot();
    set((state) => ({
      shapes: state.shapes.filter((s) => !ids.includes(s.id)),
      selectedIds: state.selectedIds.filter((id) => !ids.includes(id))
    }));
  },

  selectShape: (id, multi = false) => set((state) => {
    if (id === null) return { selectedIds: [] };
    if (multi) {
      return {
        selectedIds: state.selectedIds.includes(id) 
          ? state.selectedIds.filter(i => i !== id)
          : [...state.selectedIds, id]
      };
    }
    return { selectedIds: [id] };
  }),

  undo: () => set((state) => {
    if (state.past.length === 0) return {};
    const previous = state.past[state.past.length - 1];
    const newPast = state.past.slice(0, state.past.length - 1);
    return {
      shapes: previous,
      past: newPast,
      future: [state.shapes, ...state.future],
      selectedIds: [] // Deselect on undo to avoid ghost selections
    };
  }),

  redo: () => set((state) => {
    if (state.future.length === 0) return {};
    const next = state.future[0];
    const newFuture = state.future.slice(1);
    return {
      shapes: next,
      past: [...state.past, state.shapes],
      future: newFuture,
      selectedIds: []
    };
  })
}));
