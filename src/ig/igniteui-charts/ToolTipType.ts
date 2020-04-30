/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available tooltip types to display in the chart.
 */
export enum ToolTipType {
	/**
	 * Display default tooltip for each series in the chart.
	 */
	Default = 0,
	/**
	 * Display individual tooltips for all series in the chart.
	 */
	Item = 1,
	/**
	 * Display combined tooltip for all series in the chart.
	 */
	Category = 2,
	/**
	 * Display no tooltips in the chart.
	 */
	None = 3
}

/**
 * @hidden 
 */
export let ToolTipType_$type = markEnum('ToolTipType', 'Default,0|Item,1|Category,2|None,3');


