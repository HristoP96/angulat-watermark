import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PercentagePriceOscillatorIndicator } from "./PercentagePriceOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent percentage price oscillator series.
 * Default required members: High, Low, Volume
* 
* You can use the `IgxPercentagePriceOscillatorIndicatorComponent` to show the difference between two moving averages.
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
*     <igx-percentage-price-oscillator-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-percentage-price-oscillator-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxPercentagePriceOscillatorIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxPercentagePriceOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-percentage-price-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPercentagePriceOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPercentagePriceOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : PercentagePriceOscillatorIndicator
{
	return new PercentagePriceOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PercentagePriceOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the short moving average period for the current PercentagePriceOscillatorIndicator object.
	 * The typical, and initial, value for short PPO periods is 10.
	* 
	* You can use the `shortPeriod` to set the short moving average period.
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
	*     <igx-percentage-price-oscillator-indicator
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		shortPeriod="10">
	*     </igx-percentage-price-oscillator-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.shortPeriod = 10;
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
	 * Gets or sets the long moving average period for the current PercentagePriceOscillatorIndicator object.
	 * The typical, and initial, value for long PVO periods is 30.
	* 
	* You can use the `longPeriod` to set the long moving average period.
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
	*     <igx-percentage-price-oscillator-indicator
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		longPeriod="30">
	*     </igx-percentage-price-oscillator-indicator>
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
