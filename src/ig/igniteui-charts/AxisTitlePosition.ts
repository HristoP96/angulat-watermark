/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available positions for axis title in respect to axis labels
 */
export enum AxisTitlePosition {
	/**
	 * Displays the axis title in automatically selected position based on orientation and location of the axis:
	 * <para/> - left title position for vertical axis located on left of the chart, 
	 * <para/> - right title position for vertical axis located on right of the chart, 
	 * <para/> - top title position for horizontal axis located on top of the chart,
	 * <para/> - bottom title position for horizontal axis located on bottom of the chart,
	 */
	Auto = 0,
	/**
	 * Displays the axis title to the left of labels on vertical axis
	 */
	Left = 1,
	/**
	 * Displays the axis title to the right of labels on vertical axis
	 */
	Right = 2,
	/**
	 * Displays the axis title on top of labels on horizontal axis
	 */
	Top = 3,
	/**
	 * Displays the axis title on bottom of labels on horizontal axis
	 */
	Bottom = 4
}

/**
 * @hidden 
 */
export let AxisTitlePosition_$type = markEnum('AxisTitlePosition', 'Auto,0|Left,1|Right,2|Top,3|Bottom,4');


