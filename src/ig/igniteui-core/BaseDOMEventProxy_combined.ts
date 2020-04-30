/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventProxy } from "./EventProxy";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent, DomWrapperPosition } from "./dom";
import { Point, Base, Point_$type, runOn, Type, markType, PointUtil, BaseError, String_$type, Delegate_$type } from "./type";
import { Rect } from "./Rect";
import { MouseEventArgs } from "./MouseEventArgs";
import { Key } from "./Key";
import { ModifierKeys } from "./ModifierKeys";
import { Dictionary$2 } from "./Dictionary$2";
import { List$1 } from "./List$1";

/**
 * @hidden 
 */
export abstract class BaseDOMEventProxy extends EventProxy {
	static $t: Type = markType(BaseDOMEventProxy, 'BaseDOMEventProxy', (<any>EventProxy).$type);
	private _eventSource: DomWrapper = null;
	protected get eventSource(): DomWrapper {
		return this._eventSource;
	}
	protected set eventSource(value: DomWrapper) {
		this._eventSource = value;
	}
	clone(): EventProxy {
		let ret = new DOMEventProxy(this.eventSource, this.renderer, this.usePixelScroll);
		ret.deferredTouchStartMode = this.deferredTouchStartMode;
		ret.shouldInteractForDirection = this.shouldInteractForDirection;
		return ret;
	}
	static get usePointerEvents(): boolean {
		return (BaseDOMEventProxy.mSPointerEnabled || BaseDOMEventProxy.pointerEnabled);
	}
	private _usePixelScroll: boolean = false;
	protected get usePixelScroll(): boolean {
		return this._usePixelScroll;
	}
	protected set usePixelScroll(value: boolean) {
		this._usePixelScroll = value;
	}
	getOffsetRelative(source: DomWrapper): Rect {
		return DOMEventProxy.getOffset(source);
	}
	isFinger(e_: NormalizedEvent): boolean {
		let pointerEvent_ = e_.originalEvent;
		let isFinger: boolean = false;
		if (BaseDOMEventProxy.pointerEnabled) {
			isFinger = <boolean>(pointerEvent_.pointerType == 'touch');
		} else {
			isFinger = <boolean>(pointerEvent_.pointerType == (<any>pointerEvent_).MSPOINTER_TYPE_TOUCH);
		}
		return isFinger;
	}
	private _renderer: DomRenderer = null;
	protected get renderer(): DomRenderer {
		return this._renderer;
	}
	protected set renderer(value: DomRenderer) {
		this._renderer = value;
	}
	protected preventDefault(e: NormalizedEvent): void {
		if (!this.isInteractionDisabled) {
			if (this.isCancelable(e)) {
				if (this.shouldPreventDefault == null || this.shouldPreventDefault(e)) {
					e.preventDefault();
				}
			}
		}
	}
	private isCancelable(e_: NormalizedEvent): boolean {
		return <boolean>(e_.originalEvent.cancelable || e_.originalEvent.cancelable == undefined);
	}
	static mSPointerEnabled: boolean = false;
	static pointerEnabled: boolean = false;
	private _touchCaptureEnabled: boolean = false;
	protected enableTouchCapture(): void {
		let source_ = this.eventSource.getNativeElement();
		BaseDOMEventProxy.grabTouches(source_);
	}
	protected static grabTouches(source_: any): void {
		if (BaseDOMEventProxy.pointerEnabled) {
			source_.style.touchAction = 'none';
		} else {
			source_.style.msTouchAction = 'none';
		}
		source_.style.msUserSelect = 'none';
		source_.style.webkitTouchCallout = 'none';
		source_.style.webkitUserSelect = 'none';
		source_.style.khtmlUserSelect = 'none';
		source_.style.mozUserSelect = 'none';
		source_.style.userSelect = 'none';
	}
	protected static deferTouches(source_: any): void {
		if (BaseDOMEventProxy.pointerEnabled) {
			source_.style.touchAction = 'auto';
		} else {
			source_.style.msTouchAction = 'auto';
		}
		source_.style.msUserSelect = 'auto';
		source_.style.webkitTouchCallout = 'none';
		source_.style.webkitUserSelect = 'auto';
		source_.style.khtmlUserSelect = 'auto';
		source_.style.mozUserSelect = 'auto';
		source_.style.userSelect = 'auto';
	}
	protected disableTouchCapture(): void {
		let source_ = this.eventSource.getNativeElement();
		BaseDOMEventProxy.deferTouches(source_);
	}
	protected onIsInteractionDisabledChanged(): void {
		super.onIsInteractionDisabledChanged();
		if (!this.isInteractionDisabled) {
			this.enableTouchCapture();
		} else {
			this.disableTouchCapture();
		}
	}
	static tridentVersion: number = 0;
	static edgeVersion: number = 0;
	protected getTridentVersion(): number {
		let ver_: number = <number>-1;
		let matchIE_ = /Trident\/([\d.]+)/;
		if (<boolean>(matchIE_.exec(navigator.userAgent) != null)) {
			ver_ = <number>(parseFloat(RegExp.$1));
		}
		return ver_;
	}
	protected getEdgeVersion(): number {
		let ver_: number = <number>-1;
		let matchIE_ = /Edge\/([\d.]+)/;
		if (<boolean>(matchIE_.exec(navigator.userAgent) != null)) {
			ver_ = <number>(parseFloat(RegExp.$1));
		}
		return ver_;
	}
	static fixEvent(e_: NormalizedEvent): void {
		let ieHack = BaseDOMEventProxy.tridentVersion >= 6;
		let oe_ = e_.originalEvent;
		if ((<boolean>((typeof e_.pageX == 'undefined')) || ieHack) && oe_.clientX != null) {
			let od_: any;
			if (<boolean>(e_.target !== undefined)) {
				od_ = e_.target.ownerDocument;
			} else {
				od_ = (<any>e_.originalEvent.target).ownerDocument;
			}
			let ed_ = od_ ? od_ : document;
			let doc_ = ed_.documentElement;
			let body_ = ed_.body;
			let clientX_ = oe_.clientX;
			let clientY_ = oe_.clientY;
			let scrollLeft_ = doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0;
			let scrollTop_ = doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0;
			let clientLeft_ = doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0;
			let clientTop_ = doc_ && doc_.clientTop || body_ && body_.clientTop || 0;
			e_.pageX = clientX_ + (scrollLeft_ - clientLeft_);
			e_.pageY = clientY_ + (scrollTop_ - clientTop_);
		}
		if (<boolean>(!e_.pageX)) {
			e_.pageX = e_.originalEvent.pageX;
		}
		if (<boolean>(!e_.pageY)) {
			e_.pageY = e_.originalEvent.pageY;
		}
		if (<boolean>((typeof e_.button == 'undefined')) && <boolean>((typeof oe_.button != 'undefined'))) {
			e_.button = oe_.button;
		}
	}
	static getOffset(source: DomWrapper): Rect {
		let ieHack = BaseDOMEventProxy.tridentVersion >= 6;
		let source_ = source.getNativeElement();
		let d_ = source_.ownerDocument;
		let doc_ = d_ ? d_.documentElement : null;
		let z_ = doc_ ? doc_.msContentZoomFactor : null;
		let body_ = doc_.body;
		if (<boolean>(z_ && z_ > 1) || ieHack) {
			let rect_ = source_.getBoundingClientRect();
			let x_ = <number>(rect_.left);
			let y_ = <number>(rect_.top);
			let scrollLeft_ = <number>(doc_ && doc_.scrollLeft || body_ && body_.scrollLeft || 0);
			let scrollTop_ = <number>(doc_ && doc_.scrollTop || body_ && body_.scrollTop || 0);
			let clientLeft_ = <number>(doc_ && doc_.clientLeft || body_ && body_.clientLeft || 0);
			let clientTop_ = <number>(doc_ && doc_.clientTop || body_ && body_.clientTop || 0);
			let left = x_ + scrollLeft_ - clientLeft_;
			let top = y_ + scrollTop_ - clientTop_;
			return new Rect(0, left, top, 0, 0);
		} else {
			let offset = source.getOffset();
			return new Rect(0, offset.left, offset.top, 0, 0);
		}
	}
	private _mouseX: number = 0;
	private _mouseY: number = 0;
	private _containerMouseX: number = 0;
	private _containerMouseY: number = 0;
	private _numTouches: number = 0;
	private _mousePoint: Point = null;
	protected get mousePoint(): Point {
		return this._mousePoint;
	}
	protected set mousePoint(value: Point) {
		this._mousePoint = value;
	}
	private _containerMousePoint: Point = null;
	protected get containerMousePoint(): Point {
		return this._containerMousePoint;
	}
	protected set containerMousePoint(value: Point) {
		this._containerMousePoint = value;
	}
	protected get numTouches(): number {
		return this._numTouches;
	}
	protected set numTouches(value: number) {
		this._numTouches = value;
	}
	protected updateMousePosition(e: NormalizedEvent): void {
		this.originalEvent = e;
		BaseDOMEventProxy.fixEvent(e);
		let offset = BaseDOMEventProxy.getOffset(this.eventSource);
		let viewportLeft: number = 0;
		let viewportTop: number = 0;
		if (Rect.l_op_Inequality(this.viewport, null)) {
			viewportLeft = this.viewport.left;
			viewportTop = this.viewport.top;
		}
		this._mouseX = e.pageX - offset.left;
		this._mouseY = e.pageY - offset.top;
		this._containerMouseX = this._mouseX - viewportLeft;
		this._containerMouseY = this._mouseY - viewportTop;
		this.mousePoint = <Point>{ $type: Point_$type, x: this._mouseX, y: this._mouseY };
		this.containerMousePoint = <Point>{ $type: Point_$type, x: this._containerMouseX, y: this._containerMouseY };
	}
	protected updateTouchPosition(e_: NormalizedEvent): void {
		this.originalEvent = e_;
		BaseDOMEventProxy.fixEvent(e_);
		if (BaseDOMEventProxy.usePointerEvents) {
			let pageX = e_.pageX;
			let pageY = e_.pageY;
			let offset = BaseDOMEventProxy.getOffset(this.eventSource);
			this._mouseX = pageX - offset.left;
			this._mouseY = pageY - offset.top;
		} else {
			this._numTouches = 0;
			if (!e_.originalEvent.targetTouches || e_.originalEvent.targetTouches.length < 1) { return; };
			this._numTouches = <number>(e_.originalEvent.targetTouches.length);
			let pageX1 = <number>(e_.originalEvent.targetTouches[0].pageX);
			let pageY1 = <number>(e_.originalEvent.targetTouches[0].pageY);
			let offset1 = BaseDOMEventProxy.getOffset(this.eventSource);
			this._mouseX = pageX1 - offset1.left;
			this._mouseY = pageY1 - offset1.top;
		}
		let viewportLeft: number = 0;
		let viewportTop: number = 0;
		if (Rect.l_op_Inequality(this.viewport, null)) {
			viewportLeft = this.viewport.left;
			viewportTop = this.viewport.top;
		}
		this._containerMouseX = this._mouseX - viewportLeft;
		this._containerMouseY = this._mouseY - viewportTop;
		this.mousePoint = <Point>{ $type: Point_$type, x: this._mouseX, y: this._mouseY };
		this.containerMousePoint = <Point>{ $type: Point_$type, x: this._containerMouseX, y: this._containerMouseY };
	}
	protected canvasMouseWheel(e_: NormalizedEvent): void {
		this.updateModifiers(e_);
		if (this.isInputAccepted(this.mousePoint, false, true)) {
			let deltaY_: number = 0;
			let ev_: any = e_;
			deltaY_ = <number>(ev_.originalEvent ? ev_.originalEvent.deltaY : ev_.deltaY);
			let deltaX_: number = 0;
			deltaX_ = <number>(ev_.originalEvent ? ev_.originalEvent.deltaX : ev_.deltaX);
			let isLine: boolean = <boolean>(ev_.originalEvent ? (ev_.originalEvent.deltaMode == 1) : (ev_.deltaMode == 1));
			if (isLine) {
				deltaY_ = deltaY_ * 40;
				deltaX_ = deltaX_ * 40;
			}
			let handled: boolean = this.raiseOnMouseWheel(this.containerMousePoint, deltaY_);
			let horizontalHandled: boolean = this.raiseOnMouseWheelHorizontal(this.containerMousePoint, deltaX_);
			if (handled || horizontalHandled) {
				this.preventDefault(e_);
			}
		}
	}
	protected canvasMouseScroll(e_: NormalizedEvent): void {
		this.updateModifiers(e_);
		this.updateMousePosition(e_);
		if (this.isInputAccepted(this.mousePoint, false, true)) {
			let ev_: any = e_;
			let delta_: number = 0;
			if (ev_.wheelDelta) { delta_ = ev_.wheelDelta/120; };
			if (ev_.originalEvent && ev_.originalEvent.wheelDelta) { delta_ = ev_.originalEvent.wheelDelta/120; };
			if (ev_.detail) { delta_ = -ev_.detail/3; };
			if (ev_.originalEvent && ev_.originalEvent.detail) { delta_ = -ev_.originalEvent.detail/3; };
			delta_ = delta_ / 10;
			let handled: boolean = this.raiseOnMouseWheel(this.containerMousePoint, delta_);
			if (handled) {
				this.preventDefault(e_);
			}
		}
	}
	private _suppressMouseEvents: boolean = false;
	protected static readonly nullTimer: number = -1;
	private _suppressId: number = BaseDOMEventProxy.nullTimer;
	protected endMouseSuppress(): void {
		if (this._suppressMouseEvents) {
			if (this._suppressId == BaseDOMEventProxy.nullTimer) {
				this._suppressId = this.renderer.setTimeout(runOn(this, this.doEndSuppress), 500);
			} else {
				window.clearTimeout(this._suppressId);
				this._suppressId = BaseDOMEventProxy.nullTimer;
				this._suppressId = this.renderer.setTimeout(runOn(this, this.doEndSuppress), 500);
			}
		}
	}
	protected beginMouseSuppress(): void {
		this._suppressMouseEvents = true;
		if (this._suppressId != BaseDOMEventProxy.nullTimer) {
			window.clearTimeout(this._suppressId);
			this._suppressId = BaseDOMEventProxy.nullTimer;
		}
	}
	protected doEndSuppress(): void {
		this._suppressMouseEvents = false;
	}
	private _mouseIsOver: boolean = false;
	protected get mouseIsOver(): boolean {
		return this._mouseIsOver;
	}
	protected set mouseIsOver(value: boolean) {
		this._mouseIsOver = value;
	}
	private _touchStartDeferred: boolean = false;
	protected get touchStartDeferred(): boolean {
		return this._touchStartDeferred;
	}
	protected set touchStartDeferred(value: boolean) {
		this._touchStartDeferred = value;
	}
	protected canvasMouseLeave(e: NormalizedEvent): void {
		if (this._touchStartDeferred || this._suppressMouseEvents) {
			return;
		}
		this.updateMousePosition(e);
		if (this.mouseIsOver) {
			this.mouseIsOver = false;
			this.raiseOnMouseLeave(this.containerMousePoint);
		}
	}
	protected canvasMouseMove(e: NormalizedEvent): void {
		if (this._touchStartDeferred || this._suppressMouseEvents) {
			return;
		}
		this.updateMousePosition(e);
		this.updateModifiers(e);
		let me: MouseEventArgs = new MouseEventArgs();
		me.position = this.mousePoint;
		if (this.isInputAccepted(this.mousePoint, false, false)) {
			if (!this.mouseIsOver) {
				this.mouseIsOver = true;
				this.raiseOnMouseEnter(this.mousePoint);
			}
			this.raiseOnMouseOver(this.mousePoint, true, false);
			this.raiseOnContactMoved(this.containerMousePoint, false);
		} else if (this.mouseIsOver) {
			this.canvasMouseLeave(e);
		}
	}
	protected setFocus(e: NormalizedEvent): void {
		this.eventSource.focus();
	}
	private _mouseCaptured: boolean = false;
	protected canvasMouseDown(e: NormalizedEvent): void {
		if (this._touchStartDeferred || this._suppressMouseEvents) {
			return;
		}
		this.setFocus(e);
		this.updateMousePosition(e);
		this.updateModifiers(e);
		if (this.isInputAccepted(this.mousePoint, false, false)) {
			this._mouseCaptured = true;
			this.raiseOnMouseDown(this.mousePoint);
			this.raiseOnContactStarted(this.containerMousePoint, false);
			this.preventDefault(e);
		}
	}
	protected windowMouseUp(e: NormalizedEvent): void {
		if (this._touchStartDeferred || this._suppressMouseEvents) {
			return;
		}
		if (this._mouseCaptured) {
			this.canvasMouseUp(e);
		}
	}
	protected canvasMouseUp(e: NormalizedEvent): void {
		if (this._touchStartDeferred || this._suppressMouseEvents) {
			return;
		}
		this.updateModifiers(e);
		if (PointUtil.equals(this.mousePoint, null) || PointUtil.equals(this.containerMousePoint, null)) {
			this.updateMousePosition(e);
		}
		let shouldPrevent = this.isInputAccepted(this.mousePoint, false, false) || this._mouseCaptured || this.mouseIsOver;
		this._mouseCaptured = false;
		this.raiseOnMouseUp(this.mousePoint);
		this.raiseOnContactCompleted(this.containerMousePoint, false);
		if (shouldPrevent) {
			this.preventDefault(e);
		}
	}
	protected canvasKeyDown(e: NormalizedEvent): void {
		this.canvasKeyEvent(e, true);
	}
	protected canvasKeyUp(e: NormalizedEvent): void {
		this.canvasKeyEvent(e, false);
	}
	protected getKeyOverride(e: NormalizedEvent): Key {
		return BaseDOMEventProxy.getKey(e);
	}
	static getKey(e: NormalizedEvent): Key {
		let downKey: Key;
		switch (e.which) {
			case 33:
			downKey = Key.PageUp;
			break;

			case 34:
			downKey = Key.PageDown;
			break;

			case 36:
			downKey = Key.Home;
			break;

			case 37:
			downKey = Key.Left;
			break;

			case 38:
			downKey = Key.Up;
			break;

			case 39:
			downKey = Key.Right;
			break;

			case 40:
			downKey = Key.Down;
			break;

			case 9:
			downKey = Key.Tab;
			break;

			case 32:
			downKey = Key.Space;
			break;

			case 13:
			downKey = Key.Enter;
			break;

			case 27:
			downKey = Key.Escape;
			break;

			case 16:
			downKey = Key.Shift;
			break;

			case 17:
			downKey = Key.Ctrl;
			break;

			case 18:
			downKey = Key.Alt;
			break;

			case 8:
			downKey = Key.Back;
			break;

			case 35:
			downKey = Key.End;
			break;

			case 45:
			downKey = Key.Insert;
			break;

			case 46:
			downKey = Key.del;
			break;

			case 106:
			downKey = Key.Multiply;
			break;

			case 107:
			downKey = Key.Add;
			break;

			case 109:
			downKey = Key.Subtract;
			break;

			case 110:
			downKey = Key.Decimal;
			break;

			case 111:
			downKey = Key.Divide;
			break;

			case 220:
			downKey = Key.OemPipe;
			break;

			case 192:
			downKey = Key.OemTilde;
			break;

			case 191:
			downKey = Key.OemQuestion;
			break;

			case 186:
			downKey = Key.OemSemicolon;
			break;

			case 189:
			downKey = Key.OemMinus;
			break;

			case 187:
			downKey = Key.OemPlus;
			break;

			default:
			if (112 <= e.which && e.which <= 123) {
				downKey = <Key>(Key.F1 + e.which - 112);
			} else if (65 <= e.which && e.which <= 90) {
				downKey = <Key>(Key.A + e.which - 65);
			} else if (48 <= e.which && e.which <= 57) {
				downKey = <Key>(Key.D0 + e.which - 48);
			} else if (96 <= e.which && e.which <= 105) {
				downKey = <Key>(Key.NumPad0 + e.which - 96);
			} else {
				downKey = Key.None;
			}
			break;

		}

		return downKey;
	}
	protected canvasKeyEvent(e: NormalizedEvent, isDown: boolean): void {
		let downKey: Key = this.getKeyOverride(e);
		let send: boolean = downKey != Key.None;
		this.updateModifiers(e);
		if (send) {
			let handled: boolean = false;
			if (isDown) {
				handled = this.raiseOnKeyDown(downKey);
			} else {
				handled = this.raiseOnKeyUp(downKey);
			}
			if (handled) {
				this.preventDefault(e);
			}
		}
	}
	protected updateModifiers(e: NormalizedEvent): void {
		this.originalEvent = e;
		this.currentModifiers = ModifierKeys.None;
		if (e.shiftKey) {
			this.currentModifiers = this.currentModifiers | ModifierKeys.Shift;
		}
		if (e.altKey) {
			this.currentModifiers = this.currentModifiers | ModifierKeys.Alt;
		}
		if (e.ctrlKey) {
			this.currentModifiers = this.currentModifiers | ModifierKeys.Control;
		}
		this.rightButton = e.button == 2;
	}
	getSourceOffsets(): Point {
		let offset = BaseDOMEventProxy.getOffset(this.eventSource);
		let x: number = offset.left;
		let y: number = offset.top;
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
}

/**
 * @hidden 
 */
export class DOMEventProxy extends BaseDOMEventProxy {
	static $t: Type = markType(DOMEventProxy, 'DOMEventProxy', (<any>BaseDOMEventProxy).$type);
	private static _proxyCount: number = 0;
	private _proxyID: number = 0;
	private _eventNS: string = "";
	private _pinching: boolean = false;
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
		this.shouldInteractForDirection = (p: Point) => true;
		this.deferredTouchStartMode = false;
		DOMEventProxy._proxyCount++;
		this._proxyID = DOMEventProxy._proxyCount;
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
		BaseDOMEventProxy.tridentVersion = this.getTridentVersion();
		BaseDOMEventProxy.edgeVersion = this.getEdgeVersion();
		this.bindToSource(this.eventSource, "");
		this.shouldInteract = (p: Point) => true;
	}
	private _unbinder: Dictionary$2<string, List$1<() => void>> = new Dictionary$2<string, List$1<() => void>>(String_$type, (<any>List$1).$type.specialize(Delegate_$type), 0);
	bindToSourceOverride(objSource: any, sourceID: string, toUnbind: List$1<() => void>): void {
	}
	bindToSource(objSource: any, sourceID: string): void {
		let source = <DomWrapper><any>objSource;
		let ns = this._eventNS + sourceID;
		if (!this.renderer.supportsDOMEvents()) {
			return;
		}
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
		let source_ = this.eventSource.getNativeElement();
		if (!this.isInteractionDisabled) {
			BaseDOMEventProxy.grabTouches(source_);
		}
		if (BaseDOMEventProxy.usePointerEvents) {
			let container = this.eventSource.getNativeElement();
			if (<boolean>((<any>window).MSGesture !== undefined)) {
				let gesture = <MSGesture>(new MSGesture());
				gesture.target = <HTMLElement>container;
				this.mGesture = gesture;
				toUnbind.add(source.listen("MSGestureStart", runOn(this, this.canvasGestureStart)));
				toUnbind.add(source.listen("MSGestureChange", runOn(this, this.canvasGestureChange)));
				toUnbind.add(source.listen("MSGestureEnd", runOn(this, this.canvasGestureEnd)));
			}
			if (BaseDOMEventProxy.pointerEnabled) {
				toUnbind.add(source.listen("pointerdown", runOn(this, this.canvasMSPointerDown)));
				toUnbind.add(source.listen("pointerup", runOn(this, this.canvasMSPointerUp)));
				toUnbind.add(source.listen("pointercancel", runOn(this, this.canvasMSPointerCancel)));
				toUnbind.add(source.listen("pointermove", runOn(this, this.canvasMSPointerMove)));
				toUnbind.add(source.listen("pointerout", runOn(this, this.canvasMSPointerOut)));
				toUnbind.add(source.listen("lostpointercapture", runOn(this, this.canvasMSLostPointerCapture)));
			} else {
				toUnbind.add(source.listen("MSPointerDown", runOn(this, this.canvasMSPointerDown)));
				toUnbind.add(source.listen("MSPointerUp", runOn(this, this.canvasMSPointerUp)));
				toUnbind.add(source.listen("MSPointerCancel", runOn(this, this.canvasMSPointerCancel)));
				toUnbind.add(source.listen("MSPointerMove", runOn(this, this.canvasMSPointerMove)));
				toUnbind.add(source.listen("MSPointerOut", runOn(this, this.canvasMSPointerOut)));
				toUnbind.add(source.listen("MSLostPointerCapture", runOn(this, this.canvasMSLostPointerCapture)));
			}
		} else {
			toUnbind.add(source.listen("gesturestart", runOn(this, this.canvasGestureStart)));
			toUnbind.add(source.listen("gesturechange", runOn(this, this.canvasGestureChange)));
			toUnbind.add(source.listen("gestureend", runOn(this, this.canvasGestureEnd)));
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
	private canvasMSPointerUp(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		if (isFinger) {
			this.numTouches = this.numTouches - 1;
			if (this.numTouches < 0) {
				this.numTouches = 0;
			}
		}
		if (this.numTouches < 2 && this._pinching && isFinger) {
			this._pinching = false;
			let scale = <number>(e_.originalEvent.scale);
			this.raiseOnGestureCompleted(this.containerMousePoint, scale);
		} else {
			if (isFinger) {
				this.canvasTouchEnd(e_);
			} else {
				this.canvasMouseUp(e_);
			}
		}
	}
	private canvasMSLostPointerCapture(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		if (isFinger) {
			this.numTouches--;
			if (this.numTouches < 0) {
				this.numTouches = 0;
			}
		}
		if (this.numTouches < 2 && this._pinching && isFinger) {
			this._pinching = false;
			let scale = <number>(e_.originalEvent.scale);
			this.raiseOnGestureCompleted(this.containerMousePoint, scale);
		}
	}
	private canvasMSPointerCancel(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		if (isFinger) {
			this.numTouches--;
			if (this.numTouches < 0) {
				this.numTouches = 0;
			}
		}
		if (this.numTouches < 2 && this._pinching && isFinger) {
			this._pinching = false;
			let scale = <number>(e_.originalEvent.scale);
			this.raiseOnGestureCompleted(this.containerMousePoint, scale);
		}
	}
	private canvasMSPointerDown(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		if (this.mGesture != null && isFinger) {
			this.numTouches++;
			this.mGesture.addPointer(<number>(e_.originalEvent.pointerId));
		}
		let eventSource_ = this.eventSource.getNativeElement();
		if (BaseDOMEventProxy.pointerEnabled) {
			eventSource_.setPointerCapture(e_.originalEvent.pointerId);
		} else {
			eventSource_.msSetPointerCapture(e_.originalEvent.pointerId);
		}
		if (this.numTouches > 1 && !this._pinching && isFinger) {
			this._pinching = true;
			this.updateTouchPosition(e_);
			let scale = <number>(e_.originalEvent.scale);
			this.raiseOnPinchStarted(this.containerMousePoint, scale);
		} else {
			if (isFinger) {
				this.canvasTouchStart(e_);
			} else {
				this.canvasMouseDown(e_);
			}
		}
	}
	private canvasMSPointerMove(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		if (this._pinching) {
			return;
		}
		if (isFinger) {
			this.canvasTouchMove(e_);
		} else {
			this.canvasMouseMove(e_);
		}
	}
	private canvasMSPointerOut(e_: NormalizedEvent): void {
		let isFinger: boolean = this.isFinger(e_);
		if (this._pinching) {
			return;
		}
		if (isFinger) {
		} else {
			this.canvasMouseLeave(e_);
		}
	}
	private canvasGestureStart(e_: NormalizedEvent): void {
		this.mouseIsOver = true;
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		this.dragStopHoldTimer();
		if (this.isInputAccepted(this.mousePoint, true, false)) {
			this.preventDefault(e_);
			if (BaseDOMEventProxy.usePointerEvents && this.numTouches < 2) {
				return;
			}
			let scale = <number>(e_.originalEvent.scale);
			this.raiseOnPinchStarted(this.containerMousePoint, scale);
		}
	}
	private canvasGestureChange(e_: NormalizedEvent): void {
		this.mouseIsOver = true;
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		if (this.isInputAccepted(this.mousePoint, true, false)) {
			this.preventDefault(e_);
			if (BaseDOMEventProxy.usePointerEvents && this.numTouches < 2) {
				return;
			}
			let scale = <number>(e_.originalEvent.scale);
			this.raiseOnPinchDelta(this.containerMousePoint, scale);
		}
	}
	private canvasGestureEnd(e_: NormalizedEvent): void {
		this.preventDefault(e_);
		let scale = <number>(e_.originalEvent.scale);
		this.mouseIsOver = false;
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		if (!BaseDOMEventProxy.usePointerEvents || this._pinching) {
			this.raiseOnGestureCompleted(this.containerMousePoint, scale);
		}
	}
	private _touchContainerStart: Point = null;
	private canvasTouchStart(e_: NormalizedEvent): void {
		this.mouseIsOver = true;
		this.updateModifiers(e_);
		this.updateTouchPosition(e_);
		this._touchContainerStart = this.containerMousePoint;
		if (this.isInputAccepted(this.mousePoint, true, false)) {
			if (!this.deferredTouchStartMode) {
				this.preventDefault(e_);
			} else {
				this.touchStartDeferred = true;
			}
			this.raiseOnMouseOver(this.mousePoint, false, true);
			this.raiseOnMouseDown(this.mousePoint);
			this.raiseOnContactStarted(this.containerMousePoint, true);
			this.startHoldTimer();
		}
	}
	private _holdId: number = BaseDOMEventProxy.nullTimer;
	private _tapArea: Rect = null;
	private _holdStartX: number = 0;
	private _holdStartY: number = 0;
	private _holdCancelDistance: number = 5;
	private startHoldTimer(): void {
		if (this._holdId == BaseDOMEventProxy.nullTimer) {
			this._holdStartX = this.mousePoint.x;
			this._holdStartY = this.mousePoint.y;
			this._holdId = this.renderer.setTimeout(runOn(this, this.onHoldTimer), 1500);
		}
	}
	private dragStopHoldTimer(): void {
		if (Math.abs(this._holdStartX - this.mousePoint.x) > this._holdCancelDistance || Math.abs(this._holdStartY - this.mousePoint.y) > this._holdCancelDistance) {
			this.stopHoldTimer();
		}
	}
	private stopHoldTimer(): void {
		if (this._holdId != BaseDOMEventProxy.nullTimer) {
			window.clearTimeout(this._holdId);
			this._holdId = BaseDOMEventProxy.nullTimer;
		}
	}
	onHoldTimer(): void {
		this._holdId = BaseDOMEventProxy.nullTimer;
		if (this.touchStartDeferred) {
			this.touchStartDeferred = false;
			this.beginMouseSuppress();
		}
		this.raiseOnHold(this.containerMousePoint);
	}
	private _dragging: boolean = false;
	private _dragStart: Point = null;
	private canvasTouchMove(e: NormalizedEvent): void {
		this.mouseIsOver = true;
		this.updateModifiers(e);
		this.updateTouchPosition(e);
		if (this.touchStartDeferred) {
			if (this.isInputAccepted(this.mousePoint, true, false) && this.shouldAllowTouchDrag()) {
				this.touchStartDeferred = false;
				this.beginMouseSuppress();
			}
		}
		this.dragStopHoldTimer();
		this.stopTapTimer();
		if (this.isInputAccepted(this.mousePoint, true, false) && this.numTouches == 1 && !this.touchStartDeferred) {
			this.preventDefault(e);
			if (!this._dragging) {
				this._dragging = true;
				this._dragStart = this.containerMousePoint;
				this.raiseOnDragStarted(this._dragStart);
			} else {
				this.raiseOnMouseOver(this.mousePoint, true, true);
				this.raiseOnContactMoved(this.containerMousePoint, true);
				this.raiseOnDragDelta(this.containerMousePoint);
			}
		}
	}
	private shouldAllowTouchDrag(): boolean {
		let direction = <Point>{ $type: Point_$type, x: this._touchContainerStart.x - this.containerMousePoint.x, y: this._touchContainerStart.y - this.containerMousePoint.y };
		if (Math.abs(direction.x) < 2 && Math.abs(direction.y) < 2) {
			return false;
		}
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
		this.stopHoldTimer();
		if (this.touchStartDeferred) {
			this.touchStartDeferred = false;
			this.beginMouseSuppress();
		}
		this.preventDefault(e);
		this.raiseOnMouseOver(this.mousePoint, false, true);
		this.raiseOnMouseUp(this.mousePoint);
		if (this.numTouches == 0) {
			this.raiseDoubleTap(this.mousePoint);
			this.endMouseSuppress();
		}
		if (this._dragging && this.numTouches == 0) {
			this._dragging = false;
			this._dragStart = null;
			this.raiseOnDragCompleted(this.containerMousePoint);
			this.endMouseSuppress();
		}
		this.raiseOnContactCompleted(this.containerMousePoint, true);
	}
	private raiseDoubleTap(pt: Point): void {
		if (Rect.l_op_Equality(this._tapArea, null)) {
			this._tapArea = new Rect(0, pt.x - 50, pt.y - 50, 100, 100);
			this.renderer.setTimeout(runOn(this, this.stopTapTimer), 500);
		} else {
			if (pt.x >= this._tapArea.x && pt.x <= this._tapArea.right && pt.y >= this._tapArea.y && pt.y <= this._tapArea.bottom) {
				this.stopTapTimer();
				this.raiseOnDoubleTap(pt);
			}
		}
	}
	private stopTapTimer(): void {
		this._tapArea = null;
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
}


