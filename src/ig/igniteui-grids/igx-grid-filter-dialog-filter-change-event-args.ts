import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { GridFilterDialogFilterChangeEventArgs as GridFilterDialogFilterChangeEventArgs_internal } from "./GridFilterDialogFilterChangeEventArgs";
import { ColumnFilterCondition } from "./ColumnFilterCondition";

export class IgxGridFilterDialogFilterChangeEventArgs
{

protected createImplementation() : GridFilterDialogFilterChangeEventArgs_internal
{
	return new GridFilterDialogFilterChangeEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridFilterDialogFilterChangeEventArgs_internal {
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
}
