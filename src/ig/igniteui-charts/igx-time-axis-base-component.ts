import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { TimeAxisBase } from "./TimeAxisBase";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents an category-based horizontal X axis that uses a DateTime scale.
* 
* Represents horizontal axis that uses a DateTime scale.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data">
*     <igx-time-x-axis
* 		dateTimeMemberPath="date"
* 		#xAxis>
*     </igx-time-x-axis>
* </igx-data-chart>
* ```
* 
* ```ts
* let xAxis = new IgxTimeXAxisComponent();
* xAxis.dataTimeMemberPath="date";
* this.chart.axes.add(xAxis);
* ```
*/
export const IgxTimeAxisBaseComponent_PROVIDERS = [{provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxTimeAxisBaseComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxTimeAxisBaseComponent)}];
export abstract class IgxTimeAxisBaseComponent extends IgxCategoryAxisBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : TimeAxisBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the DateTime mapping property for the axis.
	* 
	* Use `dateTimeMemberPath` property for DateTime mapping with the axis.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-time-x-axis
	* 		dateTimeMemberPath="date"
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let xAxis = new IgxTimeXAxisComponent();
	* xAxis.dataTimeMemberPath="date";
	* this.chart.axes.add(xAxis);
	* ```
	*/
	get dateTimeMemberPath() : string {
		return (this.i.dateTimeMemberPath as string);
	}
	@Input()
	set dateTimeMemberPath(v: string) {
		this.i.dateTimeMemberPath = v;
	}
	/**
	 * Gets or sets whether the data assigned to the date time axis should be considered pre-sorted by date/time.
	* 
	* Use `isDataPreSorted` property to decide if the data assigned to the date time axis should be considered pre-sorted by date/time.
	*/
	get isDataPreSorted() : boolean {
		return (this.i.isDataPreSorted as boolean);
	}
	@Input()
	set isDataPreSorted(v: boolean) {
		this.i.isDataPreSorted = ensureBool(v);
	}
	/**
	 * Gets the coerced minimum value.
	* 
	* Use `actualMinimumValue` to get the coerced maximum value.
	*/
	get actualMinimumValue() : Date {
		return (this.i.actualMinimumValue as Date);
	}
	@Input()
	set actualMinimumValue(v: Date) {
		this.i.actualMinimumValue = v;
	}
	/**
	 * Gets the coerced maximum value.
	* 
	* Use `actualMaximumValue` to get the  coerced maximum value
	*/
	get actualMaximumValue() : Date {
		return (this.i.actualMaximumValue as Date);
	}
	@Input()
	set actualMaximumValue(v: Date) {
		this.i.actualMaximumValue = v;
	}
	/**
	 * Gets or sets the axis MinimumValue.
	* 
	* Use `minimumValue` property for axis minimum value.
	* 
	* ```ts
	* this.timeXAxis.maximumValue="2019-12-26";
	* ```
	*/
	get minimumValue() : Date {
		return (this.i.minimumValue as Date);
	}
	@Input()
	set minimumValue(v: Date) {
		this.i.minimumValue = v;
	}
	/**
	 * Gets or sets the axis MaximumValue.
	* 
	* Use `maximumValue` property for axis maximum value.
	* 
	* ```ts
	* this.timeXAxis.maximumValue="2019-12-26";
	* ```
	*/
	get maximumValue() : Date {
		return (this.i.maximumValue as Date);
	}
	@Input()
	set maximumValue(v: Date) {
		this.i.maximumValue = v;
	}
	/**
	 * Checks if the axis is of date time axis type
	* 
	* Use `isDateTime` property to Checks if the axis is of date time axis type.
	* 
	* ```ts
	* const isDT = this.timeXAxis.isDateTime;
	* ```
	*/
	get isDateTime() : boolean {
		return (this.i.isDateTime as boolean);
	}
	/**
	 * Checks if axis requires sorting of items
	* 
	* Use `isSorting` property to Checks if axis requires sorting of items.
	* 
	* ```ts
	* const isDT = this.timeXAxis.isDateTime;
	* ```
	*/
	get isSorting() : boolean {
		return (this.i.isSorting as boolean);
	}
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Gets the index of the data item with the value nearest the given value.
	
	* @param unscaledValue  * The value to find a value close to.
	*/
	public getIndexClosestToUnscaledValue(unscaledValue: number) : number {
		let iv = this.i.getIndexClosestToUnscaledValue(unscaledValue);
		return (iv);
	}
	/**
	 * Updates the axis when the data has been changed.
	
	*/
	public notifyDataChanged() {
		this.i.notifyDataChanged();
	}
}
