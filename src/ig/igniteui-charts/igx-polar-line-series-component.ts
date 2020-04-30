import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { IgxPolarLineSeriesBaseComponent } from "./igx-polar-line-series-base-component";
import { IgxPolarBaseComponent } from "./igx-polar-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PolarLineSeries } from "./PolarLineSeries";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent polar line series.
*/
export const IgxPolarLineSeriesComponent_PROVIDERS = [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}];
@Component({
  selector: 'igx-polar-line-series',
  template: ``,
  providers: [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarLineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPolarLineSeriesComponent extends IgxPolarLineSeriesBaseComponent
{

protected createImplementation() : PolarLineSeries
{
	return new PolarLineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PolarLineSeries {
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
