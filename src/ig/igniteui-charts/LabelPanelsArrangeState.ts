/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LabelPanelsArrangeState extends Base {
	static $t: Type = markType(LabelPanelsArrangeState, 'LabelPanelsArrangeState');
	private _bottom: number = 0;
	get bottom(): number {
		return this._bottom;
	}
	set bottom(value: number) {
		this._bottom = value;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _insideBottom: number = 0;
	get insideBottom(): number {
		return this._insideBottom;
	}
	set insideBottom(value: number) {
		this._insideBottom = value;
	}
	private _insideTop: number = 0;
	get insideTop(): number {
		return this._insideTop;
	}
	set insideTop(value: number) {
		this._insideTop = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _right: number = 0;
	get right(): number {
		return this._right;
	}
	set right(value: number) {
		this._right = value;
	}
	private _insideLeft: number = 0;
	get insideLeft(): number {
		return this._insideLeft;
	}
	set insideLeft(value: number) {
		this._insideLeft = value;
	}
	private _insideRight: number = 0;
	get insideRight(): number {
		return this._insideRight;
	}
	set insideRight(value: number) {
		this._insideRight = value;
	}
}


