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
import { AreaSeries } from "./AreaSeries";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent area series.
 * Displays trend over time or ordered categories.Useful when there are many data points and the order is important.
* 
* The `IgxAreaSeriesComponent` class represents a IgxDataChartComponent area series.Displays trend over time or ordered categories.
* 
* Useful when there are many data points and the order is important.
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
*     <igx-area-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value"  >
*     </igx-area-series>
* </igx-data-chart>  
* ```
* 
* ```ts
* let series: IgxAreaSeriesComponent = new IgxAreaSeriesComponent(); 
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.valueMemberPath = "Value";
* this.chart.series.add(series);
* ```
*/
export const IgxAreaSeriesComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}];
@Component({
  selector: 'igx-area-series',
  template: ``,
  providers: [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxAreaSeriesComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{

protected createImplementation() : AreaSeries
{
	return new AreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : AreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether the current series shows an area or line shape.
	* 
	* The `isAreaOrLine` is used to check if the current series shows an area or line shape.
	* 
	* ```ts
	* let series: IgxAreaSeriesComponent = new IgxAreaSeriesComponent(); 
	* let x= series.isAreaOrLine;
	* ```
	*/
	get isAreaOrLine() : boolean {
		return (this.i.isAreaOrLine as boolean);
	}
	/**
	 * Determines how unknown values will be plotted on the chart.
	 * Null and Double.NaN are two examples of unknown values.
	* 
	* The `unknownValuePlotting` property is used to determines how unknown values will be plotted on the chart. 
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
	*     <igx-area-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	* 		unknownValuePlotting="DontPlot"  >
	*     </igx-area-series>
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
