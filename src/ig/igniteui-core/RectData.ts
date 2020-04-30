/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { Rect } from "./Rect";

/**
 * @hidden 
 */
export class RectData extends Base implements IVisualData {
	static $t: Type = markType(RectData, 'RectData', (<any>Base).$type, [IVisualData_$type]);
	constructor(left: number, top: number, width: number, height: number) {
		super();
		this.left = left;
		this.top = top;
		this.width = width;
		this.height = height;
	}
	private _top: number = 0;
	get top(): number {
		return this._top;
	}
	set top(value: number) {
		this._top = value;
	}
	private _left: number = 0;
	get left(): number {
		return this._left;
	}
	set left(value: number) {
		this._left = value;
	}
	private _width: number = 0;
	get width(): number {
		return this._width;
	}
	set width(value: number) {
		this._width = value;
	}
	private _height: number = 0;
	get height(): number {
		return this._height;
	}
	set height(value: number) {
		this._height = value;
	}
	serialize(): string {
		return "{ top: " + this.top + ", left: " + this.left + ", width: " + this.width + ", height: " + this.height + "}";
	}
	static fromRect(rect: Rect): RectData {
		let d: RectData = new RectData(rect.left, rect.top, rect.width, rect.height);
		return d;
	}
	toRect(): Rect {
		let r: Rect = new Rect(0, this.left, this.top, this.width, this.height);
		return r;
	}
	get isEmpty(): boolean {
		return this.width < 0;
	}
	static get empty(): RectData {
		return new RectData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
	}
}


