/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, runOn, Type, markType, BaseError, IEnumerable$1, Number_$type } from "./type";
import { IExecutionContext } from "./IExecutionContext";
import { ITickProvider } from "./ITickProvider";
import { LinkedList$1 } from "./LinkedList$1";
import { Dictionary$2 } from "./Dictionary$2";
import { LinkedListNode$1 } from "./LinkedListNode$1";
import { KeyFrameAnimationPlayState } from "./KeyFrameAnimationPlayState";
import { timeSpanTotalMilliseconds } from "./timespan";
import { dateNow } from "./date";
import { Task } from "./Task";
import { TaskCompletionSource$1 } from "./TaskCompletionSource$1";
import { NotImplementedException } from "./NotImplementedException";
import { isInfinity, isNaN_ } from "./number";
import { KeyFrameAnimationEffectPhase } from "./KeyFrameAnimationEffectPhase";
import { KeyFrameAnimationFill } from "./KeyFrameAnimationFill";
import { AnimationKeyFrameEffectTargetType } from "./AnimationKeyFrameEffectTargetType";
import { IDependentRenderer } from "./IDependentRenderer";
import { AnimationKeyFrame } from "./AnimationKeyFrame";
import { List$1 } from "./List$1";
import { UIElementPropertyId, UIElementPropertyId_$type } from "./UIElementPropertyId";
import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { AnimationKeyFrameEffectTiming } from "./AnimationKeyFrameEffectTiming";
import { KeyFrameEffectTimingDirection } from "./KeyFrameEffectTimingDirection";
import { KeyFrameEffectEasing } from "./KeyFrameEffectEasing";
import { EasingFunctions } from "./EasingFunctions";
import { AnimationKeyFrameProperty } from "./AnimationKeyFrameProperty";
import { Brush } from "./Brush";
import { BrushUtil } from "./BrushUtil";
import { Thickness } from "./Thickness";
import { InterpolationUtil } from "./InterpolationUtil";
import { CornerRadius } from "./CornerRadius";
import { MatrixTransform } from "./MatrixTransform";
import { Matrix } from "./Matrix";
import { TransformMatrixHelpler } from "./TransformMatrixHelpler";
import { UIElementPropertyAccessorFactory } from "./UIElementPropertyAccessorFactory";
import { HashSet$1 } from "./HashSet$1";
import { InterpolationMode } from "./InterpolationMode";

/**
 * @hidden 
 */
export class KeyFrameAnimationTimeline extends Base {
	static $t: Type = markType(KeyFrameAnimationTimeline, 'KeyFrameAnimationTimeline');
	private _tickProvider: ITickProvider = null;
	private _executionContext: IExecutionContext = null;
	private _startTime: Date = new Date();
	private _activeAnimations: LinkedList$1<IKeyFrameAnimation> = new LinkedList$1<IKeyFrameAnimation>(IKeyFrameAnimation_$type);
	private _activeAnimationsById: Dictionary$2<string, IKeyFrameAnimation> = new Dictionary$2<string, IKeyFrameAnimation>(String_$type, IKeyFrameAnimation_$type, 0);
	private _activeAnimationNodes: Dictionary$2<IKeyFrameAnimation, LinkedListNode$1<IKeyFrameAnimation>> = new Dictionary$2<IKeyFrameAnimation, LinkedListNode$1<IKeyFrameAnimation>>(IKeyFrameAnimation_$type, (<any>LinkedListNode$1).$type.specialize(IKeyFrameAnimation_$type), 0);
	private _animationCount: number = 0;
	private _useFrameTime: boolean = false;
	private _frameTime: number = 0;
	get executionContext(): IExecutionContext {
		return this._executionContext;
	}
	get currentTime(): number {
		if (this._useFrameTime) {
			return this._frameTime;
		}
		return timeSpanTotalMilliseconds((+(dateNow()) - +(this._startTime)));
	}
	constructor(tickProvider: ITickProvider, executionContext: IExecutionContext) {
		super();
		this._tickProvider = tickProvider;
		this._executionContext = executionContext;
		this._startTime = dateNow();
	}
	start(animation: IKeyFrameAnimation): void {
		if (this._activeAnimationsById.containsKey(animation.id)) {
			return;
		}
		this._activeAnimations.addLast(animation);
		let node = this._activeAnimations.last;
		this._activeAnimationNodes.addItem(animation, node);
		this._activeAnimationsById.addItem(animation.id, animation);
		let bootUp: boolean = false;
		if (this._animationCount == 0) {
			bootUp = true;
		}
		this._animationCount++;
		if (bootUp) {
			this.startTicking();
		}
	}
	stop(animation: IKeyFrameAnimation): void {
		if (!this._activeAnimationNodes.containsKey(animation)) {
			return;
		}
		let node = this._activeAnimationNodes.item(animation);
		this._activeAnimations.remove(node);
		this._activeAnimationsById.removeItem(animation.id);
		this._activeAnimationNodes.removeItem(animation);
		let tearDown: boolean = false;
		this._animationCount--;
		if (this._animationCount == 0) {
			tearDown = true;
		}
		if (tearDown) {
			this.stopTicking();
		}
	}
	private stopTicking(): void {
		if (this._tickId >= 0) {
			this._tickProvider.teardownTicking(this._tickId);
			this._tickId = -1;
		}
	}
	private _tickId: number = -1;
	private startTicking(): void {
		this._tickId = this._tickProvider.setupTicking(runOn(this, this.tick));
		this._tickProvider.requestFrame(this._tickId);
	}
	private tick(): void {
		let currentTime = this.currentTime;
		this._frameTime = currentTime;
		try {
			this._useFrameTime = true;
			let anim = this._activeAnimations.first;
			if (anim == null) {
				this.stopTicking();
				this._useFrameTime = false;
				return;
			}
			while (anim != null) {
				let currAnim = anim.value;
				if (currAnim.playState == KeyFrameAnimationPlayState.Running) {
					(<KeyFrameAnimationDirect>currAnim).tick();
				} else {
					(<KeyFrameAnimationDirect>currAnim).tick();
					this.stop(anim.value);
				}
				anim = anim.next;
			}
			this._tickProvider.requestFrame(this._tickId);
		}
		finally {
			this._useFrameTime = false;
		}
	}
}

