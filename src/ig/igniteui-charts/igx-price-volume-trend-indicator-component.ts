import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PriceVolumeTrendIndicator } from "./PriceVolumeTrendIndicator";

/**
 * Represents a IgxDataChartComponent Price Volume Trend Indicator series.
 * Default required members: Volume, Close
* 
* You can use the `IgxPriceVolumeTrendIndicatorComponent` to measure money flow by adding or subtracting a portion of the daily volume.
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
*     <igx-price-volume-trend-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-price-volume-trend-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxPriceVolumeTrendIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxPriceVolumeTrendIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}];
@Component({
  selector: 'igx-price-volume-trend-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPriceVolumeTrendIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPriceVolumeTrendIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : PriceVolumeTrendIndicator
{
	return new PriceVolumeTrendIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PriceVolumeTrendIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
