/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, runOn, delegateCombine, delegateRemove, Type, markType, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, String_$type, INotifyPropertyChanged, INotifyPropertyChanged_$type, IEnumerable, IEnumerable_$type, PropertyChangedEventArgs, EventArgs, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, fromEn, EnumUtil, enumGetBox, typeGetValue, Point_$type, PointUtil } from "igniteui-core/type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type, NormalizedEvent } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { EventProxy } from "igniteui-core/EventProxy";
import { FontInfo } from "igniteui-core/FontInfo";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { Brush } from "igniteui-core/Brush";
import { Rect } from "igniteui-core/Rect";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { CanvasGestureDOMEventProxy } from "igniteui-core/CanvasGestureDOMEventProxy";
import { TreemapVisualData } from "./TreemapVisualData";
import { List$1 } from "igniteui-core/List$1";
import { TreemapVisual } from "./TreemapVisual";
import { Pool$1 } from "igniteui-core/Pool$1";
import { FontUtil } from "igniteui-core/FontUtil";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { truncate, isNaN_, logBase } from "igniteui-core/number";
import { Rectangle } from "igniteui-core/Rectangle";
import { TextBlock } from "igniteui-core/TextBlock";
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { VerticalAlignment, VerticalAlignment_$type } from "igniteui-core/VerticalAlignment";
import { Shape } from "igniteui-core/Shape";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Thickness } from "igniteui-core/Thickness";
import { TreemapNodeVisualData } from "./TreemapNodeVisualData";
import { TreemapLabelVisualData } from "./TreemapLabelVisualData";
import { RectangleVisualData } from "igniteui-core/RectangleVisualData";
import { PointData } from "igniteui-core/PointData";
import { SizeData } from "igniteui-core/SizeData";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { Visibility } from "igniteui-core/Visibility";
import { HashSet$1 } from "igniteui-core/HashSet$1";
import { TreemapOrientation, TreemapOrientation_$type } from "./TreemapOrientation";
import { Debug } from "igniteui-core/Debug";
import { Size } from "igniteui-core/Size";
import { AreaInfo } from "./AreaInfo";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { TreemapFillScaleMode, TreemapFillScaleMode_$type } from "./TreemapFillScaleMode";
import { TreemapLabelVerticalFitMode, TreemapLabelVerticalFitMode_$type } from "./TreemapLabelVerticalFitMode";
import { TreemapLabelHorizontalFitMode, TreemapLabelHorizontalFitMode_$type } from "./TreemapLabelHorizontalFitMode";
import { TreemapHeaderDisplayMode, TreemapHeaderDisplayMode_$type } from "./TreemapHeaderDisplayMode";
import { TreemapLayoutType, TreemapLayoutType_$type } from "./TreemapLayoutType";
import { FastItemsSource } from "igniteui-core/FastItemsSource";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { FastItemsSourceEventArgs } from "igniteui-core/FastItemsSourceEventArgs";
import { EasingFunctions } from "igniteui-core/EasingFunctions";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { RectData } from "igniteui-core/RectData";
import { TreemapNodeVisualDataList } from "./TreemapNodeVisualDataList";
import { BrushCollectionUtil } from "igniteui-core/BrushCollectionUtil";
import { TreemapValueMappingMode, TreemapValueMappingMode_$type } from "./TreemapValueMappingMode";
import { TreemapNodePointerEventArgs } from "./TreemapNodePointerEventArgs";
import { TreemapNodeStyleMappingTargetType, TreemapNodeStyleMappingTargetType_$type } from "./TreemapNodeStyleMappingTargetType";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";
import { FastItemObjectColumn } from "igniteui-core/FastItemObjectColumn";
import { stringReplace, stringIsNullOrEmpty } from "igniteui-core/string";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class TreemapView extends Base {
	static $t: Type = markType(TreemapView, 'TreemapView');
	constructor() {
		super();
		this.renderer = new TreemapViewRenderer();
		this.renderer.textBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "white";
			return $ret;
		})());
	}
	private _renderer: TreemapViewRenderer = null;
	protected get renderer(): TreemapViewRenderer {
		return this._renderer;
	}
	protected set renderer(value: TreemapViewRenderer) {
		this._renderer = value;
	}
	private _model: Treemap = null;
	get model(): Treemap {
		return this._model;
	}
	set model(value: Treemap) {
		this._model = value;
	}
	onInit(): void {
	}
	renderComplete(): void {
		this.render();
	}
	private _scheduled: boolean = false;
	scheduleArrange(): void {
		if (!this._scheduled) {
			this._scheduled = true;
			if (this.container != null) {
				this.container.setTimeout(runOn(this, this.arrange), 0);
			} else {
				window.setTimeout(runOn(this, this.arrange), 0);
			}
		}
	}
	arrange(): void {
		if (this._scheduled) {
			this._scheduled = false;
			this.model.renderTreeMap();
		}
	}
	ready(): boolean {
		return true;
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
	private _container: DomRenderer = null;
	private get container(): DomRenderer {
		return this._container;
	}
	private set container(value: DomRenderer) {
		this._container = value;
	}
	private _canvasWidth: number = 0;
	private _canvasHeight: number = 0;
	private _font: FontInfo = null;
	private _outerContainer: DomRenderer = null;
	private get outerContainer(): DomRenderer {
		return this._outerContainer;
	}
	private set outerContainer(value: DomRenderer) {
		this._outerContainer = value;
	}
	private _currentPixelRatio: number = 1;
	onPixelScalingRatioChanged(): void {
		this._currentPixelRatio = this.model.actualPixelScalingRatio;
		this.scheduleArrange();
	}
	onContainerProvided(container: DomRenderer): void {
		if (container == null) {
			this.canvas = null;
			this.container = null;
			this.context = null;
			if (this._determineRatio != null) {
				window.removeEventListener("resize", this._determineRatio, false);
				this._determineRatio = null;
			}
			this.cleanUpEventProxy();
			return;
		}
		this.container = container;
		this.outerContainer = container;
		let width = this.outerContainer.rootWrapper.width();
		let height = this.outerContainer.rootWrapper.height();
		this.initializeScalingRatio();
		this._currentPixelRatio = (isNaN_(this.model.pixelScalingRatio) ? this.model.actualPixelScalingRatio : this.model.pixelScalingRatio);
		let pixelScale = this._currentPixelRatio;
		let containerWidth = Math.round(<number>container.rootWrapper.width());
		let containerHeight = Math.round(<number>container.rootWrapper.height());
		let pixelWidth = containerWidth * pixelScale;
		let pixelHeight = containerHeight * pixelScale;
		this.container.rootWrapper.setStyleProperty("position", "relative");
		let canv = container.createElement("canvas");
		canv.setStyleProperty("position", "absolute");
		this.container.rootWrapper.append(canv);
		this._canvasWidth = width;
		this._canvasHeight = height;
		canv.setAttribute("width", pixelWidth.toString());
		canv.setAttribute("height", pixelHeight.toString());
		canv.setStyleProperty("width", containerWidth.toString() + "px");
		canv.setStyleProperty("height", containerHeight.toString() + "px");
		this._contextMenu = canv.listen("contextmenu", (e: NormalizedEvent) => e.preventDefault());
		this.model.viewport = new Rect(0, 0, 0, containerWidth, containerHeight);
		this.canvas = canv;
		let context = this.container.get2DCanvasContext(this.canvas);
		this.context = new RenderingContext(new CanvasViewRenderer(), context);
		this.getDefaultColors();
		this.updateStyle();
		this.context.setFontInfo(this._font);
		this.render();
		this.eventProxy = new CanvasGestureDOMEventProxy(this.canvas, this.container, true);
		this.eventProxy.shouldInteract = (p: Point) => true;
		this.eventProxy.viewport = this.model.viewport;
		let $t = this.eventProxy;
		$t.onMouseOver = delegateCombine($t.onMouseOver, runOn(this, this.eventProxy_OnMouseOver));
		let $t1 = this.eventProxy;
		$t1.onMouseUp = delegateCombine($t1.onMouseUp, runOn(this, this.eventProxy_OnMouseUp));
		let $t2 = this.eventProxy;
		$t2.onMouseDown = delegateCombine($t2.onMouseDown, runOn(this, this.eventProxy_OnMouseDown));
		let $t3 = this.eventProxy;
		$t3.onMouseEnter = delegateCombine($t3.onMouseEnter, runOn(this, this.eventProxy_OnMouseEnter));
		let $t4 = this.eventProxy;
		$t4.onMouseLeave = delegateCombine($t4.onMouseLeave, runOn(this, this.eventProxy_OnMouseLeave));
	}
	private eventProxy_OnMouseLeave(point: Point): void {
		this.model.onMouseLeave(point);
	}
	exportViewShapes(treemapVisualData: TreemapVisualData): void {
		this.renderer.exportViewShapes(treemapVisualData, this._renderOrder, this);
	}
	private eventProxy_OnMouseEnter(point: Point): void {
		this.model.onMouseEnter(point);
	}
	private _determineRatio: (e: Event) => void = null;
	initializeScalingRatio(): void {
		if (this._determineRatio == null) {
			this._determineRatio = (args: Event) => {
				let userRatio = this.model.pixelScalingRatio;
				let actualRatio = this.model.actualPixelScalingRatio;
				if (!isNaN_(userRatio) && userRatio != 0) {
					return;
				}
				if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
					this.model.actualPixelScalingRatio = window.devicePixelRatio;
				}
			};
			let e_ = this._determineRatio;
			window.addEventListener("resize", <any>e_, false);
		}
		this._determineRatio(null);
	}
	private cleanUpEventProxy(): void {
		if (this._contextMenu != null) {
			this._contextMenu();
			this._contextMenu = null;
		}
		if (this.eventProxy != null) {
			let $t = this.eventProxy;
			$t.onMouseOver = delegateRemove($t.onMouseOver, runOn(this, this.eventProxy_OnMouseOver));
			let $t1 = this.eventProxy;
			$t1.onMouseUp = delegateRemove($t1.onMouseUp, runOn(this, this.eventProxy_OnMouseUp));
			let $t2 = this.eventProxy;
			$t2.onMouseDown = delegateRemove($t2.onMouseDown, runOn(this, this.eventProxy_OnMouseDown));
			let $t3 = this.eventProxy;
			$t3.onMouseEnter = delegateRemove($t3.onMouseEnter, runOn(this, this.eventProxy_OnMouseEnter));
			let $t4 = this.eventProxy;
			$t4.onMouseLeave = delegateRemove($t4.onMouseLeave, runOn(this, this.eventProxy_OnMouseLeave));
			this.eventProxy.shouldInteract = null;
			this.eventProxy.destroy();
		}
	}
	private eventProxy_OnMouseDown(point: Point): void {
		if (this.eventProxy.rightButton) {
			this.model.onRightMouseDown(point);
		} else {
			this.model.onMouseDown(point);
		}
	}
	private eventProxy_OnMouseUp(point: Point): void {
		if (this.eventProxy.rightButton) {
			this.model.onRightMouseUp(point);
		} else {
			this.model.onMouseUp(point);
		}
	}
	private eventProxy_OnMouseOver(point: Point, onMouseMove: boolean, isFinger: boolean): void {
		this.model.onMouseOver(point);
	}
	private _eventProxy: EventProxy = null;
	private get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	private set eventProxy(value: EventProxy) {
		this._eventProxy = value;
	}
	protected getDefaultColors(): void {
	}
	private _currentFontHeight: number = 0;
	private _currentHeaderFontHeight: number = 0;
	private _fontBrush: Brush = null;
	getVisuals(): Pool$1<TreemapVisual> {
		return this.renderer.visuals;
	}
	protected updateStyle(): void {
		this._font = FontUtil.getFont(this.container);
		if (this._fontInfo != null) {
			this._currentFontHeight = this.getCurrentFontHeight(this._fontInfo);
		} else {
			this._currentFontHeight = this.getCurrentFontHeight(this._font);
		}
		if (this._headerFontInfo != null) {
			this._currentHeaderFontHeight = this.getCurrentFontHeight(this._headerFontInfo);
		} else {
			this._currentHeaderFontHeight = this.getCurrentFontHeight(this._font);
		}
		this._fontBrush = new Brush();
		this._fontBrush._fill = this.container.rootWrapper.getStyleProperty("color");
		if (this.context != null) {
			this.context.setFontInfo(this._font);
		}
	}
	notifySizeChanged(): void {
		let width = this.outerContainer.rootWrapper.width();
		let height = this.outerContainer.rootWrapper.height();
		this.model.viewport = new Rect(0, 0, 0, width, height);
		this.initializeScalingRatio();
	}
	flush(): void {
		if (this._scheduled) {
			this.arrange();
		}
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
		this.renderer.render(this.context, this.model.viewport, this._renderOrder, this._currentFontHeight);
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.restore();
		}
	}
	private _headerFontInfo: FontInfo = ((() => {
		let $ret = new FontInfo();
		$ret.fontFamily = "Verdana";
		$ret.fontSize = DeviceUtils.toFontPixelUnits(13);
		return $ret;
	})());
	private _fontInfo: FontInfo = ((() => {
		let $ret = new FontInfo();
		$ret.fontFamily = "Verdana";
		$ret.fontSize = DeviceUtils.toFontPixelUnits(13);
		return $ret;
	})());
	onHeaderTextStyleChanged(headerTextStyle: FontInfo): void {
		this._headerFontInfo = headerTextStyle;
		if (this._headerFontInfo != null) {
			this._currentHeaderFontHeight = this.getCurrentFontHeight(this._headerFontInfo);
		} else {
			this._currentHeaderFontHeight = this.getCurrentFontHeight(this._font);
		}
	}
	onTextStyleChanged(textStyle: FontInfo): void {
		this._fontInfo = textStyle;
		if (this._fontInfo != null) {
			this._currentFontHeight = this.getCurrentFontHeight(this._fontInfo);
		} else {
			this._currentFontHeight = this.getCurrentFontHeight(this._font);
		}
		if (this._headerFontInfo != null) {
			this._currentHeaderFontHeight = this.getCurrentFontHeight(this._headerFontInfo);
		} else {
			this._currentHeaderFontHeight = this.getCurrentFontHeight(this._font);
		}
	}
	private _renderOrder: List$1<TreemapVisual> = null;
	private _contextMenu: () => void = null;
	completeRender(renderOrder: List$1<TreemapVisual>): void {
		this._renderOrder = renderOrder;
		this.render();
	}
	getDesiredTextWidth(text: string): number {
		if (text != null) {
			if (this._fontInfo != null) {
				this.context.setFontInfo(this._fontInfo);
			} else {
				this.context.setFontInfo(this._defaultTextStyle);
			}
			return this.context.measureTextWidth(text);
		}
		return 0;
	}
	getDesiredHeaderTextWidth(text: string): number {
		if (text != null) {
			if (this._headerFontInfo != null) {
				this.context.setFontInfo(this._headerFontInfo);
			} else {
				this.context.setFontInfo(this._defaultTextStyle);
			}
			return this.context.measureTextWidth(text);
		}
		return 0;
	}
	getCurrentFontHeight(font: FontInfo): number {
		return FontUtil.getCurrentFontHeight(this.container, font);
	}
	getDesiredTextHeight(p: string): number {
		return this._currentFontHeight;
	}
	getDesiredHeaderTextHeight(p: string): number {
		return this._currentHeaderFontHeight;
	}
	getDefaultHeaderBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgb(220,220,220)";
			return $ret;
		})());
	}
	getDefaultHeaderFontBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgb(240, 240, 240)";
			return $ret;
		})());
	}
	getDefaultHeaderDarkFontBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgb(102, 102, 102)";
			return $ret;
		})());
	}
	private _transparent: Brush = ((() => {
		let $ret = new Brush();
		$ret.fill = "rgba(0,0,0, 0.0)";
		return $ret;
	})());
	getTransparentBrush(): Brush {
		return this._transparent;
	}
	getDefaultOutlineBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "black";
			return $ret;
		})());
	}
	getDefaultHeaderHoverBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgb(240,240,240)";
			return $ret;
		})());
	}
	getDefaultTextColor(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgb(240, 240, 240)";
			return $ret;
		})());
	}
	getDefaultDarkTextColor(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgb(102, 102, 102)";
			return $ret;
		})());
	}
	private _defaultTextStyle: FontInfo = ((() => {
		let $ret = new FontInfo();
		$ret.fontFamily = "Verdana";
		$ret.fontSize = DeviceUtils.toFontPixelUnits(13);
		return $ret;
	})());
	getDefaultTextStyle(): FontInfo {
		return this._defaultTextStyle;
	}
	getDefaultOverlayHeaderBrush(): Brush {
		return BrushUtil.fromArgb(153, 25, 25, 25);
	}
	getDefaultOverlayHeaderHoverBrush(): Brush {
		return BrushUtil.fromArgb(153, 45, 45, 45);
	}
	private _attached: boolean = true;
	onAttachedToUI(): void {
		this._attached = true;
		this.initializeScalingRatio();
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.container.rootWrapper, "");
		}
	}
	onDetachedFromUI(): void {
		this._attached = false;
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.container.rootWrapper, "");
		}
	}
}

/**
 * @hidden 
 */
export class TreemapViewRenderer extends Base {
	static $t: Type = markType(TreemapViewRenderer, 'TreemapViewRenderer');
	constructor() {
		super();
		this.visibleVisuals = new List$1<TreemapVisual>((<any>TreemapVisual).$type, 0);
		this.visuals = ((() => {
			let $ret = new Pool$1<TreemapVisual>((<any>TreemapVisual).$type);
			$ret.create = runOn(this, this.visualCreate);
			$ret.activate = runOn(this, this.visualActivate);
			$ret.disactivate = runOn(this, this.visualDisactivate);
			$ret.destroy = runOn(this, this.visualDestroy);
			return $ret;
		})());
	}
	private _visuals: Pool$1<TreemapVisual> = null;
	get visuals(): Pool$1<TreemapVisual> {
		return this._visuals;
	}
	set visuals(value: Pool$1<TreemapVisual>) {
		this._visuals = value;
	}
	private _visibleVisuals: List$1<TreemapVisual> = null;
	protected get visibleVisuals(): List$1<TreemapVisual> {
		return this._visibleVisuals;
	}
	protected set visibleVisuals(value: List$1<TreemapVisual>) {
		this._visibleVisuals = value;
	}
	visualCreate(): TreemapVisual {
		let Visual: TreemapVisual = new TreemapVisual();
		this.visibleVisuals.add(Visual);
		return Visual;
	}
	visualActivate(Visual: TreemapVisual): void {
		Visual.visibility = Visibility.Visible;
	}
	visualDisactivate(Visual: TreemapVisual): void {
		Visual.visibility = Visibility.Collapsed;
	}
	visualDestroy(Visual: TreemapVisual): void {
		this.visibleVisuals.remove(Visual);
	}
	private _textBrush: Brush = null;
	get textBrush(): Brush {
		return this._textBrush;
	}
	set textBrush(value: Brush) {
		this._textBrush = value;
	}
	private ensureElements(visual: TreemapVisual): void {
		if (visual.concreteElements.count != 3) {
			visual.concreteElements.add1(new Rectangle());
			visual.concreteElements.add1(new Rectangle());
			visual.concreteElements.add1(new TextBlock());
		}
	}
	render(context: RenderingContext, viewport: Rect, renderOrder: List$1<TreemapVisual>, textHeight: number): void {
		context.clearRectangle(viewport.left, viewport.top, viewport.width, viewport.height);
		if (renderOrder != null) {
			for (let i = 0; i < renderOrder.count; i++) {
				let visual = renderOrder._inner[i];
				this.ensureElements(visual);
				let rect = <Rectangle>visual.concreteElements._inner[0];
				let headerRect = <Rectangle>visual.concreteElements._inner[1];
				let text = <TextBlock>visual.concreteElements._inner[2];
				rect._fill = visual.fillBrush;
				rect._stroke = visual.outlineBrush;
				rect.strokeThickness = visual.strokeThickness;
				rect.width = visual.bounds.width;
				rect.height = visual.bounds.height;
				rect.canvasLeft = visual.bounds.left;
				rect.canvasTop = visual.bounds.top;
				context.setFontInfo(visual.fontInfo);
				let textWidth = context.measureTextWidth(visual.headerText);
				if (visual.isLeaf) {
					text.text = visual.headerText;
					switch (visual.labelHorizontalAlignment) {
						case HorizontalAlignment.Left:
						text.canvasLeft = visual.bounds.left + visual.labelMargin.left;
						break;

						case HorizontalAlignment.Center:

						case HorizontalAlignment.Stretch:
						text.canvasLeft = visual.bounds.left + visual.bounds.width / 2 - visual.headerWidth / 2;
						break;

						case HorizontalAlignment.Right:
						text.canvasLeft = Math.max(visual.bounds.left + visual.labelMargin.left, visual.bounds.right - (textWidth + visual.labelMargin.right));
						break;

					}

					switch (visual.labelVerticalAlignment) {
						case VerticalAlignment.Top:
						text.canvasTop = visual.bounds.top + visual.labelMargin.top;
						break;

						case VerticalAlignment.Center:

						case VerticalAlignment.Stretch:
						text.canvasTop = visual.bounds.top + visual.bounds.height / 2 - visual.headerHeight / 2;
						break;

						case VerticalAlignment.Bottom:
						text.canvasTop = Math.max(visual.bounds.top + visual.labelMargin.top, visual.bounds.bottom - (textHeight + visual.labelMargin.bottom));
						break;

					}

					text.fill = visual.nodeFontBrush;
				} else {
					headerRect._fill = visual.headerBrush;
					headerRect._stroke = visual.outlineBrush;
					headerRect.strokeThickness = visual.strokeThickness;
					headerRect.width = visual.bounds.width;
					headerRect.height = visual.headerHeight;
					headerRect.canvasLeft = visual.bounds.left;
					headerRect.canvasTop = visual.bounds.top;
					if (visual.overlayHeaderVisibility == Visibility.Visible) {
						headerRect.width = textWidth + visual.headerLabelMargin.left + visual.headerLabelMargin.right;
					}
					text.canvasLeft = visual.bounds.left + visual.headerLabelMargin.left;
					text.canvasTop = visual.bounds.top + visual.headerLabelMargin.top;
					text.text = visual.headerText;
					text.fill = visual.nodeFontBrush;
				}
				context.renderRectangle(rect);
				if (visual.overlayHeaderVisibility != Visibility.Visible) {
					if (!visual.isLeaf) {
						context.renderRectangle(headerRect);
					}
				}
				context.save();
				context.setRectangleClip(visual.bounds);
				if (visual.overlayHeaderVisibility == Visibility.Visible) {
					if (!visual.isLeaf) {
						context.renderRectangle(headerRect);
					}
				}
				context.renderTextBlock(text);
				context.restore();
			}
		}
	}
	exportViewShapes(treemapVisualData: TreemapVisualData, renderOrder: List$1<TreemapVisual>, view: TreemapView): void {
		if (renderOrder != null) {
			for (let i = 0; i < renderOrder.count; i++) {
				let visual = renderOrder._inner[i];
				this.ensureElements(visual);
				let rect = <Rectangle>visual.concreteElements._inner[0];
				let headerRect = <Rectangle>visual.concreteElements._inner[1];
				let text = <TextBlock>visual.concreteElements._inner[2];
				let vd = new TreemapNodeVisualData();
				vd.nodeRect = new RectangleVisualData(1, "NodePath", rect);
				vd.headerRect = new RectangleVisualData(1, "HeaderRect", headerRect);
				let label = new TreemapLabelVisualData();
				label.labelPosition = new PointData(text.canvasLeft, text.canvasTop);
				if (visual.isLeaf) {
					label.labelSize = new SizeData(view.getDesiredTextWidth(text.text), view.getDesiredTextHeight(text.text));
				} else {
					label.labelSize = new SizeData(view.getDesiredHeaderTextWidth(text.text), view.getDesiredHeaderTextHeight(text.text));
				}
				label.labelValue = text.text;
				label.appearance = AppearanceHelper.fromTextElement(text, visual.fontInfo);
				vd.label = label;
				treemapVisualData.nodes.add(vd);
			}
		}
	}
}

/**
 * @hidden 
 */
