import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { IgxShapefileRecord } from "./igx-shapefile-record";
import { ShapeFilterRecordEventArgs as ShapeFilterRecordEventArgs_internal } from "./ShapeFilterRecordEventArgs";
import { ensureBool } from "./componentUtil";

export class IgxShapeFilterRecordEventArgs
{

protected createImplementation() : ShapeFilterRecordEventArgs_internal
{
	return new ShapeFilterRecordEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ShapeFilterRecordEventArgs_internal {
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
	get record() : IgxShapefileRecord {
	                                        if (this.i.record == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.record as any).externalObject) {
	                                            let e = new IgxShapefileRecord();
	                                            (e as any)._implementation = this.i.record;
	                                            (this.i.record as any).externalObject = e;
	                                        }
		return (this.i.record as any).externalObject;
	}
	set record(v: IgxShapefileRecord) {
		v == null ? this.i.record = null : this.i.record = v.i;
	}
	get shouldInclude() : boolean {
		return (this.i.shouldInclude as boolean);
	}
	set shouldInclude(v: boolean) {
		this.i.shouldInclude = ensureBool(v);
	}
}
