/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, fromEnum, Type, markType } from "igniteui-core/type";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { List$1 } from "igniteui-core/List$1";
import { KeyValuePair$2 } from "igniteui-core/KeyValuePair$2";

/**
 * @hidden 
 */
export class Fdc3Dictionary extends Base {
	static $t: Type = markType(Fdc3Dictionary, 'Fdc3Dictionary');
	constructor() {
		super();
		this._dictionary = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	}
	_dictionary: Dictionary$2<string, any> = null;
	getKeys(): string[] {
		let list = new List$1<string>(String_$type, 0);
		for (let item of fromEnum<KeyValuePair$2<string, any>>(this._dictionary)) {
			list.add(item.key);
		}
		return list.toArray();
	}
	getValues(): any[] {
		let list = new List$1<any>((<any>Base).$type, 0);
		for (let item of fromEnum<KeyValuePair$2<string, any>>(this._dictionary)) {
			list.add1(item.value);
		}
		return list.toArray();
	}
	item(key: string, value?: any): any {
		if (arguments.length === 2) {
			this.set(key, value);
			return value;
		} else {
			return this.get(key);
		}
	}
	get(key: string): any {
		if (!this._dictionary.containsKey(key)) {
			this.set(key, "");
		}
		if (this._dictionary.item(key) == null) {
			return "";
		}
		return this._dictionary.item(key);
	}
	getString(key: string): string {
		return this.get(key).toString();
	}
	getNumber(key: string): number {
		if (!this._dictionary.containsKey(key)) {
			this.set(key, 0);
			return 0;
		}
		if (this._dictionary.item(key) == null) {
			return 0;
		}
		return parseFloat(this._dictionary.item(key).toString());
	}
	set(key: string, value: any): void {
		if (this._dictionary.containsKey(key)) {
			this._dictionary.item(key, value);
		} else {
			this._dictionary.addItem(key, value);
		}
	}
	remove(key: string): void {
		if (this._dictionary.containsKey(key)) {
			this._dictionary.removeItem(key);
		}
	}
	contains(key: string): boolean {
		return this._dictionary.containsKey(key);
	}
}


