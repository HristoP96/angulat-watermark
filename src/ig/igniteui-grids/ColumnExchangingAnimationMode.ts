/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enumerates the options for how column exchanging is animated.
 */
export enum ColumnExchangingAnimationMode {
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
	 * The cells crossfade.
	 */
	Crossfade = 6,
	/**
	 * The cells slide to the left and crossfade.
	 */
	SlideToLeftAndCrossfade = 7,
	/**
	 * The cells slide to the right and crossfade.
	 */
	SlideToRightAndCrossfade = 8,
	/**
	 * The cells slide to the top and crossfade.
	 */
	SlideToTopAndCrossfade = 9,
	/**
	 * The cells slide to the bottom and crossfade.
	 */
	SlideToBottomAndCrossfade = 10
}

/**
 * @hidden 
 */
export let ColumnExchangingAnimationMode_$type = markEnum('ColumnExchangingAnimationMode', 'Auto,0|None,1|SlideToLeft,2|SlideToRight,3|SlideToTop,4|SlideToBottom,5|Crossfade,6|SlideToLeftAndCrossfade,7|SlideToRightAndCrossfade,8|SlideToTopAndCrossfade,9|SlideToBottomAndCrossfade,10');


