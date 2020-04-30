/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";
import { FinancialChartType, FinancialChartType_$type } from "./FinancialChartType";
import { Base, EnumUtil, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class FinancialChartTypePickerViewModel extends FinancialChartDropDownControlViewModel {
	static $t: Type = markType(FinancialChartTypePickerViewModel, 'FinancialChartTypePickerViewModel', (<any>FinancialChartDropDownControlViewModel).$type);
	private _chartType: FinancialChartType = <FinancialChartType>0;
	get chartType(): FinancialChartType {
		return this._chartType;
	}
	set chartType(value: FinancialChartType) {
		this._chartType = value;
	}
	get chartTypeString(): string {
		return EnumUtil.getName<FinancialChartType>(FinancialChartType_$type, this.chartType);
	}
}


