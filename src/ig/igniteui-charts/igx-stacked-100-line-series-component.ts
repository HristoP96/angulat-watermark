import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStackedLineSeriesComponent } from "./igx-stacked-line-series-component";
import { IgxHorizontalStackedSeriesBaseComponent } from "./igx-horizontal-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { Stacked100LineSeries } from "./Stacked100LineSeries";

/**
 * Represents a IgxDataChartComponent stacked100 line series.
*/
export const IgxStacked100LineSeriesComponent_PROVIDERS = [{provide: IgxStackedLineSeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}];
@Component({
  selector: 'igx-stacked-100-line-series',
  template: ``,
  providers: [{provide: IgxStackedLineSeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100LineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStacked100LineSeriesComponent extends IgxStackedLineSeriesComponent
{

protected createImplementation() : Stacked100LineSeries
{
	return new Stacked100LineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : Stacked100LineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
