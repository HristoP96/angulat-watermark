import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { NegativeVolumeIndexIndicator } from "./NegativeVolumeIndexIndicator";

/**
 * Represents a IgxDataChartComponent Negative Volume Index indicator (NVI) series.
 * Default required members: Close, Volume
* 
* The `IgxNegativeVolumeIndexIndicatorComponent` (NVI) is a finacial indicator frequently used in combination with the PositiveVolumeIndexIndicator. This calculation can be used to identify bull markets. These two indicators are based on the premise that smart money trades on low volume days and less informed or overly optimistic investors trade on high volume days.
* 
* Using this indicator requires setting both the `CloseMemberPath` and `VolumeMemberPath`.
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
*     <igx-negative-volume-index-indicator 
*        [xAxis]="xAxis"
*        [yAxis]="yAxis"
*        volumeMemberPath="volume"
*        closeMemberPath="close">
*     </igx-negative-volume-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxNegativeVolumeIndexIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.closeMemberPath = "Close";
* series.volumeMemberPath = "Volume";
* series.dataSource = this.data;
* this.chart.series.add(series);
* ```
*/
export const IgxNegativeVolumeIndexIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}];
@Component({
  selector: 'igx-negative-volume-index-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxNegativeVolumeIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxNegativeVolumeIndexIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : NegativeVolumeIndexIndicator
{
	return new NegativeVolumeIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : NegativeVolumeIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
