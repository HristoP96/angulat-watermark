import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ScalerParams as ScalerParams_internal } from "./ScalerParams";

/**
 * Class containing several properties which are used as parameters passed to scaling operations in a SeriesViewer.
* 
* Class containing several properties which are used as parameters passed to scaling operations in a `IgxSeriesViewerComponent`.
*/
export class IgxScalerParams
{
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ScalerParams_internal {
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
	 * The series reference value.
	 * Typically, the reference value is the initial value of the series.  The reference value is used by the PercentChangeYAxis, where all values in the series are scaled relative to the initial value.
	*/
	get referenceValue() : number {
		return (this.i.referenceValue as number);
	}
	set referenceValue(v: number) {
		this.i.referenceValue = +v;
	}
}
