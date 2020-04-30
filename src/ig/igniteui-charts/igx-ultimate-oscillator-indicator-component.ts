import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { UltimateOscillatorIndicator } from "./UltimateOscillatorIndicator";

/**
 * Represents a IgxDataChartComponent Ultimate Oscillator indicator series.
 * Default required members: High, Low, Close
* 
* You can use the `IgxUltimateOscillatorIndicatorComponent` which represents a IgxDataChartComponent Ultimate Oscillator indicator series.
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
*     <igx-ultimate-oscillator-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-ultimate-oscillator-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxUltimateOscillatorIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxUltimateOscillatorIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}];
@Component({
  selector: 'igx-ultimate-oscillator-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxUltimateOscillatorIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxUltimateOscillatorIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : UltimateOscillatorIndicator
{
	return new UltimateOscillatorIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : UltimateOscillatorIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
