/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { VerticalLinearScaler } from "igniteui-charts/VerticalLinearScaler";
import { ScalerParams } from "igniteui-charts/ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { IList$1, IList$1_$type, Base, Type, markType } from "igniteui-core/type";
import { NumericScaler } from "igniteui-charts/NumericScaler";
import { NumericAxisBase } from "igniteui-charts/NumericAxisBase";

/**
 * @hidden 
 */
export class SphericalMercatorVerticalScaler extends VerticalLinearScaler {
	static $t: Type = markType(SphericalMercatorVerticalScaler, 'SphericalMercatorVerticalScaler', (<any>VerticalLinearScaler).$type);
	private _unitRect: Rect = null;
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let u: number = scaledValue * p.windowRect.height + p.windowRect.top * p.viewportRect.height;
			let unscaledValue: number = this.getMercatorUnscaledValue(u, this._unitRect, p.effectiveViewportRect, p.isInverted);
			return unscaledValue;
		} else {
			return this.getMercatorUnscaledValue(scaledValue, p.windowRect, p.viewportRect, p.isInverted);
		}
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (!p.effectiveViewportRect.isEmpty) {
			let scaledValue: number = this.getMercatorScaledValue1(unscaledValue, this._unitRect, p.effectiveViewportRect, p.isInverted);
			scaledValue = (scaledValue - (p.windowRect.top * p.viewportRect.height)) / p.windowRect.height;
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
		let effectiveTop: number = effectiveViewportRect.top;
		let effectiveHeight: number = effectiveViewportRect.height;
		let windowTop: number = windowRect.top;
		let windowHeight: number = windowRect.height;
		let viewportTop: number = viewportRect.top;
		let viewportHeight: number = viewportRect.height;
		let unitTop: number = this._unitRect.top;
		let unitHeight: number = this._unitRect.height;
		let input: number[] = this.asArray(unscaledValues);
		let degreeAsRadian: number = SphericalMercatorVerticalScaler.degreeAsRadian;
		let valueR: number;
		let valueSin: number;
		let projectedValue: number;
		let scaledValue: number;
		let u: number;
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
				if (unscaledValue < SphericalMercatorVerticalScaler._minimumValue) {
					unscaledValue = SphericalMercatorVerticalScaler._minimumValue;
				}
				if (unscaledValue > SphericalMercatorVerticalScaler._maximumValue) {
					unscaledValue = SphericalMercatorVerticalScaler._maximumValue;
				}
				valueR = unscaledValue * (degreeAsRadian);
				valueSin = Math.sin(valueR);
				projectedValue = 0.5 * Math.log((1 + valueSin) / (1 - valueSin));
				scaledValue = (this._projectedMaximum - projectedValue) * effectiveHeight / this._projectedRange;
				scaledValue = effectiveTop + scaledValue;
				u = (scaledValue - unitTop * effectiveHeight) / unitHeight;
				scaledValue = (u - (windowTop * viewportHeight)) / windowHeight;
				if (useArray) {
					input[i] = scaledValue;
				} else {
					unscaledValues.item(i, scaledValue);
				}
			} else {
				if (unscaledValue < SphericalMercatorVerticalScaler._minimumValue) {
					unscaledValue = SphericalMercatorVerticalScaler._minimumValue;
				}
				if (unscaledValue > SphericalMercatorVerticalScaler._maximumValue) {
					unscaledValue = SphericalMercatorVerticalScaler._maximumValue;
				}
				valueR = unscaledValue * (degreeAsRadian);
				valueSin = Math.sin(valueR);
				projectedValue = 0.5 * Math.log((1 + valueSin) / (1 - valueSin));
				scaledValue = (this._projectedMaximum - projectedValue) * viewportHeight / this._projectedRange;
				scaledValue = viewportTop + scaledValue;
				scaledValue = (scaledValue - windowTop * viewportHeight) / windowHeight;
				if (useArray) {
					input[i] = scaledValue;
				} else {
					unscaledValues.item(i, scaledValue);
				}
			}
		}
	}
	calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, actualMinimumValue: number, actualMaximumValue: number): { p3: number; p4: number; } {
		actualMinimumValue = this.clamp(target.minimumValue);
		actualMaximumValue = this.clamp(target.maximumValue);
		return {
			p3: actualMinimumValue,
			p4: actualMaximumValue

		};
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyChanged(propertyName, oldValue, newValue);
		switch (propertyName) {
			case NumericScaler.actualMinimumValuePropertyName:

			case NumericScaler.actualMaximumValuePropertyName:
			this._projectedMaximum = SphericalMercatorVerticalScaler.getProjectedValue(this.cachedActualMaximumValue);
			this._projectedRange = SphericalMercatorVerticalScaler.getProjectedValue(this.cachedActualMaximumValue) - SphericalMercatorVerticalScaler.getProjectedValue(this.cachedActualMinimumValue);
			break;

		}

	}
	private static _maximumValue: number = 85.05112878;
	private static _minimumValue: number = -85.05112878;
	private _projectedMaximum: number = 0;
	private _projectedRange: number = 0;
	private static readonly degreeAsRadian: number = Math.PI / 180;
	static get maximumValue(): number {
		return SphericalMercatorVerticalScaler._maximumValue;
	}
	static get minimumValue(): number {
		return SphericalMercatorVerticalScaler._minimumValue;
	}
	constructor() {
		super();
		this._unitRect = new Rect(0, 0, 0, 1, 1);
	}
	private getMercatorUnscaledValue(scaledValue: number, windowRect: Rect, viewportRect: Rect, isInverted: boolean): number {
		let unscaledValue = (scaledValue - viewportRect.top) * windowRect.width + windowRect.top * viewportRect.height;
		unscaledValue = SphericalMercatorVerticalScaler.getProjectedValue(this.cachedActualMaximumValue) - unscaledValue / (viewportRect.height / this._projectedRange);
		return SphericalMercatorVerticalScaler.getUnprojectedValue(unscaledValue);
	}
	private getMercatorScaledValue1(unscaledValue: number, windowRect: Rect, viewportRect: Rect, isInverted: boolean): number {
		let scaledValue = viewportRect.top + this.getMercatorScaledValue3(unscaledValue, viewportRect.height);
		return (scaledValue - windowRect.top * viewportRect.height) / windowRect.width;
	}
	private getMercatorScaledValue2(unscaledValue: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, isInverted: boolean): number {
		let scaledValue = this.getMercatorScaledValue3(unscaledValue, effectiveViewportRect.height);
		return (scaledValue - windowRect.top * viewportRect.height) / windowRect.width;
	}
	private getMercatorScaledValue3(unscaledValue: number, viewportHeight: number): number {
		unscaledValue = unscaledValue > SphericalMercatorVerticalScaler._minimumValue ? (unscaledValue < SphericalMercatorVerticalScaler._maximumValue ? unscaledValue : SphericalMercatorVerticalScaler._maximumValue) : SphericalMercatorVerticalScaler._minimumValue;
		let projectedValue = SphericalMercatorVerticalScaler.getProjectedValue(unscaledValue);
		let scaledValue = (this._projectedMaximum - projectedValue) * viewportHeight / this._projectedRange;
		return (scaledValue);
	}
	static getProjectedValue(value: number): number {
		let valueR: number = value * (SphericalMercatorVerticalScaler.degreeAsRadian);
		let valueSin: number = Math.sin(valueR);
		let projectedValue: number = 0.5 * Math.log((1 + valueSin) / (1 - valueSin));
		return projectedValue;
	}
	static getUnprojectedValue(value: number): number {
		value = Math.exp(2 * value);
		return Math.asin((value - 1) / (value + 1)) / SphericalMercatorVerticalScaler.degreeAsRadian;
	}
	private clamp(value: number): number {
		if (value < SphericalMercatorVerticalScaler._minimumValue) {
			return SphericalMercatorVerticalScaler._minimumValue;
		}
		if (value > SphericalMercatorVerticalScaler._maximumValue) {
			return SphericalMercatorVerticalScaler._maximumValue;
		}
		return value;
	}
}


