/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, runOn, Type, markType } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, NormalizedEvent, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { FinancialChartDropDownControlViewModel } from "./FinancialChartDropDownControlViewModel";
import { TemplatedHtmlControl } from "./TemplatedHtmlControl";

/**
 * @hidden 
 */
export class FinancialChartDropDownControlView extends Base {
	static $t: Type = markType(FinancialChartDropDownControlView, 'FinancialChartDropDownControlView');
	private _handlingButton: boolean = false;
	private get handlingButton(): boolean {
		return this._handlingButton;
	}
	private set handlingButton(value: boolean) {
		this._handlingButton = value;
	}
	private _handlingItem: boolean = false;
	private get handlingItem(): boolean {
		return this._handlingItem;
	}
	private set handlingItem(value: boolean) {
		this._handlingItem = value;
	}
	private _buttonElement: DomWrapper = null;
	get buttonElement(): DomWrapper {
		return this._buttonElement;
	}
	set buttonElement(value: DomWrapper) {
		this._buttonElement = value;
	}
	private _dropDownElement: DomWrapper = null;
	get dropDownElement(): DomWrapper {
		return this._dropDownElement;
	}
	set dropDownElement(value: DomWrapper) {
		this._dropDownElement = value;
	}
	private _viewModel: FinancialChartDropDownControlViewModel = null;
	get viewModel(): FinancialChartDropDownControlViewModel {
		return this._viewModel;
	}
	set viewModel(value: FinancialChartDropDownControlViewModel) {
		this._viewModel = value;
	}
	private handleDocumentClick(e: Event): void {
		if (!this.handlingButton && !this.handlingItem) {
			this.close();
		}
		this.handlingButton = false;
		this.handlingItem = false;
	}
	private handleButton(e: NormalizedEvent): void {
		this.handlingButton = true;
	}
	protected onSelect(target: any): void {
	}
	handleDropDownClick(e: NormalizedEvent): void {
		this.handlingItem = true;
		this.onSelect(e.target);
	}
	attach(renderer: DomRenderer, viewModel: FinancialChartDropDownControlViewModel, dropDownButtonClass: string, dropDownMenuClass: string): void {
		this.viewModel = viewModel;
		this.viewModel.dropDownClick = runOn(this, this.handleDropDownClick);
		this.buttonElement = renderer.querySelector(dropDownButtonClass);
		this.buttonElement.listen("click", runOn(this, this.handleButton));
		this.dropDownElement = renderer.querySelector(dropDownMenuClass);
		this.dropDownElement.setStyleProperty("display", "none");
		this.dropDownElement.listen("click", runOn(this, this.handleDropDownClick));
		document.addEventListener("click", runOn(this, this.handleDocumentClick), false);
	}
	protected close(): void {
		this.viewModel.isOpen = false;
		this.viewModel.updateUI();
	}
}


