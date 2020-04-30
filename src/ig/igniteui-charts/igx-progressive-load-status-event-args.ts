import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ProgressiveLoadStatusEventArgs as ProgressiveLoadStatusEventArgs_internal } from "./ProgressiveLoadStatusEventArgs";

/**
 * Provides information about the progressive load progress of the HighDensityScatterSeries.
*/
export class IgxProgressiveLoadStatusEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ProgressiveLoadStatusEventArgs_internal {
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
	/**
	 * The current status from 0 to 100 of the progressive load.
	*/
	get currentStatus() : number {
		return (this.i.currentStatus as number);
	}
	set currentStatus(v: number) {
		this.i.currentStatus = +v;
	}
}
