import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ConsolidatedItemsPosition, ConsolidatedItemsPosition_$type } from "./ConsolidatedItemsPosition";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ColumnSeries } from "./ColumnSeries";
import { ensureEnum, toPoint, fromRect } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent column series.
 * Compare values across categories by using vertical rectangles.Use it when the order of categories is not important or for displaying
 * item counts such as a histogram.
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
*         valueMemberPath="value" >
*       </igx-column-series>
*     </igx-data-chart>
* ```
*/
export const IgxColumnSeriesComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}];
@Component({
  selector: 'igx-column-series',
  template: ``,
  providers: [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxColumnSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxColumnSeriesComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{

protected createImplementation() : ColumnSeries
{
	return new ColumnSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ColumnSeries {
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
	 * The positioning logic to use for columns which have been consolidated into a single visual element.
	*/
	get consolidatedColumnVerticalPosition() : ConsolidatedItemsPosition {
		return this.i.consolidatedColumnVerticalPosition;
	}
	@Input()
	set consolidatedColumnVerticalPosition(v: ConsolidatedItemsPosition) {
		this.i.consolidatedColumnVerticalPosition = ensureEnum<ConsolidatedItemsPosition>(ConsolidatedItemsPosition_$type, v);
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
	 * For a category plotted series, returns the current width of the items within the categories. This only returns a value if the items have some form of width (e.g. columns, bars, etc.) otherwise 0 is returned.
	
	*/
	public getItemSpan() : number {
		let iv = this.i.getItemSpan();
		return (iv);
	}
}
