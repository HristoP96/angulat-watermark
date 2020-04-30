import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { IgxAnchoredRadialSeriesComponent } from "./igx-anchored-radial-series-component";
import { IgxRadialBaseComponent } from "./igx-radial-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RadialAreaSeries } from "./RadialAreaSeries";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent radial area series.
*/
export const IgxRadialAreaSeriesComponent_PROVIDERS = [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}];
@Component({
  selector: 'igx-radial-area-series',
  template: ``,
  providers: [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRadialAreaSeriesComponent extends IgxAnchoredRadialSeriesComponent
{

protected createImplementation() : RadialAreaSeries
{
	return new RadialAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RadialAreaSeries {
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
