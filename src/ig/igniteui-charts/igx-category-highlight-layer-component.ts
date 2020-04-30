import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxCategoryAxisBaseComponent } from "./igx-category-axis-base-component";
import { IgxAnnotationLayerComponent } from "./igx-annotation-layer-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { CategoryHighlightLayer } from "./CategoryHighlightLayer";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents an annotation layer that targets a category axis, or all category axes in the chart. 
 * If the axis contains any series that are aligned between major gridlines of the axis (column, waterfall, etc) this will render a shape that fills the current category. 
 * Otherwise it will render a band with an adjustable thickness at the closest gridline to the pointer position.
 * Setting UseIterpolation to true will cause the x position in the latter case to become affixed to the x position of the pointer.
*/
export const IgxCategoryHighlightLayerComponent_PROVIDERS = [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCategoryHighlightLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCategoryHighlightLayerComponent)}];
@Component({
  selector: 'igx-category-highlight-layer',
  template: ``,
  providers: [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCategoryHighlightLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCategoryHighlightLayerComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCategoryHighlightLayerComponent extends IgxAnnotationLayerComponent
{

protected createImplementation() : CategoryHighlightLayer
{
	return new CategoryHighlightLayer();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CategoryHighlightLayer {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the axis to target this annotation to. If null, this annotation targets all category axes simultaneously.
	*/
	get targetAxis() : IgxCategoryAxisBaseComponent {
	                                        if (this.i.targetAxis == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.targetAxis as any).externalObject) {
	                                            let e = IgxCategoryAxisBaseComponent._createFromInternal(this.i.targetAxis);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.targetAxis;
	                                            }
	                                            (this.i.targetAxis as any).externalObject = e;
	                                        }
		return (this.i.targetAxis as any).externalObject;
	}
	@Input()
	set targetAxis(v: IgxCategoryAxisBaseComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.targetAxis = null : this.i.targetAxis = v.i;
	}
	/**
	 * Gets or sets whether to use value interpolation when drawing a line through the best value for the pointer position.
	*/
	get useInterpolation() : boolean {
		return (this.i.useInterpolation as boolean);
	}
	@Input()
	set useInterpolation(v: boolean) {
		this.i.useInterpolation = ensureBool(v);
	}
	/**
	 * Gets or sets the width to use for the highlight region if drawing a band rather than filling a category.
	*/
	get bandHighlightWidth() : number {
		return (this.i.bandHighlightWidth as number);
	}
	@Input()
	set bandHighlightWidth(v: number) {
		this.i.bandHighlightWidth = +v;
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.targetAxis && (this.targetAxis as any)._styling) {
	    (this.targetAxis as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
}
