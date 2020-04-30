/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available types of trend lines supported by series.
 */
export enum TrendLineType {
	/**
	 * No trend line will be displayed.
	 */
	None = 0,
	/**
	 * Linear fit.
	 */
	LinearFit = 1,
	/**
	 * Quadratic polynomial fit.
	 */
	QuadraticFit = 2,
	/**
	 * Cubic polynomial fit.
	 */
	CubicFit = 3,
	/**
	 * Quartic polynomial fit.
	 */
	QuarticFit = 4,
	/**
	 * Quintic polynomial fit.
	 */
	QuinticFit = 5,
	/**
	 * Logarithmic fit.
	 */
	LogarithmicFit = 6,
	/**
	 * Exponential fit.
	 */
	ExponentialFit = 7,
	/**
	 * Powerlaw fit.
	 */
	PowerLawFit = 8,
	/**
	 * Simple moving average.
	 */
	SimpleAverage = 9,
	/**
	 * Exponential moving average.
	 */
	ExponentialAverage = 10,
	/**
	 * Modified moving average.
	 */
	ModifiedAverage = 11,
	/**
	 * Cumulative moving average.
	 */
	CumulativeAverage = 12,
	/**
	 * Weighted moving average.
	 */
	WeightedAverage = 13
}

/**
 * @hidden 
 */
export let TrendLineType_$type = markEnum('TrendLineType', 'None,0|LinearFit,1|QuadraticFit,2|CubicFit,3|QuarticFit,4|QuinticFit,5|LogarithmicFit,6|ExponentialFit,7|PowerLawFit,8|SimpleAverage,9|ExponentialAverage,10|ModifiedAverage,11|CumulativeAverage,12|WeightedAverage,13');


