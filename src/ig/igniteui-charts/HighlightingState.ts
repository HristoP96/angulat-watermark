/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available highlighting states
 */
export enum HighlightingState {
	/**
	 * Highlight is transitioning out.
	 */
	outward = 0,
	/**
	 * Highlight is transitioning in.
	 */
	inward = 1,
	/**
	 * Highlight is active and not transitioning in or out.
	 */
	Static = 2
}

/**
 * @hidden 
 */
export let HighlightingState_$type = markEnum('HighlightingState', 'Out:outward,0|In:inward,1|Static,2');


