/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Number_$type, Delegate_$type, fromEnum, runOn, Type, markType } from "igniteui-core/type";
import { ITickProvider, ITickProvider_$type } from "igniteui-core/ITickProvider";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";

/**
 * @hidden 
 */
export class BrowserTickProvider extends Base implements ITickProvider {
	static $t: Type = markType(BrowserTickProvider, 'BrowserTickProvider', (<any>Base).$type, [ITickProvider_$type]);
	private _nextId: number = 0;
	private _tickingAnimations: Dictionary$2<number, () => void> = null;
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
		this._tickingAnimations = new Dictionary$2<number, () => void>(Number_$type, Delegate_$type, 0);
	}
	private _toCall: List$1<() => void> = new List$1<() => void>(Delegate_$type, 0);
	private tick(): void {
		this._framePending = false;
		this._toCall.clear();
		for (let call of fromEnum<() => void>(this._tickingAnimations.values)) {
			this._toCall.add(call);
		}
		for (let i: number = 0; i < this._toCall.count; i++) {
			this._toCall._inner[i]();
		}
		this._toCall.clear();
	}
	setupTicking(callback: () => void): number {
		let id: number = this._nextId;
		this._nextId++;
		this._tickingAnimations.item(id, callback);
		return id;
	}
	private _framePending: boolean = false;
	requestFrame(id: number): void {
		if (this._framePending) {
			return;
		}
		this._framePending = true;
		this.requestAnimationFrame(runOn(this, this.tick));
	}
	teardownTicking(id: number): void {
		if (this._tickingAnimations.containsKey(id)) {
			this._tickingAnimations.removeItem(id);
		}
	}
}


