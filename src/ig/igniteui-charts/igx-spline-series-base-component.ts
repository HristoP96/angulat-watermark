import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { SplineType, SplineType_$type } from "./SplineType";
import { IgxHorizontalAnchoredCategorySeriesComponent } from "./igx-horizontal-anchored-category-series-component";
import { IgxAnchoredCategorySeriesComponent } from "./igx-anchored-category-series-component";
import { IgxCategorySeriesComponent } from "./igx-category-series-component";
import { IgxMarkerSeriesComponent } from "./igx-marker-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { SplineSeriesBase } from "./SplineSeriesBase";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";

/**
 * Represents the base class for all IgxDataChartComponent spline series.
*/
export const IgxSplineSeriesBaseComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesBaseComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesBaseComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesBaseComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesBaseComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxSplineSeriesBaseComponent)}];
export abstract class IgxSplineSeriesBaseComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : SplineSeriesBase {
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
	/**
	 * Gets or sets the type of spline to be rendered.
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	*     <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	*     <igx-spline-area-series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"
	*         splineType="clamped"
	*         valueMemberPath="value">
	*     </igx-spline-area-series>       
	* </igx-data-chart>  
	* ```
	* 
	* ```ts
	* this.series.splineType = SplineType.Clamped;
	* ```
	*/
	get splineType() : SplineType {
		return this.i.splineType;
	}
	@Input()
	set splineType(v: SplineType) {
		this.i.splineType = ensureEnum<SplineType>(SplineType_$type, v);
	}
}
