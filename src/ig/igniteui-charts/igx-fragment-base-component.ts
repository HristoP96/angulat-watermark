import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { FragmentBase } from "./FragmentBase";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents one part of a stacked series.
*/
export const IgxFragmentBaseComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxFragmentBaseComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxFragmentBaseComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxFragmentBaseComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxFragmentBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxFragmentBaseComponent)}];
export abstract class IgxFragmentBaseComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : FragmentBase {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether the current series is a stack fragment.
	*/
	get isFragment() : boolean {
		return (this.i.isFragment as boolean);
	}
}
