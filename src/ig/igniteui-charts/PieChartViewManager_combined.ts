/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, runOn, delegateCombine, Type, markType, PointUtil, EventArgs, typeCast, INotifyPropertyChanged, INotifyPropertyChanged_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IList$1, IList$1_$type, PropertyChangedEventArgs, IList, IList_$type, Number_$type, String_$type, enumGetBox, EnumUtil, Boolean_$type, delegateRemove, Delegate_$type, fromEnum, fromEn, ICollection, ICollection_$type, typeGetValue } from "igniteui-core/type";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type } from "igniteui-core/dom";
import { Rect } from "igniteui-core/Rect";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { EventProxy } from "igniteui-core/EventProxy";
import { FontInfo } from "igniteui-core/FontInfo";
import { PieChartStyleInfo } from "./PieChartStyleInfo";
import { BaseDOMEventProxy } from "igniteui-core/BaseDOMEventProxy";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { Brush } from "igniteui-core/Brush";
import { FontUtil } from "igniteui-core/FontUtil";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { Path } from "igniteui-core/Path";
import { Shape } from "igniteui-core/Shape";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { DOMEventProxy } from "igniteui-core/DOMEventProxy";
import { PieChartVisualData } from "./PieChartVisualData";
import { Style } from "igniteui-core/Style";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Control } from "igniteui-core/Control";
import { Line } from "igniteui-core/Line";
import { LabelsPosition, LabelsPosition_$type } from "./LabelsPosition";
import { TextBlock } from "igniteui-core/TextBlock";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { PathFigure } from "igniteui-core/PathFigure";
import { BezierSegment } from "igniteui-core/BezierSegment";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { List$1 } from "igniteui-core/List$1";
import { PathSegment } from "igniteui-core/PathSegment";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { LeaderLineType, LeaderLineType_$type } from "./LeaderLineType";
import { stringEmpty } from "igniteui-core/string";
import { ILegendOwner, ILegendOwner_$type } from "igniteui-core/ILegendOwner";
import { ILegendSeries, ILegendSeries_$type } from "igniteui-core/ILegendSeries";
import { ILegendTemplateProvider, ILegendTemplateProvider_$type } from "igniteui-core/ILegendTemplateProvider";
import { FastItemsSource } from "igniteui-core/FastItemsSource";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { UIElement } from "igniteui-core/UIElement";
import { OthersCategoryType, OthersCategoryType_$type } from "./OthersCategoryType";
import { IndexCollection } from "./IndexCollection";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { IChartLegend, IChartLegend_$type } from "igniteui-core/IChartLegend";
import { SweepDirection, SweepDirection_$type } from "igniteui-core/SweepDirection";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { SliceSelectionMode, SliceSelectionMode_$type } from "./SliceSelectionMode";
import { ObjectCollection } from "igniteui-core/ObjectCollection";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { FastItemsSourceEventArgs } from "igniteui-core/FastItemsSourceEventArgs";
import { Pool$1 } from "igniteui-core/Pool$1";
import { SelectedItemChangingEventArgs } from "./SelectedItemChangingEventArgs";
import { SelectedItemsChangingEventArgs } from "./SelectedItemsChangingEventArgs";
import { SelectedItemChangedEventArgs } from "./SelectedItemChangedEventArgs";
import { SelectedItemsChangedEventArgs } from "./SelectedItemsChangedEventArgs";
import { MathUtil } from "igniteui-core/MathUtil";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { DataContext } from "igniteui-core/DataContext";
import { Size } from "igniteui-core/Size";
import { ContentControl } from "igniteui-core/ContentControl";
import { IChartItemLegend } from "igniteui-core/IChartItemLegend";
import { PieSliceVisualData } from "./PieSliceVisualData";
import { RectData } from "igniteui-core/RectData";
import { MouseEventArgs } from "igniteui-core/MouseEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";
import { FastItemObjectColumn } from "igniteui-core/FastItemObjectColumn";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { LineSegment } from "igniteui-core/LineSegment";
import { EllipseGeometry } from "igniteui-core/EllipseGeometry";
import { PathSegmentCollection } from "igniteui-core/PathSegmentCollection";
import { PathFigureCollection } from "igniteui-core/PathFigureCollection";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { RectUtil } from "igniteui-core/RectUtil";
import { Geometry } from "igniteui-core/Geometry";
import { PrimitiveAppearanceData } from "igniteui-core/PrimitiveAppearanceData";
import { LabelAppearanceData } from "igniteui-core/LabelAppearanceData";
import { PointData } from "igniteui-core/PointData";
import { AppearanceHelper } from "igniteui-core/AppearanceHelper";
import { PathVisualData } from "igniteui-core/PathVisualData";
import { FillRule } from "igniteui-core/FillRule";
import { PieLegendTemplates } from "./PieLegendTemplates";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { Color } from "igniteui-core/Color";
import { MouseButtonEventArgs } from "igniteui-core/MouseButtonEventArgs";
import { TranslateTransform } from "igniteui-core/TranslateTransform";

/**
 * @hidden 
 */
export class PieChartViewManager extends Base {
	static $t: Type = markType(PieChartViewManager, 'PieChartViewManager');
	private _container: DomRenderer = null;
	get container(): DomRenderer {
		return this._container;
	}
	set container(value: DomRenderer) {
		this._container = value;
	}
	private _backgroundCanvas: DomWrapper = null;
	protected get backgroundCanvas(): DomWrapper {
		return this._backgroundCanvas;
	}
	protected set backgroundCanvas(value: DomWrapper) {
		this._backgroundCanvas = value;
	}
	private _overlayCanvas: DomWrapper = null;
	protected get overlayCanvas(): DomWrapper {
		return this._overlayCanvas;
	}
	protected set overlayCanvas(value: DomWrapper) {
		this._overlayCanvas = value;
	}
	private _mainCanvas: DomWrapper = null;
	protected get mainCanvas(): DomWrapper {
		return this._mainCanvas;
	}
	protected set mainCanvas(value: DomWrapper) {
		this._mainCanvas = value;
	}
	private _labelCanvas: DomWrapper = null;
	protected get labelCanvas(): DomWrapper {
		return this._labelCanvas;
	}
	protected set labelCanvas(value: DomWrapper) {
		this._labelCanvas = value;
	}
	private _containerWidth: number = 0;
	private _containerHeight: number = 0;
	private _currentPixelRatio: number = 1;
	private _viewport: Rect = null;
	protected get viewport(): Rect {
		return this._viewport;
	}
	protected set viewport(value: Rect) {
		this._viewport = value;
	}
	private _backgroundContext: RenderingContext = null;
	get backgroundContext(): RenderingContext {
		return this._backgroundContext;
	}
	set backgroundContext(value: RenderingContext) {
		this._backgroundContext = value;
	}
	private _mainContext: RenderingContext = null;
	get mainContext(): RenderingContext {
		return this._mainContext;
	}
	set mainContext(value: RenderingContext) {
		this._mainContext = value;
	}
	private _labelContext: RenderingContext = null;
	get labelContext(): RenderingContext {
		return this._labelContext;
	}
	set labelContext(value: RenderingContext) {
		this._labelContext = value;
	}
	private _overlayContext: RenderingContext = null;
	get overlayContext(): RenderingContext {
		return this._overlayContext;
	}
	set overlayContext(value: RenderingContext) {
		this._overlayContext = value;
	}
	private _owner: PieChartBaseView = null;
	constructor(owner: PieChartBaseView) {
		super();
		this._owner = owner;
	}
	notifyContainerResized(): void {
		let newWidth = this.container.rootWrapper.width();
		let newHeight = this.container.rootWrapper.height();
		this.onContainerResized(newWidth, newHeight);
	}
	onContainerResized(width: number, height: number): void {
		this.initializeScalingRatio();
		this.eventProxy.viewport = new Rect(0, 0, 0, width, height);
		let pixelRatio = this._owner.model.actualPixelScalingRatio;
		if (pixelRatio == this._currentPixelRatio && width == this._containerWidth && height == this._containerHeight) {
			return;
		}
		this._containerWidth = width;
		this._containerHeight = height;
		this._currentPixelRatio = pixelRatio;
		this._owner.resize();
	}
	onDetachedFromUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.backgroundCanvas, "");
		}
	}
	onAttachedToUI(): void {
		this.initializeScalingRatio();
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.backgroundCanvas, "");
		}
	}
	initializeScalingRatio(): void {
		let userRatio = this._owner.model.pixelScalingRatio;
		let actualRatio = this._owner.model.actualPixelScalingRatio;
		if (!isNaN_(userRatio) && userRatio != 0) {
			return;
		}
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
			this._owner.model.actualPixelScalingRatio = window.devicePixelRatio;
		}
	}
	ensureCorrectSize(width: number, height: number): void {
		let pixelRatio = this._owner.model.actualPixelScalingRatio;
		if (width != this._containerWidth || height != this._containerHeight || pixelRatio != this._currentPixelRatio) {
			this._containerWidth = width;
			this._containerHeight = height;
			this._currentPixelRatio = this._owner.model.actualPixelScalingRatio;
			this.resize();
		}
	}
	resize(): Rect {
		this.viewport = new Rect(0, 0, 0, this._containerWidth, this._containerHeight);
		let pixelWidth = this._containerWidth;
		let pixelHeight = this._containerHeight;
		let pixelScale = this._currentPixelRatio;
		if (pixelScale != 1) {
			pixelWidth = Math.round(this._containerWidth * pixelScale);
			pixelHeight = Math.round(this._containerHeight * pixelScale);
		}
		this.backgroundCanvas.setAttribute("width", pixelWidth.toString());
		this.backgroundCanvas.setAttribute("height", pixelHeight.toString());
		this.backgroundCanvas.setStyleProperty("width", this._containerWidth.toString() + "px");
		this.backgroundCanvas.setStyleProperty("height", this._containerHeight.toString() + "px");
		this.mainCanvas.setAttribute("width", pixelWidth.toString());
		this.mainCanvas.setAttribute("height", pixelHeight.toString());
		this.mainCanvas.setStyleProperty("width", this._containerWidth.toString() + "px");
		this.mainCanvas.setStyleProperty("height", this._containerHeight.toString() + "px");
		this.labelCanvas.setAttribute("width", pixelWidth.toString());
		this.labelCanvas.setAttribute("height", pixelHeight.toString());
		this.labelCanvas.setStyleProperty("width", this._containerWidth.toString() + "px");
		this.labelCanvas.setStyleProperty("height", this._containerHeight.toString() + "px");
		this.overlayCanvas.setAttribute("width", pixelWidth.toString());
		this.overlayCanvas.setAttribute("height", pixelHeight.toString());
		this.overlayCanvas.setStyleProperty("width", this._containerWidth.toString() + "px");
		this.overlayCanvas.setStyleProperty("height", this._containerHeight.toString() + "px");
		return this.viewport;
	}
	getOwnerFont(): FontInfo {
		return this._owner.styleInfo.font;
	}
	getContainerOffsets(): Point {
		let offset = DOMEventProxy.getOffset(this.container.rootWrapper);
		return <Point>{ $type: Point_$type, x: offset.left, y: offset.top };
	}
	queueWork(work: () => void): void {
		if (this.container != null) {
			this.container.setTimeout(<() => void>work, 0);
		} else {
			window.setTimeout(<() => void>work, 0);
		}
	}
	getDefaultStyle(): PieChartStyleInfo {
		let styleInfo: PieChartStyleInfo = new PieChartStyleInfo();
		let brushes: BrushCollection;
		let outlines: BrushCollection;
		let $ret = BrushUtil.getBrushCollection("chart", this.container, brushes, outlines);
		brushes = $ret.p2;
		outlines = $ret.p3;
		styleInfo.brushes = brushes;
		styleInfo.outlines = outlines;
		this.container.startCSSQuery();
		styleInfo.innerFontBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = this.container.getCssDefaultPropertyValue("ui-chart-innerlabels", "color");
			return $ret;
		})());
		styleInfo.outerFontBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = this.container.getCssDefaultPropertyValue("ui-chart-outerlabels", "color");
			return $ret;
		})());
		this.container.endCSSQuery();
		styleInfo.font = FontUtil.getFont(this.container);
		styleInfo.selectedOutlineThickness = DeviceUtils.toPixelUnits(6);
		styleInfo.selectedOutlineBrush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#00000033";
			return $ret;
		})());
		styleInfo.selectedOpacity = 1;
		return styleInfo;
	}
	setDefaultSliceBrushes(slicePath: Path): void {
		slicePath._stroke = ((() => {
			let $ret = new Brush();
			$ret.fill = "#000000";
			return $ret;
		})());
		slicePath._fill = ((() => {
			let $ret = new Brush();
			$ret.fill = "#222222";
			return $ret;
		})());
	}
	private _eventProxy: EventProxy = null;
	get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	set eventProxy(value: EventProxy) {
		this._eventProxy = value;
	}
	onContainerProvided(theContainer: any): void {
		if (theContainer == null) {
			if (this.eventProxy != null) {
				this.eventProxy.destroy();
			}
			this.container = null;
			this.backgroundCanvas = null;
			this.mainCanvas = null;
			this.labelCanvas = null;
			this.overlayCanvas = null;
			this.backgroundContext = null;
			this.mainContext = null;
			this.labelContext = null;
			this.overlayContext = null;
			this.eventProxy = null;
			return;
		}
		let container: DomRenderer = <DomRenderer><any>theContainer;
		this.container = container;
		this._owner.setDefaultBrushes();
		this._owner.updateCurrentFontHeight();
		this.container.rootWrapper.setStyleProperty("position", "relative");
		this.container.rootWrapper.addClass("ui-corner-all");
		this.container.rootWrapper.addClass("ui-widget-content");
		this.backgroundCanvas = this.container.createElement("canvas");
		this.backgroundCanvas.setStyleProperty("position", "absolute");
		this.backgroundCanvas.setStyleProperty("top", "0px");
		this.backgroundCanvas.setStyleProperty("left", "0px");
		this.mainCanvas = this.container.createElement("canvas");
		this.mainCanvas.setStyleProperty("position", "absolute");
		this.mainCanvas.setStyleProperty("top", "0px");
		this.mainCanvas.setStyleProperty("left", "0px");
		this.labelCanvas = this.container.createElement("canvas");
		this.labelCanvas.setStyleProperty("position", "absolute");
		this.labelCanvas.setStyleProperty("top", "0px");
		this.labelCanvas.setStyleProperty("left", "0px");
		this.overlayCanvas = this.container.createElement("canvas");
		this.overlayCanvas.setStyleProperty("position", "absolute");
		this.overlayCanvas.setStyleProperty("top", "0px");
		this.overlayCanvas.setStyleProperty("left", "0px");
		this.container.append(this.backgroundCanvas);
		this.container.append(this.mainCanvas);
		this.container.append(this.labelCanvas);
		this.container.append(this.overlayCanvas);
		this.backgroundContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.backgroundCanvas));
		this.mainContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.mainCanvas));
		this.labelContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.labelCanvas));
		this.overlayContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.overlayCanvas));
		this.eventProxy = new DOMEventProxy(this.overlayCanvas, this.container, false);
		let $t = this.eventProxy;
		$t.onMouseOver = delegateCombine($t.onMouseOver, runOn(this._owner, this._owner.canvasMouseMove));
		let $t1 = this.eventProxy;
		$t1.onMouseLeave = delegateCombine($t1.onMouseLeave, runOn(this._owner, this._owner.canvasMouseLeave));
		let $t2 = this.eventProxy;
		$t2.onMouseDown = delegateCombine($t2.onMouseDown, runOn(this._owner, this._owner.canvasMouseDown));
		let $t3 = this.eventProxy;
		$t3.onMouseUp = delegateCombine($t3.onMouseUp, runOn(this._owner, this._owner.canvasMouseUp));
		this.eventProxy.isInteractionDisabled = this._owner.model.isSurfaceInteractionDisabled;
		this.onContainerResized(this.container.rootWrapper.width(), this.container.rootWrapper.height());
	}
	addToContainer(_toolTipObject: DomWrapper): void {
		this.container.append(_toolTipObject);
	}
	onIsSurfaceInteractionDisabledChanged(newValue: boolean): void {
		if (this.eventProxy == null) {
			return;
		}
		this.eventProxy.isInteractionDisabled = newValue;
	}
	getContainer(): any {
		return this.container;
	}
	exportViewData(visualData: PieChartVisualData): void {
		visualData.width = this._containerWidth;
		visualData.height = this._containerHeight;
	}
	private _toolTipObject: DomWrapper = null;
	private _toolTipString: string = null;
	private _tooltipDisconnected: boolean = true;
	updateTooltipValue(p: any): void {
		this._toolTipString = null;
		this._toolTipObject = null;
		if (typeof p === 'string') {
			this._toolTipString = <string>p;
		} else {
			this._toolTipObject = <DomWrapper><any>p;
			if (this._toolTipObject != null) {
				this._toolTipObject.setStyleProperty("position", "absolute");
				this._toolTipObject.setStyleProperty("white-space", "nowrap");
				this._toolTipObject.setStyleProperty("top", "0");
				this._toolTipObject.setStyleProperty("left", "0");
				this._toolTipObject.setStyleProperty("z-index", "10000");
			}
		}
	}
	updateTooltipPosition(pos_: Point, context_: PieSliceDataContext): void {
		if (this._toolTipObject != null) {
			if (this._tooltipDisconnected) {
				this.addToContainer(this._toolTipObject);
				this._tooltipDisconnected = false;
			}
			(<any>context_).hideOthers = true;
			if ((<any>this)._toolTipObject.updateToolTip) { (<any>this)._toolTipObject.updateToolTip(context_); };
			this._toolTipObject.setOffset(pos_.x, pos_.y);
		}
	}
	hideTooltip(context: PieSliceDataContext): void {
		if (this._toolTipObject != null) {
			let context_ = context;
			if ((<any>this)._toolTipObject.hideToolTip) { (<any>this)._toolTipObject.hideToolTip(context_); };
		}
	}
	getStyleBackground(style_: Style): Brush {
		let actualBrush: Brush = null;
		let fillColor_: string = null;
		if (style_ != null) {
			if (style_.fill) { fillColor_ = style_.fill };
			if (fillColor_ != null) {
				actualBrush = Brush.create(fillColor_);
			}
		}
		return actualBrush;
	}
	getStyleOutline(style_: Style): Brush {
		let actualOutline: Brush = null;
		let outlineColor_: string = null;
		if (style_ != null) {
			if (style_.stroke) { outlineColor_ = style_.stroke };
			if (outlineColor_ != null) {
				actualOutline = Brush.create(outlineColor_);
			}
		}
		return actualOutline;
	}
	getStyleOutlineThickness(style_: Style): number {
		let actualOutlineThickness_: number = NaN;
		if (style_ != null) {
			if (style_.strokeThickness) { actualOutlineThickness_ = style_.strokeThickness };
		}
		return actualOutlineThickness_;
	}
	pixelScalingRatioChanged(): void {
	}
}

/**
 * @hidden 
 */
export class LabelClickEventArgs extends EventArgs {
	static $t: Type = markType(LabelClickEventArgs, 'LabelClickEventArgs', (<any>EventArgs).$type);
	constructor(slice: Slice, originalEvent: any) {
		super();
		this.slice = slice;
	}
	private _slice: Slice = null;
	get slice(): Slice {
		return this._slice;
	}
	set slice(value: Slice) {
		this._slice = value;
	}
	get item(): any {
		if (this.slice != null) {
			return this.slice.dataContext;
		} else {
			return null;
		}
	}
	get allowSliceClick(): boolean {
		return this._allowSliceClick;
	}
	set allowSliceClick(value: boolean) {
		this._allowSliceClick = value;
	}
	private _allowSliceClick: boolean = true;
}

/**
 * @hidden 
 */
export class SliceClickEventArgs extends EventArgs {
	static $t: Type = markType(SliceClickEventArgs, 'SliceClickEventArgs', (<any>EventArgs).$type);
	constructor(slice: Slice, originalEvent: any) {
		super();
		this.slice = slice;
		this.originalEvent = originalEvent;
		if (slice == null) {
			return;
		}
		this._isSelected = slice.isSelected;
		this._isExploded = slice.isExploded;
	}
	private _slice: Slice = null;
	get slice(): Slice {
		return this._slice;
	}
	set slice(value: Slice) {
		this._slice = value;
	}
	get isSelected(): boolean {
		return this._isSelected;
	}
	set isSelected(value: boolean) {
		this._isSelected = value;
		this.slice.owner.selectSlice(this.slice, value);
	}
	private _isSelected: boolean = false;
	get isExploded(): boolean {
		return this._isExploded;
	}
	set isExploded(value: boolean) {
		this._isExploded = value;
		this.slice.isExploded = value;
	}
	private _isExploded: boolean = false;
	get isOthersSlice(): boolean {
		return this.slice.isOthersSlice;
	}
	get dataContext(): any {
		if (this.slice != null) {
			return this.slice.dataContext;
		}
		return null;
	}
	private _originalEvent: any = null;
	get originalEvent(): any {
		return this._originalEvent;
	}
	set originalEvent(value: any) {
		this._originalEvent = value;
	}
}

/**
 * @hidden 
 */
