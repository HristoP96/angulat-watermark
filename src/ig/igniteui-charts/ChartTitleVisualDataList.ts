/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "igniteui-core/List$1";
import { ChartTitleVisualData } from "./ChartTitleVisualData";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class ChartTitleVisualDataList extends List$1<ChartTitleVisualData> {
	static $t: Type = markType(ChartTitleVisualDataList, 'ChartTitleVisualDataList', (<any>List$1).$type.specialize((<any>ChartTitleVisualData).$type));
	constructor() {
		super((<any>ChartTitleVisualData).$type, 0);
	}
}


