/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { IList$1, IList$1_$type, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Collection$1<T> extends List$1<T> {
	static $t: Type = markType(Collection$1, 'Collection$1', (<any>List$1).$type.specialize(0));
	protected $t: Type = null;
	constructor($t: Type) {
		super($t, 0);
		this.$t = $t;
		this.$type = this.$type.specialize(this.$t);
	}
	protected get items(): IList$1<T> {
		return this;
	}
}


