import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from "./igx-strategy-based-indicator-component";
import { IgxFinancialIndicatorComponent } from "./igx-financial-indicator-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { MassIndexIndicator } from "./MassIndexIndicator";

/**
 * Represents a IgxDataChartComponent Mass Index indicator series.
 * Default required members: High, Low
* 
* Represents a Ignite UIDataChart Mass Index indicator series.
* 
* Example:
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
* 	<igx-mass-index-indicator
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"		
*         highMemberPath="high"
* 		lowMemberPath="low"
* 		volumeMemberPath="volume">		    
*     </igx-mass-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxMassIndexIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.volumeMemberPath= "volume";
* this.chart.series.add(series);
* ```
*/
export const IgxMassIndexIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}];
@Component({
  selector: 'igx-mass-index-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMassIndexIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxMassIndexIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : MassIndexIndicator
{
	return new MassIndexIndicator();
}
	/**
	                             * @hidden 
	                             */
	public get i() : MassIndexIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
