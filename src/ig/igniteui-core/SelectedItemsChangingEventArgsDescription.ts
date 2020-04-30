/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SelectedItemsChangedEventArgsDescription } from "./SelectedItemsChangedEventArgsDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class SelectedItemsChangingEventArgsDescription extends SelectedItemsChangedEventArgsDescription {
	static $t: Type = markType(SelectedItemsChangingEventArgsDescription, 'SelectedItemsChangingEventArgsDescription', (<any>SelectedItemsChangedEventArgsDescription).$type);
	protected get_type(): string {
		return "SelectedItemsChangingEventArgs";
	}
	constructor() {
		super();
	}
	private _cancel: boolean = false;
	get cancel(): boolean {
		return this._cancel;
	}
	set cancel(value: boolean) {
		this._cancel = value;
		this.markDirty("Cancel");
	}
}


