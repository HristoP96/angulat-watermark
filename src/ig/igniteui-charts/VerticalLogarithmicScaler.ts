/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LogarithmicScaler } from "./LogarithmicScaler";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { NumericScaler } from "./NumericScaler";
import { Base, Type, markType } from "igniteui-core/type";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class VerticalLogarithmicScaler extends LogarithmicScaler {
	static $t: Type = markType(VerticalLogarithmicScaler, 'VerticalLogarithmicScaler', (<any>LogarithmicScaler).$type);
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let unscaledValue: number = p.windowRect.top + p.windowRect.height * (scaledValue - p.viewportRect.top) / p.viewportRect.height;
			unscaledValue = (unscaledValue * p.viewportRect.height) + p.viewportRect.top;
			unscaledValue = this.getUnscaledValue1(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, p.isInverted);
			return unscaledValue;
		}
		return this.getUnscaledValue1(scaledValue, p.windowRect, p.viewportRect, p.isInverted);
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let scaledValue: number = this.getScaledValue1(unscaledValue, NumericScaler.unitRect, p.effectiveViewportRect, p.isInverted);
			scaledValue = (scaledValue - p.viewportRect.top) / p.viewportRect.height;
			scaledValue = p.viewportRect.top + p.viewportRect.height * (scaledValue - p.windowRect.top) / p.windowRect.height;
			return scaledValue;
		}
		return this.getScaledValue1(unscaledValue, p.windowRect, p.viewportRect, p.isInverted);
	}
	private getScaledValue1(unscaledValue: number, windowRect: Rect, viewportRect: Rect, isInverted: boolean): number {
		if (isNaN_(unscaledValue)) {
			return NaN;
		}
		let scaledValue: number;
		if (unscaledValue <= 0) {
			scaledValue = (Math.log(this.cachedActualMinimumValue) - this.logActualMinimumValue) / (this.logActualMaximumValue - this.logActualMinimumValue);
		} else {
			scaledValue = (Math.log(unscaledValue) - this.logActualMinimumValue) / (this.logActualMaximumValue - this.logActualMinimumValue);
		}
		if (!isInverted) {
			scaledValue = 1 - scaledValue;
		}
		return viewportRect.top + viewportRect.height * (scaledValue - windowRect.top) / windowRect.height;
	}
	private getUnscaledValue1(scaledValue: number, windowRect: Rect, viewportRect: Rect, isInverted: boolean): number {
		let unscaledValue: number = windowRect.top + windowRect.height * (scaledValue - viewportRect.top) / viewportRect.height;
		if (!isInverted) {
			unscaledValue = 1 - unscaledValue;
		}
		return Math.exp(unscaledValue * (this.logActualMaximumValue - this.logActualMinimumValue) + this.logActualMinimumValue);
	}
}


