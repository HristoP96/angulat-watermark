/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Indicates the type of shape at the end of a line.
 */
export enum PenLineCap {
	/**
	 * A flat end
	 */
	Flat = 0,
	/**
	 * A square end
	 */
	Square = 1,
	/**
	 * A round end
	 */
	Round = 2,
	/**
	 * A triangluar end
	 */
	Triangle = 3
}

/**
 * @hidden 
 */
export let PenLineCap_$type = markEnum('PenLineCap', 'Flat,0|Square,1|Round,2|Triangle,3');


