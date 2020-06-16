import { Axis, Margin } from '../options-types';

export type CanvasBase = Partial<{
  axis: Axis;
  margin: Margin;
  background: string;
}>;
