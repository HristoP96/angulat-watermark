import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { EaseOfMovementIndicator } from "./EaseOfMovementIndicator";

/**
 * Represents a IgxDataChartComponent Ease of Movement indicator series.
 * The ease of movement indicator by Richard W. Arms, Jr relates the price change of an asset to
 * its volume. Normally smoothed with a moving average.
 * Default required members: Low, High, Volume
* 
* The ease of movment indicator is used to analyze relationships between a price changes and volume. One would usually plot this in a separate chart below the main price chart. It can be added to a chart like this:
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-ordinal-time-x-axis
*     dateTimeMemberPath="TimeStamp"
*     #xAxis
*     >
*     </igx-ordinal-time-x-axis>
*     <igx-numeric-y-axis
*     #yAxis>
*     </igx-numeric-y-axis>
* 
*     <igx-ease-of-movement-indicator
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     highMemberPath="High"
*     lowMemberPath="Low"
*     volumeMemberPath="Volume">
*     </igx-ease-of-movement-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxEaseOfMovementIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.highMemberPath = "High";
* series.lowMemberPath = "Low";
* series.volumeMemberPath = "Volume";
* series.dataSource = this.data;
* this.chart.series.add(series);
* ```
*/
export const IgxEaseOfMovementIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}];
@Component({
  selector: 'igx-ease-of-movement-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxEaseOfMovementIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxEaseOfMovementIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : EaseOfMovementIndicator
{
	return new EaseOfMovementIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : EaseOfMovementIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
