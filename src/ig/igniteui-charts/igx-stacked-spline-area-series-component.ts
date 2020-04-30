import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHorizontalStackedSeriesBaseComponent } from "./igx-horizontal-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { StackedSplineAreaSeries } from "./StackedSplineAreaSeries";

/**
 * Represents a IgxDataChartComponent stacked spline area series.
*/
export const IgxStackedSplineAreaSeriesComponent_PROVIDERS = [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}];
@Component({
  selector: 'igx-stacked-spline-area-series',
  template: ``,
  providers: [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStackedSplineAreaSeriesComponent extends IgxHorizontalStackedSeriesBaseComponent
{

protected createImplementation() : StackedSplineAreaSeries
{
	return new StackedSplineAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StackedSplineAreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
