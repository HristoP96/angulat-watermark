import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { TriangulationStatusEventArgs as TriangulationStatusEventArgs_internal } from "./TriangulationStatusEventArgs";

export class IgxTriangulationStatusEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : TriangulationStatusEventArgs_internal {
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
	 * The current status from 0 to 100 of the progressive triangulation.
	*/
	get currentStatus() : number {
		return (this.i.currentStatus as number);
	}
	set currentStatus(v: number) {
		this.i.currentStatus = +v;
	}
}
