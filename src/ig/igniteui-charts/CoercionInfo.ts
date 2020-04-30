/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CoercionInfo extends Base {
	static $t: Type = markType(CoercionInfo, 'CoercionInfo');
	private _memberPath: string = null;
	get memberPath(): string {
		return this._memberPath;
	}
	set memberPath(value: string) {
		this._memberPath = value;
	}
	private _coercionMethod: (arg1: any) => any = null;
	get coercionMethod(): (arg1: any) => any {
		return this._coercionMethod;
	}
	set coercionMethod(value: (arg1: any) => any) {
		this._coercionMethod = value;
	}
}


