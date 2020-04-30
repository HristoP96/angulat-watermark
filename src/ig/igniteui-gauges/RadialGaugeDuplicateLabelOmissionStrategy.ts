/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "igniteui-core/type";

/**
 * Enum specifying multiple strategies for omitting labels.
 */
export enum RadialGaugeDuplicateLabelOmissionStrategy {
	/**
	 * Omit the last label.
	 */
	OmitLast = 0,
	/**
	 * Omit the first label.
	 */
	OmitFirst = 1,
	/**
	 * Omit no labels.
	 */
	OmitNeither = 2,
	/**
	 * Omit both labels.
	 */
	OmitBoth = 3
}

/**
 * @hidden 
 */
export let RadialGaugeDuplicateLabelOmissionStrategy_$type = markEnum('RadialGaugeDuplicateLabelOmissionStrategy', 'OmitLast,0|OmitFirst,1|OmitNeither,2|OmitBoth,3');


