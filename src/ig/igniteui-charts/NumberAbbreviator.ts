/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, ValueType, Type, markType } from "igniteui-core/type";
import { INumberAbbreviator, INumberAbbreviator_$type } from "./INumberAbbreviator";
import { numberToString2 } from "igniteui-core/numberExtended";

/**
 * @hidden 
 */
export class NumberAbbreviator extends Base implements INumberAbbreviator {
	static $t: Type = markType(NumberAbbreviator, 'NumberAbbreviator', (<any>Base).$type, [INumberAbbreviator_$type]);
	abbreviate(value: number): string {
		let format: string = "0.#";
		let abs: number = Math.abs(value);
		let abbreviations: string[] = <string[]>[ 'Q', 'T', 'B', 'M', 'K' ];
		let numbers: number[] = <number[]>[ 1E+15, 1000000000000, 1000000000, 1000000, 1000 ];
		for (let ii: number = 0; ii < abbreviations.length; ii++) {
			if (abs >= numbers[ii]) {
				return numberToString2((value / numbers[ii]), format) + abbreviations[ii];
			}
		}
		return value.toString();
	}
}


