/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Transform } from "./Transform";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Matrix extends Transform {
	static $t: Type = markType(Matrix, 'Matrix', (<any>Transform).$type);
	private _m11: number = 0;
	get m11(): number {
		return this._m11;
	}
	set m11(value: number) {
		this._m11 = value;
	}
	private _m12: number = 0;
	get m12(): number {
		return this._m12;
	}
	set m12(value: number) {
		this._m12 = value;
	}
	private _m21: number = 0;
	get m21(): number {
		return this._m21;
	}
	set m21(value: number) {
		this._m21 = value;
	}
	private _m22: number = 0;
	get m22(): number {
		return this._m22;
	}
	set m22(value: number) {
		this._m22 = value;
	}
	private _offsetX: number = 0;
	get offsetX(): number {
		return this._offsetX;
	}
	set offsetX(value: number) {
		this._offsetX = value;
	}
	private _offsetY: number = 0;
	get offsetY(): number {
		return this._offsetY;
	}
	set offsetY(value: number) {
		this._offsetY = value;
	}
}


