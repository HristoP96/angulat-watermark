/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IEnumerable$1, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export abstract class Frame extends Base {
	static $t: Type = markType(Frame, 'Frame');
	abstract interpolate2(p: number, min: Frame, max: Frame): void;
	protected static interpolate(ret: List$1<Point>, p: number, min: List$1<Point>, max: List$1<Point>): void {
		let minCount: number = min.count;
		let maxCount: number = max.count;
		let count: number = Math.max(minCount, maxCount);
		let q: number = 1 - p;
		if (ret.count < count) {
			ret.insertRange(ret.count, <IEnumerable$1<Point>><any><Point[]>new Array(count - ret.count));
		}
		if (ret.count > count) {
			ret.removeRange(count, ret.count - count);
		}
		for (let i: number = 0; i < Math.min(minCount, maxCount); ++i) {
			ret._inner[i] = <Point>{ $type: Point_$type, x: min._inner[i].x * q + max._inner[i].x * p, y: min._inner[i].y * q + max._inner[i].y * p };
		}
		if (minCount < maxCount) {
			let mn: Point = minCount > 0 ? min._inner[minCount - 1] : <Point>{ $type: Point_$type, x: 0, y: 0 };
			for (let i1: number = minCount; i1 < maxCount; ++i1) {
				ret._inner[i1] = <Point>{ $type: Point_$type, x: mn.x * q + max._inner[i1].x * p, y: mn.y * q + max._inner[i1].y * p };
			}
		}
		if (minCount > maxCount) {
			let mx: Point = maxCount > 0 ? max._inner[maxCount - 1] : <Point>{ $type: Point_$type, x: 0, y: 0 };
			for (let i2: number = maxCount; i2 < minCount; ++i2) {
				ret._inner[i2] = <Point>{ $type: Point_$type, x: min._inner[i2].x * q + mx.x * p, y: min._inner[i2].y * q + mx.y * p };
			}
		}
	}
	protected static interpolateWithSpeed(ret: List$1<Point>, p: number, min: List$1<Point>, max: List$1<Point>, speedModifiers: List$1<number>): void {
		let minCount: number = min.count;
		let maxCount: number = max.count;
		let count: number = Math.max(minCount, maxCount);
		let q: number = 1 - p;
		if (ret.count < count) {
			ret.insertRange(ret.count, <IEnumerable$1<Point>><any><Point[]>new Array(count - ret.count));
		}
		if (ret.count > count) {
			ret.removeRange(count, ret.count - count);
		}
		let speed: number;
		let speedq: number;
		for (let i: number = 0; i < Math.min(minCount, maxCount); ++i) {
			speed = p * speedModifiers._inner[i];
			speed = speed > 1 ? 1 : speed;
			speedq = 1 - speed;
			ret._inner[i] = <Point>{ $type: Point_$type, x: min._inner[i].x * speedq + max._inner[i].x * speed, y: min._inner[i].y * speedq + max._inner[i].y * speed };
		}
		if (minCount < maxCount) {
			let mn: Point = minCount > 0 ? min._inner[minCount - 1] : <Point>{ $type: Point_$type, x: 0, y: 0 };
			for (let i1: number = minCount; i1 < maxCount; ++i1) {
				speed = p * speedModifiers._inner[i1];
				speed = speed > 1 ? 1 : speed;
				speedq = 1 - speed;
				ret._inner[i1] = <Point>{ $type: Point_$type, x: mn.x * speedq + max._inner[i1].x * speed, y: mn.y * speedq + max._inner[i1].y * speed };
			}
		}
		if (minCount > maxCount) {
			let mx: Point = maxCount > 0 ? max._inner[maxCount - 1] : <Point>{ $type: Point_$type, x: 0, y: 0 };
			for (let i2: number = maxCount; i2 < minCount; ++i2) {
				speed = p * speedModifiers._inner[i2];
				speed = speed > 1 ? 1 : speed;
				speedq = 1 - speed;
				ret._inner[i2] = <Point>{ $type: Point_$type, x: min._inner[i2].x * speedq + mx.x * speed, y: min._inner[i2].y * speedq + mx.y * speed };
			}
		}
	}
	protected static interpolate1(ret: List$1<number>, p: number, min: List$1<number>, max: List$1<number>): void {
		let minCount: number = min.count;
		let maxCount: number = max.count;
		let count: number = Math.max(minCount, maxCount);
		let q: number = 1 - p;
		if (ret.count < count) {
			let newVals: number[] = <number[]>new Array(count - ret.count);
			for (let i = 0; i < count - ret.count; i++) {
				newVals[i] = 0;
			}
			ret.insertRange(ret.count, <IEnumerable$1<number>><any>newVals);
		}
		if (ret.count > count) {
			ret.removeRange(count, ret.count - count);
		}
		for (let i1: number = 0; i1 < Math.min(minCount, maxCount); ++i1) {
			ret._inner[i1] = min._inner[i1] * q + max._inner[i1] * p;
		}
		if (minCount < maxCount) {
			let mn: number = minCount > 0 ? min._inner[minCount - 1] : 0;
			for (let i2: number = minCount; i2 < maxCount; ++i2) {
				ret._inner[i2] = mn * q + max._inner[i2] * p;
			}
		}
		if (minCount > maxCount) {
			let mx: number = maxCount > 0 ? max._inner[maxCount - 1] : 0;
			for (let i3: number = maxCount; i3 < minCount; ++i3) {
				ret._inner[i3] = min._inner[i3] * q + mx * p;
			}
		}
	}
	protected static interpolateWithSpeed1(ret: List$1<number>, p: number, min: List$1<number>, max: List$1<number>, speedModifiers: List$1<number>): void {
		let minCount: number = min.count;
		let maxCount: number = max.count;
		let count: number = Math.max(minCount, maxCount);
		let q: number = 1 - p;
		if (ret.count < count) {
			let newVals: number[] = <number[]>new Array(count - ret.count);
			for (let i = 0; i < count - ret.count; i++) {
				newVals[i] = 0;
			}
			ret.insertRange(ret.count, <IEnumerable$1<number>><any>newVals);
		}
		if (ret.count > count) {
			ret.removeRange(count, ret.count - count);
		}
		let speed: number;
		let speedq: number;
		for (let i1: number = 0; i1 < Math.min(minCount, maxCount); ++i1) {
			speed = p * speedModifiers._inner[i1];
			speed = speed > 1 ? 1 : speed;
			speedq = 1 - speed;
			ret._inner[i1] = min._inner[i1] * speedq + max._inner[i1] * speed;
		}
		if (minCount < maxCount) {
			let mn: number = minCount > 0 ? min._inner[minCount - 1] : 0;
			for (let i2: number = minCount; i2 < maxCount; ++i2) {
				speed = p * speedModifiers._inner[i2];
				speed = speed > 1 ? 1 : speed;
				speedq = 1 - speed;
				ret._inner[i2] = mn * speedq + max._inner[i2] * speed;
			}
		}
		if (minCount > maxCount) {
			let mx: number = maxCount > 0 ? max._inner[maxCount - 1] : 0;
			for (let i3: number = maxCount; i3 < minCount; ++i3) {
				speed = p * speedModifiers._inner[i3];
				speed = speed > 1 ? 1 : speed;
				speedq = 1 - speed;
				ret._inner[i3] = min._inner[i3] * speedq + mx * speed;
			}
		}
	}
}


