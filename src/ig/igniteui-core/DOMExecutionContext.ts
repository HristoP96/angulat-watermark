/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { IExecutionContext, IExecutionContext_$type } from "./IExecutionContext";
import { DomRenderer, DomRenderer_$type } from "./dom";
import { dateNow } from "./date";

/**
 * @hidden 
 */
export class DOMExecutionContext extends Base implements IExecutionContext {
	static $t: Type = markType(DOMExecutionContext, 'DOMExecutionContext', (<any>Base).$type, [IExecutionContext_$type]);
	constructor(renderer: DomRenderer) {
		super();
		this._renderer = renderer;
		this.requestAnimationFrame = renderer.getRequestAnimationFrame();
		this._startTime = dateNow().getTime();
	}
	private _startTime: number = 0;
	private _renderer: DomRenderer = null;
	private _requestAnimationFrame: (arg1: () => void) => void = null;
	private get requestAnimationFrame(): (arg1: () => void) => void {
		return this._requestAnimationFrame;
	}
	private set requestAnimationFrame(value: (arg1: () => void) => void) {
		this._requestAnimationFrame = value;
	}
	execute(callback: () => void): void {
		callback();
	}
	enqueueAction(callback: () => void): void {
		this._renderer.setTimeout(<() => void>callback, 0);
	}
	enqueueAnimationAction(callback: () => void): void {
		this.requestAnimationFrame(<() => void>callback);
	}
	executeDelayed(callback: () => void, delayMilliseconds: number): void {
		this._renderer.setTimeout(<() => void>callback, delayMilliseconds);
	}
	getCurrentRelativeTime(): number {
		return dateNow().getTime() - this._startTime;
	}
}


