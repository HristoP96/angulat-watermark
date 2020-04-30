import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { BollingerBandWidthIndicator } from "./BollingerBandWidthIndicator";

/**
 * Represents a IgxDataChartComponent Bollinger Bandwidth indicator series.
 * Represents the normalized width of the Bollinger bands for each provided value.
 * For more info see: BollingerBandsOverlay
 * Default required members: High, Low, Close
* 
* You can use the `IgxBollingerBandWidthIndicatorComponent` to represents a IgxDataChartComponent Bollinger Bandwidth indicator series.
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
*     <igx-bollinger-band-width-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-bollinger-band-width-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxBollingerBandWidthIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxBollingerBandWidthIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}];
@Component({
  selector: 'igx-bollinger-band-width-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandWidthIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxBollingerBandWidthIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : BollingerBandWidthIndicator
{
	return new BollingerBandWidthIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : BollingerBandWidthIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the Bollinger Band Width Indicator.
	 * The typical, and initial, value for CCI periods is 20.
	* 
	* You can use the `period` to set the moving average.
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
	*     <igx-bollinger-band-width-indicator
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		period="14">
	*     </igx-bollinger-band-width-indicator>
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
	/**
	 * Gets or sets the multiplier for the Bollinger Band width.
	 * The typical, and initial, value for Bollinger Band width multiplier is 2.
	* 
	* Use the `multiplier` property for the Bollinger Band width. The typical, and initial, value for Bollinger Band width multiplier is 2.  
	* 
	* ```ts
	* this.series.multiplier = 14;
	* ```
	*/
	get multiplier() : number {
		return (this.i.multiplier as number);
	}
	@Input()
	set multiplier(v: number) {
		this.i.multiplier = +v;
	}
}
