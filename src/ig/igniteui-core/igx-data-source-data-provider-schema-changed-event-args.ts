import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { IDataSourceSchema } from "./IDataSourceSchema";
import { DataSourceDataProviderSchemaChangedEventArgs as DataSourceDataProviderSchemaChangedEventArgs_internal } from "./DataSourceDataProviderSchemaChangedEventArgs";

/**
 * Provides information about a schema change event.
*/
export class IgxDataSourceDataProviderSchemaChangedEventArgs
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : DataSourceDataProviderSchemaChangedEventArgs_internal {
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
	 * Represents the current schema for the data provider.
	*/
	get schema() : IDataSourceSchema {
		return this.i.schema;
	}
	/**
	 * Represents the current full count for the data provider. May be -1 if this information is not available yet.
	*/
	get count() : number {
		return (this.i.count as number);
	}
}
