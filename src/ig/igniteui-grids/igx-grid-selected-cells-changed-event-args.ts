import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGridSelectedCellsCollection } from "./igx-grid-selected-cells-collection";
import { GridSelectedCellsChangedEventArgs as GridSelectedCellsChangedEventArgs_internal } from "./GridSelectedCellsChangedEventArgs";
import { GridSelectedCellsCollection as GridSelectedCellsCollection_internal } from "./GridSelectedCellsCollection";
import { CellKey } from "./CellKey";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";

/**
 * Information about the change to the selected cells in the grid.
*/
export class IgxGridSelectedCellsChangedEventArgs
{

protected createImplementation() : GridSelectedCellsChangedEventArgs_internal
{
	return new GridSelectedCellsChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridSelectedCellsChangedEventArgs_internal {
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
	private _addedCells: IgxGridSelectedCellsCollection = null;
	                                
	/**
	 * The cells added to the selection.
	*/
	get addedCells() : IgxGridSelectedCellsCollection {
	                                        if (this._addedCells === null) {
	                                            let coll = new IgxGridSelectedCellsCollection();
	                                            let innerColl = this.i.addedCells;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedCellsCollection_internal();
			}
	                                            this._addedCells = (coll as any)._fromInner(innerColl);
	                                            this.i.addedCells = innerColl;
	
	                                        }
		return this._addedCells;
	}
	set addedCells(v: IgxGridSelectedCellsCollection) {
	                                        if (this._addedCells !== null) {
	                                            (this._addedCells as any)._setSyncTarget(null);
	                                            this._addedCells = null;
	                                        }
	                                        let coll = new IgxGridSelectedCellsCollection();
	                                        this._addedCells = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<CellKey>((CellKey as any).$type);
	                                        let innerColl = this.i.addedCells;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedCellsCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._addedCells as any)._setSyncTarget(syncColl);
	                                        this.i.addedCells = innerColl;
	
	}
	private _removedCells: IgxGridSelectedCellsCollection = null;
	                                
	/**
	 * The cells removed from the selection.
	*/
	get removedCells() : IgxGridSelectedCellsCollection {
	                                        if (this._removedCells === null) {
	                                            let coll = new IgxGridSelectedCellsCollection();
	                                            let innerColl = this.i.removedCells;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedCellsCollection_internal();
			}
	                                            this._removedCells = (coll as any)._fromInner(innerColl);
	                                            this.i.removedCells = innerColl;
	
	                                        }
		return this._removedCells;
	}
	set removedCells(v: IgxGridSelectedCellsCollection) {
	                                        if (this._removedCells !== null) {
	                                            (this._removedCells as any)._setSyncTarget(null);
	                                            this._removedCells = null;
	                                        }
	                                        let coll = new IgxGridSelectedCellsCollection();
	                                        this._removedCells = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<CellKey>((CellKey as any).$type);
	                                        let innerColl = this.i.removedCells;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedCellsCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._removedCells as any)._setSyncTarget(syncColl);
	                                        this.i.removedCells = innerColl;
	
	}
}
