/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, typeCast, Array_$type, Type, markType } from "./type";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export class ArrayAccessHelper extends Base {
	static $t: Type = markType(ArrayAccessHelper, 'ArrayAccessHelper');
	static asDoubleArray(values_: IList$1<number>): number[] {
		let arr = <any[]>(Array.isArray(values_) ? values_ : null);
		return <number[]>arr;
	}
	static asIntArray(values_: IList$1<number>): number[] {
		let arr = <any[]>(Array.isArray(values_) ? values_ : null);
		return <number[]>arr;
	}
	static asBucketArray(buckets: IList$1<number[]>): number[][] {
		if (typeCast<List$1<number[]>>((<any>List$1).$type.specialize(Array_$type), buckets) !== null) {
			return <number[][]><any>(<List$1<number[]>>buckets).asArray();
		}
		return null;
	}
}


