/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, runOn, delegateCombine, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, enumGetBox, Point_$type, PointUtil } from "./type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, NormalizedEvent } from "./dom";
import { IExecutionContext } from "./IExecutionContext";
import { CanvasGestureDOMEventProxy } from "./CanvasGestureDOMEventProxy";
import { Brush } from "./Brush";
import { EventProxy } from "./EventProxy";
import { DOMExecutionContext } from "./DOMExecutionContext";
import { Key } from "./Key";
import { DoubleAnimator } from "./DoubleAnimator";
import { Rect } from "./Rect";
import { ScrollbarStyle, ScrollbarStyle_$type } from "./ScrollbarStyle";
import { BaseDOMEventProxy } from "./BaseDOMEventProxy";
import { ModifierKeys } from "./ModifierKeys";
import { truncate, isNaN_ } from "./number";
import { IScrollerKeyboardListener } from "./IScrollerKeyboardListener";
import { EasingFunctions } from "./EasingFunctions";
import { ScrollerScrollingEventArgs } from "./ScrollerScrollingEventArgs";

/**
 * @hidden 
 */
export class ScrollerView extends Base {
	static $t: Type = markType(ScrollerView, 'ScrollerView');
	constructor(model: Scroller) {
		super();
		this.model = model;
	}
	private _model: Scroller = null;
	get model(): Scroller {
		return this._model;
	}
	set model(value: Scroller) {
		this._model = value;
	}
	private _container: DomRenderer = null;
	protected get container(): DomRenderer {
		return this._container;
	}
	protected set container(value: DomRenderer) {
		this._container = value;
	}
	private _scrollContainer: DomWrapper = null;
	protected get scrollContainer(): DomWrapper {
		return this._scrollContainer;
	}
	protected set scrollContainer(value: DomWrapper) {
		this._scrollContainer = value;
	}
	private _executionContext: IExecutionContext = null;
	protected get executionContext(): IExecutionContext {
		return this._executionContext;
	}
	protected set executionContext(value: IExecutionContext) {
		this._executionContext = value;
	}
	getDefaultScrollbarBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "#666666";
			return $ret;
		})());
	}
	private _scrollContainerNative: HTMLDivElement = null;
	protected get scrollContainerNative(): HTMLDivElement {
		return this._scrollContainerNative;
	}
	protected set scrollContainerNative(value: HTMLDivElement) {
		this._scrollContainerNative = value;
	}
	private _eventProxy: CanvasGestureDOMEventProxy = null;
	protected get eventProxy(): CanvasGestureDOMEventProxy {
		return this._eventProxy;
	}
	protected set eventProxy(value: CanvasGestureDOMEventProxy) {
		this._eventProxy = value;
	}
	private _rootContainer: DomWrapper = null;
	get rootContainer(): DomWrapper {
		return this._rootContainer;
	}
	set rootContainer(value: DomWrapper) {
		this._rootContainer = value;
	}
	private _contentContainer: DomWrapper = null;
	get contentContainer(): DomWrapper {
		return this._contentContainer;
	}
	set contentContainer(value: DomWrapper) {
		this._contentContainer = value;
	}
	private _hScrollbar: DomWrapper = null;
	get hScrollbar(): DomWrapper {
		return this._hScrollbar;
	}
	set hScrollbar(value: DomWrapper) {
		this._hScrollbar = value;
	}
	private _vScrollbar: DomWrapper = null;
	get vScrollbar(): DomWrapper {
		return this._vScrollbar;
	}
	set vScrollbar(value: DomWrapper) {
		this._vScrollbar = value;
	}
	provideContainer(container: any): void {
		if (container == null) {
			if (this.container != null) {
				this.container = null;
			}
			if (this.eventProxy != null) {
				this.eventProxy.shouldInteract = null;
				this.eventProxy.destroy();
			}
			return;
		}
		this.container = <DomRenderer><any>container;
		this.model.executionContext = new DOMExecutionContext(this.container);
		let containerWidth = Math.round(<number>this.container.rootWrapper.width());
		let containerHeight = Math.round(<number>this.container.rootWrapper.height());
		this.rootContainer = this.container.rootWrapper;
		this.rootContainer.setStyleProperty("position", "relative");
		this.scrollContainer = this.container.createElement("div");
		this.scrollContainer.setStyleProperty("position", "relative");
		this.scrollContainer.setStyleProperty("width", "100%");
		this.scrollContainer.setStyleProperty("height", "100%");
		this.scrollContainer.setStyleProperty("overflow", "hidden");
		this.rootContainer.append(this.scrollContainer);
		this.hScrollbar = this.container.createElement("div");
		this.hScrollbar.setStyleProperty("position", "absolute");
		this.hScrollbar.setStyleProperty("height", this.model.scrollbarSpan + "px");
		this.hScrollbar.setStyleProperty("width", this.model.minScrollbarSize + "px");
		this.hScrollbar.setStyleProperty("background-color", this.model.scrollbarBrush._fill);
		this.hScrollbar.setStyleProperty("display", "none");
		this.hScrollbar.setStyleProperty("border-radius", "5px");
		this.hScrollbar.setStyleProperty("z-index", "10000");
		this.hScrollbar.setStyleProperty("bottom", "0px");
		this.rootContainer.append(this.hScrollbar);
		this.vScrollbar = this.container.createElement("div");
		this.vScrollbar.setStyleProperty("position", "absolute");
		this.vScrollbar.setStyleProperty("width", this.model.scrollbarSpan + "px");
		this.vScrollbar.setStyleProperty("height", this.model.minScrollbarSize + "px");
		this.vScrollbar.setStyleProperty("background-color", this.model.scrollbarBrush._fill);
		this.vScrollbar.setStyleProperty("display", "none");
		this.vScrollbar.setStyleProperty("border-radius", "5px");
		this.vScrollbar.setStyleProperty("z-index", "10000");
		this.vScrollbar.setStyleProperty("right", "0px");
		this.rootContainer.append(this.vScrollbar);
		this.updateScrollbarStatus(false);
		this.scrollContainerNative = <HTMLDivElement>this.scrollContainer.getNativeElement();
		this.eventProxy = new CanvasGestureDOMEventProxy(this.container.rootWrapper, this.container, true);
		this.container.rootWrapper.setProperty("tabIndex", 1000);
		this.container.rootWrapper.setRawStyleProperty("outline", "none");
		this.eventProxy.deferCapture = true;
		let $t = this.eventProxy;
		$t.onMouseWheel = delegateCombine($t.onMouseWheel, runOn(this, this.eventProxy_OnMouseWheel));
		let $t1 = this.eventProxy;
		$t1.onMouseWheelHorizontal = delegateCombine($t1.onMouseWheelHorizontal, runOn(this, this.eventProxy_OnMouseWheelHorizontal));
		let $t2 = this.eventProxy;
		$t2.onMouseLeave = delegateCombine($t2.onMouseLeave, runOn(this, this.eventProxy_OnMouseLeave));
		let $t3 = this.eventProxy;
		$t3.onDragStarted = delegateCombine($t3.onDragStarted, runOn(this, this.eventProxy_OnDragStarted));
		let $t4 = this.eventProxy;
		$t4.onDragDelta = delegateCombine($t4.onDragDelta, runOn(this, this.eventProxy_OnDragDelta));
		let $t5 = this.eventProxy;
		$t5.onDragCompleted = delegateCombine($t5.onDragCompleted, runOn(this, this.eventProxy_OnDragCompleted));
		let $t6 = this.eventProxy;
		$t6.onFlingStarted = delegateCombine($t6.onFlingStarted, runOn(this, this.eventProxy_OnFlingStarted));
		let $t7 = this.eventProxy;
		$t7.onContactStarted = delegateCombine($t7.onContactStarted, runOn(this, this.eventProxy_OnContactStarted));
		let $t8 = this.eventProxy;
		$t8.onContactMoved = delegateCombine($t8.onContactMoved, runOn(this, this.eventProxy_OnContactMoved));
		let $t9 = this.eventProxy;
		$t9.onContactCompleted = delegateCombine($t9.onContactCompleted, runOn(this, this.eventProxy_OnContactCompleted));
		this.eventProxy.deferredTouchStartMode = true;
		this.eventProxy.shouldInteractForInput = runOn(this, this.shouldInteract);
		let $t10 = this.eventProxy;
		$t10.onKeyDown = delegateCombine($t10.onKeyDown, runOn(this, this.eventProxy_OnKeyDown));
		this.eventProxy.shouldPreventDefault = (e: NormalizedEvent) => {
			let e_ = e.originalEvent;
			let type = <string>(e_.type);
			if (type == "pointerdown" && !this.eventProxy.isFinger(e)) {
				return false;
			}
			return true;
		};
		this.model.onViewportSizeChanged(containerWidth, containerHeight);
		this.model.horizontalAnimation.provideRenderer(this.container);
		this.model.verticalAnimation.provideRenderer(this.container);
	}
	private eventProxy_OnKeyDown(key: Key): boolean {
		return this.model.onKeyDown(key, (this.eventProxy.currentModifiers & ModifierKeys.Shift) != 0, (this.eventProxy.currentModifiers & ModifierKeys.Control) != 0);
	}
	private shouldInteract(p: Point, isFinger: boolean, isWheel: boolean): boolean {
		if (this._isDraggingHBar || this._isDraggingVBar) {
			return true;
		}
		if (isWheel || isFinger) {
			return true;
		}
		if (this.isNearHTrack(p, isFinger)) {
			this.model.activateHorizontalScrollbar();
			if (this.isOverHBar(p, isFinger)) {
				return true;
			}
		} else if (this.model.isHorizontalActive) {
			this.model.deactivateHorizontalScrollbar();
		}
		if (this.isNearVTrack(p, isFinger)) {
			this.model.activateVerticalScrollbar();
			if (this.isOverVBar(p, isFinger)) {
				return true;
			}
		} else if (this.model.isVerticalActive) {
			this.model.deactivateVerticalScrollbar();
		}
		return false;
	}
	private eventProxy_OnContactCompleted(point: Point, isFinger: boolean): void {
		this._isDraggingHBar = false;
		this._isDraggingVBar = false;
		this.model.isDraggingVBar = false;
		this.model.isDraggingHBar = false;
	}
	private eventProxy_OnContactMoved(point: Point, isFinger: boolean): void {
		if (this._isDraggingVBar) {
			let deltaY = point.y - this._vBarDragPrevious;
			this._vBarDragPrevious = point.y;
			this.model.onVBarDelta(deltaY);
		} else if (this._isDraggingHBar) {
			let deltaX = point.x - this._hBarDragPrevious;
			this._hBarDragPrevious = point.x;
			this.model.onHBarDelta(deltaX);
		}
	}
	private eventProxy_OnContactStarted(point: Point, isFinger: boolean): void {
		this._inInertia = false;
		this.cancelInertia();
		let overVBar: boolean = this.isOverVBar(point, isFinger);
		let overHBar: boolean = this.isOverHBar(point, isFinger);
		if (overVBar) {
			this.model.isDraggingVBar = true;
			this._isDraggingVBar = true;
			this._vBarDragPrevious = point.y;
			this.focus();
		} else if (overHBar) {
			this.model.isDraggingHBar = true;
			this._isDraggingHBar = true;
			this._hBarDragPrevious = point.x;
			this.focus();
		}
	}
	private isOverHBar(point: Point, isFinger: boolean): boolean {
		if (!this._isHScrollbarVisible) {
			return false;
		}
		if (point.y >= this.model.viewportHeight - this.model.scrollbarSpan && point.y <= this.model.viewportHeight && point.x >= this._hScrollbarTrackPosition - this._hScrollbarSize / 2 && point.x <= this._hScrollbarTrackPosition + this._hScrollbarSize / 2) {
			return true;
		}
		return false;
	}
	private isOverVBar(point: Point, isFinger: boolean): boolean {
		if (!this._isVScrollbarVisible) {
			return false;
		}
		if (point.x >= this.model.viewportWidth - this.model.scrollbarSpan && point.x <= this.model.viewportWidth && point.y >= this._vScrollbarTrackPosition - this._vScrollbarSize / 2 && point.y <= this._vScrollbarTrackPosition + this._vScrollbarSize / 2) {
			return true;
		}
		return false;
	}
	private isNearHTrack(point: Point, isFinger: boolean): boolean {
		if (!this._isHScrollbarVisible) {
			return false;
		}
		return point.y >= this.model.viewportHeight - this.model.scrollbarSpan - 40 && point.y <= this.model.viewportHeight;
	}
	private isNearVTrack(point: Point, isFinger: boolean): boolean {
		if (!this._isVScrollbarVisible) {
			return false;
		}
		return point.x >= this.model.viewportWidth - this.model.scrollbarSpan - 40 && point.x <= this.model.viewportWidth;
	}
	private _inInertia: boolean = false;
	private eventProxy_OnFlingStarted(point: Point, velocityX: number, velocityY: number): boolean {
		this._inInertia = true;
		return true;
	}
	onViewportHeightChanged(viewportHeight: number): void {
		this.eventProxy.viewport = new Rect(0, 0, 0, this.model.viewportWidth, this.model.viewportHeight);
	}
	onViewportWidthChanged(viewportWidth: number): void {
		this.eventProxy.viewport = new Rect(0, 0, 0, this.model.viewportWidth, this.model.viewportHeight);
	}
	onContentHeightChanged(contentHeight: number): void {
		if (this.contentContainer != null) {
			this.contentContainer.setStyleProperty("height", contentHeight + "px");
		}
	}
	onContentWidthChanged(contentWidth: number): void {
		if (this.contentContainer != null) {
			this.contentContainer.setStyleProperty("width", contentWidth + "px");
		}
	}
	cancelInertia(): void {
	}
	private eventProxy_OnDragCompleted(point: Point): void {
		if (this._isDraggingHBar || this._isDraggingVBar) {
			return;
		}
		this._inInertia = false;
		this.model.onDragCompleted(point);
	}
	private eventProxy_OnDragDelta(point: Point): void {
		if (this._isDraggingHBar || this._isDraggingVBar) {
			return;
		}
		this.model.onDragDelta(point);
	}
	updateScrollTop(scrollTop: number): void {
		this.scrollContainerNative.scrollTop = <number>truncate(scrollTop);
	}
	private eventProxy_OnDragStarted(point: Point): void {
		if (this._isDraggingHBar || this._isDraggingVBar) {
			return;
		}
		this._inInertia = false;
		this.model.onDragStarted(point);
	}
	getInitialScrollLeft(): number {
		return this.scrollContainerNative.scrollLeft;
	}
	getInitialScrollTop(): number {
		return this.scrollContainerNative.scrollTop;
	}
	private eventProxy_OnMouseWheel(point: Point, delta: number): boolean {
		this._inInertia = false;
		this.cancelInertia();
		return this.model.onMouseWheel(point, 0, delta);
	}
	private eventProxy_OnMouseWheelHorizontal(point: Point, delta: number): boolean {
		this._inInertia = false;
		this.cancelInertia();
		return this.model.onMouseWheel(point, delta, 0);
	}
	private eventProxy_OnMouseLeave(point: Point): void {
		if (this.model.horizontalScrollbarStatus > 0) {
			this.model.deactivateHorizontalScrollbar();
		}
		if (this.model.verticalScrollbarStatus > 0) {
			this.model.deactivateVerticalScrollbar();
		}
	}
	updateScrollLeft(scrollLeft: number): void {
		this.scrollContainerNative.scrollLeft = <number>truncate(scrollLeft);
	}
	provideContent(content: any): void {
		this.contentContainer = <DomWrapper><any>content;
		this.scrollContainer.append(this.contentContainer);
	}
	private requestAnimationFrame: (arg1: () => void) => void = null;
	requestWork(update: () => void): void {
		if (this.container == null) {
			return;
		}
		if (this.requestAnimationFrame == null) {
			this.requestAnimationFrame = this.container.getRequestAnimationFrame();
		}
		if (this._inInertia) {
			update();
		} else {
			this.requestAnimationFrame(() => update());
		}
	}
	private _isVScrollbarVisible: boolean = false;
	private _isHScrollbarVisible: boolean = false;
	private _vScrollbarSize: number = 0;
	private _hScrollbarSize: number = 0;
	private _vScrollbarTrackPosition: number = -1;
	private _hScrollbarTrackPosition: number = -1;
	private _isDraggingVBar: boolean = false;
	private _isDraggingHBar: boolean = false;
	private _vBarDragPrevious: number = 0;
	private _hBarDragPrevious: number = 0;
	hideVScrollbar(): void {
		if (this._isVScrollbarVisible) {
			this._isVScrollbarVisible = false;
			this.vScrollbar.setStyleProperty("display", "none");
		}
	}
	hideHScrollbar(): void {
		if (this._isHScrollbarVisible) {
			this._isHScrollbarVisible = false;
			this.hScrollbar.setStyleProperty("display", "none");
		}
	}
	updateVScrollbar(trackPosition: number, size: number): void {
		let showing: boolean = false;
		if (!this._isVScrollbarVisible) {
			showing = true;
			this._isVScrollbarVisible = true;
			this.vScrollbar.setStyleProperty("display", "block");
		}
		if (trackPosition != this._vScrollbarTrackPosition || showing) {
			this._vScrollbarTrackPosition = trackPosition;
			if (this._isVScrollbarVisible) {
				this.vScrollbar.setRawYPosition(trackPosition - size / 2);
			}
		}
		if (size != this._vScrollbarSize || showing) {
			this._vScrollbarSize = size;
			if (this._isVScrollbarVisible) {
				this.vScrollbar.setRawSize(this.getVerticalWidth(), size);
			}
		}
	}
	updateHScrollbar(trackPosition: number, size: number): void {
		let showing: boolean = false;
		if (!this._isHScrollbarVisible) {
			showing = true;
			this._isHScrollbarVisible = true;
			this.hScrollbar.setStyleProperty("display", "block");
		}
		if (trackPosition != this._hScrollbarTrackPosition || showing) {
			this._hScrollbarTrackPosition = trackPosition;
			if (this._isHScrollbarVisible) {
				this.hScrollbar.setRawXPosition(trackPosition - size / 2);
			}
		}
		if (size != this._hScrollbarSize || showing) {
			this._hScrollbarSize = size;
			if (this._isHScrollbarVisible) {
				this.hScrollbar.setRawSize(size, this.getHorizontalHeight());
			}
		}
	}
	updateScrollbarStatus(styleChange: boolean): void {
		if (this.hScrollbar != null && this.vScrollbar != null) {
			switch (this.model.scrollbarStyle) {
				case ScrollbarStyle.Default:
				if (styleChange) {
					this.hScrollbar.setStyleProperty("opacity", "1");
					this.vScrollbar.setStyleProperty("opacity", "1");
					this.hScrollbar.setRawSize(this._hScrollbarSize, this.getHorizontalHeight());
					this.vScrollbar.setRawSize(this.getVerticalWidth(), this._vScrollbarSize);
				}
				break;

				case ScrollbarStyle.Fading:
				if (styleChange) {
					this.hScrollbar.setRawSize(this._hScrollbarSize, this.getHorizontalHeight());
					this.vScrollbar.setRawSize(this.getVerticalWidth(), this._vScrollbarSize);
				}
				this.hScrollbar.setStyleProperty("opacity", this.model.horizontalScrollbarStatus.toString());
				this.vScrollbar.setStyleProperty("opacity", this.model.verticalScrollbarStatus.toString());
				break;

				case ScrollbarStyle.Thin:
				if (styleChange) {
					this.hScrollbar.setStyleProperty("opacity", "1");
					this.vScrollbar.setStyleProperty("opacity", "1");
				}
				this.hScrollbar.setRawSize(this._hScrollbarSize, this.getHorizontalHeight());
				this.vScrollbar.setRawSize(this.getVerticalWidth(), this._vScrollbarSize);
				break;

			}

		}
	}
	private getHorizontalHeight(): number {
		if (this.model.scrollbarStyle == ScrollbarStyle.Thin) {
			return this.model.horizontalScrollbarStatus * (this.model.scrollbarSpan - 2) + 2;
		}
		return this.model.scrollbarSpan;
	}
	private getVerticalWidth(): number {
		if (this.model.scrollbarStyle == ScrollbarStyle.Thin) {
			return this.model.verticalScrollbarStatus * (this.model.scrollbarSpan - 2) + 2;
		}
		return this.model.scrollbarSpan;
	}
	focus(): void {
		this.container.rootWrapper.focus();
	}
	onDetachedFromUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.container.rootWrapper, "");
		}
	}
	onAttachedToUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.container.rootWrapper, "");
		}
	}
}

