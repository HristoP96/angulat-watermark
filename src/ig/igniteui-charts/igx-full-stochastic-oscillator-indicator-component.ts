import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { FullStochasticOscillatorIndicator } from "./FullStochasticOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent Full Stochastic Oscillator indicator series.
 * Default required members: High, Low, Close
* 
* The `IgxFullStochasticOscillatorIndicatorComponent` class represents a IgxDataChartComponent Full Stochastic Oscillator indicator series.
* 
* ```html
* <igx-data-chart  #chart 
*     [dataSource]="data">
*     <igx-category-x-axis
*     label="label"
*     #xAxis
*     >
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
*     minimumValue="0"
*     #yAxis>
*     </igx-numeric-y-axis>     
*     <igx-full-stochastic-oscillator-indicator
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"
*     closeMemberPath="close">
* </gx-full-stochastic-oscillator-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxFullStochasticOscillatorIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxFullStochasticOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-full-stochastic-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFullStochasticOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxFullStochasticOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : FullStochasticOscillatorIndicator
{
	return new FullStochasticOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : FullStochasticOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current FullStochasticOscillatorIndicator object.
	 * The typical, and initial, value for FullStochasticOscillatorIndicator periods is 14.
	* 
	* You can use the `period` property for the moving average period of the current FullStochasticOscillatorIndicator object.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*     label="label"
	*     #xAxis
	*     >
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	*     <igx-full-stochastic-oscillator-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	* 	period=30>
	* </gx-full-stochastic-oscillator-indicator>
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
	/**
	 * Gets or sets the moving average SmoothingPeriod for the current FullStochasticOscillatorIndicator object.
	 * The typical, and initial, value for FullStochasticOscillatorIndicator SmoothingPeriod is 3.
	* 
	* The `smoothingPeriod` property to fets/sets the moving average SmoothingPeriod for the current FullStochasticOscillatorIndicator object.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*     label="label"
	*     #xAxis
	*     >
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	*     <igx-full-stochastic-oscillator-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	* 	[smoothingPeriod]=30>
	* </gx-full-stochastic-oscillator-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* series.smoothingPeriod=30;
	* ```
	*/
	get smoothingPeriod() : number {
		return (this.i.smoothingPeriod as number);
	}
	@Input()
	set smoothingPeriod(v: number) {
		this.i.smoothingPeriod = +v;
	}
	/**
	 * Gets or sets the moving average TriggerPeriod for the current FullStochasticOscillatorIndicator object.
	 * The typical, and initial, value for FullStochasticOscillatorIndicator TriggerPeriod is 3.
	* 
	* You can use the `period` to set the current moving average period.
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*     label="label"
	*     #xAxis
	*     >
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>     
	*     <igx-full-stochastic-oscillator-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	* 	[triggerPeriod]=30>
	* </gx-full-stochastic-oscillator-indicator>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.triggerPeriod = 30;
	* ```
	*/
	get triggerPeriod() : number {
		return (this.i.triggerPeriod as number);
	}
	@Input()
	set triggerPeriod(v: number) {
		this.i.triggerPeriod = +v;
	}
}
