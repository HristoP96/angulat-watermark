import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CheckedChangedEventArgs as CheckedChangedEventArgs_internal } from "./CheckedChangedEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

export class IgxCheckedChangedEventArgs
{

protected createImplementation() : CheckedChangedEventArgs_internal
{
	return new CheckedChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CheckedChangedEventArgs_internal {
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
	get index() : number {
		return (this.i.index as number);
	}
	set index(v: number) {
		this.i.index = +v;
	}
	get isChecked() : boolean {
		return (this.i.isChecked as boolean);
	}
	set isChecked(v: boolean) {
		this.i.isChecked = ensureBool(v);
	}
}
