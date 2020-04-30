import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { PropertyUpdatedEventArgs as PropertyUpdatedEventArgs_internal } from "./PropertyUpdatedEventArgs";

/**
 * EventArgs class for property updated events.
*/
export class IgxPropertyUpdatedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : PropertyUpdatedEventArgs_internal {
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
	 * Name of the property being updated.
	*/
	get propertyName() : string {
		return (this.i.propertyName as string);
	}
	set propertyName(v: string) {
		this.i.propertyName = v;
	}
	/**
	 * Old or previous value of the property being updated.
	*/
	get oldValue() : any {
		return this.i.oldValue as any;
	}
	set oldValue(v: any) {
		this.i.oldValue = v;
	}
	/**
	 * New or current value of the property being updated.
	*/
	get newValue() : any {
		return this.i.newValue as any;
	}
	set newValue(v: any) {
		this.i.newValue = v;
	}
}
