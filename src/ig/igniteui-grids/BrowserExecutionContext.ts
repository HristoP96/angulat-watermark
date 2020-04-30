/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { IExecutionContext, IExecutionContext_$type } from "igniteui-core/IExecutionContext";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { truncate } from "igniteui-core/number";
import { dateNow } from "igniteui-core/date";
import { timeSpanTotalMilliseconds } from "igniteui-core/timespan";

/**
 * @hidden 
 */
export class BrowserExecutionContext extends Base implements IExecutionContext {
	static $t: Type = markType(BrowserExecutionContext, 'BrowserExecutionContext', (<any>Base).$type, [IExecutionContext_$type]);
	private _startTime: Date = new Date();
	private _requestAnimationFrame: (arg1: () => void) => void = null;
	private get requestAnimationFrame(): (arg1: () => void) => void {
		return this._requestAnimationFrame;
	}
	private set requestAnimationFrame(value: (arg1: () => void) => void) {
		this._requestAnimationFrame = value;
	}
	constructor(renderer: DomRenderer) {
		super();
		this.requestAnimationFrame = renderer.getRequestAnimationFrame();
		this._startTime = dateNow();
	}
	enqueueAction(callback: () => void): void {
		window.setTimeout(() => callback(), 0);
	}
	enqueueAnimationAction(callback: () => void): void {
		this.requestAnimationFrame(() => callback());
	}
	execute(callback: () => void): void {
		window.setTimeout(() => callback(), 0);
	}
	executeDelayed(callback: () => void, delayMilliseconds: number): void {
		window.setTimeout(() => callback(), delayMilliseconds);
	}
	getCurrentRelativeTime(): number {
		let now = dateNow();
		return <number>truncate(timeSpanTotalMilliseconds((+now - +(this._startTime))));
	}
}


