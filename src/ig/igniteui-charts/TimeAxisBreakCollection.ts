/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { TimeAxisBreak } from "./TimeAxisBreak";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class TimeAxisBreakCollection extends ObservableCollection$1<TimeAxisBreak> {
	static $t: Type = markType(TimeAxisBreakCollection, 'TimeAxisBreakCollection', (<any>ObservableCollection$1).$type.specialize((<any>TimeAxisBreak).$type));
	constructor() {
		super((<any>TimeAxisBreak).$type, 0);
	}
}


