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
export class CellStyleRequestedEventArgsDescription extends Description {
	static $t: Type = markType(CellStyleRequestedEventArgsDescription, 'CellStyleRequestedEventArgsDescription', (<any>Description).$type);
	protected get_type(): string {
		return "CellStyleRequestedEventArgs";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _styleKey: string = null;
	get styleKey(): string {
		return this._styleKey;
	}
	set styleKey(value: string) {
		this._styleKey = value;
		this.markDirty("StyleKey");
	}
	private _resolvedValueRef: string = null;
	get resolvedValueRef(): string {
		return this._resolvedValueRef;
	}
	set resolvedValueRef(value: string) {
		this._resolvedValueRef = value;
		this.markDirty("ResolvedValueRef");
	}
	private _rowNumber: number = 0;
	get rowNumber(): number {
		return this._rowNumber;
	}
	set rowNumber(value: number) {
		this._rowNumber = value;
		this.markDirty("RowNumber");
	}
}


