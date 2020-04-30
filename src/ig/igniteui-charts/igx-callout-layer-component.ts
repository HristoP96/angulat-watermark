import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxSeriesComponent } from "./igx-series-component";
import { CalloutCollisionMode, CalloutCollisionMode_$type } from "./CalloutCollisionMode";
import { IgxCalloutStyleUpdatingEventArgs } from "./igx-callout-style-updating-event-args";
import { IgxCalloutContentUpdatingEventArgs } from "./igx-callout-content-updating-event-args";
import { IgxCalloutLabelUpdatingEventArgs } from "./igx-callout-label-updating-event-args";
import { IgxCalloutSeriesSelectingEventArgs } from "./igx-callout-series-selecting-event-args";
import { IgxAnnotationLayerComponent } from "./igx-annotation-layer-component";
import { CalloutLayer } from "./CalloutLayer";
import { ensureBool, brushToString, stringToBrush, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents an annotation layer that displays crosshair lines that cross through the closest value of the target series under the cursor.
*/
export const IgxCalloutLayerComponent_PROVIDERS = [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCalloutLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCalloutLayerComponent)}];
@Component({
  selector: 'igx-callout-layer',
  template: ``,
  providers: [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCalloutLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCalloutLayerComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCalloutLayerComponent extends IgxAnnotationLayerComponent
{

protected createImplementation() : CalloutLayer
{
	return new CalloutLayer();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CalloutLayer {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the label mapping property for the callouts.
	*/
	get labelMemberPath() : string {
		return (this.i.labelMemberPath as string);
	}
	@Input()
	set labelMemberPath(v: string) {
		this.i.labelMemberPath = v;
	}
	/**
	 * Gets or sets the label mapping property for the callouts.
	*/
	get xMemberPath() : string {
		return (this.i.xMemberPath as string);
	}
	@Input()
	set xMemberPath(v: string) {
		this.i.xMemberPath = v;
	}
	/**
	 * Gets or sets the label mapping property for the callouts.
	*/
	get yMemberPath() : string {
		return (this.i.yMemberPath as string);
	}
	@Input()
	set yMemberPath(v: string) {
		this.i.yMemberPath = v;
	}
	/**
	 * Gets or sets the key mapping property for the callouts.
	*/
	get keyMemberPath() : string {
		return (this.i.keyMemberPath as string);
	}
	@Input()
	set keyMemberPath(v: string) {
		this.i.keyMemberPath = v;
	}
	/**
	 * Gets or sets whether to allow the callouts to be variable distances from the target points, for suppporting collision modes.
	*/
	get isCalloutOffsettingEnabled() : boolean {
		return (this.i.isCalloutOffsettingEnabled as boolean);
	}
	@Input()
	set isCalloutOffsettingEnabled(v: boolean) {
		this.i.isCalloutOffsettingEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the content mapping property for the callouts.
	*/
	get contentMemberPath() : string {
		return (this.i.contentMemberPath as string);
	}
	@Input()
	set contentMemberPath(v: string) {
		this.i.contentMemberPath = v;
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
	 * Gets or sets a channel name to identify other callout layers within the chart to share collision information with.
	*/
	get collisionChannel() : string {
		return (this.i.collisionChannel as string);
	}
	@Input()
	set collisionChannel(v: string) {
		this.i.collisionChannel = v;
	}
	/**
	 * Gets or sets how to select the final value to annotate.
	*/
	get isAutoCalloutBehaviorEnabled() : boolean {
		return (this.i.isAutoCalloutBehaviorEnabled as boolean);
	}
	@Input()
	set isAutoCalloutBehaviorEnabled(v: boolean) {
		this.i.isAutoCalloutBehaviorEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets whether to use values, rather than labels for auto callout labels.
	*/
	get useValueForAutoCalloutLabels() : boolean {
		return (this.i.useValueForAutoCalloutLabels as boolean);
	}
	@Input()
	set useValueForAutoCalloutLabels(v: boolean) {
		this.i.useValueForAutoCalloutLabels = ensureBool(v);
	}
	/**
	 * Gets or sets whether to allow for custom callout styles.
	*/
	get isCustomCalloutStyleEnabled() : boolean {
		return (this.i.isCustomCalloutStyleEnabled as boolean);
	}
	@Input()
	set isCustomCalloutStyleEnabled(v: boolean) {
		this.i.isCustomCalloutStyleEnabled = ensureBool(v);
	}
	/**
	 * Gets or sets the precision to use when values are used for the auto callout labels.
	*/
	get autoCalloutLabelPrecision() : number {
		return (this.i.autoCalloutLabelPrecision as number);
	}
	@Input()
	set autoCalloutLabelPrecision(v: number) {
		this.i.autoCalloutLabelPrecision = +v;
	}
	/**
	 * Gets or sets the color to use for the callout text. Leave unset for an automatic value.
	*/
	get calloutTextColor() : string {
		return brushToString(this.i.calloutTextColor);
	}
	@Input()
	set calloutTextColor(v: string) {
		this.i.calloutTextColor = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush that specifies how the backgrounds for the callouts of the layer are painted. Leave unset for an automatic value.
	*/
	get calloutBackground() : string {
		return brushToString(this.i.calloutBackground);
	}
	@Input()
	set calloutBackground(v: string) {
		this.i.calloutBackground = stringToBrush(v);
	}
	/**
	 * Gets or sets the precision to use displaying values for interpolated crosshair positions.
	*/
	get calloutInterpolatedValuePrecision() : number {
		return (this.i.calloutInterpolatedValuePrecision as number);
	}
	@Input()
	set calloutInterpolatedValuePrecision(v: number) {
		this.i.calloutInterpolatedValuePrecision = +v;
	}
	/**
	 * Gets or sets the brush that specifies how the outlines for the callouts of the layer are painted.
	*/
	get calloutOutline() : string {
		return brushToString(this.i.calloutOutline);
	}
	@Input()
	set calloutOutline(v: string) {
		this.i.calloutOutline = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush that specifies how the leader lines for the callouts of the layer are painted.
	*/
	get calloutLeaderBrush() : string {
		return brushToString(this.i.calloutLeaderBrush);
	}
	@Input()
	set calloutLeaderBrush(v: string) {
		this.i.calloutLeaderBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the left padding to use withing the callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get calloutPaddingLeft() : number {
		return (this.i.calloutPaddingLeft as number);
	}
	@Input()
	set calloutPaddingLeft(v: number) {
		this.i.calloutPaddingLeft = +v;
	}
	/**
	 * Gets or sets the top padding to use within the callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get calloutPaddingTop() : number {
		return (this.i.calloutPaddingTop as number);
	}
	@Input()
	set calloutPaddingTop(v: number) {
		this.i.calloutPaddingTop = +v;
	}
	/**
	 * Gets or sets the right padding to use within the callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get calloutPaddingRight() : number {
		return (this.i.calloutPaddingRight as number);
	}
	@Input()
	set calloutPaddingRight(v: number) {
		this.i.calloutPaddingRight = +v;
	}
	/**
	 * Gets or sets the bottom padding to use within the callout. Leaving this NaN will use an automatic value related to the axis label margins.
	*/
	get calloutPaddingBottom() : number {
		return (this.i.calloutPaddingBottom as number);
	}
	@Input()
	set calloutPaddingBottom(v: number) {
		this.i.calloutPaddingBottom = +v;
	}
	/**
	 * Gets or sets the strategy to use for avoiding collisions between the callouts in this layer. Leave unset for an automatic value.
	*/
	get calloutCollisionMode() : CalloutCollisionMode {
		return this.i.calloutCollisionMode;
	}
	@Input()
	set calloutCollisionMode(v: CalloutCollisionMode) {
		this.i.calloutCollisionMode = ensureEnum<CalloutCollisionMode>(CalloutCollisionMode_$type, v);
	}
	/**
	 * Gets or sets the padding to add to the callout positioning. Leave unset for an automatic value.
	*/
	get calloutPositionPadding() : number {
		return (this.i.calloutPositionPadding as number);
	}
	@Input()
	set calloutPositionPadding(v: number) {
		this.i.calloutPositionPadding = +v;
	}
	/**
	 * Gets or sets the stroke thickness for the callout backing. Leave unset for an automatic value.
	*/
	get calloutStrokeThickness() : number {
		return (this.i.calloutStrokeThickness as number);
	}
	@Input()
	set calloutStrokeThickness(v: number) {
		this.i.calloutStrokeThickness = +v;
	}
	/**
	 * Gets or sets the stroke thickness for the axis annotation backing. Leave unset for an automatic value.
	*/
	get textStyle() : string {
		return (this.i.textStyle as string);
	}
	@Input()
	set textStyle(v: string) {
		this.i.textStyle = v;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.targetSeries && (this.targetSeries as any)._styling) {
	    (this.targetSeries as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Invalidates content of callout layer
	
	*/
	public invalidateCalloutContent() {
		this.i.invalidateCalloutContent();
	}
	private _calloutStyleUpdating: EventEmitter<{ sender: any, args: IgxCalloutStyleUpdatingEventArgs}> = null;
	/**
	 * Event raised when updating style of callout layer
	*/
	@Output()
	get calloutStyleUpdating(): EventEmitter<{ sender: any, args: IgxCalloutStyleUpdatingEventArgs}> {
		if (this._calloutStyleUpdating == null) {
			this._calloutStyleUpdating = new EventEmitter<{sender: any, args: IgxCalloutStyleUpdatingEventArgs}>();
			this.i.calloutStyleUpdating = delegateCombine(this.i.calloutStyleUpdating, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxCalloutStyleUpdatingEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeCalloutStyleUpdating) {
	                        (this as any).beforeCalloutStyleUpdating(this, outerArgs);
	                    }
					this._calloutStyleUpdating.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._calloutStyleUpdating;
	}
	private _calloutContentUpdating: EventEmitter<{ sender: any, args: IgxCalloutContentUpdatingEventArgs}> = null;
	/**
	 * Raised to allow you to decide on the content for an automatically created callout.
	*/
	@Output()
	get calloutContentUpdating(): EventEmitter<{ sender: any, args: IgxCalloutContentUpdatingEventArgs}> {
		if (this._calloutContentUpdating == null) {
			this._calloutContentUpdating = new EventEmitter<{sender: any, args: IgxCalloutContentUpdatingEventArgs}>();
			this.i.calloutContentUpdating = delegateCombine(this.i.calloutContentUpdating, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxCalloutContentUpdatingEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeCalloutContentUpdating) {
	                        (this as any).beforeCalloutContentUpdating(this, outerArgs);
	                    }
					this._calloutContentUpdating.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._calloutContentUpdating;
	}
	private _calloutLabelUpdating: EventEmitter<{ sender: any, args: IgxCalloutLabelUpdatingEventArgs}> = null;
	/**
	 * Raised to allow you to decide on the label for an automatically created callout.
	*/
	@Output()
	get calloutLabelUpdating(): EventEmitter<{ sender: any, args: IgxCalloutLabelUpdatingEventArgs}> {
		if (this._calloutLabelUpdating == null) {
			this._calloutLabelUpdating = new EventEmitter<{sender: any, args: IgxCalloutLabelUpdatingEventArgs}>();
			this.i.calloutLabelUpdating = delegateCombine(this.i.calloutLabelUpdating, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxCalloutLabelUpdatingEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeCalloutLabelUpdating) {
	                        (this as any).beforeCalloutLabelUpdating(this, outerArgs);
	                    }
					this._calloutLabelUpdating.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._calloutLabelUpdating;
	}
	private _calloutSeriesSelecting: EventEmitter<{ sender: any, args: IgxCalloutSeriesSelectingEventArgs}> = null;
	/**
	 * Raised to allow you to select a target series for a data bound callout.
	*/
	@Output()
	get calloutSeriesSelecting(): EventEmitter<{ sender: any, args: IgxCalloutSeriesSelectingEventArgs}> {
		if (this._calloutSeriesSelecting == null) {
			this._calloutSeriesSelecting = new EventEmitter<{sender: any, args: IgxCalloutSeriesSelectingEventArgs}>();
			this.i.calloutSeriesSelecting = delegateCombine(this.i.calloutSeriesSelecting, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxCalloutSeriesSelectingEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeCalloutSeriesSelecting) {
	                        (this as any).beforeCalloutSeriesSelecting(this, outerArgs);
	                    }
					this._calloutSeriesSelecting.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._calloutSeriesSelecting;
	}
}