/**
 * @hidden 
 */
export interface IKeyFrameAnimation { 
	currentTime: number;
effect: AnimationKeyFrameEffect;
readonly finished: Task;
readonly ready: Task;
id: string;
readonly playState: KeyFrameAnimationPlayState;
playbackRate: number;
startTime: number;
commitStyles(): void;
onFinished: () => void;
onCanceled: () => void;
cancel(): void;
finish(): void;
pause(): void;
play(): void;
reverse(): void;
updatePlaybackRate(newRate: number): void;
}

/**
 * @hidden 
 */
export let IKeyFrameAnimation_$type = new Type(null, 'IKeyFrameAnimation');

/**
 * @hidden 
 */
export class KeyFrameAnimationDirect extends Base implements IKeyFrameAnimation {
	static $t: Type = markType(KeyFrameAnimationDirect, 'KeyFrameAnimationDirect', (<any>Base).$type, [IKeyFrameAnimation_$type]);
	private _effect: AnimationKeyFrameEffect = null;
	get effect(): AnimationKeyFrameEffect {
		return this._effect;
	}
	set effect(value: AnimationKeyFrameEffect) {
		this._effect = value;
	}
	private _holdTime: number = NaN;
	private _hasHoldTime: boolean = false;
	get hasCurrentTime(): boolean {
		if (this._hasHoldTime) {
			return true;
		}
		if (this._hasStartTime) {
			return true;
		}
		return false;
	}
	get currentTime(): number {
		if (this._hasHoldTime) {
			return this._holdTime;
		}
		return (this.timeline.currentTime - this.startTime) * this.playbackRate;
	}
	set currentTime(value: number) {
		this.updateCurrentTime(value);
		this.updateFinishedState(true, false);
	}
	private _previousCurrentTime: number = NaN;
	private _hasPreviousCurrentTime: boolean = false;
	private updateFinishedState(didSeek: boolean, syncNotify: boolean): void {
		let unconstrainedCurrentTime: number;
		let hasCurrent: boolean = false;
		if (!didSeek) {
			let prev = this._hasHoldTime;
			this._hasHoldTime = false;
			unconstrainedCurrentTime = this.currentTime;
			hasCurrent = this.hasCurrentTime;
			this._hasHoldTime = prev;
		} else {
			unconstrainedCurrentTime = this.currentTime;
			hasCurrent = this.hasCurrentTime;
		}
		if (hasCurrent && this._hasStartTime && !this._hasPendingPauseTask && !this._hasPendingPlayTask) {
			if (this.playbackRate > 0 && unconstrainedCurrentTime >= this.associatedEffectEnd) {
				if (didSeek) {
					this._holdTime = unconstrainedCurrentTime;
					this._hasHoldTime = true;
				} else {
					if (this._hasPreviousCurrentTime) {
						this._holdTime = Math.max(this._previousCurrentTime, this.associatedEffectEnd);
					} else {
						this._holdTime = this.associatedEffectEnd;
					}
				}
			} else if (this.playbackRate < 0 && unconstrainedCurrentTime <= 0) {
				if (didSeek) {
					this._holdTime = unconstrainedCurrentTime;
				} else {
					if (this._hasPreviousCurrentTime) {
						this._holdTime = Math.min(this._previousCurrentTime, 0);
					} else {
						this._holdTime = 0;
					}
				}
			}
			if (this.playbackRate != 0) {
				if (didSeek && this._hasHoldTime) {
					this._startTime = this.timeline.currentTime - (this._holdTime / this.playbackRate);
					this._hasStartTime = true;
					this._hasHoldTime = false;
				}
			}
		}
		this._previousCurrentTime = this.currentTime;
		this._hasPreviousCurrentTime = true;
		let currentFinishedState = this.playState == KeyFrameAnimationPlayState.Finished;
		if (!syncNotify && currentFinishedState && !this.currentFinishIsResolved()) {
			this.scheduleFinishNotificationTask(() => this.finishingTasks());
		}
		if (currentFinishedState && !this.currentFinishIsResolved()) {
			if (syncNotify) {
				this.cancelFinishNotificationTask();
				this.finishingTasks();
			}
		}
		if (!currentFinishedState && this.currentFinishIsResolved()) {
			this._currentFinishedPromise = this.createFinishPromise();
		}
	}
	private createFinishPromise(): TaskCompletionSource$1<IKeyFrameAnimation> {
		return new TaskCompletionSource$1<IKeyFrameAnimation>(IKeyFrameAnimation_$type, 0);
	}
	private cancelFinishNotificationTask(): void {
		this._hasPendingFinishedNotification = false;
	}
	private finishingTasks(): void {
		if (!this._hasPendingFinishedNotification) {
			return;
		}
		this._hasPendingFinishedNotification = false;
		if (this.playState != KeyFrameAnimationPlayState.Finished) {
			return;
		}
		this.resolveFinishedPromise(this);
		this.raiseOnFinished();
	}
	private raiseOnFinished(): void {
	}
	private resolveFinishedPromise(animation: KeyFrameAnimationDirect): void {
		this._currentFinishedPromise.setResult(animation);
	}
	private scheduleFinishNotificationTask(p: () => void): void {
		if (!this._hasPendingFinishedNotification) {
			this._hasPendingFinishedNotification = true;
			this.timeline.executionContext.enqueueAction(() => p());
		}
	}
	private currentFinishIsResolved(): boolean {
		return this._currentFinishedPromise == null || this._currentFinishedPromise.task.isCompleted;
	}
	private updateCurrentTime(value: number): void {
		if (this._hasHoldTime || !this._hasStartTime || this.playbackRate == 0) {
			this._holdTime = value;
			this._hasHoldTime = true;
		} else {
			this._startTime = this.timeline.currentTime - (value / this.playbackRate);
		}
	}
	get finished(): Task {
		return this._currentFinishedPromise.task;
	}
	get ready(): Task {
		return this._currentReadyPromise.task;
	}
	private _id: string = null;
	get id(): string {
		return this._id;
	}
	set id(value: string) {
		this._id = value;
	}
	private get associatedEffectEnd(): number {
		return this.effect != null ? this.effect.endTime : 0;
	}
	get playState(): KeyFrameAnimationPlayState {
		if (!this.hasCurrentTime && !this._hasPendingPauseTask && !this._hasPendingPlayTask) {
			return KeyFrameAnimationPlayState.Idle;
		} else if (this._hasPendingPauseTask || (!this._hasStartTime && !this._hasPendingPlayTask)) {
			return KeyFrameAnimationPlayState.Paused;
		} else if (this.hasCurrentTime && (this.effectivePlaybackRate > 0 && this.currentTime >= this.associatedEffectEnd || this.effectivePlaybackRate < 0 && this.currentTime <= 0)) {
			return KeyFrameAnimationPlayState.Finished;
		}
		return KeyFrameAnimationPlayState.Running;
	}
	private _pendingPlaybackRate: number = NaN;
	private _hasPendingPlaybackRate: boolean = false;
	private _playbackRate: number = 1;
	get effectivePlaybackRate(): number {
		if (this._hasPendingPlaybackRate) {
			return this._pendingPlaybackRate;
		}
		return this._playbackRate;
	}
	get playbackRate(): number {
		return this._playbackRate;
	}
	set playbackRate(value: number) {
		this._playbackRate = value;
	}
	private _startTime: number = NaN;
	private _hasStartTime: boolean = false;
	get startTime(): number {
		return this._startTime;
	}
	set startTime(value: number) {
		let timelineTime = this.timeline.currentTime;
		let currentTime = this._previousCurrentTime;
		this._startTime = value;
		this._hasStartTime = true;
		if (this.playbackRate != 0) {
			this._hasHoldTime = false;
		}
		this.updateFinishedState(true, false);
	}
	private _timeline: KeyFrameAnimationTimeline = null;
	get timeline(): KeyFrameAnimationTimeline {
		return this._timeline;
	}
	onFinished: () => void = null;
	onCanceled: () => void = null;
	private static _nextId: number = 0;
	constructor(effect: AnimationKeyFrameEffect, timeline: KeyFrameAnimationTimeline) {
		super();
		this._id = "AUTO_ID_" + KeyFrameAnimationDirect._nextId.toString();
		KeyFrameAnimationDirect._nextId++;
		this.effect = effect;
		this.effect.associatedAnimation = this;
		this._timeline = timeline;
	}
	cancel(): void {
		if (this.playState != KeyFrameAnimationPlayState.Idle) {
			this.resetPendingTasks();
			this.rejectFinishedPromise("AbortError");
			this._currentFinishedPromise = this.createFinishPromise();
			this.raiseCancelEvent();
			this._hasHoldTime = false;
			this._hasStartTime = false;
		}
	}
	private rejectFinishedPromise(error: string): void {
		if (this._currentFinishedPromise != null) {
			this._currentFinishedPromise.setException(new BaseError(1, error));
		}
	}
	private raiseCancelEvent(): void {
		throw new NotImplementedException(0);
	}
	private resetPendingTasks(): void {
		throw new NotImplementedException(0);
	}
	finish(): void {
		if (this.effectivePlaybackRate == 0 || (this.effectivePlaybackRate > 0 && isInfinity(this.associatedEffectEnd))) {
			return;
		}
		this.applyPendingPlaybackRate();
		let limit: number;
		if (this.playbackRate > 0) {
			limit = this.associatedEffectEnd;
		} else {
			limit = 0;
		}
		this.updateCurrentTime(limit);
		if (!this._hasStartTime) {
			this._startTime = this.timeline.currentTime - (limit / this.playbackRate);
			this._hasStartTime = true;
		}
		if (this._hasPendingPauseTask && this._hasStartTime) {
			this._hasHoldTime = false;
			this.cancelPauseTask();
			this.resolveReadyPromise(this);
		}
		if (this._hasPendingPlayTask && this._hasStartTime) {
			this.cancelPlayTask();
			this.resolveReadyPromise(this);
		}
		this.updateFinishedState(true, true);
	}
	pause(): void {
		this.pauseHelper();
	}
	private pauseHelper(): void {
		if (this._hasPendingPauseTask) {
			return;
		}
		if (this.playState == KeyFrameAnimationPlayState.Paused) {
			return;
		}
		if (!this.hasCurrentTime) {
			if (this.playbackRate >= 0) {
				this._hasHoldTime = true;
				this._holdTime = 0;
			}
			if (isInfinity(this.associatedEffectEnd)) {
				return;
			}
			this._holdTime = this.associatedEffectEnd;
			this._hasHoldTime = true;
		}
		let hasPendingReadyPromise = false;
		if (this._hasPendingPlayTask) {
			hasPendingReadyPromise = true;
		}
		if (!hasPendingReadyPromise) {
			this._currentReadyPromise = this.getReadyPromise();
		}
		this.schedulePauseTask(() => {
			if (!this._hasPendingPauseTask) {
				return;
			}
			this._hasPendingPauseTask = false;
			let readyTime = this.timeline.currentTime;
			if (this._hasStartTime && !this._hasHoldTime) {
				this._holdTime = (readyTime - this._startTime) * this.playbackRate;
			}
			this.applyPendingPlaybackRate();
			this._hasStartTime = false;
			this.resolveReadyPromise(this);
			this.updateFinishedState(false, false);
		});
		this.updateFinishedState(false, false);
	}
	private getReadyPromise(): TaskCompletionSource$1<IKeyFrameAnimation> {
		return new TaskCompletionSource$1<IKeyFrameAnimation>(IKeyFrameAnimation_$type, 0);
	}
	private schedulePauseTask(p: () => void): void {
		if (!this._hasPendingPauseTask) {
			this._hasPendingPauseTask = true;
			this.timeline.executionContext.enqueueAction(() => p());
		}
	}
	play(): void {
		this.playHelper(true);
	}
	private _hasPendingPlayTask: boolean = false;
	private _hasPendingPauseTask: boolean = false;
	private _hasPendingFinishedNotification: boolean = false;
	private _currentReadyPromise: TaskCompletionSource$1<IKeyFrameAnimation> = null;
	private _currentFinishedPromise: TaskCompletionSource$1<IKeyFrameAnimation> = null;
	private playHelper(autoRewind: boolean): void {
		let abortedPause = this._hasPendingPauseTask;
		if (this.effectivePlaybackRate > 0 && autoRewind && (!this.hasCurrentTime || this.currentTime < 0 || this.currentTime >= this.associatedEffectEnd)) {
			this._holdTime = 0;
			this._hasHoldTime = true;
		} else if (this.effectivePlaybackRate < 0 && autoRewind && (!this.hasCurrentTime || this.currentTime <= 0 || this.currentTime > this.associatedEffectEnd)) {
			if (isInfinity(this.associatedEffectEnd)) {
				return;
			}
			this._holdTime = this.associatedEffectEnd;
			this._hasHoldTime = true;
		} else if (this.effectivePlaybackRate == 0 && !this.hasCurrentTime) {
			this._holdTime = 0;
			this._hasHoldTime = true;
		}
		let hasPendingReadyPromise: boolean = false;
		if (this._hasPendingPauseTask) {
			this.cancelPauseTask();
			hasPendingReadyPromise = true;
		}
		if (this._hasPendingPlayTask) {
			this.cancelPlayTask();
			hasPendingReadyPromise = true;
		}
		if (!this._hasHoldTime && !abortedPause && !this._hasPendingPlaybackRate) {
			return;
		}
		if (this._hasHoldTime) {
			this._hasStartTime = false;
		}
		if (!hasPendingReadyPromise) {
			this._currentReadyPromise = this.getReadyPromise();
		}
		this.schedulePlayTask(() => {
			if (!this._hasPendingPlayTask) {
				return;
			}
			this._hasPendingPlayTask = false;
			if (!this._hasStartTime && !this._hasHoldTime) {
				return;
			}
			let readyTime = this.timeline.currentTime;
			if (this._hasHoldTime) {
				this.applyPendingPlaybackRate();
				let newStartTime: number = readyTime;
				if (this.playbackRate != 0) {
					newStartTime = readyTime - this._holdTime / this.playbackRate;
				}
				this._startTime = newStartTime;
				this._hasStartTime = true;
				if (this.playbackRate != 0) {
					this._hasHoldTime = false;
				}
			} else if (this._hasStartTime && this._hasPendingPlaybackRate) {
				let currentTime = (readyTime - this._startTime) * this.playbackRate;
				this.applyPendingPlaybackRate();
				if (this.playbackRate == 0) {
					this._holdTime = currentTime;
					this._hasHoldTime = true;
				}
				let newStartTime1 = readyTime;
				if (this.playbackRate != 0) {
					newStartTime1 = readyTime - currentTime / this.playbackRate;
				}
				this._startTime = newStartTime1;
				this._hasStartTime = true;
			}
			this.resolveReadyPromise(this);
			this.updateFinishedState(false, false);
			this.timeline.start(this);
		});
		this.updateFinishedState(false, false);
	}
	private resolveReadyPromise(animation: KeyFrameAnimationDirect): void {
		if (this._currentReadyPromise != null) {
			this._currentReadyPromise.setResult(animation);
		}
	}
	private cancelPauseTask(): void {
		this._hasPendingPauseTask = false;
	}
	private cancelPlayTask(): void {
		this._hasPendingPlayTask = false;
	}
	private schedulePlayTask(p: () => void): void {
		if (!this._hasPendingPlayTask) {
			this._hasPendingPlayTask = true;
			this.timeline.executionContext.enqueueAction(() => p());
		}
	}
	reverse(): void {
		let originalPendingPlaybackRate = this._pendingPlaybackRate;
		this._pendingPlaybackRate = -this.effectivePlaybackRate;
		this._hasPendingPlaybackRate = true;
		this.playHelper(true);
	}
	updatePlaybackRate(newRate: number): void {
		let previousPlayState = this.playState;
		this._pendingPlaybackRate = newRate;
		this._hasPendingPlaybackRate = true;
		if (previousPlayState == KeyFrameAnimationPlayState.Idle || previousPlayState == KeyFrameAnimationPlayState.Paused) {
			this.applyPendingPlaybackRate();
		} else if (previousPlayState == KeyFrameAnimationPlayState.Finished) {
			let prevHold = this._hasHoldTime;
			this._hasHoldTime = false;
			let unconstrainedCurrentTime = this.currentTime;
			this._hasHoldTime = prevHold;
			if (this._pendingPlaybackRate == 0) {
				this._startTime = this.timeline.currentTime;
			} else {
				this._startTime = this.timeline.currentTime - (unconstrainedCurrentTime / this._pendingPlaybackRate);
			}
			this.applyPendingPlaybackRate();
		} else {
			this.playHelper(false);
		}
	}
	private applyPendingPlaybackRate(): void {
		if (this._hasPendingPlaybackRate) {
			this._playbackRate = this._pendingPlaybackRate;
			this._hasPendingPlaybackRate = false;
		}
	}
	commitStyles(): void {
		this.effect.commitStyles();
	}
	tick(): void {
		this.effect.tick();
		this.updateFinishedState(false, false);
	}
}

