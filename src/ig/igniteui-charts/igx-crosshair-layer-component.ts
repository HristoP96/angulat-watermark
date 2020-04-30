import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxSeriesComponent } from "./igx-series-component";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { IgxAnnotationLayerComponent } from "./igx-annotation-layer-component";
import { CrosshairLayer } from "./CrosshairLayer";
import { brushToString, stringToBrush, ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents an annotation layer that displays crosshair lines that cross through the closest value of the target series under the cursor.
*/
export const IgxCrosshairLayerComponent_PROVIDERS = [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCrosshairLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCrosshairLayerComponent)}];
@Component({
  selector: 'igx-crosshair-layer',
  template: ``,
  providers: [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCrosshairLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCrosshairLayerComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCrosshairLayerComponent extends IgxAnnotationLayerComponent
{

protected createImplementation() : CrosshairLayer
{
	return new CrosshairLayer();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CrosshairLayer {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the color to use for the horizontal line. Leave null for an automatic value.
	*/
	get horizontalLineStroke() : string {
		return brushToString(this.i.horizontalLineStroke);
	}
	@Input()
	set horizontalLineStroke(v: string) {
		this.i.horizontalLineStroke = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for vertical line. Leave null for an automatic value.
	*/
	get verticalLineStroke() : string {
		return brushToString(this.i.verticalLineStroke);
	}
	@Input()
	set verticalLineStroke(v: string) {
		this.i.verticalLineStroke = stringToBrush(v);
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
	 * Gets or sets whether to use value interpolation when drawing a line through the best value for the cursor position.
	*/
	get useInterpolation() : boolean {
		return (this.i.useInterpolation as boolean);
	}
	@Input()
	set useInterpolation(v: boolean) {
		this.i.useInterpolation = ensureBool(v);
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
	 * Gets or sets the color to use for the x axis annotation text. Leave unset for an automatic value.
	*/
	get xAxisAnnotationTextColor() : string {
		return brushToString(this.i.xAxisAnnotationTextColor);
	}
	@Input()
	set xAxisAnnotationTextColor(v: string) {
		this.i.xAxisAnnotationTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the x axis annotation backing. Leave unset for an automatic value.
	*/
	get xAxisAnnotationBackground() : string {
		return brushToString(this.i.xAxisAnnotationBackground);
	}
	@Input()
	set xAxisAnnotationBackground(v: string) {
		this.i.xAxisAnnotationBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the precision to use displaying values for interpolated crosshair positions.
	*/
	get xAxisAnnotationInterpolatedValuePrecision() : number {
		return (this.i.xAxisAnnotationInterpolatedValuePrecision as number);
	}
	@Input()
	set xAxisAnnotationInterpolatedValuePrecision(v: number) {
		this.i.xAxisAnnotationInterpolatedValuePrecision = +v;
	}
	/**
	 * Gets or sets the color to use for the x axis annotation outline. Leave unset for an automatic value.
	*/
	get xAxisAnnotationOutline() : string {
		return brushToString(this.i.xAxisAnnotationOutline);
	}
	@Input()
	set xAxisAnnotationOutline(v: string) {
		this.i.xAxisAnnotationOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get xAxisAnnotationPaddingLeft() : number {
		return (this.i.xAxisAnnotationPaddingLeft as number);
	}
	@Input()
	set xAxisAnnotationPaddingLeft(v: number) {
		this.i.xAxisAnnotationPaddingLeft = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get xAxisAnnotationPaddingTop() : number {
		return (this.i.xAxisAnnotationPaddingTop as number);
	}
	@Input()
	set xAxisAnnotationPaddingTop(v: number) {
		this.i.xAxisAnnotationPaddingTop = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get xAxisAnnotationPaddingRight() : number {
		return (this.i.xAxisAnnotationPaddingRight as number);
	}
	@Input()
	set xAxisAnnotationPaddingRight(v: number) {
		this.i.xAxisAnnotationPaddingRight = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get xAxisAnnotationPaddingBottom() : number {
		return (this.i.xAxisAnnotationPaddingBottom as number);
	}
	@Input()
	set xAxisAnnotationPaddingBottom(v: number) {
		this.i.xAxisAnnotationPaddingBottom = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get yAxisAnnotationPaddingLeft() : number {
		return (this.i.yAxisAnnotationPaddingLeft as number);
	}
	@Input()
	set yAxisAnnotationPaddingLeft(v: number) {
		this.i.yAxisAnnotationPaddingLeft = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get yAxisAnnotationPaddingTop() : number {
		return (this.i.yAxisAnnotationPaddingTop as number);
	}
	@Input()
	set yAxisAnnotationPaddingTop(v: number) {
		this.i.yAxisAnnotationPaddingTop = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get yAxisAnnotationPaddingRight() : number {
		return (this.i.yAxisAnnotationPaddingRight as number);
	}
	@Input()
	set yAxisAnnotationPaddingRight(v: number) {
		this.i.yAxisAnnotationPaddingRight = +v;
	}
	/**
	 * Gets or sets the padding to use withing the axis annotation callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get yAxisAnnotationPaddingBottom() : number {
		return (this.i.yAxisAnnotationPaddingBottom as number);
	}
	@Input()
	set yAxisAnnotationPaddingBottom(v: number) {
		this.i.yAxisAnnotationPaddingBottom = +v;
	}
	/**
	 * Gets or sets the stroke thickness for the x axis annotation backing. Leave unset for an automatic value.
	*/
	get xAxisAnnotationStrokeThickness() : number {
		return (this.i.xAxisAnnotationStrokeThickness as number);
	}
	@Input()
	set xAxisAnnotationStrokeThickness(v: number) {
		this.i.xAxisAnnotationStrokeThickness = +v;
	}
	/**
	 * Gets or sets the color to use for the y axis annotation text. Leave unset for an automatic value.
	*/
	get yAxisAnnotationTextColor() : string {
		return brushToString(this.i.yAxisAnnotationTextColor);
	}
	@Input()
	set yAxisAnnotationTextColor(v: string) {
		this.i.yAxisAnnotationTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the color to use for the y axis annotation backing. Leave unset for an automatic value.
	*/
	get yAxisAnnotationBackground() : string {
		return brushToString(this.i.yAxisAnnotationBackground);
	}
	@Input()
	set yAxisAnnotationBackground(v: string) {
		this.i.yAxisAnnotationBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the precision to use displaying values for interpolated crosshair positions.
	*/
	get yAxisAnnotationInterpolatedValuePrecision() : number {
		return (this.i.yAxisAnnotationInterpolatedValuePrecision as number);
	}
	@Input()
	set yAxisAnnotationInterpolatedValuePrecision(v: number) {
		this.i.yAxisAnnotationInterpolatedValuePrecision = +v;
	}
	/**
	 * Gets or sets the color to use for the y axis annotation outline. Leave unset for an automatic value.
	*/
	get yAxisAnnotationOutline() : string {
		return brushToString(this.i.yAxisAnnotationOutline);
	}
	@Input()
	set yAxisAnnotationOutline(v: string) {
		this.i.yAxisAnnotationOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the stroke thickness for the y axis annotation backing. Leave unset for an automatic value.
	*/
	get yAxisAnnotationStrokeThickness() : number {
		return (this.i.yAxisAnnotationStrokeThickness as number);
	}
	@Input()
	set yAxisAnnotationStrokeThickness(v: number) {
		this.i.yAxisAnnotationStrokeThickness = +v;
	}
	/**
	 * Gets or sets whether to display the vertical line.
	*/
	get verticalLineVisibility() : Visibility {
		return this.i.verticalLineVisibility;
	}
	@Input()
	set verticalLineVisibility(v: Visibility) {
		this.i.verticalLineVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets whether to display the horizontal line.
	*/
	get horizontalLineVisibility() : Visibility {
		return this.i.horizontalLineVisibility;
	}
	@Input()
	set horizontalLineVisibility(v: Visibility) {
		this.i.horizontalLineVisibility = ensureEnum<Visibility>(Visibility_$type, v);
	}
	/**
	 * Gets or sets whether to skip unknown values when searching for series values.
	*/
	get skipUnknownValues() : boolean {
		return (this.i.skipUnknownValues as boolean);
	}
	@Input()
	set skipUnknownValues(v: boolean) {
		this.i.skipUnknownValues = ensureBool(v);
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
