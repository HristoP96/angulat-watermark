import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxNumericYAxisComponent } from "./igx-numeric-y-axis-component";
import { IgxRangeCategorySeriesComponent } from "./igx-range-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { HorizontalRangeCategorySeries } from "./HorizontalRangeCategorySeries";
import { ensureBool, toPoint, fromPoint } from "igniteui-core/componentUtil";

/**
 * Base class for ranged category series with a category X-axis and a numeric Y-axis.
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
export const IgxHorizontalRangeCategorySeriesComponent_PROVIDERS = [{provide: IgxRangeCategorySeriesComponent, useExisting: forwardRef(() => IgxHorizontalRangeCategorySeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxHorizontalRangeCategorySeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxHorizontalRangeCategorySeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxHorizontalRangeCategorySeriesComponent)}];
export abstract class IgxHorizontalRangeCategorySeriesComponent extends IgxRangeCategorySeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : HorizontalRangeCategorySeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the effective x-axis for the current CategorySeries object.
	* 
	* Instantiate xAxis
	* 
	* <!-- Angular -->
	* 
	* ```html
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
	 * Gets or sets the effective y-axis for the current CategorySeries object.
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
	/**
	 * Checks if this series is a range series
	* 
	* You can use the `isRange` to get the current series is a range type series.
	* 
	* <!-- Angular JS -->
	* 
	* ```ts
	*   var r = this.series.isRange;
	* ```
	*/
	get isRange() : boolean {
		return (this.i.isRange as boolean);
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
	public getNextOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getNextOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getPreviousOrExactIndex(world: IgPoint, skipUnknowns: boolean) : number {
		let iv = this.i.getPreviousOrExactIndex(toPoint(world), skipUnknowns);
		return (iv);
	}
	public getSeriesValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesLowValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesLowValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesHighValue(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : number {
		let iv = this.i.getSeriesHighValue(toPoint(world), useInterpolation, skipUnknowns);
		return (iv);
	}
	public getSeriesHighValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesHighValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesLowValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesLowValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	public getSeriesValuePosition(world: IgPoint, useInterpolation: boolean, skipUnknowns: boolean) : IgPoint {
		let iv = this.i.getSeriesValuePosition(toPoint(world), useInterpolation, skipUnknowns);
		return fromPoint(iv);
	}
	/**
	 * Determine if object can be used as YAxis
	
	* @param axis  * The object to check
	* 
	* You can use the `canUseAsYAxis` method to determine if object can be used as YAxis
	*/
	public canUseAsYAxis(axis: any) : boolean {
		let iv = this.i.canUseAsYAxis(axis);
		return (iv);
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
}
