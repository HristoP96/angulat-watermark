import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { CustomContourValueResolverEventArgs as CustomContourValueResolverEventArgs_internal } from "./CustomContourValueResolverEventArgs";

/**
 * Provides data for GetCustomContourValues event.
*/
export class IgxCustomContourValueResolverEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : CustomContourValueResolverEventArgs_internal {
		return this._implementation;
	}
	private onImplementationCreated() {
		
	}
	constructor() {									
	}
	protected _provideImplementation(i: any) {
	    this._implementation = i;
	    (<any>this._implementation).externalObject = this;
	this.onImplementationCreated();
	}
	get values() : number[] {
		return this.i.values as number[];
	}
	get contourValues() : number[] {
		return this.i.contourValues as number[];
	}
	set contourValues(v: number[]) {
		this.i.contourValues = v;
	}
}
