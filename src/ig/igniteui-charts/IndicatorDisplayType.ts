/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available display types for financial indicators.
 */
export enum IndicatorDisplayType {
	/**
	 * Display indicator as a line chart.
	 */
	Line = 0,
	/**
	 * Display indicator as an area chart.
	 */
	Area = 1,
	/**
	 * Display indicator as a column chart.
	 */
	Column = 2
}

/**
 * @hidden 
 */
export let IndicatorDisplayType_$type = markEnum('IndicatorDisplayType', 'Line,0|Area,1|Column,2');


