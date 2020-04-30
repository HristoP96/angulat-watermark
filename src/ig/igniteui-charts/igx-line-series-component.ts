import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { LineSeries } from "./LineSeries";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent line series.
 * Displays trend over time or ordered categories.Useful when there are many data points and the order is important.
* 
* `IgxLineSeriesComponent` belongs to a group of `IgxCategorySeriesComponent` and it is rendered using a collection of points connected by straight line segments. 
* 
* ```html
*  <igx-data-chart 
*     [dataSource]="data">
*     <igx-category-x-axis
*         label="label"
*         #xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis       
*         #yAxis>
*     </igx-numeric-y-axis>
*     <igx-line-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-line-series>
* </igx-data-chart> 
* ```
* 
* ```ts
* let series: IgxLineSeriesComponent = new IgxLineSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.valueMemberPath = "value";
* this.chart.series.add(series);
* ```
*/
export const IgxLineSeriesComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}];
@Component({
  selector: 'igx-line-series',
  template: ``,
  providers: [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxLineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxLineSeriesComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{

protected createImplementation() : LineSeries
{
	return new LineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : LineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether the current series shows an area or line shape.
	* 
	* Gets whether the `IgxSeriesComponent` shows an area or a line shape.
	* 
	* ```ts
	* let isAreaOrLine: boolean = series.isAreaOrLine;
	* ```
	*/
	get isAreaOrLine() : boolean {
		return (this.i.isAreaOrLine as boolean);
	}
	/**
	 * Determines how unknown values will be plotted on the chart.
	 * Null and Double.NaN are two examples of unknown values.
	* 
	* Determines how unknown values will be plotted for the `IgxSeriesComponent`. This can be set to `LinearInterpolate` to create a continous shape or `DontPlot` to create breaks in the series.
	* 
	* Null and Double.NaN are two examples of unknown values.
	* 
	* ```html
	* <igx-data-chart #chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-line-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         unknownValuePlotting="LinearInterpolate">
	*     </igx-line-series>
	* </igx-data-chart> 
	* ```
	* 
	* ```ts
	* series.unknownValuePlotting = UnknownValuePlotting.LinearInterpolate;
	* ```
	*/
	get unknownValuePlotting() : UnknownValuePlotting {
		return this.i.unknownValuePlotting;
	}
	@Input()
	set unknownValuePlotting(v: UnknownValuePlotting) {
		this.i.unknownValuePlotting = ensureEnum<UnknownValuePlotting>(UnknownValuePlotting_$type, v);
	}
}
