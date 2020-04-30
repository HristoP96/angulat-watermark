import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IndicatorDisplayType, IndicatorDisplayType_$type } from "./IndicatorDisplayType";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { FinancialIndicator } from "./FinancialIndicator";
import { ensureEnum, brushToString, stringToBrush, toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents the base functionality for a IgxDataChartComponent financial indicator series.
* 
* The `IgxFinancialIndicatorComponent` class represents the base functionality for a IgxDataChartComponent financial indicator series.
* 
* ```html
* <igx-data-chart  #chart 
*     [dataSource]="data" >     
* <igx-ordinal-time-x-axis    
*     label="label"
*     #xAxis>
*     </igx-ordinal-time-x-axis>
*  <igx-numeric-y-axis
*     minimumValue="0"
*     #yAxis>
*     </igx-numeric-y-axis>     
* <igx-mass-index-indicator    
* [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"
*     closeMemberPath="close"
*     volumeMemberPath="volume"   >
*     </igx-mass-index-indicator >
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxMassIndexIndicatorComponent();
*    series.xAxis = this.xAxis;
*    series.yAxis = this.yAxis;
*    series.openMemberPath = "open";
*    series.highMemberPath = "high";
*    series.lowMemberPath = "low";
*    series.closeMemberPath = "close";
*    this.chart.series.add(series);
*    
* ```
*/
export const IgxFinancialIndicatorComponent_PROVIDERS = [{provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFinancialIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFinancialIndicatorComponent)}];
export abstract class IgxFinancialIndicatorComponent extends IgxFinancialSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : FinancialIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the display for the current FinancialIndicator object.
	* 
	* The `displayType` property is used to display the current FinancialIndicator object.
	* 
	* ```ts
	* series.displayType= IndicatorDisplayType.Column;
	* ```
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data" >     
	* <igx-ordinal-time-x-axis    
	*     label="label"
	*     #xAxis>
	*     </igx-ordinal-time-x-axis>
	*  <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	* <igx-mass-index-indicator    
	* [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume"
	* 	displayType="Column"   >
	*     </igx-mass-index-indicator >
	* </igx-data-chart>
	* ```
	*/
	get displayType() : IndicatorDisplayType {
		return this.i.displayType;
	}
	@Input()
	set displayType(v: IndicatorDisplayType) {
		this.i.displayType = ensureEnum<IndicatorDisplayType>(IndicatorDisplayType_$type, v);
	}
	/**
	 * Gets or sets the number of values to hide at the beginning of the indicator.
	* 
	* Use the `ignoreFirst` propert to hide the number of values at the beginning of the indicator.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data" >     
	* <igx-ordinal-time-x-axis    
	*     label="label"
	*     #xAxis>
	*     </igx-ordinal-time-x-axis>
	*  <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	* <igx-mass-index-indicator    
	* [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume"
	* 	ignoreFirst="2" >
	*     </igx-mass-index-indicator >
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.ignoreFirst  = 2;
	* ```
	*/
	get ignoreFirst() : number {
		return (this.i.ignoreFirst as number);
	}
	@Input()
	set ignoreFirst(v: number) {
		this.i.ignoreFirst = +v;
	}
	/**
	 * Gets or sets the trend type for the current indicator series.
	* 
	* Use `trendLineType` property to get the trend type for the current indicator series.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*    <igx-ordinal-time-x-axis    
	*     label="label"
	*     #xAxis>
	*     </igx-ordinal-time-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-mass-index-indicator
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         openMemberPath="open"
	*         highMemberPath="high"
	*         lowMemberPath="low"
	*         closeMemberPath="close"
	* 		trendLineType="CubicFit">
	*     </igx-mass-index-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.trendLineType= TrendLineType.CubicFit;
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
	* Use the `trendLineBrush` propert to draw the trend line.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data" >     
	* <igx-ordinal-time-x-axis    
	*     label="label"
	*     #xAxis>
	*     </igx-ordinal-time-x-axis>
	*  <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	* <igx-mass-index-indicator    
	* [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume"
	* 	trendLineBrush="Red">
	*     </igx-mass-index-indicator >
	* </igx-data-chart>
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
	 * Gets the effective TrendLineBrush for this indicator.
	* 
	* Use the `actualTrendLineBrush` property to Gets the effective TrendLineBrush for the FinancialIndicator.
	*/
	get actualTrendLineBrush() : string {
		return brushToString(this.i.actualTrendLineBrush);
	}
	@Input()
	set actualTrendLineBrush(v: string) {
		this.i.actualTrendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the thickness of the current indicator object's trend line.
	* 
	* Use `trendLineThickness` property for the thickness of the current indicator object's trend line.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data" >     
	* <igx-ordinal-time-x-axis    
	*     label="label"
	*     #xAxis>
	*     </igx-ordinal-time-x-axis>
	*  <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	* <igx-mass-index-indicator    
	* [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume" 
	* 	trendLineThickness="2" >
	*     </igx-mass-index-indicator >
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	*  series.trendLineThickness=2 ;
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
	* Use `trendLinePeriod` property for the trend line period of the current series.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data" >     
	* <igx-ordinal-time-x-axis    
	*     label="label"
	*     #xAxis>
	*     </igx-ordinal-time-x-axis>
	*  <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	* <igx-mass-index-indicator    
	* [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume" 
	* 	trendLinePeriod="30" >
	*     </igx-mass-index-indicator >
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.trendLinePeriod  =30;
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
	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinate for which to get a value bounding box for
	* 
	* The `getSeriesValueBoundingBox` method returns the best available value bounding box within the series that has the best value match for the world position provided.
	*/
	public getSeriesValueBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getPreviousOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getPreviousOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getNextOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getNextOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	/**
	 * Scrolls the series to display the item for the specified data item.
	 * The series is scrolled by the minimum amount required to place the specified data item within
	 * the central 80% of the visible axis.
	
	* @param item  * The data item (item) to scroll to.
	* 
	* The `scrollIntoView` method scrolls the series to display the item for the specified data item.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
}
