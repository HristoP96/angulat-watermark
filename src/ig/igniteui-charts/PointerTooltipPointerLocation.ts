/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available positions to anchor the pointer to the PointerTooltip.
 */
export enum PointerTooltipPointerLocation {
	/**
	 * The anchor is decided automatically.
	 */
	Auto = 0,
	/**
	 * The anchor is top left of the content.
	 */
	TopLeft = 1,
	/**
	 * The anchor is top left of the content.
	 */
	TopMiddle = 2,
	/**
	 * The anchor is top left of the content.
	 */
	TopRight = 3,
	/**
	 * The anchor is top left of the content.
	 */
	RightTop = 4,
	/**
	 * The anchor is top left of the content.
	 */
	RightMiddle = 5,
	/**
	 * The anchor is top left of the content.
	 */
	RightBottom = 6,
	/**
	 * The anchor is top left of the content.
	 */
	BottomRight = 7,
	/**
	 * The anchor is top left of the content.
	 */
	BottomMiddle = 8,
	/**
	 * The anchor is top left of the content.
	 */
	BottomLeft = 9,
	/**
	 * The anchor is top left of the content.
	 */
	LeftBottom = 10,
	/**
	 * The anchor is top left of the content.
	 */
	LeftMiddle = 11,
	/**
	 * The anchor is top left of the content.
	 */
	LeftTop = 12
}

/**
 * @hidden 
 */
export let PointerTooltipPointerLocation_$type = markEnum('PointerTooltipPointerLocation', 'Auto,0|TopLeft,1|TopMiddle,2|TopRight,3|RightTop,4|RightMiddle,5|RightBottom,6|BottomRight,7|BottomMiddle,8|BottomLeft,9|LeftBottom,10|LeftMiddle,11|LeftTop,12');


