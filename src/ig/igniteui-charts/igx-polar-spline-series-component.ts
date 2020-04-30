import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxPolarLineSeriesBaseComponent } from "./igx-polar-line-series-base-component";
import { IgxPolarBaseComponent } from "./igx-polar-base-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PolarSplineSeries } from "./PolarSplineSeries";

/**
 * Represents a IgxDataChartComponent polar spline series.
*/
export const IgxPolarSplineSeriesComponent_PROVIDERS = [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}];
@Component({
  selector: 'igx-polar-spline-series',
  template: ``,
  providers: [{provide: IgxPolarLineSeriesBaseComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}, {provide: IgxPolarBaseComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarSplineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPolarSplineSeriesComponent extends IgxPolarLineSeriesBaseComponent
{

protected createImplementation() : PolarSplineSeries
{
	return new PolarSplineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PolarSplineSeries {
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
