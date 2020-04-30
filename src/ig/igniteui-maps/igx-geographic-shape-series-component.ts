import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { MarkerType, MarkerType_$type } from "igniteui-charts/MarkerType";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "igniteui-charts/CollisionAvoidanceType";
import { IgxStyleShapeEventArgs } from "igniteui-charts/igx-style-shape-event-args";
import { IgxGeographicShapeSeriesBaseComponent } from "./igx-geographic-shape-series-base-component";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicShapeSeries } from "./GeographicShapeSeries";
import { Style } from "igniteui-core/Style";
import { ensureEnum, brushToString, stringToBrush } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Series class which renders polygons as Paths, in a geographic context, based on lists of points in the ItemsSource.
*/
export const IgxGeographicShapeSeriesComponent_PROVIDERS = [{provide: IgxGeographicShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesComponent)}];
@Component({
  selector: 'igx-geographic-shape-series',
  template: ``,
  providers: [{provide: IgxGeographicShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicShapeSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicShapeSeriesComponent extends IgxGeographicShapeSeriesBaseComponent
{

protected createImplementation() : GeographicShapeSeries
{
	return new GeographicShapeSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicShapeSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the fill brush.
	*/
	get shapeFill() : string {
		return this.i.shapeStyle ? (this.i.shapeStyle.fill as string) : null;
	}
	@Input()
	set shapeFill(v: string) {
		this.ensureShapeStyle();
	                                        this.i.shapeStyle.fill = v;
	}
	/**
	 * Gets or sets the stroke brush.
	*/
	get shapeStroke() : string {
		return this.i.shapeStyle ? (this.i.shapeStyle.stroke as string) : null;
	}
	@Input()
	set shapeStroke(v: string) {
		this.ensureShapeStyle();
	                                        this.i.shapeStyle.stroke = v;
	}
	/**
	 * Gets or sets the stroke thickness.
	*/
	get shapeStrokeThickness() : number {
		return this.i.shapeStyle ? (this.i.shapeStyle.strokeThickness as number) : NaN;
	}
	@Input()
	set shapeStrokeThickness(v: number) {
	                                        this.ensureShapeStyle();
		this.i.shapeStyle.strokeThickness = +v;
	}
	/**
	 * Gets or sets the opacity.
	*/
	get shapeOpacity() : number {
		return this.i.shapeStyle ? (this.i.shapeStyle.opacity as number) : NaN;
	}
	@Input()
	set shapeOpacity(v: number) {
	                                        this.ensureShapeStyle();
		this.i.shapeStyle.opacity = +v;
	}
	ensureShapeStyle() {
	if (this.i.shapeStyle) {
	                                            return;
	                                        }
	                                        this.i.shapeStyle = new Style();
	
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
	 * The desired behavior for markers in this series which are placed too close together for the current view, resulting in a collision.
	*/
	get markerCollisionAvoidance() : CollisionAvoidanceType {
		return this.i.markerCollisionAvoidance;
	}
	@Input()
	set markerCollisionAvoidance(v: CollisionAvoidanceType) {
		this.i.markerCollisionAvoidance = ensureEnum<CollisionAvoidanceType>(CollisionAvoidanceType_$type, v);
	}
	private _styleShape: EventEmitter<{ sender: any, args: IgxStyleShapeEventArgs}> = null;
	@Output()
	get styleShape(): EventEmitter<{ sender: any, args: IgxStyleShapeEventArgs}> {
		if (this._styleShape == null) {
			this._styleShape = new EventEmitter<{sender: any, args: IgxStyleShapeEventArgs}>();
			this.i.styleShape = delegateCombine(this.i.styleShape, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxStyleShapeEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeStyleShape) {
	                        (this as any).beforeStyleShape(this, outerArgs);
	                    }
					this._styleShape.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._styleShape;
	}
}
