import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { CategorySeriesMarkerCollisionAvoidance, CategorySeriesMarkerCollisionAvoidance_$type } from "./CategorySeriesMarkerCollisionAvoidance";
import { ConsolidatedItemHitTestBehavior, ConsolidatedItemHitTestBehavior_$type } from "./ConsolidatedItemHitTestBehavior";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { ensureEnum, brushToString, stringToBrush, toPoint } from "igniteui-core/componentUtil";

/**
 * Represents the base class for all IgxDataChartComponent anchored category/value series.
* 
* The `IgxAnchoredCategorySeriesComponent` represents the base class for all IgxDataChartComponent anchored category/value series.
* 
* ```html
* <igx-data-chart [dataSource]="data">
*     <igx-category-x-axis 
*         label="label"
*         #xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis #yAxis>
*     </igx-numeric-y-axis>
*     <igx-column-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value"
*         markerType="circle" >
*     </igx-column-series>
* </igx-data-chart>
* ```
*/
export const IgxAnchoredCategorySeriesComponent_PROVIDERS = [{provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxAnchoredCategorySeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxAnchoredCategorySeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAnchoredCategorySeriesComponent)}];
export abstract class IgxAnchoredCategorySeriesComponent extends IgxCategorySeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : AnchoredCategorySeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the value mapping property for the current series object.
	* 
	* The `valueMemberPath` property is used for the value mapping property of the current series object.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*     <igx-category-x-axis 
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	* 
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value" >
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * Gets or sets the trend type for the current series object.
	* 
	* The `trendLineType` property is used for the current series object's trend type.'
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*     <igx-category-x-axis 
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	* 
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         markerType="circle"
	*         trendLineType="simpleAverage" >
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.trendLineType= "CubicFit";
	* ```
	*/
	get trendLineType() : TrendLineType {
		return this.i.trendLineType;
	}
	@Input()
	set trendLineType(v: TrendLineType) {
		this.i.trendLineType = ensureEnum<TrendLineType>(TrendLineType_$type, v);
	}
	/**
	 * Gets or sets the brush to use to draw the trend line.
	* 
	* The `trendLineBrush` property is used to brush the trend line.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*     <igx-category-x-axis 
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	* 
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         markerType="circle"
	*         trendLineBrush= "grey"	>
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.trendLineBrush="red";
	* ```
	*/
	get trendLineBrush() : string {
		return brushToString(this.i.trendLineBrush);
	}
	@Input()
	set trendLineBrush(v: string) {
		this.i.trendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets the effective TrendLineBrush for this series.
	* 
	* The `actualTrendLineBrush` property is used to gets the effective `trendLineBrush` for this series.
	*/
	get actualTrendLineBrush() : string {
		return brushToString(this.i.actualTrendLineBrush);
	}
	@Input()
	set actualTrendLineBrush(v: string) {
		this.i.actualTrendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the thickness of the current series object's trend line.
	* 
	* The `trendLineThickness` property is used for thickness of the current series object's trend line.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*     <igx-category-x-axis 
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         markerType="circle"
	* 		trendLineThickness= 2  >
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.trendLineThickness= 2;
	* ```
	*/
	get trendLineThickness() : number {
		return (this.i.trendLineThickness as number);
	}
	@Input()
	set trendLineThickness(v: number) {
		this.i.trendLineThickness = +v;
	}
	/**
	 * Gets or sets the trend line period for the current series.
	 * The typical, and initial, value for trend line period is 7.
	* 
	* The `trendLinePeriod` property is used for trend line period of the current series.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*     <igx-category-x-axis 
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	* 
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         markerType="circle"
	*         trendLinePeriod: "7">
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.trendLinePeriod= 7;
	* ```
	*/
	get trendLinePeriod() : number {
		return (this.i.trendLinePeriod as number);
	}
	@Input()
	set trendLinePeriod(v: number) {
		this.i.trendLinePeriod = +v;
	}
	/**
	 * The desired behavior for markers in this series which are placed too close together for the current view, resulting in a collision.
	* 
	* The `markerCollisionAvoidance` property controls the technique the chart uses to avoid overlapping markers.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*     <igx-category-x-axis 
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	* 
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         markerType="circle"
	* 		markerCollisionAvoidance= "fade"	
	*         >
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get markerCollisionAvoidance() : CategorySeriesMarkerCollisionAvoidance {
		return this.i.markerCollisionAvoidance;
	}
	@Input()
	set markerCollisionAvoidance(v: CategorySeriesMarkerCollisionAvoidance) {
		this.i.markerCollisionAvoidance = ensureEnum<CategorySeriesMarkerCollisionAvoidance>(CategorySeriesMarkerCollisionAvoidance_$type, v);
	}
	/**
	 * Determines the item returned in hit-testing when the pointer is over an object which represents several consolidated items.
	* 
	* The `consolidatedItemHitTestBehavior` property is used to determines returned item in hit-testing when the pointer is over an object which represents several consolidated items.
	*/
	get consolidatedItemHitTestBehavior() : ConsolidatedItemHitTestBehavior {
		return this.i.consolidatedItemHitTestBehavior;
	}
	@Input()
	set consolidatedItemHitTestBehavior(v: ConsolidatedItemHitTestBehavior) {
		this.i.consolidatedItemHitTestBehavior = ensureEnum<ConsolidatedItemHitTestBehavior>(ConsolidatedItemHitTestBehavior_$type, v);
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
	* The `scrollIntoView` method is used to notifies the target axis or series that it should scroll the requested data item into view.
	* 
	* ```ts
	* this.series.scrollIntoView(dataItem);
	* ```
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
	/**
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	* 
	* The `getItem` method is used to gets the item that is the best match for the specified world coordinates.
	* 
	* ```ts
	* let item: number = this.series.getItem({x:.5,y:.5});
	* ```
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
}
