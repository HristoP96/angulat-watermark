/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Boolean_$type, Number_$type, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent, DomWrapperPosition } from "igniteui-core/dom";
import { FinancialChartRangeSelectorViewModel } from "./FinancialChartRangeSelectorViewModel";
import { SRProvider } from "igniteui-core/SRProvider";
import { TemplatedHtmlControl } from "./TemplatedHtmlControl";
import { FinancialChartRangeSelectorVisualData } from "./FinancialChartRangeSelectorVisualData";
import { List$1 } from "igniteui-core/List$1";
import { FinancialChartRangeSelectorOption } from "./FinancialChartRangeSelectorOption";
import { FinancialChartRangeSelectorOptionCollection } from "./FinancialChartRangeSelectorOptionCollection";

/**
 * @hidden 
 */
export class FinancialChartRangeSelectorView extends Base {
	static $t: Type = markType(FinancialChartRangeSelectorView, 'FinancialChartRangeSelectorView');
	attach(renderer: DomRenderer, viewModel: FinancialChartRangeSelectorViewModel): void {
	}
	private setLabelText(renderer: DomRenderer, key: string, srProvider: SRProvider): void {
		TemplatedHtmlControl.setLabelText1(".rangeSelector" + key + " span", "FinancialChart_RangeSelector_" + key, renderer, srProvider);
	}
	onPropertiesChanged(viewModel: FinancialChartRangeSelectorViewModel): void {
	}
	exportVisualData(rootElement: DomWrapper): FinancialChartRangeSelectorVisualData {
		let buttonLabels = new List$1<string>(String_$type, 0);
		let buttonsChecked = new List$1<boolean>(Boolean_$type, 0);
		let buttonLefts = new List$1<number>(Number_$type, 0);
		let buttonTops = new List$1<number>(Number_$type, 0);
		let buttonVisibilities = new List$1<boolean>(Boolean_$type, 0);
		let buttonWidths = new List$1<number>(Number_$type, 0);
		let buttonHeights = new List$1<number>(Number_$type, 0);
		let $t = this.radioButtons(rootElement);
		for (let i = 0; i < $t.length; i++) {
			let button = $t[i];
			let buttonText: string = button.parent() != null ? button.parent().getText() : "not found";
			buttonText = buttonText != null ? buttonText.trim() : null;
			buttonLabels.add(buttonText);
			buttonsChecked.add1(button.getProperty("checked"));
			buttonLefts.add(button.getOffset().left);
			buttonTops.add(button.getOffset().top);
			let labelElement: HTMLElement = <HTMLElement>button.parent().getNativeElement();
			let isVisible: boolean = labelElement.offsetParent != null;
			buttonWidths.add(labelElement.offsetWidth);
			buttonHeights.add(labelElement.offsetHeight);
			buttonVisibilities.add(isVisible);
		}
		;
		return ((() => {
			let $ret = new FinancialChartRangeSelectorVisualData();
			$ret.buttonLabels = buttonLabels.toArray();
			$ret.buttonsChecked = buttonsChecked.toArray();
			$ret.buttonLefts = buttonLefts.toArray();
			$ret.buttonTops = buttonTops.toArray();
			$ret.buttonVisibilities = buttonVisibilities.toArray();
			$ret.buttonWidths = buttonWidths.toArray();
			$ret.buttonHeights = buttonHeights.toArray();
			$ret.visibility = rootElement.getStyleProperty("visibility");
			$ret.left = parseFloat(rootElement.getStyleProperty("offsetLeft"));
			$ret.top = parseFloat(rootElement.getStyleProperty("offsetTop"));
			$ret.width = parseFloat(rootElement.getStyleProperty("offsetWidth"));
			$ret.height = parseFloat(rootElement.getStyleProperty("offsetHeight"));
			return $ret;
		})());
	}
	private getOption(element: DomWrapper): FinancialChartRangeSelectorOption {
		return FinancialChartRangeSelectorOption.All;
	}
	updateRadioButtonVisibility(options: FinancialChartRangeSelectorOptionCollection): void {
	}
	private radioButtons(root: DomWrapper): DomWrapper[] {
		return TemplatedHtmlControl.findChildElements(root, "input").toArray();
	}
}


