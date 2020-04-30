import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { IgxSeriesViewerComponent } from "./igx-series-viewer-component";
import { ChartCursorEventArgs as ChartCursorEventArgs_internal } from "./ChartCursorEventArgs";

/**
 * Provides data for IgxDataChartComponent mouse button related events.
*/
export class IgxChartCursorEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ChartCursorEventArgs_internal {
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
	get seriesViewer() : IgxSeriesViewerComponent {
	                                        if (this.i.seriesViewer == null) {
	                                            return null;
	                                        }
	                                        
		return (this.i.seriesViewer as any).externalObject;
	}
	set seriesViewer(v: IgxSeriesViewerComponent) {
		v == null ? this.i.seriesViewer = null : this.i.seriesViewer = v.i;
	}
	/**
	 * Provides a human readable expresion of the event arguments.
	
	*/
	public toString() : string {
		let iv = this.i.toString();
		return (iv);
	}
}
