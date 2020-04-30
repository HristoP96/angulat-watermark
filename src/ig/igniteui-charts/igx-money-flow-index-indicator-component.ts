import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { MoneyFlowIndexIndicator } from "./MoneyFlowIndexIndicator";

/**
 * Represents a IgxDataChartComponent Money Flow Index indicator series.
 * Default required members: Close, Low, High, Volume
* 
* Represents a Ignite UIDataChart Money Flow Index indicator series. 
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
* 	<igx-money-flow-index-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
* 		openMemberPath="open"
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close"
* 		volumeMemberPath="volume">		    
*     </igx-money-flow-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxMoneyFlowIndexIndicatorComponent();
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
export const IgxMoneyFlowIndexIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}];
@Component({
  selector: 'igx-money-flow-index-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMoneyFlowIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxMoneyFlowIndexIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : MoneyFlowIndexIndicator
{
	return new MoneyFlowIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : MoneyFlowIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current MoneyFlowIndexIndicator object.
	 * The typical, and initial, value for MoneyFlowIndexIndicator periods is 14.
	* 
	* Gets or sets the moving average period for the current MoneyFlowIndexIndicator object.
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
	* 	<igx-money-flow-index-indicator
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	* 		openMemberPath="open"
	*         highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		volumeMemberPath="volume"
	* 		period="14">		    
	*     </igx-money-flow-index-indicator>
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
}
