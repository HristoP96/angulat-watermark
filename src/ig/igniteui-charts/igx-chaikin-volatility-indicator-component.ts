import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ChaikinVolatilityIndicator } from "./ChaikinVolatilityIndicator";

/**
 * Represents a IgxDataChartComponent Chaikin Volatility indicator series.
 * The ChaikinVolatility indicator attempts to show volatility by displaying the spread between
 * the high and low values.
 * Default required members: High, Low
* 
* `IgxChaikinVolatilityIndicatorComponent` class specify the series as Chaikin Volitility Indicator series.
* 
* ```html
* <igx-data-chart [dataSource]="data">
*   <igx-category-x-axis #xAxis
*     label="time">
*   </igx-category-x-axis>
*   <igx-numeric-y-axis #yAxis>
*   </igx-numeric-y-axis>
* 
*   <igx-chaikin-volatility-indicator
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"
*     closeMemberPath="close"
*     volumeMemberPath="volume"   >
*   </igx-chaikin-volatility-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxChaikinVolatilityIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxChaikinVolatilityIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}];
@Component({
  selector: 'igx-chaikin-volatility-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxChaikinVolatilityIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxChaikinVolatilityIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : ChaikinVolatilityIndicator
{
	return new ChaikinVolatilityIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ChaikinVolatilityIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current ChaikinVolatilityIndicator object.
	 * The typical, and initial, value for ChaikinVolatilityIndicator periods is 10.
	* 
	* Set the `period` property if you wish to change the moving average period for the indicator.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*   <igx-category-x-axis #xAxis
	*     label="time">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-chaikin-volatility-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume"
	*     period="30">
	*   </igx-chaikin-volatility-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.longPeriod = 30;
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
