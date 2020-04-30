import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { SummaryData as SummaryData_internal } from "./SummaryData";
import { SummaryOperand } from "igniteui-core/SummaryOperand";

/**
 * Object used to store summary information for group headers.
*/
export class IgxSummaryData
{

protected createImplementation() : SummaryData_internal
{
	return new SummaryData_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : SummaryData_internal {
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
	get summaryName() : string {
		return (this.i.summaryName as string);
	}
	set summaryName(v: string) {
		this.i.summaryName = v;
	}
	get summaryValue() : any {
		return this.i.summaryValue as any;
	}
	set summaryValue(v: any) {
		this.i.summaryValue = v;
	}
	get summaryOperand() : SummaryOperand {
		return this.i.summaryOperand as SummaryOperand;
	}
	set summaryOperand(v: SummaryOperand) {
		this.i.summaryOperand = v;
	}
	get formattedText() : string {
		return (this.i.formattedText as string);
	}
	set formattedText(v: string) {
		this.i.formattedText = v;
	}
	get formattedValue() : string {
		return (this.i.formattedValue as string);
	}
	set formattedValue(v: string) {
		this.i.formattedValue = v;
	}
}
