import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGridCellPosition } from "./igx-grid-cell-position";
import { GridActiveCellChangedEventArgs as GridActiveCellChangedEventArgs_internal } from "./GridActiveCellChangedEventArgs";

/**
 * Information about the change to the selected cells in the grid.
*/
export class IgxGridActiveCellChangedEventArgs
{

protected createImplementation() : GridActiveCellChangedEventArgs_internal
{
	return new GridActiveCellChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridActiveCellChangedEventArgs_internal {
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
	 * The new active cell.
	*/
	get newActiveCell() : IgxGridCellPosition {
	                                        if (this.i.newActiveCell == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.newActiveCell as any).externalObject) {
	                                            let e = new IgxGridCellPosition();
	                                            (e as any)._implementation = this.i.newActiveCell;
	                                            (this.i.newActiveCell as any).externalObject = e;
	                                        }
		return (this.i.newActiveCell as any).externalObject;
	}
	set newActiveCell(v: IgxGridCellPosition) {
		v == null ? this.i.newActiveCell = null : this.i.newActiveCell = v.i;
	}
	/**
	 * The old active cell.
	*/
	get oldActiveCell() : IgxGridCellPosition {
	                                        if (this.i.oldActiveCell == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.oldActiveCell as any).externalObject) {
	                                            let e = new IgxGridCellPosition();
	                                            (e as any)._implementation = this.i.oldActiveCell;
	                                            (this.i.oldActiveCell as any).externalObject = e;
	                                        }
		return (this.i.oldActiveCell as any).externalObject;
	}
	set oldActiveCell(v: IgxGridCellPosition) {
		v == null ? this.i.oldActiveCell = null : this.i.oldActiveCell = v.i;
	}
}
