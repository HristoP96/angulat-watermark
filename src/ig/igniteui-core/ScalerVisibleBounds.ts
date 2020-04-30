/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class ScalerVisibleBounds extends Base {
	static $t: Type = markType(ScalerVisibleBounds, 'ScalerVisibleBounds');
	constructor(left: number, top: number, right: number, bottom: number) {
		super();
		this.left = left;
		this.top = top;
		this.right = right;
		this.bottom = bottom;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _bottom: number = 0;
	get bottom(): number {
		return this._bottom;
	}
	set bottom(value: number) {
		this._bottom = value;
	}
	private _right: number = 0;
	get right(): number {
		return this._right;
	}
	set right(value: number) {
		this._right = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
}


