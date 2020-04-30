/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { Rect } from "./Rect";

/**
 * @hidden 
 */
export class WriteableBitmap extends Base {
	static $t: Type = markType(WriteableBitmap, 'WriteableBitmap');
	constructor(width: number, height: number) {
		super();
		this.width = width;
		this.height = height;
		this.subDimensions = Rect.empty;
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
	private _source: any = null;
	get source(): any {
		return this._source;
	}
	set source(value: any) {
		this._source = value;
	}
	private _subDimensions: Rect = null;
	get subDimensions(): Rect {
		return this._subDimensions;
	}
	set subDimensions(value: Rect) {
		this._subDimensions = value;
	}
}


