import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { GridCellPosition as GridCellPosition_internal } from "./GridCellPosition";

export class IgxGridCellPosition
{

protected createImplementation() : GridCellPosition_internal
{
	return new GridCellPosition_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridCellPosition_internal {
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
	 * Gets or sets the row position of the cell.
	*/
	get rowIndex() : number {
		return (this.i.rowIndex as number);
	}
	set rowIndex(v: number) {
		this.i.rowIndex = +v;
	}
	/**
	 * Gets or sets the column position of the cell.  Can be null for spanning elements like section headers.
	*/
	get columnUniqueKey() : string {
		return (this.i.columnUniqueKey as string);
	}
	set columnUniqueKey(v: string) {
		this.i.columnUniqueKey = v;
	}
}
