/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how columns animate into view.
 */
export enum ColumnShowingAnimationMode {
	/**
	 * Automatically selects the correct animation mode.
	 */
	Auto = 0,
	/**
	 * No animation should be performed.
	 */
	None = 1,
	/**
	 * Cells slide in from the left.
	 */
	SlideFromLeft = 2,
	/**
	 * Cells slide in from the right.
	 */
	SlideFromRight = 3,
	/**
	 * Cells slide in from the top.
	 */
	SlideFromTop = 4,
	/**
	 * Cells slide in from the bottom.
	 */
	SlideFromBottom = 5,
	/**
	 * Cells fade in.
	 */
	FadeIn = 6,
	/**
	 * Cells slide in from the left and fade in.
	 */
	SlideFromLeftAndFadeIn = 7,
	/**
	 * Cells slide in from the right and fade in.
	 */
	SlideFromRightAndFadeIn = 8,
	/**
	 * Cells slide in from the top and fade in.
	 */
	SlideFromTopAndFadeIn = 9,
	/**
	 * Cells slide in from the bottom and fade in.
	 */
	SlideFromBottomAndFadeIn = 10
}

/**
 * @hidden 
 */
export let ColumnShowingAnimationMode_$type = markEnum('ColumnShowingAnimationMode', 'Auto,0|None,1|SlideFromLeft,2|SlideFromRight,3|SlideFromTop,4|SlideFromBottom,5|FadeIn,6|SlideFromLeftAndFadeIn,7|SlideFromRightAndFadeIn,8|SlideFromTopAndFadeIn,9|SlideFromBottomAndFadeIn,10');


