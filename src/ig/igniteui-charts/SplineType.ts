/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Describes available types of Spline calculations.
 */
export enum SplineType {
	/**
	 * Calculates the spline using a natural spline calculation formula.
	 */
	Natural = 0,
	/**
	 * Calculated the spline using a clamped spline calculation formula.
	 */
	Clamped = 1
}

/**
 * @hidden 
 */
export let SplineType_$type = markEnum('SplineType', 'Natural,0|Clamped,1');


