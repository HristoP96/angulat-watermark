import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAxisComponent } from "./igx-axis-component";
import { NumericAxisBase } from "./NumericAxisBase";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents the base class for all IgxDataChartComponent numeric axes.
*/
export const IgxNumericAxisBaseComponent_PROVIDERS = [{provide: IgxAxisComponent, useExisting: forwardRef(() => IgxNumericAxisBaseComponent)}];
export abstract class IgxNumericAxisBaseComponent extends IgxAxisComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : NumericAxisBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets if the current axis is of numeric axis type
	*/
	get isNumeric() : boolean {
		return (this.i.isNumeric as boolean);
	}
	/**
	 * Gets or sets the MinimumValue property.
	* 
	* Used to set the minimum value of a numeric axis. To get the minimum value in effect on a numeric axis use `actualMinimumValue`.
	* 
	* ```ts
	* this.yAxis.minimumValue = 0;
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis  
	*         minimumValue=0        
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	@Input()
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * Gets the effective minimum value for the current numeric axis object.
	* 
	* ```ts
	* let effectiveMinValue: number = yAxis.actualMinimumValue;
	* ```
	*/
	get actualMinimumValue() : number {
		return (this.i.actualMinimumValue as number);
	}
	@Input()
	set actualMinimumValue(v: number) {
		this.i.actualMinimumValue = +v;
	}
	/**
	 * Gets the effective minimum value for the current numeric axis object.
	* 
	* The `actualVisibleMinimumValue` is used to get the current visible maximum value for the a numeric axis. Note, at times the `actualVisibleMinimumValue` may differ from the `actualMinimumValue`, for example when the chart is zoomed.
	* 
	* ```ts
	* let effectiveVisibleMinValue: number = yAxis.actualVisibleMinimumValue;
	* ```
	*/
	get actualVisibleMinimumValue() : number {
		return (this.i.actualVisibleMinimumValue as number);
	}
	@Input()
	set actualVisibleMinimumValue(v: number) {
		this.i.actualVisibleMinimumValue = +v;
	}
	/**
	 * Gets or sets the MaximumValue property.
	* 
	* Used to set the maximum value of a numeric axis. To get the maximum value in effect on a numeric axis use `actualMaximumValue`.
	* 
	* ```ts
	* this.yAxis.maximumValue = 80;
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis  
	*         maximumValue=80        
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-line-series>
	* </igx-data-chart>
	* ```
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	@Input()
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	/**
	 * Gets the effective maximum value for the current numeric axis object.
	* 
	* ```ts
	* let effectiveMaxValue: number = yAxis.actualMaximumValue;
	* ```
	*/
	get actualMaximumValue() : number {
		return (this.i.actualMaximumValue as number);
	}
	@Input()
	set actualMaximumValue(v: number) {
		this.i.actualMaximumValue = +v;
	}
	/**
	 * Gets the effective visible maximum value for the current numeric axis object.
	* 
	* The `actualVisibleMaximumValue` is used to get the current visible maximum value for the a numeric axis. Note, at times the `actualVisibleMaximumValue` may differ from the `actualMaximumValue`, for example when the chart is zoomed.
	* 
	* ```ts
	* let effectiveVisibleMaxValue: number = yAxis.actualVisibleMaximumValue;
	* ```
	*/
	get actualVisibleMaximumValue() : number {
		return (this.i.actualVisibleMaximumValue as number);
	}
	@Input()
	set actualVisibleMaximumValue(v: number) {
		this.i.actualVisibleMaximumValue = +v;
	}
	/**
	 * Gets or sets the Interval property.
	* 
	* The `interval` is used to get or set the numeric axis major interval which specifies how frequent major gridlines and axis labels are rendered on an axis.
	* 
	* ```ts
	* this.yAxis.interval = 20;
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*       [dataSource]="data">
	*       <igx-category-x-axis
	*         label="label"
	*         #xAxis
	*         >
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis      
	*         interval="20"
	*         #yAxis>
	*       </igx-numeric-y-axis>
	* 
	*       <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*       </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get interval() : number {
		return (this.i.interval as number);
	}
	@Input()
	set interval(v: number) {
		this.i.interval = +v;
	}
	/**
	 * Gets the effective value for the current Interval.
	* 
	* ```ts
	* let effectiveInterval: number = yAxis.actualInterval;
	* ```
	*/
	get actualInterval() : number {
		return (this.i.actualInterval as number);
	}
	@Input()
	set actualInterval(v: number) {
		this.i.actualInterval = +v;
	}
	/**
	 * Gets or sets the MinorInterval property.
	* 
	* The `minorInterval` is used to get or set the numeric axis minor interval which specifies how frequent minor gridlines are rendered on an axis. Please note, in order for minor gridlines to be displayed the following may also need to be set: `MinorStroke`, `MinorStrokeThickness`.
	* 
	* ```ts
	* this.yAxis.minorInterval = 2.5;
	* this.yAxis.minorStroke = 'blue';
	* this.yAxis.minorStrokeThickness = 1;
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis  
	*         minorInterval= 2.5
	*         minorStroke="blue"
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get minorInterval() : number {
		return (this.i.minorInterval as number);
	}
	@Input()
	set minorInterval(v: number) {
		this.i.minorInterval = +v;
	}
	/**
	 * Gets the effective value for the current MinorInterval.
	* 
	* ```ts
	* let effectiveMinorInterval: number = yAxis.actualMinorInterval;
	* ```
	*/
	get actualMinorInterval() : number {
		return (this.i.actualMinorInterval as number);
	}
	@Input()
	set actualMinorInterval(v: number) {
		this.i.actualMinorInterval = +v;
	}
	/**
	 * Gets or sets the ReferenceValue property.
	* 
	* Used to get or set a reference value on a numeric axis which when used with an area, bar, or column series will result in the series shapes being drawn above or below the specified value.
	* 
	* ```ts
	* this.yAxis.referenceValue = 30;
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis  
	*         referenceValue=30        
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get referenceValue() : number {
		return (this.i.referenceValue as number);
	}
	@Input()
	set referenceValue(v: number) {
		this.i.referenceValue = +v;
	}
	/**
	 * Gets or sets the IsLogarithmic property.
	* 
	* `isLogarithmic` is used to get or set whether the numeric axis scaler is in linear or logarithmic mode. For logarithmic scaling, this can be used in conjunction with `logarithmBase` to further define the logarithmic scale.
	* 
	* ```ts
	* this.yAxis.isLogarithmic= true;
	* this.yAxis.logarithmBase = 2;
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*       [dataSource]="data">
	*       <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis  
	*         isLogarithmic=true
	*         logarithmBase=2
	*         #yAxis>
	*       </igx-numeric-y-axis>
	*       <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*       </igx-line-series>
	* </igx-data-chart>
	* ```
	*/
	get isLogarithmic() : boolean {
		return (this.i.isLogarithmic as boolean);
	}
	@Input()
	set isLogarithmic(v: boolean) {
		this.i.isLogarithmic = ensureBool(v);
	}
	/**
	 * Determines if the axis has a valid logarithmic scale.
	* 
	* ```ts
	* let effectiveLogarithmic: boolean = this.yAxis.actualIsLogarithmic
	* ```
	*/
	get actualIsLogarithmic() : boolean {
		return (this.i.actualIsLogarithmic as boolean);
	}
	@Input()
	set actualIsLogarithmic(v: boolean) {
		this.i.actualIsLogarithmic = ensureBool(v);
	}
	/**
	 * Gets or sets the LogarithmBase property.
	* 
	* `logarithmBase` is used to get or set logarithm base when a numeric axis is in Logarithmic scale mode. For logarithmic scaling, this is used in conjunction with `isLogarithmic` or `ScaleMode` to set logarithmic scaling.
	* 
	* ```ts
	* this.yAxis.scaleMode = NumericScaleMode.Logarithmic;
	* this.yAxis.logarithmBase = 2; 
	* ```
	* 
	* ```html
	* <igx-data-chart 
	*       [dataSource]="data">
	*       <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis  
	*         scaleMode="Logarithmic"
	*         logarithmBase=2
	*         #yAxis>
	*       </igx-numeric-y-axis>
	*       <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*       </igx-line-series>
	* </igx-data-chart>
	* ```
	*/
	get logarithmBase() : number {
		return (this.i.logarithmBase as number);
	}
	@Input()
	set logarithmBase(v: number) {
		this.i.logarithmBase = +v;
	}
	/**
	 * Determines if the axis has a user-defined minimum.
	* 
	*  `hasUserMaximum` is used to determine if a numeric axis has a user definied maximum value.
	* 
	* ```ts
	* let hasSetMaximum: boolean = this.yAxis.hasUserMaximum;
	* ```
	*/
	get hasUserMinimum() : boolean {
		return (this.i.hasUserMinimum as boolean);
	}
	/**
	 * Determines if the axis has a user-defined maximum.
	* 
	*  `hasUserMinimum` is used to determine if a numeric axis has a user definied minium value.
	* 
	* ```ts
	* let hasSetMinimum: boolean = this.yAxis.hasUserMinimum;
	* ```
	*/
	get hasUserMaximum() : boolean {
		return (this.i.hasUserMaximum as boolean);
	}
	/**
	 * A boolean indicating whether or not to abbreviate large numbers.
	*/
	get abbreviateLargeNumbers() : boolean {
		return (this.i.abbreviateLargeNumbers as boolean);
	}
	@Input()
	set abbreviateLargeNumbers(v: boolean) {
		this.i.abbreviateLargeNumbers = ensureBool(v);
	}
	/**
	 * Unscales a value from screen space into axis space.
	
	* @param unscaledValue  * The scaled value in screen coordinates to unscale into axis space.
	* 
	* Unscales a value from screen space into axis space.
	* 
	* ```ts
	* let dataValue: number = this.yAxis.unscaleValue(pixel);
	* ```
	*/
	public unscaleValue(unscaledValue: number) : number {
		let iv = this.i.unscaleValue(unscaledValue);
		return (iv);
	}
}
