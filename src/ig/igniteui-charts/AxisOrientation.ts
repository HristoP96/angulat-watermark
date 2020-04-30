/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available orientations for an axis.
 */
export enum AxisOrientation {
	/**
	 * Specifies a horizontal axis.
	 */
	Horizontal = 0,
	/**
	 * Specifies a vertical axis.
	 */
	Vertical = 1,
	/**
	 * Specifies an angular axis used by the polar series.
	 */
	Angular = 2,
	/**
	 * Specifies a radial axis used by radial series.
	 */
	Radial = 3
}

/**
 * @hidden 
 */
export let AxisOrientation_$type = markEnum('AxisOrientation', 'Horizontal,0|Vertical,1|Angular,2|Radial,3');


