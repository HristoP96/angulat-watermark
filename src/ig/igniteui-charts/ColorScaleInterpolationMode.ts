/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available modes of interpolation on a color scale.
 */
export enum ColorScaleInterpolationMode {
	/**
	 * Select one of the colors in the palette.
	 */
	Select = 0,
	/**
	 * Interpolate between colors in the palette using RGB interpolation.
	 */
	InterpolateRGB = 1,
	/**
	 * Interpolate between colors in the palette using HSV interpolation.
	 */
	InterpolateHSV = 2
}

/**
 * @hidden 
 */
export let ColorScaleInterpolationMode_$type = markEnum('ColorScaleInterpolationMode', 'Select,0|InterpolateRGB,1|InterpolateHSV,2');


