import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxColorScaleComponent } from "./igx-color-scale-component";
import { IgxScatterTriangulationSeriesComponent } from "./igx-scatter-triangulation-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterAreaSeries } from "./ScatterAreaSeries";
import { toPoint } from "igniteui-core/componentUtil";

/**
 * Series class which draws a colored 2D surface based on a triangulation of XY data with numeric values assigned to each point.
*/
export const IgxScatterAreaSeriesComponent_PROVIDERS = [{provide: IgxScatterTriangulationSeriesComponent, useExisting: forwardRef(() => IgxScatterAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterAreaSeriesComponent)}];
@Component({
  selector: 'igx-scatter-area-series',
  template: ``,
  providers: [{provide: IgxScatterTriangulationSeriesComponent, useExisting: forwardRef(() => IgxScatterAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScatterAreaSeriesComponent extends IgxScatterTriangulationSeriesComponent
{

protected createImplementation() : ScatterAreaSeries
{
	return new ScatterAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScatterAreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets ColorScale used to resolve the color values of points in the series.
	*/
	get colorScale() : IgxColorScaleComponent {
	                                        if (this.i.colorScale == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.colorScale as any).externalObject) {
	                                            let e = IgxColorScaleComponent._createFromInternal(this.i.colorScale);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.colorScale;
	                                            }
	                                            (this.i.colorScale as any).externalObject = e;
	                                        }
		return (this.i.colorScale as any).externalObject;
	}
	@Input()
	set colorScale(v: IgxColorScaleComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.colorScale = null : this.i.colorScale = v.i;
	}
	/**
	 * Gets or sets the name of the property on each data item containing a numeric value which can be converted to a color by the ColorScale.
	*/
	get colorMemberPath() : string {
		return (this.i.colorMemberPath as string);
	}
	@Input()
	set colorMemberPath(v: string) {
		this.i.colorMemberPath = v;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.colorScale && (this.colorScale as any)._styling) {
	    (this.colorScale as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
	/**
	 * Gets the item that is the best match for the specified world coordinates.
	
	* @param world  * The world coordinates to use.
	*/
	public getItem(world: IgPoint) : any {
		let iv = this.i.getItem(toPoint(world));
		return (iv);
	}
	/**
	 * Attaches an image to the view of this series
	
	*/
	public attachImage(image: any) {
		this.i.attachImage(image);
	}
}
