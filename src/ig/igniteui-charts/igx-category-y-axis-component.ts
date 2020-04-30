import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { CategoryYAxis } from "./CategoryYAxis";
import { ensureBool, toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent category Y axis.
*/
export const IgxCategoryYAxisComponent_PROVIDERS = [{provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryYAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryYAxisComponent)}];
@Component({
  selector: 'igx-category-y-axis',
  template: ``,
  providers: [{provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryYAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryYAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCategoryYAxisComponent extends IgxCategoryAxisBaseComponent
{

protected createImplementation() : CategoryYAxis
{
	return new CategoryYAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CategoryYAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets if the current axis is a vertical axis.
	*/
	get isVertical() : boolean {
		return (this.i.isVertical as boolean);
	}
	/**
	 * Gets or sets the frequency of displayed labels.
	 * The set value is a factor that determines which labels will be hidden. For example, an interval of 2 will display every other label.
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
	public getCategoryBoundingBox(point: IgPoint, useInterpolation: boolean, singularWidth: number) : IgRect {
		let iv = this.i.getCategoryBoundingBox(toPoint(point), useInterpolation, singularWidth);
		return fromRect(iv);
	}
	public scrollRangeIntoView(minimum: number, maximum: number) {
		this.i.scrollRangeIntoView(minimum, maximum);
	}
	/**
	 * Scrolls the specified item into view.
	
	* @param item  * Data item to scroll into view
	*/
	public scrollIntoView(item: any) {
		this.i.scrollIntoView(item);
	}
}
