/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, String_$type, typeCast, Array_$type, fromEnum, runOn, delegateCombine, delegateRemove, Point_$type, Type, markType, TypeRegistrar, PointUtil, PropertyChangedEventArgs, IEnumerable, IEnumerable_$type, Number_$type, enumGetBox, EnumUtil, typeGetValue, Delegate_$type, Boolean_$type, fromEn } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { Path } from "igniteui-core/Path";
import { TextBlock } from "igniteui-core/TextBlock";
import { EventProxy } from "igniteui-core/EventProxy";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { FontInfo } from "igniteui-core/FontInfo";
import { Brush } from "igniteui-core/Brush";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Size } from "igniteui-core/Size";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { Rect } from "igniteui-core/Rect";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { CanvasGestureDOMEventProxy } from "igniteui-core/CanvasGestureDOMEventProxy";
import { FontUtil } from "igniteui-core/FontUtil";
import { UIElement } from "igniteui-core/UIElement";
import { GaugeVisualData } from "./GaugeVisualData";
import { ScaleLabelVisualData } from "./ScaleLabelVisualData";
import { ScaleTickmarkVisualData } from "./ScaleTickmarkVisualData";
import { RangeVisualData } from "./RangeVisualData";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { TransformGroup } from "igniteui-core/TransformGroup";
import { Transform } from "igniteui-core/Transform";
import { RotateTransform } from "igniteui-core/RotateTransform";
import { NeedleVisualData } from "./NeedleVisualData";
import { PointData } from "igniteui-core/PointData";
import { SizeData } from "igniteui-core/SizeData";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { Visibility } from "igniteui-core/Visibility";
import { truncate, isNaN_, isInfinity } from "igniteui-core/number";
import { arrayCopy1 } from "igniteui-core/arrayExtended";
import { Control } from "igniteui-core/Control";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SweepDirection, SweepDirection_$type } from "igniteui-core/SweepDirection";
import { RadialGaugeNeedleShape, RadialGaugeNeedleShape_$type } from "./RadialGaugeNeedleShape";
import { RadialGaugePivotShape, RadialGaugePivotShape_$type } from "./RadialGaugePivotShape";
import { RadialGaugeScaleOversweepShape, RadialGaugeScaleOversweepShape_$type } from "./RadialGaugeScaleOversweepShape";
import { RadialGaugeBackingShape, RadialGaugeBackingShape_$type } from "./RadialGaugeBackingShape";
import { RadialGaugeRangeCollection } from "./RadialGaugeRangeCollection";
import { RadialGaugeDuplicateLabelOmissionStrategy, RadialGaugeDuplicateLabelOmissionStrategy_$type } from "./RadialGaugeDuplicateLabelOmissionStrategy";
import { RadialGaugeScaler } from "./RadialGaugeScaler";
import { RadialGaugeFrame } from "./RadialGaugeFrame";
import { StackPool$1 } from "igniteui-core/StackPool$1";
import { Stack$1 } from "igniteui-core/Stack$1";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { FormatRadialGaugeLabelEventArgs } from "./FormatRadialGaugeLabelEventArgs";
import { AlignRadialGaugeLabelEventArgs } from "./AlignRadialGaugeLabelEventArgs";
import { DoubleValueChangedEventArgs } from "igniteui-core/DoubleValueChangedEventArgs";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { INotifyCollectionChanged } from "igniteui-core/INotifyCollectionChanged";
import { XamRadialGaugeRange } from "./XamRadialGaugeRange";
import { BackingFrame } from "./BackingFrame";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { Shape } from "igniteui-core/Shape";
import { PolygonUtil } from "igniteui-core/PolygonUtil";
import { RadialGaugeNeedleFrame } from "./RadialGaugeNeedleFrame";
import { RadialGaugeNeedlePreparer } from "./RadialGaugeNeedlePreparer";
import { RadialGaugeNeedleParameters } from "./RadialGaugeNeedleParameters";
import { RadialGaugeScaleFrame } from "./RadialGaugeScaleFrame";
import { PathFigure } from "igniteui-core/PathFigure";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { RadialGaugeRangeFrame } from "./RadialGaugeRangeFrame";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { LineSegment } from "igniteui-core/LineSegment";
import { RectData } from "igniteui-core/RectData";
import { ScaleLabelVisualDataList } from "./ScaleLabelVisualDataList";
import { ScaleTickmarkVisualDataList } from "./ScaleTickmarkVisualDataList";
import { RangeVisualDataList } from "./RangeVisualDataList";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class XamRadialGaugeView extends Base {
	static $t: Type = markType(XamRadialGaugeView, 'XamRadialGaugeView');
	constructor(gauge: XamRadialGauge) {
		super();
		this.gauge = gauge;
		this._actualBrushes = new Dictionary$2<string, Dictionary$2<string, string>>(String_$type, (<any>Dictionary$2).$type.specialize(String_$type, String_$type), 0);
		this.activeLabels = new List$1<TextBlock>((<any>TextBlock).$type, 0);
		this.activePaths = new List$1<Path>((<any>Path).$type, 0);
		this.activeRangePaths = new List$1<Path>((<any>Path).$type, 0);
	}
	private _gauge: XamRadialGauge = null;
	protected get gauge(): XamRadialGauge {
		return this._gauge;
	}
	protected set gauge(value: XamRadialGauge) {
		this._gauge = value;
	}
	labelActivate(tb: TextBlock): void {
		tb._visibility = Visibility.Visible;
	}
	labelDeactivate(tb: TextBlock): void {
		tb._visibility = Visibility.Collapsed;
	}
	labelDestroy(tb: TextBlock): void {
		this.activeLabels.remove(tb);
	}
	labelCreate(): TextBlock {
		let tb: TextBlock = new TextBlock();
		this.activeLabels.add(tb);
		return tb;
	}
	pathActivate(p: Path): void {
		p._visibility = Visibility.Visible;
	}
	pathDeactivate(p: Path): void {
		p._visibility = Visibility.Collapsed;
	}
	pathDestroy(p: Path): void {
		this.activePaths.remove(p);
	}
	pathCreate(): Path {
		let p: Path = new Path();
		this.activePaths.add(p);
		return p;
	}
	rangePathActivate(p: Path): void {
		p._visibility = Visibility.Visible;
	}
	rangePathDeactivate(p: Path): void {
		p._visibility = Visibility.Collapsed;
	}
	rangePathDestroy(p: Path): void {
		this.activeRangePaths.remove(p);
	}
	rangePathCreate(): Path {
		let p: Path = new Path();
		this.activeRangePaths.add(p);
		return p;
	}
	private _activeRangePaths: List$1<Path> = null;
	private get activeRangePaths(): List$1<Path> {
		return this._activeRangePaths;
	}
	private set activeRangePaths(value: List$1<Path>) {
		this._activeRangePaths = value;
	}
	private _activePaths: List$1<Path> = null;
	private get activePaths(): List$1<Path> {
		return this._activePaths;
	}
	private set activePaths(value: List$1<Path>) {
		this._activePaths = value;
	}
	private _activeLabels: List$1<TextBlock> = null;
	private get activeLabels(): List$1<TextBlock> {
		return this._activeLabels;
	}
	private set activeLabels(value: List$1<TextBlock>) {
		this._activeLabels = value;
	}
	private _needlePath: Path = new Path();
	private _scalePath: Path = new Path();
	private _backingPath: Path = new Path();
	private _overlayPath: Path = new Path();
	private _underlayPath: Path = new Path();
	ready(): boolean {
		return true;
	}
	getNeedlePath(): Path {
		return this._needlePath;
	}
	getScalePath(): Path {
		return this._scalePath;
	}
	private static readonly tEXT_MARGIN: number = 0;
	getDesiredWidth(element: any): number {
		let tb = typeCast<TextBlock>((<any>TextBlock).$type, element);
		if (tb != null && tb.text != null) {
			return this.context.measureTextBlockWidth(tb) + XamRadialGaugeView.tEXT_MARGIN;
		}
		return 0;
	}
	getLabelSize(tb: TextBlock): Size {
		if (isNaN_(this._currentFontHeight)) {
			this._currentFontHeight = this.getCurrentFontHeight(null);
		}
		let width = this.getDesiredWidth(tb);
		let height = this._currentFontHeight;
		return new Size(1, width, height);
	}
	private _actualBrushes: Dictionary$2<string, Dictionary$2<string, string>> = null;
	private _brushNames: string[] = [ "needle", "needlePivot", "backing", "scale", "tick", "minorTick", "label" ];
	private getDefaultColors(): void {
		this._ignoreBrushChanged = true;
		let clrs: string[] = [ "#CED3D8", "#CED3D8", "#EBEDEF", "#FFC73C", "#617583", "rgba(100,107,114,.74)", "rgba(100,107,114,.74)" ];
		let outline: string[] = [ "#B2B9C0", "#B2B9C0", "#B2B9C0", null, null, null, null ];
		let cssNames: string[] = [ "background-color", "border-top-color" ];
		let defaults: List$1<string[]> = ((() => {
			let $ret = new List$1<string[]>(Array_$type, 0);
			$ret.add(clrs);
			$ret.add(outline);
			return $ret;
		})());
		this._actualBrushes.clear();
		let namesCount: number = this._brushNames.length;
		for (let i: number = 0; i < namesCount; i++) {
			let actualValues = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			let name: string = this._brushNames[i];
			let cssValues: string[] = <string[]>new Array(cssNames.length);
			arrayCopy1(cssNames, 0, cssValues, 0, cssNames.length);
			this.cssValue("ui-radialgauge-" + name, cssValues);
			for (let j: number = 0; j < cssValues.length; j++) {
				actualValues.item(cssNames[j], (cssValues[j] == null) ? defaults._inner[j][i] : cssValues[j]);
			}
			this._actualBrushes.item(name, actualValues);
		}
		this.updateBrushes();
		let brushes: BrushCollection;
		let outlines: BrushCollection;
		let $ret = BrushUtil.getBrushCollection("radialgauge-range", this.container, brushes, outlines);
		brushes = $ret.p2;
		outlines = $ret.p3;
		this._rangeBrushes = brushes;
		this._rangeOutlines = outlines;
		if (this._userRangeBrushes == null) {
			this.gauge.rangeBrushes = this._rangeBrushes;
		}
		if (this._userRangeOutlines == null) {
			this.gauge.rangeOutlines = this._rangeOutlines;
		}
		this._ignoreBrushChanged = false;
	}
	onAttachedToUI(): void {
		this.initializeScalingRatio();
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.container.rootWrapper, "");
		}
	}
	onDetachedFromUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.container.rootWrapper, "");
		}
	}
	private _rangeBrushes: BrushCollection = null;
	private _rangeOutlines: BrushCollection = null;
	private updateBrushes(): void {
		this._ignoreBrushChanged = true;
		let namesCount: number = this._brushNames.length;
		for (let i: number = 0; i < namesCount; i++) {
			let name: string = this._brushNames[i];
			this.updateBrush(name, this._actualBrushes.item(name));
		}
		this._ignoreBrushChanged = false;
	}
	private updateBrush(name: string, actualValues: Dictionary$2<string, string>): void {
		let colorBrush: Brush = null;
		let outlineBrush: Brush = null;
		let valuesCount: number = actualValues.count;
		for (let key of fromEnum<string>(actualValues.keys)) {
			switch (key) {
				case "background-color":
				colorBrush = new Brush();
				if (actualValues.item(key) != null) {
					colorBrush._fill = actualValues.item(key);
				}
				break;

				case "border-top-color":
				outlineBrush = new Brush();
				if (actualValues.item(key) != null) {
					outlineBrush._fill = actualValues.item(key);
				}
				break;

			}

		}
		switch (name) {
			case "needle":
			if (this._userNeedleBrush == null) {
				this.gauge.needleBrush = colorBrush;
			}
			if (this._userNeedleOutline == null) {
				this.gauge.needleOutline = outlineBrush;
			}
			break;

			case "needlePivot":
			if (this._userNeedlePivotBrush == null) {
				this.gauge.needlePivotBrush = colorBrush;
			}
			if (this._userNeedlePivotOutline == null) {
				this.gauge.needlePivotOutline = outlineBrush;
			}
			break;

			case "backing":
			if (this._userBackingBrush == null) {
				this.gauge.backingBrush = colorBrush;
			}
			if (this._userBackingOutline == null) {
				this.gauge.backingOutline = outlineBrush;
			}
			break;

			case "scale":
			if (this._userScaleBrush == null) {
				this.gauge.scaleBrush = colorBrush;
			}
			break;

			case "tick":
			if (this._userTickBrush == null) {
				this.gauge.tickBrush = colorBrush;
			}
			break;

			case "minorTick":
			if (this._userMinorTickBrush == null) {
				this.gauge.minorTickBrush = colorBrush;
			}
			break;

			case "label":
			this._labelBrush = colorBrush;
			break;

		}

	}
	cssValue(css: string, prop: string[]): string[] {
		this.container.startCSSQuery();
		for (let i = 0; i < prop.length; i++) {
			prop[i] = this.container.getCssDefaultPropertyValue(css, prop[i]);
		}
		this.container.endCSSQuery();
		return prop;
	}
	static toDouble(val: string, def: number): number {
		let len: number = val == null ? 0 : val.length;
		if (len < 1) {
			return def;
		}
		let s: string[] = val.split('.');
		let i: number = (s[0].length > 0) ? parseInt(s[0]) : 0;
		if (s.length != 2) {
			return i;
		}
		len = s[1].length;
		let d: number = parseInt(s[1]);
		while (len-- > 0) {
			d /= 10;
		}
		return d + i;
	}
	private _ignoreBrushChanged: boolean = false;
	onInit(): void {
		this._ignoreBrushChanged = true;
		this.gauge.needleBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#CED3D8";
			return $ret;
		})());
		this.gauge.needleOutline = ((() => {
			let $ret = new Brush();
			$ret.fill = "#B2B9C0";
			return $ret;
		})());
		this.gauge.tickBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#617583";
			return $ret;
		})());
		this.gauge.scaleBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#FFC73C";
			return $ret;
		})());
		this.gauge.backingBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#EBEDEF";
			return $ret;
		})());
		this.gauge.backingOutline = ((() => {
			let $ret = new Brush();
			$ret.fill = "#B2B9C0";
			return $ret;
		})());
		this.gauge.needlePivotBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#CED3D8";
			return $ret;
		})());
		this.gauge.needlePivotOutline = ((() => {
			let $ret = new Brush();
			$ret.fill = "#B2B9C0";
			return $ret;
		})());
		this.gauge.minorTickBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(100,107,114,.74)";
			return $ret;
		})());
		this._ignoreBrushChanged = false;
		this.initializeScalingRatio();
	}
	initializeScalingRatio(): void {
		let userRatio = this.gauge.pixelScalingRatio;
		let actualRatio = this.gauge.actualPixelScalingRatio;
		if (!isNaN_(userRatio) && userRatio != 0) {
			return;
		}
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
			this.gauge.actualPixelScalingRatio = window.devicePixelRatio;
		}
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
			this.gauge.arrangeGauge();
		}
	}
	flush(): void {
		if (this._scheduled) {
			this.arrange();
		}
	}
	positionLabel(tb: TextBlock, x: number, y: number): void {
		tb.canvasLeft = x;
		tb.canvasTop = y;
	}
	private _eventProxy: EventProxy = null;
	private get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	private set eventProxy(value: EventProxy) {
		this._eventProxy = value;
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
	get container(): DomRenderer {
		return this._container;
	}
	set container(value: DomRenderer) {
		this._container = value;
	}
	private _font: FontInfo = null;
	private _fontBrush: Brush = new Brush();
	onContainerProvided(container: any): void {
		if (container == null) {
			this.canvas = null;
			this.container = null;
			this.context = null;
			this.cleanUpEventProxy();
			return;
		}
		this._currentPixelRatio = (isNaN_(this.gauge.pixelScalingRatio) ? this.gauge.actualPixelScalingRatio : this.gauge.pixelScalingRatio);
		let cont = <DomRenderer><any>container;
		this.container = cont;
		this.gauge.animator.provideRenderer(this.container);
		this.container.rootWrapper.addClass("ui-radialgauge-container");
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
		this.gauge.viewport = new Rect(0, 0, 0, containerWidth, containerHeight);
		this.canvas = canv;
		let context = this.container.get2DCanvasContext(this.canvas);
		this.context = new RenderingContext(new CanvasViewRenderer(), context);
		this.getDefaultColors();
		this.updateStyle();
		this.context.setFontInfo(this._font);
		this.cleanUpEventProxy();
		if (TypeRegistrar.isRegistered("CanvasGestureDOMEventProxy")) {
			this.eventProxy = typeCast<EventProxy>((<any>EventProxy).$type, TypeRegistrar.create("CanvasGestureDOMEventProxy", this.container.rootWrapper, this.container, false));
		}
		if (this.eventProxy != null) {
			let $t = this.eventProxy;
			$t.onContactStarted = delegateCombine($t.onContactStarted, runOn(this, this.eventProxy_OnContactStarted));
			let $t1 = this.eventProxy;
			$t1.onContactMoved = delegateCombine($t1.onContactMoved, runOn(this, this.eventProxy_OnContactMoved));
			let $t2 = this.eventProxy;
			$t2.onContactCompleted = delegateCombine($t2.onContactCompleted, runOn(this, this.eventProxy_OnContactCompleted));
			this.eventProxy.shouldInteract = (p: Point) => this.gauge.isNeedleDraggingEnabled && (this.gauge.isDragging || this.gauge.needleContainsPoint_1(p));
		}
		this.render();
	}
	private eventProxy_OnContactCompleted(point: Point, isFinger: boolean): void {
		if (this.gauge != null) {
			this.gauge.onMouseUp(point);
		}
	}
	private eventProxy_OnContactMoved(point: Point, isFinger: boolean): void {
		if (this.gauge != null) {
			this.gauge.onMouseMove(point, isFinger);
		}
	}
	private eventProxy_OnContactStarted(point: Point, isFinger: boolean): void {
		if (this.gauge != null) {
			this.gauge.onMouseDown(point);
		}
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
	setTextBrush(tb: TextBlock, b: Brush): void {
		if (b != null) {
			tb.fill = b;
		} else {
			tb.fill = this._labelBrush;
		}
	}
	styleUpdated(): void {
		this.getDefaultColors();
		this.updateStyle();
		this.scheduleArrange();
	}
	updateStyle(): void {
		this._font = FontUtil.getFont(this.container);
		if (this.gauge.font != null) {
			this._font = this.gauge.getFontInfo();
		}
		this._currentFontHeight = this.getCurrentFontHeight(this._font);
		this._fontBrush = new Brush();
		this._fontBrush._fill = this.container.rootWrapper.getStyleProperty("color");
		if (this.context != null) {
			this.context.setFontInfo(this._font);
		}
	}
	arrangeComplete(): void {
		this.render();
	}
	private _labelBrush: Brush = ((() => {
		let $ret = new Brush();
		$ret.fill = "black";
		return $ret;
	})());
	private render(): void {
		let width = this.gauge.viewport.width;
		let height = this.gauge.viewport.height;
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
		this.context.clearRectangle(this.gauge.viewport.left, this.gauge.viewport.top, this.gauge.viewport.width, this.gauge.viewport.height);
		this.context.renderPath(this._backingPath);
		this.context.renderPath(this._scalePath);
		if (this._rangesInOrder != null) {
			for (let i = 0; i < this._rangesInOrder.count; i++) {
				this.context.renderPath(this._rangesInOrder._inner[i]);
			}
		}
		for (let i1 = 0; i1 < this.activeLabels.count; i1++) {
			this.context.setFontInfo(this._font);
			this.context.renderTextBlock(this.activeLabels._inner[i1]);
		}
		for (let i2 = 0; i2 < this.activePaths.count; i2++) {
			this.context.renderPath(this.activePaths._inner[i2]);
		}
		this.context.save();
		this.context.applyTransform(this._needlePath.renderTransform);
		this.context.renderPath(this._underlayPath);
		this.context.renderPath(this._needlePath);
		this.context.renderPath(this._overlayPath);
		this.context.restore();
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.restore();
		}
	}
	private _currentFontHeight: number = NaN;
	getCurrentFontHeight(font: FontInfo): number {
		return FontUtil.getCurrentFontHeight(this.container, font);
	}
	private _rangesInOrder: List$1<Path> = null;
	setRangeRenderOrder(ranges: List$1<Path>): void {
		this._rangesInOrder = ranges;
	}
	getBackingPath(): Path {
		return this._backingPath;
	}
	getUnderlayPath(): Path {
		return this._underlayPath;
	}
	getOverlayPath(): Path {
		return this._overlayPath;
	}
	private _canvasWidth: number = -1;
	private _canvasHeight: number = -1;
	onContainerResized(): void {
		this.initializeScalingRatio();
		let width = Math.round(<number>this.container.rootWrapper.width());
		let height = Math.round(<number>this.container.rootWrapper.height());
		this.gauge.viewport = new Rect(0, 0, 0, width, height);
		if (this.eventProxy != null) {
			this.eventProxy.viewport = this.gauge.viewport;
		}
	}
	private getFontInfoForText(text: TextBlock, font: FontInfo): FontInfo {
		return FontUtil.getFontInfo(this.container, text, font);
	}
	exportViewShapes(gauge: GaugeVisualData): void {
		gauge.scalePath = new PathVisualData(1, "Scale", this._scalePath);
		gauge.needlePath = new PathVisualData(1, "Needle", this._needlePath);
		let needleAngle = (<RotateTransform>(<TransformGroup>this._needlePath.renderTransform).children._inner[0]).angle;
		gauge.needle.angle = needleAngle;
		gauge.backingPath = new PathVisualData(1, "Backing", this._backingPath);
		gauge.overlayPath = new PathVisualData(1, "Overlay", this._overlayPath);
		gauge.underlayPath = new PathVisualData(1, "Underlay", this._underlayPath);
		let font = this._font;
		for (let label of fromEnum<TextBlock>(this.activeLabels)) {
			if (label._visibility == Visibility.Visible) {
				let fontInfo = this.getFontInfoForText(label, font);
				let labelVisual: ScaleLabelVisualData = new ScaleLabelVisualData();
				labelVisual.labelValue = label.text;
				labelVisual.labelPosition = PointData.fromPoint(<Point>{ $type: Point_$type, x: label.canvasLeft, y: label.canvasTop });
				labelVisual.labelSize = SizeData.fromSize(this.getLabelSize(label));
				labelVisual.appearance = AppearanceHelper.fromTextElement(label, fontInfo);
				gauge.scaleLabels.add(labelVisual);
			}
		}
		for (let path of fromEnum<Path>(this.activePaths)) {
			if (path._visibility == Visibility.Visible) {
				let tickVisual: ScaleTickmarkVisualData = new ScaleTickmarkVisualData();
				tickVisual.tickPath = new PathVisualData(1, "tickmarks", path);
				gauge.scaleTickmarks.add(tickVisual);
			}
		}
		for (let path1 of fromEnum<Path>(this.activeRangePaths)) {
			if (path1._visibility == Visibility.Visible) {
				let rangeVisual: RangeVisualData = new RangeVisualData();
				let rangePath: PathVisualData = new PathVisualData(1, "range", path1);
				rangeVisual.rangePath = rangePath;
				gauge.ranges.add(rangeVisual);
			}
		}
	}
	private _userNeedleBrush: Brush = null;
	private _userNeedleOutline: Brush = null;
	private _userNeedlePivotBrush: Brush = null;
	private _userNeedlePivotOutline: Brush = null;
	private _userBackingBrush: Brush = null;
	private _userBackingOutline: Brush = null;
	private _userScaleBrush: Brush = null;
	private _userTickBrush: Brush = null;
	private _userMinorTickBrush: Brush = null;
	onBrushChanged(propertyName: string, oldValue: any, newValue: any): void {
		let oldBrush = <Brush>oldValue;
		let newBrush = <Brush>newValue;
		if (!this._ignoreBrushChanged) {
			switch (propertyName) {
				case XamRadialGauge.needleBrushPropertyName:
				this._userNeedleBrush = newBrush;
				break;

				case XamRadialGauge.needleOutlinePropertyName:
				this._userNeedleOutline = newBrush;
				break;

				case XamRadialGauge.needlePivotBrushPropertyName:
				this._userNeedlePivotBrush = newBrush;
				break;

				case XamRadialGauge.needlePivotOutlinePropertyName:
				this._userNeedlePivotOutline = newBrush;
				break;

				case XamRadialGauge.backingBrushPropertyName:
				this._userBackingBrush = newBrush;
				break;

				case XamRadialGauge.backingOutlinePropertyName:
				this._userBackingOutline = newBrush;
				break;

				case XamRadialGauge.scaleBrushPropertyName:
				this._userScaleBrush = newBrush;
				break;

				case XamRadialGauge.tickBrushPropertyName:
				this._userTickBrush = newBrush;
				break;

				case XamRadialGauge.minorTickBrushPropertyName:
				this._userMinorTickBrush = newBrush;
				break;

			}

			if (newBrush == null) {
				this.updateBrushes();
			}
		}
	}
	private _userRangeBrushes: BrushCollection = null;
	private _userRangeOutlines: BrushCollection = null;
	private _currentPixelRatio: number = 0;
	onRangeBrushesChanged(oldValue: BrushCollection, newValue: BrushCollection): void {
		if (!this._ignoreBrushChanged) {
			this._userRangeBrushes = newValue;
			if (this._userRangeBrushes == null) {
				this.gauge.rangeBrushes = this._rangeBrushes;
			}
		}
	}
	onRangeOutlinesChanged(oldValue: BrushCollection, newValue: BrushCollection): void {
		if (!this._ignoreBrushChanged) {
			this._userRangeOutlines = newValue;
			if (this._userRangeOutlines == null) {
				this.gauge.rangeOutlines = this._rangeOutlines;
			}
		}
	}
	pixelScalingRatioChanged(): void {
		this._currentPixelRatio = this.gauge.actualPixelScalingRatio;
	}
}

