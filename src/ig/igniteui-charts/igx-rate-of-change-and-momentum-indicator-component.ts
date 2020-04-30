import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RateOfChangeAndMomentumIndicator } from "./RateOfChangeAndMomentumIndicator";

/**
 * Represents a IgxDataChartComponent Rate of Change and Momentum indicator series.
 * Default required members: Close
* 
* `IgxRateOfChangeAndMomentumIndicatorComponent` class represents a Rate of Change and Momentum indicator series for the IgxDataChartComponent.
* 
* ```html
* <igx-data-chart  #chart 
*     [dataSource]="data">
*     <igx-category-x-axis
*     label="label"
*     #xAxis
*     >
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
*     minimumValue="0"
*     #yAxis>
*     </igx-numeric-y-axis>
*     <igx-rate-of-change-and-momentum-indicator
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"
*     closeMemberPath="close"
*     >
* </igx-rate-of-change-and-momentum-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxRateOfChangeAndMomentumIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxRateOfChangeAndMomentumIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}];
@Component({
  selector: 'igx-rate-of-change-and-momentum-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRateOfChangeAndMomentumIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRateOfChangeAndMomentumIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : RateOfChangeAndMomentumIndicator
{
	return new RateOfChangeAndMomentumIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RateOfChangeAndMomentumIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current AverageTrueRangeSeries object.
	 * The typical, and initial, value for AverageTrueRange periods is 14.
	* 
	* You can use the `period` property for the current AverageTrueRangeSeries object.
	* 
	* The typical, and initial, value for AverageTrueRange periods is 14.  
	* 
	* ```html
	* <igx-data-chart  #chart 
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*     label="label"
	*     #xAxis
	*     >
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*     minimumValue="0"
	*     #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-rate-of-change-and-momentum-indicator
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	* 	period="30">
	* </igx-rate-of-change-and-momentum-indicator>
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
