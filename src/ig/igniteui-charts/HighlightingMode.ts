/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available behaviors for series highlighting depending on distance of mouse on hover operation.
 */
export enum HighlightingMode {
	/**
	 * Specifies the highlight starts on closest element of series
	 */
	Closest = 0,
	/**
	 * Specifies the highlight starts when directly over element of series
	 */
	DirectlyOver = 1
}

/**
 * @hidden 
 */
export let HighlightingMode_$type = markEnum('HighlightingMode', 'Closest,0|DirectlyOver,1');


