/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";
import { GridCellPosition } from "./GridCellPosition";

/**
 * @hidden 
 */
export class GridActiveCellChangedEventArgs extends EventArgs {
	static $t: Type = markType(GridActiveCellChangedEventArgs, 'GridActiveCellChangedEventArgs', (<any>EventArgs).$type);
	private _newActiveCell: GridCellPosition = null;
	get newActiveCell(): GridCellPosition {
		return this._newActiveCell;
	}
	set newActiveCell(value: GridCellPosition) {
		this._newActiveCell = value;
	}
	private _oldActiveCell: GridCellPosition = null;
	get oldActiveCell(): GridCellPosition {
		return this._oldActiveCell;
	}
	set oldActiveCell(value: GridCellPosition) {
		this._oldActiveCell = value;
	}
}


