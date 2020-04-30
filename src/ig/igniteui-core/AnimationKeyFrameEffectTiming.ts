/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { KeyFrameEffectTimingDirection } from "./KeyFrameEffectTimingDirection";
import { KeyFrameEffectEasing } from "./KeyFrameEffectEasing";
import { KeyFrameAnimationFill } from "./KeyFrameAnimationFill";

/**
 * @hidden 
 */
export class AnimationKeyFrameEffectTiming extends Base {
	static $t: Type = markType(AnimationKeyFrameEffectTiming, 'AnimationKeyFrameEffectTiming');
	constructor() {
		super();
		this.delay = 0;
		this.direction = KeyFrameEffectTimingDirection.Normal;
		this.easing = KeyFrameEffectEasing.Linear;
		this.endDelay = 0;
		this.fill = KeyFrameAnimationFill.Auto;
		this.iterationStart = 0;
		this.iterations = 1;
	}
	private _delay: number = 0;
	get delay(): number {
		return this._delay;
	}
	set delay(value: number) {
		this._delay = value;
	}
	private _direction: KeyFrameEffectTimingDirection = <KeyFrameEffectTimingDirection>0;
	get direction(): KeyFrameEffectTimingDirection {
		return this._direction;
	}
	set direction(value: KeyFrameEffectTimingDirection) {
		this._direction = value;
	}
	private _duration: number = 0;
	get duration(): number {
		return this._duration;
	}
	set duration(value: number) {
		this._duration = value;
	}
	private _easing: KeyFrameEffectEasing = <KeyFrameEffectEasing>0;
	get easing(): KeyFrameEffectEasing {
		return this._easing;
	}
	set easing(value: KeyFrameEffectEasing) {
		this._easing = value;
	}
	private _endDelay: number = 0;
	get endDelay(): number {
		return this._endDelay;
	}
	set endDelay(value: number) {
		this._endDelay = value;
	}
	private _fill: KeyFrameAnimationFill = <KeyFrameAnimationFill>0;
	get fill(): KeyFrameAnimationFill {
		return this._fill;
	}
	set fill(value: KeyFrameAnimationFill) {
		this._fill = value;
	}
	private _iterationStart: number = 0;
	get iterationStart(): number {
		return this._iterationStart;
	}
	set iterationStart(value: number) {
		this._iterationStart = value;
	}
	private _iterations: number = 0;
	get iterations(): number {
		return this._iterations;
	}
	set iterations(value: number) {
		this._iterations = value;
	}
	onFinished: () => void = null;
	onCanceled: () => void = null;
}


