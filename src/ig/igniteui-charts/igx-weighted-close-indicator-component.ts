import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxItemwiseStrategyBasedIndicatorComponent } from "./igx-itemwise-strategy-based-indicator-component";
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { WeightedCloseIndicator } from "./WeightedCloseIndicator";

/**
 * Represents a IgxDataChartComponent Weigted Close indicator series.
 * The weighted close indicator shows an average of the high low and close
 * for a day but with the closing price counted twice in the average.
 * Default required members: High, Low, Close
* 
* The `IgxWeightedCloseIndicatorComponent` is similar to the `IgxTypicalPriceIndicatorComponent` in that it represents an average of the high price, low price, and closing price for a day.  
* However, with the `IgxWeightedCloseIndicatorComponent`, more emphasis is placed on the closing price and it is included twice when calculating the arithmetic average.
* 
* ```html
* <igx-data-chart
*     [dataSource]="data">
*     <igx-category-x-axis #xAxis
*         label="label">
*     </igx-category-x-axis>
*     <igx-numeric-y-axis #yAxis>
*     </igx-numeric-y-axis>
*     <igx-weighted-close-indicator
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         openMemberPath="open"
*         highMemberPath="high"
*         lowMemberPath="low"
*         closeMemberPath="close">
*     </igx-weighted-close-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxWeightedCloseIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxWeightedCloseIndicatorComponent_PROVIDERS = [{provide: IgxItemwiseStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}];
@Component({
  selector: 'igx-weighted-close-indicator',
  template: ``,
  providers: [{provide: IgxItemwiseStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxWeightedCloseIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxWeightedCloseIndicatorComponent extends IgxItemwiseStrategyBasedIndicatorComponent
{

protected createImplementation() : WeightedCloseIndicator
{
	return new WeightedCloseIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : WeightedCloseIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
