import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { IgxBrushScaleComponent } from "./igx-brush-scale-component";
import { ValueBrushScale } from "./ValueBrushScale";
import { ensureBool } from "igniteui-core/componentUtil";

/**
 * Represents a brush scale that uses value-based brush selection.
*/
export const IgxValueBrushScaleComponent_PROVIDERS = [{provide: IgxBrushScaleComponent, useExisting: forwardRef(() => IgxValueBrushScaleComponent)}];
@Component({
  selector: 'igx-value-brush-scale',
  template: ``,
  providers: [{provide: IgxBrushScaleComponent, useExisting: forwardRef(() => IgxValueBrushScaleComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxValueBrushScaleComponent extends IgxBrushScaleComponent
{

protected createImplementation() : ValueBrushScale
{
	return new ValueBrushScale();
}
	/**
	                             * @hidden 
	                             */
	public get i() : ValueBrushScale {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the minimum value for this scale.
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	@Input()
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * Gets or sets the maximum value for this scale.
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	@Input()
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	/**
	 * Gets or sets whether the scale is logarithmic.
	*/
	get isLogarithmic() : boolean {
		return (this.i.isLogarithmic as boolean);
	}
	@Input()
	set isLogarithmic(v: boolean) {
		this.i.isLogarithmic = ensureBool(v);
	}
	/**
	 * Gets or sets the logarithm base for this scale.
	*/
	get logarithmBase() : number {
		return (this.i.logarithmBase as number);
	}
	@Input()
	set logarithmBase(v: number) {
		this.i.logarithmBase = +v;
	}
	/**
	 * Checks if the value brush scale is ready for usage in the chart
	*/
	get isReady() : boolean {
		return (this.i.isReady as boolean);
	}
}
