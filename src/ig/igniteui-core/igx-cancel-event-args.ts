import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { CancelEventArgs as CancelEventArgs_internal } from "./CancelEventArgs";
import { ensureBool } from "./componentUtil";

export class IgxCancelEventArgs
{

protected createImplementation() : CancelEventArgs_internal
{
	return new CancelEventArgs_internal(0);
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CancelEventArgs_internal {
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
	get cancel() : boolean {
		return (this.i.cancel as boolean);
	}
	set cancel(v: boolean) {
		this.i.cancel = ensureBool(v);
	}
}
