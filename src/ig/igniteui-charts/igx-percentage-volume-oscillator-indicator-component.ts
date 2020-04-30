import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PercentageVolumeOscillatorIndicator } from "./PercentageVolumeOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent Percentage Volume Oscillator (PVO) series.
 * Default required members: Volume
* 
* You can use the `IgxPercentageVolumeOscillatorIndicatorComponent` to show the percentage difference volume.
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
*     <igx-percentage-volume-oscillator-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-percentage-volume-oscillator-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxPercentageVolumeOscillatorIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxPercentageVolumeOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-percentage-volume-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPercentageVolumeOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPercentageVolumeOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : PercentageVolumeOscillatorIndicator
{
	return new PercentageVolumeOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PercentageVolumeOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the short moving average period for the current PercentageVolumeOscillatorIndicator object.
	 * The typical, and initial, value for short PVO periods is 10.
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
	*     <igx-percentage-volume-oscillator-indicator
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		shortPeriod="10">
	*     </igx-percentage-volume-oscillator-indicator>
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
	 * Gets or sets the short moving average period for the current PercentageVolumeOscillatorIndicator object.
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
	*     <igx-percentage-volume-oscillator-indicator
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		longPeriod="30">
	*     </igx-percentage-volume-oscillator-indicator>
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
