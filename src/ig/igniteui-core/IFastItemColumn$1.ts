/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, Type } from "./type";
import { IFastItemColumnPropertyName, IFastItemColumnPropertyName_$type } from "./IFastItemColumnPropertyName";
import { IGetItemAtIndex, IGetItemAtIndex_$type } from "./IGetItemAtIndex";

/**
 * @hidden 
 */
export interface IFastItemColumn$1<T> extends IList$1<T>, IFastItemColumnPropertyName, IGetItemAtIndex { 
	readonly minimum: T;
readonly maximum: T;
readonly mayContainUnknowns: boolean;
asArray(): T[];
}

/**
 * @hidden 
 */
export let IFastItemColumn$1_$type = new Type(null, 'IFastItemColumn$1', null, [IList$1_$type.specialize(0), IFastItemColumnPropertyName_$type, IGetItemAtIndex_$type]);


