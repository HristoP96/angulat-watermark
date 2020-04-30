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
export class DataBindingEventArgsDescription extends Description {
	static $t: Type = markType(DataBindingEventArgsDescription, 'DataBindingEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "DataBindingEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _resolvedValueRef: string = null;
	get resolvedValueRef(): string {
		return this._resolvedValueRef;
	}
	set resolvedValueRef(value: string) {
		this._resolvedValueRef = value;
		this.markDirty("ResolvedValueRef");
	}
	private _rowObjectRef: string = null;
	get rowObjectRef(): string {
		return this._rowObjectRef;
	}
	set rowObjectRef(value: string) {
		this._rowObjectRef = value;
		this.markDirty("RowObjectRef");
	}
}


