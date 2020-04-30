/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Determines the item returned in hit-testing when mousing over an object which represents several consolidated items.
 */
export enum ConsolidatedItemHitTestBehavior {
	/**
	 * Returns the item based on the X-location only.  Will return one of the consolidated items.
	 */
	Basic = 0,
	/**
	 * Returns the item with the nearest Y-location out of all the items with a matching X-location.
	 */
	NearestY = 1
}

/**
 * @hidden 
 */
export let ConsolidatedItemHitTestBehavior_$type = markEnum('ConsolidatedItemHitTestBehavior', 'Basic,0|NearestY,1');


