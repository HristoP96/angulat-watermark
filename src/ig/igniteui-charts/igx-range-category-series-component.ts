import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RangeCategorySeries } from "./RangeCategorySeries";

/**
 * Represents the base class for all IgxDataChartComponent ranged category/value series.
* 
* The `IgxRangeCategorySeriesComponent` represents the base class for all IgxDataChartComponent ranged category/value series.
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
export const IgxRangeCategorySeriesComponent_PROVIDERS = [{provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeCategorySeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRangeCategorySeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRangeCategorySeriesComponent)}];
export abstract class IgxRangeCategorySeriesComponent extends IgxCategorySeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : RangeCategorySeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the value mapping property for the current series object.
	* 
	* The `lowMemberPath` is used for low mapping property of the current series object.
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
	get lowMemberPath() : string {
		return (this.i.lowMemberPath as string);
	}
	@Input()
	set lowMemberPath(v: string) {
		this.i.lowMemberPath = v;
	}
	/**
	 * Gets or sets the value mapping property for the current series object.
	* 
	* Use `highMemberPath` propert for high mapping of the current series object.
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
	* series.highMemberPath = "high";
	* ```
	*/
	get highMemberPath() : string {
		return (this.i.highMemberPath as string);
	}
	@Input()
	set highMemberPath(v: string) {
		this.i.highMemberPath = v;
	}
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Scrolls the series to display the item for the specified data item.
	 * The series is scrolled by the minimum amount required to place the specified data item within
	 * the central 80% of the visible axis.
	
	* @param item  * The data item (item) to scroll to.
	* 
	* `scrollIntoView` method Scrolls the series to display the item for the specified data item.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
}
