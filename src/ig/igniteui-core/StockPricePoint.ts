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
export class StockPricePoint extends StockInfo {
	static $t: Type = markType(StockPricePoint, 'StockPricePoint', (<any>StockInfo).$type);
	constructor() {
		super();
	}
	private _open: number = 0;
	get open(): number {
		return this._open;
	}
	set open(value: number) {
		this._open = value;
	}
	private _high: number = 0;
	get high(): number {
		return this._high;
	}
	set high(value: number) {
		this._high = value;
	}
	private _low: number = 0;
	get low(): number {
		return this._low;
	}
	set low(value: number) {
		this._low = value;
	}
	private _close: number = 0;
	get close(): number {
		return this._close;
	}
	set close(value: number) {
		this._close = value;
	}
	private _volume: number = 0;
	get volume(): number {
		return this._volume;
	}
	set volume(value: number) {
		this._volume = value;
	}
	private _date: Date = new Date();
	get date(): Date {
		return this._date;
	}
	set date(value: Date) {
		this._date = value;
	}
}


