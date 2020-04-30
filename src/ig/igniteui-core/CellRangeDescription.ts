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
export class CellRangeDescription extends Description {
	static $t: Type = markType(CellRangeDescription, 'CellRangeDescription', (<any>Description).$type);
	protected get_type(): string {
		return "CellRange";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _startColumn: number = 0;
	get startColumn(): number {
		return this._startColumn;
	}
	set startColumn(value: number) {
		this._startColumn = value;
		this.markDirty("StartColumn");
	}
	private _endColumn: number = 0;
	get endColumn(): number {
		return this._endColumn;
	}
	set endColumn(value: number) {
		this._endColumn = value;
		this.markDirty("EndColumn");
	}
	private _startRow: number = 0;
	get startRow(): number {
		return this._startRow;
	}
	set startRow(value: number) {
		this._startRow = value;
		this.markDirty("StartRow");
	}
	private _endRow: number = 0;
	get endRow(): number {
		return this._endRow;
	}
	set endRow(value: number) {
		this._endRow = value;
		this.markDirty("EndRow");
	}
}


