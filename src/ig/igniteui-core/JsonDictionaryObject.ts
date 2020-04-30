/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
import { IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, String_$type, fromEnum, Type, markType } from "./type";

/**
 * @hidden 
 */
export class JsonDictionaryObject extends JsonDictionaryItem {
	static $t: Type = markType(JsonDictionaryObject, 'JsonDictionaryObject', (<any>JsonDictionaryItem).$type);
	private _items: Dictionary$2<string, JsonDictionaryItem> = new Dictionary$2<string, JsonDictionaryItem>(String_$type, (<any>JsonDictionaryItem).$type, 0);
	constructor() {
		super();
	}
	addItem(key: string, item: JsonDictionaryItem): void {
		this._items.item(key, item);
	}
	removeItem(key: string): void {
		this._items.removeItem(key);
	}
	clearItems(): void {
		this._items.clear();
	}
	item(key: string, value?: JsonDictionaryItem): JsonDictionaryItem {
		if (arguments.length === 2) {
			this._items.item(key, value);
			return value;
		} else {
			return this._items.item(key);
		}
	}
	containsKey(key: string): boolean {
		return this._items.containsKey(key);
	}
	getKeys(): string[] {
		let keys: List$1<string> = new List$1<string>(String_$type, 0);
		for (let key of fromEnum<string>(this._items.keys)) {
			keys.add(key);
		}
		return keys.toArray();
	}
}


