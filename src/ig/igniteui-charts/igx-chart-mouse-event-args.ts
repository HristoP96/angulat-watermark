import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { IgxSeriesViewerComponent } from "./igx-series-viewer-component";
import { ChartMouseEventArgs as ChartMouseEventArgs_internal } from "./ChartMouseEventArgs";
import { fromPoint } from "igniteui-core/componentUtil";

/**
 * Provides data for IgxDataChartComponent mouse button related events.
*/
export class IgxChartMouseEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ChartMouseEventArgs_internal {
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
	 * Gets a reference to the object that raised the event.
	*/
	get originalSource() : any {
		return this.i.originalSource as any;
	}
	/**
	 * Gets the ItemsSource item associated with the current event.
	*/
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
	/**
	 * Gets the series associated with the current event.
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
	*/
	public getPosition(relativeTo: any) : IgPoint {
		let iv = this.i.getPosition(relativeTo);
		return fromPoint(iv);
	}
}
