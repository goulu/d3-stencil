import { Data } from './data-types';
import { Styles } from './options-types';
import { HasData } from './has-data';
import {
  CanvasBase,
  PieChart,
  BarChart,
  LineChart,
  LineAnnotationsChart,
  BcgMatrixChart,
} from './charts-options';

export type GraphData<T = number[][]> = Partial<{
  canvas: CanvasBase;
  pieChart: PieChart;
  barChart: BarChart;
  lineChart: LineChart;
  lineAnnotationsChart: LineAnnotationsChart;
  bcgMatrixChart: BcgMatrixChart;
  styles: Styles;
  colors: string[];
  labels: string[] | number[];
  data: Data<T>;
  hasData: HasData;
}>;
