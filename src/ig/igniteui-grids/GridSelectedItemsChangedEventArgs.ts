/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, IList$1, IList$1_$type, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class GridSelectedItemsChangedEventArgs extends EventArgs {
	static $t: Type = markType(GridSelectedItemsChangedEventArgs, 'GridSelectedItemsChangedEventArgs', (<any>EventArgs).$type);
	private _addedItems: IList$1<any> = null;
	get addedItems(): IList$1<any> {
		return this._addedItems;
	}
	set addedItems(value: IList$1<any>) {
		this._addedItems = value;
	}
	private _removedItems: IList$1<any> = null;
	get removedItems(): IList$1<any> {
		return this._removedItems;
	}
	set removedItems(value: IList$1<any>) {
		this._removedItems = value;
	}
}


