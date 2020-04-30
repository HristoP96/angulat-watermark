import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxFinancialSeriesComponent } from "./igx-financial-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { FinancialOverlay } from "./FinancialOverlay";

/**
 * Represents the base functionality for a IgxDataChartComponent financial overlay series.
 * The difference between a FinancialIndicator and a FinancialOverlay is small.
 * Overlays are usually drawn against the same axes as the price, but they don't
 * have to be. Overlays mostly display multiple values, but not all of them, and so
 * so some indicators.
* 
* The `IgxFinancialOverlayComponent` class represents the base functionality for a IgxDataChartComponent financial overlay series.
* 
* ```html
* <igx-data-chart      
* #chart
* [dataSource]="data" >  
* <igx-ordinal-time-x-axis
* dateTimeMemberPath="TimeStamp"
* #xAxis
* >
* </igx-ordinal-time-x-axis>   	 
* <igx-numeric-y-axis
*     minimumValue="0"
*     #yAxis>
* </igx-numeric-y-axis>  
* <igx-bollinger-bands-overlay
* [xAxis]="xAxis"
*     [yAxis]="yAxis"
*     openMemberPath="open"
*     highMemberPath="high"
*     lowMemberPath="low"      
*     closeMemberPath="close"
*     volumeMemberPath="volume">
* </igx-bollinger-bands-overlay>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxBollingerBandsOverlayComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.openMemberPath = "open";
* series.highMemberPath = "high";
* series.lowMemberPath = "low";
* series.closeMemberPath = "close";
* series.volumeMemberPath="volume";
* this.chart.series.add(series);
* ```
*/
export const IgxFinancialOverlayComponent_PROVIDERS = [{provide: IgxFinancialSeriesComponent, useExisting: forwardRef(() => IgxFinancialOverlayComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFinancialOverlayComponent)}];
export abstract class IgxFinancialOverlayComponent extends IgxFinancialSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : FinancialOverlay {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the number of values to hide at the beginning of the indicator.
	* 
	* Use the `ignoreFirst` property to sets the number of values to hide at the beginning of the indicator.
	* 
	* ```ts
	*  series.ignoreFirst=2;
	* ```
	* 
	* ```html
	*    <igx-data-chart      
	*    #chart
	*        [dataSource]="data" >     
	*  <igx-category-x-axis       
	*        label="label"
	*        #xAxis> 
	*        </igx-category-x-axis>   
	* <igx-numeric-y-axis
	*        minimumValue="0"
	*        #yAxis>
	* </igx-numeric-y-axis>  
	* <igx-bollinger-bands-overlay
	*    [xAxis]="xAxis"
	*      [yAxis]="yAxis"
	*      openMemberPath="open"
	*      highMemberPath="high"
	*      lowMemberPath="low"      
	*      closeMemberPath="close"
	*      volumeMemberPath="volume"
	* 	  ignoreFirst="2">
	* </igx-bollinger-bands-overlay>
	*  </igx-data-chart>
	* ```
	*/
	get ignoreFirst() : number {
		return (this.i.ignoreFirst as number);
	}
	@Input()
	set ignoreFirst(v: number) {
		this.i.ignoreFirst = +v;
	}
	/**
	 * Scrolls the series to display the item for the specified data item.
	 * The series is scrolled by the minimum amount required to place the specified data item within
	 * the central 80% of the visible axis.
	
	* @param item  * The data item (item) to scroll to.
	* 
	* Use the `scrollIntoView` method to scrolls the series to display the item for the specified data item.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
}
