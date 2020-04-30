import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { DataSourceSchemaPropertyType, DataSourceSchemaPropertyType_$type } from "igniteui-core/DataSourceSchemaPropertyType";
import { GridFilterDialogOpeningEventArgs as GridFilterDialogOpeningEventArgs_internal } from "./GridFilterDialogOpeningEventArgs";
import { ColumnFilterCondition } from "./ColumnFilterCondition";
import { ensureEnum } from "igniteui-core/componentUtil";

export class IgxGridFilterDialogOpeningEventArgs
{

protected createImplementation() : GridFilterDialogOpeningEventArgs_internal
{
	return new GridFilterDialogOpeningEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridFilterDialogOpeningEventArgs_internal {
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
	get filter() : ColumnFilterCondition {
		return this.i.filter as ColumnFilterCondition;
	}
	set filter(v: ColumnFilterCondition) {
		this.i.filter = v;
	}
	get propertyType() : DataSourceSchemaPropertyType {
		return this.i.propertyType;
	}
	set propertyType(v: DataSourceSchemaPropertyType) {
		this.i.propertyType = ensureEnum<DataSourceSchemaPropertyType>(DataSourceSchemaPropertyType_$type, v);
	}
}
