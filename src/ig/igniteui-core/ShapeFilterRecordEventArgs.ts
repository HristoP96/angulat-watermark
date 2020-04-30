/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { ShapefileRecord } from "./ShapefileRecord";

/**
 * @hidden 
 */
export class ShapeFilterRecordEventArgs extends Base {
	static $t: Type = markType(ShapeFilterRecordEventArgs, 'ShapeFilterRecordEventArgs');
	private _record: ShapefileRecord = null;
	get record(): ShapefileRecord {
		return this._record;
	}
	set record(value: ShapefileRecord) {
		this._record = value;
	}
	private _shouldInclude: boolean = false;
	get shouldInclude(): boolean {
		return this._shouldInclude;
	}
	set shouldInclude(value: boolean) {
		this._shouldInclude = value;
	}
}


