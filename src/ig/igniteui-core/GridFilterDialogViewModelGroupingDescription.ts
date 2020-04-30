/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridFilterDialogViewModelGroupingDescription extends Description {
	static $t: Type = markType(GridFilterDialogViewModelGroupingDescription, 'GridFilterDialogViewModelGroupingDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridFilterDialogViewModelGrouping";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _startIndex: number = 0;
	get startIndex(): number {
		return this._startIndex;
	}
	set startIndex(value: number) {
		this._startIndex = value;
		this.markDirty("StartIndex");
	}
	private _endIndex: number = 0;
	get endIndex(): number {
		return this._endIndex;
	}
	set endIndex(value: number) {
		this._endIndex = value;
		this.markDirty("EndIndex");
	}
	private _isOrGrouping: boolean = false;
	get isOrGrouping(): boolean {
		return this._isOrGrouping;
	}
	set isOrGrouping(value: boolean) {
		this._isOrGrouping = value;
		this.markDirty("IsOrGrouping");
	}
}


