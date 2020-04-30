/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available positions on the crossing axis at which the category tooltip can be displayed.
 */
export enum CategoryTooltipLayerPosition {
	/**
	 * A position is selected automatically
	 */
	Auto = 0,
	/**
	 * Displays at the outside start of the axis.
	 */
	OutsideStart = 1,
	/**
	 * Displays at the inside start of the axis.
	 */
	InsideStart = 2,
	/**
	 * Displays at the inside end of the axis.
	 */
	InsideEnd = 3,
	/**
	 * Displays at the outside end of the axis.
	 */
	OutsideEnd = 4
}

/**
 * @hidden 
 */
export let CategoryTooltipLayerPosition_$type = markEnum('CategoryTooltipLayerPosition', 'Auto,0|OutsideStart,1|InsideStart,2|InsideEnd,3|OutsideEnd,4');


