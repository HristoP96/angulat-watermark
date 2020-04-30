/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates the activation mode to use for the grid.
 */
export enum GridActivationMode {
	/**
	 * No activation should be peformed based on interaction.
	 */
	None = 0,
	/**
	 * A single cell is permitted to be activated at a time.
	 */
	Cell = 1
}

/**
 * @hidden 
 */
export let GridActivationMode_$type = markEnum('GridActivationMode', 'None,0|Cell,1');


