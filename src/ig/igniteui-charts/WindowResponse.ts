/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of UI response to user panning and zooming operations.
 */
export enum WindowResponse {
	/**
	 * Defer the view update until after the user action is complete.
	 */
	Deferred = 0,
	/**
	 * Update the view immediately while the user action is happening.
	 */
	Immediate = 1
}

/**
 * @hidden 
 */
export let WindowResponse_$type = markEnum('WindowResponse', 'Deferred,0|Immediate,1');


