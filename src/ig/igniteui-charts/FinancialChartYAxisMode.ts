/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available Y axis types in the Financial Chart.
 */
export enum FinancialChartYAxisMode {
	/**
	 * A linear or logarithmic numeric scale.
	 */
	Numeric = 0,
	/**
	 * A numeric scale where all values are scaled proportionally to a reference value.
	 */
	PercentChange = 1
}

/**
 * @hidden 
 */
export let FinancialChartYAxisMode_$type = markEnum('FinancialChartYAxisMode', 'Numeric,0|PercentChange,1');


