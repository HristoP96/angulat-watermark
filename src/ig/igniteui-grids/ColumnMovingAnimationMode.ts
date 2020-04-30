/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how columns animate while moving.
 */
export enum ColumnMovingAnimationMode {
	/**
	 * Automatically decides on the animation mode to use.
	 */
	Auto = 0,
	/**
	 * No animation is performed.
	 */
	None = 1,
	/**
	 * The cells slide on top of the others to its desired position.
	 */
	SlideOver = 2
}

/**
 * @hidden 
 */
export let ColumnMovingAnimationMode_$type = markEnum('ColumnMovingAnimationMode', 'Auto,0|None,1|SlideOver,2');


