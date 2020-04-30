import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { MarkerType, MarkerType_$type } from "igniteui-charts/MarkerType";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "igniteui-charts/CollisionAvoidanceType";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicSymbolSeries } from "./GeographicSymbolSeries";
import { ensureEnum, brushToString, stringToBrush } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Series class for a geographic map with points marked at given locations.
 * This is the geographic equivalent of a ScatterSeries.
*/
export const IgxGeographicSymbolSeriesComponent_PROVIDERS = [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicSymbolSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicSymbolSeriesComponent)}];
@Component({
  selector: 'igx-geographic-symbol-series',
  template: ``,
  providers: [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicSymbolSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicSymbolSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicSymbolSeriesComponent extends IgxGeographicMapSeriesHostComponent
{

protected createImplementation() : GeographicSymbolSeries
{
	return new GeographicSymbolSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicSymbolSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The name of the property of ItemsSource items which contains the latitude coordinate of the symbol.
	*/
	get latitudeMemberPath() : string {
		return (this.i.latitudeMemberPath as string);
	}
	@Input()
	set latitudeMemberPath(v: string) {
		this.i.latitudeMemberPath = v;
	}
	/**
	 * The name of the property of ItemsSource items which contains the longitude coordinate of the symbol.
	*/
	get longitudeMemberPath() : string {
		return (this.i.longitudeMemberPath as string);
	}
	@Input()
	set longitudeMemberPath(v: string) {
		this.i.longitudeMemberPath = v;
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
	 * The desired behavior for markers in this series which are placed too close together for the current view, resulting in a collision.
	*/
	get markerCollisionAvoidance() : CollisionAvoidanceType {
		return this.i.markerCollisionAvoidance;
	}
	@Input()
	set markerCollisionAvoidance(v: CollisionAvoidanceType) {
		this.i.markerCollisionAvoidance = ensureEnum<CollisionAvoidanceType>(CollisionAvoidanceType_$type, v);
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
	 * Gets or sets the maximum number of markerItems displayed by the current series.
	 * If more than the specified number of markerItems are visible, the series will automatically
	 * choose a representative set.
	*/
	get maximumMarkers() : number {
		return (this.i.maximumMarkers as number);
	}
	@Input()
	set maximumMarkers(v: number) {
		this.i.maximumMarkers = +v;
	}
}
