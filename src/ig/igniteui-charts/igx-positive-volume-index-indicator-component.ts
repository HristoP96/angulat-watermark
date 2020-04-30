import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PositiveVolumeIndexIndicator } from "./PositiveVolumeIndexIndicator";

/**
 * Represents a IgxDataChartComponent Positive Volume Index (PVI) indicator series.
 * Default required members: Close, Volume
* 
* You can use the `IgxPositiveVolumeIndexIndicatorComponent` with the 'NegativeVolumeIndexIndicator' to identify bull markets.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data" >
*     <igx-category-x-axis
* 		label="label"
* 		#xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
* 		#yAxis>
*     </igx-numeric-y-axis>
*     <igx-positive-volume-index-indicator
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-positive-volume-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxPositiveVolumeIndexIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxPositiveVolumeIndexIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}];
@Component({
  selector: 'igx-positive-volume-index-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPositiveVolumeIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPositiveVolumeIndexIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : PositiveVolumeIndexIndicator
{
	return new PositiveVolumeIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PositiveVolumeIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
