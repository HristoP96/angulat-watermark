/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { CellRange } from "./CellRange";
import { IList$1, IList$1_$type, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class GridSelectedCellRangesCollection extends ObservableCollection$1<CellRange> {
	static $t: Type = markType(GridSelectedCellRangesCollection, 'GridSelectedCellRangesCollection', (<any>ObservableCollection$1).$type.specialize((<any>CellRange).$type));
	constructor() {
		super((<any>CellRange).$type, 0);
	}
	get all(): IList$1<CellRange> {
		return this;
	}
}


