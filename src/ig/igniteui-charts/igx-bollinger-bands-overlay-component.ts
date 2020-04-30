import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxFinancialOverlayComponent } from "./igx-financial-overlay-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { BollingerBandsOverlay } from "./BollingerBandsOverlay";
import { toPoint } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent Bollinger Bands financial overlay series.
 * Default required members: High, Low, Close
* 
* You can use the `IgxBollingerBandsOverlayComponent` class represents a IgxDataChartComponent Bollinger Bands financial overlay series.
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
*     <igx-bollinger-band-overlay
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-bollinger-band-overlay>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxBollingerBandOverlayComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxBollingerBandsOverlayComponent_PROVIDERS = [{provide: IgxFinancialOverlayComponent, useExisting: forwardRef(() => IgxBollingerBandsOverlayComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandsOverlayComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandsOverlayComponent)}];
@Component({
  selector: 'igx-bollinger-bands-overlay',
  template: ``,
  providers: [{provide: IgxFinancialOverlayComponent, useExisting: forwardRef(() => IgxBollingerBandsOverlayComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandsOverlayComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBollingerBandsOverlayComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxBollingerBandsOverlayComponent extends IgxFinancialOverlayComponent
{

protected createImplementation() : BollingerBandsOverlay
{
	return new BollingerBandsOverlay();
}
	/**
	                             * @hidden 
	                             */
	public get i() : BollingerBandsOverlay {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current BollingerBandOverlay object.
	 * The typical, and initial, value for Bollinger band periods is 14.
	* 
	* You can use the `period` property for moving average of the current BollingerBandOverlay object.
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
	*     <igx-bollinger-band-overlay
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		period="7">
	*     </igx-bollinger-band-overlay>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.period = 7;
	* ```
	*/
	get period() : number {
		return (this.i.period as number);
	}
	@Input()
	set period(v: number) {
		this.i.period = +v;
	}
	/**
	 * Gets or sets the moving average period for the current BollingerBandOverlay object.
	 * The typical, and initial, value for Bollinger band multipliers is 2.
	* 
	* You can use the `IgxBollingerBandsOverlayComponent`
	*/
	get multiplier() : number {
		return (this.i.multiplier as number);
	}
	@Input()
	set multiplier(v: number) {
		this.i.multiplier = +v;
	}
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getPreviousOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getPreviousOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getNextOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getNextOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
}
