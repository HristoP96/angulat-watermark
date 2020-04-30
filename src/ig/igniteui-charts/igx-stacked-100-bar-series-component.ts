import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStackedBarSeriesComponent } from "./igx-stacked-bar-series-component";
import { IgxVerticalStackedSeriesBaseComponent } from "./igx-vertical-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { Stacked100BarSeries } from "./Stacked100BarSeries";

/**
 * Represents a IgxDataChartComponent stacked100 bar series.
*/
export const IgxStacked100BarSeriesComponent_PROVIDERS = [{provide: IgxStackedBarSeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxVerticalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}];
@Component({
  selector: 'igx-stacked-100-bar-series',
  template: ``,
  providers: [{provide: IgxStackedBarSeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxVerticalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100BarSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStacked100BarSeriesComponent extends IgxStackedBarSeriesComponent
{

protected createImplementation() : Stacked100BarSeries
{
	return new Stacked100BarSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : Stacked100BarSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
