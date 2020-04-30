import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStyle } from "igniteui-core/igx-style";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "./CollisionAvoidanceType";
import { IgxShapeSeriesBaseComponent } from "./igx-shape-series-base-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterPolygonSeries } from "./ScatterPolygonSeries";
import { ensureBool, ensureEnum, brushToString, stringToBrush } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Series class which renders polygons as Paths based on lists of points in the ItemsSource.
*/
export const IgxScatterPolygonSeriesComponent_PROVIDERS = [{provide: IgxShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxScatterPolygonSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterPolygonSeriesComponent)}];
@Component({
  selector: 'igx-scatter-polygon-series',
  template: ``,
  providers: [{provide: IgxShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxScatterPolygonSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterPolygonSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScatterPolygonSeriesComponent extends IgxShapeSeriesBaseComponent
{

protected createImplementation() : ScatterPolygonSeries
{
	return new ScatterPolygonSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScatterPolygonSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Returns whether the current series supports visual markers.
	*/
	get hasMarkers() : boolean {
		return (this.i.hasMarkers as boolean);
	}
	/**
	 * The default style to apply to all Shapes in the series.
	*/
	get shapeStyle() : IgxStyle {
	                                        if (this.i.shapeStyle == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.shapeStyle as any).externalObject) {
	                                            let e = new IgxStyle();
	                                            (e as any)._implementation = this.i.shapeStyle;
	                                            (this.i.shapeStyle as any).externalObject = e;
	                                        }
		return (this.i.shapeStyle as any).externalObject;
	}
	@Input()
	set shapeStyle(v: IgxStyle) {
		v == null ? this.i.shapeStyle = null : this.i.shapeStyle = v.i;
	}
	/**
	 * Gets or sets the marker type for the current series object.
	 * If the MarkerTemplate property is set, the setting of the MarkerType property will be ignored.
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
	*/
	get actualMarkerOutline() : string {
		return brushToString(this.i.actualMarkerOutline);
	}
	@Input()
	set actualMarkerOutline(v: string) {
		this.i.actualMarkerOutline = stringToBrush(v);
	}
	/**
	 * The desired behavior for markers in this series which are placed too close together for the current view, resulting in a collision.
	*/
	get markerCollisionAvoidance() : CollisionAvoidanceType {
		return this.i.markerCollisionAvoidance;
	}
	@Input()
	set markerCollisionAvoidance(v: CollisionAvoidanceType) {
		this.i.markerCollisionAvoidance = ensureEnum<CollisionAvoidanceType>(CollisionAvoidanceType_$type, v);
	}
}
