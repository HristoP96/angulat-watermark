/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Indicates how the images will be stretched.
 */
export enum ImageStretchOptions {
	/**
	 * Images stretch but try to maintain aspect ratio.
	 */
	Uniform = 0,
	/**
	 * Image fills all available space but breaks aspect ratio.
	 */
	Fill = 1,
	/**
	 * Image is displayed unstreteched.
	 */
	None = 2
}

/**
 * @hidden 
 */
export let ImageStretchOptions_$type = markEnum('ImageStretchOptions', 'Uniform,0|Fill,1|None,2');