export class PieLabel extends Control {
	static $t: Type = markType(PieLabel, 'PieLabel', (<any>Control).$type);
	constructor() {
		super();
	}
	private _slice: Slice = null;
	get slice(): Slice {
		return this._slice;
	}
	set slice(value: Slice) {
		this._slice = value;
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
	private _angle: number = 0;
	get angle(): number {
		return this._angle;
	}
	set angle(value: number) {
		this._angle = value;
	}
	private _label: any = null;
	get label(): any {
		return this._label;
	}
	set label(value: any) {
		this._label = value;
	}
	private _leaderLine: Line = null;
	get leaderLine(): Line {
		return this._leaderLine;
	}
	set leaderLine(value: Line) {
		this._leaderLine = value;
	}
	private _leaderLinePath: Path = null;
	get leaderLinePath(): Path {
		return this._leaderLinePath;
	}
	set leaderLinePath(value: Path) {
		this._leaderLinePath = value;
	}
	private _actualLabelPosition: LabelsPosition = <LabelsPosition>0;
	get actualLabelPosition(): LabelsPosition {
		return this._actualLabelPosition;
	}
	set actualLabelPosition(value: LabelsPosition) {
		this._actualLabelPosition = value;
	}
	createContent(view: PieChartBaseView): void {
		if (view.model.labelsPosition == LabelsPosition.OutsideEnd) {
			this.bounds = view.getLabelBounds(this);
			let textBlock = typeCast<TextBlock>((<any>TextBlock).$type, this.label);
			let sampleText = textBlock.text;
			view.model.renderSlices();
			let origin = this.slice.isExploded ? this.slice.explodedOrigin : this.slice.origin;
			let bounds = GeometryUtil.findRadialPoint(origin, this.angle, this.slice.radius + view.model.labelExtent);
			let containerWidth = view.viewport.width;
			if (view.getDesiredWidth(textBlock) + bounds.x > containerWidth && bounds.x < containerWidth) {
				while (sampleText.length > 0 && view.getDesiredWidth(textBlock) + bounds.x > containerWidth) {
					sampleText = sampleText.substr(0, sampleText.length - 1);
					textBlock.text = sampleText;
				}
				if (sampleText.length > 3) {
					sampleText = sampleText.substr(0, sampleText.length - 3);
					sampleText = sampleText + "...";
				} else {
					if (view.getDesiredWidth("...") < this.bounds.width) {
						sampleText = "...";
					} else {
						sampleText = stringEmpty();
					}
				}
			}
			let newLabel: TextBlock = new TextBlock();
			newLabel.text = sampleText;
			this.label = newLabel;
		}
	}
	updateCascadingLeaderLineStroke(): void {
	}
	updateLeaderLine(): void {
		this.leaderLine._visibility = this.slice.owner.leaderLineVisibility != Visibility.Visible ? this.slice.owner.leaderLineVisibility : this.slice.label._visibility;
		let endPoint: Point;
		let margin = this.slice.owner.leaderLineMargin;
		let startPoint = GeometryUtil.findRadialPoint(this.slice.getSliceOrigin(), this.angle, this.slice.radius);
		this.leaderLine.x1 = startPoint.x;
		this.leaderLine.y1 = startPoint.y;
		if (this.angle < 90 || this.angle >= 270) {
			endPoint = <Point>{ $type: Point_$type, x: this.bounds.left, y: (this.bounds.top + this.bounds.bottom) / 2 };
		} else {
			endPoint = <Point>{ $type: Point_$type, x: this.bounds.right, y: (this.bounds.top + this.bounds.bottom) / 2 };
		}
		if (margin > 0) {
			let lineLength: number = GeometryUtil.getSegmentLength(startPoint, endPoint);
			if (margin < lineLength) {
				endPoint = GeometryUtil.pointAtDistance(endPoint, startPoint, margin);
			} else {
				endPoint = startPoint;
			}
		}
		this.leaderLine.x2 = endPoint.x;
		this.leaderLine.y2 = endPoint.y;
	}
	updateLeaderLinePath(): void {
		this.leaderLinePath._visibility = this.slice.owner.leaderLineVisibility != Visibility.Visible ? this.slice.owner.leaderLineVisibility : this.slice.label._visibility;
		let sliceOrigin = this.slice.getSliceOrigin();
		let figure = <PathFigure>(<PathGeometry>this.leaderLinePath.data).figures._inner[0];
		let segment = (<BezierSegment>figure._segments._inner[0]);
		let margin: number = this.slice.owner.leaderLineMargin;
		let endPointY: number = (this.bounds.top + this.bounds.bottom) / 2;
		let startPoint: Point = GeometryUtil.findRadialPoint(sliceOrigin, this.angle, this.slice.radius);
		let cp1: Point = GeometryUtil.findRadialPoint(sliceOrigin, this.angle, this.slice.radius + this.slice.owner.labelExtent / 2);
		let cp2: Point;
		let actualEndPoint: Point;
		let endPoint: Point;
		let cpY: number = endPointY;
		if (this.angle < 90 && this.angle >= 0) {
			cp2 = <Point>{ $type: Point_$type, x: this.bounds.left - PieChartBase.leaderLinePathControlPointOffset, y: cpY };
			endPoint = <Point>{ $type: Point_$type, x: this.bounds.left, y: endPointY };
		} else if (this.angle < 180 && this.angle >= 90) {
			cp2 = <Point>{ $type: Point_$type, x: this.bounds.right + PieChartBase.leaderLinePathControlPointOffset, y: cpY };
			endPoint = <Point>{ $type: Point_$type, x: this.bounds.right, y: endPointY };
		} else if (this.angle < 270 && this.angle >= 180) {
			cp2 = <Point>{ $type: Point_$type, x: this.bounds.right + PieChartBase.leaderLinePathControlPointOffset, y: cpY };
			endPoint = <Point>{ $type: Point_$type, x: this.bounds.right, y: endPointY };
		} else {
			cp2 = <Point>{ $type: Point_$type, x: this.bounds.left - PieChartBase.leaderLinePathControlPointOffset, y: cpY };
			endPoint = <Point>{ $type: Point_$type, x: this.bounds.left, y: endPointY };
		}
		if (margin > 0) {
			let lineLength: number = GeometryUtil.getSegmentLength(startPoint, endPoint);
			if (margin < lineLength) {
				actualEndPoint = GeometryUtil.pointAtDistance(endPoint, startPoint, margin);
				let deltaX1 = cp1.x - startPoint.x;
				let deltaY1 = cp1.y - startPoint.y;
				cp1 = GeometryUtil.pointAtDistance(cp1, startPoint, margin);
				let deltaX2 = cp1.x - startPoint.x;
				let deltaY2 = cp1.y - startPoint.y;
				if ((deltaX1 > 0 && deltaX2 < 0) || (deltaX1 < 0 && deltaX2 > 0) || (deltaY1 > 0 && deltaY2 < 0) || (deltaY1 < 0 && deltaY2 > 0)) {
					cp1 = startPoint;
				}
				cp2 = GeometryUtil.pointAtDistance(cp2, startPoint, margin);
				let scaleFactor = GeometryUtil.getSegmentLength(startPoint, actualEndPoint) / GeometryUtil.getSegmentLength(startPoint, endPoint);
				cp2.x = startPoint.x + (cp2.x - startPoint.x) * scaleFactor;
				cp2.y = startPoint.y + (cp2.y - startPoint.y) * scaleFactor;
			} else {
				this.leaderLinePath._visibility = Visibility.Collapsed;
				return;
			}
		} else {
			actualEndPoint = endPoint;
		}
		if (this.angle < 180 && this.angle >= 0) {
			if (cp1.y > cp2.y) {
				cp1.y = startPoint.y;
			}
		} else {
			if (cp1.y < cp2.y) {
				cp1.y = startPoint.y;
			}
		}
		figure._startPoint = startPoint;
		if (this.slice.owner.leaderLineType == LeaderLineType.Arc) {
			segment.point1 = startPoint;
		} else {
			segment.point1 = cp1;
		}
		segment.point2 = cp2;
		segment.point3 = actualEndPoint;
	}
}

/**
 * @hidden 
 */
export abstract class PieChartBase extends Control implements INotifyPropertyChanged, ILegendOwner, ILegendSeries, ILegendTemplateProvider {
	static $t: Type = markType(PieChartBase, 'PieChartBase', (<any>Control).$type, [INotifyPropertyChanged_$type, ILegendOwner_$type, ILegendSeries_$type, ILegendTemplateProvider_$type]);
	createView(): PieChartBaseView {
		return new PieChartBaseView(this);
	}
	onViewCreated(view: PieChartBaseView): void {
		this.view = <PieChartBaseView>view;
	}
	private _view: PieChartBaseView = null;
	get view(): PieChartBaseView {
		return this._view;
	}
	set view(value: PieChartBaseView) {
		this._view = value;
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
	}
	constructor() {
		super();
		this.viewport = Rect.empty;
		let view: PieChartBaseView = this.createView();
		this.onViewCreated(view);
		view.onInit();
		this.defaultStyleKey = (<any>PieChartBase).$type;
		this.valueIndices = new List$1<number>(Number_$type, 0);
		this.othersValueIndices = new List$1<number>(Number_$type, 0);
		this.others = new List$1<any>((<any>Base).$type, 0);
		this._propertyUpdatedOverride = (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue);
		this._brushesChangedOverride = (o: any, e: NotifyCollectionChangedEventArgs) => {
			this.renderSlices();
			this.renderLegendItems();
		};
		this._explodedIndicesChangedOverride = (o: any, e: NotifyCollectionChangedEventArgs) => {
			if (this.allowSliceExplosion) {
				this.prepareSlices();
				this.prepareLabels();
				this.renderSlices();
				this.renderLabels();
			}
		};
		this._selectedIndicesChangedOverride = (o: any, e: NotifyCollectionChangedEventArgs) => this.selectedIndicesChangedOverride(e);
		this._selectedItemsChangedOverride = (o: any, e: NotifyCollectionChangedEventArgs) => this.onSelectedItemsChangedOverride(e);
		this.fastItemsSource_Event = (o: any, e: FastItemsSourceEventArgs) => this.dataUpdatedOverride(e.action, e.position, e.count, e.propertyName);
		this.propertyUpdated = delegateCombine(this.propertyUpdated, this._propertyUpdatedOverride);
		let $t = this.selectedSlices;
		$t.collectionChanged = delegateCombine($t.collectionChanged, this._selectedIndicesChangedOverride);
		this._selectedAttached = true;
		let $t1 = this.explodedSlices;
		$t1.collectionChanged = delegateCombine($t1.collectionChanged, this._explodedIndicesChangedOverride);
		this._explodedAttached = true;
		this.selectedItems = new ObjectCollection(0);
		let $t2 = this.selectedItems;
		$t2.collectionChanged = delegateCombine($t2.collectionChanged, this._selectedItemsChangedOverride);
		this.slices = ((() => {
			let $ret = new Pool$1<Slice>((<any>Slice).$type);
			$ret.create = runOn(this.view, this.view.sliceCreate);
			$ret.activate = runOn(this.view, this.view.sliceActivate);
			$ret.disactivate = runOn(this.view, this.view.sliceDisactivate);
			$ret.destroy = runOn(this.view, this.view.sliceDestroy);
			return $ret;
		})());
		this.labels = ((() => {
			let $ret = new Pool$1<PieLabel>((<any>PieLabel).$type);
			$ret.create = runOn(this.view, this.view.labelCreate);
			$ret.activate = runOn(this.view, this.view.labelActivate);
			$ret.disactivate = runOn(this.view, this.view.labelDisactivate);
			$ret.destroy = runOn(this.view, this.view.labelDestroy);
			return $ret;
		})());
		this.sliceSelector = new PieChartSliceSelector(this);
		FastItemObjectColumn.register();
	}
	private _brushesAttached: boolean = false;
	private _outlinesAttached: boolean = false;
	private _fastItemsSourceAttached: boolean = false;
	private _selectedAttached: boolean = false;
	private _explodedAttached: boolean = false;
	private _stopSelectedSlicesUpdate: boolean = false;
	private _stopSelectedItemsUpdate: boolean = false;
	private _stopSelectedItemDPCallback: boolean = false;
	private readonly _propertyUpdatedOverride: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	private readonly _brushesChangedOverride: (sender: any, e: NotifyCollectionChangedEventArgs) => void = null;
	private readonly _selectedIndicesChangedOverride: (sender: any, e: NotifyCollectionChangedEventArgs) => void = null;
	private readonly _explodedIndicesChangedOverride: (sender: any, e: NotifyCollectionChangedEventArgs) => void = null;
	private readonly _selectedItemsChangedOverride: (sender: any, e: NotifyCollectionChangedEventArgs) => void = null;
	private static readonly contentPresenterName: string = "ContentPresenter";
	private fastItemsSource_Event: (sender: any, e: FastItemsSourceEventArgs) => void = null;
	static readonly fastItemsSourcePropertyName: string = "FastItemsSource";
	static readonly fastItemsSourceProperty: DependencyProperty = DependencyProperty.register(PieChartBase.fastItemsSourcePropertyName, (<any>FastItemsSource).$type, (<any>PieChartBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.fastItemsSourcePropertyName, e.oldValue, e.newValue)));
	get fastItemsSource(): FastItemsSource {
		return <FastItemsSource>this.getValue(PieChartBase.fastItemsSourceProperty);
	}
	set fastItemsSource(value: FastItemsSource) {
		this.setValue(PieChartBase.fastItemsSourceProperty, value);
	}
	private _valueColumn: IFastItemColumn$1<number> = null;
	get valueColumn(): IFastItemColumn$1<number> {
		return this._valueColumn;
	}
	set valueColumn(value: IFastItemColumn$1<number>) {
		if (this._valueColumn != value) {
			let oldValueColumn: IFastItemColumn$1<number> = this._valueColumn;
			this._valueColumn = value;
			this.raisePropertyChanged(PieChartBase.valueColumnPropertyName, oldValueColumn, this._valueColumn);
		}
	}
	static readonly valueColumnPropertyName: string = "ValueColumn";
	private _totalSliceCount: number = 0;
	get totalSliceCount(): number {
		return this._totalSliceCount;
	}
	set totalSliceCount(value: number) {
		this._totalSliceCount = value;
	}
	private _othersTotal: number = 0;
	get othersTotal(): number {
		return this._othersTotal;
	}
	set othersTotal(value: number) {
		this._othersTotal = value;
	}
	private _total: number = 0;
	get total(): number {
		return this._total;
	}
	set total(value: number) {
		this._total = value;
	}
	private _valueIndices: List$1<number> = null;
	get valueIndices(): List$1<number> {
		return this._valueIndices;
	}
	set valueIndices(value: List$1<number>) {
		this._valueIndices = value;
	}
	private _othersValueIndices: List$1<number> = null;
	get othersValueIndices(): List$1<number> {
		return this._othersValueIndices;
	}
	set othersValueIndices(value: List$1<number>) {
		this._othersValueIndices = value;
	}
	private _others: List$1<any> = null;
	get others(): List$1<any> {
		return this._others;
	}
	set others(value: List$1<any>) {
		this._others = value;
	}
	private _actualStartAngle: number = 0;
	get actualStartAngle(): number {
		return this._actualStartAngle;
	}
	set actualStartAngle(value: number) {
		this._actualStartAngle = value;
	}
	private _legendItems: List$1<UIElement> = null;
	get legendItems(): List$1<UIElement> {
		return this._legendItems;
	}
	set legendItems(value: List$1<UIElement>) {
		this._legendItems = value;
	}
	get actualInnerExtent(): number {
		return Math.abs(this.innerExtent) > 1 ? this.innerExtent : this.innerExtent * 100;
	}
	static readonly leaderLinePathControlPointOffset: number = 30;
	private _sliceSelector: PieChartSliceSelector = null;
	get sliceSelector(): PieChartSliceSelector {
		return this._sliceSelector;
	}
	set sliceSelector(value: PieChartSliceSelector) {
		this._sliceSelector = value;
	}
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	static readonly itemsSourceProperty: DependencyProperty = DependencyProperty.register(PieChartBase.itemsSourcePropertyName, IEnumerable_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.itemsSourcePropertyName, e.oldValue, e.newValue)));
	get itemsSource(): IEnumerable {
		return <IEnumerable><any>this.getValue(PieChartBase.itemsSourceProperty);
	}
	set itemsSource(value: IEnumerable) {
		this.setValue(PieChartBase.itemsSourceProperty, value);
	}
	static readonly innerExtentPropertyName: string = "InnerExtent";
	static readonly innerExtentProperty: DependencyProperty = DependencyProperty.register(PieChartBase.innerExtentPropertyName, Number_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.innerExtentPropertyName, e.oldValue, e.newValue)));
	get innerExtent(): number {
		return <number>this.getValue(PieChartBase.innerExtentProperty);
	}
	set innerExtent(value: number) {
		let coercedValue: number = value;
		if (isNaN_(value) || isInfinity(value)) {
			coercedValue = 0;
		}
		if (value < 0) {
			coercedValue = 0;
		}
		if (value > 100) {
			coercedValue = 100;
		}
		this.setValue(PieChartBase.innerExtentProperty, coercedValue);
	}
	static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(PieChartBase.valueMemberPathPropertyName, String_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	get valueMemberPath(): string {
		return <string>this.getValue(PieChartBase.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(PieChartBase.valueMemberPathProperty, value);
	}
	static readonly labelMemberPathPropertyName: string = "LabelMemberPath";
	static readonly labelMemberPathProperty: DependencyProperty = DependencyProperty.register(PieChartBase.labelMemberPathPropertyName, String_$type, (<any>PieChartBase).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.labelMemberPathPropertyName, e.oldValue, e.newValue)));
	get labelMemberPath(): string {
		return <string>this.getValue(PieChartBase.labelMemberPathProperty);
	}
	set labelMemberPath(value: string) {
		this.setValue(PieChartBase.labelMemberPathProperty, value);
	}
	static readonly legendLabelMemberPathPropertyName: string = "LegendLabelMemberPath";
	static readonly legendLabelMemberPathProperty: DependencyProperty = DependencyProperty.register(PieChartBase.legendLabelMemberPathPropertyName, String_$type, (<any>PieChartBase).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<PieChartBase>((<any>PieChartBase).$type, o)).raisePropertyChanged(PieChartBase.legendLabelMemberPathPropertyName, e.oldValue, e.newValue)));
	get legendLabelMemberPath(): string {
		return <string>this.getValue(PieChartBase.legendLabelMemberPathProperty);
	}
	set legendLabelMemberPath(value: string) {
		this.setValue(PieChartBase.legendLabelMemberPathProperty, value);
	}
	static readonly labelColumnPropertyName: string = "LabelColumn";
	private _labelColumn: IFastItemColumn$1<any> = null;
	get labelColumn(): IFastItemColumn$1<any> {
		return this._labelColumn;
	}
	set labelColumn(value: IFastItemColumn$1<any>) {
		if (this._labelColumn != value) {
			let oldColumn: IFastItemColumn$1<any> = this.labelColumn;
			this._labelColumn = value;
			this.raisePropertyChanged(PieChartBase.labelColumnPropertyName, oldColumn, this.labelColumn);
		}
	}
	static readonly legendLabelColumnPropertyName: string = "LegendLabelColumn";
	private _legendLabelColumn: IFastItemColumn$1<any> = null;
	get legendLabelColumn(): IFastItemColumn$1<any> {
		return this._legendLabelColumn;
	}
	set legendLabelColumn(value: IFastItemColumn$1<any>) {
		if (this._legendLabelColumn != value) {
			let oldColumn: IFastItemColumn$1<any> = this.legendLabelColumn;
			this._legendLabelColumn = value;
			this.raisePropertyChanged(PieChartBase.legendLabelColumnPropertyName, oldColumn, this.legendLabelColumn);
		}
	}
	static readonly labelsPositionPropertyName: string = "LabelsPosition";
	static readonly labelsPositionProperty: DependencyProperty = DependencyProperty.register(PieChartBase.labelsPositionPropertyName, LabelsPosition_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, enumGetBox<LabelsPosition>(LabelsPosition_$type, LabelsPosition.Center), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.labelsPositionPropertyName, e.oldValue, e.newValue)));
	get labelsPosition(): LabelsPosition {
		return EnumUtil.getEnumValue<LabelsPosition>(LabelsPosition_$type, this.getValue(PieChartBase.labelsPositionProperty));
	}
	set labelsPosition(value: LabelsPosition) {
		this.setValue(PieChartBase.labelsPositionProperty, enumGetBox<LabelsPosition>(LabelsPosition_$type, value));
	}
	static readonly labelOuterColorPropertyName: string = "LabelOuterColor";
	get labelOuterColor(): Brush {
		return <Brush>this.getValue(PieChartBase.labelOuterColorProperty);
	}
	set labelOuterColor(value: Brush) {
		this.setValue(PieChartBase.labelOuterColorProperty, value);
	}
	static readonly labelOuterColorProperty: DependencyProperty = DependencyProperty.register(PieChartBase.labelOuterColorPropertyName, (<any>Brush).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.labelOuterColorPropertyName, e.oldValue, e.newValue)));
	static readonly labelInnerColorPropertyName: string = "LabelInnerColor";
	get labelInnerColor(): Brush {
		return <Brush>this.getValue(PieChartBase.labelInnerColorProperty);
	}
	set labelInnerColor(value: Brush) {
		this.setValue(PieChartBase.labelInnerColorProperty, value);
	}
	static readonly labelInnerColorProperty: DependencyProperty = DependencyProperty.register(PieChartBase.labelInnerColorPropertyName, (<any>Brush).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.labelInnerColorPropertyName, e.oldValue, e.newValue)));
	static readonly leaderLineVisibilityPropertyName: string = "LeaderLineVisibility";
	static readonly leaderLineVisibilityProperty: DependencyProperty = DependencyProperty.register(PieChartBase.leaderLineVisibilityPropertyName, Visibility_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.leaderLineVisibilityPropertyName, e.oldValue, e.newValue)));
	get leaderLineVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(PieChartBase.leaderLineVisibilityProperty));
	}
	set leaderLineVisibility(value: Visibility) {
		this.setValue(PieChartBase.leaderLineVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly leaderLineStylePropertyName: string = "LeaderLineStyle";
	static readonly leaderLineStyleProperty: DependencyProperty = DependencyProperty.register(PieChartBase.leaderLineStylePropertyName, (<any>Style).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.leaderLineStylePropertyName, e.oldValue, e.newValue)));
	get leaderLineStyle(): Style {
		return <Style>this.getValue(PieChartBase.leaderLineStyleProperty);
	}
	set leaderLineStyle(value: Style) {
		this.setValue(PieChartBase.leaderLineStyleProperty, value);
	}
	static readonly leaderLineTypePropertyName: string = "LeaderLineType";
	static readonly leaderLineTypeProperty: DependencyProperty = DependencyProperty.register(PieChartBase.leaderLineTypePropertyName, LeaderLineType_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, enumGetBox<LeaderLineType>(LeaderLineType_$type, LeaderLineType.Straight), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.leaderLineTypePropertyName, e.oldValue, e.newValue)));
	get leaderLineType(): LeaderLineType {
		return EnumUtil.getEnumValue<LeaderLineType>(LeaderLineType_$type, this.getValue(PieChartBase.leaderLineTypeProperty));
	}
	set leaderLineType(value: LeaderLineType) {
		this.setValue(PieChartBase.leaderLineTypeProperty, enumGetBox<LeaderLineType>(LeaderLineType_$type, value));
	}
	static readonly leaderLineMarginPropertyName: string = "LeaderLineMargin";
	static readonly leaderLineMarginProperty: DependencyProperty = DependencyProperty.register(PieChartBase.leaderLineMarginPropertyName, Number_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, 6, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.leaderLineMarginPropertyName, e.oldValue, e.newValue)));
	get leaderLineMargin(): number {
		return <number>this.getValue(PieChartBase.leaderLineMarginProperty);
	}
	set leaderLineMargin(value: number) {
		this.setValue(PieChartBase.leaderLineMarginProperty, value);
	}
	static readonly toolTipPropertyName: string = "ToolTip";
	static readonly toolTipProperty: DependencyProperty = DependencyProperty.register(PieChartBase.toolTipPropertyName, (<any>Base).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.toolTipPropertyName, e.oldValue, e.newValue)));
	get toolTip(): any {
		return this.getValue(PieChartBase.toolTipProperty);
	}
	set toolTip(value: any) {
		this.setValue(PieChartBase.toolTipProperty, value);
	}
	static readonly othersCategoryThresholdPropertyName: string = "OthersCategoryThreshold";
	static readonly othersCategoryThresholdProperty: DependencyProperty = DependencyProperty.register(PieChartBase.othersCategoryThresholdPropertyName, Number_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, 3, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.othersCategoryThresholdPropertyName, e.oldValue, e.newValue)));
	get othersCategoryThreshold(): number {
		return <number>this.getValue(PieChartBase.othersCategoryThresholdProperty);
	}
	set othersCategoryThreshold(value: number) {
		this.setValue(PieChartBase.othersCategoryThresholdProperty, value);
	}
	static readonly othersCategoryTypePropertyName: string = "OthersCategoryType";
	static readonly othersCategoryTypeProperty: DependencyProperty = DependencyProperty.register(PieChartBase.othersCategoryTypePropertyName, OthersCategoryType_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, enumGetBox<OthersCategoryType>(OthersCategoryType_$type, OthersCategoryType.Percent), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.othersCategoryTypePropertyName, e.oldValue, e.newValue)));
	get othersCategoryType(): OthersCategoryType {
		return EnumUtil.getEnumValue<OthersCategoryType>(OthersCategoryType_$type, this.getValue(PieChartBase.othersCategoryTypeProperty));
	}
	set othersCategoryType(value: OthersCategoryType) {
		this.setValue(PieChartBase.othersCategoryTypeProperty, enumGetBox<OthersCategoryType>(OthersCategoryType_$type, value));
	}
	static readonly othersCategoryTextPropertyName: string = "OthersCategoryText";
	static readonly othersCategoryTextProperty: DependencyProperty = DependencyProperty.register(PieChartBase.othersCategoryTextPropertyName, String_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, "Others", (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.othersCategoryTextPropertyName, e.oldValue, e.newValue)));
	get othersCategoryText(): string {
		return <string>this.getValue(PieChartBase.othersCategoryTextProperty);
	}
	set othersCategoryText(value: string) {
		this.setValue(PieChartBase.othersCategoryTextProperty, value);
	}
	static readonly explodedRadiusPropertyName: string = "ExplodedRadius";
	static readonly explodedRadiusProperty: DependencyProperty = DependencyProperty.register(PieChartBase.explodedRadiusPropertyName, Number_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, 0.2, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.explodedRadiusPropertyName, e.oldValue, e.newValue)));
	get explodedRadius(): number {
		return <number>this.getValue(PieChartBase.explodedRadiusProperty);
	}
	set explodedRadius(value: number) {
		this.setValue(PieChartBase.explodedRadiusProperty, value);
	}
	get actualExplodedRadius(): number {
		let radius: number = this.explodedRadius;
		if (isNaN_(radius) || isInfinity(radius) || radius < 0) {
			return 0;
		}
		if (radius > 1) {
			return 1;
		}
		return radius;
	}
	static readonly radiusFactorPropertyName: string = "RadiusFactor";
	static radiusFactorProperty: DependencyProperty = DependencyProperty.register(PieChartBase.radiusFactorPropertyName, Number_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, 0.9, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.radiusFactorPropertyName, e.oldValue, e.newValue)));
	get radiusFactor(): number {
		return <number>this.getValue(PieChartBase.radiusFactorProperty);
	}
	set radiusFactor(value: number) {
		this.setValue(PieChartBase.radiusFactorProperty, value);
	}
	get actualRadiusFactor(): number {
		let radiusFactor: number = this.radiusFactor;
		if (isNaN_(radiusFactor) || isInfinity(radiusFactor) || radiusFactor < 0) {
			return 0;
		}
		if (radiusFactor > 1) {
			return 1;
		}
		return radiusFactor;
	}
	static readonly allowSliceSelectionPropertyName: string = "AllowSliceSelection";
	static readonly allowSliceSelectionProperty: DependencyProperty = DependencyProperty.register(PieChartBase.allowSliceSelectionPropertyName, Boolean_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.allowSliceSelectionPropertyName, e.oldValue, e.newValue)));
	get allowSliceSelection(): boolean {
		return <boolean>this.getValue(PieChartBase.allowSliceSelectionProperty);
	}
	set allowSliceSelection(value: boolean) {
		this.setValue(PieChartBase.allowSliceSelectionProperty, value);
	}
	static readonly allowSliceExplosionPropertyName: string = "AllowSliceExplosion";
	static readonly allowSliceExplosionProperty: DependencyProperty = DependencyProperty.register(PieChartBase.allowSliceExplosionPropertyName, Boolean_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.allowSliceExplosionPropertyName, e.oldValue, e.newValue)));
	get allowSliceExplosion(): boolean {
		return <boolean>this.getValue(PieChartBase.allowSliceExplosionProperty);
	}
	set allowSliceExplosion(value: boolean) {
		this.setValue(PieChartBase.allowSliceExplosionProperty, value);
	}
	get explodedSlices(): IndexCollection {
		return this._explodedSlices;
	}
	set explodedSlices(value: IndexCollection) {
		let old = this._explodedSlices;
		if (old != null) {
			let $t = this._explodedSlices;
			$t.collectionChanged = delegateRemove($t.collectionChanged, this._explodedIndicesChangedOverride);
		}
		this._explodedAttached = false;
		this._explodedSlices = value;
		if (this._explodedSlices != null) {
			let $t1 = this._explodedSlices;
			$t1.collectionChanged = delegateCombine($t1.collectionChanged, this._explodedIndicesChangedOverride);
			this._explodedAttached = true;
		}
		if (this.allowSliceExplosion) {
			this.prepareSlices();
			this.prepareLabels();
			this.renderSlices();
			this.renderLabels();
		}
	}
	private _explodedSlices: IndexCollection = new IndexCollection();
	static readonly legendPropertyName: string = "Legend";
	static readonly legendProperty: DependencyProperty = DependencyProperty.register(PieChartBase.legendPropertyName, IChartLegend_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.legendPropertyName, e.oldValue, e.newValue)));
	get legend(): IChartLegend {
		return <IChartLegend><any>this.getValue(PieChartBase.legendProperty);
	}
	set legend(value: IChartLegend) {
		this.setValue(PieChartBase.legendProperty, value);
	}
	static readonly labelExtentPropertyName: string = "LabelExtent";
	static readonly labelExtentProperty: DependencyProperty = DependencyProperty.register(PieChartBase.labelExtentPropertyName, Number_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, 10, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.labelExtentPropertyName, e.oldValue, e.newValue)));
	get labelExtent(): number {
		return <number>this.getValue(PieChartBase.labelExtentProperty);
	}
	set labelExtent(value: number) {
		this.setValue(PieChartBase.labelExtentProperty, value);
	}
	static readonly startAnglePropertyName: string = "StartAngle";
	static readonly startAngleProperty: DependencyProperty = DependencyProperty.register(PieChartBase.startAnglePropertyName, Number_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.startAnglePropertyName, e.oldValue, e.newValue)));
	get startAngle(): number {
		return <number>this.getValue(PieChartBase.startAngleProperty);
	}
	set startAngle(value: number) {
		this.setValue(PieChartBase.startAngleProperty, value);
	}
	static readonly sweepDirectionPropertyName: string = "SweepDirection";
	static readonly sweepDirectionProperty: DependencyProperty = DependencyProperty.register(PieChartBase.sweepDirectionPropertyName, SweepDirection_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, enumGetBox<SweepDirection>(SweepDirection_$type, SweepDirection.Clockwise), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.sweepDirectionPropertyName, e.oldValue, e.newValue)));
	get sweepDirection(): SweepDirection {
		return EnumUtil.getEnumValue<SweepDirection>(SweepDirection_$type, this.getValue(PieChartBase.sweepDirectionProperty));
	}
	set sweepDirection(value: SweepDirection) {
		this.setValue(PieChartBase.sweepDirectionProperty, enumGetBox<SweepDirection>(SweepDirection_$type, value));
	}
	get selectedSlices(): IndexCollection {
		return this._selectedSlices;
	}
	set selectedSlices(value: IndexCollection) {
		let $t = this._selectedSlices;
		$t.collectionChanged = delegateRemove($t.collectionChanged, this._selectedIndicesChangedOverride);
		this._selectedAttached = false;
		this._selectedSlices = value;
		if (this._selectedSlices != null) {
			let $t1 = this._selectedSlices;
			$t1.collectionChanged = delegateCombine($t1.collectionChanged, this._selectedIndicesChangedOverride);
			this._selectedAttached = true;
		}
		if (this.allowSliceSelection) {
			this.prepareSlices();
			this.prepareLabels();
			this.renderSlices();
			this.renderLabels();
			this.renderLegendItems();
		}
	}
	private _selectedSlices: IndexCollection = new IndexCollection();
	static readonly othersCategoryStylePropertyName: string = "OthersCategoryStyle";
	static readonly othersCategoryStyleProperty: DependencyProperty = DependencyProperty.register(PieChartBase.othersCategoryStylePropertyName, (<any>Style).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.othersCategoryStylePropertyName, e.oldValue, e.newValue)));
	get othersCategoryStyle(): Style {
		return <Style>this.getValue(PieChartBase.othersCategoryStyleProperty);
	}
	set othersCategoryStyle(value: Style) {
		this.setValue(PieChartBase.othersCategoryStyleProperty, value);
	}
	static readonly selectedStylePropertyName: string = "SelectedStyle";
	static readonly selectedStyleProperty: DependencyProperty = DependencyProperty.register(PieChartBase.selectedStylePropertyName, (<any>Style).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.selectedStylePropertyName, e.oldValue, e.newValue)));
	get selectedStyle(): Style {
		return <Style>this.getValue(PieChartBase.selectedStyleProperty);
	}
	set selectedStyle(value: Style) {
		this.setValue(PieChartBase.selectedStyleProperty, value);
	}
	static readonly toolTipStylePropertyName: string = "ToolTipStyle";
	static readonly toolTipStyleProperty: DependencyProperty = DependencyProperty.register(PieChartBase.toolTipStylePropertyName, (<any>Style).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.toolTipStylePropertyName, e.oldValue, e.newValue)));
	get toolTipStyle(): Style {
		return <Style>this.getValue(PieChartBase.toolTipStyleProperty);
	}
	set toolTipStyle(value: Style) {
		this.setValue(PieChartBase.toolTipStyleProperty, value);
	}
	static readonly brushesPropertyName: string = "Brushes";
	static readonly brushesProperty: DependencyProperty = DependencyProperty.register(PieChartBase.brushesPropertyName, (<any>BrushCollection).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.brushesPropertyName, e.oldValue, e.newValue)));
	get brushes(): BrushCollection {
		return <BrushCollection>this.getValue(PieChartBase.brushesProperty);
	}
	set brushes(value: BrushCollection) {
		this.setValue(PieChartBase.brushesProperty, value);
	}
	static readonly outlinesPropertyName: string = "Outlines";
	static readonly outlinesProperty: DependencyProperty = DependencyProperty.register(PieChartBase.outlinesPropertyName, (<any>BrushCollection).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.outlinesPropertyName, e.oldValue, e.newValue)));
	get outlines(): BrushCollection {
		return <BrushCollection>this.getValue(PieChartBase.outlinesProperty);
	}
	set outlines(value: BrushCollection) {
		this.setValue(PieChartBase.outlinesProperty, value);
	}
	get legendItemTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(PieChartBase.legendItemTemplateProperty);
	}
	set legendItemTemplate(value: DataTemplate) {
		this.setValue(PieChartBase.legendItemTemplateProperty, value);
	}
	static readonly legendItemTemplatePropertyName: string = "LegendItemTemplate";
	static readonly legendItemTemplateProperty: DependencyProperty = DependencyProperty.register(PieChartBase.legendItemTemplatePropertyName, (<any>DataTemplate).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.legendItemTemplatePropertyName, e.oldValue, e.newValue)));
	get legendItemBadgeTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(PieChartBase.legendItemBadgeTemplateProperty);
	}
	set legendItemBadgeTemplate(value: DataTemplate) {
		this.setValue(PieChartBase.legendItemBadgeTemplateProperty, value);
	}
	static readonly legendItemBadgeTemplatePropertyName: string = "LegendItemBadgeTemplate";
	static readonly legendItemBadgeTemplateProperty: DependencyProperty = DependencyProperty.register(PieChartBase.legendItemBadgeTemplatePropertyName, (<any>DataTemplate).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.legendItemBadgeTemplatePropertyName, e.oldValue, e.newValue)));
	private static readonly labelTemplatePropertyName: string = "LabelTemplate";
	static readonly labelTemplateProperty: DependencyProperty = DependencyProperty.register(PieChartBase.labelTemplatePropertyName, (<any>DataTemplate).$type, (<any>PieChartBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.labelTemplatePropertyName, e.oldValue, e.newValue)));
	get labelTemplate(): DataTemplate {
		return typeCast<DataTemplate>((<any>DataTemplate).$type, this.getValue(PieChartBase.labelTemplateProperty));
	}
	set labelTemplate(value: DataTemplate) {
		this.setValue(PieChartBase.labelTemplateProperty, value);
	}
	get isSurfaceInteractionDisabled(): boolean {
		return <boolean>this.getValue(PieChartBase.isSurfaceInteractionDisabledProperty);
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this.setValue(PieChartBase.isSurfaceInteractionDisabledProperty, value);
	}
	static readonly isSurfaceInteractionDisabledPropertyName: string = "IsSurfaceInteractionDisabled";
	static readonly isSurfaceInteractionDisabledProperty: DependencyProperty = DependencyProperty.register(PieChartBase.isSurfaceInteractionDisabledPropertyName, Boolean_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.isSurfaceInteractionDisabledPropertyName, e.oldValue, e.newValue)));
	protected hasFormatLabel(): boolean {
		return this.formatLabel != null;
	}
	protected hasFormatLegendLabel(): boolean {
		return this.formatLegendLabel != null;
	}
	get formatLabel(): (obj: any) => string {
		return <(obj: any) => string>this.getValue(PieChartBase.formatLabelProperty);
	}
	set formatLabel(value: (obj: any) => string) {
		this.setValue(PieChartBase.formatLabelProperty, value);
	}
	static readonly formatLabelPropertyName: string = "FormatLabel";
	static readonly formatLabelProperty: DependencyProperty = DependencyProperty.register(PieChartBase.formatLabelPropertyName, Delegate_$type, (<any>PieChartBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>sender).raisePropertyChanged(PieChartBase.formatLabelPropertyName, e.oldValue, e.newValue)));
	get formatLegendLabel(): (obj: any) => string {
		return <(obj: any) => string>this.getValue(PieChartBase.formatLegendLabelProperty);
	}
	set formatLegendLabel(value: (obj: any) => string) {
		this.setValue(PieChartBase.formatLegendLabelProperty, value);
	}
	static readonly formatLegendLabelPropertyName: string = "FormatLegendLabel";
	static readonly formatLegendLabelProperty: DependencyProperty = DependencyProperty.register(PieChartBase.formatLegendLabelPropertyName, Delegate_$type, (<any>PieChartBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<PieChartBase>((<any>PieChartBase).$type, sender)).raisePropertyChanged(PieChartBase.formatLegendLabelPropertyName, e.oldValue, e.newValue)));
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.raisePropertyChanged(PieChartBase.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.raisePropertyChanged(PieChartBase.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
	private static readonly selectionModePropertyName: string = "SelectionMode";
	get selectionMode(): SliceSelectionMode {
		return EnumUtil.getEnumValue<SliceSelectionMode>(SliceSelectionMode_$type, this.getValue(PieChartBase.selectionModeProperty));
	}
	set selectionMode(value: SliceSelectionMode) {
		this.setValue(PieChartBase.selectionModeProperty, enumGetBox<SliceSelectionMode>(SliceSelectionMode_$type, value));
	}
	static readonly selectionModeProperty: DependencyProperty = DependencyProperty.register(PieChartBase.selectionModePropertyName, SliceSelectionMode_$type, (<any>PieChartBase).$type, new PropertyMetadata(2, enumGetBox<SliceSelectionMode>(SliceSelectionMode_$type, SliceSelectionMode.Single), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PieChartBase>o).raisePropertyChanged(PieChartBase.selectionModePropertyName, e.oldValue, e.newValue)));
	static readonly selectedItemPropertyName: string = "SelectedItem";
	get selectedItem(): any {
		return <any>this.getValue(PieChartBase.selectedItemProperty);
	}
	set selectedItem(value: any) {
		this.setValue(PieChartBase.selectedItemProperty, value);
	}
	static readonly selectedItemProperty: DependencyProperty = DependencyProperty.register(PieChartBase.selectedItemPropertyName, (<any>Base).$type, (<any>PieChartBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let pieChart = typeCast<PieChartBase>((<any>PieChartBase).$type, sender);
		if (pieChart._stopSelectedItemDPCallback) {
			return;
		}
		let changingArgs = new SelectedItemChangingEventArgs(e.oldValue, e.newValue);
		pieChart.onSelectedItemChanging(pieChart, changingArgs);
		if (!changingArgs.cancel) {
			if (!pieChart._stopSelectedItemsUpdate) {
				pieChart.syncSelectionIndices();
			}
			pieChart.raisePropertyChanged(PieChartBase.selectedItemPropertyName, e.oldValue, e.newValue);
			pieChart.onSelectedItemChanged(sender, new SelectedItemChangedEventArgs(e.oldValue, e.newValue));
		} else {
			pieChart._stopSelectedItemDPCallback = true;
			pieChart.selectedItem = e.oldValue;
			pieChart._stopSelectedItemDPCallback = false;
		}
	}));
	private _selectedItems: ObjectCollection = null;
	get selectedItems(): ObjectCollection {
		return this._selectedItems;
	}
	set selectedItems(value: ObjectCollection) {
		this._selectedItems = value;
	}
	labelClick: (sender: any, e: LabelClickEventArgs) => void = null;
	onLabelClick(sender: any, e: LabelClickEventArgs): void {
		if (this.labelClick != null) {
			this.labelClick(sender, e);
		}
	}
	selectedItemChanging: (sender: any, e: SelectedItemChangingEventArgs) => void = null;
	onSelectedItemChanging(sender: any, e: SelectedItemChangingEventArgs): void {
		if (this.selectedItemChanging != null) {
			this.selectedItemChanging(sender, e);
		}
	}
	selectedItemsChanging: (sender: any, e: SelectedItemsChangingEventArgs) => void = null;
	onSelectedItemsChanging(sender: any, e: SelectedItemsChangingEventArgs): void {
		if (this.selectedItemsChanging != null) {
			this.selectedItemsChanging(sender, e);
		}
	}
	selectedItemChanged: (sender: any, e: SelectedItemChangedEventArgs) => void = null;
	onSelectedItemChanged(sender: any, e: SelectedItemChangedEventArgs): void {
		if (this.selectedItemChanged != null) {
			this.selectedItemChanged(sender, e);
		}
	}
	selectedItemsChanged: (sender: any, e: SelectedItemsChangedEventArgs) => void = null;
	onSelectedItemsChanged(sender: any, e: SelectedItemsChangedEventArgs): void {
		if (this.selectedItemsChanged != null) {
			this.selectedItemsChanged(sender, e);
		}
	}
	sliceClick: (sender: any, e: SliceClickEventArgs) => void = null;
	onSliceClick(sender: any, e: SliceClickEventArgs): void {
		if (this.sliceClick != null) {
			this.sliceClick(sender, e);
		}
	}
	slices: Pool$1<Slice> = null;
	labels: Pool$1<PieLabel> = null;
	explodeSlice(slice: Slice, explode: boolean): void {
		if (!this._explodedAttached) {
			return;
		}
		if (!this.explodedSlices.contains(slice.index) && explode) {
			this.explodedSlices.add(slice.index);
		}
		if (this.explodedSlices.contains(slice.index) && !explode) {
			this.explodedSlices.remove(slice.index);
		}
	}
	selectSlice(slice: Slice, shouldSelect: boolean): void {
		this._stopSelectedItemsUpdate = true;
		if (!this.selectedSlices.contains(slice.index) && shouldSelect) {
			this.selectedSlices.add(slice.index);
		}
		if (this.selectedSlices.contains(slice.index) && !shouldSelect) {
			this.selectedSlices.remove(slice.index);
		}
		this._stopSelectedItemsUpdate = false;
	}
	setSliceAppearance(slice: Slice): void {
		this.view.setSliceAppearance(slice);
	}
	getLabel(slice: Slice): any {
		return this.view.getLabel(slice);
	}
	getSliceInnerBounds(slice: Slice, position: LabelsPosition): Rect {
		let bounds: Rect = new Rect(0, 0, 0, 0, 0);
		return bounds;
	}
	fitsInsideBounds(label: PieLabel, center: Point): boolean {
		let slice: Slice = label.slice;
		if (slice == null) {
			return false;
		}
		let origin: Point = slice.getSliceOrigin();
		let startAngle: number = this.sweepDirection == SweepDirection.Clockwise ? slice.startAngle : slice.endAngle;
		let endAngle: number = this.sweepDirection == SweepDirection.Clockwise ? slice.endAngle : slice.startAngle;
		let useAngleOffset: boolean = false;
		let isCircle: boolean = false;
		let startPoint: Point = GeometryUtil.findRadialPoint(origin, startAngle, slice.radius);
		let endPoint: Point = GeometryUtil.findRadialPoint(origin, endAngle, slice.radius);
		startAngle = PieChartBase.findAngle(startPoint.x, origin.x, startPoint.y, origin.y);
		endAngle = PieChartBase.findAngle(endPoint.x, origin.x, endPoint.y, origin.y);
		if (this.isCircle(slice)) {
			isCircle = true;
		}
		let labelRadius: number;
		labelRadius = MathUtil.hypot(label.bounds.right - origin.x, label.bounds.top - origin.y);
		if (labelRadius > slice.radius) {
			return false;
		}
		labelRadius = MathUtil.hypot(label.bounds.right - origin.x, label.bounds.bottom - origin.y);
		if (labelRadius > slice.radius) {
			return false;
		}
		labelRadius = MathUtil.hypot(label.bounds.left - origin.x, label.bounds.top - origin.y);
		if (labelRadius > slice.radius) {
			return false;
		}
		labelRadius = MathUtil.hypot(label.bounds.left - origin.x, label.bounds.bottom - origin.y);
		if (labelRadius > slice.radius) {
			return false;
		}
		if (isCircle) {
			return true;
		}
		if (startAngle > endAngle) {
			startAngle = startAngle - 360;
			useAngleOffset = true;
		}
		let labelAngle: number;
		labelAngle = PieChartBase.findAngle(label.bounds.right, origin.x, label.bounds.top, origin.y);
		if (useAngleOffset && labelAngle > 180 && labelAngle < 360) {
			labelAngle = labelAngle - 360;
		}
		if (labelAngle < startAngle || labelAngle > endAngle) {
			return false;
		}
		labelAngle = PieChartBase.findAngle(label.bounds.right, origin.x, label.bounds.bottom, origin.y);
		if (useAngleOffset && labelAngle > 180 && labelAngle < 360) {
			labelAngle = labelAngle - 360;
		}
		if (labelAngle < startAngle || labelAngle > endAngle) {
			return false;
		}
		labelAngle = PieChartBase.findAngle(label.bounds.left, origin.x, label.bounds.top, origin.y);
		if (useAngleOffset && labelAngle > 180 && labelAngle < 360) {
			labelAngle = labelAngle - 360;
		}
		if (labelAngle < startAngle || labelAngle > endAngle) {
			return false;
		}
		labelAngle = PieChartBase.findAngle(label.bounds.left, origin.x, label.bounds.bottom, origin.y);
		if (useAngleOffset && labelAngle > 180 && labelAngle < 360) {
			labelAngle = labelAngle - 360;
		}
		if (labelAngle < startAngle || labelAngle > endAngle) {
			return false;
		}
		return true;
	}
	static roundAngle(angle: number): number {
		let val: number = Math.round(angle * Math.pow(10, 5)) / Math.pow(10, 5);
		return val;
	}
	private isCircle(slice: Slice): boolean {
		return PieChartBase.roundAngle(Math.abs(slice.endAngle - slice.startAngle)) == 360;
	}
	private static findAngle(x: number, centerX: number, y: number, centerY: number): number {
		let h: number = MathUtil.hypot(x - centerX, y - centerY);
		let angle: number = Math.asin((y - centerY) / h) * 180 / Math.PI;
		if (x < centerX) {
			angle = 180 - angle;
		}
		if (x > centerX) {
			angle = 360 + angle;
		}
		if (angle == 360) {
			angle = 0;
		}
		return GeometryUtil.simplifyAngle(angle);
	}
	static sortLabels(labels: List$1<PieLabel>): void {
		let anchors: number[] = <number[]>new Array(labels.count);
		for (let i: number = 0; i < labels.count; i++) {
			let currentLabel: PieLabel = labels._inner[i];
			let currentSlice: Slice = currentLabel.slice;
			let pt: Point = GeometryUtil.findRadialPoint(currentSlice.origin, currentLabel.angle, currentSlice.radius);
			anchors[i] = pt.y;
		}
		for (let i1: number = 0; i1 < labels.count; i1++) {
			for (let j: number = i1 + 1; j < labels.count; j++) {
				if (anchors[i1] >= anchors[j]) {
					let temp: PieLabel = labels._inner[i1];
					labels._inner[i1] = labels._inner[j];
					labels._inner[j] = temp;
					let tempAnchor: number = anchors[i1];
					anchors[i1] = anchors[j];
					anchors[j] = tempAnchor;
				}
			}
		}
	}
	resolveCollisions(labels: List$1<PieLabel>): void {
		if (labels.count == 0) {
			return;
		}
		let renderWidth: number = this.view.viewport.width;
		let renderHeight: number = this.view.viewport.height;
		let count: number = labels.count;
		let radius: number = labels._inner[0].slice.radius;
		let center: Point = labels._inner[0].slice.getSliceOrigin();
		let hasEnoughSpace: boolean = true;
		let collisions: number = 0;
		let minHeight: number = Number.POSITIVE_INFINITY;
		let maxHeight: number = Number.NEGATIVE_INFINITY;
		for (let i: number = 0; i < count - 1; i++) {
			let currentLabel: PieLabel = labels._inner[i];
			let nextLabel: PieLabel = labels._inner[i + 1];
			if (currentLabel.bounds.intersectsWith(nextLabel.bounds)) {
				collisions++;
			}
		}
		let totalHeight: number = 0;
		for (let label of fromEnum<PieLabel>(labels)) {
			minHeight = Math.min(minHeight, label.bounds.height);
			maxHeight = Math.max(maxHeight, label.bounds.height);
			totalHeight += label.bounds.height;
		}
		if (totalHeight > renderHeight) {
			hasEnoughSpace = false;
		}
		if (hasEnoughSpace && collisions > 0) {
			for (let i1: number = 0; i1 < count - 1; i1++) {
				for (let j: number = i1 + 1; j < count; j++) {
					let currentLabel1: PieLabel = labels._inner[i1];
					let nextLabel1: PieLabel = labels._inner[j];
					if (currentLabel1.bounds.intersectsWith(nextLabel1.bounds)) {
						let bounds: Rect = nextLabel1.bounds;
						bounds.y = Math.min(currentLabel1.bounds.bottom + 0.01, renderHeight - minHeight);
						let c: number = this.labelExtent + radius;
						let b: number = Math.abs(center.y - (bounds.y + minHeight / 2));
						let x: number = Math.sqrt(Math.abs(c * c - b * b));
						let angle: number = GeometryUtil.simplifyAngle(nextLabel1.angle);
						if (angle > 90 && angle < 270) {
							x = (bounds.width + x) * -1;
						}
						bounds.x = center.x + x;
						nextLabel1.bounds = bounds;
					}
				}
			}
			for (let i2: number = count - 1; i2 > 0; i2--) {
				for (let j1: number = i2 - 1; j1 >= 0; j1--) {
					let currentLabel2: PieLabel = labels._inner[i2];
					let nextLabel2: PieLabel = labels._inner[j1];
					if (currentLabel2.bounds.intersectsWith(nextLabel2.bounds)) {
						let bounds1: Rect = nextLabel2.bounds;
						bounds1.y = Math.max(currentLabel2.bounds.top - minHeight - 0.01, 0);
						let c1: number = this.labelExtent + radius;
						let b1: number = Math.abs(center.y - (bounds1.y + minHeight / 2));
						let x1: number = Math.sqrt(Math.abs(c1 * c1 - b1 * b1));
						let angle1: number = GeometryUtil.simplifyAngle(nextLabel2.angle);
						if (angle1 > 90 && angle1 < 270) {
							x1 = (bounds1.width + x1) * -1;
						}
						bounds1.x = center.x + x1;
						nextLabel2.bounds = bounds1;
					}
				}
			}
		}
		for (let label1 of fromEnum<PieLabel>(labels)) {
			let bounds2: Rect = label1.bounds;
			if (bounds2.left > renderWidth || bounds2.right < 0) {
				label1._visibility = Visibility.Collapsed;
				if (this.leaderLineType == LeaderLineType.Straight) {
					label1.leaderLine._visibility = Visibility.Collapsed;
				} else {
					label1.leaderLinePath._visibility = Visibility.Collapsed;
				}
			} else if (bounds2.left < 0) {
				let offset: number = Math.abs(bounds2.x);
				bounds2.x = 0;
				if (offset > bounds2.width) {
					bounds2.width = 0;
				} else {
				}
				label1.bounds = bounds2;
			} else if (bounds2.right > renderWidth) {
				let offset1: number = bounds2.right - renderWidth;
				if (offset1 > bounds2.width) {
					bounds2.width = 0;
				} else {
					bounds2.width = bounds2.width - offset1;
				}
				label1.bounds = bounds2;
			}
		}
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		this.renderChart();
	}
	renderChart(): void {
		this.prepareData();
		this.prepareSlices();
		this.prepareLabels();
		this.renderSlices();
		this.renderLabels();
		this.renderLegendItems();
		this.view.updateView();
	}
	prepareData(): void {
		this.total = 0;
		this.othersTotal = 0;
		this.valueIndices.clear();
		this.othersValueIndices.clear();
		this.others.clear();
		if (this.itemsSource == null || this.fastItemsSource == null) {
			return;
		}
		if (this.valueColumn == null || this.valueColumn.count == 0) {
			return;
		}
		for (let value of fromEnum<number>(this.valueColumn)) {
			if (isNaN_(value) || isInfinity(value) || value <= 0) {
				continue;
			}
			this.total = this.total + value;
		}
		for (let i: number = 0; i < this.valueColumn.count; i++) {
			let value1: number = this.valueColumn.item(i);
			let isInvalidValue: boolean = value1 <= 0;
			if (isNaN_(value1) || isInfinity(value1) || isInvalidValue) {
				continue;
			}
			let calculatedValue: number = this.othersCategoryType == OthersCategoryType.Percent ? value1 / this.total : value1;
			let calculatedThreshold: number = this.othersCategoryType == OthersCategoryType.Percent ? this.othersCategoryThreshold / 100 : this.othersCategoryThreshold;
			let useOthersSlice: boolean = true;
			if (calculatedValue <= calculatedThreshold && useOthersSlice) {
				this.othersTotal = this.othersTotal + value1;
				this.othersValueIndices.add(i);
				this.others.add1(this.fastItemsSource.item(i));
			} else {
				this.valueIndices.add(i);
			}
		}
	}
	prepareSlices(): void {
		if (this.itemsSource == null || this.fastItemsSource == null) {
			this.slices.count = 0;
			return;
		}
		let totalSliceCount: number = this.valueIndices.count;
		let hasOtherSlice: boolean = this.othersValueIndices.count > 0;
		let startAngle: number = PieChartBase.roundAngle(this.actualStartAngle);
		let endAngle: number = PieChartBase.roundAngle(this.actualStartAngle);
		if (hasOtherSlice) {
			totalSliceCount++;
		}
		this.totalSliceCount = totalSliceCount;
		for (let i: number = 0; i < totalSliceCount; i++) {
			let isOtherSlice: boolean = false;
			let value: number;
			if (i == totalSliceCount - 1 && hasOtherSlice) {
				value = this.othersTotal;
				isOtherSlice = true;
			} else {
				value = this.valueColumn.item(this.valueIndices._inner[i]);
			}
			if (this.sweepDirection == SweepDirection.Clockwise) {
				endAngle += PieChartBase.roundAngle(Math.abs(value) * 360 / this.total);
			} else {
				endAngle -= PieChartBase.roundAngle(Math.abs(value) * 360 / this.total);
			}
			let slice: Slice = this.slices.item(i);
			slice.suspendCreation = true;
			slice.startAngle = startAngle;
			slice.endAngle = endAngle;
			slice.innerExtentStart = slice.innerExtentEnd = this.actualInnerExtent;
			slice.isOthersSlice = isOtherSlice;
			slice.explodedRadius = this.actualExplodedRadius;
			slice.index = i;
			slice.dataContext = isOtherSlice ? this.others : this.fastItemsSource.item(this.valueIndices._inner[i]);
			this.sliceSelector.setSliceSelectionState(slice);
			slice.isExploded = this._explodedAttached ? this.explodedSlices.contains(i) : false;
			startAngle = endAngle;
			slice.suspendCreation = false;
		}
		this.slices.count = totalSliceCount;
	}
	prepareLabels(): void {
		if (this.itemsSource == null || this.fastItemsSource == null) {
			this.labels.count = 0;
			return;
		}
		if (this.labelColumn == null || this.labelColumn.count == 0 || this.labelsPosition == LabelsPosition.None) {
			this.labels.count = 0;
		}
		let totalLabelCount: number = this.valueIndices.count;
		if (this.othersValueIndices.count > 0) {
			totalLabelCount++;
		}
		this.view.labelPreMeasure();
		let actualLabelCount: number = 0;
		for (let i: number = 0; i < totalLabelCount; i++) {
			let labelString: string = stringEmpty();
			let isOthersLabel: boolean = false;
			let labelFromLabelColumn: any;
			let legendLabelFromLegendLabelColumn: any = null;
			if (i == totalLabelCount - 1 && this.othersValueIndices.count > 0) {
				labelFromLabelColumn = this.othersCategoryText;
				isOthersLabel = true;
				if (this.hasFormatLabel()) {
					let context = ((() => {
						let $ret = new PieSliceDataContext();
						$ret.series = this;
						$ret.item = isOthersLabel ? this.others : this.fastItemsSource.item(this.valueIndices._inner[i]);
						$ret.percentValue = this.getPercentValue(this.slices.item(i));
						$ret.isOthersSlice = isOthersLabel;
						return $ret;
					})());
					if (labelFromLabelColumn != null) {
						context.itemLabel = labelFromLabelColumn.toString();
						context.legendLabel = labelFromLabelColumn.toString();
					}
					let c = <any>context;
					c = (<PieSliceDataContext>c).flatten();
					labelFromLabelColumn = this.formatLabel(c);
				}
				if (null != labelFromLabelColumn) {
					labelString = labelFromLabelColumn.toString();
				} else {
					labelString = this.othersCategoryText;
				}
				labelString = this.othersCategoryText;
			} else {
				if (this.labelColumn != null && this.labelColumn.count >= this.valueIndices.count) {
					labelFromLabelColumn = this.labelColumn.item(this.valueIndices._inner[i]);
				} else {
					labelFromLabelColumn = null;
				}
				legendLabelFromLegendLabelColumn = (this.legendLabelColumn != null && this.legendLabelColumn.count > 0) ? this.legendLabelColumn.item(this.valueIndices._inner[i]) : null;
				if (this.hasFormatLabel()) {
					let context1 = ((() => {
						let $ret = new PieSliceDataContext();
						$ret.series = this;
						$ret.item = isOthersLabel ? this.others : this.fastItemsSource.item(this.valueIndices._inner[i]);
						$ret.itemLabel = labelFromLabelColumn != null ? labelFromLabelColumn.toString() : null;
						$ret.legendLabel = legendLabelFromLegendLabelColumn != null ? legendLabelFromLegendLabelColumn.toString() : labelFromLabelColumn != null ? labelFromLabelColumn.toString() : null;
						$ret.percentValue = this.getPercentValue(this.slices.item(i));
						$ret.isOthersSlice = isOthersLabel;
						return $ret;
					})());
					let c1 = <any>context1;
					c1 = (<PieSliceDataContext>c1).flatten();
					let formatedLabel_ = this.formatLabel(c1);
					if (null == formatedLabel_ && this.labelColumn != null && this.labelColumn.count > 0) {
						labelFromLabelColumn = this.labelColumn.item(this.valueIndices._inner[i]);
					} else {
						labelFromLabelColumn = formatedLabel_;
					}
				}
				let label_ = labelFromLabelColumn;
				let errorMsg_ = this.view.invalidLabelBindingError;
				if(label_ === undefined) { throw new Error(errorMsg_); };
				if (null != labelFromLabelColumn) {
					labelString = labelFromLabelColumn.toString();
				} else {
					labelString = null;
				}
			}
			if (this.labelColumn != null && this.labelColumn.count > 0) {
				let label: PieLabel = this.labels.item(i);
				let slice: Slice = this.slices.item(i);
				slice.label = label;
				label.angle = GeometryUtil.simplifyAngle((slice.startAngle + slice.endAngle) / 2);
				label.slice = slice;
				label.label = ((() => {
					let $ret = new TextBlock();
					$ret.text = labelString;
					return $ret;
				})());
				if (this.labelTemplate == null) {
					label.dataContext = isOthersLabel ? this.others : this.fastItemsSource.item(this.valueIndices._inner[i]);
					label.createContent(this.view);
				} else {
				}
				label._visibility = Visibility.Visible;
				label.bounds = this.view.getLabelBounds(label);
				actualLabelCount++;
			}
			if (this.legendLabelColumn != null && this.legendLabelColumn.count > 0) {
				let slice1: Slice = this.slices.item(i);
				slice1.legendLabel = legendLabelFromLegendLabelColumn != null ? legendLabelFromLegendLabelColumn.toString() : null;
			}
		}
		this.labels.count = actualLabelCount;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	renderSlices(): void {
		if (this.itemsSource == null || this.fastItemsSource == null) {
			return;
		}
		let pieCanvasSize: Size = this.view.updatePieViewport();
		this.viewport = new Rect(0, 0, 0, pieCanvasSize.width, pieCanvasSize.height);
		let strokeThickness = this.view.getUnselectedStrokeThickness();
		let selectedStrokeThickness = this.view.getStrokeThicknessFromStyle(this.selectedStyle);
		strokeThickness = isNaN_(strokeThickness) ? 0 : strokeThickness / 2;
		selectedStrokeThickness = isNaN_(selectedStrokeThickness) ? 0 : selectedStrokeThickness / 2;
		strokeThickness = Math.max(selectedStrokeThickness, strokeThickness);
		let minCanvasSize = Math.min(pieCanvasSize.width / 2, pieCanvasSize.height / 2);
		let center: Point = <Point>{ $type: Point_$type, x: pieCanvasSize.width / 2, y: pieCanvasSize.height / 2 };
		let radius: number = minCanvasSize * this.actualRadiusFactor;
		let radiusPlus = radius + strokeThickness;
		if (radiusPlus > minCanvasSize) {
			let diff = radiusPlus - minCanvasSize;
			radius = radius - diff;
		}
		for (let slice of fromEnum<Slice>(this.slices.active)) {
			let explodedCenter: Point = GeometryUtil.findCenter(pieCanvasSize.width, pieCanvasSize.height, true, (slice.startAngle + slice.endAngle) / 2, radius * this.actualExplodedRadius);
			slice.suspendCreation = true;
			slice.innerExtentStart = slice.innerExtentEnd = this.actualInnerExtent;
			slice.radius = radius;
			slice.explodedRadius = this.actualExplodedRadius;
			slice.origin = center;
			slice.explodedOrigin = explodedCenter;
			this.setSliceAppearance(slice);
			slice.suspendCreation = false;
		}
		this.view.updateView();
	}
	renderLabels(): void {
		let renderWidth: number = this.view.viewport.width;
		let renderHeight: number = this.view.viewport.height;
		if (renderHeight == 0 || renderWidth == 0) {
			return;
		}
		if (this.labels.active.count == 0 || this.labelsPosition == LabelsPosition.None) {
			this.labels.count = 0;
			return;
		}
		let rightLabels: List$1<PieLabel> = new List$1<PieLabel>((<any>PieLabel).$type, 0);
		let leftLabels: List$1<PieLabel> = new List$1<PieLabel>((<any>PieLabel).$type, 0);
		let centerLabels: List$1<PieLabel> = new List$1<PieLabel>((<any>PieLabel).$type, 0);
		let insideEndLabels: List$1<PieLabel> = new List$1<PieLabel>((<any>PieLabel).$type, 0);
		for (let label of fromEnum<PieLabel>(this.labels.active)) {
			let slice: Slice = label.slice;
			if (slice == null) {
				continue;
			}
			let center: Point = slice.getSliceOrigin();
			let width: number = label.bounds.width;
			let height: number = label.bounds.height;
			if (this.labelsPosition == LabelsPosition.Center || this.labelsPosition == LabelsPosition.BestFit) {
				let innerRadius: number = slice.radius * slice.innerExtentStart / 100;
				let labelCenter: Point = GeometryUtil.findRadialPoint(center, label.angle, slice.radius - (slice.radius - innerRadius) / 2);
				label.bounds = new Rect(0, labelCenter.x - width / 2, labelCenter.y - height / 2, width, height);
				let fitsInCenter: boolean = this.fitsInsideBounds(label, labelCenter);
				if (fitsInCenter || this.labelsPosition == LabelsPosition.Center) {
					if (this.labelInnerColor == null) {
						slice.clearValue(Slice.foregroundProperty);
					} else {
						slice.foreground = this.labelInnerColor;
					}
					slice.labelInside = true;
					centerLabels.add(label);
					label.actualLabelPosition = LabelsPosition.Center;
					if (label.slice.owner.leaderLineType == LeaderLineType.Straight) {
						label.leaderLine._visibility = Visibility.Collapsed;
					} else {
						label.leaderLinePath._visibility = Visibility.Collapsed;
					}
					if (!fitsInCenter && this.labelsPosition == LabelsPosition.Center) {
						label._visibility = Visibility.Collapsed;
					} else {
						label._visibility = Visibility.Visible;
					}
					continue;
				}
			}
			if (this.labelsPosition == LabelsPosition.InsideEnd || this.labelsPosition == LabelsPosition.BestFit) {
				let labelOffset: number = PieChartBase.findLabelOffset(center, slice.radius, label);
				let labelCenter1: Point = GeometryUtil.findRadialPoint(center, label.angle, labelOffset);
				label.bounds = new Rect(0, labelCenter1.x - width / 2, labelCenter1.y - height / 2, width, height);
				let fitsOnInside: boolean = this.fitsInsideBounds(label, labelCenter1);
				if (fitsOnInside || this.labelsPosition == LabelsPosition.InsideEnd) {
					if (this.labelInnerColor == null) {
						slice.clearValue(Slice.foregroundProperty);
					} else {
						slice.foreground = this.labelInnerColor;
					}
					slice.labelInside = true;
					insideEndLabels.add(label);
					label.actualLabelPosition = LabelsPosition.InsideEnd;
					if (label.slice.owner.leaderLineType == LeaderLineType.Straight) {
						label.leaderLine._visibility = Visibility.Collapsed;
					} else {
						label.leaderLinePath._visibility = Visibility.Collapsed;
					}
					if (!fitsOnInside && this.labelsPosition == LabelsPosition.InsideEnd) {
						label._visibility = Visibility.Collapsed;
					} else {
						label._visibility = Visibility.Visible;
					}
					continue;
				}
			}
			if (this.labelOuterColor == null) {
				slice.clearValue(Slice.foregroundProperty);
			} else {
				slice.foreground = this.labelOuterColor;
			}
			slice.labelInside = false;
			let labelPoint: Point = GeometryUtil.findRadialPoint(center, label.angle, slice.radius + this.labelExtent);
			label.actualLabelPosition = LabelsPosition.OutsideEnd;
			label._visibility = Visibility.Visible;
			label.updateCascadingLeaderLineStroke();
			if (label.angle < 90 && label.angle >= 0) {
				label.bounds = new Rect(0, labelPoint.x, labelPoint.y, width, height);
				rightLabels.add(label);
			} else if (label.angle < 180 && label.angle >= 90) {
				label.bounds = new Rect(0, labelPoint.x - width, labelPoint.y, width, height);
				leftLabels.add(label);
			} else if (label.angle < 270 && label.angle >= 180) {
				label.bounds = new Rect(0, labelPoint.x - width, labelPoint.y - height, width, height);
				leftLabels.add(label);
			} else {
				label.bounds = new Rect(0, labelPoint.x, labelPoint.y - height, width, height);
				rightLabels.add(label);
			}
			if (label.bounds.y < 0) {
				label.bounds = new Rect(0, label.bounds.x, 0, label.bounds.width, label.bounds.height);
			}
			if (label.bounds.bottom > renderHeight) {
				label.bounds = new Rect(0, label.bounds.x, renderHeight - label.bounds.height, label.bounds.width, label.bounds.height);
			}
		}
		PieChartBase.sortLabels(rightLabels);
		this.resolveCollisions(rightLabels);
		PieChartBase.sortLabels(leftLabels);
		this.resolveCollisions(leftLabels);
		for (let label1 of fromEnum<PieLabel>(centerLabels)) {
			this.view.updateLabelPosition(label1, label1.bounds.x, label1.bounds.y);
		}
		for (let label2 of fromEnum<PieLabel>(insideEndLabels)) {
			this.view.updateLabelPosition(label2, label2.bounds.x, label2.bounds.y);
		}
		for (let label3 of fromEnum<PieLabel>(rightLabels)) {
			this.view.updateLabelPosition(label3, label3.bounds.x, label3.bounds.y);
			if (label3.slice.owner.leaderLineType == LeaderLineType.Straight) {
				label3.updateLeaderLine();
			} else {
				label3.updateLeaderLinePath();
			}
		}
		for (let label4 of fromEnum<PieLabel>(leftLabels)) {
			this.view.updateLabelPosition(label4, label4.bounds.x, label4.bounds.y);
			if (label4.slice.owner.leaderLineType == LeaderLineType.Straight) {
				label4.updateLeaderLine();
			} else {
				label4.updateLeaderLinePath();
			}
		}
		this.view.updateView();
	}
	private static findLabelOffset(center: Point, radius: number, label: PieLabel): number {
		let labelAngleRadians: number = label.angle * Math.PI / 180;
		let testRadius: number = 1;
		let rectCenter = GeometryUtil.findRadialPoint(<Point>{ $type: Point_$type, x: 0, y: 0 }, label.angle, testRadius);
		let collisionPoint = PieChartBase.getCollisionPoint(label);
		let dist = Math.sqrt(collisionPoint.x * collisionPoint.x + collisionPoint.y * collisionPoint.y);
		let collisionVect = <Point>{ $type: Point_$type, x: collisionPoint.x / dist, y: collisionPoint.y / dist };
		let angle = PieChartBase.getAngleBetween(rectCenter, collisionVect);
		let p = dist / radius;
		let angleAtEnd = angle * p;
		let deltaAngle = angleAtEnd;
		let centAng = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: 0, y: 0 }, rectCenter);
		let collAng = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: 0, y: 0 }, collisionVect);
		if (collAng < centAng) {
			deltaAngle = -deltaAngle;
		}
		let collisionPointAtEnd = GeometryUtil.findRadialPoint(center, (labelAngleRadians + deltaAngle) * 180 / Math.PI, radius);
		let centerAtEnd = PieChartBase.getCenterFromCollisionPoint(label, collisionPointAtEnd);
		let distToCenter = Math.sqrt((centerAtEnd.x - center.x) * (centerAtEnd.x - center.x) + (centerAtEnd.y - center.y) * (centerAtEnd.y - center.y));
		let labelOffset: number = distToCenter - 5;
		return labelOffset;
	}
	private static getCenterFromCollisionPoint(label: PieLabel, collisionPointAtEnd: Point): Point {
		let angle = GeometryUtil.simplifyAngle(label.angle);
		let halfWidth: number = label.bounds.width / 2;
		let halfHeight: number = label.bounds.height / 2;
		if (angle >= 0 && angle <= 90) {
			return <Point>{ $type: Point_$type, x: collisionPointAtEnd.x - halfWidth, y: collisionPointAtEnd.y - halfHeight };
		}
		if (angle >= 90 && angle <= 180) {
			return <Point>{ $type: Point_$type, x: collisionPointAtEnd.x + halfWidth, y: collisionPointAtEnd.y - halfHeight };
		}
		if (angle >= 180 && angle <= 270) {
			return <Point>{ $type: Point_$type, x: collisionPointAtEnd.x + halfWidth, y: collisionPointAtEnd.y + halfHeight };
		}
		return <Point>{ $type: Point_$type, x: collisionPointAtEnd.x - halfWidth, y: collisionPointAtEnd.y + halfHeight };
	}
	private static getAngleBetween(rectCenter: Point, collisionVect: Point): number {
		let prod = rectCenter.x * collisionVect.x + rectCenter.y * collisionVect.y;
		let magCenter = Math.sqrt(rectCenter.x * rectCenter.x + rectCenter.y * rectCenter.y);
		let magColl = Math.sqrt(collisionVect.x * collisionVect.x + collisionVect.y * collisionVect.y);
		let ang = Math.acos(prod / (magCenter * magColl));
		return ang;
	}
	private static getCollisionPoint(label: PieLabel): Point {
		let angle = GeometryUtil.simplifyAngle(label.angle);
		let halfWidth: number = label.bounds.width / 2;
		let halfHeight: number = label.bounds.height / 2;
		if (angle >= 0 && angle <= 90) {
			return <Point>{ $type: Point_$type, x: halfWidth, y: halfHeight };
		}
		if (angle >= 90 && angle <= 180) {
			return <Point>{ $type: Point_$type, x: -halfWidth, y: halfHeight };
		}
		if (angle >= 180 && angle <= 270) {
			return <Point>{ $type: Point_$type, x: -halfWidth, y: -halfHeight };
		}
		return <Point>{ $type: Point_$type, x: halfWidth, y: -halfHeight };
	}
	renderLegendItems(): void {
		if (this.legend == null || !(<IChartLegend><any><any>this.legend).isItemwise) {
			return;
		}
		if ((this.labelColumn == null || this.labelColumn.count == 0) && (this.legendLabelColumn == null || this.legendLabelColumn.count == 0)) {
			this.legend.clearLegendItemsForSeries(this);
			return;
		}
		this.legendItems = new List$1<UIElement>((<any>UIElement).$type, 0);
		for (let slice of fromEnum<Slice>(this.slices.active)) {
			let item: ContentControl = new ContentControl();
			let itemLabel: any = this.getLabel(slice);
			let itemBrush: Brush = this.view.getActualBackground(slice);
			let outlineBrush: Brush = this.view.getActualOutline(slice);
			item.content = ((() => {
				let $ret = new PieSliceDataContext();
				$ret.series = this;
				$ret.slice = slice;
				$ret.item = slice.dataContext;
				$ret.itemBrush = itemBrush;
				$ret.outline = outlineBrush;
				$ret.thickness = slice.strokeThickness;
				$ret.itemLabel = itemLabel != null ? itemLabel.toString() : null;
				$ret.legendLabel = slice.isOthersSlice ? this.othersCategoryText : slice.legendLabel != null ? slice.legendLabel : (itemLabel != null ? itemLabel.toString() : null);
				$ret.percentValue = this.getPercentValue(slice);
				$ret.isOthersSlice = slice.isOthersSlice;
				return $ret;
			})());
			let dc: PieSliceDataContext = <PieSliceDataContext>item.content;
			if (this.hasFormatLegendLabel()) {
				let legendLabel: any = this.formatLegendLabel(item.content);
				if (legendLabel != null) {
					dc.legendLabel = legendLabel.toString();
				}
			}
			if (this.legendItemTemplate != null) {
				item.contentTemplate = this.legendItemTemplate;
			}
			this.legendItems.add(item);
		}
		if (this.legend.isItemwise) {
			let item1 = <IChartItemLegend><any>this.legend;
			item1.createItemwiseLegendItems(this.legendItems, this);
		}
	}
	exportVisualData(): PieChartVisualData {
		let chart = new PieChartVisualData();
		chart.viewport = RectData.fromRect(this.viewport);
		this.view.exportViewData(chart);
		for (let i = 0; i < this.slices.count; i++) {
			let slice: PieSliceVisualData = this.slices.item(i).exportVisualData();
			chart.slices.add(slice);
			if (this.slices.item(i).isOthersSlice) {
				chart.othersSlice = this.slices.item(i).exportVisualData();
			}
		}
		chart.others = this.others;
		chart.name = this.name;
		chart.radiusFactor = this.actualRadiusFactor;
		chart.leaderLineMargin = this.leaderLineMargin;
		return chart;
	}
	exportSerializedVisualData(): string {
		let vd: PieChartVisualData = this.exportVisualData();
		vd.scaleByViewport();
		return vd.serialize();
	}
	protected registerDoubleColumn(memberPath: string): IFastItemColumn$1<number> {
		let coercionMethod: (arg1: any) => any = null;
		return this.fastItemsSource.registerColumn(memberPath, coercionMethod, false);
	}
	protected registerObjectColumn(memberPath: string): IFastItemColumn$1<any> {
		let coercionMethod: (arg1: any) => any = null;
		return this.fastItemsSource.registerColumnObject(memberPath, coercionMethod, false);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case PieChartBase.itemsSourcePropertyName:
			this.fastItemsSource = ((() => {
				let $ret = new FastItemsSource();
				$ret.itemsSource = <IEnumerable><any>newValue;
				return $ret;
			})());
			break;

			case PieChartBase.fastItemsSourcePropertyName:
			if (typeCast<FastItemsSource>((<any>FastItemsSource).$type, oldValue) != null) {
				let $t = (<FastItemsSource>oldValue);
				$t.event = delegateRemove($t.event, this.fastItemsSource_Event);
				this._fastItemsSourceAttached = false;
				(<FastItemsSource>oldValue).deregisterColumn(this.valueColumn);
				(<FastItemsSource>oldValue).deregisterColumn(this.labelColumn);
				this.valueColumn = null;
				this.labelColumn = null;
				this.selectedItem = null;
				this.selectedItems.clear();
				if (this.selectedSlices != null) {
					this.selectedSlices.clear();
				}
				(typeCast<FastItemsSource>((<any>FastItemsSource).$type, oldValue)).deregisterColumn(this.legendLabelColumn);
				this.legendLabelColumn = null;
			}
			if (typeCast<FastItemsSource>((<any>FastItemsSource).$type, newValue) != null) {
				let $t1 = (<FastItemsSource>newValue);
				$t1.event = delegateCombine($t1.event, this.fastItemsSource_Event);
				this._fastItemsSourceAttached = true;
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
				this.legendLabelColumn = this.registerObjectColumn(this.legendLabelMemberPath);
				this.prepareSlices();
				if (this.selectedItem != null || this.selectedItems.count > 0) {
					this.syncSelectionIndices();
				} else if (this.selectedSlices != null && this.selectedSlices.count > 0) {
					this.syncSelectionProperties();
				}
			}
			this.renderChart();
			break;

			case PieChartBase.valueMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.valueColumn);
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
			}
			break;

			case PieChartBase.legendLabelMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.legendLabelColumn);
				this.legendLabelColumn = this.registerObjectColumn(this.legendLabelMemberPath);
				this.prepareLabels();
				this.renderLabels();
				this.renderLegendItems();
			}
			break;

			case PieChartBase.formatLegendLabelPropertyName:
			this.renderLegendItems();
			break;

			case PieChartBase.formatLabelPropertyName:

			case PieChartBase.labelMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.labelColumn);
				this.labelColumn = this.registerObjectColumn(this.labelMemberPath);
				this.prepareLabels();
				this.renderLabels();
				this.renderLegendItems();
			}
			break;

			case PieChartBase.startAnglePropertyName:
			this.actualStartAngle = <number>newValue;
			this.prepareSlices();
			this.prepareLabels();
			this.renderSlices();
			this.renderLabels();
			break;

			case PieChartBase.toolTipPropertyName:
			this.view.updateToolTipContent(this.toolTip);
			break;

			case PieChartBase.legendPropertyName:
			let oldLegend: IChartLegend = typeCast<IChartLegend>(IChartLegend_$type, oldValue);
			if (oldLegend != null) {
				oldLegend.clearLegendItemsForSeries(this);
			}
			this.renderLegendItems();
			break;

			case PieChartBase.legendItemBadgeTemplatePropertyName:

			case PieChartBase.legendItemTemplatePropertyName:
			this.renderLegendItems();
			break;

			case PieChartBase.radiusFactorPropertyName:

			case PieChartBase.explodedRadiusPropertyName:

			case PieChartBase.sweepDirectionPropertyName:
			this.prepareSlices();
			this.prepareLabels();
			this.renderSlices();
			this.renderLabels();
			break;

			case PieChartBase.othersCategoryStylePropertyName:

			case PieChartBase.selectedStylePropertyName:
			this.renderSlices();
			this.renderLegendItems();
			break;

			case PieChartBase.brushesPropertyName:
			if (oldValue != null) {
				let ov = <BrushCollection>oldValue;
				ov.collectionChanged = delegateRemove(ov.collectionChanged, this._brushesChangedOverride);
				this._brushesAttached = false;
			}
			if (newValue != null) {
				let bc = <BrushCollection>newValue;
				bc.collectionChanged = delegateCombine(bc.collectionChanged, this._brushesChangedOverride);
				this._brushesAttached = true;
			}
			this.renderSlices();
			this.renderLegendItems();
			break;

			case PieChartBase.outlinesPropertyName:
			if (oldValue != null) {
				let ov1 = <BrushCollection>oldValue;
				ov1.collectionChanged = delegateRemove(ov1.collectionChanged, this._brushesChangedOverride);
				this._outlinesAttached = false;
			}
			if (newValue != null) {
				let bc1 = <BrushCollection>newValue;
				bc1.collectionChanged = delegateCombine(bc1.collectionChanged, this._brushesChangedOverride);
				this._outlinesAttached = true;
			}
			this.renderSlices();
			this.renderLegendItems();
			break;

			case PieChartBase.valueColumnPropertyName:

			case PieChartBase.othersCategoryThresholdPropertyName:

			case PieChartBase.othersCategoryTypePropertyName:
			this.renderChart();
			this.syncSelectionIndices();
			this.syncSelectionProperties();
			break;

			case PieChartBase.allowSliceExplosionPropertyName:

			case PieChartBase.allowSliceSelectionPropertyName:
			this.renderChart();
			break;

			case PieChartBase.labelsPositionPropertyName:
			this.prepareLabels();
			this.renderLabels();
			this.view.updateView();
			break;

			case PieChartBase.labelInnerColorPropertyName:

			case PieChartBase.labelOuterColorPropertyName:

			case PieChartBase.labelExtentPropertyName:
			this.prepareLabels();
			this.renderLabels();
			break;

			case PieChartBase.othersCategoryTextPropertyName:
			this.prepareLabels();
			this.renderLabels();
			this.renderLegendItems();
			break;

			case PieChartBase.leaderLineVisibilityPropertyName:
			this.renderLabels();
			break;

			case PieChartBase.leaderLineStylePropertyName:
			this.renderLabels();
			break;

			case PieChartBase.textStylePropertyName:
			this.view.styleUpdated();
			break;

			case PieChartBase.pixelScalingRatioPropertyName:
			if (isNaN_(DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio))) {
				this.actualPixelScalingRatio = 1;
			} else {
				this.actualPixelScalingRatio = DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio);
			}
			break;

			case PieChartBase.actualPixelScalingRatioPropertyName:
			this.view.pixelScalingRatioChanged();
			break;

			case PieChartBase.labelTemplatePropertyName:
			this.prepareLabels();
			this.renderLabels();
			break;

			case PieChartBase.leaderLineTypePropertyName:

			case PieChartBase.leaderLineMarginPropertyName:
			this.labels.doToAll(runOn(this.view, this.view.updateLabelLeaderLine));
			this.renderLabels();
			break;

			case PieChartBase.isSurfaceInteractionDisabledPropertyName:
			this.view.onIsSurfaceInteractionDisabledChanged();
			break;

			case PieChartBase.innerExtentPropertyName:
			this.renderChart();
			break;

			case PieChartBase.selectedItemPropertyName:
			if (!this._stopSelectedItemsUpdate) {
				this.prepareSlices();
				this.renderSlices();
				this.renderLegendItems();
			}
			break;

			case PieChartBase.selectionModePropertyName:
			if (EnumUtil.getEnumValue<SliceSelectionMode>(SliceSelectionMode_$type, newValue) == SliceSelectionMode.Single && this.selectedItems != null && this.selectedItems.count > 1) {
				this.selectedItems.clear();
			} else if (EnumUtil.getEnumValue<SliceSelectionMode>(SliceSelectionMode_$type, newValue) == SliceSelectionMode.Multiple && this.selectedItem != null && this.selectedItems != null) {
				if (!this.selectedItems.contains1(this.selectedItem)) {
					if (typeCast<PieSliceOthersContext>((<any>PieSliceOthersContext).$type, this.selectedItem) !== null) {
						let context: PieSliceOthersContext = typeCast<PieSliceOthersContext>((<any>PieSliceOthersContext).$type, this.selectedItem);
						for (let obj of fromEn<any>(context.data)) {
							this.selectedItems.add1(obj);
						}
					} else {
						this.selectedItems.add1(this.selectedItem);
					}
					this.syncSelectionProperties();
				}
			}
			this.syncSelectionIndices();
			this.prepareSlices();
			this.renderSlices();
			break;

		}

	}
	protected selectedIndicesChangedOverride(args: NotifyCollectionChangedEventArgs): void {
		if (this._stopSelectedSlicesUpdate) {
			return;
		}
		this.syncSelectionProperties();
		if (this.allowSliceSelection) {
			this.prepareSlices();
			this.renderSlices();
			this.renderLegendItems();
		}
	}
	protected onSelectedItemsChangedOverride(args: NotifyCollectionChangedEventArgs): void {
		if (args.action == NotifyCollectionChangedAction.Reset && args.newItems == null && args.oldItems == null) {
			return;
		}
		if (this._stopSelectedItemsUpdate) {
			return;
		}
		this.syncSelectionIndices();
		if (this.allowSliceSelection) {
			this.prepareSlices();
			this.renderSlices();
			this.renderLegendItems();
		}
		this.onSelectedItemsChanged(this, new SelectedItemsChangedEventArgs(args.oldItems, args.newItems));
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
	private syncSelectionProperties(): void {
		if (this.itemsSource == null || this.slices.active.count == 0) {
			return;
		}
		this._stopSelectedItemsUpdate = true;
		let selectedCount = this.selectedSlices.count;
		if (selectedCount == 0) {
			if (this.selectedItems.count > 0) {
				this.selectedItems.clear();
			}
			if (this.selectedItem != null) {
				this.selectedItem = null;
			}
		}
		if (this.selectionMode == SliceSelectionMode.Single) {
			if (selectedCount != 0) {
				let selectedSlice = this.slices.active._inner[this.selectedSlices._inner[selectedCount - 1]];
				if (selectedSlice.isOthersSlice) {
					this.selectedItem = ((() => {
						let $ret = new PieSliceOthersContext();
						$ret.data = typeCast<IList>(IList_$type, selectedSlice.dataContext);
						$ret.slice = selectedSlice;
						return $ret;
					})());
				} else {
					this.selectedItem = selectedSlice.dataContext;
				}
			}
		} else if (this.selectionMode == SliceSelectionMode.Multiple) {
			if (selectedCount != 0) {
				this.selectedItems.clear();
				for (let sliceIndex of fromEnum<number>(this.selectedSlices)) {
					let selectedSlice1 = this.slices.active._inner[sliceIndex];
					if (selectedSlice1.isOthersSlice) {
						let othersItems = typeCast<IEnumerable>(IEnumerable_$type, selectedSlice1.dataContext);
						for (let item of fromEn<any>(othersItems)) {
							this.sliceSelector.multiSelectItem(item);
						}
					} else {
						this.sliceSelector.multiSelectItem(selectedSlice1.dataContext);
					}
				}
				this.selectedItem = this.slices.active._inner[this.selectedSlices._inner[selectedCount - 1]].dataContext;
			}
		}
		this._stopSelectedItemsUpdate = false;
	}
	private syncSelectionIndices(): void {
		if (this.itemsSource == null || this.slices.active.count == 0) {
			return;
		}
		this._stopSelectedSlicesUpdate = true;
		this.selectedSlices.clear();
		for (let slice of fromEnum<Slice>(this.slices.active)) {
			if (this.sliceSelector.isSliceDataSelected(slice)) {
				this.selectedSlices.add(slice.index);
			}
		}
		this._stopSelectedSlicesUpdate = false;
	}
	sliceClicked(slice: Slice, args: MouseEventArgs): void {
		this.sliceClicked1(slice, args, false);
	}
	sliceClicked1(slice: Slice, args: MouseEventArgs, fromLabel: boolean): void {
		if (this.allowSliceSelection) {
			if (this.selectionMode == SliceSelectionMode.Single) {
				this.sliceSelector.singleSelectSlice(slice);
			} else if (this.selectionMode == SliceSelectionMode.Multiple) {
				this.sliceSelector.multiSelectSlice(slice);
			}
		}
		let sliceClickEventArgs: SliceClickEventArgs = new SliceClickEventArgs(slice, this.view.getOriginalEvent(args));
		this.onSliceClick(this, sliceClickEventArgs);
		if (!fromLabel) {
			this.view.updateToolTip(slice, args);
		}
	}
	simulateLeftClick(point: Point): void {
		this.view.canvasMouseUp(point);
	}
	labelClicked(slice: Slice, args: MouseEventArgs): boolean {
		let labelClickEventArgs: LabelClickEventArgs = new LabelClickEventArgs(slice, this.view.getOriginalEvent(args));
		this.onLabelClick(this, labelClickEventArgs);
		return labelClickEventArgs.allowSliceClick;
	}
	itemEntered(item: any, args: any): void {
		this.view.updateToolTip(item, args);
	}
	itemMouseMoved1(item: any, args: any, fromLabel: boolean): void {
		this.view.updateToolTip(item, args);
	}
	itemMouseMoved(item: any, args: any): void {
		this.itemMouseMoved1(item, args, false);
	}
	itemMouseLeft(o: any, e: MouseEventArgs): void {
		this.view.closeToolTip();
	}
	onSizeUpdated(): void {
		this.renderChart();
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	onContainerResized(width: number, height: number): void {
		this.view.onContainerResized(width, height);
	}
	notifyContainerResized(): void {
		this.view.notifyContainerResized();
	}
	getContainerRect(): Rect {
		return this.view.getContainerRect();
	}
	getContainerOffsets(): Point {
		return this.view.getContainerOffsets();
	}
	destroy(): void {
		this.removeWidgetLevelDataSource();
		this.view.onContainerProvided(null);
	}
	flush(): void {
		this.view.flush();
	}
	private _textStyle: string = null;
	get textStyle(): string {
		return this._textStyle;
	}
	set textStyle(value: string) {
		let oldValue = this._textStyle;
		this._textStyle = value;
		this.raisePropertyChanged(PieChartBase.textStylePropertyName, oldValue, value);
	}
	static readonly textStylePropertyName: string = "TextStyle";
	get container(): ILegendOwner {
		return this;
	}
	get isStacked(): boolean {
		return false;
	}
	get isVertical(): boolean {
		return false;
	}
	get hasMarkers(): boolean {
		return false;
	}
	get isUsableInLegend(): boolean {
		return true;
	}
	get hasSubItems(): boolean {
		return false;
	}
	getPercentValue(slice: Slice): number {
		if (slice == null || this.valueColumn == null || this.valueIndices == null) {
			return NaN;
		}
		if (slice.isOthersSlice) {
			return this.othersTotal / this.total * 100;
		} else {
			return this.valueColumn.item(this.valueIndices._inner[slice.index]) / this.total * 100;
		}
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
		return PieChartBase.sourcesEqual1(source, this.itemsSource);
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
	setWidgetLevelDataSource(source_: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		this.itemsSource = <IEnumerable><any>source_;
	}
	removeWidgetLevelDataSource(): void {
		this.itemsSource = null;
	}
	styleUpdated(): void {
		this.view.styleUpdated();
	}
	getFontInfo(): FontInfo {
		return FontUtil.toFontInfo(this.view.viewManager.container, this.textStyle);
	}
	resolveLegendIndex(): number {
		return -1;
	}
	forSubItems(action: (arg1: any) => void): void {
	}
}

/**
 * @hidden 
 */
export class PieChartSliceSelector extends Base {
	static $t: Type = markType(PieChartSliceSelector, 'PieChartSliceSelector');
	private _pieChart: PieChartBase = null;
	constructor(pieChart: PieChartBase) {
		super();
		this._pieChart = pieChart;
	}
	isSliceDataSelected(slice: Slice): boolean {
		let sliceData = slice.dataContext;
		if (this._pieChart.selectionMode == SliceSelectionMode.Single) {
			if (slice.isOthersSlice) {
				let othersData = typeCast<IList>(IList_$type, sliceData);
				if (othersData != null && othersData.contains(this._pieChart.selectedItem)) {
					return true;
				}
				if (typeCast<PieSliceOthersContext>((<any>PieSliceOthersContext).$type, this._pieChart.selectedItem) !== null) {
					return true;
				}
			}
			if (sliceData == this._pieChart.selectedItem) {
				return true;
			}
		} else if (this._pieChart.selectionMode == SliceSelectionMode.Multiple) {
			if (this.isSliceDataInSelectedItems(slice)) {
				return true;
			}
		} else if (this._pieChart.selectionMode == SliceSelectionMode.Manual) {
			if (this._pieChart.selectedSlices.contains(slice.index)) {
				return true;
			}
		}
		return false;
	}
	isSliceDataInSelectedItems(slice: Slice): boolean {
		let sliceData = slice.dataContext;
		if (slice.isOthersSlice) {
			for (let dataItem of fromEn<any>(<IList><any>sliceData)) {
				if (this._pieChart.selectedItems.contains1(dataItem)) {
					return true;
				}
			}
		} else {
			if (this._pieChart.selectedItems.contains1(sliceData)) {
				return true;
			}
		}
		return false;
	}
	getSliceItemForSingleSelect(slice: Slice): any {
		let sliceDataContext = slice.dataContext;
		if (!slice.isOthersSlice) {
			if (this._pieChart.selectedItem != sliceDataContext) {
				return sliceDataContext;
			} else {
				return null;
			}
		} else {
			if (typeCast<PieSliceOthersContext>((<any>PieSliceOthersContext).$type, this._pieChart.selectedItem) !== null) {
				return null;
			} else {
				return ((() => {
					let $ret = new PieSliceOthersContext();
					$ret.data = typeCast<IList>(IList_$type, slice.dataContext);
					$ret.slice = slice;
					return $ret;
				})());
			}
		}
	}
	multiSelectItem1(item: any, forceRemove: boolean): boolean {
		let result: boolean = false;
		if (forceRemove) {
			if (this._pieChart.selectedItems.contains1(item)) {
				result = this.removeFromSelectedItems(item);
			}
		} else {
			if (!this._pieChart.selectedItems.contains1(item)) {
				result = this.addToSelectedItems(item);
			} else {
				result = this.removeFromSelectedItems(item);
			}
		}
		return result;
	}
	multiSelectItem(item: any): boolean {
		return this.multiSelectItem1(item, false);
	}
	removeFromSelectedItems(item: any): boolean {
		let args = new SelectedItemsChangingEventArgs(this._pieChart.selectedItems, ((() => {
			let $ret = new List$1<any>((<any>Base).$type, 0);
			return $ret;
		})()));
		this._pieChart.onSelectedItemsChanging(this, args);
		if (!args.cancel) {
			this._pieChart.selectedItems.remove1(item);
		}
		return args.cancel;
	}
	addToSelectedItems(item: any): boolean {
		let args = new SelectedItemsChangingEventArgs(this._pieChart.selectedItems, ((() => {
			let $ret = new List$1<any>((<any>Base).$type, 0);
			$ret.add1(item);
			return $ret;
		})()));
		this._pieChart.onSelectedItemsChanging(this, args);
		if (!args.cancel) {
			this._pieChart.selectedItems.add1(item);
		}
		return args.cancel;
	}
	singleSelectSlice(slice: Slice): void {
		this._pieChart.selectedItem = this.getSliceItemForSingleSelect(slice);
	}
	multiSelectSlice(slice: Slice): void {
		let selectedItems = new List$1<any>((<any>Base).$type, 1, this._pieChart.selectedItems);
		if (slice.isOthersSlice) {
			let othersItems = typeCast<IList>(IList_$type, slice.dataContext);
			let count: number = 0;
			for (let item of fromEn<any>(othersItems)) {
				if (this._pieChart.selectedItems.contains1(item)) {
					count++;
				}
			}
			let forceRemove: boolean = count > 0 && count < othersItems.count;
			for (let item1 of fromEn<any>(othersItems)) {
				this.multiSelectItem1(item1, forceRemove);
			}
			if (this.isSliceDataInSelectedItems(slice)) {
				this._pieChart.selectedItem = ((() => {
					let $ret = new PieSliceOthersContext();
					$ret.data = typeCast<IList>(IList_$type, slice.dataContext);
					$ret.slice = slice;
					return $ret;
				})());
			} else {
				this._pieChart.selectedItem = this._pieChart.selectedItems.count > 0 ? this._pieChart.selectedItems._inner[this._pieChart.selectedItems.count - 1] : null;
			}
		} else {
			this.multiSelectItem(slice.dataContext);
			this._pieChart.selectedItem = this._pieChart.selectedItems.count > 0 ? this._pieChart.selectedItems._inner[this._pieChart.selectedItems.count - 1] : null;
		}
	}
	setSliceSelectionState(slice: Slice): void {
		if (slice != null) {
			slice.stopSelectionNotify = true;
			slice.isSelected = this.isSliceDataSelected(slice);
			slice.stopSelectionNotify = false;
		}
	}
}

/**
 * @hidden 
 */
export class PieSliceOthersContext extends Base {
	static $t: Type = markType(PieSliceOthersContext, 'PieSliceOthersContext');
	private _data: IList = null;
	get data(): IList {
		return this._data;
	}
	set data(value: IList) {
		this._data = value;
	}
	private _slice: Slice = null;
	get slice(): Slice {
		return this._slice;
	}
	set slice(value: Slice) {
		this._slice = value;
	}
}

/**
 * @hidden 
 */
export class Slice extends ContentControl {
	static $t: Type = markType(Slice, 'Slice', (<any>ContentControl).$type);
	createView(): SliceView {
		return new SliceView(this);
	}
	onViewCreated(view: SliceView): void {
		this.view = view;
	}
	private _view: SliceView = null;
	get view(): SliceView {
		return this._view;
	}
	set view(value: SliceView) {
		this._view = value;
	}
	constructor() {
		super();
		let view: SliceView = this.createView();
		this.onViewCreated(view);
		view.onInit();
		this.stopSelectionNotify = false;
	}
	static readonly startAnglePropertyName: string = "StartAngle";
	static readonly startAngleProperty: DependencyProperty = DependencyProperty.register(Slice.startAnglePropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get startAngle(): number {
		return <number>this.getValue(Slice.startAngleProperty);
	}
	set startAngle(value: number) {
		this.setValue(Slice.startAngleProperty, value);
	}
	static readonly endAnglePropertyName: string = "EndAngle";
	static readonly endAngleProperty: DependencyProperty = DependencyProperty.register(Slice.endAnglePropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get endAngle(): number {
		return <number>this.getValue(Slice.endAngleProperty);
	}
	set endAngle(value: number) {
		this.setValue(Slice.endAngleProperty, value);
	}
	static readonly innerExtentStartPropertyName: string = "InnerExtentStart";
	static readonly innerExtentStartProperty: DependencyProperty = DependencyProperty.register(Slice.innerExtentStartPropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get innerExtentStart(): number {
		return <number>this.getValue(Slice.innerExtentStartProperty);
	}
	set innerExtentStart(value: number) {
		this.setValue(Slice.innerExtentStartProperty, value);
	}
	static readonly innerExtentEndPropertyName: string = "InnerExtentEnd";
	static readonly innerExtentEndProperty: DependencyProperty = DependencyProperty.register(Slice.innerExtentEndPropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get innerExtentEnd(): number {
		return <number>this.getValue(Slice.innerExtentEndProperty);
	}
	set innerExtentEnd(value: number) {
		this.setValue(Slice.innerExtentEndProperty, value);
	}
	static readonly isSelectedPropertyName: string = "IsSelected";
	static readonly isSelectedProperty: DependencyProperty = DependencyProperty.register(Slice.isSelectedPropertyName, Boolean_$type, (<any>Slice).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let slice: Slice = typeCast<Slice>((<any>Slice).$type, o);
		if (!slice.stopSelectionNotify) {
			let selected: boolean = <boolean>e.newValue;
			if (slice.owner != null) {
				slice.owner.selectSlice(slice, selected);
			}
		}
	}));
	get isSelected(): boolean {
		return <boolean>this.getValue(Slice.isSelectedProperty);
	}
	set isSelected(value: boolean) {
		this.setValue(Slice.isSelectedProperty, value);
	}
	static readonly isExplodedPropertyName: string = "IsExploded";
	static readonly isExplodedProperty: DependencyProperty = DependencyProperty.register(Slice.isExplodedPropertyName, Boolean_$type, (<any>Slice).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let slice: Slice = typeCast<Slice>((<any>Slice).$type, o);
		let explode: boolean = <boolean>e.newValue;
		if (slice.owner != null) {
			slice.owner.explodeSlice(slice, explode);
		}
	}));
	get isExploded(): boolean {
		return <boolean>this.getValue(Slice.isExplodedProperty);
	}
	set isExploded(value: boolean) {
		this.setValue(Slice.isExplodedProperty, value);
	}
	static readonly isOtherSlicePropertyName: string = "IsOtherSlice";
	static readonly isOtherSliceProperty: DependencyProperty = DependencyProperty.register(Slice.isOtherSlicePropertyName, Boolean_$type, (<any>Slice).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get isOthersSlice(): boolean {
		return <boolean>this.getValue(Slice.isOtherSliceProperty);
	}
	set isOthersSlice(value: boolean) {
		this.setValue(Slice.isOtherSliceProperty, value);
	}
	static readonly originPropertyName: string = "Origin";
	static readonly originProperty: DependencyProperty = DependencyProperty.register(Slice.originPropertyName, Point_$type, (<any>Slice).$type, new PropertyMetadata(2, PointUtil.create(), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get origin(): Point {
		return <Point>this.getValue(Slice.originProperty);
	}
	set origin(value: Point) {
		this.setValue(Slice.originProperty, value);
	}
	static readonly explodedOriginPropertyName: string = "ExplodedOrigin";
	static readonly explodedOriginProperty: DependencyProperty = DependencyProperty.register(Slice.explodedOriginPropertyName, Point_$type, (<any>Slice).$type, new PropertyMetadata(2, PointUtil.create(), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get explodedOrigin(): Point {
		return <Point>this.getValue(Slice.explodedOriginProperty);
	}
	set explodedOrigin(value: Point) {
		this.setValue(Slice.explodedOriginProperty, value);
	}
	static readonly radiusPropertyName: string = "Radius";
	static readonly radiusProperty: DependencyProperty = DependencyProperty.register(Slice.radiusPropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get radius(): number {
		return <number>this.getValue(Slice.radiusProperty);
	}
	set radius(value: number) {
		this.setValue(Slice.radiusProperty, value);
	}
	static readonly explodedRadiusPropertyName: string = "ExplodedRadius";
	static readonly explodedRadiusProperty: DependencyProperty = DependencyProperty.register(Slice.explodedRadiusPropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get explodedRadius(): number {
		return <number>this.getValue(Slice.explodedRadiusProperty);
	}
	set explodedRadius(value: number) {
		this.setValue(Slice.explodedRadiusProperty, value);
	}
	static readonly indexPropertyName: string = "Index";
	static readonly indexProperty: DependencyProperty = DependencyProperty.register(Slice.indexPropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, -1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get index(): number {
		return typeGetValue(this.getValue(Slice.indexProperty));
	}
	set index(value: number) {
		this.setValue(Slice.indexProperty, value);
	}
	get foreground(): Brush {
		return <Brush>this.getValue(Slice.foregroundProperty);
	}
	set foreground(value: Brush) {
		this.setValue(Slice.foregroundProperty, value);
	}
	static readonly foregroundProperty: DependencyProperty = DependencyProperty.register("Foreground", (<any>Brush).$type, (<any>Slice).$type, new PropertyMetadata(1, null));
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	static strokeThicknessProperty: DependencyProperty = DependencyProperty.register(Slice.strokeThicknessPropertyName, Number_$type, (<any>Slice).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Slice>o).createShape()));
	get strokeThickness(): number {
		return <number>this.getValue(Slice.strokeThicknessProperty);
	}
	set strokeThickness(value: number) {
		this.setValue(Slice.strokeThicknessProperty, value);
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
	private _owner: PieChartBase = null;
	get owner(): PieChartBase {
		return this._owner;
	}
	set owner(value: PieChartBase) {
		this._owner = value;
	}
	private _label: PieLabel = null;
	get label(): PieLabel {
		return this._label;
	}
	set label(value: PieLabel) {
		this._label = value;
	}
	private _legendLabel: string = null;
	get legendLabel(): string {
		return this._legendLabel;
	}
	set legendLabel(value: string) {
		this._legendLabel = value;
	}
	private _correctedExplodedBounds: Rect = null;
	get correctedExplodedBounds(): Rect {
		return this._correctedExplodedBounds;
	}
	set correctedExplodedBounds(value: Rect) {
		this._correctedExplodedBounds = value;
	}
	private _correctedExplodedOrigin: Point = null;
	get correctedExplodedOrigin(): Point {
		return this._correctedExplodedOrigin;
	}
	set correctedExplodedOrigin(value: Point) {
		this._correctedExplodedOrigin = value;
	}
	private _hasCorrecttedBounds: boolean = false;
	get hasCorrecttedBounds(): boolean {
		return this._hasCorrecttedBounds;
	}
	set hasCorrecttedBounds(value: boolean) {
		this._hasCorrecttedBounds = value;
	}
	private _labelInside: boolean = false;
	get labelInside(): boolean {
		return this._labelInside;
	}
	set labelInside(value: boolean) {
		this._labelInside = value;
	}
	private _stopSelectionNotify: boolean = false;
	get stopSelectionNotify(): boolean {
		return this._stopSelectionNotify;
	}
	set stopSelectionNotify(value: boolean) {
		this._stopSelectionNotify = value;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.view.onTemplateProvided();
	}
	getActualRadius(): number {
		let circle: boolean = Math.abs(PieChartBase.roundAngle(this.endAngle - this.startAngle)) == 360;
		if (circle) {
			return this.radius;
		}
		return this.radius;
	}
	private getSliceBounds(): Rect {
		let allowExploded: boolean = (this.owner != null && this.owner.allowSliceExplosion) ? true : false;
		let actualRadius: number = this.getActualRadius();
		if (this.isExploded && allowExploded && this.owner.totalSliceCount > 1) {
			let bounds: Rect = new Rect(0, this.explodedOrigin.x - actualRadius, this.explodedOrigin.y - actualRadius, actualRadius * 2, actualRadius * 2);
			return bounds;
		}
		return new Rect(0, this.origin.x - actualRadius, this.origin.y - actualRadius, actualRadius * 2, actualRadius * 2);
	}
	getSliceOrigin(): Point {
		if (this.isExploded && this.owner != null && this.owner.allowSliceExplosion && this.owner.totalSliceCount > 1) {
			if (this.hasCorrecttedBounds) {
				return this.correctedExplodedOrigin;
			}
			return this.explodedOrigin;
		}
		return this.origin;
	}
	private _suspendCreation: boolean = false;
	get suspendCreation(): boolean {
		return this._suspendCreation;
	}
	set suspendCreation(value: boolean) {
		let oldValue = this._suspendCreation;
		this._suspendCreation = value;
		if (oldValue && !this._suspendCreation) {
			this.createShape();
		}
	}
	createShape(): void {
		if (this.suspendCreation) {
			return;
		}
		let slicePath: Path = this.view.getSlicePath();
		let viewport: Rect = this.owner.viewport;
		if (isNaN_(this.startAngle) || isNaN_(this.endAngle) || isNaN_(this.radius) || isNaN_(this.explodedRadius) || this.index < 0 || this.owner == null || viewport.width == 0 || viewport.height == 0 || (this.origin.x == 0 && this.origin.y == 0) || (this.explodedOrigin.x == 0 && this.explodedOrigin.y == 0) || this.startAngle == this.endAngle) {
			return;
		}
		this.bounds = this.getSliceBounds();
		let ecc: number = GeometryUtil.eccentricity(this.bounds);
		let halfHeight: number = this.bounds.height / 2;
		let actualRadius: number = this.getActualRadius();
		let center: Point = RectUtil.getCenter(this.bounds);
		let startPointOuter: Point = Slice.ellipsePointAlternate(MathUtil.radians(this.startAngle), ecc, center, halfHeight, 100);
		let endPointOuter: Point = Slice.ellipsePointAlternate(MathUtil.radians(this.endAngle), ecc, center, halfHeight, 100);
		let endPointInner: Point = Slice.ellipsePointAlternate(MathUtil.radians(this.endAngle), ecc, center, this.radius, this.innerExtentEnd);
		let startPointInner: Point = Slice.ellipsePointAlternate(MathUtil.radians(this.startAngle), ecc, center, this.radius, this.innerExtentStart);
		let circle: boolean = Math.abs(PieChartBase.roundAngle(this.endAngle - this.startAngle)) == 360;
		if (circle) {
			if (this.innerExtentEnd == 0) {
				let circleGeometry: EllipseGeometry = ((() => {
					let $ret = new EllipseGeometry();
					$ret.center = center;
					$ret.radiusX = this.radius;
					$ret.radiusY = this.radius;
					return $ret;
				})());
				slicePath.data = circleGeometry;
				return;
			} else if (this.innerExtentEnd > 0) {
				let outerSize = new Size(1, this.radius, this.radius);
				let innerSize = new Size(1, this.radius * this.innerExtentEnd / 100, this.radius * this.innerExtentEnd / 100);
				let leftOuterPoint = ((() => {
					let $ret = PointUtil.create();
					$ret.x = center.x - this.radius;
					$ret.y = center.y;
					return $ret;
				})());
				let rightOuterPoint = ((() => {
					let $ret = PointUtil.create();
					$ret.x = center.x + this.radius;
					$ret.y = center.y;
					return $ret;
				})());
				let leftInnerPoint = ((() => {
					let $ret = PointUtil.create();
					$ret.x = center.x - this.radius * this.innerExtentEnd / 100;
					$ret.y = center.y;
					return $ret;
				})());
				let rightInnerPoint = ((() => {
					let $ret = PointUtil.create();
					$ret.x = center.x + this.radius * this.innerExtentEnd / 100;
					$ret.y = center.y;
					return $ret;
				})());
				let firstOuterArc = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = leftOuterPoint;
					return $ret;
				})());
				let firstOuterArcSegments = new PathSegmentCollection();
				let topOuterArc = ((() => {
					let $ret = new ArcSegment();
					$ret.size = outerSize;
					$ret.sweepDirection = SweepDirection.Clockwise;
					$ret.point = rightOuterPoint;
					return $ret;
				})());
				firstOuterArcSegments.add(topOuterArc);
				firstOuterArc._segments = firstOuterArcSegments;
				let firstInnerArc = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = rightInnerPoint;
					return $ret;
				})());
				let firstInnerArcSegments = new PathSegmentCollection();
				let topInnerArc = ((() => {
					let $ret = new ArcSegment();
					$ret.size = innerSize;
					$ret.sweepDirection = SweepDirection.Counterclockwise;
					$ret.point = leftInnerPoint;
					return $ret;
				})());
				firstInnerArcSegments.add(topInnerArc);
				firstInnerArc._segments = firstInnerArcSegments;
				let secondOuterArc = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = leftOuterPoint;
					return $ret;
				})());
				let secondOuterArcSegments = new PathSegmentCollection();
				let bottomOuterArc = ((() => {
					let $ret = new ArcSegment();
					$ret.size = outerSize;
					$ret.sweepDirection = SweepDirection.Counterclockwise;
					$ret.point = rightOuterPoint;
					return $ret;
				})());
				secondOuterArcSegments.add(bottomOuterArc);
				secondOuterArc._segments = secondOuterArcSegments;
				let secondInnerArc = ((() => {
					let $ret = new PathFigure();
					$ret.startPoint = rightInnerPoint;
					return $ret;
				})());
				let secondInnerArcSegments = new PathSegmentCollection();
				let bottomInnerArc = ((() => {
					let $ret = new ArcSegment();
					$ret.size = innerSize;
					$ret.sweepDirection = SweepDirection.Clockwise;
					$ret.point = leftInnerPoint;
					return $ret;
				})());
				secondInnerArcSegments.add(bottomInnerArc);
				secondInnerArc._segments = secondInnerArcSegments;
				let figureCollection = ((() => {
					let $ret = new PathFigureCollection();
					$ret.add(firstOuterArc);
					$ret.add(firstInnerArc);
					$ret.add(secondOuterArc);
					$ret.add(secondInnerArc);
					return $ret;
				})());
				let pg = ((() => {
					let $ret = new PathGeometry();
					$ret.figures = figureCollection;
					return $ret;
				})());
				let gg = new GeometryGroup();
				gg.children.add(pg);
				slicePath.data = gg;
				return;
			} else {
				let group: GeometryGroup = ((() => {
					let $ret = new GeometryGroup();
					$ret.fillRule = FillRule.EvenOdd;
					return $ret;
				})());
				group.children.add(((() => {
					let $ret = new EllipseGeometry();
					$ret.center = center;
					$ret.radiusX = this.radius;
					$ret.radiusY = this.radius;
					return $ret;
				})()));
				group.children.add(((() => {
					let $ret = new EllipseGeometry();
					$ret.center = center;
					$ret.radiusX = this.radius * this.innerExtentEnd / 100;
					$ret.radiusY = this.radius * this.innerExtentEnd / 100;
					return $ret;
				})()));
				slicePath.data = group;
				return;
			}
		}
		let geometry: PathGeometry = new PathGeometry();
		slicePath.data = geometry;
		let figure: PathFigure = ((() => {
			let $ret = new PathFigure();
			$ret.isClosed = true;
			return $ret;
		})());
		geometry.figures = new PathFigureCollection();
		geometry.figures.add(figure);
		figure._startPoint = startPointOuter;
		let largeArc: boolean = Math.abs(this.endAngle - this.startAngle) > 180;
		let arcOuter: ArcSegment = new ArcSegment();
		arcOuter.point = endPointOuter;
		arcOuter.size = new Size(1, this.bounds.width / 2, this.bounds.height / 2);
		arcOuter.isLargeArc = largeArc;
		if (this.endAngle > this.startAngle) {
			arcOuter.sweepDirection = SweepDirection.Clockwise;
		} else {
			arcOuter.sweepDirection = SweepDirection.Counterclockwise;
		}
		figure._segments = new PathSegmentCollection();
		figure._segments.add(arcOuter);
		let connectEnd: LineSegment = new LineSegment(1);
		connectEnd.point = endPointInner;
		figure._segments.add(connectEnd);
		let lineLenght: number = Math.sqrt(Math.pow(endPointInner.x - endPointOuter.x, 2) + Math.pow(endPointInner.y - endPointOuter.y, 2));
		let innerRadius: number = actualRadius - lineLenght;
		let arcInner: ArcSegment = new ArcSegment();
		arcInner.point = startPointInner;
		if (innerRadius < 0) {
			innerRadius = 0.1;
		}
		arcInner.size = new Size(1, innerRadius, innerRadius);
		arcInner.isLargeArc = arcOuter.isLargeArc;
		arcInner.sweepDirection = SweepDirection.Counterclockwise;
		figure._segments.add(arcInner);
		let bounds: Rect = this.getBounds(slicePath, startPointOuter, endPointOuter, this.startAngle, this.endAngle, center, actualRadius);
		let slicesWithinBounds: boolean = true;
		if (slicesWithinBounds && this.bounds.height > 0 && this.bounds.width > 0 && !viewport.containsRect(bounds)) {
			let sliceBounds: Rect = bounds;
			let chartBounds: Rect = new Rect(0, 0, 0, viewport.width, viewport.height);
			chartBounds.intersect(sliceBounds);
			let midAngle: number = GeometryUtil.simplifyAngle((this.startAngle + this.endAngle) / 2);
			let midAngleRad: number = midAngle / 180 * Math.PI;
			let dx: number = Math.abs((sliceBounds.height - chartBounds.height) / Math.sin(midAngleRad));
			let dy: number = Math.abs((sliceBounds.width - chartBounds.width) / Math.cos(midAngleRad));
			if (isNaN_(dx) || isInfinity(dx)) {
				dx = 0;
			}
			if (isNaN_(dy) || isInfinity(dy)) {
				dy = 0;
			}
			let distance: number = Math.max(dx, dy);
			let explodedCenterNew: Point = GeometryUtil.findCenter(this.owner.viewport.width, this.owner.viewport.height, true, midAngle, this.radius * this.owner.actualExplodedRadius - distance);
			this.view.positionSlice(explodedCenterNew.x - this.explodedOrigin.x, explodedCenterNew.y - this.explodedOrigin.y);
			this.hasCorrecttedBounds = true;
			this.correctedExplodedOrigin = explodedCenterNew;
			this.correctedExplodedBounds = new Rect(0, sliceBounds.x - (explodedCenterNew.x - this.explodedOrigin.x), sliceBounds.y - (explodedCenterNew.y - this.explodedOrigin.y), sliceBounds.width, sliceBounds.height);
		} else {
			this.hasCorrecttedBounds = false;
			this.view.resetSlicePosition();
		}
	}
	containsPoint(p: Point): boolean {
		let viewport: Rect = this.owner.viewport;
		if (this._visibility == Visibility.Collapsed) {
			return false;
		}
		if (isNaN_(this.startAngle) || isNaN_(this.endAngle) || isNaN_(this.radius) || isNaN_(this.explodedRadius) || this.index < 0 || this.owner == null || viewport.width == 0 || viewport.height == 0 || (this.origin.x == 0 && this.origin.y == 0) || (this.explodedOrigin.x == 0 && this.explodedOrigin.y == 0)) {
			return false;
		}
		let actualRadius: number = this.getActualRadius();
		let startRadius: number = ((this.innerExtentEnd / 100) * actualRadius);
		let endRadius: number = actualRadius;
		let center: Point = this.origin;
		if (this.isExploded && this.owner.allowSliceExplosion && this.owner.totalSliceCount > 1) {
			center = this.explodedOrigin;
			if (this.hasCorrecttedBounds) {
				center = this.correctedExplodedOrigin;
			}
		}
		let startRadiusSquared: number = startRadius * startRadius;
		let endRadiusSquared: number = endRadius * endRadius;
		let dist: number = Math.pow(p.x - center.x, 2) + Math.pow(p.y - center.y, 2);
		if (dist < startRadiusSquared || dist > endRadiusSquared) {
			return false;
		}
		let angle: number = Math.atan2(p.y - center.y, p.x - center.x);
		angle = angle * 180 / Math.PI;
		return this.containsAngle(angle);
	}
	private containsAngle(angle: number): boolean {
		angle = GeometryUtil.simplifyAngle(angle);
		let minAngle: number = Math.min(this.startAngle, this.endAngle);
		let maxAngle: number = Math.max(this.startAngle, this.endAngle);
		return (angle > minAngle && angle < maxAngle) || (angle - 360 > minAngle && angle - 360 < maxAngle) || (angle + 360 > minAngle && angle + 360 < maxAngle);
	}
	private getBounds(slicePath: Path, outerStart: Point, outerEnd: Point, startAngle: number, endAngle: number, center: Point, radius: number): Rect {
		let points: List$1<Point> = new List$1<Point>(Point_$type, 0);
		points.add(outerStart);
		points.add(outerEnd);
		points.add(center);
		startAngle = GeometryUtil.simplifyAngle(startAngle);
		endAngle = GeometryUtil.simplifyAngle(endAngle);
		if ((0 > startAngle && 0 < endAngle) || (360 > startAngle && 360 < endAngle) || (endAngle < startAngle)) {
			points.add(GeometryUtil.findRadialPoint(center, 0, radius));
		}
		if (90 > startAngle && 90 < endAngle) {
			points.add(GeometryUtil.findRadialPoint(center, 90, radius));
		}
		if (180 > startAngle && 180 < endAngle) {
			points.add(GeometryUtil.findRadialPoint(center, 180, radius));
		}
		if (270 > startAngle && 270 < endAngle) {
			points.add(GeometryUtil.findRadialPoint(center, 270, radius));
		}
		let minX: number = 1.7976931348623157E+308;
		let minY: number = 1.7976931348623157E+308;
		let maxX: number = -1.7976931348623157E+308;
		let maxY: number = -1.7976931348623157E+308;
		for (let point of fromEnum<Point>(points)) {
			minX = Math.min(minX, point.x);
			minY = Math.min(minY, point.y);
			maxX = Math.max(maxX, point.x);
			maxY = Math.max(maxY, point.y);
		}
		return new Rect(0, minX, minY, maxX - minX, maxY - minY);
	}
	exportVisualData(): PieSliceVisualData {
		let slice: PieSliceVisualData = new PieSliceVisualData();
		slice.appearance = new PrimitiveAppearanceData();
		slice.labelAppearance = new LabelAppearanceData();
		slice.leaderLineAppearance = new PrimitiveAppearanceData();
		slice.startAngle = this.startAngle;
		slice.endAngle = this.endAngle;
		slice.explodedOrigin = PointData.fromPoint(this.explodedOrigin);
		slice.explodedRadius = this.explodedRadius;
		slice.origin = PointData.fromPoint(this.origin);
		slice.radius = this.getActualRadius();
		slice.index = this.index;
		slice.innerExtentEnd = this.innerExtentEnd;
		slice.innerExtentStart = this.innerExtentStart;
		slice.isExploded = this.isExploded;
		slice.isOthersSlice = this.isOthersSlice;
		slice.isSelected = this.isSelected;
		if (this.label != null) {
			slice.labelAppearance.angle = this.label.angle;
			slice.labelBounds = RectData.fromRect(this.label.bounds);
			slice.labelAngle = this.label.angle;
			if (typeCast<TextBlock>((<any>TextBlock).$type, this.label.label) !== null) {
				let label: TextBlock = typeCast<TextBlock>((<any>TextBlock).$type, this.label.label);
				slice.label = label.text;
				let font: FontInfo = null;
				slice.labelAppearance.labelBrush = AppearanceHelper.fromBrush(label.fill);
				slice.labelAppearance.text = label.text;
				if (this.owner != null) {
					font = this.owner.getFontInfo();
					if (font == null) {
						font = this.owner.view.styleInfo.font;
					}
				}
				slice.labelAppearance = AppearanceHelper.fromTextElement(label, font);
				slice.labelAppearance.visibility = this.label._visibility == Visibility.Visible;
			} else {
				slice.label = this.label.label.toString();
			}
			if (this.label.leaderLine != null) {
				slice.leaderLineAppearance.fill = AppearanceHelper.fromBrush(this.label.leaderLine._fill);
				slice.leaderLineAppearance.opacity = this.label.leaderLine._opacity;
				slice.leaderLineAppearance.stroke = AppearanceHelper.fromBrush(this.label.leaderLine._stroke);
				slice.leaderLineAppearance.strokeThickness = this.label.leaderLine.strokeThickness;
				slice.leaderLineAppearance.isVisible = this.label.leaderLine._visibility == Visibility.Visible;
				slice.leaderLinePath = new PathVisualData(2, "leaderLine", this.label.leaderLine);
			} else if (this.label.leaderLinePath != null) {
				slice.leaderLineAppearance.fill = AppearanceHelper.fromBrush(this.label.leaderLinePath._fill);
				slice.leaderLineAppearance.opacity = this.label.leaderLinePath._opacity;
				slice.leaderLineAppearance.stroke = AppearanceHelper.fromBrush(this.label.leaderLinePath._stroke);
				slice.leaderLineAppearance.strokeThickness = this.label.leaderLinePath.strokeThickness;
				slice.leaderLineAppearance.isVisible = this.label.leaderLinePath._visibility == Visibility.Visible;
				slice.leaderLinePath = new PathVisualData(1, "leaderLine", this.label.leaderLinePath);
			}
		}
		if (this.view != null) {
			let slicePath: Path = this.view.getSlicePath();
			slice.slicePath = new PathVisualData(1, "slicePath", slicePath);
			slice.appearance.fill = AppearanceHelper.fromBrush(slicePath._fill);
			slice.appearance.opacity = slicePath._opacity;
			slice.appearance.stroke = AppearanceHelper.fromBrush(slicePath._stroke);
			slice.appearance.strokeThickness = slicePath.strokeThickness;
			slice.appearance.isVisible = slicePath._visibility == Visibility.Visible;
		}
		return slice;
	}
	private static ellipsePointAlternate(theta: number, eccentricity: number, center: Point, halfHeight: number, extent: number): Point {
		if (halfHeight == 0) {
			return center;
		}
		let cos: number = Math.cos(theta);
		let sin: number = Math.sin(theta);
		let r: number = Math.sqrt(halfHeight * halfHeight / (1 - (eccentricity * Math.pow(cos, 2))));
		r *= (extent / 100);
		return <Point>{ $type: Point_$type, x: r * cos + center.x, y: r * sin + center.y };
	}
	private _background: Brush = null;
	get background(): Brush {
		return this._background;
	}
	set background(value: Brush) {
		this._background = value;
	}
	private _borderBrush: Brush = null;
	get borderBrush(): Brush {
		return this._borderBrush;
	}
	set borderBrush(value: Brush) {
		this._borderBrush = value;
	}
}

