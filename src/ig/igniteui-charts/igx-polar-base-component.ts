import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxNumericAngleAxisComponent } from "./igx-numeric-angle-axis-component";
import { IgxNumericRadiusAxisComponent } from "./igx-numeric-radius-axis-component";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { PolarBase } from "./PolarBase";
import { ensureBool, ensureEnum, brushToString, stringToBrush, toPoint } from "igniteui-core/componentUtil";

/**
 * Represents the base class from which all IgxDataChartComponent polar series are derived.
*/
export const IgxPolarBaseComponent_PROVIDERS = [{provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxPolarBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxPolarBaseComponent)}];
export abstract class IgxPolarBaseComponent extends IgxMarkerSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : PolarBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Checks if this series is a polar series
	*/
	get isPolar() : boolean {
		return (this.i.isPolar as boolean);
	}
	/**
	 * Gets or sets the path to use to find the angle values for the series.
	*/
	get angleMemberPath() : string {
		return (this.i.angleMemberPath as string);
	}
	@Input()
	set angleMemberPath(v: string) {
		this.i.angleMemberPath = v;
	}
	/**
	 * Gets or sets the path to use to get the radius values for the series.
	*/
	get radiusMemberPath() : string {
		return (this.i.radiusMemberPath as string);
	}
	@Input()
	set radiusMemberPath(v: string) {
		this.i.radiusMemberPath = v;
	}
	/**
	 * Gets the effective angle axis for the current series object.
	*/
	get angleAxis() : IgxNumericAngleAxisComponent {
	                                        if (this.i.angleAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.angleAxis as any).externalObject) {
	                                            let e = IgxNumericAngleAxisComponent._createFromInternal(this.i.angleAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.angleAxis;
	                                            }
	                                            (this.i.angleAxis as any).externalObject = e;
	                                        }
		return (this.i.angleAxis as any).externalObject;
	}
	@Input()
	set angleAxis(v: IgxNumericAngleAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.angleAxis = null : this.i.angleAxis = v.i;
	}
	/**
	 * Gets the effective radius axis for the current series object.
	*/
	get radiusAxis() : IgxNumericRadiusAxisComponent {
	                                        if (this.i.radiusAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.radiusAxis as any).externalObject) {
	                                            let e = IgxNumericRadiusAxisComponent._createFromInternal(this.i.radiusAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.radiusAxis;
	                                            }
	                                            (this.i.radiusAxis as any).externalObject = e;
	                                        }
		return (this.i.radiusAxis as any).externalObject;
	}
	@Input()
	set radiusAxis(v: IgxNumericRadiusAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.radiusAxis = null : this.i.radiusAxis = v.i;
	}
	/**
	 * Gets or sets whether Cartesian Interpolation should be used rather than Archimedian 
	 * spiral based interpolation.
	*/
	get useCartesianInterpolation() : boolean {
		return (this.i.useCartesianInterpolation as boolean);
	}
	@Input()
	set useCartesianInterpolation(v: boolean) {
		this.i.useCartesianInterpolation = ensureBool(v);
	}
	/**
	 * Gets or sets the maximum number of markers displayed by the current series.
	 * If more than the specified number of markers are visible, the polar series will automatically
	 * choose a representative set.
	*/
	get maximumMarkers() : number {
		return (this.i.maximumMarkers as number);
	}
	@Input()
	set maximumMarkers(v: number) {
		this.i.maximumMarkers = +v;
	}
	/**
	 * Gets or sets the trend type for the current series object.
	*/
	get trendLineType() : TrendLineType {
		return this.i.trendLineType;
	}
	@Input()
	set trendLineType(v: TrendLineType) {
		this.i.trendLineType = ensureEnum<TrendLineType>(TrendLineType_$type, v);
	}
	/**
	 * Gets or sets the brush that specifies how the current series
	 * object's trend line is drawn.
	*/
	get trendLineBrush() : string {
		return brushToString(this.i.trendLineBrush);
	}
	@Input()
	set trendLineBrush(v: string) {
		this.i.trendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets the effective TrendLineBrush for this series.
	*/
	get actualTrendLineBrush() : string {
		return brushToString(this.i.actualTrendLineBrush);
	}
	@Input()
	set actualTrendLineBrush(v: string) {
		this.i.actualTrendLineBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the thickness of the current series object's trend line.
	*/
	get trendLineThickness() : number {
		return (this.i.trendLineThickness as number);
	}
	@Input()
	set trendLineThickness(v: number) {
		this.i.trendLineThickness = +v;
	}
	/**
	 * Gets or sets the moving average period for the current series object.
	*/
	get trendLinePeriod() : number {
		return (this.i.trendLinePeriod as number);
	}
	@Input()
	set trendLinePeriod(v: number) {
		this.i.trendLinePeriod = +v;
	}
	/**
	 * Sets or Gets the Trendline Z index.
	*/
	get trendLineZIndex() : number {
		return (this.i.trendLineZIndex as number);
	}
	@Input()
	set trendLineZIndex(v: number) {
		this.i.trendLineZIndex = +v;
	}
	/**
	 * Gets or sets whether to clip the series to the bounds.
	 * Setting this to true can effect performance.
	*/
	get clipSeriesToBounds() : boolean {
		return (this.i.clipSeriesToBounds as boolean);
	}
	@Input()
	set clipSeriesToBounds(v: boolean) {
		this.i.clipSeriesToBounds = ensureBool(v);
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.angleAxis && (this.angleAxis as any)._styling) {
	    (this.angleAxis as any)._styling(container, component, this);
	}
	if (this.radiusAxis && (this.radiusAxis as any)._styling) {
	    (this.radiusAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	/**
	 * Scrolls the requested item into view, if possible.
	
	* @param item  * The item to scroll into view.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
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
	 * Gets the index of the item that resides at the provided world coordinates.
	
	* @param world  * The world coordinates of the requested item.
	*/
	public getItemIndex(world: IgPoint) : number {
		let iv = this.i.getItemIndex(toPoint(world));
		return (iv);
	}
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Determine if object can be used as RadiusAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsRadiusAxis(axis: any) : boolean {
		let iv = this.i.canUseAsRadiusAxis(axis);
		return (iv);
	}
	/**
	 * Determine if object can be used as AngleAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsAngleAxis(axis: any) : boolean {
		let iv = this.i.canUseAsAngleAxis(axis);
		return (iv);
	}
}
