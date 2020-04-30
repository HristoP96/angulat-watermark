import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxRingSeriesBaseComponent } from "./igx-ring-series-base-component";
import { Ring as Ring_internal } from "./Ring";
import { toSize, fromSize, fromPoint, toPoint } from "igniteui-core/componentUtil";

/**
 * Represents data for Ring.RingControl element.
*/
export class IgxRing
{

protected createImplementation() : Ring_internal
{
	return new Ring_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : Ring_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {
	this._implementation = this.createImplementation();
	(<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	/**
	 * Gets the index of ring in the chart.
	*/
	get index() : number {
		return (this.i.index as number);
	}
	set index(v: number) {
		this.i.index = +v;
	}
	/**
	 * Gets the inner extend of the ring in percentage.
	*/
	get innerExtend() : number {
		return (this.i.innerExtend as number);
	}
	set innerExtend(v: number) {
		this.i.innerExtend = +v;
	}
	/**
	 * Gets the size of the ring.
	*/
	get controlSize() : IgSize {
		return fromSize(this.i.controlSize);
	}
	set controlSize(v: IgSize) {
		this.i.controlSize = toSize(v);
	}
	/**
	 * Gets the center point of the ring.
	*/
	get center() : IgPoint {
		return fromPoint(this.i.center);
	}
	set center(v: IgPoint) {
		this.i.center = toPoint(v);
	}
	/**
	 * Gets reference to ring series.
	*/
	get ringSeries() : IgxRingSeriesBaseComponent {
	                                        if (this.i.ringSeries == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.ringSeries as any).externalObject) {
	                                            let e = IgxRingSeriesBaseComponent._createFromInternal(this.i.ringSeries);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.ringSeries;
	                                            }
	                                            (this.i.ringSeries as any).externalObject = e;
	                                        }
		return (this.i.ringSeries as any).externalObject;
	}
	set ringSeries(v: IgxRingSeriesBaseComponent) {
		v == null ? this.i.ringSeries = null : this.i.ringSeries = v.i;
	}
	/**
	 * Gets the ring breadth.
	*/
	get ringBreadth() : number {
		return (this.i.ringBreadth as number);
	}
	set ringBreadth(v: number) {
		this.i.ringBreadth = +v;
	}
	/**
	 * Renders the arcs.
	
	*/
	public renderArcs() : boolean {
		let iv = this.i.renderArcs();
		return (iv);
	}
	/**
	 * Prepares data needed to create Arcs.
	
	*/
	public prepareArcs() {
		this.i.prepareArcs();
	}
}
