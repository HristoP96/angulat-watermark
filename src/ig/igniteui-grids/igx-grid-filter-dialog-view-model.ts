import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { DataSourceSchemaPropertyType, DataSourceSchemaPropertyType_$type } from "igniteui-core/DataSourceSchemaPropertyType";
import { IgxGridFilterDialogViewModelGroupingLevelCollection } from "./igx-grid-filter-dialog-view-model-grouping-level-collection";
import { IgxGridFilterDialogViewModelRowCollection } from "./igx-grid-filter-dialog-view-model-row-collection";
import { GridFilterDialogViewModel as GridFilterDialogViewModel_internal } from "./GridFilterDialogViewModel";
import { ensureEnum, ensureBool } from "igniteui-core/componentUtil";
import { GridFilterDialogViewModelGroupingLevelCollection as GridFilterDialogViewModelGroupingLevelCollection_internal } from "./GridFilterDialogViewModelGroupingLevelCollection";
import { GridFilterDialogViewModelGroupingLevel } from "./GridFilterDialogViewModelGroupingLevel";
import { SyncableObservableCollection$1 } from "igniteui-core/SyncableObservableCollection$1";
import { GridFilterDialogViewModelRowCollection as GridFilterDialogViewModelRowCollection_internal } from "./GridFilterDialogViewModelRowCollection";
import { GridFilterDialogViewModelRow } from "./GridFilterDialogViewModelRow";

export class IgxGridFilterDialogViewModel
{

protected createImplementation() : GridFilterDialogViewModel_internal
{
	return new GridFilterDialogViewModel_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridFilterDialogViewModel_internal {
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
	get propertyType() : DataSourceSchemaPropertyType {
		return this.i.propertyType;
	}
	set propertyType(v: DataSourceSchemaPropertyType) {
		this.i.propertyType = ensureEnum<DataSourceSchemaPropertyType>(DataSourceSchemaPropertyType_$type, v);
	}
	private _groupingLevels: IgxGridFilterDialogViewModelGroupingLevelCollection = null;
	                                
	get groupingLevels() : IgxGridFilterDialogViewModelGroupingLevelCollection {
	                                        if (this._groupingLevels === null) {
	                                            let coll = new IgxGridFilterDialogViewModelGroupingLevelCollection();
	                                            let innerColl = this.i.groupingLevels;
			if (!innerColl) {
	                                            	innerColl = new GridFilterDialogViewModelGroupingLevelCollection_internal();
			}
	                                            this._groupingLevels = (coll as any)._fromInner(innerColl);
	                                            this.i.groupingLevels = innerColl;
	
	                                        }
		return this._groupingLevels;
	}
	set groupingLevels(v: IgxGridFilterDialogViewModelGroupingLevelCollection) {
	                                        if (this._groupingLevels !== null) {
	                                            (this._groupingLevels as any)._setSyncTarget(null);
	                                            this._groupingLevels = null;
	                                        }
	                                        let coll = new IgxGridFilterDialogViewModelGroupingLevelCollection();
	                                        this._groupingLevels = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<GridFilterDialogViewModelGroupingLevel>((GridFilterDialogViewModelGroupingLevel as any).$type);
	                                        let innerColl = this.i.groupingLevels;
		if (!innerColl) {
	                                        	innerColl = new GridFilterDialogViewModelGroupingLevelCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._groupingLevels as any)._setSyncTarget(syncColl);
	                                        this.i.groupingLevels = innerColl;
	
	}
	get isTopLevelOr() : boolean {
		return (this.i.isTopLevelOr as boolean);
	}
	set isTopLevelOr(v: boolean) {
		this.i.isTopLevelOr = ensureBool(v);
	}
	get maxGroupingLevels() : number {
		return (this.i.maxGroupingLevels as number);
	}
	set maxGroupingLevels(v: number) {
		this.i.maxGroupingLevels = +v;
	}
	private _rows: IgxGridFilterDialogViewModelRowCollection = null;
	                                
	get rows() : IgxGridFilterDialogViewModelRowCollection {
	                                        if (this._rows === null) {
	                                            let coll = new IgxGridFilterDialogViewModelRowCollection();
	                                            let innerColl = this.i.rows;
			if (!innerColl) {
	                                            	innerColl = new GridFilterDialogViewModelRowCollection_internal();
			}
	                                            this._rows = (coll as any)._fromInner(innerColl);
	                                            this.i.rows = innerColl;
	
	                                        }
		return this._rows;
	}
	set rows(v: IgxGridFilterDialogViewModelRowCollection) {
	                                        if (this._rows !== null) {
	                                            (this._rows as any)._setSyncTarget(null);
	                                            this._rows = null;
	                                        }
	                                        let coll = new IgxGridFilterDialogViewModelRowCollection();
	                                        this._rows = (coll as any)._fromOuter(v);
	                                        let syncColl = new SyncableObservableCollection$1<GridFilterDialogViewModelRow>((GridFilterDialogViewModelRow as any).$type);
	                                        let innerColl = this.i.rows;
		if (!innerColl) {
	                                        	innerColl = new GridFilterDialogViewModelRowCollection_internal();
		}
	                                        (syncColl as any)._inner = innerColl;
	                                        syncColl.clear();
	                                        (this._rows as any)._setSyncTarget(syncColl);
	                                        this.i.rows = innerColl;
	
	}
	public addNewRow() {
		this.i.addNewRow();
	}
	public canGroupRange(startIndex: number, endIndex: number) : boolean {
		let iv = this.i.canGroupRange(startIndex, endIndex);
		return (iv);
	}
	public ungroupRange(startIndex: number, endIndex: number) {
		this.i.ungroupRange(startIndex, endIndex);
	}
	public targetingRange(startIndex: number, endIndex: number) : boolean {
		let iv = this.i.targetingRange(startIndex, endIndex);
		return (iv);
	}
	public toggleRange(startIndex: number, endIndex: number) {
		this.i.toggleRange(startIndex, endIndex);
	}
	public groupRange(startIndex: number, endIndex: number, isOrGrouping: boolean) {
		this.i.groupRange(startIndex, endIndex, isOrGrouping);
	}
}
