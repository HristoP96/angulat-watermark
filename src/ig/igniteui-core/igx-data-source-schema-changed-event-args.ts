import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceSchemaChangedEventArgs as DataSourceSchemaChangedEventArgs_internal } from "./DataSourceSchemaChangedEventArgs";

/**
 * Provides information about a schema change event that has occurred.
*/
export class IgxDataSourceSchemaChangedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : DataSourceSchemaChangedEventArgs_internal {
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
	 * Gets the new schema that has been provided.
	*/
	get schema() : IDataSourceSchema {
		return this.i.schema;
	}
	/**
	 * Gets the current full count of items in the data source.
	*/
	get count() : number {
		return (this.i.count as number);
	}
}
