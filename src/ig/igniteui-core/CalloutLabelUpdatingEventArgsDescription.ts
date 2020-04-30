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
export class CalloutLabelUpdatingEventArgsDescription extends Description {
	static $t: Type = markType(CalloutLabelUpdatingEventArgsDescription, 'CalloutLabelUpdatingEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "CalloutLabelUpdatingEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _xValueRef: string = null;
	get xValueRef(): string {
		return this._xValueRef;
	}
	set xValueRef(value: string) {
		this._xValueRef = value;
		this.markDirty("XValueRef");
	}
	private _yValueRef: string = null;
	get yValueRef(): string {
		return this._yValueRef;
	}
	set yValueRef(value: string) {
		this._yValueRef = value;
		this.markDirty("YValueRef");
	}
	private _itemRef: string = null;
	get itemRef(): string {
		return this._itemRef;
	}
	set itemRef(value: string) {
		this._itemRef = value;
		this.markDirty("ItemRef");
	}
	private _labelRef: string = null;
	get labelRef(): string {
		return this._labelRef;
	}
	set labelRef(value: string) {
		this._labelRef = value;
		this.markDirty("LabelRef");
	}
}


