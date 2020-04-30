import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RelativeStrengthIndexIndicator } from "./RelativeStrengthIndexIndicator";

/**
 * Represents a IgxDataChartComponent Relative Strength Index indicator series.
 * Default required members: Close
* 
* The `IgxRelativeStrengthIndexIndicatorComponent` class represents Relative Strength Index indicator series for the IgxDataChartComponent .
* 
* ```html
*  <igx-data-chart
*     [dataSource]="data">
* 	<igx-category-x-axis
* 		label="label"
* 		#xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
* 		#yAxis>
*     </igx-numeric-y-axis>
* 	<igx-relative-strength-index-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"		
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		volumeMemberPath="volume">		    
*     </igx-relative-strength-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxRelativeStrengthIndexIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxRelativeStrengthIndexIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}];
@Component({
  selector: 'igx-relative-strength-index-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRelativeStrengthIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxRelativeStrengthIndexIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : RelativeStrengthIndexIndicator
{
	return new RelativeStrengthIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : RelativeStrengthIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current RelativeStrengthIndexIndicator object.
	 * The typical, and initial, value for RSI periods is 14.
	* 
	* You can use the `period` property for the current RelativeStrengthIndexIndicator object.
	* 
	* ```html
	*  <igx-data-chart
	*     [dataSource]="data">
	* 	<igx-category-x-axis
	* 		label="label"
	* 		#xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	* 		#yAxis>
	*     </igx-numeric-y-axis>
	* 	<igx-relative-strength-index-indicator
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"		
	*         highMemberPath="high"
	* 		lowMemberPath="low"
	* 		volumeMemberPath="volume"
	* 		period=30>		    
	*     </igx-relative-strength-index-indicator>
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
