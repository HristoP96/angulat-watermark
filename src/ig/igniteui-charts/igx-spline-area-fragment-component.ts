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
import { SplineAreaFragment } from "./SplineAreaFragment";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents one part of a StackedSplineAreaSeries.
*/
export const IgxSplineAreaFragmentComponent_PROVIDERS = [{provide: IgxSplineFragmentBaseComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}];
@Component({
  selector: 'igx-spline-area-fragment',
  template: ``,
  providers: [{provide: IgxSplineFragmentBaseComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineAreaFragmentComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxSplineAreaFragmentComponent extends IgxSplineFragmentBaseComponent
{

protected createImplementation() : SplineAreaFragment
{
	return new SplineAreaFragment();
}
	/**
	                             * @hidden 
	                             */
	public get i() : SplineAreaFragment {
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
