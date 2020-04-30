import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ChaikinOscillatorIndicator } from "./ChaikinOscillatorIndicator";

/**
 * Represents the IgxDataChartComponent Chaikin Oscillator indicator series.
 * Default required members: Close, Low, High, Volume
* 
* `IgxChaikinOscillatorIndicatorComponent` class specify the series as Chaikin Oscillator Indicator series.
* 
* ```html
* <igx-data-chart [dataSource]="data">
*   <igx-category-x-axis #xAxis
*     label="time">
*   </igx-category-x-axis>
*   <igx-numeric-y-axis #yAxis>
*   </igx-numeric-y-axis>
*   <igx-chaikin-oscillator-indicator
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"
*     closeMemberPath="close"
*     volumeMemberPath="volume"
*     longPeriod="30">
*   </igx-chaikin-oscillator-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxChaikinOscillatorIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxChaikinOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-chaikin-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxChaikinOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxChaikinOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : ChaikinOscillatorIndicator
{
	return new ChaikinOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ChaikinOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the short moving average period for the current ChaikinOscillatorIndicator object.
	 * The typical, and initial, value for short CHO periods is 3.
	* 
	* Set the `shortPeriod` property if you wish to change the short moving average period for the indicator.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*   <igx-category-x-axis #xAxis
	*     label="time">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-chaikin-oscillator-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume"
	*     shortPeriod="5">
	*   </igx-chaikin-oscillator-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.shortPeriod = 30;
	* ```
	*/
	get shortPeriod() : number {
		return (this.i.shortPeriod as number);
	}
	@Input()
	set shortPeriod(v: number) {
		this.i.shortPeriod = +v;
	}
	/**
	 * Gets or sets the long moving average period for the current ChaikinOscillatorIndicator object.
	 * The typical, and initial, value for long CHO periods is 10.
	* 
	* Set the `longPeriod` property if you wish to change the long moving average period for the indicator.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*   <igx-category-x-axis #xAxis
	*     label="time">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	* 
	*   <igx-chaikin-oscillator-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume"
	*     longPeriod="30" >
	*   </igx-chaikin-oscillator-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.longPeriod = 30;
	* ```
	*/
	get longPeriod() : number {
		return (this.i.longPeriod as number);
	}
	@Input()
	set longPeriod(v: number) {
		this.i.longPeriod = +v;
	}
}
