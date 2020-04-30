/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available behaviors for setting direction of linear gradient brush or a radial gradient brush
 */
export enum GradientDirection {
	/**
	 * Specifies from top to bottom direction of gradient brush
	 */
	TopBottom = 0,
	/**
	 * Specifies from bottom to top direction of gradient brush
	 */
	BottomTop = 1,
	/**
	 * Specifies from left to right direction of gradient brush
	 */
	LeftRight = 2,
	/**
	 * Specifies from right to left direction of gradient brush
	 */
	RightLeft = 3,
	/**
	 * Specifies radial gradient brush
	 */
	Radial = 4
}

/**
 * @hidden 
 */
export let GradientDirection_$type = markEnum('GradientDirection', 'TopBottom,0|BottomTop,1|LeftRight,2|RightLeft,3|Radial,4');


