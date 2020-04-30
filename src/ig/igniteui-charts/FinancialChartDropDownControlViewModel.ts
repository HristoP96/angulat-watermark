/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { NormalizedEvent } from "igniteui-core/dom";

/**
 * @hidden 
 */
export class FinancialChartDropDownControlViewModel extends Base {
	static $t: Type = markType(FinancialChartDropDownControlViewModel, 'FinancialChartDropDownControlViewModel');
	private _onSelectionChanged: () => void = null;
	get onSelectionChanged(): () => void {
		return this._onSelectionChanged;
	}
	set onSelectionChanged(value: () => void) {
		this._onSelectionChanged = value;
	}
	private _isOpen: boolean = false;
	get isOpen(): boolean {
		return this._isOpen;
	}
	set isOpen(value: boolean) {
		this._isOpen = value;
	}
	private _notifyChanged: () => void = null;
	get notifyChanged(): () => void {
		return this._notifyChanged;
	}
	set notifyChanged(value: () => void) {
		this._notifyChanged = value;
	}
	updateUI(): void {
		if (this.notifyChanged != null) {
			this.notifyChanged();
		}
	}
	onButtonPressed(): void {
		this.isOpen = !this.isOpen;
		this.updateUI();
	}
	handleDropDownClick(e: NormalizedEvent): void {
		if (this.dropDownClick != null) {
			this.dropDownClick(e);
		}
	}
	private _dropDownClick: (arg1: NormalizedEvent) => void = null;
	get dropDownClick(): (arg1: NormalizedEvent) => void {
		return this._dropDownClick;
	}
	set dropDownClick(value: (arg1: NormalizedEvent) => void) {
		this._dropDownClick = value;
	}
}


