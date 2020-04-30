/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ErrorBarCalculatorType } from "./ErrorBarCalculatorType";
import { IFastItemColumn$1 } from "./IFastItemColumn$1";
import { Base, EventArgs, Type } from "./type";

/**
 * @hidden 
 */
export interface IErrorBarCalculator { 
	getCalculatorType(): ErrorBarCalculatorType;
getIndependentValue(): number;
getDependentValue(value: number): number;
getItemColumn(): IFastItemColumn$1<number>;
changed: (sender: any, e: EventArgs) => void;
hasConstantPosition(): boolean;
getPosition(): number;
}

/**
 * @hidden 
 */
export let IErrorBarCalculator_$type = new Type(null, 'IErrorBarCalculator');


