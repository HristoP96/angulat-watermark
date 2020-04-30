/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, Type } from "./type";

/**
 * @hidden 
 */
export interface IGrouping$2<TKey, TElement> extends IEnumerable$1<TElement>, IEnumerable { 
	readonly key: TKey;
}

/**
 * @hidden 
 */
export let IGrouping$2_$type = new Type(null, 'IGrouping$2', null, [IEnumerable$1_$type.specialize(1), IEnumerable_$type]);


