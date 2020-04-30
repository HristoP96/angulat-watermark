import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGridSelectedCellRangesCollection } from "./igx-grid-selected-cell-ranges-collection";
import { GridSelectedCellRangesChangedEventArgs as GridSelectedCellRangesChangedEventArgs_internal } from "./GridSelectedCellRangesChangedEventArgs";
import { GridSelectedCellRangesCollection as GridSelectedCellRangesCollection_internal } from "./GridSelectedCellRangesCollection";
import { CellRange } from "./CellRange";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";

/**
 * Information about the change to the selected cell ranges in the grid.
*/
export class IgxGridSelectedCellRangesChangedEventArgs
{

protected createImplementation() : GridSelectedCellRangesChangedEventArgs_internal
{
	return new GridSelectedCellRangesChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridSelectedCellRangesChangedEventArgs_internal {
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
	private _addedRanges: IgxGridSelectedCellRangesCollection = null;
	                                
	/**
	 * The cell ranges added to the selection.
	*/
	get addedRanges() : IgxGridSelectedCellRangesCollection {
	                                        if (this._addedRanges === null) {
	                                            let coll = new IgxGridSelectedCellRangesCollection();
	                                            let innerColl = this.i.addedRanges;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedCellRangesCollection_internal();
			}
	                                            this._addedRanges = (coll as any)._fromInner(innerColl);
	                                            this.i.addedRanges = innerColl;
	
	                                        }
		return this._addedRanges;
	}
	set addedRanges(v: IgxGridSelectedCellRangesCollection) {
	                                        if (this._addedRanges !== null) {
	                                            (this._addedRanges as any)._setSyncTarget(null);
	                                            this._addedRanges = null;
	                                        }
	                                        let coll = new IgxGridSelectedCellRangesCollection();
	                                        this._addedRanges = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<CellRange>((CellRange as any).$type);
	                                        let innerColl = this.i.addedRanges;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedCellRangesCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._addedRanges as any)._setSyncTarget(syncColl);
	                                        this.i.addedRanges = innerColl;
	
	}
	private _removedRanges: IgxGridSelectedCellRangesCollection = null;
	                                
	/**
	 * The cell ranges removed from the selection.
	*/
	get removedRanges() : IgxGridSelectedCellRangesCollection {
	                                        if (this._removedRanges === null) {
	                                            let coll = new IgxGridSelectedCellRangesCollection();
	                                            let innerColl = this.i.removedRanges;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedCellRangesCollection_internal();
			}
	                                            this._removedRanges = (coll as any)._fromInner(innerColl);
	                                            this.i.removedRanges = innerColl;
	
	                                        }
		return this._removedRanges;
	}
	set removedRanges(v: IgxGridSelectedCellRangesCollection) {
	                                        if (this._removedRanges !== null) {
	                                            (this._removedRanges as any)._setSyncTarget(null);
	                                            this._removedRanges = null;
	                                        }
	                                        let coll = new IgxGridSelectedCellRangesCollection();
	                                        this._removedRanges = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<CellRange>((CellRange as any).$type);
	                                        let innerColl = this.i.removedRanges;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedCellRangesCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._removedRanges as any)._setSyncTarget(syncColl);
	                                        this.i.removedRanges = innerColl;
	
	}
	private _updatedRanges: IgxGridSelectedCellRangesCollection = null;
	                                
	/**
	 * The cell ranges that have been updated by the grid.
	*/
	get updatedRanges() : IgxGridSelectedCellRangesCollection {
	                                        if (this._updatedRanges === null) {
	                                            let coll = new IgxGridSelectedCellRangesCollection();
	                                            let innerColl = this.i.updatedRanges;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedCellRangesCollection_internal();
			}
	                                            this._updatedRanges = (coll as any)._fromInner(innerColl);
	                                            this.i.updatedRanges = innerColl;
	
	                                        }
		return this._updatedRanges;
	}
	set updatedRanges(v: IgxGridSelectedCellRangesCollection) {
	                                        if (this._updatedRanges !== null) {
	                                            (this._updatedRanges as any)._setSyncTarget(null);
	                                            this._updatedRanges = null;
	                                        }
	                                        let coll = new IgxGridSelectedCellRangesCollection();
	                                        this._updatedRanges = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<CellRange>((CellRange as any).$type);
	                                        let innerColl = this.i.updatedRanges;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedCellRangesCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._updatedRanges as any)._setSyncTarget(syncColl);
	                                        this.i.updatedRanges = innerColl;
	
	}
}
