import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { RenderRequestedEventArgs as RenderRequestedEventArgs_internal } from "./RenderRequestedEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * EventArgs class for RenderRequested events.
* 
* Use the `RenderRequested` class for RenderRequested events.
*/
export class IgxRenderRequestedEventArgs
{

protected createImplementation() : RenderRequestedEventArgs_internal
{
	return new RenderRequestedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : RenderRequestedEventArgs_internal {
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
	 * True if animation is requested.
	* 
	* Use the `animate` property true if the animation is requested.
	* 
	* ```ts
	* e.animation = true;
	* ```
	*/
	get animate() : boolean {
		return (this.i.animate as boolean);
	}
	set animate(v: boolean) {
		this.i.animate = ensureBool(v);
	}
}
