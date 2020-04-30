import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { MarkerType, MarkerType_$type } from "igniteui-charts/MarkerType";
import { IgxSizeScaleComponent } from "igniteui-charts/igx-size-scale-component";
import { IgxBrushScaleComponent } from "igniteui-charts/igx-brush-scale-component";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicProportionalSymbolSeries } from "./GeographicProportionalSymbolSeries";
import { ensureEnum, brushToString, stringToBrush } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Series class for a geographic map with points marked at given locations.
 * This is the geographic equivalent of a ScatterSeries.
*/
export const IgxGeographicProportionalSymbolSeriesComponent_PROVIDERS = [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicProportionalSymbolSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicProportionalSymbolSeriesComponent)}];
@Component({
  selector: 'igx-geographic-proportional-symbol-series',
  template: ``,
  providers: [{provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicProportionalSymbolSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicProportionalSymbolSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicProportionalSymbolSeriesComponent extends IgxGeographicMapSeriesHostComponent
{

protected createImplementation() : GeographicProportionalSymbolSeries
{
	return new GeographicProportionalSymbolSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicProportionalSymbolSeries {
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
	/**
	 * Gets or sets the radius mapping property for the current series object.
	*/
	get radiusMemberPath() : string {
		return (this.i.radiusMemberPath as string);
	}
	@Input()
	set radiusMemberPath(v: string) {
		this.i.radiusMemberPath = v;
	}
	/**
	 * Gets or sets the radius size scale for the bubbles.
	*/
	get radiusScale() : IgxSizeScaleComponent {
	                                        if (this.i.radiusScale == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.radiusScale as any).externalObject) {
	                                            let e = IgxSizeScaleComponent._createFromInternal(this.i.radiusScale);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.radiusScale;
	                                            }
	                                            (this.i.radiusScale as any).externalObject = e;
	                                        }
		return (this.i.radiusScale as any).externalObject;
	}
	@Input()
	set radiusScale(v: IgxSizeScaleComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.radiusScale = null : this.i.radiusScale = v.i;
	}
	/**
	 * Gets or sets the Label mapping property for the current series object.
	*/
	get labelMemberPath() : string {
		return (this.i.labelMemberPath as string);
	}
	@Input()
	set labelMemberPath(v: string) {
		this.i.labelMemberPath = v;
	}
	/**
	 * Gets or sets the fill mapping property for the current series object.
	*/
	get fillMemberPath() : string {
		return (this.i.fillMemberPath as string);
	}
	@Input()
	set fillMemberPath(v: string) {
		this.i.fillMemberPath = v;
	}
	/**
	 * Gets or sets the brush scale for the marker brush.
	*/
	get fillScale() : IgxBrushScaleComponent {
	                                        if (this.i.fillScale == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.fillScale as any).externalObject) {
	                                            let e = IgxBrushScaleComponent._createFromInternal(this.i.fillScale);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.fillScale;
	                                            }
	                                            (this.i.fillScale as any).externalObject = e;
	                                        }
		return (this.i.fillScale as any).externalObject;
	}
	@Input()
	set fillScale(v: IgxBrushScaleComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.fillScale = null : this.i.fillScale = v.i;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.radiusScale && (this.radiusScale as any)._styling) {
	    (this.radiusScale as any)._styling(container, component, this);
	}
	if (this.fillScale && (this.fillScale as any)._styling) {
	    (this.fillScale as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
}
