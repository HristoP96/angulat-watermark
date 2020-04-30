import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { TimeAxisDisplayType, TimeAxisDisplayType_$type } from "./TimeAxisDisplayType";
import { IgxTimeAxisBaseComponent } from "./igx-time-axis-base-component";
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { CategoryDateTimeXAxis } from "./CategoryDateTimeXAxis";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a category-based horizontal X axis that uses a DateTime scale.
* 
* `IgxCategoryDateTimeXAxisComponent` class represents a category-based horizontal X axis that uses a DateTime scale.
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
export const IgxCategoryDateTimeXAxisComponent_PROVIDERS = [{provide: IgxTimeAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryDateTimeXAxisComponent)}, {provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryDateTimeXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryDateTimeXAxisComponent)}];
@Component({
  selector: 'igx-category-date-time-x-axis',
  template: ``,
  providers: [{provide: IgxTimeAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryDateTimeXAxisComponent)}, {provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryDateTimeXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryDateTimeXAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCategoryDateTimeXAxisComponent extends IgxTimeAxisBaseComponent
{

protected createImplementation() : CategoryDateTimeXAxis
{
	return new CategoryDateTimeXAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CategoryDateTimeXAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets if the current axis is a continuous rather than a discrete scale
	*/
	get isContinuous() : boolean {
		return (this.i.isContinuous as boolean);
	}
	/**
	 * Gets or sets the axis display type. 
	 * Continuous display type divides the axis into even intervals, where labels will not necessarily be aligned with data points.
	 * Discrete display type will not use a constant interval, but will align each label with its data point.
	* 
	* `displayType` property is used for axis display type. 
	* 
	* Continuous display type divides the axis into even intervals, where labels will not necessarily be aligned with data points. Discrete display type will not use a constant interval, but will align each label with its data point.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-time-x-axis
	* 		dateTimeMemberPath="date"
	* 		displayType ="continuous"
	* 		#xAxis>
	*     </igx-time-x-axis>
	* </igx-data-chart>
	* ```
	*/
	get displayType() : TimeAxisDisplayType {
		return this.i.displayType;
	}
	@Input()
	set displayType(v: TimeAxisDisplayType) {
		this.i.displayType = ensureEnum<TimeAxisDisplayType>(TimeAxisDisplayType_$type, v);
	}
	/**
	 * Gets or sets the X axis time interval.
	* 
	* `interval` property is used to get/sets the frequency of displayed labels.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     <igx-time-x-axis
	* 		dateTimeMemberPath="date"
	* 		interval=2
	* 		#xAxis>
	*     </igx-time-x-axis>
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
	*/
	get actualInterval() : number {
		return (this.i.actualInterval as number);
	}
	@Input()
	set actualInterval(v: number) {
		this.i.actualInterval = +v;
	}
	/**
	 * Gets or sets the frequency of displayed minor lines.
	 * The set value is a factor that determines how the minor lines will be displayed.
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
	*/
	get actualMinorInterval() : number {
		return (this.i.actualMinorInterval as number);
	}
	@Input()
	set actualMinorInterval(v: number) {
		this.i.actualMinorInterval = +v;
	}
	/**
	 * Gets if the current axis is of category date time axis type
	*/
	get isCategoryDateTime() : boolean {
		return (this.i.isCategoryDateTime as boolean);
	}
	public scrollIntoView(minimum: Date, maximum: Date) {
		this.i.scrollIntoView(minimum, maximum);
	}
}
