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
export class CellStyleRequestedEventArgs extends EventArgs {
	static $t: Type = markType(CellStyleRequestedEventArgs, 'CellStyleRequestedEventArgs', (<any>EventArgs).$type);
	private _styleKey: string = null;
	get styleKey(): string {
		return this._styleKey;
	}
	set styleKey(value: string) {
		this._styleKey = value;
	}
	private _resolvedValue: any = null;
	get resolvedValue(): any {
		return this._resolvedValue;
	}
	set resolvedValue(value: any) {
		this._resolvedValue = value;
	}
	private _rowNumber: number = 0;
	get rowNumber(): number {
		return this._rowNumber;
	}
	set rowNumber(value: number) {
		this._rowNumber = value;
	}
}


