/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Number_$type, Type, markType } from "igniteui-core/type";
import { IHasHighLowValueCategory, IHasHighLowValueCategory_$type } from "./IHasHighLowValueCategory";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class DefaultHighLowValueProvider extends Base implements IHasHighLowValueCategory {
	static $t: Type = markType(DefaultHighLowValueProvider, 'DefaultHighLowValueProvider', (<any>Base).$type, [IHasHighLowValueCategory_$type]);
	get highColumn(): IList$1<number> {
		return new List$1<number>(Number_$type, 0);
	}
	get lowColumn(): IList$1<number> {
		return new List$1<number>(Number_$type, 0);
	}
}


