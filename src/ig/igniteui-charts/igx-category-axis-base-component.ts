/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Type, Component, AfterContentInit, OnInit, ViewChild, ContentChildren, QueryList, ElementRef, Inject, Input, forwardRef } from '@angular/core';
import { AngularRenderer } from 'igniteui-core/angular-renderer';
import { Visibility } from 'igniteui-core/Visibility';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { HorizontalAlignment } from 'igniteui-core/HorizontalAlignment';
import { VerticalAlignment } from 'igniteui-core/VerticalAlignment';
import { AxisExtentType } from './AxisExtentType';
import { IgxAxisComponent } from './igx-axis-component';
import { PointUtil, IEnumerable } from 'igniteui-core/type';
import { Brush } from 'igniteui-core/Brush';
import { Color } from 'igniteui-core/Color';
import { Series } from './Series';
import { Rect } from 'igniteui-core/Rect';
import { CategoryAxisBase } from './CategoryAxisBase';
import { brushToString, stringToBrush, toPoint, fromPoint, toRect, fromRect, ensureBool, toSpinal, initializePropertiesFromCss, NamePatcher } from "igniteui-core/componentUtil";


export const IgxCategoryAxisBaseComponent_PROVIDERS = [{ provide: IgxAxisComponent, useExisting: forwardRef(() => IgxCategoryAxisBaseComponent) }];

