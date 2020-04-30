/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NumericAxisRenderingParameters } from "./NumericAxisRenderingParameters";
import { IPolarRadialRenderingParameters, IPolarRadialRenderingParameters_$type } from "./IPolarRadialRenderingParameters";
import { Point, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class PolarAxisRenderingParameters extends NumericAxisRenderingParameters implements IPolarRadialRenderingParameters {
	static $t: Type = markType(PolarAxisRenderingParameters, 'PolarAxisRenderingParameters', (<any>NumericAxisRenderingParameters).$type, [IPolarRadialRenderingParameters_$type]);
	private _minLength: number = 0;
	get minLength(): number {
		return this._minLength;
	}
	set minLength(value: number) {
		this._minLength = value;
	}
	private _maxLength: number = 0;
	get maxLength(): number {
		return this._maxLength;
	}
	set maxLength(value: number) {
		this._maxLength = value;
	}
	private _center: Point = null;
	get center(): Point {
		return this._center;
	}
	set center(value: Point) {
		this._center = value;
	}
	private _minAngle: number = 0;
	get minAngle(): number {
		return this._minAngle;
	}
	set minAngle(value: number) {
		this._minAngle = value;
	}
	private _maxAngle: number = 0;
	get maxAngle(): number {
		return this._maxAngle;
	}
	set maxAngle(value: number) {
		this._maxAngle = value;
	}
	private _crossingAngleRadians: number = 0;
	get crossingAngleRadians(): number {
		return this._crossingAngleRadians;
	}
	set crossingAngleRadians(value: number) {
		this._crossingAngleRadians = value;
	}
	private _effectiveMaximum: number = 0;
	get effectiveMaximum(): number {
		return this._effectiveMaximum;
	}
	set effectiveMaximum(value: number) {
		this._effectiveMaximum = value;
	}
}


