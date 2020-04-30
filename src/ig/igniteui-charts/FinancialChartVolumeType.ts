/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available series types to display in the volume pane.
 */
export enum FinancialChartVolumeType {
	/**
	 * Do not display the volume pane.
	 */
	None = 0,
	/**
	 * Display column series in the volume pane.
	 */
	Column = 1,
	/**
	 * Display line series in the volume pane.
	 */
	Line = 2,
	/**
	 * Display area series in the volume pane.
	 */
	Area = 3
}

/**
 * @hidden 
 */
export let FinancialChartVolumeType_$type = markEnum('FinancialChartVolumeType', 'None,0|Column,1|Line,2|Area,3');