/**
 * @hidden 
 */
export class PieChartBaseView extends Base {
	static $t: Type = markType(PieChartBaseView, 'PieChartBaseView');
	constructor(model: PieChartBase) {
		super();
		this.model = model;
		this.viewManager = new PieChartViewManager(this);
	}
	private _model: PieChartBase = null;
	get model(): PieChartBase {
		return this._model;
	}
	set model(value: PieChartBase) {
		this._model = value;
	}
	onInit(): void {
		this.toolTipContext = new PieSliceDataContext();
		this.toolTipContext.series = this.model;
		this.viewport = Rect.empty;
		this.slices = new List$1<Slice>((<any>Slice).$type, 0);
		this.labels = new List$1<PieLabel>((<any>PieLabel).$type, 0);
		this.model.legendItemTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = PieLegendTemplates.pieLegendItemRender;
			$ret.measure = PieLegendTemplates.defaultLegendItemMeasure;
			return $ret;
		})());
		this.model.legendItemBadgeTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = PieLegendTemplates.pieBadgeTemplate;
			$ret.measure = PieLegendTemplates.legendItemBadgeMeasure;
			return $ret;
		})());
		this.viewManager.initializeScalingRatio();
	}
	setDefaultBrushes(): void {
		let styleInfo = this.viewManager.getDefaultStyle();
		if (this.model.brushes == null) {
			this.model.brushes = styleInfo.brushes;
		}
		if (this.model.outlines == null) {
			this.model.outlines = styleInfo.outlines;
		}
		if (this.model.selectedStyle == null) {
			this.model.selectedStyle = ((() => {
				let $ret = new Style();
				$ret.fill = styleInfo.selectedBrush != null ? styleInfo.selectedBrush.color.colorString : null;
				$ret.stroke = styleInfo.selectedOutlineBrush != null ? styleInfo.selectedOutlineBrush.color.colorString : null;
				$ret.strokeThickness = styleInfo.selectedOutlineThickness;
				$ret.opacity = styleInfo.selectedOpacity;
				return $ret;
			})());
		}
		this.styleInfo = styleInfo;
		if (this.model.textStyle != null) {
			this.styleInfo.font = this.model.getFontInfo();
		}
	}
	onAttachedToUI(): void {
		this.viewManager.onAttachedToUI();
	}
	onDetachedFromUI(): void {
		this.viewManager.onDetachedFromUI();
	}
	private _fontBrush: Brush = null;
	get fontBrush(): Brush {
		return this._fontBrush;
	}
	set fontBrush(value: Brush) {
		this._fontBrush = value;
	}
	private _styleInfo: PieChartStyleInfo = null;
	get styleInfo(): PieChartStyleInfo {
		return this._styleInfo;
	}
	set styleInfo(value: PieChartStyleInfo) {
		this._styleInfo = value;
	}
	private _backgroundContext: RenderingContext = null;
	protected get backgroundContext(): RenderingContext {
		return this._backgroundContext;
	}
	protected set backgroundContext(value: RenderingContext) {
		this._backgroundContext = value;
	}
	private _mainContext: RenderingContext = null;
	protected get mainContext(): RenderingContext {
		return this._mainContext;
	}
	protected set mainContext(value: RenderingContext) {
		this._mainContext = value;
	}
	private _labelContext: RenderingContext = null;
	protected get labelContext(): RenderingContext {
		return this._labelContext;
	}
	protected set labelContext(value: RenderingContext) {
		this._labelContext = value;
	}
	private _overlayContext: RenderingContext = null;
	protected get overlayContext(): RenderingContext {
		return this._overlayContext;
	}
	protected set overlayContext(value: RenderingContext) {
		this._overlayContext = value;
	}
	private _viewManager: PieChartViewManager = null;
	get viewManager(): PieChartViewManager {
		return this._viewManager;
	}
	set viewManager(value: PieChartViewManager) {
		this._viewManager = value;
	}
	onContainerProvided(container: any): void {
		if (container == null) {
			this._dirty = false;
			this.viewManager.onContainerProvided(null);
			this.backgroundContext = null;
			this.mainContext = null;
			this.labelContext = null;
			this.overlayContext = null;
			return;
		}
		this.viewManager.onContainerProvided(container);
		this.backgroundContext = this.viewManager.backgroundContext;
		this.mainContext = this.viewManager.mainContext;
		this.labelContext = this.viewManager.labelContext;
		this.overlayContext = this.viewManager.overlayContext;
	}
	getContainerRect(): Rect {
		return this.viewport;
	}
	getContainerOffsets(): Point {
		return this.viewManager.getContainerOffsets();
	}
	resize(): void {
		this.viewport = this.viewManager.resize();
		this.model.onSizeUpdated();
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _dirty: boolean = false;
	protected makeDirty(): void {
		if (!this._dirty) {
			this._dirty = true;
			this.viewManager.queueWork(runOn(this, this.undirty));
		}
	}
	private undirty(): void {
		if (this._dirty) {
			this._dirty = false;
			this.render();
		}
	}
	private _renderedRect: Rect = Rect.empty;
	protected render(): void {
		this.ensureContextFont();
		this.viewManager.ensureCorrectSize(this.viewport.width, this.viewport.height);
		if (this.overlayContext != null && this.overlayContext.shouldRender) {
			if (this.model.actualPixelScalingRatio != 1) {
				this.overlayContext.save();
				this.overlayContext.scale(this.model.actualPixelScalingRatio, this.model.actualPixelScalingRatio);
			}
			if (!this._renderedRect.isEmpty) {
				this.overlayContext.clearRectangle(this._renderedRect.left, this._renderedRect.top, this._renderedRect.width, this._renderedRect.height);
			}
		}
		if (this.labelContext != null && this.labelContext.shouldRender) {
			if (this.model.actualPixelScalingRatio != 1) {
				this.labelContext.save();
				this.labelContext.scale(this.model.actualPixelScalingRatio, this.model.actualPixelScalingRatio);
			}
			if (!this._renderedRect.isEmpty) {
				this.labelContext.clearRectangle(this._renderedRect.left, this._renderedRect.top, this._renderedRect.width, this._renderedRect.height);
			}
		}
		if (this.mainContext != null && this.mainContext.shouldRender) {
			if (this.model.actualPixelScalingRatio != 1) {
				this.mainContext.save();
				this.mainContext.scale(this.model.actualPixelScalingRatio, this.model.actualPixelScalingRatio);
			}
			if (!this._renderedRect.isEmpty) {
				this.mainContext.clearRectangle(this._renderedRect.left, this._renderedRect.top, this._renderedRect.width, this._renderedRect.height);
			}
		}
		if (this.backgroundContext != null && this.backgroundContext.shouldRender) {
			if (this.model.actualPixelScalingRatio != 1) {
				this.backgroundContext.save();
				this.backgroundContext.scale(this.model.actualPixelScalingRatio, this.model.actualPixelScalingRatio);
			}
			if (!this._renderedRect.isEmpty) {
				this.backgroundContext.clearRectangle(this._renderedRect.left, this._renderedRect.top, this._renderedRect.width, this._renderedRect.height);
			}
		}
		this.renderOverride();
		if (!this._renderedRect.isEmpty && this.model.actualPixelScalingRatio != 1) {
			if (this.overlayContext != null && this.overlayContext.shouldRender) {
				this.overlayContext.restore();
			}
			if (this.labelContext != null && this.labelContext.shouldRender) {
				this.labelContext.restore();
			}
			if (this.mainContext != null && this.mainContext.shouldRender) {
				this.mainContext.restore();
			}
			if (this.backgroundContext != null && this.backgroundContext.shouldRender) {
				this.backgroundContext.restore();
			}
		}
	}
	protected renderOverride(): void {
		this._renderedRect = this.viewport;
		if (this.mainContext != null && this.mainContext.shouldRender) {
			this.renderUnselectedSlices();
			this.renderSelectedSlices();
		}
		if (this.labelContext != null && this.labelContext.shouldRender) {
			let font = this.styleInfo.font;
			if (this.model.textStyle != null) {
				font = this.model.getFontInfo();
			}
			this.labelContext.setFontInfo(font);
			for (let label of fromEnum<PieLabel>(this.labels)) {
				if (label._visibility == Visibility.Visible) {
					let txt: TextBlock = <TextBlock>label.label;
					if (txt != null) {
						{
							if (label.slice.foreground == null) {
								if (label.slice.labelInside) {
									txt.fill = this.styleInfo.innerFontBrush;
								} else {
									txt.fill = this.styleInfo.outerFontBrush;
								}
							} else {
								txt.fill = label.slice.foreground;
							}
							this.labelContext.renderTextBlock(txt);
						}
					}
					let sliceBackground = label.slice.background;
					if (label.slice.style != null) {
						let path = new Path();
						this.mainContext.applyStyle(path, label.slice.style);
						if (path._fill != null) {
							sliceBackground = path._fill;
						}
					}
					if (this.model.leaderLineType != LeaderLineType.Straight && label.leaderLinePath != null) {
						label.leaderLinePath._stroke = sliceBackground;
						label.leaderLinePath.strokeThickness = 1;
						if (this.model.leaderLineStyle != null) {
							this.labelContext.applyStyle(label.leaderLinePath, this.model.leaderLineStyle);
						}
						this.labelContext.renderPath(label.leaderLinePath);
					}
					if (this.model.leaderLineType == LeaderLineType.Straight && label.leaderLine != null) {
						label.leaderLine._stroke = sliceBackground;
						label.leaderLine.strokeThickness = 1;
						if (this.model.leaderLineStyle != null) {
							this.labelContext.applyStyle(label.leaderLine, this.model.leaderLineStyle);
						}
						this.labelContext.renderLine(label.leaderLine);
					}
				}
			}
		}
	}
	private renderSlice(slice: Slice): void {
		if (slice._visibility != Visibility.Visible) {
			return;
		}
		let slicePath: Path = slice.view.getSlicePath();
		this.viewManager.setDefaultSliceBrushes(slicePath);
		slicePath.strokeThickness = 1;
		slicePath._opacity = slice._opacity;
		if (slice.background != null) {
			slicePath._fill = slice.background;
		}
		if (slice.borderBrush != null) {
			slicePath._stroke = slice.borderBrush;
		}
		if (slice.style != null) {
			this.mainContext.applyStyle(slicePath, slice.style);
		}
		if (slicePath.renderTransform != null) {
			this.mainContext.save();
			this.mainContext.applyTransform(slicePath.renderTransform);
		}
		let fillBrush = slicePath._fill;
		let strokeBrush = slicePath._stroke;
		let changed: boolean = this.centerRadialBrushes(slice, slicePath, this.mainContext);
		this.mainContext.renderPath(slicePath);
		if (changed) {
			slicePath._fill = fillBrush;
			slicePath._stroke = strokeBrush;
		}
		if (slicePath.renderTransform != null) {
			this.mainContext.restore();
		}
	}
	private renderUnselectedSlices(): void {
		for (let slice of fromEnum<Slice>(this.slices)) {
			if (!slice.isSelected) {
				this.renderSlice(slice);
			}
		}
	}
	private renderSelectedSlices(): void {
		for (let slice of fromEnum<Slice>(this.slices)) {
			if (slice.isSelected) {
				this.renderSlice(slice);
			}
		}
	}
	private centerRadialBrushes(slice: Slice, slicePath: Path, context: RenderingContext): boolean {
		return false;
	}
	canvasMouseMove(p: Point, onMouseMove: boolean, isFinger: boolean): void {
		let prev = this.activeSlice;
		this.updateActiveSlice(p);
		if (this.activeSlice == null && prev != null) {
			let me: MouseEventArgs = ((() => {
				let $ret = new MouseEventArgs();
				$ret.position = p;
				return $ret;
			})());
			this.model.itemMouseLeft(this.activeSlice, me);
		} else if (this.activeSlice != null) {
			let me1: MouseEventArgs = ((() => {
				let $ret = new MouseEventArgs();
				$ret.position = p;
				return $ret;
			})());
			this.model.itemMouseMoved(this.activeSlice, me1);
		}
	}
	canvasMouseLeave(p: Point): void {
		let prev = this.activeSlice;
		this.updateActiveSlice(p);
		let me: MouseEventArgs = ((() => {
			let $ret = new MouseEventArgs();
			$ret.position = p;
			return $ret;
		})());
		this.model.itemMouseLeft(prev, me);
	}
	canvasMouseDown(p: Point): void {
		this.updateActiveSlice(p);
	}
	canvasMouseUp(p: Point): void {
		this.handleSliceClick(p);
	}
	private handleSliceClick(p: Point): void {
		let me: MouseButtonEventArgs = ((() => {
			let $ret = new MouseButtonEventArgs();
			$ret.position = p;
			return $ret;
		})());
		let shouldFireSliceClick: boolean = true;
		let labelClicked: PieLabel = null;
		for (let pl of fromEnum<PieLabel>(this.labels)) {
			let containsPoint: boolean = pl.bounds.containsPoint(p);
			if (containsPoint) {
				labelClicked = pl;
				shouldFireSliceClick = this.model.labelClicked(pl.slice, me);
				break;
			}
		}
		this.updateActiveSlice(p);
		if (this.activeSlice == null && shouldFireSliceClick && labelClicked != null) {
			this.model.sliceClicked(labelClicked.slice, me);
		} else if (this.activeSlice != null && shouldFireSliceClick) {
			this.model.sliceClicked(this.activeSlice, me);
		}
	}
	private _activeSlice: Slice = null;
	protected get activeSlice(): Slice {
		return this._activeSlice;
	}
	protected set activeSlice(value: Slice) {
		this._activeSlice = value;
	}
	private updateActiveSlice(p: Point): void {
		this.activeSlice = null;
		for (let i = 0; i < this.slices.count; i++) {
			if (this.slices._inner[i]._visibility == Visibility.Visible && this.slices._inner[i].containsPoint(p)) {
				this.activeSlice = this.slices._inner[i];
				break;
			}
		}
	}
	isOverLabel(p: Point): boolean {
		for (let pl of fromEnum<PieLabel>(this.labels)) {
			let containsPoint: boolean = pl.bounds.containsPoint(p);
			if (containsPoint) {
				return true;
			}
		}
		return false;
	}
	isOverSlice(p: Point): boolean {
		for (let i = 0; i < this.slices.count; i++) {
			if (this.slices._inner[i]._visibility == Visibility.Visible && this.slices._inner[i].containsPoint(p)) {
				return true;
			}
		}
		return false;
	}
	isOverLabelOrSlice(p: Point): boolean {
		return this.isOverLabel(p) || this.isOverSlice(p);
	}
	private sizeUpdated(): void {
		this.model.onSizeUpdated();
	}
	closeToolTip(): void {
		this.hideTooltip();
	}
	updateToolTip(item: any, args: any): void {
		let me: MouseEventArgs = <MouseEventArgs>args;
		this.updateToolTip1(me.position, item, args);
	}
	private _slices: List$1<Slice> = null;
	protected get slices(): List$1<Slice> {
		return this._slices;
	}
	protected set slices(value: List$1<Slice>) {
		this._slices = value;
	}
	sliceCreate(): Slice {
		let slice: Slice = new Slice();
		slice.owner = this.model;
		this.slices.add(slice);
		return slice;
	}
	sliceActivate(slice: Slice): void {
		slice._visibility = Visibility.Visible;
	}
	sliceDisactivate(slice: Slice): void {
		slice._visibility = Visibility.Collapsed;
	}
	sliceDestroy(slice: Slice): void {
		slice.owner = null;
		this.slices.remove(slice);
	}
	private _labels: List$1<PieLabel> = null;
	protected get labels(): List$1<PieLabel> {
		return this._labels;
	}
	protected set labels(value: List$1<PieLabel>) {
		this._labels = value;
	}
	labelCreate(): PieLabel {
		let label: PieLabel = new PieLabel();
		if (this.model.leaderLineType == LeaderLineType.Straight) {
			label.leaderLine = new Line();
		} else {
			label.leaderLinePath = new Path();
			let geom = new PathGeometry();
			geom.figures.add(new PathFigure());
			geom.figures._inner[0]._segments.add(new BezierSegment(0));
			label.leaderLinePath.data = geom;
		}
		this.labels.add(label);
		return label;
	}
	labelActivate(label: PieLabel): void {
		label._visibility = Visibility.Visible;
	}
	labelDisactivate(label: PieLabel): void {
		label._visibility = Visibility.Collapsed;
	}
	labelDestroy(label: PieLabel): void {
		this.labels.remove(label);
	}
	updateLabelLeaderLine(label: PieLabel): void {
		if ((this.model.leaderLineType != LeaderLineType.Straight && label.leaderLinePath != null) || (this.model.leaderLineType == LeaderLineType.Straight && label.leaderLine != null)) {
			return;
		}
		if (this.model.leaderLineType == LeaderLineType.Straight) {
			label.leaderLinePath = null;
			label.leaderLine = new Line();
		} else {
			label.leaderLine = null;
			label.leaderLinePath = new Path();
			let geom = new PathGeometry();
			let figure = new PathFigure();
			figure._startPoint = <Point>{ $type: Point_$type, x: NaN, y: NaN };
			geom.figures.add(figure);
			geom.figures._inner[0]._segments.add(new BezierSegment(0));
			label.leaderLinePath.data = geom;
		}
	}
	setSliceAppearance(slice: Slice): void {
		if (this.model.othersCategoryStyle != null && slice.isOthersSlice) {
			slice.background = this.getBrushFromIndex(slice.index);
			slice.borderBrush = this.getOutlineFromIndex(slice.index);
			slice.style = this.model.othersCategoryStyle;
		} else if (slice.isSelected && this.model.allowSliceSelection && this.model.selectedStyle != null) {
			slice.style = this.model.selectedStyle;
		} else {
			slice.style = null;
			slice.background = this.getBrushFromIndex(slice.index);
			slice.borderBrush = this.getOutlineFromIndex(slice.index);
		}
	}
	private getBrushFromIndex(index: number): Brush {
		if (this.model.brushes != null && index >= 0 && this.model.brushes.count > 0) {
			return this.model.brushes.item(index % this.model.brushes.count);
		}
		return null;
	}
	private getOutlineFromIndex(index: number): Brush {
		if (this.model.outlines != null && index >= 0 && this.model.outlines.count > 0) {
			return this.model.outlines.item(index % this.model.outlines.count);
		}
		return null;
	}
	getLabel(slice: Slice): any {
		if (slice == null || slice.label == null) {
			return this.model.labelMemberPath;
		}
		let pieLabel: PieLabel = slice.label;
		let label: any = pieLabel.label;
		if (typeCast<TextBlock>((<any>TextBlock).$type, label) !== null) {
			return (<TextBlock>label).text;
		}
		return label;
	}
	static readonly tEXT_MARGIN: number = 0;
	getDesiredWidth(element: any): number {
		let tb = typeCast<TextBlock>((<any>TextBlock).$type, element);
		if (tb != null && tb.text != null && this.labelContext != null) {
			return this.labelContext.measureTextBlockWidth(tb) + PieChartBaseView.tEXT_MARGIN;
		}
		return 0;
	}
	updateCurrentFontHeight(): void {
		this.fontHeight = FontUtil.getCurrentFontHeight(this.viewManager.container, this.viewManager.getOwnerFont());
	}
	private _fontHeight: number = 0;
	get fontHeight(): number {
		return this._fontHeight;
	}
	set fontHeight(value: number) {
		this._fontHeight = value;
	}
	getDesiredHeight(element: any): number {
		return this.fontHeight + PieChartBaseView.tEXT_MARGIN;
	}
	getLabelBounds(label: PieLabel): Rect {
		let lbl: any = label.label;
		if (typeCast<TextBlock>((<any>TextBlock).$type, lbl) !== null) {
			let desiredWidth: number = this.getDesiredWidth(lbl);
			let desiredHeight: number = this.getDesiredHeight(lbl);
			return new Rect(0, 0, 0, desiredWidth, desiredHeight);
		}
		return Rect.empty;
	}
	updatePieViewport(): Size {
		return new Size(1, this.viewport.width, this.viewport.height);
	}
	updateLabelPosition(label: PieLabel, x: number, y: number): void {
		let txt = typeCast<TextBlock>((<any>TextBlock).$type, label.label);
		if (txt != null) {
			txt.canvasLeft = x;
			txt.canvasTop = y;
		}
		this.makeDirty();
	}
	updateToolTipContent(toolTip: any): void {
		this.updateToolTipValue(toolTip);
	}
	updateView(): void {
		this.makeDirty();
	}
	labelPreMeasure(): void {
		this.ensureContextFont();
	}
	private ensureContextFont(): void {
		let font = this.styleInfo.font;
		if (this.model.textStyle != null) {
			font = this.model.getFontInfo();
		}
		if (this.labelContext != null) {
			this.labelContext.setFontInfo(font);
		}
	}
	onContainerResized(width: number, height: number): void {
		this.viewManager.onContainerResized(width, height);
	}
	notifyContainerResized(): void {
		this.viewManager.notifyContainerResized();
	}
	private _toolTipPosition: Point = null;
	protected get toolTipPosition(): Point {
		return this._toolTipPosition;
	}
	protected set toolTipPosition(value: Point) {
		this._toolTipPosition = value;
	}
	private _toolTipItem: any = null;
	protected get toolTipItem(): any {
		return this._toolTipItem;
	}
	protected set toolTipItem(value: any) {
		this._toolTipItem = value;
	}
	private _toolTipVisible: boolean = false;
	protected get toolTipVisible(): boolean {
		return this._toolTipVisible;
	}
	protected set toolTipVisible(value: boolean) {
		this._toolTipVisible = value;
	}
	private _toolTipContext: PieSliceDataContext = null;
	protected get toolTipContext(): PieSliceDataContext {
		return this._toolTipContext;
	}
	protected set toolTipContext(value: PieSliceDataContext) {
		this._toolTipContext = value;
	}
	get invalidLabelBindingError(): any {
		return this.viewManager != null && this.viewManager.container != null ? this.viewManager.container.getResourceString("invalidLabelBinding") : "There is no such value for the labels to bind.";
	}
	hideTooltip(): void {
		if (this.toolTipVisible == true) {
			this.toolTipVisible = false;
			this.viewManager.hideTooltip(this.toolTipContext);
		}
	}
	updateToolTipValue(p: any): void {
		this.viewManager.updateTooltipValue(p);
	}
	updateToolTip1(pt: Point, item: any, data: any): void {
		this.toolTipVisible = true;
		this.toolTipPosition = pt;
		if (item == null) {
			this.toolTipItem = null;
			this.toolTipContext.item = null;
		} else {
			this.toolTipItem = (<Slice>item).dataContext;
			this.toolTipContext.item = (<Slice>item).dataContext;
			this.toolTipContext.slice = <Slice>item;
		}
		let offsets = this.model.getContainerOffsets();
		let pos_ = <Point>{ $type: Point_$type, x: pt.x + 15 + offsets.x, y: pt.y + 15 + offsets.y };
		let context_ = this.toolTipContext;
		this.viewManager.updateTooltipPosition(pos_, context_);
	}
	styleUpdated(): void {
		this.setDefaultBrushes();
		this.updateCurrentFontHeight();
		this.model.renderChart();
	}
	onIsSurfaceInteractionDisabledChanged(): void {
		this.viewManager.onIsSurfaceInteractionDisabledChanged(this.model.isSurfaceInteractionDisabled);
	}
	getContainer(): any {
		return this.viewManager.getContainer();
	}
	flush(): void {
		if (this._dirty) {
			this.undirty();
		}
	}
	ready(): boolean {
		return this.getContainer() != null;
	}
	exportViewData(visualData: PieChartVisualData): void {
		this.viewManager.exportViewData(visualData);
	}
	isValid(): boolean {
		return true;
	}
	preRender(): void {
	}
	getActualBackground(slice: Slice): Brush {
		let bg = this.viewManager.getStyleBackground(slice.style);
		if (bg != null) {
			return bg;
		}
		return slice.background;
	}
	getActualOutline(slice: Slice): Brush {
		let outline = this.viewManager.getStyleOutline(slice.style);
		if (outline != null) {
			return outline;
		}
		return slice.borderBrush;
	}
	getActualOutlineThickness(slice: Slice): number {
		return this.viewManager.getStyleOutlineThickness(slice.style);
	}
	getStrokeThicknessFromStyle(style: Style): number {
		return this.viewManager.getStyleOutlineThickness(style);
	}
	getUnselectedStrokeThickness(): number {
		for (let slice of fromEnum<Slice>(this.slices)) {
			if (!slice.isSelected) {
				return slice.strokeThickness;
			}
		}
		return NaN;
	}
	pixelScalingRatioChanged(): void {
		this.viewManager.pixelScalingRatioChanged();
		this.makeDirty();
	}
	getOriginalEvent(args: any): any {
		return this.viewManager.eventProxy.originalEvent;
	}
}

