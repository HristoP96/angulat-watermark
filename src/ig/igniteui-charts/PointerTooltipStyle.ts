/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";

/**
 * @hidden 
 */
export class PointerTooltipStyle extends Base {
	static $t: Type = markType(PointerTooltipStyle, 'PointerTooltipStyle');
	constructor() {
		super();
		this.strokeThickness = NaN;
		this.cornerRadius = NaN;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
	private _cornerRadius: number = 0;
	get cornerRadius(): number {
		return this._cornerRadius;
	}
	set cornerRadius(value: number) {
		this._cornerRadius = value;
	}
	private _strokeColor: Brush = null;
	get strokeColor(): Brush {
		return this._strokeColor;
	}
	set strokeColor(value: Brush) {
		this._strokeColor = value;
	}
	private _fillColor: Brush = null;
	get fillColor(): Brush {
		return this._fillColor;
	}
	set fillColor(value: Brush) {
		this._fillColor = value;
	}
}


