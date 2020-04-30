/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { ColumnSortDescriptionDescription } from "./ColumnSortDescriptionDescription";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GridSortDescriptionsChangedEventArgsDescription extends Description {
	static $t: Type = markType(GridSortDescriptionsChangedEventArgsDescription, 'GridSortDescriptionsChangedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "GridSortDescriptionsChangedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _sortDescriptions: ColumnSortDescriptionDescription[] = null;
	get sortDescriptions(): ColumnSortDescriptionDescription[] {
		return this._sortDescriptions;
	}
	set sortDescriptions(value: ColumnSortDescriptionDescription[]) {
		this._sortDescriptions = value;
		this.markDirty("SortDescriptions");
	}
}


