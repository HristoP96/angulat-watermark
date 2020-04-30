import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStackedColumnSeriesComponent } from "./igx-stacked-column-series-component";
import { IgxHorizontalStackedSeriesBaseComponent } from "./igx-horizontal-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { Stacked100ColumnSeries } from "./Stacked100ColumnSeries";

/**
 * Represents a IgxDataChartComponent stacked100 column series.
*/
export const IgxStacked100ColumnSeriesComponent_PROVIDERS = [{provide: IgxStackedColumnSeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}];
@Component({
  selector: 'igx-stacked-100-column-series',
  template: ``,
  providers: [{provide: IgxStackedColumnSeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100ColumnSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStacked100ColumnSeriesComponent extends IgxStackedColumnSeriesComponent
{

protected createImplementation() : Stacked100ColumnSeries
{
	return new Stacked100ColumnSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : Stacked100ColumnSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
