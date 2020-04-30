import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHorizontalRangeCategorySeriesComponent } from "./igx-horizontal-range-category-series-component";
import { IgxRangeCategorySeriesComponent } from "./igx-range-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RangeColumnSeries } from "./RangeColumnSeries";
import { toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent range column series.
* 
* The `IgxRangeColumnSeriesComponent` class represents range column series of the IgxDataChartComponent.
* 
* ```html
* <igx-data-chart  #chart 
*     [dataSource]="data">
*     <igx-category-x-axis
*     label="label"
*     #xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
*     minimumValue="0"
*     #yAxis>
*     </igx-numeric-y-axis>
*     <igx-range-column-series
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"    
*     highMemberPath="high"
*     lowMemberPath="low">
* </igx-range-column-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxRangeColumnSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* this.chart.series.add(series);
* ```
*/
export const IgxRangeColumnSeriesComponent_PROVIDERS = [{provide: IgxHorizontalRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}];
@Component({
  selector: 'igx-range-column-series',
  template: ``,
  providers: [{provide: IgxHorizontalRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRangeColumnSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRangeColumnSeriesComponent extends IgxHorizontalRangeCategorySeriesComponent
{

protected createImplementation() : RangeColumnSeries
{
	return new RangeColumnSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RangeColumnSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the x-radius of the ellipse that is used to round the corners of the column.
	* 
	* Use the `radiusX` property to round the corners of the column.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data"
	*     >
	*     <igx-category-x-axis
	*     label="label"
	*     #xAxis
	*     >
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	*     <igx-range-column-series
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"    
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     radiusX="10">
	* </igx-range-column-series>  
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.radiusX=10;
	* ```
	*/
	get radiusX() : number {
		return (this.i.radiusX as number);
	}
	@Input()
	set radiusX(v: number) {
		this.i.radiusX = +v;
	}
	/**
	 * Gets or sets the y-radius of the ellipse that is used to round the corners of the column.
	* 
	* Use the `radiusY` property for the y-radius of the ellipse that is used to round the corners of the column.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data"
	*     >
	*     <igx-category-x-axis
	*     label="label"
	*     #xAxis
	*     >
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	*     <igx-range-column-series
	*       
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"    
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     radiusY= "10">
	* </igx-range-column-series>  
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.radiusY=10;
	* ```
	*/
	get radiusY() : number {
		return (this.i.radiusY as number);
	}
	@Input()
	set radiusY(v: number) {
		this.i.radiusY = +v;
	}
	/**
	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinate for which to get a value bounding box for
	* 
	* The `getSeriesValueBoundingBox` method return the best available value of the bounding box within the series.
	* 
	* ```ts
	* series.getSeriesValueBoundingBox(world :IgxPoint) : IgxRect
	* ```
	*/
	public getSeriesValueBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	/**
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	* 
	* The `getItemSpan` method returns the current width of the items within the categories. 
	* 
	* ```ts
	* var x =series.getItemSpan();
	* ```
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
