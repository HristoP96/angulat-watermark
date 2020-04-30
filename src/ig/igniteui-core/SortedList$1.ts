/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { IOrderedEnumerable$1, IOrderedEnumerable$1_$type } from "./IOrderedEnumerable$1";
import { IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator, IEnumerator_$type, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class SortedList$1<TElement> extends List$1<TElement> implements IOrderedEnumerable$1<TElement> {
	static $t: Type = markType(SortedList$1, 'SortedList$1', (<any>List$1).$type.specialize(0), [IOrderedEnumerable$1_$type.specialize(0)]);
	protected $tElement: Type = null;
	constructor($tElement: Type, source: IEnumerable$1<TElement>) {
		super($tElement, 1, source);
		this.$tElement = $tElement;
		this.$type = this.$type.specialize(this.$tElement);
	}
	getEnumeratorObject(): IEnumerator {
		return super.getEnumerator();
	}
}


