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
export class CellRange extends Base {
	static $t: Type = markType(CellRange, 'CellRange');
	private _startColumn: number = -2147483648;
	private _endColumn: number = -2147483648;
	private _startRow: number = -2147483648;
	private _endRow: number = -2147483648;
	get startColumn(): number {
		return this._startColumn;
	}
	set startColumn(value: number) {
		this._startColumn = value;
	}
	get endColumn(): number {
		return this._endColumn;
	}
	set endColumn(value: number) {
		this._endColumn = value;
	}
	get startRow(): number {
		return this._startRow;
	}
	set startRow(value: number) {
		this._startRow = value;
	}
	get endRow(): number {
		return this._endRow;
	}
	set endRow(value: number) {
		this._endRow = value;
	}
	inRange(row: number, column: number): boolean {
		return this.isRowInRange(row) && this.isColumnInRange(column);
	}
	isRowInRange(row: number): boolean {
		return row >= this.startRow && row <= this.endRow;
	}
	isColumnInRange(column: number): boolean {
		return column >= this.startColumn && column <= this.endColumn;
	}
	clone(): CellRange {
		let r = new CellRange();
		r.startColumn = this.startColumn;
		r.endColumn = this.endColumn;
		r.startRow = this.startRow;
		r.endRow = this.endRow;
		return r;
	}
}


