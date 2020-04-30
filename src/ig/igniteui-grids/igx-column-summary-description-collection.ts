import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnSummaryDescription } from "./igx-column-summary-description";
import { ColumnSummaryDescriptionCollection as ColumnSummaryDescriptionCollection_internal } from "./ColumnSummaryDescriptionCollection";

export class IgxColumnSummaryDescriptionCollection
{

protected createImplementation() : ColumnSummaryDescriptionCollection_internal
{
	return new ColumnSummaryDescriptionCollection_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnSummaryDescriptionCollection_internal {
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
	public add(item: IgxColumnSummaryDescription) : boolean {
		let iv = this.i.add((item == null ? null : item.i));
		return (iv);
	}
	public insert(index: number, item: IgxColumnSummaryDescription) {
		this.i.insert(index, (item == null ? null : item.i));
	}
	public clear() {
		this.i.clear();
	}
	public indexOf(item: IgxColumnSummaryDescription) : number {
		let iv = this.i.indexOf((item == null ? null : item.i));
		return (iv);
	}
	public remove(item: IgxColumnSummaryDescription) : boolean {
		let iv = this.i.remove((item == null ? null : item.i));
		return (iv);
	}
	public removeAt(index: number) : IgxColumnSummaryDescription {
		let iv = this.i.removeAt(index);
		return (iv == null ? null : (iv as any).externalObject);
	}
}
