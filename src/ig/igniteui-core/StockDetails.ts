/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StockInfo } from "./StockInfo";
import { Base, Type, markType } from "./type";
import { round10N } from "./numberExtended";

/**
 * @hidden 
 */
export class StockDetails extends StockInfo {
	static $t: Type = markType(StockDetails, 'StockDetails', (<any>StockInfo).$type);
	private _annualLow: number = 0;
	get annualLow(): number {
		return this._annualLow;
	}
	set annualLow(value: number) {
		this._annualLow = value;
	}
	private _annualHigh: number = 0;
	get annualHigh(): number {
		return this._annualHigh;
	}
	set annualHigh(value: number) {
		this._annualHigh = value;
	}
	private _marketPrice: number = 0;
	get marketPrice(): number {
		return this._marketPrice;
	}
	set marketPrice(value: number) {
		this._marketPrice = value;
	}
	private _marketShares: number = 0;
	get marketShares(): number {
		return this._marketShares;
	}
	set marketShares(value: number) {
		this._marketShares = value;
	}
	get marketCap(): number {
		return round10N(this.marketPrice * this.marketShares / 1000, 1);
	}
	private _volatility: number = 0;
	get volatility(): number {
		return this._volatility;
	}
	set volatility(value: number) {
		this._volatility = value;
	}
}


