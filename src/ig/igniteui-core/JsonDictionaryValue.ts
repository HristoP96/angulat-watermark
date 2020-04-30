/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { JsonDictionaryItem } from "./JsonDictionaryItem";
import { Base, Type, markType } from "./type";
import { JsonDictionaryValueType } from "./JsonDictionaryValueType";

/**
 * @hidden 
 */
export class JsonDictionaryValue extends JsonDictionaryItem {
	static $t: Type = markType(JsonDictionaryValue, 'JsonDictionaryValue', (<any>JsonDictionaryItem).$type);
	constructor() {
		super();
	}
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		this._value = value;
	}
	private _type: JsonDictionaryValueType = <JsonDictionaryValueType>0;
	get type(): JsonDictionaryValueType {
		return this._type;
	}
	set type(value: JsonDictionaryValueType) {
		this._type = value;
	}
}


