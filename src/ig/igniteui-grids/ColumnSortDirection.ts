/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates the direction a column should be sorted in.
 */
export enum ColumnSortDirection {
	/**
	 * Not sort applied.
	 */
	None = 0,
	/**
	 * Sort is ascending.
	 */
	Ascending = 1,
	/**
	 * Sort is descending.
	 */
	Descending = 2
}

/**
 * @hidden 
 */
export let ColumnSortDirection_$type = markEnum('ColumnSortDirection', 'None,0|Ascending,1|Descending,2');


