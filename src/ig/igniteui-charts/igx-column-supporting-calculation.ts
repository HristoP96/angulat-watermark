import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ColumnSupportingCalculation as ColumnSupportingCalculation_internal } from "./ColumnSupportingCalculation";

/**
 * Represents a calculation strategy that takes in a column of values
 * and returns a resulting column of values.
*/
export class IgxColumnSupportingCalculation
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ColumnSupportingCalculation_internal {
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
