import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { AverageTrueRangeIndicator } from "./AverageTrueRangeIndicator";

/**
 * Represents a IgxDataChartComponent Average True Range indicator series.
 * Default required members: High, Low, Close
* 
* You can use the `IgxAverageTrueRangeIndicatorComponent` to measures a security's degree of price movement or volatility within a given period of time.
* 
* ```html
* <igx-data-chart 
* 	#chart
*     [dataSource]="data" >
*     <igx-category-x-axis
* 		label="label"
* 		#xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
* 		#yAxis>
*     </igx-numeric-y-axis>
*     <igx-average-true-range-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-average-true-range-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxAverageTrueRangeIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxAverageTrueRangeIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}];
@Component({
  selector: 'igx-average-true-range-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAverageTrueRangeIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxAverageTrueRangeIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : AverageTrueRangeIndicator
{
	return new AverageTrueRangeIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : AverageTrueRangeIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current AverageTrueRangeSeries object.
	 * The typical, and initial, value for AverageTrueRange periods is 14.
	* 
	* You can use the `period` to set the moving average.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-average-true-range-indicator
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		period="14">
	*     </igx-average-true-range-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.period = 14;
	* ```
	*/
	get period() : number {
		return (this.i.period as number);
	}
	@Input()
	set period(v: number) {
		this.i.period = +v;
	}
}
