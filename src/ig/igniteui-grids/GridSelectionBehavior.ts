/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates the selection mode to use for the grid.
 */
export enum GridSelectionBehavior {
	/**
	 * Rows and cells are selected using a toggleable behavior. Modifier selection is ignored (CTRL and SHIFT).
	 */
	Toggle = 0,
	/**
	 * Only one row or cell is selected at a time and modifier keys are required to multi-select them.
	 */
	ModifierBased = 1
}

/**
 * @hidden 
 */
export let GridSelectionBehavior_$type = markEnum('GridSelectionBehavior', 'Toggle,0|ModifierBased,1');