/**
 * @hidden 
 */
export class Scroller extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(Scroller, 'Scroller', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this._scrollbarBrush = this.view.getDefaultScrollbarBrush();
		this._horizontalAnimation = new DoubleAnimator(0, 1, 400);
		this._verticalAnimation = new DoubleAnimator(0, 1, 400);
		this._horizontalAnimation.easingFunction = EasingFunctions.cubicEase;
		this._verticalAnimation.easingFunction = EasingFunctions.cubicEase;
		let $t = this._horizontalAnimation;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this._horizontalAnimation_PropertyChanged));
		let $t1 = this._verticalAnimation;
		$t1.propertyChanged = delegateCombine($t1.propertyChanged, runOn(this, this._verticalAnimation_PropertyChanged));
	}
	private _smallVerticalChange: number = 49;
	static readonly smallVerticalChangePropertyName: string = "SmallVerticalChange";
	get smallVerticalChange(): number {
		return this._smallVerticalChange;
	}
	set smallVerticalChange(value: number) {
		let oldValue = this._smallVerticalChange;
		this._smallVerticalChange = value;
		if (oldValue != this._smallVerticalChange) {
			this.onPropertyUpdated(Scroller.smallVerticalChangePropertyName, oldValue, this._smallVerticalChange);
		}
	}
	private _keyboardListener: IScrollerKeyboardListener = null;
	get keyboardListener(): IScrollerKeyboardListener {
		return this._keyboardListener;
	}
	set keyboardListener(value: IScrollerKeyboardListener) {
		this._keyboardListener = value;
	}
	private _largeVerticalChange: number = NaN;
	static readonly largeVerticalChangePropertyName: string = "LargeVerticalChange";
	get largeVerticalChange(): number {
		return this._largeVerticalChange;
	}
	set largeVerticalChange(value: number) {
		let oldValue = this._largeVerticalChange;
		this._largeVerticalChange = value;
		if (oldValue != this._largeVerticalChange) {
			this.onPropertyUpdated(Scroller.largeVerticalChangePropertyName, oldValue, this._largeVerticalChange);
		}
	}
	static readonly actualSmallVerticalChangePropertyName: string = "ActualSmallVerticalChange";
	private _actualSmallVerticalChange: number = 49;
	get actualSmallVerticalChange(): number {
		return this._actualSmallVerticalChange;
	}
	set actualSmallVerticalChange(value: number) {
		let oldValue = this._actualSmallVerticalChange;
		this._actualSmallVerticalChange = value;
		if (oldValue != this._actualSmallVerticalChange) {
			this.onPropertyUpdated(Scroller.actualSmallVerticalChangePropertyName, oldValue, this._actualSmallVerticalChange);
		}
	}
	static readonly actualLargeVerticalChangePropertyName: string = "ActualLargeVerticalChange";
	private _actualLargeVerticalChange: number = NaN;
	get actualLargeVerticalChange(): number {
		return this._actualLargeVerticalChange;
	}
	set actualLargeVerticalChange(value: number) {
		let oldValue = this._actualLargeVerticalChange;
		this._actualLargeVerticalChange = value;
		if (oldValue != this._actualLargeVerticalChange) {
			this.onPropertyUpdated(Scroller.actualLargeVerticalChangePropertyName, oldValue, this._actualLargeVerticalChange);
		}
	}
	private _smallHorizontalChange: number = 48;
	static readonly smallHorizontalChangePropertyName: string = "SmallHorizontalChange";
	get smallHorizontalChange(): number {
		return this._smallHorizontalChange;
	}
	set smallHorizontalChange(value: number) {
		let oldValue = this._smallHorizontalChange;
		this._smallHorizontalChange = value;
		if (oldValue != this._smallHorizontalChange) {
			this.onPropertyUpdated(Scroller.smallHorizontalChangePropertyName, oldValue, this._smallHorizontalChange);
		}
	}
	private _largeHorizontalChange: number = NaN;
	static readonly largeHorizontalChangePropertyName: string = "LargeHorizontalChange";
	get largeHorizontalChange(): number {
		return this._largeHorizontalChange;
	}
	set largeHorizontalChange(value: number) {
		let oldValue = this._largeHorizontalChange;
		this._largeHorizontalChange = value;
		if (oldValue != this._largeHorizontalChange) {
			this.onPropertyUpdated(Scroller.largeHorizontalChangePropertyName, oldValue, this._largeHorizontalChange);
		}
	}
	static readonly actualSmallHorizontalChangePropertyName: string = "ActualSmallHorizontalChange";
	private _actualSmallHorizontalChange: number = 48;
	get actualSmallHorizontalChange(): number {
		return this._actualSmallHorizontalChange;
	}
	set actualSmallHorizontalChange(value: number) {
		let oldValue = this._actualSmallHorizontalChange;
		this._actualSmallHorizontalChange = value;
		if (oldValue != this._actualSmallHorizontalChange) {
			this.onPropertyUpdated(Scroller.actualSmallHorizontalChangePropertyName, oldValue, this._actualSmallHorizontalChange);
		}
	}
	static readonly actualLargeHorizontalChangePropertyName: string = "ActualLargeHorizontalChange";
	private _actualLargeHorizontalChange: number = NaN;
	get actualLargeHorizontalChange(): number {
		return this._actualLargeHorizontalChange;
	}
	set actualLargeHorizontalChange(value: number) {
		let oldValue = this._actualLargeHorizontalChange;
		this._actualLargeHorizontalChange = value;
		if (oldValue != this._actualLargeHorizontalChange) {
			this.onPropertyUpdated(Scroller.actualLargeHorizontalChangePropertyName, oldValue, this._actualLargeHorizontalChange);
		}
	}
	private _contentWidth: number = 0;
	static readonly contentWidthPropertyName: string = "ContentWidth";
	get contentWidth(): number {
		return this._contentWidth;
	}
	set contentWidth(value: number) {
		let oldValue = this._contentWidth;
		this._contentWidth = value;
		if (oldValue != this._contentWidth) {
			this.onPropertyUpdated(Scroller.contentWidthPropertyName, oldValue, this._contentWidth);
		}
	}
	private _minScrollbarSize: number = 20;
	static readonly minScrollbarSizePropertyName: string = "MinScrollbarSize";
	get minScrollbarSize(): number {
		return this._minScrollbarSize;
	}
	set minScrollbarSize(value: number) {
		let oldValue = this._minScrollbarSize;
		this._minScrollbarSize = value;
		if (oldValue != this._minScrollbarSize) {
			this.onPropertyUpdated(Scroller.minScrollbarSizePropertyName, oldValue, this._minScrollbarSize);
		}
	}
	private _scrollbarSpan: number = 8;
	static readonly scrollbarSpanPropertyName: string = "ScrollbarSpan";
	get scrollbarSpan(): number {
		return this._scrollbarSpan;
	}
	set scrollbarSpan(value: number) {
		let oldValue = this._scrollbarSpan;
		this._scrollbarSpan = value;
		if (oldValue != this._scrollbarSpan) {
			this.onPropertyUpdated(Scroller.scrollbarSpanPropertyName, oldValue, this._scrollbarSpan);
		}
	}
	onKeyDown(key: Key, isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		switch (key) {
			case Key.PageDown: return this.onPageDown(isShiftPressed, isCtrlPressed);
			case Key.PageUp: return this.onPageUp(isShiftPressed, isCtrlPressed);
			case Key.Down: return this.onDownArrow(isShiftPressed, isCtrlPressed);
			case Key.Up: return this.onUpArrow(isShiftPressed, isCtrlPressed);
			case Key.Left: return this.onLeftArrow(isShiftPressed, isCtrlPressed);
			case Key.Right: return this.onRightArrow(isShiftPressed, isCtrlPressed);
			case Key.Home: return this.onHome(isShiftPressed, isCtrlPressed);
			case Key.End: return this.onEnd(isShiftPressed, isCtrlPressed);
			case Key.Tab: return this.onTab(isShiftPressed, isCtrlPressed);
			case Key.Enter: return this.onEnter(isShiftPressed, isCtrlPressed);
		}

		return false;
	}
	private onTab(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onTab(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		return false;
	}
	private onEnd(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onEnd(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		return false;
	}
	private onHome(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onHome(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		return false;
	}
	private onRightArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onRightArrow(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		if (this.scrollLeft + this.viewportWidth >= this.contentWidth) {
			return false;
		}
		this.scrollBy(this.actualSmallHorizontalChange, 0);
		return true;
	}
	private onLeftArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onLeftArrow(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		if (this.scrollLeft <= 0) {
			return false;
		}
		this.scrollBy(this.actualSmallHorizontalChange * -1, 0);
		return true;
	}
	private onUpArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onUpArrow(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		if (this.scrollTop <= 0) {
			return false;
		}
		this.scrollBy(0, this.actualSmallVerticalChange * -1);
		return true;
	}
	private onDownArrow(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onDownArrow(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		if (this.scrollTop + this.viewportHeight >= this.contentHeight) {
			return false;
		}
		this.scrollBy(0, this.actualSmallVerticalChange);
		return true;
	}
	private onPageUp(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onPageUp(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		if (this.scrollTop < 0) {
			return false;
		}
		this.scrollBy(0, this.actualLargeVerticalChange * -1);
		return true;
	}
	private onPageDown(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onPageDown(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		if (this.scrollTop + this.viewportHeight >= this.contentHeight) {
			return false;
		}
		this.scrollBy(0, this.actualLargeVerticalChange);
		return true;
	}
	private onEnter(isShiftPressed: boolean, isCtrlPressed: boolean): boolean {
		if (this.keyboardListener != null) {
			if (this.keyboardListener.onEnter(isShiftPressed, isCtrlPressed)) {
				return true;
			}
		}
		return false;
	}
	private _verticalTrackStartInset: number = 0;
	static readonly verticalTrackStartInsetPropertyName: string = "VerticalTrackStartInset";
	get verticalTrackStartInset(): number {
		return this._verticalTrackStartInset;
	}
	set verticalTrackStartInset(value: number) {
		let oldValue = this._verticalTrackStartInset;
		this._verticalTrackStartInset = value;
		if (oldValue != this._verticalTrackStartInset) {
			this.onPropertyUpdated(Scroller.verticalTrackStartInsetPropertyName, oldValue, this._verticalTrackStartInset);
		}
	}
	private _scrollbarBrush: Brush = null;
	static readonly scrollbarBrushPropertyName: string = "ScrollbarBrush";
	get scrollbarBrush(): Brush {
		return this._scrollbarBrush;
	}
	set scrollbarBrush(value: Brush) {
		let oldValue = this._scrollbarBrush;
		this._scrollbarBrush = value;
		if (oldValue != this._scrollbarBrush) {
			this.onPropertyUpdated(Scroller.scrollbarBrushPropertyName, oldValue, this._scrollbarBrush);
		}
	}
	private onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	private _suspendScrollUpdates: boolean = false;
	private get suspendScrollUpdates(): boolean {
		return this._suspendScrollUpdates;
	}
	private set suspendScrollUpdates(value: boolean) {
		this._suspendScrollUpdates = value;
		if (!this._suspendScrollUpdates) {
			this.view.updateScrollTop(this.scrollTop);
			this.view.updateScrollLeft(this.scrollLeft);
		}
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Scroller.contentWidthPropertyName:
			this.view.onContentWidthChanged(this.contentWidth);
			let newWidth: number = <number>newValue;
			let oldWidth: number = <number>oldValue;
			if (newWidth < oldWidth && this.scrollLeft + this.viewportWidth >= newWidth) {
				this.scrollByImmediate(newWidth - (this.scrollLeft + this.viewportWidth), 0);
			} else {
				this.updateHScrollbar();
			}
			break;

			case Scroller.contentHeightPropertyName:
			this.view.onContentHeightChanged(this.contentHeight);
			let newHeight: number = <number>newValue;
			let oldHeight: number = <number>oldValue;
			if (newHeight < oldHeight && this.scrollTop + this.viewportHeight >= newHeight) {
				this.scrollByImmediate(0, newHeight - (this.scrollTop + this.viewportHeight));
			} else {
				this.updateVScrollbar();
			}
			break;

			case Scroller.scrollTopPropertyName:
			if (!this.suspendScrollUpdates) {
				this.view.updateScrollTop(this.scrollTop);
			}
			break;

			case Scroller.scrollLeftPropertyName:
			if (!this.suspendScrollUpdates) {
				this.view.updateScrollLeft(this.scrollLeft);
			}
			break;

			case Scroller.viewportWidthPropertyName:
			this.view.onViewportWidthChanged(this.viewportWidth);
			if (isNaN_(this.largeVerticalChange)) {
				this.actualLargeHorizontalChange = this.viewportWidth;
			}
			this.updateHScrollbar();
			break;

			case Scroller.viewportHeightPropertyName:
			this.view.onViewportHeightChanged(this.viewportHeight);
			if (isNaN_(this.largeVerticalChange)) {
				this.actualLargeVerticalChange = this.viewportHeight;
			}
			this.updateVScrollbar();
			break;

			case Scroller.scrollbarBrushPropertyName:

			case Scroller.scrollbarSpanPropertyName:

			case Scroller.minScrollbarSizePropertyName:

			case Scroller.verticalTrackStartInsetPropertyName:
			this.updateVScrollbar();
			this.updateHScrollbar();
			break;

			case Scroller.horizontalScrollbarStatusPropertyName:

			case Scroller.verticalScrollbarStatusPropertyName:
			this.view.updateScrollbarStatus(false);
			break;

			case Scroller.scrollbarStylePropertyName:
			this.view.updateScrollbarStatus(true);
			break;

		}

	}
	private _contentHeight: number = 0;
	static readonly contentHeightPropertyName: string = "ContentHeight";
	get contentHeight(): number {
		return this._contentHeight;
	}
	set contentHeight(value: number) {
		let oldValue = this._contentHeight;
		this._contentHeight = value;
		if (oldValue != this._contentHeight) {
			this.onPropertyUpdated(Scroller.contentHeightPropertyName, oldValue, this._contentHeight);
		}
	}
	onVBarDelta(dist: number): void {
		let size = Math.max(this.minScrollbarSize, this.actualVerticalScrollbarHeight);
		let trackStart: number = this.verticalTrackStartInset + (size / 2);
		let trackEnd: number = this.viewportHeight - (size / 2);
		let trackDelta: number = dist / (trackEnd - trackStart);
		let scrollDelta: number = trackDelta * (this.contentHeight - this.viewportHeight);
		this.scrollBy(0, scrollDelta);
	}
	onHBarDelta(dist: number): void {
		let size = Math.max(this.minScrollbarSize, this.actualHorizontalScrollbarWidth);
		let trackStart: number = 0 + (size / 2);
		let trackEnd: number = this.viewportWidth - (size / 2);
		let trackDelta: number = dist / (trackEnd - trackStart);
		let scrollDelta: number = trackDelta * (this.contentWidth - this.viewportWidth);
		this.scrollBy(scrollDelta, 0);
	}
	onViewportSizeChanged(width: number, height: number, notify: boolean = false): void {
		let oldW = this._viewportWidth;
		let oldH = this._viewportHeight;
		this._viewportWidth = width;
		this._viewportHeight = height;
		if (notify && (oldW != width || oldH != height)) {
			this.onPropertyUpdated(Scroller.viewportWidthPropertyName, oldW, width);
			this.onPropertyUpdated(Scroller.viewportHeightPropertyName, oldH, height);
		}
	}
	static readonly viewportWidthPropertyName: string = "ViewportWidth";
	private _viewportWidth: number = 0;
	get viewportWidth(): number {
		return this._viewportWidth;
	}
	set viewportWidth(value: number) {
		let oldValue = this._viewportWidth;
		this._viewportWidth = value;
		if (oldValue != this._viewportWidth) {
			this.onPropertyUpdated(Scroller.viewportWidthPropertyName, oldValue, this._viewportWidth);
		}
	}
	static readonly viewportHeightPropertyName: string = "ViewportHeight";
	private _viewportHeight: number = 0;
	get viewportHeight(): number {
		return this._viewportHeight;
	}
	set viewportHeight(value: number) {
		let oldValue = this._viewportHeight;
		this._viewportHeight = value;
		if (oldValue != this._viewportHeight) {
			this.onPropertyUpdated(Scroller.viewportHeightPropertyName, oldValue, this._viewportHeight);
		}
	}
	static readonly scrollTopPropertyName: string = "ScrollTop";
	private _scrollTop: number = 0;
	get scrollTop(): number {
		return this._scrollTop;
	}
	set scrollTop(value: number) {
		let oldValue = this._scrollTop;
		this._scrollTop = value;
		if (oldValue != this._scrollTop) {
			this.onPropertyUpdated(Scroller.scrollTopPropertyName, oldValue, this._scrollTop);
		}
	}
	static readonly scrollLeftPropertyName: string = "ScrollLeft";
	private _scrollLeft: number = 0;
	get scrollLeft(): number {
		return this._scrollLeft;
	}
	set scrollLeft(value: number) {
		let oldValue = this._scrollLeft;
		this._scrollLeft = value;
		if (oldValue != this._scrollLeft) {
			this.onPropertyUpdated(Scroller.scrollLeftPropertyName, oldValue, this._scrollLeft);
		}
	}
	private _view: ScrollerView = null;
	get view(): ScrollerView {
		if (this._view == null) {
			this._view = new ScrollerView(this);
		}
		return this._view;
	}
	provideContainer(container: any): void {
		this.view.provideContainer(container);
		this._scrollTop = this.view.getInitialScrollTop();
		this._scrollLeft = this.view.getInitialScrollLeft();
		this.updateHScrollbar();
		this.updateVScrollbar();
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	provideContent(content: any): void {
		this.view.provideContent(content);
	}
	onMouseWheel(point: Point, deltaX: number, deltaY: number): boolean {
		this._isScrollDirectionLocked = false;
		this._isHorizontalExclusive = false;
		this._isVerticalExclusive = false;
		this.view.cancelInertia();
		if (this.keyboardListener != null) {
			this.keyboardListener.onWheel();
		}
		this.scrollBy(deltaX, deltaY);
		return true;
	}
	private _lockScrollDirection: boolean = true;
	get lockScrollDirection(): boolean {
		return this._lockScrollDirection;
	}
	set lockScrollDirection(value: boolean) {
		this._lockScrollDirection = true;
	}
	private _ignoreScrollUpdates: boolean = false;
	get ignoreScrollUpdates(): boolean {
		return this._ignoreScrollUpdates;
	}
	set ignoreScrollUpdates(value: boolean) {
		this._ignoreScrollUpdates = value;
	}
	private static readonly actualVerticalScrollbarHeightPropertyName: string = "ActualVerticalScrollbarHeight";
	private _actualVerticalScrollbarHeight: number = 0;
	get actualVerticalScrollbarHeight(): number {
		return this._actualVerticalScrollbarHeight;
	}
	set actualVerticalScrollbarHeight(value: number) {
		let oldValue = this._actualVerticalScrollbarHeight;
		this._actualVerticalScrollbarHeight = value;
		if (oldValue != this._actualVerticalScrollbarHeight) {
			this.onPropertyUpdated(Scroller.actualVerticalScrollbarHeightPropertyName, oldValue, this._actualVerticalScrollbarHeight);
		}
	}
	private static readonly actualHorizontalScrollbarWidthPropertyName: string = "ActualHorizontalScrollbarWidth";
	private _actualHorizontalScrollbarWidth: number = 0;
	get actualHorizontalScrollbarWidth(): number {
		return this._actualHorizontalScrollbarWidth;
	}
	set actualHorizontalScrollbarWidth(value: number) {
		let oldValue = this._actualHorizontalScrollbarWidth;
		this._actualHorizontalScrollbarWidth = value;
		if (oldValue != this._actualHorizontalScrollbarWidth) {
			this.onPropertyUpdated(Scroller.actualHorizontalScrollbarWidthPropertyName, oldValue, this._actualHorizontalScrollbarWidth);
		}
	}
	private static readonly scrollbarStylePropertyName: string = "ScrollbarStyle";
	private _scrollbarStyle: ScrollbarStyle = ScrollbarStyle.Default;
	get scrollbarStyle(): ScrollbarStyle {
		return this._scrollbarStyle;
	}
	set scrollbarStyle(value: ScrollbarStyle) {
		let oldValue = this._scrollbarStyle;
		this._scrollbarStyle = value;
		if (oldValue != this._scrollbarStyle) {
			this.onPropertyUpdated(Scroller.scrollbarStylePropertyName, enumGetBox<ScrollbarStyle>(ScrollbarStyle_$type, oldValue), enumGetBox<ScrollbarStyle>(ScrollbarStyle_$type, this._scrollbarStyle));
		}
	}
	private _horizontalScrollbarStatus: number = 0;
	private static readonly horizontalScrollbarStatusPropertyName: string = "HorizontalScrollbarStatus";
	get horizontalScrollbarStatus(): number {
		return this._horizontalScrollbarStatus;
	}
	set horizontalScrollbarStatus(value: number) {
		let oldValue = this._horizontalScrollbarStatus;
		this._horizontalScrollbarStatus = value;
		if (oldValue != this._horizontalScrollbarStatus) {
			this.onPropertyUpdated(Scroller.horizontalScrollbarStatusPropertyName, oldValue, this._horizontalScrollbarStatus);
		}
	}
	private _verticalScrollbarStatus: number = 0;
	private static readonly verticalScrollbarStatusPropertyName: string = "VerticalOpacity";
	get verticalScrollbarStatus(): number {
		return this._verticalScrollbarStatus;
	}
	set verticalScrollbarStatus(value: number) {
		let oldValue = this._verticalScrollbarStatus;
		this._verticalScrollbarStatus = value;
		if (oldValue != this._verticalScrollbarStatus) {
			this.onPropertyUpdated(Scroller.verticalScrollbarStatusPropertyName, oldValue, this._verticalScrollbarStatus);
		}
	}
	private _horizontalAnimation: DoubleAnimator = null;
	get horizontalAnimation(): DoubleAnimator {
		return this._horizontalAnimation;
	}
	private _verticalAnimation: DoubleAnimator = null;
	get verticalAnimation(): DoubleAnimator {
		return this._verticalAnimation;
	}
	private _fromHorizontalStatus: number = 0;
	private get fromHorizontalStatus(): number {
		return this._fromHorizontalStatus;
	}
	private set fromHorizontalStatus(value: number) {
		this._fromHorizontalStatus = value;
	}
	private _toHorizontalStatus: number = 0;
	private get toHorizontalStatus(): number {
		return this._toHorizontalStatus;
	}
	private set toHorizontalStatus(value: number) {
		this._toHorizontalStatus = value;
	}
	private _fromVerticalStatus: number = 0;
	private get fromVerticalStatus(): number {
		return this._fromVerticalStatus;
	}
	private set fromVerticalStatus(value: number) {
		this._fromVerticalStatus = value;
	}
	private _toVerticalStatus: number = 0;
	private get toVerticalStatus(): number {
		return this._toVerticalStatus;
	}
	private set toVerticalStatus(value: number) {
		this._toVerticalStatus = value;
	}
	private _executionContext: IExecutionContext = null;
	get executionContext(): IExecutionContext {
		return this._executionContext;
	}
	set executionContext(value: IExecutionContext) {
		this._executionContext = value;
	}
	get isVerticalActive(): boolean {
		return this._vActive;
	}
	get isHorizontalActive(): boolean {
		return this._hActive;
	}
	private _isDraggingVBar: boolean = false;
	get isDraggingVBar(): boolean {
		return this._isDraggingVBar;
	}
	set isDraggingVBar(value: boolean) {
		this._isDraggingVBar = value;
	}
	private _isDraggingHBar: boolean = false;
	get isDraggingHBar(): boolean {
		return this._isDraggingHBar;
	}
	set isDraggingHBar(value: boolean) {
		this._isDraggingHBar = value;
	}
	private _isVerticalExclusive: boolean = false;
	private _isHorizontalExclusive: boolean = false;
	private _isScrollDirectionLocked: boolean = false;
	private _previousDragPosition: Point = null;
	private _isDragging: boolean = false;
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	focus(): void {
		this.view.focus();
	}
	onDragStarted(point: Point): void {
		this.view.focus();
		this._isVerticalExclusive = false;
		this._isHorizontalExclusive = false;
		this._isScrollDirectionLocked = false;
		this._isDragging = true;
		this._previousDragPosition = <Point>{ $type: Point_$type, x: point.x, y: point.y };
	}
	onDragDelta(point: Point): void {
		if (this._isDragging) {
			let deltaY = point.y - this._previousDragPosition.y;
			let deltaX = point.x - this._previousDragPosition.x;
			if (this.lockScrollDirection && !this._isScrollDirectionLocked) {
				this._isScrollDirectionLocked = true;
				if (deltaY > 0 || deltaX > 0) {
					if (deltaY > deltaX) {
						this._isVerticalExclusive = true;
					} else {
						this._isVerticalExclusive = true;
					}
				}
			}
			this._previousDragPosition = <Point>{ $type: Point_$type, x: point.x, y: point.y };
			this.scrollBy(-deltaX, -deltaY);
		}
	}
	onScrolling: (sender: any, args: ScrollerScrollingEventArgs) => void = null;
	scrollTo(x: number, y: number): void {
		this._pendingScrollX = x - this.scrollLeft;
		this._pendingScrollY = y - this.scrollTop;
		this.queueUpdate();
	}
	private _pendingScrollX: number = 0;
	private _pendingScrollY: number = 0;
	private scrollBy(deltaX: number, deltaY: number): void {
		this._pendingScrollX += deltaX;
		this._pendingScrollY += deltaY;
		this.queueUpdate();
	}
	private scrollByImmediate(deltaX: number, deltaY: number): void {
		this._pendingScrollX += deltaX;
		this._pendingScrollY += deltaY;
		this.update();
	}
	private _pendingUpdate: boolean = false;
	private queueUpdate(): void {
		if (this._pendingUpdate) {
			return;
		}
		this._pendingUpdate = true;
		this.view.requestWork(runOn(this, this.update));
	}
	private update(): void {
		this._pendingUpdate = false;
		let deltaX = this._pendingScrollX;
		let deltaY = this._pendingScrollY;
		this._pendingScrollX = 0;
		this._pendingScrollY = 0;
		if (this._isScrollDirectionLocked) {
			if (this._isVerticalExclusive) {
				deltaX = 0;
			}
			if (this._isHorizontalExclusive) {
				deltaY = 0;
			}
		}
		if (deltaX != 0) {
			this._killHTimer = false;
			this.activateHorizontalScrollbar();
			this.deactivateHorizontalScrollbar();
			this._killHTimer = true;
		}
		if (deltaY != 0) {
			this._killVTimer = false;
			this.activateVerticalScrollbar();
			this.deactivateVerticalScrollbar();
			this._killVTimer = true;
		}
		let newTop = Math.round(this.scrollTop + deltaY);
		let newLeft = Math.round(this.scrollLeft + deltaX);
		if (newTop < 0) {
			newTop = 0;
			this.view.cancelInertia();
		}
		if (newLeft < 0) {
			newLeft = 0;
			this.view.cancelInertia();
		}
		if (newTop + this.viewportHeight > this.contentHeight) {
			newTop = this.contentHeight - this.viewportHeight;
			if (newTop < 0) {
				newTop = 0;
			}
			this.view.cancelInertia();
		}
		if (newLeft + this.viewportWidth > this.contentWidth) {
			newLeft = this.contentWidth - this.viewportWidth;
			if (newLeft < 0) {
				newLeft = 0;
			}
			this.view.cancelInertia();
		}
		deltaY = newTop - this.scrollTop;
		deltaX = newLeft - this.scrollLeft;
		if (deltaY != 0 || deltaX != 0) {
			try {
				this.suspendScrollUpdates = true;
				this.ignoreScrollUpdates = true;
				this.scrollTop = newTop;
				this.scrollLeft = newLeft;
				this.updateVScrollbar();
				this.updateHScrollbar();
				this.ignoreScrollUpdates = false;
				if (this.onScrolling != null) {
					this.onScrolling(this, ((() => {
						let $ret = new ScrollerScrollingEventArgs();
						$ret.deltaX = deltaX;
						$ret.deltaY = deltaY;
						return $ret;
					})()));
				}
			}
			finally {
				this.suspendScrollUpdates = false;
			}
		}
	}
	private updateVScrollbar(): void {
		this.updateScrollbar(this.contentHeight, this.viewportHeight, this.scrollTop, true);
	}
	private updateHScrollbar(): void {
		this.updateScrollbar(this.contentWidth, this.viewportWidth, this.scrollLeft, false);
	}
	private updateScrollbar(contentSize: number, viewportSize: number, scrollStart: number, isVertical: boolean): void {
		let size: number = Math.round((viewportSize / contentSize) * viewportSize);
		let trackInset: number = isVertical ? this.verticalTrackStartInset : 0;
		size = size - trackInset;
		if (size < this.minScrollbarSize) {
			size = this.minScrollbarSize;
		}
		if (size >= (viewportSize - trackInset)) {
			if (isVertical) {
				this.view.hideVScrollbar();
			} else {
				this.view.hideHScrollbar();
			}
			return;
		}
		let trackStart: number = trackInset + (size / 2);
		let trackEnd: number = viewportSize - (size / 2);
		let scrollPosition: number = scrollStart / (contentSize - viewportSize);
		let trackPosition: number = Math.round(trackStart + (trackEnd - trackStart) * scrollPosition);
		if (isVertical) {
			this.actualVerticalScrollbarHeight = size;
			this.view.updateVScrollbar(trackPosition, size);
		} else {
			this.actualHorizontalScrollbarWidth = size;
			this.view.updateHScrollbar(trackPosition, size);
		}
	}
	onDragCompleted(point: Point): void {
		this._isScrollDirectionLocked = false;
		this._isHorizontalExclusive = false;
		this._isVerticalExclusive = false;
		this._isDragging = false;
	}
	private _horizontalAnimation_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.horizontalScrollbarStatus = this.fromHorizontalStatus + this._horizontalAnimation.transitionProgress * (this.toHorizontalStatus - this.fromHorizontalStatus);
	}
	private _verticalAnimation_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.verticalScrollbarStatus = this.fromVerticalStatus + this._verticalAnimation.transitionProgress * (this.toVerticalStatus - this.fromVerticalStatus);
	}
	activateHorizontalScrollbar(): void {
		if (this._hActive) {
			return;
		}
		if (this.scrollbarStyle == ScrollbarStyle.Fading || this.scrollbarStyle == ScrollbarStyle.Thin) {
			if (this._horizontalAnimation.animationActive()) {
				this._horizontalAnimation.stop();
			}
			this.horizontalScrollbarStatus = 1;
			if (this._hRunning && this._killHTimer) {
				this._hRunning = false;
			}
		}
		this._hActive = true;
	}
	activateVerticalScrollbar(): void {
		if (this._vActive) {
			return;
		}
		if (this.scrollbarStyle == ScrollbarStyle.Fading || this.scrollbarStyle == ScrollbarStyle.Thin) {
			if (this._verticalAnimation.animationActive()) {
				this._verticalAnimation.stop();
			}
			this.verticalScrollbarStatus = 1;
			if (this._vRunning && this._killVTimer) {
				this._vRunning = false;
			}
		}
		this._vActive = true;
	}
	deactivateHorizontalScrollbar(): void {
		if (!this._hActive || this.isDraggingHBar) {
			return;
		}
		if (this.scrollbarStyle == ScrollbarStyle.Fading || this.scrollbarStyle == ScrollbarStyle.Thin) {
			this.startHTimer();
		}
		this._hActive = false;
	}
	deactivateVerticalScrollbar(): void {
		if (!this._vActive || this.isDraggingVBar) {
			return;
		}
		if (this.scrollbarStyle == ScrollbarStyle.Fading || this.scrollbarStyle == ScrollbarStyle.Thin) {
			this.startVTimer();
		}
		this._vActive = false;
	}
	private _deactivateDuration: number = 1000;
	private _hStartTime: number = 0;
	private _vStartTime: number = 0;
	private _hRunning: boolean = false;
	private _vRunning: boolean = false;
	private _hActive: boolean = false;
	private _vActive: boolean = false;
	private _killHTimer: boolean = true;
	private _killVTimer: boolean = true;
	private startHTimer(): void {
		if (!this._hRunning) {
			this._hRunning = true;
			this._hStartTime = this.executionContext.getCurrentRelativeTime();
			this.executionContext.executeDelayed(runOn(this, this.checkHTimer), this._deactivateDuration);
		} else {
			this._hStartTime = this.executionContext.getCurrentRelativeTime();
		}
	}
	private startVTimer(): void {
		if (!this._vRunning) {
			this._vRunning = true;
			this._vStartTime = this.executionContext.getCurrentRelativeTime();
			this.executionContext.executeDelayed(runOn(this, this.checkVTimer), this._deactivateDuration);
		} else {
			this._vStartTime = this.executionContext.getCurrentRelativeTime();
		}
	}
	private checkHTimer(): void {
		if (!this._hRunning) {
			return;
		}
		let currentTime: number = this.executionContext.getCurrentRelativeTime();
		if (currentTime - this._hStartTime >= this._deactivateDuration) {
			if (!this._horizontalAnimation.animationActive() && this.horizontalScrollbarStatus != 0) {
				this.fromHorizontalStatus = this.horizontalScrollbarStatus;
				this.toHorizontalStatus = 0;
				this._horizontalAnimation.start();
			}
			this._hRunning = false;
		} else {
			this.executionContext.executeDelayed(runOn(this, this.checkHTimer), <number>(this._deactivateDuration - (currentTime - this._hStartTime)));
		}
	}
	private checkVTimer(): void {
		if (!this._vRunning) {
			return;
		}
		let currentTime: number = this.executionContext.getCurrentRelativeTime();
		if (currentTime - this._vStartTime >= this._deactivateDuration) {
			if (!this._verticalAnimation.animationActive() && this.verticalScrollbarStatus != 0) {
				this.fromVerticalStatus = this.verticalScrollbarStatus;
				this.toVerticalStatus = 0;
				this._verticalAnimation.start();
			}
			this._vRunning = false;
		} else {
			this.executionContext.executeDelayed(runOn(this, this.checkVTimer), <number>(this._deactivateDuration - (currentTime - this._vStartTime)));
		}
	}
}


