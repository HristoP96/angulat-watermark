import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { StockPopulateEventArgs as StockPopulateEventArgs_internal } from "./StockPopulateEventArgs";

/**
 * Represents event arguments for
*/
export class IgxStockPopulateEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : StockPopulateEventArgs_internal {
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
	
	*/
	get symbol() : string {
		return (this.i.symbol as string);
	}
	set symbol(v: string) {
		this.i.symbol = v;
	}
	/**
	
	*/
	get name() : string {
		return (this.i.name as string);
	}
	set name(v: string) {
		this.i.name = v;
	}
}
