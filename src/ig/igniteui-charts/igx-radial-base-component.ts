import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAngleAxisComponent } from "./igx-category-angle-axis-component";
import { IgxNumericRadiusAxisComponent } from "./igx-numeric-radius-axis-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { RadialBase } from "./RadialBase";
import { ensureBool, toPoint } from "igniteui-core/componentUtil";

/**
 * Represents the base class for all IgxDataChartComponent radial series
*/
export const IgxRadialBaseComponent_PROVIDERS = [{provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxRadialBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxRadialBaseComponent)}];
export abstract class IgxRadialBaseComponent extends IgxMarkerSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : RadialBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Checks if this series is a radial series
	*/
	get isRadial() : boolean {
		return (this.i.isRadial as boolean);
	}
	/**
	 * Gets the effective angle axis for the current series object.
	*/
	get angleAxis() : IgxCategoryAngleAxisComponent {
	                                        if (this.i.angleAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.angleAxis as any).externalObject) {
	                                            let e = IgxCategoryAngleAxisComponent._createFromInternal(this.i.angleAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.angleAxis;
	                                            }
	                                            (this.i.angleAxis as any).externalObject = e;
	                                        }
		return (this.i.angleAxis as any).externalObject;
	}
	@Input()
	set angleAxis(v: IgxCategoryAngleAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.angleAxis = null : this.i.angleAxis = v.i;
	}
	/**
	 * Gets the effective value axis for the current series object.
	*/
	get valueAxis() : IgxNumericRadiusAxisComponent {
	                                        if (this.i.valueAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.valueAxis as any).externalObject) {
	                                            let e = IgxNumericRadiusAxisComponent._createFromInternal(this.i.valueAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.valueAxis;
	                                            }
	                                            (this.i.valueAxis as any).externalObject = e;
	                                        }
		return (this.i.valueAxis as any).externalObject;
	}
	@Input()
	set valueAxis(v: IgxNumericRadiusAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.valueAxis = null : this.i.valueAxis = v.i;
	}
	/**
	 * Gets or sets whether to clip the series to the bounds.
	 * Setting this property to true will decrease chart performance.
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
	if (this.valueAxis && (this.valueAxis as any)._styling) {
	    (this.valueAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	/**
	 * Determine if object can be used as ValueAxis
	
	* @param axis  * The object to check
	*/
	public canUseAsValueAxis(axis: any) : boolean {
		let iv = this.i.canUseAsValueAxis(axis);
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
	/**
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the angle to the provided world position from the center of the radial series.
	
	* @param world  * The world position to get the angle for
	*/
	public getAngleFromWorld(world: IgPoint) : number {
		let iv = this.i.getAngleFromWorld(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the precise item index, if possible, based on the closeness to the previous or next whole integer. If the series cannot provide this information, GetExactItemIndex will return the same integer value as GetItemIndex.
	
	* @param world  * The world position for which to return the index.
	*/
	public getExactItemIndex(world: IgPoint) : number {
		let iv = this.i.getExactItemIndex(toPoint(world));
		return (iv);
	}
	/**
	 * Get the index of the item near the provided world coordinates.
	
	* @param world  * The world coordinates for which to getch the item index.
	*/
	public getItemIndex(world: IgPoint) : number {
		let iv = this.i.getItemIndex(toPoint(world));
		return (iv);
	}
	/**
	 * Scrolls the specified item into the view.
	
	* @param item  * The item to scroll into view.
	*/
	public scrollIntoView(item: any) : boolean {
		let iv = this.i.scrollIntoView(item);
		return (iv);
	}
	/**
	 * Returns the offset value for this series if grouped on a category axis.
	
	*/
	public getOffsetValue() : number {
		let iv = this.i.getOffsetValue();
		return (iv);
	}
	/**
	 * Returns the width of the category grouping this series is in.
	
	*/
	public getCategoryWidth() : number {
		let iv = this.i.getCategoryWidth();
		return (iv);
	}
}
