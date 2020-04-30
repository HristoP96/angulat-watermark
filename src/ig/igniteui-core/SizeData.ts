/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IVisualData, IVisualData_$type } from "./IVisualData";
import { Size } from "./Size";

/**
 * @hidden 
 */
export class SizeData extends Base implements IVisualData {
	static $t: Type = markType(SizeData, 'SizeData', (<any>Base).$type, [IVisualData_$type]);
	constructor(width: number, height: number) {
		super();
		this.width = width;
		this.height = height;
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
		return "{ width: " + this.width + ", height: " + this.height + "}";
	}
	static fromSize(p: Size): SizeData {
		let d: SizeData = new SizeData(p.width, p.height);
		return d;
	}
	toSize(): Size {
		let p: Size = new Size(1, this.width, this.height);
		return p;
	}
	static get empty(): SizeData {
		return new SizeData(Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
	}
}


