import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSplineSeriesBaseComponent } from "./igx-spline-series-base-component";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { SplineFragmentBase } from "./SplineFragmentBase";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents one part in a StackedSplineSeries or StackedSplineAreaSeries.
*/
export const IgxSplineFragmentBaseComponent_PROVIDERS = [{provide: IgxSplineSeriesBaseComponent, useExisting: forwardRef(() => IgxSplineFragmentBaseComponent)}, {provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentBaseComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentBaseComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentBaseComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineFragmentBaseComponent)}];
export abstract class IgxSplineFragmentBaseComponent extends IgxSplineSeriesBaseComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : SplineFragmentBase {
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
