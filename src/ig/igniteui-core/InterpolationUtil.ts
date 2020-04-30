/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, IEnumerable$1, PointUtil } from "./type";
import { Thickness } from "./Thickness";
import { CornerRadius } from "./CornerRadius";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export class InterpolationUtil extends Base {
	static $t: Type = markType(InterpolationUtil, 'InterpolationUtil');
	static interpolateThickness(p: number, from: Thickness, to: Thickness): Thickness {
		return new Thickness(1, from.left + p * (to.left - from.left), from.top + p * (to.top - from.top), from.right + p * (to.right - from.right), from.bottom + p * (to.bottom - from.bottom));
	}
	static interpolateCornerRadius(p: number, from: CornerRadius, to: CornerRadius): CornerRadius {
		return new CornerRadius(1, from.topLeft + p * (to.topLeft - from.topLeft), from.topRight + p * (to.topRight - from.topRight), from.bottomRight + p * (to.bottomRight - from.bottomRight), from.bottomLeft + p * (to.bottomLeft - from.bottomLeft));
	}
	static interpolateRect(p: number, from: Rect, to: Rect): Rect {
		return new Rect(0, from.left + p * (to.left - from.left), from.top + p * (to.top - from.top), from.width + p * (to.width - from.width), from.height + p * (to.height - from.height));
	}
	static interpolatePoints(interpolatedPoints: List$1<Point>, p: number, minPoints: List$1<Point>, maxPoints: List$1<Point>): List$1<Point> {
		let q = 1 - p;
		if (interpolatedPoints == null) {
			interpolatedPoints = new List$1<Point>(Point_$type, 0);
		}
		if (minPoints == null) {
			minPoints = new List$1<Point>(Point_$type, 0);
		}
		let minCount: number = minPoints.count;
		let maxCount: number = maxPoints.count;
		let count: number = Math.max(minCount, maxCount);
		let interpolatedCount: number = interpolatedPoints.count;
		if (interpolatedCount < count) {
			interpolatedPoints.insertRange(interpolatedCount, <IEnumerable$1<Point>><any><any><Point[]>new Array(count - interpolatedCount));
		}
		if (interpolatedCount > count) {
			interpolatedPoints.removeRange(count, interpolatedCount - count);
		}
		for (let i: number = 0; i < Math.min(minCount, maxCount); ++i) {
			interpolatedPoints._inner[i] = <Point>{ $type: Point_$type, x: (minPoints._inner[i].x * q) + (maxPoints._inner[i].x * p), y: (minPoints._inner[i].y * q) + (maxPoints._inner[i].y * p) };
		}
		if (minCount < maxCount) {
			let mn: Point = minCount > 0 ? minPoints._inner[minCount - 1] : <Point>{ $type: Point_$type, x: 0, y: 0 };
			for (let i1: number = minCount; i1 < maxCount; ++i1) {
				interpolatedPoints._inner[i1] = <Point>{ $type: Point_$type, x: (mn.x * q) + (maxPoints._inner[i1].x * p), y: (mn.y * q) + (maxPoints._inner[i1].y * p) };
			}
		}
		if (minCount > maxCount) {
			let mx: Point = maxCount > 0 ? maxPoints._inner[maxCount - 1] : <Point>{ $type: Point_$type, x: 0, y: 0 };
			for (let i2: number = maxCount; i2 < minCount; ++i2) {
				interpolatedPoints._inner[i2] = <Point>{ $type: Point_$type, x: (minPoints._inner[i2].x * q) + (mx.x * p), y: (minPoints._inner[i2].y * q) + (mx.y * p) };
			}
		}
		return interpolatedPoints;
	}
	static interpolateValues$1<T>($t: Type, interpolatedValues: List$1<T>, p: number, minValues: List$1<T>, maxValues: List$1<T>, createEmpty: () => T, interpolate: (arg1: number, arg2: number, arg3: T, arg4: T) => T): List$1<T> {
		let q = 1 - p;
		if (interpolatedValues == null) {
			interpolatedValues = new List$1<T>($t, 0);
		}
		if (minValues == null) {
			minValues = new List$1<T>($t, 0);
		}
		let minCount: number = minValues.count;
		let maxCount: number = maxValues.count;
		let count: number = Math.max(minCount, maxCount);
		if (interpolatedValues.count < count) {
			let capacity: number = count - interpolatedValues.count;
			let range: T[] = <T[]>new Array(capacity);
			interpolatedValues.insertRange(interpolatedValues.count, <IEnumerable$1<T>><any><any>range);
		}
		if (interpolatedValues.count > count) {
			interpolatedValues.removeRange(count, interpolatedValues.count - count);
		}
		for (let i: number = 0; i < Math.min(minCount, maxCount); ++i) {
			interpolatedValues._inner[i] = interpolate(p, q, minValues._inner[i], maxValues._inner[i]);
		}
		if (minCount < maxCount) {
			let mn: T = minCount > 0 ? minValues._inner[minCount - 1] : createEmpty();
			for (let i1: number = minCount; i1 < maxCount; ++i1) {
				interpolatedValues._inner[i1] = interpolate(p, q, mn, maxValues._inner[i1]);
			}
		}
		if (minCount > maxCount) {
			let mx: T = maxCount > 0 ? maxValues._inner[maxCount - 1] : createEmpty();
			for (let i2: number = maxCount; i2 < minCount; ++i2) {
				interpolatedValues._inner[i2] = interpolate(p, q, minValues._inner[i2], mx);
			}
		}
		return interpolatedValues;
	}
	static interpolateDashArrays(p: number, startValue: number[], endValue: number[]): number[] {
		let q = 1 - p;
		if (startValue == null) {
			startValue = <number[]>new Array(0);
		}
		let minCount: number = startValue.length;
		let maxCount: number = endValue.length;
		let count: number = Math.max(minCount, maxCount);
		let interpolatedValues = <number[]>new Array(count);
		for (let i: number = 0; i < Math.min(minCount, maxCount); i++) {
			interpolatedValues[i] = startValue[i] + p * (endValue[i] - startValue[i]);
		}
		if (minCount < maxCount) {
			let mn = minCount > 0 ? startValue[minCount - 1] : 0;
			for (let i1: number = minCount; i1 < maxCount; ++i1) {
				interpolatedValues[i1] = mn + p * (endValue[i1] - mn);
			}
		}
		if (minCount > maxCount) {
			let mx = maxCount > 0 ? endValue[maxCount - 1] : 0;
			for (let i2: number = maxCount; i2 < minCount; ++i2) {
				interpolatedValues[i2] = startValue[i2] + p * (mx - startValue[i2]);
			}
		}
		return interpolatedValues;
	}
}


