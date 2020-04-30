import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { StandardDeviationIndicator } from "./StandardDeviationIndicator";

/**
 * Represents a IgxDataChartComponent Standard Deviation indicator series.
 * Default required members: High, Low, Close
* 
* `IgxStandardDeviationIndicatorComponent` (SDI) measures statistical variation in stock prices or volatility. The difference between an individual security’s closing price and the average security closing price is called the dispersion. The larger the dispersion is the higher the standard deviation will be and therefore the volatility. The smaller the dispersion is (the difference between an individual closing price and the average price), the smaller the standard deviation and the lower the price volatility.
* 
* Using this indicator requires setting both the `HighMemberPath`, `LowMemberPath` and `CloseMemberPath`.
* 
* ```html
*  <igx-data-chart 
*     width=500px
*     height=500px
*     [dataSource]="data" >
*     <igx-ordinal-time-x-axis
*         dateTimeMemberPath="TimeStamp"
*         #xAxis>
*       </igx-ordinal-time-x-axis>
*     <igx-numeric-y-axis
*        #yAxis></igx-numeric-y-axis>
*     <igx-standard-deviation-indicator
*        [xAxis]="xAxis"
*        [yAxis]="yAxis" 
*        closeMemberPath="Close"
*        highMemberPath="High"
*        lowMemberPath="Low">
*      </igx-standard-deviation-indicator>    
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxStandardDeviatioIndicatorComponent();
*    series.xAxis = this.xAxis;
*    series.yAxis = this.yAxis;
*    series.highMemberPath = "high";
*    series.lowMemberPath = "low";
*    series.closeMemberPath = "close";
*    this.chart.series.add(series);
*    
* ```
*/
export const IgxStandardDeviationIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}];
@Component({
  selector: 'igx-standard-deviation-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStandardDeviationIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStandardDeviationIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : StandardDeviationIndicator
{
	return new StandardDeviationIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StandardDeviationIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current StandardDeviationIndicator object.
	 * The typical, and initial, value for STDEV periods is 20.
	*/
	get period() : number {
		return (this.i.period as number);
	}
	@Input()
	set period(v: number) {
		this.i.period = +v;
	}
}
