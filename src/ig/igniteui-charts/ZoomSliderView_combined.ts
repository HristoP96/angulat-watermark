/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point, runOn, delegateCombine, delegateRemove, Type, markType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, enumGetBox } from "igniteui-core/type";
import { ITrackThumbVisual } from "./ITrackThumbVisual";
import { ITrackRangeVisual } from "./ITrackRangeVisual";
import { ITrackBarVisual } from "./ITrackBarVisual";
import { ITrackShadeVisual } from "./ITrackShadeVisual";
import { ITrackThumbCalloutVisual } from "./ITrackThumbCalloutVisual";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { EventProxy } from "igniteui-core/EventProxy";
import { FontInfo } from "igniteui-core/FontInfo";
import { ZoomSliderCursor } from "./ZoomSliderCursor";
import { DefaultTrackThumbVisual } from "./DefaultTrackThumbVisual";
import { DefaultTrackRangeVisual } from "./DefaultTrackRangeVisual";
import { DefaultTrackBarVisual } from "./DefaultTrackBarVisual";
import { DefaultTrackShadeVisual } from "./DefaultTrackShadeVisual";
import { DefaultTrackThumbCalloutVisual } from "./DefaultTrackThumbCalloutVisual";
import { Rect } from "igniteui-core/Rect";
import { TextBlock } from "igniteui-core/TextBlock";
import { UIElement } from "igniteui-core/UIElement";
import { Path } from "igniteui-core/Path";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { CanvasGestureDOMEventProxy } from "igniteui-core/CanvasGestureDOMEventProxy";
import { FontUtil } from "igniteui-core/FontUtil";
import { Size } from "igniteui-core/Size";
import { truncate, isNaN_ } from "igniteui-core/number";
import { ITrackOwner, ITrackOwner_$type } from "./ITrackOwner";
import { IZoomSlider, IZoomSlider_$type } from "igniteui-core/IZoomSlider";
import { TrackThumb } from "./TrackThumb";
import { TrackThumbRange } from "./TrackThumbRange";
import { ZoomSliderVisualArea } from "./ZoomSliderVisualArea";
import { ZoomSliderOrientation, ZoomSliderOrientation_$type } from "./ZoomSliderOrientation";
import { Brush } from "igniteui-core/Brush";
import { ZoomSliderResolvingAxisValueEventArgs } from "./ZoomSliderResolvingAxisValueEventArgs";
import { RectChangedEventArgs } from "igniteui-core/RectChangedEventArgs";
import { Thickness } from "igniteui-core/Thickness";
import { NotImplementedException } from "igniteui-core/NotImplementedException";
import { Shape } from "igniteui-core/Shape";
import { EasingFunctions } from "igniteui-core/EasingFunctions";
import { TrackShadeOrientation } from "./TrackShadeOrientation";
import { ThumbRangePosition } from "./ThumbRangePosition";

/**
 * @hidden 
 */
