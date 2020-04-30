import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { StochRSIIndicator } from "./StochRSIIndicator";

/**
 * Represents a IgxDataChartComponent StochRSI indicator series.
 * Default required members: Close
* 
* `IgxStochRSIIndicatorComponent` or Stochastic Relative Strength IndexI Indicator (SRSI) measures when a security is overbought or oversold within a specified period of time. The values range from 0 to 1. The StochRSI Indicator is calculated by applying the Stochastic Oscillator formula to RelativeStrengthIndexIndicator (RSI) data.
* 
* Using this indicator requires setting the `CloseMemberPath`.
* 
* ```html
* <igx-data-chart 
*     width=500px
*     height=500px
*     [dataSource]="data" >
*     <igx-ordinal-time-x-axis
*         dateTimeMemberPath="TimeStamp"
*         #xAxis>
*       </igx-ordinal-time-x-axis>
*     <igx-numeric-y-axis
*        #yAxis></igx-numeric-y-axis>
*     <igx-stoch-rsi-indicator
*        [xAxis]="xAxis"
*        [yAxis]="yAxis" 
*        closeMemberPath="Close">
*      </igx-stoch-rsi-indicator>      
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxStochRSIIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxStochRSIIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}];
@Component({
  selector: 'igx-stoch-rsi-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStochRSIIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStochRSIIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : StochRSIIndicator
{
	return new StochRSIIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StochRSIIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current StochRSIIndicator object.
	 * The typical, and initial, value for StochRSI periods is 14.
	* 
	* ```html
	* <igx-data-chart 
	*     width=500px
	*     height=500px
	*     [dataSource]="data" >
	*     <igx-ordinal-time-x-axis
	*         dateTimeMemberPath="TimeStamp"
	*         #xAxis>
	*       </igx-ordinal-time-x-axis>
	*     <igx-numeric-y-axis
	*        #yAxis></igx-numeric-y-axis>
	*     <igx-stoch-rsi-indicator
	*        [xAxis]="xAxis"
	*        [yAxis]="yAxis" 
	*        closeMemberPath="Close"
	*        period=10>
	*      </igx-stoch-rsi-indicator>      
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.period = 10;
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
