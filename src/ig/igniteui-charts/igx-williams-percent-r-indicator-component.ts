import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { WilliamsPercentRIndicator } from "./WilliamsPercentRIndicator";

/**
 * Represents a IgxDataChartComponent Williams %R indicator series.
 * Default required members: High, Low, Close
* 
* The `IgxWilliamsPercentRIndicatorComponent` scale ranges from 0 to -100. It is useful for identifying overbought and oversold securities.  
* The `IgxWilliamsPercentRIndicatorComponent` is calculated by dividing the difference between the highest high for the period and the current close by the highest high minus the lowest low for the period.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-category-x-axis #xAxis
*         label="label">
*     </igx-category-x-axis>
*     <igx-numeric-y-axis #yAxis>
*     </igx-numeric-y-axis>
*     <igx-williams-percent-r-indicator
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         openMemberPath="open"
*         highMemberPath="high"
*         lowMemberPath="low"
*         closeMemberPath="close">
*     </igx-williams-percent-r-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxWilliamsPercentRIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxWilliamsPercentRIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}];
@Component({
  selector: 'igx-williams-percent-r-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxWilliamsPercentRIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxWilliamsPercentRIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : WilliamsPercentRIndicator
{
	return new WilliamsPercentRIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : WilliamsPercentRIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current StandardDeviationIndicator object.
	 * The typical, and initial, value for Williams %R periods is 14.
	* 
	* Gets or sets the `period` for the moving average period.
	* 
	* The typical, and initial, value for Williams %R periods is 14.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis #xAxis
	*         label="label">
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-williams-percent-r-indicator
	*         #series
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         openMemberPath="open"
	*         highMemberPath="high"
	*         lowMemberPath="low"
	*         closeMemberPath="close"
	*         period="30">
	*     </igx-williams-percent-r-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.period = 30;
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
