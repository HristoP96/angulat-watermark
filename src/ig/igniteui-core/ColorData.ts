/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { Color } from "./Color";

/**
 * @hidden 
 */
export class ColorData extends Base implements IVisualData {
	static $t: Type = markType(ColorData, 'ColorData', (<any>Base).$type, [IVisualData_$type]);
	private _a: number = 0;
	get a(): number {
		return this._a;
	}
	set a(value: number) {
		this._a = value;
	}
	private _r: number = 0;
	get r(): number {
		return this._r;
	}
	set r(value: number) {
		this._r = value;
	}
	private _g: number = 0;
	get g(): number {
		return this._g;
	}
	set g(value: number) {
		this._g = value;
	}
	private _b: number = 0;
	get b(): number {
		return this._b;
	}
	set b(value: number) {
		this._b = value;
	}
	serialize(): string {
		return "{ a: " + this.a + ", r: " + this.r + ", g: " + this.g + ", b: " + this.b + "}";
	}
	static fromColor(color: Color): ColorData {
		let d: ColorData = new ColorData();
		d.a = color.a;
		d.r = color.r;
		d.g = color.g;
		d.b = color.b;
		return d;
	}
	toColor(): Color {
		let c: Color = new Color();
		c.a = <number>this.a;
		c.r = <number>this.r;
		c.g = <number>this.g;
		c.b = <number>this.b;
		return c;
	}
}


