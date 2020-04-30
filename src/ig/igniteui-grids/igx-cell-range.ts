import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CellRange as CellRange_internal } from "./CellRange";

/**
 * An indentifier for a specific cell in the grid.
*/
export class IgxCellRange
{

protected createImplementation() : CellRange_internal
{
	return new CellRange_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CellRange_internal {
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
	 * Gets or sets the start column of the range.
	*/
	get startColumn() : number {
		return (this.i.startColumn as number);
	}
	set startColumn(v: number) {
		this.i.startColumn = +v;
	}
	/**
	 * Gets or sets the end column of the range.
	*/
	get endColumn() : number {
		return (this.i.endColumn as number);
	}
	set endColumn(v: number) {
		this.i.endColumn = +v;
	}
	/**
	 * Gets or sets the start row of the range.
	*/
	get startRow() : number {
		return (this.i.startRow as number);
	}
	set startRow(v: number) {
		this.i.startRow = +v;
	}
	/**
	 * Gets or sets the end row of the range.
	*/
	get endRow() : number {
		return (this.i.endRow as number);
	}
	set endRow(v: number) {
		this.i.endRow = +v;
	}
}
