import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { IgxSeriesViewerComponent } from "./igx-series-viewer-component";
import { DataChartMouseButtonEventArgs as DataChartMouseButtonEventArgs_internal } from "./DataChartMouseButtonEventArgs";
import { ensureBool, fromPoint } from "igniteui-core/componentUtil";

/**
 * Provides data for IgxDataChartComponent mouse button related events.
* 
* `DataChartMouseButtonEventHandler` class represents the method that will handle IgxDataChartComponent mouse button related events.
* 
* ```html
*  <igx-data-chart  #chart 
*       [dataSource]="data"
* 	  (seriesMouseLeftButtonDown)="chart_seriesMouseLeftButtonDown()">
*       <igx-category-x-axis
*         label="label"
*         #xAxis
*         >
*       </igx-category-x-axis>
*       <igx-numeric-y-axis
*         minimumValue="0"
*         #yAxis>
*       </igx-numeric-y-axis>
* 
*       <igx-column-series                
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*       </igx-column-series>
*     </igx-data-chart>
* ```
* 
* ```ts
* this.chart.seriesMouseLeftButtonDown.subscribe(this.chart_seriesMouseLeftButtonDown);
* chart_seriesMouseLeftButtonDown(sender :any,args: DataChartMouseButtonEventArgs )
*   {
*   }
* ```
*/
export class IgxDataChartMouseButtonEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : DataChartMouseButtonEventArgs_internal {
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
	 * Gets or sets a value that indicates the present state of the event handling for a routed 
	 * event as it travels the route.
	 * ChartMouseButton events are not routed events; setting this property effects the underlying
	 * MouseButtonEvent.
	* 
	* Use the `handled` property to indicates the present state of the event handling for a routed event.
	*/
	get handled() : boolean {
		return (this.i.handled as boolean);
	}
	set handled(v: boolean) {
		this.i.handled = ensureBool(v);
	}
	/**
	 * Gets a reference to the object that raised the event.
	* 
	* Use the `originalSource` property for the raised object event.
	* 
	* ```ts
	* args.originalSource;
	* ```
	*/
	get originalSource() : any {
		return this.i.originalSource as any;
	}
	/**
	 * Gets the ItemsSource item associated with the current event.
	* 
	* Use the `item` property to get the ItemsSource item associated with the current event.
	* 
	* ```ts
	* var item1= args.item;
	* ```
	*/
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
	/**
	 * Gets the series associated with the current event.
	* 
	* Use the `series` property for the associated current event.
	* 
	* ```ts
	*  var DataSeries= args.series;  
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
	 * Gets the Chart associated with the current event.
	* 
	* Use the `chart` property to get the chart associated with the current event.
	* 
	* ```ts
	* var dataChart=  args.chart;
	* ```
	*/
	get chart() : IgxSeriesViewerComponent {
	                                        if (this.i.chart == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.chart as any).externalObject;
	}
	set chart(v: IgxSeriesViewerComponent) {
		v == null ? this.i.chart = null : this.i.chart = v.i;
	}
	/**
	 * Provides a human readable description of the mouse button event.
	
	* 
	* Use the `toString` property to provides a human readable discription.
	* 
	* ```ts
	*   var item= args.item.label.toString();
	* ```
	*/
	public toString() : string {
		let iv = this.i.toString();
		return (iv);
	}
	/**
	 * Returns the x- and y- coordinates of the mouse pointer position, optionally evaluated
	 * against the origin of a supplied UIElement.
	
	* @param relativeTo  * Any UIElement derived object that is contained by the the engine plug-in
	 * and connected to the object tree. To specify the object relative to the overall the engine
	 * coordinate system, use a relativeTo value of null.
	* 
	* To get mouse X and Y position.
	* 
	* ```ts
	*    var args.getPosition;
	* ```
	*/
	public getPosition(relativeTo: any) : IgPoint {
		let iv = this.i.getPosition(relativeTo);
		return fromPoint(iv);
	}
}
