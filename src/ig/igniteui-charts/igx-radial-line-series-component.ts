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
import { RadialLineSeries } from "./RadialLineSeries";
import { ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent radial line series.
*/
export const IgxRadialLineSeriesComponent_PROVIDERS = [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}];
@Component({
  selector: 'igx-radial-line-series',
  template: ``,
  providers: [{provide: IgxAnchoredRadialSeriesComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}, {provide: IgxRadialBaseComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialLineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRadialLineSeriesComponent extends IgxAnchoredRadialSeriesComponent
{

protected createImplementation() : RadialLineSeries
{
	return new RadialLineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RadialLineSeries {
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
	/**
	 * When overridden in a derived class, is invoked whenever application code or internal processes
	 * call ApplyTemplate.
	
	*/
	public onApplyTemplate() {
		this.i.onApplyTemplate();
	}
}
