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
import { MedianPriceIndicator } from "./MedianPriceIndicator";

/**
 * Represents a IgxDataChartComponent Median Price indicator series.
 * Default required members: High, Low
* 
* Represents a Ignite UIDataChart Median Price indicator series.
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
* 	<igx-median-price-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"		
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		volumeMemberPath="volume">		    
*     </igx-median-price-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxMedianPriceIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.volumeMemberPath= "volume";
* this.chart.series.add(series);
* ```
*/
export const IgxMedianPriceIndicatorComponent_PROVIDERS = [{provide: IgxItemwiseStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}];
@Component({
  selector: 'igx-median-price-indicator',
  template: ``,
  providers: [{provide: IgxItemwiseStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMedianPriceIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxMedianPriceIndicatorComponent extends IgxItemwiseStrategyBasedIndicatorComponent
{

protected createImplementation() : MedianPriceIndicator
{
	return new MedianPriceIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : MedianPriceIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
