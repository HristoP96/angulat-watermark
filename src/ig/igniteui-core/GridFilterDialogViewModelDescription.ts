/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { GridFilterDialogViewModelRowDescription } from "./GridFilterDialogViewModelRowDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridFilterDialogViewModelDescription extends Description {
	static $t: Type = markType(GridFilterDialogViewModelDescription, 'GridFilterDialogViewModelDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridFilterDialogViewModel";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _propertyType: string = null;
	get propertyType(): string {
		return this._propertyType;
	}
	set propertyType(value: string) {
		this._propertyType = value;
		this.markDirty("PropertyType");
	}
	private _isTopLevelOr: boolean = false;
	get isTopLevelOr(): boolean {
		return this._isTopLevelOr;
	}
	set isTopLevelOr(value: boolean) {
		this._isTopLevelOr = value;
		this.markDirty("IsTopLevelOr");
	}
	private _maxGroupingLevels: number = 0;
	get maxGroupingLevels(): number {
		return this._maxGroupingLevels;
	}
	set maxGroupingLevels(value: number) {
		this._maxGroupingLevels = value;
		this.markDirty("MaxGroupingLevels");
	}
	private _rows: GridFilterDialogViewModelRowDescription[] = null;
	get rows(): GridFilterDialogViewModelRowDescription[] {
		return this._rows;
	}
	set rows(value: GridFilterDialogViewModelRowDescription[]) {
		this._rows = value;
		this.markDirty("Rows");
	}
}


