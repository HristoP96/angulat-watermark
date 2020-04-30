/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, runOn, fromEnum, Type, markType } from "./type";
import { ITickProvider } from "./ITickProvider";
import { Dictionary$2 } from "./Dictionary$2";
import { AnimationState } from "./AnimationState";
import { CancelBehavior } from "./CancelBehavior";
import { List$1 } from "./List$1";
import { dateNow } from "./date";

/**
 * @hidden 
 */
export class AnimationManager extends Base {
	static $t: Type = markType(AnimationManager, 'AnimationManager');
	private _tickProvider: ITickProvider = null;
	constructor(tickProvider: ITickProvider) {
		super();
		this._tickProvider = tickProvider;
	}
	private _currentAnimations: Dictionary$2<string, AnimationState> = new Dictionary$2<string, AnimationState>(String_$type, (<any>AnimationState).$type, 0);
	private getStartTime(): Date {
		return dateNow();
	}
	addAnimation2(animationKey: string, target: any, duration: number, tickAnimation: (arg1: number, arg2: AnimationState) => void, easingFunction: (arg1: number) => number, from: number, to: number): void {
		let state: AnimationState = new AnimationState();
		state.fromValue = from;
		state.toValue = to;
		state.target = target;
		state.duration = duration;
		state.startTime = this.getStartTime();
		state.tick = tickAnimation;
		state.easing = easingFunction;
		this.addAnimation(state);
	}
	addAnimation1(animationKey: string, target: any, duration: number, tickAnimation: (arg1: number, arg2: AnimationState) => void, easingFunction: (arg1: number) => number): void {
		let state: AnimationState = new AnimationState();
		state.key = animationKey;
		state.target = target;
		state.duration = duration;
		state.startTime = this.getStartTime();
		state.tick = tickAnimation;
		state.easing = easingFunction;
		this.addAnimation(state);
	}
	private addAnimation(state: AnimationState): void {
		if (this._currentAnimations.containsKey(state.key)) {
			this.cancelAnimation(state.key, CancelBehavior.KeepCurrent);
		}
		this._currentAnimations.addItem(state.key, state);
		this.checkTicking();
		this._tickProvider.requestFrame(this._tickID);
	}
	cancelAnimation(animationKey: string, cancelBehavior: CancelBehavior): void {
		if (!this._currentAnimations.containsKey(animationKey)) {
			return;
		}
		let state = this._currentAnimations.item(animationKey);
		let tick: (arg1: number, arg2: AnimationState) => void = state.tick;
		if (cancelBehavior == CancelBehavior.ToBeginning) {
			state.tick(state.easing(0), state);
		}
		if (cancelBehavior == CancelBehavior.ToEnd) {
			state.tick(state.easing(1), state);
		}
		this._currentAnimations.removeItem(animationKey);
		this.checkTicking();
	}
	private _isTicking: boolean = false;
	private checkTicking(): void {
		if (this._currentAnimations.count == 0) {
			this.teardownTicking();
		} else {
			this.setupTicking();
		}
	}
	private _tickID: number = -1;
	private setupTicking(): void {
		if (this._isTicking) {
			return;
		}
		this._isTicking = true;
		this._tickID = this._tickProvider.setupTicking(runOn(this, this.tick));
	}
	private teardownTicking(): void {
		if (this._isTicking) {
			this._tickProvider.teardownTicking(this._tickID);
			this._tickID = -1;
		}
		this._isTicking = false;
	}
	private tick(): void {
		let currentTime: Date = dateNow();
		let toRemove: List$1<string> = new List$1<string>(String_$type, 0);
		for (let state of fromEnum<AnimationState>(this._currentAnimations.values)) {
			let currentCompleted: boolean = false;
			let ellapsedMilliseconds: number = <number>(currentTime.getTime() - state.startTime.getTime());
			if (ellapsedMilliseconds >= state.duration) {
				ellapsedMilliseconds = state.duration;
				currentCompleted = true;
			}
			if ((ellapsedMilliseconds - state.lastRender < 16 && ellapsedMilliseconds != state.duration)) {
				continue;
			}
			state.lastRender = ellapsedMilliseconds;
			state.isCompleting = currentCompleted;
			let p: number = (<number>ellapsedMilliseconds / <number>state.duration);
			p = state.easing(p);
			state.tick(p, state);
			if (currentCompleted) {
				toRemove.add(state.key);
			}
		}
		for (let anim of fromEnum<string>(toRemove)) {
			this._currentAnimations.removeItem(anim);
		}
		this.checkTicking();
		if (this._isTicking) {
			this._tickProvider.requestFrame(this._tickID);
		}
	}
	clear(): void {
		this._currentAnimations.clear();
		this.teardownTicking();
	}
}


