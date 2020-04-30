/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { NumericScaler } from "./NumericScaler";
import { Base, Type, markType } from "igniteui-core/type";
import { NumericAxisBase } from "./NumericAxisBase";
import { AutoRangeCalculator } from "./AutoRangeCalculator";

/**
 * @hidden 
 */
export abstract class LogarithmicScaler extends NumericScaler {
	static $t: Type = markType(LogarithmicScaler, 'LogarithmicScaler', (<any>NumericScaler).$type);
	private _logActualMinimumValue: number = 0;
	get logActualMinimumValue(): number {
		return this._logActualMinimumValue;
	}
	set logActualMinimumValue(value: number) {
		this._logActualMinimumValue = value;
	}
	private _logActualMaximumValue: number = 0;
	get logActualMaximumValue(): number {
		return this._logActualMaximumValue;
	}
	set logActualMaximumValue(value: number) {
		this._logActualMaximumValue = value;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		super.onPropertyChanged(propertyName, oldValue, newValue);
		switch (propertyName) {
			case NumericScaler.actualMinimumValuePropertyName:
			this.logActualMinimumValue = Math.log(this.actualMinimumValue);
			break;

			case NumericScaler.actualMaximumValuePropertyName:
			this.logActualMaximumValue = Math.log(this.actualMaximumValue);
			break;

		}

	}
	calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, actualMinimumValue: number, actualMaximumValue: number): { p3: number; p4: number; } {
		let innerMin: number;
		let innerMax: number;
		let $ret = AutoRangeCalculator.calculateRange(target, minimumValue, maximumValue, true, target.logarithmBase, innerMin, innerMax);
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


