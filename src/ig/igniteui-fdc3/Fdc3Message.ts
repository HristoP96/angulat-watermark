/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { Fdc3Context } from "./Fdc3Context";

/**
 * @hidden 
 */
export class Fdc3Message extends Base {
	static $t: Type = markType(Fdc3Message, 'Fdc3Message');
	constructor() {
		super();
		this.tickerNames = <string[]>new Array(0);
		this.tickerSymbols = <string[]>new Array(0);
	}
	private _tickerSymbols: string[] = null;
	get tickerSymbols(): string[] {
		return this._tickerSymbols;
	}
	set tickerSymbols(value: string[]) {
		this._tickerSymbols = value;
	}
	private _tickerNames: string[] = null;
	get tickerNames(): string[] {
		return this._tickerNames;
	}
	set tickerNames(value: string[]) {
		this._tickerNames = value;
	}
	private _json: string = null;
	get json(): string {
		return this._json;
	}
	set json(value: string) {
		this._json = value;
	}
	private _context: Fdc3Context = null;
	get context(): Fdc3Context {
		return this._context;
	}
	set context(value: Fdc3Context) {
		this._context = value;
	}
	private _intentType: string = null;
	get intentType(): string {
		return this._intentType;
	}
	set intentType(value: string) {
		this._intentType = value;
	}
	private _contextType: string = null;
	get contextType(): string {
		return this._contextType;
	}
	set contextType(value: string) {
		this._contextType = value;
	}
}


