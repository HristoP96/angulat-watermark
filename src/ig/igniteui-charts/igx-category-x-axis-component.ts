import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAxisComponent } from "./igx-axis-component";
import { CategoryXAxis } from "./CategoryXAxis";

/**
 * Represents a IgxDataChartComponent category X axis.
* 
* `IgxCategoryXAxisComponent` class represents a IgxDataChartComponent category X axis.
* 
* ```html
* <igx-data-chart [dataSource]="data">
*   <igx-category-x-axis #xAxis
*     label="label" >
*   </igx-category-x-axis>
*   <igx-numeric-y-axis #yAxis>
*   </igx-numeric-y-axis>
*   <igx-column-series 
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     valueMemberPath="value">
*   </igx-column-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxColumnSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.valueMemberPath="value";
* this.chart.series.add(series);
* ```
*/
export const IgxCategoryXAxisComponent_PROVIDERS = [{provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryXAxisComponent)}];
@Component({
  selector: 'igx-category-x-axis',
  template: ``,
  providers: [{provide: IgxCategoryAxisBaseComponent, useExisting: forwardRef(() => IgxCategoryXAxisComponent)}, {provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryXAxisComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCategoryXAxisComponent extends IgxCategoryAxisBaseComponent
{

protected createImplementation() : CategoryXAxis
{
	return new CategoryXAxis();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CategoryXAxis {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the frequency of displayed labels.
	 * The set value is a factor that determines which labels will be hidden. For example, an interval of 2 will display every other label.
	* 
	* `interval` determines how often to show a label, tickmark, and/or gridline along the x-axis.  Set this property to _n_ to display a label every _nth_ item.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*   <igx-category-x-axis #xAxis
	*     label="label"
	*     interval="3">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-column-series 
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxColumnSeriesComponent();
	* series.xAxis = this.xAxis;
	* xAxis.interval="3";
	* series.yAxis = this.yAxis;
	* 
	* series.valueMemberPath="value";
	* this.chart.series.add(series);
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
	* let effectiveInterval: number = xAxis.actualInterval;
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
	 * Gets or sets the frequency of displayed minor lines.
	 * The set value is a factor that determines how the minor lines will be displayed.
	* 
	* `minorInterval` determines how often to show a minor gridline along the x-axis.  This property is relevant only when the displayed series is a type with grouping, like column series.
	* 
	* `minorInterval` is expressed as a number between 0 and 1, representing the frequency of the interval.  To display minor gridlines representing 10ths of an item width, set `minorInterval` to 0.1.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*   <igx-category-x-axis #xAxis
	*     label="label"
	*     minorInterval="0.1"
	*     minorStroke="green"
	*     minorStrokeThickness="1">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	*   <igx-column-series 
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*   </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxColumnSeriesComponent();
	* series.xAxis = this.xAxis;
	* xAxis.minorInterval="0.1";
	* series.yAxis = this.yAxis;
	* series.valueMemberPath="value";
	* this.chart.series.add(series);
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
	* let effectiveMinorInterval: number = xAxis.actualMinorInterval;
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
	 * Scrolls the specified item into view.
	
	* @param item  * Data item to scroll into view
	*/
	public scrollIntoView(item: any) {
		this.i.scrollIntoView(item);
	}
	public scrollRangeIntoView(minimum: number, maximum: number) {
		this.i.scrollRangeIntoView(minimum, maximum);
	}
}
