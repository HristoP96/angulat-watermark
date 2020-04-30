/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates what should occur on a header click event.
 */
export enum HeaderClickAction {
	/**
	 * Sorting by one column is permitted and toggles between ascending and descending.
	 */
	SortByOneColumnOnly = 0,
	/**
	 * Sorting by multiple columns is permitted and each toggle between ascending and descending.
	 */
	SortByMultipleColumns = 1,
	/**
	 * Sorting by one column is permitted and toggles between ascending, descending and unsorted.
	 */
	SortByOneColumnOnlyTriState = 2,
	/**
	 * Sorting by multiple columns is permitted and toggles between ascending, descending and unsorted.
	 */
	SortByMultipleColumnsTriState = 3,
	/**
	 * No action is triggered.
	 */
	None = 4
}

/**
 * @hidden 
 */
export let HeaderClickAction_$type = markEnum('HeaderClickAction', 'SortByOneColumnOnly,0|SortByMultipleColumns,1|SortByOneColumnOnlyTriState,2|SortByMultipleColumnsTriState,3|None,4');


