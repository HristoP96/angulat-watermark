import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSplineSeriesBaseComponent } from "./igx-spline-series-base-component";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { SplineAreaSeries } from "./SplineAreaSeries";

/**
 * Represents a IgxDataChartComponent spline area series.
* 
* ```html
* <igx-data-chart
*     [dataSource]="data">
*     <igx-category-x-axis
*         label="label"
*         #xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis       
*         #yAxis>
*     </igx-numeric-y-axis>
*     <igx-spline-area-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-spline-area-series>       
* </igx-data-chart>  
* ```
*/
export const IgxSplineAreaSeriesComponent_PROVIDERS = [{provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}];
@Component({
  selector: 'igx-spline-area-series',
  template: ``,
  providers: [{provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSplineAreaSeriesComponent extends IgxSplineSeriesBaseComponent
{

protected createImplementation() : SplineAreaSeries
{
	return new SplineAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SplineAreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
