import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CheckboxChangeEventArgs as CheckboxChangeEventArgs_internal } from "./CheckboxChangeEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

export class IgxCheckboxChangeEventArgs
{

protected createImplementation() : CheckboxChangeEventArgs_internal
{
	return new CheckboxChangeEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CheckboxChangeEventArgs_internal {
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
	get isChecked() : boolean {
		return (this.i.isChecked as boolean);
	}
	set isChecked(v: boolean) {
		this.i.isChecked = ensureBool(v);
	}
}
