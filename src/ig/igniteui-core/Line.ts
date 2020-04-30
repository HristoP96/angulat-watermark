/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Shape } from "./Shape";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Line extends Shape {
	static $t: Type = markType(Line, 'Line', (<any>Shape).$type);
	constructor() {
		super();
		this.x1 = 0;
		this.x2 = 0;
		this.y1 = 0;
		this.y2 = 0;
	}
	private _x1: number = 0;
	get x1(): number {
		return this._x1;
	}
	set x1(value: number) {
		this._x1 = value;
	}
	private _x2: number = 0;
	get x2(): number {
		return this._x2;
	}
	set x2(value: number) {
		this._x2 = value;
	}
	private _y1: number = 0;
	get y1(): number {
		return this._y1;
	}
	set y1(value: number) {
		this._y1 = value;
	}
	private _y2: number = 0;
	get y2(): number {
		return this._y2;
	}
	set y2(value: number) {
		this._y2 = value;
	}
}


