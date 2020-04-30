/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available methods of plotting data with unknown values in a series.  
 * <para>Double.NaN and null are examples of unknown values.</para>
 */
export enum UnknownValuePlotting {
	/**
	 * Plot the unknown value as the midpoint between surrounding known values using linear interpolation.
	 */
	LinearInterpolate = 0,
	/**
	 * Do not plot the unknown value on the chart.
	 */
	DontPlot = 1
}

/**
 * @hidden 
 */
export let UnknownValuePlotting_$type = markEnum('UnknownValuePlotting', 'LinearInterpolate,0|DontPlot,1');


