import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CalloutLabelUpdatingEventArgs as CalloutLabelUpdatingEventArgs_internal } from "./CalloutLabelUpdatingEventArgs";

/**
 * Represents event arguments for updating label of callout layer
*/
export class IgxCalloutLabelUpdatingEventArgs
{

protected createImplementation() : CalloutLabelUpdatingEventArgs_internal
{
	return new CalloutLabelUpdatingEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CalloutLabelUpdatingEventArgs_internal {
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
	 * Gets or sets label displayed by callout layer
	*/
	get label() : any {
		return this.i.label as any;
	}
	set label(v: any) {
		this.i.label = v;
	}
}
