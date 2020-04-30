/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the time range presets on a financial chart range selector.
 */
export enum FinancialChartRangeSelectorOption {
	/**
	 * Include a preset button for one month in the range selector.
	 */
	OneMonth = 0,
	/**
	 * Include a preset button for three months in the range selector.
	 */
	ThreeMonths = 1,
	/**
	 * Include a preset button for six months in the range selector.
	 */
	SixMonths = 2,
	/**
	 * Include a preset button for year-to-date in the range selector.
	 */
	YearToDate = 3,
	/**
	 * Include a preset button for one year in the range selector.
	 */
	OneYear = 4,
	/**
	 * Include a preset button for all data in the range selector.
	 */
	All = 5
}

/**
 * @hidden 
 */
export let FinancialChartRangeSelectorOption_$type = markEnum('FinancialChartRangeSelectorOption', 'OneMonth,0|ThreeMonths,1|SixMonths,2|YearToDate,3|OneYear,4|All,5');


