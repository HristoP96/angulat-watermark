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
import { SplineSeries } from "./SplineSeries";

/**
 * Represents a IgxDataChartComponent spline series.
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
*     <igx-spline-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-spline-series>       
* </igx-data-chart>  
* ```
*/
export const IgxSplineSeriesComponent_PROVIDERS = [{provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}];
@Component({
  selector: 'igx-spline-series',
  template: ``,
  providers: [{provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSplineSeriesComponent extends IgxSplineSeriesBaseComponent
{

protected createImplementation() : SplineSeries
{
	return new SplineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SplineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
