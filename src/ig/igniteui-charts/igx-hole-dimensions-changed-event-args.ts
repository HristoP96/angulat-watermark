import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { HoleDimensionsChangedEventArgs as HoleDimensionsChangedEventArgs_internal } from "./HoleDimensionsChangedEventArgs";
import { fromPoint, toPoint } from "igniteui-core/componentUtil";

/**
 * EventArgs class holding information about the dimensions of a hole in a doughnut chart.
*/
export class IgxHoleDimensionsChangedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : HoleDimensionsChangedEventArgs_internal {
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
	 * The center point of the hole.
	*/
	get center() : IgPoint {
		return fromPoint(this.i.center);
	}
	/**
	 * The radius of the hole.
	*/
	get radius() : number {
		return (this.i.radius as number);
	}
}
