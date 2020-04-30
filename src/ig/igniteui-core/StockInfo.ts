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
export class StockInfo extends Base {
	static $t: Type = markType(StockInfo, 'StockInfo');
	private _company: string = null;
	get company(): string {
		return this._company;
	}
	set company(value: string) {
		this._company = value;
	}
	private _symbol: string = null;
	get symbol(): string {
		return this._symbol;
	}
	set symbol(value: string) {
		this._symbol = value;
	}
	private _sector: string = null;
	get sector(): string {
		return this._sector;
	}
	set sector(value: string) {
		this._sector = value;
	}
}


