/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { TemplatedHtmlControl } from "./TemplatedHtmlControl";
import { FinancialChartDropDownControlView } from "./FinancialChartDropDownControlView";
import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";
import { Base, EventArgs, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export abstract class FinancialChartDropDownControl extends TemplatedHtmlControl {
	static $t: Type = markType(FinancialChartDropDownControl, 'FinancialChartDropDownControl', (<any>TemplatedHtmlControl).$type);
	constructor(className: string, template: any, defaultTemplate: string) {
		super(className, template, defaultTemplate);
	}
	protected onSelectionChanged(): void {
		if (this.selectionChanged != null) {
			this.selectionChanged(this, EventArgs.empty);
		}
	}
	selectionChanged: (sender: any, e: EventArgs) => void = null;
	provideContainer(container: any): void {
		super.provideContainer(container);
		this.view.attach(this.renderer, this.viewModel, this.dropDownButtonClass, this.dropDownMenuClass);
	}
	protected abstract get dropDownButtonClass(): string;
	protected abstract get dropDownMenuClass(): string;
	private _view: FinancialChartDropDownControlView = null;
	get view(): FinancialChartDropDownControlView {
		return this._view;
	}
	set view(value: FinancialChartDropDownControlView) {
		this._view = value;
	}
	private _viewModel: FinancialChartDropDownControlViewModel = null;
	get viewModel(): FinancialChartDropDownControlViewModel {
		return this._viewModel;
	}
	set viewModel(value: FinancialChartDropDownControlViewModel) {
		this._viewModel = value;
	}
	protected get_staysOpenOnClick(): boolean {
		return false;
	}
	protected get staysOpenOnClick(): boolean {
		return this.get_staysOpenOnClick();
	}
	onDocumentClick(e: Event): void {
		if (this.viewModel.isOpen) {
			let target: HTMLElement = <HTMLElement>e.target;
			let isButton: boolean = target.matches(this.dropDownButtonClass + " *");
			let hideDropDown: boolean = isButton || (this.staysOpenOnClick && target.matches(this.dropDownMenuClass + " *"));
			if (!hideDropDown) {
				this.viewModel.isOpen = false;
				this.viewModel.updateUI();
			}
		}
	}
}


