/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { FinancialChartToolbarContext } from "./FinancialChartToolbarContext";

/**
 * @hidden 
 */
export class FinancialChartViewModel extends Base {
	static $t: Type = markType(FinancialChartViewModel, 'FinancialChartViewModel');
	private _toolbar: FinancialChartToolbarContext = null;
	get toolbar(): FinancialChartToolbarContext {
		return this._toolbar;
	}
	set toolbar(value: FinancialChartToolbarContext) {
		this._toolbar = value;
	}
}


