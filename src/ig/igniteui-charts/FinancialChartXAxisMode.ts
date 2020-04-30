/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available X axis types in the Financial Chart.
 */
export enum FinancialChartXAxisMode {
	/**
	 * An ordinal scale with time labels.
	 * Items on an ordinal scale are consecutive and equidistant.
	 */
	Ordinal = 0,
	/**
	 * A time scale.
	 * Items on a time scale are positioned according to their time values.
	 */
	Time = 1
}

/**
 * @hidden 
 */
export let FinancialChartXAxisMode_$type = markEnum('FinancialChartXAxisMode', 'Ordinal,0|Time,1');


