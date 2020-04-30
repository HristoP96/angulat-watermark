/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types for enabling error bars  
 */
export enum EnableErrorBars {
	/**
	 * No error bars are enabled
	 */
	None = 0,
	/**
	 * Both error bars are enabled
	 */
	Both = 1,
	/**
	 * Positive error bars are enabled
	 */
	Positive = 2,
	/**
	 * Negative error bars are enabled
	 */
	Negative = 3
}

/**
 * @hidden 
 */
export let EnableErrorBars_$type = markEnum('EnableErrorBars', 'None,0|Both,1|Positive,2|Negative,3');


