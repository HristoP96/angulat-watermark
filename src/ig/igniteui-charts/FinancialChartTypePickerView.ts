/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialChartDropDownControlView } from "./FinancialChartDropDownControlView";
import { FinancialChartTypePickerViewModel } from "./FinancialChartTypePickerViewModel";
import { Base, Type, Enum, EnumUtil, markType } from "igniteui-core/type";
import { FinancialChartType, FinancialChartType_$type } from "./FinancialChartType";
import { DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";
import { TemplatedHtmlControl } from "./TemplatedHtmlControl";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class FinancialChartTypePickerView extends FinancialChartDropDownControlView {
	static $t: Type = markType(FinancialChartTypePickerView, 'FinancialChartTypePickerView', (<any>FinancialChartDropDownControlView).$type);
	private get chartTypePickerViewModel(): FinancialChartTypePickerViewModel {
		return <FinancialChartTypePickerViewModel>this.viewModel;
	}
	protected onSelect(target: any): void {
		super.onSelect(target);
		let li: HTMLLIElement = <HTMLLIElement>target;
		let parentElement: HTMLElement = <HTMLElement>li.parentNode;
		for (let ii: number = 0; ii < parentElement.children.length; ii++) {
			let sibling: HTMLElement = <HTMLElement>parentElement.children.item(ii);
			if (sibling != li) {
				sibling.classList.remove("checked");
			}
		}
		let enumString: string = <string>li.getAttribute("data-value");
		if (stringIsNullOrEmpty(enumString)) {
			return;
		}
		let enumValue: any = EnumUtil.parse(FinancialChartType_$type, enumString, true);
		this.chartTypePickerViewModel.chartType = EnumUtil.getEnumValue<FinancialChartType>(FinancialChartType_$type, enumValue);
		this.close();
		this.viewModel.onSelectionChanged();
	}
}


