import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { PriceDisplayType, PriceDisplayType_$type } from "./PriceDisplayType";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { FinancialPriceSeries } from "./FinancialPriceSeries";
import { ensureEnum, brushToString, stringToBrush, toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent financial price series that renders as Candlestick or OHLC representations.
 * Default required members: Open, Low, High, Close
* 
* The `IgxFinancialPriceSeriesComponent` class represents a IgxDataChartComponent financial price series that renders as Candlestick or OHLC representations.
* 
* ```html
*  <igx-data-chart    
*     #chart
*         [dataSource]="data" >     
*  <igx-ordinal-time-x-axis
*     dateTimeMemberPath="TimeStamp"
*     #xAxis >
*     </igx-ordinal-time-x-axis>  
*  <igx-numeric-y-axis
*         minimumValue="0"
*         #yAxis>
* </igx-numeric-y-axis>  
* <igx-financial-price-series
*     [xAxis]="xAxis"
*       [yAxis]="yAxis"
*       openMemberPath="open"
*       highMemberPath="high"
*       lowMemberPath="low"      
*       closeMemberPath="close"
*       volumeMemberPath="volume"      
*       >
* </igx-financial-price-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxFinancialPriceSeriesComponent();
*    series.xAxis = this.xAxis;
*    series.yAxis = this.yAxis;
*    series.openMemberPath = "open";
*    series.highMemberPath = "high";
*    series.lowMemberPath = "low";
*    series.closeMemberPath = "close";
*    series.volumeMemberPath="volume"; 
*    this.chart.series.add(series);
* ```
*/
export const IgxFinancialPriceSeriesComponent_PROVIDERS = [{provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFinancialPriceSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFinancialPriceSeriesComponent)}];
@Component({
  selector: 'igx-financial-price-series',
  template: ``,
  providers: [{provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFinancialPriceSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFinancialPriceSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxFinancialPriceSeriesComponent extends IgxFinancialSeriesComponent
{

protected createImplementation() : FinancialPriceSeries
{
	return new FinancialPriceSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : FinancialPriceSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the trend type for the current financial series.
	* 
	* Use the `trendLineType` property for the trend type of the current financial series.
	* 
	* ```ts
	* series.trendLineType= "CubicFit";
	* ```
	* 
	* ```html
	*  <igx-data-chart    
	*     #chart
	*         [dataSource]="data" >     
	*  <igx-ordinal-time-x-axis
	*     dateTimeMemberPath="TimeStamp"
	*     #xAxis >
	*     </igx-ordinal-time-x-axis>  
	*  <igx-numeric-y-axis
	*         minimumValue="0"
	*         #yAxis>
	* </igx-numeric-y-axis>  
	* <igx-financial-price-series
	*     [xAxis]="xAxis"
	*       [yAxis]="yAxis"
	*       openMemberPath="open"
	*       highMemberPath="high"
	*       lowMemberPath="low"      
	*       closeMemberPath="close"
	*       volumeMemberPath="volume"      
	*       trendLineType="CubicFit">
	* </igx-financial-price-series>
	* </igx-data-chart>
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
	* Use the `trendLineBrush` property to brush the the trend line.
	* 
	* ```ts
	* series.trendLineBrush="red";
	* ```
	* 
	* ```html
	*  <igx-data-chart    
	*     #chart
	*         [dataSource]="data" >     
	*  <igx-ordinal-time-x-axis
	*     dateTimeMemberPath="TimeStamp"
	*     #xAxis >
	*     </igx-ordinal-time-x-axis>  
	*  <igx-numeric-y-axis
	*         minimumValue="0"
	*         #yAxis>
	* </igx-numeric-y-axis>  
	* <igx-financial-price-series
	*     [xAxis]="xAxis"
	*       [yAxis]="yAxis"
	*       openMemberPath="open"
	*       highMemberPath="high"
	*       lowMemberPath="low"      
	*       closeMemberPath="close"
	*       volumeMemberPath="volume"      
	*      trendLineBrush="red" >
	* </igx-financial-price-series>
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
	 * Gets the effective TrendLineBrush for this FinancialPriceSeries.
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
	 * Gets or sets the thickness of the current FinancialPriceSeries object's trend line.
	* 
	* Use the `trendLineThickness` property for the thickness of the current FinancialPriceSeries object's trend line.
	* 
	* ```ts
	* series.trendLineThickness=5;
	* ```
	* 
	* ```html
	*  <igx-data-chart    
	*     #chart
	*         [dataSource]="data" >     
	*  <igx-ordinal-time-x-axis
	*     dateTimeMemberPath="TimeStamp"
	*     #xAxis >
	*     </igx-ordinal-time-x-axis>  
	*  <igx-numeric-y-axis
	*         minimumValue="0"
	*         #yAxis>
	* </igx-numeric-y-axis>  
	* <igx-financial-price-series
	*     [xAxis]="xAxis"
	*       [yAxis]="yAxis"
	*       openMemberPath="open"
	*       highMemberPath="high"
	*       lowMemberPath="low"      
	*       closeMemberPath="close"
	*       volumeMemberPath="volume"      
	*       trendLineThickness="3">
	* </igx-financial-price-series>
	* </igx-data-chart>
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
	* Use the `trendLinePeriod` property for the periodo the the current series.
	* 
	* ```ts
	* series.trendLinePeriod= 7;
	* ```
	* 
	* ```html
	*  <igx-data-chart    
	*     #chart
	*         [dataSource]="data" >     
	*  <igx-ordinal-time-x-axis
	*     dateTimeMemberPath="TimeStamp"
	*     #xAxis >
	*     </igx-ordinal-time-x-axis>  
	*  <igx-numeric-y-axis
	*         minimumValue="0"
	*         #yAxis>
	* </igx-numeric-y-axis>  
	* <igx-financial-price-series
	*     [xAxis]="xAxis"
	*       [yAxis]="yAxis"
	*       openMemberPath="open"
	*       highMemberPath="high"
	*       lowMemberPath="low"      
	*       closeMemberPath="close"
	*       volumeMemberPath="volume"      
	*       trendLinePeriod="7">
	* </igx-financial-price-series>
	* </igx-data-chart>
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
	 * Gets or sets the display type for the current FinancialPriceSeries object.
	* 
	* Use the `displayType` property for the display type of the current FinancialPriceSeries object.
	* 
	* ```html
	*  <igx-data-chart    
	*     #chart
	*         [dataSource]="data" >     
	*  <igx-ordinal-time-x-axis
	*     dateTimeMemberPath="TimeStamp"
	*     #xAxis >
	*     </igx-ordinal-time-x-axis>  
	*  <igx-numeric-y-axis
	*         minimumValue="0"
	*         #yAxis>
	* </igx-numeric-y-axis>  
	* <igx-financial-price-series
	*     [xAxis]="xAxis"
	*       [yAxis]="yAxis"
	*       openMemberPath="open"
	*       highMemberPath="high"
	*       lowMemberPath="low"      
	*       closeMemberPath="close"
	*       volumeMemberPath="volume"      
	*       displayType="Candlestick">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.displayType=PriceDisplayType.Candlestick;
	* ```
	*/
	get displayType() : PriceDisplayType {
		return this.i.displayType;
	}
	@Input()
	set displayType(v: PriceDisplayType) {
		this.i.displayType = ensureEnum<PriceDisplayType>(PriceDisplayType_$type, v);
	}
	/**
	 * Brush to use for outlining negative elements in the series.
	* 
	* Use the `negativeOutline` property to brush the outline negative elements in the series.
	* 
	* ```ts
	* series.negativeOutline="red";
	* ```
	* 
	* ```html
	*  <igx-data-chart    
	*     #chart
	*         [dataSource]="data" >     
	*  <igx-ordinal-time-x-axis
	*     dateTimeMemberPath="TimeStamp"
	*     #xAxis >
	*     </igx-ordinal-time-x-axis>  
	*  <igx-numeric-y-axis
	*         minimumValue="0"
	*         #yAxis>
	* </igx-numeric-y-axis>  
	* <igx-financial-price-series
	*     [xAxis]="xAxis"
	*       [yAxis]="yAxis"
	*       openMemberPath="open"
	*       highMemberPath="high"
	*       lowMemberPath="low"      
	*       closeMemberPath="close"
	*       volumeMemberPath="volume"      
	*       negativeOutline="Red" >
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	*/
	get negativeOutline() : string {
		return brushToString(this.i.negativeOutline);
	}
	@Input()
	set negativeOutline(v: string) {
		this.i.negativeOutline = stringToBrush(v);
	}
	/**
	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinate for which to get a value bounding box for
	* 
	* The `getSeriesValueBoundingBox` method return the best available value bounding box within the series that has the best value match for the world position provided.  
	*/
	public getSeriesValueBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	/**
	 * Scrolls the series to display the item for the specified data item.
	 * The categorySeries is scrolled by the minimum amount required to place the specified data item within
	 * the central 80% of the visible axis.
	
	* @param item  * The data item (item) to scroll to.
	* 
	* The `scrollIntoView` methos scrolls the series to display the item for the specified data item.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
	/**
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	* 
	* The `getItemSpan` method is used For a category plotted series, returns the current width of the items within the categories. 
	* 
	* This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
	public setNegativeColors(negativeBrush: string, negativeOutline: string) {
		this.i.setNegativeColors(stringToBrush(negativeBrush), stringToBrush(negativeOutline));
	}
}
