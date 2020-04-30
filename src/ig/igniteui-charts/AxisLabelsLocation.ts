/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available locations of the axis labels in the chart.
 */
export enum AxisLabelsLocation {
	/**
	 * Places the axis labels at the top, outside of the plotting area.
	 */
	OutsideTop = 0,
	/**
	 * Places the axis labels at the bottom, outside of the plotting area
	 */
	OutsideBottom = 1,
	/**
	 * Places the axis labels to the left, outside of the plotting area.
	 */
	OutsideLeft = 2,
	/**
	 * Places the axis labels to the right, outside of the plotting area.
	 */
	OutsideRight = 3,
	/**
	 * Places the axis labels inside the plotting area above the axis line.
	 * CrossingAxis should be set for this setting to take effect.
	 */
	InsideTop = 4,
	/**
	 * Places the axis labels inside the plotting area below the axis line.
	 * CrossingAxis should be set for this setting to take effect.
	 */
	InsideBottom = 5,
	/**
	 * Places the axis labels inside the plotting area and to the left of the axis line.
	 * CrossingAxis should be set for this setting to take effect.
	 */
	InsideLeft = 6,
	/**
	 * Places the axis labels inside the plotting area and to the right of the axis line.
	 * CrossingAxis should be set for this setting to take effect.
	 */
	InsideRight = 7
}

/**
 * @hidden 
 */
export let AxisLabelsLocation_$type = markEnum('AxisLabelsLocation', 'OutsideTop,0|OutsideBottom,1|OutsideLeft,2|OutsideRight,3|InsideTop,4|InsideBottom,5|InsideLeft,6|InsideRight,7');


