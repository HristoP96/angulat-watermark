import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { DetrendedPriceOscillatorIndicator } from "./DetrendedPriceOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent Detrended Price Oscillator indicator series.
 * Default required members: Close
* 
* The `IgxDetrendedPriceOscillatorIndicatorComponent` class represents a IgxDataChartComponent Detrended Price Oscillator indicator series.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-category-x-axis #xAxis
*         label="label">
*     </igx-category-x-axis>
*     <igx-numeric-y-axis #yAxis>
*     </igx-numeric-y-axis>
*     <igx-detrended-price-oscillator-indicator
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         openMemberPath="open"
*         highMemberPath="high"
*         lowMemberPath="low"
*         closeMemberPath="close">
*     </igx-detrended-price-oscillator-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxDetrendedPriceOscillatorIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxDetrendedPriceOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-detrended-price-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxDetrendedPriceOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxDetrendedPriceOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : DetrendedPriceOscillatorIndicator
{
	return new DetrendedPriceOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : DetrendedPriceOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current DetrendedPriceOscillatorIndicator object.
	 * The typical, and initial, value for DPO periods is 20.
	* 
	* You can use the `period` to set the current moving average period.
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis #xAxis
	*         label="label">
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-detrended-price-oscillator-indicator
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         openMemberPath="open"
	*         highMemberPath="high"
	*         lowMemberPath="low"
	*         closeMemberPath="close"
	* 		period=30>
	*     </igx-detrended-price-oscillator-indicator>
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
