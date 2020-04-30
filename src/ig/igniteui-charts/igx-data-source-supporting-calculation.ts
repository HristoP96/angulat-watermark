import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { DataSourceSupportingCalculation as DataSourceSupportingCalculation_internal } from "./DataSourceSupportingCalculation";

/**
 * Represents a calculation strategy that uses the calculation data source
 * to product a column of values.
* 
* `DataSourceSupportingCalculation` class Represents a calculation strategy that uses the calculation data source to product a column of values.
* 
*     DataSourceSupportingCalculation SC = new DataSourceSupportingCalculation();
*/
export class IgxDataSourceSupportingCalculation
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : DataSourceSupportingCalculation_internal {
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
}
