/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, runOn, Type, markType, PointUtil } from "./type";
import { TouchGestureState } from "./TouchGestureState";
import { IExecutionContext } from "./IExecutionContext";
import { TouchVelocityTracker } from "./TouchVelocityTracker";
import { TouchVelocityReading } from "./TouchVelocityReading";
import { List$1 } from "./List$1";
import { TouchPointInfo } from "./TouchPointInfo";
import { Debug } from "./Debug";
import { TouchGestureEventArgs } from "./TouchGestureEventArgs";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class TouchGestureRecognizer extends Base {
	static $t: Type = markType(TouchGestureRecognizer, 'TouchGestureRecognizer');
	constructor(executionContext: IExecutionContext) {
		super();
		this._executionContext = executionContext;
	}
	private _currentState: TouchGestureState = <TouchGestureState>0;
	get currentState(): TouchGestureState {
		return this._currentState;
	}
	set currentState(value: TouchGestureState) {
		this._currentState = value;
	}
	private _tracker: TouchVelocityTracker = new TouchVelocityTracker();
	private _centroidX: number = 0;
	private _centroidY: number = 0;
	private _pendingX: number = 0;
	private _pendingY: number = 0;
	private _checkPanDisplacementX: number = 0;
	private _checkPanDisplacementY: number = 0;
	private _startDistanceX: number = NaN;
	private _startDistanceY: number = NaN;
	private _startDistanceLine: number = NaN;
	private _scaleX: number = 1;
	private _scaleY: number = 1;
	private _isoScale: number = 1;
	private _holdSlopDistance: number = 10;
	get holdSlopDistance(): number {
		return this._holdSlopDistance;
	}
	set holdSlopDistance(value: number) {
		this._holdSlopDistance = value;
	}
	get centroidX(): number {
		return this._centroidX;
	}
	get centroidY(): number {
		return this._centroidY;
	}
	getPendingPanDisplacement(): Point {
		return <Point>{ $type: Point_$type, x: Math.abs(this._checkPanDisplacementX - this._pendingX), y: Math.abs(this._checkPanDisplacementY - this._pendingY) };
	}
	updateDisplacement(touchPoints: List$1<TouchPointInfo>): void {
		let shouldStopHoldTimer: boolean = false;
		if (!isNaN_(this._pendingX) && !isNaN_(this._pendingY)) {
			this._checkPanDisplacementX = touchPoints._inner[0].x;
			this._checkPanDisplacementY = touchPoints._inner[0].y;
			if (Math.abs(touchPoints._inner[0].x - this._pendingX) > this._holdSlopDistance || Math.abs(touchPoints._inner[0].y - this._pendingY) > this._holdSlopDistance) {
				shouldStopHoldTimer = true;
			}
		}
		if (shouldStopHoldTimer) {
			this.stopHoldTimer();
		}
	}
	processTouches(touchPoints: List$1<TouchPointInfo>): void {
		Debug.writeLine("process touches:  " + touchPoints.count);
		let newCount = touchPoints.count;
		let newState = this.currentState;
		let shouldEndHold = false;
		let shouldStartHoldTimer = false;
		let shouldStopHoldTimer = false;
		let shouldEndZoom = false;
		let shouldStartZoom = false;
		let shouldEndPan = false;
		let shouldStartPan = false;
		let shouldCancelFling = false;
		let currDistanceX: number = 0;
		let currDistanceY: number = 0;
		let currDistanceLine: number = 0;
		let previousState = this.currentState;
		if (newCount > 0 && newCount < 2) {
			switch (this.currentState) {
				case TouchGestureState.Flinging:
				newState = TouchGestureState.PendingPan;
				shouldStartHoldTimer = true;
				shouldStartPan = true;
				break;

				case TouchGestureState.None:
				newState = TouchGestureState.PendingPan;
				shouldStartHoldTimer = true;
				break;

				case TouchGestureState.Zoom:
				newState = TouchGestureState.Pan;
				shouldStartPan = true;
				shouldEndZoom = true;
				break;

			}

		}
		if (newCount > 1) {
			switch (this.currentState) {
				case TouchGestureState.Flinging:
				newState = TouchGestureState.Zoom;
				shouldStartZoom = true;
				shouldCancelFling = true;
				break;

				case TouchGestureState.PendingPan:
				shouldStopHoldTimer = true;
				newState = TouchGestureState.Zoom;
				shouldStartZoom = true;
				break;

				case TouchGestureState.None:
				newState = TouchGestureState.Zoom;
				shouldStartZoom = true;
				break;

				case TouchGestureState.Pan:
				newState = TouchGestureState.Zoom;
				shouldEndPan = true;
				shouldStartZoom = true;
				break;

			}

		}
		if (newCount == 0) {
			switch (this.currentState) {
				case TouchGestureState.PendingPan:
				if (this.checkDoubleTap(new TouchPointInfo(0, this._centroidX, this._centroidY))) {
					newState = TouchGestureState.None;
					shouldStopHoldTimer = true;
					if (this.doubleTapped != null) {
						this.doubleTapped(this, this.getGestureArgs());
					}
				} else {
					shouldStopHoldTimer = true;
					newState = TouchGestureState.None;
				}
				break;

				case TouchGestureState.Pan:
				newState = TouchGestureState.None;
				shouldEndPan = true;
				break;

				case TouchGestureState.Zoom:
				newState = TouchGestureState.None;
				shouldEndZoom = true;
				break;

				case TouchGestureState.Hold:
				newState = TouchGestureState.None;
				shouldEndHold = true;
				break;

			}

		}
		if (shouldCancelFling) {
			if (shouldStartPan) {
				if (this.panEnding != null) {
					this.panEnding(this, this.getGestureArgs());
				}
				if (this.manipulationEnding != null) {
					this.manipulationEnding(this, this.getGestureArgs());
				}
			}
			this.cancelFling();
		}
		if (shouldStartHoldTimer) {
			this._pendingX = touchPoints._inner[0].x;
			this._pendingY = touchPoints._inner[0].y;
		}
		if (newState == TouchGestureState.PendingPan) {
			if (!isNaN_(this._pendingX) && !isNaN_(this._pendingY)) {
				this._checkPanDisplacementX = touchPoints._inner[0].x;
				this._checkPanDisplacementY = touchPoints._inner[0].y;
				if (Math.abs(touchPoints._inner[0].x - this._pendingX) > this._holdSlopDistance || Math.abs(touchPoints._inner[0].y - this._pendingY) > this._holdSlopDistance) {
					shouldStopHoldTimer = true;
					shouldStartPan = true;
					newState = TouchGestureState.Pan;
				}
			}
		}
		let newCentroidX: number = 0;
		let newCentroidY: number = 0;
		for (let i = 0; i < newCount; i++) {
			newCentroidX += touchPoints._inner[i].x;
			newCentroidY += touchPoints._inner[i].y;
		}
		newCentroidX /= newCount;
		newCentroidY /= newCount;
		if (newCount == 0) {
			newCentroidX = this._previousPosX;
			newCentroidY = this._previousPosY;
		}
		this._centroidX = newCentroidX;
		this._centroidY = newCentroidY;
		this._tracker.trackPoint(this._centroidX, this._centroidY, this.getCurrentTime());
		if (shouldStartZoom) {
			let dx = touchPoints._inner[0].x - touchPoints._inner[1].x;
			let dy = touchPoints._inner[0].y - touchPoints._inner[1].y;
			this._startDistanceX = Math.abs(dx);
			this._startDistanceY = Math.abs(dy);
			this._startDistanceLine = Math.sqrt(dx * dx + dy * dy);
			if (this._startDistanceX < 1) {
				this._startDistanceX = 1;
			}
			if (this._startDistanceY < 1) {
				this._startDistanceY = 1;
			}
			if (this._startDistanceLine < 1) {
				this._startDistanceLine = 1;
			}
		}
		if (newState == TouchGestureState.Zoom) {
			let dx1 = touchPoints._inner[0].x - touchPoints._inner[1].x;
			let dy1 = touchPoints._inner[0].y - touchPoints._inner[1].y;
			currDistanceX = Math.abs(dx1);
			currDistanceY = Math.abs(dy1);
			currDistanceLine = Math.sqrt(dx1 * dx1 + dy1 * dy1);
			if (currDistanceX < 1) {
				currDistanceX = 1;
			}
			if (currDistanceY < 1) {
				currDistanceY = 1;
			}
			if (currDistanceLine < 1) {
				currDistanceLine = 1;
			}
			this._scaleX = currDistanceX / this._startDistanceX;
			this._scaleY = currDistanceY / this._startDistanceY;
			this._isoScale = currDistanceLine / this._startDistanceLine;
		} else {
			this._startDistanceX = NaN;
			this._startDistanceY = NaN;
			this._scaleX = 1;
			this._scaleY = 1;
			this._scaleDeltaX = 1;
			this._scaleDeltaY = 1;
			this._isoScaleDelta = 1;
		}
		this.currentState = newState;
		if (previousState == TouchGestureState.None && this.currentState == TouchGestureState.Pan || this.currentState == TouchGestureState.Zoom) {
			if (this.manipulationStarting != null) {
				this.manipulationStarting(this, this.getGestureArgs());
			}
		}
		if (shouldEndZoom) {
			this.endZoom();
		}
		if (shouldEndPan) {
			this.endPan();
		}
		if (shouldEndHold) {
			this.endHold();
		}
		if (shouldStopHoldTimer) {
			this.stopHoldTimer();
		}
		if (shouldStartPan) {
			this.startPan();
		}
		if (shouldStartHoldTimer) {
			this.startHoldTimer();
		}
		if (shouldStartZoom) {
			this.startZoom();
		}
		if (this.currentState == TouchGestureState.Zoom) {
			this._scaleDeltaX = this._scaleX / this._previousScaleX;
			this._scaleDeltaY = this._scaleY / this._previousScaleY;
			this._isoScaleDelta = this._isoScale / this._previousIsoScale;
			this._transDeltaX = this._centroidX - this._previousPosX;
			this._transDeltaY = this._centroidY - this._previousPosY;
			this._previousScaleX = this._previousScaleX * this._scaleDeltaX;
			this._previousScaleY = this._previousScaleY * this._scaleDeltaY;
			this._previousIsoScale = this._previousIsoScale * this._isoScaleDelta;
			this._previousPosX = this._centroidX;
			this._previousPosY = this._centroidY;
			if (this.manipulationChanging != null) {
				this.manipulationChanging(this, this.getGestureArgs());
			}
		}
		if (this.currentState == TouchGestureState.Pan) {
			this._transDeltaX = this._centroidX - this._previousPosX;
			this._transDeltaY = this._centroidY - this._previousPosY;
			this._previousPosX = this._centroidX;
			this._previousPosY = this._centroidY;
			if (this.manipulationChanging != null) {
				this.manipulationChanging(this, this.getGestureArgs());
			}
		}
		this._previousPosX = this._centroidX;
		this._previousPosY = this._centroidY;
		if ((shouldEndPan || shouldEndZoom) && this.currentState == TouchGestureState.None) {
			if (this.manipulationEnding != null) {
				this.manipulationEnding(this, this.getGestureArgs());
			}
		}
	}
	private _tapTime: number = -1;
	private _tapLocationX: number = 0;
	private _tapLocationY: number = 0;
	private checkDoubleTap(touchPointInfo: TouchPointInfo): boolean {
		let currentTime = this.getCurrentTime();
		if ((currentTime - this._tapTime) < 500) {
			if (Math.abs(touchPointInfo.x - this._tapLocationX) < 50 && Math.abs(touchPointInfo.y - this._tapLocationY) < 50) {
				return true;
			}
		}
		this._tapLocationX = touchPointInfo.x;
		this._tapLocationY = touchPointInfo.y;
		this._tapTime = currentTime;
		return false;
	}
	private static readonly checkHoldTime: number = 1000;
	private startHoldTimer(): void {
		this._startHoldTime = this.getCurrentTime();
		if (!this._holding) {
			this._holding = true;
			this._executionContext.executeDelayed(runOn(this, this.checkHold), 1000);
		}
	}
	private checkHold(): void {
		if (!this._holding) {
			return;
		}
		let currentTime: number = this.getCurrentTime();
		if (currentTime - this._startHoldTime >= TouchGestureRecognizer.checkHoldTime) {
			this.startHold();
		} else {
			this._executionContext.executeDelayed(runOn(this, this.checkHold), <number>(TouchGestureRecognizer.checkHoldTime - (currentTime - this._startHoldTime)));
		}
	}
	stopHoldTimer(): void {
		this._holding = false;
	}
	private endZoom(): void {
		this._tracker.clear();
		if (this.zoomEnding != null) {
			this.zoomEnding(this, this.getGestureArgs());
		}
	}
	private startHold(): void {
		if (this.holdStarting != null) {
			this.holdStarting(this, this.getGestureArgs());
		}
	}
	private _previousScaleX: number = 1;
	private _previousScaleY: number = 1;
	private _previousIsoScale: number = 1;
	private _previousPosX: number = NaN;
	private _previousPosY: number = NaN;
	private startZoom(): void {
		this._tracker.clear();
		this.cancelFling();
		this._previousScaleX = 1;
		this._previousScaleY = 1;
		this._previousIsoScale = 1;
		this._previousPosX = this._centroidX;
		this._previousPosY = this._centroidY;
		if (this.zoomStarting != null) {
			this.zoomStarting(this, this.getGestureArgs());
		}
	}
	private endHold(): void {
		if (this.holdEnding != null) {
			this.holdEnding(this, this.getGestureArgs());
		}
	}
	private startPan(): void {
		this._tracker.clear();
		this.cancelFling();
		this._previousPosX = this._centroidX;
		this._previousPosY = this._centroidY;
		if (this.panStarting != null) {
			this.panStarting(this, this.getGestureArgs());
		}
	}
	private cancelFling(): void {
		if (this.currentState == TouchGestureState.Flinging) {
			this.currentState = TouchGestureState.None;
		}
	}
	private _flingVel: TouchVelocityReading = null;
	private decelFactor: number = 800;
	private _flingTime: number = -1;
	private updateFling(): void {
		if (this.currentState != TouchGestureState.Flinging) {
			return;
		}
		if (this._flingVel == null || this._flingTime == -1) {
			this.cancelFling();
			return;
		}
		let currentTime = this.getCurrentTime();
		let deltaTime = currentTime - this._flingTime;
		if (deltaTime < 16) {
			this.queueFrame(runOn(this, this.updateFling));
			return;
		}
		this._flingTime = currentTime;
		let deltaSeconds = deltaTime / 1000;
		let velDelta = this.decelFactor * deltaSeconds;
		let flingVel = this._flingVel;
		if (flingVel.x > 0) {
			flingVel.x -= velDelta;
			if (flingVel.x < 0) {
				flingVel.x = 0;
			}
		}
		if (flingVel.x < 0) {
			flingVel.x += velDelta;
			if (flingVel.x > 0) {
				flingVel.x = 0;
			}
		}
		if (flingVel.y > 0) {
			flingVel.y -= velDelta;
			if (flingVel.y < 0) {
				flingVel.y = 0;
			}
		}
		if (flingVel.y < 0) {
			flingVel.y += velDelta;
			if (flingVel.y > 0) {
				flingVel.y = 0;
			}
		}
		if (flingVel.x == 0 && flingVel.y == 0) {
			this.currentState = TouchGestureState.None;
			if (this.panEnding != null) {
				this.panEnding(this, this.getGestureArgs());
			}
			if (this.manipulationEnding != null) {
				this.manipulationEnding(this, this.getGestureArgs());
			}
			this.cancelFling();
			return;
		}
		this._centroidX += flingVel.x * deltaSeconds;
		this._centroidY += flingVel.y * deltaSeconds;
		this._transDeltaX = this._centroidX - this._previousPosX;
		this._transDeltaY = this._centroidY - this._previousPosY;
		this._previousPosX = this._centroidX;
		this._previousPosY = this._centroidY;
		if (this.manipulationChanging != null) {
			this.manipulationChanging(this, this.getGestureArgs());
		}
		this.queueFrame(runOn(this, this.updateFling));
	}
	private _executionContext: IExecutionContext = null;
	private _holding: boolean = false;
	private _startHoldTime: number = -1;
	private startFling(vel: TouchVelocityReading): boolean {
		if (this.currentState == TouchGestureState.Flinging) {
			this.cancelFling();
		}
		this._flingTime = this.getCurrentTime();
		this._flingVel = vel;
		this.currentState = TouchGestureState.Flinging;
		this.queueFrame(runOn(this, this.updateFling));
		if (this.flingStarting != null) {
			if (!this.flingStarting(this, this.getGestureArgs())) {
				this.cancelFling();
				return false;
			}
		}
		return true;
	}
	private queueFrame(action: () => void): void {
		this._executionContext.enqueueAnimationAction(action);
	}
	private endPan(): void {
		let vel = this._tracker.getVelocity(this.getCurrentTime());
		if ((vel.x > 5 || vel.x < -5 || vel.y > 5 || vel.y < -5) && this.currentState == TouchGestureState.None) {
			this.currentState = <TouchGestureState>TouchGestureState.Pan;
			if (!this.startFling(vel)) {
				if (this.currentState == TouchGestureState.None) {
					if (this.panEnding != null) {
						this.panEnding(this, this.getGestureArgs());
					}
					if (this.manipulationEnding != null) {
						this.manipulationEnding(this, this.getGestureArgs());
					}
				}
			}
		} else {
			if (this.panEnding != null) {
				this.panEnding(this, this.getGestureArgs());
			}
			if (this.currentState == TouchGestureState.None) {
				if (this.manipulationEnding != null) {
					this.manipulationEnding(this, this.getGestureArgs());
				}
			}
		}
	}
	private getGestureArgs(): TouchGestureEventArgs {
		let args: TouchGestureEventArgs = new TouchGestureEventArgs();
		args.centroidX = this._centroidX;
		args.centroidY = this._centroidY;
		args.scaleDeltaX = this._scaleDeltaX;
		args.scaleDeltaY = this._scaleDeltaY;
		args.isoScaleDelta = this._isoScaleDelta;
		args.translationDeltaX = this._transDeltaX;
		args.translationDeltaY = this._transDeltaY;
		args.velocityX = this._flingVel != null ? this._flingVel.x : this._tracker.getVelocity(this.getCurrentTime()).x;
		args.velocityY = this._flingVel != null ? this._flingVel.y : this._tracker.getVelocity(this.getCurrentTime()).y;
		return args;
	}
	private getCurrentTime(): number {
		return this._executionContext.getCurrentRelativeTime();
	}
	holdStarting: (sender: any, args: TouchGestureEventArgs) => void = null;
	holdEnding: (sender: any, args: TouchGestureEventArgs) => void = null;
	panStarting: (sender: any, args: TouchGestureEventArgs) => void = null;
	manipulationStarting: (sender: any, args: TouchGestureEventArgs) => void = null;
	manipulationChanging: (sender: any, args: TouchGestureEventArgs) => void = null;
	manipulationEnding: (sender: any, args: TouchGestureEventArgs) => void = null;
	panEnding: (sender: any, args: TouchGestureEventArgs) => void = null;
	zoomStarting: (sender: any, args: TouchGestureEventArgs) => void = null;
	zoomEnding: (sender: any, args: TouchGestureEventArgs) => void = null;
	flingStarting: (sender: any, args: TouchGestureEventArgs) => boolean = null;
	doubleTapped: (sender: any, args: TouchGestureEventArgs) => void = null;
	private _scaleDeltaX: number = 0;
	private _scaleDeltaY: number = 0;
	private _isoScaleDelta: number = 0;
	private _transDeltaX: number = 0;
	private _transDeltaY: number = 0;
}


