import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxNumericXAxisComponent } from "./igx-numeric-x-axis-component";
import { IgxCategoryYAxisComponent } from "./igx-category-y-axis-component";
import { IgxColumnFragmentComponent } from "./igx-column-fragment-component";
import { IgxFragmentBaseComponent } from "./igx-fragment-base-component";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { BarFragment } from "./BarFragment";
import { toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents one part of a StackedBarSeries.
*/
export const IgxBarFragmentComponent_PROVIDERS = [{provide: IgxColumnFragmentComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}];
@Component({
  selector: 'igx-bar-fragment',
  template: ``,
  providers: [{provide: IgxColumnFragmentComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBarFragmentComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxBarFragmentComponent extends IgxColumnFragmentComponent
{

protected createImplementation() : BarFragment
{
	return new BarFragment();
}
	/**
	                             * @hidden 
	                             */
	public get i() : BarFragment {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The X-Axis for this BarFragment.
	*/
	get barFragmentXAxis() : IgxNumericXAxisComponent {
	                                        if (this.i.barFragmentXAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.barFragmentXAxis as any).externalObject) {
	                                            let e = IgxNumericXAxisComponent._createFromInternal(this.i.barFragmentXAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.barFragmentXAxis;
	                                            }
	                                            (this.i.barFragmentXAxis as any).externalObject = e;
	                                        }
		return (this.i.barFragmentXAxis as any).externalObject;
	}
	/**
	 * The Y-Axis for this BarFragment.
	*/
	get barFragmentYAxis() : IgxCategoryYAxisComponent {
	                                        if (this.i.barFragmentYAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.barFragmentYAxis as any).externalObject) {
	                                            let e = IgxCategoryYAxisComponent._createFromInternal(this.i.barFragmentYAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.barFragmentYAxis;
	                                            }
	                                            (this.i.barFragmentYAxis as any).externalObject = e;
	                                        }
		return (this.i.barFragmentYAxis as any).externalObject;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.barFragmentXAxis && (this.barFragmentXAxis as any)._styling) {
	    (this.barFragmentXAxis as any)._styling(container, component, this);
	}
	if (this.barFragmentYAxis && (this.barFragmentYAxis as any)._styling) {
	    (this.barFragmentYAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
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
}
