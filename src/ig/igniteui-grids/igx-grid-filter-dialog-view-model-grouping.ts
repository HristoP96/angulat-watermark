import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { GridFilterDialogViewModelGrouping as GridFilterDialogViewModelGrouping_internal } from "./GridFilterDialogViewModelGrouping";
import { ensureBool } from "igniteui-core/componentUtil";

export class IgxGridFilterDialogViewModelGrouping
{

protected createImplementation() : GridFilterDialogViewModelGrouping_internal
{
	return new GridFilterDialogViewModelGrouping_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridFilterDialogViewModelGrouping_internal {
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
	get startIndex() : number {
		return (this.i.startIndex as number);
	}
	set startIndex(v: number) {
		this.i.startIndex = +v;
	}
	get endIndex() : number {
		return (this.i.endIndex as number);
	}
	set endIndex(v: number) {
		this.i.endIndex = +v;
	}
	get isOrGrouping() : boolean {
		return (this.i.isOrGrouping as boolean);
	}
	set isOrGrouping(v: boolean) {
		this.i.isOrGrouping = ensureBool(v);
	}
}