export class ZoomSliderView extends Base {
	static $t: Type = markType(ZoomSliderView, 'ZoomSliderView');
	constructor(model: ZoomSlider) {
		super();
		this.model = model;
		this.lowerThumbVisual = new DefaultTrackThumbVisual();
		this.higherThumbVisual = new DefaultTrackThumbVisual();
		this.rangeVisual = new DefaultTrackRangeVisual();
		this.barVisual = new DefaultTrackBarVisual();
		this.lowerShadeVisual = new DefaultTrackShadeVisual();
		this.higherShadeVisual = new DefaultTrackShadeVisual();
		this.lowerCalloutVisual = new DefaultTrackThumbCalloutVisual();
		this.higherCalloutVisual = new DefaultTrackThumbCalloutVisual();
		this._font = this.getDefaultThumbCalloutTextStyle();
		this.initializeScalingRatio();
	}
	onAttachedToUI(): void {
		this._attached = true;
		this.initializeScalingRatio();
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.container.rootWrapper, "");
		}
		if (this._heartbeatId == -1) {
			this._heartbeatId = this.container.setTimeout(runOn(this, this.heartbeat), ZoomSliderView.hEARTBEAT_INTERVAL);
		}
	}
	onDetachedFromUI(): void {
		this._attached = false;
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.container.rootWrapper, "");
		}
		if (this._heartbeatId != -1) {
			window.clearTimeout(this._heartbeatId);
			this._heartbeatId = -1;
		}
	}
	private _isDirty: boolean = false;
	private _lowerThumbVisual: ITrackThumbVisual = null;
	get lowerThumbVisual(): ITrackThumbVisual {
		return this._lowerThumbVisual;
	}
	set lowerThumbVisual(value: ITrackThumbVisual) {
		this._lowerThumbVisual = value;
	}
	private _higherThumbVisual: ITrackThumbVisual = null;
	get higherThumbVisual(): ITrackThumbVisual {
		return this._higherThumbVisual;
	}
	set higherThumbVisual(value: ITrackThumbVisual) {
		this._higherThumbVisual = value;
	}
	private _rangeVisual: ITrackRangeVisual = null;
	get rangeVisual(): ITrackRangeVisual {
		return this._rangeVisual;
	}
	set rangeVisual(value: ITrackRangeVisual) {
		this._rangeVisual = value;
	}
	private _barVisual: ITrackBarVisual = null;
	get barVisual(): ITrackBarVisual {
		return this._barVisual;
	}
	set barVisual(value: ITrackBarVisual) {
		this._barVisual = value;
	}
	private _lowerShadeVisual: ITrackShadeVisual = null;
	get lowerShadeVisual(): ITrackShadeVisual {
		return this._lowerShadeVisual;
	}
	set lowerShadeVisual(value: ITrackShadeVisual) {
		this._lowerShadeVisual = value;
	}
	private _higherShadeVisual: ITrackShadeVisual = null;
	get higherShadeVisual(): ITrackShadeVisual {
		return this._higherShadeVisual;
	}
	set higherShadeVisual(value: ITrackShadeVisual) {
		this._higherShadeVisual = value;
	}
	private _lowerCalloutVisual: ITrackThumbCalloutVisual = null;
	get lowerCalloutVisual(): ITrackThumbCalloutVisual {
		return this._lowerCalloutVisual;
	}
	set lowerCalloutVisual(value: ITrackThumbCalloutVisual) {
		this._lowerCalloutVisual = value;
	}
	private _higherCalloutVisual: ITrackThumbCalloutVisual = null;
	get higherCalloutVisual(): ITrackThumbCalloutVisual {
		return this._higherCalloutVisual;
	}
	set higherCalloutVisual(value: ITrackThumbCalloutVisual) {
		this._higherCalloutVisual = value;
	}
	private _model: ZoomSlider = null;
	get model(): ZoomSlider {
		return this._model;
	}
	set model(value: ZoomSlider) {
		this._model = value;
	}
	makeDirty(): void {
		if (!this._isDirty) {
			if (this.container != null) {
				this._isDirty = true;
				this.container.setTimeout(runOn(this, this.undirty), 0);
			}
		}
	}
	flush(): void {
		this.undirty();
	}
	private undirty(): void {
		if (!this._isDirty) {
			return;
		}
		this._isDirty = false;
		this.model.updateVisuals();
		this.render();
	}
	private render(): void {
		if (this.context == null) {
			return;
		}
		let width = this.model.viewport.width;
		let height = this.model.viewport.height;
		let pixelWidth = Math.round(width * this._currentPixelRatio);
		let pixelHeight = Math.round(height * this._currentPixelRatio);
		if (this._canvasWidth != pixelWidth || this._canvasHeight != pixelHeight) {
			this.canvas.setAttribute("width", pixelWidth.toString());
			this.canvas.setAttribute("height", pixelHeight.toString());
			this.canvas.setStyleProperty("width", width.toString() + "px");
			this.canvas.setStyleProperty("height", height.toString() + "px");
			this._canvasWidth = <number>truncate(Math.round(pixelWidth));
			this._canvasHeight = <number>truncate(Math.round(pixelHeight));
		}
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.save();
			this.context.scale(this._currentPixelRatio, this._currentPixelRatio);
		}
		this.context.clearRectangle(this.model.viewport.left, this.model.viewport.top, this.model.viewport.width, this.model.viewport.height);
		this.transformPaths(this.lowerThumbVisual.allPaths, this.lowerThumbVisual.translateX, this.lowerThumbVisual.translateY);
		this.transformPaths(this.higherThumbVisual.allPaths, this.higherThumbVisual.translateX, this.higherThumbVisual.translateY);
		this.transformPaths(this.rangeVisual.allPaths, this.rangeVisual.translateX, this.rangeVisual.translateY);
		this.transformPaths(this.barVisual.allPaths, this.barVisual.translateX, this.barVisual.translateY);
		this.transformPaths(this.lowerShadeVisual.allPaths, this.lowerShadeVisual.translateX, this.lowerShadeVisual.translateY);
		this.transformPaths(this.higherShadeVisual.allPaths, this.higherShadeVisual.translateX, this.higherShadeVisual.translateY);
		this.transformPaths(this.lowerCalloutVisual.allPaths, this.lowerCalloutVisual.translateX, this.lowerCalloutVisual.translateY);
		this.transformPaths(this.higherCalloutVisual.allPaths, this.higherCalloutVisual.translateX, this.higherCalloutVisual.translateY);
		this.transformTextBlock(this.lowerCalloutVisual.calloutText, this.lowerCalloutVisual.textTranslateX, this.lowerCalloutVisual.textTranslateY);
		this.transformTextBlock(this.higherCalloutVisual.calloutText, this.higherCalloutVisual.textTranslateX, this.higherCalloutVisual.textTranslateY);
		this.renderPaths(this.barVisual.allPaths);
		this.renderPaths(this.rangeVisual.allPaths);
		this.renderPaths(this.lowerShadeVisual.allPaths);
		this.renderPaths(this.higherShadeVisual.allPaths);
		this.renderPaths(this.lowerThumbVisual.allPaths);
		this.renderPaths(this.higherThumbVisual.allPaths);
		this.renderPaths(this.lowerCalloutVisual.allPaths);
		this.renderPaths(this.higherCalloutVisual.allPaths);
		this.renderTextBlock(this.lowerCalloutVisual.calloutText);
		this.renderTextBlock(this.higherCalloutVisual.calloutText);
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.restore();
		}
	}
	private renderTextBlock(text: TextBlock): void {
		if (text.renderTransform != null) {
			this.context.save();
		}
		this.context.applyTransform(text.renderTransform);
		this.context.renderTextBlock(text);
		if (text.renderTransform != null) {
			this.context.restore();
		}
	}
	private renderPaths(allPaths: IList$1<Path>): void {
		for (let i = 0; i < allPaths.count; i++) {
			let currPath = allPaths.item(i);
			if (currPath.renderTransform != null) {
				this.context.save();
			}
			this.context.applyTransform(currPath.renderTransform);
			this.context.renderPath(currPath);
			if (currPath.renderTransform != null) {
				this.context.restore();
			}
		}
	}
	private transformTextBlock(text: TextBlock, translateX: number, translateY: number): void {
		if (text.renderTransform == null) {
			text.renderTransform = new TranslateTransform();
		}
		let transform = <TranslateTransform>text.renderTransform;
		transform.x = translateX;
		transform.y = translateY;
	}
	private transformPaths(allPaths: IList$1<Path>, translateX: number, translateY: number): void {
		for (let i = 0; i < allPaths.count; i++) {
			let currPath = allPaths.item(i);
			if (currPath.renderTransform == null) {
				currPath.renderTransform = new TranslateTransform();
			}
			let transform = <TranslateTransform>currPath.renderTransform;
			transform.x = translateX;
			transform.y = translateY;
		}
	}
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	private _canvas: DomWrapper = null;
	private get canvas(): DomWrapper {
		return this._canvas;
	}
	private set canvas(value: DomWrapper) {
		this._canvas = value;
	}
	private _context: RenderingContext = null;
	private get context(): RenderingContext {
		return this._context;
	}
	private set context(value: RenderingContext) {
		this._context = value;
	}
	private _currentPixelRatio: number = 0;
	private _mouseCaptured: boolean = false;
	private _canvasWidth: number = 0;
	private _canvasHeight: number = 0;
	private _font: FontInfo = null;
	private _eventProxy: EventProxy = null;
	private get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	private set eventProxy(value: EventProxy) {
		this._eventProxy = value;
	}
	initializeScalingRatio(): void {
		let userRatio = this.model.pixelScalingRatio;
		let actualRatio = this.model.actualPixelScalingRatio;
		if (!isNaN_(userRatio) && userRatio != 0) {
			return;
		}
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
			this.model.actualPixelScalingRatio = window.devicePixelRatio;
		}
	}
	provideContainer(container: any): void {
		if (container == null) {
			let oldContainer = this.container;
			this.canvas = null;
			this.container = null;
			this.context = null;
			this.cleanUpEventProxy();
			if (this._heartbeatId != -1) {
				if (oldContainer != null) {
					oldContainer.clearTimeout(this._heartbeatId);
				} else {
					window.clearTimeout(this._heartbeatId);
				}
				this._heartbeatId = -1;
			}
			return;
		}
		this._currentPixelRatio = (isNaN_(this.model.pixelScalingRatio) ? this.model.actualPixelScalingRatio : this.model.pixelScalingRatio);
		let cont = <DomRenderer><any>container;
		this.container = cont;
		this.model.panAnimator.provideRenderer(this.container);
		this.container.rootWrapper.addClass("ui-zoomslider-container");
		let pixelScale = this._currentPixelRatio;
		let containerWidth = Math.round(<number>cont.rootWrapper.width());
		let containerHeight = Math.round(<number>cont.rootWrapper.height());
		let pixelWidth = containerWidth * pixelScale;
		let pixelHeight = containerHeight * pixelScale;
		this.container.rootWrapper.setStyleProperty("position", "relative");
		let canv = this.container.createElement("canvas");
		canv.setStyleProperty("position", "absolute");
		this.container.append(canv);
		this._canvasWidth = <number>truncate(Math.round(pixelWidth));
		this._canvasHeight = <number>truncate(Math.round(pixelHeight));
		canv.setAttribute("width", pixelWidth.toString());
		canv.setAttribute("height", pixelHeight.toString());
		canv.setStyleProperty("width", containerWidth.toString() + "px");
		canv.setStyleProperty("height", containerHeight.toString() + "px");
		this.canvas = canv;
		let context = this.container.get2DCanvasContext(this.canvas);
		this.context = new RenderingContext(new CanvasViewRenderer(), context);
		this.context.setFontInfo(this._font);
		this.cleanUpEventProxy();
		this.eventProxy = new CanvasGestureDOMEventProxy(this.container.rootWrapper, this.container, false);
		this.eventProxy.viewport = this.model.viewport;
		let $t = this.eventProxy;
		$t.onContactStarted = delegateCombine($t.onContactStarted, runOn(this, this.eventProxy_OnContactStarted));
		let $t1 = this.eventProxy;
		$t1.onContactMoved = delegateCombine($t1.onContactMoved, runOn(this, this.eventProxy_OnContactMoved));
		let $t2 = this.eventProxy;
		$t2.onContactCompleted = delegateCombine($t2.onContactCompleted, runOn(this, this.eventProxy_OnContactCompleted));
		this.eventProxy.shouldInteract = (p: Point) => this.model.insetViewport.containsPoint(p);
		this.model.onViewportChanged(0, 0, containerWidth, containerHeight);
		this._currentFontHeight = FontUtil.getCurrentFontHeight(this.container, this._font);
		this.model.trackDirty();
		this._heartbeatId = this.container.setTimeout(runOn(this, this.heartbeat), ZoomSliderView.hEARTBEAT_INTERVAL);
	}
	private eventProxy_OnContactCompleted(point: Point, isFinger: boolean): void {
		this.model.onMouseLeftButtonUp(point, isFinger);
	}
	private eventProxy_OnContactMoved(point: Point, isFinger: boolean): void {
		this.model.onMouseMove(point);
	}
	private eventProxy_OnContactStarted(point: Point, isFinger: boolean): void {
		this.model.onMouseLeftButtonDown(point, isFinger);
	}
	private cleanUpEventProxy(): void {
		if (this.eventProxy != null) {
			let $t = this.eventProxy;
			$t.onContactStarted = delegateRemove($t.onContactStarted, runOn(this, this.eventProxy_OnContactStarted));
			let $t1 = this.eventProxy;
			$t1.onContactMoved = delegateRemove($t1.onContactMoved, runOn(this, this.eventProxy_OnContactMoved));
			let $t2 = this.eventProxy;
			$t2.onContactCompleted = delegateRemove($t2.onContactCompleted, runOn(this, this.eventProxy_OnContactCompleted));
			this.eventProxy.shouldInteract = null;
			this.eventProxy.destroy();
		}
	}
	releaseMouseCapture(): void {
	}
	notifySizeChanged(): void {
		this.notifySizeChanged1(true);
	}
	private notifySizeChanged1(force: boolean): void {
		if (this.container == null || this.container.rootWrapper == null) {
			return;
		}
		this.initializeScalingRatio();
		let width = Math.round(<number>this.container.rootWrapper.width());
		let height = Math.round(<number>this.container.rootWrapper.height());
		let viewportChanged: boolean = width != this.model.viewport.width || height != this.model.viewport.height;
		if (force || viewportChanged) {
			this.model.onViewportChanged(0, 0, width, height);
			if (this.eventProxy != null) {
				this.eventProxy.viewport = this.model.viewport;
			}
		}
	}
	getMouseCapture(): void {
	}
	getDefaultThumbCalloutTextStyle(): FontInfo {
		return ((() => {
			let $ret = new FontInfo();
			$ret.fontFamily = "Verdana";
			$ret.fontSize = 10;
			return $ret;
		})());
	}
	private _currentCalloutFontInfo: FontInfo = null;
	private _currentCalloutFontVersion: number = -1;
	private _currentFontHeight: number = 10;
	updateTextBlock(calloutText: TextBlock, text: string, fontInfo: FontInfo): void {
		if (calloutText.text != text) {
			calloutText.text = text;
		}
		if (this._currentCalloutFontInfo != fontInfo) {
			this._currentCalloutFontInfo = fontInfo;
			this._font = this._currentCalloutFontInfo;
			this._currentFontHeight = FontUtil.getCurrentFontHeight(this.container, this._font);
			this.context.setFontInfo(this._currentCalloutFontInfo);
			this.model.trackDirty();
		}
	}
	private _currentCursor: ZoomSliderCursor = ZoomSliderCursor.Default;
	private _heartbeatId: number = -1;
	ensureHandCursor(): void {
		if (this._currentCursor != ZoomSliderCursor.Move) {
			this._currentCursor = ZoomSliderCursor.Move;
			this.container.rootWrapper.setStyleProperty("cursor", "move");
		}
	}
	ensureUpDownCursor(): void {
		if (this._currentCursor != ZoomSliderCursor.UpDown) {
			this._currentCursor = ZoomSliderCursor.UpDown;
			this.container.rootWrapper.setStyleProperty("cursor", "ns-resize");
		}
	}
	ensureDefaultCursor(): void {
		if (this._currentCursor != ZoomSliderCursor.Default) {
			this._currentCursor = ZoomSliderCursor.Default;
			this.container.rootWrapper.setStyleProperty("cursor", "inherit");
		}
	}
	ensureLeftRightCursor(): void {
		if (this._currentCursor != ZoomSliderCursor.LeftRight) {
			this._currentCursor = ZoomSliderCursor.LeftRight;
			this.container.rootWrapper.setStyleProperty("cursor", "ew-resize");
		}
	}
	measureText(calloutText: TextBlock): Size {
		let height: number = this._currentFontHeight;
		let width: number = this.context.measureTextWidth(calloutText.text);
		return new Size(1, width, height);
	}
	onPixelScalingRatioChanged(): void {
		this._currentPixelRatio = this.model.actualPixelScalingRatio;
		this.makeDirty();
	}
	show(): void {
		if (this.container == null || this.container.rootWrapper == null) {
			return;
		}
		this.container.rootWrapper.show();
	}
	hide(): void {
		if (this.container == null || this.container.rootWrapper == null) {
			return;
		}
		this.container.rootWrapper.hide();
	}
	private static readonly hEARTBEAT_INTERVAL: number = 200;
	private _attached: boolean = true;
	private heartbeat(): void {
		this._heartbeatId = -1;
		if (this.container == null) {
			return;
		}
		if (!this._attached) {
			return;
		}
		this.notifySizeChanged1(false);
		this._heartbeatId = this.container.setTimeout(runOn(this, this.heartbeat), ZoomSliderView.hEARTBEAT_INTERVAL);
	}
}

/**
 * @hidden 
 */
