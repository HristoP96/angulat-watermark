import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { HorizontalStackedSeriesBase } from "./HorizontalStackedSeriesBase";

/**
 * Base class for stacked series with a category x-axis and a numeric y-axis.
*/
export const IgxHorizontalStackedSeriesBaseComponent_PROVIDERS = [{provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxHorizontalStackedSeriesBaseComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxHorizontalStackedSeriesBaseComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxHorizontalStackedSeriesBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxHorizontalStackedSeriesBaseComponent)}];
export abstract class IgxHorizontalStackedSeriesBaseComponent extends IgxStackedSeriesBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : HorizontalStackedSeriesBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the effective x-axis for this series.
	*/
	get xAxis() : IgxCategoryAxisBaseComponent {
	                                        if (this.i.xAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.xAxis as any).externalObject) {
	                                            let e = IgxCategoryAxisBaseComponent._createFromInternal(this.i.xAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.xAxis;
	                                            }
	                                            (this.i.xAxis as any).externalObject = e;
	                                        }
		return (this.i.xAxis as any).externalObject;
	}
	@Input()
	set xAxis(v: IgxCategoryAxisBaseComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.xAxis = null : this.i.xAxis = v.i;
	}
	/**
	 * Gets or sets the effective y-axis for this series.
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
