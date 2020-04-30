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
import { StackedLineSeries } from "./StackedLineSeries";

/**
 * Represents a stacked series, where the points in each series are connected with a line.
*/
export const IgxStackedLineSeriesComponent_PROVIDERS = [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}];
@Component({
  selector: 'igx-stacked-line-series',
  template: ``,
  providers: [{provide: IgxHorizontalStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxStackedSeriesBaseComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStackedLineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStackedLineSeriesComponent extends IgxHorizontalStackedSeriesBaseComponent
{

protected createImplementation() : StackedLineSeries
{
	return new StackedLineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StackedLineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
}
