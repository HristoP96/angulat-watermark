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
import { StepLineSeries } from "./StepLineSeries";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a IgxDataChartComponent step line series.
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
*     <igx-step-line-series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"
*         valueMemberPath="value">
*     </igx-step-line-series>       
* </igx-data-chart>  
* ```
* 
* ```ts
*    let series = new IgxStepLineSeriesComponent();
*    series.xAxis = this.xAxis;
*    series.yAxis = this.yAxis;
*    series.valueMemberPath="value";
*    this.chart.series.add(series);   
* ```
*/
export const IgxStepLineSeriesComponent_PROVIDERS = [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}];
@Component({
  selector: 'igx-step-line-series',
  template: ``,
  providers: [{provide: IgxHorizontalAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxAnchoredCategorySeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxCategorySeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxMarkerSeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxStepLineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxStepLineSeriesComponent extends IgxHorizontalAnchoredCategorySeriesComponent
{

protected createImplementation() : StepLineSeries
{
	return new StepLineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : StepLineSeries {
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
