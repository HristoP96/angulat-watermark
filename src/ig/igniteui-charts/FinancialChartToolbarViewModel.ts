/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { FinancialChartRangeSelectorContext } from "./FinancialChartRangeSelectorContext";
import { FinancialChartTypePickerContext } from "./FinancialChartTypePickerContext";
import { FinancialChartIndicatorMenuContext } from "./FinancialChartIndicatorMenuContext";

/**
 * @hidden 
 */
export class FinancialChartToolbarViewModel extends Base {
	static $t: Type = markType(FinancialChartToolbarViewModel, 'FinancialChartToolbarViewModel');
	private _financialChartRangeSelector: FinancialChartRangeSelectorContext = null;
	get financialChartRangeSelector(): FinancialChartRangeSelectorContext {
		return this._financialChartRangeSelector;
	}
	set financialChartRangeSelector(value: FinancialChartRangeSelectorContext) {
		this._financialChartRangeSelector = value;
	}
	private _financialChartTypePicker: FinancialChartTypePickerContext = null;
	get financialChartTypePicker(): FinancialChartTypePickerContext {
		return this._financialChartTypePicker;
	}
	set financialChartTypePicker(value: FinancialChartTypePickerContext) {
		this._financialChartTypePicker = value;
	}
	private _financialChartIndicatorMenu: FinancialChartIndicatorMenuContext = null;
	get financialChartIndicatorMenu(): FinancialChartIndicatorMenuContext {
		return this._financialChartIndicatorMenu;
	}
	set financialChartIndicatorMenu(value: FinancialChartIndicatorMenuContext) {
		this._financialChartIndicatorMenu = value;
	}
	private _isIndicatorMenuVisible: boolean = false;
	get isIndicatorMenuVisible(): boolean {
		return this._isIndicatorMenuVisible;
	}
	set isIndicatorMenuVisible(value: boolean) {
		this._isIndicatorMenuVisible = value;
	}
}


