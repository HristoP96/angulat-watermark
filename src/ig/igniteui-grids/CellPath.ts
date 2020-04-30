/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RowPath } from "./RowPath";
import { FixedCellPositions } from "./FixedCellPositions";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CellPath extends RowPath {
	static $t: Type = markType(CellPath, 'CellPath', (<any>RowPath).$type);
	static readonly rOW_SEPARATOR_COLUMN_INDEX: number = -300;
	static readonly sPANNING_ELEMENT_COLUMN_INDEX: number = -400;
	static readonly sPANNING_ELEMENT_PINNED_LEFT_COLUMN_INDEX: number = -401;
	static readonly sPANNING_ELEMENT_PINNED_RIGHT_COLUMN_INDEX: number = -402;
	static readonly pINNED_LEFT_COLUMN_INDEX: number = -500;
	static readonly pINNED_RIGHT_COLUMN_INDEX: number = -501;
	static readonly tEMP_YANKED_COLUMN_INDEX: number = -800;
	private _column: number;
	get column(): number {
		return this._column;
	}
	set column(value: number) {
		this._column = value;
		this.calculateHashCode();
	}
	private _cellHashCode: number;
	protected calculateHashCode(): void {
		super.calculateHashCode();
		this._cellHashCode = (this.column * 100000000) + super.getHashCode();
	}
	constructor(initNumber: number, position: FixedCellPositions, column: number, section: number, row: number);
	constructor(initNumber: number, column: number, section: number, row: number);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let position: FixedCellPositions = <FixedCellPositions>_rest[0];
				let column: number = <number>_rest[1];
				let section: number = <number>_rest[2];
				let row: number = <number>_rest[3];
				let $outerArgs = <any[]>[ column, section, row ];
				{
					let column: number = <number>$outerArgs[0];
					let section: number = <number>$outerArgs[1];
					let row: number = <number>$outerArgs[2];
					super(section, row);
					this._column = 0;
					this._cellHashCode = -1;
					this._isRootSummarySeparator = false;
					this._isSectionSummaryCell = false;
					this._isRootSummaryCell = false;
					this._isPushedUnderStickyRows = false;
					this._isCompletelyHiddenUnderStickyRows = false;
					this._column = column;
					this.calculateHashCode();
				}
				this.fixedPosition = position;
				this.calculateHashCode();
			}
			break;

			case 1:
			{
				let column: number = <number>_rest[0];
				let section: number = <number>_rest[1];
				let row: number = <number>_rest[2];
				super(section, row);
				this._column = 0;
				this._cellHashCode = -1;
				this._isRootSummarySeparator = false;
				this._isSectionSummaryCell = false;
				this._isRootSummaryCell = false;
				this._isPushedUnderStickyRows = false;
				this._isCompletelyHiddenUnderStickyRows = false;
				this._column = column;
				this.calculateHashCode();
			}
			break;

		}

	}
	getHashCode(): number {
		return this._cellHashCode;
	}
	equals(obj: any): boolean {
		if (!super.equals(obj)) {
			return false;
		}
		let other: CellPath = <CellPath>obj;
		if (obj == null) {
			return false;
		}
		if (this._column != other._column) {
			return false;
		}
		if (this.isSectionSummaryCell != other.isSectionSummaryCell) {
			return false;
		}
		if (this.isRootSummaryCell != other.isRootSummaryCell) {
			return false;
		}
		return true;
	}
	toString(): string {
		return this._column + "." + super.toString();
	}
	clone(): any {
		let clone = new CellPath(0, this.fixedPosition, this._column, this.section, this.row);
		clone.isSectionSummaryCell = this.isSectionSummaryCell;
		clone.isRootSummaryCell = this.isRootSummaryCell;
		clone.isPinnedBottom = this.isPinnedBottom;
		clone.bottomPinnedPosition = this.bottomPinnedPosition;
		clone.pinned = this.pinned;
		clone.isPushedUnderStickyRows = this.isPushedUnderStickyRows;
		clone.isCompletelyHiddenUnderStickyRows = this.isCompletelyHiddenUnderStickyRows;
		clone.isRootSummarySeparator = this.isRootSummarySeparator;
		return clone;
	}
	private _isRootSummarySeparator: boolean;
	get isRootSummarySeparator(): boolean {
		return this._isRootSummarySeparator;
	}
	set isRootSummarySeparator(value: boolean) {
		this._isRootSummarySeparator = value;
	}
	get isRowSeparator(): boolean {
		return (this._column == CellPath.rOW_SEPARATOR_COLUMN_INDEX);
	}
	get isContentCell(): boolean {
		return ((this._column >= 0 || this._column == CellPath.tEMP_YANKED_COLUMN_INDEX || this._column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX) && this.row >= 0 && this.row >= 0);
	}
	get isSpanningCell(): boolean {
		return this._column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX || this._column == CellPath.sPANNING_ELEMENT_PINNED_LEFT_COLUMN_INDEX || this._column == CellPath.sPANNING_ELEMENT_PINNED_RIGHT_COLUMN_INDEX;
	}
	get isHeaderContentCell(): boolean {
		return this.isHeaderCell && !this.isRowSeparator;
	}
	get isResizeSeparatorCell(): boolean {
		return this.row == RowPath.rESIZE_SEPARATOR_INDEX && this._column == CellPath.sPANNING_ELEMENT_COLUMN_INDEX;
	}
	get isPinnedLeftSeparatorCell(): boolean {
		return (this.row == RowPath.pINNED_SEPARATOR_INDEX || this.row == RowPath.pINNED_SEPARATOR_SUMMARY_INDEX) && this.column == CellPath.pINNED_LEFT_COLUMN_INDEX;
	}
	get isPinnedRightSeparatorCell(): boolean {
		return (this.row == RowPath.pINNED_SEPARATOR_INDEX || this.row == RowPath.pINNED_SEPARATOR_SUMMARY_INDEX) && this.column == CellPath.pINNED_RIGHT_COLUMN_INDEX;
	}
	get isPinnedLeftHeaderSeparatorCell(): boolean {
		return this.row == RowPath.hEADER_ROW_INDEX && this.column == CellPath.pINNED_LEFT_COLUMN_INDEX;
	}
	get isPinnedRightHeaderSeparatorCell(): boolean {
		return this.row == RowPath.hEADER_ROW_INDEX && this.column == CellPath.pINNED_RIGHT_COLUMN_INDEX;
	}
	private _isSectionSummaryCell: boolean;
	get isSectionSummaryCell(): boolean {
		return this._isSectionSummaryCell;
	}
	set isSectionSummaryCell(value: boolean) {
		this._isSectionSummaryCell = value;
	}
	private _isRootSummaryCell: boolean;
	get isRootSummaryCell(): boolean {
		return this._isRootSummaryCell;
	}
	set isRootSummaryCell(value: boolean) {
		this._isRootSummaryCell = value;
	}
	get isSummaryCell(): boolean {
		return this.isSectionSummaryCell || this.isRootSummaryCell;
	}
	private _isPushedUnderStickyRows: boolean;
	get isPushedUnderStickyRows(): boolean {
		return this._isPushedUnderStickyRows;
	}
	set isPushedUnderStickyRows(value: boolean) {
		this._isPushedUnderStickyRows = value;
	}
	private _isCompletelyHiddenUnderStickyRows: boolean;
	get isCompletelyHiddenUnderStickyRows(): boolean {
		return this._isCompletelyHiddenUnderStickyRows;
	}
	set isCompletelyHiddenUnderStickyRows(value: boolean) {
		this._isCompletelyHiddenUnderStickyRows = value;
	}
}


