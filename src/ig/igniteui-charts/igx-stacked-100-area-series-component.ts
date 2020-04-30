import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStackedAreaSeriesComponent } from "./igx-stacked-area-series-component";
import { IgxHorizontalStackedSeriesBaseComponent } from "./igx-horizontal-stacked-series-base-component";
import { IgxStackedSeriesBaseComponent } from "./igx-stacked-series-base-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { Stacked100AreaSeries } from "./Stacked100AreaSeries";

/**
 * Represents a stacked area series, where values are presented as percentages of the total.
*/
export const IgxStacked100AreaSeriesComponent_PROVIDERS = [{provide: IgxStackedAreaSeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}];
@Component({
  selector: 'igx-stacked-100-area-series',
  template: ``,
  providers: [{provide: IgxStackedAreaSeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStacked100AreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStacked100AreaSeriesComponent extends IgxStackedAreaSeriesComponent
{

protected createImplementation() : Stacked100AreaSeries
{
	return new Stacked100AreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : Stacked100AreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
