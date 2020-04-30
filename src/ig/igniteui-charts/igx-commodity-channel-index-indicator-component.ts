import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { CommodityChannelIndexIndicator } from "./CommodityChannelIndexIndicator";

/**
 * Represents a IgxDataChartComponent Commodity Channel Index indicator series.
 * Default required members: High, Low, Close
* 
* `IgxCommodityChannelIndexIndicatorComponent` class specify the series as Commodity Channel Index Indicator series.
* 
* ```html
* <igx-data-chart [dataSource]="data">
*   <igx-category-x-axis #xAxis
*     label="time">
*   </igx-category-x-axis>
*   <igx-numeric-y-axis #yAxis>
*   </igx-numeric-y-axis>
* 
*   <igx-commodity-channel-index-indicator
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"
*     closeMemberPath="close"
*     volumeMemberPath="volume"
*     longPeriod="30" >
*   </igx-commodity-channel-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxCommodityChannelIndexIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxCommodityChannelIndexIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}];
@Component({
  selector: 'igx-commodity-channel-index-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCommodityChannelIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCommodityChannelIndexIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : CommodityChannelIndexIndicator
{
	return new CommodityChannelIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CommodityChannelIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current CCISeries object.
	 * The typical, and initial, value for CCI periods is 20.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*   <igx-category-x-axis #xAxis
	*     label="time">
	*   </igx-category-x-axis>
	*   <igx-numeric-y-axis #yAxis>
	*   </igx-numeric-y-axis>
	*   <igx-commodity-channel-index-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume"
	*     period="30" >
	*   </igx-commodity-channel-index-indicator>
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
