import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CalloutContentUpdatingEventArgs as CalloutContentUpdatingEventArgs_internal } from "./CalloutContentUpdatingEventArgs";

/**
 * Represents event arguments for updating content of callout layer
*/
export class IgxCalloutContentUpdatingEventArgs
{

protected createImplementation() : CalloutContentUpdatingEventArgs_internal
{
	return new CalloutContentUpdatingEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CalloutContentUpdatingEventArgs_internal {
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
	 * Gets data X-value assositated with callout layer
	*/
	get xValue() : any {
		return this.i.xValue as any;
	}
	set xValue(v: any) {
		this.i.xValue = v;
	}
	/**
	 * Gets data Y-value assositated with callout layer
	*/
	get yValue() : any {
		return this.i.yValue as any;
	}
	set yValue(v: any) {
		this.i.yValue = v;
	}
	/**
	 * Gets data item assositated with callout layer
	*/
	get item() : any {
		return this.i.item as any;
	}
	set item(v: any) {
		this.i.item = v;
	}
	/**
	 * Gets or sets content displayed by callout layer
	*/
	get content() : any {
		return this.i.content as any;
	}
	set content(v: any) {
		this.i.content = v;
	}
}
