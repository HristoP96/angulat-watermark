/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, Array_$type, Point_$type, runOn, typeCast, delegateCombine, delegateRemove, fromEnum, Type, markType, TypeRegistrar, PointUtil, PropertyChangedEventArgs, IEnumerable, IEnumerable_$type, enumGetBox, EnumUtil, Number_$type, Boolean_$type, typeGetValue, fromEn } from "igniteui-core/type";
import { EventProxy } from "igniteui-core/EventProxy";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { List$1 } from "igniteui-core/List$1";
import { Path } from "igniteui-core/Path";
import { TextBlock } from "igniteui-core/TextBlock";
import { LinearGraphTooltipDataContext } from "./LinearGraphTooltipDataContext";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { Brush } from "igniteui-core/Brush";
import { FontInfo } from "igniteui-core/FontInfo";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { Rect } from "igniteui-core/Rect";
import { BaseDOMEventProxy } from "igniteui-core/BaseDOMEventProxy";
import { XamLinearGraphRange } from "./XamLinearGraphRange";
import { Color } from "igniteui-core/Color";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { CanvasGestureDOMEventProxy } from "igniteui-core/CanvasGestureDOMEventProxy";
import { FontUtil } from "igniteui-core/FontUtil";
import { Size } from "igniteui-core/Size";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { BulletGraphVisualData } from "./BulletGraphVisualData";
import { LinearGraphScaleLabelVisualData } from "./LinearGraphScaleLabelVisualData";
import { LinearGraphScaleTickmarkVisualData } from "./LinearGraphScaleTickmarkVisualData";
import { LinearGraphRangeVisualData } from "./LinearGraphRangeVisualData";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { LinearGraphVisualData } from "./LinearGraphVisualData";
import { PointData } from "igniteui-core/PointData";
import { SizeData } from "igniteui-core/SizeData";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { ToolTipInfo } from "./ToolTipInfo";
import { intDivide, truncate, isNaN_ } from "igniteui-core/number";
import { Visibility } from "igniteui-core/Visibility";
import { arrayCopy1 } from "igniteui-core/arrayExtended";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { Control } from "igniteui-core/Control";
import { BulletGraphFrame } from "./BulletGraphFrame";
import { LinearGraphScaler } from "./LinearGraphScaler";
import { LinearScaleOrientation, LinearScaleOrientation_$type } from "./LinearScaleOrientation";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { LinearGraphRangeCollection } from "./LinearGraphRangeCollection";
import { StackPool$1 } from "igniteui-core/StackPool$1";
import { FormatLinearGraphLabelEventArgs } from "./FormatLinearGraphLabelEventArgs";
import { AlignLinearGraphLabelEventArgs } from "./AlignLinearGraphLabelEventArgs";
import { ToolTipItemVisualData } from "./ToolTipItemVisualData";
import { RectData } from "igniteui-core/RectData";
import { LinearGraphScaleLabelVisualDataList } from "./LinearGraphScaleLabelVisualDataList";
import { LinearGraphScaleTickmarkVisualDataList } from "./LinearGraphScaleTickmarkVisualDataList";
import { LinearGraphRangeVisualDataList } from "./LinearGraphRangeVisualDataList";
import { ValueVisualData } from "./ValueVisualData";
import { BulletGraphTargetValueVisualData } from "./BulletGraphTargetValueVisualData";
import { LinearGraphToolTipVisualData } from "./LinearGraphToolTipVisualData";
import { GetPointsSettings } from "igniteui-core/GetPointsSettings";
import { PrimitiveVisualData } from "igniteui-core/PrimitiveVisualData";
import { PolygonUtil } from "igniteui-core/PolygonUtil";
import { LinearGraphScaleFrame } from "./LinearGraphScaleFrame";
import { LinearGraphFrame } from "./LinearGraphFrame";
import { LinearGraphRectFrame } from "./LinearGraphRectFrame";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { LinearGraphBackingFrame } from "./LinearGraphBackingFrame";
import { BulletGraphScaleFrame } from "./BulletGraphScaleFrame";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { Shape } from "igniteui-core/Shape";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { INotifyCollectionChanged } from "igniteui-core/INotifyCollectionChanged";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export class XamBulletGraphView extends Base {
	static $t: Type = markType(XamBulletGraphView, 'XamBulletGraphView');
	private _canvasWidth: number = <number>0;
	private _canvasHeight: number = <number>0;
	private _currentPixelRatio: number = <number>0;
	constructor(bulletGraph: XamBulletGraph) {
		super();
		this.bulletGraph = bulletGraph;
		this._actualBrushes = new Dictionary$2<string, Dictionary$2<string, Brush>>(String_$type, (<any>Dictionary$2).$type.specialize(String_$type, (<any>Brush).$type), 0);
		this._targetValuePath = new Path();
		this._valuePath = new Path();
		this._scalePath = new Path();
		this._backingPath = new Path();
		this._scaleBackgroundPath = new Path();
		this.activeRangePaths = new List$1<Path>((<any>Path).$type, 0);
		this.activePaths = new List$1<Path>((<any>Path).$type, 0);
		this.activeLabels = new List$1<TextBlock>((<any>TextBlock).$type, 0);
		this.activeTitles = new List$1<TextBlock>((<any>TextBlock).$type, 0);
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
	private _bulletGraph: XamBulletGraph = null;
	protected get bulletGraph(): XamBulletGraph {
		return this._bulletGraph;
	}
	protected set bulletGraph(value: XamBulletGraph) {
		this._bulletGraph = value;
	}
	private _eventProxy: EventProxy = null;
	protected get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	protected set eventProxy(value: EventProxy) {
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
	private _activeTitles: List$1<TextBlock> = null;
	private get activeTitles(): List$1<TextBlock> {
		return this._activeTitles;
	}
	private set activeTitles(value: List$1<TextBlock>) {
		this._activeTitles = value;
	}
	onInit(): void {
		this.toolTipContext = new LinearGraphTooltipDataContext();
		this._showTooltipTimeout = this.bulletGraph.showToolTipTimeout;
		this.initializeScalingRatio();
	}
	initializeScalingRatio(): void {
		let userRatio = this.bulletGraph.pixelScalingRatio;
		let actualRatio = this.bulletGraph.actualPixelScalingRatio;
		if (!isNaN_(userRatio) && userRatio != 0) {
			return;
		}
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
			this.bulletGraph.actualPixelScalingRatio = window.devicePixelRatio;
		}
	}
	private _valuePath: Path = null;
	private _targetValuePath: Path = null;
	private _scalePath: Path = null;
	private _backingPath: Path = null;
	private _scaleBackgroundPath: Path = null;
	ready(): boolean {
		return true;
	}
	getTargetValuePath(): Path {
		return this._targetValuePath;
	}
	getValuePath(): Path {
		return this._valuePath;
	}
	getScalePath(): Path {
		return this._scalePath;
	}
	getBackingPath(): Path {
		return this._backingPath;
	}
	getScaleBackgroundPath(): Path {
		return this._scaleBackgroundPath;
	}
	private _userNeedleBrush: Brush = null;
	private _userNeedleOutline: Brush = null;
	private _userBackingBrush: Brush = null;
	private _userBackingOutline: Brush = null;
	private _userScaleBrush: Brush = null;
	private _userTickBrush: Brush = null;
	private _userMinorTickBrush: Brush = null;
	private _rangeBrushes: BrushCollection = null;
	private _rangeOutlines: BrushCollection = null;
	private _userRangeBrushes: BrushCollection = null;
	private _userRangeOutlines: BrushCollection = null;
	private _userValueBrush: Brush = null;
	private _userValueOutline: Brush = null;
	private _ignoreBrushChanged: boolean = false;
	private _actualBrushes: Dictionary$2<string, Dictionary$2<string, Brush>> = null;
	private _brushNames: string[] = [ "value", "targetvalue", "backing", "scale", "tick", "minortick", "label" ];
	private static gradientBrushes: Dictionary$2<string, Brush> = new Dictionary$2<string, Brush>(String_$type, (<any>Brush).$type, 0);
	private static rangeBrushes: BrushCollection = null;
	private static rangeOutlines: BrushCollection = null;
	private getDefaultColors(): void {
		this._ignoreBrushChanged = true;
		let clrs: string[] = [ "#778899", "black", "#EBEDEF", "#617583", "#617583", "rgba(100,107,114,.74)", "rgba(100,107,114,.74)" ];
		let outline: string[] = [ "#778899", "black", "#B2B9C0", "#B2B9C0", null, null, null ];
		let defaults: List$1<string[]> = ((() => {
			let $ret = new List$1<string[]>(Array_$type, 0);
			$ret.add(clrs);
			$ret.add(outline);
			return $ret;
		})());
		this._actualBrushes.clear();
		let namesCount: number = this._brushNames.length;
		for (let i: number = 0; i < namesCount; i++) {
			let name: string = this._brushNames[i];
			let className = "ui-bulletgraph-" + name;
			let fillGradientClassName = "ui-bulletgraph-" + name + "-fill";
			let outlineGradientClassName = "ui-bulletgraph-" + name + "-outline";
			let fillBrush: Brush;
			if (!((() => { let $ret = XamBulletGraphView.gradientBrushes.tryGetValue(fillGradientClassName, fillBrush); fillBrush = $ret.p1; return $ret.ret; })())) {
				fillBrush = BrushUtil.getGradientBrush(fillGradientClassName, className, "background-color", this.container, clrs[i]);
				XamBulletGraphView.gradientBrushes.addItem(fillGradientClassName, fillBrush);
			}
			let outlineBrush: Brush;
			if (!((() => { let $ret = XamBulletGraphView.gradientBrushes.tryGetValue(outlineGradientClassName, outlineBrush); outlineBrush = $ret.p1; return $ret.ret; })())) {
				outlineBrush = BrushUtil.getGradientBrush(outlineGradientClassName, className, "border-top-color", this.container, outline[i]);
				XamBulletGraphView.gradientBrushes.addItem(outlineGradientClassName, outlineBrush);
			}
			let dict = new Dictionary$2<string, Brush>(String_$type, (<any>Brush).$type, 0);
			dict.item("fill", fillBrush);
			dict.item("outline", outlineBrush);
			this._actualBrushes.item(this._brushNames[i], dict);
		}
		this.updateBrushes();
		if (XamBulletGraphView.rangeBrushes == null || XamBulletGraphView.rangeOutlines == null) {
			let $ret = BrushUtil.getGradientBrushCollection("ui-bulletgraph-range-fill-palette-", "ui-bulletgraph-range-outline-palette-", "ui-bulletgraph-range-palette-", this.container, XamBulletGraphView.rangeBrushes, XamBulletGraphView.rangeOutlines, <string[]>[ "#216E99", "#216E99", "#44acd6", "#44acd6", "#cecece", "#cecece" ]);
			XamBulletGraphView.rangeBrushes = $ret.p4;
			XamBulletGraphView.rangeOutlines = $ret.p5;
		}
		this._rangeBrushes = XamBulletGraphView.rangeBrushes;
		this._rangeOutlines = XamBulletGraphView.rangeOutlines;
		if (this._userRangeBrushes == null) {
			this.bulletGraph.rangeBrushes = this._rangeBrushes;
		}
		if (this._userRangeOutlines == null) {
			this.bulletGraph.rangeOutlines = this._rangeOutlines;
		}
		this._ignoreBrushChanged = false;
	}
	private updateBrushes(): void {
		this._ignoreBrushChanged = true;
		let namesCount: number = this._brushNames.length;
		for (let i: number = 0; i < namesCount; i++) {
			let name: string = this._brushNames[i];
			this.updateBrush(name, this._actualBrushes.item(name));
		}
		this._ignoreBrushChanged = false;
	}
	private updateBrush(name: string, dict: Dictionary$2<string, Brush>): void {
		let colorBrush: Brush = dict.item("fill");
		let outlineBrush: Brush = dict.item("outline");
		switch (name) {
			case "targetvalue":
			if (this._userNeedleBrush == null) {
				this.bulletGraph.targetValueBrush = colorBrush;
			}
			if (this._userNeedleOutline == null) {
				this.bulletGraph.targetValueOutline = outlineBrush;
			}
			break;

			case "value":
			if (this._userValueBrush == null) {
				this.bulletGraph.valueBrush = colorBrush;
			}
			if (this._userValueOutline == null) {
				this.bulletGraph.valueOutline = outlineBrush;
			}
			break;

			case "backing":
			if (this._userBackingBrush == null) {
				this.bulletGraph.backingBrush = colorBrush;
			}
			if (this._userBackingOutline == null) {
				this.bulletGraph.backingOutline = outlineBrush;
			}
			break;

			case "tick":
			if (this._userTickBrush == null) {
				this.bulletGraph.tickBrush = colorBrush;
			}
			break;

			case "minortick":
			if (this._userMinorTickBrush == null) {
				this.bulletGraph.minorTickBrush = colorBrush;
			}
			break;

			case "label":
			this._labelBrush = colorBrush;
			break;

		}

	}
	onBrushChanged(propertyName: string, oldValue: any, newValue: any): void {
		let oldBrush = <Brush>oldValue;
		let newBrush = <Brush>newValue;
		if (!this._ignoreBrushChanged) {
			switch (propertyName) {
				case XamBulletGraph.targetValueBrushPropertyName:
				this._userNeedleBrush = newBrush;
				break;

				case XamBulletGraph.targetValueOutlinePropertyName:
				this._userNeedleOutline = newBrush;
				break;

				case XamBulletGraph.backingBrushPropertyName:
				this._userBackingBrush = newBrush;
				break;

				case XamBulletGraph.backingOutlinePropertyName:
				this._userBackingOutline = newBrush;
				break;

				case XamBulletGraph.valueBrushPropertyName:
				this._userValueBrush = newBrush;
				break;

				case XamBulletGraph.valueOutlinePropertyName:
				this._userValueOutline = newBrush;
				break;

				case XamBulletGraph.tickBrushPropertyName:
				this._userTickBrush = newBrush;
				break;

				case XamBulletGraph.minorTickBrushPropertyName:
				this._userMinorTickBrush = newBrush;
				break;

			}

			if (newBrush == null) {
				this.updateBrushes();
			}
		}
	}
	onRangeBrushesChanged(oldValue: BrushCollection, newValue: BrushCollection): void {
		if (!this._ignoreBrushChanged) {
			this._userRangeBrushes = newValue;
			if (this._userRangeBrushes == null) {
				this.bulletGraph.rangeBrushes = this._rangeBrushes;
			}
		}
	}
	onRangeOutlinesChanged(oldValue: BrushCollection, newValue: BrushCollection): void {
		if (!this._ignoreBrushChanged) {
			this._userRangeOutlines = newValue;
			if (this._userRangeOutlines == null) {
				this.bulletGraph.rangeOutlines = this._rangeOutlines;
			}
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
	styleUpdated(): void {
		this.getDefaultColors();
		this.updateStyle();
		this.scheduleArrange();
	}
	private _toolTipVisible: boolean = false;
	protected get toolTipVisible(): boolean {
		return this._toolTipVisible;
	}
	protected set toolTipVisible(value: boolean) {
		this._toolTipVisible = value;
	}
	private _toolTipShowPending: boolean = false;
	protected get toolTipShowPending(): boolean {
		return this._toolTipShowPending;
	}
	protected set toolTipShowPending(value: boolean) {
		this._toolTipShowPending = value;
	}
	private _tooltip: DomWrapper = null;
	private _toolTipContext: LinearGraphTooltipDataContext = null;
	protected get toolTipContext(): LinearGraphTooltipDataContext {
		return this._toolTipContext;
	}
	protected set toolTipContext(value: LinearGraphTooltipDataContext) {
		this._toolTipContext = value;
	}
	private _hideTooltipTimeoutId: number = 0;
	private _showTooltipTimeoutId: number = 0;
	pointToClent(p: Point): Point {
		let cRect: Rect = CanvasGestureDOMEventProxy.getOffset(this.container.rootWrapper);
		return <Point>{ $type: Point_$type, x: p.x - cRect.left, y: p.y - cRect.top };
	}
	private _tooltipType: string = null;
	private _tooltipIndex: number = -1;
	private _tooltipPoint: Point = null;
	private _showTooltipTimeout: number = 0;
	showTooltip(p: Point, data: any, index: number, type: string): void {
		this._tooltipPoint = p;
		this._tooltipIndex = index;
		this._tooltipType = type;
		this.resetTooltip();
		this._showTooltipTimeoutId = window.setTimeout(runOn(this, this.updateTooltip), this._showTooltipTimeout);
		this.toolTipShowPending = true;
	}
	hideTooltip(): void {
		if (this.toolTipShowPending) {
			window.clearTimeout(this._showTooltipTimeoutId);
			this.toolTipShowPending = false;
		}
		if (this.toolTipVisible) {
			let tooltip = <DomWrapper><any>this.bulletGraph.toolTip;
			window.clearTimeout(this._hideTooltipTimeoutId);
			tooltip.hide();
			this.toolTipVisible = false;
			this.toolTipContext = null;
		}
		this._showTooltipTimeout = this.bulletGraph.showToolTipTimeout;
	}
	private resetTooltip(): void {
		if (this.toolTipShowPending) {
			window.clearTimeout(this._showTooltipTimeoutId);
		}
		if (this.toolTipVisible) {
			let tooltip = <DomWrapper><any>this.bulletGraph.toolTip;
			window.clearTimeout(this._hideTooltipTimeoutId);
			tooltip.hide();
			this.toolTipVisible = false;
			this._showTooltipTimeout = intDivide(this.bulletGraph.showToolTipTimeout, 2);
		}
	}
	private updateTooltip(): void {
		if (this.toolTipShowPending) {
			window.clearTimeout(this._showTooltipTimeoutId);
			this.toolTipShowPending = false;
		}
		let index = this._tooltipIndex;
		let type = this._tooltipType;
		let p = this._tooltipPoint;
		if (this.container != null) {
			this._hideTooltipTimeoutId = this.container.setTimeout(runOn(this, this.hideTooltip), 10 * this.bulletGraph.showToolTipTimeout);
		} else {
			this._hideTooltipTimeoutId = window.setTimeout(runOn(this, this.hideTooltip), 10 * this.bulletGraph.showToolTipTimeout);
		}
		let range = this.bulletGraph.ranges._inner[index];
		if (this._tooltip != <DomWrapper><any>this.bulletGraph.toolTip) {
			if (this._tooltip != null) {
				this._tooltip.remove();
			}
			this._tooltip = <DomWrapper><any>this.bulletGraph.toolTip;
			this._tooltip.setStyleProperty("z-index", "10000");
			this._tooltip.setStyleProperty("position", "absolute");
			this.container.append(this._tooltip);
		}
		this.toolTipContext = this.resolveTooltipContext(type, index);
		let context_ = this.toolTipContext;
		let tooltip_ = this._tooltip;
		let tooltipType_ = type;
		if ((<any>tooltip_).updateToolTip) { (<any>tooltip_).updateToolTip(context_, tooltipType_); };
		let innerDiv = this._tooltip.findByClass(".ui-tooltip-container");
		if (innerDiv != null && innerDiv.length > 0) {
			innerDiv[0].setAttribute("style", null);
		}
		let className = "ui-simple-default-tooltip-content";
		let templateObj: DomWrapper[] = this._tooltip.findByClass("." + className);
		if (templateObj != null && templateObj.length > 0) {
			let cssNames: string[] = <string[]>[ "border-top-color", "border-top-width", "border-top-style", "border-top-left-radius", "background-color", "padding-top", "font-weight" ];
			let setCssNames: string[] = <string[]>[ "border-color", "border-width", "border-style", "border-radius", "background-color", "padding", "font-weight" ];
			let defaults: List$1<string> = ((() => {
				let $ret = new List$1<string>(String_$type, 0);
				$ret.add(this.toolTipContext.brush.color.colorString);
				$ret.add("2px");
				$ret.add("solid");
				$ret.add("4px");
				$ret.add("rgba(230, 230, 230, 0.74)");
				$ret.add("4px");
				$ret.add("bold");
				return $ret;
			})());
			let actualValues = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			let cssValues: string[] = <string[]>new Array(cssNames.length);
			arrayCopy1(cssNames, 0, cssValues, 0, cssNames.length);
			this.cssValue(className, cssValues);
			for (let j: number = 0; j < cssValues.length; j++) {
				this._tooltip.setStyleProperty(setCssNames[j], (cssValues[j] == null) ? defaults._inner[j] : cssValues[j]);
			}
		}
		this._tooltip.setStyleProperty("top", (p.y + 15).toString() + "px").setStyleProperty("left", (p.x + 15).toString() + "px");
		this._tooltip.show();
		this.toolTipVisible = true;
	}
	private resolveTooltipContext(tooltipType: string, index: number): LinearGraphTooltipDataContext {
		let context = new LinearGraphTooltipDataContext();
		switch (tooltipType) {
			case "range":
			let range = this.bulletGraph.ranges._inner[index];
			context.item = range;
			context.itemName = range.name;
			context.label = range.name + ": " + range.startValue.toString() + "-" + range.endValue.toString();
			let rangeBrush = range.brush;
			let rangeOutline = range.outline;
			context.brush = rangeBrush != null ? rangeBrush : this.bulletGraph.getBrushByIndex(index, this._rangeBrushes);
			context.outline = rangeOutline != null ? rangeOutline : this.bulletGraph.getBrushByIndex(index, this._rangeOutlines);
			context.thickness = range.strokeThickness;
			break;

			case "value":
			context.item = this.bulletGraph.value;
			context.itemName = this.bulletGraph.valueName;
			context.label = this.bulletGraph.valueName != null ? this.bulletGraph.valueName + ": " + this.bulletGraph.value.toString() : this.bulletGraph.value.toString();
			context.brush = this.bulletGraph.valueBrush;
			context.outline = this.bulletGraph.valueOutline;
			context.thickness = this.bulletGraph.valueStrokeThickness;
			break;

			case "targetvalue":
			context.item = this.bulletGraph.targetValue;
			context.itemName = this.bulletGraph.targetValueName;
			context.label = this.bulletGraph.targetValueName != null ? this.bulletGraph.targetValueName + ": " + this.bulletGraph.targetValue.toString() : this.bulletGraph.targetValue.toString();
			context.brush = this.bulletGraph.targetValueBrush;
			context.outline = this.bulletGraph.targetValueOutline;
			context.thickness = this.bulletGraph.targetValueStrokeThickness;
			break;

		}

		return context;
	}
	onContainerProvided(container: any): void {
		if (container == null) {
			this.canvas = null;
			this.container = null;
			this._tooltip = null;
			this.context = null;
			this.cleanUpEventProxy();
			return;
		}
		let cont = <DomRenderer><any>container;
		this.container = cont;
		this.bulletGraph.animator.provideRenderer(this.container);
		this.container.rootWrapper.addClass("ui-bulletgraph-container");
		this._currentPixelRatio = (isNaN_(this.bulletGraph.pixelScalingRatio) ? this.bulletGraph.actualPixelScalingRatio : this.bulletGraph.pixelScalingRatio);
		let pixelScale = this._currentPixelRatio;
		let containerWidth = Math.round(<number>cont.rootWrapper.width());
		let containerHeight = Math.round(<number>cont.rootWrapper.height());
		let pixelWidth = containerWidth * pixelScale;
		let pixelHeight = containerHeight * pixelScale;
		this.container.rootWrapper.setStyleProperty("position", "relative");
		let canv = this.container.createElement("canvas");
		canv.setStyleProperty("position", "absolute");
		this.container.append(canv);
		this._canvasWidth = pixelWidth;
		this._canvasHeight = pixelHeight;
		canv.setAttribute("width", pixelWidth.toString());
		canv.setAttribute("height", pixelHeight.toString());
		canv.setStyleProperty("width", containerWidth.toString());
		canv.setStyleProperty("height", containerHeight.toString());
		this.bulletGraph.viewport = new Rect(0, 0, 0, containerWidth, containerHeight);
		this.bulletGraph.backingViewport = new Rect(0, 0, 0, containerWidth, containerHeight);
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
			$t.onMouseOver = delegateCombine($t.onMouseOver, runOn(this, this.eventProxy_OnMouseOver));
			let $t1 = this.eventProxy;
			$t1.onMouseLeave = delegateCombine($t1.onMouseLeave, runOn(this, this.eventProxy_OnMouseLeave));
		}
		this.render();
	}
	private cleanUpEventProxy(): void {
		if (this.eventProxy != null) {
			let $t = this.eventProxy;
			$t.onMouseOver = delegateRemove($t.onMouseOver, runOn(this, this.eventProxy_OnMouseOver));
			let $t1 = this.eventProxy;
			$t1.onMouseLeave = delegateRemove($t1.onMouseLeave, runOn(this, this.eventProxy_OnMouseLeave));
			this.eventProxy.destroy();
		}
	}
	private eventProxy_OnMouseOver(point: Point, onMouseMove: boolean, isFinger: boolean): void {
		if (this.bulletGraph != null) {
			this.bulletGraph.onMouseOver(point, onMouseMove, isFinger);
		}
	}
	private eventProxy_OnMouseLeave(point: Point): void {
		if (this.bulletGraph != null) {
			this.bulletGraph.onMouseLeave();
		}
	}
	onContainerResized(): void {
		this.initializeScalingRatio();
		let width = Math.round(<number>this.container.rootWrapper.width());
		let height = Math.round(<number>this.container.rootWrapper.height());
		this.bulletGraph.viewport = new Rect(0, 0, 0, width, height);
		this.bulletGraph.backingViewport = new Rect(0, 0, 0, width, height);
		if (this.eventProxy != null) {
			this.eventProxy.viewport = this.bulletGraph.viewport;
		}
	}
	arrangeComplete(): void {
		this.render();
	}
	private _rangesInOrder: List$1<Path> = null;
	setRangeRenderOrder(ranges: List$1<Path>): void {
		this._rangesInOrder = ranges;
	}
	private render(): void {
		let width = this.bulletGraph.viewport.width;
		let height = this.bulletGraph.viewport.height;
		let pixelWidth = width * this._currentPixelRatio;
		let pixelHeight = height * this._currentPixelRatio;
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
		this.context.clearRectangle(this.bulletGraph.viewport.left, this.bulletGraph.viewport.top, this.bulletGraph.viewport.width, this.bulletGraph.viewport.height);
		this.context.renderPath(this._backingPath);
		this.context.renderPath(this._scaleBackgroundPath);
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
		this.context.renderPath(this._valuePath);
		this.context.renderPath(this._targetValuePath);
		if (this.context.shouldRender && this._currentPixelRatio != 1) {
			this.context.restore();
		}
	}
	updateStyle(): void {
		if (this.bulletGraph.font != null) {
			this._font = this.bulletGraph.getFontInfo();
		} else {
			this._font = FontUtil.getFont(this.container);
		}
		this._currentFontHeight = this.getCurrentFontHeight(this._font);
		if (this.bulletGraph.fontBrush == null) {
			let fill: string = this.container.rootWrapper.getStyleProperty("color");
			if (stringIsNullOrEmpty(fill) == false) {
				this._fontBrush = new Brush();
				this._fontBrush._fill = fill;
				this.bulletGraph.fontBrush = this._fontBrush;
			}
		}
		if (this.context != null) {
			this.context.setFontInfo(this._font);
		}
	}
	private static readonly tEXT_MARGIN: number = 0;
	getDesiredWidth(element: any): number {
		let tb = typeCast<TextBlock>((<any>TextBlock).$type, element);
		if (tb != null && tb.text != null) {
			return this.context.measureTextBlockWidth(tb) + XamBulletGraphView.tEXT_MARGIN;
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
	private _labelBrush: Brush = ((() => {
		let $ret = new Brush();
		$ret.fill = "black";
		return $ret;
	})());
	setTextBrush(tb: TextBlock, b: Brush): void {
		if (b != null) {
			tb.fill = b;
		} else {
			tb.fill = this._labelBrush;
		}
	}
	positionLabel(tb: TextBlock, x: number, y: number): void {
		tb.canvasLeft = x;
		tb.canvasTop = y;
	}
	positionDrawingCanvas(x: number, y: number): void {
	}
	positionTitlesCanvas(x: number, y: number): void {
	}
	getCurrentFontHeight(font: FontInfo): number {
		return FontUtil.getCurrentFontHeight(this.container, font);
	}
	private _scheduled: boolean = false;
	private _font: FontInfo = null;
	private _fontBrush: Brush = null;
	private _currentFontHeight: number = 0;
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
			this.bulletGraph.arrangeGauge();
		}
	}
	flush(): void {
		if (this._scheduled) {
			this.arrange();
		}
	}
	private getFontInfoForText(text: TextBlock, font: FontInfo): FontInfo {
		return FontUtil.getFontInfo(this.container, text, font);
	}
	exportViewShapes(bulletGraph: BulletGraphVisualData): void {
		bulletGraph.scalePath = new PathVisualData(1, "Scale", this._scalePath);
		bulletGraph.targetValuePath = new PathVisualData(1, "TargetValue", this._targetValuePath);
		bulletGraph.valuePath = new PathVisualData(1, "Value", this._valuePath);
		bulletGraph.backingPath = new PathVisualData(1, "Backing", this._backingPath);
		bulletGraph.scaleBackgroundPath = new PathVisualData(1, "ScaleBackground", this._scaleBackgroundPath);
		let font = this._font;
		for (let label of fromEnum<TextBlock>(this.activeLabels)) {
			if (label._visibility == Visibility.Visible) {
				let fontInfo = this.getFontInfoForText(label, font);
				let labelVisual: LinearGraphScaleLabelVisualData = new LinearGraphScaleLabelVisualData();
				labelVisual.labelValue = label.text;
				labelVisual.labelPosition = PointData.fromPoint(<Point>{ $type: Point_$type, x: label.canvasLeft, y: label.canvasTop });
				labelVisual.labelSize = SizeData.fromSize(this.getLabelSize(label));
				labelVisual.appearance = AppearanceHelper.fromTextElement(label, fontInfo);
				bulletGraph.scaleLabels.add(labelVisual);
			}
		}
		for (let path of fromEnum<Path>(this.activePaths)) {
			if (path._visibility == Visibility.Visible) {
				let tickVisual: LinearGraphScaleTickmarkVisualData = new LinearGraphScaleTickmarkVisualData();
				tickVisual.tickPath = new PathVisualData(1, "tickmarks", path);
				bulletGraph.scaleTickmarks.add(tickVisual);
			}
		}
		for (let path1 of fromEnum<Path>(this._rangesInOrder)) {
			if (path1._visibility == Visibility.Visible) {
				let rangeVisual: LinearGraphRangeVisualData = new LinearGraphRangeVisualData();
				let rangePath: PathVisualData = new PathVisualData(1, "range", path1);
				rangeVisual.rangePath = rangePath;
				bulletGraph.ranges.add(rangeVisual);
			}
		}
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
	titleActivate(tb: TextBlock): void {
		tb._visibility = Visibility.Visible;
	}
	titleDeactivate(tb: TextBlock): void {
		tb._visibility = Visibility.Collapsed;
	}
	titleDestroy(tb: TextBlock): void {
		this.activeTitles.remove(tb);
	}
	titleCreate(): TextBlock {
		let tb: TextBlock = new TextBlock();
		this.activeTitles.add(tb);
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
	getToolTipInfo(): ToolTipInfo {
		if (this.toolTipContext == null) {
			return null;
		}
		return ((() => {
			let $ret = new ToolTipInfo();
			$ret.index = this._tooltipIndex;
			$ret.point = this._tooltipPoint;
			$ret.type = this._tooltipType;
			$ret.dataContext = this.toolTipContext;
			return $ret;
		})());
	}
	pixelScalingRatioChanged(): void {
		this._currentPixelRatio = this.bulletGraph.actualPixelScalingRatio;
	}
}

/**
 * @hidden 
 */
export class XamBulletGraph extends Control {
	static $t: Type = markType(XamBulletGraph, 'XamBulletGraph', (<any>Control).$type);
	constructor() {
		super();
		this._pixelScalingRatio = NaN;
		this._actualPixelScalingRatio = 1;
		this._scaleBackgroundRange = new XamLinearGraphRange();
		let $t = this._scaleBackgroundRange;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this.range_PropertyChanged));
		this.view = new XamBulletGraphView(this);
		this.view.onInit();
		this._viewport = Rect.empty;
		this._scaleViewport = Rect.empty;
		this._backingViewport = Rect.empty;
		this.previousFrame = new BulletGraphFrame();
		this.nextFrame = new BulletGraphFrame();
		this.currentFrame = new BulletGraphFrame();
		this.ranges = new LinearGraphRangeCollection();
		this.isDirty = true;
		this.animator = new DoubleAnimator(0, 1, this.transitionDuration);
		let $t1 = this.animator;
		$t1.propertyChanged = delegateCombine($t1.propertyChanged, runOn(this, this.animator_PropertyChanged));
		this.defaultStyleKey = (<any>XamBulletGraph).$type;
		this.rangeShapes = ((() => {
			let $ret = new StackPool$1<Path>((<any>Path).$type);
			$ret.activate = runOn(this.view, this.view.rangePathActivate);
			$ret.deactivate = runOn(this.view, this.view.rangePathDeactivate);
			$ret.destroy = runOn(this.view, this.view.rangePathDestroy);
			$ret.create = runOn(this.view, this.view.rangePathCreate);
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
		this.labels = ((() => {
			let $ret = new StackPool$1<TextBlock>((<any>TextBlock).$type);
			$ret.activate = runOn(this.view, this.view.labelActivate);
			$ret.deactivate = runOn(this.view, this.view.labelDeactivate);
			$ret.destroy = runOn(this.view, this.view.labelDestroy);
			$ret.create = runOn(this.view, this.view.labelCreate);
			return $ret;
		})());
		this.titles = ((() => {
			let $ret = new StackPool$1<TextBlock>((<any>TextBlock).$type);
			$ret.activate = runOn(this.view, this.view.titleActivate);
			$ret.deactivate = runOn(this.view, this.view.titleDeactivate);
			$ret.destroy = runOn(this.view, this.view.titleDestroy);
			$ret.create = runOn(this.view, this.view.titleCreate);
			return $ret;
		})());
	}
	private _animator: DoubleAnimator = null;
	get animator(): DoubleAnimator {
		return this._animator;
	}
	set animator(value: DoubleAnimator) {
		this._animator = value;
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	private animator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.transitionProgress = this.animator.transitionProgress;
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
		this.onPropertyChanged(XamBulletGraph.transitionProgressPropertyName, oldValue, this._transitionProgress);
	}
	private startAnimation(): void {
		this._transitionProgress = 0;
		this.animator.stop();
		this.animator.start();
	}
	private get shouldAnimate(): boolean {
		return this.transitionDuration > 0;
	}
	formatLabel: (sender: any, args: FormatLinearGraphLabelEventArgs) => void = null;
	alignLabel: (sender: any, args: AlignLinearGraphLabelEventArgs) => void = null;
	private _previousFrame: BulletGraphFrame = null;
	protected get previousFrame(): BulletGraphFrame {
		return this._previousFrame;
	}
	protected set previousFrame(value: BulletGraphFrame) {
		this._previousFrame = value;
	}
	private _nextFrame: BulletGraphFrame = null;
	protected get nextFrame(): BulletGraphFrame {
		return this._nextFrame;
	}
	protected set nextFrame(value: BulletGraphFrame) {
		this._nextFrame = value;
	}
	private _currentFrame: BulletGraphFrame = null;
	protected get currentFrame(): BulletGraphFrame {
		return this._currentFrame;
	}
	protected set currentFrame(value: BulletGraphFrame) {
		this._currentFrame = value;
	}
	private _scaler: LinearGraphScaler = null;
	protected get scaler(): LinearGraphScaler {
		return this._scaler;
	}
	protected set scaler(value: LinearGraphScaler) {
		this._scaler = value;
	}
	static readonly orientationPropertyName: string = "Orientation";
	get orientation(): LinearScaleOrientation {
		return EnumUtil.getEnumValue<LinearScaleOrientation>(LinearScaleOrientation_$type, this.getValue(XamBulletGraph.orientationProperty));
	}
	set orientation(value: LinearScaleOrientation) {
		this.setValue(XamBulletGraph.orientationProperty, enumGetBox<LinearScaleOrientation>(LinearScaleOrientation_$type, value));
	}
	static readonly orientationProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.orientationPropertyName, LinearScaleOrientation_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, enumGetBox<LinearScaleOrientation>(LinearScaleOrientation_$type, LinearScaleOrientation.Horizontal), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.orientationPropertyName, e.oldValue, e.newValue)));
	private _scaleBackgroundRange: XamLinearGraphRange = null;
	static readonly scaleBackgroundBrushName: string = "ScaleBackgroundBrush";
	get scaleBackgroundBrush(): Brush {
		return <Brush>this.getValue(XamBulletGraph.scaleBackgroundBrushProperty);
	}
	set scaleBackgroundBrush(value: Brush) {
		this.setValue(XamBulletGraph.scaleBackgroundBrushProperty, value);
	}
	static readonly scaleBackgroundBrushProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.scaleBackgroundBrushName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.scaleBackgroundBrushName, e.oldValue, e.newValue)));
	static readonly scaleBackgroundOutlineName: string = "ScaleBackgroundOutline";
	get scaleBackgroundOutline(): Brush {
		return <Brush>this.getValue(XamBulletGraph.scaleBackgroundOutlineProperty);
	}
	set scaleBackgroundOutline(value: Brush) {
		this.setValue(XamBulletGraph.scaleBackgroundOutlineProperty, value);
	}
	static readonly scaleBackgroundOutlineProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.scaleBackgroundOutlineName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.scaleBackgroundOutlineName, e.oldValue, e.newValue)));
	static readonly scaleBackgroundThicknessName: string = "ScaleBackgroundThickness";
	get scaleBackgroundThickness(): number {
		return <number>this.getValue(XamBulletGraph.scaleBackgroundThicknessProperty);
	}
	set scaleBackgroundThickness(value: number) {
		this.setValue(XamBulletGraph.scaleBackgroundThicknessProperty, value);
	}
	static readonly scaleBackgroundThicknessProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.scaleBackgroundThicknessName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.scaleBackgroundThicknessName, e.oldValue, e.newValue)));
	static readonly rangesPropertyName: string = "Ranges";
	get ranges(): LinearGraphRangeCollection {
		return <LinearGraphRangeCollection>this.getValue(XamBulletGraph.rangesProperty);
	}
	set ranges(value: LinearGraphRangeCollection) {
		this.setValue(XamBulletGraph.rangesProperty, value);
	}
	static readonly rangesProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.rangesPropertyName, (<any>LinearGraphRangeCollection).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.rangesPropertyName, e.oldValue, e.newValue)));
	static readonly rangeBrushesPropertyName: string = "RangeBrushes";
	static readonly rangeBrushesProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.rangeBrushesPropertyName, (<any>BrushCollection).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.rangeBrushesPropertyName, e.oldValue, e.newValue)));
	get rangeBrushes(): BrushCollection {
		return <BrushCollection>this.getValue(XamBulletGraph.rangeBrushesProperty);
	}
	set rangeBrushes(value: BrushCollection) {
		this.setValue(XamBulletGraph.rangeBrushesProperty, value);
	}
	static readonly rangeOutlinesPropertyName: string = "RangeOutlines";
	static readonly rangeOutlinesProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.rangeOutlinesPropertyName, (<any>BrushCollection).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.rangeOutlinesPropertyName, e.oldValue, e.newValue)));
	get rangeOutlines(): BrushCollection {
		return <BrushCollection>this.getValue(XamBulletGraph.rangeOutlinesProperty);
	}
	set rangeOutlines(value: BrushCollection) {
		this.setValue(XamBulletGraph.rangeOutlinesProperty, value);
	}
	static readonly minimumValuePropertyName: string = "MinimumValue";
	get minimumValue(): number {
		return <number>this.getValue(XamBulletGraph.minimumValueProperty);
	}
	set minimumValue(value: number) {
		this.setValue(XamBulletGraph.minimumValueProperty, value);
	}
	private _actualMinimumValue: number = 0;
	get actualMinimumValue(): number {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: number) {
		this._actualMinimumValue = value;
	}
	static readonly minimumValueProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.minimumValuePropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.minimumValuePropertyName, e.oldValue, e.newValue)));
	static readonly maximumValuePropertyName: string = "MaximumValue";
	get maximumValue(): number {
		return <number>this.getValue(XamBulletGraph.maximumValueProperty);
	}
	set maximumValue(value: number) {
		this.setValue(XamBulletGraph.maximumValueProperty, value);
	}
	private _actualMaximumValue: number = 100;
	get actualMaximumValue(): number {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: number) {
		this._actualMaximumValue = value;
	}
	static readonly maximumValueProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.maximumValuePropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 100, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.maximumValuePropertyName, e.oldValue, e.newValue)));
	static readonly targetValuePropertyName: string = "TargetValue";
	get targetValue(): number {
		return <number>this.getValue(XamBulletGraph.targetValueProperty);
	}
	set targetValue(value: number) {
		this.setValue(XamBulletGraph.targetValueProperty, value);
	}
	static readonly targetValueProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValuePropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValuePropertyName, e.oldValue, e.newValue)));
	static readonly targetValueNamePropertyName: string = "TargetValueName";
	get targetValueName(): string {
		return <string>this.getValue(XamBulletGraph.targetValueNameProperty);
	}
	set targetValueName(value: string) {
		this.setValue(XamBulletGraph.targetValueNameProperty, value);
	}
	static readonly targetValueNameProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValueNamePropertyName, String_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValueNamePropertyName, e.oldValue, e.newValue)));
	static readonly valuePropertyName: string = "Value";
	get value(): number {
		return <number>this.getValue(XamBulletGraph.valueProperty);
	}
	set value(value: number) {
		this.setValue(XamBulletGraph.valueProperty, value);
	}
	static readonly valueProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.valuePropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.valuePropertyName, e.oldValue, e.newValue)));
	static readonly valueNamePropertyName: string = "ValueName";
	get valueName(): string {
		return <string>this.getValue(XamBulletGraph.valueNameProperty);
	}
	set valueName(value: string) {
		this.setValue(XamBulletGraph.valueNameProperty, value);
	}
	static readonly valueNameProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.valueNamePropertyName, String_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.valueNamePropertyName, e.oldValue, e.newValue)));
	static readonly rangeInnerExtentPropertyName: string = "RangeInnerExtent";
	get rangeInnerExtent(): number {
		return <number>this.getValue(XamBulletGraph.rangeInnerExtentProperty);
	}
	set rangeInnerExtent(value: number) {
		this.setValue(XamBulletGraph.rangeInnerExtentProperty, value);
	}
	static readonly rangeInnerExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.rangeInnerExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.2, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.rangeInnerExtentPropertyName, e.oldValue, e.newValue)));
	static readonly rangeOuterExtentPropertyName: string = "RangeOuterExtent";
	get rangeOuterExtent(): number {
		return <number>this.getValue(XamBulletGraph.rangeOuterExtentProperty);
	}
	set rangeOuterExtent(value: number) {
		this.setValue(XamBulletGraph.rangeOuterExtentProperty, value);
	}
	static readonly rangeOuterExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.rangeOuterExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.95, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.rangeOuterExtentPropertyName, e.oldValue, e.newValue)));
	static readonly valueInnerExtentPropertyName: string = "ValueInnerExtent";
	get valueInnerExtent(): number {
		return <number>this.getValue(XamBulletGraph.valueInnerExtentProperty);
	}
	set valueInnerExtent(value: number) {
		this.setValue(XamBulletGraph.valueInnerExtentProperty, value);
	}
	static readonly valueInnerExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.valueInnerExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.5, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.valueInnerExtentPropertyName, e.oldValue, e.newValue)));
	static readonly valueOuterExtentPropertyName: string = "ValueOuterExtent";
	get valueOuterExtent(): number {
		return <number>this.getValue(XamBulletGraph.valueOuterExtentProperty);
	}
	set valueOuterExtent(value: number) {
		this.setValue(XamBulletGraph.valueOuterExtentProperty, value);
	}
	static readonly valueOuterExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.valueOuterExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.65, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.valueOuterExtentPropertyName, e.oldValue, e.newValue)));
	static readonly intervalPropertyName: string = "Interval";
	get interval(): number {
		return <number>this.getValue(XamBulletGraph.intervalProperty);
	}
	set interval(value: number) {
		this.setValue(XamBulletGraph.intervalProperty, value);
	}
	static readonly intervalProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.intervalPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.intervalPropertyName, e.oldValue, e.newValue)));
	static readonly ticksPostInitialPropertyName: string = "TicksPostInitial";
	get ticksPostInitial(): number {
		return <number>this.getValue(XamBulletGraph.ticksPostInitialProperty);
	}
	set ticksPostInitial(value: number) {
		this.setValue(XamBulletGraph.ticksPostInitialProperty, value);
	}
	static readonly ticksPostInitialProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.ticksPostInitialPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, <number>0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.ticksPostInitialPropertyName, e.oldValue, e.newValue)));
	static readonly ticksPreTerminalPropertyName: string = "TicksPreTerminal";
	get ticksPreTerminal(): number {
		return <number>this.getValue(XamBulletGraph.ticksPreTerminalProperty);
	}
	set ticksPreTerminal(value: number) {
		this.setValue(XamBulletGraph.ticksPreTerminalProperty, value);
	}
	static readonly ticksPreTerminalProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.ticksPreTerminalPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, <number>0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.ticksPreTerminalPropertyName, e.oldValue, e.newValue)));
	static readonly labelIntervalPropertyName: string = "LabelInterval";
	get labelInterval(): number {
		return <number>this.getValue(XamBulletGraph.labelIntervalProperty);
	}
	set labelInterval(value: number) {
		this.setValue(XamBulletGraph.labelIntervalProperty, value);
	}
	static readonly labelIntervalProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.labelIntervalPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.labelIntervalPropertyName, e.oldValue, e.newValue)));
	private static readonly defaultLabelExtent: number = 0;
	static readonly labelExtentPropertyName: string = "LabelExtent";
	get labelExtent(): number {
		return <number>this.getValue(XamBulletGraph.labelExtentProperty);
	}
	set labelExtent(value: number) {
		this.setValue(XamBulletGraph.labelExtentProperty, value);
	}
	static readonly labelExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.labelExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, XamBulletGraph.defaultLabelExtent, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.labelExtentPropertyName, e.oldValue, e.newValue)));
	static readonly labelsPostInitialPropertyName: string = "LabelsPostInitial";
	get labelsPostInitial(): number {
		return <number>this.getValue(XamBulletGraph.labelsPostInitialProperty);
	}
	set labelsPostInitial(value: number) {
		this.setValue(XamBulletGraph.labelsPostInitialProperty, value);
	}
	static readonly labelsPostInitialProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.labelsPostInitialPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, <number>0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.labelsPostInitialPropertyName, e.oldValue, e.newValue)));
	static readonly labelsPreTerminalPropertyName: string = "LabelsPreTerminal";
	get labelsPreTerminal(): number {
		return <number>this.getValue(XamBulletGraph.labelsPreTerminalProperty);
	}
	set labelsPreTerminal(value: number) {
		this.setValue(XamBulletGraph.labelsPreTerminalProperty, value);
	}
	static readonly labelsPreTerminalProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.labelsPreTerminalPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, <number>0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.labelsPreTerminalPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickCountPropertyName: string = "MinorTickCount";
	get minorTickCount(): number {
		return <number>this.getValue(XamBulletGraph.minorTickCountProperty);
	}
	set minorTickCount(value: number) {
		this.setValue(XamBulletGraph.minorTickCountProperty, value);
	}
	static readonly minorTickCountProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.minorTickCountPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 3, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.minorTickCountPropertyName, e.oldValue, e.newValue)));
	private static readonly tickStartExtentValue: number = 0.06;
	private static readonly tickEndExtentValue: number = 0.2;
	private static readonly minorTickStartExtentValue: number = 0.1;
	private static readonly minorTickEndExtentValue: number = 0.2;
	static readonly tickStartExtentPropertyName: string = "TickStartExtent";
	get tickStartExtent(): number {
		return <number>this.getValue(XamBulletGraph.tickStartExtentProperty);
	}
	set tickStartExtent(value: number) {
		this.setValue(XamBulletGraph.tickStartExtentProperty, value);
	}
	static readonly tickStartExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.tickStartExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, XamBulletGraph.tickStartExtentValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.tickStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly tickEndExtentPropertyName: string = "TickEndExtent";
	get tickEndExtent(): number {
		return <number>this.getValue(XamBulletGraph.tickEndExtentProperty);
	}
	set tickEndExtent(value: number) {
		this.setValue(XamBulletGraph.tickEndExtentProperty, value);
	}
	static readonly tickEndExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.tickEndExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, XamBulletGraph.tickEndExtentValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.tickEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly tickStrokeThicknessPropertyName: string = "TickStrokeThickness";
	get tickStrokeThickness(): number {
		return <number>this.getValue(XamBulletGraph.tickStrokeThicknessProperty);
	}
	set tickStrokeThickness(value: number) {
		this.setValue(XamBulletGraph.tickStrokeThicknessProperty, value);
	}
	static readonly tickStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.tickStrokeThicknessPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 2, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.tickStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly tickBrushPropertyName: string = "TickBrush";
	get tickBrush(): Brush {
		return <Brush>this.getValue(XamBulletGraph.tickBrushProperty);
	}
	set tickBrush(value: Brush) {
		this.setValue(XamBulletGraph.tickBrushProperty, value);
	}
	static readonly tickBrushProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.tickBrushPropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.tickBrushPropertyName, e.oldValue, e.newValue)));
	static readonly fontBrushPropertyName: string = "FontBrush";
	get fontBrush(): Brush {
		return <Brush>this.getValue(XamBulletGraph.fontBrushProperty);
	}
	set fontBrush(value: Brush) {
		this.setValue(XamBulletGraph.fontBrushProperty, value);
	}
	static readonly fontBrushProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.fontBrushPropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.fontBrushPropertyName, e.oldValue, e.newValue)));
	static readonly valueBrushPropertyName: string = "ValueBrush";
	get valueBrush(): Brush {
		return <Brush>this.getValue(XamBulletGraph.valueBrushProperty);
	}
	set valueBrush(value: Brush) {
		this.setValue(XamBulletGraph.valueBrushProperty, value);
	}
	static readonly valueBrushProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.valueBrushPropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.valueBrushPropertyName, e.oldValue, e.newValue)));
	static readonly valueOutlinePropertyName: string = "ValueOutline";
	get valueOutline(): Brush {
		return <Brush>this.getValue(XamBulletGraph.valueOutlineProperty);
	}
	set valueOutline(value: Brush) {
		this.setValue(XamBulletGraph.valueOutlineProperty, value);
	}
	static readonly valueOutlineProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.valueOutlinePropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.valueOutlinePropertyName, e.oldValue, e.newValue)));
	static readonly valueStrokeThicknessPropertyName: string = "ValueStrokeThickness";
	get valueStrokeThickness(): number {
		return <number>this.getValue(XamBulletGraph.valueStrokeThicknessProperty);
	}
	set valueStrokeThickness(value: number) {
		this.setValue(XamBulletGraph.valueStrokeThicknessProperty, value);
	}
	static readonly valueStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.valueStrokeThicknessPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.valueStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickStartExtentPropertyName: string = "MinorTickStartExtent";
	get minorTickStartExtent(): number {
		return <number>this.getValue(XamBulletGraph.minorTickStartExtentProperty);
	}
	set minorTickStartExtent(value: number) {
		this.setValue(XamBulletGraph.minorTickStartExtentProperty, value);
	}
	static readonly minorTickStartExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.minorTickStartExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, XamBulletGraph.minorTickStartExtentValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.minorTickStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickEndExtentPropertyName: string = "MinorTickEndExtent";
	get minorTickEndExtent(): number {
		return <number>this.getValue(XamBulletGraph.minorTickEndExtentProperty);
	}
	set minorTickEndExtent(value: number) {
		this.setValue(XamBulletGraph.minorTickEndExtentProperty, value);
	}
	static readonly minorTickEndExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.minorTickEndExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, XamBulletGraph.minorTickEndExtentValue, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.minorTickEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickStrokeThicknessPropertyName: string = "MinorTickStrokeThickness";
	get minorTickStrokeThickness(): number {
		return <number>this.getValue(XamBulletGraph.minorTickStrokeThicknessProperty);
	}
	set minorTickStrokeThickness(value: number) {
		this.setValue(XamBulletGraph.minorTickStrokeThicknessProperty, value);
	}
	static readonly minorTickStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.minorTickStrokeThicknessPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.minorTickStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly minorTickBrushPropertyName: string = "MinorTickBrush";
	get minorTickBrush(): Brush {
		return <Brush>this.getValue(XamBulletGraph.minorTickBrushProperty);
	}
	set minorTickBrush(value: Brush) {
		this.setValue(XamBulletGraph.minorTickBrushProperty, value);
	}
	static readonly minorTickBrushProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.minorTickBrushPropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.minorTickBrushPropertyName, e.oldValue, e.newValue)));
	static readonly isScaleInvertedPropertyName: string = "IsScaleInverted";
	get isScaleInverted(): boolean {
		return <boolean>this.getValue(XamBulletGraph.isScaleInvertedProperty);
	}
	set isScaleInverted(value: boolean) {
		this.setValue(XamBulletGraph.isScaleInvertedProperty, value);
	}
	static readonly isScaleInvertedProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.isScaleInvertedPropertyName, Boolean_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.isScaleInvertedPropertyName, e.oldValue, e.newValue)));
	static readonly backingBrushPropertyName: string = "BackingBrush";
	get backingBrush(): Brush {
		return <Brush>this.getValue(XamBulletGraph.backingBrushProperty);
	}
	set backingBrush(value: Brush) {
		this.setValue(XamBulletGraph.backingBrushProperty, value);
	}
	static readonly backingBrushProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.backingBrushPropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.backingBrushPropertyName, e.oldValue, e.newValue)));
	static readonly backingOutlinePropertyName: string = "BackingOutline";
	get backingOutline(): Brush {
		return <Brush>this.getValue(XamBulletGraph.backingOutlineProperty);
	}
	set backingOutline(value: Brush) {
		this.setValue(XamBulletGraph.backingOutlineProperty, value);
	}
	static readonly backingOutlineProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.backingOutlinePropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.backingOutlinePropertyName, e.oldValue, e.newValue)));
	static readonly backingStrokeThicknessPropertyName: string = "BackingStrokeThickness";
	get backingStrokeThickness(): number {
		return <number>this.getValue(XamBulletGraph.backingStrokeThicknessProperty);
	}
	set backingStrokeThickness(value: number) {
		this.setValue(XamBulletGraph.backingStrokeThicknessProperty, value);
	}
	static readonly backingStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.backingStrokeThicknessPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 2, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.backingStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	static readonly backingInnerExtentPropertyName: string = "BackingInnerExtent";
	get backingInnerExtent(): number {
		return <number>this.getValue(XamBulletGraph.backingInnerExtentProperty);
	}
	set backingInnerExtent(value: number) {
		this.setValue(XamBulletGraph.backingInnerExtentProperty, value);
	}
	static readonly backingInnerExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.backingInnerExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, <number>0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.backingInnerExtentPropertyName, e.oldValue, e.newValue)));
	static readonly backingOuterExtentPropertyName: string = "BackingOuterExtent";
	get backingOuterExtent(): number {
		return <number>this.getValue(XamBulletGraph.backingOuterExtentProperty);
	}
	set backingOuterExtent(value: number) {
		this.setValue(XamBulletGraph.backingOuterExtentProperty, value);
	}
	static readonly backingOuterExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.backingOuterExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.backingOuterExtentPropertyName, e.oldValue, e.newValue)));
	static readonly scaleStartExtentPropertyName: string = "ScaleStartExtent";
	get scaleStartExtent(): number {
		return <number>this.getValue(XamBulletGraph.scaleStartExtentProperty);
	}
	set scaleStartExtent(value: number) {
		this.setValue(XamBulletGraph.scaleStartExtentProperty, value);
	}
	static readonly scaleStartExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.scaleStartExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.05, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.scaleStartExtentPropertyName, e.oldValue, e.newValue)));
	static readonly scaleEndExtentPropertyName: string = "ScaleEndExtent";
	get scaleEndExtent(): number {
		return <number>this.getValue(XamBulletGraph.scaleEndExtentProperty);
	}
	set scaleEndExtent(value: number) {
		this.setValue(XamBulletGraph.scaleEndExtentProperty, value);
	}
	static readonly scaleEndExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.scaleEndExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.95, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.scaleEndExtentPropertyName, e.oldValue, e.newValue)));
	static readonly targetValueBrushPropertyName: string = "TargetValueBrush";
	get targetValueBrush(): Brush {
		return <Brush>this.getValue(XamBulletGraph.targetValueBrushProperty);
	}
	set targetValueBrush(value: Brush) {
		this.setValue(XamBulletGraph.targetValueBrushProperty, value);
	}
	static readonly targetValueBrushProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValueBrushPropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValueBrushPropertyName, e.oldValue, e.newValue)));
	static readonly targetValueBreadthPropertyName: string = "TargetValueBreadth";
	get targetValueBreadth(): number {
		return <number>this.getValue(XamBulletGraph.targetValueBreadthProperty);
	}
	set targetValueBreadth(value: number) {
		this.setValue(XamBulletGraph.targetValueBreadthProperty, value);
	}
	static readonly targetValueBreadthProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValueBreadthPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 3, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValueBreadthPropertyName, e.oldValue, e.newValue)));
	static readonly targetValueInnerExtentPropertyName: string = "TargetValueInnerExtent";
	get targetValueInnerExtent(): number {
		return <number>this.getValue(XamBulletGraph.targetValueInnerExtentProperty);
	}
	set targetValueInnerExtent(value: number) {
		this.setValue(XamBulletGraph.targetValueInnerExtentProperty, value);
	}
	static readonly targetValueInnerExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValueInnerExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.3, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValueInnerExtentPropertyName, e.oldValue, e.newValue)));
	static readonly targetValueOuterExtentPropertyName: string = "TargetValueOuterExtent";
	get targetValueOuterExtent(): number {
		return <number>this.getValue(XamBulletGraph.targetValueOuterExtentProperty);
	}
	set targetValueOuterExtent(value: number) {
		this.setValue(XamBulletGraph.targetValueOuterExtentProperty, value);
	}
	static readonly targetValueOuterExtentProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValueOuterExtentPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0.85, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValueOuterExtentPropertyName, e.oldValue, e.newValue)));
	static readonly targetValueOutlinePropertyName: string = "TargetValueOutline";
	get targetValueOutline(): Brush {
		return <Brush>this.getValue(XamBulletGraph.targetValueOutlineProperty);
	}
	set targetValueOutline(value: Brush) {
		this.setValue(XamBulletGraph.targetValueOutlineProperty, value);
	}
	static readonly targetValueOutlineProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValueOutlinePropertyName, (<any>Brush).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValueOutlinePropertyName, e.oldValue, e.newValue)));
	static readonly targetValueStrokeThicknessPropertyName: string = "TargetValueStrokeThickness";
	get targetValueStrokeThickness(): number {
		return <number>this.getValue(XamBulletGraph.targetValueStrokeThicknessProperty);
	}
	set targetValueStrokeThickness(value: number) {
		this.setValue(XamBulletGraph.targetValueStrokeThicknessProperty, value);
	}
	static readonly targetValueStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.targetValueStrokeThicknessPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.targetValueStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	private get mergeViewPorts(): boolean {
		return <boolean>this.getValue(XamBulletGraph.mergeViewPortsProperty);
	}
	private set mergeViewPorts(value: boolean) {
		this.setValue(XamBulletGraph.mergeViewPortsProperty, value);
	}
	static readonly mergeViewPortsPropertyName: string = "MergeViewPorts";
	private static readonly mergeViewPortsProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.mergeViewPortsPropertyName, Boolean_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.mergeViewPortsPropertyName, e.oldValue, e.newValue)));
	static readonly transitionDurationPropertyName: string = "TransitionDuration";
	get transitionDuration(): number {
		return typeGetValue(this.getValue(XamBulletGraph.transitionDurationProperty));
	}
	set transitionDuration(value: number) {
		this.setValue(XamBulletGraph.transitionDurationProperty, value);
	}
	static readonly transitionDurationProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.transitionDurationPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.transitionDurationPropertyName, e.oldValue, e.newValue)));
	static readonly showToolTipTimeoutPropertyName: string = "ShowToolTipTimeout";
	get showToolTipTimeout(): number {
		return typeGetValue(this.getValue(XamBulletGraph.showToolTipTimeoutProperty));
	}
	set showToolTipTimeout(value: number) {
		this.setValue(XamBulletGraph.showToolTipTimeoutProperty, value);
	}
	static readonly showToolTipTimeoutProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.showToolTipTimeoutPropertyName, Number_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, 500, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.showToolTipTimeoutPropertyName, e.oldValue, e.newValue)));
	static readonly toolTipPropertyName: string = "ToolTip";
	get toolTip(): any {
		return <any>this.getValue(XamBulletGraph.toolTipProperty);
	}
	set toolTip(value: any) {
		this.setValue(XamBulletGraph.toolTipProperty, value);
	}
	static readonly toolTipProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.toolTipPropertyName, (<any>Base).$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.toolTipPropertyName, e.oldValue, e.newValue)));
	private _showToolTip: boolean = false;
	get showToolTip(): boolean {
		return this._showToolTip;
	}
	set showToolTip(value: boolean) {
		this._showToolTip = value;
	}
	static readonly fontPropertyName: string = "Font";
	static readonly fontProperty: DependencyProperty = DependencyProperty.register(XamBulletGraph.fontPropertyName, String_$type, (<any>XamBulletGraph).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamBulletGraph>o).onPropertyChanged(XamBulletGraph.fontPropertyName, e.oldValue, e.newValue)));
	get font(): string {
		return <string>this.getValue(XamBulletGraph.fontProperty);
	}
	set font(value: string) {
		this.setValue(XamBulletGraph.fontProperty, value);
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
	private _titles: StackPool$1<TextBlock> = null;
	get titles(): StackPool$1<TextBlock> {
		return this._titles;
	}
	set titles(value: StackPool$1<TextBlock>) {
		this._titles = value;
	}
	private _rangeShapes: StackPool$1<Path> = null;
	get rangeShapes(): StackPool$1<Path> {
		return this._rangeShapes;
	}
	set rangeShapes(value: StackPool$1<Path>) {
		this._rangeShapes = value;
	}
	getValueForPoint(point: Point): number {
		let v1: number = 0;
		let v2: number = point.x;
		if (this.orientation == LinearScaleOrientation.Vertical) {
			v1 = point.y;
			v2 = this.viewport.height;
		}
		return this.scaler.unscale(v2 - v1);
	}
	exportVisualData(): BulletGraphVisualData {
		let visualData: BulletGraphVisualData = new BulletGraphVisualData();
		visualData.viewport = new RectData(this.viewport.left, this.viewport.top, this.viewport.width, this.viewport.height);
		visualData.scaleLabels = new LinearGraphScaleLabelVisualDataList();
		visualData.scaleTickmarks = new LinearGraphScaleTickmarkVisualDataList();
		visualData.ranges = new LinearGraphRangeVisualDataList();
		visualData.value = ((() => {
			let $ret = new ValueVisualData();
			$ret.value = this.value;
			return $ret;
		})());
		visualData.targetValue = ((() => {
			let $ret = new BulletGraphTargetValueVisualData();
			$ret.value = this.targetValue;
			return $ret;
		})());
		this.view.exportViewShapes(visualData);
		let tooltipInfo: ToolTipInfo = this.view.getToolTipInfo();
		if (tooltipInfo != null) {
			let toolTipItemVisualData: ToolTipItemVisualData;
			switch (tooltipInfo.type) {
				case "range":
				toolTipItemVisualData = visualData.ranges._inner[tooltipInfo.index];
				break;

				case "value":
				toolTipItemVisualData = visualData.value;
				break;

				default:
				toolTipItemVisualData = visualData.targetValue;
				break;

			}

			visualData.toolTip = ((() => {
				let $ret = new LinearGraphToolTipVisualData();
				$ret.item = toolTipItemVisualData;
				$ret.itemBrush = AppearanceHelper.fromBrush(tooltipInfo.dataContext.brush);
				$ret.outline = AppearanceHelper.fromBrush(tooltipInfo.dataContext.outline);
				$ret.thickness = tooltipInfo.dataContext.thickness;
				return $ret;
			})());
		}
		return visualData;
	}
	exportSerializedVisualData(): string {
		let vd: BulletGraphVisualData = this.exportVisualData();
		vd.scaleByViewport();
		return vd.serialize();
	}
	destroy(): void {
		this.provideContainer(null);
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	onMouseOver(point: Point, onMouseMove: boolean, isFinger: boolean): void {
		if (this.showToolTip) {
			this.showTooltips(point, null);
		}
	}
	onMouseLeave(): void {
		if (this.showToolTip) {
			this.showTooltips(<Point>{ $type: Point_$type, x: -10000, y: -10000 }, null);
		}
	}
	containerResized(): void {
		this.view.onContainerResized();
	}
	styleUpdated(): void {
		this.view.styleUpdated();
	}
	flush(): void {
		this.view.flush();
	}
	private toPointList(list: List$1<PointData>): List$1<Point> {
		let ret: List$1<Point> = new List$1<Point>(Point_$type, 0);
		for (let i = 0; i < list.count; i++) {
			ret.add(<Point>{ $type: Point_$type, x: list._inner[i].x, y: list._inner[i].y });
		}
		return ret;
	}
	private showTooltips(point: Point, data: any): void {
		let targetValuePath: PathVisualData = new PathVisualData(1, "targetValue", this.view.getTargetValuePath());
		let targetValuePoints = targetValuePath.getPoints(new GetPointsSettings());
		if (targetValuePoints.count > 0) {
			let isTargetValueHit = PolygonUtil.polygonContainsPoint(this.toPointList(targetValuePoints._inner[0]), point);
			if (isTargetValueHit == true) {
				this.view.showTooltip(point, data, -1, "targetvalue");
				return;
			}
		}
		let actualValuePath: PathVisualData = new PathVisualData(1, "value", this.view.getValuePath());
		let valuePoints = actualValuePath.getPoints(new GetPointsSettings());
		if (valuePoints.count > 0) {
			let hit = PolygonUtil.polygonContainsPoint(this.toPointList(valuePoints._inner[0]), point);
			if (hit == true) {
				this.view.showTooltip(point, data, -1, "value");
				return;
			}
		}
		for (let i: number = 0; i < this._displayedRanges.count; i++) {
			let rangePath: PathVisualData = new PathVisualData(1, "range", this._displayedRanges._inner[i]);
			let rangePoints = rangePath.getPoints(new GetPointsSettings());
			if (rangePoints.count > 0) {
				let hit1 = PolygonUtil.polygonContainsPoint(this.toPointList(rangePoints._inner[0]), point);
				if (hit1 == true) {
					this.view.showTooltip(point, data, i, "range");
					return;
				}
			}
		}
		this.view.hideTooltip();
	}
	private refreshViewport(): void {
		if (!this.isDirty) {
			return;
		}
		let frame = this.nextFrame.scaleFrame;
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			let labelsMaxHeight: number = 0;
			for (let i: number = 0; i < frame.labelHeights.length; i++) {
				labelsMaxHeight = Math.max(labelsMaxHeight, frame.labelHeights[i]);
			}
			let portHeight = this.viewport.height >= labelsMaxHeight ? this.viewport.height - labelsMaxHeight : this.viewport.height;
			this.scaleViewport = new Rect(0, 0, 0, this.viewport.width, portHeight);
		} else {
			let labelsMaxWidth: number = 0;
			for (let i1: number = 0; i1 < frame.labelWidths.length; i1++) {
				labelsMaxWidth = Math.max(labelsMaxWidth, frame.labelWidths[i1]);
			}
			let portWidth = this.viewport.width >= labelsMaxWidth ? this.viewport.width - labelsMaxWidth : this.viewport.width;
			this.scaleViewport = new Rect(0, labelsMaxWidth, 0, portWidth, this.viewport.height);
		}
	}
	private _view: XamBulletGraphView = null;
	protected get view(): XamBulletGraphView {
		return this._view;
	}
	protected set view(value: XamBulletGraphView) {
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
			this.onViewportChanged(oldViewport, this._viewport);
		}
	}
	private _scaleViewport: Rect = null;
	get scaleViewport(): Rect {
		return this._scaleViewport;
	}
	set scaleViewport(value: Rect) {
		this._scaleViewport = value;
	}
	private _backingViewport: Rect = null;
	get backingViewport(): Rect {
		return this._backingViewport;
	}
	set backingViewport(value: Rect) {
		this._backingViewport = value;
	}
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.onPropertyChanged(XamBulletGraph.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.onPropertyChanged(XamBulletGraph.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
	protected isValid(): boolean {
		return !isNaN_(this.actualMinimumValue) && !isNaN_(this.actualMaximumValue) && !this.viewport.isEmpty && this.view.ready();
	}
	arrangeGauge(): void {
		if (!this.isValid()) {
			return;
		}
		let scaleStart = this.scaleStart();
		this.scaler = new LinearGraphScaler(this.actualMinimumValue, this.actualMaximumValue, scaleStart, scaleStart + this.scaleLength(), this.isScaleInverted);
		if (this.isDirty) {
			if (this.animating) {
				if (this.animator.needsFlush) {
					this.animator.flush();
				}
				let previousFrame = this.previousFrame;
				this.previousFrame = this.currentFrame;
				this.currentFrame = previousFrame;
			} else {
				let previousFrame1 = this.previousFrame;
				this.previousFrame = this.nextFrame;
				this.nextFrame = previousFrame1;
			}
		} else if (this.animating) {
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderBacking(this.currentFrame);
			this.renderScale(this.currentFrame);
			this.renderTargetValue(this.currentFrame);
			this.renderValue(this.currentFrame);
		}
		if (this.isDirty) {
			this.prepareLabels();
			this.refreshViewport();
			this.prepareTargetValue();
			this.prepareValue();
			this.prepareScale();
			this.prepareBacking();
		}
		if (this.isDirty && this.shouldAnimate) {
			this.startAnimation();
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderBacking(this.currentFrame);
			this.renderScale(this.currentFrame);
			this.renderTargetValue(this.currentFrame);
			this.renderValue(this.currentFrame);
			this.renderTicks(this.currentFrame);
			this.renderLabels(this.currentFrame);
		} else {
			if (this.isDirty) {
				this.renderBacking(this.nextFrame);
				this.renderScale(this.nextFrame);
				this.renderTargetValue(this.nextFrame);
				this.renderValue(this.nextFrame);
				this.renderTicks(this.nextFrame);
				this.renderLabels(this.nextFrame);
			}
		}
		this.isDirty = false;
		this.view.arrangeComplete();
	}
	private _displayedLabels: List$1<TextBlock> = new List$1<TextBlock>((<any>TextBlock).$type, 0);
	private _displayedTitles: List$1<TextBlock> = new List$1<TextBlock>((<any>TextBlock).$type, 0);
	private _displayedTicks: List$1<Path> = new List$1<Path>((<any>Path).$type, 0);
	private _displayedRanges: List$1<Path> = new List$1<Path>((<any>Path).$type, 0);
	private prepareScale(): void {
		let frame = this.nextFrame;
		let scaleFrame = frame.scaleFrame;
		let scaler = this.scaler;
		let minorTickCount = this.minorTickCount;
		let viewport = this.scaleViewport;
		if (isNaN_(minorTickCount)) {
			minorTickCount = 3;
		}
		scaleFrame.scaleStartExtent = this.scaleStartExtent;
		scaleFrame.scaleEndExtent = this.scaleEndExtent;
		scaleFrame.scaleInnerExtent = 0;
		scaleFrame.scaleOuterExtent = 1;
		scaleFrame.ranges.clear();
		for (let i = 0; i < this.ranges.count; i++) {
			let range = this.ranges._inner[i];
			if (range.endValue <= this.actualMinimumValue || range.startValue > this.actualMaximumValue) {
				continue;
			}
			let startValue: number = range.startValue;
			let endValue: number = range.endValue;
			if (startValue < this.actualMinimumValue) {
				startValue = this.actualMinimumValue;
			}
			if (endValue > this.actualMaximumValue) {
				endValue = this.actualMaximumValue;
			}
			let rangeFrame: LinearGraphRectFrame = new LinearGraphRectFrame();
			rangeFrame.brush = range.brush != null ? range.brush : this.getBrushByIndex(i, this.rangeBrushes);
			rangeFrame.outline = range.outline != null ? range.outline : this.getBrushByIndex(i, this.rangeOutlines);
			rangeFrame.strokeThickness = range.strokeThickness;
			rangeFrame.startValue = scaler.scale(startValue);
			rangeFrame.endValue = scaler.scale(endValue);
			rangeFrame.startInnerExtent = range.innerStartExtent;
			rangeFrame.endInnerExtent = range.innerEndExtent;
			rangeFrame.startOuterExtent = range.outerStartExtent;
			rangeFrame.endOuterExtent = range.outerEndExtent;
			if (isNaN_(rangeFrame.startInnerExtent)) {
				rangeFrame.startInnerExtent = this.rangeInnerExtent;
			}
			rangeFrame.endInnerExtent = range.innerEndExtent;
			if (isNaN_(rangeFrame.endInnerExtent)) {
				rangeFrame.endInnerExtent = this.rangeInnerExtent;
			}
			rangeFrame.startOuterExtent = range.outerStartExtent;
			if (isNaN_(rangeFrame.startOuterExtent)) {
				rangeFrame.startOuterExtent = this.rangeOuterExtent;
			}
			rangeFrame.endOuterExtent = range.outerEndExtent;
			if (isNaN_(rangeFrame.endOuterExtent)) {
				rangeFrame.endOuterExtent = this.rangeOuterExtent;
			}
			scaleFrame.ranges.add(rangeFrame);
		}
		scaleFrame.scaleBackgroundFrame.brush = this.scaleBackgroundBrush;
		scaleFrame.scaleBackgroundFrame.outline = this.scaleBackgroundOutline;
		scaleFrame.scaleBackgroundFrame.strokeThickness = this.scaleBackgroundThickness;
		scaleFrame.scaleBackgroundFrame.startValue = scaler.scale(this.actualMinimumValue);
		scaleFrame.scaleBackgroundFrame.endValue = scaler.scale(this.actualMaximumValue);
		scaleFrame.scaleBackgroundFrame.startInnerExtent = this.rangeInnerExtent;
		scaleFrame.scaleBackgroundFrame.endInnerExtent = this.rangeInnerExtent;
		scaleFrame.scaleBackgroundFrame.startOuterExtent = this.rangeOuterExtent;
		scaleFrame.scaleBackgroundFrame.endOuterExtent = this.rangeOuterExtent;
		scaleFrame.fontBrush = this.fontBrush;
		scaleFrame.tickBrush = this.tickBrush;
		scaleFrame.tickStrokeThickness = this.tickStrokeThickness;
		scaleFrame.tickStartExtent = this.tickStartExtent;
		scaleFrame.tickEndExtent = this.tickEndExtent;
		scaleFrame.minorTickBrush = this.minorTickBrush;
		scaleFrame.minorTickStrokeThickness = this.minorTickStrokeThickness;
		scaleFrame.minorTickStartExtent = this.minorTickStartExtent;
		scaleFrame.minorTickEndExtent = this.minorTickEndExtent;
		let interval = this.interval;
		if (isNaN_(interval)) {
			interval = (this.actualMaximumValue - this.actualMinimumValue) / 10;
		}
		if (interval == 0) {
			interval = this.actualMaximumValue - this.actualMinimumValue;
		}
		let ticks: List$1<number> = new List$1<number>(Number_$type, 0);
		let minorTicks: List$1<number> = new List$1<number>(Number_$type, 0);
		if (interval > 0) {
			let initial: number = this.actualMinimumValue + this.ticksPostInitial;
			let terminal: number = this.actualMaximumValue - this.ticksPreTerminal;
			let maximumTicks: number = 100000;
			let minimumInterval: number = Math.abs(terminal - initial) / maximumTicks;
			if (interval >= minimumInterval) {
				for (let i1 = initial; i1 <= terminal || this.valueCloseEnough(i1, terminal, interval); i1 = i1 + interval) {
					ticks.add(scaler.scale(i1));
					for (let j = 0; j < minorTickCount; j++) {
						let val = (interval / (minorTickCount + 1)) * (j + 1);
						if (val + i1 > terminal) {
							continue;
						}
						minorTicks.add(scaler.scale(val + i1));
					}
				}
			}
		}
		if (scaleFrame.ticks.length != ticks.count || scaleFrame.minorTicks.length != minorTicks.count) {
			scaleFrame.ticks = <number[]>new Array(ticks.count);
			scaleFrame.minorTicks = <number[]>new Array(minorTicks.count);
		}
		for (let i2 = 0; i2 < ticks.count; i2++) {
			scaleFrame.ticks[i2] = ticks._inner[i2];
		}
		for (let i3 = 0; i3 < minorTicks.count; i3++) {
			scaleFrame.minorTicks[i3] = minorTicks._inner[i3];
		}
	}
	private measureLabels(): Size {
		let interval = this.interval;
		let labelInterval = this.labelInterval;
		if (isNaN_(interval)) {
			interval = (this.actualMaximumValue - this.actualMinimumValue) / 10;
		}
		if (isNaN_(labelInterval)) {
			labelInterval = interval;
		}
		if (labelInterval == 0) {
			labelInterval = this.actualMaximumValue - this.actualMinimumValue;
		}
		let labels: List$1<number> = new List$1<number>(Number_$type, 0);
		if (labelInterval > 0) {
			let initial: number = this.labelsPostInitial + this.actualMinimumValue;
			let terminal: number = this.actualMaximumValue - this.labelsPreTerminal;
			let maximumTicks: number = 100000;
			let minimumInterval: number = Math.abs(terminal - initial) / maximumTicks;
			if (labelInterval >= minimumInterval) {
				for (let i = initial; i <= terminal || this.valueCloseEnough(i, terminal, interval); i += labelInterval) {
					labels.add(i);
				}
			}
		}
		let labelWidths: number[] = <number[]>new Array(labels.count);
		let labelHeights: number[] = <number[]>new Array(labels.count);
		for (let i1 = 0; i1 < labels.count; i1++) {
			let value = labels._inner[i1];
			if (this.formatLabel == null) {
				value = (Math.round(value * 100) / 100);
			}
			let label = value.toString();
			let args = new FormatLinearGraphLabelEventArgs();
			args.value = value;
			args.label = label;
			if (this.formatLabel != null) {
				this.formatLabel(this, args);
			}
			label = args.label;
			let size = this.view.getLabelSize(((() => {
				let $ret = new TextBlock();
				$ret.text = label;
				return $ret;
			})()));
			labelWidths[i1] = size.width;
			labelHeights[i1] = size.height;
		}
		let width = 0;
		let height = 0;
		let extents = 1 - this.scaleEndExtent + this.scaleStartExtent;
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			for (let i2: number = 0; i2 < labelHeights.length; i2++) {
				height = Math.max(height, labelHeights[i2]);
			}
			for (let i3: number = 0; i3 < labelWidths.length; i3++) {
				width += labelWidths[i3];
			}
			if (labelWidths.length > 0) {
				width += labelWidths[0] / 2;
			}
			if (labelWidths.length > 1) {
				width += labelWidths[labelWidths.length - 1] / 2;
			}
			if (labelWidths.length > 0) {
				width += (labelWidths.length - 1) * 5;
			}
			if (extents > 0) {
				width = width / Math.abs(1 - extents);
			}
		} else {
			for (let i4: number = 0; i4 < labelWidths.length; i4++) {
				width = Math.max(width, labelWidths[i4]);
			}
			for (let i5: number = 0; i5 < labelHeights.length; i5++) {
				height += labelHeights[i5];
			}
			if (labelHeights.length > 0) {
				height -= labelHeights[0] / 2;
			}
			if (labelHeights.length > 1) {
				height -= labelHeights[labelHeights.length - 1] / 2;
			}
			if (extents > 0) {
				height = height / Math.abs(1 - extents);
			}
			if (labelHeights.length > 0) {
				height += (labelHeights.length - 1) * 5;
			}
		}
		return new Size(1, width, height);
	}
	private prepareLabels(): void {
		let frame = this.nextFrame;
		let scaleFrame = frame.scaleFrame;
		let scaler = this.scaler;
		let interval = this.interval;
		let labelInterval = this.labelInterval;
		let minorTickCount = this.minorTickCount;
		if (isNaN_(interval)) {
			interval = (this.actualMaximumValue - this.actualMinimumValue) / 10;
		}
		if (isNaN_(labelInterval)) {
			labelInterval = interval;
		}
		if (labelInterval == 0) {
			labelInterval = this.actualMaximumValue - this.actualMinimumValue;
		}
		let labels: List$1<Tuple$2<number, number>> = new List$1<Tuple$2<number, number>>((<any>Tuple$2).$type.specialize(Number_$type, Number_$type), 0);
		if (labelInterval > 0) {
			let initial: number = this.labelsPostInitial + this.actualMinimumValue;
			let terminal: number = this.actualMaximumValue - this.labelsPreTerminal;
			let maximumTicks: number = 100000;
			let minimumInterval: number = Math.abs(terminal - initial) / maximumTicks;
			if (labelInterval >= minimumInterval) {
				for (let i = initial; i <= terminal || this.valueCloseEnough(i, terminal, labelInterval); i = i + labelInterval) {
					labels.add(new Tuple$2<number, number>(Number_$type, Number_$type, i, scaler.scale(i)));
				}
			}
		}
		if (scaleFrame.labels.length != labels.count) {
			scaleFrame.labelValues = <number[]>new Array(labels.count);
			scaleFrame.labels = <string[]>new Array(labels.count);
			scaleFrame.labelWidths = <number[]>new Array(labels.count);
			scaleFrame.labelHeights = <number[]>new Array(labels.count);
			scaleFrame.labelXOffsets = <number[]>new Array(labels.count);
			scaleFrame.labelYOffsets = <number[]>new Array(labels.count);
		}
		scaleFrame.labelExtent = this.labelExtent;
		let args = new FormatLinearGraphLabelEventArgs();
		args.actualMinimumValue = this.actualMinimumValue;
		args.actualMaximumValue = this.actualMaximumValue;
		let alignArgs = new AlignLinearGraphLabelEventArgs();
		alignArgs.actualMinimumValue = this.actualMinimumValue;
		alignArgs.actualMaximumValue = this.actualMaximumValue;
		for (let i1 = 0; i1 < labels.count; i1++) {
			let value = labels._inner[i1].item1;
			if (this.formatLabel == null) {
				value = (Math.round(value * 100) / 100);
			}
			let label = value.toString();
			args.value = value;
			alignArgs.value = value;
			args.label = label;
			if (this.formatLabel != null) {
				this.formatLabel(this, args);
			}
			label = args.label;
			alignArgs.label = label;
			let size = this.view.getLabelSize(((() => {
				let $ret = new TextBlock();
				$ret.text = label;
				return $ret;
			})()));
			alignArgs.width = size.width;
			alignArgs.height = size.height;
			if (this.orientation == LinearScaleOrientation.Horizontal) {
				alignArgs.offsetX = -1 * (size.width / 2);
				alignArgs.offsetY = -1 * (size.height);
			} else {
				alignArgs.offsetX = -1 * size.width;
				alignArgs.offsetY = -1 * (size.height / 2);
			}
			if (this.alignLabel != null) {
				this.alignLabel(this, alignArgs);
			}
			scaleFrame.labelWidths[i1] = alignArgs.width;
			scaleFrame.labelHeights[i1] = alignArgs.height;
			scaleFrame.labelXOffsets[i1] = alignArgs.offsetX;
			;
			scaleFrame.labelYOffsets[i1] = alignArgs.offsetY;
			scaleFrame.labels[i1] = label;
			scaleFrame.labelValues[i1] = labels._inner[i1].item2;
		}
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
	private prepareBacking(): void {
		let frame = this.nextFrame;
		let f = frame.backingFrame;
		f.brush = this.backingBrush;
		f.outline = this.backingOutline;
		f.strokeThickness = this.backingStrokeThickness;
		f.innerExtent = this.backingInnerExtent;
		f.outerExtent = this.backingOuterExtent;
	}
	private prepareTargetValue(): void {
		let frame = this.nextFrame;
		let f = frame.needleFrame;
		let scaler = this.scaler;
		f.startInnerExtent = this.targetValueInnerExtent;
		f.endInnerExtent = this.targetValueInnerExtent;
		f.startOuterExtent = this.targetValueOuterExtent;
		f.endOuterExtent = this.targetValueOuterExtent;
		f.brush = this.targetValueBrush;
		f.outline = this.targetValueOutline;
		f.strokeThickness = this.targetValueStrokeThickness;
		if (isNaN_(this.targetValue)) {
			return;
		}
		let value = scaler.scale(this.targetValue);
		let halfBreadth = <number>(this.targetValueBreadth / 2);
		f.startValue = value - halfBreadth;
		f.endValue = value + halfBreadth;
	}
	private prepareValue(): void {
		let frame = <BulletGraphScaleFrame>this.nextFrame.scaleFrame;
		let scaler = this.scaler;
		let value = this.value;
		if (isNaN_(value)) {
			return;
		}
		let startValue = this.actualMinimumValue;
		if (isNaN_(startValue)) {
			startValue = this.actualMinimumValue;
		}
		let endValue: number = this.value;
		let rangeFrame: LinearGraphRectFrame = new LinearGraphRectFrame();
		rangeFrame.brush = this.valueBrush;
		rangeFrame.outline = this.valueOutline;
		rangeFrame.strokeThickness = this.valueStrokeThickness;
		rangeFrame.startValue = scaler.scale(startValue);
		rangeFrame.endValue = scaler.scale(endValue);
		rangeFrame.startInnerExtent = this.valueInnerExtent;
		rangeFrame.endInnerExtent = this.valueInnerExtent;
		rangeFrame.startOuterExtent = this.valueOuterExtent;
		rangeFrame.endOuterExtent = this.valueOuterExtent;
		frame.actualValue = rangeFrame;
	}
	getBrushByIndex(index: number, brushes: BrushCollection): Brush {
		if (brushes != null && brushes.count > 0) {
			return brushes.item(index % brushes.count);
		} else {
			return null;
		}
	}
	private renderTicks(frame: LinearGraphFrame): void {
		let viewport = this.scaleViewport;
		let scaleFrame = frame.scaleFrame;
		let ticks = this.ticks;
		let scaleTicks = scaleFrame.ticks;
		let tickStartExtent = scaleFrame.tickStartExtent;
		let tickEndExtent = scaleFrame.tickEndExtent;
		let tickBrush = scaleFrame.tickBrush;
		let tickStrokeThickness = scaleFrame.tickStrokeThickness;
		let minorTicks = this.minorTicks;
		let scaleMinorTicks = scaleFrame.minorTicks;
		let minorTickStartExtent = scaleFrame.minorTickStartExtent;
		let minorTickEndExtent = scaleFrame.minorTickEndExtent;
		let minorTickBrush = scaleFrame.minorTickBrush;
		let minorTickStrokeThickness = scaleFrame.minorTickStrokeThickness;
		ticks.deferDisactivate = true;
		for (let i = 0; i < this._displayedTicks.count; i++) {
			ticks.push(this._displayedTicks._inner[i]);
		}
		this._displayedTicks.clear();
		let breadth = this.scaleBreadth();
		let length = this.viewportLength();
		for (let i1 = 0; i1 < scaleTicks.length; i1++) {
			let tx1: number, ty1: number, tx2: number, ty2: number;
			if (this.orientation == LinearScaleOrientation.Vertical) {
				tx1 = viewport.left + breadth * tickStartExtent;
				ty1 = length - scaleTicks[i1];
				tx2 = viewport.left + breadth * tickEndExtent;
				ty2 = ty1;
			} else {
				tx1 = viewport.left + scaleTicks[i1];
				ty1 = breadth * (1 - tickStartExtent);
				tx2 = tx1;
				ty2 = breadth * (1 - tickEndExtent);
			}
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
		for (let i2 = 0; i2 < scaleMinorTicks.length; i2++) {
			let tx11: number, ty11: number, tx21: number, ty21: number;
			if (this.orientation == LinearScaleOrientation.Vertical) {
				tx11 = viewport.left + breadth * minorTickStartExtent;
				ty11 = length - scaleMinorTicks[i2];
				tx21 = viewport.left + breadth * minorTickEndExtent;
				ty21 = ty11;
			} else {
				tx11 = scaleMinorTicks[i2];
				ty11 = breadth * (1 - minorTickStartExtent);
				tx21 = tx11;
				ty21 = breadth * (1 - minorTickEndExtent);
			}
			let tick1 = ticks.pop();
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
			this._displayedTicks.add(tick1);
		}
		ticks.deferDisactivate = false;
	}
	private renderLabels(frame: LinearGraphFrame): void {
		let scaleViewport = this.scaleViewport;
		let scaleFrame = frame.scaleFrame;
		let labelValues = scaleFrame.labelValues;
		let labelStrings = scaleFrame.labels;
		let labelXOffsets = scaleFrame.labelXOffsets;
		let labelYOffsets = scaleFrame.labelYOffsets;
		let labelWidths = scaleFrame.labelWidths;
		let labelHeights = scaleFrame.labelHeights;
		let labelExtent = scaleFrame.labelExtent;
		let labels = this.labels;
		labels.deferDisactivate = true;
		for (let i = 0; i < this._displayedLabels.count; i++) {
			labels.push(this._displayedLabels._inner[i]);
		}
		this._displayedLabels.clear();
		let fontBrush = scaleFrame.fontBrush;
		let breadth = this.viewportBreadth();
		let length = this.viewportLength();
		for (let i1 = 0; i1 < labelStrings.length; i1++) {
			let lx: number, ly: number;
			if (this.orientation == LinearScaleOrientation.Vertical) {
				lx = scaleViewport.left + breadth * labelExtent;
				ly = scaleViewport.top + length - labelValues[i1];
			} else {
				lx = scaleViewport.left + labelValues[i1];
				ly = scaleViewport.top + breadth * (1 - labelExtent);
			}
			let tb = labels.pop();
			tb.text = labelStrings[i1];
			this.view.setTextBrush(tb, fontBrush);
			let labelWidth = labelWidths[i1];
			let labelHeight = labelHeights[i1];
			let xOffset = labelXOffsets[i1];
			let yOffset = labelYOffsets[i1];
			this.view.positionLabel(tb, lx + xOffset, ly + yOffset);
			this._displayedLabels.add(tb);
		}
		labels.deferDisactivate = false;
	}
	private renderScale(frame: LinearGraphFrame): void {
		let scaleFrame = frame.scaleFrame;
		let ranges = this.rangeShapes;
		ranges.deferDisactivate = true;
		for (let i = 0; i < this._displayedRanges.count; i++) {
			ranges.push(this._displayedRanges._inner[i]);
		}
		this._displayedRanges.clear();
		let breadth = this.scaleBreadth();
		let length = this.viewportLength();
		let scaleStartPoint = this.scaleStartPoint();
		let scalePath = this.view.getScalePath();
		scalePath.data = scaleFrame.getPathGeometry(scaleStartPoint, breadth, length, this.orientation);
		for (let i1 = 0; i1 < scaleFrame.ranges.count; i1++) {
			let range = scaleFrame.ranges._inner[i1];
			let currRange = ranges.pop();
			currRange.data = range.getPathGeometry(scaleStartPoint, breadth, length, this.orientation);
			currRange._fill = range.brush;
			currRange._stroke = range.outline;
			currRange.strokeThickness = range.strokeThickness;
			this._displayedRanges.add(currRange);
		}
		this.view.setRangeRenderOrder(this._displayedRanges);
		ranges.deferDisactivate = false;
		let scaleBackgroundPath = this.view.getScaleBackgroundPath();
		scaleBackgroundPath.data = scaleFrame.scaleBackgroundFrame.getPathGeometry(scaleStartPoint, breadth, length, this.orientation);
		scaleBackgroundPath._fill = scaleFrame.scaleBackgroundFrame.brush;
		scaleBackgroundPath._stroke = scaleFrame.scaleBackgroundFrame.outline;
		scaleBackgroundPath.strokeThickness = scaleFrame.scaleBackgroundFrame.strokeThickness;
	}
	private renderBacking(frame: LinearGraphFrame): void {
		let viewport = this.backingViewport;
		let backingPath = this.view.getBackingPath();
		let backingFrame = frame.backingFrame;
		let breadth: number = this.orientation == LinearScaleOrientation.Horizontal ? viewport.height : viewport.width;
		let length: number = this.orientation == LinearScaleOrientation.Horizontal ? viewport.width : viewport.height;
		let geo = backingFrame.getPathGeometry(breadth, length, this.orientation);
		backingPath.data = geo;
		backingPath._fill = backingFrame.brush;
		backingPath._stroke = backingFrame.outline;
		backingPath.strokeThickness = backingFrame.strokeThickness;
	}
	private renderTargetValue(frame: LinearGraphFrame): void {
		let targetValuePath = this.view.getTargetValuePath();
		if (isNaN_(this.targetValue) || this.targetValue < this.actualMinimumValue || this.targetValue > this.actualMaximumValue) {
			targetValuePath.data = null;
			return;
		}
		let needleFrame = frame.needleFrame;
		let breadth = this.scaleBreadth();
		let length = this.viewportLength();
		let scaleStartPoint = this.scaleStartPoint();
		let geo = needleFrame.getPathGeometry(scaleStartPoint, breadth, length, this.orientation);
		targetValuePath.data = geo;
		targetValuePath._fill = needleFrame.brush;
		targetValuePath._stroke = needleFrame.outline;
		targetValuePath.strokeThickness = needleFrame.strokeThickness;
	}
	private renderValue(frame: LinearGraphFrame): void {
		let valuePath: Path = this.view.getValuePath();
		let value = this.value;
		if (value <= this.actualMinimumValue || value > this.actualMaximumValue || isNaN_(value)) {
			valuePath.data = null;
			return;
		}
		let scaleFrame = <BulletGraphScaleFrame>frame.scaleFrame;
		let breadth = this.scaleBreadth();
		let length = this.viewportLength();
		let scaleStartPoint = this.scaleStartPoint();
		let actualValue = scaleFrame.actualValue;
		valuePath.data = actualValue.getPathGeometry(scaleStartPoint, breadth, length, this.orientation);
		valuePath._fill = actualValue.brush;
		valuePath._stroke = actualValue.outline;
		valuePath.strokeThickness = actualValue.strokeThickness;
	}
	private onViewportChanged(oldViewport: Rect, newViewport: Rect): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	private onLabelsViewportChanged(oldViewport: Rect, newViewport: Rect): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	private scaleBreadth(): number {
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			return this.mergeViewPorts ? this.viewport.height : this.scaleViewport.height;
		}
		return this.mergeViewPorts ? this.viewport.width : this.scaleViewport.width;
	}
	private scaleLength(): number {
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			return this.viewport.width * (this.scaleEndExtent - this.scaleStartExtent);
		}
		return this.viewport.height * (this.scaleEndExtent - this.scaleStartExtent);
	}
	private viewportBreadth(): number {
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			return this.viewport.height;
		}
		return this.viewport.width;
	}
	private viewportLength(): number {
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			return this.viewport.width;
		}
		return this.viewport.height;
	}
	private scaleStart(): number {
		let scaleStartExtent = this.scaleStartExtent;
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			if (this.isScaleInverted) {
				scaleStartExtent = 1 - this.scaleEndExtent;
			}
			return this.viewport.left + this.viewport.width * scaleStartExtent;
		}
		if (this.isScaleInverted) {
			scaleStartExtent = 1 - this.scaleEndExtent;
		}
		return this.viewport.top + this.viewport.height * scaleStartExtent;
	}
	private scaleStartPoint(): Point {
		let leftOffset = this.scaleViewport.left;
		if (this.mergeViewPorts) {
			leftOffset = 0;
		}
		let scaleStartExtent = this.scaleStartExtent;
		if (this.orientation == LinearScaleOrientation.Horizontal) {
			if (this.isScaleInverted) {
				scaleStartExtent = 1 - this.scaleEndExtent;
			}
			return <Point>{ $type: Point_$type, x: leftOffset + this.scaleViewport.width * scaleStartExtent, y: this.scaleViewport.top };
		}
		if (!this.isScaleInverted) {
			scaleStartExtent = 1 - this.scaleEndExtent;
		}
		return <Point>{ $type: Point_$type, x: leftOffset, y: this.scaleViewport.top + this.scaleViewport.height * scaleStartExtent };
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case XamBulletGraph.valueBrushPropertyName:

			case XamBulletGraph.targetValueBrushPropertyName:

			case XamBulletGraph.targetValueOutlinePropertyName:

			case XamBulletGraph.backingBrushPropertyName:

			case XamBulletGraph.backingOutlinePropertyName:

			case XamBulletGraph.valueOutlinePropertyName:

			case XamBulletGraph.tickBrushPropertyName:

			case XamBulletGraph.minorTickBrushPropertyName:
			this.view.onBrushChanged(propertyName, oldValue, newValue);
			break;

			case XamBulletGraph.rangeBrushesPropertyName:
			this.view.onRangeBrushesChanged(<BrushCollection>oldValue, <BrushCollection>newValue);
			break;

			case XamBulletGraph.rangeOutlinesPropertyName:
			this.view.onRangeOutlinesChanged(<BrushCollection>oldValue, <BrushCollection>newValue);
			break;

		}

		switch (propertyName) {
			case XamBulletGraph.transitionDurationPropertyName:
			this.animator.intervalMilliseconds = this.transitionDuration;
			this.view.scheduleArrange();
			break;

			case XamBulletGraph.transitionProgressPropertyName:
			if (this.transitionProgress >= 1) {
				this.animator.stop();
				let swap = this.nextFrame;
				this.nextFrame = this.previousFrame;
				this.previousFrame = swap;
				this.prepareLabels();
				this.prepareTargetValue();
				this.prepareValue();
				this.prepareScale();
				this.prepareBacking();
				this.renderBacking(this.nextFrame);
				this.renderScale(this.nextFrame);
				this.renderTargetValue(this.nextFrame);
				this.renderValue(this.nextFrame);
				this.renderTicks(this.nextFrame);
				this.renderLabels(this.nextFrame);
			}
			this.currentFrame.interpolate(this.transitionProgress, this.previousFrame, this.nextFrame);
			this.renderBacking(this.currentFrame);
			this.renderScale(this.currentFrame);
			this.renderTargetValue(this.currentFrame);
			this.renderValue(this.currentFrame);
			this.renderTicks(this.currentFrame);
			this.renderLabels(this.currentFrame);
			this.view.arrangeComplete();
			break;

			case XamBulletGraph.valuePropertyName:

			case XamBulletGraph.valueInnerExtentPropertyName:

			case XamBulletGraph.valueOuterExtentPropertyName:

			case XamBulletGraph.valueBrushPropertyName:

			case XamBulletGraph.valueOutlinePropertyName:

			case XamBulletGraph.valueStrokeThicknessPropertyName:

			case XamBulletGraph.targetValueBrushPropertyName:

			case XamBulletGraph.targetValueOutlinePropertyName:

			case XamBulletGraph.targetValueStrokeThicknessPropertyName:

			case XamBulletGraph.targetValueBreadthPropertyName:

			case XamBulletGraph.targetValueInnerExtentPropertyName:

			case XamBulletGraph.targetValueOuterExtentPropertyName:

			case XamBulletGraph.backingBrushPropertyName:

			case XamBulletGraph.backingOutlinePropertyName:

			case XamBulletGraph.tickBrushPropertyName:

			case XamBulletGraph.minorTickBrushPropertyName:

			case XamBulletGraph.rangeBrushesPropertyName:

			case XamBulletGraph.rangeOutlinesPropertyName:

			case XamBulletGraph.mergeViewPortsPropertyName:

			case XamBulletGraph.targetValuePropertyName:

			case XamBulletGraph.targetValueNamePropertyName:

			case XamBulletGraph.rangeInnerExtentPropertyName:

			case XamBulletGraph.rangeOuterExtentPropertyName:

			case XamBulletGraph.backingStrokeThicknessPropertyName:

			case XamBulletGraph.backingInnerExtentPropertyName:

			case XamBulletGraph.backingOuterExtentPropertyName:

			case XamBulletGraph.intervalPropertyName:

			case XamBulletGraph.labelIntervalPropertyName:

			case XamBulletGraph.labelExtentPropertyName:

			case XamBulletGraph.labelsPostInitialPropertyName:

			case XamBulletGraph.labelsPreTerminalPropertyName:

			case XamBulletGraph.ticksPostInitialPropertyName:

			case XamBulletGraph.ticksPreTerminalPropertyName:

			case XamBulletGraph.tickStartExtentPropertyName:

			case XamBulletGraph.tickEndExtentPropertyName:

			case XamBulletGraph.tickStrokeThicknessPropertyName:

			case XamBulletGraph.minorTickStartExtentPropertyName:

			case XamBulletGraph.minorTickEndExtentPropertyName:

			case XamBulletGraph.minorTickCountPropertyName:

			case XamBulletGraph.minorTickStrokeThicknessPropertyName:

			case XamBulletGraph.scaleBackgroundBrushName:

			case XamBulletGraph.scaleBackgroundOutlineName:

			case XamBulletGraph.scaleBackgroundThicknessName:
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamBulletGraph.rangesPropertyName:
			let oldValues = <LinearGraphRangeCollection>oldValue;
			let newValues = <LinearGraphRangeCollection>newValue;
			if (oldValues != null) {
				let $t = (<INotifyCollectionChanged>oldValues);
				$t.collectionChanged = delegateRemove($t.collectionChanged, runOn(this, this.ranges_CollectionChanged));
			}
			if (newValues != null) {
				let $t1 = (<INotifyCollectionChanged>newValues);
				$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this.ranges_CollectionChanged));
			}
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamBulletGraph.orientationPropertyName:

			case XamBulletGraph.isScaleInvertedPropertyName:

			case XamBulletGraph.minimumValuePropertyName:

			case XamBulletGraph.maximumValuePropertyName:

			case XamBulletGraph.scaleEndExtentPropertyName:

			case XamBulletGraph.scaleStartExtentPropertyName:
			this.actualMinimumValue = Math.min(this.minimumValue, this.maximumValue);
			this.actualMaximumValue = Math.max(this.minimumValue, this.maximumValue);
			let scaleStart = this.scaleStart();
			this.scaler = new LinearGraphScaler(this.actualMinimumValue, this.actualMaximumValue, scaleStart, scaleStart + this.scaleLength(), this.isScaleInverted);
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamBulletGraph.fontBrushPropertyName:

			case XamBulletGraph.fontPropertyName:
			this.view.updateStyle();
			this.isDirty = true;
			this.view.scheduleArrange();
			break;

			case XamBulletGraph.pixelScalingRatioPropertyName:
			if (isNaN_(DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio))) {
				this.actualPixelScalingRatio = 1;
			} else {
				this.actualPixelScalingRatio = DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio);
			}
			break;

			case XamBulletGraph.actualPixelScalingRatioPropertyName:
			this.view.pixelScalingRatioChanged();
			break;

		}

	}
	private ranges_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let item of fromEn<XamLinearGraphRange>(e.oldItems)) {
				item.propertyChanged = delegateRemove(item.propertyChanged, runOn(this, this.range_PropertyChanged));
			}
		}
		if (e.newItems != null) {
			for (let item1 of fromEn<XamLinearGraphRange>(e.newItems)) {
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
	private _isDirty: boolean = false;
	protected get isDirty(): boolean {
		return this._isDirty;
	}
	protected set isDirty(value: boolean) {
		this._isDirty = value;
	}
	refresh(): void {
		this.isDirty = true;
		this.view.scheduleArrange();
	}
	getFontInfo(): FontInfo {
		return FontUtil.toFontInfo(this.view.container, this.font);
	}
}


