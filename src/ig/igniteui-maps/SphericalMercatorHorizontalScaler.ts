/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalLinearScaler } from "igniteui-charts/HorizontalLinearScaler";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "igniteui-charts/ScalerParams";
import { IList$1, IList$1_$type, Base, Type, markType } from "igniteui-core/type";
import { NumericScaler } from "igniteui-charts/NumericScaler";
import { NumericAxisBase } from "igniteui-charts/NumericAxisBase";

/**
 * @hidden 
 */
export class SphericalMercatorHorizontalScaler extends HorizontalLinearScaler {
	static $t: Type = markType(SphericalMercatorHorizontalScaler, 'SphericalMercatorHorizontalScaler', (<any>HorizontalLinearScaler).$type);
	private _unitRect: Rect = null;
	constructor() {
		super();
		this._unitRect = new Rect(0, 0, 0, 1, 1);
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let u: number = scaledValue * p.windowRect.width + p.windowRect.left * p.viewportRect.width;
			let unscaledValue: number = this.getMercatorUnscaledValue(u, this._unitRect, p.effectiveViewportRect, p.isInverted);
			return unscaledValue;
		} else {
			return this.getMercatorUnscaledValue(scaledValue, p.windowRect, p.viewportRect, p.isInverted);
		}
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let u: number = this.getMercatorScaledValue1(unscaledValue, this._unitRect, p.effectiveViewportRect, p.isInverted);
			let scaledValue: number = (u - (p.windowRect.left * p.viewportRect.width)) / p.windowRect.width;
			return scaledValue;
		} else {
			return this.getMercatorScaledValue1(unscaledValue, p.windowRect, p.viewportRect, p.isInverted);
		}
	}
	private asArray(values_: IList$1<number>): number[] {
		let arr = <any[]>(Array.isArray(values_) ? values_ : null);
		return <number[]>arr;
		return null;
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
		let effectiveLeft: number = effectiveViewportRect.left;
		let effectiveWidth: number = effectiveViewportRect.width;
		let windowLeft: number = windowRect.left;
		let windowWidth: number = windowRect.width;
		let viewportLeft: number = viewportRect.left;
		let viewportWidth: number = viewportRect.width;
		let unitLeft: number = this._unitRect.left;
		let unitWidth: number = this._unitRect.width;
		let input: number[] = this.asArray(unscaledValues);
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
				if (isInverted) {
					u = 1 - u;
				}
				u = effectiveLeft + effectiveWidth * (u - unitLeft) / unitWidth;
				let scaledValue: number = (u - (windowLeft * viewportWidth)) / windowWidth;
				if (useArray) {
					input[i] = scaledValue;
				} else {
					unscaledValues.item(i, scaledValue);
				}
			} else {
				let scaledValue1: number = (unscaledValue - minimumValue) / (actualRange);
				if (isInverted) {
					scaledValue1 = 1 - scaledValue1;
				}
				scaledValue1 = viewportLeft + viewportWidth * (scaledValue1 - windowLeft) / windowWidth;
				if (useArray) {
					input[i] = scaledValue1;
				} else {
					unscaledValues.item(i, scaledValue1);
				}
			}
		}
	}
	calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, actualMinimumValue: number, actualMaximumValue: number): { p3: number; p4: number; } {
		actualMinimumValue = target.minimumValue;
		actualMaximumValue = target.maximumValue;
		return {
			p3: actualMinimumValue,
			p4: actualMaximumValue

		};
	}
	private getMercatorUnscaledValue(scaledValue: number, windowRect: Rect, viewportRect: Rect, isInverted: boolean): number {
		let unscaledValue: number = windowRect.left + windowRect.width * (scaledValue - viewportRect.left) / viewportRect.width;
		if (isInverted) {
			unscaledValue = 1 - unscaledValue;
		}
		return this.cachedActualMinimumValue + unscaledValue * (this.actualRange);
	}
	private getMercatorScaledValue1(unscaledValue: number, windowRect: Rect, viewportRect: Rect, isInverted: boolean): number {
		let scaledValue: number = (unscaledValue - this.cachedActualMinimumValue) / (this.actualRange);
		if (isInverted) {
			scaledValue = 1 - scaledValue;
		}
		return viewportRect.left + viewportRect.width * (scaledValue - windowRect.left) / windowRect.width;
	}
	private getMercatorScaledValue2(unscaledValue: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, isInverted: boolean): number {
		let scaledValue: number = (unscaledValue - this.cachedActualMinimumValue) / (this.actualRange);
		if (isInverted) {
			scaledValue = 1 - scaledValue;
		}
		return viewportRect.left + viewportRect.width * (scaledValue - windowRect.left) / windowRect.width;
	}
}


