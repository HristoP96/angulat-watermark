import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxStyleShapeEventArgs } from "igniteui-charts/igx-style-shape-event-args";
import { IgxGeographicShapeSeriesBaseComponent } from "./igx-geographic-shape-series-base-component";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicPolylineSeries } from "./GeographicPolylineSeries";
import { Style } from "igniteui-core/Style";

/**
 * Series class used for displaying multiple polylines, in a geographic context, for datasources which contain multiple lists of points.
*/
export const IgxGeographicPolylineSeriesComponent_PROVIDERS = [{provide: IgxGeographicShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxGeographicPolylineSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicPolylineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicPolylineSeriesComponent)}];
@Component({
  selector: 'igx-geographic-polyline-series',
  template: ``,
  providers: [{provide: IgxGeographicShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxGeographicPolylineSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicPolylineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicPolylineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicPolylineSeriesComponent extends IgxGeographicShapeSeriesBaseComponent
{

protected createImplementation() : GeographicPolylineSeries
{
	return new GeographicPolylineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicPolylineSeries {
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