export abstract class TreemapLayoutCalculator extends Base {
	static $t: Type = markType(TreemapLayoutCalculator, 'TreemapLayoutCalculator');
	abstract calculateLayout(frame: TreemapFrame, settings: TreemapLayoutSettings): void;
	protected static tooSmall(node: TreemapTreeNode, container: Rect, area: number, settings: TreemapLayoutSettings): boolean {
		let itemArea: number = node.getArea();
		let minDisplaySize: number = settings.minimumDisplaySize;
		let minSizeRatio: number = minDisplaySize * minDisplaySize / (container.width * container.height);
		if (itemArea / area < minSizeRatio) {
			return true;
		}
		return false;
	}
	protected static areTooSmall(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, list: List$1<TreemapTreeNode>, container: Rect, settings: TreemapLayoutSettings): boolean {
		for (let i = 0; i < list.count; i++) {
			let item = list._inner[i];
			if (!omitted.contains(item)) {
				return false;
			}
		}
		return true;
	}
	protected static boundsTooSmall(bounds: Rect, settings: TreemapLayoutSettings): boolean {
		if (bounds.width < settings.minimumDisplaySize || bounds.height < settings.minimumDisplaySize) {
			return true;
		}
		return false;
	}
	protected getBounds(treemap: TreemapFrame, node: TreemapTreeNode, settings: TreemapLayoutSettings): Rect {
		return treemap.getBounds(node);
	}
	protected getUnadjustedBounds(treemap: TreemapFrame, node: TreemapTreeNode, settings: TreemapLayoutSettings): Rect {
		let bounds = treemap.getBounds(node);
		if (bounds.isEmpty) {
			return bounds;
		}
		if (node.children != null && node.children.count > 0) {
			let margin = settings.nodeMargin;
			let adjustedWidth = margin.left + margin.right;
			let adjustedHeight = margin.top + margin.bottom;
			let isAdjusted: boolean = treemap.getIsAdjustedBounds(node);
			if (!isAdjusted) {
				return bounds;
			}
			let newBounds = new Rect(0, bounds.left - margin.left, bounds.top - margin.top, bounds.width + adjustedWidth, bounds.height + adjustedHeight);
			return newBounds;
		} else {
			return bounds;
		}
	}
	protected setBounds(treemap: TreemapFrame, node: TreemapTreeNode, bounds: Rect, settings: TreemapLayoutSettings): void {
		if (node.children != null && node.children.count > 0) {
			let margin = settings.nodeMargin;
			let adjustedWidth = margin.left + margin.right;
			let adjustedHeight = margin.top + margin.bottom;
			if (bounds.width < adjustedWidth || bounds.height < adjustedHeight) {
				treemap.setBounds(node, bounds);
				return;
			}
			let newBounds = new Rect(0, bounds.left + margin.left, bounds.top + margin.top, bounds.width - adjustedWidth, bounds.height - adjustedHeight);
			treemap.setBounds(node, newBounds);
			treemap.setIsAdjustedBounds(node, true);
		} else {
			treemap.setBounds(node, bounds);
		}
	}
	protected distributeRemainingWidth(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, row: List$1<TreemapTreeNode>, remainingWidth: number, container: Rect, settings: TreemapLayoutSettings): void {
		if (!TreemapLayoutCalculator.areTooSmall(omitted, frame, row, container, settings)) {
			while (remainingWidth > 0) {
				let offset: number = 0;
				for (let item of fromEnum<TreemapTreeNode>(row)) {
					if (omitted.contains(item)) {
						continue;
					}
					if (remainingWidth > 0) {
						let additionalWidth: number = (remainingWidth > 1) ? 1 : remainingWidth;
						let bounds = this.getUnadjustedBounds(frame, item, settings);
						if (bounds.isEmpty) {
							continue;
						}
						this.setBounds(frame, item, new Rect(0, bounds.x + offset, bounds.y, bounds.width + additionalWidth, bounds.height), settings);
						remainingWidth -= additionalWidth;
						offset += additionalWidth;
					} else {
						let bounds1 = this.getUnadjustedBounds(frame, item, settings);
						if (bounds1.isEmpty) {
							continue;
						}
						this.setBounds(frame, item, new Rect(0, bounds1.x + offset, bounds1.y, bounds1.width, bounds1.height), settings);
					}
				}
			}
		}
	}
	protected distributeRemainingHeight(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, column: List$1<TreemapTreeNode>, remainingHeight: number, container: Rect, settings: TreemapLayoutSettings): void {
		if (!TreemapLayoutCalculator.areTooSmall(omitted, frame, column, container, settings)) {
			while (remainingHeight > 0) {
				let offset: number = 0;
				for (let item of fromEnum<TreemapTreeNode>(column)) {
					if (omitted.contains(item)) {
						continue;
					}
					if (remainingHeight > 0) {
						let additionalHeight: number = (remainingHeight > 1) ? 1 : remainingHeight;
						let bounds = this.getUnadjustedBounds(frame, item, settings);
						if (bounds.isEmpty) {
							continue;
						}
						this.setBounds(frame, item, new Rect(0, bounds.x, bounds.y + offset, bounds.width, bounds.height + additionalHeight), settings);
						remainingHeight -= additionalHeight;
						offset += additionalHeight;
					} else {
						let bounds1 = this.getUnadjustedBounds(frame, item, settings);
						if (bounds1.isEmpty) {
							continue;
						}
						this.setBounds(frame, item, new Rect(0, bounds1.x, bounds1.y + offset, bounds1.width, bounds1.height), settings);
					}
				}
			}
		}
	}
}

/**
 * @hidden 
 */
export class StrippedCalculator extends TreemapLayoutCalculator {
	static $t: Type = markType(StrippedCalculator, 'StrippedCalculator', (<any>TreemapLayoutCalculator).$type);
	calculateLayout(frame: TreemapFrame, settings: TreemapLayoutSettings): void {
		frame.clear();
		this.calculateHelper(frame, settings.treeData.root, settings.viewport, settings, 0);
	}
	private getNodePadding(current: TreemapTreeNode, bounds: Rect, settings: TreemapLayoutSettings): Thickness {
		return settings.nodePadding;
	}
	protected calculateHelper(frame: TreemapFrame, current: TreemapTreeNode, bounds: Rect, settings: TreemapLayoutSettings, depth: number): void {
		if (settings.maxDepth >= 0 && depth > settings.maxDepth) {
			return;
		}
		if (current == settings.drillNode) {
			settings.isVisible = true;
			this.setBounds(frame, current, bounds, settings);
			let buffered = new Rect(0, bounds.left, bounds.top + settings.headerHeight, bounds.width, bounds.height - settings.headerHeight);
			bounds = buffered;
		}
		if (!settings.isVisible) {
			for (let child of fromEnum<TreemapTreeNode>(current.children)) {
				this.calculateHelper(frame, child, bounds, settings, depth + 1);
			}
			return;
		}
		let padding: Thickness = this.getNodePadding(current, bounds, settings);
		let horizontalPadding: number = padding.left + padding.right;
		let verticalPadding: number = padding.top + padding.bottom;
		let container_o: Rect = new Rect(0, bounds.left, bounds.top, bounds.width, bounds.height);
		let direction: TreemapOrientation = settings.layoutOrientation;
		if (horizontalPadding >= container_o.width || verticalPadding >= container_o.height) {
			return;
		}
		container_o.x = container_o.x + padding.left;
		container_o.width = container_o.width - horizontalPadding;
		container_o.y = container_o.y + padding.top;
		container_o.height = container_o.height - verticalPadding;
		let omitted: HashSet$1<TreemapTreeNode> = new HashSet$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		StrippedCalculator.determineTooSamllItems(omitted, settings, current.children, container_o);
		let remainingArea: number = 0;
		for (let i = 0; i < current.children.count; i++) {
			let currChild = current.children._inner[i];
			if (!omitted.contains(currChild)) {
				remainingArea += currChild.getArea();
			}
		}
		let area: number = remainingArea;
		let sizeCoef: number = (container_o.width * container_o.height) / area;
		let stripLength: number = direction == TreemapOrientation.Horizontal ? container_o.width : container_o.height;
		let previousStrip: List$1<TreemapTreeNode> = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		let currentStrip: List$1<TreemapTreeNode> = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		for (let i1 = 0; i1 < current.children.count; i1++) {
			let child1 = current.children._inner[i1];
			if (omitted.contains(child1) || isNaN_(child1.getArea())) {
				continue;
			}
			let avgRatio1: number = StrippedCalculator.calculateAverageStripRatio(currentStrip, stripLength, sizeCoef);
			currentStrip.add(child1);
			let avgRatio2: number = StrippedCalculator.calculateAverageStripRatio(currentStrip, stripLength, sizeCoef);
			if (avgRatio1 < avgRatio2) {
				if (previousStrip.count > 0) {
					let $ret = this.addStrip(omitted, frame, settings, previousStrip, sizeCoef, container_o, direction, false);
					container_o = $ret.p5;
				}
				Debug.assert(previousStrip.count == 0);
				currentStrip.removeAt(currentStrip.count - 1);
				previousStrip.addRange(currentStrip);
				currentStrip.clear();
				currentStrip.add(child1);
			}
		}
		let previousRatio: number = StrippedCalculator.calculateAverageStripRatio(previousStrip, stripLength, sizeCoef);
		let currentRatio: number = StrippedCalculator.calculateAverageStripRatio(currentStrip, stripLength, sizeCoef);
		let mergedStrip: List$1<TreemapTreeNode> = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		mergedStrip.addRange(previousStrip);
		mergedStrip.addRange(currentStrip);
		let mergedRatio: number = StrippedCalculator.calculateAverageStripRatio(mergedStrip, stripLength, sizeCoef);
		if (mergedRatio < (previousRatio + currentRatio) / 2 || container_o.height < settings.minimumDisplaySize * 2) {
			let $ret1 = this.addStrip(omitted, frame, settings, mergedStrip, sizeCoef, container_o, direction, true);
			container_o = $ret1.p5;
		} else {
			let $ret2 = this.addStrip(omitted, frame, settings, previousStrip, sizeCoef, container_o, direction, false);
			container_o = $ret2.p5;
			let $ret3 = this.addStrip(omitted, frame, settings, currentStrip, sizeCoef, container_o, direction, true);
			container_o = $ret3.p5;
		}
		for (let i2 = 0; i2 < current.children.count; i2++) {
			let child2 = current.children._inner[i2];
			if (omitted.contains(child2)) {
				continue;
			}
			let childBounds = this.getBounds(frame, child2, settings);
			if (childBounds.isEmpty) {
				continue;
			}
			let buffered1 = new Rect(0, childBounds.left, childBounds.top + settings.headerHeight, childBounds.width, Math.max(childBounds.height - settings.headerHeight, 0));
			this.calculateHelper(frame, child2, buffered1, settings, depth + 1);
		}
		if (current == settings.drillNode) {
			settings.isVisible = false;
		}
	}
	private addStrip(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, settings: TreemapLayoutSettings, strip: List$1<TreemapTreeNode>, sizeCoef: number, container: Rect, direction: TreemapOrientation, lastStrip: boolean): { p5?: Rect; } {
		if (strip.count == 0) {
			return {
				p5: container

			};
		}
		if (direction == TreemapOrientation.Horizontal) {
			let $ret = this.addHorizontalStrip(omitted, frame, settings, strip, sizeCoef, container, lastStrip);
			container = $ret.p5;
		} else {
			let $ret1 = this.addVerticalStrip(omitted, frame, settings, strip, sizeCoef, container, lastStrip);
			container = $ret1.p5;
		}
		return {
			p5: container

		};
	}
	private addHorizontalStrip(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, settings: TreemapLayoutSettings, strip: List$1<TreemapTreeNode>, sizeCoef: number, container: Rect, lastStrip: boolean): { p5?: Rect; } {
		let stripArea: number = StrippedCalculator.calculateStripArea(strip);
		if (stripArea <= 0) {
			return {
				p5: container

			};
		}
		let stripLength: number = container.width;
		let stripThickness: number = (stripArea * sizeCoef) / stripLength;
		let itemPos: number = container.x;
		let lastRight: number = 0;
		for (let i: number = 0; i < strip.count; ++i) {
			let item: TreemapTreeNode = strip._inner[i];
			Debug.assert(!omitted.contains(item));
			let itemLength: number = Math.floor((item.getArea() / stripArea) * stripLength);
			let itemRect: Rect = new Rect(0, itemPos, container.y, itemLength, stripThickness);
			if (TreemapLayoutCalculator.boundsTooSmall(itemRect, settings)) {
				omitted.add_1(item);
			} else {
				lastRight = itemRect.right;
				this.setBounds(frame, item, itemRect, settings);
			}
			if (omitted.contains(item)) {
				stripArea -= item.getArea();
			} else {
				itemPos += itemLength;
			}
		}
		this.distributeRemainingWidth(omitted, frame, strip, container.right - itemPos, container, settings);
		container.y = container.y + stripThickness;
		if (container.height < stripThickness) {
			container.height = 0;
		} else {
			container.height = container.height - stripThickness;
		}
		strip.clear();
		return {
			p5: container

		};
	}
	private addVerticalStrip(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, settings: TreemapLayoutSettings, strip: List$1<TreemapTreeNode>, sizeCoef: number, container: Rect, lastStrip: boolean): { p5?: Rect; } {
		let stripArea: number = StrippedCalculator.calculateStripArea(strip);
		if (stripArea <= 0) {
			return {
				p5: container

			};
		}
		let stripLength: number = container.height;
		let stripThickness: number = (stripArea * sizeCoef) / stripLength;
		let itemPos: number = container.y;
		let lastBottom: number = 0;
		for (let i: number = 0; i < strip.count; ++i) {
			let item: TreemapTreeNode = strip._inner[i];
			let itemLength: number = Math.floor((item.getArea() / stripArea) * stripLength);
			let itemRect: Rect = new Rect(0, container.x, itemPos, stripThickness, itemLength);
			if (TreemapLayoutCalculator.boundsTooSmall(itemRect, settings)) {
				omitted.add_1(item);
			} else {
				lastBottom = itemRect.bottom;
				this.setBounds(frame, item, itemRect, settings);
			}
			if (omitted.contains(item)) {
				stripArea -= item.getArea();
			} else {
				itemPos += itemLength;
			}
		}
		this.distributeRemainingHeight(omitted, frame, strip, container.bottom - itemPos, container, settings);
		container.x = container.x + stripThickness;
		if (container.width < stripThickness) {
			container.width = 0;
		} else {
			container.width = container.width - stripThickness;
		}
		strip.clear();
		return {
			p5: container

		};
	}
	private static calculateAverageStripRatio(strip: List$1<TreemapTreeNode>, stripLength: number, sizeCoef: number): number {
		if (strip.count == 0) {
			return 1.7976931348623157E+308;
		}
		let stripArea: number = StrippedCalculator.calculateStripArea(strip);
		let stripThickness: number = (stripArea * sizeCoef) / stripLength;
		let averageCoef: number = 0;
		for (let i = 0; i < strip.count; i++) {
			let item = strip._inner[i];
			let childLength: number = (item.getArea() / stripArea) * stripLength;
			averageCoef += Math.max(childLength / stripThickness, stripThickness / childLength);
		}
		averageCoef /= strip.count;
		return averageCoef;
	}
	private static calculateStripArea(strip: List$1<TreemapTreeNode>): number {
		let stripArea: number = 0;
		for (let i = 0; i < strip.count; i++) {
			let item = strip._inner[i];
			stripArea += item.getArea();
		}
		return stripArea;
	}
	private static determineTooSamllItems(omitted: HashSet$1<TreemapTreeNode>, settings: TreemapLayoutSettings, items: List$1<TreemapTreeNode>, container: Rect): void {
		let remainingArea: number = 0;
		for (let i = 0; i < items.count; i++) {
			let currChild = items._inner[i];
		}
		let area: number = remainingArea;
		let minSizeRatio: number = settings.minimumDisplaySize * settings.minimumDisplaySize / (container.width * container.height);
		for (let i1 = 0; i1 < items.count; i1++) {
			let item = items._inner[i1];
			if (item.getArea() / area < minSizeRatio) {
				omitted.add_1(item);
			}
		}
	}
}

/**
 * @hidden 
 */
export class SliceAndDiceCalculator extends TreemapLayoutCalculator {
	static $t: Type = markType(SliceAndDiceCalculator, 'SliceAndDiceCalculator', (<any>TreemapLayoutCalculator).$type);
	calculateLayout(frame: TreemapFrame, settings: TreemapLayoutSettings): void {
		frame.clear();
		this.calculateHelper(frame, settings.treeData.root, settings.viewport, settings, 0);
	}
	private getNodePadding(current: TreemapTreeNode, bounds: Rect, settings: TreemapLayoutSettings): Thickness {
		return settings.nodePadding;
	}
	protected calculateHelper(frame: TreemapFrame, current: TreemapTreeNode, bounds: Rect, settings: TreemapLayoutSettings, depth: number): void {
		if (settings.maxDepth >= 0 && depth > settings.maxDepth) {
			return;
		}
		if (current == settings.drillNode) {
			settings.isVisible = true;
			this.setBounds(frame, current, bounds, settings);
			let buffered = new Rect(0, bounds.left, bounds.top + settings.headerHeight, bounds.width, bounds.height - settings.headerHeight);
			bounds = buffered;
		}
		if (!settings.isVisible) {
			for (let child of fromEnum<TreemapTreeNode>(current.children)) {
				this.calculateHelper(frame, child, bounds, settings, depth + 1);
			}
			return;
		}
		let padding: Thickness = this.getNodePadding(current, bounds, settings);
		let direction: TreemapOrientation = SliceAndDiceCalculator.determineLayoutDirection(current, settings, depth);
		let horizontalPadding: number = padding.left + padding.right;
		let verticalPadding: number = padding.top + padding.bottom;
		let container: Rect = new Rect(0, bounds.left, bounds.top, bounds.width, bounds.height);
		if (horizontalPadding >= container.width || verticalPadding >= container.height) {
			return;
		}
		container.x = container.x + padding.left;
		container.width = container.width - horizontalPadding;
		container.y = container.y + padding.top;
		container.height = container.height - verticalPadding;
		let availableSize: Size = new Size(1, container.width, container.height);
		let currentLeft: number = container.left;
		let currentTop: number = container.top;
		let omitted: HashSet$1<TreemapTreeNode> = new HashSet$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		let allTooSmall: boolean = SliceAndDiceCalculator.determineTooSmallItems(current.children, current, settings, availableSize, omitted);
		if (allTooSmall) {
			SliceAndDiceCalculator.determineBiggestItems(current.children, current, settings, availableSize, omitted);
		}
		let remainingArea: number = 0;
		for (let i = 0; i < current.children.count; i++) {
			let currChild = current.children._inner[i];
			if (!omitted.contains(currChild)) {
				remainingArea += currChild.getArea();
			}
		}
		let remainingSpace: number = (direction == TreemapOrientation.Horizontal) ? availableSize.height : availableSize.width;
		let currentChildRect: Rect = new Rect(4);
		for (let i1 = 0; i1 < current.children.count; i1++) {
			let child1 = current.children._inner[i1];
			if (omitted.contains(child1) || isNaN_(child1.getArea())) {
				continue;
			}
			if (remainingArea <= 0 || remainingSpace <= 0) {
				break;
			}
			let sizeCoef: number = child1.getArea() / remainingArea;
			currentChildRect.x = currentLeft;
			currentChildRect.y = currentTop;
			if (direction == TreemapOrientation.Horizontal) {
				currentChildRect.width = availableSize.width;
				currentChildRect.height = Math.round(remainingSpace * sizeCoef);
			} else {
				currentChildRect.width = Math.round(remainingSpace * sizeCoef);
				currentChildRect.height = availableSize.height;
			}
			this.setBounds(frame, child1, new Rect(0, currentChildRect.left, currentChildRect.top, currentChildRect.width, currentChildRect.height), settings);
			if (direction == TreemapOrientation.Horizontal) {
				currentTop += currentChildRect.height;
				remainingSpace -= currentChildRect.height;
			} else {
				currentLeft += currentChildRect.width;
				remainingSpace -= currentChildRect.width;
			}
			remainingArea -= child1.getArea();
			let childBounds = this.getBounds(frame, child1, settings);
			if (childBounds.isEmpty) {
				continue;
			}
			let buffered1 = new Rect(0, childBounds.left, childBounds.top + settings.headerHeight, childBounds.width, Math.max(childBounds.height - settings.headerHeight, 0));
			this.calculateHelper(frame, child1, buffered1, settings, depth + 1);
		}
		if (current == settings.drillNode) {
			settings.isVisible = false;
		}
	}
	static determineLayoutDirection(node: TreemapTreeNode, settings: TreemapLayoutSettings, depth: number): TreemapOrientation {
		let direction: TreemapOrientation = TreemapOrientation.Horizontal;
		if (settings.layoutOrientation == TreemapOrientation.Horizontal) {
			direction = (depth % 2 == 0) ? TreemapOrientation.Horizontal : TreemapOrientation.Vertical;
		} else {
			direction = (depth % 2 == 0) ? TreemapOrientation.Vertical : TreemapOrientation.Horizontal;
		}
		return direction;
	}
	private static determineTooSmallItems(items: List$1<TreemapTreeNode>, currrent: TreemapTreeNode, settings: TreemapLayoutSettings, availableSize: Size, omitted: HashSet$1<TreemapTreeNode>): boolean {
		let allTooSmall: boolean = true;
		let area: number = currrent.getArea();
		let minSize: number = Math.min(availableSize.width, availableSize.height);
		for (let i = 0; i < items.count; i++) {
			let item = items._inner[i];
			if (Math.round(item.getArea() / area * minSize) < settings.minimumDisplaySize) {
				if (!omitted.contains(item)) {
					omitted.add_1(item);
				}
			} else {
				allTooSmall = false;
			}
		}
		return allTooSmall;
	}
	private static determineBiggestItems(items: List$1<TreemapTreeNode>, currrent: TreemapTreeNode, settings: TreemapLayoutSettings, availableSize: Size, omitted: HashSet$1<TreemapTreeNode>): void {
		let sortedList: List$1<TreemapTreeNode> = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		sortedList.addRange(items);
		sortedList.sort2((item1: TreemapTreeNode, item2: TreemapTreeNode) => {
			if (item1.getArea() > item2.getArea()) {
				return 1;
			} else if (item1.getArea() < item2.getArea()) {
				return -1;
			}
			return 0;
		});
		let sum: number = 0;
		let minSize: number = Math.min(availableSize.width, availableSize.height);
		for (let i = 0; i < sortedList.count; i++) {
			let child = sortedList._inner[i];
			if (isNaN_(child.getArea())) {
				continue;
			}
			sum += child.getArea();
			if (child.getArea() / sum * minSize < settings.minimumDisplaySize) {
				break;
			} else {
				if (omitted.contains(child)) {
					omitted.remove(child);
				}
			}
		}
	}
	private static _list: any = null;
	static get list(): any {
		return SliceAndDiceCalculator._list;
	}
	static set list(value: any) {
		SliceAndDiceCalculator._list = value;
	}
}

/**
 * @hidden 
 */
export class TreemapLayoutSettings extends Base {
	static $t: Type = markType(TreemapLayoutSettings, 'TreemapLayoutSettings');
	constructor() {
		super();
		this.maxDepth = -1;
		this.isVisible = false;
	}
	private _layoutOrientation: TreemapOrientation = <TreemapOrientation>0;
	get layoutOrientation(): TreemapOrientation {
		return this._layoutOrientation;
	}
	set layoutOrientation(value: TreemapOrientation) {
		this._layoutOrientation = value;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _treeData: TreemapTreeData = null;
	get treeData(): TreemapTreeData {
		return this._treeData;
	}
	set treeData(value: TreemapTreeData) {
		this._treeData = value;
	}
	private _nodePadding: Thickness = null;
	get nodePadding(): Thickness {
		return this._nodePadding;
	}
	set nodePadding(value: Thickness) {
		this._nodePadding = value;
	}
	private _nodeMargin: Thickness = null;
	get nodeMargin(): Thickness {
		return this._nodeMargin;
	}
	set nodeMargin(value: Thickness) {
		this._nodeMargin = value;
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
	}
	private _minimumDisplaySize: number = 0;
	get minimumDisplaySize(): number {
		return this._minimumDisplaySize;
	}
	set minimumDisplaySize(value: number) {
		this._minimumDisplaySize = value;
	}
	private _maxDepth: number = 0;
	get maxDepth(): number {
		return this._maxDepth;
	}
	set maxDepth(value: number) {
		this._maxDepth = value;
	}
	private _drillNode: TreemapTreeNode = null;
	get drillNode(): TreemapTreeNode {
		return this._drillNode;
	}
	set drillNode(value: TreemapTreeNode) {
		this._drillNode = value;
	}
	private _isVisible: boolean = false;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		this._isVisible = value;
	}
}

