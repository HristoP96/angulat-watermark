/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SelectedItemsChangedEventArgs } from "./SelectedItemsChangedEventArgs";
import { IList, IList_$type, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class SelectedItemsChangingEventArgs extends SelectedItemsChangedEventArgs {
	static $t: Type = markType(SelectedItemsChangingEventArgs, 'SelectedItemsChangingEventArgs', (<any>SelectedItemsChangedEventArgs).$type);
	private _cancel: boolean = false;
	get cancel(): boolean {
		return this._cancel;
	}
	set cancel(value: boolean) {
		this._cancel = value;
	}
	constructor(oldItems: IList, newItems: IList) {
		super(oldItems, newItems);
	}
}


