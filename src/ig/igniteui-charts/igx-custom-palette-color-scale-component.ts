import { Type, EventEmitter, Output, Component, OnInit, ViewChild, ElementRef, Inject, forwardRef, Input, ChangeDetectionStrategy } from '@angular/core';
import { IgRect } from 'igniteui-core/IgRect'
import { IgSize } from 'igniteui-core/IgSize'
import { IgPoint } from 'igniteui-core/IgPoint'
import { IgDataTemplate } from 'igniteui-core/IgDataTemplate'
import { ColorScaleInterpolationMode, ColorScaleInterpolationMode_$type } from "./ColorScaleInterpolationMode";
import { IgxColorScaleComponent } from "./igx-color-scale-component";
import { CustomPaletteColorScale } from "./CustomPaletteColorScale";
import { toColorCollection, fromColorCollection, ensureEnum } from "igniteui-core/componentUtil";

/**
 * ColorScale class for selecting a color from a given palette, or interpolating between adjacent colors in that palette.
*/
export const IgxCustomPaletteColorScaleComponent_PROVIDERS = [{provide: IgxColorScaleComponent, useExisting: forwardRef(() => IgxCustomPaletteColorScaleComponent)}];
@Component({
  selector: 'igx-custom-palette-color-scale',
  template: ``,
  providers: [{provide: IgxColorScaleComponent, useExisting: forwardRef(() => IgxCustomPaletteColorScaleComponent)}],
                                  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IgxCustomPaletteColorScaleComponent extends IgxColorScaleComponent
{

protected createImplementation() : CustomPaletteColorScale
{
	return new CustomPaletteColorScale();
}
	/**
	                             * @hidden 
	                             */
	public get i() : CustomPaletteColorScale {
		return this._implementation;
	}
	constructor() {
		super();
	}
	/**
	 * The lowest value to assign a color.  Any given value less than this value will be made Transparent.
	*/
	get minimumValue() : number {
		return (this.i.minimumValue as number);
	}
	@Input()
	set minimumValue(v: number) {
		this.i.minimumValue = +v;
	}
	/**
	 * The highest value to assign a color.  Any given value greater than this value will be made Transparent.
	*/
	get maximumValue() : number {
		return (this.i.maximumValue as number);
	}
	@Input()
	set maximumValue(v: number) {
		this.i.maximumValue = +v;
	}
	/**
	 * A list of colors to select from or interpolate between.
	*/
	get palette() : string[] {
		return fromColorCollection(this.i.palette);
	}
	@Input()
	set palette(v: string[]) {
		this.i.palette = toColorCollection(v);
	}
	/**
	 * The approach to use when getting a color from the palette.
	*/
	get interpolationMode() : ColorScaleInterpolationMode {
		return this.i.interpolationMode;
	}
	@Input()
	set interpolationMode(v: ColorScaleInterpolationMode) {
		this.i.interpolationMode = ensureEnum<ColorScaleInterpolationMode>(ColorScaleInterpolationMode_$type, v);
	}
	public providePalette(colors: string[]) {
		this.i.providePalette(colors);
	}
}
