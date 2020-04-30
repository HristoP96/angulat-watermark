/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { Tuple$2 } from "./Tuple$2";
import { Tuple$3 } from "./Tuple$3";

/**
 * @hidden 
 */
export class Tuple extends Base {
	static $t: Type = markType(Tuple, 'Tuple');
	static create$2<T1, T2>($t1: Type, $t2: Type, item1: T1, item2: T2): Tuple$2<T1, T2> {
		return new Tuple$2<T1, T2>($t1, $t2, item1, item2);
	}
	static create$3<T1, T2, T3>($t1: Type, $t2: Type, $t3: Type, item1: T1, item2: T2, item3: T3): Tuple$3<T1, T2, T3> {
		return new Tuple$3<T1, T2, T3>($t1, $t2, $t3, item1, item2, item3);
	}
}


