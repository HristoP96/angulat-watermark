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
import { StackedAreaSeries } from "./StackedAreaSeries";

/**
 * Represents a IgxDataChartComponent stacked area series.
*/
export const IgxStackedAreaSeriesComponent_PROVIDERS = [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}];
@Component({
  selector: 'igx-stacked-area-series',
  template: ``,
  providers: [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStackedAreaSeriesComponent extends IgxHorizontalStackedSeriesBaseComponent
{

protected createImplementation() : StackedAreaSeries
{
	return new StackedAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StackedAreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
