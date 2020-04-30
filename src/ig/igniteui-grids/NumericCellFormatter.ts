/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { NumericCellModel } from "./NumericCellModel";
import { isNaN_ } from "igniteui-core/number";
import { isDigit } from "igniteui-core/stringExtended";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class NumericCellFormatter extends Base {
	static $t: Type = markType(NumericCellFormatter, 'NumericCellFormatter');
	private static _cachedSeparator: string = null;
	private static getDecimalSeparator(): string {
		if (NumericCellFormatter._cachedSeparator != null) {
			return NumericCellFormatter._cachedSeparator;
		}
		let sep: string = "";
		let n = 1.1;
		let loc = n.toLocaleString();
		let start: boolean = false;
		for (let i = 0; i < loc.length; i++) {
			if (loc.charAt(i) == '1') {
				start = !start;
			}
			if (loc.charAt(i) != '1' && start) {
				sep += loc.charAt(i);
			}
		}
		NumericCellFormatter._cachedSeparator = sep;
		return NumericCellFormatter._cachedSeparator;
	}
	static formatValue(model: NumericCellModel): string {
		let cellValue: number = model.numericValue;
		let newValue: number = model.numericValue;
		let maxFractionDigit: number = 10;
		let minFractionDigit: number = 0;
		let minIntStr = "0";
		if (isNaN_(model.numericValue)) {
			return "";
		}
		let rightOfDecimal: number = 0;
		if (model.numericValue >= 0) {
			rightOfDecimal = model.numericValue - Math.floor(model.numericValue);
		} else {
			rightOfDecimal = Math.abs(model.numericValue - Math.ceil(model.numericValue));
		}
		let leftOfDecimal: number = 0;
		if (model.numericValue >= 0) {
			leftOfDecimal = model.numericValue - rightOfDecimal;
		} else {
			leftOfDecimal = model.numericValue + rightOfDecimal;
		}
		let absLeftOfDecimal = Math.abs(leftOfDecimal);
		let rightDigits = rightOfDecimal.toString();
		if (rightOfDecimal == 0) {
			rightDigits = "";
		} else {
			rightDigits = rightDigits.substr(2);
		}
		let leftDigits = Math.round(absLeftOfDecimal).toString();
		maxFractionDigit = model.maxFractionDigits;
		minFractionDigit = model.minFractionDigits;
		if (minFractionDigit < 0) {
			minFractionDigit = 0;
		}
		if (maxFractionDigit < 0) {
			maxFractionDigit = 10;
		}
		if (minFractionDigit > maxFractionDigit) {
			maxFractionDigit = minFractionDigit;
		}
		if (rightDigits.length > maxFractionDigit) {
			let rounded = Math.round(rightOfDecimal * (Math.pow(10, maxFractionDigit))) / (Math.pow(10, maxFractionDigit));
			rightDigits = (rounded).toString();
			if (rounded == 1) {
				if (model.numericValue >= 0) {
					leftOfDecimal += 1;
					absLeftOfDecimal += 1;
				} else {
					leftOfDecimal -= 1;
					absLeftOfDecimal += 1;
				}
				rightDigits = "";
				leftDigits = Math.round(absLeftOfDecimal).toString();
			} else if (rounded == 0) {
				rightDigits = "";
			} else {
				rightDigits = rightDigits.substr(2);
			}
		}
		let originalLeftLength: number = leftDigits.length;
		let leftPaddingZeros: number = Math.max(0, model.minIntegerDigits - leftDigits.length);
		let rightPaddingZeros: number = Math.max(0, model.minFractionDigits - rightDigits.length);
		let useNine: boolean = false;
		if (leftDigits.charAt(0) == '1') {
			useNine = true;
		}
		for (let i = 0; i < leftPaddingZeros; i++) {
			let padChar = "0";
			if (model.showGroupingSeparator) {
				if (useNine) {
					padChar = "9";
				} else {
					padChar = "1";
				}
			}
			leftDigits = padChar + leftDigits;
		}
		for (let i1 = 0; i1 < rightPaddingZeros; i1++) {
			rightDigits = rightDigits + "0";
		}
		if (maxFractionDigit == 0) {
			rightDigits = "";
		}
		if (model.showGroupingSeparator && leftDigits.length > 0) {
			let val = parseInt(leftDigits);
			let loc = val.toLocaleString();
			let checkChar: string = '1';
			if (useNine) {
				checkChar = '9';
			}
			let replacing: boolean = true;
			let newVal: string = "";
			for (let i2 = 0; i2 < loc.length; i2++) {
				if (loc.charAt(i2) == checkChar && replacing) {
					newVal += "0";
				} else {
					newVal += loc.charAt(i2);
					if (isDigit(loc.charAt(i2)) && loc.charAt(i2) != checkChar) {
						replacing = false;
					}
				}
			}
			leftDigits = newVal;
		}
		if (leftOfDecimal < 0) {
			leftDigits = "-" + leftDigits;
		}
		let retValue = leftDigits;
		if (rightDigits.length > 0) {
			retValue += NumericCellFormatter.getDecimalSeparator() + rightDigits;
		}
		if (cellValue >= 0) {
			if (!stringIsNullOrEmpty(model.positivePrefix)) {
				retValue = model.positivePrefix + retValue;
			}
			if (!stringIsNullOrEmpty(model.positiveSuffix)) {
				retValue += model.positiveSuffix;
			}
		} else {
			if (!stringIsNullOrEmpty(model.negativePrefix)) {
				retValue = model.negativePrefix + retValue;
			}
			if (!stringIsNullOrEmpty(model.negativeSuffix)) {
				retValue += model.negativeSuffix;
			}
		}
		return retValue;
	}
}


