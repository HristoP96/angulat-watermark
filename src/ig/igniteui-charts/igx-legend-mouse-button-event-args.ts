import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ILegendSeries } from "igniteui-core/ILegendSeries";
import { ILegendOwner } from "igniteui-core/ILegendOwner";
import { LegendMouseButtonEventArgs as LegendMouseButtonEventArgs_internal } from "./LegendMouseButtonEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Provides data for legend mouse button related events.
*/
export class IgxLegendMouseButtonEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : LegendMouseButtonEventArgs_internal {
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
	*/
	get handled() : boolean {
		return (this.i.handled as boolean);
	}
	set handled(v: boolean) {
		this.i.handled = ensureBool(v);
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
	get series() : ILegendSeries {
		return this.i.series;
	}
	set series(v: ILegendSeries) {
		this.i.series = v;
	}
	/**
	 * Gets the Chart associated with the current event.
	*/
	get chart() : ILegendOwner {
		return this.i.chart;
	}
	set chart(v: ILegendOwner) {
		this.i.chart = v;
	}
	/**
	 * The legend item that was the target of the mouse event.
	*/
	get legendItem() : any {
		return this.i.legendItem as any;
	}
	set legendItem(v: any) {
		this.i.legendItem = v;
	}
	/**
	 * Provides a human readable description of the mouse button event.
	
	*/
	public toString() : string {
		let iv = this.i.toString();
		return (iv);
	}
}
