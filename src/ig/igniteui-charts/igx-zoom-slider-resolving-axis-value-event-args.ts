import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ZoomSliderResolvingAxisValueEventArgs as ZoomSliderResolvingAxisValueEventArgs_internal } from "./ZoomSliderResolvingAxisValueEventArgs";

export class IgxZoomSliderResolvingAxisValueEventArgs
{

protected createImplementation() : ZoomSliderResolvingAxisValueEventArgs_internal
{
	return new ZoomSliderResolvingAxisValueEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ZoomSliderResolvingAxisValueEventArgs_internal {
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
	get position() : number {
		return (this.i.position as number);
	}
	set position(v: number) {
		this.i.position = +v;
	}
	get value() : any {
		return this.i.value as any;
	}
	set value(v: any) {
		this.i.value = v;
	}
}
