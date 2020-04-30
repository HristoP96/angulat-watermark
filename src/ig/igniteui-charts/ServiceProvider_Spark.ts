/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { DictionaryUtil } from "igniteui-core/dictionary";

/**
 * @hidden 
 */
export class ServiceProvider_Spark extends Base {
	static $t: Type = markType(ServiceProvider_Spark, 'ServiceProvider_Spark');
	private _dict: Map<string, any> = DictionaryUtil.dictionaryCreate();
	addService(key: string, service: any): void {
		this._dict.set(key, service);
	}
	getService(key: string): any {
		return this._dict.get(key);
	}
}


