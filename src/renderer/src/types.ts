export type ToolType = 'select' | 'rect' | 'circle' | 'line' | 'pan';

export interface Point {
  x: number;
  y: number;
}

export type ShapeType = 'rect' | 'circle' | 'line';

export interface BaseShape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  rotation?: number;
  stroke: string;
  strokeWidth: number;
  fill?: string;
  selected?: boolean; // UI state helper, though ideally derived from selection array
}

export interface RectShape extends BaseShape {
  type: 'rect';
  width: number;
  height: number;
}

export interface CircleShape extends BaseShape {
  type: 'circle';
  radius: number;
}

export interface LineShape extends BaseShape {
  type: 'line';
  points: number[]; // [x1, y1, x2, y2, ...]
}

export type Shape = RectShape | CircleShape | LineShape;

export interface ProjectData {
  shapes: Shape[];
  version: number;
}
