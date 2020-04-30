/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumeration defining different positions a column can be fixed against.
 */
export enum PinnedPositions {
	/**
	 * The column is not fixed.
	 */
	None = 0,
	/**
	 * The column is pinned against the left side of the grid.
	 */
	Left = 1,
	/**
	 * The column is pinned against the right side of the grid.
	 */
	Right = 2
}

/**
 * @hidden 
 */
export let PinnedPositions_$type = markEnum('PinnedPositions', 'None,0|Left,1|Right,2');


