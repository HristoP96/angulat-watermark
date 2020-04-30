/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { stringContains, stringReplace, stringIsNullOrEmpty } from "igniteui-core/string";
import { tryParseNumber } from "igniteui-core/number";

/**
 * @hidden 
 */
export class ColumnWidth extends Base {
	static $t: Type = markType(ColumnWidth, 'ColumnWidth');
	private _externalObject: any = null;
	get externalObject(): any {
		return this._externalObject;
	}
	set externalObject(value: any) {
		this._externalObject = value;
	}
	private _isStarSized: boolean = false;
	get isStarSized(): boolean {
		return this._isStarSized;
	}
	set isStarSized(value: boolean) {
		this._isStarSized = value;
	}
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
	}
	private _minimumWidth: number = 0;
	get minimumWidth(): number {
		return this._minimumWidth;
	}
	set minimumWidth(value: number) {
		this._minimumWidth = value;
	}
	static get $default(): ColumnWidth {
		return ((() => {
			let $ret = new ColumnWidth();
			$ret.isStarSized = true;
			$ret.minimumWidth = 0;
			$ret.value = 1;
			return $ret;
		})());
	}
	static parse(value: string): ColumnWidth {
		if (value == null) {
			return new ColumnWidth();
		}
		value = value.trim();
		let isStar = stringContains(value, "*");
		if (isStar || stringContains(value, "min=") || stringContains(value, "Min=") || stringContains(value, ",")) {
			let cw = new ColumnWidth();
			cw.isStarSized = isStar;
			value = stringReplace(value, " ", "");
			value = stringReplace(value, "min=", ",");
			value = stringReplace(value, "Min=", ",");
			value = stringReplace(value, "*,,", "*");
			value = stringReplace(value, "*,", "*");
			value = stringReplace(value, ",,", ",");
			let preParts = value.split('*');
			let parts: List$1<string> = new List$1<string>(String_$type, 0);
			for (let i = 0; i < preParts.length; i++) {
				let subParts = preParts[i].split(',');
				for (let j = 0; j < subParts.length; j++) {
					parts.add(subParts[j]);
				}
			}
			let val = parts._inner[0];
			if (val != null) {
				val = val.trim();
			}
			let res: number;
			if (stringIsNullOrEmpty(val)) {
				res = 1;
			} else {
				if (!((() => { let $ret = tryParseNumber(val, res); res = $ret.p1; return $ret.ret; })())) {
					return new ColumnWidth();
				}
			}
			cw.value = res;
			if (parts.count > 1 && parts._inner[1] != null) {
				parts._inner[1] = stringReplace(parts._inner[1], ">", "");
				let min: number;
				if (((() => { let $ret = tryParseNumber(parts._inner[1], min); min = $ret.p1; return $ret.ret; })())) {
					cw.minimumWidth = min;
				}
			}
			return cw;
		} else {
			let cw1 = new ColumnWidth();
			cw1.isStarSized = false;
			let res1: number;
			if (!((() => { let $ret = tryParseNumber(value, res1); res1 = $ret.p1; return $ret.ret; })())) {
				return new ColumnWidth();
			}
			cw1.value = res1;
			return cw1;
		}
	}
}


