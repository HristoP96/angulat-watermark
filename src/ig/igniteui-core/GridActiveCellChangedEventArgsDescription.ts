/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { GridCellPositionDescription } from "./GridCellPositionDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridActiveCellChangedEventArgsDescription extends Description {
	static $t: Type = markType(GridActiveCellChangedEventArgsDescription, 'GridActiveCellChangedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridActiveCellChangedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _newActiveCell: GridCellPositionDescription = null;
	get newActiveCell(): GridCellPositionDescription {
		return this._newActiveCell;
	}
	set newActiveCell(value: GridCellPositionDescription) {
		this._newActiveCell = value;
		this.markDirty("NewActiveCell");
	}
	private _oldActiveCell: GridCellPositionDescription = null;
	get oldActiveCell(): GridCellPositionDescription {
		return this._oldActiveCell;
	}
	set oldActiveCell(value: GridCellPositionDescription) {
		this._oldActiveCell = value;
		this.markDirty("OldActiveCell");
	}
}


