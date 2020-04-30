import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { IgxSeriesComponent } from "./igx-series-component";
import { MarkerSeries } from "./MarkerSeries";
import { ensureBool, ensureEnum, brushToString, stringToBrush } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Represents the base class for series containing markers.
* 
* MarkerSeries represents the base class for series containing markers. 
* 
* Example:
* 
* ```html
* <igx-data-chart
*     [dataSource]="data">
* 	<igx-category-x-axis
*         label="label"
*         #xAxis
*         >
*       </igx-category-x-axis>
*       <igx-numeric-y-axis
*         minimumValue="0"
*         #yAxis>
*       </igx-numeric-y-axis>
* 	 <igx-column-series
*         #series 
*         [xAxis]="xAxis"
*         [yAxis]="yAxis"	
*      valueMemberPath="value">	
*      </igx-column-series>
* </igx-data-chart>
* ```
* 
* ```ts
* let series: IgxMarkerSeriesComponent = new IgxMarkerSeriesComponent();
* series.xAxis = this.xAxis;
* series.yAxis = this.yAxis;
* series.valueMemberPath = "value";
* this.chart.series.add(series);
* ```
*/
export const IgxMarkerSeriesComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxMarkerSeriesComponent)}];
export abstract class IgxMarkerSeriesComponent extends IgxSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : MarkerSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Returns whether the current series supports visual markers.
	* 
	* `hasMarkers` property is overriden, it returns whether the current series supports visual markers. You can use it like this:
	* 
	* ```ts
	*  let gotMarkers: boolean = this.series.hasMarkers;
	* ```
	*/
	get hasMarkers() : boolean {
		return (this.i.hasMarkers as boolean);
	}
	/**
	 * Gets or sets the marker type for the current series object.
	 * If the MarkerTemplate property is set, the setting of the MarkerType property will be ignored.
	* 
	* `markerType` property gets or sets the marker type for the current series object. For example, you can set it like this:
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	* 	 <igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*     </igx-category-x-axis>
	*     <igx-numeric-y-axis       
	*         #yAxis>
	*     </igx-numeric-y-axis>
	* 	 <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"	
	*      valueMemberPath="value"
	* 	 markerType = "circle">	
	*      </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.markerType = "circle";
	* ```
	*/
	get markerType() : MarkerType {
		return this.i.markerType;
	}
	@Input()
	set markerType(v: MarkerType) {
		this.i.markerType = ensureEnum<MarkerType>(MarkerType_$type, v);
	}
	/**
	 * Gets or sets the MarkerTemplate for the current series object.
	* 
	* `markerTemplate` property gets or sets the MarkerTemplate for the current series object. For example, you can use it like this:
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	* 	<igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis #yAxis>
	*       </igx-numeric-y-axis>
	* 	 <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"	
	*      valueMemberPath="value"
	* 	 markerTemplate="circleMarkerTemplate">	
	*      </igx-column-series>
	* </igx-data-chart>
	* ```
	*/
	get markerTemplate() : IgDataTemplate {
		return (this.i.markerTemplate as IgDataTemplate);
	}
	@Input()
	set markerTemplate(v: IgDataTemplate) {
		this.i.markerTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets the effective marker template for the current series object.
	* 
	* `actualMarkerTemplate` property gets the effective marker template for the current series object. You can use it like this:
	* 
	* ```ts
	*  let effectiveMarkerTemplate: IgxDataTemplate = this.series.actualMarkerTemplate;	
	* ```
	*/
	get actualMarkerTemplate() : IgDataTemplate {
		return (this.i.actualMarkerTemplate as IgDataTemplate);
	}
	@Input()
	set actualMarkerTemplate(v: IgDataTemplate) {
		this.i.actualMarkerTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the brush that specifies how the current series object's marker interiors are painted.
	* 
	* `markerBrush` property gets or sets the brush that specifies how the current series object's marker interiors are painted. You can use it like this:
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	* 	<igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis #yAxis>
	*       </igx-numeric-y-axis>
	* 	 <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"	
	*      valueMemberPath="value"
	* 	 markerBrush = "blue">	
	*      </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.markerBrush = "red";
	* ```
	*/
	get markerBrush() : string {
		return brushToString(this.i.markerBrush);
	}
	@Input()
	set markerBrush(v: string) {
		this.i.markerBrush = stringToBrush(v);
	}
	/**
	 * Gets the effective marker brush for the current series object.
	* 
	* `actualMarkerBrush` property gets the effective marker brush for the current series object. For example, you can use it like this:
	* 
	* ```ts
	*  let effectiveMarkerBrush: string = this.series.actualMarkerBrush;
	*  
	* ```
	*/
	get actualMarkerBrush() : string {
		return brushToString(this.i.actualMarkerBrush);
	}
	@Input()
	set actualMarkerBrush(v: string) {
		this.i.actualMarkerBrush = stringToBrush(v);
	}
	/**
	 * Gets or sets the brush that specifies how the current series object's marker outlines are painted.
	* 
	* `markerOutline` property gets or sets the brush that specifies how the current series object's marker outlines are painted. You can use it like this:
	* 
	* ```html
	* <igx-data-chart
	*     [dataSource]="data">
	* 	<igx-category-x-axis
	*         label="label"
	*         #xAxis>
	*       </igx-category-x-axis>
	*       <igx-numeric-y-axis #yAxis>
	*       </igx-numeric-y-axis>
	* 	 <igx-column-series
	*         #series 
	*         [xAxis]="xAxis"
	*         [yAxis]="yAxis"	
	*      valueMemberPath="value"
	* 	 markerOutline = "blue">	
	*      </igx-column-series>
	* </igx-data-chart>
	* ```
	* 
	* ```ts
	* this.series.markerOutline = "red";
	* ```
	*/
	get markerOutline() : string {
		return brushToString(this.i.markerOutline);
	}
	@Input()
	set markerOutline(v: string) {
		this.i.markerOutline = stringToBrush(v);
	}
	/**
	 * Gets the effective marker outline for the current series object.
	* 
	*     `ActualMarkerOutline` property gets the effective marker outline for the current series object. You can use it like this:
	* 
	* ```ts
	*  let effectiveMarkerOutline: string = this.series.actualMarkerOutline;
	*  
	* ```
	*/
	get actualMarkerOutline() : string {
		return brushToString(this.i.actualMarkerOutline);
	}
	@Input()
	set actualMarkerOutline(v: string) {
		this.i.actualMarkerOutline = stringToBrush(v);
	}
}
