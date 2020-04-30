import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAnnotationLayerComponent } from "./igx-annotation-layer-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { CategoryToolTipLayer } from "./CategoryToolTipLayer";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents an annotation layer that displays grouped tooltips for series that use a category axis.
*/
export const IgxCategoryToolTipLayerComponent_PROVIDERS = [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCategoryToolTipLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCategoryToolTipLayerComponent)}];
@Component({
  selector: 'igx-category-tool-tip-layer',
  template: ``,
  providers: [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxCategoryToolTipLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxCategoryToolTipLayerComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCategoryToolTipLayerComponent extends IgxAnnotationLayerComponent
{

protected createImplementation() : CategoryToolTipLayer
{
	return new CategoryToolTipLayer();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CategoryToolTipLayer {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets whether the default tooltip behaviors for the chart are disabled if this layer is present.
	*/
	get isDefaultTooltipBehaviorDisabled() : boolean {
		return (this.i.isDefaultTooltipBehaviorDisabled as boolean);
	}
	/**
	 * Gets or sets whether to use value interpolation when drawing the tooltips.
	*/
	get useInterpolation() : boolean {
		return (this.i.useInterpolation as boolean);
	}
	@Input()
	set useInterpolation(v: boolean) {
		this.i.useInterpolation = ensureBool(v);
	}
	/**
	 * Hides any tooltips presented by the layer, if any.
	
	*/
	public hideToolTips() {
		this.i.hideToolTips();
	}
}
