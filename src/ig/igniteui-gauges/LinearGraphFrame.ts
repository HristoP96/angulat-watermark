/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { LinearGraphScaleFrame } from "./LinearGraphScaleFrame";
import { LinearGraphBackingFrame } from "./LinearGraphBackingFrame";
import { LinearGraphRectFrame } from "./LinearGraphRectFrame";

/**
 * @hidden 
 */
export abstract class LinearGraphFrame extends Base {
	static $t: Type = markType(LinearGraphFrame, 'LinearGraphFrame');
	constructor() {
		super();
		this.backingFrame = new LinearGraphBackingFrame();
		this.needleFrame = new LinearGraphRectFrame();
	}
	abstract get scaleFrame(): LinearGraphScaleFrame;
	abstract set scaleFrame(value: LinearGraphScaleFrame);
	private _backingFrame: LinearGraphBackingFrame = null;
	get backingFrame(): LinearGraphBackingFrame {
		return this._backingFrame;
	}
	set backingFrame(value: LinearGraphBackingFrame) {
		this._backingFrame = value;
	}
	private _needleFrame: LinearGraphRectFrame = null;
	get needleFrame(): LinearGraphRectFrame {
		return this._needleFrame;
	}
	set needleFrame(value: LinearGraphRectFrame) {
		this._needleFrame = value;
	}
	interpolate(p: number, previous: LinearGraphFrame, next: LinearGraphFrame): void {
		this.needleFrame = LinearGraphRectFrame.interpolate(p, 1 - p, previous.needleFrame, next.needleFrame);
		this.scaleFrame.interpolate(p, previous.scaleFrame, next.scaleFrame);
		this.backingFrame.interpolate(p, previous.backingFrame, next.backingFrame);
	}
}


