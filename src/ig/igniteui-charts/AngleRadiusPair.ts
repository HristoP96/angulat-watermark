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
export class AngleRadiusPair extends Base {
	static $t: Type = markType(AngleRadiusPair, 'AngleRadiusPair');
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _angle: number = 0;
	get angle(): number {
		return this._angle;
	}
	set angle(value: number) {
		this._angle = value;
	}
	private _radius: number = 0;
	get radius(): number {
		return this._radius;
	}
	set radius(value: number) {
		this._radius = value;
	}
}


