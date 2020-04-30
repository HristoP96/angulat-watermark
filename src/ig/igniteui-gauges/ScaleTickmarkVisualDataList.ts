/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "igniteui-core/List$1";
import { ScaleTickmarkVisualData } from "./ScaleTickmarkVisualData";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class ScaleTickmarkVisualDataList extends List$1<ScaleTickmarkVisualData> {
	static $t: Type = markType(ScaleTickmarkVisualDataList, 'ScaleTickmarkVisualDataList', (<any>List$1).$type.specialize((<any>ScaleTickmarkVisualData).$type));
	constructor() {
		super((<any>ScaleTickmarkVisualData).$type, 0);
	}
}


