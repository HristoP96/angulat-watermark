/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Number_$type, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { FlattenerSettings } from "./FlattenerSettings";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class FastFlattener extends Base {
	static $t: Type = markType(FastFlattener, 'FastFlattener');
	constructor() {
		super();
	}
	static fastFlatten2(result: List$1<number>, X: number[], Y: number[], b: number, e: number, E: number): List$1<number> {
		if (b > e) {
			return result;
		}
		let Xb: number = X[b];
		let Yb: number = Y[b];
		while ((isNaN_(Xb) || isNaN_(Yb)) && b < e) {
			++b;
			Xb = X[b];
			Yb = Y[b];
		}
		let Xe: number = X[e];
		let Ye: number = Y[e];
		while ((isNaN_(Xe) || isNaN_(Ye)) && b < e) {
			--e;
			Xe = X[e];
			Ye = Y[e];
		}
		if (b == e) {
			result.add(b);
			return result;
		}
		result.add(b);
		FastFlattener.fastFlattenRecursive(result, X, Y, b, e, E);
		result.add(e);
		return result;
	}
	static fastFlatten(count: number, buckets: List$1<number[]>, point0: boolean, useX0AsX1: boolean, resolution: number): IList$1<number> {
		let xIndex: number;
		let yIndex: number;
		if (point0) {
			xIndex = 0;
			yIndex = 1;
		} else if (useX0AsX1) {
			xIndex = 0;
			yIndex = 2;
		} else {
			xIndex = 2;
			yIndex = 3;
		}
		return FastFlattener.fastFlatten1(count, buckets, xIndex, yIndex, resolution);
	}
	static chunkedFastFlatten1(count: number, buckets: List$1<number[]>, point0: boolean, useX0AsX1: boolean, resolution: number): IList$1<number> {
		let indices: List$1<number> = new List$1<number>(Number_$type, 0);
		let res = FastFlattener.chunkedFastFlatten(indices, buckets, point0, useX0AsX1, 0, count - 1, resolution);
		return res;
	}
	static fastFlatten1(count: number, buckets: List$1<number[]>, xIndex: number, yIndex: number, resolution: number): IList$1<number> {
		let indices: List$1<number> = new List$1<number>(Number_$type, 0);
		FastFlattener.fastFlatten4(indices, buckets, xIndex, yIndex, 0, count - 1, resolution);
		return indices;
	}
	static chunkedFastFlatten(result: List$1<number>, buckets: List$1<number[]>, point0: boolean, useX0AsX1: boolean, b: number, e: number, E: number): IList$1<number> {
		let chunking = FlattenerSettings.instance.chunkingAmount;
		if ((e - b + 1) <= chunking) {
			return FastFlattener.fastFlatten3(result, buckets, point0, useX0AsX1, b, e, E);
		}
		let indices: List$1<number> = result;
		if (chunking < 0) {
			for (let i = b; i <= e; i++) {
				indices.add(i);
			}
			return indices;
		}
		let start: number = b;
		let end: number = e;
		let toFlatten: number = end - start + 1;
		while (toFlatten > 0) {
			if (toFlatten <= chunking) {
				FastFlattener.fastFlatten3(indices, buckets, point0, useX0AsX1, start, end, E);
				start = end + 1;
			} else {
				let currentEnd: number = start + chunking - 1;
				FastFlattener.fastFlatten3(indices, buckets, point0, useX0AsX1, start, currentEnd, E);
				start = currentEnd + 1;
			}
			toFlatten = end - start + 1;
		}
		return indices;
	}
	static fastFlatten3(result: List$1<number>, buckets: List$1<number[]>, point0: boolean, useX0AsX1: boolean, b: number, e: number, E: number): List$1<number> {
		let xIndex: number;
		let yIndex: number;
		if (point0) {
			xIndex = 0;
			yIndex = 1;
		} else if (useX0AsX1) {
			xIndex = 0;
			yIndex = 2;
		} else {
			xIndex = 2;
			yIndex = 3;
		}
		return FastFlattener.fastFlatten4(result, buckets, xIndex, yIndex, b, e, E);
	}
	static fastFlatten4(result: List$1<number>, buckets: List$1<number[]>, xIndex: number, yIndex: number, b: number, e: number, E: number): List$1<number> {
		if (b > e) {
			return result;
		}
		let bucketB = buckets._inner[b];
		let Xb: number, Yb: number;
		Xb = bucketB[xIndex];
		Yb = bucketB[yIndex];
		while ((isNaN_(Xb) || isNaN_(Yb)) && b < e) {
			++b;
			bucketB = buckets._inner[b];
			Xb = bucketB[xIndex];
			Yb = bucketB[yIndex];
		}
		let bucketE = buckets._inner[e];
		let Xe: number, Ye: number;
		Xe = bucketE[xIndex];
		Ye = bucketE[yIndex];
		while ((isNaN_(Xe) || isNaN_(Ye)) && b < e) {
			--e;
			bucketE = buckets._inner[e];
			Xe = bucketE[xIndex];
			Ye = bucketE[yIndex];
		}
		if (b == e) {
			result.add(b);
			return result;
		}
		result.add(b);
		FastFlattener.fastFlattenRecursive1(result, buckets, xIndex, yIndex, b, e, E);
		result.add(e);
		return result;
	}
	private static fastFlattenRecursive(result: List$1<number>, X: number[], Y: number[], b: number, e: number, E: number): void {
		let Xb: number = X[b];
		let Yb: number = Y[b];
		while ((isNaN_(Xb) || isNaN_(Yb)) && b < e) {
			++b;
			Xb = X[b];
			Yb = Y[b];
		}
		let Xe: number = X[e];
		let Ye: number = Y[e];
		while ((isNaN_(Xe) || isNaN_(Ye)) && b < e) {
			--e;
			Xe = X[e];
			Ye = Y[e];
		}
		if (b + 1 >= e) {
			return;
		}
		let si: number = -1;
		let se: number = E * E;
		let xDelt: number;
		let yDelt: number;
		xDelt = Xe - Xb;
		yDelt = Ye - Yb;
		let L: number = xDelt * xDelt + yDelt * yDelt;
		if (L == 0) {
			for (let i: number = b + 1; i < e; ++i) {
				let Xi: number = X[i];
				let Yi: number = Y[i];
				if (isNaN_(Xi) || isNaN_(Yi)) {
					continue;
				}
				xDelt = Xe - Xi;
				yDelt = Ye - Yi;
				let err: number = xDelt * xDelt + yDelt * yDelt;
				if (err >= se) {
					se = err;
					si = i;
				}
			}
		} else {
			let vx: number = Xe - Xb;
			let vy: number = Ye - Yb;
			for (let i1: number = b + 1; i1 < e; ++i1) {
				let Xi1: number = X[i1];
				let Yi1: number = Y[i1];
				if (isNaN_(Xi1) || isNaN_(Yi1)) {
					continue;
				}
				let err1: number = NaN;
				let wx: number = X[i1] - Xb;
				let wy: number = Y[i1] - Yb;
				let c1: number = vx * wx + vy * wy;
				if (c1 <= 0) {
					xDelt = Xb - Xi1;
					yDelt = Yb - Yi1;
					err1 = xDelt * xDelt + yDelt * yDelt;
				} else {
					let c2: number = vx * vx + vy * vy;
					if (c2 <= c1) {
						xDelt = Xe - Xi1;
						yDelt = Ye - Yi1;
						err1 = xDelt * xDelt + yDelt * yDelt;
					} else {
						let p: number = c1 / c2;
						xDelt = Xb + p * vx - Xi1;
						yDelt = Yb + p * vy - Yi1;
						err1 = xDelt * xDelt + yDelt * yDelt;
					}
				}
				if (err1 >= se) {
					se = err1;
					si = i1;
				}
			}
		}
		if (si != -1) {
			FastFlattener.fastFlattenRecursive(result, X, Y, b, si, E);
			result.add(si);
			FastFlattener.fastFlattenRecursive(result, X, Y, si, e, E);
		}
		return;
	}
	private static fastFlattenRecursive1(result: List$1<number>, buckets: List$1<number[]>, xIndex: number, yIndex: number, b: number, e: number, E: number): void {
		let bucketB = buckets._inner[b];
		let Xb: number, Yb: number;
		Xb = bucketB[xIndex];
		Yb = bucketB[yIndex];
		while ((Xb != Xb) || (Yb != Yb) && b < e) {
			++b;
			bucketB = buckets._inner[b];
			Xb = bucketB[xIndex];
			Yb = bucketB[yIndex];
		}
		let bucketE = buckets._inner[e];
		let Xe: number, Ye: number;
		Xe = bucketE[xIndex];
		Ye = bucketE[yIndex];
		while ((Xe != Xe) || (Ye != Ye) && b < e) {
			--e;
			bucketE = buckets._inner[e];
			Xe = bucketE[xIndex];
			Ye = bucketE[yIndex];
		}
		if (b + 1 >= e) {
			return;
		}
		let si: number = -1;
		let se: number = E * E;
		let xDelt: number;
		let yDelt: number;
		xDelt = Xe - Xb;
		yDelt = Ye - Yb;
		let L: number = xDelt * xDelt + yDelt * yDelt;
		if (L == 0) {
			for (let i: number = b + 1; i < e; ++i) {
				let bucketI = buckets._inner[i];
				let Xi: number, Yi: number;
				Xi = bucketI[xIndex];
				Yi = bucketI[yIndex];
				if ((Xi != Xi) || (Yi != Yi)) {
					continue;
				}
				xDelt = Xe - Xi;
				yDelt = Ye - Yi;
				let err: number = xDelt * xDelt + yDelt * yDelt;
				if (err >= se) {
					se = err;
					si = i;
				}
			}
		} else {
			let vx: number = Xe - Xb;
			let vy: number = Ye - Yb;
			for (let i1: number = b + 1; i1 < e; ++i1) {
				let bucketI1 = buckets._inner[i1];
				let Xi1: number, Yi1: number;
				Xi1 = bucketI1[xIndex];
				Yi1 = bucketI1[yIndex];
				if ((Xi1 != Xi1) || (Yi1 != Yi1)) {
					continue;
				}
				let err1: number = NaN;
				let wx: number = Xi1 - Xb;
				let wy: number = Yi1 - Yb;
				let c1: number = vx * wx + vy * wy;
				if (c1 <= 0) {
					xDelt = Xb - Xi1;
					yDelt = Yb - Yi1;
					err1 = xDelt * xDelt + yDelt * yDelt;
				} else {
					let c2: number = vx * vx + vy * vy;
					if (c2 <= c1) {
						xDelt = Xe - Xi1;
						yDelt = Ye - Yi1;
						err1 = xDelt * xDelt + yDelt * yDelt;
					} else {
						let p: number = c1 / c2;
						xDelt = Xb + p * vx - Xi1;
						yDelt = Yb + p * vy - Yi1;
						err1 = xDelt * xDelt + yDelt * yDelt;
					}
				}
				if (err1 >= se) {
					se = err1;
					si = i1;
				}
			}
		}
		if (si != -1) {
			FastFlattener.fastFlattenRecursive1(result, buckets, xIndex, yIndex, b, si, E);
			result.add(si);
			FastFlattener.fastFlattenRecursive1(result, buckets, xIndex, yIndex, si, e, E);
		}
		return;
	}
}


