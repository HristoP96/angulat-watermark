/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Enum, ValueType, markEnum, Type } from "./type";

export enum SummaryOperand {
	Min = 0,
	Max = 1,
	Sum = 2,
	Average = 3,
	Count = 4,
	Custom = 5
}

/**
 * @hidden 
 */
export let SummaryOperand_$type = markEnum('SummaryOperand', 'Min,0|Max,1|Sum,2|Average,3|Count,4|Custom,5');


