/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class TimeAxisBreakDescription extends Description {
	static $t: Type = markType(TimeAxisBreakDescription, 'TimeAxisBreakDescription', (<any>Description).$type);
	protected get_type(): string {
		return "TimeAxisBreak";
	}
	get type(): string {
		return this.get_type();
	}
	constructor() {
		super();
	}
	private _start: Date = new Date();
	get start(): Date {
		return this._start;
	}
	set start(value: Date) {
		this._start = value;
		this.markDirty("Start");
	}
	private _end: Date = new Date();
	get end(): Date {
		return this._end;
	}
	set end(value: Date) {
		this._end = value;
		this.markDirty("End");
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
		this.markDirty("Interval");
	}
}


