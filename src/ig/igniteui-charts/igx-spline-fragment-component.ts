import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSplineFragmentBaseComponent } from "./igx-spline-fragment-base-component";
import { IgxSplineSeriesBaseComponent } from "./igx-spline-series-base-component";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { SplineFragment } from "./SplineFragment";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents one part of a StackedSplineSeries.
*/
export const IgxSplineFragmentComponent_PROVIDERS = [{provide: IgxSplineFragmentBaseComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}];
@Component({
  selector: 'igx-spline-fragment',
  template: ``,
  providers: [{provide: IgxSplineFragmentBaseComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSplineFragmentComponent extends IgxSplineFragmentBaseComponent
{

protected createImplementation() : SplineFragment
{
	return new SplineFragment();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SplineFragment {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether the current series shows an area or line shape.
	*/
	get isAreaOrLine() : boolean {
		return (this.i.isAreaOrLine as boolean);
	}
}
