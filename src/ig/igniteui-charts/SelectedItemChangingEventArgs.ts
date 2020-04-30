/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SelectedItemChangedEventArgs } from "./SelectedItemChangedEventArgs";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class SelectedItemChangingEventArgs extends SelectedItemChangedEventArgs {
	static $t: Type = markType(SelectedItemChangingEventArgs, 'SelectedItemChangingEventArgs', (<any>SelectedItemChangedEventArgs).$type);
	private _cancel: boolean = false;
	get cancel(): boolean {
		return this._cancel;
	}
	set cancel(value: boolean) {
		this._cancel = value;
	}
	constructor(oldItem: any, newItem: any) {
		super(oldItem, newItem);
	}
}


