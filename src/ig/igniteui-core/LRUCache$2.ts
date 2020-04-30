/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEqualityComparer$1, IEqualityComparer$1_$type, Type, markType } from "./type";
import { LinkedList$1 } from "./LinkedList$1";
import { LRUCacheItem$2 } from "./LRUCacheItem$2";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { FastIterationDictionary$2 } from "./FastIterationDictionary$2";

/**
 * @hidden 
 */
export class LRUCache$2<TKey, TValue> extends Base {
	static $t: Type = markType(LRUCache$2, 'LRUCache$2');
	protected $tKey: Type = null;
	protected $tValue: Type = null;
	constructor($tKey: Type, $tValue: Type, initNumber: number, maxItems: number);
	constructor($tKey: Type, $tValue: Type, initNumber: number, maxItems: number, comparer: IEqualityComparer$1<TKey>);
	constructor($tKey: Type, $tValue: Type, initNumber: number, ..._rest: any[]);
	constructor($tKey: Type, $tValue: Type, initNumber: number, ..._rest: any[]) {
		super();
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$type = this.$type.specialize(this.$tKey, this.$tValue);
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let maxItems: number = <number>_rest[0];
				let $outerArgs = <any[]>[ maxItems, null ];
				{
					let maxItems: number = <number>$outerArgs[0];
					let comparer: IEqualityComparer$1<TKey> = <IEqualityComparer$1<TKey>>$outerArgs[1];
					this._usedOrder = new LinkedList$1<LRUCacheItem$2<TKey, TValue>>((<any>LRUCacheItem$2).$type.specialize(this.$tKey, this.$tValue));
					this._cache = new FastIterationDictionary$2<TKey, LRUCacheItem$2<TKey, TValue>>(this.$tKey, (<any>LRUCacheItem$2).$type.specialize(this.$tKey, this.$tValue), 1, comparer);
					this._maxItems = maxItems;
				}
			}
			break;

			case 1:
			{
				let maxItems: number = <number>_rest[0];
				let comparer: IEqualityComparer$1<TKey> = <IEqualityComparer$1<TKey>>_rest[1];
				this._usedOrder = new LinkedList$1<LRUCacheItem$2<TKey, TValue>>((<any>LRUCacheItem$2).$type.specialize(this.$tKey, this.$tValue));
				this._cache = new FastIterationDictionary$2<TKey, LRUCacheItem$2<TKey, TValue>>(this.$tKey, (<any>LRUCacheItem$2).$type.specialize(this.$tKey, this.$tValue), 1, comparer);
				this._maxItems = maxItems;
			}
			break;

		}

	}
	private _maxItems: number = 0;
	get maxItems(): number {
		return this._maxItems;
	}
	set maxItems(value: number) {
		this._maxItems = value;
		while (this._cache.count > this._maxItems) {
			this.remove(this._usedOrder.last.value.key);
		}
	}
	private _usedOrder: LinkedList$1<LRUCacheItem$2<TKey, TValue>> = null;
	private _cache: FastIterationDictionary$2<TKey, LRUCacheItem$2<TKey, TValue>> = null;
	get innerCache(): FastIterationDictionary$2<TKey, LRUCacheItem$2<TKey, TValue>> {
		return this._cache;
	}
	containsKey(key: TKey): boolean {
		return this._cache.containsKey(key);
	}
	item(key: TKey, value?: TValue): TValue {
		if (arguments.length === 2) {
			if (!this._cache.containsKey(key)) {
				let item = new LRUCacheItem$2<TKey, TValue>(this.$tKey, this.$tValue);
				item.value = value;
				item.key = key;
				this._usedOrder.addFirst(item);
				item.node = this._usedOrder.first;
				this._cache.add(key, item);
			} else {
				let oldItem = this.item(key);
				this._cache.item(key).value = value;
			}
			while (this._cache.count > this._maxItems) {
				this.remove(this._usedOrder.last.value.key);
			}
			return value;
		} else {
			if (!this._cache.containsKey(key)) {
				return Type.getDefaultValue<TValue>(this.$tValue);
			}
			let ret = this._cache.item(key);
			let node = ret.node;
			this._usedOrder.remove(node);
			this._usedOrder.addFirst(node.value);
			ret.node = this._usedOrder.first;
			return ret.value;
		}
	}
	remove(key: TKey): void {
		if (!this._cache.containsKey(key)) {
			return;
		}
		let item = this._cache.item(key);
		this._usedOrder.remove(item.node);
		this._cache.remove(item.key);
	}
	clear(): void {
		this._cache.clear();
		this._usedOrder = new LinkedList$1<LRUCacheItem$2<TKey, TValue>>((<any>LRUCacheItem$2).$type.specialize(this.$tKey, this.$tValue));
	}
	get count(): number {
		return this._cache.count;
	}
}


