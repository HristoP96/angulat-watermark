/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how changes to column properties are animated.
 */
export enum ColumnPropertyUpdatingAnimationMode {
	/**
	 * Automatically decides on the animation mode to use.
	 */
	Auto = 0,
	/**
	 * No animation is performed.
	 */
	None = 1,
	/**
	 * The previous value and the next value are interpolated between.
	 */
	Interpolate = 2,
	/**
	 * Deep values within the previous and next value are interpolated between.
	 */
	InterpolateDeep = 3
}

/**
 * @hidden 
 */
export let ColumnPropertyUpdatingAnimationMode_$type = markEnum('ColumnPropertyUpdatingAnimationMode', 'Auto,0|None,1|Interpolate,2|InterpolateDeep,3');


