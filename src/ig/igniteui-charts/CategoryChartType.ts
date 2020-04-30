/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of data visualizations in the Category Chart
 */
export enum CategoryChartType {
	/**
	 * Specifies category line series with markers at each data point
	 */
	Line = 0,
	/**
	 * Specifies category area series
	 */
	Area = 1,
	/**
	 * Specifies category column chart with vertical rectangles at each data point
	 */
	Column = 2,
	/**
	 * Specifies category point chart with markers at each data point
	 */
	Point = 3,
	/**
	 * Specifies category step line chart
	 */
	StepLine = 4,
	/**
	 * Specifies category step area chart
	 */
	StepArea = 5,
	/**
	 * Specifies category spline line series with markers at each data point
	 */
	Spline = 6,
	/**
	 * Specifies category spline area series
	 */
	SplineArea = 7,
	/**
	 * Specifies category waterfall chart
	 */
	Waterfall = 8,
	/**
	 * Specifies automatic selection of chart type based on suggestions from Data Adapter
	 */
	Auto = 9
}

/**
 * @hidden 
 */
export let CategoryChartType_$type = markEnum('CategoryChartType', 'Line,0|Area,1|Column,2|Point,3|StepLine,4|StepArea,5|Spline,6|SplineArea,7|Waterfall,8|Auto,9');


