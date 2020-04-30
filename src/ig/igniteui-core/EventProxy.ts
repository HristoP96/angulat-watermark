/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "./type";
import { Rect } from "./Rect";
import { ModifierKeys } from "./ModifierKeys";
import { NormalizedEvent, DomWrapper, DomWrapper_$type } from "./dom";
import { Key } from "./Key";

/**
 * @hidden 
 */
export abstract class EventProxy extends Base {
	static $t: Type = markType(EventProxy, 'EventProxy');
	onMouseWheel: (point: Point, delta: number) => boolean = null;
	onMouseWheelHorizontal: (point: Point, delta: number) => boolean = null;
	onPinchStarted: (point: Point, scale: number) => void = null;
	onPinchDelta: (point: Point, scale: number) => void = null;
	onGestureCompleted: (point: Point, scale: number) => void = null;
	onZoomStarted: (point: Point, scaleX: number, scaleY: number, isoScale: number) => void = null;
	onZoomDelta: (point: Point, scaleX: number, scaleY: number, isoScale: number) => void = null;
	onZoomCompleted: (point: Point, scaleX: number, scaleY: number, isoScale: number) => void = null;
	onFlingStarted: (point: Point, velocityX: number, velocityY: number) => boolean = null;
	onContactStarted: (point: Point, isFinger: boolean) => void = null;
	onDragStarted: (point: Point) => void = null;
	onContactMoved: (point: Point, isFinger: boolean) => void = null;
	onDragDelta: (point: Point) => void = null;
	onContactCompleted: (point: Point, isFinger: boolean) => void = null;
	onDragCompleted: (point: Point) => void = null;
	onMouseLeave: (point: Point) => void = null;
	onMouseOver: (point: Point, onMouseMove: boolean, isFinger: boolean) => void = null;
	onMouseEnter: (point: Point) => void = null;
	onMouseDown: (point: Point) => void = null;
	onMouseUp: (point: Point) => void = null;
	onDoubleTap: (point: Point) => void = null;
	onHold: (point: Point) => void = null;
	onKeyDown: (key: Key) => boolean = null;
	onKeyUp: (key: Key) => boolean = null;
	abstract getOffsetRelative(source: DomWrapper): Rect;
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _currentModifiers: ModifierKeys = <ModifierKeys>0;
	get currentModifiers(): ModifierKeys {
		return this._currentModifiers;
	}
	set currentModifiers(value: ModifierKeys) {
		this._currentModifiers = value;
	}
	private _rightButton: boolean = false;
	get rightButton(): boolean {
		return this._rightButton;
	}
	set rightButton(value: boolean) {
		this._rightButton = value;
	}
	private _shouldInteract: (arg1: Point) => boolean = null;
	get shouldInteract(): (arg1: Point) => boolean {
		return this._shouldInteract;
	}
	set shouldInteract(value: (arg1: Point) => boolean) {
		this._shouldInteract = value;
	}
	private _shouldInteractForInput: (arg1: Point, arg2: boolean, arg3: boolean) => boolean = null;
	get shouldInteractForInput(): (arg1: Point, arg2: boolean, arg3: boolean) => boolean {
		return this._shouldInteractForInput;
	}
	set shouldInteractForInput(value: (arg1: Point, arg2: boolean, arg3: boolean) => boolean) {
		this._shouldInteractForInput = value;
	}
	protected isInputAccepted(p: Point, isFinger: boolean, isWheel: boolean): boolean {
		if (this.shouldInteractForInput != null) {
			return this.shouldInteractForInput(p, isFinger, isWheel);
		}
		return this.shouldInteract(p);
	}
	private _shouldPreventDefault: (arg1: NormalizedEvent) => boolean = null;
	get shouldPreventDefault(): (arg1: NormalizedEvent) => boolean {
		return this._shouldPreventDefault;
	}
	set shouldPreventDefault(value: (arg1: NormalizedEvent) => boolean) {
		this._shouldPreventDefault = value;
	}
	abstract clone(): EventProxy;
	abstract destroy(): void;
	protected get_supportsNonIsometricZoom(): boolean {
		return false;
	}
	get supportsNonIsometricZoom(): boolean {
		return this.get_supportsNonIsometricZoom();
	}
	private _originalEvent: any = null;
	get originalEvent(): any {
		return this._originalEvent;
	}
	set originalEvent(value: any) {
		this._originalEvent = value;
	}
	protected raiseOnMouseWheel(point: Point, delta: number): boolean {
		if (this.onMouseWheel != null && !this.isInteractionDisabled) {
			return this.onMouseWheel(point, delta);
		}
		return false;
	}
	protected raiseOnMouseWheelHorizontal(point: Point, delta: number): boolean {
		if (this.onMouseWheelHorizontal != null && !this.isInteractionDisabled) {
			return this.onMouseWheelHorizontal(point, delta);
		}
		return false;
	}
	protected raiseOnPinchStarted(point: Point, scale: number): void {
		if (this.onPinchStarted != null && !this.isInteractionDisabled) {
			this.onPinchStarted(point, scale);
		}
	}
	protected raiseOnZoomStarted(point: Point, scaleX: number, scaleY: number, isoScaleDelta: number): void {
		if (this.onZoomStarted != null && !this.isInteractionDisabled) {
			this.onZoomStarted(point, scaleX, scaleY, isoScaleDelta);
		}
	}
	protected raiseOnFlingStarted(point: Point, velocityX: number, velocityY: number): boolean {
		if (this.onFlingStarted != null && !this.isInteractionDisabled) {
			return this.onFlingStarted(point, velocityX, velocityY);
		}
		return true;
	}
	protected raiseOnPinchDelta(point: Point, scale: number): void {
		if (this.onPinchDelta != null && !this.isInteractionDisabled) {
			this.onPinchDelta(point, scale);
		}
	}
	protected raiseOnZoomDelta(point: Point, scaleX: number, scaleY: number, isoScaleDelta: number): void {
		if (this.onZoomDelta != null && !this.isInteractionDisabled) {
			this.onZoomDelta(point, scaleX, scaleY, isoScaleDelta);
		}
	}
	protected raiseOnZoomCompleted(point: Point, scaleX: number, scaleY: number, isoScaleDelta: number): void {
		if (this.onZoomCompleted != null && !this.isInteractionDisabled) {
			this.onZoomCompleted(point, scaleX, scaleY, isoScaleDelta);
		}
	}
	protected raiseOnGestureCompleted(point: Point, scale: number): void {
		if (this.onGestureCompleted != null && !this.isInteractionDisabled) {
			this.onGestureCompleted(point, scale);
		}
	}
	protected raiseOnContactStarted(point: Point, isFinger: boolean): void {
		if (this.onContactStarted != null && !this.isInteractionDisabled) {
			this.onContactStarted(point, isFinger);
		}
	}
	protected raiseOnDragStarted(point: Point): void {
		if (this.onDragStarted != null && !this.isInteractionDisabled) {
			this.onDragStarted(point);
		}
	}
	protected raiseOnContactMoved(point: Point, isFinger: boolean): void {
		if (this.onContactMoved != null && !this.isInteractionDisabled) {
			this.onContactMoved(point, isFinger);
		}
	}
	protected raiseOnDragDelta(point: Point): void {
		if (this.onDragDelta != null && !this.isInteractionDisabled) {
			this.onDragDelta(point);
		}
	}
	protected raiseOnContactCompleted(point: Point, isFinger: boolean): void {
		if (this.onContactCompleted != null && !this.isInteractionDisabled) {
			this.onContactCompleted(point, isFinger);
		}
	}
	protected raiseOnDragCompleted(point: Point): void {
		if (this.onDragCompleted != null && !this.isInteractionDisabled) {
			this.onDragCompleted(point);
		}
	}
	protected raiseOnMouseLeave(point: Point): void {
		if (this.onMouseLeave != null && !this.isInteractionDisabled) {
			this.onMouseLeave(point);
		}
	}
	protected raiseOnMouseOver(point: Point, onMouseMove: boolean, isFinger: boolean): void {
		if (this.onMouseOver != null && !this.isInteractionDisabled) {
			this.onMouseOver(point, onMouseMove, isFinger);
		}
	}
	protected raiseOnMouseEnter(point: Point): void {
		if (this.onMouseEnter != null && !this.isInteractionDisabled) {
			this.onMouseEnter(point);
		}
	}
	protected raiseOnMouseDown(point: Point): void {
		if (this.onMouseDown != null && !this.isInteractionDisabled) {
			this.onMouseDown(point);
		}
	}
	protected raiseOnMouseUp(point: Point): void {
		if (this.onMouseUp != null && !this.isInteractionDisabled) {
			this.onMouseUp(point);
		}
	}
	protected raiseOnKeyDown(key: Key): boolean {
		if (this.onKeyDown != null && !this.isInteractionDisabled) {
			return this.onKeyDown(key);
		}
		return false;
	}
	protected raiseOnKeyUp(key: Key): boolean {
		if (this.onKeyUp != null && !this.isInteractionDisabled) {
			return this.onKeyUp(key);
		}
		return false;
	}
	protected raiseOnDoubleTap(point: Point): void {
		if (this.onDoubleTap != null && !this.isInteractionDisabled) {
			this.onDoubleTap(point);
		}
	}
	protected raiseOnHold(point: Point): void {
		if (this.onHold != null && !this.isInteractionDisabled) {
			this.onHold(point);
		}
	}
	abstract getSourceOffsets(): Point;
	private _isInteractionDisabled: boolean = false;
	get isInteractionDisabled(): boolean {
		return this._isInteractionDisabled;
	}
	set isInteractionDisabled(value: boolean) {
		this._isInteractionDisabled = value;
		this.onIsInteractionDisabledChanged();
	}
	private _deferredTouchStartMode: boolean = false;
	get deferredTouchStartMode(): boolean {
		return this._deferredTouchStartMode;
	}
	set deferredTouchStartMode(value: boolean) {
		this._deferredTouchStartMode = value;
	}
	private _shouldInteractForDirection: (arg1: Point) => boolean = null;
	get shouldInteractForDirection(): (arg1: Point) => boolean {
		return this._shouldInteractForDirection;
	}
	set shouldInteractForDirection(value: (arg1: Point) => boolean) {
		this._shouldInteractForDirection = value;
	}
	protected onIsInteractionDisabledChanged(): void {
	}
	abstract bindToSource(source: any, sourceId: string): void;
	abstract unbindFromSource(source: any, sourceId: string): void;
}


