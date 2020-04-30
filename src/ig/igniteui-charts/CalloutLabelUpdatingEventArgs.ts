/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class CalloutLabelUpdatingEventArgs extends Base {
	static $t: Type = markType(CalloutLabelUpdatingEventArgs, 'CalloutLabelUpdatingEventArgs');
	private _xValue: any = null;
	get xValue(): any {
		return this._xValue;
	}
	set xValue(value: any) {
		this._xValue = value;
	}
	private _yValue: any = null;
	get yValue(): any {
		return this._yValue;
	}
	set yValue(value: any) {
		this._yValue = value;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _label: any = null;
	get label(): any {
		return this._label;
	}
	set label(value: any) {
		this._label = value;
	}
}


