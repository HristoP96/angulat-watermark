/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Represents the type of sparkline
 */
export enum SparklineDisplayType {
	/**
	 * Display the sparkline as a line.
	 */
	Line = 0,
	/**
	 * Display the sparkline as a filled polygon.
	 */
	Area = 1,
	/**
	 * Display the sparkline as a set of columns.
	 */
	Column = 2,
	/**
	 * Display the sparkline as a set of columns on a boolean scale.
	 */
	WinLoss = 3
}

/**
 * @hidden 
 */
export let SparklineDisplayType_$type = markEnum('SparklineDisplayType', 'Line,0|Area,1|Column,2|WinLoss,3');


