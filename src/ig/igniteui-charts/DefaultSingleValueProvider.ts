/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Number_$type, Type, markType } from "igniteui-core/type";
import { IHasSingleValueCategory, IHasSingleValueCategory_$type } from "./IHasSingleValueCategory";
import { List$1 } from "igniteui-core/List$1";

/**
 * @hidden 
 */
export class DefaultSingleValueProvider extends Base implements IHasSingleValueCategory {
	static $t: Type = markType(DefaultSingleValueProvider, 'DefaultSingleValueProvider', (<any>Base).$type, [IHasSingleValueCategory_$type]);
	get valueColumn(): IList$1<number> {
		return new List$1<number>(Number_$type, 0);
	}
}


