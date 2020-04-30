/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialChartDropDownControl } from "./FinancialChartDropDownControl";
import { FinancialChartType } from "./FinancialChartType";
import { FinancialChartTypePickerViewModel } from "./FinancialChartTypePickerViewModel";
import { FinancialChartTypePickerView } from "./FinancialChartTypePickerView";
import { Base, runOn, Type, markType } from "igniteui-core/type";
import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";

/**
 * @hidden 
 */
export class FinancialChartTypePicker extends FinancialChartDropDownControl {
	static $t: Type = markType(FinancialChartTypePicker, 'FinancialChartTypePicker', (<any>FinancialChartDropDownControl).$type);
	private static readonly defaultTemplate: string = "<button class='financialChartTypePickerDropDownButton' data-value='Auto'>\r\n\t\t<span class='ui-icon ui-icon-changeable'></span>\r\n\t\t<span class='ui-icon-toolbar-dd'></span>\r\n\t</button>\r\n\r\n\t<div class='financialChartTypePickerDropDownMenu'>\r\n\t\t<ul>\r\n\t\t\t<li class='financialChartListItem' data-value='Auto'>\r\n\t\t\t<span class='ui-icon ui-icon-chartAuto'></span>\r\n\t\t\t<span>Auto</span>\r\n\t\t\t</li>\r\n\t\t\t<li class='financialChartListItem' data-value='Bar'>\r\n\t\t\t\t<span class='ui-icon ui-icon-BarIcon'></span>\r\n\t\t\t\t<span>Bar</span>\r\n\t\t\t</li>\r\n\t\t\t<li class='financialChartListItem' data-value='Line'>\r\n\t\t\t\t<span class='ui-icon ui-icon-LineIcon'></span>\r\n\t\t\t\t<span>Line</span>\r\n\t\t\t</li>\r\n\t\t\t<li class='financialChartListItem' data-value='Candle'>\r\n\t\t\t\t<span class='ui-icon ui-icon-CandleIcon'></span>\r\n\t\t\t\t<span>Candle</span>\r\n\t\t\t</li>\r\n\t\t\t<li class='financialChartListItem' data-value='Column'>\r\n\t\t\t\t<span class='ui-icon ui-icon-ColumnIcon'></span>\r\n\t\t\t\t<span>Column</span>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>";
	constructor(template: any) {
		super("financialChartTypePicker", template, FinancialChartTypePicker.defaultTemplate);
		this.view = new FinancialChartTypePickerView();
		this.viewModel = new FinancialChartTypePickerViewModel();
		this.viewModel.onSelectionChanged = runOn(this, this.onSelectionChanged);
		this.viewModel.dropDownClick = runOn(this.view, this.view.handleDropDownClick);
		this.view.viewModel = this.viewModel;
	}
	get chartType(): FinancialChartType {
		return this.chartTypePickerViewModel.chartType;
	}
	set chartType(value: FinancialChartType) {
		this.chartTypePickerViewModel.chartType = value;
	}
	get chartTypePickerView(): FinancialChartTypePickerView {
		return <FinancialChartTypePickerView>this.view;
	}
	get chartTypePickerViewModel(): FinancialChartTypePickerViewModel {
		return <FinancialChartTypePickerViewModel>this.viewModel;
	}
	protected get_dropDownButtonClass(): string {
		return ".financialChartTypePickerDropDownButton";
	}
	protected get dropDownButtonClass(): string {
		return this.get_dropDownButtonClass();
	}
	protected get_dropDownMenuClass(): string {
		return ".financialChartTypePickerDropDownMenu";
	}
	protected get dropDownMenuClass(): string {
		return this.get_dropDownMenuClass();
	}
}


