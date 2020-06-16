import { Component, h, Element, Prop, Watch, State } from '@stencil/core';
import { Selection, select, event } from 'd3-selection';
import { Graph, GraphData } from '@interfaces/index';
import { Resize } from '@decorators/index';
import {
  initTooltipIfExists,
  initLegendIfExists,
  formatter,
  circularFind,
  objectAssignDeep,
} from '@utils/index';
import { DEFAULT_GRAPH_DATA_CANVAS } from '@shared/index';

@Component({
  tag: 'canvas-base',
  styleUrl: 'canvas-base',
  shadow: false,
})
export class CanvasBase implements Graph<number[]> {
  @Prop() graphData: GraphData<number[]>;
  @Element() canvasBaseEl: HTMLElement;
  @State() legendEl: HTMLLegendChartElement;

  graphDataMerged: GraphData<number[]>;

  canvas: Selection<HTMLCanvasElement, null, HTMLCanvasElement, {}>;
  root: Selection<HTMLCanvasElement, any, HTMLElement, any>;
  width: number;
  height: number;

  @Watch('graphData')
  updateGraphData(newGraphData: GraphData<number[]>) {
    this.graphDataMerged = objectAssignDeep(
      { ...DEFAULT_GRAPH_DATA_CANVAS },
      newGraphData,
    );

    this.drawChart();
  }

  hasData(): Error | boolean {
    return this.graphDataMerged.hasData(this.graphDataMerged);
  }

  reSetRoot(): void {
    if (this.root) {
      this.root.remove();
    }

    this.root = this.canvas
  }

  @Resize()
  drawChart(): void {
    if (this.hasData()) {
      // this.width = this.svg.node().getBoundingClientRect().width;
      // this.radius = Math.min(this.width, this.height) / 2;

      this.reSetRoot();

      this.canvas = this.root;

    }
  }

  render() {
    return (
      <div class={this.legendEl ? 'o-layout is--vertical' : 'o-layout'}>
        <div class="o-layout--chart">
          <canvas />
        </div>
        <div class="o-layout--slot">
          <slot name="tooltip" />
          <slot name="legend" />
        </div>
      </div>
    );
  }

}
