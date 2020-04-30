/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available modes for color interpolation.
 */
export enum InterpolationMode {
	/**
	 * Interpolation in RGB space.
	 */
	RGB = 0,
	/**
	 * Interpolation in HSV space.
	 */
	HSV = 1
}

/**
 * @hidden 
 */
export let InterpolationMode_$type = markEnum('InterpolationMode', 'RGB,0|HSV,1');


