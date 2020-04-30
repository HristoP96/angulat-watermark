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
export enum PenLineJoin {
	/**
	 * Regular angular vertices.
	 */
	Miter = 0,
	/**
	 * Beveled vertices.
	 */
	Bevel = 1,
	/**
	 * Rounded vertices.
	 */
	Round = 2
}

/**
 * @hidden 
 */
export let PenLineJoin_$type = markEnum('PenLineJoin', 'Miter,0|Bevel,1|Round,2');


