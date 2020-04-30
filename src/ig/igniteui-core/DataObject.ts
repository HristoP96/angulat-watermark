/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { IDataObject, IDataObject_$type } from "./IDataObject";
import { Dictionary$2 } from "./Dictionary$2";

/**
 * @hidden 
 */
export class DataObject extends Base implements IDataObject {
	static $t: Type = markType(DataObject, 'DataObject', (<any>Base).$type, [IDataObject_$type]);
	private readonly _formats: Dictionary$2<string, any> = null;
	constructor() {
		super();
		this._formats = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	}
	getData(format: string): any {
		let d: any;
		if (((() => { let $ret = this._formats.tryGetValue(format, d); d = $ret.p1; return $ret.ret; })())) {
			return d;
		}
		return null;
	}
	getDataPresent(format: string): boolean {
		return this._formats.containsKey(format);
	}
	setData(format: string, data: any): void {
		this._formats.item(format, data);
	}
}


