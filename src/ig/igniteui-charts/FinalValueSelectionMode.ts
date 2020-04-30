/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available positions on the crossing axis at which the category tooltip can be displayed.
 */
export enum FinalValueSelectionMode {
	/**
	 * A mode is selected automatically
	 */
	Auto = 0,
	/**
	 * Displays the last value visible.
	 */
	FinalVisible = 1,
	/**
	 * Displays an interploated last value for when the series leaves view.
	 */
	FinalVisibleInterpolated = 2,
	/**
	 * Displays the last value in the series, whether visible or not.
	 */
	Final = 3
}

/**
 * @hidden 
 */
export let FinalValueSelectionMode_$type = markEnum('FinalValueSelectionMode', 'Auto,0|FinalVisible,1|FinalVisibleInterpolated,2|Final,3');


