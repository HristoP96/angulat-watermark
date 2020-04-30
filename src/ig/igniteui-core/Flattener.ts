/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Number_$type, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { MathUtil } from "./MathUtil";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class Flattener extends Base {
	static $t: Type = markType(Flattener, 'Flattener');
	constructor() {
		super();
	}
	static flatten3(count: number, X: (arg1: number) => number, Y: (arg1: number) => number, resolution: number): IList$1<number> {
		let indices: List$1<number> = new List$1<number>(Number_$type, 0);
		Flattener.flatten2(indices, X, Y, 0, count - 1, resolution);
		return indices;
	}
	static flatten2(result: IList$1<number>, X: (arg1: number) => number, Y: (arg1: number) => number, b: number, e: number, E: number): IList$1<number> {
		return Flattener.flatten1(result, (i: number) => i, X, Y, b, e, E);
	}
	static flatten(result: IList$1<number>, indices: IList$1<number>, X: (arg1: number) => number, Y: (arg1: number) => number, b: number, e: number, E: number): IList$1<number> {
		return Flattener.flatten1(result, (i: number) => indices.item(i), X, Y, b, e, E);
	}
	private static flatten1(result: IList$1<number>, getIndex: (arg1: number) => number, X: (arg1: number) => number, Y: (arg1: number) => number, b: number, e: number, E: number): IList$1<number> {
		if (b > e) {
			return result;
		}
		let Xb: number = X(getIndex(b));
		let Yb: number = Y(getIndex(b));
		while ((isNaN_(Xb) || isNaN_(Yb)) && b < e) {
			++b;
			Xb = X(getIndex(b));
			Yb = Y(getIndex(b));
		}
		let Xe: number = X(getIndex(e));
		let Ye: number = Y(getIndex(e));
		while ((isNaN_(Xe) || isNaN_(Ye)) && b < e) {
			--e;
			Xe = X(getIndex(e));
			Ye = Y(getIndex(e));
		}
		if (b == e) {
			result.add(getIndex(b));
			return result;
		}
		result.add(getIndex(b));
		Flattener.flattenRecursive(result, getIndex, X, Y, b, e, E);
		result.add(getIndex(e));
		return result;
	}
	private static flattenRecursive(result: IList$1<number>, getIndex: (arg1: number) => number, X: (arg1: number) => number, Y: (arg1: number) => number, b: number, e: number, E: number): void {
		let Xb: number = X(getIndex(b));
		let Yb: number = Y(getIndex(b));
		while ((isNaN_(Xb) || isNaN_(Yb)) && b < e) {
			++b;
			Xb = X(getIndex(b));
			Yb = Y(getIndex(b));
		}
		let Xe: number = X(getIndex(e));
		let Ye: number = Y(getIndex(e));
		while ((isNaN_(Xe) || isNaN_(Ye)) && b < e) {
			--e;
			Xe = X(getIndex(e));
			Ye = Y(getIndex(e));
		}
		if (b + 1 >= e) {
			return;
		}
		let si: number = -1;
		let se: number = E;
		let L: number = MathUtil.hypot(Xe - Xb, Ye - Yb);
		if (L == 0) {
			for (let i: number = b + 1; i < e; ++i) {
				let Xi: number = X(getIndex(i));
				let Yi: number = Y(getIndex(i));
				if (isNaN_(Xi) || isNaN_(Yi)) {
					continue;
				}
				let err: number = MathUtil.hypot(Xe - Xi, Ye - Yi);
				if (err >= se) {
					se = err;
					si = i;
				}
			}
		} else {
			let vx: number = Xe - Xb;
			let vy: number = Ye - Yb;
			for (let i1: number = b + 1; i1 < e; ++i1) {
				let Xi1: number = X(getIndex(i1));
				let Yi1: number = Y(getIndex(i1));
				if (isNaN_(Xi1) || isNaN_(Yi1)) {
					continue;
				}
				let err1: number = NaN;
				let wx: number = X(getIndex(i1)) - Xb;
				let wy: number = Y(getIndex(i1)) - Yb;
				let c1: number = vx * wx + vy * wy;
				if (c1 <= 0) {
					err1 = MathUtil.hypot(Xb - Xi1, Yb - Yi1);
				} else {
					let c2: number = vx * vx + vy * vy;
					if (c2 <= c1) {
						err1 = MathUtil.hypot(Xe - Xi1, Ye - Yi1);
					} else {
						let p: number = c1 / c2;
						err1 = MathUtil.hypot(Xb + p * vx - Xi1, Yb + p * vy - Yi1);
					}
				}
				if (err1 >= se) {
					se = err1;
					si = i1;
				}
			}
		}
		if (si != -1) {
			Flattener.flattenRecursive(result, getIndex, X, Y, b, si, E);
			result.add(getIndex(si));
			Flattener.flattenRecursive(result, getIndex, X, Y, si, e, E);
		}
		return;
	}
}


