import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { CancellingMultiScaleImageEventArgs as CancellingMultiScaleImageEventArgs_internal } from "./CancellingMultiScaleImageEventArgs";

export class IgxCancellingMultiScaleImageEventArgs
{

protected createImplementation() : CancellingMultiScaleImageEventArgs_internal
{
	return new CancellingMultiScaleImageEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CancellingMultiScaleImageEventArgs_internal {
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
	get uri() : string {
		return (this.i.uri as string);
	}
	set uri(v: string) {
		this.i.uri = v;
	}
}
