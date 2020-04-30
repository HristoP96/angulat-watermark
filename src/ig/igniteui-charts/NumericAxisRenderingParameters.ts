/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class NumericAxisRenderingParameters extends AxisRenderingParametersBase {
	static $t: Type = markType(NumericAxisRenderingParameters, 'NumericAxisRenderingParameters', (<any>AxisRenderingParametersBase).$type);
	isNumeric(): boolean {
		return true;
	}
	private _abbreviateLargeNumbers: boolean = false;
	get abbreviateLargeNumbers(): boolean {
		return this._abbreviateLargeNumbers;
	}
	set abbreviateLargeNumbers(value: boolean) {
		this._abbreviateLargeNumbers = value;
	}
}


