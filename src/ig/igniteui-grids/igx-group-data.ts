import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { GroupData as GroupData_internal } from "./GroupData";

/**
 * Object used to store group information for group headers.
*/
export class IgxGroupData
{

protected createImplementation() : GroupData_internal
{
	return new GroupData_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GroupData_internal {
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
	 * The grouping key.
	*/
	get groupName() : string {
		return (this.i.groupName as string);
	}
	set groupName(v: string) {
		this.i.groupName = v;
	}
	/**
	 * The group value.
	*/
	get groupValue() : any {
		return this.i.groupValue as any;
	}
	set groupValue(v: any) {
		this.i.groupValue = v;
	}
	/**
	 * The value as formatted text.
	*/
	get formattedText() : string {
		return (this.i.formattedText as string);
	}
	set formattedText(v: string) {
		this.i.formattedText = v;
	}
}
