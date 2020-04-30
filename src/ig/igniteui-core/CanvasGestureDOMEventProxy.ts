/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { BaseDOMEventProxy } from "./BaseDOMEventProxy";
import { EventProxy } from "./EventProxy";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent } from "./dom";
import { BaseError, Base, Point, Type, TypeRegistrar, runOn, delegateCombine, Point_$type, String_$type, Delegate_$type, Number_$type, markType, PointUtil } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";
import { TouchPointInfo } from "./TouchPointInfo";
import { DOMExecutionContext } from "./DOMExecutionContext";
import { TouchGestureRecognizer } from "./TouchGestureRecognizer";
import { TouchGestureEventArgs } from "./TouchGestureEventArgs";
import { Rect } from "./Rect";
import { TouchGestureState } from "./TouchGestureState";
import { ModifierKeys } from "./ModifierKeys";

/**
 * @hidden 
 */
export class CanvasGestureDOMEventProxy extends BaseDOMEventProxy {
	static $t: Type = markType(CanvasGestureDOMEventProxy, 'CanvasGestureDOMEventProxy', (<any>BaseDOMEventProxy).$type);
	private static _proxyCount: number = 0;
	private _proxyID: number = 0;
	private _eventNS: string = "";
	private _gestureRecognizer: TouchGestureRecognizer = null;
	clone(): EventProxy {
		let ret = new CanvasGestureDOMEventProxy(this.eventSource, this.renderer, this.usePixelScroll);
		ret.deferredTouchStartMode = this.deferredTouchStartMode;
		ret.shouldInteractForDirection = this.shouldInteractForDirection;
		return ret;
	}
	private _mGesture: MSGesture = null;
	get mGesture(): MSGesture {
		return this._mGesture;
	}
	set mGesture(value: MSGesture) {
		this._mGesture = value;
	}
	constructor(DOMEventSource: DomWrapper, renderer: DomRenderer, usePixelScroll: boolean) {
		super();
		this.usePixelScroll = usePixelScroll;
		this.renderer = renderer;
		this._gestureRecognizer = new TouchGestureRecognizer(new DOMExecutionContext(renderer));
		let $t = this._gestureRecognizer;
		$t.holdEnding = delegateCombine($t.holdEnding, runOn(this, this._gestureRecognizer_HoldEnding));
		let $t1 = this._gestureRecognizer;
		$t1.holdStarting = delegateCombine($t1.holdStarting, runOn(this, this._gestureRecognizer_HoldStarting));
		let $t2 = this._gestureRecognizer;
		$t2.zoomStarting = delegateCombine($t2.zoomStarting, runOn(this, this._gestureRecognizer_ZoomStarting));
		let $t3 = this._gestureRecognizer;
		$t3.zoomEnding = delegateCombine($t3.zoomEnding, runOn(this, this._gestureRecognizer_ZoomEnding));
		let $t4 = this._gestureRecognizer;
		$t4.panStarting = delegateCombine($t4.panStarting, runOn(this, this._gestureRecognizer_PanStarting));
		let $t5 = this._gestureRecognizer;
		$t5.panEnding = delegateCombine($t5.panEnding, runOn(this, this._gestureRecognizer_PanEnding));
		let $t6 = this._gestureRecognizer;
		$t6.manipulationStarting = delegateCombine($t6.manipulationStarting, runOn(this, this._gestureRecognizer_ManipulationStarting));
		let $t7 = this._gestureRecognizer;
		$t7.manipulationChanging = delegateCombine($t7.manipulationChanging, runOn(this, this._gestureRecognizer_ManipulationChanging));
		let $t8 = this._gestureRecognizer;
		$t8.manipulationEnding = delegateCombine($t8.manipulationEnding, runOn(this, this._gestureRecognizer_ManipulationEnding));
		let $t9 = this._gestureRecognizer;
		$t9.doubleTapped = delegateCombine($t9.doubleTapped, runOn(this, this._gestureRecognizer_DoubleTapped));
		let $t10 = this._gestureRecognizer;
		$t10.flingStarting = delegateCombine($t10.flingStarting, runOn(this, this._gestureRecognizer_FlingStarting));
		this.shouldInteractForDirection = (p: Point) => true;
		this.deferredTouchStartMode = true;
		CanvasGestureDOMEventProxy._proxyCount++;
		this._proxyID = CanvasGestureDOMEventProxy._proxyCount;
		this._eventNS = ".DOMProxy" + this._proxyID.toString();
		this.currentModifiers = ModifierKeys.None;
		this.eventSource = DOMEventSource;
		BaseDOMEventProxy.mSPointerEnabled = false;
		try {
			BaseDOMEventProxy.mSPointerEnabled = <boolean>(window.navigator.msPointerEnabled && MSGesture !== undefined);
		}
		catch (e) {
		}
		BaseDOMEventProxy.pointerEnabled = false;
		try {
			BaseDOMEventProxy.pointerEnabled = <boolean>((<any>window).PointerEvent || window.navigator.pointerEnabled);
		}
		catch (e1) {
		}
		if (BaseDOMEventProxy.usePointerEvents) {
			this.deferredTouchStartMode = false;
		}
		BaseDOMEventProxy.tridentVersion = this.getTridentVersion();
		BaseDOMEventProxy.edgeVersion = this.getEdgeVersion();
		this.bindToSource(this.eventSource, "");
		this.shouldInteract = (p: Point) => true;
	}
	private _gestureRecognizer_FlingStarting(sender: any, args: TouchGestureEventArgs): boolean {
		return this.raiseOnFlingStarted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, args.velocityX, args.velocityY);
	}
	private _gestureRecognizer_DoubleTapped(sender: any, args: TouchGestureEventArgs): void {
		this.raiseOnDoubleTap(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY });
	}
	protected get_supportsNonIsometricZoom(): boolean {
		return true;
	}
	private _gestureRecognizer_ManipulationEnding(sender: any, args: TouchGestureEventArgs): void {
		if (this._gestureRecognizer.currentState == TouchGestureState.None) {
			this.raiseOnGestureCompleted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, args.scaleDeltaX);
			this.endMouseSuppress();
		}
	}
	private _gestureRecognizer_ManipulationChanging(sender: any, args: TouchGestureEventArgs): void {
		if (this._gestureRecognizer.currentState == TouchGestureState.Zoom) {
			this.raiseOnPinchDelta(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, args.scaleDeltaX);
			this.raiseOnZoomDelta(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, args.scaleDeltaX, args.scaleDeltaY, args.isoScaleDelta);
		}
		if (this._gestureRecognizer.currentState == TouchGestureState.Pan || this._gestureRecognizer.currentState == TouchGestureState.Flinging) {
			this.raiseOnContactMoved(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, true);
			this.raiseOnDragDelta(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY });
		}
	}
	private _gestureRecognizer_ManipulationStarting(sender: any, args: TouchGestureEventArgs): void {
	}
	private _gestureRecognizer_PanEnding(sender: any, args: TouchGestureEventArgs): void {
		this._dragCaptured = false;
		if (this._gestureRecognizer.currentState == TouchGestureState.None) {
			this.raiseOnContactCompleted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, true);
			this.raiseOnDragCompleted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY });
		}
	}
	private _gestureRecognizer_PanStarting(sender: any, args: TouchGestureEventArgs): void {
		this.raiseOnDragStarted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY });
	}
	private _gestureRecognizer_ZoomEnding(sender: any, args: TouchGestureEventArgs): void {
		this.raiseOnZoomCompleted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, args.scaleDeltaX, args.scaleDeltaY, args.isoScaleDelta);
	}
	private _gestureRecognizer_ZoomStarting(sender: any, args: TouchGestureEventArgs): void {
		this.raiseOnPinchStarted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, 1);
		this.raiseOnZoomStarted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, 1, 1, 1);
	}
	private _gestureRecognizer_HoldStarting(sender: any, args: TouchGestureEventArgs): void {
		this._dragCaptured = true;
		this.raiseOnHold(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY });
	}
	private _gestureRecognizer_HoldEnding(sender: any, args: TouchGestureEventArgs): void {
		if (this._gestureRecognizer.currentState == TouchGestureState.None) {
			this.raiseOnContactCompleted(<Point>{ $type: Point_$type, x: args.centroidX, y: args.centroidY }, true);
		}
	}
	static isPointerEnabled(): boolean {
		BaseDOMEventProxy.mSPointerEnabled = false;
		try {
			BaseDOMEventProxy.mSPointerEnabled = <boolean>(window.navigator.msPointerEnabled && MSGesture !== undefined);
		}
		catch (e) {
		}
		BaseDOMEventProxy.pointerEnabled = false;
		try {
			BaseDOMEventProxy.pointerEnabled = <boolean>((<any>window).PointerEvent || window.navigator.pointerEnabled);
		}
		catch (e1) {
		}
		return BaseDOMEventProxy.usePointerEvents;
	}
	private _unbinder: Dictionary$2<string, List$1<() => void>> = new Dictionary$2<string, List$1<() => void>>(String_$type, (<any>List$1).$type.specialize(Delegate_$type), 0);
	bindToSourceOverride(objSource: any, sourceID: string, toUnbind: List$1<() => void>): void {
	}
	bindToSource(objSource: any, sourceID: string): void {
		let source = <DomWrapper><any>objSource;
		if (!this.renderer.supportsDOMEvents()) {
			return;
		}
		let ns = this._eventNS + sourceID;
		let toUnbind: List$1<() => void> = new List$1<() => void>(Delegate_$type, 0);
		this._unbinder.addItem(ns, toUnbind);
		this.bindToSourceOverride(objSource, sourceID, toUnbind);
		if (!BaseDOMEventProxy.usePointerEvents) {
			toUnbind.add(source.listen("mousemove", runOn(this, this.canvasMouseMove)));
			toUnbind.add(source.listen("mouseleave", runOn(this, this.canvasMouseLeave)));
			toUnbind.add(source.listen("mousedown", runOn(this, this.canvasMouseDown)));
			toUnbind.add(source.listen("mouseup", runOn(this, this.canvasMouseUp)));
			toUnbind.add(this.renderer.globalListen("window", "mouseup", runOn(this, this.windowMouseUp)));
		}
		toUnbind.add(source.listen("keydown", runOn(this, this.canvasKeyDown)));
		toUnbind.add(source.listen("keyup", runOn(this, this.canvasKeyUp)));
		if (BaseDOMEventProxy.usePointerEvents) {
			let source_ = this.eventSource.getNativeElement();
			BaseDOMEventProxy.grabTouches(source_);
			let container = this.eventSource.getNativeElement();
			if (BaseDOMEventProxy.pointerEnabled) {
				toUnbind.add(source.listen("pointerdown", runOn(this, this.canvasMSPointerDown)));
				toUnbind.add(source.listen("pointerup", runOn(this, this.canvasMSPointerUp)));
				toUnbind.add(source.listen("pointercancel", runOn(this, this.canvasMSPointerCancel)));
				toUnbind.add(source.listen("pointermove", runOn(this, this.canvasMSPointerMove)));
				toUnbind.add(source.listen("pointerleave", runOn(this, this.canvasMSPointerOut)));
				toUnbind.add(source.listen("lostpointercapture", runOn(this, this.canvasMSLostPointerCapture)));
			} else {
				toUnbind.add(source.listen("MSPointerDown", runOn(this, this.canvasMSPointerDown)));
				toUnbind.add(source.listen("MSPointerUp", runOn(this, this.canvasMSPointerUp)));
				toUnbind.add(source.listen("MSPointerCancel", runOn(this, this.canvasMSPointerCancel)));
				toUnbind.add(source.listen("MSPointerMove", runOn(this, this.canvasMSPointerMove)));
				toUnbind.add(source.listen("MSPointerLeave", runOn(this, this.canvasMSPointerOut)));
				toUnbind.add(source.listen("MSLostPointerCapture", runOn(this, this.canvasMSLostPointerCapture)));
			}
		} else {
			toUnbind.add(source.listen("touchstart", runOn(this, this.canvasTouchStart)));
			toUnbind.add(source.listen("touchmove", runOn(this, this.canvasTouchMove)));
			toUnbind.add(source.listen("touchend", runOn(this, this.canvasTouchEnd)));
		}
		if (this.usePixelScroll) {
			toUnbind.add(source.listen("wheel", runOn(this, this.canvasMouseWheel)));
		} else {
			toUnbind.add(source.listen("DOMMouseScroll", runOn(this, this.canvasMouseScroll)));
			toUnbind.add(source.listen("mousewheel", runOn(this, this.canvasMouseScroll)));
		}
	}
	private _touchContainerStart: Point = null;
	private _dragCaptured: boolean = false;
	private canvasMSPointerUp(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		let index = this._pointerIds.indexOf(<number>(e_.originalEvent.pointerId));
		if (index >= 0) {
			this._pointerIds.removeAt(index);
			this._pointerLocations.removeAt(index);
			this.numTouches = this._pointerIds.count;
		}
		if (isFinger) {
			this.canvasTouchEnd(e_);
		} else {
			this.canvasMouseUp(e_);
		}
	}
	private canvasMSLostPointerCapture(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
	}
	private canvasMSPointerCancel(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		let index = this._pointerIds.indexOf(<number>(e_.originalEvent.pointerId));
		if (index >= 0) {
			this._pointerIds.removeAt(index);
			this._pointerLocations.removeAt(index);
			this.numTouches = this._pointerIds.count;
		}
	}
	private _pointerIds: List$1<number> = new List$1<number>(Number_$type, 0);
	private _pointerLocations: List$1<Point> = new List$1<Point>(Point_$type, 0);
	private _deferCapture: boolean = false;
	get deferCapture(): boolean {
		return this._deferCapture;
	}
	set deferCapture(value: boolean) {
		this._deferCapture = value;
	}
	private canvasMSPointerDown(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		BaseDOMEventProxy.fixEvent(e_);
		this._pointerIds.add(<number>(e_.originalEvent.pointerId));
		this._pointerLocations.add(<Point>{ $type: Point_$type, x: e_.pageX, y: e_.pageY });
		this.numTouches = this._pointerIds.count;
		if (isFinger) {
			this.updateTouchPosition(e_);
		} else {
			this.updateMousePosition(e_);
		}
		this.updateModifiers(e_);
		if (!this.deferCapture && this.isInputAccepted(this.mousePoint, isFinger, false)) {
			let eventSource_ = this.eventSource.getNativeElement();
			if (BaseDOMEventProxy.pointerEnabled) {
				eventSource_.setPointerCapture(e_.originalEvent.pointerId);
			} else {
				eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
			}
		}
		if (isFinger) {
			this.canvasTouchStart(e_);
		} else {
			this.canvasMouseDown(e_);
		}
	}
	private canvasMSPointerMove(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		BaseDOMEventProxy.fixEvent(e_);
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		let index = this._pointerIds.indexOf(<number>(e_.originalEvent.pointerId));
		if (index >= 0) {
			this._pointerLocations._inner[index] = <Point>{ $type: Point_$type, x: e_.pageX, y: e_.pageY };
		}
		if (this.deferCapture && this.isInputAccepted(this.mousePoint, isFinger, false)) {
			let eventSource_ = this.eventSource.getNativeElement();
			if (BaseDOMEventProxy.pointerEnabled) {
				eventSource_.setPointerCapture(e_.originalEvent.pointerId);
			} else {
				eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
			}
		}
		if (isFinger) {
			this.canvasTouchMove(e_);
		} else {
			this.canvasMouseMove(e_);
		}
	}
	private canvasMSPointerOut(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		if (isFinger) {
		} else {
			this.canvasMouseLeave(e_);
		}
	}
	private canvasTouchStart(e_: NormalizedEvent): void {
		this.mouseIsOver = true;
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		this._touchContainerStart = this.containerMousePoint;
		if (this.isInputAccepted(this.mousePoint, true, false)) {
			if (!this.deferredTouchStartMode || this.numTouches > 1) {
				if (this.touchStartDeferred) {
					this.touchStartDeferred = false;
					this.beginMouseSuppress();
				}
				this.preventDefault(e_);
			} else {
				this.touchStartDeferred = true;
				this._dragCaptured = false;
			}
			this.raiseOnMouseOver(this.mousePoint, false, true);
			this.raiseOnMouseDown(this.mousePoint);
			this.raiseOnContactStarted(this.containerMousePoint, true);
			this._gestureRecognizer.processTouches(this.getTouches(e_));
		}
	}
	private _touches: List$1<TouchPointInfo> = new List$1<TouchPointInfo>((<any>TouchPointInfo).$type, 0);
	private getTouches(e_: NormalizedEvent): List$1<TouchPointInfo> {
		let offset = BaseDOMEventProxy.getOffset(this.eventSource);
		let viewport = this.viewport;
		let viewportLeft: number = 0;
		let viewportTop: number = 0;
		if (Rect.l_op_Inequality(viewport, null)) {
			viewportLeft = viewport.left;
			viewportTop = viewport.top;
		}
		this._touches.clear();
		if (BaseDOMEventProxy.usePointerEvents) {
			let i = this._pointerIds.count;
			for (let j_ = 0; j_ < i; j_++) {
				let pointerId = this._pointerIds._inner[j_];
				let pageLocation = this._pointerLocations._inner[j_];
				let pageX = pageLocation.x;
				let pageY = pageLocation.y;
				let info: TouchPointInfo = new TouchPointInfo(1);
				info.x = (pageX - offset.left) - viewport.left;
				info.y = (pageY - offset.top) - viewport.top;
				this._touches.add(info);
			}
		} else {
			let i1 = <number>(e_.originalEvent.targetTouches.length);
			for (let j_ = 0; j_ < i1; j_++) {
				let pageX1 = <number>(e_.originalEvent.targetTouches[j_].pageX);
				let pageY1 = <number>(e_.originalEvent.targetTouches[j_].pageY);
				let info1: TouchPointInfo = new TouchPointInfo(1);
				info1.x = (pageX1 - offset.left) - viewportLeft;
				info1.y = (pageY1 - offset.top) - viewportTop;
				this._touches.add(info1);
			}
		}
		return this._touches;
	}
	private canvasTouchMove(e: NormalizedEvent): void {
		this.mouseIsOver = true;
		this.updateModifiers(e);
		this.updateTouchPosition(e);
		if (this.touchStartDeferred) {
			if ((this.isInputAccepted(this.mousePoint, true, false) && this.shouldAllowTouchDrag()) || this._dragCaptured == true || this._gestureRecognizer.currentState == TouchGestureState.Zoom) {
				this.touchStartDeferred = false;
				this.beginMouseSuppress();
			}
		}
		if ((this._dragCaptured || this._gestureRecognizer.currentState == TouchGestureState.Zoom || this.isInputAccepted(this.mousePoint, true, false)) && !this.touchStartDeferred) {
			this._dragCaptured = true;
			this.preventDefault(e);
			this._gestureRecognizer.processTouches(this.getTouches(e));
		}
	}
	private shouldAllowTouchDrag(): boolean {
		let direction = <Point>{ $type: Point_$type, x: this._touchContainerStart.x - this.containerMousePoint.x, y: this._touchContainerStart.y - this.containerMousePoint.y };
		if (Math.abs(direction.x) > Math.abs(direction.y)) {
			direction.y = 0;
		}
		if (Math.abs(direction.y) > Math.abs(direction.x)) {
			direction.x = 0;
		}
		return this.shouldInteractForDirection(direction);
	}
	private canvasTouchEnd(e: NormalizedEvent): void {
		this.mouseIsOver = false;
		this.updateModifiers(e);
		this.updateTouchPosition(e);
		if (this.touchStartDeferred) {
			this.touchStartDeferred = false;
			this.beginMouseSuppress();
		}
		let originalGestureState = this._gestureRecognizer.currentState;
		let shouldPreventDefault: boolean = this.isInputAccepted(this.mousePoint, true, false) || originalGestureState != TouchGestureState.None;
		if (this._gestureRecognizer.currentState != TouchGestureState.Zoom && this._gestureRecognizer.currentState != TouchGestureState.Flinging) {
			this.raiseOnMouseOver(this.mousePoint, false, true);
			this.raiseOnMouseUp(this.mousePoint);
		}
		let wasZooming = this._gestureRecognizer.currentState == TouchGestureState.Zoom;
		if (wasZooming) {
			shouldPreventDefault = true;
			this.raiseOnContactCompleted(<Point>{ $type: Point_$type, x: this._gestureRecognizer.centroidX, y: this._gestureRecognizer.centroidY }, true);
		}
		this._gestureRecognizer.processTouches(this.getTouches(e));
		if (this._gestureRecognizer.currentState == TouchGestureState.None) {
			this.endMouseSuppress();
		}
		if (!wasZooming && this._gestureRecognizer.currentState == TouchGestureState.None) {
			this.raiseOnContactCompleted(<Point>{ $type: Point_$type, x: this._gestureRecognizer.centroidX, y: this._gestureRecognizer.centroidY }, true);
		}
		if (this._gestureRecognizer.currentState != TouchGestureState.None) {
			shouldPreventDefault = true;
		}
		if (shouldPreventDefault) {
			this.preventDefault(e);
		}
	}
	private doUnbind(ns: string): void {
		if (this._unbinder.containsKey(ns)) {
			let toUnbind = this._unbinder.item(ns);
			this._unbinder.removeItem(ns);
			for (let i = 0; i < toUnbind.count; i++) {
				toUnbind._inner[i]();
			}
			toUnbind.clear();
		}
	}
	unbindFromSource(objSource: any, sourceID: string): void {
		let source: DomWrapper = <DomWrapper><any>objSource;
		let ns = this._eventNS + sourceID;
		this.doUnbind(ns);
	}
	destroy(): void {
		if (this.eventSource == null) {
			return;
		}
		this.doUnbind(this._eventNS);
		this.eventSource = null;
	}
	static register(): void {
		TypeRegistrar.register("CanvasGestureDOMEventProxy", (<any>CanvasGestureDOMEventProxy).$type);
	}
}


