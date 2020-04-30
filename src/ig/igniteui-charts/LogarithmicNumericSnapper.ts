/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Snapper } from "./Snapper";
import { Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class LogarithmicNumericSnapper extends Snapper {
	static $t: Type = markType(LogarithmicNumericSnapper, 'LogarithmicNumericSnapper', (<any>Snapper).$type);
	constructor(visibleMinimum: number, visibleMaximum: number, logarithmBase: number, pixels: number) {
		super();
		this.interval = 1;
		this.minorCount = logarithmBase;
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
	}
	private _minorCount: number = 0;
	get minorCount(): number {
		return this._minorCount;
	}
	set minorCount(value: number) {
		this._minorCount = value;
	}
}


