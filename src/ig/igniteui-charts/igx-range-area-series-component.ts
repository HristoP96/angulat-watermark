import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHorizontalRangeCategorySeriesComponent } from "./igx-horizontal-range-category-series-component";
import { IgxRangeCategorySeriesComponent } from "./igx-range-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RangeAreaSeries } from "./RangeAreaSeries";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent range area series.
* 
* The `IgxRangeAreaSeriesComponent` class represents the range area series of the IgxDataChartComponent.
* 
* ```html
* <igx-data-chart
* [dataSource]="data">
* <igx-category-x-axis
* 	label="label"
* 	#xAxis>
* </igx-category-x-axis>
* <igx-numeric-y-axis
* 	#yAxis>
* </igx-numeric-y-axis>
*     <igx-range-area-series
*       [xAxis]="xAxis"
*       [yAxis]="yAxis"    
*       highMemberPath="high"
*       lowMemberPath="low">
*   </igx-range-area-series>  
*     </igx-data-chart> 
* </igx-data-chart>
* ```
* 
* ```ts
* let series: IgxRangeAreaSeriesComponent = new IgxRangeAreaSeriesComponent(); 
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.highMemberPath = "High";
* series.lowMemberPath = "Low";
* this.chart.series.add(series);
* ```
*/
export const IgxRangeAreaSeriesComponent_PROVIDERS = [{provide: IgxHorizontalRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}];
@Component({
  selector: 'igx-range-area-series',
  template: ``,
  providers: [{provide: IgxHorizontalRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRangeAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRangeAreaSeriesComponent extends IgxHorizontalRangeCategorySeriesComponent
{

protected createImplementation() : RangeAreaSeries
{
	return new RangeAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RangeAreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether the current series shows an area or line shape.
	* 
	* Use the `isAreaOrLine` property to check if the current series shows an area or line shape.
	* 
	* ```ts
	* var x= series.isAreaOrLine;
	* ```
	*/
	get isAreaOrLine() : boolean {
		return (this.i.isAreaOrLine as boolean);
	}
}
