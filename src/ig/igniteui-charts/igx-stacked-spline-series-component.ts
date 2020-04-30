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
import { StackedSplineSeries } from "./StackedSplineSeries";

/**
 * Represents a IgxDataChartComponent stacked spline series.
*/
export const IgxStackedSplineSeriesComponent_PROVIDERS = [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}];
@Component({
  selector: 'igx-stacked-spline-series',
  template: ``,
  providers: [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedSplineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStackedSplineSeriesComponent extends IgxHorizontalStackedSeriesBaseComponent
{

protected createImplementation() : StackedSplineSeries
{
	return new StackedSplineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StackedSplineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
