import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStackedSplineAreaSeriesComponent } from "./igx-stacked-spline-area-series-component";
import { IgxHorizontalStackedSeriesBaseComponent } from "./igx-horizontal-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { Stacked100SplineAreaSeries } from "./Stacked100SplineAreaSeries";

/**
 * Represents a IgxDataChartComponent stacked100 spline area series.
*/
export const IgxStacked100SplineAreaSeriesComponent_PROVIDERS = [{provide: IgxStackedSplineAreaSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}];
@Component({
  selector: 'igx-stacked-100-spline-area-series',
  template: ``,
  providers: [{provide: IgxStackedSplineAreaSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100SplineAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStacked100SplineAreaSeriesComponent extends IgxStackedSplineAreaSeriesComponent
{

protected createImplementation() : Stacked100SplineAreaSeries
{
	return new Stacked100SplineAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : Stacked100SplineAreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
