import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { StockChangedEventArgs as StockChangedEventArgs_internal } from "./StockChangedEventArgs";

/**
 * Represents event arguments for FDC3 MessageRecived
*/
export class IgxStockChangedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : StockChangedEventArgs_internal {
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
	 * Gets array of added stock symbols
	*/
	get addedSymbols() : string[] {
		return this.i.addedSymbols as string[];
	}
	set addedSymbols(v: string[]) {
		this.i.addedSymbols = v;
	}
	/**
	 * Gets array of removed stock symbols
	*/
	get removedSymbols() : string[] {
		return this.i.removedSymbols as string[];
	}
	set removedSymbols(v: string[]) {
		this.i.removedSymbols = v;
	}
}
