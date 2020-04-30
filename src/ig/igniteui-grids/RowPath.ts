/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, enumGetBox, Type, markType } from "igniteui-core/type";
import { FixedCellPositions, FixedCellPositions_$type } from "./FixedCellPositions";
import { PinnedPositions } from "./PinnedPositions";

/**
 * @hidden 
 */
export class RowPath extends Base {
	static $t: Type = markType(RowPath, 'RowPath');
	private _section: number = 0;
	get section(): number {
		return this._section;
	}
	set section(value: number) {
		this._section = value;
		this.calculateHashCode();
	}
	private _row: number = 0;
	get row(): number {
		return this._row;
	}
	set row(value: number) {
		this._row = value;
		this.calculateHashCode();
	}
	private _fixedPosition: FixedCellPositions = FixedCellPositions.None;
	get fixedPosition(): FixedCellPositions {
		return this._fixedPosition;
	}
	set fixedPosition(value: FixedCellPositions) {
		this._fixedPosition = value;
		this.calculateHashCode();
	}
	private _pinned: PinnedPositions = PinnedPositions.None;
	get pinned(): PinnedPositions {
		return this._pinned;
	}
	set pinned(value: PinnedPositions) {
		this._pinned = value;
		this.calculateHashCode();
	}
	constructor(section: number, row: number) {
		super();
		this.fixedPosition = FixedCellPositions.None;
		this.pinned = PinnedPositions.None;
		this._section = section;
		this._row = row;
		this.calculateHashCode();
	}
	private _hashCode: number = -1;
	protected calculateHashCode(): void {
		this._hashCode = (this._section * 1000000) + this._row;
	}
	getHashCode(): number {
		return this._hashCode;
	}
	equals(obj: any): boolean {
		let other: RowPath = <RowPath>obj;
		if (this._fixedPosition != other._fixedPosition) {
			return false;
		}
		if (this._section != other._section) {
			return false;
		}
		if (this._row != other._row) {
			return false;
		}
		return true;
	}
	toString(): string {
		return "F" + enumGetBox<FixedCellPositions>(FixedCellPositions_$type, this._fixedPosition) + "." + this._section + "." + this._row;
	}
	static readonly pINNED_SEPARATOR_SUMMARY_INDEX: number = -104;
	static readonly pINNED_SEPARATOR_INDEX: number = -103;
	static readonly rESIZE_SEPARATOR_INDEX: number = -102;
	static readonly hEADER_SEPARATOR_INDEX: number = -101;
	static readonly hEADER_SECTION_INDEX: number = -100;
	static readonly hEADER_ROW_INDEX: number = -100;
	static readonly sECTION_HEADER_ROW_INDEX: number = -200;
	static readonly sECTION_FOOTER_ROW_INDEX: number = -201;
	get isHeaderCell(): boolean {
		return ((this._row == RowPath.hEADER_ROW_INDEX || this._row == RowPath.hEADER_SEPARATOR_INDEX) && this._section == RowPath.hEADER_SECTION_INDEX);
	}
	get isHeaderSeparatorCell(): boolean {
		return this._row == RowPath.hEADER_SEPARATOR_INDEX;
	}
	get isSectionBoundingCell(): boolean {
		return (this._row == RowPath.sECTION_HEADER_ROW_INDEX || this._row == RowPath.sECTION_FOOTER_ROW_INDEX);
	}
	private _isPinnedBottom: boolean = false;
	get isPinnedBottom(): boolean {
		return this._isPinnedBottom;
	}
	set isPinnedBottom(value: boolean) {
		this._isPinnedBottom = value;
	}
	private _bottomPinnedPosition: number = -1;
	get bottomPinnedPosition(): number {
		return this._bottomPinnedPosition;
	}
	set bottomPinnedPosition(value: number) {
		this._bottomPinnedPosition = value;
	}
	clone(): any {
		let ret = new RowPath(this.section, this.row);
		ret.fixedPosition = this.fixedPosition;
		ret.isPinnedBottom = this.isPinnedBottom;
		ret.bottomPinnedPosition = this.bottomPinnedPosition;
		return ret;
	}
}


