/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class SelectedItemChangedEventArgs extends EventArgs {
	static $t: Type = markType(SelectedItemChangedEventArgs, 'SelectedItemChangedEventArgs', (<any>EventArgs).$type);
	private _oldItem: any = null;
	get oldItem(): any {
		return this._oldItem;
	}
	set oldItem(value: any) {
		this._oldItem = value;
	}
	private _newItem: any = null;
	get newItem(): any {
		return this._newItem;
	}
	set newItem(value: any) {
		this._newItem = value;
	}
	constructor(oldItem: any, newItem: any) {
		super();
		this.oldItem = oldItem;
		this.newItem = newItem;
	}
}


