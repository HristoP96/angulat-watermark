import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnComponent } from "./igx-column-component";
import { ColumnExchanger as ColumnExchanger_internal } from "./ColumnExchanger";

/**
 * Indicates a column that should be exchanged with another.
*/
export class IgxColumnExchanger
{

protected createImplementation() : ColumnExchanger_internal
{
	return new ColumnExchanger_internal(0);
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnExchanger_internal {
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
	 * The desired location of the new column
	*/
	get targetIndex() : number {
		return (this.i.targetIndex as number);
	}
	set targetIndex(v: number) {
		this.i.targetIndex = +v;
	}
}
