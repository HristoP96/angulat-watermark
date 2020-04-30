/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates the built in easing type to use for an animation.
 */
export enum GridEasingFunctionType {
	/**
	 * Use linear easing.
	 */
	Linear = 0,
	/**
	 * Use cubic in/out easing.
	 */
	CubicInOut = 1,
	/**
	 * Use exponential in/out easing.
	 */
	ExponentialInOut = 2,
	/**
	 * Use circle in/out easing.
	 */
	CircleInOut = 3
}

/**
 * @hidden 
 */
export let GridEasingFunctionType_$type = markEnum('GridEasingFunctionType', 'Linear,0|CubicInOut,1|ExponentialInOut,2|CircleInOut,3');


