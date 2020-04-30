/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available series types to display in the zoom slider pane.
 */
export enum FinancialChartZoomSliderType {
	/**
	 * Do not display the zoom slider pane.
	 */
	None = 0,
	/**
	 * In the zoom slider pane, match the series type in the price pane.
	 */
	Auto = 1,
	/**
	 * Display financial bar series in the zoom slider pane.
	 */
	Bar = 2,
	/**
	 * Display candle series in the zoom slider pane.
	 */
	Candle = 3,
	/**
	 * Display column series in the zoom slider pane.
	 */
	Column = 4,
	/**
	 * Display line series in the zoom slider pane.
	 */
	Line = 5,
	/**
	 * Display an area series in the zoom slider pane.
	 */
	Area = 6
}

/**
 * @hidden 
 */
export let FinancialChartZoomSliderType_$type = markEnum('FinancialChartZoomSliderType', 'None,0|Auto,1|Bar,2|Candle,3|Column,4|Line,5|Area,6');


