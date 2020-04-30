/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, fromEnum, Type, markType } from "igniteui-core/type";
import { NumericYAxis } from "./NumericYAxis";
import { NumericScaler } from "./NumericScaler";
import { AxisRange } from "./AxisRange";
import { Series } from "./Series";
import { Axis } from "./Axis";
import { NumericAxisRenderer } from "./NumericAxisRenderer";
import { AxisLabelManager } from "./AxisLabelManager";
import { PercentChangeAxisRenderer } from "./PercentChangeAxisRenderer";
import { isNaN_ } from "igniteui-core/number";
import { NumericAxisBase } from "./NumericAxisBase";
import { AutoRangeCalculator } from "./AutoRangeCalculator";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class PercentChangeYAxis extends NumericYAxis {
	static $t: Type = markType(PercentChangeYAxis, 'PercentChangeYAxis', (<any>NumericYAxis).$type);
	createScalerOverride(): NumericScaler {
		return new VerticalPercentChangeScaler(this);
	}
	getAxisRange(): AxisRange {
		let min: number = 1.7976931348623157E+308;
		let max: number = -1.7976931348623157E+308;
		for (let series of fromEnum<Series>(this.directSeries())) {
			let axisRange: AxisRange = series.getRange(this);
			if (axisRange == null) {
				continue;
			}
			let referenceValue: number = series.getReferenceValue();
			if (isNaN_(referenceValue) || referenceValue == 0) {
				continue;
			}
			let increase: number = axisRange.maximum - referenceValue;
			let decrease: number = referenceValue - axisRange.minimum;
			let percentIncrease: number = Math.abs(increase / referenceValue * 100);
			let percentDecrease: number = Math.abs(decrease / referenceValue * 100);
			min = Math.min(min, -percentDecrease);
			max = Math.max(max, percentIncrease);
		}
		return new AxisRange(min, max);
	}
	instantiateRenderer(labelManager: AxisLabelManager): NumericAxisRenderer {
		return new PercentChangeAxisRenderer(labelManager);
	}
}

/**
 * @hidden 
 */
export class VerticalPercentChangeScaler extends NumericScaler {
	static $t: Type = markType(VerticalPercentChangeScaler, 'VerticalPercentChangeScaler', (<any>NumericScaler).$type);
	private _axis: PercentChangeYAxis = null;
	private get axis(): PercentChangeYAxis {
		return this._axis;
	}
	private set axis(value: PercentChangeYAxis) {
		this._axis = value;
	}
	constructor(axis: PercentChangeYAxis) {
		super();
		this.axis = axis;
	}
	calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, actualMinimumValue: number, actualMaximumValue: number): { p3: number; p4: number; } {
		let $ret = AutoRangeCalculator.calculateRange(this.axis, minimumValue, maximumValue, false, -1, actualMinimumValue, actualMaximumValue);
		actualMinimumValue = $ret.p5;
		actualMaximumValue = $ret.p6;
		return {
			p3: actualMinimumValue,
			p4: actualMaximumValue

		};
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		let value: number;
		if (isNaN_(p.referenceValue)) {
			value = unscaledValue;
		} else {
			let percentChange: number = (unscaledValue - p.referenceValue) / Math.abs(p.referenceValue) * 100;
			value = percentChange;
		}
		let portion: number = (value - this.cachedActualMinimumValue) / this.actualRange;
		if (!p.isInverted) {
			portion = 1 - portion;
		}
		return p.viewportRect.top + p.viewportRect.height * (portion - p.windowRect.top) / p.windowRect.height;
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		let unscaledValue: number = p.windowRect.top + p.windowRect.height * (scaledValue - p.viewportRect.top) / p.viewportRect.height;
		if (!p.isInverted) {
			unscaledValue = 1 - unscaledValue;
		}
		return this.cachedActualMinimumValue + unscaledValue * (this.actualRange);
	}
}


