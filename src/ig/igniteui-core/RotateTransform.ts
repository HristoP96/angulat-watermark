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
export class RotateTransform extends Transform {
	static $t: Type = markType(RotateTransform, 'RotateTransform', (<any>Transform).$type);
	private _angle: number = 0;
	get angle(): number {
		return this._angle;
	}
	set angle(value: number) {
		this._angle = value;
	}
	private _centerX: number = 0;
	get centerX(): number {
		return this._centerX;
	}
	set centerX(value: number) {
		this._centerX = value;
	}
	private _centerY: number = 0;
	get centerY(): number {
		return this._centerY;
	}
	set centerY(value: number) {
		this._centerY = value;
	}
}


