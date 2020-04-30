/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

/**
 * Describes available behaviors for choosing the direction of error bars calculation in scatter series.
 */
export enum ErrorBarCalculatorReference {
	/**
	 * Variable X.
	 */
	X = 0,
	/**
	 * Variable Y.
	 */
	Y = 1
}

/**
 * @hidden 
 */
export let ErrorBarCalculatorReference_$type = markEnum('ErrorBarCalculatorReference', 'X,0|Y,1');


