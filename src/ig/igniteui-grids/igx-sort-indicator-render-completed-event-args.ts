import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { SortIndicatorRenderCompletedEventArgs as SortIndicatorRenderCompletedEventArgs_internal } from "./SortIndicatorRenderCompletedEventArgs";

export class IgxSortIndicatorRenderCompletedEventArgs
{

protected createImplementation() : SortIndicatorRenderCompletedEventArgs_internal
{
	return new SortIndicatorRenderCompletedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : SortIndicatorRenderCompletedEventArgs_internal {
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
}
