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
import { PolarAreaSeries } from "./PolarAreaSeries";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent polar area series.
*/
export const IgxPolarAreaSeriesComponent_PROVIDERS = [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}];
@Component({
  selector: 'igx-polar-area-series',
  template: ``,
  providers: [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPolarAreaSeriesComponent extends IgxPolarLineSeriesBaseComponent
{

protected createImplementation() : PolarAreaSeries
{
	return new PolarAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PolarAreaSeries {
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
