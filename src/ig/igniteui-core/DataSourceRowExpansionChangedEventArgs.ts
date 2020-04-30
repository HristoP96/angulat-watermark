/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class DataSourceRowExpansionChangedEventArgs extends EventArgs {
	static $t: Type = markType(DataSourceRowExpansionChangedEventArgs, 'DataSourceRowExpansionChangedEventArgs', (<any>EventArgs).$type);
	private _rowIndex: number = -1;
	private _oldState: boolean = false;
	private _newState: boolean = false;
	constructor(rowIndex: number, oldState: boolean, newState: boolean) {
		super();
		this._rowIndex = rowIndex;
		this._oldState = oldState;
		this._newState = newState;
	}
	get rowIndex(): number {
		return this._rowIndex;
	}
	get oldState(): boolean {
		return this._oldState;
	}
	get newState(): boolean {
		return this._newState;
	}
}