export class ZoomSlider extends Base implements ITrackOwner, INotifyPropertyChanged, IZoomSlider {
	static $t: Type = markType(ZoomSlider, 'ZoomSlider', (<any>Base).$type, [ITrackOwner_$type, INotifyPropertyChanged_$type, IZoomSlider_$type]);
	private _lowerThumb: TrackThumb = null;
	protected get lowerThumb(): TrackThumb {
		return this._lowerThumb;
	}
	protected set lowerThumb(value: TrackThumb) {
		this._lowerThumb = value;
	}
	private _higherThumb: TrackThumb = null;
	protected get higherThumb(): TrackThumb {
		return this._higherThumb;
	}
	protected set higherThumb(value: TrackThumb) {
		this._higherThumb = value;
	}
	private _range: TrackThumbRange = null;
	protected get range(): TrackThumbRange {
		return this._range;
	}
	protected set range(value: TrackThumbRange) {
		this._range = value;
	}
	private _view: ZoomSliderView = null;
	protected get view(): ZoomSliderView {
		return this._view;
	}
	protected set view(value: ZoomSliderView) {
		this._view = value;
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private static readonly panTransitionDurationPropertyName: string = "PanTransitionDuration";
	private _panTransitionDuration: number = 500;
	get panTransitionDuration(): number {
		return this._panTransitionDuration;
	}
	set panTransitionDuration(value: number) {
		let oldValue = this._panTransitionDuration;
		this._panTransitionDuration = value;
		if (oldValue != this._panTransitionDuration) {
			this.onPropertyChanged(ZoomSlider.panTransitionDurationPropertyName, oldValue, this._panTransitionDuration);
		}
	}
	private static readonly maxZoomWidthPropertyName: string = "MaxZoomWidth";
	private _maxZoomWidth: number = 1;
	get maxZoomWidth(): number {
		return this._maxZoomWidth;
	}
	set maxZoomWidth(value: number) {
		let oldValue = this._maxZoomWidth;
		this._maxZoomWidth = value;
		if (oldValue != this._maxZoomWidth) {
			this.onPropertyChanged(ZoomSlider.maxZoomWidthPropertyName, oldValue, this._maxZoomWidth);
		}
	}
	private static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	private _pixelScalingRatio: number = NaN;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		if (oldValue != this._pixelScalingRatio) {
			this.onPropertyChanged(ZoomSlider.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
		}
	}
	private static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	private _actualPixelScalingRatio: number = 1;
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		if (oldValue != this._actualPixelScalingRatio) {
			this.onPropertyChanged(ZoomSlider.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
		}
	}
	resolvingAxisValue: (sender: any, args: ZoomSliderResolvingAxisValueEventArgs) => void = null;
	onViewportChanged(left: number, top: number, width: number, height: number): void {
		this.viewport = new Rect(0, left, top, width, height);
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let insetViewportWidth: number = Math.max(0, this.viewport.width - (this.startInset + this.endInset));
			this.insetViewport = new Rect(0, this.viewport.left + this.startInset, this.viewport.top, insetViewportWidth, this.viewport.height);
			let trackViewportWidth: number = Math.max(0, this.insetViewport.width - (this.trackStartInset + this.trackEndInset));
			this.trackViewport = new Rect(0, this.insetViewport.left + this.trackStartInset, this.insetViewport.top, trackViewportWidth, Math.max(0, this.insetViewport.height - this.barExtent));
		} else {
			this.insetViewport = new Rect(0, this.viewport.left, this.viewport.top + this.startInset, this.viewport.width, this.viewport.height - (this.startInset + this.endInset));
			this.trackViewport = new Rect(0, this.insetViewport.left, this.insetViewport.top + this.trackStartInset, this.insetViewport.width - this.barExtent, this.insetViewport.height - (this.trackStartInset + this.trackEndInset));
		}
		this.trackDirty();
	}
	updateVisuals(): void {
		if (!this._trackDirty) {
			return;
		}
		this._trackDirty = false;
		let lowerThumbVisual = this.view.lowerThumbVisual;
		let higherThumbVisual = this.view.higherThumbVisual;
		let rangeVisual = this.view.rangeVisual;
		let barVisual = this.view.barVisual;
		let lowerShadeVisual = this.view.lowerShadeVisual;
		let higherShadeVisual = this.view.higherShadeVisual;
		if (this.isCustomThumbProvided) {
			let lowerThumb = this.getLowerCustomThumb();
			let higherThumb = this.getHigherCustomThumb();
			this.updateCustomThumbSize(lowerThumb, this.lowerThumb);
			this.updateCustomThumbPosition(higherThumb, this.lowerThumb.position);
			this.updateCustomThumbSize(higherThumb, this.higherThumb);
			this.updateCustomThumbPosition(higherThumb, this.higherThumb.position);
		} else {
			this.updateThumb(lowerThumbVisual, this.lowerThumb);
			this.updateThumb(higherThumbVisual, this.higherThumb);
		}
		if (this.isCustomRangeThumbProvided) {
		} else {
			this.updateRangeThumb(rangeVisual, this.range);
		}
		if (this.isCustomBarProvided) {
		} else {
			this.updateBar(barVisual);
		}
		if (this.isCustomShadeProvided) {
		} else {
			this.updateLowerShade(lowerShadeVisual);
			this.updateHigherShade(higherShadeVisual);
		}
		this.updateWindow();
	}
	private static readonly windowRectPropertyName: string = "WindowRect";
	private _windowRect: Rect = new Rect(0, 0, 0, 1, 1);
	private _ignoreWindowChange: boolean = false;
	private get ignoreWindowChange(): boolean {
		return this._ignoreWindowChange;
	}
	private set ignoreWindowChange(value: boolean) {
		this._ignoreWindowChange = value;
	}
	get windowRect(): Rect {
		return this._windowRect;
	}
	set windowRect(value: Rect) {
		let oldValue = this._windowRect;
		this._windowRect = value;
		if (Rect.l_op_Inequality(oldValue, this._windowRect)) {
			this.onPropertyChanged(ZoomSlider.windowRectPropertyName, oldValue, this._windowRect);
		}
	}
	private updateWindow(): void {
		let currWidth = this.windowRect.width;
		let currHeight = this.windowRect.height;
		let currLeft = this.windowRect.left;
		let currTop = this.windowRect.top;
		let newLeft: number = currLeft;
		let newTop: number = currTop;
		let newWidth: number = currWidth;
		let newHeight: number = currHeight;
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			newLeft = this.lowerThumb.position;
			newWidth = this.range.width;
		} else {
			newTop = this.lowerThumb.position;
			newHeight = this.range.width;
		}
		if (newLeft != currLeft || newTop != currTop || newWidth != currWidth || newHeight != currHeight) {
			this.ignoreWindowChange = true;
			let oldWindow = this.windowRect;
			this.windowRect = new Rect(0, newLeft, newTop, newWidth, newHeight);
			this.onWindowRectChanged(oldWindow, this.windowRect);
			this.ignoreWindowChange = false;
		}
	}
	private _suppressWindowChange: boolean = false;
	private get suppressWindowChange(): boolean {
		return this._suppressWindowChange;
	}
	private set suppressWindowChange(value: boolean) {
		this._suppressWindowChange = value;
	}
	private onWindowRectChanged(oldWindow: Rect, windowRect: Rect): void {
		if (this.suppressWindowChange) {
			return;
		}
		if (this.windowRectChanged != null) {
			this.windowRectChanged(this, new RectChangedEventArgs(oldWindow, windowRect));
		}
	}
	windowRectChanged: (sender: any, e: RectChangedEventArgs) => void = null;
	private _currentHitArea: ZoomSliderVisualArea = <ZoomSliderVisualArea>0;
	private get currentHitArea(): ZoomSliderVisualArea {
		return this._currentHitArea;
	}
	private set currentHitArea(value: ZoomSliderVisualArea) {
		this._currentHitArea = value;
	}
	private _currentDragging: ZoomSliderVisualArea = <ZoomSliderVisualArea>0;
	private get currentDragging(): ZoomSliderVisualArea {
		return this._currentDragging;
	}
	private set currentDragging(value: ZoomSliderVisualArea) {
		this._currentDragging = value;
	}
	private _startDragPosition: Point = null;
	private get startDragPosition(): Point {
		return this._startDragPosition;
	}
	private set startDragPosition(value: Point) {
		this._startDragPosition = value;
	}
	private _lastDragPosition: Point = null;
	private get lastDragPosition(): Point {
		return this._lastDragPosition;
	}
	private set lastDragPosition(value: Point) {
		this._lastDragPosition = value;
	}
	onMouseLeftButtonUp(point: Point, isFinger: boolean): void {
		if (this.currentDragging != ZoomSliderVisualArea.None) {
			this.view.releaseMouseCapture();
		}
		this.currentHitArea = this.getHitArea(point, isFinger);
		this.currentDragging = ZoomSliderVisualArea.None;
		this.dismissHigherTooltip();
		this.dismissLowerTooltip();
	}
	private dismissLowerTooltip(): void {
		this.view.lowerCalloutVisual.isVisible = false;
		this.view.makeDirty();
	}
	private dismissHigherTooltip(): void {
		this.view.higherCalloutVisual.isVisible = false;
		this.view.makeDirty();
	}
	onMouseWheel(point: Point, v: number): void {
		this.currentHitArea = this.getHitArea(point, false);
	}
	onMouseLeftButtonDown(point: Point, isFinger: boolean): boolean {
		this.currentHitArea = this.getHitArea(point, isFinger);
		if (this.currentHitArea == ZoomSliderVisualArea.None) {
			return false;
		}
		this.cancelPanAnimation();
		if (this.isDraggable(this.currentHitArea)) {
			this.startDraggingArea(point, this.currentHitArea);
			this.view.getMouseCapture();
			return true;
		}
		if (this.isClickable(this.currentHitArea)) {
			return this.onAreaClicked(point, this.currentHitArea);
		}
		return false;
	}
	private onAreaClicked(point: Point, area: ZoomSliderVisualArea): boolean {
		switch (area) {
			case ZoomSliderVisualArea.Bar:

			case ZoomSliderVisualArea.LowerShade:

			case ZoomSliderVisualArea.HigherShade:
			this.panToPosition(point);
			return true;

		}

		return false;
	}
	private panToPosition(point: Point): void {
		let targetPosition: number;
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			targetPosition = (point.x - this.trackViewport.left) / this.trackViewport.width;
		} else {
			targetPosition = (point.y - this.trackViewport.top) / this.trackViewport.height;
		}
		if (targetPosition < 0 || targetPosition > 1) {
			return;
		}
		if (targetPosition + (this.range.width / 2) > 1) {
			targetPosition = 1 - (this.range.width / 2);
		}
		if (targetPosition - (this.range.width / 2) < 0) {
			targetPosition = (this.range.width / 2);
		}
		if (this.panTransitionDuration > 0) {
			this.startPanAnimation(targetPosition);
		} else {
			this.range.position = targetPosition;
		}
	}
	private startDraggingArea(point: Point, currentHitArea: ZoomSliderVisualArea): void {
		this.currentDragging = currentHitArea;
		this.startDragPosition = point;
		this.lastDragPosition = point;
	}
	private isDraggable(area: ZoomSliderVisualArea): boolean {
		switch (area) {
			case ZoomSliderVisualArea.LowerThumb:

			case ZoomSliderVisualArea.HigherThumb:

			case ZoomSliderVisualArea.RangeThumb: return true;
		}

		return false;
	}
	private isClickable(area: ZoomSliderVisualArea): boolean {
		switch (area) {
			case ZoomSliderVisualArea.Bar:

			case ZoomSliderVisualArea.LowerShade:

			case ZoomSliderVisualArea.HigherShade: return true;
		}

		return false;
	}
	onMouseMove(point: Point): void {
		this.currentHitArea = this.getHitArea(point, false);
		if (this.currentDragging != ZoomSliderVisualArea.None) {
			if (this.orientation == ZoomSliderOrientation.Horizontal) {
				this.onHorizontalDrag(point);
			} else {
				this.onVerticalDrag(point);
			}
		} else {
			this.ensureCursor();
		}
	}
	private ensureCursor(): void {
		if (this.currentHitArea == ZoomSliderVisualArea.RangeThumb) {
			this.view.ensureHandCursor();
		} else if (this.currentHitArea == ZoomSliderVisualArea.LowerThumb || this.currentHitArea == ZoomSliderVisualArea.HigherThumb) {
			if (this.orientation == ZoomSliderOrientation.Vertical) {
				this.view.ensureUpDownCursor();
			} else {
				this.view.ensureLeftRightCursor();
			}
		} else {
			this.view.ensureDefaultCursor();
		}
	}
	private onVerticalDrag(point: Point): void {
		let deltaY = point.y - this.lastDragPosition.y;
		deltaY = deltaY / this.trackViewport.height;
		this.lastDragPosition = point;
		switch (this.currentDragging) {
			case ZoomSliderVisualArea.LowerThumb:
			this.lowerThumb.push(deltaY);
			this.updateLowerThumbTooltip(this.lowerThumb);
			this.flush();
			break;

			case ZoomSliderVisualArea.HigherThumb:
			this.higherThumb.push(deltaY);
			this.updateHigherThumbTooltip(this.higherThumb);
			this.flush();
			break;

			case ZoomSliderVisualArea.RangeThumb:
			this.range.push(deltaY);
			this.updateLowerThumbTooltip(this.lowerThumb);
			this.updateHigherThumbTooltip(this.higherThumb);
			this.flush();
			break;

		}

	}
	private updateHigherThumbTooltip(higherThumb: TrackThumb): void {
		let position: number;
		let pixelPosition: number;
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			position = higherThumb.position;
			pixelPosition = higherThumb.position * this.trackViewport.width + this.trackViewport.left;
			if (this.areThumbCalloutsEnabled) {
				let data: any = position;
				if (this.resolvingAxisValue != null) {
					let args = ((() => {
						let $ret = new ZoomSliderResolvingAxisValueEventArgs();
						$ret.position = position;
						$ret.value = data;
						return $ret;
					})());
					this.resolvingAxisValue(this, args);
					data = args.value;
				}
				this.showOrUpdateHigherTooltip(pixelPosition, this.trackViewport.top, data);
			}
		} else {
			position = higherThumb.position;
			pixelPosition = higherThumb.position * this.trackViewport.height + this.trackViewport.top;
			if (this.areThumbCalloutsEnabled) {
				let data1: any = position;
				if (this.resolvingAxisValue != null) {
					let args1 = ((() => {
						let $ret = new ZoomSliderResolvingAxisValueEventArgs();
						$ret.position = position;
						$ret.value = data1;
						return $ret;
					})());
					this.resolvingAxisValue(this, args1);
					data1 = args1.value;
				}
				this.showOrUpdateHigherTooltip(pixelPosition, this.trackViewport.top, data1);
			}
		}
	}
	private showOrUpdateHigherTooltip(pixelPosition: number, top: number, data: any): void {
		let higherCallout = this.view.higherCalloutVisual;
		higherCallout.isVisible = true;
		let text = "";
		if (data != null) {
			text = data.toString();
		}
		this.view.updateTextBlock(higherCallout.calloutText, text, this.getCalloutFontInfo());
		let size: Size = this.view.measureText(higherCallout.calloutText);
		let calloutMargin = this.getCalloutMargin();
		size = new Size(1, size.width + calloutMargin.left + calloutMargin.right, size.height + calloutMargin.top + calloutMargin.bottom);
		let position: number = this.higherThumb.position * this.trackViewport.width + this.trackViewport.left;
		let lowerPosition: number = this.lowerThumb.position * this.trackViewport.width + this.trackViewport.left;
		let toolPosition: number = 0;
		let toolYPosition: number = 0;
		if ((this.viewport.right - position) <= size.width) {
			toolPosition = position - size.width;
		} else {
			toolPosition = position;
		}
		if (toolPosition < lowerPosition) {
			toolYPosition = this.trackViewport.top;
		} else {
			toolYPosition = this.trackViewport.bottom - size.height;
		}
		higherCallout.width = size.width;
		higherCallout.height = size.height;
		higherCallout.translateX = toolPosition;
		higherCallout.translateY = toolYPosition;
		higherCallout.textTranslateX = toolPosition + calloutMargin.left;
		higherCallout.textTranslateY = toolYPosition + calloutMargin.top;
	}
	private updateLowerThumbTooltip(lowerThumb: TrackThumb): void {
		let position: number;
		let pixelPosition: number;
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			position = lowerThumb.position;
			pixelPosition = lowerThumb.position * this.trackViewport.width + this.trackViewport.left;
			if (this.areThumbCalloutsEnabled) {
				let data: any = position;
				if (this.resolvingAxisValue != null) {
					let args = ((() => {
						let $ret = new ZoomSliderResolvingAxisValueEventArgs();
						$ret.position = position;
						$ret.value = data;
						return $ret;
					})());
					this.resolvingAxisValue(this, args);
					data = args.value;
				}
				this.showOrUpdateLowerTooltip(pixelPosition, this.trackViewport.top, data);
			}
		} else {
			position = lowerThumb.position;
			pixelPosition = lowerThumb.position * this.trackViewport.height + this.trackViewport.top;
			if (this.areThumbCalloutsEnabled) {
				let data1: any = position;
				if (this.resolvingAxisValue != null) {
					let args1 = ((() => {
						let $ret = new ZoomSliderResolvingAxisValueEventArgs();
						$ret.position = position;
						$ret.value = data1;
						return $ret;
					})());
					this.resolvingAxisValue(this, args1);
					data1 = args1.value;
				}
				this.showOrUpdateLowerTooltip(pixelPosition, this.trackViewport.top, data1);
			}
		}
	}
	private _defaultCalloutMargin: Thickness = new Thickness(1, 5, 5, 5, 5);
	private getCalloutMargin(): Thickness {
		return this._defaultCalloutMargin;
	}
	private showOrUpdateLowerTooltip(pixelPosition: number, top: number, data: any): void {
		let lowerCallout = this.view.lowerCalloutVisual;
		lowerCallout.isVisible = true;
		let text = "";
		if (data != null) {
			text = data.toString();
		}
		this.view.updateTextBlock(lowerCallout.calloutText, text, this.getCalloutFontInfo());
		let size: Size = this.view.measureText(lowerCallout.calloutText);
		let calloutMargin = this.getCalloutMargin();
		size = new Size(1, size.width + calloutMargin.left + calloutMargin.right, size.height + calloutMargin.top + calloutMargin.bottom);
		let position: number = this.lowerThumb.position * this.trackViewport.width + this.trackViewport.left;
		let higherPosition: number = this.higherThumb.position * this.trackViewport.width + this.trackViewport.left;
		let toolPosition: number = 0;
		let toolYPosition: number = 0;
		if (position >= size.width) {
			toolPosition = position - size.width;
		} else {
			toolPosition = position;
		}
		if (toolPosition > higherPosition) {
			toolYPosition = this.trackViewport.top;
		} else {
			toolYPosition = this.trackViewport.bottom - size.height;
		}
		lowerCallout.width = size.width;
		lowerCallout.height = size.height;
		lowerCallout.translateX = toolPosition;
		lowerCallout.translateY = toolYPosition;
		lowerCallout.textTranslateX = toolPosition + calloutMargin.left;
		lowerCallout.textTranslateY = toolYPosition + calloutMargin.top;
	}
	private getCalloutFontInfo(): FontInfo {
		if (this.thumbCalloutTextStyle != null) {
			return this.thumbCalloutTextStyle;
		}
		return this.defaultThumbCalloutTextStyle;
	}
	private onHorizontalDrag(point: Point): void {
		let deltaX = point.x - this.lastDragPosition.x;
		this.lastDragPosition = point;
		deltaX = deltaX / this.trackViewport.width;
		switch (this.currentDragging) {
			case ZoomSliderVisualArea.LowerThumb:
			this.lowerThumb.push(deltaX);
			this.updateLowerThumbTooltip(this.lowerThumb);
			this.flush();
			break;

			case ZoomSliderVisualArea.HigherThumb:
			this.higherThumb.push(deltaX);
			this.updateHigherThumbTooltip(this.higherThumb);
			this.flush();
			break;

			case ZoomSliderVisualArea.RangeThumb:
			this.range.push(deltaX);
			this.updateLowerThumbTooltip(this.lowerThumb);
			this.updateHigherThumbTooltip(this.higherThumb);
			this.flush();
			break;

		}

	}
	onMouseEnter(point: Point): void {
		this.currentHitArea = this.getHitArea(point, false);
	}
	onMouseLeave(point: Point): void {
		this.currentHitArea = this.getHitArea(point, false);
	}
	getHitArea(point: Point, isFinger: boolean): ZoomSliderVisualArea {
		if (this.checkThumbHit(point, this.lowerThumb, this.view.lowerThumbVisual, isFinger)) {
			return ZoomSliderVisualArea.LowerThumb;
		}
		if (this.checkThumbHit(point, this.higherThumb, this.view.higherThumbVisual, isFinger)) {
			return ZoomSliderVisualArea.HigherThumb;
		}
		if (this.checkRangeHit(point, this.range, this.view.rangeVisual)) {
			return ZoomSliderVisualArea.RangeThumb;
		}
		if (this.checkLowerShadeHit(point, this.lowerThumb)) {
			return ZoomSliderVisualArea.LowerShade;
		}
		if (this.checkHigherShadeHit(point, this.higherThumb)) {
			return ZoomSliderVisualArea.HigherShade;
		}
		if (this.checkBarHit(point)) {
			return ZoomSliderVisualArea.Bar;
		}
		return ZoomSliderVisualArea.None;
	}
	private checkBarHit(point: Point): boolean {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			if (point.y > this.trackViewport.bottom && point.x >= this.trackViewport.left && point.x <= this.trackViewport.right && point.y <= this.insetViewport.bottom) {
				return true;
			}
		} else {
			if (point.x > this.trackViewport.right && point.y >= this.trackViewport.top && point.y <= this.trackViewport.bottom && point.x <= this.insetViewport.right) {
				return true;
			}
		}
		return false;
	}
	private checkRangeHit(point: Point, range: TrackThumbRange, visualRange: ITrackRangeVisual): boolean {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let rangeCenter = (range.position) * this.trackViewport.width + this.trackViewport.left;
			let rangeLeft = rangeCenter - visualRange.width / 2;
			let rangeRight = rangeCenter + visualRange.width / 2;
			if (point.y >= this.insetViewport.top && point.y <= this.insetViewport.bottom && point.x >= rangeLeft && point.x <= rangeRight) {
				return true;
			}
		} else {
			let rangeCenter1 = (range.position) * this.trackViewport.height + this.trackViewport.top;
			let rangeTop = rangeCenter1 - visualRange.height / 2;
			let rangeBottom = rangeCenter1 + visualRange.height / 2;
			if (point.x >= this.insetViewport.left && point.x <= this.insetViewport.right && point.y >= rangeTop && point.y <= rangeBottom) {
				return true;
			}
		}
		return false;
	}
	private checkLowerShadeHit(point: Point, thumb: TrackThumb): boolean {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let thumbCenterX = thumb.position * this.trackViewport.width + this.trackViewport.left;
			if (point.y >= this.insetViewport.top && point.x >= this.insetViewport.left && point.x <= this.insetViewport.right && point.x <= thumbCenterX && point.y <= this.trackViewport.bottom) {
				return true;
			}
		} else {
			let thumbCenterY = thumb.position * this.trackViewport.height + this.trackViewport.top;
			if (point.y >= this.insetViewport.top && point.x >= this.insetViewport.left && point.x <= this.insetViewport.right && point.y <= thumbCenterY && point.x <= this.trackViewport.right) {
				return true;
			}
		}
		return false;
	}
	private checkHigherShadeHit(point: Point, thumb: TrackThumb): boolean {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let thumbCenterX = thumb.position * this.trackViewport.width + this.trackViewport.left;
			if (point.y >= this.insetViewport.top && point.x >= this.insetViewport.left && point.x <= this.insetViewport.right && point.x >= thumbCenterX && point.y <= this.trackViewport.bottom) {
				return true;
			}
		} else {
			let thumbCenterY = thumb.position * this.trackViewport.height + this.trackViewport.top;
			if (point.y >= this.insetViewport.top && point.y <= this.insetViewport.bottom && point.x >= this.insetViewport.left && point.x <= this.insetViewport.right && point.y >= thumbCenterY && point.x <= this.trackViewport.right) {
				return true;
			}
		}
		return false;
	}
	private checkThumbHit(point: Point, thumb: TrackThumb, thumbVisual: ITrackThumbVisual, isFinger: boolean): boolean {
		let thumbFingerHitSize = 40;
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let thumbCenterX = thumb.position * this.trackViewport.width + this.trackViewport.left;
			let thumbCenterY = this.trackViewport.top + this.trackViewport.height / 2;
			let thumbRect = new Rect(0, thumbCenterX - thumbVisual.width / 2, thumbCenterY - thumbVisual.height / 2, thumbVisual.width, thumbVisual.height);
			if (isFinger) {
				if (thumbRect.width < thumbFingerHitSize) {
					thumbRect.inflate((thumbFingerHitSize - thumbRect.width) / 2, 0);
				}
				if (thumbRect.height < thumbFingerHitSize) {
					thumbRect.inflate(0, (thumbFingerHitSize - thumbRect.height) / 2);
				}
			}
			if (thumbRect.containsPoint(point)) {
				return true;
			}
		} else {
			let thumbCenterY1 = thumb.position * this.trackViewport.height + this.trackViewport.top;
			let thumbCenterX1 = this.trackViewport.left + this.trackViewport.width / 2;
			let thumbRect1 = new Rect(0, thumbCenterX1 - thumbVisual.width / 2, thumbCenterY1 - thumbVisual.height / 2, thumbVisual.width, thumbVisual.height);
			if (isFinger) {
				if (thumbRect1.width < thumbFingerHitSize) {
					thumbRect1.inflate((thumbFingerHitSize - thumbRect1.width) / 2, 0);
				}
				if (thumbRect1.height < thumbFingerHitSize) {
					thumbRect1.inflate(0, (thumbFingerHitSize - thumbRect1.height) / 2);
				}
			}
			if (thumbRect1.containsPoint(point)) {
				return true;
			}
		}
		return false;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _insetViewport: Rect = null;
	get insetViewport(): Rect {
		return this._insetViewport;
	}
	set insetViewport(value: Rect) {
		this._insetViewport = value;
	}
	private _trackViewport: Rect = null;
	get trackViewport(): Rect {
		return this._trackViewport;
	}
	set trackViewport(value: Rect) {
		this._trackViewport = value;
	}
	private updateRangeThumb(rangeVisual: ITrackRangeVisual, range: TrackThumbRange): void {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			rangeVisual.orientation = this.orientation;
			rangeVisual.width = Math.max(15, this.trackViewport.width * range.width);
			rangeVisual.height = this.barExtent;
			rangeVisual.translateX = (this.trackViewport.left + this.trackViewport.width * range.position);
			rangeVisual.translateY = this.trackViewport.bottom + this.barExtent / 2;
		} else {
			rangeVisual.orientation = this.orientation;
			rangeVisual.height = Math.max(15, this.trackViewport.height * range.width);
			rangeVisual.width = this.barExtent;
			rangeVisual.translateY = (this.trackViewport.top + this.trackViewport.height * range.position);
			rangeVisual.translateX = this.trackViewport.right + this.barExtent / 2;
		}
	}
	private updateHigherShade(higherShadeVisual: ITrackShadeVisual): void {
		let position = this.higherThumb.position;
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let leftPosition = this.trackViewport.left + position * this.trackViewport.width;
			higherShadeVisual.height = this.trackViewport.height;
			higherShadeVisual.translateX = leftPosition + (this.insetViewport.right - leftPosition) / 2;
			higherShadeVisual.translateY = this.trackViewport.top + this.trackViewport.height / 2;
			higherShadeVisual.width = (this.insetViewport.right - leftPosition);
			higherShadeVisual.orientation = TrackShadeOrientation.HorizontalHigher;
		} else {
			let topPosition = this.trackViewport.top + position * this.trackViewport.height;
			higherShadeVisual.width = this.trackViewport.width;
			higherShadeVisual.translateY = topPosition + (this.insetViewport.bottom - topPosition) / 2;
			higherShadeVisual.translateX = this.insetViewport.left + this.trackViewport.width / 2;
			higherShadeVisual.height = (this.insetViewport.bottom - topPosition);
			higherShadeVisual.orientation = TrackShadeOrientation.VerticalHigher;
		}
	}
	private updateLowerShade(lowerShadeVisual: ITrackShadeVisual): void {
		let position = this.lowerThumb.position;
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			let rightPosition = this.trackViewport.left + position * this.trackViewport.width;
			lowerShadeVisual.height = this.trackViewport.height;
			lowerShadeVisual.translateX = rightPosition - (rightPosition - this.insetViewport.left) / 2;
			lowerShadeVisual.translateY = this.trackViewport.top + this.trackViewport.height / 2;
			lowerShadeVisual.width = rightPosition - this.insetViewport.left;
			lowerShadeVisual.orientation = TrackShadeOrientation.HorizontalLower;
		} else {
			let bottomPosition = this.trackViewport.top + position * this.trackViewport.height;
			lowerShadeVisual.width = this.trackViewport.width;
			lowerShadeVisual.translateY = bottomPosition - (bottomPosition - this.insetViewport.top) / 2;
			lowerShadeVisual.translateX = this.insetViewport.left + this.trackViewport.width / 2;
			lowerShadeVisual.height = bottomPosition - this.insetViewport.top;
			lowerShadeVisual.orientation = TrackShadeOrientation.VerticalLower;
		}
	}
	private updateBar(barVisual: ITrackBarVisual): void {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			barVisual.height = this.barExtent;
			barVisual.width = this.trackViewport.width;
			barVisual.translateX = this.trackViewport.left + this.trackViewport.width / 2;
			barVisual.translateY = this.insetViewport.bottom - this.barExtent / 2;
		} else {
			barVisual.width = this.barExtent;
			barVisual.height = this.trackViewport.height;
			barVisual.translateY = this.trackViewport.top + this.trackViewport.height / 2;
			barVisual.translateX = this.insetViewport.right - this.barExtent / 2;
		}
	}
	private updateThumb(thumbVisual: ITrackThumbVisual, thumb: TrackThumb): void {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			thumbVisual.orientation = this.orientation;
			thumbVisual.translateX = this.trackViewport.left + this.trackViewport.width * thumb.position;
			thumbVisual.translateY = this.trackViewport.top + this.trackViewport.height / 2;
		} else {
			thumbVisual.orientation = this.orientation;
			thumbVisual.translateY = this.trackViewport.top + this.trackViewport.height * thumb.position;
			thumbVisual.translateX = this.trackViewport.left + this.trackViewport.width / 2;
		}
	}
	private updateCustomThumbSize(thumbVisual: any, thumb: TrackThumb): void {
	}
	private updateCustomThumbPosition(thumbVisual: any, position: number): void {
	}
	private getHigherCustomThumb(): any {
		throw new NotImplementedException(0);
	}
	private getLowerCustomThumb(): any {
		throw new NotImplementedException(0);
	}
	private static readonly minZoomWidthPropertyName: string = "MinZoomWidth";
	private _minZoomWidth: number = 1E-05;
	get minZoomWidth(): number {
		return this._minZoomWidth;
	}
	set minZoomWidth(value: number) {
		let oldValue = this._minZoomWidth;
		this._minZoomWidth = value;
		if (oldValue != this._minZoomWidth) {
			this.onPropertyChanged(ZoomSlider.minZoomWidthPropertyName, oldValue, this._minZoomWidth);
		}
	}
	private static readonly startInsetPropertyName: string = "StartInset";
	private _startInset: number = 0;
	get startInset(): number {
		return this._startInset;
	}
	set startInset(value: number) {
		let oldValue = this._startInset;
		this._startInset = value;
		if (oldValue != this._startInset) {
			this.onPropertyChanged(ZoomSlider.startInsetPropertyName, oldValue, this._startInset);
		}
	}
	private static readonly endInsetPropertyName: string = "EndInset";
	private _endInset: number = 0;
	get endInset(): number {
		return this._endInset;
	}
	set endInset(value: number) {
		let oldValue = this._endInset;
		this._endInset = value;
		if (oldValue != this._endInset) {
			this.onPropertyChanged(ZoomSlider.endInsetPropertyName, oldValue, this._endInset);
		}
	}
	private static readonly trackStartInsetPropertyName: string = "TrackStartInset";
	private _trackStartInset: number = 5;
	get trackStartInset(): number {
		return this._trackStartInset;
	}
	set trackStartInset(value: number) {
		let oldValue = this._trackStartInset;
		this._trackStartInset = value;
		if (oldValue != this._trackStartInset) {
			this.onPropertyChanged(ZoomSlider.trackStartInsetPropertyName, oldValue, this._trackStartInset);
		}
	}
	private static readonly trackEndInsetPropertyName: string = "TrackEndInset";
	private _trackEndInset: number = 5;
	get trackEndInset(): number {
		return this._trackEndInset;
	}
	set trackEndInset(value: number) {
		let oldValue = this._trackEndInset;
		this._trackEndInset = value;
		if (oldValue != this._trackEndInset) {
			this.onPropertyChanged(ZoomSlider.trackEndInsetPropertyName, oldValue, this._trackEndInset);
		}
	}
	private static readonly barExtentPropertyName: string = "BarExtent";
	private _barExtent: number = 16;
	get barExtent(): number {
		return this._barExtent;
	}
	set barExtent(value: number) {
		let oldValue = this._barExtent;
		this._barExtent = value;
		if (oldValue != this._barExtent) {
			this.onPropertyChanged(ZoomSlider.barExtentPropertyName, oldValue, this._barExtent);
		}
	}
	private static readonly orientationPropertyName: string = "Orientation";
	private _orientation: ZoomSliderOrientation = ZoomSliderOrientation.Horizontal;
	get orientation(): ZoomSliderOrientation {
		return this._orientation;
	}
	set orientation(value: ZoomSliderOrientation) {
		let oldValue = this._orientation;
		this._orientation = value;
		if (oldValue != this._orientation) {
			this.onPropertyChanged(ZoomSlider.orientationPropertyName, enumGetBox<ZoomSliderOrientation>(ZoomSliderOrientation_$type, oldValue), enumGetBox<ZoomSliderOrientation>(ZoomSliderOrientation_$type, this._orientation));
		}
	}
	private static readonly lowerThumbBrushPropertyName: string = "LowerThumbBrush";
	private _lowerThumbBrush: Brush = null;
	get lowerThumbBrush(): Brush {
		return this._lowerThumbBrush;
	}
	set lowerThumbBrush(value: Brush) {
		let oldValue = this._lowerThumbBrush;
		this._lowerThumbBrush = value;
		if (oldValue != this._lowerThumbBrush) {
			this.onPropertyChanged(ZoomSlider.lowerThumbBrushPropertyName, oldValue, this._lowerThumbBrush);
		}
	}
	private static readonly lowerThumbStrokeThicknessPropertyName: string = "LowerThumbStrokeThickness";
	private _lowerThumbStrokeThickness: number = 1;
	get lowerThumbStrokeThickness(): number {
		return this._lowerThumbStrokeThickness;
	}
	set lowerThumbStrokeThickness(value: number) {
		let oldValue = this._lowerThumbStrokeThickness;
		this._lowerThumbStrokeThickness = value;
		if (oldValue != this._lowerThumbStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.lowerThumbStrokeThicknessPropertyName, oldValue, this._lowerThumbStrokeThickness);
		}
	}
	private static readonly higherThumbStrokeThicknessPropertyName: string = "HigherThumbStrokeThickness";
	private _higherThumbStrokeThickness: number = 1;
	get higherThumbStrokeThickness(): number {
		return this._higherThumbStrokeThickness;
	}
	set higherThumbStrokeThickness(value: number) {
		let oldValue = this._higherThumbStrokeThickness;
		this._higherThumbStrokeThickness = value;
		if (oldValue != this._higherThumbStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.higherThumbStrokeThicknessPropertyName, oldValue, this._higherThumbStrokeThickness);
		}
	}
	private static readonly higherThumbBrushPropertyName: string = "HigherThumbBrush";
	private _higherThumbBrush: Brush = null;
	get higherThumbBrush(): Brush {
		return this._higherThumbBrush;
	}
	set higherThumbBrush(value: Brush) {
		let oldValue = this._higherThumbBrush;
		this._higherThumbBrush = value;
		if (oldValue != this._higherThumbBrush) {
			this.onPropertyChanged(ZoomSlider.higherThumbBrushPropertyName, oldValue, this._higherThumbBrush);
		}
	}
	private static readonly lowerThumbOutlinePropertyName: string = "LowerThumbOutline";
	private _lowerThumbOutline: Brush = null;
	get lowerThumbOutline(): Brush {
		return this._lowerThumbOutline;
	}
	set lowerThumbOutline(value: Brush) {
		let oldValue = this._lowerThumbOutline;
		this._lowerThumbOutline = value;
		if (oldValue != this._lowerThumbOutline) {
			this.onPropertyChanged(ZoomSlider.lowerThumbOutlinePropertyName, oldValue, this._lowerThumbOutline);
		}
	}
	private static readonly higherThumbOutlinePropertyName: string = "HigherThumbOutline";
	private _higherThumbOutline: Brush = null;
	get higherThumbOutline(): Brush {
		return this._higherThumbOutline;
	}
	set higherThumbOutline(value: Brush) {
		let oldValue = this._higherThumbOutline;
		this._higherThumbOutline = value;
		if (oldValue != this._higherThumbOutline) {
			this.onPropertyChanged(ZoomSlider.higherThumbOutlinePropertyName, oldValue, this._higherThumbOutline);
		}
	}
	private static readonly lowerThumbRidgesBrushPropertyName: string = "LowerThumbRidgesBrush";
	private _lowerThumbRidgesBrush: Brush = null;
	get lowerThumbRidgesBrush(): Brush {
		return this._lowerThumbRidgesBrush;
	}
	set lowerThumbRidgesBrush(value: Brush) {
		let oldValue = this._lowerThumbRidgesBrush;
		this._lowerThumbRidgesBrush = value;
		if (oldValue != this._lowerThumbRidgesBrush) {
			this.onPropertyChanged(ZoomSlider.lowerThumbRidgesBrushPropertyName, oldValue, this._lowerThumbRidgesBrush);
		}
	}
	private static readonly higherThumbRidgesBrushPropertyName: string = "HigherThumbRidgesBrush";
	private _higherThumbRidgesBrush: Brush = null;
	get higherThumbRidgesBrush(): Brush {
		return this._higherThumbRidgesBrush;
	}
	set higherThumbRidgesBrush(value: Brush) {
		let oldValue = this._higherThumbRidgesBrush;
		this._higherThumbRidgesBrush = value;
		if (oldValue != this._higherThumbRidgesBrush) {
			this.onPropertyChanged(ZoomSlider.higherThumbRidgesBrushPropertyName, oldValue, this._higherThumbRidgesBrush);
		}
	}
	private static readonly lowerThumbWidthPropertyName: string = "LowerThumbWidth";
	private _lowerThumbWidth: number = 10;
	get lowerThumbWidth(): number {
		return this._lowerThumbWidth;
	}
	set lowerThumbWidth(value: number) {
		let oldValue = this._lowerThumbWidth;
		this._lowerThumbWidth = value;
		if (oldValue != this._lowerThumbWidth) {
			this.onPropertyChanged(ZoomSlider.lowerThumbWidthPropertyName, oldValue, this._lowerThumbWidth);
		}
	}
	private static readonly higherThumbWidthPropertyName: string = "HigherThumbWidth";
	private _higherThumbWidth: number = 10;
	get higherThumbWidth(): number {
		return this._higherThumbWidth;
	}
	set higherThumbWidth(value: number) {
		let oldValue = this._higherThumbWidth;
		this._higherThumbWidth = value;
		if (oldValue != this._higherThumbWidth) {
			this.onPropertyChanged(ZoomSlider.higherThumbWidthPropertyName, oldValue, this._higherThumbWidth);
		}
	}
	private static readonly lowerThumbHeightPropertyName: string = "LowerThumbHeight";
	private _lowerThumbHeight: number = 22;
	get lowerThumbHeight(): number {
		return this._lowerThumbHeight;
	}
	set lowerThumbHeight(value: number) {
		let oldValue = this._lowerThumbHeight;
		this._lowerThumbHeight = value;
		if (oldValue != this._lowerThumbHeight) {
			this.onPropertyChanged(ZoomSlider.lowerThumbHeightPropertyName, oldValue, this._lowerThumbHeight);
		}
	}
	private static readonly higherThumbHeightPropertyName: string = "HigherThumbHeight";
	private _higherThumbHeight: number = 22;
	get higherThumbHeight(): number {
		return this._higherThumbHeight;
	}
	set higherThumbHeight(value: number) {
		let oldValue = this._higherThumbHeight;
		this._higherThumbHeight = value;
		if (oldValue != this._higherThumbHeight) {
			this.onPropertyChanged(ZoomSlider.higherThumbHeightPropertyName, oldValue, this._higherThumbHeight);
		}
	}
	private static readonly lowerShadeBrushPropertyName: string = "LowerShadeBrush";
	private _lowerShadeBrush: Brush = null;
	get lowerShadeBrush(): Brush {
		return this._lowerShadeBrush;
	}
	set lowerShadeBrush(value: Brush) {
		let oldValue = this._lowerShadeBrush;
		this._lowerShadeBrush = value;
		if (oldValue != this._lowerShadeBrush) {
			this.onPropertyChanged(ZoomSlider.lowerShadeBrushPropertyName, oldValue, this._lowerShadeBrush);
		}
	}
	private static readonly lowerShadeOutlinePropertyName: string = "LowerShadeOutline";
	private _lowerShadeOutline: Brush = null;
	get lowerShadeOutline(): Brush {
		return this._lowerShadeOutline;
	}
	set lowerShadeOutline(value: Brush) {
		let oldValue = this._lowerShadeOutline;
		this._lowerShadeOutline = value;
		if (oldValue != this._lowerShadeOutline) {
			this.onPropertyChanged(ZoomSlider.lowerShadeOutlinePropertyName, oldValue, this._lowerShadeOutline);
		}
	}
	destroy(): void {
		this.provideContainer(null);
	}
	private static readonly lowerShadeStrokeThicknessPropertyName: string = "LowerShadeStrokeThickness";
	private _lowerShadeStrokeThickness: number = 1;
	get lowerShadeStrokeThickness(): number {
		return this._lowerShadeStrokeThickness;
	}
	set lowerShadeStrokeThickness(value: number) {
		let oldValue = this._lowerShadeStrokeThickness;
		this._lowerShadeStrokeThickness = value;
		if (oldValue != this._lowerShadeStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.lowerShadeStrokeThicknessPropertyName, oldValue, this._lowerShadeStrokeThickness);
		}
	}
	private static readonly higherShadeBrushPropertyName: string = "HigherShadeBrush";
	private _higherShadeBrush: Brush = null;
	get higherShadeBrush(): Brush {
		return this._higherShadeBrush;
	}
	set higherShadeBrush(value: Brush) {
		let oldValue = this._higherShadeBrush;
		this._higherShadeBrush = value;
		if (oldValue != this._higherShadeBrush) {
			this.onPropertyChanged(ZoomSlider.higherShadeBrushPropertyName, oldValue, this._higherShadeBrush);
		}
	}
	private static readonly higherShadeOutlinePropertyName: string = "HigherShadeOutline";
	private _higherShadeOutline: Brush = null;
	get higherShadeOutline(): Brush {
		return this._higherShadeOutline;
	}
	set higherShadeOutline(value: Brush) {
		let oldValue = this._higherShadeOutline;
		this._higherShadeOutline = value;
		if (oldValue != this._higherShadeOutline) {
			this.onPropertyChanged(ZoomSlider.higherShadeOutlinePropertyName, oldValue, this._higherShadeOutline);
		}
	}
	private static readonly higherShadeStrokeThicknessPropertyName: string = "HigherShadeStrokeThickness";
	private _higherShadeStrokeThickness: number = 1;
	get higherShadeStrokeThickness(): number {
		return this._higherShadeStrokeThickness;
	}
	set higherShadeStrokeThickness(value: number) {
		let oldValue = this._higherShadeStrokeThickness;
		this._higherShadeStrokeThickness = value;
		if (oldValue != this._higherShadeStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.higherShadeStrokeThicknessPropertyName, oldValue, this._higherShadeStrokeThickness);
		}
	}
	private static readonly barBrushPropertyName: string = "BarBrush";
	private _barBrush: Brush = null;
	get barBrush(): Brush {
		return this._barBrush;
	}
	set barBrush(value: Brush) {
		let oldValue = this._barBrush;
		this._barBrush = value;
		if (oldValue != this._barBrush) {
			this.onPropertyChanged(ZoomSlider.barBrushPropertyName, oldValue, this._barBrush);
		}
	}
	private static readonly barOutlinePropertyName: string = "BarOutline";
	private _barOutline: Brush = null;
	get barOutline(): Brush {
		return this._barOutline;
	}
	set barOutline(value: Brush) {
		let oldValue = this._barOutline;
		this._barOutline = value;
		if (oldValue != this._barOutline) {
			this.onPropertyChanged(ZoomSlider.barOutlinePropertyName, oldValue, this._barOutline);
		}
	}
	private static readonly barStrokeThicknessPropertyName: string = "BarStrokeThickness";
	private _barStrokeThickness: number = 0;
	get barStrokeThickness(): number {
		return this._barStrokeThickness;
	}
	set barStrokeThickness(value: number) {
		let oldValue = this._barStrokeThickness;
		this._barStrokeThickness = value;
		if (oldValue != this._barStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.barStrokeThicknessPropertyName, oldValue, this._barStrokeThickness);
		}
	}
	private static readonly rangeThumbBrushPropertyName: string = "RangeThumbBrush";
	private _rangeThumbBrush: Brush = null;
	get rangeThumbBrush(): Brush {
		return this._rangeThumbBrush;
	}
	set rangeThumbBrush(value: Brush) {
		let oldValue = this._rangeThumbBrush;
		this._rangeThumbBrush = value;
		if (oldValue != this._rangeThumbBrush) {
			this.onPropertyChanged(ZoomSlider.rangeThumbBrushPropertyName, oldValue, this._rangeThumbBrush);
		}
	}
	private static readonly rangeThumbOutlinePropertyName: string = "RangeThumbOutline";
	private _rangeThumbOutline: Brush = null;
	get rangeThumbOutline(): Brush {
		return this._rangeThumbOutline;
	}
	set rangeThumbOutline(value: Brush) {
		let oldValue = this._rangeThumbOutline;
		this._rangeThumbOutline = value;
		if (oldValue != this._rangeThumbOutline) {
			this.onPropertyChanged(ZoomSlider.rangeThumbOutlinePropertyName, oldValue, this._rangeThumbOutline);
		}
	}
	private static readonly rangeThumbStrokeThicknessPropertyName: string = "RangeThumbStrokeThickness";
	private _rangeThumbStrokeThickness: number = 1;
	get rangeThumbStrokeThickness(): number {
		return this._rangeThumbStrokeThickness;
	}
	set rangeThumbStrokeThickness(value: number) {
		let oldValue = this._rangeThumbStrokeThickness;
		this._rangeThumbStrokeThickness = value;
		if (oldValue != this._rangeThumbStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.rangeThumbStrokeThicknessPropertyName, oldValue, this._rangeThumbStrokeThickness);
		}
	}
	private static readonly rangeThumbRidgesBrushPropertyName: string = "RangeThumbRidgesBrush";
	private _rangeThumbRidgesBrush: Brush = null;
	get rangeThumbRidgesBrush(): Brush {
		return this._rangeThumbRidgesBrush;
	}
	set rangeThumbRidgesBrush(value: Brush) {
		let oldValue = this._rangeThumbRidgesBrush;
		this._rangeThumbRidgesBrush = value;
		if (oldValue != this._rangeThumbRidgesBrush) {
			this.onPropertyChanged(ZoomSlider.rangeThumbRidgesBrushPropertyName, oldValue, this._rangeThumbRidgesBrush);
		}
	}
	private static readonly lowerCalloutBrushPropertyName: string = "LowerCalloutBrush";
	private _lowerCalloutBrush: Brush = null;
	get lowerCalloutBrush(): Brush {
		return this._lowerCalloutBrush;
	}
	set lowerCalloutBrush(value: Brush) {
		let oldValue = this._lowerCalloutBrush;
		this._lowerCalloutBrush = value;
		if (oldValue != this._lowerCalloutBrush) {
			this.onPropertyChanged(ZoomSlider.lowerCalloutBrushPropertyName, oldValue, this._lowerCalloutBrush);
		}
	}
	private static readonly lowerCalloutTextColorPropertyName: string = "LowerCalloutTextColor";
	private _lowerCalloutTextColor: Brush = null;
	get lowerCalloutTextColor(): Brush {
		return this._lowerCalloutTextColor;
	}
	set lowerCalloutTextColor(value: Brush) {
		let oldValue = this._lowerCalloutTextColor;
		this._lowerCalloutTextColor = value;
		if (oldValue != this._lowerCalloutTextColor) {
			this.onPropertyChanged(ZoomSlider.lowerCalloutTextColorPropertyName, oldValue, this._lowerCalloutTextColor);
		}
	}
	private static readonly lowerCalloutOutlinePropertyName: string = "LowerCalloutOutline";
	private _lowerCalloutOutline: Brush = null;
	get lowerCalloutOutline(): Brush {
		return this._lowerCalloutOutline;
	}
	set lowerCalloutOutline(value: Brush) {
		let oldValue = this._lowerCalloutOutline;
		this._lowerCalloutOutline = value;
		if (oldValue != this._lowerCalloutOutline) {
			this.onPropertyChanged(ZoomSlider.lowerCalloutOutlinePropertyName, oldValue, this._lowerCalloutOutline);
		}
	}
	private static readonly lowerCalloutStrokeThicknessPropertyName: string = "LowerCalloutStrokeThickness";
	private _lowerCalloutStrokeThickness: number = 1;
	get lowerCalloutStrokeThickness(): number {
		return this._lowerCalloutStrokeThickness;
	}
	set lowerCalloutStrokeThickness(value: number) {
		let oldValue = this._lowerCalloutStrokeThickness;
		this._lowerCalloutStrokeThickness = value;
		if (oldValue != this._lowerCalloutStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.lowerCalloutStrokeThicknessPropertyName, oldValue, this._lowerCalloutStrokeThickness);
		}
	}
	private static readonly higherCalloutBrushPropertyName: string = "HigherCalloutBrush";
	private _higherCalloutBrush: Brush = null;
	get higherCalloutBrush(): Brush {
		return this._higherCalloutBrush;
	}
	set higherCalloutBrush(value: Brush) {
		let oldValue = this._higherCalloutBrush;
		this._higherCalloutBrush = value;
		if (oldValue != this._higherCalloutBrush) {
			this.onPropertyChanged(ZoomSlider.higherCalloutBrushPropertyName, oldValue, this._higherCalloutBrush);
		}
	}
	private static readonly higherCalloutTextColorPropertyName: string = "HigherCalloutTextColor";
	private _higherCalloutTextColor: Brush = null;
	get higherCalloutTextColor(): Brush {
		return this._higherCalloutTextColor;
	}
	set higherCalloutTextColor(value: Brush) {
		let oldValue = this._higherCalloutTextColor;
		this._higherCalloutTextColor = value;
		if (oldValue != this._higherCalloutTextColor) {
			this.onPropertyChanged(ZoomSlider.higherCalloutTextColorPropertyName, oldValue, this._higherCalloutTextColor);
		}
	}
	private static readonly higherCalloutOutlinePropertyName: string = "HigherCalloutOutline";
	private _higherCalloutOutline: Brush = null;
	get higherCalloutOutline(): Brush {
		return this._higherCalloutOutline;
	}
	set higherCalloutOutline(value: Brush) {
		let oldValue = this._higherCalloutOutline;
		this._higherCalloutOutline = value;
		if (oldValue != this._higherCalloutOutline) {
			this.onPropertyChanged(ZoomSlider.higherCalloutOutlinePropertyName, oldValue, this._higherCalloutOutline);
		}
	}
	private static readonly higherCalloutStrokeThicknessPropertyName: string = "HigherCalloutStrokeThickness";
	private _higherCalloutStrokeThickness: number = 1;
	get higherCalloutStrokeThickness(): number {
		return this._higherCalloutStrokeThickness;
	}
	set higherCalloutStrokeThickness(value: number) {
		let oldValue = this._higherCalloutStrokeThickness;
		this._higherCalloutStrokeThickness = value;
		if (oldValue != this._higherCalloutStrokeThickness) {
			this.onPropertyChanged(ZoomSlider.higherCalloutStrokeThicknessPropertyName, oldValue, this._higherCalloutStrokeThickness);
		}
	}
	get isCustomThumbProvided(): boolean {
		return false;
	}
	get isCustomRangeThumbProvided(): boolean {
		return false;
	}
	get isCustomBarProvided(): boolean {
		return false;
	}
	get isCustomShadeProvided(): boolean {
		return false;
	}
	private _areThumbCalloutsEnabled: boolean = false;
	get areThumbCalloutsEnabled(): boolean {
		return this._areThumbCalloutsEnabled;
	}
	set areThumbCalloutsEnabled(value: boolean) {
		this._areThumbCalloutsEnabled = value;
	}
	private _defaultThumbCalloutTextStyle: FontInfo = null;
	private get defaultThumbCalloutTextStyle(): FontInfo {
		return this._defaultThumbCalloutTextStyle;
	}
	private set defaultThumbCalloutTextStyle(value: FontInfo) {
		this._defaultThumbCalloutTextStyle = value;
	}
	private _thumbCalloutTextStyle: FontInfo = null;
	get thumbCalloutTextStyle(): FontInfo {
		return this._thumbCalloutTextStyle;
	}
	set thumbCalloutTextStyle(value: FontInfo) {
		this._thumbCalloutTextStyle = value;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		this.propertyUpdated(propertyName, oldValue, newValue);
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private propertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case ZoomSlider.pixelScalingRatioPropertyName:
			this.actualPixelScalingRatio = this.pixelScalingRatio;
			break;

			case ZoomSlider.actualPixelScalingRatioPropertyName:
			if (this.view != null) {
				this.view.onPixelScalingRatioChanged();
			}
			break;

			case ZoomSlider.orientationPropertyName:
			this.onOrientationChanged();
			this.trackDirty();
			break;

			case ZoomSlider.trackStartInsetPropertyName:

			case ZoomSlider.trackEndInsetPropertyName:

			case ZoomSlider.startInsetPropertyName:

			case ZoomSlider.endInsetPropertyName:
			this.onInsetsChanged();
			this.trackDirty();
			break;

			case ZoomSlider.maxZoomWidthPropertyName:

			case ZoomSlider.minZoomWidthPropertyName:
			this.onZoomBoundsChanged();
			this.trackDirty();
			break;

			case ZoomSlider.windowRectPropertyName:
			if (!this.ignoreWindowChange) {
				this.suppressWindowChange = true;
				this.onWindowChangedExternal();
				this.trackDirty();
				this.flush();
				this.suppressWindowChange = false;
			}
			break;

			case ZoomSlider.lowerThumbBrushPropertyName:

			case ZoomSlider.lowerThumbOutlinePropertyName:

			case ZoomSlider.lowerThumbRidgesBrushPropertyName:

			case ZoomSlider.lowerThumbStrokeThicknessPropertyName:
			this.updateLowerThumbVisuals();
			this.view.makeDirty();
			break;

			case ZoomSlider.lowerThumbWidthPropertyName:

			case ZoomSlider.lowerThumbHeightPropertyName:
			this.view.lowerThumbVisual.width = this.lowerThumbWidth;
			this.view.lowerThumbVisual.height = this.lowerThumbHeight;
			this.trackDirty();
			break;

			case ZoomSlider.higherThumbBrushPropertyName:

			case ZoomSlider.higherThumbOutlinePropertyName:

			case ZoomSlider.higherThumbRidgesBrushPropertyName:

			case ZoomSlider.higherThumbStrokeThicknessPropertyName:
			this.updateHigherThumbVisuals();
			this.view.makeDirty();
			break;

			case ZoomSlider.higherThumbWidthPropertyName:

			case ZoomSlider.higherThumbHeightPropertyName:
			this.view.lowerThumbVisual.width = this.lowerThumbWidth;
			this.view.lowerThumbVisual.height = this.lowerThumbHeight;
			this.trackDirty();
			break;

			case ZoomSlider.lowerShadeBrushPropertyName:

			case ZoomSlider.lowerShadeOutlinePropertyName:

			case ZoomSlider.lowerShadeStrokeThicknessPropertyName:
			this.updateLowerShadeVisuals();
			this.view.makeDirty();
			break;

			case ZoomSlider.higherShadeBrushPropertyName:

			case ZoomSlider.higherShadeOutlinePropertyName:

			case ZoomSlider.higherShadeStrokeThicknessPropertyName:
			this.updateHigherShadeVisuals();
			this.view.makeDirty();
			break;

			case ZoomSlider.rangeThumbBrushPropertyName:

			case ZoomSlider.rangeThumbOutlinePropertyName:

			case ZoomSlider.rangeThumbRidgesBrushPropertyName:

			case ZoomSlider.rangeThumbStrokeThicknessPropertyName:
			this.updateRangeThumbVisuals();
			this.view.makeDirty();
			break;

			case ZoomSlider.barBrushPropertyName:

			case ZoomSlider.barOutlinePropertyName:

			case ZoomSlider.barStrokeThicknessPropertyName:
			this.updateBarVisuals();
			this.view.makeDirty();
			break;

			case ZoomSlider.lowerCalloutBrushPropertyName:

			case ZoomSlider.lowerCalloutOutlinePropertyName:

			case ZoomSlider.lowerCalloutTextColorPropertyName:

			case ZoomSlider.lowerCalloutStrokeThicknessPropertyName:
			this.updateLowerCalloutVisuals();
			this.view.makeDirty();
			break;

			case ZoomSlider.higherCalloutBrushPropertyName:

			case ZoomSlider.higherCalloutOutlinePropertyName:

			case ZoomSlider.higherCalloutTextColorPropertyName:

			case ZoomSlider.higherCalloutStrokeThicknessPropertyName:
			this.updateHigherCalloutVisuals();
			this.view.makeDirty();
			break;

		}

	}
	private updateBarVisuals(): void {
		let barVisual = this.view.barVisual;
		if (this.barBrush == null) {
			barVisual.barBox._fill = barVisual.getBarBoxDefaultBrush();
		} else {
			barVisual.barBox._fill = this.barBrush;
		}
		if (this.barOutline == null) {
			barVisual.barBox._stroke = barVisual.getBarBoxDefaultOutline();
		} else {
			barVisual.barBox._stroke = this.barOutline;
		}
		if (this.barStrokeThickness == NaN) {
			barVisual.barBox.strokeThickness = barVisual.getBarBoxDefaultStrokeThickness();
		} else {
			barVisual.barBox.strokeThickness = this.barStrokeThickness;
		}
	}
	private updateLowerCalloutVisuals(): void {
		let calloutVisual = this.view.lowerCalloutVisual;
		if (this.lowerCalloutBrush == null) {
			calloutVisual.calloutBox._fill = calloutVisual.getCalloutBoxDefaultBrush();
		} else {
			calloutVisual.calloutBox._fill = this.lowerCalloutBrush;
		}
		if (this.lowerCalloutOutline == null) {
			calloutVisual.calloutBox._stroke = calloutVisual.getCalloutBoxDefaultStroke();
		} else {
			calloutVisual.calloutBox._stroke = this.lowerCalloutOutline;
		}
		if (this.lowerCalloutTextColor == null) {
			calloutVisual.calloutText.fill = calloutVisual.getCalloutTextDefaultBrush();
		} else {
			calloutVisual.calloutText.fill = this.lowerCalloutTextColor;
		}
		if (this.lowerCalloutStrokeThickness == NaN) {
			calloutVisual.calloutBox.strokeThickness = calloutVisual.getCalloutBoxDefaultStrokeThickness();
		} else {
			calloutVisual.calloutBox.strokeThickness = this.lowerCalloutStrokeThickness;
		}
	}
	private updateHigherCalloutVisuals(): void {
		let calloutVisual = this.view.higherCalloutVisual;
		if (this.higherCalloutBrush == null) {
			calloutVisual.calloutBox._fill = calloutVisual.getCalloutBoxDefaultBrush();
		} else {
			calloutVisual.calloutBox._fill = this.higherCalloutBrush;
		}
		if (this.higherCalloutOutline == null) {
			calloutVisual.calloutBox._stroke = calloutVisual.getCalloutBoxDefaultStroke();
		} else {
			calloutVisual.calloutBox._stroke = this.higherCalloutOutline;
		}
		if (this.higherCalloutTextColor == null) {
			calloutVisual.calloutText.fill = calloutVisual.getCalloutTextDefaultBrush();
		} else {
			calloutVisual.calloutText.fill = this.higherCalloutTextColor;
		}
		if (this.higherCalloutStrokeThickness == NaN) {
			calloutVisual.calloutBox.strokeThickness = calloutVisual.getCalloutBoxDefaultStrokeThickness();
		} else {
			calloutVisual.calloutBox.strokeThickness = this.higherCalloutStrokeThickness;
		}
	}
	private updateLowerThumbVisuals(): void {
		let thumbVisual = this.view.lowerThumbVisual;
		if (this.lowerThumbBrush == null) {
			thumbVisual.thumbBox._fill = thumbVisual.getThumbBoxDefaultBrush();
		} else {
			thumbVisual.thumbBox._fill = this.lowerThumbBrush;
		}
		if (this.lowerThumbOutline == null) {
			thumbVisual.thumbBox._stroke = thumbVisual.getThumbBoxDefaultStroke();
		} else {
			thumbVisual.thumbBox._stroke = this.lowerThumbOutline;
		}
		if (this.lowerThumbRidgesBrush == null) {
			thumbVisual.thumbRidges._stroke = thumbVisual.getThumbRidgesDefaultStroke();
		} else {
			thumbVisual.thumbRidges._stroke = this.lowerThumbRidgesBrush;
		}
		if (this.lowerThumbStrokeThickness == NaN) {
			thumbVisual.thumbBox.strokeThickness = thumbVisual.getThumbBoxDefaultStrokeThickness();
		} else {
			thumbVisual.thumbBox.strokeThickness = this.lowerThumbStrokeThickness;
		}
	}
	private updateRangeThumbVisuals(): void {
		let thumbVisual = this.view.rangeVisual;
		if (this.rangeThumbBrush == null) {
			thumbVisual.thumbBox._fill = thumbVisual.getThumbBoxDefaultBrush();
		} else {
			thumbVisual.thumbBox._fill = this.rangeThumbBrush;
		}
		if (this.rangeThumbOutline == null) {
			thumbVisual.thumbBox._stroke = thumbVisual.getThumbBoxDefaultStroke();
		} else {
			thumbVisual.thumbBox._stroke = this.rangeThumbOutline;
		}
		if (this.rangeThumbRidgesBrush == null) {
			thumbVisual.thumbRidges._stroke = thumbVisual.getThumbRidgesDefaultStroke();
		} else {
			thumbVisual.thumbRidges._stroke = this.rangeThumbRidgesBrush;
		}
		if (this.rangeThumbStrokeThickness == NaN) {
			thumbVisual.thumbBox.strokeThickness = thumbVisual.getThumbBoxDefaultStrokeThickness();
		} else {
			thumbVisual.thumbBox.strokeThickness = this.rangeThumbStrokeThickness;
		}
	}
	private updateLowerShadeVisuals(): void {
		let shadeVisual = this.view.lowerShadeVisual;
		if (this.lowerShadeBrush == null) {
			shadeVisual.shadeBox._fill = shadeVisual.getShadeBoxDefaultBrush();
		} else {
			shadeVisual.shadeBox._fill = this.lowerShadeBrush;
		}
		if (this.lowerShadeOutline == null) {
			shadeVisual.shadeOutline._stroke = shadeVisual.getShadeOutlineDefaultBrush();
		} else {
			shadeVisual.shadeOutline._stroke = this.lowerShadeOutline;
		}
		if (this.lowerShadeStrokeThickness == NaN) {
			shadeVisual.shadeOutline.strokeThickness = shadeVisual.getShadeOutlineDefaultStrokeThickness();
		} else {
			shadeVisual.shadeOutline.strokeThickness = this.lowerShadeStrokeThickness;
		}
	}
	private updateHigherShadeVisuals(): void {
		let shadeVisual = this.view.higherShadeVisual;
		if (this.higherShadeBrush == null) {
			shadeVisual.shadeBox._fill = shadeVisual.getShadeBoxDefaultBrush();
		} else {
			shadeVisual.shadeBox._fill = this.higherShadeBrush;
		}
		if (this.higherShadeOutline == null) {
			shadeVisual.shadeOutline._stroke = shadeVisual.getShadeOutlineDefaultBrush();
		} else {
			shadeVisual.shadeOutline._stroke = this.higherShadeOutline;
		}
		if (this.higherShadeStrokeThickness == NaN) {
			shadeVisual.shadeOutline.strokeThickness = shadeVisual.getShadeOutlineDefaultStrokeThickness();
		} else {
			shadeVisual.shadeOutline.strokeThickness = this.higherShadeStrokeThickness;
		}
	}
	private updateHigherThumbVisuals(): void {
		let thumbVisual = this.view.higherThumbVisual;
		if (this.higherThumbBrush == null) {
			thumbVisual.thumbBox._fill = thumbVisual.getThumbBoxDefaultBrush();
		} else {
			thumbVisual.thumbBox._fill = this.higherThumbBrush;
		}
		if (this.higherThumbOutline == null) {
			thumbVisual.thumbBox._stroke = thumbVisual.getThumbBoxDefaultStroke();
		} else {
			thumbVisual.thumbBox._stroke = this.higherThumbOutline;
		}
		if (this.higherThumbRidgesBrush == null) {
			thumbVisual.thumbRidges._stroke = thumbVisual.getThumbRidgesDefaultStroke();
		} else {
			thumbVisual.thumbRidges._stroke = this.higherThumbRidgesBrush;
		}
		if (this.higherThumbStrokeThickness == NaN) {
			thumbVisual.thumbBox.strokeThickness = thumbVisual.getThumbBoxDefaultStrokeThickness();
		} else {
			thumbVisual.thumbBox.strokeThickness = this.higherThumbStrokeThickness;
		}
	}
	private onWindowChangedExternal(): void {
		if (this.ignoreWindowChange) {
			return;
		}
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			this.lowerThumb.position = this.windowRect.left;
			this.higherThumb.position = this.windowRect.right;
			this.range.width = this.windowRect.width;
			this.range.position = this.windowRect.left + this.windowRect.width / 2;
		} else {
			this.lowerThumb.position = this.windowRect.top;
			this.higherThumb.position = this.windowRect.bottom;
			this.range.width = this.windowRect.height;
			this.range.position = this.windowRect.top + this.windowRect.height / 2;
		}
	}
	private onZoomBoundsChanged(): void {
		this.range.minWidth = this.minZoomWidth;
		this.range.maxWidth = this.maxZoomWidth;
	}
	private onInsetsChanged(): void {
		if (this.viewport.isEmpty) {
			return;
		}
		this.onViewportChanged(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
	}
	private onOrientationChanged(): void {
		if (this.orientation == ZoomSliderOrientation.Horizontal) {
			this.view.lowerThumbVisual.width = this.lowerThumbWidth;
			this.view.lowerThumbVisual.height = this.lowerThumbHeight;
			this.view.higherThumbVisual.width = this.higherThumbWidth;
			this.view.higherThumbVisual.height = this.higherThumbHeight;
		} else {
			this.view.lowerThumbVisual.height = this.lowerThumbWidth;
			this.view.lowerThumbVisual.width = this.lowerThumbHeight;
			this.view.higherThumbVisual.height = this.higherThumbWidth;
			this.view.higherThumbVisual.width = this.higherThumbHeight;
		}
		if (this.viewport.isEmpty) {
			return;
		}
		this.onViewportChanged(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
	}
	provideContainer(container: any): void {
		this.view.provideContainer(container);
	}
	notifySizeChanged(): void {
		this.view.notifySizeChanged();
	}
	get panAnimator(): DoubleAnimator {
		return this._panAnimator;
	}
	private _panAnimator: DoubleAnimator = null;
	private _currentPanTarget: number = 0;
	private _currentPanStart: number = 0;
	private _lastPanPosition: number = 0;
	constructor() {
		super();
		this.currentDragging = ZoomSliderVisualArea.None;
		this.viewport = Rect.empty;
		this.insetViewport = Rect.empty;
		this.trackViewport = Rect.empty;
		this.view = new ZoomSliderView(this);
		this.defaultThumbCalloutTextStyle = this.view.getDefaultThumbCalloutTextStyle();
		this.lowerThumb = new TrackThumb();
		this.lowerThumb.rangePosition = ThumbRangePosition.PinnedLower;
		this.higherThumb = new TrackThumb();
		this.higherThumb.rangePosition = ThumbRangePosition.PinnedHigher;
		this.range = new TrackThumbRange();
		this.range.lowerThumb = this.lowerThumb;
		this.range.higherThumb = this.higherThumb;
		this.lowerThumb.position = 0;
		this.higherThumb.position = 1;
		this.range.width = 1;
		this.range.position = 0.5;
		this.range.minWidth = 0;
		this.range.maxWidth = 1;
		this.lowerThumb.range = this.range;
		this.higherThumb.range = this.range;
		this.range.lowerThumb = this.lowerThumb;
		this.range.higherThumb = this.higherThumb;
		this.lowerThumb.owner = this;
		this.higherThumb.owner = this;
		this.range.owner = this;
		this._panAnimator = new DoubleAnimator(0, 1, this.panTransitionDuration);
		let $t = this._panAnimator;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this._doubleAnimator_PropertyChanged));
		this._panAnimator.easingFunction = EasingFunctions.exponentialEase;
	}
	private startPanAnimation(target: number): void {
		this._currentPanTarget = target;
		this._currentPanStart = this.range.position;
		this._lastPanPosition = this._currentPanStart;
		this._panAnimator.start();
	}
	private cancelPanAnimation(): void {
		if (this._panAnimator.animationActive()) {
			this._panAnimator.stop();
		}
	}
	private _doubleAnimator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		let progress = this._panAnimator.transitionProgress;
		let currVal = this._currentPanStart + progress * (this._currentPanTarget - this._currentPanStart);
		let delta = currVal - this._lastPanPosition;
		this._lastPanPosition = currVal;
		this.range.push(delta);
		if (this._panAnimator.animationActive()) {
			this.updateLowerThumbTooltip(this.lowerThumb);
			this.updateHigherThumbTooltip(this.higherThumb);
			this.flush();
		} else {
			this.dismissLowerTooltip();
			this.dismissHigherTooltip();
		}
	}
	flush(): void {
		this.view.flush();
	}
	private _trackDirty: boolean = false;
	trackDirty(): void {
		this._trackDirty = true;
		if (this.view == null) {
			return;
		}
		this.view.makeDirty();
	}
	show(): void {
		if (this.view != null) {
			this.view.show();
		}
	}
	hide(): void {
		if (this.view != null) {
			this.view.hide();
		}
	}
}


