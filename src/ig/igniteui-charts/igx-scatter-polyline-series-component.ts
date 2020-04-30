import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxStyle } from "igniteui-core/igx-style";
import { IgxShapeSeriesBaseComponent } from "./igx-shape-series-base-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterPolylineSeries } from "./ScatterPolylineSeries";

/**
 * Series class used for displaying multiple polylines for datasources which contain multiple lists of points.
*/
export const IgxScatterPolylineSeriesComponent_PROVIDERS = [{provide: IgxShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxScatterPolylineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterPolylineSeriesComponent)}];
@Component({
  selector: 'igx-scatter-polyline-series',
  template: ``,
  providers: [{provide: IgxShapeSeriesBaseComponent, useExisting: forwardRef(() => IgxScatterPolylineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterPolylineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScatterPolylineSeriesComponent extends IgxShapeSeriesBaseComponent
{

protected createImplementation() : ScatterPolylineSeries
{
	return new ScatterPolylineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScatterPolylineSeries {
		return this._implementation;
	}
	constructor() {
		super();
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
}
