import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStackedSplineSeriesComponent } from "./igx-stacked-spline-series-component";
import { IgxHorizontalStackedSeriesBaseComponent } from "./igx-horizontal-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { Stacked100SplineSeries } from "./Stacked100SplineSeries";

/**
 * Represents a IgxDataChartComponent stacked100 spline series.
*/
export const IgxStacked100SplineSeriesComponent_PROVIDERS = [{provide: IgxStackedSplineSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}];
@Component({
  selector: 'igx-stacked-100-spline-series',
  template: ``,
  providers: [{provide: IgxStackedSplineSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStacked100SplineSeriesComponent extends IgxStackedSplineSeriesComponent
{

protected createImplementation() : Stacked100SplineSeries
{
	return new Stacked100SplineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : Stacked100SplineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
