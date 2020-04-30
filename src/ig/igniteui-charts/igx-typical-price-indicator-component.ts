import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { TypicalPriceIndicator } from "./TypicalPriceIndicator";

/**
 * Represents a IgxDataChartComponent Typical Price indicator series.
 * The typical price indicator is represented as a arithmetic average 
 * of the High, Low, and Close for a day.
 * Default required members: High, Low, Close
* 
* The `IgxTypicalPriceIndicatorComponent` class represents a IgxDataChartComponent Typical Price indicator series.
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
* 	<igx-typical-price-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"		
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		volumeMemberPath="volume">		    
*     </igx-typical-price-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxTypicalPriceIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxTypicalPriceIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}];
@Component({
  selector: 'igx-typical-price-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxTypicalPriceIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTypicalPriceIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : TypicalPriceIndicator
{
	return new TypicalPriceIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TypicalPriceIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
