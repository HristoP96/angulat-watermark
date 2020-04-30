/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NumericScaler } from "./NumericScaler";
import { NumericAxisBase } from "./NumericAxisBase";
import { AutoRangeCalculator } from "./AutoRangeCalculator";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class LinearScaler extends NumericScaler {
	static $t: Type = markType(LinearScaler, 'LinearScaler', (<any>NumericScaler).$type);
	calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, actualMinimumValue: number, actualMaximumValue: number): { p3: number; p4: number; } {
		let innerMin: number;
		let innerMax: number;
		let $ret = AutoRangeCalculator.calculateRange(target, minimumValue, maximumValue, false, -1, innerMin, innerMax);
		innerMin = $ret.p5;
		innerMax = $ret.p6;
		actualMinimumValue = innerMin;
		actualMaximumValue = innerMax;
		return {
			p3: actualMinimumValue,
			p4: actualMaximumValue

		};
	}
}


