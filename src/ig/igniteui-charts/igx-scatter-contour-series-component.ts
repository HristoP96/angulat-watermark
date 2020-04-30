import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxValueBrushScaleComponent } from "./igx-value-brush-scale-component";
import { IgxContourValueResolverComponent } from "./igx-contour-value-resolver-component";
import { IgxScatterTriangulationSeriesComponent } from "./igx-scatter-triangulation-series-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ScatterContourSeries } from "./ScatterContourSeries";

/**
 * Series class for rendering isarithmic contours based on a triangulation of X+Y+Value points in the ItemsSource.
*/
export const IgxScatterContourSeriesComponent_PROVIDERS = [{provide: IgxScatterTriangulationSeriesComponent, useExisting: forwardRef(() => IgxScatterContourSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterContourSeriesComponent)}];
@Component({
  selector: 'igx-scatter-contour-series',
  template: ``,
  providers: [{provide: IgxScatterTriangulationSeriesComponent, useExisting: forwardRef(() => IgxScatterContourSeriesComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxScatterContourSeriesComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxScatterContourSeriesComponent extends IgxScatterTriangulationSeriesComponent
{

protected createImplementation() : ScatterContourSeries
{
	return new ScatterContourSeries();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ScatterContourSeries {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or set the name of the property from which to retrieve the numeric values from the ItemsSource items.
	*/
	get valueMemberPath() : string {
		return (this.i.valueMemberPath as string);
	}
	@Input()
	set valueMemberPath(v: string) {
		this.i.valueMemberPath = v;
	}
	/**
	 * Gets or sets the ValueBrushScale to use when determining Brushes for each contour line, based on the values found in ValueMemberPath.
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
	 * Gets or set the ContourValueResolver used to determine the numeric values of contours.
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
	public getItemValue(item: any, memberPathName: string) : any {
		let iv = this.i.getItemValue(item, memberPathName);
		return (iv);
	}
}