/**
 * Represents the base class for all IgxDataChartComponent category-based axes.
* 
* ```html
* <igx-data-chart 
*     [dataSource]="data">
*     
*     <igx-category-x-axis
*         label="label"       
*         #xAxis>
*     </igx-category-x-axis>
*     <igx-numeric-y-axis
*         #yAxis>
*     </igx-numeric-y-axis>
* 
*     <igx-column-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-column-series>
*     <igx-column-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
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
export abstract class IgxCategoryAxisBaseComponent extends IgxAxisComponent {
	constructor() {
		super();
        if ((this as any)._styling) {
            NamePatcher.ensureStylablePatched(Object.getPrototypeOf(this));
        }
	}

	private _chartLevelData: any = null;
	provideData(data: any[]) {
		this._chartLevelData= data;
		this.updateDataSource();
	}

	private updateDataSource() {
		if (this._dataSource == null) {
			this.i.itemsSource = this._chartLevelData;
		} else {
			this.i.itemsSource = this._dataSource;
		}
	}

	private _dataSource: any = null;
    @Input()
	set dataSource(value: any) {
		this._dataSource = value;
		this.updateDataSource();
		//console.log("setting axis data source: " + value)
	}
	get dataSource(): any {
        if (this._dataSource != null) {
		    return this._dataSource;
        }
        return this.i.itemsSource;      
    }

    	/**
	                             * @hidden 
	                             */
	public get i() : CategoryAxisBase {
		return this._implementation;
	}

		/**
	 * Gets if the current axis is a continuous rather than a discrete scale
	*/
	get isContinuous() : boolean {
		return (this.i.isContinuous as boolean);
	}
	/**
	 * Checks if the axis is of category axis type
	*/
	get isCategory() : boolean {
		return (this.i.isCategory as boolean);
	}
	/**
	 * Gets the number of items in the current category axis items source.
	*/
	get itemsCount() : number {
		return (this.i.itemsCount as number);
	}
	@Input()
	set itemsCount(v: number) {
		this.i.itemsCount = +v;
	}
	/**
	 * Gets or sets the amount of space between adjacent categories for the current axis object.
	 * The gap is silently clamped to the range [0, 1] when used.
	* 
	* Use the `gap` property to configure the spacing between items on a category axis with item spacing.
	* 
	* A `gap` of 0 allocates no space between items.  A `gap` of 1 allocates a space between items equal to the width of one item.
	* 
	* To set the item spacing to 75% the width of one item, set the `gap` to 0.75, as in this code:
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">    
	*     <igx-category-x-axis
	*         label="label"
	*         gap="0.75"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>    
	* </igx-data-chart>
	* ```
	*/
	get gap() : number {
		return (this.i.gap as number);
	}
	@Input()
	set gap(v: number) {
		this.i.gap = +v;
	}
	/**
	 * Gets or sets the amount of overlap between adjacent categories for the current axis object.
	 * The overlap is silently clamped to the range [-1, 1] when used.
	* 
	* Use the `overlap` property to configure the spacing between items on a category axis with item spacing and more than one series.
	* 
	* An `overlap` of 0 places grouped items adjacent to each other.  An `overlap` of 1 places grouped items in the same axis space, completely overlapping.  An `overlap` of -1 places a space between grouped items equal to the width of one item.
	* 
	* To place grouped items with 75% overlap, set the `overlap` to 0.75, as in this code:
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="data">
	*     
	*     <igx-category-x-axis
	*         label="label"
	*         overlap="0.75"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*         #yAxis>
	*     </igx-numeric-y-axis>
	* 
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*     </igx-column-series>
	*     <igx-column-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         valueMemberPath="value">
	*       </igx-column-series>  
	* </igx-data-chart>
	* ```
	*/
	get overlap() : number {
		return (this.i.overlap as number);
	}
	@Input()
	set overlap(v: number) {
		this.i.overlap = +v;
	}
	/**
	 * Gets or sets whether the category axis should use clustering display mode even if no series are present that would force clustering mode.
	* 
	* `useClusteringMode` applies grouping and spacing to a category axis equivalent to the grouping that occurs when grouping series, such as ColumnSeries, are used.
	* 
	* Try setting it on an axis displaying financial series to adjust the spacing on the left and right sides of the axis:
	* 
	* ```html
	* <igx-data-chart 
	*     [dataSource]="financialData">    
	*     <igx-category-x-axis
	*     label="time"
	*     useClusteringMode="true"
	*     #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis
	*     #yAxis>
	*     </igx-numeric-y-axis>
	* 
	*     <igx-column-series 
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     valueMemberPath="value">
	*     </igx-column-series>
	*     <igx-financial-price-series 
	*     [xAxis]="xAxis"
	*     [yAxis]="yAxis"
	*     openMemberPath="open"
	*     highMemberPath="high"
	*     lowMemberPath="low"
	*     closeMemberPath="close"
	*     volumeMemberPath="volume">
	*     </igx-financial-price-series>
	* </igx-data-chart>
	* ```
	*/
	get useClusteringMode() : boolean {
		return (this.i.useClusteringMode as boolean);
	}
	@Input()
	set useClusteringMode(v: boolean) {
		this.i.useClusteringMode = ensureBool(v);
	}

    

		public getCategoryBoundingBox(point: IgPoint, useInterpolation: boolean, singularWidth: number) : IgRect {
		let iv = this.i.getCategoryBoundingBox(toPoint(point), useInterpolation, singularWidth);
		return fromRect(iv);
	}
	public getCategoryBoundingBoxHelper(point: IgPoint, useInterpolation: boolean, singularWidth: number, isVertical: boolean) : IgRect {
		let iv = this.i.getCategoryBoundingBoxHelper(toPoint(point), useInterpolation, singularWidth, isVertical);
		return fromRect(iv);
	}
	/**
	 * Unscales a value from screen space into axis space.
	
	* @param unscaledValue  * The scaled value in screen coordinates to unscale into axis space.
	*/
	public unscaleValue(unscaledValue: number) : number {
		let iv = this.i.unscaleValue(unscaledValue);
		return (iv);
	}
	public notifySetItem(index: number, oldItem: any, newItem: any) {
		this.i.notifySetItem(index, oldItem, newItem);
	}
	/**
	 * Used to manually notify the axis that the data source has reset or cleared its items.
	
	*/
	public notifyClearItems() {
		this.i.notifyClearItems();
	}
	public notifyInsertItem(index: number, newItem: any) {
		this.i.notifyInsertItem(index, newItem);
	}
	public notifyRemoveItem(index: number, oldItem: any) {
		this.i.notifyRemoveItem(index, oldItem);
	}
}
