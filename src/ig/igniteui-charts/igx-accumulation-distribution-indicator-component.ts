import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { AccumulationDistributionIndicator } from "./AccumulationDistributionIndicator";

/**
 * Represents a IgxDataChartComponent Accumulation/Distribution indicator series.
 * Default required members: Close, Low, High, Volume
* 
* You can use the `IgxAccumulationDistributionIndicatorComponent` to evaluate the suppy and demand of a stock, security, or index.
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
*     <igx-accumulation-distribution-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-accumulation-distribution-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxAccumulationDistributionIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxAccumulationDistributionIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}];
@Component({
  selector: 'igx-accumulation-distribution-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAccumulationDistributionIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxAccumulationDistributionIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : AccumulationDistributionIndicator
{
	return new AccumulationDistributionIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : AccumulationDistributionIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
