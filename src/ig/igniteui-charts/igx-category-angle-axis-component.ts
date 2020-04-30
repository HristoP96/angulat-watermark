import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { CategoryAngleAxis } from "./CategoryAngleAxis";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent category angle axis. Useful for displaying radial categories.
* 
* `IgxCategoryAngleAxisComponent` represents a IgxDataChartComponent category angle axis. Useful for displaying radial categories
* 
* ```html
* <igx-data-chart
*     [dataSource]="dataSource"   >
*     <igx-category-angle-axis name="angleAxis" label="Department" />
*     <igx-numeric-radius-axis name="radiusAxis" />   
*  </igx-data-chart>
* ```
*/
export const IgxCategoryAngleAxisComponent_PROVIDERS = [{provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryAngleAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryAngleAxisComponent)}];
@Component({
  selector: 'igx-category-angle-axis',
  template: ``,
  providers: [{provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryAngleAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryAngleAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCategoryAngleAxisComponent extends IgxCategoryAxisBaseComponent
{

protected createImplementation() : CategoryAngleAxis
{
	return new CategoryAngleAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CategoryAngleAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Checks if the axis is of angular type
	*/
	get isAngular() : boolean {
		return (this.i.isAngular as boolean);
	}
	/**
	 * Indicates the angle in degress that the chart's 0th angle should be offset.
	* 
	* Indicates the angle in degress that the chart's 0th angle should be offset.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="dataSource"   >
	*     <igx-category-angle-axis name="angleAxis" startAngleOffset=30/>
	*     <igx-numeric-radius-axis name="radiusAxis" />   
	*  </igx-data-chart>
	* ```
	*/
	get startAngleOffset() : number {
		return (this.i.startAngleOffset as number);
	}
	@Input()
	set startAngleOffset(v: number) {
		this.i.startAngleOffset = +v;
	}
	/**
	 * Gets or sets the frequency of displayed labels.
	 * The set value is a factor that determines which labels will be hidden. For example, an interval of 2 will display every other label.
	* 
	* Gets or sets the frequency of displayed labels.The set value is a factor that determines which labels will be hidden. 
	* For example, an interval of 2 will display every other label.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="dataSource"   >
	*     <igx-category-angle-axis name="angleAxis" interval =2 />
	*     <igx-numeric-radius-axis name="radiusAxis" />   
	*  </igx-data-chart>
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
	* 
	* Gets or sets the frequency of displayed minor lines. The set value is a factor that determines how the minor lines will be displayed.
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
	* Get the effective value for the current minorInterval. 
	*/
	get actualMinorInterval() : number {
		return (this.i.actualMinorInterval as number);
	}
	@Input()
	set actualMinorInterval(v: number) {
		this.i.actualMinorInterval = +v;
	}
	/**
	 * Gets the scaled angle in radians from the raw axis value.
	
	* @param unscaledAngle  * The raw axis value.
	*/
	public getScaledAngle(unscaledAngle: number) : number {
		let iv = this.i.getScaledAngle(unscaledAngle);
		return (iv);
	}
	/**
	 * Gets the raw axis value from the scaled angle in radians.
	
	*/
	public getUnscaledAngle(scaledAngle: number) : number {
		let iv = this.i.getUnscaledAngle(scaledAngle);
		return (iv);
	}
}
