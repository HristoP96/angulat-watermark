import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { AxisAnnotation as AxisAnnotation_internal } from "./AxisAnnotation";
import { brushToString, stringToBrush } from "igniteui-core/componentUtil";

/**
 * Represents an axis annotation
*/
export class IgxAxisAnnotation
{

protected createImplementation() : AxisAnnotation_internal
{
	return new AxisAnnotation_internal();
}
	protected _implementation: any;
	                            /**
	                             * @hidden 
	                             */
	public get i() : AxisAnnotation_internal {
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
	 * Gets or sets the value at which this annotation is displayed on the axis.
	*/
	get value() : any {
		return this.i.value as any;
	}
	set value(v: any) {
		this.i.value = v;
	}
	/**
	 * Gets or sets the text that should be displayed for the annotation. Leave null to display the value automatically.
	*/
	get text() : string {
		return (this.i.text as string);
	}
	set text(v: string) {
		this.i.text = v;
	}
	/**
	 * Sets or gets a function which takes an object that produces a formatted label for the value of this annotation.
	*/
	get formatLabel() : (item: any) => string {
		return this.i.formatLabel;
	}
	set formatLabel(v: (item: any) => string) {
		this.i.formatLabel = v;
	}
	/**
	 * Gets or sets the color to use for the text in the annotation.
	*/
	get textColor() : string {
		return brushToString(this.i.textColor);
	}
	set textColor(v: string) {
		this.i.textColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the background to use for tha axis annotation box.
	*/
	get background() : string {
		return brushToString(this.i.background);
	}
	set background(v: string) {
		this.i.background = stringToBrush(v);
	}
	/**
	 * Gets or sets the Outline to use for tha axis annotation box.
	*/
	get outline() : string {
		return brushToString(this.i.outline);
	}
	set outline(v: string) {
		this.i.outline = stringToBrush(v);
	}
	/**
	 * Gets or sets the border stroke thickness to use for tha axis annotation box.
	*/
	get strokeThickness() : number {
		return (this.i.strokeThickness as number);
	}
	set strokeThickness(v: number) {
		this.i.strokeThickness = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get backgroundPaddingLeft() : number {
		return (this.i.backgroundPaddingLeft as number);
	}
	set backgroundPaddingLeft(v: number) {
		this.i.backgroundPaddingLeft = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get backgroundPaddingTop() : number {
		return (this.i.backgroundPaddingTop as number);
	}
	set backgroundPaddingTop(v: number) {
		this.i.backgroundPaddingTop = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get backgroundPaddingRight() : number {
		return (this.i.backgroundPaddingRight as number);
	}
	set backgroundPaddingRight(v: number) {
		this.i.backgroundPaddingRight = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get backgroundPaddingBottom() : number {
		return (this.i.backgroundPaddingBottom as number);
	}
	set backgroundPaddingBottom(v: number) {
		this.i.backgroundPaddingBottom = +v;
	}
	public resetCachedExtent() {
		this.i.resetCachedExtent();
	}
	public resolveLabelValue() : string {
		let iv = this.i.resolveLabelValue();
		return (iv);
	}
	protected _zoneRunner: (act: () => void) => void = null;
	protected _runInZone(act: () => void): void {
	    if (this._zoneRunner != null) {
	        this._zoneRunner(act);
	    } else {
	        act();
	    }
	}
}
