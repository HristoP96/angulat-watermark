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
export class GridCellPosition extends Base {
	static $t: Type = markType(GridCellPosition, 'GridCellPosition');
	private _rowIndex: number = 0;
	private _columnUniqueKey: string = null;
	get rowIndex(): number {
		return this._rowIndex;
	}
	set rowIndex(value: number) {
		this._rowIndex = value;
	}
	get columnUniqueKey(): string {
		return this._columnUniqueKey;
	}
	set columnUniqueKey(value: string) {
		this._columnUniqueKey = value;
	}
}


