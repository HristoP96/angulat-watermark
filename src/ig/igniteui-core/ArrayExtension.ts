/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IComparable, IComparable_$type, IList, IList_$type, ICollection, ICollection_$type, getBoxIfEnum, Type, markType } from "./type";
import { Random } from "./Random";
import { IIndexedPool$1 } from "./IIndexedPool$1";
import { intDivide } from "./number";
import { CompareUtil } from "./compareUtil";

/**
 * @hidden 
 */
export class ArrayExtension extends Base {
	static $t: Type = markType(ArrayExtension, 'ArrayExtension');
	static shuffle$1<T>($t: Type, list: IList$1<T>): void {
		if (list != null) {
			let random: Random = new Random(0);
			for (let n: number = list.count - 1; n > 0; --n) {
				let k: number = random.next1(n);
				let temp: T = list.item(n);
				list.item(n, list.item(k));
				list.item(k, temp);
			}
		}
	}
	static insertionIndex$1<T extends IComparable>($t: Type, collection: IList$1<T>, value: T): number {
		let index: number = -1;
		let b: number = 0;
		let e: number = collection.count;
		while (index == -1) {
			if (e <= b) {
				index = b;
			} else {
				let m: number = intDivide((b + e), 2);
				switch (<number>Math.sign(CompareUtil.compareToObject((<IComparable><any><any>value), getBoxIfEnum<T>($t, collection.item(m))))) {
					case -1:
					e = m;
					break;

					case 0:
					index = m;
					break;

					case 1:
					b = m + 1;
					break;

				}

			}
		}
		return index;
	}
	static insertionIndex$11<T>($t: Type, collection: IList$1<T>, comparison: (x: T, y: T) => number, value: T): number {
		let index: number = -1;
		let b: number = 0;
		let e: number = collection.count;
		while (index == -1) {
			if (e <= b) {
				index = b;
			} else {
				let m: number = intDivide((b + e), 2);
				switch (<number>Math.sign(comparison(value, collection.item(m)))) {
					case -1:
					e = m;
					break;

					case 0:
					index = m;
					break;

					case 1:
					b = m + 1;
					break;

				}

			}
		}
		return index;
	}
	static binarySearch$11<T>($t: Type, list: IList$1<T>, comparisonFunction: (arg1: T) => number): number {
		let currMin: number = 0;
		let currMax: number = list.count - 1;
		while (currMin <= currMax) {
			let currMid: number = (currMin + ((currMax - currMin) >> 1));
			let compResult: number = comparisonFunction(list.item(currMid));
			if (compResult < 0) {
				currMax = currMid - 1;
			} else if (compResult > 0) {
				currMin = currMid + 1;
			} else {
				return currMid;
			}
		}
		return ~currMin;
	}
	static binarySearch$1<T>($t: Type, list: IIndexedPool$1<T>, comparisonFunction: (arg1: T) => number): number {
		let currMin: number = 0;
		let currMax: number = list.count - 1;
		while (currMin <= currMax) {
			let currMid: number = (currMin + ((currMax - currMin) >> 1));
			let compResult: number = comparisonFunction(list.item(currMid));
			if (compResult < 0) {
				currMax = currMid - 1;
			} else if (compResult > 0) {
				currMin = currMid + 1;
			} else {
				return currMid;
			}
		}
		return ~currMin;
	}
	static getModulus$1<T>($t: Type, list: IList$1<T>, index: number): T {
		if (list == null) {
			return Type.getDefaultValue<T>($t);
		}
		if (list.count == 0) {
			return Type.getDefaultValue<T>($t);
		}
		return list.item(index % list.count);
	}
}


