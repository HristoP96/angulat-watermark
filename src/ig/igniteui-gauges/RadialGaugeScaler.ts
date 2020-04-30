/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Number_$type, Type, markType } from "igniteui-core/type";
import { SweepDirection } from "igniteui-core/SweepDirection";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { MathUtil } from "igniteui-core/MathUtil";
import { isNaN_, isInfinity } from "igniteui-core/number";

/**
 * @hidden 
 */
export class RadialGaugeScaler extends Base {
	static $t: Type = markType(RadialGaugeScaler, 'RadialGaugeScaler');
	private _scaleStartAngle: number = 0;
	private _scaleEndAngle: number = 0;
	private _minimumValue: number = 0;
	private _maximumValue: number = 0;
	private _scaleSweepDirection: SweepDirection = <SweepDirection>0;
	private _startAngle: number = 0;
	private _endAngle: number = 0;
	get startAngle(): number {
		return this._startAngle;
	}
	get endAngle(): number {
		return this._endAngle;
	}
	constructor(minimumValue: number, maximumValue: number, scaleStartAngle: number, scaleEndAngle: number, scaleSweepDirection: SweepDirection) {
		super();
		this._scaleStartAngle = scaleStartAngle;
		this._scaleEndAngle = scaleEndAngle;
		if (isNaN_(this._scaleStartAngle) || isInfinity(this._scaleStartAngle)) {
			this._scaleStartAngle = 135;
		}
		if (isNaN_(this._scaleEndAngle) || isInfinity(this._scaleEndAngle)) {
			this._scaleEndAngle = 45;
		}
		this._scaleSweepDirection = scaleSweepDirection;
		this._minimumValue = minimumValue;
		this._maximumValue = maximumValue;
		let startAngle = MathUtil.radians(this._scaleStartAngle);
		let endAngle = MathUtil.radians(this._scaleEndAngle);
		let res = RadialGaugeScaler.normalizeAngles(startAngle, endAngle, this._scaleSweepDirection);
		this._startAngle = res.item1;
		this._endAngle = res.item2;
	}
	static normalizeAngles(startAngle: number, endAngle: number, sweepDirection: SweepDirection): Tuple$2<number, number> {
		if (sweepDirection == SweepDirection.Clockwise && endAngle < startAngle) {
			endAngle += Math.PI * 2;
		}
		if (sweepDirection == SweepDirection.Counterclockwise && startAngle < endAngle) {
			startAngle += Math.PI * 2;
		}
		if (sweepDirection == SweepDirection.Counterclockwise) {
			let swap = startAngle;
			startAngle = endAngle;
			endAngle = swap;
		}
		return new Tuple$2<number, number>(Number_$type, Number_$type, startAngle, endAngle);
	}
	scale(value: number): number {
		let scale: number = NaN;
		if (this._minimumValue == this._maximumValue) {
			scale = 0;
		} else {
			scale = (value - this._minimumValue) / (this._maximumValue - this._minimumValue);
		}
		if (this._scaleSweepDirection == SweepDirection.Counterclockwise) {
			scale = 1 - scale;
		}
		let scaledValue = this._startAngle + (this._endAngle - this._startAngle) * scale;
		return scaledValue;
	}
	unscale(angle: number): number {
		let scale = (angle - this._startAngle) / (this._endAngle - this._startAngle);
		if (this._scaleSweepDirection == SweepDirection.Counterclockwise) {
			scale = 1 - scale;
		}
		let unscaled = this._minimumValue + (this._maximumValue - this._minimumValue) * scale;
		return unscaled;
	}
}


