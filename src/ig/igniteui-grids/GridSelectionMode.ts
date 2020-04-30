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
export enum GridSelectionMode {
	/**
	 * No selection should be peformed based on interaction.
	 */
	None = 0,
	/**
	 * A single row is permitted to be selected at a time from interaction.
	 */
	SingleRow = 1,
	/**
	 * Multiple rows are permitted to be selected at a time from interaction.
	 */
	MultipleRow = 2,
	/**
	 * A single cell is permitted to be selected at a time from interaction.
	 */
	SingleCell = 3,
	/**
	 * Multiple cells are permitted to be selected at a time from interaction.
	 */
	MultipleCell = 4,
	/**
	 * Multiple cells are allowed to be selected however they are stored as ranges not individual cells.
	 */
	RangeCell = 5
}

/**
 * @hidden 
 */
export let GridSelectionMode_$type = markEnum('GridSelectionMode', 'None,0|SingleRow,1|MultipleRow,2|SingleCell,3|MultipleCell,4|RangeCell,5');


