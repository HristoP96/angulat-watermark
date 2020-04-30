import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ColumnWidth as ColumnWidth_internal } from "./ColumnWidth";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a width of a column.
*/
export class IgxColumnWidth
{

protected createImplementation() : ColumnWidth_internal
{
	return new ColumnWidth_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnWidth_internal {
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
	 * Gets or sets whether to use star sizing for the column's width
	*/
	get isStarSized() : boolean {
		return (this.i.isStarSized as boolean);
	}
	set isStarSized(v: boolean) {
		this.i.isStarSized = ensureBool(v);
	}
	/**
	 * Gets or sets the fixed width or the proportional width of the column, depending on whether this width is a star width.
	*/
	get value() : number {
		return (this.i.value as number);
	}
	set value(v: number) {
		this.i.value = +v;
	}
	/**
	 * Gets or sets a minimum width to use when star sizing.
	*/
	get minimumWidth() : number {
		return (this.i.minimumWidth as number);
	}
	set minimumWidth(v: number) {
		this.i.minimumWidth = +v;
	}
}
