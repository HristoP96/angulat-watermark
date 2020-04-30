import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxVerticalStackedSeriesBaseComponent } from "./igx-vertical-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { StackedBarSeries } from "./StackedBarSeries";
import { toPoint } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent stacked bar series.
*/
export const IgxStackedBarSeriesComponent_PROVIDERS = [{provide: IgxVerticalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}];
@Component({
  selector: 'igx-stacked-bar-series',
  template: ``,
  providers: [{provide: IgxVerticalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedBarSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStackedBarSeriesComponent extends IgxVerticalStackedSeriesBaseComponent
{

protected createImplementation() : StackedBarSeries
{
	return new StackedBarSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StackedBarSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the x-radius of the ellipse that is used to round the corners of the bar.
	*/
	get radiusX() : number {
		return (this.i.radiusX as number);
	}
	@Input()
	set radiusX(v: number) {
		this.i.radiusX = +v;
	}
	/**
	 * Gets or sets the y-radius of the ellipse that is used to round the corners of the bar.
	*/
	get radiusY() : number {
		return (this.i.radiusY as number);
	}
	@Input()
	set radiusY(v: number) {
		this.i.radiusY = +v;
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
	/**
	 * Gets the index of the item that resides at the provided world coordinates.
	
	* @param world  * The world coordinates of the requested item.
	*/
	public getItemIndex(world: IgPoint) : number {
		let iv = this.i.getItemIndex(toPoint(world));
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
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
