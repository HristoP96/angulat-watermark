import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxNumericAxisBaseComponent } from "./igx-numeric-axis-base-component";
import { IgxFragmentBaseComponent } from "./igx-fragment-base-component";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ColumnFragment } from "./ColumnFragment";
import { toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents one part of a StackedColumnSeries.
*/
export const IgxColumnFragmentComponent_PROVIDERS = [{provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}];
@Component({
  selector: 'igx-column-fragment',
  template: ``,
  providers: [{provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxColumnFragmentComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxColumnFragmentComponent extends IgxFragmentBaseComponent
{

protected createImplementation() : ColumnFragment
{
	return new ColumnFragment();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ColumnFragment {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the x-radius of the ellipse that is used to round the corners of the column.
	*/
	get radiusX() : number {
		return (this.i.radiusX as number);
	}
	@Input()
	set radiusX(v: number) {
		this.i.radiusX = +v;
	}
	/**
	 * Gets or sets the y-radius of the ellipse that is used to round the corners of the column.
	*/
	get radiusY() : number {
		return (this.i.radiusY as number);
	}
	@Input()
	set radiusY(v: number) {
		this.i.radiusY = +v;
	}
	/**
	 * Gets or sets the effective x-axis for this series.
	*/
	get fragmentXAxis() : IgxCategoryAxisBaseComponent {
	                                        if (this.i.fragmentXAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.fragmentXAxis as any).externalObject) {
	                                            let e = IgxCategoryAxisBaseComponent._createFromInternal(this.i.fragmentXAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.fragmentXAxis;
	                                            }
	                                            (this.i.fragmentXAxis as any).externalObject = e;
	                                        }
		return (this.i.fragmentXAxis as any).externalObject;
	}
	/**
	 * Gets or sets the effective y-axis for this series.
	*/
	get fragmentYAxis() : IgxNumericAxisBaseComponent {
	                                        if (this.i.fragmentYAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.fragmentYAxis as any).externalObject) {
	                                            let e = IgxNumericAxisBaseComponent._createFromInternal(this.i.fragmentYAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.fragmentYAxis;
	                                            }
	                                            (this.i.fragmentYAxis as any).externalObject = e;
	                                        }
		return (this.i.fragmentYAxis as any).externalObject;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.fragmentXAxis && (this.fragmentXAxis as any)._styling) {
	    (this.fragmentXAxis as any)._styling(container, component, this);
	}
	if (this.fragmentYAxis && (this.fragmentYAxis as any)._styling) {
	    (this.fragmentYAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	/**
	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinate for which to get a value bounding box for
	*/
	public getSeriesValueBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueBoundingBox(toPoint(world));
		return fromRect(iv);
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
}
