import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAxisComponent } from "./igx-axis-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ValueOverlay } from "./ValueOverlay";
import { ensureBool, brushToString, stringToBrush, toPoint, fromPoint } from "igniteui-core/componentUtil";

/**
 * Represents the class of the value overlay. The value overlay is a line or circle representing a value on an axis.
*/
export const IgxValueOverlayComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxValueOverlayComponent)}];
@Component({
  selector: 'igx-value-overlay',
  template: ``,
  providers: [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxValueOverlayComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxValueOverlayComponent extends IgxSeriesComponent
{

protected createImplementation() : ValueOverlay
{
	return new ValueOverlay();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ValueOverlay {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the axis used by the value overlay.
	*/
	get axis() : IgxAxisComponent {
	                                        if (this.i.axis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.axis as any).externalObject) {
	                                            let e = IgxAxisComponent._createFromInternal(this.i.axis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.axis;
	                                            }
	                                            (this.i.axis as any).externalObject = e;
	                                        }
		return (this.i.axis as any).externalObject;
	}
	@Input()
	set axis(v: IgxAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.axis = null : this.i.axis = v.i;
	}
	/**
	 * Gets or sets the value of the overlay.
	*/
	get value() : number {
		return (this.i.value as number);
	}
	@Input()
	set value(v: number) {
		this.i.value = +v;
	}
	/**
	 * Gets or sets whether to draw annotations over the axes where the crosshair meets with them.
	*/
	get isAxisAnnotationEnabled() : boolean {
		return (this.i.isAxisAnnotationEnabled as boolean);
	}
	@Input()
	set isAxisAnnotationEnabled(v: boolean) {
		this.i.isAxisAnnotationEnabled = ensureBool(v);
	}
	/**
	 * Sets or gets a function which takes an object that produces a formatted label for the axis annotation.
	*/
	get axisAnnotationFormatLabel() : (item: any) => string {
		return this.i.axisAnnotationFormatLabel;
	}
	@Input()
	set axisAnnotationFormatLabel(v: (item: any) => string) {
		this.i.axisAnnotationFormatLabel = v;
	}
	/**
	 * Gets or sets the color to use for the axis annotation text. Leave unset for an automatic value.
	*/
	get axisAnnotationTextColor() : string {
		return brushToString(this.i.axisAnnotationTextColor);
	}
	@Input()
	set axisAnnotationTextColor(v: string) {
		this.i.axisAnnotationTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the axis annotation backing. Leave unset for an automatic value.
	*/
	get axisAnnotationBackground() : string {
		return brushToString(this.i.axisAnnotationBackground);
	}
	@Input()
	set axisAnnotationBackground(v: string) {
		this.i.axisAnnotationBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the precision to use displaying values for interpolated positions.
	*/
	get axisAnnotationInterpolatedValuePrecision() : number {
		return (this.i.axisAnnotationInterpolatedValuePrecision as number);
	}
	@Input()
	set axisAnnotationInterpolatedValuePrecision(v: number) {
		this.i.axisAnnotationInterpolatedValuePrecision = +v;
	}
	/**
	 * Gets or sets the color to use for the axis annotation outline. Leave unset for an automatic value.
	*/
	get axisAnnotationOutline() : string {
		return brushToString(this.i.axisAnnotationOutline);
	}
	@Input()
	set axisAnnotationOutline(v: string) {
		this.i.axisAnnotationOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get axisAnnotationPaddingLeft() : number {
		return (this.i.axisAnnotationPaddingLeft as number);
	}
	@Input()
	set axisAnnotationPaddingLeft(v: number) {
		this.i.axisAnnotationPaddingLeft = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get axisAnnotationPaddingTop() : number {
		return (this.i.axisAnnotationPaddingTop as number);
	}
	@Input()
	set axisAnnotationPaddingTop(v: number) {
		this.i.axisAnnotationPaddingTop = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get axisAnnotationPaddingRight() : number {
		return (this.i.axisAnnotationPaddingRight as number);
	}
	@Input()
	set axisAnnotationPaddingRight(v: number) {
		this.i.axisAnnotationPaddingRight = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get axisAnnotationPaddingBottom() : number {
		return (this.i.axisAnnotationPaddingBottom as number);
	}
	@Input()
	set axisAnnotationPaddingBottom(v: number) {
		this.i.axisAnnotationPaddingBottom = +v;
	}
	/**
	 * Gets or sets the stroke thickness for the axis annotation backing. Leave unset for an automatic value.
	*/
	get axisAnnotationStrokeThickness() : number {
		return (this.i.axisAnnotationStrokeThickness as number);
	}
	@Input()
	set axisAnnotationStrokeThickness(v: number) {
		this.i.axisAnnotationStrokeThickness = +v;
	}
	/**
	 * Gets whether the series is a value overlay.
	*/
	get isValueOverlay() : boolean {
		return (this.i.isValueOverlay as boolean);
	}
	get labelResolved() : string {
		return (this.i.labelResolved as string);
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.axis && (this.axis as any)._styling) {
	    (this.axis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	/**
	 * Gets the item item index associated with the specified world position
	
	* @param world 
	*/
	public getItemIndex(world: IgPoint) : number {
		let iv = this.i.getItemIndex(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
	/**
	 * Requests that the provided item should be brought into view if possible.
	
	* @param item  * The item to attempt to bring into view.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
	/**
	 * Gets the label for a data item.
	
	* @param value  * The unscaled value to get a label for.
	*/
	public getLabel(value: number) : string {
		let iv = this.i.getLabel(value);
		return (iv);
	}
}
