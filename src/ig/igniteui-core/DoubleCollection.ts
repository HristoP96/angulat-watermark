/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { Base, Number_$type, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DoubleCollection extends List$1<number> {
	static $t: Type = markType(DoubleCollection, 'DoubleCollection', (<any>List$1).$type.specialize(Number_$type));
	constructor() {
		super(Number_$type, 0);
	}
}


