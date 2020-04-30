import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxFragmentBaseComponent } from "./igx-fragment-base-component";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { AreaFragment } from "./AreaFragment";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents one part of a StackedAreaSeries.
*/
export const IgxAreaFragmentComponent_PROVIDERS = [{provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}];
@Component({
  selector: 'igx-area-fragment',
  template: ``,
  providers: [{provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAreaFragmentComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxAreaFragmentComponent extends IgxFragmentBaseComponent
{

protected createImplementation() : AreaFragment
{
	return new AreaFragment();
}
	/**
	                             * @hidden 
	                             */
	public get i() : AreaFragment {
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
