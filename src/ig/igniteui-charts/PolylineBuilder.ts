/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Number_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class PolylineBuilder extends Base {
	static $t: Type = markType(PolylineBuilder, 'PolylineBuilder');
	clear(): void {
		this.byBegin.clear();
		this.byEnd.clear();
	}
	getPolylines(): List$1<List$1<number>> {
		let ret: List$1<List$1<number>> = new List$1<List$1<number>>((<any>List$1).$type.specialize(Number_$type), 0);
		for (let val of fromEnum<List$1<number>>(this.byBegin.values)) {
			ret.add(val);
		}
		return ret;
	}
	addSegment(begin: number, end: number): void {
		let before: List$1<number> = null;
		let after: List$1<number> = null;
		let $ret = this.byEnd.tryGetValue(begin, before);
		before = $ret.p1;
		let $ret1 = this.byBegin.tryGetValue(end, after);
		after = $ret1.p1;
		if (before == null && after == null) {
			let p2: List$1<number> = new List$1<number>(Number_$type, 0);
			p2.add(begin);
			p2.add(end);
			this.byBegin.addItem(begin, p2);
			this.byEnd.addItem(end, p2);
		}
		if (before == null && after != null) {
			this.byBegin.removeItem(end);
			after.insert(0, begin);
			this.byBegin.addItem(begin, after);
		}
		if (before != null && after == null) {
			this.byEnd.removeItem(begin);
			before.add(end);
			this.byEnd.addItem(end, before);
		}
		if (before != null && after != null) {
			if (before == after) {
				before.add(end);
				this.byEnd.removeItem(begin);
			} else {
				this.byBegin.removeItem(after._inner[0]);
				this.byEnd.removeItem(after._inner[after.count - 1]);
				this.byEnd.removeItem(before._inner[before.count - 1]);
				before.addRange(after);
				this.byEnd.addItem(before._inner[before.count - 1], before);
			}
		}
	}
	protected byBegin: Dictionary$2<number, List$1<number>> = new Dictionary$2<number, List$1<number>>(Number_$type, (<any>List$1).$type.specialize(Number_$type), 0);
	protected byEnd: Dictionary$2<number, List$1<number>> = new Dictionary$2<number, List$1<number>>(Number_$type, (<any>List$1).$type.specialize(Number_$type), 0);
}