/**
 * @hidden 
 */
export class SquarifiedCalculator extends TreemapLayoutCalculator {
	static $t: Type = markType(SquarifiedCalculator, 'SquarifiedCalculator', (<any>TreemapLayoutCalculator).$type);
	protected calculateHelper(frame: TreemapFrame, current: TreemapTreeNode, bounds: Rect, settings: TreemapLayoutSettings, depth: number): void {
		if (settings.maxDepth >= 0 && depth > settings.maxDepth) {
			return;
		}
		if (current == settings.drillNode) {
			settings.isVisible = true;
			this.setBounds(frame, current, bounds, settings);
			let buffered = new Rect(0, bounds.left, bounds.top + settings.headerHeight, bounds.width, bounds.height - settings.headerHeight);
			bounds = buffered;
		}
		if (!settings.isVisible) {
			for (let child of fromEnum<TreemapTreeNode>(current.children)) {
				this.calculateHelper(frame, child, bounds, settings, depth + 1);
			}
			return;
		}
		let padding: Thickness = this.getNodePadding(current, bounds, settings);
		let container_o: Rect = new Rect(0, bounds.left, bounds.top, bounds.width, bounds.height);
		let horizontalPadding: number = padding.left + padding.right;
		let verticalPadding: number = padding.top + padding.bottom;
		if (horizontalPadding >= container_o.width || verticalPadding >= container_o.height) {
			return;
		}
		container_o.x = container_o.x + padding.left;
		container_o.width = container_o.width - horizontalPadding;
		container_o.y = container_o.y + padding.top;
		container_o.height = container_o.height - verticalPadding;
		let currentLeft: number = container_o.left;
		let currentTop: number = container_o.top;
		let items: List$1<TreemapTreeNode> = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		let area: number = current.getArea();
		let origCont = new Rect(0, container_o.left, container_o.top, container_o.width, container_o.height);
		let sizeCoef: number = (container_o.width * container_o.height) / area;
		let sortedChildren: List$1<TreemapTreeNode> = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 1, current.children);
		sortedChildren.sort2((n1: TreemapTreeNode, n2: TreemapTreeNode) => {
			if (n2.getArea() < n1.getArea()) {
				return -1;
			}
			if (n2.getArea() > n1.getArea()) {
				return 1;
			}
			return 0;
		});
		let areaInfo: AreaInfo = new AreaInfo();
		areaInfo.bounds = container_o;
		areaInfo.remainingArea = area;
		let omitted: HashSet$1<TreemapTreeNode> = new HashSet$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		for (let child1 of fromEnum<TreemapTreeNode>(sortedChildren)) {
			if (TreemapLayoutCalculator.tooSmall(child1, origCont, area, settings) || isNaN_(child1.getArea())) {
				omitted.add_1(child1);
				continue;
			}
			let layoutSize: number = Math.min(container_o.width, container_o.height);
			let ratio1: number = SquarifiedCalculator.worstRatio(items, layoutSize, sizeCoef);
			items.add(child1);
			let ratio2: number = SquarifiedCalculator.worstRatio(items, layoutSize, sizeCoef);
			if (ratio1 <= ratio2) {
				items.removeAt(items.count - 1);
				this.addItems(omitted, frame, items, areaInfo, settings);
				container_o = areaInfo.bounds;
				items.add(child1);
			}
		}
		this.addItems(omitted, frame, items, areaInfo, settings);
		container_o = areaInfo.bounds;
		for (let child2 of fromEnum<TreemapTreeNode>(current.children)) {
			if (omitted.contains(child2)) {
				continue;
			}
			let childBounds = this.getBounds(frame, child2, settings);
			if (childBounds.isEmpty) {
				continue;
			}
			let buffered1 = new Rect(0, childBounds.left, childBounds.top + settings.headerHeight, childBounds.width, Math.max(childBounds.height - settings.headerHeight, 0));
			this.calculateHelper(frame, child2, buffered1, settings, depth + 1);
		}
		if (current == settings.drillNode) {
			settings.isVisible = false;
		}
	}
	private getNodePadding(current: TreemapTreeNode, bounds: Rect, settings: TreemapLayoutSettings): Thickness {
		return settings.nodePadding;
	}
	private static worstRatio(items: List$1<TreemapTreeNode>, layoutSize: number, sizeCoef: number): number {
		if (items.count == 0) {
			return 1.7976931348623157E+308;
		}
		let sumArea: number = 0;
		let minArea: number = 1.7976931348623157E+308;
		let maxArea: number = -1.7976931348623157E+308;
		for (let item of fromEnum<TreemapTreeNode>(items)) {
			let area: number = item.getArea() * sizeCoef;
			if (minArea > area) {
				minArea = area;
			}
			if (maxArea < area) {
				maxArea = area;
			}
			sumArea += area;
		}
		let ratio1: number = (layoutSize * layoutSize * maxArea) / (sumArea * sumArea);
		let ratio2: number = (sumArea * sumArea) / (layoutSize * layoutSize * minArea);
		return Math.max(ratio1, ratio2);
	}
	private addItems(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, items: List$1<TreemapTreeNode>, areaInfo: AreaInfo, settings: TreemapLayoutSettings): void {
		if (items.count < 1) {
			return;
		}
		let area: number = 0;
		for (let j: number = 0; j < items.count; ++j) {
			area += items._inner[j].getArea();
		}
		if (area <= 0) {
			return;
		}
		if (areaInfo.bounds.width > areaInfo.bounds.height) {
			this.addColumn(omitted, frame, items, area, areaInfo, settings);
		} else {
			this.addRow(omitted, frame, items, area, areaInfo, settings);
		}
	}
	private addRow(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, row: List$1<TreemapTreeNode>, rowArea: number, areaInfo: AreaInfo, settings: TreemapLayoutSettings): void {
		let container = areaInfo.bounds;
		let remainingArea = areaInfo.remainingArea;
		let height: number = Math.round((rowArea / remainingArea) * container.height);
		let posX: number = container.x;
		for (let i: number = 0; i < row.count; ++i) {
			let item: TreemapTreeNode = row._inner[i];
			if (container.right < posX) {
				omitted.add_1(item);
				continue;
			}
			let width: number = Math.floor((item.getArea() / rowArea) * container.width);
			let childRect: Rect = new Rect(0, posX, container.y, width, height);
			if (TreemapLayoutCalculator.boundsTooSmall(childRect, settings)) {
				omitted.add_1(item);
				continue;
			}
			this.setBounds(frame, item, childRect, settings);
			posX += childRect.width;
		}
		this.distributeRemainingWidth(omitted, frame, row, container.right - posX, container, settings);
		container.y = container.y + height;
		if (container.height < height) {
			container.height = 0;
		} else {
			container.height = container.height - height;
		}
		remainingArea -= rowArea;
		areaInfo.remainingArea = remainingArea;
		areaInfo.bounds = container;
		row.clear();
	}
	private addColumn(omitted: HashSet$1<TreemapTreeNode>, frame: TreemapFrame, column: List$1<TreemapTreeNode>, columnArea: number, areaInfo: AreaInfo, settings: TreemapLayoutSettings): void {
		let container = areaInfo.bounds;
		let remainingArea = areaInfo.remainingArea;
		let width: number = Math.round((columnArea / remainingArea) * container.width);
		let posY: number = container.y;
		for (let i: number = 0; i < column.count; ++i) {
			let item: TreemapTreeNode = column._inner[i];
			if (container.bottom < posY) {
				omitted.add_1(item);
				continue;
			}
			let height: number = Math.floor((item.getArea() / columnArea) * container.height);
			let childRect: Rect = new Rect(0, container.x, posY, width, height);
			if (TreemapLayoutCalculator.boundsTooSmall(childRect, settings)) {
				omitted.add_1(item);
				continue;
			}
			this.setBounds(frame, item, childRect, settings);
			posY += childRect.height;
		}
		this.distributeRemainingHeight(omitted, frame, column, container.bottom - posY, container, settings);
		container.x = container.x + width;
		if (container.width < width) {
			container.width = 0;
		} else {
			container.width = container.width - width;
		}
		remainingArea -= columnArea;
		areaInfo.remainingArea = remainingArea;
		areaInfo.bounds = container;
		column.clear();
	}
	calculateLayout(frame: TreemapFrame, settings: TreemapLayoutSettings): void {
		frame.clear();
		this.calculateHelper(frame, settings.treeData.root, settings.viewport, settings, 0);
	}
}

/**
 * @hidden 
 */
export class TreemapTreeData extends Base {
	static $t: Type = markType(TreemapTreeData, 'TreemapTreeData');
	constructor() {
		super();
		this.allNodes = new Dictionary$2<string, TreemapTreeNode>(String_$type, (<any>TreemapTreeNode).$type, 0);
		this.allKeys = new List$1<string>(String_$type, 0);
		this.pendingByParent = new Dictionary$2<string, List$1<TreemapTreeNode>>(String_$type, (<any>List$1).$type.specialize((<any>TreemapTreeNode).$type), 0);
		this.root = new TreemapTreeNode();
	}
	private _root: TreemapTreeNode = null;
	get root(): TreemapTreeNode {
		return this._root;
	}
	set root(value: TreemapTreeNode) {
		this._root = value;
	}
	private _allNodes: Dictionary$2<string, TreemapTreeNode> = null;
	get allNodes(): Dictionary$2<string, TreemapTreeNode> {
		return this._allNodes;
	}
	set allNodes(value: Dictionary$2<string, TreemapTreeNode>) {
		this._allNodes = value;
	}
	private _allKeys: List$1<string> = null;
	get allKeys(): List$1<string> {
		return this._allKeys;
	}
	set allKeys(value: List$1<string>) {
		this._allKeys = value;
	}
	private _pendingByParent: Dictionary$2<string, List$1<TreemapTreeNode>> = null;
	get pendingByParent(): Dictionary$2<string, List$1<TreemapTreeNode>> {
		return this._pendingByParent;
	}
	set pendingByParent(value: Dictionary$2<string, List$1<TreemapTreeNode>>) {
		this._pendingByParent = value;
	}
	addNode(toAdd: TreemapTreeNode): void {
		this.allNodes.addItem(toAdd.iD, toAdd);
		this.allKeys.add(toAdd.iD);
		if (toAdd.parentID == null) {
			this.root.children.add(toAdd);
		} else if (this.allNodes.containsKey(toAdd.parentID)) {
			this.allNodes.item(toAdd.parentID).children.add(toAdd);
		} else {
			let pending: List$1<TreemapTreeNode>;
			if (!((() => { let $ret = this.pendingByParent.tryGetValue(toAdd.parentID, pending); pending = $ret.p1; return $ret.ret; })())) {
				pending = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
				this.pendingByParent.item(toAdd.parentID, pending);
			}
			pending.add(toAdd);
		}
		if (this.pendingByParent.containsKey(toAdd.iD)) {
			for (let node of fromEnum<TreemapTreeNode>(this.pendingByParent.item(toAdd.iD))) {
				toAdd.children.add(node);
			}
			this.pendingByParent.removeItem(toAdd.iD);
		}
	}
	private sumHelper(current: TreemapTreeNode): void {
		if (isNaN_(current.value)) {
			if (current.children.count > 0) {
				current.childSum = 0;
			}
			for (let i = 0; i < current.children.count; i++) {
				let child = current.children._inner[i];
				this.sumHelper(child);
				if (isNaN_(child.value)) {
					current.childSum = current.childSum + child.childSum;
				} else {
					current.childSum = current.childSum + child.value;
				}
			}
		}
	}
	sum(): void {
		this.sumHelper(this.root);
	}
}

/**
 * @hidden 
 */
export class TreemapTreeNode extends Base {
	static $t: Type = markType(TreemapTreeNode, 'TreemapTreeNode');
	constructor() {
		super();
		this.children = new List$1<TreemapTreeNode>((<any>TreemapTreeNode).$type, 0);
		this.value = NaN;
		this.customValue = null;
		this.styleMappings = new List$1<TreemapNodeStyleMapping>((<any>TreemapNodeStyleMapping).$type, 0);
		this.childSum = 0;
	}
	private _iD: string = null;
	get iD(): string {
		return this._iD;
	}
	set iD(value: string) {
		this._iD = value;
	}
	private _parentID: string = null;
	get parentID(): string {
		return this._parentID;
	}
	set parentID(value: string) {
		this._parentID = value;
	}
	private _children: List$1<TreemapTreeNode> = null;
	get children(): List$1<TreemapTreeNode> {
		return this._children;
	}
	set children(value: List$1<TreemapTreeNode>) {
		this._children = value;
	}
	private _styleMappings: List$1<TreemapNodeStyleMapping> = null;
	get styleMappings(): List$1<TreemapNodeStyleMapping> {
		return this._styleMappings;
	}
	set styleMappings(value: List$1<TreemapNodeStyleMapping>) {
		this._styleMappings = value;
	}
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
	}
	private _customValue: any = null;
	get customValue(): any {
		return this._customValue;
	}
	set customValue(value: any) {
		this._customValue = value;
	}
	private _childSum: number = 0;
	get childSum(): number {
		return this._childSum;
	}
	set childSum(value: number) {
		this._childSum = value;
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
	private _sourceItem: any = null;
	get sourceItem(): any {
		return this._sourceItem;
	}
	set sourceItem(value: any) {
		this._sourceItem = value;
	}
	private _isVisible: boolean = false;
	get isVisible(): boolean {
		return this._isVisible;
	}
	set isVisible(value: boolean) {
		this._isVisible = value;
	}
	getArea(): number {
		if (isNaN_(this.value)) {
			return this.childSum;
		}
		return this.value;
	}
}

/**
 * @hidden 
 */
