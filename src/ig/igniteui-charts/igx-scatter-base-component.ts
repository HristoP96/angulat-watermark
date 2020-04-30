import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxNumericXAxisComponent } from "./igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "./CollisionAvoidanceType";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterBase } from "./ScatterBase";
import { ensureBool, ensureEnum, brushToString, stringToBrush, toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents the base class for all IgxDataChartComponent scatter series
*/
export const IgxScatterBaseComponent_PROVIDERS = [{provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxScatterBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterBaseComponent)}];
export abstract class IgxScatterBaseComponent extends IgxMarkerSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : ScatterBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Checks if this series is a scatter series
	*/
	get isScatter() : boolean {
		return (this.i.isScatter as boolean);
	}
	/**
	 * Gets or sets the effective x-axis for the current object.
	*/
	get xAxis() : IgxNumericXAxisComponent {
	                                        if (this.i.xAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.xAxis as any).externalObject) {
	                                            let e = IgxNumericXAxisComponent._createFromInternal(this.i.xAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.xAxis;
	                                            }
	                                            (this.i.xAxis as any).externalObject = e;
	                                        }
		return (this.i.xAxis as any).externalObject;
	}
	@Input()
	set xAxis(v: IgxNumericXAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.xAxis = null : this.i.xAxis = v.i;
	}
	/**
	 * Gets or sets the effective y-axis for the current object.
	*/
	get yAxis() : IgxNumericYAxisComponent {
	                                        if (this.i.yAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.yAxis as any).externalObject) {
	                                            let e = IgxNumericYAxisComponent._createFromInternal(this.i.yAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.yAxis;
	                                            }
	                                            (this.i.yAxis as any).externalObject = e;
	                                        }
		return (this.i.yAxis as any).externalObject;
	}
	@Input()
	set yAxis(v: IgxNumericYAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.yAxis = null : this.i.yAxis = v.i;
	}
	/**
	 * Gets or sets the value mapping property for the current series object.
	*/
	get xMemberPath() : string {
		return (this.i.xMemberPath as string);
	}
	@Input()
	set xMemberPath(v: string) {
		this.i.xMemberPath = v;
	}
	/**
	 * Gets or sets the value mapping property for the current series object.
	*/
	get yMemberPath() : string {
		return (this.i.yMemberPath as string);
	}
	@Input()
	set yMemberPath(v: string) {
		this.i.yMemberPath = v;
	}
	/**
	 * Gets or sets the trend type for the current scatter series.
	*/
	get trendLineType() : TrendLineType {
		return this.i.trendLineType;
	}
	@Input()
	set trendLineType(v: TrendLineType) {
		this.i.trendLineType = ensureEnum<TrendLineType>(TrendLineType_$type, v);
	}
	/**
	 * Gets or sets the brush to use to draw the trend line.
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
	 * Gets or sets the thickness of the current scatter series object's trend line.
	*/
	get trendLineThickness() : number {
		return (this.i.trendLineThickness as number);
	}
	@Input()
	set trendLineThickness(v: number) {
		this.i.trendLineThickness = +v;
	}
	/**
	 * Gets or sets the moving average period for the current scatter series object.
	 * The typical, and initial, value for trend line period is 7.
	*/
	get trendLinePeriod() : number {
		return (this.i.trendLinePeriod as number);
	}
	@Input()
	set trendLinePeriod(v: number) {
		this.i.trendLinePeriod = +v;
	}
	/**
	 * The desired behavior for markers in this series which are placed too close together for the current view, resulting in a collision.
	*/
	get markerCollisionAvoidance() : CollisionAvoidanceType {
		return this.i.markerCollisionAvoidance;
	}
	@Input()
	set markerCollisionAvoidance(v: CollisionAvoidanceType) {
		this.i.markerCollisionAvoidance = ensureEnum<CollisionAvoidanceType>(CollisionAvoidanceType_$type, v);
	}
	/**
	 * Gets or sets the Z-Index of the trend line.  Values greater than 1000 will result in the trend line being rendered in front of the series data.
	*/
	get trendLineZIndex() : number {
		return (this.i.trendLineZIndex as number);
	}
	@Input()
	set trendLineZIndex(v: number) {
		this.i.trendLineZIndex = +v;
	}
	/**
	 * Gets or sets the maximum number of markerItems displayed by the current series.
	 * If more than the specified number of markerItems are visible, the series will automatically
	 * choose a representative set.
	*/
	get maximumMarkers() : number {
		return (this.i.maximumMarkers as number);
	}
	@Input()
	set maximumMarkers(v: number) {
		this.i.maximumMarkers = +v;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.xAxis && (this.xAxis as any)._styling) {
	    (this.xAxis as any)._styling(container, component, this);
	}
	if (this.yAxis && (this.yAxis as any)._styling) {
	    (this.yAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * If possible, will return the best available value marker bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinates for which to get a value marker bounding box for
	*/
	public getSeriesValueMarkerBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueMarkerBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	/**
	 * Determine if object can be used as YAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsYAxis(axis: any) : boolean {
		let iv = this.i.canUseAsYAxis(axis);
		return (iv);
	}
	/**
	 * Determine if object can be used as XAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsXAxis(axis: any) : boolean {
		let iv = this.i.canUseAsXAxis(axis);
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
	/**
	 * Scrolls the series to display the item for the specified data item.
	 * The series is scrolled by the minimum amount required to place the specified data item within
	 * the central 80% of the visible axis.
	
	* @param item  * The data item (item) to scroll to.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
}
