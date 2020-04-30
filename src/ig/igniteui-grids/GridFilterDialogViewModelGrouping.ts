/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class GridFilterDialogViewModelGrouping extends Base {
	static $t: Type = markType(GridFilterDialogViewModelGrouping, 'GridFilterDialogViewModelGrouping');
	private _startIndex: number = 0;
	get startIndex(): number {
		return this._startIndex;
	}
	set startIndex(value: number) {
		this._startIndex = value;
	}
	private _endIndex: number = 0;
	get endIndex(): number {
		return this._endIndex;
	}
	set endIndex(value: number) {
		this._endIndex = value;
	}
	private _isOrGrouping: boolean = false;
	get isOrGrouping(): boolean {
		return this._isOrGrouping;
	}
	set isOrGrouping(value: boolean) {
		this._isOrGrouping = value;
	}
}


