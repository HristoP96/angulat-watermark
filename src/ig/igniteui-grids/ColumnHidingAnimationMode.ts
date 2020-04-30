/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how column hiding is animated.
 */
export enum ColumnHidingAnimationMode {
	/**
	 * The correct animation mode is automatically selected.
	 */
	Auto = 0,
	/**
	 * No animation is performed.
	 */
	None = 1,
	/**
	 * The cells slide to the left.
	 */
	SlideToLeft = 2,
	/**
	 * The cells slide to the right.
	 */
	SlideToRight = 3,
	/**
	 * The cells slide to the top.
	 */
	SlideToTop = 4,
	/**
	 * The cells slide to the bottom.
	 */
	SlideToBottom = 5,
	/**
	 * The cells fade out.
	 */
	FadeOut = 6,
	/**
	 * The cells slide to the left and fade out.
	 */
	SlideToLeftAndFadeOut = 7,
	/**
	 * The cells slide to the right and fade out.
	 */
	SlideToRightAndFadeOut = 8,
	/**
	 * The cells slide to the top and fade out.
	 */
	SlideToTopAndFadeOut = 9,
	/**
	 * The cells slide to the bottom and fade out.
	 */
	SlideToBottomAndFadeOut = 10
}

/**
 * @hidden 
 */
export let ColumnHidingAnimationMode_$type = markEnum('ColumnHidingAnimationMode', 'Auto,0|None,1|SlideToLeft,2|SlideToRight,3|SlideToTop,4|SlideToBottom,5|FadeOut,6|SlideToLeftAndFadeOut,7|SlideToRightAndFadeOut,8|SlideToTopAndFadeOut,9|SlideToBottomAndFadeOut,10');


