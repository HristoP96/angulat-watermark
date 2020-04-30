/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { CellKeyDescription } from "./CellKeyDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridSelectedCellsChangedEventArgsDescription extends Description {
	static $t: Type = markType(GridSelectedCellsChangedEventArgsDescription, 'GridSelectedCellsChangedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridSelectedCellsChangedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _addedCells: CellKeyDescription[] = null;
	get addedCells(): CellKeyDescription[] {
		return this._addedCells;
	}
	set addedCells(value: CellKeyDescription[]) {
		this._addedCells = value;
		this.markDirty("AddedCells");
	}
	private _removedCells: CellKeyDescription[] = null;
	get removedCells(): CellKeyDescription[] {
		return this._removedCells;
	}
	set removedCells(value: CellKeyDescription[]) {
		this._removedCells = value;
		this.markDirty("RemovedCells");
	}
}


