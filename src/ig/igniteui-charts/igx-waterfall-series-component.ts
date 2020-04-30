import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { WaterfallSeries } from "./WaterfallSeries";
import { ensureBool, brushToString, stringToBrush, toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent waterfall column series.
* 
* `IgxWaterfallSeriesComponent` belongs to a group of `IgxCategorySeriesComponent` and it is rendered using a collection of vertical columns that show the difference between consecutive data points.
* 
* ```html
* <igx-data-chart
*     [dataSource]="data">
*     <igx-category-x-axis #xAxis
*         label="label">
*     </igx-category-x-axis>
*     <igx-numeric-y-axis #yAxis>
*     </igx-numeric-y-axis>
*     <igx-waterfall-series
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-waterfall-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series: IgxWaterfallSeriesComponent = new IgxWaterfallSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.valueMemberPath = "value";
* this.chart.series.add(series);
* ```
*/
export const IgxWaterfallSeriesComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}];
@Component({
  selector: 'igx-waterfall-series',
  template: ``,
  providers: [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxWaterfallSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxWaterfallSeriesComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{

protected createImplementation() : WaterfallSeries
{
	return new WaterfallSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : WaterfallSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Overridden by derived series classes to indicate when negative colors are supported or not.
	*/
	get isNegativeColorSupported() : boolean {
		return (this.i.isNegativeColorSupported as boolean);
	}
	/**
	 * Gets or sets the brush to use for negative portions of the series.
	* 
	* Gets or sets the color used to draw negative declines in values for this `IgxWaterfallSeriesComponent`.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis #xAxis
	*         label="label">
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-waterfall-series
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         negativeBrush="#ff0000"
	*         valueMemberPath="value">
	*     </igx-waterfall-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath = "value";
	* series.negativeBrush = "#ff0000";
	* this.chart.series.add(series);
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
	 * Gets or sets the x-radius of the ellipse that is used to round the corners of the column.
	* 
	* Gets or sets the amount to round corners in the direction of the X axis in this series.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis #xAxis
	*         label="label">
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-waterfall-series
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         radiusX="15"
	*         radiusY="15"
	*         valueMemberPath="value">
	*     </igx-waterfall-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath = "value";
	* series.radiusX = 15;
	* series.radiusY = 15;
	* this.chart.series.add(series);
	* ```
	*/
	get radiusX() : number {
		return (this.i.radiusX as number);
	}
	@Input()
	set radiusX(v: number) {
		this.i.radiusX = +v;
	}
	/**
	 * Gets or sets the y-radius of the ellipse that is used to round the corners of the column.
	* 
	* Gets or sets the amount to round corners in the direction of the Y axis in this series.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis #xAxis
	*         label="label">
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-waterfall-series
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         radiusX="15"
	*         radiusY="15"
	*         valueMemberPath="value">
	*     </igx-waterfall-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath = "value";
	* series.radiusX = 15;
	* series.radiusY = 15;
	* this.chart.series.add(series);
	* ```
	*/
	get radiusY() : number {
		return (this.i.radiusY as number);
	}
	@Input()
	set radiusY(v: number) {
		this.i.radiusY = +v;
	}
	/**
	 * Brush to use for outlining negative elements in the waterfall series.
	* 
	* Gets or sets the color used to draw borders of negative declines in values for this `IgxWaterfallSeriesComponent`.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis #xAxis
	*         label="label">
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-waterfall-series
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         negativeOutline="#ff0000"
	*         valueMemberPath="value">
	*     </igx-waterfall-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath = "value";
	* series.negativeOutline = "#ff0000";
	* this.chart.series.add(series);
	* ```
	*/
	get negativeOutline() : string {
		return brushToString(this.i.negativeOutline);
	}
	@Input()
	set negativeOutline(v: string) {
		this.i.negativeOutline = stringToBrush(v);
	}
	public setNegativeColors(negativeBrush: string, negativeOutline: string) {
		this.i.setNegativeColors(stringToBrush(negativeBrush), stringToBrush(negativeOutline));
	}
	/**
	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinate for which to get a value bounding box for
	* 
	* Returns a bounding box `Rect` for a data value given a `Point`.
	* 
	* ```ts
	* let box : IgxRect = series.getSeriesValueBoundingBox({x: 4, y: 7});
	* ```
	*/
	public getSeriesValueBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	/**
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	* 
	* Returns the width of items in the `IgxWaterfallSeriesComponent`.
	* 
	* ```ts
	* let itemSpan: number = series.GetItemSpan();
	* ```
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
