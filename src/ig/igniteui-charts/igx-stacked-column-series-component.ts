import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHorizontalStackedSeriesBaseComponent } from "./igx-horizontal-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { StackedColumnSeries } from "./StackedColumnSeries";

/**
 * Represents a IgxDataChartComponent stacked column series.
*/
export const IgxStackedColumnSeriesComponent_PROVIDERS = [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}];
@Component({
  selector: 'igx-stacked-column-series',
  template: ``,
  providers: [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedColumnSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStackedColumnSeriesComponent extends IgxHorizontalStackedSeriesBaseComponent
{

protected createImplementation() : StackedColumnSeries
{
	return new StackedColumnSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StackedColumnSeries {
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
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
