/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType } from "igniteui-core/type";

/**
 * @hidden 
 */
export class SparklineToolTipContext extends EventArgs {
	static $t: Type = markType(SparklineToolTipContext, 'SparklineToolTipContext', (<any>EventArgs).$type);
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
	private _first: number = 0;
	get first(): number {
		return this._first;
	}
	set first(value: number) {
		this._first = value;
	}
	private _last: number = 0;
	get last(): number {
		return this._last;
	}
	set last(value: number) {
		this._last = value;
	}
}


