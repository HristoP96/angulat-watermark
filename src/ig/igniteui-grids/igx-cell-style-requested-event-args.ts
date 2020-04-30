import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CellStyleRequestedEventArgs as CellStyleRequestedEventArgs_internal } from "./CellStyleRequestedEventArgs";

/**
 * Information about the style request for a cell.
*/
export class IgxCellStyleRequestedEventArgs
{

protected createImplementation() : CellStyleRequestedEventArgs_internal
{
	return new CellStyleRequestedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CellStyleRequestedEventArgs_internal {
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
	 * The proposed style key for the cell. Used for recycling the cell.
	*/
	get styleKey() : string {
		return (this.i.styleKey as string);
	}
	set styleKey(v: string) {
		this.i.styleKey = v;
	}
	/**
	 * The resolved value for the cell.
	*/
	get resolvedValue() : any {
		return this.i.resolvedValue as any;
	}
	set resolvedValue(v: any) {
		this.i.resolvedValue = v;
	}
	/**
	 * The row number for the cell.
	*/
	get rowNumber() : number {
		return (this.i.rowNumber as number);
	}
	set rowNumber(v: number) {
		this.i.rowNumber = +v;
	}
}
