import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { OnBalanceVolumeIndicator } from "./OnBalanceVolumeIndicator";

/**
 * Represents a IgxDataChartComponent On Balance Bolume indicator series.
 * Default required members: Close, Volume
* 
* You can use the `IgxOnBalanceVolumeIndicatorComponent` to calculate a running total of sales volume for a stock.
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
*     <igx-on-balance-volume-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-on-balance-volume-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxOnBalanceVolumeIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxOnBalanceVolumeIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}];
@Component({
  selector: 'igx-on-balance-volume-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxOnBalanceVolumeIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxOnBalanceVolumeIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : OnBalanceVolumeIndicator
{
	return new OnBalanceVolumeIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : OnBalanceVolumeIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
