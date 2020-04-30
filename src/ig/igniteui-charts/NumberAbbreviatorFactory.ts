/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType, TypeRegistrar, NotSupportedException } from "igniteui-core/type";
import { INumberAbbreviator } from "./INumberAbbreviator";
import { SRProvider } from "igniteui-core/SRProvider";
import { NumberAbbreviator } from "./NumberAbbreviator";

/**
 * @hidden 
 */
export class NumberAbbreviatorFactory extends Base {
	static $t: Type = markType(NumberAbbreviatorFactory, 'NumberAbbreviatorFactory');
	static getAbbreviator(sr: SRProvider): INumberAbbreviator {
		if (!TypeRegistrar.isRegistered("NumberAbbreviator")) {
			return null;
		}
		let abbreviator: INumberAbbreviator = <INumberAbbreviator><any>TypeRegistrar.create("NumberAbbreviator");
		return abbreviator;
	}
}


