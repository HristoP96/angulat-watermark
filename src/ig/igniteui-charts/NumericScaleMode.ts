/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available scaling behaviors of a numeric axis.
 */
export enum NumericScaleMode {
	/**
	 * Scale values on a linear number line.
	 */
	Linear = 0,
	/**
	 * Scale values on a logarithmic number line.
	 */
	Logarithmic = 1
}

/**
 * @hidden 
 */
export let NumericScaleMode_$type = markEnum('NumericScaleMode', 'Linear,0|Logarithmic,1');


