import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStrategyBasedIndicatorComponent } from './igx-strategy-based-indicator-component';
import { IgxFinancialIndicatorComponent } from './igx-financial-indicator-component';
import { IgxFinancialSeriesComponent } from './igx-financial-series-component';
import { IgxSeriesComponent } from './igx-series-component';
import { CustomIndicator } from "./CustomIndicator";
import { IgxFinancialEventArgs } from "./igx-financial-event-args";
import { delegateCombine } from "igniteui-core/type";


export const IgxCustomIndicatorComponent_PROVIDERS = [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}];

/**
 * Represents a IgxDataChartComponent Custom Indicator series.
 * The indicator value is calculated in the user specified Indicator event handler.
* 
* `IgxCustomIndicatorComponent` class specify the series as Custom Indicator series.
* 
* ```html
* <igx-data-chart [dataSource]="data">
*   <igx-category-x-axis #xAxis
*     label="time">
*   </igx-category-x-axis>
*   <igx-numeric-y-axis #yAxis>
*   </igx-numeric-y-axis>
*   <igx-commodity-channel-index-indicator
*     [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"
*     closeMemberPath="close"
*     volumeMemberPath="volume" >
*   </igx-commodity-channel-index-indicator>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxCustomIndicatorComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
@Component({
  selector: 'igx-custom-indicator',
  template: ``,
  providers: [{provide: IgxStrategyBasedIndicatorComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}, {provide: IgxFinancialIndicatorComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCustomIndicatorComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCustomIndicatorComponent extends IgxStrategyBasedIndicatorComponent
{

protected createImplementation() : CustomIndicator
{
	return new CustomIndicator();
}
	public get i() : CustomIndicator {
		return this._implementation;
	}
	constructor() {
		super();
	}

    private _indicator: EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> = null;
	/**
	 * This event is raised when the indicator values need to be computed.
	*/
	@Output()
	get indicator(): EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> {
		if (this._indicator == null) {
			this._indicator = new EventEmitter<{sender: any, args: IgxFinancialEventArgs}>();
			this.i.indicator = delegateCombine(this.i.indicator, (o, e) => {
				let outerArgs = new IgxFinancialEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
					    this._indicator.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._indicator;
	}

    private _basedOnColumns: EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> = null;
	/**
	 * This event is raised when the based on columns to be specified.
	*/
	@Output()
	get basedOnColumns(): EventEmitter<{ sender: any, args: IgxFinancialEventArgs}> {
		if (this._basedOnColumns == null) {
			this._basedOnColumns = new EventEmitter<{sender: any, args: IgxFinancialEventArgs}>();
			this.i.basedOnColumns = delegateCombine(this.i.indicator, (o, e) => {
				let outerArgs = new IgxFinancialEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
					    this._basedOnColumns.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._indicator;
	}
}
