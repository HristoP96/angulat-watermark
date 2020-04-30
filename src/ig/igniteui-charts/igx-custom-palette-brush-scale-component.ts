import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { BrushSelectionMode, BrushSelectionMode_$type } from "./BrushSelectionMode";
import { IgxBrushScaleComponent } from "./igx-brush-scale-component";
import { CustomPaletteBrushScale } from "./CustomPaletteBrushScale";
import { ensureEnum, ensureBool, brushToString } from "igniteui-core/componentUtil";

/**
 * Represents a brush scale that uses index-based brush selection mode.
*/
export const IgxCustomPaletteBrushScaleComponent_PROVIDERS = [{provide: IgxBrushScaleComponent, useExisting: forwardRef(() => IgxCustomPaletteBrushScaleComponent)}];
@Component({
  selector: 'igx-custom-palette-brush-scale',
  template: ``,
  providers: [{provide: IgxBrushScaleComponent, useExisting: forwardRef(() => IgxCustomPaletteBrushScaleComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCustomPaletteBrushScaleComponent extends IgxBrushScaleComponent
{

protected createImplementation() : CustomPaletteBrushScale
{
	return new CustomPaletteBrushScale();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CustomPaletteBrushScale {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * Gets or sets the brush selection mode.
	*/
	get brushSelectionMode() : BrushSelectionMode {
		return this.i.brushSelectionMode;
	}
	@Input()
	set brushSelectionMode(v: BrushSelectionMode) {
		this.i.brushSelectionMode = ensureEnum<BrushSelectionMode>(BrushSelectionMode_$type, v);
	}
	/**
	 * Checks if this scale is ready for useage with a series
	*/
	get isReady() : boolean {
		return (this.i.isReady as boolean);
	}
	public getBrush1(index: number, total: number) : string {
		let iv = this.i.getBrush1(index, total);
		return brushToString(iv);
	}
}
