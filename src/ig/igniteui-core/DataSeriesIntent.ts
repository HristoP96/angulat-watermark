/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Identifies various intents for the sub properties of the data being bound to a data series.
 */
export enum DataSeriesIntent {
	/**
	 * Identifies the primary values to use for a series.
	 */
	PrimarySeriesValue = 0,
	/**
	 * Identifies the x axis values to use for a scatter series.
	 */
	SeriesX = 1,
	/**
	 * Identifies the y axis values to use for a scatter series.
	 */
	SeriesY = 2,
	/**
	 * Identifies the fill scale values to use for a bubble series or scatter area series.
	 */
	SeriesFill = 3,
	/**
	 * Identifies the legend label values to use for a bubble series in item-wize legends.
	 */
	SeriesLabel = 4,
	/**
	 * Identifies the radius values to use for a bubble, polar, or radial series.
	 */
	SeriesRadius = 5,
	/**
	 * Identifies the angle values to use for a polar or radial series.
	 */
	SeriesAngle = 6,
	/**
	 * Identifies the shape values to use for a scatter polyline or polygon series.
	 */
	SeriesShape = 7,
	/**
	 * Identifies the item-wize values to use for a series.
	 */
	SeriesValue = 8,
	/**
	 * Identifies a grouping identifier to use for a series.
	 */
	SeriesGroup = 9,
	/**
	 * Identifies a title to use for a series.
	 */
	SeriesTitle = 10,
	/**
	 * Identifies an open value to use for a financial series.
	 */
	OpenSeriesValue = 11,
	/**
	 * Identifies a high value to use for a financial series or range series.
	 */
	HighSeriesValue = 12,
	/**
	 * Identifies a low value to use for a financial series or range series.
	 */
	LowSeriesValue = 13,
	/**
	 * Identifies a close value to use for a financial series or range series.
	 */
	CloseSeriesValue = 14,
	/**
	 * Identifies a volume value to use for a financial series or range series.
	 */
	VolumeSeriesValue = 15,
	/**
	 * Identifies an axis label value to use for a series.
	 */
	AxisLabelValue = 16,
	/**
	 * Identifies an axis date value to use for a series.
	 */
	AxisDateValue = 17,
	/**
	 * Identifies that a value should be ignored when considering values for a series.
	 */
	DontPlot = 18,
	/**
	 * Identifies a sales units value to use for a break-even series
	 */
	SalesUnit = 19,
	/**
	 * Identifies a sales fixed cost to use for a break-even series
	 */
	SalesFixedCost = 20,
	/**
	 * Identifies a sales variable cost to use for a break-even series
	 */
	SalesVariableCost = 21,
	/**
	 * Identifies a sales total cost to use for a break-even series
	 */
	SalesTotalCost = 22,
	/**
	 * Identifies a sales revenue to use for a break-even series
	 */
	SalesRevenue = 23,
	/**
	 * Identifies a sales marginal profit to use for a break-even series
	 */
	SalesMarginalProfit = 24,
	/**
	 * Identifes a value that has been used to generate other data to bind against.
	 */
	GenerationInput = 25
}

/**
 * @hidden 
 */
export let DataSeriesIntent_$type = markEnum('DataSeriesIntent', 'PrimarySeriesValue,0|SeriesX,1|SeriesY,2|SeriesFill,3|SeriesLabel,4|SeriesRadius,5|SeriesAngle,6|SeriesShape,7|SeriesValue,8|SeriesGroup,9|SeriesTitle,10|OpenSeriesValue,11|HighSeriesValue,12|LowSeriesValue,13|CloseSeriesValue,14|VolumeSeriesValue,15|AxisLabelValue,16|AxisDateValue,17|DontPlot,18|SalesUnit,19|SalesFixedCost,20|SalesVariableCost,21|SalesTotalCost,22|SalesRevenue,23|SalesMarginalProfit,24|GenerationInput,25');


