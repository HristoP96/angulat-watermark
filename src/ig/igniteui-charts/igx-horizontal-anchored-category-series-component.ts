import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { toPoint, fromRect, fromPoint } from "igniteui-core/componentUtil";

/**
 * Base class for anchored category series with a category x-axis and a numeric y-axis.
* 
* Instantiate HorizontalAnchoredCategorySeries
* 
* ```html
*  <igx-data-chart 
*       [dataSource]="data"  >      
* 	 <igx-column-series
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis" 
*         valueMemberPath="value" 
*           >
*       </igx-column-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series = new IgxColumnSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.valueMemberPath="value";
* this.chart.series.add(series);
* ```
*/
export const IgxHorizontalAnchoredCategorySeriesComponent_PROVIDERS = [{provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxHorizontalAnchoredCategorySeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxHorizontalAnchoredCategorySeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxHorizontalAnchoredCategorySeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxHorizontalAnchoredCategorySeriesComponent)}];
export abstract class IgxHorizontalAnchoredCategorySeriesComponent extends IgxAnchoredCategorySeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : HorizontalAnchoredCategorySeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the effective x-axis for this series.
	* 
	* Instantiate xAxis
	* 
	* <!-- Angular -->
	* 
	* ```js
	*  <igx-data-chart 
	*       [dataSource]="data"  >   
	* 	  <igx-category-x-axis 
	*         label="label" 
	*         #xAxis
	*         >
	*       </igx-category-x-axis>   
	* 	 <igx-column-series
	*     ...
	*         [xAxis]="xAxis"
	*     ...
	*           >
	*       </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxColumnSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath="value";
	* this.chart.series.add(series);
	* ```
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
	* 
	* Instantiate yAxis
	* 
	* <!-- Angular -->
	* 
	* ```js
	*  <igx-data-chart 
	*       [dataSource]="data"  >    
	* 	  <igx-numeric-y-axis
	*         minimumValue="0"
	*         #yAxis>
	*       </igx-numeric-y-axis>  
	* 	 <igx-column-series
	*     ...
	*         [yAxis]="yAxis"
	*     ...
	*           >
	*       </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxColumnSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath="value";
	* this.chart.series.add(series);
	* ```
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
	 * If possible, will return the best available value marker bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinates for which to get a value marker bounding box for
	* 
	* You can use the `getCategoryWidth` to get the width of the category grouping a series is in.
	* 
	* <!-- Angular JS -->
	* 
	*     var x = financialSeries.GetSeriesValueMarkerBoundingBox(new IgxPoint());
	* 
	* <!-- Ignite JS -->
	* 
	*      N/A
	*/
	public getSeriesValueMarkerBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueMarkerBoundingBox(toPoint(world));
		return fromRect(iv);
	}
	/**
	 * Returns the offset value for this series if grouped on a category axis.
	
	* 
	* You can use the `getOffsetValue` to get the offset value for this series if grouped on a category axis.
	* 
	* <!-- Angular JS -->
	* 
	*       var g = series.getOffsetValue();
	* 
	* <!-- Ignite JS -->
	* 
	*      N/A
	*/
	public getOffsetValue() : number {
		let iv = this.i.getOffsetValue();
		return (iv);
	}
	/**
	 * Returns the width of the category grouping this series is in.
	
	* 
	* You can use the `getCategoryWidth` to get the width of the category grouping a series is in.
	* 
	* <!-- Angular JS -->
	* 
	*      var x = this.financialSeries.CanUseAsXAxis(this.xAxis);
	* 
	* <!-- Ignite JS -->
	* 
	*      N/A
	*/
	public getCategoryWidth() : number {
		let iv = this.i.getCategoryWidth();
		return (iv);
	}
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getPreviousOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getPreviousOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getNextOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getNextOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getSeriesValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	/**
	 * Determine if object can be used as XAxis
	
	* @param axis  * The object to check
	* 
	* You can use the `canUseAsXAxis` method to determine if object can be used as XAxis
	* 
	* <!-- Angular JS -->
	* 
	*      var x = this.financialSeries.CanUseAsXAxis(this.xAxis);
	*/
	public canUseAsXAxis(axis: any) : boolean {
		let iv = this.i.canUseAsXAxis(axis);
		return (iv);
	}
	/**
	 * Determine if object can be used as YAxis
	
	* @param axis  * The object to check
	* 
	* You can use the `canUseAsYAxis` method to determine if object can be used as YAxis
	* 
	* <!-- Ignite JS -->
	* 
	*      N/A
	*/
	public canUseAsYAxis(axis: any) : boolean {
		let iv = this.i.canUseAsYAxis(axis);
		return (iv);
	}
}
