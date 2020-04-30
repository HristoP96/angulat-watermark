/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * An enum representing the available display modes of crosshairs lines in the chart.
 */
export enum CrosshairsDisplayMode {
	/**
	 * Display default number of crosshair lines in the chart.
	 */
	Default = 0,
	/**
	 * Display no crosshair lines in the chart.
	 */
	None = 1,
	/**
	 * Display horizontal line of crosshairs in the chart.
	 */
	Horizontal = 2,
	/**
	 * Display vertical line of crosshairs in the chart.
	 */
	Vertical = 3,
	/**
	 * Display both horizontal and vertical lines of crosshairs in the chart.
	 */
	Both = 4
}

/**
 * @hidden 
 */
export let CrosshairsDisplayMode_$type = markEnum('CrosshairsDisplayMode', 'Default,0|None,1|Horizontal,2|Vertical,3|Both,4');


