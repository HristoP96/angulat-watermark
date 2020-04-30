import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColumnComponent } from "./igx-column-component";
import { ColumnHiddenChangedEventArgs as ColumnHiddenChangedEventArgs_internal } from "./ColumnHiddenChangedEventArgs";
import { ensureBool } from "igniteui-core/componentUtil";

export class IgxColumnHiddenChangedEventArgs
{

protected createImplementation() : ColumnHiddenChangedEventArgs_internal
{
	return new ColumnHiddenChangedEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnHiddenChangedEventArgs_internal {
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
	get column() : IgxColumnComponent {
	                                        if (this.i.column == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.column as any).externalObject) {
	                                            let e = IgxColumnComponent._createFromInternal(this.i.column);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.column;
	                                            }
	                                            (this.i.column as any).externalObject = e;
	                                        }
		return (this.i.column as any).externalObject;
	}
	set column(v: IgxColumnComponent) {
		v == null ? this.i.column = null : this.i.column = v.i;
	}
	get isHidden() : boolean {
		return (this.i.isHidden as boolean);
	}
	set isHidden(v: boolean) {
		this.i.isHidden = ensureBool(v);
	}
}