/**
 * @hidden 
 */
export class PieSliceDataContext extends DataContext {
	static $t: Type = markType(PieSliceDataContext, 'PieSliceDataContext', (<any>DataContext).$type);
	private _slice: Slice = null;
	get slice(): Slice {
		return this._slice;
	}
	set slice(value: Slice) {
		this._slice = value;
	}
	private _percentValue: number = 0;
	get percentValue(): number {
		return this._percentValue;
	}
	set percentValue(value: number) {
		this._percentValue = value;
	}
	private _isOthersSlice: boolean = false;
	get isOthersSlice(): boolean {
		return this._isOthersSlice;
	}
	set isOthersSlice(value: boolean) {
		this._isOthersSlice = value;
	}
	flatten(): any {
		let ret_ = super.flatten();
		let percentValue_ = this.percentValue;
		let isOthersSlice_ = this.isOthersSlice;
		ret_.percentValue = percentValue_;
		ret_.isOthersSlice = isOthersSlice_;
		if (isOthersSlice_ && this.item != null) {
			let items_ = [];
			for (let currItem_ of fromEn<any>(<IList><any>this.item)) {
				items_.push(currItem_);
			}
			ret_.item = items_;
		}
		return ret_;
	}
}

/**
 * @hidden 
 */
export class SliceView extends Base {
	static $t: Type = markType(SliceView, 'SliceView');
	private _model: Slice = null;
	protected get model(): Slice {
		return this._model;
	}
	protected set model(value: Slice) {
		this._model = value;
	}
	constructor(model: Slice) {
		super();
		this.model = model;
	}
	private _slicePath: Path = null;
	get slicePath(): Path {
		return this._slicePath;
	}
	set slicePath(value: Path) {
		this._slicePath = value;
	}
	onInit(): void {
		this.slicePath = new Path();
		this.model.content = this.slicePath;
	}
	onTemplateProvided(): void {
		this.model.createShape();
	}
	getSlicePath(): Path {
		return this.slicePath;
	}
	positionSlice(x: number, y: number): void {
		this.slicePath.renderTransform = ((() => {
			let $ret = new TranslateTransform();
			$ret.x = x;
			$ret.y = y;
			return $ret;
		})());
	}
	resetSlicePosition(): void {
		this.slicePath.renderTransform = null;
	}
}


