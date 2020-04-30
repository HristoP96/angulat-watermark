import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { CategoryTransitionInMode, CategoryTransitionInMode_$type } from "./CategoryTransitionInMode";
import { IgxAssigningCategoryStyleEventArgs } from "./igx-assigning-category-style-event-args";
import { IgxFinancialEventArgs } from "./igx-financial-event-args";
import { IgxSeriesComponent } from "./igx-series-component";
import { FinancialSeries } from "./FinancialSeries";
import { ensureBool, brushToString, stringToBrush, ensureEnum, toPoint, fromPoint } from "igniteui-core/componentUtil";

/**
 * Represents the base class for all financial indicator and overlay series.
* 
* The `IgxFinancialSeriesComponent` represents the base class for all financial indicator and overlay series.
* 
* ```html
*  <igx-data-chart      
*     #chart
*         [dataSource]="data" >     
*   <igx-category-x-axis       
*         label="label"
*         #xAxis> 
*         </igx-category-x-axis>   
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
*       volumeMemberPath="volume">
* </igx-financial-price-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxFinancialPriceSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* series.volumeMemberPath="volume"; 
* this.chart.series.add(series);
* ```
*/
export const IgxFinancialSeriesComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFinancialSeriesComponent)}];
export abstract class IgxFinancialSeriesComponent extends IgxSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : FinancialSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether the current series is a financial type series.
	*/
	get isFinancial() : boolean {
		return (this.i.isFinancial as boolean);
	}
	/**
	 * Gets or sets the brush to use for negative portions of the series.
	* 
	* The `negativeBrush` property is used to brush the negative portions of the series. 
	* 
	* ```ts
	* series.negativeBrush="red";
	* ```
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	* 	  negativeBrush="red">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	*/
	get negativeBrush() : string {
		return brushToString(this.i.negativeBrush);
	}
	@Input()
	set negativeBrush(v: string) {
		this.i.negativeBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the effective x-axis for the current FinancialSeries object.
	* 
	* Use `xAxis` property to set effective x-axis for the current FinancialSeries object.
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	*       volumeMemberPath="volume">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxFinancialPriceSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.openMemberPath = "open";
	* series.highMemberPath = "high";
	* series.lowMemberPath = "low";
	* series.closeMemberPath = "close";
	* series.volumeMemberPath="volume"; 
	* this.chart.series.add(series);
	* ```
	*/
	get xAxis() : IgxCategoryAxisBaseComponent {
	                                        if (this.i.xAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.xAxis as any).externalObject) {
	                                            let e = IgxCategoryAxisBaseComponent._createFromInternal(this.i.xAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.xAxis;
	                                            }
	                                            (this.i.xAxis as any).externalObject = e;
	                                        }
		return (this.i.xAxis as any).externalObject;
	}
	@Input()
	set xAxis(v: IgxCategoryAxisBaseComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.xAxis = null : this.i.xAxis = v.i;
	}
	/**
	 * Gets or sets the effective y-axis for the current FinancialSeries object.
	* 
	* Use `yAxis` property to set the effective y-axis for the current FinancialSeries object. 
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	*       volumeMemberPath="volume">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxFinancialPriceSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.openMemberPath = "open";
	* series.highMemberPath = "high";
	* series.lowMemberPath = "low";
	* series.closeMemberPath = "close";
	* series.volumeMemberPath="volume"; 
	* this.chart.series.add(series);
	* ```
	*/
	get yAxis() : IgxNumericYAxisComponent {
	                                        if (this.i.yAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.yAxis as any).externalObject) {
	                                            let e = IgxNumericYAxisComponent._createFromInternal(this.i.yAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.yAxis;
	                                            }
	                                            (this.i.yAxis as any).externalObject = e;
	                                        }
		return (this.i.yAxis as any).externalObject;
	}
	@Input()
	set yAxis(v: IgxNumericYAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.yAxis = null : this.i.yAxis = v.i;
	}
	/**
	 * Gets or sets the open mapping property for the current series object.
	* 
	* The `openMemberPath` property is used for open mapping of the current series object. 
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	*       volumeMemberPath="volume">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxFinancialPriceSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.openMemberPath = "open";
	* series.highMemberPath = "high";
	* series.lowMemberPath = "low";
	* series.closeMemberPath = "close";
	* series.volumeMemberPath="volume"; 
	* this.chart.series.add(series);
	* ```
	*/
	get openMemberPath() : string {
		return (this.i.openMemberPath as string);
	}
	@Input()
	set openMemberPath(v: string) {
		this.i.openMemberPath = v;
	}
	/**
	 * Gets or sets the high mapping property for the current series object.
	* 
	* Use `highMemberPath` propert for high mapping of the current series object.
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	*       volumeMemberPath="volume">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxFinancialPriceSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.openMemberPath = "open";
	* series.highMemberPath = "high";
	* series.lowMemberPath = "low";
	* series.closeMemberPath = "close";
	* series.volumeMemberPath="volume"; 
	* this.chart.series.add(series);
	* ```
	*/
	get highMemberPath() : string {
		return (this.i.highMemberPath as string);
	}
	@Input()
	set highMemberPath(v: string) {
		this.i.highMemberPath = v;
	}
	/**
	 * Gets or sets the low mapping property for the current series object.
	* 
	* The `lowMemberPath` is used for low mapping property of the current series object.
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	*       volumeMemberPath="volume">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxFinancialPriceSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.openMemberPath = "open";
	* series.highMemberPath = "high";
	* series.lowMemberPath = "low";
	* series.closeMemberPath = "close";
	* series.volumeMemberPath="volume"; 
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
	 * Gets or sets the close mapping property for the current series object.
	* 
	* Use `closeMemberPath` property for the close mapping of the current series object.
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	*       volumeMemberPath="volume">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxFinancialPriceSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.openMemberPath = "open";
	* series.highMemberPath = "high";
	* series.lowMemberPath = "low";
	* series.closeMemberPath = "close";
	* series.volumeMemberPath="volume"; 
	* this.chart.series.add(series);
	* ```
	*/
	get closeMemberPath() : string {
		return (this.i.closeMemberPath as string);
	}
	@Input()
	set closeMemberPath(v: string) {
		this.i.closeMemberPath = v;
	}
	/**
	 * Gets or sets the volume mapping property for the current series object.
	* 
	* The `volumeMemberPath` property is used for the volume mapping property of the current series object.
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	*       volumeMemberPath="volume">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxFinancialPriceSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.openMemberPath = "open";
	* series.highMemberPath = "high";
	* series.lowMemberPath = "low";
	* series.closeMemberPath = "close";
	* series.volumeMemberPath="volume"; 
	* this.chart.series.add(series);
	* ```
	*/
	get volumeMemberPath() : string {
		return (this.i.volumeMemberPath as string);
	}
	@Input()
	set volumeMemberPath(v: string) {
		this.i.volumeMemberPath = v;
	}
	/**
	 * Gets or sets whether this category series should allow custom style overrides of its individual visuals.
	* 
	* The `isCustomCategoryStyleAllowed` property is used to check if the category series should allow custom style.
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	* 	  isCustomCategoryStyleAllowed="True" />
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.isCustomCategoryStyleAllowed= true;
	* ```
	*/
	get isCustomCategoryStyleAllowed() : boolean {
		return (this.i.isCustomCategoryStyleAllowed as boolean);
	}
	@Input()
	set isCustomCategoryStyleAllowed(v: boolean) {
		this.i.isCustomCategoryStyleAllowed = ensureBool(v);
	}
	/**
	 * Gets or sets the method by which to animate the data into the chart when the chart data source is swapped.
	 * Note: Transitions are not currently supported for stacked series.
	* 
	* The `transitionInMode` property is used to gets or sets the method by which to animate the data into the chart when the chart data source is swapped.
	* 
	* ```ts
	* series.transitionInMode =CategoryTransitionInMode.Auto;
	* ```
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	* 	  transitionInMode= "Auto">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	*/
	get transitionInMode() : CategoryTransitionInMode {
		return this.i.transitionInMode;
	}
	@Input()
	set transitionInMode(v: CategoryTransitionInMode) {
		this.i.transitionInMode = ensureEnum<CategoryTransitionInMode>(CategoryTransitionInMode_$type, v);
	}
	/**
	 * Gets or sets whether the series should transition into the plot area when a new data source is assigned.
	 * Note: Transitions are not currently supported for stacked series.
	* 
	* The `isTransitionInEnabled` property is used to check if the series should transition into the plot area when a new data source is assigned.
	* 
	* ```ts
	* series.isTransitionInEnabled= true;
	* ```
	* 
	* ```html
	*  <igx-data-chart      
	*     #chart
	*         [dataSource]="data" >     
	*   <igx-category-x-axis       
	*         label="label"
	*         #xAxis> 
	*         </igx-category-x-axis>   
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
	* 	  isTransitionInEnabled= "true">
	* </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	*/
	get isTransitionInEnabled() : boolean {
		return (this.i.isTransitionInEnabled as boolean);
	}
	@Input()
	set isTransitionInEnabled(v: boolean) {
		this.i.isTransitionInEnabled = ensureBool(v);
	}
	/**
	 * Overridden by derived series classes to indicate when negative colors are supported or not.
	*/
	get isNegativeColorSupported() : boolean {
		return (this.i.isNegativeColorSupported as boolean);
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.xAxis && (this.xAxis as any)._styling) {
	    (this.xAxis as any)._styling(container, component, this);
	}
	if (this.yAxis && (this.yAxis as any)._styling) {
	    (this.yAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
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
	 * Returns the offset value for this series if grouped on a category axis.
	
	* 
	* The `getOffsetValue` method returns the offset value for this series if grouped on a category axis.  
	* 
	* ```ts
	* number offset= series.getOffsetValue();
	* ```
	*/
	public getOffsetValue() : number {
		let iv = this.i.getOffsetValue();
		return (iv);
	}
	/**
	 * Returns the width of the category grouping this series is in.
	
	* 
	* The `getCategoryWidth` method returns the width of the category grouping this series is in.  
	* 
	* ```ts
	* number width = series.getCategoryWidth();
	* ```
	*/
	public getCategoryWidth() : number {
		let iv = this.i.getCategoryWidth();
		return (iv);
	}
	public getSeriesValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesHighValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesHighValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesLowValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesLowValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesCloseValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesCloseValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesOpenValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesOpenValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesVolumeValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesVolumeValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesHighValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesHighValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesLowValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesLowValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesOpenValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesOpenValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesCloseValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesCloseValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesVolumeValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesVolumeValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	/**
	 * Determine if object can be used as YAxis
	
	* @param axis  * The object to check
	* 
	* Use `canUseAsYAxis` method to determine if the object can be used as YAxis.
	* 
	* ```ts
	*   boolean canY =series.canUseAsYAxis(yAxis);
	* ```
	*/
	public canUseAsYAxis(axis: any) : boolean {
		let iv = this.i.canUseAsYAxis(axis);
		return (iv);
	}
	/**
	 * Determine if object can be used as XAxis
	
	* @param axis  * The object to check
	* 
	* Use `canUseAsXAxis` method to determine if the object can be used as XAxis.
	* 
	* ```ts
	*   boolean canX =series.canUseAsXAxis(xAxis);
	* ```
	*/
	public canUseAsXAxis(axis: any) : boolean {
		let iv = this.i.canUseAsXAxis(axis);
		return (iv);
	}
	/**
	 * Gets the precise item index, if possible, based on the closeness to the previous or next whole integer. If the series cannot provide this information, GetExactItemIndex will return the same integer value as GetItemIndex.
	
	* @param world  * The world position for which to return the index.
	* 
	* The `getExactItemIndex` method gets the precise item index, if possible, based on the closeness to the previous or next whole integer. 
	* 
	* If the series cannot provide this information, GetExactItemIndex will return the same integer value as GetItemIndex.  
	* 
	* ```ts
	* number index = series.getExactItemIndex(world);
	* ```
	*/
	public getExactItemIndex(world: IgPoint) : number {
		let iv = this.i.getExactItemIndex(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the index of the item that resides at the provided world coordinates.
	
	* @param world  * The world coordinates of the requested item.
	* 
	* The `getItemIndex` method gets the index of the item that resides at the provided world coordinates.  
	* 
	* ```ts
	* number itemindex= series.getItemIndex(world);
	* ```
	*/
	public getItemIndex(world: IgPoint) : number {
		let iv = this.i.getItemIndex(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	* 
	* The `getItem` method gets the item that is the best match for the specified world coordinates.
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
	public setNegativeColors(negativeBrush: string, negativeOutline: string) {
		this.i.setNegativeColors(stringToBrush(negativeBrush), stringToBrush(negativeOutline));
	}
	private _assigningCategoryStyle: EventEmitter<{ sender: any, args: IgxAssigningCategoryStyleEventArgs}> = null;
	/**
	 * Event raised when Assigning Category Style
	* 
	* The `AssigningCategoryStyle` event raised when assigning Category Style.
	* 
	* ```ts
	* series.assigningCategoryStyle= this.chart_AssigningCategoryStyle;
	* chart_AssigningCategoryStyle(sender :any,args: AssigningCategoryStyleEventArgs )
	*   {
	* 
	*     
	*   }
	* ```
	*/
	@Output()
	get assigningCategoryStyle(): EventEmitter<{ sender: any, args: IgxAssigningCategoryStyleEventArgs}> {
		if (this._assigningCategoryStyle == null) {
			this._assigningCategoryStyle = new EventEmitter<{sender: any, args: IgxAssigningCategoryStyleEventArgs}>();
			this.i.assigningCategoryStyle = delegateCombine(this.i.assigningCategoryStyle, (o, e) => {
				let outerArgs = new IgxAssigningCategoryStyleEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeAssigningCategoryStyle) {
	                            (this as any).beforeAssigningCategoryStyle(this, outerArgs);
	                        }
					    this._assigningCategoryStyle.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._assigningCategoryStyle;
	}
	private _typical: EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> = null;
	/**
	 * Handle this event in order to perform a custom typical price calculation.
	* 
	* Use `Typical` event to perform a custom typical price calculation.  
	* 
	* ```ts
	* series.typical= this.chart_typical;
	* 
	*   chart_typical(sender :any,args: FinancialEventArgs )
	*   {
	* 
	*     
	*   }
	* ```
	*/
	@Output()
	get typical(): EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> {
		if (this._typical == null) {
			this._typical = new EventEmitter<{sender: any, args: IgxFinancialEventArgs}>();
			this.i.typical = delegateCombine(this.i.typical, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxFinancialEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeTypical) {
	                        (this as any).beforeTypical(this, outerArgs);
	                    }
					this._typical.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._typical;
	}
	private _typicalBasedOn: EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> = null;
	/**
	 * Handle this event in order to specify which columns the Typical price calculation is based on.
	* 
	* Use `TypicalBasedOn` event to specify which columns the Typical price calculation is based on.
	* 
	* ```ts
	*    series.typicalBasedOn= this.chart_typicalBasedOn;
	*     chart_typicalBasedOn(sender :any,args: FinancialEventArgs )
	*   {
	*       
	*   }
	* ```
	*/
	@Output()
	get typicalBasedOn(): EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> {
		if (this._typicalBasedOn == null) {
			this._typicalBasedOn = new EventEmitter<{sender: any, args: IgxFinancialEventArgs}>();
			this.i.typicalBasedOn = delegateCombine(this.i.typicalBasedOn, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxFinancialEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeTypicalBasedOn) {
	                        (this as any).beforeTypicalBasedOn(this, outerArgs);
	                    }
					this._typicalBasedOn.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._typicalBasedOn;
	}
}
