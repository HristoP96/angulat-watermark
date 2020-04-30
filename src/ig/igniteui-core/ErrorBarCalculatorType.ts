/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available types of error bar calculators.
 */
export enum ErrorBarCalculatorType {
	/**
	 * A calculator type that provides a fixed value.
	 */
	Fixed = 0,
	/**
	 * A calculator type that provides a fixed percentage of each input value
	 */
	Percentage = 1,
	/**
	 * A calculator type that provides the input values directly.
	 */
	Data = 2,
	/**
	 * A calculator type that provides the standard deviation of the input values.
	 */
	StandardDeviation = 3,
	/**
	 * A calculator type that provides the standard error of the input values.
	 */
	StandardError = 4
}

/**
 * @hidden 
 */
export let ErrorBarCalculatorType_$type = markEnum('ErrorBarCalculatorType', 'Fixed,0|Percentage,1|Data,2|StandardDeviation,3|StandardError,4');


