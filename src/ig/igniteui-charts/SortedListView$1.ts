/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, NotSupportedException, IEnumerator$1, IEnumerator$1_$type, IDisposable, IDisposable_$type, Type, getBoxIfEnum, toEnum, markType } from "igniteui-core/type";
import { NotImplementedException } from "igniteui-core/NotImplementedException";

/**
 * @hidden 
 */
export class SortedListView$1<T> extends Base implements IList$1<T> {
	static $t: Type = markType(SortedListView$1, 'SortedListView$1', (<any>Base).$type, [IList$1_$type.specialize(0)]);
	protected $t: Type = null;
	private _sortedIndices: IList$1<number> = null;
	private _source: IList$1<T> = null;
	constructor($t: Type, source: IList$1<T>, sortedIndices: IList$1<number>) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
		this._sortedIndices = sortedIndices;
		this._source = source;
	}
	add(value: T): void {
		throw new NotImplementedException(0);
	}
	clear(): void {
		throw new NotImplementedException(0);
	}
	contains(value: T): boolean {
		return this._source.contains(value);
	}
	indexOf(value: T): number {
		return this._sortedIndices.indexOf(this._source.indexOf(value));
	}
	insert(index: number, value: T): void {
		throw new NotImplementedException(0);
	}
	get isFixedSize(): boolean {
		return true;
	}
	get isReadOnly(): boolean {
		return true;
	}
	remove(value: T): boolean {
		throw new NotImplementedException(0);
	}
	removeAt(index: number): void {
		throw new NotImplementedException(0);
	}
	item(index: number, value?: T): T {
		if (arguments.length === 2) {
			throw new NotImplementedException(0);
			return value;
		} else {
			return this._source.item(this._sortedIndices.item(index));
		}
	}
	get count(): number {
		return this._source.count;
	}
	get isSynchronized(): boolean {
		throw new NotImplementedException(0);
	}
	get syncRoot(): any {
		throw new NotImplementedException(0);
	}
	private *_getEnumeratorObject(): IterableIterator<any> {
		for (let i: number = 0; i < this.count; i++) {
			yield getBoxIfEnum<T>(this.$t, this.item(i));
		}
	}
	getEnumeratorObject(): IEnumerator {
		return toEnum(() => this._getEnumeratorObject()).getEnumeratorObject();
	}
	private *_getEnumerator(): IterableIterator<any> {
		for (let i: number = 0; i < this.count; i++) {
			yield this.item(i);
		}
	}
	getEnumerator(): IEnumerator$1<T> {
		return toEnum(() => this._getEnumerator()).getEnumerator();
	}
	copyTo(array: T[], arrayIndex: number): void {
		throw new NotImplementedException(0);
	}
}


