import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxColorScaleComponent } from "igniteui-charts/igx-color-scale-component";
import { IgxTriangulationStatusEventArgs } from "igniteui-core/igx-triangulation-status-event-args";
import { IgxGeographicXYTriangulatingSeriesComponent } from "./igx-geographic-xy-triangulating-series-component";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicScatterAreaSeries } from "./GeographicScatterAreaSeries";

/**
 * Series class which draws a colored 2D surface, in a geographic context, based on a triangulation of XY data with numeric values assigned to each point.
*/
export const IgxGeographicScatterAreaSeriesComponent_PROVIDERS = [{provide: IgxGeographicXYTriangulatingSeriesComponent, useExisting: forwardRef(() => IgxGeographicScatterAreaSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicScatterAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicScatterAreaSeriesComponent)}];
@Component({
  selector: 'igx-geographic-scatter-area-series',
  template: ``,
  providers: [{provide: IgxGeographicXYTriangulatingSeriesComponent, useExisting: forwardRef(() => IgxGeographicScatterAreaSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicScatterAreaSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicScatterAreaSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicScatterAreaSeriesComponent extends IgxGeographicXYTriangulatingSeriesComponent
{

protected createImplementation() : GeographicScatterAreaSeries
{
	return new GeographicScatterAreaSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicScatterAreaSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The name of the property on each data item containing a numeric value which can be converted to a color by the ColorScale.
	*/
	get colorMemberPath() : string {
		return (this.i.colorMemberPath as string);
	}
	@Input()
	set colorMemberPath(v: string) {
		this.i.colorMemberPath = v;
	}
	/**
	 * The ColorScale used to resolve the color values of points in the series.
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
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.colorScale && (this.colorScale as any)._styling) {
	    (this.colorScale as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
	private _triangulationStatusChanged: EventEmitter<{ sender: any, args: IgxTriangulationStatusEventArgs}> = null;
	/**
	 * Raised when the status of an ongoing Triangulation has changed.
	*/
	@Output()
	get triangulationStatusChanged(): EventEmitter<{ sender: any, args: IgxTriangulationStatusEventArgs}> {
		if (this._triangulationStatusChanged == null) {
			this._triangulationStatusChanged = new EventEmitter<{sender: any, args: IgxTriangulationStatusEventArgs}>();
			this.i.triangulationStatusChanged = delegateCombine(this.i.triangulationStatusChanged, (o, e) => {
				this._runInZone(() => {
					let outerArgs = new IgxTriangulationStatusEventArgs();
					(<any>outerArgs)._provideImplementation(e);
	                    if ((this as any).beforeTriangulationStatusChanged) {
	                        (this as any).beforeTriangulationStatusChanged(this, outerArgs);
	                    }
					this._triangulationStatusChanged.emit({
						sender: this,
						args: outerArgs
					});
				});
			});
		}
		return this._triangulationStatusChanged;
	}
}
