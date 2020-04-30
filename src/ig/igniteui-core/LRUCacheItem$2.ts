/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { LinkedListNode$1 } from "./LinkedListNode$1";

/**
 * @hidden 
 */
export class LRUCacheItem$2<TKey, TValue> extends Base {
	static $t: Type = markType(LRUCacheItem$2, 'LRUCacheItem$2');
	protected $tKey: Type = null;
	protected $tValue: Type = null;
	constructor($tKey: Type, $tValue: Type) {
		super();
		this.$tKey = $tKey;
		this.$tValue = $tValue;
		this.$type = this.$type.specialize(this.$tKey, this.$tValue);
	}
	private _key: TKey = null;
	get key(): TKey {
		return this._key;
	}
	set key(value: TKey) {
		this._key = value;
	}
	private _value: TValue = null;
	get value(): TValue {
		return this._value;
	}
	set value(value: TValue) {
		this._value = value;
	}
	private _node: LinkedListNode$1<LRUCacheItem$2<TKey, TValue>> = null;
	get node(): LinkedListNode$1<LRUCacheItem$2<TKey, TValue>> {
		return this._node;
	}
	set node(value: LinkedListNode$1<LRUCacheItem$2<TKey, TValue>>) {
		this._node = value;
	}
}


