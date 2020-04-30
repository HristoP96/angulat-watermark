/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates how summaries are displayed inside groups.
 */
export enum GroupSummaryDisplayMode {
	/**
	 * Group summaries are displayed in a flat list in the spanning group header.
	 */
	List = 0,
	/**
	 * The group header is rendered as cells and summary values are rendered inside the cells
	 * aligned with their column.
	 */
	Cells = 1,
	/**
	 * Group summaries are displayed as summary rows at the top of the group.
	 */
	RowTop = 2,
	/**
	 * Group summaries are displayed as summary rows at the bottom of the group.
	 */
	RowBottom = 3,
	/**
	 * No summaries are displayed in the group.
	 */
	None = 4
}

/**
 * @hidden 
 */
export let GroupSummaryDisplayMode_$type = markEnum('GroupSummaryDisplayMode', 'List,0|Cells,1|RowTop,2|RowBottom,3|None,4');


