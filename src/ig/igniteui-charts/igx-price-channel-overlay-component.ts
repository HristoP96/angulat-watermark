import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxFinancialOverlayComponent } from "./igx-financial-overlay-component";
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PriceChannelOverlay } from "./PriceChannelOverlay";
import { toPoint } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent Financial Price Channel Overlay series.
 * Default required members: High, Low
* 
* You can use the `IgxPriceChannelOverlayComponent` to display price volatility.
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
*     <igx-price-channel-overlay
* 		[xAxis]="xAxis"
* 		[yAxis]="yAxis"
* 		openMemberPath="open"
* 		highMemberPath="high"
* 		lowMemberPath="low"
* 		closeMemberPath="close">
*     </igx-price-channel-overlay>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxPriceChannelOverlayComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* this.chart.series.add(series);
* ```
*/
export const IgxPriceChannelOverlayComponent_PROVIDERS = [{provide: IgxFinancialOverlayComponent, useExisting: forwardRef(() => IgxPriceChannelOverlayComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPriceChannelOverlayComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPriceChannelOverlayComponent)}];
@Component({
  selector: 'igx-price-channel-overlay',
  template: ``,
  providers: [{provide: IgxFinancialOverlayComponent, useExisting: forwardRef(() => IgxPriceChannelOverlayComponent)}, {provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxPriceChannelOverlayComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPriceChannelOverlayComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxPriceChannelOverlayComponent extends IgxFinancialOverlayComponent
{

protected createImplementation() : PriceChannelOverlay
{
	return new PriceChannelOverlay();
}
	/**
	                             * @hidden 
	                             */
	public get i() : PriceChannelOverlay {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the moving average period for the current PriceChannelOverlay object.
	 * The typical, and initial, value for Bollinger band periods is 14.
	* 
	* You can use the `period` to set the moving average.
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
	*     <igx-price-channel-overlay
	* 		#series
	* 		[xAxis]="xAxis"
	* 		[yAxis]="yAxis"
	* 		openMemberPath="open"
	* 		highMemberPath="high"
	* 		lowMemberPath="low"
	* 		closeMemberPath="close"
	* 		period="14">
	*     </igx-price-channel-overlay>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.period = 14;
	* ```
	*/
	get period() : number {
		return (this.i.period as number);
	}
	@Input()
	set period(v: number) {
		this.i.period = +v;
	}
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getNextOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getNextOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getPreviousOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getPreviousOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
}
