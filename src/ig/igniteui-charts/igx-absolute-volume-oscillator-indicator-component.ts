import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { AbsoluteVolumeOscillatorIndicator } from "./AbsoluteVolumeOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent Absolute Volume Oscillator indicator series.
 * Default required members: Volume
* 
* You can use the `IgxAbsoluteVolumeOscillatorIndicatorComponent` to identify whether volume trands are increasing or decreasing.
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
*     <igx-absolute-volume-oscillator-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-absolute-volume-oscillator-indicator>
* </igx-data-chart>
* ```
*/
export const IgxAbsoluteVolumeOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-absolute-volume-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAbsoluteVolumeOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxAbsoluteVolumeOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : AbsoluteVolumeOscillatorIndicator
{
	return new AbsoluteVolumeOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : AbsoluteVolumeOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the short moving average period for the current AbsoluteVolumeOscillatorIndicator object.
	 * The typical, and initial, value for short AVO periods is 10.
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
	*     <igx-absolute-volume-oscillator-indicator
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		shortPeriod="10">
	*     </igx-absolute-volume-oscillator-indicator>
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
	 * Gets or sets the short moving average period for the current AbsoluteVolumeOscillatorIndicator object.
	 * The typical, and initial, value for long AVO periods is 30.
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
	*     <igx-absolute-volume-oscillator-indicator
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		longPeriod="30">
	*     </igx-absolute-volume-oscillator-indicator>
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