/**
 * @hidden 
 */
export class XamRadialGauge extends Control {
	static $t: Type = markType(XamRadialGauge, 'XamRadialGauge', (<any>Control).$type);
	constructor() {
		super();
		this.view = new XamRadialGaugeView(this);
		this.view.onInit();
		this._viewport = Rect.empty;
		this.previousFrame = new RadialGaugeFrame();
		this.nextFrame = new RadialGaugeFrame();
		this.currentFrame = new RadialGaugeFrame();
		this.ranges = new RadialGaugeRangeCollection();
		this.isDirty = true;
		this.animator = new DoubleAnimator(0, 1, this.transitionDuration);
		let $t = this.animator;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this.animator_PropertyChanged));
		this.defaultStyleKey = (<any>XamRadialGauge).$type;
		this.labels = ((() => {
			let $ret = new StackPool$1<TextBlock>((<any>TextBlock).$type);
			$ret.activate = runOn(this.view, this.view.labelActivate);
			$ret.deactivate = runOn(this.view, this.view.labelDeactivate);
			$ret.destroy = runOn(this.view, this.view.labelDestroy);
			$ret.create = runOn(this.view, this.view.labelCreate);
			return $ret;
		})());
		this.ticks = ((() => {
			let $ret = new StackPool$1<Path>((<any>Path).$type);
			$ret.activate = runOn(this.view, this.view.pathActivate);
			$ret.deactivate = runOn(this.view, this.view.pathDeactivate);
			$ret.destroy = runOn(this.view, this.view.pathDestroy);
			$ret.create = runOn(this.view, this.view.pathCreate);
			return $ret;
		})());
		this.minorTicks = ((() => {
			let $ret = new StackPool$1<Path>((<any>Path).$type);
			$ret.activate = runOn(this.view, this.view.pathActivate);
			$ret.deactivate = runOn(this.view, this.view.pathDeactivate);
			$ret.destroy = runOn(this.view, this.view.pathDestroy);
			$ret.create = runOn(this.view, this.view.pathCreate);
			return $ret;
		})());
		this.rangeShapes = ((() => {
			let $ret = new StackPool$1<Path>((<any>Path).$type);
			$ret.activate = runOn(this.view, this.view.rangePathActivate);
			$ret.deactivate = runOn(this.view, this.view.rangePathDeactivate);
			$ret.destroy = runOn(this.view, this.view.rangePathDestroy);
			$ret.create = runOn(this.view, this.view.rangePathCreate);
			return $ret;
		})());
		this.scaler = new RadialGaugeScaler(this.actualMinimumValue, this.actualMaximumValue, this.scaleStartAngle, this.scaleEndAngle, this.scaleSweepDirection);
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	scaleValue(value: number): number {
		return this.scaler.scale(value);
	}
	unscaleValue(angle: number): number {
		return this.scaler.unscale(angle);
	}
	getValueForPoint(point: Point): number {
		let viewport = this.viewport;
		let radius = Math.min(viewport.width / 2, viewport.height / 2) * this.radiusMultiplier;
		let center = this.getGaugeCenter();
		let centerX = center.x;
		let centerY = center.y;
		let angle = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: centerX, y: centerY }, point);
		if (this.scaler != null && angle < this.scaler.startAngle) {
			angle += Math.PI * 2;
		}
		if (this.scaler != null && angle > this.scaler.endAngle) {
			angle -= Math.PI * 2;
		}
		let value = this.unscaleValue(angle);
		return value;
	}
	getPointForValue(value: number, extent: number): Point {
		let angle = this.scaleValue(value);
		let radius = Math.min(this.viewport.width / 2, this.viewport.height / 2) * this.radiusMultiplier * extent;
		let center = this.getGaugeCenter();
		let x: number = center.x + Math.cos(angle) * radius;
		let y: number = center.y + Math.sin(angle) * radius;
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	private getBrushByIndex(index: number, brushes: BrushCollection): Brush {
		if (brushes != null && brushes.count > 0) {
			return brushes.item(index % brushes.count);
		} else {
			return null;
		}
	}
	private _view: XamRadialGaugeView = null;
	protected get view(): XamRadialGaugeView {
		return this._view;
	}
	protected set view(value: XamRadialGaugeView) {
		this._view = value;
	}
	private animator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.transitionProgress = this.animator.transitionProgress;
	}
	private _animator: DoubleAnimator = null;
	get animator(): DoubleAnimator {
		return this._animator;
	}
	set animator(value: DoubleAnimator) {
		this._animator = value;
	}
	static readonly rangeBrushesPropertyName: string = "RangeBrushes";
	static readonly rangeBrushesProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.rangeBrushesPropertyName, (<any>BrushCollection).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.rangeBrushesPropertyName, e.oldValue, e.newValue)));
	get rangeBrushes(): BrushCollection {
		return <BrushCollection>this.getValue(XamRadialGauge.rangeBrushesProperty);
	}
	set rangeBrushes(value: BrushCollection) {
		this.setValue(XamRadialGauge.rangeBrushesProperty, value);
	}
	static readonly rangeOutlinesPropertyName: string = "RangeOutlines";
	static readonly rangeOutlinesProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.rangeOutlinesPropertyName, (<any>BrushCollection).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.rangeOutlinesPropertyName, e.oldValue, e.newValue)));
	get rangeOutlines(): BrushCollection {
		return <BrushCollection>this.getValue(XamRadialGauge.rangeOutlinesProperty);
	}
	set rangeOutlines(value: BrushCollection) {
		this.setValue(XamRadialGauge.rangeOutlinesProperty, value);
	}
	get minimumValue(): number {
		return <number>this.getValue(XamRadialGauge.minimumValueProperty);
	}
	set minimumValue(value: number) {
		this.setValue(XamRadialGauge.minimumValueProperty, value);
	}
	static readonly minimumValueDefaultValue: number = 0;
	private _actualMinimumValue: number = XamRadialGauge.minimumValueDefaultValue;
	get actualMinimumValue(): number {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: number) {
		this._actualMinimumValue = value;
	}
	static readonly minimumValuePropertyName: string = "MinimumValue";
	static readonly minimumValueProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.minimumValuePropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.minimumValueDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.minimumValuePropertyName, e.oldValue, e.newValue)));
	static readonly maximumValueDefaultValue: number = 100;
	get maximumValue(): number {
		return <number>this.getValue(XamRadialGauge.maximumValueProperty);
	}
	set maximumValue(value: number) {
		this.setValue(XamRadialGauge.maximumValueProperty, value);
	}
	private _actualMaximumValue: number = XamRadialGauge.maximumValueDefaultValue;
	get actualMaximumValue(): number {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: number) {
		this._actualMaximumValue = value;
	}
	static readonly maximumValuePropertyName: string = "MaximumValue";
	static readonly maximumValueProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.maximumValuePropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.maximumValueDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.maximumValuePropertyName, e.oldValue, e.newValue)));
	get interval(): number {
		return <number>this.getValue(XamRadialGauge.intervalProperty);
	}
	set interval(value: number) {
		this.setValue(XamRadialGauge.intervalProperty, value);
	}
	static readonly intervalPropertyName: string = "Interval";
	static readonly intervalProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.intervalPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.intervalPropertyName, e.oldValue, e.newValue)));
	get centerX(): number {
		return <number>this.getValue(XamRadialGauge.centerXProperty);
	}
	set centerX(value: number) {
		this.setValue(XamRadialGauge.centerXProperty, value);
	}
	static readonly centerXPropertyName: string = "CenterX";
	static readonly centerXProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.centerXPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 0.5, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.centerXPropertyName, e.oldValue, e.newValue)));
	get centerY(): number {
		return <number>this.getValue(XamRadialGauge.centerYProperty);
	}
	set centerY(value: number) {
		this.setValue(XamRadialGauge.centerYProperty, value);
	}
	static readonly centerYPropertyName: string = "CenterY";
	static readonly centerYProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.centerYPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 0.5, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.centerYPropertyName, e.oldValue, e.newValue)));
	get value(): number {
		return <number>this.getValue(XamRadialGauge.valueProperty);
	}
	set value(value: number) {
		this.setValue(XamRadialGauge.valueProperty, value);
	}
	static readonly valuePropertyName: string = "Value";
	static readonly valueProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.valuePropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.valuePropertyName, e.oldValue, e.newValue)));
	get scaleStartAngle(): number {
		return <number>this.getValue(XamRadialGauge.scaleStartAngleProperty);
	}
	set scaleStartAngle(value: number) {
		this.setValue(XamRadialGauge.scaleStartAngleProperty, value);
	}
	static readonly scaleStartAnglePropertyName: string = "ScaleStartAngle";
	static readonly scaleStartAngleProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleStartAnglePropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 135, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleStartAnglePropertyName, e.oldValue, e.newValue)));
	get scaleEndAngle(): number {
		return <number>this.getValue(XamRadialGauge.scaleEndAngleProperty);
	}
	set scaleEndAngle(value: number) {
		this.setValue(XamRadialGauge.scaleEndAngleProperty, value);
	}
	static readonly scaleEndAnglePropertyName: string = "ScaleEndAngle";
	static readonly scaleEndAngleProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleEndAnglePropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 45, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleEndAnglePropertyName, e.oldValue, e.newValue)));
	get scaleSweepDirection(): SweepDirection {
		return EnumUtil.getEnumValue<SweepDirection>(SweepDirection_$type, this.getValue(XamRadialGauge.scaleSweepDirectionProperty));
	}
	set scaleSweepDirection(value: SweepDirection) {
		this.setValue(XamRadialGauge.scaleSweepDirectionProperty, enumGetBox<SweepDirection>(SweepDirection_$type, value));
	}
	static readonly scaleSweepDirectionPropertyName: string = "ScaleSweepDirection";
	static readonly scaleSweepDirectionProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleSweepDirectionPropertyName, SweepDirection_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, enumGetBox<SweepDirection>(SweepDirection_$type, SweepDirection.Clockwise), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleSweepDirectionPropertyName, e.oldValue, e.newValue)));
	get transitionDuration(): number {
		return typeGetValue(this.getValue(XamRadialGauge.transitionDurationProperty));
	}
	set transitionDuration(value: number) {
		this.setValue(XamRadialGauge.transitionDurationProperty, value);
	}
	static readonly transitionDurationPropertyName: string = "TransitionDuration";
	static readonly transitionDurationProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.transitionDurationPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.transitionDurationPropertyName, e.oldValue, e.newValue)));
	static readonly transitionEasingFunctionPropertyName: string = "TransitionEasingFunction";
	get transitionEasingFunction(): (time: number) => number {
		return <(time: number) => number>this.getValue(XamRadialGauge.transitionEasingFunctionProperty);
	}
	set transitionEasingFunction(value: (time: number) => number) {
		this.setValue(XamRadialGauge.transitionEasingFunctionProperty, value);
	}
	static readonly transitionEasingFunctionProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.transitionEasingFunctionPropertyName, Delegate_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamRadialGauge>((<any>XamRadialGauge).$type, sender)).onPropertyChanged(XamRadialGauge.transitionEasingFunctionPropertyName, e.oldValue, e.newValue)));
	get needleBrush(): Brush {
		return <Brush>this.getValue(XamRadialGauge.needleBrushProperty);
	}
	set needleBrush(value: Brush) {
		this.setValue(XamRadialGauge.needleBrushProperty, value);
	}
	static readonly needleBrushPropertyName: string = "NeedleBrush";
	static readonly needleBrushProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleBrushPropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleBrushPropertyName, e.oldValue, e.newValue)));
	get needleOutline(): Brush {
		return <Brush>this.getValue(XamRadialGauge.needleOutlineProperty);
	}
	set needleOutline(value: Brush) {
		this.setValue(XamRadialGauge.needleOutlineProperty, value);
	}
	static readonly needleOutlinePropertyName: string = "NeedleOutline";
	static readonly needleOutlineProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleOutlinePropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleOutlinePropertyName, e.oldValue, e.newValue)));
	get needleStartExtent(): number {
		return <number>this.getValue(XamRadialGauge.needleStartExtentProperty);
	}
	set needleStartExtent(value: number) {
		this.setValue(XamRadialGauge.needleStartExtentProperty, value);
	}
	static readonly needleStartExtentPropertyName: string = "NeedleStartExtent";
	static readonly needleStartExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleStartExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleStartExtentPropertyName, e.oldValue, e.newValue)));
	get needleEndExtent(): number {
		return <number>this.getValue(XamRadialGauge.needleEndExtentProperty);
	}
	set needleEndExtent(value: number) {
		this.setValue(XamRadialGauge.needleEndExtentProperty, value);
	}
	static readonly needleEndExtentPropertyName: string = "NeedleEndExtent";
	static readonly needleEndExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleEndExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleEndExtentPropertyName, e.oldValue, e.newValue)));
	get needleShape(): RadialGaugeNeedleShape {
		return EnumUtil.getEnumValue<RadialGaugeNeedleShape>(RadialGaugeNeedleShape_$type, this.getValue(XamRadialGauge.needleShapeProperty));
	}
	set needleShape(value: RadialGaugeNeedleShape) {
		this.setValue(XamRadialGauge.needleShapeProperty, enumGetBox<RadialGaugeNeedleShape>(RadialGaugeNeedleShape_$type, value));
	}
	static readonly needleShapePropertyName: string = "NeedleShape";
	static readonly needleShapeProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleShapePropertyName, RadialGaugeNeedleShape_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, enumGetBox<RadialGaugeNeedleShape>(RadialGaugeNeedleShape_$type, RadialGaugeNeedleShape.Trapezoid), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleShapePropertyName, e.oldValue, e.newValue)));
	get needleStartWidthRatio(): number {
		return <number>this.getValue(XamRadialGauge.needleStartWidthRatioProperty);
	}
	set needleStartWidthRatio(value: number) {
		this.setValue(XamRadialGauge.needleStartWidthRatioProperty, value);
	}
	static readonly needleStartWidthRatioPropertyName: string = "NeedleStartWidth";
	static readonly needleStartWidthRatioProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleStartWidthRatioPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleStartWidthRatioPropertyName, e.oldValue, e.newValue)));
	get needleEndWidthRatio(): number {
		return <number>this.getValue(XamRadialGauge.needleEndWidthRatioProperty);
	}
	set needleEndWidthRatio(value: number) {
		this.setValue(XamRadialGauge.needleEndWidthRatioProperty, value);
	}
	static readonly needleEndWidthRatioPropertyName: string = "NeedleEndWidthRatio";
	static readonly needleEndWidthRatioProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleEndWidthRatioPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleEndWidthRatioPropertyName, e.oldValue, e.newValue)));
	get needleBaseFeatureWidthRatio(): number {
		return <number>this.getValue(XamRadialGauge.needleBaseFeatureWidthRatioProperty);
	}
	set needleBaseFeatureWidthRatio(value: number) {
		this.setValue(XamRadialGauge.needleBaseFeatureWidthRatioProperty, value);
	}
	static readonly needleBaseFeatureWidthRatioPropertyName: string = "NeedleBaseFeatureWidthRatio";
	static readonly needleBaseFeatureWidthRatioProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleBaseFeatureWidthRatioPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleBaseFeatureWidthRatioPropertyName, e.oldValue, e.newValue)));
	get needleBaseFeatureExtent(): number {
		return <number>this.getValue(XamRadialGauge.needleBaseFeatureExtentProperty);
	}
	set needleBaseFeatureExtent(value: number) {
		this.setValue(XamRadialGauge.needleBaseFeatureExtentProperty, value);
	}
	static readonly needleBaseFeatureExtentPropertyName: string = "NeedleBaseFeatureExtent";
	static readonly needleBaseFeatureExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleBaseFeatureExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleBaseFeatureExtentPropertyName, e.oldValue, e.newValue)));
	get needlePointFeatureWidthRatio(): number {
		return <number>this.getValue(XamRadialGauge.needlePointFeatureWidthRatioProperty);
	}
	set needlePointFeatureWidthRatio(value: number) {
		this.setValue(XamRadialGauge.needlePointFeatureWidthRatioProperty, value);
	}
	static readonly needlePointFeatureWidthRatioPropertyName: string = "NeedlePointFeatureWidthRatio";
	static readonly needlePointFeatureWidthRatioProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePointFeatureWidthRatioPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePointFeatureWidthRatioPropertyName, e.oldValue, e.newValue)));
	get needlePointFeatureExtent(): number {
		return <number>this.getValue(XamRadialGauge.needlePointFeatureExtentProperty);
	}
	set needlePointFeatureExtent(value: number) {
		this.setValue(XamRadialGauge.needlePointFeatureExtentProperty, value);
	}
	static readonly needlePointFeatureExtentPropertyName: string = "NeedlePointFeatureExtent";
	static readonly needlePointFeatureExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePointFeatureExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePointFeatureExtentPropertyName, e.oldValue, e.newValue)));
	get needlePivotWidthRatio(): number {
		return <number>this.getValue(XamRadialGauge.needlePivotWidthRatioProperty);
	}
	set needlePivotWidthRatio(value: number) {
		this.setValue(XamRadialGauge.needlePivotWidthRatioProperty, value);
	}
	static readonly needlePivotWidthRatioPropertyName: string = "NeedlePivotWidthRatio";
	static readonly needlePivotWidthRatioProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePivotWidthRatioPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePivotWidthRatioPropertyName, e.oldValue, e.newValue)));
	get needlePivotInnerWidthRatio(): number {
		return <number>this.getValue(XamRadialGauge.needlePivotInnerWidthRatioProperty);
	}
	set needlePivotInnerWidthRatio(value: number) {
		this.setValue(XamRadialGauge.needlePivotInnerWidthRatioProperty, value);
	}
	static readonly needlePivotInnerWidthRatioPropertyName: string = "NeedlePivotInnerWidthRatio";
	static readonly needlePivotInnerWidthRatioProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePivotInnerWidthRatioPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePivotInnerWidthRatioPropertyName, e.oldValue, e.newValue)));
	get needlePivotShape(): RadialGaugePivotShape {
		return EnumUtil.getEnumValue<RadialGaugePivotShape>(RadialGaugePivotShape_$type, this.getValue(XamRadialGauge.needlePivotShapeProperty));
	}
	set needlePivotShape(value: RadialGaugePivotShape) {
		this.setValue(XamRadialGauge.needlePivotShapeProperty, enumGetBox<RadialGaugePivotShape>(RadialGaugePivotShape_$type, value));
	}
	static readonly needlePivotShapePropertyName: string = "NeedlePivotShape";
	static readonly needlePivotShapeProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePivotShapePropertyName, RadialGaugePivotShape_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, enumGetBox<RadialGaugePivotShape>(RadialGaugePivotShape_$type, RadialGaugePivotShape.CircleOverlay), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePivotShapePropertyName, e.oldValue, e.newValue)));
	get scaleStartExtent(): number {
		return <number>this.getValue(XamRadialGauge.scaleStartExtentProperty);
	}
	set scaleStartExtent(value: number) {
		this.setValue(XamRadialGauge.scaleStartExtentProperty, value);
	}
	get needlePivotBrush(): Brush {
		return <Brush>this.getValue(XamRadialGauge.needlePivotBrushProperty);
	}
	set needlePivotBrush(value: Brush) {
		this.setValue(XamRadialGauge.needlePivotBrushProperty, value);
	}
	static readonly needlePivotBrushPropertyName: string = "NeedlePivotBrush";
	static readonly needlePivotBrushProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePivotBrushPropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePivotBrushPropertyName, e.oldValue, e.newValue)));
	get needlePivotOutline(): Brush {
		return <Brush>this.getValue(XamRadialGauge.needlePivotOutlineProperty);
	}
	set needlePivotOutline(value: Brush) {
		this.setValue(XamRadialGauge.needlePivotOutlineProperty, value);
	}
	static readonly needlePivotOutlinePropertyName: string = "NeedlePivotOutline";
	static readonly needlePivotOutlineProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePivotOutlinePropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePivotOutlinePropertyName, e.oldValue, e.newValue)));
	get needleStrokeThickness(): number {
		return <number>this.getValue(XamRadialGauge.needleStrokeThicknessProperty);
	}
	set needleStrokeThickness(value: number) {
		this.setValue(XamRadialGauge.needleStrokeThicknessProperty, value);
	}
	static readonly needleStrokeThicknessDefaultValue: number = DeviceUtils.toPixelUnits(1);
	static readonly needleStrokeThicknessPropertyName: string = "NeedleStrokeThickness";
	static readonly needleStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needleStrokeThicknessPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.needleStrokeThicknessDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needleStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get needlePivotStrokeThickness(): number {
		return <number>this.getValue(XamRadialGauge.needlePivotStrokeThicknessProperty);
	}
	set needlePivotStrokeThickness(value: number) {
		this.setValue(XamRadialGauge.needlePivotStrokeThicknessProperty, value);
	}
	static readonly needlePivotStrokeThicknessDefaultValue: number = DeviceUtils.toPixelUnits(1);
	static readonly needlePivotStrokeThicknessPropertyName: string = "NeedlePivotStrokeThickness";
	static readonly needlePivotStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.needlePivotStrokeThicknessPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.needlePivotStrokeThicknessDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.needlePivotStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly scaleStartExtentDefaultValue: number = 0.5;
	static readonly scaleStartExtentPropertyName: string = "ScaleStartExtent";
	static readonly scaleStartExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleStartExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.scaleStartExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleStartExtentPropertyName, e.oldValue, e.newValue)));
	get scaleEndExtent(): number {
		return <number>this.getValue(XamRadialGauge.scaleEndExtentProperty);
	}
	set scaleEndExtent(value: number) {
		this.setValue(XamRadialGauge.scaleEndExtentProperty, value);
	}
	static readonly scaleEndExtentDefaultValue: number = 0.57;
	static readonly scaleEndExtentPropertyName: string = "ScaleEndExtent";
	static readonly scaleEndExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleEndExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.scaleEndExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleEndExtentPropertyName, e.oldValue, e.newValue)));
	get labelExtent(): number {
		return <number>this.getValue(XamRadialGauge.labelExtentProperty);
	}
	set labelExtent(value: number) {
		this.setValue(XamRadialGauge.labelExtentProperty, value);
	}
	static readonly labelExtentDefaultValue: number = 0.65;
	static readonly labelExtentPropertyName: string = "LabelExtent";
	static readonly labelExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.labelExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.labelExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.labelExtentPropertyName, e.oldValue, e.newValue)));
	get labelInterval(): number {
		return <number>this.getValue(XamRadialGauge.labelIntervalProperty);
	}
	set labelInterval(value: number) {
		this.setValue(XamRadialGauge.labelIntervalProperty, value);
	}
	static readonly labelIntervalPropertyName: string = "LabelInterval";
	static readonly labelIntervalProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.labelIntervalPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.labelIntervalPropertyName, e.oldValue, e.newValue)));
	get tickStartExtent(): number {
		return <number>this.getValue(XamRadialGauge.tickStartExtentProperty);
	}
	set tickStartExtent(value: number) {
		this.setValue(XamRadialGauge.tickStartExtentProperty, value);
	}
	static readonly tickStartExtentDefaultValue: number = 0.5;
	static readonly tickStartExtentPropertyName: string = "TickStartExtent";
	static readonly tickStartExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.tickStartExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.tickStartExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.tickStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly tickEndExtentDefaultValue: number = 0.57;
	get tickEndExtent(): number {
		return <number>this.getValue(XamRadialGauge.tickEndExtentProperty);
	}
	set tickEndExtent(value: number) {
		this.setValue(XamRadialGauge.tickEndExtentProperty, value);
	}
	static readonly tickEndExtentPropertyName: string = "TickEndExtent";
	static readonly tickEndExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.tickEndExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.tickEndExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.tickEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly tickStrokeThicknessDefaultValue: number = DeviceUtils.toPixelUnits(3);
	get tickStrokeThickness(): number {
		return <number>this.getValue(XamRadialGauge.tickStrokeThicknessProperty);
	}
	set tickStrokeThickness(value: number) {
		this.setValue(XamRadialGauge.tickStrokeThicknessProperty, value);
	}
	static readonly tickStrokeThicknessPropertyName: string = "TickStrokeThickness";
	static readonly tickStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.tickStrokeThicknessPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.tickStrokeThicknessDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.tickStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get tickBrush(): Brush {
		return <Brush>this.getValue(XamRadialGauge.tickBrushProperty);
	}
	set tickBrush(value: Brush) {
		this.setValue(XamRadialGauge.tickBrushProperty, value);
	}
	static readonly tickBrushPropertyName: string = "TickBrush";
	static readonly tickBrushProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.tickBrushPropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.tickBrushPropertyName, e.oldValue, e.newValue)));
	get fontBrush(): Brush {
		return <Brush>this.getValue(XamRadialGauge.fontBrushProperty);
	}
	set fontBrush(value: Brush) {
		this.setValue(XamRadialGauge.fontBrushProperty, value);
	}
	static readonly fontBrushPropertyName: string = "FontBrush";
	static readonly fontBrushProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.fontBrushPropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.fontBrushPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickStartExtentDefaultValue: number = 0.54;
	get minorTickStartExtent(): number {
		return <number>this.getValue(XamRadialGauge.minorTickStartExtentProperty);
	}
	set minorTickStartExtent(value: number) {
		this.setValue(XamRadialGauge.minorTickStartExtentProperty, value);
	}
	static readonly minorTickStartExtentPropertyName: string = "MinorTickStartExtent";
	static readonly minorTickStartExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.minorTickStartExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.minorTickStartExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.minorTickStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickEndExtentDefaultValue: number = 0.57;
	get minorTickEndExtent(): number {
		return <number>this.getValue(XamRadialGauge.minorTickEndExtentProperty);
	}
	set minorTickEndExtent(value: number) {
		this.setValue(XamRadialGauge.minorTickEndExtentProperty, value);
	}
	static readonly minorTickEndExtentPropertyName: string = "MinorTickEndExtent";
	static readonly minorTickEndExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.minorTickEndExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.minorTickEndExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.minorTickEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickStrokeThicknessDefaultValue: number = DeviceUtils.toPixelUnits(2);
	get minorTickStrokeThickness(): number {
		return <number>this.getValue(XamRadialGauge.minorTickStrokeThicknessProperty);
	}
	set minorTickStrokeThickness(value: number) {
		this.setValue(XamRadialGauge.minorTickStrokeThicknessProperty, value);
	}
	static readonly minorTickStrokeThicknessPropertyName: string = "MinorTickStrokeThickness";
	static readonly minorTickStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.minorTickStrokeThicknessPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.minorTickStrokeThicknessDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.minorTickStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get minorTickBrush(): Brush {
		return <Brush>this.getValue(XamRadialGauge.minorTickBrushProperty);
	}
	set minorTickBrush(value: Brush) {
		this.setValue(XamRadialGauge.minorTickBrushProperty, value);
	}
	static readonly minorTickBrushPropertyName: string = "MinorTickBrush";
	static readonly minorTickBrushProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.minorTickBrushPropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.minorTickBrushPropertyName, e.oldValue, e.newValue)));
	get minorTickCount(): number {
		return <number>this.getValue(XamRadialGauge.minorTickCountProperty);
	}
	set minorTickCount(value: number) {
		this.setValue(XamRadialGauge.minorTickCountProperty, value);
	}
	static readonly minorTickCountPropertyName: string = "MinorTickCount";
	static readonly minorTickCountProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.minorTickCountPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 3, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.minorTickCountPropertyName, e.oldValue, e.newValue)));
	get scaleBrush(): Brush {
		return <Brush>this.getValue(XamRadialGauge.scaleBrushProperty);
	}
	set scaleBrush(value: Brush) {
		this.setValue(XamRadialGauge.scaleBrushProperty, value);
	}
	static readonly scaleBrushPropertyName: string = "ScaleBrush";
	static readonly scaleBrushProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleBrushPropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleBrushPropertyName, e.oldValue, e.newValue)));
	get backingBrush(): Brush {
		return <Brush>this.getValue(XamRadialGauge.backingBrushProperty);
	}
	set backingBrush(value: Brush) {
		this.setValue(XamRadialGauge.backingBrushProperty, value);
	}
	static readonly backingBrushPropertyName: string = "BackingBrush";
	static readonly backingBrushProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingBrushPropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingBrushPropertyName, e.oldValue, e.newValue)));
	get backingOutline(): Brush {
		return <Brush>this.getValue(XamRadialGauge.backingOutlineProperty);
	}
	set backingOutline(value: Brush) {
		this.setValue(XamRadialGauge.backingOutlineProperty, value);
	}
	static readonly backingOutlinePropertyName: string = "BackingOutline";
	static readonly backingOutlineProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingOutlinePropertyName, (<any>Brush).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingOutlinePropertyName, e.oldValue, e.newValue)));
	get backingStrokeThickness(): number {
		return <number>this.getValue(XamRadialGauge.backingStrokeThicknessProperty);
	}
	set backingStrokeThickness(value: number) {
		this.setValue(XamRadialGauge.backingStrokeThicknessProperty, value);
	}
	static readonly backingStrokeThicknessDefaultValue: number = DeviceUtils.toPixelUnits(12);
	static readonly backingStrokeThicknessPropertyName: string = "BackingStrokeThickness";
	static readonly backingStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingStrokeThicknessPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.backingStrokeThicknessDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly backingOuterExtentDefaultValue: number = 0.82;
	get backingOuterExtent(): number {
		return <number>this.getValue(XamRadialGauge.backingOuterExtentProperty);
	}
	set backingOuterExtent(value: number) {
		this.setValue(XamRadialGauge.backingOuterExtentProperty, value);
	}
	static readonly backingOuterExtentPropertyName: string = "BackingOuterExtent";
	static readonly backingOuterExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingOuterExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.backingOuterExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingOuterExtentPropertyName, e.oldValue, e.newValue)));
	get backingOversweep(): number {
		return <number>this.getValue(XamRadialGauge.backingOversweepProperty);
	}
	set backingOversweep(value: number) {
		this.setValue(XamRadialGauge.backingOversweepProperty, value);
	}
	static readonly backingOversweepPropertyName: string = "BackingOversweep";
	static readonly backingOversweepProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingOversweepPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 3, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingOversweepPropertyName, e.oldValue, e.newValue)));
	get scaleOversweep(): number {
		return <number>this.getValue(XamRadialGauge.scaleOversweepProperty);
	}
	set scaleOversweep(value: number) {
		this.setValue(XamRadialGauge.scaleOversweepProperty, value);
	}
	static readonly scaleOversweepDefaultValue: number = 2.8;
	static readonly scaleOversweepPropertyName: string = "ScaleOversweep";
	static readonly scaleOversweepProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleOversweepPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.scaleOversweepDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleOversweepPropertyName, e.oldValue, e.newValue)));
	get scaleOversweepShape(): RadialGaugeScaleOversweepShape {
		return EnumUtil.getEnumValue<RadialGaugeScaleOversweepShape>(RadialGaugeScaleOversweepShape_$type, this.getValue(XamRadialGauge.scaleOversweepShapeProperty));
	}
	set scaleOversweepShape(value: RadialGaugeScaleOversweepShape) {
		this.setValue(XamRadialGauge.scaleOversweepShapeProperty, enumGetBox<RadialGaugeScaleOversweepShape>(RadialGaugeScaleOversweepShape_$type, value));
	}
	static readonly scaleOversweepShapePropertyName: string = "ScaleOversweepShape";
	static readonly scaleOversweepShapeProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.scaleOversweepShapePropertyName, RadialGaugeScaleOversweepShape_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, enumGetBox<RadialGaugeScaleOversweepShape>(RadialGaugeScaleOversweepShape_$type, RadialGaugeScaleOversweepShape.Auto), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.scaleOversweepShapePropertyName, e.oldValue, e.newValue)));
	static readonly backingCornerRadiusDefaultValue: number = 4;
	get backingCornerRadius(): number {
		return <number>this.getValue(XamRadialGauge.backingCornerRadiusProperty);
	}
	set backingCornerRadius(value: number) {
		this.setValue(XamRadialGauge.backingCornerRadiusProperty, value);
	}
	static readonly backingCornerRadiusPropertyName: string = "BackingCornerRadius";
	static readonly backingCornerRadiusProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingCornerRadiusPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.backingCornerRadiusDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingCornerRadiusPropertyName, e.oldValue, e.newValue)));
	static readonly backingInnerExtentDefaultValue: number = 0.12;
	get backingInnerExtent(): number {
		return <number>this.getValue(XamRadialGauge.backingInnerExtentProperty);
	}
	set backingInnerExtent(value: number) {
		this.setValue(XamRadialGauge.backingInnerExtentProperty, value);
	}
	static readonly backingInnerExtentPropertyName: string = "BackingInnerExtent";
	static readonly backingInnerExtentProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingInnerExtentPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, XamRadialGauge.backingInnerExtentDefaultValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingInnerExtentPropertyName, e.oldValue, e.newValue)));
	get backingShape(): RadialGaugeBackingShape {
		return EnumUtil.getEnumValue<RadialGaugeBackingShape>(RadialGaugeBackingShape_$type, this.getValue(XamRadialGauge.backingShapeProperty));
	}
	set backingShape(value: RadialGaugeBackingShape) {
		this.setValue(XamRadialGauge.backingShapeProperty, enumGetBox<RadialGaugeBackingShape>(RadialGaugeBackingShape_$type, value));
	}
	static readonly backingShapePropertyName: string = "BackingShape";
	static readonly backingShapeProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.backingShapePropertyName, RadialGaugeBackingShape_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, enumGetBox<RadialGaugeBackingShape>(RadialGaugeBackingShape_$type, RadialGaugeBackingShape.Circular), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.backingShapePropertyName, e.oldValue, e.newValue)));
	get ranges(): RadialGaugeRangeCollection {
		return <RadialGaugeRangeCollection>this.getValue(XamRadialGauge.rangesProperty);
	}
	set ranges(value: RadialGaugeRangeCollection) {
		this.setValue(XamRadialGauge.rangesProperty, value);
	}
	static readonly rangesPropertyName: string = "Ranges";
	static readonly rangesProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.rangesPropertyName, (<any>RadialGaugeRangeCollection).$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.rangesPropertyName, e.oldValue, e.newValue)));
	get radiusMultiplier(): number {
		return <number>this.getValue(XamRadialGauge.radiusMultiplierProperty);
	}
	set radiusMultiplier(value: number) {
		this.setValue(XamRadialGauge.radiusMultiplierProperty, value);
	}
	static readonly radiusMultiplierPropertyName: string = "RadiusMultiplier";
	static readonly radiusMultiplierProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.radiusMultiplierPropertyName, Number_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.radiusMultiplierPropertyName, e.oldValue, e.newValue)));
	get duplicateLabelOmissionStrategy(): RadialGaugeDuplicateLabelOmissionStrategy {
		return EnumUtil.getEnumValue<RadialGaugeDuplicateLabelOmissionStrategy>(RadialGaugeDuplicateLabelOmissionStrategy_$type, this.getValue(XamRadialGauge.duplicateLabelOmissionStrategyProperty));
	}
	set duplicateLabelOmissionStrategy(value: RadialGaugeDuplicateLabelOmissionStrategy) {
		this.setValue(XamRadialGauge.duplicateLabelOmissionStrategyProperty, enumGetBox<RadialGaugeDuplicateLabelOmissionStrategy>(RadialGaugeDuplicateLabelOmissionStrategy_$type, value));
	}
	static readonly duplicateLabelOmissionStrategyPropertyName: string = "DuplicateLabelOmissionStrategy";
	static readonly duplicateLabelOmissionStrategyProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.duplicateLabelOmissionStrategyPropertyName, RadialGaugeDuplicateLabelOmissionStrategy_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, enumGetBox<RadialGaugeDuplicateLabelOmissionStrategy>(RadialGaugeDuplicateLabelOmissionStrategy_$type, RadialGaugeDuplicateLabelOmissionStrategy.OmitLast), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.duplicateLabelOmissionStrategyPropertyName, e.oldValue, e.newValue)));
	static readonly isNeedleDraggingEnabledPropertyName: string = "IsNeedleDraggingEnabled";
	private _isDragging: boolean = false;
	get isDragging(): boolean {
		return this._isDragging;
	}
	set isDragging(value: boolean) {
		this._isDragging = value;
	}
	get isNeedleDraggingEnabled(): boolean {
		return <boolean>this.getValue(XamRadialGauge.isNeedleDraggingEnabledProperty);
	}
	set isNeedleDraggingEnabled(value: boolean) {
		this.setValue(XamRadialGauge.isNeedleDraggingEnabledProperty, value);
	}
	static readonly isNeedleDraggingEnabledProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.isNeedleDraggingEnabledPropertyName, Boolean_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.isNeedleDraggingEnabledPropertyName, e.oldValue, e.newValue)));
	static readonly isNeedleDraggingConstrainedPropertyName: string = "IsNeedleDraggingConstrained";
	get isNeedleDraggingConstrained(): boolean {
		return <boolean>this.getValue(XamRadialGauge.isNeedleDraggingConstrainedProperty);
	}
	set isNeedleDraggingConstrained(value: boolean) {
		this.setValue(XamRadialGauge.isNeedleDraggingConstrainedProperty, value);
	}
	static readonly isNeedleDraggingConstrainedProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.isNeedleDraggingConstrainedPropertyName, Boolean_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.isNeedleDraggingConstrainedPropertyName, e.oldValue, e.newValue)));
	static readonly fontPropertyName: string = "Font";
	static readonly fontProperty: DependencyProperty = DependencyProperty.register(XamRadialGauge.fontPropertyName, String_$type, (<any>XamRadialGauge).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamRadialGauge>o).onPropertyChanged(XamRadialGauge.fontPropertyName, e.oldValue, e.newValue)));
	get font(): string {
		return <string>this.getValue(XamRadialGauge.fontProperty);
	}
	set font(value: string) {
		this.setValue(XamRadialGauge.fontProperty, value);
	}
	formatLabel: (sender: any, args: FormatRadialGaugeLabelEventArgs) => void = null;
	alignLabel: (sender: any, args: AlignRadialGaugeLabelEventArgs) => void = null;
	valueChanged: (sender: any, e: DoubleValueChangedEventArgs) => void = null;
	private _isDirty: boolean = false;
	protected get isDirty(): boolean {
		return this._isDirty;
	}
	protected set isDirty(value: boolean) {
		this._isDirty = value;
	}
	private _scaler: RadialGaugeScaler = null;
	protected get scaler(): RadialGaugeScaler {
		return this._scaler;
	}
	protected set scaler(value: RadialGaugeScaler) {
		this._scaler = value;
	}
	refresh(): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case XamRadialGauge.needleBrushPropertyName:

			case XamRadialGauge.needleOutlinePropertyName:

			case XamRadialGauge.needlePivotBrushPropertyName:

			case XamRadialGauge.needlePivotOutlinePropertyName:

			case XamRadialGauge.backingBrushPropertyName:

			case XamRadialGauge.backingOutlinePropertyName:

			case XamRadialGauge.scaleBrushPropertyName:

			case XamRadialGauge.tickBrushPropertyName:

			case XamRadialGauge.minorTickBrushPropertyName:
			this.view.onBrushChanged(propertyName, oldValue, newValue);
			break;

			case XamRadialGauge.rangeBrushesPropertyName:
			this.view.onRangeBrushesChanged(<BrushCollection>oldValue, <BrushCollection>newValue);
			break;

			case XamRadialGauge.rangeOutlinesPropertyName:
			this.view.onRangeOutlinesChanged(<BrushCollection>oldValue, <BrushCollection>newValue);
			break;

			case XamRadialGauge.pixelScalingRatioPropertyName:
			if (isNaN_(DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio))) {
				this.actualPixelScalingRatio = 1;
			} else {
				this.actualPixelScalingRatio = DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio);
			}
			break;

			case XamRadialGauge.actualPixelScalingRatioPropertyName:
			this.view.pixelScalingRatioChanged();
			break;

		}

		switch (propertyName) {
			case XamRadialGauge.valuePropertyName:
			if (this.valueChanged != null) {
				this.valueChanged(this, new DoubleValueChangedEventArgs(<number>oldValue, <number>newValue));
			}
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.backingBrushPropertyName:

			case XamRadialGauge.backingOutlinePropertyName:

			case XamRadialGauge.backingStrokeThicknessPropertyName:

			case XamRadialGauge.backingShapePropertyName:

			case XamRadialGauge.backingInnerExtentPropertyName:

			case XamRadialGauge.backingOuterExtentPropertyName:

			case XamRadialGauge.backingOversweepPropertyName:

			case XamRadialGauge.backingCornerRadiusPropertyName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.scaleSweepDirectionPropertyName:

			case XamRadialGauge.scaleStartAnglePropertyName:

			case XamRadialGauge.scaleEndAnglePropertyName:

			case XamRadialGauge.scaleOversweepPropertyName:

			case XamRadialGauge.scaleOversweepShapePropertyName:
			this.scaler = new RadialGaugeScaler(this.actualMinimumValue, this.actualMaximumValue, this.scaleStartAngle, this.scaleEndAngle, this.scaleSweepDirection);
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.minimumValuePropertyName:

			case XamRadialGauge.maximumValuePropertyName:
			let minimum = this.minimumValue;
			let maximum = this.maximumValue;
			if (isInfinity(minimum) || isNaN_(minimum)) {
				minimum = XamRadialGauge.minimumValueDefaultValue;
			}
			if (isInfinity(maximum) || isNaN_(maximum)) {
				maximum = XamRadialGauge.maximumValueDefaultValue;
			}
			this.actualMinimumValue = Math.min(minimum, maximum);
			this.actualMaximumValue = Math.max(minimum, maximum);
			this.scaler = new RadialGaugeScaler(this.actualMinimumValue, this.actualMaximumValue, this.scaleStartAngle, this.scaleEndAngle, this.scaleSweepDirection);
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.intervalPropertyName:

			case XamRadialGauge.scaleStartExtentPropertyName:

			case XamRadialGauge.scaleEndExtentPropertyName:

			case XamRadialGauge.labelExtentPropertyName:

			case XamRadialGauge.tickStartExtentPropertyName:

			case XamRadialGauge.tickEndExtentPropertyName:

			case XamRadialGauge.tickBrushPropertyName:

			case XamRadialGauge.scaleBrushPropertyName:

			case XamRadialGauge.labelIntervalPropertyName:

			case XamRadialGauge.minorTickCountPropertyName:

			case XamRadialGauge.tickStrokeThicknessPropertyName:

			case XamRadialGauge.minorTickStrokeThicknessPropertyName:

			case XamRadialGauge.minorTickBrushPropertyName:

			case XamRadialGauge.minorTickStartExtentPropertyName:

			case XamRadialGauge.minorTickEndExtentPropertyName:

			case XamRadialGauge.centerXPropertyName:

			case XamRadialGauge.centerYPropertyName:

			case XamRadialGauge.radiusMultiplierPropertyName:

			case XamRadialGauge.duplicateLabelOmissionStrategyPropertyName:
			this.scaler = new RadialGaugeScaler(this.actualMinimumValue, this.actualMaximumValue, this.scaleStartAngle, this.scaleEndAngle, this.scaleSweepDirection);
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.needleStartExtentPropertyName:

			case XamRadialGauge.needleEndExtentPropertyName:

			case XamRadialGauge.needleBrushPropertyName:

			case XamRadialGauge.needleOutlinePropertyName:

			case XamRadialGauge.needleStartWidthRatioPropertyName:

			case XamRadialGauge.needleEndWidthRatioPropertyName:

			case XamRadialGauge.needlePivotBrushPropertyName:

			case XamRadialGauge.needlePivotOutlinePropertyName:

			case XamRadialGauge.needleStrokeThicknessPropertyName:

			case XamRadialGauge.needlePivotStrokeThicknessPropertyName:

			case XamRadialGauge.needleBaseFeatureExtentPropertyName:

			case XamRadialGauge.needleBaseFeatureWidthRatioPropertyName:

			case XamRadialGauge.needlePointFeatureExtentPropertyName:

			case XamRadialGauge.needlePointFeatureWidthRatioPropertyName:

			case XamRadialGauge.needlePivotWidthRatioPropertyName:

			case XamRadialGauge.needlePivotInnerWidthRatioPropertyName:

			case XamRadialGauge.needlePivotShapePropertyName:

			case XamRadialGauge.needleShapePropertyName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.transitionDurationPropertyName:
			this.animator.intervalMilliseconds = this.transitionDuration;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.transitionEasingFunctionPropertyName:
			this.animator.easingFunction = this.transitionEasingFunction;
			break;

			case XamRadialGauge.transitionProgressPropertyName:
			if (this.transitionProgress >= 1) {
				this.animator.stop();
				let swap = this.nextFrame;
				this.nextFrame = this.previousFrame;
				this.previousFrame = swap;
				this.prepareBacking();
				this.prepareNeedle();
				this.prepareScale();
				this.renderBacking(this.nextFrame);
				this.renderNeedle(this.nextFrame);
				this.renderScale(this.nextFrame);
				this.view.arrangeComplete();
				return;
			}
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderBacking(this.currentFrame);
			this.renderNeedle(this.currentFrame);
			this.renderScale(this.currentFrame);
			this.view.arrangeComplete();
			break;

			case XamRadialGauge.rangesPropertyName:
			let oldRanges = <RadialGaugeRangeCollection>oldValue;
			let newRanges = <RadialGaugeRangeCollection>newValue;
			if (oldRanges != null) {
				let $t = (<INotifyCollectionChanged>oldRanges);
				$t.collectionChanged = delegateRemove($t.collectionChanged, runOn(this, this.ranges_CollectionChanged));
			}
			if (newRanges != null) {
				let $t1 = (<INotifyCollectionChanged>newRanges);
				$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this.ranges_CollectionChanged));
			}
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.rangeOutlinesPropertyName:

			case XamRadialGauge.rangeBrushesPropertyName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamRadialGauge.fontBrushPropertyName:

			case XamRadialGauge.fontPropertyName:
			this.isDirty = true;
			this.view.updateStyle();
			this.view.scheduleArrange();
			break;

		}

	}
	styleUpdated(): void {
		this.view.styleUpdated();
	}
	private ranges_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let item of fromEn<XamRadialGaugeRange>(e.oldItems)) {
				item.propertyChanged = delegateRemove(item.propertyChanged, runOn(this, this.range_PropertyChanged));
			}
		}
		if (e.newItems != null) {
			for (let item1 of fromEn<XamRadialGaugeRange>(e.newItems)) {
				item1.propertyChanged = delegateCombine(item1.propertyChanged, runOn(this, this.range_PropertyChanged));
			}
		}
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	private range_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	private _lastSize: Size = new Size(1, NaN, NaN);
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		let oldViewport = this._viewport;
		this._viewport = value;
		if (!oldViewport.equals1(this._viewport)) {
			this.onViewportChanged(oldViewport, this._viewport);
		}
	}
	private onViewportChanged(oldViewport: Rect, newViewport: Rect): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	protected isValid(): boolean {
		return !isNaN_(this.actualMinimumValue) && !isNaN_(this.actualMaximumValue) && !isNaN_(this.value) && !this.viewport.isEmpty && this.view.ready();
	}
	arrangeGauge(): void {
		if (!this.isValid()) {
			return;
		}
		if (this.isDirty) {
			if (this.animating) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				let previousFrame: RadialGaugeFrame = this.previousFrame;
				this.previousFrame = this.currentFrame;
				this.currentFrame = previousFrame;
			} else {
				let previousFrame1: RadialGaugeFrame = this.previousFrame;
				this.previousFrame = this.nextFrame;
				this.nextFrame = previousFrame1;
			}
		} else if (this.animating) {
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderBacking(this.currentFrame);
			this.renderNeedle(this.currentFrame);
			this.renderScale(this.currentFrame);
		}
		if (this.isDirty) {
			this.prepareNeedle();
			this.prepareScale();
			this.prepareBacking();
		}
		if (this.isDirty && this.shouldAnimate) {
			this.startAnimation();
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderBacking(this.currentFrame);
			this.renderNeedle(this.currentFrame);
			this.renderScale(this.currentFrame);
		} else {
			if (this.isDirty) {
				this.renderBacking(this.nextFrame);
				this.renderNeedle(this.nextFrame);
				this.renderScale(this.nextFrame);
			}
		}
		this.isDirty = false;
		this.view.arrangeComplete();
	}
	private startAnimation(): void {
		this._transitionProgress = 0;
		this.animator.stop();
		this.animator.start();
	}
	private get shouldAnimate(): boolean {
		return this.transitionDuration > 0;
	}
	private renderBacking(frame: RadialGaugeFrame): void {
		let viewport = this.viewport;
		let backingPath = this.view.getBackingPath();
		let backingFrame = frame.backingFrame;
		let radius = Math.min(viewport.width / 2, viewport.height / 2) * frame.radiusMultiplier;
		let center = this.getGaugeCenter();
		let centerX = center.x;
		let centerY = center.y;
		let geo = backingFrame.getPathGeometry(radius, centerX, centerY);
		backingPath.data = geo;
		backingPath._fill = backingFrame.brush;
		backingPath._stroke = backingFrame.outline;
		backingPath.strokeThickness = backingFrame.strokeThickness;
	}
	private _needleBoundingPoints: List$1<Point> = null;
	private _needleTouchBoundingPoints: List$1<Point> = null;
	needleContainsPoint_1(point: Point): boolean {
		if (this._needleBoundingPoints == null) {
			return false;
		}
		return PolygonUtil.polygonContainsPoint(this._needleBoundingPoints, point);
	}
	needleContainsPoint(point: Point, isFinger: boolean): boolean {
		if (this._needleBoundingPoints == null) {
			return false;
		}
		return isFinger ? PolygonUtil.polygonContainsPoint(this._needleTouchBoundingPoints, point) : PolygonUtil.polygonContainsPoint(this._needleBoundingPoints, point);
	}
	private renderNeedle(frame: RadialGaugeFrame): void {
		let viewport = this.viewport;
		let needleAngle = frame.needleFrame.needleAngle;
		let needleBrush = frame.needleFrame.needleBrush;
		let needleOutline = frame.needleFrame.needleOutline;
		let needleStrokeThickness = frame.needleFrame.needleStrokeThickness;
		let overlayBrush = frame.needleFrame.capBrush;
		let overlayStroke = frame.needleFrame.capOutline;
		let overlayThickness = frame.needleFrame.capStrokeThickness;
		let needlePath = this.view.getNeedlePath();
		let underlayPath = this.view.getUnderlayPath();
		let overlayPath = this.view.getOverlayPath();
		let needleFrame = frame.needleFrame;
		let radius = Math.min(viewport.width / 2, viewport.height / 2) * frame.radiusMultiplier;
		let center = this.getGaugeCenter();
		let centerX = center.x;
		let centerY = center.y;
		let geo = needleFrame.getPathGeometry(radius, centerX, centerY);
		let angleRad = needleAngle * 180 / Math.PI;
		needlePath.data = geo;
		let trans = new TransformGroup();
		trans.children.add(((() => {
			let $ret = new RotateTransform();
			$ret.centerX = centerX;
			$ret.centerY = centerY;
			$ret.angle = angleRad;
			return $ret;
		})()));
		needlePath.renderTransform = trans;
		needlePath._fill = needleBrush;
		needlePath._stroke = needleOutline;
		needlePath.strokeThickness = needleStrokeThickness;
		underlayPath.data = needleFrame.getUnderlayPathGeometry(radius, centerX, centerY);
		overlayPath.data = needleFrame.getOverlayPathGeometry(radius, centerX, centerY);
		underlayPath._fill = overlayBrush;
		underlayPath._stroke = overlayStroke;
		underlayPath.strokeThickness = overlayThickness;
		overlayPath._fill = overlayBrush;
		overlayPath._stroke = overlayStroke;
		overlayPath.strokeThickness = overlayThickness;
		let needleBoundingPoints: List$1<Point> = new List$1<Point>(Point_$type, 0);
		let cosAngle = Math.cos(needleAngle);
		let sinAngle = Math.sin(needleAngle);
		let needleWidth = needleFrame.needleWidth / 2;
		let p1 = <Point>{ $type: Point_$type, x: needleFrame.needleStartExtent * radius, y: needleWidth * radius };
		let p2 = <Point>{ $type: Point_$type, x: needleFrame.needleEndExtent * radius, y: needleWidth * radius };
		let p3 = <Point>{ $type: Point_$type, x: needleFrame.needleEndExtent * radius, y: -needleWidth * radius };
		let p4 = <Point>{ $type: Point_$type, x: needleFrame.needleStartExtent * radius, y: -needleWidth * radius };
		p1 = <Point>{ $type: Point_$type, x: p1.x * cosAngle - p1.y * sinAngle + centerX, y: p1.y * cosAngle + p1.x * sinAngle + centerY };
		p2 = <Point>{ $type: Point_$type, x: p2.x * cosAngle - p2.y * sinAngle + centerX, y: p2.y * cosAngle + p2.x * sinAngle + centerY };
		p3 = <Point>{ $type: Point_$type, x: p3.x * cosAngle - p3.y * sinAngle + centerX, y: p3.y * cosAngle + p3.x * sinAngle + centerY };
		p4 = <Point>{ $type: Point_$type, x: p4.x * cosAngle - p4.y * sinAngle + centerX, y: p4.y * cosAngle + p4.x * sinAngle + centerY };
		needleBoundingPoints.add(p1);
		needleBoundingPoints.add(p2);
		needleBoundingPoints.add(p3);
		needleBoundingPoints.add(p4);
		this._needleBoundingPoints = needleBoundingPoints;
		needleWidth = (needleFrame.needleWidth / 2) * radius;
		let b1 = <Point>{ $type: Point_$type, x: needleFrame.needleStartExtent * radius, y: needleWidth };
		let b2 = <Point>{ $type: Point_$type, x: needleFrame.needleEndExtent * radius, y: needleWidth };
		let b3 = <Point>{ $type: Point_$type, x: needleFrame.needleEndExtent * radius, y: -needleWidth };
		let b4 = <Point>{ $type: Point_$type, x: needleFrame.needleStartExtent * radius, y: -needleWidth };
		b1 = <Point>{ $type: Point_$type, x: b1.x * cosAngle - b1.y * sinAngle + centerX, y: b1.y * cosAngle + b1.x * sinAngle + centerY };
		b2 = <Point>{ $type: Point_$type, x: b2.x * cosAngle - b2.y * sinAngle + centerX, y: b2.y * cosAngle + b2.x * sinAngle + centerY };
		b3 = <Point>{ $type: Point_$type, x: b3.x * cosAngle - b3.y * sinAngle + centerX, y: b3.y * cosAngle + b3.x * sinAngle + centerY };
		b4 = <Point>{ $type: Point_$type, x: b4.x * cosAngle - b4.y * sinAngle + centerX, y: b4.y * cosAngle + b4.x * sinAngle + centerY };
		this._needleTouchBoundingPoints = new List$1<Point>(Point_$type, 0);
		this._needleTouchBoundingPoints.add(b1);
		this._needleTouchBoundingPoints.add(b2);
		this._needleTouchBoundingPoints.add(b3);
		this._needleTouchBoundingPoints.add(b4);
	}
	private getGaugeCenter(): Point {
		let viewport = this.viewport;
		let actualCenterX = isNaN_(this.centerX) ? 0.5 : this.centerX;
		let actualCenterY = isNaN_(this.centerY) ? 0.5 : this.centerY;
		let centerX = viewport.left + actualCenterX * viewport.width;
		let centerY = viewport.top + actualCenterY * viewport.height;
		return <Point>{ $type: Point_$type, x: centerX, y: centerY };
	}
	private sanitizeNeedleSetting(value: number): number {
		if (isInfinity(value)) {
			return NaN;
		}
		return value;
	}
	private prepareNeedle(): void {
		let frame = this.nextFrame;
		frame.radiusMultiplier = this.radiusMultiplier;
		let viewport = this.viewport;
		let scaler = this.scaler;
		let value = this.sanitizeScaleSettingToDefault(this.value, 0);
		let needleAngle = this.scaler.scale(value);
		let needlePreparer = new RadialGaugeNeedlePreparer();
		let p = new RadialGaugeNeedleParameters();
		p.needleShape = this.needleShape;
		p.needleStrokeThickness = this.sanitizeNeedleSetting(this.needleStrokeThickness);
		p.needleBrush = this.needleBrush;
		p.needleOutline = this.needleOutline;
		p.minExtent = this.sanitizeNeedleSetting(this.needleStartExtent);
		p.maxExtent = this.sanitizeNeedleSetting(this.needleEndExtent);
		p.baseFeatureExtent = this.sanitizeNeedleSetting(this.needleBaseFeatureExtent);
		p.baseFeatureWidth = this.sanitizeNeedleSetting(this.needleBaseFeatureWidthRatio);
		p.pointFeatureExtent = this.sanitizeNeedleSetting(this.needlePointFeatureExtent);
		p.pointFeatureWidth = this.sanitizeNeedleSetting(this.needlePointFeatureWidthRatio);
		p.capWidth = this.sanitizeNeedleSetting(this.needlePivotWidthRatio);
		p.capInnerWidth = this.sanitizeNeedleSetting(this.needlePivotInnerWidthRatio);
		p.capFill = this.needlePivotBrush;
		p.capOutline = this.needlePivotOutline;
		p.capShape = this.needlePivotShape;
		p.capStrokeThickness = this.sanitizeNeedleSetting(this.needlePivotStrokeThickness);
		p.minWidth = this.sanitizeNeedleSetting(this.needleStartWidthRatio);
		p.maxWidth = this.sanitizeNeedleSetting(this.needleEndWidthRatio);
		if (isNaN_(p.needleStrokeThickness)) {
			p.needleStrokeThickness = XamRadialGauge.needleStrokeThicknessDefaultValue;
		}
		if (isNaN_(p.capStrokeThickness)) {
			p.capStrokeThickness = XamRadialGauge.needlePivotStrokeThicknessDefaultValue;
		}
		needlePreparer.parameters = p;
		needlePreparer.prepareNeedle(frame.needleFrame);
		frame.needleFrame.needleAngle = needleAngle;
	}
	private _previousFrame: RadialGaugeFrame = null;
	protected get previousFrame(): RadialGaugeFrame {
		return this._previousFrame;
	}
	protected set previousFrame(value: RadialGaugeFrame) {
		this._previousFrame = value;
	}
	private _nextFrame: RadialGaugeFrame = null;
	protected get nextFrame(): RadialGaugeFrame {
		return this._nextFrame;
	}
	protected set nextFrame(value: RadialGaugeFrame) {
		this._nextFrame = value;
	}
	private _currentFrame: RadialGaugeFrame = null;
	protected get currentFrame(): RadialGaugeFrame {
		return this._currentFrame;
	}
	protected set currentFrame(value: RadialGaugeFrame) {
		this._currentFrame = value;
	}
	private _displayedLabels: Stack$1<TextBlock> = new Stack$1<TextBlock>((<any>TextBlock).$type);
	private _displayedTicks: List$1<Path> = new List$1<Path>((<any>Path).$type, 0);
	private _displayedRanges: List$1<Path> = new List$1<Path>((<any>Path).$type, 0);
	private _displayedMinorTicks: List$1<Path> = new List$1<Path>((<any>Path).$type, 0);
	private renderScale(frame: RadialGaugeFrame): void {
		let viewport = this.viewport;
		let scaleFrame = frame.scaleFrame;
		let labelAngles = scaleFrame.labelAngles;
		let labelStrings = scaleFrame.labels;
		let labelXOffsets = scaleFrame.labelXOffsets;
		let labelYOffsets = scaleFrame.labelYOffsets;
		let labelWidths = scaleFrame.labelWidths;
		let labelHeights = scaleFrame.labelHeights;
		let labelExtent = scaleFrame.labelExtent;
		let scaleStartExtent = scaleFrame.scaleStartExtent;
		let scaleEndExtent = scaleFrame.scaleEndExtent;
		let tickAngles = scaleFrame.tickAngles;
		let minorTickAngles = scaleFrame.minorTickAngles;
		let tickStartExtent = scaleFrame.tickStartExtent;
		let tickEndExtent = scaleFrame.tickEndExtent;
		let scaleStartAngle = scaleFrame.scaleStartAngle;
		let scaleEndAngle = scaleFrame.scaleEndAngle;
		let scaleBrush = scaleFrame.scaleBrush;
		let tickBrush = scaleFrame.tickBrush;
		let tickStrokeThickness = scaleFrame.tickStrokeThickness;
		let minorTickBrush = scaleFrame.minorTickBrush;
		let minorTickStartExtent = scaleFrame.minorTickStartExtent;
		let minorTickEndExtent = scaleFrame.minorTickEndExtent;
		let minorTickStrokeThickness = scaleFrame.minorTickStrokeThickness;
		let scalePath = this.view.getScalePath();
		let overSweep = scaleFrame.scaleOversweep;
		scaleStartExtent = Math.max(0, scaleStartExtent);
		scaleEndExtent = Math.max(0, scaleEndExtent);
		let isParallelSweep: boolean = true;
		if (this.scaleOversweepShape == RadialGaugeScaleOversweepShape.Circular || (this.scaleOversweepShape == RadialGaugeScaleOversweepShape.Auto && this.backingShape == RadialGaugeBackingShape.Circular)) {
			isParallelSweep = false;
		}
		let radius = Math.min(viewport.width / 2, viewport.height / 2) * frame.radiusMultiplier;
		let center = this.getGaugeCenter();
		let centerX = center.x;
		let centerY = center.y;
		let origStartAngle = scaleStartAngle;
		let origEndAngle = scaleEndAngle;
		scaleStartAngle -= overSweep;
		scaleEndAngle += overSweep;
		let doCircle = false;
		if ((scaleEndAngle - scaleStartAngle) >= 2 * Math.PI) {
			doCircle = true;
			scaleStartAngle = 0;
			scaleEndAngle = Math.PI;
		}
		let scaleg: PathGeometry = new PathGeometry();
		let scalef: PathFigure = new PathFigure();
		let cosAngle1 = Math.cos(scaleStartAngle);
		let sinAngle1 = Math.sin(scaleStartAngle);
		let cosAngle2 = Math.cos(scaleEndAngle);
		let sinAngle2 = Math.sin(scaleEndAngle);
		let p1x = centerX + (radius * scaleStartExtent) * cosAngle1;
		let p1y = centerY + (radius * scaleStartExtent) * sinAngle1;
		let p2x = centerX + (radius * scaleEndExtent) * cosAngle1;
		let p2y = centerY + (radius * scaleEndExtent) * sinAngle1;
		let p3x = centerX + (radius * scaleStartExtent) * cosAngle2;
		let p3y = centerY + (radius * scaleStartExtent) * sinAngle2;
		let p4x = centerX + (radius * scaleEndExtent) * cosAngle2;
		let p4y = centerY + (radius * scaleEndExtent) * sinAngle2;
		let beforeDoCircle = doCircle;
		if (overSweep != 0 && !doCircle && isParallelSweep) {
			let cosOrigAngle1 = Math.cos(origStartAngle);
			let sinOrigAngle1 = Math.sin(origStartAngle);
			let cosOrigAngle2 = Math.cos(origEndAngle);
			let sinOrigAngle2 = Math.sin(origEndAngle);
			let origp1x = centerX + (radius * scaleStartExtent) * cosOrigAngle1;
			let origp1y = centerY + (radius * scaleStartExtent) * sinOrigAngle1;
			let origp2x = centerX + (radius * scaleEndExtent) * cosOrigAngle1;
			let origp2y = centerY + (radius * scaleEndExtent) * sinOrigAngle1;
			let origp3x = centerX + (radius * scaleStartExtent) * cosOrigAngle2;
			let origp3y = centerY + (radius * scaleStartExtent) * sinOrigAngle2;
			let origp4x = centerX + (radius * scaleEndExtent) * cosOrigAngle2;
			let origp4y = centerY + (radius * scaleEndExtent) * sinOrigAngle2;
			let matchingInnerY: number = p1y;
			let matchingInnerX: number = p2x;
			if (origp2x - origp1x != 0) {
				matchingInnerX = centerX;
				let m = (origp2y - origp1y) / (origp2x - origp1x);
				matchingInnerY = m * (centerX - p2x) + p2y;
			}
			let newInnerPoint = <Point>{ $type: Point_$type, x: matchingInnerX, y: matchingInnerY };
			let inter = GeometryUtil.getCircleIntersection(newInnerPoint, <Point>{ $type: Point_$type, x: p2x, y: p2y }, <Point>{ $type: Point_$type, x: centerX, y: centerY }, radius * scaleStartExtent);
			let matchingInnerY2: number = p3y;
			let matchingInnerX2: number = p4x;
			if (origp4x - origp3x != 0) {
				matchingInnerX2 = centerX;
				let m1 = (origp4y - origp3y) / (origp4x - origp3x);
				matchingInnerY2 = m1 * (centerX - p4x) + p4y;
			}
			let newInnerPoint2 = <Point>{ $type: Point_$type, x: matchingInnerX2, y: matchingInnerY2 };
			let inter2 = GeometryUtil.getCircleIntersection(newInnerPoint2, <Point>{ $type: Point_$type, x: p4x, y: p4y }, <Point>{ $type: Point_$type, x: centerX, y: centerY }, radius * scaleStartExtent);
			if (isNaN_(inter.item1.x) || isNaN_(inter.item1.y) || isNaN_(inter.item2.x) || isNaN_(inter.item2.y) || isNaN_(inter2.item1.x) || isNaN_(inter2.item1.y) || isNaN_(inter2.item2.x) || isNaN_(inter2.item2.y)) {
				doCircle = true;
				scaleStartAngle = 0;
				scaleEndAngle = Math.PI;
			} else {
				let p1: Point;
				let p2: Point;
				if ((Math.pow(inter.item1.x - p2x, 2) + Math.pow(inter.item1.y - p2y, 2)) < (Math.pow(inter.item2.x - p2x, 2) + Math.pow(inter.item2.y - p2y, 2))) {
					p1 = inter.item1;
				} else {
					p1 = inter.item2;
				}
				if ((Math.pow(inter2.item1.x - p4x, 2) + Math.pow(inter2.item1.y - p4y, 2)) < (Math.pow(inter2.item2.x - p4x, 2) + Math.pow(inter2.item2.y - p4y, 2))) {
					p2 = inter2.item1;
				} else {
					p2 = inter2.item2;
				}
				if ((Math.pow(p2.x - p2x, 2) + Math.pow(p2.y - p2y, 2)) <= (Math.pow(p1.x - p2x, 2) + Math.pow(p1.y - p2y, 2))) {
					doCircle = true;
					scaleStartAngle = 0;
					scaleEndAngle = Math.PI;
				} else {
					let ang1 = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: centerX, y: centerY }, p1);
					let ang2 = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: centerX, y: centerY }, p2);
					let tempStart = scaleStartAngle;
					let tempEnd = scaleEndAngle;
					while (tempStart > Math.PI * 2) {
						tempStart -= Math.PI * 2;
					}
					while (tempEnd > Math.PI * 2) {
						tempEnd -= Math.PI * 2;
					}
					let delta1 = Math.min(Math.abs(ang1 - tempStart), Math.abs((Math.PI * 2 - ang1) - tempStart));
					let delta2 = Math.min(Math.abs(ang2 - tempEnd), Math.abs((Math.PI * 2 - ang2) - tempEnd));
					if ((scaleEndAngle - scaleStartAngle) + delta1 + delta2 >= 2 * Math.PI) {
						doCircle = true;
						scaleStartAngle = 0;
						scaleEndAngle = Math.PI;
					} else {
						p1x = p1.x;
						p1y = p1.y;
						p3x = p2.x;
						p3y = p2.y;
					}
				}
			}
		}
		if (doCircle && !beforeDoCircle) {
			cosAngle1 = Math.cos(scaleStartAngle);
			sinAngle1 = Math.sin(scaleStartAngle);
			cosAngle2 = Math.cos(scaleEndAngle);
			sinAngle2 = Math.sin(scaleEndAngle);
			p1x = centerX + (radius * scaleStartExtent) * cosAngle1;
			p1y = centerY + (radius * scaleStartExtent) * sinAngle1;
			p2x = centerX + (radius * scaleEndExtent) * cosAngle1;
			p2y = centerY + (radius * scaleEndExtent) * sinAngle1;
			p3x = centerX + (radius * scaleStartExtent) * cosAngle2;
			p3y = centerY + (radius * scaleStartExtent) * sinAngle2;
			p4x = centerX + (radius * scaleEndExtent) * cosAngle2;
			p4y = centerY + (radius * scaleEndExtent) * sinAngle2;
		}
		if (doCircle) {
			scalef._startPoint = <Point>{ $type: Point_$type, x: p2x, y: p2y };
			scalef._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.point = <Point>{ $type: Point_$type, x: p4x, y: p4y };
				$ret.isLargeArc = false;
				$ret.sweepDirection = SweepDirection.Clockwise;
				$ret.size = new Size(1, radius * scaleEndExtent, radius * scaleEndExtent);
				return $ret;
			})()));
			scalef._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.point = <Point>{ $type: Point_$type, x: p2x, y: p2y };
				$ret.isLargeArc = false;
				$ret.sweepDirection = SweepDirection.Clockwise;
				$ret.size = new Size(1, radius * scaleEndExtent, radius * scaleEndExtent);
				return $ret;
			})()));
			let scalef2: PathFigure = new PathFigure();
			scalef2._startPoint = <Point>{ $type: Point_$type, x: p1x, y: p1y };
			scalef2._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.point = <Point>{ $type: Point_$type, x: p3x, y: p3y };
				$ret.isLargeArc = false;
				$ret.sweepDirection = SweepDirection.Counterclockwise;
				$ret.size = new Size(1, radius * scaleStartExtent, radius * scaleStartExtent);
				return $ret;
			})()));
			scalef2._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.point = <Point>{ $type: Point_$type, x: p1x, y: p1y };
				$ret.isLargeArc = false;
				$ret.sweepDirection = SweepDirection.Counterclockwise;
				$ret.size = new Size(1, radius * scaleStartExtent, radius * scaleStartExtent);
				return $ret;
			})()));
			scaleg.figures.add(scalef);
			scaleg.figures.add(scalef2);
		} else {
			scalef._startPoint = <Point>{ $type: Point_$type, x: p1x, y: p1y };
			scalef._segments.add(((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: p2x, y: p2y };
				return $ret;
			})()));
			scalef._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.point = <Point>{ $type: Point_$type, x: p4x, y: p4y };
				$ret.isLargeArc = (scaleEndAngle - scaleStartAngle) > Math.PI;
				$ret.sweepDirection = SweepDirection.Clockwise;
				$ret.size = new Size(1, radius * scaleEndExtent, radius * scaleEndExtent);
				return $ret;
			})()));
			scalef._segments.add(((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: p3x, y: p3y };
				return $ret;
			})()));
			scalef._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.point = <Point>{ $type: Point_$type, x: p1x, y: p1y };
				$ret.isLargeArc = (scaleEndAngle - scaleStartAngle) > Math.PI;
				$ret.sweepDirection = SweepDirection.Counterclockwise;
				$ret.size = new Size(1, radius * scaleStartExtent, radius * scaleStartExtent);
				return $ret;
			})()));
			scaleg.figures.add(scalef);
		}
		scalePath.data = scaleg;
		scalePath._fill = scaleBrush;
		let labels = this.labels;
		labels.deferDisactivate = true;
		for (let label of fromEnum<TextBlock>(this._displayedLabels)) {
			labels.push(label);
		}
		this._displayedLabels.clear();
		let fontBrush = scaleFrame.fontBrush;
		for (let i = 0; i < labelAngles.length; i++) {
			let lx = centerX + (radius * labelExtent) * Math.cos(labelAngles[i]);
			let ly = centerY + (radius * labelExtent) * Math.sin(labelAngles[i]);
			let tb = labels.pop();
			if (tb.text != labelStrings[i]) {
				tb.text = labelStrings[i];
			}
			this.view.setTextBrush(tb, fontBrush);
			let labelWidth = labelWidths[i];
			let labelHeight = labelHeights[i];
			let xOffset = labelXOffsets[i];
			let yOffset = labelYOffsets[i];
			this.view.positionLabel(tb, lx + xOffset, ly + yOffset);
			this._displayedLabels.push(tb);
		}
		labels.deferDisactivate = false;
		let ticks = this.ticks;
		ticks.deferDisactivate = true;
		for (let i1 = 0; i1 < this._displayedTicks.count; i1++) {
			ticks.push(this._displayedTicks._inner[i1]);
		}
		this._displayedTicks.clear();
		for (let i2 = 0; i2 < tickAngles.length; i2++) {
			let tx1 = centerX + (radius * tickStartExtent) * Math.cos(tickAngles[i2]);
			let ty1 = centerY + (radius * tickStartExtent) * Math.sin(tickAngles[i2]);
			let tx2 = centerX + (radius * tickEndExtent) * Math.cos(tickAngles[i2]);
			let ty2 = centerY + (radius * tickEndExtent) * Math.sin(tickAngles[i2]);
			let tick = ticks.pop();
			let tpg = new PathGeometry();
			let tpf = new PathFigure();
			tpf._startPoint = <Point>{ $type: Point_$type, x: tx1, y: ty1 };
			tpf._segments.add(((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: tx2, y: ty2 };
				return $ret;
			})()));
			tpg.figures.add(tpf);
			tick.data = tpg;
			tick._stroke = tickBrush;
			tick.strokeThickness = tickStrokeThickness;
			this._displayedTicks.add(tick);
		}
		ticks.deferDisactivate = false;
		let minorTicks = this.minorTicks;
		minorTicks.deferDisactivate = true;
		for (let i3 = 0; i3 < this._displayedMinorTicks.count; i3++) {
			minorTicks.push(this._displayedMinorTicks._inner[i3]);
		}
		this._displayedMinorTicks.clear();
		for (let i4 = 0; i4 < minorTickAngles.length; i4++) {
			let tx11 = centerX + (radius * minorTickStartExtent) * Math.cos(minorTickAngles[i4]);
			let ty11 = centerY + (radius * minorTickStartExtent) * Math.sin(minorTickAngles[i4]);
			let tx21 = centerX + (radius * minorTickEndExtent) * Math.cos(minorTickAngles[i4]);
			let ty21 = centerY + (radius * minorTickEndExtent) * Math.sin(minorTickAngles[i4]);
			let tick1 = minorTicks.pop();
			let tpg1 = new PathGeometry();
			let tpf1 = new PathFigure();
			tpf1._startPoint = <Point>{ $type: Point_$type, x: tx11, y: ty11 };
			tpf1._segments.add(((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: tx21, y: ty21 };
				return $ret;
			})()));
			tpg1.figures.add(tpf1);
			tick1.data = tpg1;
			tick1._stroke = minorTickBrush;
			tick1.strokeThickness = minorTickStrokeThickness;
			this._displayedMinorTicks.add(tick1);
		}
		minorTicks.deferDisactivate = false;
		let ranges = this.rangeShapes;
		ranges.deferDisactivate = true;
		for (let i5 = this._displayedRanges.count - 1; i5 >= 0; i5--) {
			ranges.push(this._displayedRanges._inner[i5]);
		}
		this._displayedRanges.clear();
		for (let i6 = 0; i6 < scaleFrame.ranges.count; i6++) {
			let range = scaleFrame.ranges._inner[i6];
			let currRange = ranges.pop();
			currRange.data = range.getPathGeometry(radius, centerX, centerY);
			currRange._fill = range.brush;
			currRange._stroke = range.outline;
			currRange.strokeThickness = range.strokeThickness;
			this._displayedRanges.add(currRange);
		}
		this.view.setRangeRenderOrder(this._displayedRanges);
		ranges.deferDisactivate = false;
	}
	private valueCloseEnough(val1: number, val2: number, interval: number): boolean {
		let delta = interval / 10000;
		if (isNaN_(delta)) {
			delta = 1E-05;
		}
		let diff = Math.abs(val1 - val2);
		if (diff < delta) {
			return true;
		}
		return false;
	}
	private sanitizeScaleSetting(value: number): number {
		if (isInfinity(value)) {
			return NaN;
		}
		return value;
	}
	private sanitizeBackingSettingToDefault(value: number, defaultValue: number): number {
		if (isInfinity(value)) {
			return defaultValue;
		}
		return value;
	}
	private sanitizeScaleSettingToDefault(value: number, defaultValue: number): number {
		if (isInfinity(value) || isNaN_(value)) {
			return defaultValue;
		}
		return value;
	}
	private prepareScale(): void {
		let frame = this.nextFrame;
		frame.radiusMultiplier = this.sanitizeScaleSetting(this.radiusMultiplier);
		if (isNaN_(frame.radiusMultiplier)) {
			frame.radiusMultiplier = 1;
		}
		let viewport = this.viewport;
		let scaler = this.scaler;
		let interval = this.sanitizeScaleSetting(this.interval);
		let labelInterval = this.sanitizeScaleSetting(this.labelInterval);
		let minorTickCount = this.sanitizeScaleSetting(this.minorTickCount);
		if (isNaN_(interval)) {
			interval = (this.actualMaximumValue - this.actualMinimumValue) / 10;
		}
		if (isNaN_(labelInterval)) {
			labelInterval = interval;
		}
		if (isNaN_(minorTickCount)) {
			minorTickCount = 3;
		}
		let labels: List$1<Tuple$2<number, number>> = new List$1<Tuple$2<number, number>>((<any>Tuple$2).$type.specialize(Number_$type, Number_$type), 0);
		let checkStartAngle = scaler.startAngle;
		let checkEndAngle = scaler.endAngle;
		while (checkStartAngle >= Math.PI * 2) {
			checkStartAngle -= Math.PI * 2;
		}
		while (checkEndAngle >= Math.PI * 2) {
			checkEndAngle -= Math.PI * 2;
		}
		let hasDuplicates = Math.abs(checkEndAngle - checkStartAngle) < 0.0001;
		let omitFirst = this.duplicateLabelOmissionStrategy == RadialGaugeDuplicateLabelOmissionStrategy.OmitFirst || this.duplicateLabelOmissionStrategy == RadialGaugeDuplicateLabelOmissionStrategy.OmitBoth;
		let omitLast = this.duplicateLabelOmissionStrategy == RadialGaugeDuplicateLabelOmissionStrategy.OmitLast || this.duplicateLabelOmissionStrategy == RadialGaugeDuplicateLabelOmissionStrategy.OmitBoth;
		for (let i = this.actualMinimumValue; i <= this.actualMaximumValue || this.valueCloseEnough(i, this.actualMaximumValue, labelInterval); i += labelInterval) {
			if (hasDuplicates && this.valueCloseEnough(i, this.actualMinimumValue, labelInterval) && omitFirst) {
				continue;
			}
			if (hasDuplicates && this.valueCloseEnough(i, this.actualMaximumValue, labelInterval) && omitLast) {
				continue;
			}
			labels.add(new Tuple$2<number, number>(Number_$type, Number_$type, i, scaler.scale(i)));
			if (labelInterval == 0) {
				break;
			}
		}
		let ticks: List$1<number> = new List$1<number>(Number_$type, 0);
		let minorTicks: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i1 = this.actualMinimumValue; i1 <= this.actualMaximumValue || this.valueCloseEnough(i1, this.actualMaximumValue, interval); i1 += interval) {
			ticks.add(scaler.scale(i1));
			for (let j = 0; j < minorTickCount; j++) {
				let val = (interval / (minorTickCount + 1)) * (j + 1);
				if (val + i1 > this.actualMaximumValue) {
					continue;
				}
				minorTicks.add(scaler.scale(val + i1));
			}
			if (interval == 0) {
				break;
			}
		}
		if (frame.scaleFrame.labelAngles.length != labels.count) {
			frame.scaleFrame.labelAngles = <number[]>new Array(labels.count);
			frame.scaleFrame.labels = <string[]>new Array(labels.count);
			frame.scaleFrame.labelWidths = <number[]>new Array(labels.count);
			frame.scaleFrame.labelHeights = <number[]>new Array(labels.count);
			frame.scaleFrame.labelXOffsets = <number[]>new Array(labels.count);
			frame.scaleFrame.labelYOffsets = <number[]>new Array(labels.count);
		}
		if (frame.scaleFrame.tickAngles.length != ticks.count || frame.scaleFrame.minorTickAngles.length != minorTicks.count) {
			frame.scaleFrame.tickAngles = <number[]>new Array(ticks.count);
			frame.scaleFrame.minorTickAngles = <number[]>new Array(minorTicks.count);
		}
		let args: FormatRadialGaugeLabelEventArgs = new FormatRadialGaugeLabelEventArgs();
		args.startAngle = this.scaler.startAngle;
		args.endAngle = this.scaler.endAngle;
		args.actualMinimumValue = this.actualMinimumValue;
		args.actualMaximumValue = this.actualMaximumValue;
		let alignArgs: AlignRadialGaugeLabelEventArgs = new AlignRadialGaugeLabelEventArgs();
		alignArgs.startAngle = args.startAngle;
		alignArgs.endAngle = args.endAngle;
		alignArgs.actualMinimumValue = args.actualMinimumValue;
		alignArgs.actualMaximumValue = args.actualMaximumValue;
		for (let i2 = 0; i2 < labels.count; i2++) {
			args.angle = labels._inner[i2].item2;
			alignArgs.angle = args.angle;
			frame.scaleFrame.labelAngles[i2] = labels._inner[i2].item2;
			let value = labels._inner[i2].item1;
			args.value = value;
			let labelValue = Math.round(value * 100) / 100;
			args.label = (labelValue).toString();
			if (this.formatLabel != null) {
				this.formatLabel(this, args);
			}
			alignArgs.value = args.value;
			alignArgs.label = args.label;
			let label = args.label;
			let size = this.view.getLabelSize(((() => {
				let $ret = new TextBlock();
				$ret.text = label;
				return $ret;
			})()));
			alignArgs.width = size.width;
			alignArgs.height = size.height;
			alignArgs.offsetX = -1 * (size.width / 2);
			alignArgs.offsetY = -1 * (size.height / 2);
			if (this.alignLabel != null) {
				this.alignLabel(this, alignArgs);
			}
			frame.scaleFrame.labelWidths[i2] = alignArgs.width;
			frame.scaleFrame.labelHeights[i2] = alignArgs.height;
			frame.scaleFrame.labelXOffsets[i2] = alignArgs.offsetX;
			frame.scaleFrame.labelYOffsets[i2] = alignArgs.offsetY;
			frame.scaleFrame.labels[i2] = alignArgs.label;
		}
		for (let i3 = 0; i3 < ticks.count; i3++) {
			frame.scaleFrame.tickAngles[i3] = ticks._inner[i3];
		}
		for (let i4 = 0; i4 < minorTicks.count; i4++) {
			frame.scaleFrame.minorTickAngles[i4] = minorTicks._inner[i4];
		}
		frame.scaleFrame.scaleStartExtent = this.sanitizeScaleSettingToDefault(this.scaleStartExtent, XamRadialGauge.scaleStartExtentDefaultValue);
		frame.scaleFrame.scaleEndExtent = this.sanitizeScaleSettingToDefault(this.scaleEndExtent, XamRadialGauge.scaleEndExtentDefaultValue);
		frame.scaleFrame.labelExtent = this.sanitizeScaleSettingToDefault(this.labelExtent, XamRadialGauge.labelExtentDefaultValue);
		frame.scaleFrame.tickStartExtent = this.sanitizeScaleSettingToDefault(this.tickStartExtent, XamRadialGauge.tickStartExtentDefaultValue);
		frame.scaleFrame.tickEndExtent = this.sanitizeScaleSettingToDefault(this.tickEndExtent, XamRadialGauge.tickEndExtentDefaultValue);
		frame.scaleFrame.minorTickStartExtent = this.sanitizeScaleSettingToDefault(this.minorTickStartExtent, XamRadialGauge.minorTickStartExtentDefaultValue);
		frame.scaleFrame.minorTickEndExtent = this.sanitizeScaleSettingToDefault(this.minorTickEndExtent, XamRadialGauge.minorTickEndExtentDefaultValue);
		frame.scaleFrame.scaleStartAngle = scaler.startAngle;
		frame.scaleFrame.scaleEndAngle = scaler.endAngle;
		let scaleOverSweep = this.scaleOversweep;
		if (isNaN_((scaleOverSweep))) {
			scaleOverSweep = XamRadialGauge.scaleOversweepDefaultValue;
		}
		let sweepDelta = scaleOverSweep * Math.PI / 180;
		if (sweepDelta < 0) {
			sweepDelta = 0;
		}
		frame.scaleFrame.scaleOversweep = sweepDelta;
		frame.scaleFrame.tickBrush = this.tickBrush;
		frame.scaleFrame.fontBrush = this.fontBrush;
		frame.scaleFrame.minorTickBrush = this.minorTickBrush;
		frame.scaleFrame.scaleBrush = this.scaleBrush;
		frame.scaleFrame.tickStrokeThickness = this.sanitizeScaleSetting(this.tickStrokeThickness);
		frame.scaleFrame.minorTickStrokeThickness = this.sanitizeScaleSetting(this.minorTickStrokeThickness);
		if (isNaN_(frame.scaleFrame.tickStrokeThickness)) {
			frame.scaleFrame.tickStrokeThickness = XamRadialGauge.tickStrokeThicknessDefaultValue;
		}
		if (isNaN_(frame.scaleFrame.minorTickStrokeThickness)) {
			frame.scaleFrame.minorTickStrokeThickness = XamRadialGauge.minorTickStrokeThicknessDefaultValue;
		}
		frame.scaleFrame.ranges.clear();
		for (let i5 = 0; i5 < this.ranges.count; i5++) {
			let range = this.ranges._inner[i5];
			let startValue = this.sanitizeScaleSetting(Math.min(range.startValue, range.endValue));
			let endValue = this.sanitizeScaleSetting(Math.max(range.startValue, range.endValue));
			if (isNaN_(startValue) || isNaN_(endValue)) {
				continue;
			}
			let startAngle = scaler.scale(startValue);
			let endAngle = scaler.scale(endValue);
			let res = RadialGaugeScaler.normalizeAngles(startAngle, endAngle, this.scaleSweepDirection);
			startAngle = res.item1;
			endAngle = res.item2;
			let f: RadialGaugeRangeFrame = new RadialGaugeRangeFrame();
			f.startAngle = startAngle;
			f.endAngle = endAngle;
			f.brush = range.brush != null ? range.brush : this.getBrushByIndex(i5, this.rangeBrushes);
			f.outline = range.outline != null ? range.outline : this.getBrushByIndex(i5, this.rangeOutlines);
			f.strokeThickness = this.sanitizeScaleSettingToDefault(range.strokeThickness, XamRadialGaugeRange.strokeThicknessDefaultValue);
			f.startInnerExtent = this.sanitizeScaleSetting(range.innerStartExtent);
			if (isNaN_(f.startInnerExtent)) {
				f.startInnerExtent = Math.max(0, this.scaleStartExtent);
			}
			f.endInnerExtent = this.sanitizeScaleSetting(range.innerEndExtent);
			if (isNaN_(f.endInnerExtent)) {
				f.endInnerExtent = Math.max(0, this.scaleStartExtent);
			}
			f.startOuterExtent = this.sanitizeScaleSetting(range.outerStartExtent);
			if (isNaN_(f.startOuterExtent)) {
				f.startOuterExtent = Math.max(0, this.scaleEndExtent);
			}
			f.endOuterExtent = this.sanitizeScaleSetting(range.outerEndExtent);
			if (isNaN_(f.endOuterExtent)) {
				f.endOuterExtent = Math.max(0, this.scaleEndExtent);
			}
			if (this.scaleSweepDirection == SweepDirection.Counterclockwise) {
				let swap = f.startInnerExtent;
				f.startInnerExtent = f.endInnerExtent;
				f.endInnerExtent = swap;
				swap = f.startOuterExtent;
				f.startOuterExtent = f.endOuterExtent;
				f.endOuterExtent = swap;
			}
			frame.scaleFrame.ranges.add(f);
		}
	}
	private prepareBacking(): void {
		let frame = this.nextFrame;
		frame.radiusMultiplier = this.radiusMultiplier;
		let f = frame.backingFrame;
		let brush = this.backingBrush;
		let outline = this.backingOutline;
		let thickness = this.sanitizeBackingSettingToDefault(this.backingStrokeThickness, XamRadialGauge.backingStrokeThicknessDefaultValue);
		let shape = this.backingShape;
		let backingOuterExtent = this.backingOuterExtent;
		let backingInnerExtent = this.backingInnerExtent;
		if (isInfinity(backingInnerExtent) || isNaN_(backingInnerExtent)) {
			backingInnerExtent = XamRadialGauge.backingInnerExtentDefaultValue;
		}
		if (isInfinity(backingOuterExtent) || isNaN_(backingOuterExtent)) {
			backingOuterExtent = XamRadialGauge.backingOuterExtentDefaultValue;
		}
		let backingCornerRadius = this.backingCornerRadius;
		if (isInfinity(backingCornerRadius) || isNaN_(backingCornerRadius)) {
			backingCornerRadius = XamRadialGauge.backingCornerRadiusDefaultValue;
		}
		if (backingInnerExtent > backingOuterExtent) {
			let swap = backingOuterExtent;
			backingOuterExtent = backingInnerExtent;
			backingInnerExtent = swap;
		}
		let scaler = this.scaler;
		let scaleStartAngle = scaler.startAngle;
		let scaleEndAngle = scaler.endAngle;
		f.brush = brush;
		f.outline = outline;
		f.strokeThickness = thickness;
		if (shape == RadialGaugeBackingShape.Circular) {
			f.cornerRadius = 0;
			f.startAngle = 0;
			f.endAngle = 0;
			f.innerExtent = 0;
			f.outerExtent = this.backingOuterExtent;
		} else {
			f.cornerRadius = backingCornerRadius;
			let sweepDelta = this.backingOversweep * Math.PI / 180;
			if (sweepDelta < 0) {
				sweepDelta = 0;
			}
			if ((Math.PI * 2) - (scaleEndAngle - scaleStartAngle) < sweepDelta) {
				f.oversweep = 0;
				f.cornerRadius = 0;
				f.startAngle = 0;
				f.endAngle = 0;
				f.innerExtent = 0;
				f.outerExtent = backingOuterExtent;
			} else {
				f.oversweep = sweepDelta;
				f.startAngle = scaleStartAngle;
				f.endAngle = scaleEndAngle;
				f.cornerRadius = backingCornerRadius;
				f.innerExtent = backingInnerExtent;
				f.outerExtent = backingOuterExtent;
			}
		}
	}
	get animating(): boolean {
		return this.animator.animationActive();
	}
	static readonly transitionProgressPropertyName: string = "TransitionProgress";
	private _transitionProgress: number = 0;
	get transitionProgress(): number {
		return this._transitionProgress;
	}
	set transitionProgress(value: number) {
		let oldValue = this._transitionProgress;
		this._transitionProgress = value;
		this.onPropertyChanged(XamRadialGauge.transitionProgressPropertyName, oldValue, this._transitionProgress);
	}
	private _ticks: StackPool$1<Path> = null;
	get ticks(): StackPool$1<Path> {
		return this._ticks;
	}
	set ticks(value: StackPool$1<Path>) {
		this._ticks = value;
	}
	private _minorTicks: StackPool$1<Path> = null;
	get minorTicks(): StackPool$1<Path> {
		return this._minorTicks;
	}
	set minorTicks(value: StackPool$1<Path>) {
		this._minorTicks = value;
	}
	private _labels: StackPool$1<TextBlock> = null;
	get labels(): StackPool$1<TextBlock> {
		return this._labels;
	}
	set labels(value: StackPool$1<TextBlock>) {
		this._labels = value;
	}
	private _rangeShapes: StackPool$1<Path> = null;
	get rangeShapes(): StackPool$1<Path> {
		return this._rangeShapes;
	}
	set rangeShapes(value: StackPool$1<Path>) {
		this._rangeShapes = value;
	}
	protected dragNeedle(point: Point, isFinger: boolean): void {
		let value = this.getValueForPoint(point);
		if (this.isNeedleDraggingConstrained) {
			let overMax = this.unscaleValue(this.scaler.endAngle - Math.PI * 2);
			switch (this.scaleSweepDirection) {
				case SweepDirection.Clockwise:
				if (value < this.actualMinimumValue) {
					value = value < overMax * 0.5 ? this.actualMaximumValue : this.actualMinimumValue;
				}
				break;

				case SweepDirection.Counterclockwise:
				if (value > this.actualMaximumValue) {
					value = value < (overMax + this.actualMaximumValue) * 0.5 ? this.actualMaximumValue : this.actualMinimumValue;
				}
				break;

			}

		}
		if (value != this.value) {
			this.value = value;
		}
	}
	destroy(): void {
		this.provideContainer(null);
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	onMouseMove(point: Point, isFinger: boolean): void {
		if (this.isDragging) {
			this.dragNeedle(point, isFinger);
		}
	}
	onMouseDown(point: Point, isFinger: boolean = false): void {
		if (this.isNeedleDraggingEnabled && this.needleContainsPoint(point, isFinger) && !this.isDragging) {
			this.isDragging = true;
		}
	}
	onMouseUp(point: Point): void {
		if (this.isDragging) {
			this.isDragging = false;
		}
	}
	containerResized(): void {
		this.view.onContainerResized();
	}
	flush(): void {
		this.view.flush();
	}
	exportVisualData(): GaugeVisualData {
		let gaugeVisualData: GaugeVisualData = new GaugeVisualData();
		gaugeVisualData.viewport = new RectData(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
		gaugeVisualData.scaleLabels = new ScaleLabelVisualDataList();
		gaugeVisualData.scaleTickmarks = new ScaleTickmarkVisualDataList();
		gaugeVisualData.ranges = new RangeVisualDataList();
		gaugeVisualData.needle = new NeedleVisualData();
		this.view.exportViewShapes(gaugeVisualData);
		return gaugeVisualData;
	}
	exportSerializedVisualData(): string {
		let vd: GaugeVisualData = this.exportVisualData();
		vd.scaleByViewport();
		return vd.serialize();
	}
	getFontInfo(): FontInfo {
		return FontUtil.toFontInfo(this.view.container, this.font);
	}
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.onPropertyChanged(XamRadialGauge.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.onPropertyChanged(XamRadialGauge.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
}


