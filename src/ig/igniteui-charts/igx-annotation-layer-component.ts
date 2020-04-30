import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxSeriesComponent } from "./igx-series-component";
import { AnnotationLayer } from "./AnnotationLayer";
import { ensureBool, fromPoint, toPoint } from "igniteui-core/componentUtil";

/**
 * Represents the base class for annotation layer types. Annotations will usually disable some of the default hover/touch behaviors of the chart when they are introduced to the series collection.
 * In return they provide some valuable information as the cursor is moved by hovering over the chart, or performing a press-hold-drag interaction in touch mode.
*/
export const IgxAnnotationLayerComponent_PROVIDERS = [{provide: IgxSeriesComponent, useExisting: forwardRef(() => IgxAnnotationLayerComponent)}];
export abstract class IgxAnnotationLayerComponent extends IgxSeriesComponent
{


	/**
	                             * @hidden 
	                             */
	public get i() : AnnotationLayer {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets whether this series should take up an index for auto brush coloring.
	*/
	get useIndex() : boolean {
		return (this.i.useIndex as boolean);
	}
	@Input()
	set useIndex(v: boolean) {
		this.i.useIndex = ensureBool(v);
	}
	/**
	 * Gets or sets whether this series interacts with the chart legend.
	*/
	get useLegend() : boolean {
		return (this.i.useLegend as boolean);
	}
	@Input()
	set useLegend(v: boolean) {
		this.i.useLegend = ensureBool(v);
	}
	/**
	 * Gets or sets the world position to use instead of the pointer position for this annotation layer. If you set this value, rather than responding to the pointer, this layer will be fixed on the provided world position.
	 * A world position has x and y values that range from 0 to 1 that represent the global position of the cursor relative to the entire ranges of the axes. The default of (NaN, NaN) means that the layer should react to pointer movement.
	*/
	get cursorPosition() : IgPoint {
		return fromPoint(this.i.cursorPosition);
	}
	@Input()
	set cursorPosition(v: IgPoint) {
		this.i.cursorPosition = toPoint(v);
	}
	/**
	 * Gets or sets whether the series viewer's default crosshair should be disabled by the presence of this layer.
	*/
	get isDefaultCrosshairDisabled() : boolean {
		return (this.i.isDefaultCrosshairDisabled as boolean);
	}
	@Input()
	set isDefaultCrosshairDisabled(v: boolean) {
		this.i.isDefaultCrosshairDisabled = ensureBool(v);
	}
	/**
	 * Gets whether or not the default crosshair behavior is disabled.
	*/
	get isDefaultCrosshairBehaviorDisabled() : boolean {
		return (this.i.isDefaultCrosshairBehaviorDisabled as boolean);
	}
	/**
	 * Gets if the series uses an index, which can be used to auto-assign it a color.
	*/
	get isIndexed() : boolean {
		return (this.i.isIndexed as boolean);
	}
	/**
	 * Gets if the series should appear in any legends.
	*/
	get isUsableInLegend() : boolean {
		return (this.i.isUsableInLegend as boolean);
	}
	/**
	 * Gets whether this series is an annotation layer.
	*/
	get isAnnotationLayer() : boolean {
		return (this.i.isAnnotationLayer as boolean);
	}
	/**
	 * Gets or sets whether this layer renders as an overlay or not.
	*/
	get shouldRenderAsOverlay() : boolean {
		return (this.i.shouldRenderAsOverlay as boolean);
	}
	@Input()
	set shouldRenderAsOverlay(v: boolean) {
		this.i.shouldRenderAsOverlay = ensureBool(v);
	}
}
