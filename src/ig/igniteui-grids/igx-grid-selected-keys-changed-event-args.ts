import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxGridSelectedKeysCollection } from "./igx-grid-selected-keys-collection";
import { GridSelectedKeysChangedEventArgs as GridSelectedKeysChangedEventArgs_internal } from "./GridSelectedKeysChangedEventArgs";
import { GridSelectedKeysCollection as GridSelectedKeysCollection_internal } from "./GridSelectedKeysCollection";
import { PrimaryKeyValue } from "./PrimaryKeyValue";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";

/**
 * Information about the change to the selected keys in the grid.
*/
export class IgxGridSelectedKeysChangedEventArgs
{

protected createImplementation() : GridSelectedKeysChangedEventArgs_internal
{
	return new GridSelectedKeysChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridSelectedKeysChangedEventArgs_internal {
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
	private _addedKeys: IgxGridSelectedKeysCollection = null;
	                                
	/**
	 * The keys added to the selection.
	*/
	get addedKeys() : IgxGridSelectedKeysCollection {
	                                        if (this._addedKeys === null) {
	                                            let coll = new IgxGridSelectedKeysCollection();
	                                            let innerColl = this.i.addedKeys;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedKeysCollection_internal();
			}
	                                            this._addedKeys = (coll as any)._fromInner(innerColl);
	                                            this.i.addedKeys = innerColl;
	
	                                        }
		return this._addedKeys;
	}
	set addedKeys(v: IgxGridSelectedKeysCollection) {
	                                        if (this._addedKeys !== null) {
	                                            (this._addedKeys as any)._setSyncTarget(null);
	                                            this._addedKeys = null;
	                                        }
	                                        let coll = new IgxGridSelectedKeysCollection();
	                                        this._addedKeys = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<PrimaryKeyValue>((PrimaryKeyValue as any).$type);
	                                        let innerColl = this.i.addedKeys;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedKeysCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._addedKeys as any)._setSyncTarget(syncColl);
	                                        this.i.addedKeys = innerColl;
	
	}
	private _removedKeys: IgxGridSelectedKeysCollection = null;
	                                
	/**
	 * The keys removed from the selection.
	*/
	get removedKeys() : IgxGridSelectedKeysCollection {
	                                        if (this._removedKeys === null) {
	                                            let coll = new IgxGridSelectedKeysCollection();
	                                            let innerColl = this.i.removedKeys;
			if (!innerColl) {
	                                            	innerColl = new GridSelectedKeysCollection_internal();
			}
	                                            this._removedKeys = (coll as any)._fromInner(innerColl);
	                                            this.i.removedKeys = innerColl;
	
	                                        }
		return this._removedKeys;
	}
	set removedKeys(v: IgxGridSelectedKeysCollection) {
	                                        if (this._removedKeys !== null) {
	                                            (this._removedKeys as any)._setSyncTarget(null);
	                                            this._removedKeys = null;
	                                        }
	                                        let coll = new IgxGridSelectedKeysCollection();
	                                        this._removedKeys = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<PrimaryKeyValue>((PrimaryKeyValue as any).$type);
	                                        let innerColl = this.i.removedKeys;
		if (!innerColl) {
	                                        	innerColl = new GridSelectedKeysCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._removedKeys as any)._setSyncTarget(syncColl);
	                                        this.i.removedKeys = innerColl;
	
	}
}
