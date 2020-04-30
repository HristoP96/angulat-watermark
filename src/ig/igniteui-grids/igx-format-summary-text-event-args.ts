import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { FormatSummaryTextEventArgs as FormatSummaryTextEventArgs_internal } from "./FormatSummaryTextEventArgs";

export class IgxFormatSummaryTextEventArgs
{

protected createImplementation() : FormatSummaryTextEventArgs_internal
{
	return new FormatSummaryTextEventArgs_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : FormatSummaryTextEventArgs_internal {
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
	 * Gets the summary property name.
	*/
	get propertyPath() : string {
		return (this.i.propertyPath as string);
	}
	set propertyPath(v: string) {
		this.i.propertyPath = v;
	}
	/**
	 * Gets the summary display name.
	*/
	get displayName() : string {
		return (this.i.displayName as string);
	}
	set displayName(v: string) {
		this.i.displayName = v;
	}
	/**
	 * Gets the original value before formatting.
	*/
	get summaryResult() : any {
		return this.i.summaryResult as any;
	}
	set summaryResult(v: any) {
		this.i.summaryResult = v;
	}
	/**
	 * Gets or sets the summary value as formatted text.  Setting this property will only affect summary cells.
	*/
	get formattedResult() : string {
		return (this.i.formattedResult as string);
	}
	set formattedResult(v: string) {
		this.i.formattedResult = v;
	}
	/**
	 * Gets or sets the final text that will be displayed in the group header.
	*/
	get formattedText() : string {
		return (this.i.formattedText as string);
	}
	set formattedText(v: string) {
		this.i.formattedText = v;
	}
}