/**
 * @hidden 
 */
export class AnimationKeyFrameEffect extends Base {
	static $t: Type = markType(AnimationKeyFrameEffect, 'AnimationKeyFrameEffect');
	private _associatedAnimation: KeyFrameAnimationDirect = null;
	get associatedAnimation(): KeyFrameAnimationDirect {
		return this._associatedAnimation;
	}
	set associatedAnimation(value: KeyFrameAnimationDirect) {
		this._associatedAnimation = value;
	}
	private get activeDuration(): number {
		return this._iterationDuration * this._iterationCount;
	}
	get endTime(): number {
		return Math.max(this._startDelay + this.activeDuration + this._endDelay, 0);
	}
	private updateTimingCalculations(): void {
		this._startDelay = this.timing.delay;
		this._endDelay = this.timing.endDelay;
		this._fillMode = this.timing.fill;
		this._iterationCount = this.timing.iterations;
		this._iterationDuration = this.timing.duration;
		this._playbackDirection = this.timing.direction;
		this._iterationStart = this.timing.iterationStart;
		this._easing = this.timing.easing;
		this._easingFunction = this.resolveEasingFunction(this._easing);
	}
	private resolveEasingFunction(easing: KeyFrameEffectEasing): (arg1: number) => number {
		switch (easing) {
			case KeyFrameEffectEasing.Linear: return (p: number) => p;
			case KeyFrameEffectEasing.ExponentialInOut: return EasingFunctions.exponentialEase;
			case KeyFrameEffectEasing.CircleInOut: return EasingFunctions.circleEase;
			case KeyFrameEffectEasing.CubicInOut: return EasingFunctions.cubicEase;
		}

		return (p: number) => p;
	}
	constructor(initNumber: number, target: any, targetType: AnimationKeyFrameEffectTargetType, dependentRenderer: IDependentRenderer, timing: AnimationKeyFrameEffectTiming);
	constructor(initNumber: number, target: any, targetType: AnimationKeyFrameEffectTargetType, dependentRenderer: IDependentRenderer, timing: AnimationKeyFrameEffectTiming, frames: AnimationKeyFrame[]);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let target: any = <any>_rest[0];
				let targetType: AnimationKeyFrameEffectTargetType = <AnimationKeyFrameEffectTargetType>_rest[1];
				let dependentRenderer: IDependentRenderer = <IDependentRenderer>_rest[2];
				let timing: AnimationKeyFrameEffectTiming = <AnimationKeyFrameEffectTiming>_rest[3];
				this.target = target;
				this.targetType = targetType;
				this.timing = timing;
				this.updateTimingCalculations();
				this.dependentRenderer = dependentRenderer;
			}
			break;

			case 1:
			{
				let target: any = <any>_rest[0];
				let targetType: AnimationKeyFrameEffectTargetType = <AnimationKeyFrameEffectTargetType>_rest[1];
				let dependentRenderer: IDependentRenderer = <IDependentRenderer>_rest[2];
				let timing: AnimationKeyFrameEffectTiming = <AnimationKeyFrameEffectTiming>_rest[3];
				let frames: AnimationKeyFrame[] = <AnimationKeyFrame[]>_rest[4];
				this.target = target;
				this.targetType = targetType;
				this.dependentRenderer = dependentRenderer;
				this.timing = timing;
				this.updateTimingCalculations();
				this._frames.addRange(<IEnumerable$1<AnimationKeyFrame>><any>frames);
			}
			break;

		}

	}
	protected get resolvedOffsets(): number[] {
		if (this._resolvedOffsets == null) {
			this._resolvedOffsets = this.computeResolvedOffsets();
		}
		return this._resolvedOffsets;
	}
	private computeResolvedOffsets(): number[] {
		let keyFrames = this.frames;
		if (keyFrames.length <= 1) {
			return <number[]>[ 0 ];
		}
		let resolvedOffsets = <number[]>new Array(keyFrames.length);
		let spacing = 1 / (keyFrames.length - 1);
		let currOffset: number = 0;
		for (let i = 0; i < keyFrames.length; i++) {
			if (isNaN_(keyFrames[i].offset)) {
				resolvedOffsets[i] = currOffset;
			} else {
				resolvedOffsets[i] = keyFrames[i].offset;
				currOffset = keyFrames[i].offset;
				if (((keyFrames.length - 1) - i) > 0) {
					spacing = (1 - currOffset) / ((keyFrames.length - 1) - i);
				}
			}
			currOffset += spacing;
		}
		return resolvedOffsets;
	}
	add(frame: AnimationKeyFrame): AnimationKeyFrameEffect {
		this._frames.add(frame);
		this._framesCache = null;
		this._effectPropertiesCache = null;
		return this;
	}
	addFrame(...props: AnimationKeyFrameProperty[]): AnimationKeyFrameEffect {
		let ret = new AnimationKeyFrame(0);
		if (props != null) {
			for (let i = 0; i < props.length; i++) {
				ret.add(props[i]);
			}
		}
		this.add(ret);
		return this;
	}
	addFrameWithOffset(offset: number, ...props: AnimationKeyFrameProperty[]): AnimationKeyFrameEffect {
		let ret = new AnimationKeyFrame(1, offset);
		if (props != null) {
			for (let i = 0; i < props.length; i++) {
				ret.add(props[i]);
			}
		}
		this.add(ret);
		return this;
	}
	private get localTime(): number {
		if (this.associatedAnimation != null) {
			return this.associatedAnimation.currentTime;
		}
		return NaN;
	}
	private get hasLocalTime(): boolean {
		if (this.associatedAnimation != null) {
			return this.associatedAnimation.hasCurrentTime;
		}
		return false;
	}
	private get beforeActiveBoundaryTime(): number {
		return Math.max(Math.min(this._startDelay, this.endTime), 0);
	}
	private get activeAfterBoundaryTime(): number {
		return Math.max(Math.min(this._startDelay + this.activeDuration, this.endTime), 0);
	}
	private get animationIsForwards(): boolean {
		if (this.associatedAnimation != null && this.associatedAnimation.playbackRate < 0) {
			return false;
		}
		return true;
	}
	private get currentPhase(): KeyFrameAnimationEffectPhase {
		if (this.hasLocalTime && (this.localTime < this.beforeActiveBoundaryTime || !this.animationIsForwards && this.localTime == this.beforeActiveBoundaryTime)) {
			return KeyFrameAnimationEffectPhase.Before;
		}
		if (this.hasLocalTime && (this.localTime > this.activeAfterBoundaryTime || this.animationIsForwards && this.localTime == this.activeAfterBoundaryTime)) {
			return KeyFrameAnimationEffectPhase.After;
		}
		if (this.hasLocalTime) {
			return KeyFrameAnimationEffectPhase.Active;
		}
		return KeyFrameAnimationEffectPhase.Idle;
	}
	private get activeTime(): number {
		let phase = this.currentPhase;
		switch (phase) {
			case KeyFrameAnimationEffectPhase.Before: if (this._fillMode == KeyFrameAnimationFill.Backwards || this._fillMode == KeyFrameAnimationFill.Both) {
				return Math.max(this.localTime - this._startDelay, 0);
			} else {
				return NaN;
			}
			case KeyFrameAnimationEffectPhase.Active: return this.localTime - this._startDelay;
			case KeyFrameAnimationEffectPhase.After: if (this._fillMode == KeyFrameAnimationFill.Forwards || this._fillMode == KeyFrameAnimationFill.Both) {
				return Math.max(Math.min(this.localTime - this._startDelay, this.activeDuration), 0);
			} else {
				return NaN;
			}
			default: return NaN;
		}

	}
	private get hasActiveTime(): boolean {
		if (!this.hasLocalTime) {
			return false;
		}
		let phase = this.currentPhase;
		switch (phase) {
			case KeyFrameAnimationEffectPhase.Before: if (this._fillMode == KeyFrameAnimationFill.Backwards || this._fillMode == KeyFrameAnimationFill.Both) {
				return true;
			} else {
				return false;
			}
			case KeyFrameAnimationEffectPhase.Active: return true;
			case KeyFrameAnimationEffectPhase.After: if (this._fillMode == KeyFrameAnimationFill.Forwards || this._fillMode == KeyFrameAnimationFill.Both) {
				return true;
			} else {
				return false;
			}
			default: return false;
		}

		return false;
	}
	private get hasOverallProgress(): boolean {
		if (!this.hasActiveTime) {
			return false;
		}
		return true;
	}
	private get overallProgress(): number {
		if (!this.hasActiveTime) {
			return NaN;
		}
		let overallProgress: number = 0;
		if (this._iterationDuration == 0) {
			if (this.currentPhase == KeyFrameAnimationEffectPhase.Before) {
				overallProgress = 0;
			} else {
				overallProgress = this._iterationCount;
			}
		} else {
			overallProgress = this.activeTime / this._iterationDuration;
		}
		return overallProgress + this._iterationStart;
	}
	private get hasSimpleIterationProgress(): boolean {
		if (!this.hasOverallProgress) {
			return false;
		}
		return true;
	}
	private get simpleIterationProgress(): number {
		if (!this.hasOverallProgress) {
			return NaN;
		}
		let simpleIterationProgress: number = 1;
		if (isInfinity(this.overallProgress)) {
			simpleIterationProgress = this._iterationStart % 1;
		} else {
			simpleIterationProgress = this.overallProgress % 1;
		}
		if (simpleIterationProgress == 0 && (this.currentPhase == KeyFrameAnimationEffectPhase.Active || this.currentPhase == KeyFrameAnimationEffectPhase.After) && this.activeTime == this.activeDuration && this._iterationCount != 0) {
			simpleIterationProgress = 1;
		}
		return simpleIterationProgress;
	}
	private get hasCurrentIteration(): boolean {
		if (!this.hasActiveTime) {
			return false;
		}
		return true;
	}
	private get currentIteration(): number {
		if (!this.hasActiveTime) {
			return NaN;
		}
		if (this.currentPhase == KeyFrameAnimationEffectPhase.After && isInfinity(this._iterationCount)) {
			return Number.POSITIVE_INFINITY;
		}
		if (this.simpleIterationProgress == 1) {
			return Math.floor(this.overallProgress) - 1;
		}
		return Math.floor(this.overallProgress);
	}
	private get hasDirectedProgress(): boolean {
		return this.hasSimpleIterationProgress;
	}
	private get directedProgress(): number {
		if (!this.hasSimpleIterationProgress) {
			return NaN;
		}
		let isForwards = this.getCurrentDirection();
		if (isForwards) {
			return this.simpleIterationProgress;
		} else {
			return 1 - this.simpleIterationProgress;
		}
	}
	private getCurrentDirection(): boolean {
		let isForwards = true;
		if (this._playbackDirection == KeyFrameEffectTimingDirection.Normal) {
			isForwards = true;
		} else if (this._playbackDirection == KeyFrameEffectTimingDirection.Reverse) {
			isForwards = false;
		} else {
			let d = this.currentIteration;
			if (this._playbackDirection == KeyFrameEffectTimingDirection.AlternateReverse) {
				d++;
			}
			if (isInfinity(d)) {
				isForwards = true;
			} else {
				if (d % 2 == 0) {
					isForwards = true;
				} else {
					isForwards = false;
				}
			}
		}
		return isForwards;
	}
	private get hasTransformedProgress(): boolean {
		return this.hasDirectedProgress;
	}
	private get transformedProgress(): number {
		if (!this.hasDirectedProgress) {
			return NaN;
		}
		let beforeFlag = false;
		let goingForwards = this.getCurrentDirection();
		if (goingForwards && this.currentPhase == KeyFrameAnimationEffectPhase.Before) {
			beforeFlag = true;
		}
		if (!goingForwards && this.currentPhase == KeyFrameAnimationEffectPhase.After) {
			beforeFlag = true;
		}
		return this.timingFunction(this.directedProgress, beforeFlag);
	}
	private get iterationProgress(): number {
		return this.transformedProgress;
	}
	private get hasIterationProgress(): boolean {
		return this.hasTransformedProgress;
	}
	private timingFunction(directedProgress: number, beforeFlag: boolean): number {
		return this._easingFunction(directedProgress);
	}
	tick(): void {
		if (!this.hasTransformedProgress) {
			return;
		}
		let p = this.transformedProgress;
		for (let i = 0; i < this.effectProperties.length; i++) {
			let value = this.getEffectValue(this.effectProperties[i], this.effectPropertyAccessors[i]);
			this.applyEffectValue(this.effectProperties[i], this.effectPropertyAccessors[i], value);
		}
	}
	private applyEffectValue(animationKeyFramePropertyId: UIElementPropertyId, accessor: UIElementPropertyAccessor, value: any): void {
		accessor.setValue(this.target, value);
	}
	private getEffectValue(animationKeyFramePropertyId: UIElementPropertyId, accessor: UIElementPropertyAccessor): any {
		if (!this.hasIterationProgress) {
			return null;
		}
		let targetProperty = animationKeyFramePropertyId;
		let iterationProgress = this.iterationProgress;
		if (this.target == null) {
			return null;
		}
		let underlyingValue = this.getUnderlyingValue(targetProperty, accessor);
		let propKeyFrames: List$1<AnimationKeyFrame> = new List$1<AnimationKeyFrame>((<any>AnimationKeyFrame).$type, 0);
		let propKeyFrameOffsets: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this.frames.length; i++) {
			for (let j = 0; j < this.frames[i].properties.length; j++) {
				if (this.frames[i].properties[j].propertyId == targetProperty) {
					propKeyFrames.add(this.frames[i]);
					propKeyFrameOffsets.add(this.resolvedOffsets[i]);
				}
			}
		}
		if (propKeyFrames.count == 0) {
			return underlyingValue;
		}
		if (propKeyFrameOffsets._inner[0] != 0) {
			propKeyFrames.insert(0, new AnimationKeyFrame(1, 0).add(new AnimationKeyFrameProperty(targetProperty, underlyingValue)));
			propKeyFrameOffsets.insert(0, 0);
		}
		if (propKeyFrameOffsets._inner[propKeyFrames.count - 1] != 1) {
			propKeyFrames.add(new AnimationKeyFrame(1, 1).add(new AnimationKeyFrameProperty(targetProperty, underlyingValue)));
			propKeyFrameOffsets.add(1);
		}
		let found: boolean = false;
		let intervalEndpoints = new List$1<AnimationKeyFrame>((<any>AnimationKeyFrame).$type, 0);
		let intervalEndpointOffsets = new List$1<number>(Number_$type, 0);
		if (iterationProgress < 0) {
			let numZero: number = 0;
			for (let i1 = 0; i1 < propKeyFrames.count; i1++) {
				if (propKeyFrameOffsets._inner[i1] == 0) {
					numZero++;
				} else {
					break;
				}
			}
			if (numZero > 1) {
				found = true;
				intervalEndpoints.add(propKeyFrames._inner[0]);
				intervalEndpointOffsets.add(propKeyFrameOffsets._inner[0]);
			}
		}
		if (iterationProgress >= 1) {
			let numOne: number = 0;
			for (let i2 = propKeyFrames.count - 1; i2 >= 0; i2--) {
				if (propKeyFrameOffsets._inner[i2] == 1) {
					numOne++;
				} else {
					break;
				}
			}
			if (numOne > 1) {
				found = true;
				intervalEndpoints.add(propKeyFrames._inner[propKeyFrames.count - 1]);
				intervalEndpointOffsets.add(propKeyFrameOffsets._inner[propKeyFrames.count - 1]);
			}
		}
		if (!found) {
			let matching: AnimationKeyFrame = null;
			let matchingIndex: number = -1;
			for (let i3 = 0; i3 < propKeyFrames.count; i3++) {
				if (propKeyFrameOffsets._inner[i3] <= iterationProgress) {
					matching = propKeyFrames._inner[i3];
					matchingIndex = i3;
				} else {
					break;
				}
			}
			if (matchingIndex == -1) {
				for (let i4 = 0; i4 < propKeyFrames.count; i4++) {
					if (propKeyFrameOffsets._inner[i4] == 0) {
						matching = propKeyFrames._inner[i4];
						matchingIndex = i4;
					} else {
						break;
					}
				}
			}
			intervalEndpoints.add(matching);
			intervalEndpointOffsets.add(propKeyFrameOffsets._inner[matchingIndex]);
			if (matchingIndex < propKeyFrameOffsets.count - 1) {
				intervalEndpoints.add(propKeyFrames._inner[matchingIndex + 1]);
				intervalEndpointOffsets.add(propKeyFrameOffsets._inner[matchingIndex + 1]);
			}
		}
		if (intervalEndpoints.count == 1) {
			for (let i5 = 0; i5 < intervalEndpoints._inner[0].properties.length; i5++) {
				if (intervalEndpoints._inner[0].properties[i5].propertyId == targetProperty) {
					return intervalEndpoints._inner[0].properties[i5].value;
				}
			}
			return null;
		}
		let startOffset = intervalEndpointOffsets._inner[0];
		let endOffset = intervalEndpointOffsets._inner[intervalEndpoints.count - 1];
		let startValue = intervalEndpoints._inner[0].getProperty(targetProperty).value;
		let endValue = intervalEndpoints._inner[1].getProperty(targetProperty).value;
		let p = (iterationProgress - startOffset) / (endOffset - startOffset);
		return this.interpolateValue(targetProperty, p, startValue, endValue);
	}
	private interpolateValue(targetProperty: UIElementPropertyId, p: number, startValue: any, endValue: any): any {
		switch (targetProperty) {
			case UIElementPropertyId.BackgroundColor:

			case UIElementPropertyId.BorderColor:

			case UIElementPropertyId.Color:

			case UIElementPropertyId.Stroke:

			case UIElementPropertyId.Fill: return BrushUtil.getInterpolation(<Brush>startValue, p, <Brush>endValue, InterpolationMode.RGB);
			case UIElementPropertyId.BorderWidth:

			case UIElementPropertyId.Margin: return InterpolationUtil.interpolateThickness(p, <Thickness>startValue, <Thickness>endValue);
			case UIElementPropertyId.Left:

			case UIElementPropertyId.Height:

			case UIElementPropertyId.Top:

			case UIElementPropertyId.FontSize:

			case UIElementPropertyId.Width:

			case UIElementPropertyId.StrokeWidth:

			case UIElementPropertyId.StrokeDashOffset: return <number>startValue + p * ((<number>endValue) - (<number>startValue));
			case UIElementPropertyId.Opacity: return <number>startValue + p * ((<number>endValue) - (<number>startValue));
			case UIElementPropertyId.BorderRadius: return InterpolationUtil.interpolateCornerRadius(p, <CornerRadius>startValue, <CornerRadius>endValue);
			case UIElementPropertyId.Transform: return this.interpolateMatrixTransforms(p, <MatrixTransform>startValue, <MatrixTransform>endValue);
			case UIElementPropertyId.StrokeDashArray: return InterpolationUtil.interpolateDashArrays(p, <number[]>startValue, <number[]>endValue);
			default: if (p < 0.5) {
				return startValue;
			} else {
				return endValue;
			}
		}

		return null;
	}
	private interpolateMatrixTransforms(p: number, startValue: MatrixTransform, endValue: MatrixTransform): MatrixTransform {
		let mat = TransformMatrixHelpler.affineInterpolate(p, startValue.matrix, endValue.matrix);
		let t = new MatrixTransform();
		t.matrix = mat;
		return t;
	}
	private getUnderlyingValue(targetProperty: UIElementPropertyId, accessor: UIElementPropertyAccessor): any {
		return accessor.getValue(this.target);
	}
	private _target: any = null;
	get target(): any {
		return this._target;
	}
	set target(value: any) {
		this._target = value;
	}
	private _targetType: AnimationKeyFrameEffectTargetType = <AnimationKeyFrameEffectTargetType>0;
	get targetType(): AnimationKeyFrameEffectTargetType {
		return this._targetType;
	}
	set targetType(value: AnimationKeyFrameEffectTargetType) {
		this._targetType = value;
	}
	private _dependentRenderer: IDependentRenderer = null;
	get dependentRenderer(): IDependentRenderer {
		return this._dependentRenderer;
	}
	set dependentRenderer(value: IDependentRenderer) {
		this._dependentRenderer = value;
	}
	private _frames: List$1<AnimationKeyFrame> = new List$1<AnimationKeyFrame>((<any>AnimationKeyFrame).$type, 0);
	private _framesCache: AnimationKeyFrame[] = null;
	private _startDelay: number = 0;
	private _endDelay: number = 0;
	private _easingFunction: (arg1: number) => number = null;
	private _fillMode: KeyFrameAnimationFill = <KeyFrameAnimationFill>0;
	private _iterationCount: number = 0;
	private _iterationDuration: number = 0;
	private _playbackDirection: KeyFrameEffectTimingDirection = <KeyFrameEffectTimingDirection>0;
	private _iterationStart: number = 0;
	private _easing: KeyFrameEffectEasing = <KeyFrameEffectEasing>0;
	private _resolvedOffsets: number[] = null;
	private _effectPropertiesCache: UIElementPropertyId[] = null;
	private _effectPropertyAccessors: UIElementPropertyAccessor[] = null;
	get frames(): AnimationKeyFrame[] {
		if (this._framesCache == null) {
			this._framesCache = this._frames.toArray();
			this._effectPropertiesCache = this.getEffectProperties();
			this._effectPropertyAccessors = this.getEffectPropertyAccessors();
		}
		return this._framesCache;
	}
	get effectProperties(): UIElementPropertyId[] {
		if (this._framesCache == null) {
			this._framesCache = this._frames.toArray();
			this._effectPropertiesCache = this.getEffectProperties();
			this._effectPropertyAccessors = this.getEffectPropertyAccessors();
		}
		return this._effectPropertiesCache;
	}
	get effectPropertyAccessors(): UIElementPropertyAccessor[] {
		if (this._framesCache == null) {
			this._framesCache = this._frames.toArray();
			this._effectPropertiesCache = this.getEffectProperties();
			this._effectPropertyAccessors = this.getEffectPropertyAccessors();
		}
		return this._effectPropertyAccessors;
	}
	private getEffectPropertyAccessors(): UIElementPropertyAccessor[] {
		let ret: List$1<UIElementPropertyAccessor> = new List$1<UIElementPropertyAccessor>((<any>UIElementPropertyAccessor).$type, 0);
		for (let i = 0; i < this.effectProperties.length; i++) {
			ret.add(UIElementPropertyAccessorFactory.instance.getPropertyAccessor(this.effectProperties[i]));
		}
		return ret.toArray();
	}
	private getEffectProperties(): UIElementPropertyId[] {
		let ret: List$1<UIElementPropertyId> = new List$1<UIElementPropertyId>(UIElementPropertyId_$type, 0);
		let seen: HashSet$1<UIElementPropertyId> = new HashSet$1<UIElementPropertyId>(UIElementPropertyId_$type, 0);
		for (let i = 0; i < this.frames.length; i++) {
			for (let j = 0; j < this.frames[i].properties.length; j++) {
				if (!seen.contains(this.frames[i].properties[j].propertyId)) {
					seen.add_1(this.frames[i].properties[j].propertyId);
					ret.add(this.frames[i].properties[j].propertyId);
				}
			}
		}
		return ret.toArray();
	}
	commitStyles(): void {
		let prevMode = this._fillMode;
		this._fillMode = KeyFrameAnimationFill.Both;
		this.tick();
		this._fillMode = prevMode;
	}
	private _timing: AnimationKeyFrameEffectTiming = null;
	get timing(): AnimationKeyFrameEffectTiming {
		return this._timing;
	}
	set timing(value: AnimationKeyFrameEffectTiming) {
		this._timing = value;
	}
}


