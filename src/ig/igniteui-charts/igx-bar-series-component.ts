import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxVerticalAnchoredCategorySeriesComponent } from "./igx-vertical-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { BarSeries } from "./BarSeries";
import { toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent bar series.
*/
export const IgxBarSeriesComponent_PROVIDERS = [{provide: IgxVerticalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}];
@Component({
  selector: 'igx-bar-series',
  template: ``,
  providers: [{provide: IgxVerticalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxBarSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxBarSeriesComponent extends IgxVerticalAnchoredCategorySeriesComponent
{

protected createImplementation() : BarSeries
{
	return new BarSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : BarSeries {
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
	 * If possible, will return the best available value bounding box within the series that has the best value match for the world position provided.
	
	* @param world  * The world coordinate for which to get a value bounding box for
	*/
	public getSeriesValueBoundingBox(world: IgPoint) : IgRect {
		let iv = this.i.getSeriesValueBoundingBox(toPoint(world));
		return fromRect(iv);
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
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
