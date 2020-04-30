import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { CategoryTransitionInMode, CategoryTransitionInMode_$type } from "./CategoryTransitionInMode";
import { IgxAssigningCategoryStyleEventArgs } from "./igx-assigning-category-style-event-args";
import { IgxAssigningCategoryMarkerStyleEventArgs } from "./igx-assigning-category-marker-style-event-args";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { CategorySeries } from "./CategorySeries";
import { ensureBool, ensureEnum, toPoint } from "igniteui-core/componentUtil";

/**
 * Represents the base class for IgxDataChartComponent category series.
* 
* `IgxCategorySeriesComponent` class represents the base class for IgxDataChartComponent category series.
* 
* ```html
*     <igx-data-chart [dataSource]="data" >
*       <igx-category-x-axis
*         label="label"
*         #xAxis>
*       </igx-category-x-axis>
*       <igx-numeric-y-axis #yAxis>
*       </igx-numeric-y-axis>
*       <igx-column-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value"
*         isTransitionInEnabled="true">
*       </igx-column-series>
*     </igx-data-chart>
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
export const IgxCategorySeriesComponent_PROVIDERS = [{provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxCategorySeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCategorySeriesComponent)}];
export abstract class IgxCategorySeriesComponent extends IgxMarkerSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : CategorySeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether or not this series is Category series
	*/
	get isCategory() : boolean {
		return (this.i.isCategory as boolean);
	}
	/**
	 * Gets or sets whether this category series should allow custom style overrides of its individual visuals.
	*/
	get isCustomCategoryStyleAllowed() : boolean {
		return (this.i.isCustomCategoryStyleAllowed as boolean);
	}
	@Input()
	set isCustomCategoryStyleAllowed(v: boolean) {
		this.i.isCustomCategoryStyleAllowed = ensureBool(v);
	}
	/**
	 * Gets or sets whether this category series should allow custom style overrides of its individual marker visuals.
	*/
	get isCustomCategoryMarkerStyleAllowed() : boolean {
		return (this.i.isCustomCategoryMarkerStyleAllowed as boolean);
	}
	@Input()
	set isCustomCategoryMarkerStyleAllowed(v: boolean) {
		this.i.isCustomCategoryMarkerStyleAllowed = ensureBool(v);
	}
	/**
	 * Sets or Gets whether to increase marker fidelity for extreme data shapes that have lots of Y variation over short X intervals.
	* 
	* Set `useHighMarkerFidelity` when your data has high variation along the y-axis within a short span of this x-axis.
	* 
	* ```html
	* <igx-data-chart [dataSource]="data">
	*     <igx-category-x-axis 
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         markerType="circle"
	*         useHighMarkerFidelity="true">
	*     </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxColumnSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath= "value";
	* series.useHighMarkerFidelity= "true";
	* this.chart.series.add(series);
	* ```
	* 
	* ```ts
	*       this.columnSeries2.useHighMarkerFidelity= "true";
	* ```
	*/
	get useHighMarkerFidelity() : boolean {
		return (this.i.useHighMarkerFidelity as boolean);
	}
	@Input()
	set useHighMarkerFidelity(v: boolean) {
		this.i.useHighMarkerFidelity = ensureBool(v);
	}
	/**
	 * Gets or sets the method by which to animate the data into the chart when the chart data source is swapped.
	 * Note: Transitions are not currently supported for stacked series.
	* 
	* `transitionInMode` controls the direction of the transition-in animation.
	* 
	* ```html
	*     <igx-data-chart 
	*       [dataSource]="data" >
	*       <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis #yAxis>
	*       </igx-numeric-y-axis>
	* 
	*       <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isTransitionInEnabled="true"
	*         transitionInMode="accordionfromRight">
	*       </igx-column-series>
	*     </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxColumnSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath="value";
	* series.transitionInMode="accordionfromRight";
	* this.chart.series.add(series);
	* ```
	* 
	* ```ts
	* 	
	* 	this.columnSeries2.transitionInMode= "accordionfromRight";
	* ```
	*/
	get transitionInMode() : CategoryTransitionInMode {
		return this.i.transitionInMode;
	}
	@Input()
	set transitionInMode(v: CategoryTransitionInMode) {
		this.i.transitionInMode = ensureEnum<CategoryTransitionInMode>(CategoryTransitionInMode_$type, v);
	}
	/**
	 * Gets or sets whether the series should transition into the plot area when a new data source is assigned.
	 * Note: Transitions are not currently supported for stacked series.
	* 
	* Set `isTransitionInEnabled` to true if you want your chart series to animate into position when the chart is loading into view.
	* 
	* ```html
	*     <igx-data-chart [dataSource]="data" >
	*       <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis #yAxis>
	*       </igx-numeric-y-axis>
	* 
	*       <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value"
	*         isTransitionInEnabled="true">
	*       </igx-column-series>
	*     </igx-data-chart>
	* ```
	* 
	* ```ts
	* let series = new IgxColumnSeriesComponent();
	* series.xAxis = this.xAxis;
	* series.yAxis = this.yAxis;
	* series.valueMemberPath="value";
	* series.isTransitionInEnabled="true";
	* this.chart.series.add(series);
	* ```
	*/
	get isTransitionInEnabled() : boolean {
		return (this.i.isTransitionInEnabled as boolean);
	}
	@Input()
	set isTransitionInEnabled(v: boolean) {
		this.i.isTransitionInEnabled = ensureBool(v);
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
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
	/**
	 * Gets the index of the item based on world coordinates.
	
	* @param world  * The world coordinates to use.
	*/
	public getItemIndex(world: IgPoint) : number {
		let iv = this.i.getItemIndex(toPoint(world));
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
	private _assigningCategoryStyle: EventEmitter<{ sender: any, args: IgxAssigningCategoryStyleEventArgs}> = null;
	/**
	 * Event raised when Assigning Category Style
	*/
	@Output()
	get assigningCategoryStyle(): EventEmitter<{ sender: any, args: IgxAssigningCategoryStyleEventArgs}> {
		if (this._assigningCategoryStyle == null) {
			this._assigningCategoryStyle = new EventEmitter<{sender: any, args: IgxAssigningCategoryStyleEventArgs}>();
			this.i.assigningCategoryStyle = delegateCombine(this.i.assigningCategoryStyle, (o, e) => {
				let outerArgs = new IgxAssigningCategoryStyleEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeAssigningCategoryStyle) {
	                            (this as any).beforeAssigningCategoryStyle(this, outerArgs);
	                        }
					    this._assigningCategoryStyle.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._assigningCategoryStyle;
	}
	private _assigningCategoryMarkerStyle: EventEmitter<{ sender: any, args: IgxAssigningCategoryMarkerStyleEventArgs}> = null;
	/**
	 * Event raised when Assigning Category Marker Style
	*/
	@Output()
	get assigningCategoryMarkerStyle(): EventEmitter<{ sender: any, args: IgxAssigningCategoryMarkerStyleEventArgs}> {
		if (this._assigningCategoryMarkerStyle == null) {
			this._assigningCategoryMarkerStyle = new EventEmitter<{sender: any, args: IgxAssigningCategoryMarkerStyleEventArgs}>();
			this.i.assigningCategoryMarkerStyle = delegateCombine(this.i.assigningCategoryMarkerStyle, (o, e) => {
				let outerArgs = new IgxAssigningCategoryMarkerStyleEventArgs();
					    (<any>outerArgs)._provideImplementation(e);
	                        if ((this as any).beforeAssigningCategoryMarkerStyle) {
	                            (this as any).beforeAssigningCategoryMarkerStyle(this, outerArgs);
	                        }
					    this._assigningCategoryMarkerStyle.emit({
						    sender: this,
						    args: outerArgs
					    });
			});
		}
		return this._assigningCategoryMarkerStyle;
	}
}
