import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { FormatGroupTextEventArgs as FormatGroupTextEventArgs_internal } from "./FormatGroupTextEventArgs";

export class IgxFormatGroupTextEventArgs
{

protected createImplementation() : FormatGroupTextEventArgs_internal
{
	return new FormatGroupTextEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : FormatGroupTextEventArgs_internal {
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
	 * Gets the group name.
	*/
	get groupName() : string {
		return (this.i.groupName as string);
	}
	set groupName(v: string) {
		this.i.groupName = v;
	}
	/**
	 * Gets the original value before formatting.
	*/
	get groupValue() : any {
		return this.i.groupValue as any;
	}
	set groupValue(v: any) {
		this.i.groupValue = v;
	}
	/**
	 * Gets the group value as text, formatted based on the GroupDescription's ValueFormat.
	*/
	get formattedValue() : string {
		return (this.i.formattedValue as string);
	}
	set formattedValue(v: string) {
		this.i.formattedValue = v;
	}
	/**
	 * Gets or sets the final text that will be displayed in the group header.
	*/
	get formattedText() : string {
		return (this.i.formattedText as string);
	}
	set formattedText(v: string) {
		this.i.formattedText = v;
	}
}
