/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available modes for selecting slices.
 */
export enum SliceSelectionMode {
	/**
	 * Slices can be programmatically selected but cannot be selected through the UI.
	 */
	Manual = 0,
	/**
	 * Single slice can be selected through the UI.
	 */
	Single = 1,
	/**
	 * Multiple slices can be selected through the UI.
	 */
	Multiple = 2
}

/**
 * @hidden 
 */
export let SliceSelectionMode_$type = markEnum('SliceSelectionMode', 'Manual,0|Single,1|Multiple,2');


