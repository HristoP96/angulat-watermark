import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { delegateCombine, delegateRemove } from 'igniteui-core/type';
import { IgxValueBrushScaleComponent } from "igniteui-charts/igx-value-brush-scale-component";
import { IgxContourValueResolverComponent } from "igniteui-charts/igx-contour-value-resolver-component";
import { IgxTriangulationStatusEventArgs } from "igniteui-core/igx-triangulation-status-event-args";
import { IgxGeographicXYTriangulatingSeriesComponent } from "./igx-geographic-xy-triangulating-series-component";
import { IgxGeographicMapSeriesHostComponent } from "./igx-geographic-map-series-host-component";
import { IgxSeriesComponent } from "igniteui-charts/igx-series-component";
import { GeographicContourLineSeries } from "./GeographicContourLineSeries";

/**
 * Represents a class for Geographic Contour Series displayed on a map.
*/
export const IgxGeographicContourLineSeriesComponent_PROVIDERS = [{provide: IgxGeographicXYTriangulatingSeriesComponent, useExisting: forwardRef(() => IgxGeographicContourLineSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicContourLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicContourLineSeriesComponent)}];
@Component({
  selector: 'igx-geographic-contour-line-series',
  template: ``,
  providers: [{provide: IgxGeographicXYTriangulatingSeriesComponent, useExisting: forwardRef(() => IgxGeographicContourLineSeriesComponent)}, {provide: IgxGeographicMapSeriesHostComponent, useExisting: forwardRef(() => IgxGeographicContourLineSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxGeographicContourLineSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxGeographicContourLineSeriesComponent extends IgxGeographicXYTriangulatingSeriesComponent
{

protected createImplementation() : GeographicContourLineSeries
{
	return new GeographicContourLineSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : GeographicContourLineSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The name of the property from which to retrieve the numeric values from the ItemsSource items.
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * The ValueBrushScale to use when determining Brushes for each contour line, based on the values found in ValueMemberPath.
	*/
	get fillScale() : IgxValueBrushScaleComponent {
	                                        if (this.i.fillScale == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.fillScale as any).externalObject) {
	                                            let e = IgxValueBrushScaleComponent._createFromInternal(this.i.fillScale);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.fillScale;
	                                            }
	                                            (this.i.fillScale as any).externalObject = e;
	                                        }
		return (this.i.fillScale as any).externalObject;
	}
	@Input()
	set fillScale(v: IgxValueBrushScaleComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.fillScale = null : this.i.fillScale = v.i;
	}
	/**
	 * The ContourValueResolver used to determine the numeric values of contours.
	*/
	get valueResolver() : IgxContourValueResolverComponent {
	                                        if (this.i.valueResolver == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.valueResolver as any).externalObject) {
	                                            let e = IgxContourValueResolverComponent._createFromInternal(this.i.valueResolver);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.valueResolver;
	                                            }
	                                            (this.i.valueResolver as any).externalObject = e;
	                                        }
		return (this.i.valueResolver as any).externalObject;
	}
	@Input()
	set valueResolver(v: IgxContourValueResolverComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.valueResolver = null : this.i.valueResolver = v.i;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.fillScale && (this.fillScale as any)._styling) {
	    (this.fillScale as any)._styling(container, component, this);
	}
	if (this.valueResolver && (this.valueResolver as any)._styling) {
	    (this.valueResolver as any)._styling(container, component, this);
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
