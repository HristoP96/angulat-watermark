import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxSeriesComponent } from "./igx-series-component";
import { FinalValueSelectionMode, FinalValueSelectionMode_$type } from "./FinalValueSelectionMode";
import { IgxAnnotationLayerComponent } from "./igx-annotation-layer-component";
import { FinalValueLayer } from "./FinalValueLayer";
import { ensureEnum, brushToString, stringToBrush } from "igniteui-core/componentUtil";

/**
 * Represents an annotation layer that displays crosshair lines that cross through the closest value of the target series under the cursor.
*/
export const IgxFinalValueLayerComponent_PROVIDERS = [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxFinalValueLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFinalValueLayerComponent)}];
@Component({
  selector: 'igx-final-value-layer',
  template: ``,
  providers: [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxFinalValueLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFinalValueLayerComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxFinalValueLayerComponent extends IgxAnnotationLayerComponent
{

protected createImplementation() : FinalValueLayer
{
	return new FinalValueLayer();
}
	/**
	                             * @hidden 
	                             */
	public get i() : FinalValueLayer {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the series to target this annotation to. If null, this annotation targets all series simultaneously.
	*/
	get targetSeries() : IgxSeriesComponent {
	                                        if (this.i.targetSeries == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.targetSeries as any).externalObject) {
	                                            let e = IgxSeriesComponent._createFromInternal(this.i.targetSeries);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.targetSeries;
	                                            }
	                                            (this.i.targetSeries as any).externalObject = e;
	                                        }
		return (this.i.targetSeries as any).externalObject;
	}
	@Input()
	set targetSeries(v: IgxSeriesComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.targetSeries = null : this.i.targetSeries = v.i;
	}
	/**
	 * Gets or sets how to select the final value to annotate.
	*/
	get finalValueSelectionMode() : FinalValueSelectionMode {
		return this.i.finalValueSelectionMode;
	}
	@Input()
	set finalValueSelectionMode(v: FinalValueSelectionMode) {
		this.i.finalValueSelectionMode = ensureEnum<FinalValueSelectionMode>(FinalValueSelectionMode_$type, v);
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
	 * Gets or sets the precision to use displaying values for interpolated crosshair positions.
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
	 * Gets or sets the left padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
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
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.targetSeries && (this.targetSeries as any)._styling) {
	    (this.targetSeries as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
}
