/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ColorScaleDescription } from "./ColorScaleDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class CustomPaletteColorScaleDescription extends ColorScaleDescription {
	static $t: Type = markType(CustomPaletteColorScaleDescription, 'CustomPaletteColorScaleDescription', (<any>ColorScaleDescription).$type);
	protected get_type(): string {
		return "CustomPaletteColorScale";
	}
	constructor() {
		super();
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
		this.markDirty("MinimumValue");
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
		this.markDirty("MaximumValue");
	}
	private _palette: string[] = null;
	get palette(): string[] {
		return this._palette;
	}
	set palette(value: string[]) {
		this._palette = value;
		this.markDirty("Palette");
	}
	private _interpolationMode: string = null;
	get interpolationMode(): string {
		return this._interpolationMode;
	}
	set interpolationMode(value: string) {
		this._interpolationMode = value;
		this.markDirty("InterpolationMode");
	}
}


