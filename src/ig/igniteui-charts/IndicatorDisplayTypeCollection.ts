/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { IndicatorDisplayType, IndicatorDisplayType_$type } from "./IndicatorDisplayType";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class IndicatorDisplayTypeCollection extends ObservableCollection$1<IndicatorDisplayType> {
	static $t: Type = markType(IndicatorDisplayTypeCollection, 'IndicatorDisplayTypeCollection', (<any>ObservableCollection$1).$type.specialize(IndicatorDisplayType_$type));
	constructor() {
		super(IndicatorDisplayType_$type, 0);
	}
}


