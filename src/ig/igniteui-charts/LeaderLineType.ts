/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of a callout line for the labels.
 */
export enum LeaderLineType {
	/**
	 * A straight line is drawn between the slice and its label.
	 */
	Straight = 0,
	/**
	 * A curved line is drawn between the slice and its label. The line follows makes a natural turn from the slice to the label.
	 */
	Arc = 1,
	/**
	 * A curved line is drawn between the slice and its label. The line starts radially from the slice and then turns to the label.
	 */
	Spline = 2
}

/**
 * @hidden 
 */
export let LeaderLineType_$type = markEnum('LeaderLineType', 'Straight,0|Arc,1|Spline,2');


