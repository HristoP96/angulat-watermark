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
export class ColumnSortDescriptionDescription extends Description {
	static $t: Type = markType(ColumnSortDescriptionDescription, 'ColumnSortDescriptionDescription', (<any>Description).$type);
	protected get_type(): string {
		return "ColumnSortDescription";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _propertyPath: string = null;
	get propertyPath(): string {
		return this._propertyPath;
	}
	set propertyPath(value: string) {
		this._propertyPath = value;
		this.markDirty("PropertyPath");
	}
	private _sortDirection: string = null;
	get sortDirection(): string {
		return this._sortDirection;
	}
	set sortDirection(value: string) {
		this._sortDirection = value;
		this.markDirty("SortDirection");
	}
}


