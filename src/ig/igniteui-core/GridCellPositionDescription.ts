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
export class GridCellPositionDescription extends Description {
	static $t: Type = markType(GridCellPositionDescription, 'GridCellPositionDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridCellPosition";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _rowIndex: number = 0;
	get rowIndex(): number {
		return this._rowIndex;
	}
	set rowIndex(value: number) {
		this._rowIndex = value;
		this.markDirty("RowIndex");
	}
	private _columnUniqueKey: string = null;
	get columnUniqueKey(): string {
		return this._columnUniqueKey;
	}
	set columnUniqueKey(value: string) {
		this._columnUniqueKey = value;
		this.markDirty("ColumnUniqueKey");
	}
}


