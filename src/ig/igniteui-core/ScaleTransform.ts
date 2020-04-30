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
export class ScaleTransform extends Transform {
	static $t: Type = markType(ScaleTransform, 'ScaleTransform', (<any>Transform).$type);
	private _scaleX: number = 0;
	get scaleX(): number {
		return this._scaleX;
	}
	set scaleX(value: number) {
		this._scaleX = value;
	}
	private _scaleY: number = 0;
	get scaleY(): number {
		return this._scaleY;
	}
	set scaleY(value: number) {
		this._scaleY = value;
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


