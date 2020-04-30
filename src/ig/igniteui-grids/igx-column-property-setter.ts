import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ColumnPropertySetter as ColumnPropertySetter_internal } from "./ColumnPropertySetter";

/**
 * Indicates that a specified column should have a specified property set to a value.
*/
export class IgxColumnPropertySetter
{

protected createImplementation() : ColumnPropertySetter_internal
{
	return new ColumnPropertySetter_internal(0);
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnPropertySetter_internal {
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
	 * The name or key of the column to change the property of
	*/
	get columnName() : string {
		return (this.i.columnName as string);
	}
	set columnName(v: string) {
		this.i.columnName = v;
	}
	/**
	 * The name of the property to change
	*/
	get propertyName() : string {
		return (this.i.propertyName as string);
	}
	set propertyName(v: string) {
		this.i.propertyName = v;
	}
	/**
	 * The new value of the property
	*/
	get value() : any {
		return this.i.value as any;
	}
	set value(v: any) {
		this.i.value = v;
	}
}
