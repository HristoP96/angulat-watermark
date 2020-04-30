/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { CellRangeDescription } from "./CellRangeDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridSelectedCellRangesChangedEventArgsDescription extends Description {
	static $t: Type = markType(GridSelectedCellRangesChangedEventArgsDescription, 'GridSelectedCellRangesChangedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridSelectedCellRangesChangedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _addedRanges: CellRangeDescription[] = null;
	get addedRanges(): CellRangeDescription[] {
		return this._addedRanges;
	}
	set addedRanges(value: CellRangeDescription[]) {
		this._addedRanges = value;
		this.markDirty("AddedRanges");
	}
	private _removedRanges: CellRangeDescription[] = null;
	get removedRanges(): CellRangeDescription[] {
		return this._removedRanges;
	}
	set removedRanges(value: CellRangeDescription[]) {
		this._removedRanges = value;
		this.markDirty("RemovedRanges");
	}
	private _updatedRanges: CellRangeDescription[] = null;
	get updatedRanges(): CellRangeDescription[] {
		return this._updatedRanges;
	}
	set updatedRanges(value: CellRangeDescription[]) {
		this._updatedRanges = value;
		this.markDirty("UpdatedRanges");
	}
}


