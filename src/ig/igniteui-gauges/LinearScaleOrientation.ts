/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes the orientation of a linear scale.
 */
export enum LinearScaleOrientation {
	/**
	 * The scale has a horizontal orientation.
	 */
	Horizontal = 0,
	/**
	 * The scale has a vertical orientation.
	 */
	Vertical = 1
}

/**
 * @hidden 
 */
export let LinearScaleOrientation_$type = markEnum('LinearScaleOrientation', 'Horizontal,0|Vertical,1');


