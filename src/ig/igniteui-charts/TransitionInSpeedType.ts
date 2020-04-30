/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of speeds used when transitioning in a series.
 */
export enum TransitionInSpeedType {
	/**
	 * A speed type is automatically selected.
	 */
	Auto = 0,
	/**
	 * All speeds are normal, data points will arrive at the same time.
	 */
	Normal = 1,
	/**
	 * Data points will arrive later if their value is further from the start point.
	 */
	ValueScaled = 2,
	/**
	 * Data points will arrive later if their index is further from the axis origin.
	 */
	IndexScaled = 3,
	/**
	 * Data points will arrive at random times.
	 */
	Random = 4
}

/**
 * @hidden 
 */
export let TransitionInSpeedType_$type = markEnum('TransitionInSpeedType', 'Auto,0|Normal,1|ValueScaled,2|IndexScaled,3|Random,4');


