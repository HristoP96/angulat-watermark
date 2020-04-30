import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { TRIXIndicator } from "./TRIXIndicator";

/**
 * Represents a IgxDataChartComponent TRIX indicator series.
 * Default required members: Close
* 
* The `IgxTRIXIndicatorComponent` class specify the series as Trix Indicator series.
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
* 	<igx-trix-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"		
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		volumeMemberPath="volume">		    
*     </igx-trix-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxTrixIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxTRIXIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}];
@Component({
  selector: 'igx-trix-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxTRIXIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxTRIXIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : TRIXIndicator
{
	return new TRIXIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : TRIXIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current TRIXIndicator object.
	 * The typical, and initial, value for TRIX periods is 15.
	* 
	* The `period` property is used for moving average period of the current TRIXIndicator object.
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
	* 	<igx-trix-indicator
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"		
	*         highMemberPath="high"
	* 		lowMemberPath="low"
	* 		volumeMemberPath="volume"
	* 		period="7">		    
	*     </igx-trix-indicator>
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
