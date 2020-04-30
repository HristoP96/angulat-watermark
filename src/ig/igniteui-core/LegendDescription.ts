/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LegendBaseDescription } from "./LegendBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class LegendDescription extends LegendBaseDescription {
	static $t: Type = markType(LegendDescription, 'LegendDescription', (<any>LegendBaseDescription).$type);
	private _width: string = null;
	get width(): string {
		return this._width;
	}
	set width(value: string) {
		this._width = value;
		this.markDirty("Width");
	}
	private _height: string = null;
	get height(): string {
		return this._height;
	}
	set height(value: string) {
		this._height = value;
		this.markDirty("Height");
	}
	protected get_type(): string {
		return "Legend";
	}
	constructor() {
		super();
	}
	private _orientation: string = null;
	get orientation(): string {
		return this._orientation;
	}
	set orientation(value: string) {
		this._orientation = value;
		this.markDirty("Orientation");
	}
	private _textColor: string = null;
	get textColor(): string {
		return this._textColor;
	}
	set textColor(value: string) {
		this._textColor = value;
		this.markDirty("TextColor");
	}
	private _textStyle: string = null;
	get textStyle(): string {
		return this._textStyle;
	}
	set textStyle(value: string) {
		this._textStyle = value;
		this.markDirty("TextStyle");
	}
}


