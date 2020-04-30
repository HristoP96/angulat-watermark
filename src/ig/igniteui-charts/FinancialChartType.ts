/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available price series types to display in the main chart.
 */
export enum FinancialChartType {
	/**
	 * Automatically determine the price series type to display in the main chart.
	 */
	Auto = 0,
	/**
	 * Display financial bar series in the main chart.
	 */
	Bar = 1,
	/**
	 * Display candlestick series in the main chart.
	 */
	Candle = 2,
	/**
	 * Display column series in the main chart.
	 */
	Column = 3,
	/**
	 * Display line series in the main chart.
	 */
	Line = 4
}

/**
 * @hidden 
 */
export let FinancialChartType_$type = markEnum('FinancialChartType', 'Auto,0|Bar,1|Candle,2|Column,3|Line,4');


