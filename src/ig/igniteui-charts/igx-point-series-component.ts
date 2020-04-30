import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PointSeries } from "./PointSeries";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent point series.
* 
* You can use the `IgxPointSeriesComponent` plot a value along a category or date.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-category-x-axis
* 		label="label"
* 		#xAxis>
*     </igx-category-x-axis
* 		#yAxis>
*     <igx-numeric-y-axis>
*     </igx-numeric-y-axis>
*     <igx-point-series
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		valueMemberPath="coal">
*     </igx-point-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series: IgxPointSeriesComponent = new IgxPointSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.valueMemberPath = "coal";
* this.chart.series.add(series);
* ```
*/
export const IgxPointSeriesComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}];
@Component({
  selector: 'igx-point-series',
  template: ``,
  providers: [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPointSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPointSeriesComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{

protected createImplementation() : PointSeries
{
	return new PointSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PointSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Overridden by derived series classes to indicate when markerless display is preferred or not.
	*/
	get isMarkerlessDisplayPreferred() : boolean {
		return (this.i.isMarkerlessDisplayPreferred as boolean);
	}
}
