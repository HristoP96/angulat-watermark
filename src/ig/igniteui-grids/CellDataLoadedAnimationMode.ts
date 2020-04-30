/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how data loaded animations are displayed.
 */
export enum CellDataLoadedAnimationMode {
	/**
	 * The correct animation mode is automatically selected.
	 */
	Auto = 0,
	/**
	 * No animation is performed.
	 */
	None = 1,
	/**
	 * The previous value and the next value are crossfaded between.
	 */
	CrossFade = 2
}

/**
 * @hidden 
 */
export let CellDataLoadedAnimationMode_$type = markEnum('CellDataLoadedAnimationMode', 'Auto,0|None,1|CrossFade,2');


