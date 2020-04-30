/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialChartDropDownControlView } from "./FinancialChartDropDownControlView";
import { FinancialChartIndicatorMenuViewModel } from "./FinancialChartIndicatorMenuViewModel";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";
import { SRProvider } from "igniteui-core/SRProvider";
import { FinancialChartIndicatorMenuItems } from "./FinancialChartIndicatorMenuItems";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Type, IEnumerator$1, IEnumerator$1_$type, Enum, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, Array_$type, typeGetValue, fromEnum, EnumUtil, markType } from "igniteui-core/type";
import { FinancialChartIndicatorMenuItem } from "./FinancialChartIndicatorMenuItem";
import { TemplatedHtmlControl } from "./TemplatedHtmlControl";
import { List$1 } from "igniteui-core/List$1";
import { FinancialIndicatorType, FinancialIndicatorType_$type } from "./FinancialIndicatorType";
import { FinancialOverlayType, FinancialOverlayType_$type } from "./FinancialOverlayType";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { FinancialChartVolumeType, FinancialChartVolumeType_$type } from "./FinancialChartVolumeType";
import { FinancialIndicatorTypeCollection } from "./FinancialIndicatorTypeCollection";
import { FinancialOverlayTypeCollection } from "./FinancialOverlayTypeCollection";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { stringFormat } from "igniteui-core/stringExtended";

/**
 * @hidden 
 */
export class FinancialChartIndicatorMenuView extends FinancialChartDropDownControlView {
	static $t: Type = markType(FinancialChartIndicatorMenuView, 'FinancialChartIndicatorMenuView', (<any>FinancialChartDropDownControlView).$type);
	attach(renderer: DomRenderer, viewModel: FinancialChartDropDownControlViewModel, dropDownButtonClass: string, dropDownMenuClass: string): void {
		super.attach(renderer, viewModel, dropDownButtonClass, dropDownMenuClass);
		let srProvider: SRProvider = new SRProvider(renderer);
		TemplatedHtmlControl.setLabelText1(".financialChartIndicatorMenuLabel", "FinancialChart_IndicatorMenu_Header", renderer, srProvider);
		TemplatedHtmlControl.setLabelText1(".financialChartIndicatorMenuDropDownMenu li[data-value='FinancialOverlayType'] span", "FinancialChart_IndicatorMenu_OverlaysCategoryHeader", renderer, srProvider);
		TemplatedHtmlControl.setLabelText1(".financialChartIndicatorMenuDropDownMenu li[data-value='TrendLineType'] span", "FinancialChart_IndicatorMenu_TrendlinesCategoryHeader", renderer, srProvider);
		TemplatedHtmlControl.setLabelText1(".financialChartIndicatorMenuDropDownMenu li[data-value='FinancialChartVolumeType'] span", "FinancialChart_IndicatorMenu_VolumeCategoryHeader", renderer, srProvider);
		TemplatedHtmlControl.setLabelText1(".financialChartIndicatorMenuDropDownMenu li[data-value='FinancialIndicatorType'] span", "FinancialChart_IndicatorMenu_IndicatorsCategoryHeader", renderer, srProvider);
		let menuItems: FinancialChartIndicatorMenuItems = new FinancialChartIndicatorMenuItems(srProvider);
		let enumNames: Dictionary$2<Type, string[]> = new Dictionary$2<Type, string[]>((<any>Type).$type, Array_$type, 0);
		for (let menuItem of fromEnum<FinancialChartIndicatorMenuItem>(menuItems)) {
			if (menuItem.indentation < 1) {
				continue;
			}
			let enumValue: number = typeGetValue(menuItem.content);
			if (!enumNames.containsKey(menuItem.type)) {
				enumNames.addItem(menuItem.type, EnumUtil.getNames(menuItem.type));
			}
			let enumString: string = enumNames.item(menuItem.type)[enumValue];
			if (stringIsNullOrEmpty(enumString)) {
				continue;
			}
			enumString = enumString.charAt(0).toUpperCase() + enumString.substr(1);
			let selector: string = stringFormat(".financialChartIndicatorMenuDropDownMenuList li[data-value='{0}']", enumString);
			TemplatedHtmlControl.setLabelText(selector, menuItem.label, renderer);
		}
	}
	protected onSelect(target: any): void {
		super.onSelect(target);
		let li: HTMLLIElement = <HTMLLIElement>target;
		if (li.tagName != "LI") {
			return;
		}
		let parentLi: HTMLLIElement = <HTMLLIElement>li.parentNode.parentNode;
		let enumType: Type;
		let singleValue: boolean = false;
		switch (<string>parentLi.getAttribute("data-value")) {
			case "FinancialOverlayType":
			enumType = FinancialOverlayType_$type;
			singleValue = false;
			break;

			case "TrendLineType":
			enumType = TrendLineType_$type;
			singleValue = true;
			break;

			case "FinancialChartVolumeType":
			enumType = FinancialChartVolumeType_$type;
			singleValue = true;
			break;

			default:

			case "FinancialIndicatorType":
			enumType = FinancialIndicatorType_$type;
			singleValue = false;
			break;

		}

		let isChecked: boolean = li.classList.toggle("checked");
		let parentElement: HTMLElement = <HTMLElement>li.parentNode;
		if (singleValue) {
			for (let ii: number = 0; ii < parentElement.children.length; ii++) {
				let sibling: HTMLElement = <HTMLElement>parentElement.children.item(ii);
				if (sibling != li) {
					sibling.classList.remove("checked");
				}
			}
			let enumString: string = isChecked ? <string>li.getAttribute("data-value") : "None";
			if (stringIsNullOrEmpty(enumString)) {
				return;
			}
			let enumValue: any = EnumUtil.parse(enumType, enumString, true);
			if (enumType == FinancialChartVolumeType_$type) {
				this.indicatorMenuViewModel.volumeType = EnumUtil.getEnumValue<FinancialChartVolumeType>(FinancialChartVolumeType_$type, enumValue);
			} else {
				this.indicatorMenuViewModel.trendLineType = EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, enumValue);
			}
		} else {
			if (enumType == FinancialIndicatorType_$type) {
				this.indicatorMenuViewModel.indicatorTypes = new FinancialIndicatorTypeCollection(0);
				;
			} else {
				this.indicatorMenuViewModel.overlayTypes = new FinancialOverlayTypeCollection(0);
			}
			for (let ii1: number = 0; ii1 < parentElement.children.length; ii1++) {
				let sibling1: HTMLElement = <HTMLElement>parentElement.children.item(ii1);
				if (sibling1.classList.contains("checked")) {
					let dataValue: string = <string>sibling1.getAttribute("data-value");
					if (stringIsNullOrEmpty(dataValue)) {
						continue;
					}
					let enumValue1: any = EnumUtil.parse(enumType, dataValue, true);
					if (enumType == FinancialIndicatorType_$type) {
						let indicatorType: FinancialIndicatorType = EnumUtil.getEnumValue<FinancialIndicatorType>(FinancialIndicatorType_$type, enumValue1);
						this.indicatorMenuViewModel.indicatorTypes.add(indicatorType);
					} else {
						let overlayType: FinancialOverlayType = EnumUtil.getEnumValue<FinancialOverlayType>(FinancialOverlayType_$type, enumValue1);
						this.indicatorMenuViewModel.overlayTypes.add(overlayType);
					}
				}
			}
		}
		this.viewModel.onSelectionChanged();
	}
	private get indicatorMenuViewModel(): FinancialChartIndicatorMenuViewModel {
		return <FinancialChartIndicatorMenuViewModel>this.viewModel;
	}
}


