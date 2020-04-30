import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from './IgRect'
import { IgSize } from './IgSize'
import { IgPoint } from './IgPoint'
import { IgDataTemplate } from './IgDataTemplate'
import { ProvideCalculatorEventArgs as ProvideCalculatorEventArgs_internal } from "./ProvideCalculatorEventArgs";
import { SummaryCalculator } from "./SummaryCalculator";

/**
 * Event arguments for the ProvideCalculator event.
*/
export class IgxProvideCalculatorEventArgs
{

protected createImplementation() : ProvideCalculatorEventArgs_internal
{
	return new ProvideCalculatorEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : ProvideCalculatorEventArgs_internal {
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
	/**
	 * Gets or sets the summary calculator to use for this summary.
	*/
	get calculator() : SummaryCalculator {
		return this.i.calculator as SummaryCalculator;
	}
	set calculator(v: SummaryCalculator) {
		this.i.calculator = v;
	}
}
