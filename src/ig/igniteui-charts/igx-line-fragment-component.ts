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
import { LineFragment } from "./LineFragment";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents one part of a StackedLineSeries.
*/
export const IgxLineFragmentComponent_PROVIDERS = [{provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}];
@Component({
  selector: 'igx-line-fragment',
  template: ``,
  providers: [{provide: IgxFragmentBaseComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxLineFragmentComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxLineFragmentComponent extends IgxFragmentBaseComponent
{

protected createImplementation() : LineFragment
{
	return new LineFragment();
}
	/**
	                             * @hidden 
	                             */
	public get i() : LineFragment {
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
