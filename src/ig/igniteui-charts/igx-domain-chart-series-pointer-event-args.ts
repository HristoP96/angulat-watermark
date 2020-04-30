import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { DomainChartSeriesPointerEventArgs as DomainChartSeriesPointerEventArgs_internal } from "./DomainChartSeriesPointerEventArgs";

/**
 * Represents event arguments for chart's SeriesAdded and SeriesRemoved events
* 
* The `DomainChartSeriesPointerEventArgs` class provide events for chart's SeriesAdded and SeriesRemoved.
* 
* `SeriesPointerDown` get fired when the pointer is press down over a Series.
* 
* ```html
*  <igx-financial-chart 
*       #chart
*       [dataSource]="data"  
*       (seriesPointerDown)=chart_seriesPointerDown()    
*       >
*     </igx-financial-chart>
* ```
* 
* ```ts
* this.chart.seriesPointerDown = this.chart_seriesPointerDown();
* ```
*/
export class IgxDomainChartSeriesPointerEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : DomainChartSeriesPointerEventArgs_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {									
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	/**
	 * Gets the series hit by the pointer.
	* 
	* Use the `series` property to get the series.
	* 
	* ```ts
	*  var series= args.series;
	* ```
	*/
	get series() : IgxSeriesComponent {
	                                        if (this.i.series == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.series as any).externalObject) {
	                                            let e = IgxSeriesComponent._createFromInternal(this.i.series);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.series;
	                                            }
	                                            (this.i.series as any).externalObject = e;
	                                        }
		return (this.i.series as any).externalObject;
	}
	set series(v: IgxSeriesComponent) {
		v == null ? this.i.series = null : this.i.series = v.i;
	}
	/**
	 * Gets the item hit by the pointer.
	* 
	* Use the `item` property to get the items.
	* 
	* <https://www.infragistics.com/help/wpf/infragisticswpf.controls.charts.xamdatachart~infragistics.controls.charts.domainchartseriespointereventargs~item>
	* 
	* ```ts
	* var Chartitem = args.item;
	* ```
	*/
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
}
