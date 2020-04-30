/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enum used to determine positioning logic for data items which have been consolidated into a single visual element.
 */
export enum ConsolidatedItemsPosition {
	/**
	 * Consolidated Items should be positioned using their minimum value.
	 */
	Minimum = 0,
	/**
	 * Consolidated Items should be positioned using their maximum value.
	 */
	Maximum = 1,
	/**
	 * Consolidated Items should be positioned at the midpoint of the range.
	 */
	Median = 2,
	/**
	 * Consolidated Items should be positioned using the value nearest to the reference value of the corresponding axis.
	 */
	RelativeMinimum = 3,
	/**
	 * Consolidated Items should be positioned using the value farthest from the reference value of the corresponding axis.
	 */
	RelativeMaximum = 4
}

/**
 * @hidden 
 */
export let ConsolidatedItemsPosition_$type = markEnum('ConsolidatedItemsPosition', 'Minimum,0|Maximum,1|Median,2|RelativeMinimum,3|RelativeMaximum,4');


