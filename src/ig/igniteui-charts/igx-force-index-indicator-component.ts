import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ForceIndexIndicator } from "./ForceIndexIndicator";

/**
 * Represents a IgxDataChartComponent Force Index indicator series.
 * Default required members: Close, Volume
* 
* The `IgxForceIndexIndicatorComponent` represents a IgxDataChartComponent Force Index indicator series.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-category-x-axis #xAxis
*         label="label">
*     </igx-category-x-axis>
*     <igx-numeric-y-axis #yAxis>
*     </igx-numeric-y-axis>
*     <igx-force-index-indicator
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         openMemberPath="open"
*         highMemberPath="high"
*         lowMemberPath="low"
*         closeMemberPath="close">
*     </igx-force-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxForceIndexIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);;
* ```
*/
export const IgxForceIndexIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}];
@Component({
  selector: 'igx-force-index-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxForceIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxForceIndexIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : ForceIndexIndicator
{
	return new ForceIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ForceIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current AverageTrueRangeSeries object.
	 * The typical, and initial, value for ForceIndiex periods is 0.
	* 
	* You can use the `period` property to get the moving average period of the current FullStochasticOscillatorIndicator object
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data" >
	*     <igx-category-x-axis #xAxis
	*         label="label">
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-force-index-indicator
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         openMemberPath="open"
	*         highMemberPath="high"
	*         lowMemberPath="low"
	*         closeMemberPath="close"
	* 		period=30>
	*     </igx-force-index-indicator>
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
