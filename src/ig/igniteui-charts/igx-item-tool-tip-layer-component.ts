import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxAnnotationLayerComponent } from "./igx-annotation-layer-component";
import { IgxSeriesComponent } from "./igx-series-component";
import { ItemToolTipLayer } from "./ItemToolTipLayer";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents an annotation layer that displays tooltips for all target series individually.
*/
export const IgxItemToolTipLayerComponent_PROVIDERS = [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxItemToolTipLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxItemToolTipLayerComponent)}];
@Component({
  selector: 'igx-item-tool-tip-layer',
  template: ``,
  providers: [{provide: IgxAnnotationLayerComponent, useExisting: forwardRef(() => IgxItemToolTipLayerComponent)}, {provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxItemToolTipLayerComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxItemToolTipLayerComponent extends IgxAnnotationLayerComponent
{

protected createImplementation() : ItemToolTipLayer
{
	return new ItemToolTipLayer();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ItemToolTipLayer {
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
	 * Gets or sets whether to skip past unknown values when searching for series values.
	*/
	get skipUnknownValues() : boolean {
		return (this.i.skipUnknownValues as boolean);
	}
	@Input()
	set skipUnknownValues(v: boolean) {
		this.i.skipUnknownValues = ensureBool(v);
	}
	/**
	 * Hides any tooltips presented by the layer, if any.
	
	*/
	public hideToolTips() {
		this.i.hideToolTips();
	}
}
