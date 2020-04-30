import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxPolarLineSeriesBaseComponent } from "./igx-polar-line-series-base-component";
import { IgxPolarBaseComponent } from "./igx-polar-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PolarSplineAreaSeries } from "./PolarSplineAreaSeries";

/**
 * Represents a IgxDataChartComponent polar spline area series.
*/
export const IgxPolarSplineAreaSeriesComponent_PROVIDERS = [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}];
@Component({
  selector: 'igx-polar-spline-area-series',
  template: ``,
  providers: [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPolarSplineAreaSeriesComponent extends IgxPolarLineSeriesBaseComponent
{

protected createImplementation() : PolarSplineAreaSeries
{
	return new PolarSplineAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PolarSplineAreaSeries {
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
