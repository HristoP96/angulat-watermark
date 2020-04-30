import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { RectChangedEventArgs as RectChangedEventArgs_internal } from "./RectChangedEventArgs";
import { fromRect, toRect } from "./componentUtil";

/**
 * Provides data for rectangle changed events.
*/
export class IgxRectChangedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : RectChangedEventArgs_internal {
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
	 * Gets the rectangle before the change.
	*/
	get oldRect() : IgRect {
		return fromRect(this.i.oldRect);
	}
	set oldRect(v: IgRect) {
		this.i.oldRect = toRect(v);
	}
	/**
	 * Gets the new rectangle.
	*/
	get newRect() : IgRect {
		return fromRect(this.i.newRect);
	}
	set newRect(v: IgRect) {
		this.i.newRect = toRect(v);
	}
}
