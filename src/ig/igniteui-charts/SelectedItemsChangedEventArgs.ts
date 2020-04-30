/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, IList, IList_$type, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class SelectedItemsChangedEventArgs extends EventArgs {
	static $t: Type = markType(SelectedItemsChangedEventArgs, 'SelectedItemsChangedEventArgs', (<any>EventArgs).$type);
	private _oldItems: IList = null;
	get oldItems(): IList {
		return this._oldItems;
	}
	set oldItems(value: IList) {
		this._oldItems = value;
	}
	private _newItems: IList = null;
	get newItems(): IList {
		return this._newItems;
	}
	set newItems(value: IList) {
		this._newItems = value;
	}
	constructor(oldItems: IList, newItems: IList) {
		super();
		this.oldItems = oldItems;
		this.newItems = newItems;
	}
}


