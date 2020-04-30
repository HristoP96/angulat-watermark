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
export class StockPopulateEventArgs extends Base {
	static $t: Type = markType(StockPopulateEventArgs, 'StockPopulateEventArgs');
	constructor(symbol: string, name: string) {
		super();
		this.symbol = symbol;
		this.name = name;
	}
	private _symbol: string = null;
	get symbol(): string {
		return this._symbol;
	}
	set symbol(value: string) {
		this._symbol = value;
	}
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		this._name = value;
	}
}


