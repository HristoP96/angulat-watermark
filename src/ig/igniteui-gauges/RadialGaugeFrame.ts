/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { RadialGaugeNeedleFrame } from "./RadialGaugeNeedleFrame";
import { RadialGaugeScaleFrame } from "./RadialGaugeScaleFrame";
import { BackingFrame } from "./BackingFrame";

/**
 * @hidden 
 */
export class RadialGaugeFrame extends Base {
	static $t: Type = markType(RadialGaugeFrame, 'RadialGaugeFrame');
	constructor() {
		super();
		this.needleFrame = new RadialGaugeNeedleFrame();
		this.scaleFrame = new RadialGaugeScaleFrame();
		this.backingFrame = new BackingFrame();
	}
	private _needleFrame: RadialGaugeNeedleFrame = null;
	get needleFrame(): RadialGaugeNeedleFrame {
		return this._needleFrame;
	}
	set needleFrame(value: RadialGaugeNeedleFrame) {
		this._needleFrame = value;
	}
	private _scaleFrame: RadialGaugeScaleFrame = null;
	get scaleFrame(): RadialGaugeScaleFrame {
		return this._scaleFrame;
	}
	set scaleFrame(value: RadialGaugeScaleFrame) {
		this._scaleFrame = value;
	}
	private _backingFrame: BackingFrame = null;
	get backingFrame(): BackingFrame {
		return this._backingFrame;
	}
	set backingFrame(value: BackingFrame) {
		this._backingFrame = value;
	}
	private _radiusMultiplier: number = 0;
	get radiusMultiplier(): number {
		return this._radiusMultiplier;
	}
	set radiusMultiplier(value: number) {
		this._radiusMultiplier = value;
	}
	interpolate(p: number, previous: RadialGaugeFrame, next: RadialGaugeFrame): void {
		this.radiusMultiplier = previous.radiusMultiplier + (next.radiusMultiplier - previous.radiusMultiplier) * p;
		this.needleFrame.interpolate(p, previous.needleFrame, next.needleFrame);
		this.scaleFrame.interpolate(p, previous.scaleFrame, next.scaleFrame);
		this.backingFrame.interpolate(p, previous.backingFrame, next.backingFrame);
	}
}


