import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { DataSourceRowExpansionChangedEventArgs as DataSourceRowExpansionChangedEventArgs_internal } from "./DataSourceRowExpansionChangedEventArgs";
import { ensureBool } from "./componentUtil";

/**
 * Provides information about row expansion or collapse.
*/
export class IgxDataSourceRowExpansionChangedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : DataSourceRowExpansionChangedEventArgs_internal {
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
	 * The index of the row being expanded or collapsed.
	*/
	get rowIndex() : number {
		return (this.i.rowIndex as number);
	}
	/**
	 * The previous state of the row. True is expanded, False is collapsed.
	*/
	get oldState() : boolean {
		return (this.i.oldState as boolean);
	}
	/**
	 * The new state of the row. True is expanded, False is collapsed.
	*/
	get newState() : boolean {
		return (this.i.newState as boolean);
	}
}
