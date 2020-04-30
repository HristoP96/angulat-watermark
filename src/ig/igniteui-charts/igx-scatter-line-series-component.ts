import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { IgxScatterBaseComponent } from "./igx-scatter-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterLineSeries } from "./ScatterLineSeries";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent scatter line series
*/
export const IgxScatterLineSeriesComponent_PROVIDERS = [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxScatterLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxScatterLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterLineSeriesComponent)}];
@Component({
  selector: 'igx-scatter-line-series',
  template: ``,
  providers: [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxScatterLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxScatterLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterLineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScatterLineSeriesComponent extends IgxScatterBaseComponent
{

protected createImplementation() : ScatterLineSeries
{
	return new ScatterLineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScatterLineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Determines how unknown values will be plotted on the chart.
	 * Null and Double.NaN are two examples of unknown values.
	*/
	get unknownValuePlotting() : UnknownValuePlotting {
		return this.i.unknownValuePlotting;
	}
	@Input()
	set unknownValuePlotting(v: UnknownValuePlotting) {
		this.i.unknownValuePlotting = ensureEnum<UnknownValuePlotting>(UnknownValuePlotting_$type, v);
	}
}
