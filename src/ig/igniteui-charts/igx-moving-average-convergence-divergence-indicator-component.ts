import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { MovingAverageConvergenceDivergenceIndicator } from "./MovingAverageConvergenceDivergenceIndicator";

/**
 * Represents a IgxDataChartComponent Moving Average Convergence/Divergence (MACD) indicator series.
 * Default required members: High, Low, Close
* 
* Represents a Ignite UIDataChart Moving Average Convergence/Divergence (MACD) indicator series. 
* 
* Example:
* 
* ```html
* <igx-data-chart
*     [dataSource]="data">
* 	<igx-category-x-axis
* 		label="label"
* 		#xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
* 		#yAxis>
*     </igx-numeric-y-axis>
* 	<igx-moving-average-convergence-divergence-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
* 		openMemberPath="open"
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close"
* 		volumeMemberPath="volume">		    
*     </gx-moving-average-convergence-divergence-indicatorr>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxMovingAverageConvergenceDivergenceIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath="open"
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath="close"
* series.volumeMemberPath= "volume";
* this.chart.series.add(series);
* ```
*/
export const IgxMovingAverageConvergenceDivergenceIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}];
@Component({
  selector: 'igx-moving-average-convergence-divergence-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMovingAverageConvergenceDivergenceIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxMovingAverageConvergenceDivergenceIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : MovingAverageConvergenceDivergenceIndicator
{
	return new MovingAverageConvergenceDivergenceIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : MovingAverageConvergenceDivergenceIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the short moving average period for the current MovingAverageConvergenceDivergenceIndicator object.
	 * The typical, and initial, value for short MACD periods is 10.
	* 
	* Gets or sets the short moving average period for the current MovingAverageConvergenceDivergenceIndicator object.
	* 
	* Example:
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	* 	<igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	* 	<igx-moving-average-convergence-divergence-indicator
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	* 		openMemberPath="open"
	*         highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		volumeMemberPath="volume"
	* 		shortPeriod="10">		    
	*     </gx-moving-average-convergence-divergence-indicatorr>
	* </igx-data-chart>
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
	 * Gets or sets the long moving average period for the current MovingAverageConvergenceDivergenceIndicator object.
	 * The typical, and initial, value for long MACD periods is 30.
	* 
	* Gets or sets the long moving average period for the current MovingAverageConvergenceDivergenceIndicator object.
	* 
	* Example:
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	* 	<igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	* 	<igx-moving-average-convergence-divergence-indicator
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	* 		openMemberPath="open"
	*         highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		volumeMemberPath="volume"
	* 		longPeriod="30">		    
	*     </gx-moving-average-convergence-divergence-indicatorr>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.longPeriod="30" ;
	* ```
	*/
	get longPeriod() : number {
		return (this.i.longPeriod as number);
	}
	@Input()
	set longPeriod(v: number) {
		this.i.longPeriod = +v;
	}
	/**
	 * Gets or sets the long moving average period for the current MovingAverageConvergenceDivergenceIndicator object.
	 * The typical, and initial, value for long PVO periods is 30.
	* 
	* Gets or sets the long moving average period for the current MovingAverageConvergenceDivergenceIndicator object.
	* 
	* Example:
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	* 	<igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	* 	<igx-moving-average-convergence-divergence-indicator
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	* 		openMemberPath="open"
	*         highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		volumeMemberPath="volume"
	* 		signalPeriod="30">		    
	*     </gx-moving-average-convergence-divergence-indicatorr>
	* </igx-data-chart>
	* ```
	*/
	get signalPeriod() : number {
		return (this.i.signalPeriod as number);
	}
	@Input()
	set signalPeriod(v: number) {
		this.i.signalPeriod = +v;
	}
}
