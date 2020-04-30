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
import { MarketFacilitationIndexIndicator } from "./MarketFacilitationIndexIndicator";

/**
 * Represents a IgxDataChartComponent Market Facilitation Index indicator series.
 * The Market Facilitation Index (MFI) indicator is represented by
 * the difference of the high and the low for a bar divided by the volume.
 * Default required members: High, Low, Volume
* 
* The Market Facilitation Index (MFI) indicator is represented by the difference of the high and the low for a bar divided by the volume.
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
* 	<igx-market-facilitation-index-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"		
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		volumeMemberPath="volume">		    
*     </igx-market-facilitation-index-indicator>
* </igx-data-chart>
* ```
*/
export const IgxMarketFacilitationIndexIndicatorComponent_PROVIDERS = [{provide: IgxItemwiseStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}];
@Component({
  selector: 'igx-market-facilitation-index-indicator',
  template: ``,
  providers: [{provide: IgxItemwiseStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMarketFacilitationIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxMarketFacilitationIndexIndicatorComponent extends IgxItemwiseStrategyBasedIndicatorComponent
{

protected createImplementation() : MarketFacilitationIndexIndicator
{
	return new MarketFacilitationIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : MarketFacilitationIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
