/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StockInfo } from "./StockInfo";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class StockPosition extends StockInfo {
	static $t: Type = markType(StockPosition, 'StockPosition', (<any>StockInfo).$type);
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _tradeDate: Date = new Date();
	get tradeDate(): Date {
		return this._tradeDate;
	}
	set tradeDate(value: Date) {
		this._tradeDate = value;
	}
	private _shares: number = 0;
	get shares(): number {
		return this._shares;
	}
	set shares(value: number) {
		this._shares = value;
	}
	private _costPerShare: number = 0;
	get costPerShare(): number {
		return this._costPerShare;
	}
	set costPerShare(value: number) {
		this._costPerShare = value;
	}
	get costTotal(): number {
		return Math.round(this.shares * this.costPerShare);
	}
	get marketValue(): number {
		return Math.round(this.shares * this.marketPrice);
	}
	private _marketPrice: number = 0;
	get marketPrice(): number {
		return this._marketPrice;
	}
	set marketPrice(value: number) {
		this._marketPrice = value;
	}
	get gainValue(): number {
		return Math.round(this.marketValue - this.costTotal);
	}
	get gainPercentage(): number {
		return this.gainValue / this.costTotal * 100;
	}
	private _data: any = null;
	get data(): any {
		return this._data;
	}
	set data(value: any) {
		this._data = value;
	}
	private _action: string = null;
	get action(): string {
		return this._action;
	}
	set action(value: string) {
		this._action = value;
	}
}


