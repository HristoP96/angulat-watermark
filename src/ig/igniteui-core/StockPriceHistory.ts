/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { StockPricePoint } from "./StockPricePoint";
import { Base, Type, markType } from "./type";
import { stringIsNullOrEmpty } from "./string";

/**
 * @hidden 
 */
export class StockPriceHistory extends List$1<StockPricePoint> {
	static $t: Type = markType(StockPriceHistory, 'StockPriceHistory', (<any>List$1).$type.specialize((<any>StockPricePoint).$type));
	constructor() {
		super((<any>StockPricePoint).$type, 0);
		this.symbol = "";
		this.company = "";
	}
	get title(): string {
		let name = stringIsNullOrEmpty(this.company) ? "" : " - " + this.company;
		return this.symbol + name;
	}
	private _symbol: string = null;
	get symbol(): string {
		return this._symbol;
	}
	set symbol(value: string) {
		this._symbol = value;
	}
	private _company: string = null;
	get company(): string {
		return this._company;
	}
	set company(value: string) {
		this._company = value;
	}
	toString(): string {
		return this.symbol;
	}
}


