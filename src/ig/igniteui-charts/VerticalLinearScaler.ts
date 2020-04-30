/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LinearScaler } from "./LinearScaler";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { NumericScaler } from "./NumericScaler";
import { IList$1, IList$1_$type, Base, Type, markType } from "igniteui-core/type";
import { ArrayAccessHelper } from "igniteui-core/ArrayAccessHelper";

/**
 * @hidden 
 */
export class VerticalLinearScaler extends LinearScaler {
	static $t: Type = markType(VerticalLinearScaler, 'VerticalLinearScaler', (<any>LinearScaler).$type);
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
	getScaledValueList(unscaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		let unscaledValue: number;
		let windowRect: Rect = p.windowRect;
		let viewportRect: Rect = p.viewportRect;
		let effectiveViewportRect: Rect = p.effectiveViewportRect;
		let isInverted: boolean = p.isInverted;
		let useEffectiveRect: boolean = !effectiveViewportRect.isEmpty;
		let actualRange: number = this.actualRange;
		let minimumValue: number = this.cachedActualMinimumValue;
		let effectiveTop: number = effectiveViewportRect.top;
		let effectiveHeight: number = effectiveViewportRect.height;
		let windowTop: number = windowRect.top;
		let windowHeight: number = windowRect.height;
		let viewportTop: number = viewportRect.top;
		let viewportHeight: number = viewportRect.height;
		let unitTop: number = 0;
		let unitHeight: number = 1;
		let input: number[] = ArrayAccessHelper.asDoubleArray(unscaledValues);
		let useArray: boolean = false;
		if (input != null) {
			useArray = true;
		}
		for (let i: number = startIndex; i < count; i++) {
			if (useArray) {
				unscaledValue = input[i];
			} else {
				unscaledValue = unscaledValues.item(i);
			}
			if (useEffectiveRect) {
				let u: number = (unscaledValue - minimumValue) / (actualRange);
				if (!isInverted) {
					u = 1 - u;
				}
				u = effectiveTop + effectiveHeight * (u - unitTop) / unitHeight;
				let scaledValue: number = (u - (windowTop * viewportHeight)) / windowHeight;
				if (useArray) {
					input[i] = scaledValue;
				} else {
					unscaledValues.item(i, scaledValue);
				}
			} else {
				let scaledValue1: number = (unscaledValue - minimumValue) / (actualRange);
				if (!isInverted) {
					scaledValue1 = 1 - scaledValue1;
				}
				scaledValue1 = viewportTop + viewportHeight * (scaledValue1 - windowTop) / windowHeight;
				if (useArray) {
					input[i] = scaledValue1;
				} else {
					unscaledValues.item(i, scaledValue1);
				}
			}
		}
	}
	private getScaledValue1(unscaledValue: number, windowRect: Rect, viewportRect: Rect, isInverted: boolean): number {
		let scaledValue: number = (unscaledValue - this.cachedActualMinimumValue) / (this.actualRange);
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
		return this.cachedActualMinimumValue + unscaledValue * (this.actualRange);
	}
}


