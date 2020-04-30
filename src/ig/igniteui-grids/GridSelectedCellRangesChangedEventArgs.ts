/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { GridSelectedCellRangesCollection } from "./GridSelectedCellRangesCollection";

/**
 * @hidden 
 */
export class GridSelectedCellRangesChangedEventArgs extends EventArgs {
	static $t: Type = markType(GridSelectedCellRangesChangedEventArgs, 'GridSelectedCellRangesChangedEventArgs', (<any>EventArgs).$type);
	private _addedRanges: GridSelectedCellRangesCollection = null;
	get addedRanges(): GridSelectedCellRangesCollection {
		return this._addedRanges;
	}
	set addedRanges(value: GridSelectedCellRangesCollection) {
		this._addedRanges = value;
	}
	private _removedRanges: GridSelectedCellRangesCollection = null;
	get removedRanges(): GridSelectedCellRangesCollection {
		return this._removedRanges;
	}
	set removedRanges(value: GridSelectedCellRangesCollection) {
		this._removedRanges = value;
	}
	private _updatedRanges: GridSelectedCellRangesCollection = null;
	get updatedRanges(): GridSelectedCellRangesCollection {
		return this._updatedRanges;
	}
	set updatedRanges(value: GridSelectedCellRangesCollection) {
		this._updatedRanges = value;
	}
}


