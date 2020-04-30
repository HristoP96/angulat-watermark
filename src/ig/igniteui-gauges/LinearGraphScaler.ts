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
export class LinearGraphScaler extends Base {
	static $t: Type = markType(LinearGraphScaler, 'LinearGraphScaler');
	private _scaleStartValue: number = 0;
	private _scaleEndValue: number = 0;
	private _minimumValue: number = 0;
	private _maximumValue: number = 0;
	private _isScaleInverted: boolean = false;
	private _startValue: number = 0;
	private _endValue: number = 0;
	get startValue(): number {
		return this._startValue;
	}
	get endValue(): number {
		return this._endValue;
	}
	constructor(minimumValue: number, maximumValue: number, scaleStartValue: number, scaleEndValue: number, isScaleInverted: boolean) {
		super();
		this._scaleStartValue = scaleStartValue;
		this._scaleEndValue = scaleEndValue;
		this._isScaleInverted = isScaleInverted;
		this._minimumValue = minimumValue;
		this._maximumValue = maximumValue;
		this._startValue = scaleStartValue;
		this._endValue = scaleEndValue;
	}
	scale(value: number): number {
		let scale = (value - this._minimumValue) / (this._maximumValue - this._minimumValue);
		if (this._isScaleInverted) {
			scale = 1 - scale;
		}
		let scaledValue = this._startValue + (this._endValue - this._startValue) * scale;
		scaledValue = Math.round(scaledValue * 100) / 100;
		return scaledValue;
	}
	unscale(value: number): number {
		let scale = (value - this._startValue) / (this._endValue - this._startValue);
		if (this._isScaleInverted) {
			scale = 1 - scale;
		}
		let unscaled = this._minimumValue + (this._maximumValue - this._minimumValue) * scale;
		return unscaled;
	}
}


