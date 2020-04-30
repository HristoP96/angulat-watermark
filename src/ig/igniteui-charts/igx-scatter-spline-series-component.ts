import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxScatterBaseComponent } from "./igx-scatter-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterSplineSeries } from "./ScatterSplineSeries";

/**
 * Represents a IgxDataChartComponent scatter spline series
*/
export const IgxScatterSplineSeriesComponent_PROVIDERS = [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxScatterSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxScatterSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterSplineSeriesComponent)}];
@Component({
  selector: 'igx-scatter-spline-series',
  template: ``,
  providers: [{provide: IgxScatterBaseComponent, useExisting: forwardRef(() => IgxScatterSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxScatterSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterSplineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScatterSplineSeriesComponent extends IgxScatterBaseComponent
{

protected createImplementation() : ScatterSplineSeries
{
	return new ScatterSplineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScatterSplineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the Stiffness property.
	*/
	get stiffness() : number {
		return (this.i.stiffness as number);
	}
	@Input()
	set stiffness(v: number) {
		this.i.stiffness = +v;
	}
}
