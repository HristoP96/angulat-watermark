/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Indicates which axis type is suggested in a data series.
 */
export enum DataSeriesAxisType {
	/**
	 * Used when a category axis type is suggested.
	 */
	Category = 0,
	/**
	 * Used when a linear axis type is suggested.
	 */
	Linear = 1,
	/**
	 * Used when a logarithmic axis type is suggested.
	 */
	Logarithmic = 2,
	/**
	 * Used when a continuous date time axis type is suggested.
	 */
	ContinuousDateTime = 3,
	/**
	 * Used when a discrete date time axis type is suggested.
	 */
	DiscreteDateTime = 4
}

/**
 * @hidden 
 */
export let DataSeriesAxisType_$type = markEnum('DataSeriesAxisType', 'Category,0|Linear,1|Logarithmic,2|ContinuousDateTime,3|DiscreteDateTime,4');


