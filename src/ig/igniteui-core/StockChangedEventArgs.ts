/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class StockChangedEventArgs extends Base {
	static $t: Type = markType(StockChangedEventArgs, 'StockChangedEventArgs');
	constructor(removed: string[], added: string[]) {
		super();
		this.addedSymbols = removed;
		this.removedSymbols = added;
	}
	private _addedSymbols: string[] = null;
	get addedSymbols(): string[] {
		return this._addedSymbols;
	}
	set addedSymbols(value: string[]) {
		this._addedSymbols = value;
	}
	private _removedSymbols: string[] = null;
	get removedSymbols(): string[] {
		return this._removedSymbols;
	}
	set removedSymbols(value: string[]) {
		this._removedSymbols = value;
	}
}


