/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how cell selection is animated.
 */
export enum CellSelectionAnimationMode {
	/**
	 * The correct animation mode is automatically selected.
	 */
	Auto = 0,
	/**
	 * No animation is performed.
	 */
	None = 1,
	/**
	 * The selection color and the normal background color are blended between.
	 */
	ColorBlend = 2
}

/**
 * @hidden 
 */
export let CellSelectionAnimationMode_$type = markEnum('CellSelectionAnimationMode', 'Auto,0|None,1|ColorBlend,2');


