/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IDictionary, IDictionary_$type, IEnumerable$1, IEnumerable$1_$type, String_$type, Type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class Hashtable extends Base implements IDictionary {
	static $t: Type = markType(Hashtable, 'Hashtable', (<any>Base).$type, [IDictionary_$type]);
	private _dictionary: Dictionary$2<string, any> = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	constructor() {
		super();
	}
	get keys(): IEnumerable$1<string> {
		return this._dictionary.keys;
	}
	remove(idx: string): void {
		this._dictionary.removeItem(idx);
	}
	add(idx: string, value: any): void {
		this._dictionary.addItem(idx, value);
	}
	contains(idx: string): boolean {
		return this._dictionary.containsKey(idx);
	}
	item(idx: string, value?: any): any {
		if (arguments.length === 2) {
			this._dictionary.item(idx, value);
			return value;
		} else {
			return this._dictionary.item(idx);
		}
	}
}


