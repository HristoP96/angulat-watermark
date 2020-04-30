/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, NotSupportedException, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, fromEnum, toEnum, getBoxIfEnum, markType } from "./type";
import { NotImplementedException } from "./NotImplementedException";

/**
 * @hidden 
 */
export class RearrangedList$1<T> extends Base implements IList$1<T> {
	static $t: Type = markType(RearrangedList$1, 'RearrangedList$1', (<any>Base).$type, [IList$1_$type.specialize(0)]);
	protected $t: Type = null;
	private _inner: IList$1<T> = null;
	private _indexes: IList$1<number> = null;
	constructor($t: Type, inner: IList$1<T>, indexes: IList$1<number>) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this._inner = inner;
		this._indexes = indexes;
	}
	indexOf(item: T): number {
		let innerIndex = this._inner.indexOf(item);
		if (innerIndex == -1) {
			return -1;
		}
		return this._indexes.indexOf(innerIndex);
	}
	insert(index: number, item: T): void {
		throw new NotImplementedException(0);
	}
	removeAt(index: number): void {
		throw new NotImplementedException(0);
	}
	item(index: number, value?: T): T {
		if (arguments.length === 2) {
			return value;
		} else {
			return this._inner.item(this._indexes.item(index));
		}
	}
	add(item: T): void {
		throw new NotImplementedException(0);
	}
	clear(): void {
		this._indexes.clear();
	}
	contains(item: T): boolean {
		return this._inner.contains(item);
	}
	copyTo(array: T[], arrayIndex: number): void {
		throw new NotImplementedException(0);
	}
	get count(): number {
		return this._indexes.count;
	}
	get isReadOnly(): boolean {
		return true;
	}
	remove(item: T): boolean {
		throw new NotImplementedException(0);
	}
	private *_getEnumerator(): IterableIterator<any> {
		for (let ind of fromEnum<number>(this._indexes)) {
			yield this._inner.item(ind);
		}
	}
	getEnumerator(): IEnumerator$1<T> {
		return toEnum(() => this._getEnumerator()).getEnumerator();
	}
	private *_getEnumeratorObject(): IterableIterator<any> {
		for (let ind of fromEnum<number>(this._indexes)) {
			yield getBoxIfEnum<T>(this.$t, this._inner.item(ind));
		}
	}
	getEnumeratorObject(): IEnumerator {
		return toEnum(() => this._getEnumeratorObject()).getEnumeratorObject();
	}
}


