import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxFilterExpressionCollection } from "igniteui-core/igx-filter-expression-collection";
import { GridFilterExpressionsEventArgs as GridFilterExpressionsEventArgs_internal } from "./GridFilterExpressionsEventArgs";

export class IgxGridFilterExpressionsEventArgs
{

protected createImplementation() : GridFilterExpressionsEventArgs_internal
{
	return new GridFilterExpressionsEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : GridFilterExpressionsEventArgs_internal {
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
	get filterExpressions() : IgxFilterExpressionCollection {
	                                        if (this.i.filterExpressions == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.filterExpressions as any).externalObject) {
	                                            let e = new IgxFilterExpressionCollection();
	                                            (e as any)._implementation = this.i.filterExpressions;
	                                            (this.i.filterExpressions as any).externalObject = e;
	                                        }
		return (this.i.filterExpressions as any).externalObject;
	}
	set filterExpressions(v: IgxFilterExpressionCollection) {
		v == null ? this.i.filterExpressions = null : this.i.filterExpressions = v.i;
	}
}
