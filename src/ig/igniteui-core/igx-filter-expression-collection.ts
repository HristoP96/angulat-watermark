import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { FilterExpressionCollection as FilterExpressionCollection_internal } from "./FilterExpressionCollection";
import { IFilterExpression, IFilterExpression_$type } from "./IFilterExpression";

/**
 * Represents a colleciton of filter expressions.
*/
export class IgxFilterExpressionCollection
{

protected createImplementation() : FilterExpressionCollection_internal
{
	return new FilterExpressionCollection_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : FilterExpressionCollection_internal {
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
	get syncTarget() : IgxFilterExpressionCollection {
	                                        if (this.i.syncTarget == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.syncTarget as any).externalObject) {
	                                            let e = new IgxFilterExpressionCollection();
	                                            (e as any)._implementation = this.i.syncTarget;
	                                            (this.i.syncTarget as any).externalObject = e;
	                                        }
		return (this.i.syncTarget as any).externalObject;
	}
	set syncTarget(v: IgxFilterExpressionCollection) {
		v == null ? this.i.syncTarget = null : this.i.syncTarget = v.i;
	}
	get onChanged() : () => void {
		return this.i.onChanged as () => void;
	}
	set onChanged(v: () => void) {
		this.i.onChanged = v;
	}
	public add(item: IFilterExpression) : boolean {
		let iv = this.i.add(item);
		return (iv);
	}
	public insert(index: number, item: IFilterExpression) {
		this.i.insert(index, item);
	}
	public clear() {
		this.i.clear();
	}
	public get(index: number) : IFilterExpression {
		let iv = this.i.get(index);
		return (iv);
	}
	public indexOf(item: IFilterExpression) : number {
		let iv = this.i.indexOf(item);
		return (iv);
	}
	public remove(item: IFilterExpression) : boolean {
		let iv = this.i.remove(item);
		return (iv);
	}
	public removeAt(index: number) : IFilterExpression {
		let iv = this.i.removeAt(index);
		return (iv);
	}
	public set(index: number, value: IFilterExpression) : IFilterExpression {
		let iv = this.i.set(index, value);
		return (iv);
	}
	public size() : number {
		let iv = this.i.size();
		return (iv);
	}
}
