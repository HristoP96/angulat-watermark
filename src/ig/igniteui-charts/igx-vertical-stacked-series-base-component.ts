import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxNumericXAxisComponent } from "./igx-numeric-x-axis-component";
import { IgxCategoryYAxisComponent } from "./igx-category-y-axis-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { VerticalStackedSeriesBase } from "./VerticalStackedSeriesBase";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Base class for stacked series with a numeric x-axis and a category y-axis.
*/
export const IgxVerticalStackedSeriesBaseComponent_PROVIDERS = [{provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxVerticalStackedSeriesBaseComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxVerticalStackedSeriesBaseComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxVerticalStackedSeriesBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxVerticalStackedSeriesBaseComponent)}];
export abstract class IgxVerticalStackedSeriesBaseComponent extends IgxStackedSeriesBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : VerticalStackedSeriesBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the effective x-axis for the current CategorySeries object.
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
	 * Gets or sets the effective y-axis for the current CategorySeries object.
	*/
	get yAxis() : IgxCategoryYAxisComponent {
	                                        if (this.i.yAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.yAxis as any).externalObject) {
	                                            let e = IgxCategoryYAxisComponent._createFromInternal(this.i.yAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.yAxis;
	                                            }
	                                            (this.i.yAxis as any).externalObject = e;
	                                        }
		return (this.i.yAxis as any).externalObject;
	}
	@Input()
	set yAxis(v: IgxCategoryYAxisComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.yAxis = null : this.i.yAxis = v.i;
	}
	/**
	 * Gets whether or not the current series is vertical series
	*/
	get isVertical() : boolean {
		return (this.i.isVertical as boolean);
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
}
