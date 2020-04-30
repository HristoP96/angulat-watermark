/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enum specifying the position of the titles relative to scale's start/end.
 */
export enum TitlesPosition {
	/**
	 * The titles are placed at scale's start (minimum value).
	 */
	ScaleStart = 0,
	/**
	 * The titles are placed at the scale's end (maximum value).
	 */
	ScaleEnd = 1
}

/**
 * @hidden 
 */
export let TitlesPosition_$type = markEnum('TitlesPosition', 'ScaleStart,0|ScaleEnd,1');


