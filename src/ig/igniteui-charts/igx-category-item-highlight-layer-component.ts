import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { CategoryItemHighlightType, CategoryItemHighlightType_$type } from "./CategoryItemHighlightType";
import { IgxAnnotationLayerComponent } from "./igx-annotation-layer-component";
import { CategoryItemHighlightLayer } from "./CategoryItemHighlightLayer";
import { ensureBool, ensureEnum } from "igniteui-core/componentUtil";
import { DataTemplate } from "igniteui-core/DataTemplate";

/**
 * Represents an annotation layer that highlights items in a series that use a category axis 
 * either by drawing a banded shape at their position, or by rendering a marker at their position.
 * Depending on the type of series, the default highlight will be affected. To override 
 * the type of highlight used, you can set the HighlightType property.
*/
export const IgxCategoryItemHighlightLayerComponent_PROVIDERS = [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCategoryItemHighlightLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCategoryItemHighlightLayerComponent)}];
@Component({
  selector: 'igx-category-item-highlight-layer',
  template: ``,
  providers: [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCategoryItemHighlightLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCategoryItemHighlightLayerComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCategoryItemHighlightLayerComponent extends IgxAnnotationLayerComponent
{

protected createImplementation() : CategoryItemHighlightLayer
{
	return new CategoryItemHighlightLayer();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CategoryItemHighlightLayer {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the series to target this annotation to. If null, this annotation targets all series simultaneously.
	*/
	get targetSeries() : IgxSeriesComponent {
	                                        if (this.i.targetSeries == null) {
	                                            return null;
	                                        }
	                                        
	                                        if (!(this.i.targetSeries as any).externalObject) {
	                                            let e = IgxSeriesComponent._createFromInternal(this.i.targetSeries);
	                                            if (e) {
	                                                (e as any)._implementation = this.i.targetSeries;
	                                            }
	                                            (this.i.targetSeries as any).externalObject = e;
	                                        }
		return (this.i.targetSeries as any).externalObject;
	}
	@Input()
	set targetSeries(v: IgxSeriesComponent) {
	                                        if (v != null && this._stylingContainer && (v as any)._styling) (v as any)._styling(this._stylingContainer, this, this);
	
		v == null ? this.i.targetSeries = null : this.i.targetSeries = v.i;
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
	 * Gets or sets which type of highlight shape to use when highlighting items.
	*/
	get highlightType() : CategoryItemHighlightType {
		return this.i.highlightType;
	}
	@Input()
	set highlightType(v: CategoryItemHighlightType) {
		this.i.highlightType = ensureEnum<CategoryItemHighlightType>(CategoryItemHighlightType_$type, v);
	}
	/**
	 * Gets or sets the template to use for marker visuals for the current series object.
	*/
	get markerTemplate() : IgDataTemplate {
		return (this.i.markerTemplate as IgDataTemplate);
	}
	@Input()
	set markerTemplate(v: IgDataTemplate) {
		this.i.markerTemplate = ((v as any) as DataTemplate);
	}
	/**
	 * Gets or sets the width to use for the highlight region if highlighting items in a grid aligned series (line, spline, etc), with a banded shape.
	*/
	get bandHighlightWidth() : number {
		return (this.i.bandHighlightWidth as number);
	}
	@Input()
	set bandHighlightWidth(v: number) {
		this.i.bandHighlightWidth = +v;
	}
	/**
	 * Gets or sets whether to skip unknown values when searching for series values.
	*/
	get skipUnknownValues() : boolean {
		return (this.i.skipUnknownValues as boolean);
	}
	@Input()
	set skipUnknownValues(v: boolean) {
		this.i.skipUnknownValues = ensureBool(v);
	}
	
	        protected _styling(container: any, component: any, parent?: any) {
	            super._styling(container, component, parent);
	
	            this._inStyling = true;
	            if (this.targetSeries && (this.targetSeries as any)._styling) {
	    (this.targetSeries as any)._styling(container, component, this);
	}
	
	            this._inStyling = false;
	        }
}
