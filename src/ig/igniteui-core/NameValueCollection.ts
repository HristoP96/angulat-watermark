/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class NameValueCollection extends Base {
	static $t: Type = markType(NameValueCollection, 'NameValueCollection');
	private _dict: Dictionary$2<string, string> = null;
	constructor() {
		super();
		this._dict = new Dictionary$2<string, string>(String_$type, String_$type, 0);
	}
	item(name: string, value?: string): string {
		if (arguments.length === 2) {
			if (this._dict.containsKey(name)) {
				this._dict.item(name, value);
			} else {
				this._dict.addItem(name, value);
			}
			return value;
		} else {
			if (this._dict.containsKey(name)) {
				return this._dict.item(name);
			} else {
				return null;
			}
		}
	}
}


