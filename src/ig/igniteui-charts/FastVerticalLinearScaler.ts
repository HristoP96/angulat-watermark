/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { VerticalLinearScaler } from "./VerticalLinearScaler";
import { IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Base, Type, markType } from "igniteui-core/type";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { NumericScaler } from "./NumericScaler";
import { ArrayAccessHelper } from "igniteui-core/ArrayAccessHelper";

/**
 * @hidden 
 */
export class FastVerticalLinearScaler extends VerticalLinearScaler {
	static $t: Type = markType(FastVerticalLinearScaler, 'FastVerticalLinearScaler', (<any>VerticalLinearScaler).$type);
	getScaledBucketValueList(unscaledValues: IList$1<number[]>, bucketIndexes: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		let unscaledValue: number[];
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
		let input: number[][] = ArrayAccessHelper.asBucketArray(unscaledValues);
		let useArray: boolean = false;
		if (input != null) {
			useArray = true;
		}
		let bucketIndex: number;
		for (let j: number = 0; j < bucketIndexes.count; j++) {
			bucketIndex = bucketIndexes.item(j);
			for (let i: number = startIndex; i < count; i++) {
				if (useArray) {
					unscaledValue = input[i];
				} else {
					unscaledValue = unscaledValues.item(i);
				}
				if (useEffectiveRect) {
					let u: number = (unscaledValue[bucketIndex] - minimumValue) / (actualRange);
					if (!isInverted) {
						u = 1 - u;
					}
					u = effectiveTop + effectiveHeight * (u - unitTop) / unitHeight;
					let scaledValue: number = (u - (windowTop * viewportHeight)) / windowHeight;
					unscaledValue[bucketIndex] = scaledValue;
				} else {
					let scaledValue1: number = (unscaledValue[bucketIndex] - minimumValue) / (actualRange);
					if (!isInverted) {
						scaledValue1 = 1 - scaledValue1;
					}
					scaledValue1 = viewportTop + viewportHeight * (scaledValue1 - windowTop) / windowHeight;
					unscaledValue[bucketIndex] = scaledValue1;
				}
			}
		}
	}
}


