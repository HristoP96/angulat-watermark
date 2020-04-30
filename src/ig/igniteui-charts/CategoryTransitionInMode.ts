/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available transition effects that can applied to initial rendering of a series
 */
export enum CategoryTransitionInMode {
	/**
	 * Series transitions in an automatically chosen based on type of series and its orientation
	 */
	Auto = 0,
	/**
	 * Series transitions in from the reference value of the value axis.
	 */
	FromZero = 1,
	/**
	 * Series sweeps in from the left
	 */
	SweepFromLeft = 2,
	/**
	 * Series sweeps in from the right
	 */
	SweepFromRight = 3,
	/**
	 * Series sweeps in from the top.
	 */
	SweepFromTop = 4,
	/**
	 * Series sweeps in from the bottom.
	 */
	SweepFromBottom = 5,
	/**
	 * Series sweeps in from the center.
	 */
	SweepFromCenter = 6,
	/**
	 * Series accordions in from the left.
	 */
	AccordionFromLeft = 7,
	/**
	 * Series accordions in from the right.
	 */
	AccordionFromRight = 8,
	/**
	 * Series accordions in from the top.
	 */
	AccordionFromTop = 9,
	/**
	 * Series accordions in from the bottom.
	 */
	AccordionFromBottom = 10,
	/**
	 * Series expands from the value midpoints.
	 */
	Expand = 11,
	/**
	 * Series sweeps in from the category axis minimum.
	 */
	SweepFromCategoryAxisMinimum = 12,
	/**
	 * Series sweeps in from the category axis maximum.
	 */
	SweepFromCategoryAxisMaximum = 13,
	/**
	 * Series sweeps in from the value axis minimum.
	 */
	SweepFromValueAxisMinimum = 14,
	/**
	 * Series sweeps in from the value axis maximum.
	 */
	SweepFromValueAxisMaximum = 15,
	/**
	 * Series accordions in from the category axis minimum.
	 */
	AccordionFromCategoryAxisMinimum = 16,
	/**
	 * Series accordions in from the category axis maximum.
	 */
	AccordionFromCategoryAxisMaximum = 17,
	/**
	 * Series accordions in from the value axis minimum.
	 */
	AccordionFromValueAxisMinimum = 18,
	/**
	 * Series accordions in from the value axis maximum.
	 */
	AccordionFromValueAxisMaximum = 19
}

/**
 * @hidden 
 */
export let CategoryTransitionInMode_$type = markEnum('CategoryTransitionInMode', 'Auto,0|FromZero,1|SweepFromLeft,2|SweepFromRight,3|SweepFromTop,4|SweepFromBottom,5|SweepFromCenter,6|AccordionFromLeft,7|AccordionFromRight,8|AccordionFromTop,9|AccordionFromBottom,10|Expand,11|SweepFromCategoryAxisMinimum,12|SweepFromCategoryAxisMaximum,13|SweepFromValueAxisMinimum,14|SweepFromValueAxisMaximum,15|AccordionFromCategoryAxisMinimum,16|AccordionFromCategoryAxisMaximum,17|AccordionFromValueAxisMinimum,18|AccordionFromValueAxisMaximum,19');


