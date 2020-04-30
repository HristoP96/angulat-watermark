/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class AnimationState extends Base {
	static $t: Type = markType(AnimationState, 'AnimationState');
	private _toValue: number = 0;
	get toValue(): number {
		return this._toValue;
	}
	set toValue(value: number) {
		this._toValue = value;
	}
	private _fromValue: number = 0;
	get fromValue(): number {
		return this._fromValue;
	}
	set fromValue(value: number) {
		this._fromValue = value;
	}
	private _target: any = null;
	get target(): any {
		return this._target;
	}
	set target(value: any) {
		this._target = value;
	}
	private _duration: number = 0;
	get duration(): number {
		return this._duration;
	}
	set duration(value: number) {
		this._duration = value;
	}
	private _startTime: Date = new Date();
	get startTime(): Date {
		return this._startTime;
	}
	set startTime(value: Date) {
		this._startTime = value;
	}
	private _tick: (arg1: number, arg2: AnimationState) => void = null;
	get tick(): (arg1: number, arg2: AnimationState) => void {
		return this._tick;
	}
	set tick(value: (arg1: number, arg2: AnimationState) => void) {
		this._tick = value;
	}
	private _easing: (arg1: number) => number = null;
	get easing(): (arg1: number) => number {
		return this._easing;
	}
	set easing(value: (arg1: number) => number) {
		this._easing = value;
	}
	private _key: string = null;
	get key(): string {
		return this._key;
	}
	set key(value: string) {
		this._key = value;
	}
	private _lastRender: number = 0;
	get lastRender(): number {
		return this._lastRender;
	}
	set lastRender(value: number) {
		this._lastRender = value;
	}
	private _isCompleting: boolean = false;
	get isCompleting(): boolean {
		return this._isCompleting;
	}
	set isCompleting(value: boolean) {
		this._isCompleting = value;
	}
}