export class Treemap extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(Treemap, 'Treemap', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		let view: TreemapView = new TreemapView();
		view.model = this;
		this.layoutCalculator = new SquarifiedCalculator();
		this.view = view;
		this.view.onInit();
		this.fastItemsSource_Event = (o: any, e: FastItemsSourceEventArgs) => this.dataUpdatedOverride(e.action, e.position, e.count, e.propertyName);
		this._viewport = Rect.empty;
		this.previousFrame = new TreemapFrame();
		this.nextFrame = new TreemapFrame();
		this.currentFrame = new TreemapFrame();
		this.isDirty = true;
		this.animator = new DoubleAnimator(0, 1, this.transitionDuration);
		this.animator.easingFunction = EasingFunctions.cubicEase;
		let $t = this.animator;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this.animator_PropertyChanged));
		let $t1 = this._styleMappings;
		$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this._styleMappings_CollectionChanged));
		let $t2 = this._styleMappings;
		$t2.collectionResetting = delegateCombine($t2.collectionResetting, runOn(this, this._styleMappings_CollectionResetting));
	}
	private _styleMappings_CollectionResetting(sender: any, e: EventArgs): void {
		for (let item of fromEnum<TreemapNodeStyleMapping>(this.styleMappings)) {
			item.propertyChanged = delegateRemove(item.propertyChanged, runOn(this, this.styleMapping_PropertyChanged));
		}
		this.isDirty = true;
		this.isMappingDirty = true;
		this.view.scheduleArrange();
	}
	private _styleMappings_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let item of fromEn<any>(e.oldItems)) {
				let inpc = <INotifyPropertyChanged><any>item;
				if (inpc != null) {
					inpc.propertyChanged = delegateRemove(inpc.propertyChanged, runOn(this, this.styleMapping_PropertyChanged));
				}
			}
		}
		if (e.newItems != null) {
			for (let item1 of fromEn<any>(e.newItems)) {
				let inpc1 = <INotifyPropertyChanged><any>item1;
				if (inpc1 != null) {
					inpc1.propertyChanged = delegateCombine(inpc1.propertyChanged, runOn(this, this.styleMapping_PropertyChanged));
				}
			}
		}
		this.isDirty = true;
		this.isMappingDirty = true;
		this.view.scheduleArrange();
	}
	private styleMapping_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.isDirty = true;
		this.isMappingDirty = true;
		this.view.scheduleArrange();
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		this._treeData = null;
		this.isDirty = true;
		this.isDataDirty = true;
		this.isMappingDirty = true;
		this.view.scheduleArrange();
	}
	private _previousFrame: TreemapFrame = null;
	protected get previousFrame(): TreemapFrame {
		return this._previousFrame;
	}
	protected set previousFrame(value: TreemapFrame) {
		this._previousFrame = value;
	}
	private _nextFrame: TreemapFrame = null;
	protected get nextFrame(): TreemapFrame {
		return this._nextFrame;
	}
	protected set nextFrame(value: TreemapFrame) {
		this._nextFrame = value;
	}
	private _currentFrame: TreemapFrame = null;
	protected get currentFrame(): TreemapFrame {
		return this._currentFrame;
	}
	protected set currentFrame(value: TreemapFrame) {
		this._currentFrame = value;
	}
	notifySizeChanged(): void {
		this.view.notifySizeChanged();
	}
	destroy(): void {
		this.provideContainer(null);
	}
	exportVisualData(): TreemapVisualData {
		let treemapVisualData: TreemapVisualData = new TreemapVisualData();
		treemapVisualData.viewport = new RectData(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
		treemapVisualData.nodes = new TreemapNodeVisualDataList();
		this.view.exportViewShapes(treemapVisualData);
		return treemapVisualData;
	}
	exportSerializedVisualData(): string {
		let vd: TreemapVisualData = this.exportVisualData();
		vd.scaleByViewport();
		return vd.serialize();
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Treemap.focusItemPropertyName:
			this.onFocusItemChanged();
			break;

			case Treemap.layoutTypePropertyName:
			{
				switch (EnumUtil.getEnumValue<TreemapLayoutType>(TreemapLayoutType_$type, newValue)) {
					case TreemapLayoutType.Squarified:
					this.layoutCalculator = new SquarifiedCalculator();
					break;

					case TreemapLayoutType.SliceAndDice:
					this.layoutCalculator = new SliceAndDiceCalculator();
					break;

					case TreemapLayoutType.Stripped:
					this.layoutCalculator = new StrippedCalculator();
					break;

				}

				this.isDirty = true;
				this.view.scheduleArrange();
			}
			break;

			case Treemap.breadcrumbSequencePropertyName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.rootTitlePropertyName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.valueMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.valueColumn);
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
				this._treeData = null;
			}
			this.isDirty = true;
			this.isDataDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.customValueMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.customValueColumn);
				this.customValueColumn = this.registerObjectColumn(this.customValueMemberPath);
				this._treeData = null;
			}
			this.isDirty = true;
			this.isDataDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.idMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.iDColumn);
				this.iDColumn = this.registerObjectColumn(this.idMemberPath);
				this._treeData = null;
			}
			this.isDirty = true;
			this.isDataDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.labelMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.labelColumn);
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
				this._treeData = null;
			}
			this.isDirty = true;
			this.isDataDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.parentIdMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.parentIDColumn);
				this.parentIDColumn = this.registerObjectColumn(this.parentIdMemberPath);
				this._treeData = null;
			}
			this.isDirty = true;
			this.isDataDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.itemsSourcePropertyName:
			this.fastItemsSource = ((() => {
				let $ret = new FastItemsSource();
				$ret.itemsSource = <IEnumerable><any><any>this.dataSource;
				return $ret;
			})());
			break;

			case Treemap.headerLabelLeftMarginPropertyName:

			case Treemap.headerLabelTopMarginPropertyName:

			case Treemap.headerLabelRightMarginPropertyName:

			case Treemap.headerLabelBottomMarginPropertyName:

			case Treemap.labelLeftMarginPropertyName:

			case Treemap.labelTopMarginPropertyName:

			case Treemap.labelRightMarginPropertyName:

			case Treemap.labelBottomMarginPropertyName:

			case Treemap.parentNodeLeftMarginPropertyName:

			case Treemap.parentNodeTopMarginPropertyName:

			case Treemap.parentNodeRightMarginPropertyName:

			case Treemap.parentNodeBottomMarginPropertyName:

			case Treemap.parentNodeLeftPaddingPropertyName:

			case Treemap.parentNodeTopPaddingPropertyName:

			case Treemap.parentNodeRightPaddingPropertyName:

			case Treemap.parentNodeBottomPaddingPropertyName:

			case Treemap.headerTextColorPropertyName:

			case Treemap.headerHoverTextColorPropertyName:

			case Treemap.overlayHeaderHoverBackgroundPropertyName:

			case Treemap.headerHoverBackgroundPropertyName:

			case Treemap.strokeThicknessPropertyName:

			case Treemap.outlinePropertyName:

			case Treemap.fillBrushesPropertyName:

			case Treemap.isFillScaleLogarithmicPropertyName:

			case Treemap.fillScaleMinimumValuePropertyName:

			case Treemap.fillScaleMaximumValuePropertyName:

			case Treemap.headerBackgroundPropertyName:

			case Treemap.overlayHeaderBackgroundPropertyName:

			case Treemap.headerHeightPropertyName:

			case Treemap.fillScaleLogarithmBasePropertyName:

			case Treemap.fillScaleModePropertyName:

			case Treemap.minimumDisplaySizePropertyName:

			case Treemap.layoutOrientationPropertyName:

			case Treemap.labelHorizontalAlignmentPropertyName:

			case Treemap.labelVerticalAlignmentPropertyName:

			case Treemap.headerDisplayModePropertyName:

			case Treemap.labelHorizontalFitModePropertyName:

			case Treemap.labelVerticalFitModePropertyName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.textStylePropertyName:
			this.view.onTextStyleChanged(this.textStyle);
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.headerTextStylePropertyName:
			this.view.onHeaderTextStyleChanged(this.headerTextStyle);
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.pixelScalingRatioPropertyName:
			if (!isNaN_(<number>newValue)) {
				this.actualPixelScalingRatio = <number>newValue;
			}
			break;

			case Treemap.actualPixelScalingRatioPropertyName:
			if (isNaN_(this.interactionPixelScalingRatio)) {
				this.actualInteractionPixelScalingRatio = this.actualPixelScalingRatio / 2;
			}
			if (this.view != null) {
				this.view.onPixelScalingRatioChanged();
			}
			break;

			case Treemap.interactionPixelScalingRatioPropertyName:
			if (!isNaN_(<number>newValue)) {
				this.actualInteractionPixelScalingRatio = <number>newValue;
			}
			break;

			case Treemap.actualInteractionPixelScalingRatioPropertyName:
			if (this.view != null) {
				this.view.onPixelScalingRatioChanged();
			}
			break;

			case Treemap.transitionProgressPropertyName:
			if (this.transitionProgress >= 1) {
				this.animator.stop();
				this.view.onPixelScalingRatioChanged();
				let swap = this.nextFrame;
				this.nextFrame = this.previousFrame;
				this.previousFrame = swap;
				this.prepareFrame();
				this.renderFrame(this.nextFrame);
				this.view.renderComplete();
				this.view.scheduleArrange();
				return;
			}
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderFrame(this.currentFrame);
			this.view.renderComplete();
			break;

			case Treemap.viewportPropertyName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.fastItemsSourcePropertyName:
			let oldSource = <FastItemsSource>oldValue;
			let newSource = <FastItemsSource>newValue;
			if (oldValue != null) {
				oldSource.event = delegateRemove(oldSource.event, this.fastItemsSource_Event);
				this._fastItemsSourceAttached = false;
				oldSource.deregisterColumn(this.valueColumn);
				oldSource.deregisterColumn(this.iDColumn);
				oldSource.deregisterColumn(this.parentIDColumn);
				oldSource.deregisterColumn(this.labelColumn);
				oldSource.deregisterColumn(this.customValueColumn);
				this.valueColumn = null;
				this.iDColumn = null;
				this.parentIDColumn = null;
				this.labelColumn = null;
				this._treeData = null;
			}
			if (newValue != null) {
				newSource.event = delegateCombine(newSource.event, this.fastItemsSource_Event);
				this._fastItemsSourceAttached = true;
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
				this.iDColumn = this.registerObjectColumn(this.idMemberPath);
				this.parentIDColumn = this.registerObjectColumn(this.parentIdMemberPath);
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
				this.customValueColumn = this.registerObjectColumn(this.customValueMemberPath);
			}
			this.isDirty = true;
			this.isDataDirty = true;
			this.view.scheduleArrange();
			break;

			case Treemap.transitionDurationPropertyName:
			this.animator.intervalMilliseconds = this.transitionDuration;
			break;

		}

	}
	private _ignoreFocusChanges: boolean = false;
	private onFocusItemChanged(): void {
		if (this._ignoreFocusChanges) {
			return;
		}
		if (this._treeData == null) {
			return;
		}
		if (this.focusItem == null) {
			this.focusNode = null;
			this.isDirty = true;
			this.view.scheduleArrange();
			return;
		}
		for (let i = 0; i < this._treeData.allKeys.count; i++) {
			let node = this._treeData.allNodes.item(this._treeData.allKeys._inner[i]);
			if (node.sourceItem == this.focusItem) {
				this.focusNode = node;
				this.isDirty = true;
				this.view.scheduleArrange();
				break;
			}
		}
	}
	static readonly viewportPropertyName: string = "Viewport";
	private _view: TreemapView = null;
	get view(): TreemapView {
		return this._view;
	}
	set view(value: TreemapView) {
		this._view = value;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		let oldViewport = this._viewport;
		this._viewport = value;
		if (!oldViewport.equals1(this._viewport)) {
			this.onPropertyChanged(Treemap.viewportPropertyName, oldViewport, this._viewport);
		}
	}
	private animator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.transitionProgress = this.animator.transitionProgress;
	}
	private _animator: DoubleAnimator = null;
	protected get animator(): DoubleAnimator {
		return this._animator;
	}
	protected set animator(value: DoubleAnimator) {
		this._animator = value;
	}
	static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	private _valueMemberPath: string = null;
	get valueMemberPath(): string {
		return this._valueMemberPath;
	}
	set valueMemberPath(value: string) {
		let oldValue = this._valueMemberPath;
		this._valueMemberPath = value;
		if (oldValue != this._valueMemberPath) {
			this.propertyUpdatedOverride(Treemap.valueMemberPathPropertyName, oldValue, value);
		}
	}
	static readonly rootTitlePropertyName: string = "RootTitle";
	private _rootTitle: string = "Root";
	get rootTitle(): string {
		return this._rootTitle;
	}
	set rootTitle(value: string) {
		let oldValue = this._rootTitle;
		this._rootTitle = value;
		if (oldValue != this._rootTitle) {
			this.propertyUpdatedOverride(Treemap.rootTitlePropertyName, oldValue, value);
		}
	}
	static readonly breadcrumbSequencePropertyName: string = "BreadcrumbSequence";
	private _breadcrumbSequence: string = " : ";
	get breadcrumbSequence(): string {
		return this._breadcrumbSequence;
	}
	set breadcrumbSequence(value: string) {
		let oldValue = this._breadcrumbSequence;
		this._breadcrumbSequence = value;
		if (oldValue != this._rootTitle) {
			this.propertyUpdatedOverride(Treemap.breadcrumbSequencePropertyName, oldValue, value);
		}
	}
	static readonly parentIdMemberPathPropertyName: string = "ParentIdMemberPath";
	private _parentIdMemberPath: string = null;
	get parentIdMemberPath(): string {
		return this._parentIdMemberPath;
	}
	set parentIdMemberPath(value: string) {
		let oldValue = this._parentIdMemberPath;
		this._parentIdMemberPath = value;
		if (oldValue != this._parentIdMemberPath) {
			this.onPropertyChanged(Treemap.parentIdMemberPathPropertyName, oldValue, value);
		}
	}
	static readonly labelMemberPathPropertyName: string = "LabelMemberPath";
	private _labelMemberPath: string = null;
	get labelMemberPath(): string {
		return this._labelMemberPath;
	}
	set labelMemberPath(value: string) {
		let oldValue = this._labelMemberPath;
		this._labelMemberPath = value;
		if (oldValue != this._labelMemberPath) {
			this.onPropertyChanged(Treemap.labelMemberPathPropertyName, oldValue, value);
		}
	}
	static readonly customValueMemberPathPropertyName: string = "CustomValueMemberPath";
	private _customValueMemberPath: string = null;
	get customValueMemberPath(): string {
		return this._customValueMemberPath;
	}
	set customValueMemberPath(value: string) {
		let oldValue = this._customValueMemberPath;
		this._customValueMemberPath = value;
		if (oldValue != this._customValueMemberPath) {
			this.onPropertyChanged(Treemap.customValueMemberPathPropertyName, oldValue, value);
		}
	}
	static readonly idMemberPathPropertyName: string = "IdMemberPath";
	private _idMemberPath: string = null;
	get idMemberPath(): string {
		return this._idMemberPath;
	}
	set idMemberPath(value: string) {
		let oldValue = this._idMemberPath;
		this._idMemberPath = value;
		if (oldValue != this._idMemberPath) {
			this.onPropertyChanged(Treemap.idMemberPathPropertyName, oldValue, value);
		}
	}
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	private _itemsSource: IEnumerable = null;
	get dataSource(): IEnumerable {
		return this._itemsSource;
	}
	set dataSource(value: IEnumerable) {
		let oldValue = this._itemsSource;
		this._itemsSource = value;
		if (oldValue != this._itemsSource) {
			this.onPropertyChanged(Treemap.itemsSourcePropertyName, oldValue, value);
		}
	}
	static readonly fillBrushesPropertyName: string = "FillBrushes";
	private _fillBrushes: BrushCollection = new BrushCollection();
	get fillBrushes(): BrushCollection {
		return this._fillBrushes;
	}
	set fillBrushes(value: BrushCollection) {
		let oldValue = this._fillBrushes;
		this._fillBrushes = value;
		if (oldValue != this._fillBrushes) {
			this.onPropertyChanged(Treemap.fillBrushesPropertyName, oldValue, value);
		}
	}
	static readonly styleMappingsPropertyName: string = "StyleMappings";
	private _styleMappings: TreemapNodeStyleMappingCollection = new TreemapNodeStyleMappingCollection();
	get styleMappings(): TreemapNodeStyleMappingCollection {
		return this._styleMappings;
	}
	static readonly fillScaleModePropertyName: string = "FillScaleMode";
	private _fillScaleMode: TreemapFillScaleMode = TreemapFillScaleMode.Sum;
	get fillScaleMode(): TreemapFillScaleMode {
		return this._fillScaleMode;
	}
	set fillScaleMode(value: TreemapFillScaleMode) {
		let oldValue = this._fillScaleMode;
		this._fillScaleMode = value;
		if (oldValue != this._fillScaleMode) {
			this.onPropertyChanged(Treemap.fillScaleModePropertyName, enumGetBox<TreemapFillScaleMode>(TreemapFillScaleMode_$type, oldValue), enumGetBox<TreemapFillScaleMode>(TreemapFillScaleMode_$type, value));
		}
	}
	static readonly isFillScaleLogarithmicPropertyName: string = "IsFillScaleLogarithmic";
	private _isFillScaleLogarithmic: boolean = false;
	get isFillScaleLogarithmic(): boolean {
		return this._isFillScaleLogarithmic;
	}
	set isFillScaleLogarithmic(value: boolean) {
		let oldValue = this._isFillScaleLogarithmic;
		this._isFillScaleLogarithmic = value;
		if (oldValue != this._isFillScaleLogarithmic) {
			this.onPropertyChanged(Treemap.isFillScaleLogarithmicPropertyName, oldValue, value);
		}
	}
	static readonly fillScaleLogarithmBasePropertyName: string = "FillScaleLogarithmBase";
	private _fillScaleLogarithmBase: number = 10;
	get fillScaleLogarithmBase(): number {
		return this._fillScaleLogarithmBase;
	}
	set fillScaleLogarithmBase(value: number) {
		let oldValue = this._fillScaleLogarithmBase;
		this._fillScaleLogarithmBase = value;
		if (oldValue != this._fillScaleLogarithmBase) {
			this.onPropertyChanged(Treemap.fillScaleLogarithmBasePropertyName, oldValue, value);
		}
	}
	static readonly fillScaleMinimumValuePropertyName: string = "FillScaleMinimumValue";
	private _fillScaleMinimumValue: number = NaN;
	get fillScaleMinimumValue(): number {
		return this._fillScaleMinimumValue;
	}
	set fillScaleMinimumValue(value: number) {
		let oldValue = this._fillScaleMinimumValue;
		this._fillScaleMinimumValue = value;
		if (oldValue != this._fillScaleMinimumValue) {
			this.onPropertyChanged(Treemap.fillScaleMinimumValuePropertyName, oldValue, value);
		}
	}
	static readonly fillScaleMaximumValuePropertyName: string = "FillScaleMaximumValue";
	private _fillScaleMaximumValue: number = NaN;
	get fillScaleMaximumValue(): number {
		return this._fillScaleMaximumValue;
	}
	set fillScaleMaximumValue(value: number) {
		let oldValue = this._fillScaleMaximumValue;
		this._fillScaleMaximumValue = value;
		if (oldValue != this._fillScaleMaximumValue) {
			this.onPropertyChanged(Treemap.fillScaleMaximumValuePropertyName, oldValue, value);
		}
	}
	static readonly labelVerticalFitModePropertyName: string = "LabelVerticalFitMode";
	private _labelVerticalFitMode: TreemapLabelVerticalFitMode = TreemapLabelVerticalFitMode.Auto;
	get labelVerticalFitMode(): TreemapLabelVerticalFitMode {
		return this._labelVerticalFitMode;
	}
	set labelVerticalFitMode(value: TreemapLabelVerticalFitMode) {
		let oldValue = this._labelVerticalFitMode;
		this._labelVerticalFitMode = value;
		if (oldValue != this._labelVerticalFitMode) {
			this.onPropertyChanged(Treemap.labelVerticalFitModePropertyName, enumGetBox<TreemapLabelVerticalFitMode>(TreemapLabelVerticalFitMode_$type, oldValue), enumGetBox<TreemapLabelVerticalFitMode>(TreemapLabelVerticalFitMode_$type, value));
		}
	}
	private get actualLabelVerticalFitMode(): TreemapLabelVerticalFitMode {
		return this.labelVerticalFitMode == TreemapLabelVerticalFitMode.Auto ? TreemapLabelVerticalFitMode.Show : this.labelVerticalFitMode;
	}
	static readonly labelHorizontalFitModePropertyName: string = "LabelHorizontalFitMode";
	private _labelHorizontalFitMode: TreemapLabelHorizontalFitMode = TreemapLabelHorizontalFitMode.Auto;
	get labelHorizontalFitMode(): TreemapLabelHorizontalFitMode {
		return this._labelHorizontalFitMode;
	}
	set labelHorizontalFitMode(value: TreemapLabelHorizontalFitMode) {
		let oldValue = this._labelHorizontalFitMode;
		this._labelHorizontalFitMode = value;
		if (oldValue != this._labelHorizontalFitMode) {
			this.onPropertyChanged(Treemap.labelHorizontalFitModePropertyName, enumGetBox<TreemapLabelHorizontalFitMode>(TreemapLabelHorizontalFitMode_$type, oldValue), enumGetBox<TreemapLabelHorizontalFitMode>(TreemapLabelHorizontalFitMode_$type, value));
		}
	}
	private get actualLabelHorizontalFitMode(): TreemapLabelHorizontalFitMode {
		return this.labelHorizontalFitMode == TreemapLabelHorizontalFitMode.Auto ? TreemapLabelHorizontalFitMode.Ellipsis : this.labelHorizontalFitMode;
	}
	static readonly overlayHeaderHoverBackgroundPropertyName: string = "OverlayHeaderHoverBackground";
	private _overlayHeaderHoverBackground: Brush = null;
	get overlayHeaderHoverBackground(): Brush {
		return this._overlayHeaderHoverBackground;
	}
	set overlayHeaderHoverBackground(value: Brush) {
		let oldValue = this._overlayHeaderHoverBackground;
		this._overlayHeaderHoverBackground = value;
		if (oldValue != this._overlayHeaderHoverBackground) {
			this.onPropertyChanged(Treemap.overlayHeaderHoverBackgroundPropertyName, oldValue, value);
		}
	}
	static readonly headerHoverBackgroundPropertyName: string = "HeaderHoverBackground";
	private _headerHoverBackground: Brush = null;
	get headerHoverBackground(): Brush {
		return this._headerHoverBackground;
	}
	set headerHoverBackground(value: Brush) {
		let oldValue = this._headerHoverBackground;
		this._headerHoverBackground = value;
		if (oldValue != this._headerHoverBackground) {
			this.onPropertyChanged(Treemap.headerHoverBackgroundPropertyName, oldValue, value);
		}
	}
	static readonly headerBackgroundPropertyName: string = "HeaderBackground";
	private _headerBackground: Brush = null;
	get headerBackground(): Brush {
		return this._headerBackground;
	}
	set headerBackground(value: Brush) {
		let oldValue = this._headerBackground;
		this._headerBackground = value;
		if (oldValue != this._headerBackground) {
			this.onPropertyChanged(Treemap.headerBackgroundPropertyName, oldValue, value);
		}
	}
	static readonly overlayHeaderBackgroundPropertyName: string = "OverlayHeaderBackground";
	private _overlayHeaderBackground: Brush = null;
	get overlayHeaderBackground(): Brush {
		return this._overlayHeaderBackground;
	}
	set overlayHeaderBackground(value: Brush) {
		let oldValue = this._overlayHeaderBackground;
		this._overlayHeaderBackground = value;
		if (oldValue != this._overlayHeaderBackground) {
			this.onPropertyChanged(Treemap.overlayHeaderBackgroundPropertyName, oldValue, value);
		}
	}
	static readonly headerTextColorPropertyName: string = "HeaderTextColor";
	private _headerTextColor: Brush = null;
	get headerTextColor(): Brush {
		return this._headerTextColor;
	}
	set headerTextColor(value: Brush) {
		let oldValue = this._headerTextColor;
		this._headerTextColor = value;
		if (oldValue != this._headerTextColor) {
			this.onPropertyChanged(Treemap.headerTextColorPropertyName, oldValue, value);
		}
	}
	static readonly headerDarkTextColorPropertyName: string = "HeaderDarkTextColor";
	private _headerDarkTextColor: Brush = null;
	get headerDarkTextColor(): Brush {
		return this._headerDarkTextColor;
	}
	set headerDarkTextColor(value: Brush) {
		let oldValue = this._headerDarkTextColor;
		this._headerDarkTextColor = value;
		if (oldValue != this._headerDarkTextColor) {
			this.onPropertyChanged(Treemap.headerDarkTextColorPropertyName, oldValue, value);
		}
	}
	static readonly textColorPropertyName: string = "TextColor";
	private _textColor: Brush = null;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		let oldValue = this._textColor;
		this._textColor = value;
		if (oldValue != this._textColor) {
			this.onPropertyChanged(Treemap.textColorPropertyName, oldValue, value);
		}
	}
	static readonly darkTextColorPropertyName: string = "DarkTextColor";
	private _darkTextColor: Brush = null;
	get darkTextColor(): Brush {
		return this._darkTextColor;
	}
	set darkTextColor(value: Brush) {
		let oldValue = this._darkTextColor;
		this._darkTextColor = value;
		if (oldValue != this._darkTextColor) {
			this.onPropertyChanged(Treemap.darkTextColorPropertyName, oldValue, value);
		}
	}
	static readonly headerHoverTextColorPropertyName: string = "HeaderHoverTextColor";
	private _headerHoverTextColor: Brush = null;
	get headerHoverTextColor(): Brush {
		return this._headerHoverTextColor;
	}
	set headerHoverTextColor(value: Brush) {
		let oldValue = this._headerHoverTextColor;
		this._headerHoverTextColor = value;
		if (oldValue != this._headerHoverTextColor) {
			this.onPropertyChanged(Treemap.headerHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly headerHoverDarkTextColorPropertyName: string = "HeaderHoverDarkTextColor";
	private _headerHoverDarkTextColor: Brush = null;
	get headerHoverDarkTextColor(): Brush {
		return this._headerHoverDarkTextColor;
	}
	set headerHoverDarkTextColor(value: Brush) {
		let oldValue = this._headerHoverDarkTextColor;
		this._headerHoverDarkTextColor = value;
		if (oldValue != this._headerHoverDarkTextColor) {
			this.onPropertyChanged(Treemap.headerHoverDarkTextColorPropertyName, oldValue, value);
		}
	}
	private _textStyle: FontInfo = null;
	static readonly textStylePropertyName: string = "TextStyle";
	get textStyle(): FontInfo {
		return this._textStyle;
	}
	set textStyle(value: FontInfo) {
		let oldValue = this._textStyle;
		this._textStyle = value;
		if (oldValue != this._textStyle) {
			this.onPropertyChanged(Treemap.textStylePropertyName, oldValue, this._textStyle);
		}
	}
	private _headerTextStyle: FontInfo = null;
	static readonly headerTextStylePropertyName: string = "HeaderTextStyle";
	get headerTextStyle(): FontInfo {
		return this._headerTextStyle;
	}
	set headerTextStyle(value: FontInfo) {
		let oldValue = this._headerTextStyle;
		this._headerTextStyle = value;
		if (oldValue != this._headerTextStyle) {
			this.onPropertyChanged(Treemap.headerTextStylePropertyName, oldValue, this._headerTextStyle);
		}
	}
	private _headerDisplayMode: TreemapHeaderDisplayMode = TreemapHeaderDisplayMode.Auto;
	static readonly headerDisplayModePropertyName: string = "HeaderDisplayMode";
	get headerDisplayMode(): TreemapHeaderDisplayMode {
		return this._headerDisplayMode;
	}
	set headerDisplayMode(value: TreemapHeaderDisplayMode) {
		let oldValue = this._headerDisplayMode;
		this._headerDisplayMode = value;
		if (oldValue != this._headerDisplayMode) {
			this.onPropertyChanged(Treemap.headerDisplayModePropertyName, enumGetBox<TreemapHeaderDisplayMode>(TreemapHeaderDisplayMode_$type, oldValue), enumGetBox<TreemapHeaderDisplayMode>(TreemapHeaderDisplayMode_$type, this._headerDisplayMode));
		}
	}
	private get actualHeaderDisplayMode(): TreemapHeaderDisplayMode {
		return this.headerDisplayMode == TreemapHeaderDisplayMode.Auto ? TreemapHeaderDisplayMode.Header : this.headerDisplayMode;
	}
	static readonly headerLabelLeftMarginPropertyName: string = "HeaderLabelLeftMargin";
	private _headerLabelLeftMargin: number = DeviceUtils.toPixelUnits(5);
	get headerLabelLeftMargin(): number {
		return this._headerLabelLeftMargin;
	}
	set headerLabelLeftMargin(value: number) {
		let oldValue = this._headerLabelLeftMargin;
		this._headerLabelLeftMargin = value;
		if (oldValue != this._headerLabelLeftMargin) {
			this.onPropertyChanged(Treemap.headerLabelLeftMarginPropertyName, oldValue, value);
		}
	}
	static readonly headerLabelTopMarginPropertyName: string = "HeaderLabelTopMargin";
	private _headerLabelTopMargin: number = DeviceUtils.toPixelUnits(3);
	get headerLabelTopMargin(): number {
		return this._headerLabelTopMargin;
	}
	set headerLabelTopMargin(value: number) {
		let oldValue = this._headerLabelTopMargin;
		this._headerLabelTopMargin = value;
		if (oldValue != this._headerLabelTopMargin) {
			this.onPropertyChanged(Treemap.headerLabelTopMarginPropertyName, oldValue, value);
		}
	}
	static readonly headerLabelRightMarginPropertyName: string = "HeaderLabelRightMargin";
	private _headerLabelRightMargin: number = DeviceUtils.toPixelUnits(5);
	get headerLabelRightMargin(): number {
		return this._headerLabelRightMargin;
	}
	set headerLabelRightMargin(value: number) {
		let oldValue = this._headerLabelRightMargin;
		this._headerLabelRightMargin = value;
		if (oldValue != this._headerLabelRightMargin) {
			this.onPropertyChanged(Treemap.headerLabelRightMarginPropertyName, oldValue, value);
		}
	}
	static readonly headerLabelBottomMarginPropertyName: string = "HeaderLabelBottomMargin";
	private _headerLabelBottomMargin: number = DeviceUtils.toPixelUnits(3);
	get headerLabelBottomMargin(): number {
		return this._headerLabelBottomMargin;
	}
	set headerLabelBottomMargin(value: number) {
		let oldValue = this._headerLabelBottomMargin;
		this._headerLabelBottomMargin = value;
		if (oldValue != this._headerLabelBottomMargin) {
			this.onPropertyChanged(Treemap.headerLabelBottomMarginPropertyName, oldValue, value);
		}
	}
	static readonly overlayHeaderLabelLeftMarginPropertyName: string = "OverlayHeaderLabelLeftMargin";
	private _overlayHeaderLabelLeftMargin: number = DeviceUtils.toPixelUnits(10);
	get overlayHeaderLabelLeftMargin(): number {
		return this._overlayHeaderLabelLeftMargin;
	}
	set overlayHeaderLabelLeftMargin(value: number) {
		let oldValue = this._overlayHeaderLabelLeftMargin;
		this._overlayHeaderLabelLeftMargin = value;
		if (oldValue != this._overlayHeaderLabelLeftMargin) {
			this.onPropertyChanged(Treemap.overlayHeaderLabelLeftMarginPropertyName, oldValue, value);
		}
	}
	static readonly overlayHeaderLabelTopMarginPropertyName: string = "OverlayHeaderLabelTopMargin";
	private _overlayHeaderLabelTopMargin: number = DeviceUtils.toPixelUnits(10);
	get overlayHeaderLabelTopMargin(): number {
		return this._overlayHeaderLabelTopMargin;
	}
	set overlayHeaderLabelTopMargin(value: number) {
		let oldValue = this._overlayHeaderLabelTopMargin;
		this._overlayHeaderLabelTopMargin = value;
		if (oldValue != this._overlayHeaderLabelTopMargin) {
			this.onPropertyChanged(Treemap.overlayHeaderLabelTopMarginPropertyName, oldValue, value);
		}
	}
	static readonly overlayHeaderLabelRightMarginPropertyName: string = "OverlayHeaderLabelRightMargin";
	private _overlayHeaderLabelRightMargin: number = DeviceUtils.toPixelUnits(10);
	get overlayHeaderLabelRightMargin(): number {
		return this._overlayHeaderLabelRightMargin;
	}
	set overlayHeaderLabelRightMargin(value: number) {
		let oldValue = this._overlayHeaderLabelRightMargin;
		this._overlayHeaderLabelRightMargin = value;
		if (oldValue != this._overlayHeaderLabelRightMargin) {
			this.onPropertyChanged(Treemap.overlayHeaderLabelRightMarginPropertyName, oldValue, value);
		}
	}
	static readonly overlayHeaderLabelBottomMarginPropertyName: string = "OverlayHeaderLabelBottomMargin";
	private _overlayHeaderLabelBottomMargin: number = DeviceUtils.toPixelUnits(10);
	get overlayHeaderLabelBottomMargin(): number {
		return this._overlayHeaderLabelBottomMargin;
	}
	set overlayHeaderLabelBottomMargin(value: number) {
		let oldValue = this._overlayHeaderLabelBottomMargin;
		this._overlayHeaderLabelBottomMargin = value;
		if (oldValue != this._overlayHeaderLabelBottomMargin) {
			this.onPropertyChanged(Treemap.overlayHeaderLabelBottomMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelLeftMarginPropertyName: string = "LabelLeftMargin";
	private _labelLeftMargin: number = DeviceUtils.toPixelUnits(5);
	get labelLeftMargin(): number {
		return this._labelLeftMargin;
	}
	set labelLeftMargin(value: number) {
		let oldValue = this._labelLeftMargin;
		this._labelLeftMargin = value;
		if (oldValue != this._labelLeftMargin) {
			this.onPropertyChanged(Treemap.labelLeftMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelTopMarginPropertyName: string = "LabelTopMargin";
	private _labelTopMargin: number = DeviceUtils.toPixelUnits(3);
	get labelTopMargin(): number {
		return this._labelTopMargin;
	}
	set labelTopMargin(value: number) {
		let oldValue = this._labelTopMargin;
		this._labelTopMargin = value;
		if (oldValue != this._labelTopMargin) {
			this.onPropertyChanged(Treemap.labelTopMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelRightMarginPropertyName: string = "LabelRightMargin";
	private _labelRightMargin: number = DeviceUtils.toPixelUnits(5);
	get labelRightMargin(): number {
		return this._labelRightMargin;
	}
	set labelRightMargin(value: number) {
		let oldValue = this._labelRightMargin;
		this._labelRightMargin = value;
		if (oldValue != this._labelRightMargin) {
			this.onPropertyChanged(Treemap.labelRightMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelBottomMarginPropertyName: string = "LabelBottomMargin";
	private _labelBottomMargin: number = DeviceUtils.toPixelUnits(3);
	get labelBottomMargin(): number {
		return this._labelBottomMargin;
	}
	set labelBottomMargin(value: number) {
		let oldValue = this._labelBottomMargin;
		this._labelBottomMargin = value;
		if (oldValue != this._labelBottomMargin) {
			this.onPropertyChanged(Treemap.labelBottomMarginPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeLeftMarginPropertyName: string = "ParentNodeLeftMargin";
	private _parentNodeLeftMargin: number = DeviceUtils.toPixelUnits(0);
	get parentNodeLeftMargin(): number {
		return this._parentNodeLeftMargin;
	}
	set parentNodeLeftMargin(value: number) {
		let oldValue = this._parentNodeLeftMargin;
		this._parentNodeLeftMargin = value;
		if (oldValue != this._parentNodeLeftMargin) {
			this.onPropertyChanged(Treemap.parentNodeLeftMarginPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeTopMarginPropertyName: string = "ParentNodeTopMargin";
	private _parentNodeTopMargin: number = DeviceUtils.toPixelUnits(0);
	get parentNodeTopMargin(): number {
		return this._parentNodeTopMargin;
	}
	set parentNodeTopMargin(value: number) {
		let oldValue = this._parentNodeTopMargin;
		this._parentNodeTopMargin = value;
		if (oldValue != this._parentNodeTopMargin) {
			this.onPropertyChanged(Treemap.parentNodeTopMarginPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeRightMarginPropertyName: string = "ParentNodeRightMargin";
	private _parentNodeRightMargin: number = DeviceUtils.toPixelUnits(0);
	get parentNodeRightMargin(): number {
		return this._parentNodeRightMargin;
	}
	set parentNodeRightMargin(value: number) {
		let oldValue = this._parentNodeRightMargin;
		this._parentNodeRightMargin = value;
		if (oldValue != this._parentNodeRightMargin) {
			this.onPropertyChanged(Treemap.parentNodeRightMarginPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeBottomMarginPropertyName: string = "ParentNodeBottomMargin";
	private _parentNodeBottomMargin: number = DeviceUtils.toPixelUnits(0);
	get parentNodeBottomMargin(): number {
		return this._parentNodeBottomMargin;
	}
	set parentNodeBottomMargin(value: number) {
		let oldValue = this._parentNodeBottomMargin;
		this._parentNodeBottomMargin = value;
		if (oldValue != this._parentNodeBottomMargin) {
			this.onPropertyChanged(Treemap.parentNodeBottomMarginPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeLeftPaddingPropertyName: string = "ParentNodeLeftPadding";
	private _parentNodeLeftPadding: number = DeviceUtils.toPixelUnits(3);
	get parentNodeLeftPadding(): number {
		return this._parentNodeLeftPadding;
	}
	set parentNodeLeftPadding(value: number) {
		let oldValue = this._parentNodeLeftPadding;
		this._parentNodeLeftPadding = value;
		if (oldValue != this._parentNodeLeftPadding) {
			this.onPropertyChanged(Treemap.parentNodeLeftPaddingPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeTopPaddingPropertyName: string = "ParentNodeTopPadding";
	private _parentNodeTopPadding: number = DeviceUtils.toPixelUnits(3);
	get parentNodeTopPadding(): number {
		return this._parentNodeTopPadding;
	}
	set parentNodeTopPadding(value: number) {
		let oldValue = this._parentNodeTopPadding;
		this._parentNodeTopPadding = value;
		if (oldValue != this._parentNodeTopPadding) {
			this.onPropertyChanged(Treemap.parentNodeTopPaddingPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeRightPaddingPropertyName: string = "ParentNodeRightPadding";
	private _parentNodeRightPadding: number = DeviceUtils.toPixelUnits(3);
	get parentNodeRightPadding(): number {
		return this._parentNodeRightPadding;
	}
	set parentNodeRightPadding(value: number) {
		let oldValue = this._parentNodeRightPadding;
		this._parentNodeRightPadding = value;
		if (oldValue != this._parentNodeRightPadding) {
			this.onPropertyChanged(Treemap.parentNodeRightPaddingPropertyName, oldValue, value);
		}
	}
	static readonly parentNodeBottomPaddingPropertyName: string = "ParentNodeBottomPadding";
	private _parentNodeBottomPadding: number = DeviceUtils.toPixelUnits(3);
	get parentNodeBottomPadding(): number {
		return this._parentNodeBottomPadding;
	}
	set parentNodeBottomPadding(value: number) {
		let oldValue = this._parentNodeBottomPadding;
		this._parentNodeBottomPadding = value;
		if (oldValue != this._parentNodeBottomPadding) {
			this.onPropertyChanged(Treemap.parentNodeBottomPaddingPropertyName, oldValue, value);
		}
	}
	static readonly labelHorizontalAlignmentPropertyName: string = "LabelHorizontalAlignment";
	private _labelHorizontalAlignment: HorizontalAlignment = HorizontalAlignment.Center;
	get labelHorizontalAlignment(): HorizontalAlignment {
		return this._labelHorizontalAlignment;
	}
	set labelHorizontalAlignment(value: HorizontalAlignment) {
		let oldValue = this._labelHorizontalAlignment;
		this._labelHorizontalAlignment = value;
		if (oldValue != this._labelHorizontalAlignment) {
			this.onPropertyChanged(Treemap.labelHorizontalAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, value));
		}
	}
	static readonly labelVerticalAlignmentPropertyName: string = "LabelVerticalAlignment";
	private _labelVerticalAlignment: VerticalAlignment = VerticalAlignment.Center;
	get labelVerticalAlignment(): VerticalAlignment {
		return this._labelVerticalAlignment;
	}
	set labelVerticalAlignment(value: VerticalAlignment) {
		let oldValue = this._labelVerticalAlignment;
		this._labelVerticalAlignment = value;
		if (oldValue != this._labelVerticalAlignment) {
			this.onPropertyChanged(Treemap.labelVerticalAlignmentPropertyName, enumGetBox<VerticalAlignment>(VerticalAlignment_$type, oldValue), enumGetBox<VerticalAlignment>(VerticalAlignment_$type, value));
		}
	}
	static readonly headerHeightPropertyName: string = "HeaderHeight";
	private _headerHeight: number = NaN;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		let oldValue = this._headerHeight;
		this._headerHeight = value;
		if (oldValue != this._headerHeight) {
			this.onPropertyChanged(Treemap.headerHeightPropertyName, oldValue, value);
		}
	}
	static readonly outlinePropertyName: string = "Outline";
	private _outline: Brush = null;
	get outline(): Brush {
		return this._outline;
	}
	set outline(value: Brush) {
		let oldValue = this._outline;
		this._outline = value;
		if (oldValue != this._outline) {
			this.onPropertyChanged(Treemap.outlinePropertyName, oldValue, value);
		}
	}
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	private _strokeThickness: number = NaN;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		let oldValue = this._strokeThickness;
		this._strokeThickness = value;
		if (oldValue != this._strokeThickness) {
			this.onPropertyChanged(Treemap.strokeThicknessPropertyName, oldValue, value);
		}
	}
	static readonly layoutOrientationPropertyName: string = "LayoutOrientation";
	private _layoutOrientation: TreemapOrientation = TreemapOrientation.Horizontal;
	get layoutOrientation(): TreemapOrientation {
		return this._layoutOrientation;
	}
	set layoutOrientation(value: TreemapOrientation) {
		let oldValue = this._layoutOrientation;
		this._layoutOrientation = value;
		if (oldValue != this._layoutOrientation) {
			this.onPropertyChanged(Treemap.layoutOrientationPropertyName, enumGetBox<TreemapOrientation>(TreemapOrientation_$type, oldValue), enumGetBox<TreemapOrientation>(TreemapOrientation_$type, value));
		}
	}
	static readonly layoutTypePropertyName: string = "LayoutType";
	private _layoutType: TreemapLayoutType = TreemapLayoutType.Squarified;
	get layoutType(): TreemapLayoutType {
		return this._layoutType;
	}
	set layoutType(value: TreemapLayoutType) {
		let oldValue = this._layoutType;
		this._layoutType = value;
		if (oldValue != this._layoutType) {
			this.onPropertyChanged(Treemap.layoutTypePropertyName, enumGetBox<TreemapLayoutType>(TreemapLayoutType_$type, oldValue), enumGetBox<TreemapLayoutType>(TreemapLayoutType_$type, value));
		}
	}
	static readonly minimumDisplaySizePropertyName: string = "MinimumDisplaySize";
	private _minimumDisplaySize: number = DeviceUtils.toPixelUnits(3);
	get minimumDisplaySize(): number {
		return this._minimumDisplaySize;
	}
	set minimumDisplaySize(value: number) {
		let oldValue = this._minimumDisplaySize;
		this._minimumDisplaySize = value;
		if (oldValue != this._minimumDisplaySize) {
			this.onPropertyChanged(Treemap.minimumDisplaySizePropertyName, oldValue, value);
		}
	}
	static readonly transitionDurationPropertyName: string = "TransitionDuration";
	private _transitionDuration: number = 500;
	get transitionDuration(): number {
		return this._transitionDuration;
	}
	set transitionDuration(value: number) {
		let oldValue = this._transitionDuration;
		this._transitionDuration = value;
		if (oldValue != this._transitionDuration) {
			this.onPropertyChanged(Treemap.transitionDurationPropertyName, oldValue, value);
		}
	}
	static readonly transitionProgressPropertyName: string = "TransitionProgress";
	private _transitionProgress: number = 0;
	protected get transitionProgress(): number {
		return this._transitionProgress;
	}
	protected set transitionProgress(value: number) {
		let oldValue = this._transitionProgress;
		this._transitionProgress = value;
		if (oldValue != this._transitionProgress) {
			this.onPropertyChanged(Treemap.transitionProgressPropertyName, oldValue, value);
		}
	}
	private fastItemsSource_Event: (sender: any, e: FastItemsSourceEventArgs) => void = null;
	static readonly fastItemsSourcePropertyName: string = "FastItemsSource";
	private _fastItemsSource: FastItemsSource = null;
	get fastItemsSource(): FastItemsSource {
		return this._fastItemsSource;
	}
	set fastItemsSource(value: FastItemsSource) {
		let oldValue = this._fastItemsSource;
		this._fastItemsSource = value;
		if (oldValue != this._fastItemsSource) {
			this.onPropertyChanged(Treemap.fastItemsSourcePropertyName, oldValue, this._fastItemsSource);
		}
	}
	private _valueColumn: IFastItemColumn$1<number> = null;
	get valueColumn(): IFastItemColumn$1<number> {
		return this._valueColumn;
	}
	set valueColumn(value: IFastItemColumn$1<number>) {
		this._valueColumn = value;
	}
	static readonly valueColumnPropertyName: string = "ValueColumn";
	private _customValueColumn: IFastItemColumn$1<any> = null;
	get customValueColumn(): IFastItemColumn$1<any> {
		return this._customValueColumn;
	}
	set customValueColumn(value: IFastItemColumn$1<any>) {
		this._customValueColumn = value;
	}
	static readonly customValueColumnPropertyName: string = "CustomValueColumn";
	private _parentIDColumn: IFastItemColumn$1<any> = null;
	get parentIDColumn(): IFastItemColumn$1<any> {
		return this._parentIDColumn;
	}
	set parentIDColumn(value: IFastItemColumn$1<any>) {
		this._parentIDColumn = value;
	}
	static readonly parentIDColumnPropertyName: string = "ParentIDColumn";
	private _idColumn: IFastItemColumn$1<any> = null;
	get iDColumn(): IFastItemColumn$1<any> {
		return this._idColumn;
	}
	set iDColumn(value: IFastItemColumn$1<any>) {
		this._idColumn = value;
	}
	static readonly iDColumnPropertyName: string = "IDColumn";
	private _labelColumn: IFastItemColumn$1<any> = null;
	get labelColumn(): IFastItemColumn$1<any> {
		return this._labelColumn;
	}
	set labelColumn(value: IFastItemColumn$1<any>) {
		this._labelColumn = value;
	}
	static readonly labelColumnPropertyName: string = "LabelColumn";
	private static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	private _pixelScalingRatio: number = NaN;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		if (oldValue != this._pixelScalingRatio) {
			this.onPropertyChanged(Treemap.pixelScalingRatioPropertyName, oldValue, value);
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
			this.onPropertyChanged(Treemap.actualPixelScalingRatioPropertyName, oldValue, value);
		}
	}
	private static readonly interactionPixelScalingRatioPropertyName: string = "InteractionPixelScalingRatio";
	private _interactionPixelScalingRatio: number = NaN;
	get interactionPixelScalingRatio(): number {
		return this._interactionPixelScalingRatio;
	}
	set interactionPixelScalingRatio(value: number) {
		let oldValue = this._interactionPixelScalingRatio;
		this._interactionPixelScalingRatio = value;
		if (oldValue != this._interactionPixelScalingRatio) {
			this.onPropertyChanged(Treemap.interactionPixelScalingRatioPropertyName, oldValue, value);
		}
	}
	private static readonly actualInteractionPixelScalingRatioPropertyName: string = "ActualInteractionPixelScalingRatio";
	private _actualInteractionPixelScalingRatio: number = 0.5;
	get actualInteractionPixelScalingRatio(): number {
		return this._actualInteractionPixelScalingRatio;
	}
	set actualInteractionPixelScalingRatio(value: number) {
		let oldValue = this._actualInteractionPixelScalingRatio;
		this._actualInteractionPixelScalingRatio = value;
		if (oldValue != this._actualInteractionPixelScalingRatio) {
			this.onPropertyChanged(Treemap.actualInteractionPixelScalingRatioPropertyName, oldValue, value);
		}
	}
	private _fastItemsSourceAttached: boolean = false;
	protected registerDoubleColumn(memberPath: string): IFastItemColumn$1<number> {
		let coercionMethod: (arg1: any) => any = null;
		return this.fastItemsSource.registerColumn(memberPath, coercionMethod, false);
	}
	protected registerObjectColumn(memberPath: string): IFastItemColumn$1<any> {
		let coercionMethod: (arg1: any) => any = null;
		return this.fastItemsSource.registerColumnObject(memberPath, coercionMethod, false);
	}
	markDirty(): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	private _isDirty: boolean = false;
	protected get isDirty(): boolean {
		return this._isDirty;
	}
	protected set isDirty(value: boolean) {
		this._isDirty = value;
	}
	private _isMappingDirty: boolean = false;
	protected get isMappingDirty(): boolean {
		return this._isMappingDirty;
	}
	protected set isMappingDirty(value: boolean) {
		this._isMappingDirty = value;
	}
	private _isDataDirty: boolean = false;
	protected get isDataDirty(): boolean {
		return this._isDataDirty;
	}
	protected set isDataDirty(value: boolean) {
		this._isDataDirty = value;
	}
	get animating(): boolean {
		return this.animator.animationActive();
	}
	private buildTreeData(): TreemapTreeData {
		let treeData = new TreemapTreeData();
		if (this.valueColumn == null || (this.labelColumn == null && this.iDColumn == null)) {
			return null;
		}
		for (let i = 0; i < this.fastItemsSource.count; i++) {
			let customValue: any = null;
			if (this.customValueColumn != null && this.customValueColumn.count > i) {
				customValue = this.customValueColumn.item(i);
			}
			let value = this.valueColumn.item(i);
			let id: string = null;
			let label_o: string = "";
			if (this.labelColumn != null) {
				label_o = this.labelColumn.item(i) != null ? this.labelColumn.item(i).toString() : "";
			}
			if (this.iDColumn != null) {
				if (this.iDColumn.item(i) == null) {
					continue;
				}
				id = stringReplace(this.iDColumn.item(i).toString(), " ", "_");
			}
			if (id == null) {
				id = stringReplace(label_o, " ", "_");
				if (stringIsNullOrEmpty(id)) {
					continue;
				}
			}
			let parentId: string = null;
			if (this.parentIDColumn != null) {
				parentId = this.parentIDColumn.item(i) != null ? stringReplace(this.parentIDColumn.item(i).toString(), " ", "_") : null;
			}
			let newNode = new TreemapTreeNode();
			newNode.iD = id;
			newNode.parentID = parentId;
			newNode.sourceItem = this.fastItemsSource.item(i);
			newNode.value = value;
			newNode.customValue = customValue;
			newNode.label = label_o;
			treeData.addNode(newNode);
		}
		treeData.sum();
		return treeData;
	}
	private _treeData: TreemapTreeData = null;
	private _layoutCalculator: TreemapLayoutCalculator = null;
	protected get layoutCalculator(): TreemapLayoutCalculator {
		return this._layoutCalculator;
	}
	protected set layoutCalculator(value: TreemapLayoutCalculator) {
		this._layoutCalculator = value;
	}
	protected prepareFrame(): void {
		if (this._treeData == null) {
			this._treeData = this.buildTreeData();
			if (this._treeData == null) {
				return;
			}
			this.onFocusItemChanged();
		}
		if (this.isMappingDirty) {
			this.isMappingDirty = false;
			for (let i = 0; i < this._treeData.allKeys.count; i++) {
				let node = this._treeData.allNodes.item(this._treeData.allKeys._inner[i]);
				node.styleMappings.clear();
				for (let j = 0; j < this.styleMappings.count; j++) {
					if (this.appliesTo(this.styleMappings._inner[j], node)) {
						node.styleMappings.add(this.styleMappings._inner[j]);
					}
				}
			}
		}
		if (!this.view.ready()) {
			return;
		}
		let settings = new TreemapLayoutSettings();
		settings.treeData = this._treeData;
		if (this.focusNode != null && !this._treeData.allNodes.containsKey(this.focusNode.iD)) {
			this.focusNode = null;
			this.updateFocusItem(null);
		} else {
			if (this.focusNode != null) {
				let node1 = this._treeData.allNodes.item(this.focusNode.iD);
				if (node1 != this.focusNode) {
					this.focusNode = node1;
					this.updateFocusItem(this.focusNode);
				}
			}
		}
		settings.viewport = this.viewport;
		settings.drillNode = this.focusNode;
		settings.minimumDisplaySize = this.minimumDisplaySize;
		settings.layoutOrientation = this.layoutOrientation;
		let headerDisplayMode = this.actualHeaderDisplayMode;
		let headerLabelLeftMargin = this.resolveHeaderLabelLeftMargin();
		let headerLabelTopMargin = this.resolveHeaderLabelTopMargin();
		let headerLabelRightMargin = this.resolveHeaderLabelRightMargin();
		let headerLabelBottomMargin = this.resolveHeaderLabelBottomMargin();
		let labelLeftMargin = this.resolveLabelLeftMargin();
		let labelTopMargin = this.resolveLabelTopMargin();
		let labelRightMargin = this.resolveLabelRightMargin();
		let labelBottomMargin = this.resolveLabelBottomMargin();
		let labelHorizontalAlignment = this.resolveLabelHorizontalAlignment();
		let labelVerticalAlignment = this.resolveLabelVerticalAlignment();
		let headerTextHeight = this.view.getDesiredHeaderTextHeight("M");
		let nodeTextHeight = this.view.getDesiredTextHeight("M");
		let desiredHeight = headerTextHeight + headerLabelTopMargin + headerLabelBottomMargin;
		let desiredNodeTextheight = nodeTextHeight + labelTopMargin + labelBottomMargin;
		settings.nodePadding = new Thickness(1, this.parentNodeLeftPadding, this.parentNodeTopPadding, this.parentNodeRightPadding, this.parentNodeBottomPadding);
		settings.nodeMargin = new Thickness(1, this.parentNodeLeftMargin, this.parentNodeTopMargin, this.parentNodeRightMargin, this.parentNodeBottomMargin);
		if (!isNaN_(this.headerHeight)) {
			desiredHeight = this.headerHeight;
		}
		settings.headerHeight = desiredHeight;
		if (headerDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			settings.headerHeight = 0;
		}
		settings.isVisible = this.focusNode == null;
		this.layoutCalculator.calculateLayout(this.nextFrame, settings);
		let minValue: number = 1.7976931348623157E+308;
		let maxValue: number = -1.7976931348623157E+308;
		if (this.fillScaleMode == TreemapFillScaleMode.GlobalSum || this.fillScaleMode == TreemapFillScaleMode.GlobalValue) {
			for (let i1 = 0; i1 < this._treeData.allKeys.count; i1++) {
				let value: number = 0;
				if (this.fillScaleMode == TreemapFillScaleMode.GlobalSum) {
					value = this._treeData.allNodes.item(this._treeData.allKeys._inner[i1]).getArea();
				} else {
					value = this._treeData.allNodes.item(this._treeData.allKeys._inner[i1]).value;
				}
				if (!isNaN_(value)) {
					minValue = Math.min(value, minValue);
					maxValue = Math.max(value, maxValue);
				}
			}
		} else {
			for (let i2 = 0; i2 < this.nextFrame.frameKeys.count; i2++) {
				let value1: number = 0;
				if (this.fillScaleMode == TreemapFillScaleMode.Sum) {
					value1 = this._treeData.allNodes.item(this.nextFrame.frameKeys._inner[i2]).getArea();
				} else {
					value1 = this._treeData.allNodes.item(this.nextFrame.frameKeys._inner[i2]).value;
				}
				if (!isNaN_(value1)) {
					minValue = Math.min(value1, minValue);
					maxValue = Math.max(value1, maxValue);
				}
			}
		}
		for (let i3 = 0; i3 < this.nextFrame.frameKeys.count; i3++) {
			let key = this.nextFrame.frameKeys._inner[i3];
			let node2 = this._treeData.allNodes.item(key);
			let fillBrush = this.resolveFillBrush(node2, minValue, maxValue);
			let outlineBrush = this.resolveOutlineBrush(node2);
			let headerBrush = this.resolveHeaderBrush(node2);
			let strokeThickness = this.resolveStrokeThickness(node2);
			let label = this.resolveActualLabel(this.nextFrame, node2, headerLabelLeftMargin, headerLabelRightMargin, labelLeftMargin, labelRightMargin, desiredHeight, desiredNodeTextheight);
			let nodeFontBrush = this.resolveNodeFontBrush(node2, fillBrush, headerBrush);
			let nodeFontInfo = this.resolveNodeFontInfo(node2);
			let desiredWidth: number = 0;
			if (this.isHeader(node2)) {
				desiredWidth = this.view.getDesiredHeaderTextWidth(label);
			} else {
				desiredWidth = this.view.getDesiredTextWidth(label);
			}
			let headerHeight: number = 0;
			if (this.isHeader(node2)) {
				headerHeight = desiredHeight;
			} else {
				headerHeight = this.view.getDesiredTextHeight(label);
			}
			this.nextFrame.setAppearance(node2, label, fillBrush, outlineBrush, headerBrush, nodeFontBrush, strokeThickness, headerDisplayMode, desiredWidth, headerHeight, headerLabelLeftMargin, headerLabelTopMargin, headerLabelRightMargin, headerLabelBottomMargin, labelLeftMargin, labelTopMargin, labelRightMargin, labelBottomMargin, labelHorizontalAlignment, labelVerticalAlignment);
			if (node2.styleMappings.count > 0) {
				for (let j1 = 0; j1 < node2.styleMappings.count; j1++) {
					let isParent: boolean = node2.children != null && node2.children.count > 0;
					if (node2.styleMappings._inner[j1].targetType == TreemapNodeStyleMappingTargetType.Child && isParent) {
						continue;
					}
					this.nextFrame.applyStyleMapping(node2, node2.styleMappings._inner[j1], runOn(this, this.resolveNodeFontBrush));
				}
			}
			if (this.nodeStyling != null) {
				let args = new TreemapNodeStylingEventArgs();
				args.item = node2.sourceItem;
				if (node2.parentID != null) {
					if (this._treeData.allNodes.containsKey(node2.parentID)) {
						let parentNode = this._treeData.allNodes.item(node2.parentID);
						args.parentItem = parentNode.sourceItem;
						args.parentLabel = parentNode.label;
						args.parentSum = parentNode.getArea();
						args.parentValue = parentNode.value;
					}
				}
				args.sum = node2.getArea();
				args.value = node2.value;
				args.label = node2.label;
				args.customValue = node2.customValue;
				if (node2.children != null && node2.children.count > 0) {
					args.isParent = true;
				}
				args.style = new TreemapNodeStyle();
				this.nodeStyling(this, args);
				this.nextFrame.applyStyleMapping(node2, args.style, runOn(this, this.resolveNodeFontBrush));
			}
		}
	}
	private isHeader(node: TreemapTreeNode): boolean {
		return node.children != null && node.children.count > 0;
	}
	private resolveLabelBottomMargin(): number {
		return this.labelBottomMargin;
	}
	private resolveLabelRightMargin(): number {
		return this.labelRightMargin;
	}
	private resolveLabelTopMargin(): number {
		return this.labelTopMargin;
	}
	private resolveLabelLeftMargin(): number {
		return this.labelLeftMargin;
	}
	private resolveLabelHorizontalAlignment(): HorizontalAlignment {
		return this.labelHorizontalAlignment;
	}
	private resolveLabelVerticalAlignment(): VerticalAlignment {
		return this.labelVerticalAlignment;
	}
	private resolveHeaderLabelBottomMargin(): number {
		if (this.actualHeaderDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			return this.overlayHeaderLabelBottomMargin;
		}
		return this.headerLabelBottomMargin;
	}
	private resolveHeaderLabelRightMargin(): number {
		if (this.actualHeaderDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			return this.overlayHeaderLabelRightMargin;
		}
		return this.headerLabelRightMargin;
	}
	private resolveHeaderLabelTopMargin(): number {
		if (this.actualHeaderDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			return this.overlayHeaderLabelTopMargin;
		}
		return this.headerLabelTopMargin;
	}
	private resolveHeaderLabelLeftMargin(): number {
		if (this.actualHeaderDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			return this.overlayHeaderLabelBottomMargin;
		}
		return this.headerLabelLeftMargin;
	}
	private _collapsingWidth: number = NaN;
	trimTextBlock(node: TreemapTreeNode, text: string, availableWidth: number, labelLeftMargin: number, labelRightMargin: number): string {
		let length: number = text.length;
		let originalText: string = text;
		let collapsingChar: string = <string>("\u2026");
		if (isNaN_(this._collapsingWidth)) {
			if (this.isHeader(node)) {
				this._collapsingWidth = this.view.getDesiredHeaderTextWidth(collapsingChar);
			} else {
				this._collapsingWidth = this.view.getDesiredTextWidth(collapsingChar);
			}
		}
		if (availableWidth <= (this._collapsingWidth + labelLeftMargin + labelRightMargin)) {
			if (this.actualLabelHorizontalFitMode == TreemapLabelHorizontalFitMode.Hide) {
				return "";
			}
			return collapsingChar;
		}
		let desiredWidth: number = 0;
		if (this.isHeader(node)) {
			desiredWidth = this.view.getDesiredHeaderTextWidth(text);
		} else {
			desiredWidth = this.view.getDesiredTextWidth(text);
		}
		if (desiredWidth + labelLeftMargin + labelRightMargin <= availableWidth) {
			return text;
		}
		let p = availableWidth / (desiredWidth + labelLeftMargin + labelRightMargin);
		let tryLength = <number>truncate(Math.ceil(length * p));
		let tryText = text.substr(0, tryLength) + collapsingChar;
		let tryDesired: number = 0;
		if (this.isHeader(node)) {
			tryDesired = this.view.getDesiredHeaderTextWidth(tryText);
		} else {
			tryDesired = this.view.getDesiredTextWidth(tryText);
		}
		if ((tryDesired + labelLeftMargin + labelRightMargin) > availableWidth) {
			length = tryLength;
		} else {
			tryLength = tryLength + 1;
			tryText = text.substr(0, tryLength) + collapsingChar;
			if (this.isHeader(node)) {
				tryDesired = this.view.getDesiredHeaderTextWidth(tryText);
			} else {
				tryDesired = this.view.getDesiredTextWidth(tryText);
			}
			if ((tryDesired + labelLeftMargin + labelRightMargin) > availableWidth) {
				length = tryLength;
			}
		}
		while ((desiredWidth + labelLeftMargin + labelRightMargin) > availableWidth && length > 0) {
			length--;
			text = text.substr(0, length) + collapsingChar;
			if (this.actualLabelHorizontalFitMode == TreemapLabelHorizontalFitMode.Hide) {
				return "";
			}
			if (this.isHeader(node)) {
				desiredWidth = this.view.getDesiredHeaderTextWidth(text);
			} else {
				desiredWidth = this.view.getDesiredTextWidth(text);
			}
		}
		return text;
	}
	private resolveActualLabel(nextFrame: TreemapFrame, node: TreemapTreeNode, headerLabelLeftMargin: number, headerLabelRightMargin: number, labelLeftMargin: number, labelRightMargin: number, headerTextHeightWithMargin: number, nodeTextHeightWithMargin: number): string {
		if (node == null) {
			if (this.breadcrumbSequence != null && this.rootTitle != null && !stringIsNullOrEmpty(this.rootTitle)) {
				return this.rootTitle + this.breadcrumbSequence;
			}
			return "";
		}
		let bounds = nextFrame.getBounds(node);
		let availWidth = bounds.width;
		let availHeight = bounds.height;
		let currLabel = node.label;
		if (this.focusNode != null && this.focusNode == node && this.breadcrumbSequence != null) {
			let parent: TreemapTreeNode = null;
			let currNode: TreemapTreeNode = node;
			while (currNode.parentID != null) {
				if (this._treeData.allNodes.containsKey(currNode.parentID)) {
					parent = this._treeData.allNodes.item(currNode.parentID);
					if (parent.label != null) {
						currLabel = parent.label + this.breadcrumbSequence + currLabel;
					}
					currNode = parent;
				}
			}
			if (this.rootTitle != null && !stringIsNullOrEmpty(this.rootTitle)) {
				currLabel = this.rootTitle + this.breadcrumbSequence + currLabel;
			}
		}
		let leftMargin: number = 0;
		let rightMargin: number = 0;
		if (nextFrame.hasFrame(node.iD)) {
			let nodeFrame = nextFrame.getNodeFrame(node.iD);
			if (node.children.count > 0) {
				leftMargin = headerLabelLeftMargin;
				rightMargin = headerLabelRightMargin;
				if (this.actualLabelVerticalFitMode == TreemapLabelVerticalFitMode.Hide) {
					if (availHeight < headerTextHeightWithMargin) {
						return "";
					}
				}
			} else {
				leftMargin = labelLeftMargin;
				rightMargin = labelRightMargin;
				if (this.actualLabelVerticalFitMode == TreemapLabelVerticalFitMode.Hide) {
					if (availHeight < nodeTextHeightWithMargin) {
						return "";
					}
				}
			}
		}
		return this.trimTextBlock(node, currLabel, availWidth, leftMargin, rightMargin);
	}
	private _defaultStrokeThickness: number = DeviceUtils.toPixelUnits(1);
	private resolveStrokeThickness(node: TreemapTreeNode): number {
		if (!isNaN_(this.strokeThickness)) {
			return this.strokeThickness;
		}
		return this._defaultStrokeThickness;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	private resolveHeaderBrush(node: TreemapTreeNode): Brush {
		if (this.actualHeaderDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			return this.resolveOverlayHeaderBrush(node);
		}
		if (node == this.hoveredHeaderNode) {
			return this.resolveHoveredHeaderBrush(node);
		}
		if (this.headerBackground != null) {
			return this.headerBackground;
		}
		return this.view.getDefaultHeaderBrush();
	}
	private resolveOverlayHeaderBrush(node: TreemapTreeNode): Brush {
		if (node == this.hoveredHeaderNode) {
			return this.resolveOverlayHoveredHeaderBrush(node);
		}
		if (this.overlayHeaderBackground != null) {
			return this.overlayHeaderBackground;
		}
		return this.view.getDefaultOverlayHeaderBrush();
	}
	private resolveNodeFontBrush(node: TreemapTreeNode, backgroundBrush: Brush, headerBrush: Brush): Brush {
		if (node.children.count > 0) {
			if (node == this.hoveredHeaderNode) {
				return this.resolveHoveredHeaderFontBrush(node, headerBrush);
			}
			let darkColor: Brush = this.view.getDefaultHeaderDarkFontBrush();
			let lightColor: Brush = this.view.getDefaultHeaderFontBrush();
			if (this.headerTextColor != null) {
				lightColor = this.headerTextColor;
			}
			if (this.headerDarkTextColor != null) {
				darkColor = this.headerDarkTextColor;
			}
			return BrushUtil.getContrastingBrush(headerBrush, darkColor, lightColor);
		} else {
			let darkColor1: Brush = this.view.getDefaultDarkTextColor();
			let lightColor1: Brush = this.view.getDefaultTextColor();
			if (this.textColor != null) {
				lightColor1 = this.textColor;
			}
			if (this.darkTextColor != null) {
				darkColor1 = this.darkTextColor;
			}
			return BrushUtil.getContrastingBrush(backgroundBrush, darkColor1, lightColor1);
		}
	}
	private resolveNodeFontInfo(node: TreemapTreeNode): FontInfo {
		if (node.children.count > 0) {
			if (this.headerTextStyle != null) {
				return this.headerTextStyle;
			}
			return this.view.getDefaultTextStyle();
		} else {
			if (this.textStyle != null) {
				return this.textStyle;
			}
			return this.view.getDefaultTextStyle();
		}
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	private resolveHoveredHeaderBrush(node: TreemapTreeNode): Brush {
		if (this.headerHoverBackground != null) {
			return this.headerHoverBackground;
		}
		return this.view.getDefaultHeaderHoverBrush();
	}
	private resolveOverlayHoveredHeaderBrush(node: TreemapTreeNode): Brush {
		if (this.overlayHeaderHoverBackground != null) {
			return this.overlayHeaderHoverBackground;
		}
		return this.view.getDefaultOverlayHeaderHoverBrush();
	}
	private resolveHoveredHeaderFontBrush(node: TreemapTreeNode, background: Brush): Brush {
		let darkColor: Brush = this.view.getDefaultHeaderDarkFontBrush();
		let lightColor: Brush = this.view.getDefaultHeaderFontBrush();
		if (this.headerTextColor != null) {
			lightColor = this.headerTextColor;
		}
		if (this.headerDarkTextColor != null) {
			darkColor = this.headerDarkTextColor;
		}
		if (this.headerHoverTextColor != null) {
			lightColor = this.headerHoverTextColor;
		}
		if (this.headerHoverDarkTextColor != null) {
			darkColor = this.headerHoverDarkTextColor;
		}
		return BrushUtil.getContrastingBrush(background, darkColor, lightColor);
	}
	private resolveOutlineBrush(node: TreemapTreeNode): Brush {
		if (this.outline != null) {
			return this.outline;
		}
		return this.view.getDefaultOutlineBrush();
	}
	private resolveFillBrush(node: TreemapTreeNode, minValue: number, maxValue: number): Brush {
		if (this.fillBrushes == null || this.fillBrushes.count == 0) {
			return this.resolveUnknownValueBrush(node);
		}
		let nodeValue: number = this.getNodeValue(node);
		if (isNaN_(nodeValue)) {
			return this.resolveUnknownValueBrush(node);
		}
		let index: number = 0;
		if (this.isFillScaleLogarithmic && this.fillScaleLogarithmBase > 0) {
			if (nodeValue > 0) {
				index = (logBase(nodeValue, this.fillScaleLogarithmBase) - logBase(minValue, this.fillScaleLogarithmBase)) / (logBase(maxValue, this.fillScaleLogarithmBase) - logBase(minValue, this.fillScaleLogarithmBase));
			} else {
				return this.resolveUnknownValueBrush(node);
			}
		} else {
			index = (nodeValue - minValue) / (maxValue - minValue);
		}
		index = index * (this.fillBrushes.count - 1);
		return BrushCollectionUtil.getInterpolatedBrush(this.fillBrushes, index);
	}
	private getNodeValue(node: TreemapTreeNode): number {
		switch (this.fillScaleMode) {
			case TreemapFillScaleMode.Sum:

			case TreemapFillScaleMode.GlobalSum: return node.getArea();
			case TreemapFillScaleMode.Value:

			case TreemapFillScaleMode.GlobalValue: return node.value;
		}

		return node.getArea();
	}
	private resolveUnknownValueBrush(node: TreemapTreeNode): Brush {
		return this.view.getDefaultHeaderBrush();
	}
	protected renderFrame(frame: TreemapFrame): void {
		let renderOrder: List$1<TreemapVisual> = new List$1<TreemapVisual>((<any>TreemapVisual).$type, 0);
		let visuals = this.view.getVisuals();
		let count = 0;
		if (this.actualHeaderDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			count = this.renderFrames(frame, false, count, visuals, (f: TreemapNodeFrame) => true, renderOrder);
			count = this.renderFrames(frame, true, count, visuals, (f: TreemapNodeFrame) => f.node.children != null && f.node.children.count > 0, renderOrder);
		} else {
			count = this.renderFrames(frame, false, count, visuals, (f: TreemapNodeFrame) => true, renderOrder);
		}
		visuals.count = count;
		this.view.completeRender(renderOrder);
	}
	private renderFrames(frame: TreemapFrame, isOverlayRender: boolean, count: number, visuals: Pool$1<TreemapVisual>, condition: (arg1: TreemapNodeFrame) => boolean, renderOrder: List$1<TreemapVisual>): number {
		for (let i = 0; i < frame.frameKeys.count; i++) {
			let key = frame.frameKeys._inner[i];
			let nodeFrame = frame.getNodeFrame(key);
			if (!condition(nodeFrame)) {
				continue;
			}
			let visual = visuals.item(count);
			if (nodeFrame.bounds.isEmpty || (nodeFrame.bounds.width == 0 && nodeFrame.bounds.height == 0)) {
				visual.visibility = Visibility.Collapsed;
				continue;
			}
			count++;
			renderOrder.add(visual);
			let isLeaf: boolean = nodeFrame.node.children.count == 0;
			let isOverlay: boolean = !isLeaf && nodeFrame.headerDisplayMode == TreemapHeaderDisplayMode.Overlay;
			visual.fontInfo = this.resolveNodeFontInfo(nodeFrame.node);
			visual.fillBrush = nodeFrame.fillColor;
			visual.outlineBrush = nodeFrame.outlineColor;
			visual.headerBrush = nodeFrame.headerColor;
			visual.headerLabelMargin = new Thickness(1, nodeFrame.headerLabelLeftMargin, nodeFrame.headerLabelTopMargin, nodeFrame.headerLabelRightMargin, nodeFrame.headerLabelBottomMargin);
			visual.labelMargin = new Thickness(1, nodeFrame.labelLeftMargin, nodeFrame.labelTopMargin, nodeFrame.labelRightMargin, nodeFrame.labelBottomMargin);
			visual.nodeFontBrush = nodeFrame.nodeFontBrush;
			visual.headerText = nodeFrame.label;
			visual.strokeThickness = nodeFrame.strokeThickness;
			visual.visibility = Visibility.Visible;
			visual.bounds = this.snapBounds(nodeFrame.bounds, nodeFrame.strokeThickness);
			visual.isLeaf = isLeaf;
			visual.headerVisibility = !isLeaf && !isOverlay ? Visibility.Visible : Visibility.Collapsed;
			visual.overlayHeaderVisibility = !isLeaf && isOverlay ? Visibility.Visible : Visibility.Collapsed;
			visual.leafVisibility = isLeaf ? Visibility.Visible : Visibility.Collapsed;
			visual.headerWidth = nodeFrame.headerWidth;
			visual.headerHeight = nodeFrame.headerHeight;
			visual.labelHorizontalAlignment = nodeFrame.labelHorizontalAlignment;
			visual.labelVerticalAlignment = nodeFrame.labelVerticalAlignment;
			if (!isOverlayRender && !isLeaf && isOverlay) {
				visual.overlayHeaderVisibility = Visibility.Collapsed;
			}
			if (isOverlayRender && !isLeaf && isOverlay) {
				visual.fillBrush = null;
				visual.outlineBrush = null;
			}
		}
		return count;
	}
	private snapBounds(bounds: Rect, strokeThickness: number): Rect {
		let l = this.alignLineToPixels(Math.floor(bounds.left), strokeThickness);
		let r = this.alignLineToPixels(Math.floor(bounds.right), strokeThickness);
		let t = this.alignLineToPixels(Math.floor(bounds.top), strokeThickness);
		let b = this.alignLineToPixels(Math.floor(bounds.bottom), strokeThickness);
		return new Rect(0, l, t, r - l, b - t);
	}
	private alignLineToPixels(value: number, strokeThickness: number): number {
		let result = value;
		if (strokeThickness > 0) {
			let remainder = strokeThickness % 2;
			if (remainder == 0 || remainder == 1) {
				let sign: number = 1;
				result = Math.floor(value);
				if (result + 0.5 < value) {
					sign = -1;
					result = Math.ceil(value);
				}
				if (remainder == 1) {
					result += 0.5 * sign;
				}
			}
		}
		return result;
	}
	protected isValid(): boolean {
		return !this.viewport.isEmpty && this.view.ready();
	}
	renderTreeMap(): void {
		if (!this.isValid()) {
			return;
		}
		if (this.isDirty) {
			let previousFrame: TreemapFrame = this.previousFrame;
			if (this.animating) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				this.previousFrame = this.currentFrame;
				this.currentFrame = previousFrame;
			} else {
				this.previousFrame = this.nextFrame;
				this.nextFrame = previousFrame;
			}
		} else if (this.animating) {
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderFrame(this.currentFrame);
		}
		if (this.isDirty) {
			this.prepareFrame();
		}
		if (this.isDirty && this.shouldAnimate) {
			this.startAnimation();
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderFrame(this.currentFrame);
		} else {
			if (this.isDirty) {
				this.renderFrame(this.nextFrame);
			}
		}
		this.isDirty = false;
		this.view.renderComplete();
	}
	private appliesTo(treemapNodeStyleMapping: TreemapNodeStyleMapping, node: TreemapTreeNode): boolean {
		let comparisonValue: any = null;
		switch (treemapNodeStyleMapping.mappingMode) {
			case TreemapValueMappingMode.Value:
			comparisonValue = node.value;
			break;

			case TreemapValueMappingMode.Sum:
			comparisonValue = node.getArea();
			break;

			case TreemapValueMappingMode.CustomValue:
			comparisonValue = node.customValue;
			break;

		}

		if (this.isNumber(comparisonValue)) {
			let num: number = this.asNumber(comparisonValue);
			if (treemapNodeStyleMapping.value != null) {
				if (this.isNumber(treemapNodeStyleMapping.value)) {
					let val: number = this.asNumber(treemapNodeStyleMapping.value);
					if (isNaN_(val) && isNaN_(num)) {
						return true;
					}
					if (num == val) {
						return true;
					}
				}
			} else if (!isNaN_(treemapNodeStyleMapping.minimumValue) || !isNaN_(treemapNodeStyleMapping.maximumValue)) {
				let min: number = treemapNodeStyleMapping.minimumValue;
				let max: number = treemapNodeStyleMapping.maximumValue;
				if (num >= min && num <= max) {
					return true;
				}
			}
		} else if (this.isString(comparisonValue)) {
			if (treemapNodeStyleMapping.value != null) {
				if (this.isString(treemapNodeStyleMapping.value)) {
					let val1: string = <string>(treemapNodeStyleMapping.value);
					if (Base.equalsStatic(val1, <string>comparisonValue)) {
						return true;
					}
				}
			}
		} else {
			if (Base.equalsStatic(comparisonValue, treemapNodeStyleMapping.value)) {
				return true;
			}
		}
		return false;
	}
	private isString(comparisonValue: any): boolean {
		return typeof comparisonValue === 'string';
	}
	private asNumber(comparisonValue: any): number {
		if (typeof comparisonValue === 'number') {
			return <number>comparisonValue;
		}
		if (typeof comparisonValue === 'number') {
			return <number>typeGetValue(comparisonValue);
		}
		if (typeof comparisonValue === 'number') {
			return <number>typeGetValue(comparisonValue);
		}
		if (typeof comparisonValue === 'number') {
			return <number>typeGetValue(comparisonValue);
		}
		if (typeof comparisonValue === 'number') {
			return <number><number>comparisonValue;
		}
		if (typeof comparisonValue === 'number') {
			return <number>typeGetValue(comparisonValue);
		}
		if (typeof comparisonValue === 'number') {
			return <number><number>comparisonValue;
		}
		return NaN;
	}
	private isNumber(comparisonValue: any): boolean {
		if (typeof comparisonValue === 'number') {
			return true;
		}
		if (typeof comparisonValue === 'number') {
			return true;
		}
		if (typeof comparisonValue === 'number') {
			return true;
		}
		if (typeof comparisonValue === 'number') {
			return true;
		}
		if (typeof comparisonValue === 'number') {
			return true;
		}
		if (typeof comparisonValue === 'number') {
			return true;
		}
		if (typeof comparisonValue === 'number') {
			return true;
		}
		return false;
	}
	getOverFrame(pt: Point): TreemapNodeFrame {
		let frame = this.nextFrame;
		if (this.animating) {
			frame = this.currentFrame;
		}
		let matchingNodes = new List$1<TreemapNodeFrame>((<any>TreemapNodeFrame).$type, 0);
		for (let i = 0; i < frame.frameKeys.count; i++) {
			let key = frame.frameKeys._inner[i];
			let nodeFrame = frame.getNodeFrame(key);
			if (pt.x >= nodeFrame.bounds.left && pt.x <= nodeFrame.bounds.right && pt.y >= nodeFrame.bounds.top && pt.y <= nodeFrame.bounds.bottom) {
				matchingNodes.add(nodeFrame);
			}
		}
		matchingNodes.sort2((n1: TreemapNodeFrame, n2: TreemapNodeFrame) => {
			let n2Depth = this.getNodeDepth(n2);
			let n1Depth = this.getNodeDepth(n1);
			if (n2Depth > n1Depth) {
				return 1;
			} else if (n1Depth > n2Depth) {
				return -1;
			}
			return 0;
		});
		for (let item of fromEnum<TreemapNodeFrame>(matchingNodes)) {
			if (item.node.children.count > 0) {
				return item;
			}
		}
		return null;
	}
	private getNodeDepth(nodeFrame: TreemapNodeFrame): number {
		let node = nodeFrame.node;
		let depth: number = 0;
		while (node.parentID != null) {
			if (this._treeData == null) {
				break;
			}
			if (this._treeData.allNodes.containsKey(node.parentID)) {
				depth++;
				node = this._treeData.allNodes.item(node.parentID);
			} else {
				break;
			}
		}
		return depth;
	}
	getSpecificNode(pt: Point): TreemapNodeFrame {
		let frame = this.nextFrame;
		if (this.animating) {
			frame = this.currentFrame;
		}
		let matchingNodes = new List$1<TreemapNodeFrame>((<any>TreemapNodeFrame).$type, 0);
		for (let i = 0; i < frame.frameKeys.count; i++) {
			let key = frame.frameKeys._inner[i];
			let nodeFrame = frame.getNodeFrame(key);
			if (pt.x >= nodeFrame.bounds.left && pt.x <= nodeFrame.bounds.right && pt.y >= nodeFrame.bounds.top && pt.y <= nodeFrame.bounds.bottom) {
				matchingNodes.add(nodeFrame);
			}
		}
		matchingNodes.sort2((n1: TreemapNodeFrame, n2: TreemapNodeFrame) => {
			let n2Depth = this.getNodeDepth(n2);
			let n1Depth = this.getNodeDepth(n1);
			if (n2Depth > n1Depth) {
				return 1;
			} else if (n1Depth > n2Depth) {
				return -1;
			}
			return 0;
		});
		if (this.actualHeaderDisplayMode == TreemapHeaderDisplayMode.Overlay) {
			for (let item of fromEnum<TreemapNodeFrame>(matchingNodes)) {
				if (item.node.children.count > 0) {
					if (this.isOverHeader(pt, item)) {
						return item;
					}
				}
			}
		}
		for (let item1 of fromEnum<TreemapNodeFrame>(matchingNodes)) {
			return item1;
		}
		return null;
	}
	private startAnimation(): void {
		this._transitionProgress = 0;
		this.animator.stop();
		this.animator.start();
		this.view.onPixelScalingRatioChanged();
	}
	private get shouldAnimate(): boolean {
		return this.transitionDuration > 0;
	}
	provideContainer(container: DomRenderer): void {
		this.view.onContainerProvided(container);
		this.animator.provideRenderer(container);
	}
	flush(): void {
		this.view.flush();
	}
	private _overNode: TreemapNodeFrame = null;
	protected get overNode(): TreemapNodeFrame {
		return this._overNode;
	}
	protected set overNode(value: TreemapNodeFrame) {
		this._overNode = value;
	}
	private _specificNode: TreemapNodeFrame = null;
	protected get specificNode(): TreemapNodeFrame {
		return this._specificNode;
	}
	protected set specificNode(value: TreemapNodeFrame) {
		let oldValue = this._specificNode;
		this._specificNode = value;
		if (oldValue != value) {
			this.leaveOldNode(oldValue);
			this.enterNewNode(value);
		}
	}
	private enterNewNode(node: TreemapNodeFrame): void {
		if (node != null) {
			if (this.nodePointerEnter != null) {
				this.nodePointerEnter(this, this.getNodePointerArgs(node));
			}
		}
	}
	private leaveOldNode(node: TreemapNodeFrame): void {
		if (node != null) {
			if (this.nodePointerLeave != null) {
				this.nodePointerLeave(this, this.getNodePointerArgs(node));
			}
		}
	}
	private getNodePointerArgs(node: TreemapNodeFrame): TreemapNodePointerEventArgs {
		let args = new TreemapNodePointerEventArgs();
		if (node != null) {
			args.customValue = node.node.customValue;
			args.item = node.node.sourceItem;
			args.position = this.currentMousePosition;
			args.sum = node.node.getArea();
			args.value = node.node.value;
			args.label = node.node.label;
			args.isOverHeader = this.isOverHeader(this.currentMousePosition, node);
			if (node.node.parentID != null && this._treeData != null && this._treeData.allNodes.containsKey(node.node.parentID)) {
				let parentNode = this._treeData.allNodes.item(node.node.parentID);
				args.parentItem = parentNode.sourceItem;
				args.parentSum = parentNode.getArea();
				args.parentValue = parentNode.value;
				args.parentLabel = parentNode.label;
			}
		}
		args.isRightButton = false;
		return args;
	}
	static readonly focusItemPropertyName: string = "FocusItem";
	private _focusItem: any = null;
	get focusItem(): any {
		return this._focusItem;
	}
	set focusItem(value: any) {
		let oldValue = this._focusItem;
		this._focusItem = value;
		if (oldValue != this._focusItem) {
			this.onPropertyChanged(Treemap.focusItemPropertyName, oldValue, value);
		}
	}
	private _hoveredHeaderNode: TreemapTreeNode = null;
	protected get hoveredHeaderNode(): TreemapTreeNode {
		return this._hoveredHeaderNode;
	}
	protected set hoveredHeaderNode(value: TreemapTreeNode) {
		this._hoveredHeaderNode = value;
	}
	private _focusNode: TreemapTreeNode = null;
	protected get focusNode(): TreemapTreeNode {
		return this._focusNode;
	}
	protected set focusNode(value: TreemapTreeNode) {
		this._focusNode = value;
	}
	onMouseDown(point: Point): void {
		this.updateMousePosition(point);
		if (this.nodePointerPressed != null && this.specificNode != null) {
			let args = this.getNodePointerArgs(this.specificNode);
			this.nodePointerPressed(this, args);
		}
	}
	onMouseUp(point: Point): void {
		this.updateMousePosition(point);
		let handled: boolean = false;
		if (this.nodePointerReleased != null && this.specificNode != null) {
			let args = this.getNodePointerArgs(this.specificNode);
			this.nodePointerReleased(this, args);
			handled = args.isHandled;
		}
		if (!handled) {
			if (this.overNode != null) {
				if (this.overNode.node == this.focusNode && this.isOverHeader(point, this.overNode)) {
					this.focusNode = null;
					this.isDirty = true;
					this.view.scheduleArrange();
					this.updateFocusItem(null);
					return;
				}
				this.focusNode = this.overNode.node;
				this.updateFocusItem(this.overNode.node);
				this.isDirty = true;
				this.view.scheduleArrange();
			} else {
				this.focusNode = null;
				this.isDirty = true;
				this.updateFocusItem(null);
				this.view.scheduleArrange();
			}
		}
	}
	private updateFocusItem(node: TreemapTreeNode): void {
		try {
			this._ignoreFocusChanges = true;
			if (node == null) {
				this.focusItem = null;
			} else {
				this.focusItem = node.sourceItem;
			}
			this._ignoreFocusChanges = false;
		}
		finally {
			this._ignoreFocusChanges = false;
		}
	}
	private isOverHeader(pt: Point, node: TreemapNodeFrame): boolean {
		let frame = this.nextFrame;
		if (this.animating) {
			frame = this.currentFrame;
		}
		if (node == null) {
			return false;
		}
		let nodeFrame = node;
		if (pt.x >= nodeFrame.bounds.left && pt.x <= nodeFrame.bounds.right && pt.y >= nodeFrame.bounds.top && pt.y <= nodeFrame.bounds.bottom) {
			if (pt.y - nodeFrame.bounds.top <= nodeFrame.headerHeight) {
				return true;
			}
		}
		return false;
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (!this.sourcesEqual(source_)) {
			return;
		}
		let itemsSource = this.fastItemsSource;
		if (itemsSource == null) {
			return;
		}
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(2, NotifyCollectionChangedAction.Replace, newItem, oldItem, index));
	}
	notifyClearItems(source_: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (!this.sourcesEqual(source_)) {
			return;
		}
		let itemsSource = this.fastItemsSource;
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(0, NotifyCollectionChangedAction.Reset));
	}
	private sourcesEqual(source: any): boolean {
		return Treemap.sourcesEqual1(source, this.dataSource);
	}
	static sourcesEqual1(source: any, itemsSource: any): boolean {
		return source == itemsSource;
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (!this.sourcesEqual(source_)) {
			return;
		}
		let itemsSource = this.fastItemsSource;
		if (itemsSource == null) {
			return;
		}
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Add, newItem, index));
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (!this.sourcesEqual(source_)) {
			return;
		}
		let itemsSource = this.fastItemsSource;
		if (itemsSource == null) {
			return;
		}
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Remove, oldItem, index));
	}
	onMouseEnter(point: Point): void {
		this.updateMousePosition(point);
	}
	onMouseLeave(point: Point): void {
		this.updateMousePosition(point);
		this.overNode = null;
		this.specificNode = null;
		if (!this.animating) {
			this.isDirty = true;
			this.view.scheduleArrange();
		}
	}
	private _currentMousePosition: Point = null;
	protected get currentMousePosition(): Point {
		return this._currentMousePosition;
	}
	protected set currentMousePosition(value: Point) {
		this._currentMousePosition = value;
	}
	protected updateMousePosition(point: Point): void {
		this.currentMousePosition = <Point>{ $type: Point_$type, x: point.x, y: point.y };
		this.overNode = this.getOverFrame(point);
		this.specificNode = this.getSpecificNode(point);
		this.updateHeaderHighlight(point);
	}
	onMouseOver(point: Point): void {
		this.updateMousePosition(point);
		if (this.specificNode != null) {
			if (this.nodePointerOver != null) {
				this.nodePointerOver(this, this.getNodePointerArgs(this.specificNode));
			}
		}
	}
	private updateHeaderHighlight(point: Point): void {
		if (!this.animating) {
			if (this.isOverHeader(point, this.overNode)) {
				let oldValue = this.hoveredHeaderNode;
				this.hoveredHeaderNode = this.overNode.node;
				if (this.hoveredHeaderNode != oldValue) {
					this.isDirty = true;
					this.view.scheduleArrange();
				}
			} else {
				let oldValue1 = this.hoveredHeaderNode;
				this.hoveredHeaderNode = null;
				if (this.hoveredHeaderNode != oldValue1) {
					this.isDirty = true;
					this.view.scheduleArrange();
				}
			}
		}
	}
	onRightMouseDown(point: Point): void {
		this.updateMousePosition(point);
		if (this.nodePointerPressed != null && this.specificNode != null) {
			let args = this.getNodePointerArgs(this.specificNode);
			args.isRightButton = true;
			this.nodePointerPressed(this, args);
		}
	}
	onRightMouseUp(point: Point): void {
		this.updateMousePosition(point);
		let handled: boolean = false;
		if (this.nodePointerReleased != null && this.specificNode != null) {
			let args = this.getNodePointerArgs(this.specificNode);
			args.isRightButton = true;
			this.nodePointerReleased(this, args);
			handled = args.isHandled;
		}
		if (!handled) {
			this.overNode = null;
			this.focusNode = null;
			this.updateFocusItem(null);
			this.isDirty = true;
			this.view.scheduleArrange();
		}
	}
	onTreeMapStyleMappingChanged(treemapStyleMapping: TreemapNodeStyle): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	nodeStyling: (sender: any, args: TreemapNodeStylingEventArgs) => void = null;
	nodePointerOver: (sender: any, args: TreemapNodePointerEventArgs) => void = null;
	nodePointerEnter: (sender: any, args: TreemapNodePointerEventArgs) => void = null;
	nodePointerLeave: (sender: any, args: TreemapNodePointerEventArgs) => void = null;
	nodePointerPressed: (sender: any, args: TreemapNodePointerEventArgs) => void = null;
	nodePointerReleased: (sender: any, args: TreemapNodePointerEventArgs) => void = null;
}

/**
 * @hidden 
 */
export class TreemapNodeStyle extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(TreemapNodeStyle, 'TreemapNodeStyle', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	private _owner: Treemap = null;
	get owner(): Treemap {
		return this._owner;
	}
	set owner(value: Treemap) {
		this._owner = value;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		this.propertyUpdatedOverride(propertyName, oldValue, newValue);
	}
	private _isDirty: HashSet$1<string> = new HashSet$1<string>(String_$type, 0);
	clearDirty(): void {
		this._isDirty.clear();
	}
	isDirty(propertyName: string): boolean {
		return this._isDirty.contains(propertyName);
	}
	protected propertyUpdatedOverride(propertyName: string, oldValue: any, newValue: any): void {
		if (!this._isDirty.contains(propertyName)) {
			this._isDirty.add_1(propertyName);
		}
		if (this.owner != null) {
			this.owner.onTreeMapStyleMappingChanged(this);
		}
	}
	static readonly headerHoverBackgroundPropertyName: string = "HeaderHoverBackground";
	private _headerHoverBackground: Brush = null;
	get headerHoverBackground(): Brush {
		return this._headerHoverBackground;
	}
	set headerHoverBackground(value: Brush) {
		let oldValue = this._headerHoverBackground;
		this._headerHoverBackground = value;
		if (oldValue != this._headerHoverBackground) {
			this.onPropertyChanged(TreemapNodeStyle.headerHoverBackgroundPropertyName, oldValue, value);
		}
	}
	static readonly headerBackgroundPropertyName: string = "HeaderBackground";
	private _headerBackground: Brush = null;
	get headerBackground(): Brush {
		return this._headerBackground;
	}
	set headerBackground(value: Brush) {
		let oldValue = this._headerBackground;
		this._headerBackground = value;
		if (oldValue != this._headerBackground) {
			this.onPropertyChanged(TreemapNodeStyle.headerBackgroundPropertyName, oldValue, value);
		}
	}
	static readonly headerTextColorPropertyName: string = "HeaderTextColor";
	private _headerTextColor: Brush = null;
	get headerTextColor(): Brush {
		return this._headerTextColor;
	}
	set headerTextColor(value: Brush) {
		let oldValue = this._headerTextColor;
		this._headerTextColor = value;
		if (oldValue != this._headerTextColor) {
			this.onPropertyChanged(TreemapNodeStyle.headerTextColorPropertyName, oldValue, value);
		}
	}
	static readonly labelPropertyName: string = "Label";
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		let oldValue = this._label;
		this._label = value;
		if (oldValue != this._label) {
			this.onPropertyChanged(TreemapNodeStyle.labelPropertyName, oldValue, value);
		}
	}
	static readonly textColorPropertyName: string = "TextColor";
	private _textColor: Brush = null;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		let oldValue = this._textColor;
		this._textColor = value;
		if (oldValue != this._textColor) {
			this.onPropertyChanged(TreemapNodeStyle.textColorPropertyName, oldValue, value);
		}
	}
	static readonly headerHoverTextColorPropertyName: string = "HeaderHoverTextColor";
	private _headerHoverTextColor: Brush = null;
	get headerHoverTextColor(): Brush {
		return this._headerHoverTextColor;
	}
	set headerHoverTextColor(value: Brush) {
		let oldValue = this._headerHoverTextColor;
		this._headerHoverTextColor = value;
		if (oldValue != this._headerHoverTextColor) {
			this.onPropertyChanged(TreemapNodeStyle.headerHoverTextColorPropertyName, oldValue, value);
		}
	}
	static readonly headerLabelLeftMarginPropertyName: string = "HeaderLabelLeftMargin";
	private _headerLabelLeftMargin: number = DeviceUtils.toPixelUnits(5);
	get headerLabelLeftMargin(): number {
		return this._headerLabelLeftMargin;
	}
	set headerLabelLeftMargin(value: number) {
		let oldValue = this._headerLabelLeftMargin;
		this._headerLabelLeftMargin = value;
		if (oldValue != this._headerLabelLeftMargin) {
			this.onPropertyChanged(TreemapNodeStyle.headerLabelLeftMarginPropertyName, oldValue, value);
		}
	}
	static readonly headerLabelTopMarginPropertyName: string = "HeaderLabelTopMargin";
	private _headerLabelTopMargin: number = DeviceUtils.toPixelUnits(3);
	get headerLabelTopMargin(): number {
		return this._headerLabelTopMargin;
	}
	set headerLabelTopMargin(value: number) {
		let oldValue = this._headerLabelTopMargin;
		this._headerLabelTopMargin = value;
		if (oldValue != this._headerLabelTopMargin) {
			this.onPropertyChanged(TreemapNodeStyle.headerLabelTopMarginPropertyName, oldValue, value);
		}
	}
	static readonly headerLabelRightMarginPropertyName: string = "HeaderLabelRightMargin";
	private _headerLabelRightMargin: number = DeviceUtils.toPixelUnits(5);
	get headerLabelRightMargin(): number {
		return this._headerLabelRightMargin;
	}
	set headerLabelRightMargin(value: number) {
		let oldValue = this._headerLabelRightMargin;
		this._headerLabelRightMargin = value;
		if (oldValue != this._headerLabelRightMargin) {
			this.onPropertyChanged(TreemapNodeStyle.headerLabelRightMarginPropertyName, oldValue, value);
		}
	}
	static readonly headerLabelBottomMarginPropertyName: string = "HeaderLabelBottomMargin";
	private _headerLabelBottomMargin: number = DeviceUtils.toPixelUnits(3);
	get headerLabelBottomMargin(): number {
		return this._headerLabelBottomMargin;
	}
	set headerLabelBottomMargin(value: number) {
		let oldValue = this._headerLabelBottomMargin;
		this._headerLabelBottomMargin = value;
		if (oldValue != this._headerLabelBottomMargin) {
			this.onPropertyChanged(TreemapNodeStyle.headerLabelBottomMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelLeftMarginPropertyName: string = "LabelLeftMargin";
	private _labelLeftMargin: number = DeviceUtils.toPixelUnits(5);
	get labelLeftMargin(): number {
		return this._labelLeftMargin;
	}
	set labelLeftMargin(value: number) {
		let oldValue = this._labelLeftMargin;
		this._labelLeftMargin = value;
		if (oldValue != this._labelLeftMargin) {
			this.onPropertyChanged(TreemapNodeStyle.labelLeftMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelTopMarginPropertyName: string = "LabelTopMargin";
	private _labelTopMargin: number = DeviceUtils.toPixelUnits(3);
	get labelTopMargin(): number {
		return this._labelTopMargin;
	}
	set labelTopMargin(value: number) {
		let oldValue = this._labelTopMargin;
		this._labelTopMargin = value;
		if (oldValue != this._labelTopMargin) {
			this.onPropertyChanged(TreemapNodeStyle.labelTopMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelRightMarginPropertyName: string = "LabelRightMargin";
	private _labelRightMargin: number = DeviceUtils.toPixelUnits(5);
	get labelRightMargin(): number {
		return this._labelRightMargin;
	}
	set labelRightMargin(value: number) {
		let oldValue = this._labelRightMargin;
		this._labelRightMargin = value;
		if (oldValue != this._labelRightMargin) {
			this.onPropertyChanged(TreemapNodeStyle.labelRightMarginPropertyName, oldValue, value);
		}
	}
	static readonly labelBottomMarginPropertyName: string = "LabelBottomMargin";
	private _labelBottomMargin: number = DeviceUtils.toPixelUnits(3);
	get labelBottomMargin(): number {
		return this._labelBottomMargin;
	}
	set labelBottomMargin(value: number) {
		let oldValue = this._labelBottomMargin;
		this._labelBottomMargin = value;
		if (oldValue != this._labelBottomMargin) {
			this.onPropertyChanged(TreemapNodeStyle.labelBottomMarginPropertyName, oldValue, value);
		}
	}
	static readonly headerHeightPropertyName: string = "HeaderHeight";
	private _headerHeight: number = NaN;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		let oldValue = this._headerHeight;
		this._headerHeight = value;
		if (oldValue != this._headerHeight) {
			this.onPropertyChanged(TreemapNodeStyle.headerHeightPropertyName, oldValue, value);
		}
	}
	static readonly labelHorizontalAlignmentPropertyName: string = "LabelHorizontalAlignment";
	private _labelHorizontalAlignment: HorizontalAlignment = HorizontalAlignment.Center;
	get labelHorizontalAlignment(): HorizontalAlignment {
		return this._labelHorizontalAlignment;
	}
	set labelHorizontalAlignment(value: HorizontalAlignment) {
		let oldValue = this._labelHorizontalAlignment;
		this._labelHorizontalAlignment = value;
		if (oldValue != this._labelHorizontalAlignment) {
			this.onPropertyChanged(TreemapNodeStyle.labelHorizontalAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, value));
		}
	}
	static readonly labelVerticalAlignmentPropertyName: string = "LabelVerticalAlignment";
	private _labelVerticalAlignment: VerticalAlignment = VerticalAlignment.Center;
	get labelVerticalAlignment(): VerticalAlignment {
		return this._labelVerticalAlignment;
	}
	set labelVerticalAlignment(value: VerticalAlignment) {
		let oldValue = this._labelVerticalAlignment;
		this._labelVerticalAlignment = value;
		if (oldValue != this._labelVerticalAlignment) {
			this.onPropertyChanged(TreemapNodeStyle.labelVerticalAlignmentPropertyName, enumGetBox<VerticalAlignment>(VerticalAlignment_$type, oldValue), enumGetBox<VerticalAlignment>(VerticalAlignment_$type, value));
		}
	}
	static readonly fillPropertyName: string = "Fill";
	private _fill: Brush = null;
	get fill(): Brush {
		return this._fill;
	}
	set fill(value: Brush) {
		let oldValue = this._fill;
		this._fill = value;
		if (oldValue != this._fill) {
			this.onPropertyChanged(TreemapNodeStyle.fillPropertyName, oldValue, value);
		}
	}
	static readonly outlinePropertyName: string = "Outline";
	private _outline: Brush = null;
	get outline(): Brush {
		return this._outline;
	}
	set outline(value: Brush) {
		let oldValue = this._outline;
		this._outline = value;
		if (oldValue != this._outline) {
			this.onPropertyChanged(TreemapNodeStyle.outlinePropertyName, oldValue, value);
		}
	}
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	private _strokeThickness: number = NaN;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		let oldValue = this._strokeThickness;
		this._strokeThickness = value;
		if (oldValue != this._strokeThickness) {
			this.onPropertyChanged(TreemapNodeStyle.strokeThicknessPropertyName, oldValue, value);
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
}

/**
 * @hidden 
 */
export class TreemapNodeStyleMapping extends TreemapNodeStyle {
	static $t: Type = markType(TreemapNodeStyleMapping, 'TreemapNodeStyleMapping', (<any>TreemapNodeStyle).$type);
	static readonly targetTypePropertyTargetType: string = "TargetType";
	private _targetType: TreemapNodeStyleMappingTargetType = TreemapNodeStyleMappingTargetType.All;
	get targetType(): TreemapNodeStyleMappingTargetType {
		return this._targetType;
	}
	set targetType(value: TreemapNodeStyleMappingTargetType) {
		let oldValue = this._targetType;
		this._targetType = value;
		if (oldValue != this._targetType) {
			this.onPropertyChanged(TreemapNodeStyleMapping.targetTypePropertyTargetType, enumGetBox<TreemapNodeStyleMappingTargetType>(TreemapNodeStyleMappingTargetType_$type, oldValue), enumGetBox<TreemapNodeStyleMappingTargetType>(TreemapNodeStyleMappingTargetType_$type, value));
		}
	}
	static readonly namePropertyName: string = "Name";
	private _name: string = null;
	get name(): string {
		return this._name;
	}
	set name(value: string) {
		let oldValue = this._name;
		this._name = value;
		if (oldValue != this._name) {
			this.onPropertyChanged(TreemapNodeStyleMapping.namePropertyName, oldValue, value);
		}
	}
	static readonly minimumValuePropertyName: string = "MinimumValue";
	private _minimumValue: number = NaN;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		let oldValue = this._minimumValue;
		this._minimumValue = value;
		if (oldValue != this._minimumValue) {
			this.onPropertyChanged(TreemapNodeStyleMapping.minimumValuePropertyName, oldValue, value);
		}
	}
	static readonly maximumValuePropertyName: string = "MaximumValue";
	private _maximumValue: number = NaN;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		let oldValue = this._maximumValue;
		this._maximumValue = value;
		if (oldValue != this._maximumValue) {
			this.onPropertyChanged(TreemapNodeStyleMapping.maximumValuePropertyName, oldValue, value);
		}
	}
	static readonly valuePropertyName: string = "Value";
	private _value: any = null;
	get value(): any {
		return this._value;
	}
	set value(value: any) {
		let oldValue = this._value;
		this._value = value;
		if (oldValue != this._value) {
			this.onPropertyChanged(TreemapNodeStyleMapping.valuePropertyName, oldValue, value);
		}
	}
	static readonly mappingModePropertyName: string = "MappingMode";
	private _mappingMode: TreemapValueMappingMode = TreemapValueMappingMode.Value;
	get mappingMode(): TreemapValueMappingMode {
		return this._mappingMode;
	}
	set mappingMode(value: TreemapValueMappingMode) {
		let oldMappingMode = this._mappingMode;
		this._mappingMode = value;
		if (oldMappingMode != this._mappingMode) {
			this.onPropertyChanged(TreemapNodeStyleMapping.mappingModePropertyName, enumGetBox<TreemapValueMappingMode>(TreemapValueMappingMode_$type, oldMappingMode), enumGetBox<TreemapValueMappingMode>(TreemapValueMappingMode_$type, value));
		}
	}
}

/**
 * @hidden 
 */
export class TreemapNodeStyleMappingCollection extends ObservableCollection$1<TreemapNodeStyleMapping> {
	static $t: Type = markType(TreemapNodeStyleMappingCollection, 'TreemapNodeStyleMappingCollection', (<any>ObservableCollection$1).$type.specialize((<any>TreemapNodeStyleMapping).$type));
	constructor() {
		super((<any>TreemapNodeStyleMapping).$type, 0);
	}
	collectionResetting: (sender: any, e: EventArgs) => void = null;
	protected clearItems(): void {
		if (this.collectionResetting != null) {
			this.collectionResetting(this, null);
		}
		super.clearItems();
	}
}

/**
 * @hidden 
 */
export class TreemapNodeStylingEventArgs extends EventArgs {
	static $t: Type = markType(TreemapNodeStylingEventArgs, 'TreemapNodeStylingEventArgs', (<any>EventArgs).$type);
	private _value: number = 0;
	get value(): number {
		return this._value;
	}
	set value(value: number) {
		this._value = value;
	}
	private _sum: number = 0;
	get sum(): number {
		return this._sum;
	}
	set sum(value: number) {
		this._sum = value;
	}
	private _customValue: any = null;
	get customValue(): any {
		return this._customValue;
	}
	set customValue(value: any) {
		this._customValue = value;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _parentItem: any = null;
	get parentItem(): any {
		return this._parentItem;
	}
	set parentItem(value: any) {
		this._parentItem = value;
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
	private _parentValue: number = 0;
	get parentValue(): number {
		return this._parentValue;
	}
	set parentValue(value: number) {
		this._parentValue = value;
	}
	private _parentLabel: string = null;
	get parentLabel(): string {
		return this._parentLabel;
	}
	set parentLabel(value: string) {
		this._parentLabel = value;
	}
	private _parentSum: number = 0;
	get parentSum(): number {
		return this._parentSum;
	}
	set parentSum(value: number) {
		this._parentSum = value;
	}
	private _isParent: boolean = false;
	get isParent(): boolean {
		return this._isParent;
	}
	set isParent(value: boolean) {
		this._isParent = value;
	}
	private _style: TreemapNodeStyle = null;
	get style(): TreemapNodeStyle {
		return this._style;
	}
	set style(value: TreemapNodeStyle) {
		this._style = value;
	}
}

/**
 * @hidden 
 */
export class TreemapFrame extends Base {
	static $t: Type = markType(TreemapFrame, 'TreemapFrame');
	constructor() {
		super();
		this.frameKeys = new List$1<string>(String_$type, 0);
		this._frames = new Dictionary$2<string, TreemapNodeFrame>(String_$type, (<any>TreemapNodeFrame).$type, 0);
	}
	private _frames: Dictionary$2<string, TreemapNodeFrame> = null;
	private _frameKeys: List$1<string> = null;
	get frameKeys(): List$1<string> {
		return this._frameKeys;
	}
	set frameKeys(value: List$1<string>) {
		this._frameKeys = value;
	}
	interpolate(p: number, previousFrame: TreemapFrame, nextFrame: TreemapFrame): void {
		this.clear();
		this.interpolateFramesToEmpty(p, previousFrame, nextFrame);
		this.interpolateFramesFromEmpty(p, previousFrame, nextFrame);
		this.interpolateFrames(p, previousFrame, nextFrame);
	}
	private interpolateFrames(p: number, previousFrame: TreemapFrame, nextFrame: TreemapFrame): void {
		for (let i = 0; i < previousFrame.frameKeys.count; i++) {
			let key = previousFrame.frameKeys._inner[i];
			if (nextFrame._frames.containsKey(key)) {
				let interpolatedFrame = TreemapNodeFrame.interpolate(p, previousFrame._frames.item(key), nextFrame._frames.item(key));
				this._frames.addItem(interpolatedFrame.iD, interpolatedFrame);
				this.frameKeys.add(interpolatedFrame.iD);
			}
		}
	}
	private interpolateFramesFromEmpty(p: number, previousFrame: TreemapFrame, nextFrame: TreemapFrame): void {
		for (let i = 0; i < nextFrame.frameKeys.count; i++) {
			let key = nextFrame.frameKeys._inner[i];
			if (!previousFrame._frames.containsKey(key)) {
				let interpolatedFrame = TreemapNodeFrame.interpolateFromEmpty(p, nextFrame._frames.item(key));
				this._frames.addItem(interpolatedFrame.iD, interpolatedFrame);
				this.frameKeys.add(interpolatedFrame.iD);
			}
		}
	}
	private interpolateFramesToEmpty(p: number, previousFrame: TreemapFrame, nextFrame: TreemapFrame): void {
		for (let i = 0; i < previousFrame.frameKeys.count; i++) {
			let key = previousFrame.frameKeys._inner[i];
			if (!nextFrame._frames.containsKey(key)) {
				let interpolatedFrame = TreemapNodeFrame.interpolateToEmpty(p, previousFrame._frames.item(key));
				this._frames.addItem(interpolatedFrame.iD, interpolatedFrame);
				this.frameKeys.add(interpolatedFrame.iD);
			}
		}
	}
	setBounds(item: TreemapTreeNode, rect: Rect): void {
		let frame: TreemapNodeFrame;
		if (!((() => { let $ret = this._frames.tryGetValue(item.iD, frame); frame = $ret.p1; return $ret.ret; })())) {
			frame = new TreemapNodeFrame();
			frame.iD = item.iD;
			frame.node = item;
			this._frames.item(frame.iD, frame);
			this.frameKeys.add(frame.iD);
		}
		frame.bounds = rect;
	}
	setIsAdjustedBounds(item: TreemapTreeNode, isAdjusted: boolean): void {
		this._frames.item(item.iD).isAdjustedBounds = isAdjusted;
	}
	getIsAdjustedBounds(item: TreemapTreeNode): boolean {
		if (!this._frames.containsKey(item.iD)) {
			return false;
		}
		return this._frames.item(item.iD).isAdjustedBounds;
	}
	getBounds(item: TreemapTreeNode): Rect {
		let frame: TreemapNodeFrame;
		if (!((() => { let $ret = this._frames.tryGetValue(item.iD, frame); frame = $ret.p1; return $ret.ret; })())) {
			return Rect.empty;
		}
		return frame.bounds;
	}
	setAppearance(item: TreemapTreeNode, label: string, fillColor: Brush, outlineColor: Brush, headerColor: Brush, nodeFontBrush: Brush, strokeThickness: number, headerDisplayMode: TreemapHeaderDisplayMode, headerWidth: number, headerHeight: number, headerLabelLeftMargin: number, headerLabelTopMargin: number, headerLabelRightMargin: number, headerLabelBottomMargin: number, labelLeftMargin: number, labelTopMargin: number, labelRightMargin: number, labelBottomMargin: number, labelHorizontalAlignment: HorizontalAlignment, labelVerticalAlignment: VerticalAlignment): void {
		let frame: TreemapNodeFrame;
		if (!((() => { let $ret = this._frames.tryGetValue(item.iD, frame); frame = $ret.p1; return $ret.ret; })())) {
			return;
		}
		frame.label = label;
		frame.fillColor = fillColor;
		frame.outlineColor = outlineColor;
		frame.strokeThickness = strokeThickness;
		frame.headerColor = headerColor;
		frame.headerDisplayMode = headerDisplayMode;
		frame.headerWidth = headerWidth;
		frame.headerHeight = headerHeight;
		frame.nodeFontBrush = nodeFontBrush;
		frame.headerLabelLeftMargin = headerLabelLeftMargin;
		frame.headerLabelTopMargin = headerLabelTopMargin;
		frame.headerLabelRightMargin = headerLabelRightMargin;
		frame.headerLabelBottomMargin = headerLabelBottomMargin;
		frame.labelLeftMargin = labelLeftMargin;
		frame.labelTopMargin = labelTopMargin;
		frame.labelRightMargin = labelRightMargin;
		frame.labelBottomMargin = labelBottomMargin;
		frame.labelHorizontalAlignment = labelHorizontalAlignment;
		frame.labelVerticalAlignment = labelVerticalAlignment;
	}
	clear(): void {
		this.frameKeys.clear();
		this._frames.clear();
	}
	hasFrame(key: string): boolean {
		return this._frames.containsKey(key);
	}
	getNodeFrame(key: string): TreemapNodeFrame {
		return this._frames.item(key);
	}
	applyStyleMapping(item: TreemapTreeNode, mapping: TreemapNodeStyle, getNodeFontBrush: (arg1: TreemapTreeNode, arg2: Brush, arg3: Brush) => Brush): void {
		let frame: TreemapNodeFrame;
		if (!((() => { let $ret = this._frames.tryGetValue(item.iD, frame); frame = $ret.p1; return $ret.ret; })())) {
			return;
		}
		let isParent = item.children != null && item.children.count > 0;
		if (mapping.isDirty(TreemapNodeStyleMapping.labelPropertyName)) {
			frame.label = mapping.label;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.fillPropertyName)) {
			frame.fillColor = mapping.fill;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.labelHorizontalAlignmentPropertyName)) {
			frame.labelHorizontalAlignment = mapping.labelHorizontalAlignment;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.outlinePropertyName)) {
			frame.outlineColor = mapping.outline;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.strokeThicknessPropertyName)) {
			frame.strokeThickness = mapping.strokeThickness;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.headerBackgroundPropertyName)) {
			frame.headerColor = mapping.headerBackground;
		}
		if (isParent) {
			if (mapping.isDirty(TreemapNodeStyleMapping.headerTextColorPropertyName)) {
				frame.nodeFontBrush = mapping.headerTextColor;
			} else if (mapping.isDirty(TreemapNodeStyleMapping.fillPropertyName) || mapping.isDirty(TreemapNodeStyleMapping.headerBackgroundPropertyName)) {
				frame.nodeFontBrush = getNodeFontBrush(item, frame.fillColor, frame.headerColor);
			}
		} else {
			if (mapping.isDirty(TreemapNodeStyleMapping.textColorPropertyName)) {
				frame.nodeFontBrush = mapping.textColor;
			} else if (mapping.isDirty(TreemapNodeStyleMapping.fillPropertyName) || mapping.isDirty(TreemapNodeStyleMapping.headerBackgroundPropertyName)) {
				frame.nodeFontBrush = getNodeFontBrush(item, frame.fillColor, frame.headerColor);
			}
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.headerLabelLeftMarginPropertyName)) {
			frame.headerLabelLeftMargin = mapping.headerLabelLeftMargin;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.headerLabelTopMarginPropertyName)) {
			frame.headerLabelTopMargin = mapping.headerLabelTopMargin;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.headerLabelRightMarginPropertyName)) {
			frame.headerLabelRightMargin = mapping.headerLabelRightMargin;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.headerLabelBottomMarginPropertyName)) {
			frame.headerLabelBottomMargin = mapping.headerLabelBottomMargin;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.labelLeftMarginPropertyName)) {
			frame.labelLeftMargin = mapping.labelLeftMargin;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.labelTopMarginPropertyName)) {
			frame.labelTopMargin = mapping.labelTopMargin;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.labelRightMarginPropertyName)) {
			frame.labelRightMargin = mapping.labelRightMargin;
		}
		if (mapping.isDirty(TreemapNodeStyleMapping.labelBottomMarginPropertyName)) {
			frame.labelBottomMargin = mapping.labelBottomMargin;
		}
	}
}

/**
 * @hidden 
 */
export class TreemapNodeFrame extends Base {
	static $t: Type = markType(TreemapNodeFrame, 'TreemapNodeFrame');
	constructor() {
		super();
		this.bounds = Rect.empty;
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
	private _node: TreemapTreeNode = null;
	get node(): TreemapTreeNode {
		return this._node;
	}
	set node(value: TreemapTreeNode) {
		this._node = value;
	}
	private _iD: string = null;
	get iD(): string {
		return this._iD;
	}
	set iD(value: string) {
		this._iD = value;
	}
	static interpolate(p: number, previous: TreemapNodeFrame, next: TreemapNodeFrame): TreemapNodeFrame {
		let newFrame = new TreemapNodeFrame();
		newFrame.node = next.node;
		newFrame.iD = next.iD;
		newFrame.label = next.label;
		let nextBounds = next.bounds;
		if (nextBounds.isEmpty) {
			nextBounds = new Rect(0, 0, 0, 0, 0);
		}
		let previousBounds = previous.bounds;
		if (previousBounds.isEmpty) {
			previousBounds = new Rect(0, 0, 0, 0, 0);
		}
		newFrame.bounds = new Rect(0, previousBounds.left + (nextBounds.left - previousBounds.left) * p, previousBounds.top + (nextBounds.top - previousBounds.top) * p, previousBounds.width + (nextBounds.width - previousBounds.width) * p, previousBounds.height + (nextBounds.height - previousBounds.height) * p);
		newFrame.fillColor = BrushUtil.getInterpolation(previous.fillColor, p, next.fillColor, InterpolationMode.RGB);
		newFrame.outlineColor = BrushUtil.getInterpolation(previous.outlineColor, p, next.outlineColor, InterpolationMode.RGB);
		newFrame.headerColor = BrushUtil.getInterpolation(previous.headerColor, p, next.headerColor, InterpolationMode.RGB);
		newFrame.nodeFontBrush = BrushUtil.getInterpolation(previous.nodeFontBrush, p, next.nodeFontBrush, InterpolationMode.RGB);
		newFrame.strokeThickness = previous.strokeThickness + (next.strokeThickness - previous.strokeThickness) * p;
		newFrame.headerLabelLeftMargin = previous.headerLabelLeftMargin + (next.headerLabelLeftMargin - previous.headerLabelLeftMargin) * p;
		newFrame.headerLabelTopMargin = previous.headerLabelTopMargin + (next.headerLabelTopMargin - previous.headerLabelTopMargin) * p;
		newFrame.headerLabelRightMargin = previous.headerLabelRightMargin + (next.headerLabelRightMargin - previous.headerLabelRightMargin) * p;
		newFrame.headerLabelBottomMargin = previous.headerLabelBottomMargin + (next.headerLabelBottomMargin - previous.headerLabelBottomMargin) * p;
		newFrame.labelLeftMargin = previous.labelLeftMargin + (next.labelLeftMargin - previous.labelLeftMargin) * p;
		newFrame.labelTopMargin = previous.labelTopMargin + (next.labelTopMargin - previous.labelTopMargin) * p;
		newFrame.labelRightMargin = previous.labelRightMargin + (next.labelRightMargin - previous.labelRightMargin) * p;
		newFrame.labelBottomMargin = previous.labelBottomMargin + (next.labelBottomMargin - previous.labelBottomMargin) * p;
		newFrame.headerWidth = previous.headerWidth + (next.headerWidth - previous.headerWidth) * p;
		newFrame.headerHeight = previous.headerHeight + (next.headerHeight - previous.headerHeight) * p;
		newFrame.labelHorizontalAlignment = p < 0.5 ? previous.labelHorizontalAlignment : next.labelHorizontalAlignment;
		newFrame.labelVerticalAlignment = p < 0.5 ? previous.labelVerticalAlignment : next.labelVerticalAlignment;
		newFrame.headerDisplayMode = p < 0.5 ? previous.headerDisplayMode : next.headerDisplayMode;
		return newFrame;
	}
	static interpolateToEmpty(p: number, prev: TreemapNodeFrame): TreemapNodeFrame {
		let targetBounds = new Rect(0, 0, 0, 0, 0);
		let newFrame = new TreemapNodeFrame();
		newFrame.node = prev.node;
		newFrame.label = prev.label;
		newFrame.iD = prev.iD;
		let prevBounds = prev.bounds;
		if (prevBounds.isEmpty) {
			prevBounds = new Rect(0, 0, 0, 0, 0);
		}
		newFrame.bounds = new Rect(0, prevBounds.left + (targetBounds.left - prevBounds.left) * p, prevBounds.top + (targetBounds.top - prevBounds.top) * p, prevBounds.width + (targetBounds.width - prevBounds.width) * p, prevBounds.height + (targetBounds.height - prevBounds.height) * p);
		newFrame.fillColor = BrushUtil.getInterpolation(prev.fillColor, p, null, InterpolationMode.RGB);
		newFrame.outlineColor = BrushUtil.getInterpolation(prev.outlineColor, p, null, InterpolationMode.RGB);
		newFrame.headerColor = BrushUtil.getInterpolation(prev.headerColor, p, null, InterpolationMode.RGB);
		newFrame.nodeFontBrush = BrushUtil.getInterpolation(prev.nodeFontBrush, p, null, InterpolationMode.RGB);
		newFrame.strokeThickness = prev.strokeThickness + (0 - prev.strokeThickness) * p;
		newFrame.headerLabelLeftMargin = prev.headerLabelLeftMargin + (0 - prev.headerLabelLeftMargin) * p;
		newFrame.headerLabelTopMargin = prev.headerLabelTopMargin + (0 - prev.headerLabelTopMargin) * p;
		newFrame.headerLabelRightMargin = prev.headerLabelRightMargin + (0 - prev.headerLabelRightMargin) * p;
		newFrame.headerLabelBottomMargin = prev.headerLabelBottomMargin + (0 - prev.headerLabelBottomMargin) * p;
		newFrame.labelLeftMargin = prev.labelLeftMargin + (0 - prev.labelLeftMargin) * p;
		newFrame.labelTopMargin = prev.labelTopMargin + (0 - prev.labelTopMargin) * p;
		newFrame.labelRightMargin = prev.labelRightMargin + (0 - prev.labelRightMargin) * p;
		newFrame.labelBottomMargin = prev.labelBottomMargin + (0 - prev.labelBottomMargin) * p;
		newFrame.headerWidth = prev.headerWidth + (0 - prev.headerWidth) * p;
		newFrame.headerHeight = prev.headerHeight + (0 - prev.headerHeight) * p;
		newFrame.labelHorizontalAlignment = prev.labelHorizontalAlignment;
		newFrame.labelVerticalAlignment = prev.labelVerticalAlignment;
		newFrame.headerDisplayMode = prev.headerDisplayMode;
		return newFrame;
	}
	static interpolateFromEmpty(p: number, next: TreemapNodeFrame): TreemapNodeFrame {
		let sourceBounds = new Rect(0, 0, 0, 0, 0);
		let newFrame = new TreemapNodeFrame();
		newFrame.node = next.node;
		newFrame.label = next.label;
		newFrame.iD = next.iD;
		let nextBounds = next.bounds;
		if (nextBounds.isEmpty) {
			nextBounds = new Rect(0, 0, 0, 0, 0);
		}
		newFrame.bounds = new Rect(0, sourceBounds.left + (nextBounds.left - sourceBounds.left) * p, sourceBounds.top + (nextBounds.top - sourceBounds.top) * p, sourceBounds.width + (nextBounds.width - sourceBounds.width) * p, sourceBounds.height + (nextBounds.height - sourceBounds.height) * p);
		newFrame.fillColor = BrushUtil.getInterpolation(null, p, next.fillColor, InterpolationMode.RGB);
		newFrame.outlineColor = BrushUtil.getInterpolation(null, p, next.outlineColor, InterpolationMode.RGB);
		newFrame.headerColor = BrushUtil.getInterpolation(null, p, next.headerColor, InterpolationMode.RGB);
		newFrame.nodeFontBrush = BrushUtil.getInterpolation(null, p, next.nodeFontBrush, InterpolationMode.RGB);
		newFrame.strokeThickness = 0 + (next.strokeThickness - 0) * p;
		newFrame.headerLabelLeftMargin = 0 + (next.headerLabelLeftMargin - 0) * p;
		newFrame.headerLabelTopMargin = 0 + (next.headerLabelTopMargin - 0) * p;
		newFrame.headerLabelRightMargin = 0 + (next.headerLabelRightMargin - 0) * p;
		newFrame.headerLabelBottomMargin = 0 + (next.headerLabelBottomMargin - 0) * p;
		newFrame.labelLeftMargin = 0 + (next.labelLeftMargin - 0) * p;
		newFrame.labelTopMargin = 0 + (next.labelTopMargin - 0) * p;
		newFrame.labelRightMargin = 0 + (next.labelRightMargin - 0) * p;
		newFrame.labelBottomMargin = 0 + (next.labelBottomMargin - 0) * p;
		newFrame.headerWidth = 0 + (next.headerWidth - 0) * p;
		newFrame.headerHeight = 0 + (next.headerHeight - 0) * p;
		newFrame.labelHorizontalAlignment = next.labelHorizontalAlignment;
		newFrame.labelVerticalAlignment = next.labelVerticalAlignment;
		newFrame.headerDisplayMode = next.headerDisplayMode;
		return newFrame;
	}
	private _label: string = null;
	get label(): string {
		return this._label;
	}
	set label(value: string) {
		this._label = value;
	}
	private _fillColor: Brush = null;
	get fillColor(): Brush {
		return this._fillColor;
	}
	set fillColor(value: Brush) {
		this._fillColor = value;
	}
	private _outlineColor: Brush = null;
	get outlineColor(): Brush {
		return this._outlineColor;
	}
	set outlineColor(value: Brush) {
		this._outlineColor = value;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
	private _headerLabelLeftMargin: number = 0;
	get headerLabelLeftMargin(): number {
		return this._headerLabelLeftMargin;
	}
	set headerLabelLeftMargin(value: number) {
		this._headerLabelLeftMargin = value;
	}
	private _headerLabelTopMargin: number = 0;
	get headerLabelTopMargin(): number {
		return this._headerLabelTopMargin;
	}
	set headerLabelTopMargin(value: number) {
		this._headerLabelTopMargin = value;
	}
	private _headerLabelRightMargin: number = 0;
	get headerLabelRightMargin(): number {
		return this._headerLabelRightMargin;
	}
	set headerLabelRightMargin(value: number) {
		this._headerLabelRightMargin = value;
	}
	private _headerLabelBottomMargin: number = 0;
	get headerLabelBottomMargin(): number {
		return this._headerLabelBottomMargin;
	}
	set headerLabelBottomMargin(value: number) {
		this._headerLabelBottomMargin = value;
	}
	private _labelLeftMargin: number = 0;
	get labelLeftMargin(): number {
		return this._labelLeftMargin;
	}
	set labelLeftMargin(value: number) {
		this._labelLeftMargin = value;
	}
	private _labelTopMargin: number = 0;
	get labelTopMargin(): number {
		return this._labelTopMargin;
	}
	set labelTopMargin(value: number) {
		this._labelTopMargin = value;
	}
	private _labelRightMargin: number = 0;
	get labelRightMargin(): number {
		return this._labelRightMargin;
	}
	set labelRightMargin(value: number) {
		this._labelRightMargin = value;
	}
	private _labelBottomMargin: number = 0;
	get labelBottomMargin(): number {
		return this._labelBottomMargin;
	}
	set labelBottomMargin(value: number) {
		this._labelBottomMargin = value;
	}
	private _nodeFontBrush: Brush = null;
	get nodeFontBrush(): Brush {
		return this._nodeFontBrush;
	}
	set nodeFontBrush(value: Brush) {
		this._nodeFontBrush = value;
	}
	private _headerColor: Brush = null;
	get headerColor(): Brush {
		return this._headerColor;
	}
	set headerColor(value: Brush) {
		this._headerColor = value;
	}
	private _headerDisplayMode: TreemapHeaderDisplayMode = <TreemapHeaderDisplayMode>0;
	get headerDisplayMode(): TreemapHeaderDisplayMode {
		return this._headerDisplayMode;
	}
	set headerDisplayMode(value: TreemapHeaderDisplayMode) {
		this._headerDisplayMode = value;
	}
	private _headerWidth: number = 0;
	get headerWidth(): number {
		return this._headerWidth;
	}
	set headerWidth(value: number) {
		this._headerWidth = value;
	}
	private _headerHeight: number = 0;
	get headerHeight(): number {
		return this._headerHeight;
	}
	set headerHeight(value: number) {
		this._headerHeight = value;
	}
	private _labelHorizontalAlignment: HorizontalAlignment = <HorizontalAlignment>0;
	get labelHorizontalAlignment(): HorizontalAlignment {
		return this._labelHorizontalAlignment;
	}
	set labelHorizontalAlignment(value: HorizontalAlignment) {
		this._labelHorizontalAlignment = value;
	}
	private _labelVerticalAlignment: VerticalAlignment = <VerticalAlignment>0;
	get labelVerticalAlignment(): VerticalAlignment {
		return this._labelVerticalAlignment;
	}
	set labelVerticalAlignment(value: VerticalAlignment) {
		this._labelVerticalAlignment = value;
	}
	private _isAdjustedBounds: boolean = false;
	get isAdjustedBounds(): boolean {
		return this._isAdjustedBounds;
	}
	set isAdjustedBounds(value: boolean) {
		this._isAdjustedBounds = value;
	}
}


