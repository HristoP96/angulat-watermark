/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, IEnumerator$1, IEnumerator$1_$type, Type, getBoxIfEnum, typeCastObjTo$t, markType } from "./type";
import { ArrayBox$1, arrayListCreate } from "./array";
import { ReverseArrayEnumerator$1 } from "./ReverseArrayEnumerator$1";

/**
 * @hidden 
 */
export class Stack$1<T> extends Base implements IEnumerable$1<T> {
	static $t: Type = markType(Stack$1, 'Stack$1', (<any>Base).$type, [IEnumerable$1_$type.specialize(0)]);
	protected $t: Type = null;
	constructor($t: Type) {
		super();
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
	}
	private _inner: ArrayBox$1<any> = arrayListCreate();
	push(item: T): void {
		this._inner.add(getBoxIfEnum<T>(this.$t, item));
	}
	peek(): T {
		if (this._inner.count < 1) {
			return Type.getDefaultValue<T>(this.$t);
		}
		return typeCastObjTo$t<T>(this.$t, this._inner.item(this._inner.count - 1));
	}
	pop(): T {
		let ret = this._inner.item(this._inner.count - 1);
		this._inner.removeAt(this._inner.count - 1);
		return typeCastObjTo$t<T>(this.$t, ret);
	}
	get count(): number {
		return this._inner.count;
	}
	clear(): void {
		this._inner.clear();
	}
	contains(item: T): boolean {
		return this._inner.contains(getBoxIfEnum<T>(this.$t, item));
	}
	getEnumeratorObject(): IEnumerator {
		return new ReverseArrayEnumerator$1<T>(this.$t, this._inner);
	}
	getEnumerator(): IEnumerator$1<T> {
		return new ReverseArrayEnumerator$1<T>(this.$t, this._inner);
	}
	toArray(): T[] {
		let count = this._inner.count;
		let items: T[] = <T[]>new Array(count);
		for (let i: number = 0; i < count; i++) {
			items[i] = typeCastObjTo$t<T>(this.$t, this._inner.item(count - (i + 1)));
		}
		return items;
	}
}


