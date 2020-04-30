/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, Number_$type, Type, markType } from "igniteui-core/type";
import { NotImplementedException } from "igniteui-core/NotImplementedException";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class RangeValueList extends Base implements IList$1<number> {
	static $t: Type = markType(RangeValueList, 'RangeValueList', (<any>Base).$type, [IList$1_$type.specialize(Number_$type)]);
	private _highColumn: IList$1<number> = null;
	private _lowColumn: IList$1<number> = null;
	constructor(highColumn: IList$1<number>, lowColumn: IList$1<number>) {
		super();
		this._highColumn = highColumn;
		this._lowColumn = lowColumn;
	}
	indexOf(item: number): number {
		throw new NotImplementedException(0);
	}
	insert(index: number, item: number): void {
		throw new NotImplementedException(0);
	}
	removeAt(index: number): void {
		throw new NotImplementedException(0);
	}
	item(index: number, value?: number): number {
		if (arguments.length === 2) {
			return value;
		} else {
			let high = NaN;
			let low = NaN;
			if (this._highColumn != null && index >= 0 && index < this._highColumn.count) {
				high = this._highColumn.item(index);
			}
			if (this._lowColumn != null && index >= 0 && index < this._lowColumn.count) {
				low = this._lowColumn.item(index);
			}
			let highIsNaN = isNaN_(high);
			let lowIsNaN = isNaN_(low);
			if (!highIsNaN && !lowIsNaN) {
				return (high + low) / 2;
			}
			if (!highIsNaN) {
				return high;
			}
			if (!lowIsNaN) {
				return low;
			}
			return NaN;
		}
	}
	add(item: number): void {
		throw new NotImplementedException(0);
	}
	clear(): void {
		throw new NotImplementedException(0);
	}
	contains(item: number): boolean {
		throw new NotImplementedException(0);
	}
	copyTo(array: number[], arrayIndex: number): void {
		throw new NotImplementedException(0);
	}
	get count(): number {
		let highCount: number = 0;
		let lowCount: number = 0;
		if (this._highColumn != null) {
			highCount = this._highColumn.count;
		}
		if (this._lowColumn != null) {
			lowCount = this._lowColumn.count;
		}
		let count = 0;
		count = Math.max(count, highCount);
		count = Math.max(count, lowCount);
		return count;
	}
	get isReadOnly(): boolean {
		return true;
	}
	remove(item: number): boolean {
		throw new NotImplementedException(0);
	}
	getEnumerator(): IEnumerator$1<number> {
		throw new NotImplementedException(0);
	}
	getEnumeratorObject(): IEnumerator {
		throw new NotImplementedException(0);
	}
}


