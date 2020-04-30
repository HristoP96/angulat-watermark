/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { ListSortDirection } from "igniteui-core/ListSortDirection";

/**
 * @hidden 
 */
export class ColumnSortDescription extends Base {
	static $t: Type = markType(ColumnSortDescription, 'ColumnSortDescription');
	constructor(initNumber: number);
	constructor(initNumber: number, propertyPath: string);
	constructor(initNumber: number, propertyPath: string, direction: ListSortDirection);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0: break;
			case 1:
			{
				let propertyPath: string = <string>_rest[0];
				this.propertyPath = propertyPath;
			}
			break;

			case 2:
			{
				let propertyPath: string = <string>_rest[0];
				let direction: ListSortDirection = <ListSortDirection>_rest[1];
				this.propertyPath = propertyPath;
				this.sortDirection = direction;
			}
			break;

		}

	}
	private _propertyPath: string = null;
	get propertyPath(): string {
		return this._propertyPath;
	}
	set propertyPath(value: string) {
		this._propertyPath = value;
	}
	private _sortDirection: ListSortDirection = <ListSortDirection>0;
	get sortDirection(): ListSortDirection {
		return this._sortDirection;
	}
	set sortDirection(value: ListSortDirection) {
		this._sortDirection = value;
	}
	equals(other: any): boolean {
		let o: ColumnSortDescription = <ColumnSortDescription>other;
		if (o == null) {
			return super.equals(other);
		}
		return o.propertyPath == this.propertyPath && o.sortDirection == this.sortDirection;
	}
	getHashCode(): number {
		return Base.getHashCodeStatic(this.propertyPath) * 17 + <number>this.sortDirection;
	}
}


