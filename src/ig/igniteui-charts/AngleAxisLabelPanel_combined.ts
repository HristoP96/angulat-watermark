/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { Base, Point, Boolean_$type, typeCast, Type, markType, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point_$type, typeGetValue, fromEnum, runOn, Number_$type, PointUtil, IEnumerable$1, IEnumerable$1_$type } from "igniteui-core/type";
import { AxisLabelPanelBaseView } from "./AxisLabelPanelBaseView";
import { Rect } from "igniteui-core/Rect";
import { Extensions } from "igniteui-core/Extensions";
import { Axis } from "./Axis";
import { List$1 } from "igniteui-core/List$1";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { LabelPosition } from "./LabelPosition";
import { XamDataChart } from "./XamDataChart";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { IAngleScaler, IAngleScaler_$type } from "./IAngleScaler";
import { CategoryAxisRenderer } from "./CategoryAxisRenderer";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { AxisOrientation } from "./AxisOrientation";
import { AxisView } from "./AxisView";
import { Control } from "igniteui-core/Control";
import { PolarAxisRenderingManager } from "./PolarAxisRenderingManager";
import { AxisLabelManager } from "./AxisLabelManager";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { AxisRendererBase } from "./AxisRendererBase";
import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { ViewportUtils } from "./ViewportUtils";
import { RadialAxisRenderingParameters } from "./RadialAxisRenderingParameters";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { CategoryAxisRenderingParameters } from "./CategoryAxisRenderingParameters";
import { CategoryTickmarkValues } from "./CategoryTickmarkValues";
import { MathUtil } from "igniteui-core/MathUtil";
import { SeriesViewer } from "./SeriesViewer";
import { TickmarkValues } from "./TickmarkValues";
import { ScalerParams } from "./ScalerParams";
import { Series } from "./Series";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { Geometry } from "igniteui-core/Geometry";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { RangeInfo } from "./RangeInfo";
import { Visibility } from "igniteui-core/Visibility";
import { CategoryMode } from "./CategoryMode";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { NumericAxisBase } from "./NumericAxisBase";
import { NumericAxisRenderer } from "./NumericAxisRenderer";
import { LogarithmicTickmarkValues } from "./LogarithmicTickmarkValues";
import { NumericAxisRenderingParameters } from "./NumericAxisRenderingParameters";
import { PolarAxisRenderingParameters } from "./PolarAxisRenderingParameters";
import { RadialAxisLabelPanel } from "./RadialAxisLabelPanel";
import { LinearTickmarkValues } from "./LinearTickmarkValues";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { IPolarRadialRenderingParameters, IPolarRadialRenderingParameters_$type } from "./IPolarRadialRenderingParameters";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { Size } from "igniteui-core/Size";
import { PathSegment } from "igniteui-core/PathSegment";
import { SweepDirection } from "igniteui-core/SweepDirection";
import { CategoryAxisBaseView } from "./CategoryAxisBaseView";
import { NumericAxisBaseView } from "./NumericAxisBaseView";

/**
 * @hidden 
 */
export class AngleAxisLabelPanel extends AxisLabelPanelBase {
	static $t: Type = markType(AngleAxisLabelPanel, 'AngleAxisLabelPanel', (<any>AxisLabelPanelBase).$type);
	createView(): AxisLabelPanelBaseView {
		return new AngleAxisLabelPanelView(this);
	}
	onViewCreated(view: AxisLabelPanelBaseView): void {
		super.onViewCreated(view);
		this.angleView = <AngleAxisLabelPanelView>view;
	}
	private _angleView: AngleAxisLabelPanelView;
	get angleView(): AngleAxisLabelPanelView {
		return this._angleView;
	}
	set angleView(value: AngleAxisLabelPanelView) {
		this._angleView = value;
	}
	constructor() {
		super();
	}
	private _clipLabelsToBounds: boolean = false;
	get clipLabelsToBounds(): boolean {
		return this._clipLabelsToBounds;
	}
	set clipLabelsToBounds(value: boolean) {
		this._clipLabelsToBounds = value;
	}
	private _getPoint: (arg1: number) => Point = null;
	get getPoint(): (arg1: number) => Point {
		return this._getPoint;
	}
	set getPoint(value: (arg1: number) => Point) {
		this._getPoint = value;
	}
	shouldDisplay(index: number, bounds: Rect): boolean {
		if (!Extensions.isPlottable1(bounds)) {
			return false;
		}
		if (this.axis == null || this.axis.viewportRect.isEmpty) {
			return super.shouldDisplay(index, bounds);
		}
		return true;
	}
	private _largestWidth: number = 0;
	get largestWidth(): number {
		return this._largestWidth;
	}
	set largestWidth(value: number) {
		this._largestWidth = value;
	}
	private _largestHeight: number = 0;
	get largestHeight(): number {
		return this._largestHeight;
	}
	set largestHeight(value: number) {
		this._largestHeight = value;
	}
	private _largestRenderWidth: number = 0;
	get largestRenderWidth(): number {
		return this._largestRenderWidth;
	}
	set largestRenderWidth(value: number) {
		this._largestRenderWidth = value;
	}
	private _largestRenderHeight: number = 0;
	get largestRenderHeight(): number {
		return this._largestRenderHeight;
	}
	set largestRenderHeight(value: number) {
		this._largestRenderHeight = value;
	}
	createBoundsRectangles(): List$1<Rect> {
		let rectangles: List$1<Rect> = new List$1<Rect>((<any>Rect).$type, 0);
		let isOverlay: List$1<boolean> = new List$1<boolean>(Boolean_$type, 0);
		if (this.textBlocks.count != this.labelPositions.count) {
			return rectangles;
		}
		this.angleView.determineLargestLabels(rectangles, isOverlay);
		let extentChanged: boolean = false;
		this.foundCollisions = this.detectCollisions(rectangles, isOverlay);
		if (!this.axis.hasUserExtent()) {
			extentChanged = true;
			this.extent = this.largestWidth / 2;
			this.extent = this.extent + this.otherExtentValues();
		} else {
			extentChanged = true;
			this.angleView.bindExtentToSettings();
		}
		if (extentChanged) {
			for (let i: number = 0; i < rectangles.count; i++) {
				let currentTextBlock: FrameworkElement = this.textBlocks._inner[i];
				let position: LabelPosition = this.labelPositions._inner[i];
				let currentRect: Rect = rectangles._inner[i];
				let point: Point = this.getPoint(position.value);
				let x: number = point.x - this.getDesiredWidth(currentTextBlock) / 2;
				let y: number = point.y - this.getDesiredHeight(currentTextBlock) / 2;
				currentRect.x = x;
				currentRect.y = y;
				rectangles._inner[i] = currentRect;
			}
		}
		return rectangles;
	}
	private otherExtentValues(): number {
		let owningChart: XamDataChart;
		let axis: Axis;
		axis = this.axis;
		owningChart = null;
		if (axis != null) {
			owningChart = typeCast<XamDataChart>((<any>XamDataChart).$type, axis.seriesViewer);
		}
		if (owningChart == null || axis == null) {
			return 0;
		}
		let angleAxes = new List$1<Axis>((<any>Axis).$type, 0);
		for (let i = 0; i < owningChart.axes.count; i++) {
			let a = owningChart.axes._inner[i];
			if ((typeCast<NumericAngleAxis>((<any>NumericAngleAxis).$type, a) !== null || typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, a) !== null) && typeCast<AngleAxisLabelPanel>((<any>AngleAxisLabelPanel).$type, a.labelPanel) !== null && (<AngleAxisLabelPanel>a.labelPanel).textBlocks.count > 0 && (!a.hasUserExtent()) && !a.hasCrossingValue() && (a.crossingAxis == null || this.axis.crossingAxis == null || (<NumericRadiusAxis>a.crossingAxis).actualRadiusExtentScale == (<NumericRadiusAxis>axis.crossingAxis).actualRadiusExtentScale)) {
				angleAxes.add(a);
			}
		}
		let index: number = angleAxes.indexOf(axis);
		if (index == -1) {
			return 0;
		}
		let extent: number = 0;
		let extentOffset: number = 5;
		if (index == 0) {
			extent += extentOffset;
		} else {
			extent += angleAxes._inner[index - 1].labelPanel.extent;
			extent += angleAxes._inner[index].labelPanel.extent * 2 + extentOffset;
		}
		return extent;
	}
	getDefaultLabelsLocation(): AxisLabelsLocation {
		return AxisLabelsLocation.InsideTop;
	}
	validLocation(location: AxisLabelsLocation): boolean {
		return location == AxisLabelsLocation.InsideTop || location == AxisLabelsLocation.InsideBottom;
	}
}

/**
 * @hidden 
 */
export class CategoryAngleAxis extends CategoryAxisBase implements IAngleScaler {
	static $t: Type = markType(CategoryAngleAxis, 'CategoryAngleAxis', (<any>CategoryAxisBase).$type, [IAngleScaler_$type]);
	createView(): AxisView {
		return new CategoryAngleAxisView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.categoryAngleView = <CategoryAngleAxisView>view;
	}
	private _categoryAngleView: CategoryAngleAxisView;
	get categoryAngleView(): CategoryAngleAxisView {
		return this._categoryAngleView;
	}
	set categoryAngleView(value: CategoryAngleAxisView) {
		this._categoryAngleView = value;
	}
	protected get_isAngular(): boolean {
		return true;
	}
	private renderingManager: PolarAxisRenderingManager = null;
	constructor() {
		super();
		this.defaultStyleKey = (<any>CategoryAngleAxis).$type;
		this.renderer = this.createRenderer();
		this.renderingManager = new PolarAxisRenderingManager();
	}
	createLabelPanel(): AxisLabelPanelBase {
		let panel: AngleAxisLabelPanel = new AngleAxisLabelPanel();
		panel.getPoint = (v: number) => {
			let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
			let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
			return this.getLabelLocationPoint(v, <Point>{ $type: Point_$type, x: 0.5, y: 0.5 }, windowRect, viewportRect, this.labelPanel.extent);
		};
		return panel;
	}
	private _renderer: CategoryAxisRenderer = null;
	get renderer(): CategoryAxisRenderer {
		return this._renderer;
	}
	set renderer(value: CategoryAxisRenderer) {
		this._renderer = value;
	}
	private _preventReentry: boolean = false;
	private round10(value: number): number {
		return Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10);
	}
	private _lastCrossing: number = NaN;
	private createRenderer(): CategoryAxisRenderer {
		let labelManager = ((() => {
			let $ret = new AxisLabelManager();
			$ret.axis = this;
			$ret.labelPositions = this.labelPositions;
			$ret.labelDataContext = this.labelDataContext;
			$ret.targetPanel = this.labelPanel;
			return $ret;
		})());
		if (this.labelSettings != null) {
			this.labelSettings.registerAxis(this);
		}
		let renderer = new CategoryAxisRenderer(labelManager);
		renderer.clear = () => {
			let axisGeometry: GeometryCollection = this.view.getAxisLinesGeometry();
			let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
			let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
			let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
			this.updateLineVisibility();
			this.clearMarks(axisGeometry);
			this.clearMarks(stripsGeometry);
			this.clearMarks(majorGeometry);
			this.clearMarks(minorGeometry);
		};
		renderer.shouldRender = (viewport: Rect, window: Rect) => !window.isEmpty && !viewport.isEmpty && this.radiusAxis != null;
		renderer.createRenderingParams = (viewport: Rect, window: Rect, effectiveViewportRect: Rect, contentViewport: Rect) => this.createRenderingParams(viewport, window, effectiveViewportRect, contentViewport);
		renderer.onRendering = () => {
			if (!this._preventReentry) {
				this._preventReentry = true;
				this.radiusAxis.updateRange();
				this._preventReentry = false;
			}
		};
		renderer.getLabelForItem = (item: any) => {
			let index: number = typeGetValue(item);
			if (index > this.fastItemsSource.count - 1) {
				index -= this.fastItemsSource.count;
			}
			let dataItem: any = this.fastItemsSource.item(index);
			return this.getLabel(dataItem);
		};
		renderer.labelManager.floatPanelAction = (crossing: number) => {
			if ((this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.radiusAxis != null && this._lastCrossing != crossing) {
				let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
				if (dataChart == null) {
					return;
				}
				this._lastCrossing = crossing;
				this.labelPanel.crossingValue = crossing;
				dataChart.invalidatePanels();
				for (let axis of fromEnum<Axis>(dataChart.axes)) {
					if (axis != this && typeCast<AngleAxisLabelPanel>((<any>AngleAxisLabelPanel).$type, axis.labelPanel) !== null) {
						axis.view.labelNeedRearrange();
					}
				}
			}
		};
		renderer.line = (p: AxisRenderingParametersBase, g: GeometryCollection, value: number) => {
			let r2: RadialAxisRenderingParameters = typeCast<RadialAxisRenderingParameters>((<any>RadialAxisRenderingParameters).$type, p);
			this.renderingManager.radialLine(g, value, p.viewportRect, p.windowRect, r2.minLength, r2.maxLength, r2.center);
		};
		renderer.strip = (p: AxisRenderingParametersBase, g: GeometryCollection, start: number, end: number) => {
			let r3: RadialAxisRenderingParameters = typeCast<RadialAxisRenderingParameters>((<any>RadialAxisRenderingParameters).$type, p);
			this.renderingManager.radialStrip(g, start, end, r3.viewportRect, p.windowRect, r3.minLength, r3.maxLength, r3.center);
		};
		renderer.scaling = (p: AxisRenderingParametersBase, unscaled: number) => this.getScaledAngle(unscaled);
		renderer.shouldRenderLines = (p: AxisRenderingParametersBase, value: number) => {
			if (this.round10(value - this._startAngleOffsetRadians) < 0) {
				return false;
			}
			if (this.round10(value - this._startAngleOffsetRadians - (2 * Math.PI)) > 0) {
				return false;
			}
			return true;
		};
		renderer.axisLine = (p: AxisRenderingParametersBase) => {
			let r4: RadialAxisRenderingParameters = typeCast<RadialAxisRenderingParameters>((<any>RadialAxisRenderingParameters).$type, p);
			if (r4.currentRangeInfo == r4.rangeInfos._inner[0]) {
				this.renderingManager.concentricLine(p.axisGeometry, p.crossingValue, p.viewportRect, p.windowRect, r4.center, r4.minAngle, r4.maxAngle);
			}
		};
		renderer.determineCrossingValue = (p: AxisRenderingParametersBase) => {
			p.crossingValue = this.getCrossingValue();
			p.relativeCrossingValue = p.crossingValue;
		};
		renderer.shouldRenderLabel = (p: AxisRenderingParametersBase, value: number, last: boolean) => {
			let r5: RadialAxisRenderingParameters = typeCast<RadialAxisRenderingParameters>((<any>RadialAxisRenderingParameters).$type, p);
			if (last) {
				return false;
			}
			let labelPoint: Point = this.getLabelLocationPoint(value, r5.center, p.windowRect, p.viewportRect, 0);
			if (labelPoint.x < p.viewportRect.right && labelPoint.x >= p.viewportRect.left && labelPoint.y < p.viewportRect.bottom && labelPoint.y >= p.viewportRect.top) {
				return true;
			}
			return false;
		};
		renderer.adjustMajorValue = (p: AxisRenderingParametersBase, value: number, i: number, interval: number) => {
			let effectiveViewportRect: Rect = p.effectiveViewportRect;
			let sParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, this.isInverted, effectiveViewportRect);
			let categoryValue: number = value;
			if (this.categoryMode != CategoryMode.Mode0) {
				let unscaledValue: number = (i * interval) + 1;
				unscaledValue = Math.min(unscaledValue, this.cachedItemsCount);
				let nextCategoryValue: number = this.getScaledValue(unscaledValue, sParams);
				categoryValue = (value + nextCategoryValue) / 2;
			}
			return categoryValue;
		};
		renderer.getGroupCenter = runOn(this, this.getGroupCenter);
		renderer.getUnscaledGroupCenter = runOn(this, this.getUnscaledGroupCenter);
		return renderer;
	}
	private getLabelLocationPoint(angleValue: number, center: Point, windowRect: Rect, viewportRect: Rect, extent: number): Point {
		let crossingValue: number = this.getCrossingValue();
		let extentValue: number = ViewportUtils.transformXFromViewportLength(extent, windowRect, viewportRect);
		if (this.labelSettings != null && (this.labelSettings.actualLocation == AxisLabelsLocation.InsideBottom || this.labelSettings.actualLocation == AxisLabelsLocation.OutsideBottom)) {
			extentValue *= -1;
		}
		let x: number = center.x + (crossingValue + extentValue) * Math.cos(angleValue);
		let y: number = center.y + (crossingValue + extentValue) * Math.sin(angleValue);
		x = ViewportUtils.transformXToViewport(x, windowRect, viewportRect);
		y = ViewportUtils.transformYToViewport(y, windowRect, viewportRect);
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	private getCrossingValue(): number {
		if (this.radiusAxis == null) {
			return 0;
		}
		if (!this.hasCrossingValue()) {
			return this.radiusAxis.getEffectiveMaximumLength();
		} else {
			return this.radiusAxis.getScaledValue3(<number>(this.crossingValue));
		}
	}
	private createRenderingParams(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): AxisRenderingParametersBase {
		if (this.fastItemsSource == null) {
			return null;
		}
		let renderingParams = new RadialAxisRenderingParameters();
		let max: number = this.fastItemsSource.count - 1;
		let axisGeometry: GeometryCollection = this.view.getAxisLinesGeometry();
		let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
		let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
		let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
		renderingParams.axisGeometry = axisGeometry;
		renderingParams.strips = stripsGeometry;
		renderingParams.major = majorGeometry;
		renderingParams.minor = minorGeometry;
		renderingParams.actualMaximumValue = max;
		renderingParams.actualMinimumValue = 0;
		renderingParams.hasUserMax = false;
		renderingParams.viewportRect = viewportRect;
		renderingParams.effectiveViewportRect = effectiveViewportRect;
		renderingParams.contentViewport = contentViewport;
		renderingParams.windowRect = windowRect;
		renderingParams.hasUserInterval = this.hasUserInterval();
		renderingParams.interval = this.interval;
		renderingParams.heuristicResolution = this.resolveHeuristicResolution();
		renderingParams.minorInterval = this.minorInterval;
		renderingParams.label = this.label;
		let closestRadius: number = this.renderingManager.getClosestRadiusValue(windowRect);
		let furthestRadius: number = this.renderingManager.getFurthestRadiusValue(windowRect);
		let maxRadius: number = 0.5 * this.radiusAxis.actualRadiusExtentScale;
		let minRadius: number = 0.5 * this.radiusAxis.actualInnerRadiusExtentScale;
		let minLen: number = closestRadius;
		let maxLen: number = furthestRadius;
		let effectiveMaximum: number = this.radiusAxis.getEffectiveMaximumLength();
		if (isNaN_(effectiveMaximum) || isInfinity(effectiveMaximum)) {
			return null;
		}
		if (maxLen >= maxRadius) {
			maxLen = effectiveMaximum;
		}
		if (minLen < minRadius) {
			minLen = minRadius;
		}
		let resolution: number = viewportRect.width;
		this.renderingManager.determineView(windowRect, renderingParams, 0, this.fastItemsSource.count, this.isInverted, runOn(this, this.getUnscaledAngle), resolution);
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		renderingParams.center = center;
		renderingParams.maxLength = maxLen;
		renderingParams.minLength = minLen;
		renderingParams.effectiveMaximum = effectiveMaximum;
		renderingParams.count = this.fastItemsSource.count;
		renderingParams.categoryMode = this.categoryMode;
		renderingParams.wrapAround = true;
		renderingParams.isInverted = this.isInverted;
		renderingParams.mode2GroupCount = this.mode2GroupCount;
		renderingParams.tickmarkValues = new CategoryTickmarkValues();
		renderingParams.shouldRenderMinorLines = this.shouldRenderMinorLines;
		return renderingParams;
	}
	getMinMaxAngle(windowRect: Rect, visibleMinimum: number, visibleMaximum: number): { p1: number; p2: number; } {
		let $ret = this.renderingManager.getMinMaxAngle(windowRect, visibleMinimum, visibleMaximum);
		visibleMinimum = $ret.p1;
		visibleMaximum = $ret.p2;
		return {
			p1: visibleMinimum,
			p2: visibleMaximum

		};
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderAxis1(false);
	}
	private _radiusAxis: NumericRadiusAxis = null;
	get radiusAxis(): NumericRadiusAxis {
		if (this._radiusAxis != null) {
			return this._radiusAxis;
		}
		let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (dataChart != null) {
			for (let i = 0; i < dataChart.axes.count; i++) {
				if (typeCast<NumericRadiusAxis>((<any>NumericRadiusAxis).$type, dataChart.axes._inner[i]) !== null) {
					return <NumericRadiusAxis>dataChart.axes._inner[i];
				}
			}
		}
		return this._radiusAxis;
	}
	set radiusAxis(value: NumericRadiusAxis) {
		this._radiusAxis = value;
	}
	resolveCrossingAxis(): Axis {
		return this.radiusAxis;
	}
	get startAngleOffset(): number {
		return <number>this.getValue(CategoryAngleAxis.startAngleOffsetProperty);
	}
	set startAngleOffset(value: number) {
		this.setValue(CategoryAngleAxis.startAngleOffsetProperty, value);
	}
	private _startAngleOffsetRadians: number = 0;
	static readonly startAngleOffsetPropertyName: string = "StartAngleOffset";
	static readonly startAngleOffsetProperty: DependencyProperty = DependencyProperty.register(CategoryAngleAxis.startAngleOffsetPropertyName, Number_$type, (<any>CategoryAngleAxis).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryAngleAxis>sender).raisePropertyChanged(CategoryAngleAxis.startAngleOffsetPropertyName, e.oldValue, e.newValue)));
	getCategorySize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		return 2 * Math.PI / this.cachedItemsCount;
	}
	getGroupSize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let gap: number = !isNaN_(this.gap) ? MathUtil.clamp(this.gap, 0, 1) : 0;
		let overlap: number = 0;
		if (!isNaN_(this.overlap)) {
			overlap = Math.min(this.overlap, 1);
		}
		let categorySpace: number = 1 - 0.5 * gap;
		return this.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * categorySpace / (this.mode2GroupCount - (this.mode2GroupCount - 1) * overlap);
	}
	getGroupCenter(groupIndex: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let groupCenter: number = 0.5;
		if (this.mode2GroupCount > 1) {
			let gap: number = !isNaN_(this.gap) ? MathUtil.clamp(this.gap, 0, 1) : 0;
			let overlap: number = 0;
			if (!isNaN_(this.overlap)) {
				overlap = Math.min(this.overlap, 1);
			}
			let categorySpace: number = 1 - 0.5 * gap;
			let groupWidth: number = categorySpace / (this.mode2GroupCount - (this.mode2GroupCount - 1) * overlap);
			let groupSep: number = (categorySpace - groupWidth) / (this.mode2GroupCount - 1);
			groupCenter = 0.25 * gap + 0.5 * groupWidth + groupIndex * groupSep;
		}
		return this.getCategorySize(windowRect, viewportRect, effectiveViewportRect) * groupCenter;
	}
	getUnscaledGroupCenter(groupIndex: number): number {
		let groupCenter: number = 0.5;
		if (this.mode2GroupCount > 1) {
			let gap: number = !isNaN_(this.gap) ? MathUtil.clamp(this.gap, 0, 1) : 0;
			let overlap: number = 0;
			if (!isNaN_(this.overlap)) {
				overlap = Math.min(this.overlap, 1);
			}
			let categorySpace: number = 1 - 0.5 * gap;
			let groupWidth: number = categorySpace / (this.mode2GroupCount - (this.mode2GroupCount - 1) * overlap);
			let groupSep: number = (categorySpace - groupWidth) / (this.mode2GroupCount - 1);
			groupCenter = 0.25 * gap + 0.5 * groupWidth + groupIndex * groupSep;
		}
		return groupCenter;
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let contentViewport: Rect = this.getContentViewport();
		let renderParams = this.renderer.render(animate, viewportRect, windowRect, effectiveViewportRect, contentViewport);
		if (renderParams != null) {
			this.actualInterval = renderParams.tickmarkValues.interval;
			this.actualMinorInterval = renderParams.tickmarkValues.actualMinorInterval;
		}
	}
	getMinimumViewable(viewportRect: Rect, windowRect: Rect): number {
		let minAngle: number;
		let maxAngle: number;
		let $ret = this.renderingManager.getMinMaxAngle(windowRect, minAngle, maxAngle);
		minAngle = $ret.p1;
		maxAngle = $ret.p2;
		if (minAngle == 0) {
			if (this.isInverted) {
				return this.cachedItemsCount;
			} else {
				return 0;
			}
		}
		let value: number = this.getUnscaledAngle(minAngle);
		if (value < 0 || value > this.cachedItemsCount) {
			value = this.getUnscaledAngle(minAngle + Math.PI * 2);
		}
		return value;
	}
	getMaximumViewable(viewportRect: Rect, windowRect: Rect): number {
		let minAngle: number;
		let maxAngle: number;
		let $ret = this.renderingManager.getMinMaxAngle(windowRect, minAngle, maxAngle);
		minAngle = $ret.p1;
		maxAngle = $ret.p2;
		if (maxAngle > Math.PI * 2) {
			maxAngle = maxAngle - Math.PI * 2;
		}
		if (maxAngle == Math.PI * 2) {
			if (this.isInverted) {
				return 0;
			} else {
				return this.cachedItemsCount;
			}
		}
		let value: number = this.getUnscaledAngle(maxAngle);
		if (value < 0 || value > this.cachedItemsCount) {
			value = this.getUnscaledAngle(maxAngle + Math.PI * 2);
		}
		return value;
	}
	getScaledAngle(unscaledAngle: number): number {
		let itemsCount: number = this.cachedItemsCount;
		let scaledValue: number = itemsCount >= 2 ? (unscaledAngle) / <number>(itemsCount) : itemsCount == 1 ? 0.5 : NaN;
		if (this.isInvertedCached) {
			scaledValue = 1 - scaledValue;
		}
		return (scaledValue * 2 * Math.PI) + this._startAngleOffsetRadians;
	}
	getUnscaledAngle(scaledAngle: number): number {
		if (scaledAngle < this._startAngleOffsetRadians) {
			scaledAngle += 2 * Math.PI;
		}
		let unscaledValue: number = (scaledAngle - this._startAngleOffsetRadians) / (2 * Math.PI);
		if (this.isInverted) {
			unscaledValue = 1 - unscaledValue;
		}
		return unscaledValue * (this.cachedItemsCount);
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		return (<IAngleScaler>this).getScaledAngle(unscaledValue);
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		return (<IAngleScaler>this).getUnscaledAngle(scaledValue);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		switch (propertyName) {
			case Axis.crossingAxisPropertyName:
			let radiusAxis: NumericRadiusAxis = typeCast<NumericRadiusAxis>((<any>NumericRadiusAxis).$type, newValue);
			this.onRadiusAxisChanged(radiusAxis);
			if (radiusAxis != null) {
				radiusAxis.onAngleAxisChanged(this);
			}
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case CategoryAngleAxis.startAngleOffsetPropertyName:
			this._startAngleOffsetRadians = this.startAngleOffset;
			while (this._startAngleOffsetRadians < 0) {
				this._startAngleOffsetRadians += 360;
			}
			while (this._startAngleOffsetRadians >= 360) {
				this._startAngleOffsetRadians -= 360;
			}
			this._startAngleOffsetRadians = (this._startAngleOffsetRadians * Math.PI) / 180;
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			for (let s of fromEnum<Series>(this.series)) {
				s.renderSeries(false);
				s.notifyThumbnailAppearanceChanged();
			}
			break;

			case Axis.labelPropertyName:
			if (dataChart != null) {
				for (let axis of fromEnum<Axis>(dataChart.axes)) {
					axis.mustInvalidateLabels = true;
					axis.renderAxis();
				}
			}
			break;

			case Axis.crossingValuePropertyName:
			if (dataChart != null) {
				for (let axis1 of fromEnum<Axis>(dataChart.axes)) {
					if (typeCast<NumericAngleAxis>((<any>NumericAngleAxis).$type, axis1) !== null || typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, axis1) !== null) {
						axis1.mustInvalidateLabels = true;
						axis1.renderAxis();
					}
				}
			}
			break;

			case Axis.labelSettingsPropertyName:
			this.renderer = this.createRenderer();
			this.forcePanelRefloat();
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

		}

	}
	private forcePanelRefloat(): void {
		this._lastCrossing = NaN;
	}
	onRadiusAxisChanged(radiusAxis: NumericRadiusAxis): void {
		this.radiusAxis = radiusAxis;
	}
	private static readonly intervalPropertyName: string = "Interval";
	static readonly intervalProperty: DependencyProperty = DependencyProperty.register(CategoryAngleAxis.intervalPropertyName, Number_$type, (<any>CategoryAngleAxis).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		(<CategoryAngleAxis>sender).raisePropertyChanged(CategoryAngleAxis.intervalPropertyName, e.oldValue, e.newValue);
		(<CategoryAngleAxis>sender).renderAxis1(false);
	}));
	get interval(): number {
		return <number>this.getValue(CategoryAngleAxis.intervalProperty);
	}
	set interval(value: number) {
		this.setValue(CategoryAngleAxis.intervalProperty, value);
	}
	private _actualInterval: number = 0;
	static readonly actualIntervalPropertyName: string = "ActualInterval";
	get actualInterval(): number {
		return this._actualInterval;
	}
	set actualInterval(value: number) {
		if (this.actualInterval != value) {
			let oldValue: number = this._actualInterval;
			this._actualInterval = value;
			this.raisePropertyChanged(CategoryAngleAxis.actualIntervalPropertyName, oldValue, this.actualInterval);
		}
	}
	resolveActualInterval(): number {
		return this.actualInterval;
	}
	private static readonly minorIntervalPropertyName: string = "MinorInterval";
	static readonly minorIntervalProperty: DependencyProperty = DependencyProperty.register(CategoryAngleAxis.minorIntervalPropertyName, Number_$type, (<any>CategoryAngleAxis).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		(typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, sender)).raisePropertyChanged(CategoryAngleAxis.minorIntervalPropertyName, e.oldValue, e.newValue);
		(typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, sender)).renderAxis1(false);
	}));
	get minorInterval(): number {
		return <number>this.getValue(CategoryAngleAxis.minorIntervalProperty);
	}
	set minorInterval(value: number) {
		this.setValue(CategoryAngleAxis.minorIntervalProperty, value);
	}
	private _actualMinorInterval: number = 0;
	static readonly actualMinorIntervalPropertyName: string = "ActualMinorInterval";
	get actualMinorInterval(): number {
		return this._actualMinorInterval;
	}
	set actualMinorInterval(value: number) {
		if (this.actualMinorInterval != value) {
			let oldValue: number = this._actualMinorInterval;
			this._actualMinorInterval = value;
			this.raisePropertyChanged(CategoryAngleAxis.actualMinorIntervalPropertyName, oldValue, this.actualMinorInterval);
		}
	}
	protected hasUserInterval(): boolean {
		return false;
	}
	protected get_orientation(): AxisOrientation {
		return AxisOrientation.Angular;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
	updateRangeOverride(): boolean {
		if (this.mustInvalidateLabels && this.useEnhancedIntervalManagement) {
			this.labelFontHeuristics = this.gatherLabelFontHeuristics();
		}
		if (this.fastItemsSource == null) {
			return false;
		}
		let max: number = this.fastItemsSource.count;
		if (max != this.actualMaximum) {
			let ea: AxisRangeChangedEventArgs = new AxisRangeChangedEventArgs(0, 1, 1, this.actualMaximum, max);
			this.actualMaximum = max;
			this.raiseRangeChanged(ea);
			return true;
		}
		return false;
	}
	private _actualMaximum: number = 1;
	get actualMaximum(): number {
		return this._actualMaximum;
	}
	set actualMaximum(value: number) {
		this._actualMaximum = value;
	}
	getOverlayGeometry(scaledValue: number, windowRect: Rect, viewport: Rect, effectiveViewport: any = null, contentViewport: any = null): Geometry {
		let renderParams: RadialAxisRenderingParameters = typeCast<RadialAxisRenderingParameters>((<any>RadialAxisRenderingParameters).$type, this.renderer.createRenderingParams(viewport, windowRect, <Rect>effectiveViewport, <Rect>contentViewport));
		if (renderParams == null) {
			return null;
		}
		let cosX: number = Math.cos(scaledValue);
		let sinX: number = Math.sin(scaledValue);
		let startX: number = renderParams.center.x + cosX * renderParams.minLength;
		let startY: number = renderParams.center.y + sinX * renderParams.minLength;
		let endX: number = renderParams.center.x + cosX * renderParams.maxLength;
		let endY: number = renderParams.center.y + sinX * renderParams.maxLength;
		startX = ViewportUtils.transformXToViewport(startX, windowRect, viewport);
		startY = ViewportUtils.transformYToViewport(startY, windowRect, viewport);
		endX = ViewportUtils.transformXToViewport(endX, windowRect, viewport);
		endY = ViewportUtils.transformYToViewport(endY, windowRect, viewport);
		let lineGeometry: LineGeometry = new LineGeometry();
		lineGeometry.startPoint = <Point>{ $type: Point_$type, x: startX, y: startY };
		lineGeometry.endPoint = <Point>{ $type: Point_$type, x: endX, y: endY };
		return lineGeometry;
	}
}

/**
 * @hidden 
 */
export class NumericAngleAxis extends NumericAxisBase implements IAngleScaler {
	static $t: Type = markType(NumericAngleAxis, 'NumericAngleAxis', (<any>NumericAxisBase).$type, [IAngleScaler_$type]);
	createView(): AxisView {
		return new NumericAngleAxisView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.numericAngleView = <NumericAngleAxisView>view;
	}
	private _numericAngleView: NumericAngleAxisView;
	get numericAngleView(): NumericAngleAxisView {
		return this._numericAngleView;
	}
	set numericAngleView(value: NumericAngleAxisView) {
		this._numericAngleView = value;
	}
	private _renderingManager: PolarAxisRenderingManager = null;
	get renderingManager(): PolarAxisRenderingManager {
		return this._renderingManager;
	}
	set renderingManager(value: PolarAxisRenderingManager) {
		this._renderingManager = value;
	}
	protected get_isAngular(): boolean {
		return true;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>NumericAngleAxis).$type;
		this.renderingManager = new PolarAxisRenderingManager();
		this.renderer = this.createRenderer();
	}
	createLabelPanel(): AxisLabelPanelBase {
		let panel: AngleAxisLabelPanel = new AngleAxisLabelPanel();
		panel.getPoint = (v: number) => {
			let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
			let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
			return this.getLabelLocationPoint(v, <Point>{ $type: Point_$type, x: 0.5, y: 0.5 }, windowRect, viewportRect, this.labelPanel.extent);
		};
		return panel;
	}
	private getCrossingValue(): number {
		if (this.radiusAxis == null) {
			return 0;
		}
		if (!this.hasCrossingValue()) {
			return this.radiusAxis.getEffectiveMaximumLength();
		} else {
			return this.radiusAxis.getScaledValue3(<number>(this.crossingValue));
		}
	}
	private round10(value: number): number {
		return Math.round(value * Math.pow(10, 10)) / Math.pow(10, 10);
	}
	private _preventReentry: boolean = false;
	private _lastCrossing: number = NaN;
	createRenderer(): NumericAxisRenderer {
		let renderer: NumericAxisRenderer = super.createRenderer();
		renderer.labelManager.floatPanelAction = (crossing: number) => {
			if ((this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.radiusAxis != null && this._lastCrossing != crossing) {
				let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
				if (dataChart == null) {
					return;
				}
				this._lastCrossing = crossing;
				this.labelPanel.crossingValue = crossing;
				dataChart.invalidatePanels();
				for (let axis of fromEnum<Axis>(dataChart.axes)) {
					if (axis != this && typeCast<AngleAxisLabelPanel>((<any>AngleAxisLabelPanel).$type, axis.labelPanel) !== null) {
						axis.view.labelNeedRearrange();
					}
				}
			}
		};
		renderer.determineCrossingValue = (p: AxisRenderingParametersBase) => {
			p.crossingValue = this.getCrossingValue();
			p.relativeCrossingValue = p.crossingValue;
		};
		renderer.axisLine = (p: AxisRenderingParametersBase) => {
			let r: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			if (r.currentRangeInfo == r.rangeInfos._inner[0]) {
				this.renderingManager.concentricLine(p.axisGeometry, p.crossingValue, p.viewportRect, p.windowRect, r.center, r.minAngle, r.maxAngle);
			}
		};
		renderer.line = (p: AxisRenderingParametersBase, g: GeometryCollection, value: number) => {
			let r2: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			this.renderingManager.radialLine(g, value, p.viewportRect, p.windowRect, r2.minLength, r2.maxLength, r2.center);
		};
		renderer.strip = (p: AxisRenderingParametersBase, g: GeometryCollection, start: number, end: number) => {
			let r3: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			this.renderingManager.radialStrip(g, start, end, r3.viewportRect, p.windowRect, r3.minLength, r3.maxLength, r3.center);
		};
		renderer.createRenderingParams = (viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect) => {
			let r4: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, this.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport));
			return r4;
		};
		renderer.onRendering = () => {
			if (!this._preventReentry) {
				this._preventReentry = true;
				this.radiusAxis.updateRange();
				this._preventReentry = false;
			}
		};
		renderer.scaling = (p: AxisRenderingParametersBase, unscaled: number) => this.getScaledAngle(unscaled);
		renderer.shouldRender = (viewport: Rect, window: Rect) => !window.isEmpty && !viewport.isEmpty && this.radiusAxis != null;
		renderer.shouldRenderLines = (p: AxisRenderingParametersBase, value: number) => {
			if (this.round10(value - this._startAngleOffsetRadians) < 0) {
				return false;
			}
			if (this.round10(value - this._startAngleOffsetRadians - (2 * Math.PI)) > 0) {
				return false;
			}
			return true;
		};
		renderer.shouldRenderLabel = (p: AxisRenderingParametersBase, value: number, last: boolean) => {
			let r5: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			let endPoint: Point = this.getLabelLocationPoint(this.getScaledAngle(r5.actualMaximumValue), r5.center, p.windowRect, p.viewportRect, 0);
			let labelPoint: Point = this.getLabelLocationPoint(value, r5.center, p.windowRect, p.viewportRect, 0);
			if (last && MathUtil.hypot(endPoint.x - labelPoint.x, endPoint.y - labelPoint.y) < 2) {
				return false;
			}
			if (labelPoint.x < p.viewportRect.right && labelPoint.x >= p.viewportRect.left && labelPoint.y < p.viewportRect.bottom && labelPoint.y >= p.viewportRect.top) {
				return true;
			}
			return false;
		};
		renderer.snapMajorValue = (p: AxisRenderingParametersBase, value: number, i: number, interval: number) => {
			if (value < p.actualMinimumValue && typeCast<LogarithmicTickmarkValues>((<any>LogarithmicTickmarkValues).$type, p.tickmarkValues) !== null) {
				return p.actualMinimumValue;
			} else if (value > p.actualMaximumValue && (typeCast<LogarithmicTickmarkValues>((<any>LogarithmicTickmarkValues).$type, p.tickmarkValues) !== null || p.hasUserMax)) {
				return p.actualMaximumValue;
			}
			return value;
		};
		return renderer;
	}
	private getLabelLocationPoint(angleValue: number, center: Point, windowRect: Rect, viewportRect: Rect, extent: number): Point {
		let crossingValue: number = this.getCrossingValue();
		let extentValue: number = ViewportUtils.transformXFromViewportLength(extent, windowRect, viewportRect);
		if (this.labelSettings != null && (this.labelSettings.actualLocation == AxisLabelsLocation.InsideBottom || this.labelSettings.actualLocation == AxisLabelsLocation.OutsideBottom)) {
			extentValue *= -1;
		}
		let x: number = center.x + (crossingValue + extentValue) * Math.cos(angleValue);
		let y: number = center.y + (crossingValue + extentValue) * Math.sin(angleValue);
		x = ViewportUtils.transformXToViewport(x, windowRect, viewportRect);
		y = ViewportUtils.transformYToViewport(y, windowRect, viewportRect);
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		return this.getScaledAngle(unscaledValue);
	}
	getScaledAngle1(unscaledValue: number, isLogarithmic: boolean, isInverted: boolean): number {
		let scaledValue: number = 0;
		if (isLogarithmic) {
			scaledValue = (Math.log(unscaledValue) - this.logActualMinimumValue) / (this.logActualMaximumValue - this.logActualMinimumValue);
		} else {
			scaledValue = (unscaledValue - this.actualMinimumValue) / (this.actualMaximumValue - this.actualMinimumValue);
		}
		if (isInverted) {
			scaledValue = 1 - scaledValue;
		}
		return (scaledValue * 2 * Math.PI) + this._startAngleOffsetRadians;
	}
	getScaledAngle(unscaledValue: number): number {
		return this.getScaledAngle1(unscaledValue, this.isReallyLogarithmic, this.isInvertedCached);
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		return this.getUnscaledAngle(scaledValue);
	}
	getUnscaledAngle(scaledValue: number): number {
		let unscaledValue: number = (scaledValue - this._startAngleOffsetRadians) / (2 * Math.PI);
		if (this.isInverted) {
			unscaledValue = 1 - unscaledValue;
		}
		if (this.isReallyLogarithmic) {
			return Math.exp(unscaledValue * (this.logActualMaximumValue - this.logActualMinimumValue) + this.logActualMinimumValue);
		} else {
			return this.actualMinimumValue + unscaledValue * (this.actualMaximumValue - this.actualMinimumValue);
		}
	}
	get startAngleOffset(): number {
		return <number>this.getValue(NumericAngleAxis.startAngleOffsetProperty);
	}
	set startAngleOffset(value: number) {
		this.setValue(NumericAngleAxis.startAngleOffsetProperty, value);
	}
	private _startAngleOffsetRadians: number = 0;
	static readonly startAngleOffsetPropertyName: string = "StartAngleOffset";
	static readonly startAngleOffsetProperty: DependencyProperty = DependencyProperty.register(NumericAngleAxis.startAngleOffsetPropertyName, Number_$type, (<any>NumericAngleAxis).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAngleAxis>sender).raisePropertyChanged(NumericAngleAxis.startAngleOffsetPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		switch (propertyName) {
			case Axis.crossingAxisPropertyName:
			let radiusAxis: NumericRadiusAxis = typeCast<NumericRadiusAxis>((<any>NumericRadiusAxis).$type, newValue);
			this.onRadiusAxisChanged(radiusAxis);
			if (radiusAxis != null) {
				radiusAxis.onAngleAxisChanged(this);
			}
			this.renderAxis1(false);
			break;

			case NumericAngleAxis.startAngleOffsetPropertyName:
			this._startAngleOffsetRadians = this.startAngleOffset;
			while (this._startAngleOffsetRadians < 0) {
				this._startAngleOffsetRadians += 360;
			}
			while (this._startAngleOffsetRadians >= 360) {
				this._startAngleOffsetRadians -= 360;
			}
			this._startAngleOffsetRadians = (this.startAngleOffset * Math.PI) / 180;
			this.renderAxis1(false);
			for (let series of fromEnum<Series>(this.directSeries())) {
				series.renderSeries(false);
				series.notifyThumbnailAppearanceChanged();
			}
			break;

			case Axis.labelPropertyName:
			if (dataChart != null) {
				for (let axis of fromEnum<Axis>(dataChart.axes)) {
					axis.renderAxis();
				}
			}
			break;

			case Axis.crossingValuePropertyName:
			if (dataChart != null) {
				for (let axis1 of fromEnum<Axis>(dataChart.axes)) {
					if (typeCast<NumericAngleAxis>((<any>NumericAngleAxis).$type, axis1) !== null || typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, axis1) !== null) {
						axis1.renderAxis();
					}
				}
			}
			break;

			case Axis.labelSettingsPropertyName:
			this.renderer = this.createRenderer();
			this.forcePanelRefloat();
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

		}

	}
	private forcePanelRefloat(): void {
		this._lastCrossing = NaN;
	}
	createRenderingParamsInstance(): NumericAxisRenderingParameters {
		return new PolarAxisRenderingParameters();
	}
	createRenderingParams(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): NumericAxisRenderingParameters {
		let renderingParams: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, super.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport));
		let closestRadius: number = this.renderingManager.getClosestRadiusValue(windowRect);
		let furthestRadius: number = this.renderingManager.getFurthestRadiusValue(windowRect);
		let maxRadius: number = 0.5 * this.radiusAxis.actualRadiusExtentScale;
		let minRadius: number = 0.5 * this.radiusAxis.actualInnerRadiusExtentScale;
		let minLen: number = closestRadius;
		let maxLen: number = furthestRadius;
		let effectiveMaximum: number = this.radiusAxis.getEffectiveMaximumLength();
		if (isNaN_(effectiveMaximum) || isInfinity(effectiveMaximum)) {
			return null;
		}
		if (maxLen >= maxRadius) {
			maxLen = effectiveMaximum;
		}
		if (minLen < minRadius) {
			minLen = minRadius;
		}
		let resolution: number = viewportRect.width;
		this.renderingManager.determineView(windowRect, renderingParams, this.actualMinimumValue, this.actualMaximumValue, this.isInverted, runOn(this, this.getUnscaledAngle), resolution);
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		renderingParams.center = center;
		renderingParams.maxLength = maxLen;
		renderingParams.minLength = minLen;
		renderingParams.effectiveMaximum = effectiveMaximum;
		return renderingParams;
	}
	getMinMaxAngle(windowRect: Rect, minAngle: number, maxAngle: number): { p1: number; p2: number; } {
		let $ret = this.renderingManager.getMinMaxAngle(windowRect, minAngle, maxAngle);
		minAngle = $ret.p1;
		maxAngle = $ret.p2;
		return {
			p1: minAngle,
			p2: maxAngle

		};
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let contentViewport: Rect = this.getContentViewport();
		let renderParams = this.renderer.render(animate, viewportRect, windowRect, effectiveViewportRect, contentViewport);
		if (renderParams != null) {
			this.actualInterval = renderParams.tickmarkValues.interval;
			this.actualMinorInterval = renderParams.tickmarkValues.actualMinorInterval;
		}
	}
	private _radiusAxis: NumericRadiusAxis = null;
	get radiusAxis(): NumericRadiusAxis {
		if (this._radiusAxis != null) {
			return this._radiusAxis;
		}
		let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (dataChart != null) {
			for (let i = 0; i < dataChart.axes.count; i++) {
				if (dataChart.axes._inner[i].isRadial) {
					return <NumericRadiusAxis>dataChart.axes._inner[i];
				}
			}
		}
		return this._radiusAxis;
	}
	set radiusAxis(value: NumericRadiusAxis) {
		this._radiusAxis = value;
	}
	resolveCrossingAxis(): Axis {
		return this.radiusAxis;
	}
	onRadiusAxisChanged(numericRadiusAxis: NumericRadiusAxis): void {
		this.radiusAxis = numericRadiusAxis;
	}
	protected viewportChangedOverride(oldRect: Rect, newRect: Rect): void {
		super.viewportChangedOverride(oldRect, newRect);
		if (newRect.height != oldRect.height || newRect.width != oldRect.width) {
			this.updateRange();
		}
	}
	protected get_orientation(): AxisOrientation {
		return AxisOrientation.Angular;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
	getOverlayGeometry(scaledValue: number, windowRect: Rect, viewport: Rect, effectiveViewport: any = null, contentViewport: any = null): Geometry {
		if (this.radiusAxis == null) {
			return null;
		}
		let renderParams: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, this.createRenderingParams(viewport, windowRect, <Rect>effectiveViewport, <Rect>contentViewport));
		if (renderParams == null) {
			return null;
		}
		let cosX: number = Math.cos(scaledValue);
		let sinX: number = Math.sin(scaledValue);
		let startX: number = renderParams.center.x + cosX * renderParams.minLength;
		let startY: number = renderParams.center.y + sinX * renderParams.minLength;
		let endX: number = renderParams.center.x + cosX * renderParams.maxLength;
		let endY: number = renderParams.center.y + sinX * renderParams.maxLength;
		startX = ViewportUtils.transformXToViewport(startX, windowRect, viewport);
		startY = ViewportUtils.transformYToViewport(startY, windowRect, viewport);
		endX = ViewportUtils.transformXToViewport(endX, windowRect, viewport);
		endY = ViewportUtils.transformYToViewport(endY, windowRect, viewport);
		let lineGeometry: LineGeometry = new LineGeometry();
		lineGeometry.startPoint = <Point>{ $type: Point_$type, x: startX, y: startY };
		lineGeometry.endPoint = <Point>{ $type: Point_$type, x: endX, y: endY };
		return lineGeometry;
	}
}

/**
 * @hidden 
 */
export class NumericRadiusAxis extends NumericAxisBase {
	static $t: Type = markType(NumericRadiusAxis, 'NumericRadiusAxis', (<any>NumericAxisBase).$type);
	createView(): AxisView {
		return new NumericRadiusAxisView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.numericRadiusView = <NumericRadiusAxisView>view;
	}
	private _numericRadiusView: NumericRadiusAxisView;
	get numericRadiusView(): NumericRadiusAxisView {
		return this._numericRadiusView;
	}
	set numericRadiusView(value: NumericRadiusAxisView) {
		this._numericRadiusView = value;
	}
	protected get_isRadial(): boolean {
		return true;
	}
	getResolutionExtent(): number {
		let radiusExtentScale: number = this.actualRadiusExtentScale;
		let innerRadiusExtentScale: number = this.actualInnerRadiusExtentScale;
		let axisResolution: number = Math.min(this.getAxisWidth(), this.getAxisHeight()) * (radiusExtentScale - innerRadiusExtentScale) / 2;
		axisResolution = Math.max(axisResolution, 14);
		return axisResolution;
	}
	private getAxisWidth(): number {
		return this.viewportRect.width;
	}
	private getAxisHeight(): number {
		return this.viewportRect.height;
	}
	private renderingManager: PolarAxisRenderingManager = null;
	constructor() {
		super();
		this.defaultStyleKey = (<any>NumericRadiusAxis).$type;
		this.actualRadiusExtentScale = this.radiusExtentScale;
		this.actualInnerRadiusExtentScale = this.innerRadiusExtentScale;
		this.renderingManager = new PolarAxisRenderingManager();
		this.renderer = this.createRenderer();
	}
	createLabelPanel(): AxisLabelPanelBase {
		return new RadialAxisLabelPanel();
	}
	private _suppress: boolean = false;
	get suppress(): boolean {
		return this._suppress;
	}
	set suppress(value: boolean) {
		this._suppress = value;
	}
	private convertToDouble(x: any): number {
		if (x == null) {
			return 0;
		}
		return <number>x;
	}
	private _lastCrossing: number = NaN;
	createRenderer(): NumericAxisRenderer {
		let renderer: NumericAxisRenderer = super.createRenderer();
		renderer.labelManager.floatPanelAction = (crossing: number) => {
			if ((this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.angleAxis != null) {
				if ((this.labelSettings == null || (this.labelSettings.actualLocation == AxisLabelsLocation.InsideTop || this.labelSettings.actualLocation == AxisLabelsLocation.InsideBottom)) && this._lastCrossing != crossing) {
					this._lastCrossing = crossing;
					this.labelPanel.crossingValue = crossing;
					this.seriesViewer.invalidatePanels();
				}
			}
		};
		renderer.line = (p: AxisRenderingParametersBase, g: GeometryCollection, value: number) => {
			let r: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			this.renderingManager.concentricLine(g, value, r.viewportRect, r.windowRect, r.center, r.minAngle, r.maxAngle);
		};
		renderer.strip = (p: AxisRenderingParametersBase, g: GeometryCollection, start: number, end: number) => {
			if (start == end) {
				return;
			}
			let r2: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			this.renderingManager.concentricStrip(g, start, end, r2.viewportRect, r2.windowRect, r2.center, r2.minAngle, r2.maxAngle);
		};
		renderer.scaling = (p: AxisRenderingParametersBase, unscaled: number) => this.getScaledValue3(unscaled);
		renderer.shouldRenderLines = (p: AxisRenderingParametersBase, value: number) => {
			let r3: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			return value <= r3.effectiveMaximum;
		};
		renderer.shouldRenderContent = (p: AxisRenderingParametersBase, value: number) => {
			let r4: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			return value <= r4.effectiveMaximum;
		};
		renderer.axisLine = (p: AxisRenderingParametersBase) => {
			let r5: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			this.renderingManager.radialLine(p.axisGeometry, r5.crossingAngleRadians, p.viewportRect, p.windowRect, r5.minLength, r5.maxLength, r5.center);
		};
		renderer.determineCrossingValue = (p: AxisRenderingParametersBase) => {
			p.crossingValue = this.labelSettings == null || (this.labelSettings.actualLocation == AxisLabelsLocation.InsideTop || this.labelSettings.actualLocation == AxisLabelsLocation.OutsideTop) ? p.viewportRect.top : p.viewportRect.bottom;
			p.relativeCrossingValue = p.crossingValue;
			let r6: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			r6.crossingAngleRadians = (this.convertToDouble(this.crossingValue) * Math.PI) / 180;
			if (this.labelSettings == null || (this.labelSettings.actualLocation == AxisLabelsLocation.InsideTop || this.labelSettings.actualLocation == AxisLabelsLocation.InsideBottom)) {
				r6.crossingValue = ViewportUtils.transformYToViewport(0.5, r6.windowRect, r6.viewportRect) - p.viewportRect.top;
				r6.relativeCrossingValue = r6.crossingValue;
				let panel: RadialAxisLabelPanel = typeCast<RadialAxisLabelPanel>((<any>RadialAxisLabelPanel).$type, this.labelPanel);
				if (panel != null) {
					let yVal: number = 0;
					if (this.labelSettings != null && this.labelSettings.actualLocation == AxisLabelsLocation.InsideTop) {
						yVal = 1;
					}
					panel.rotationCenter = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(0.5, r6.windowRect, r6.viewportRect), y: yVal };
					panel.crossingAngle = r6.crossingAngleRadians;
				}
			}
		};
		renderer.shouldRenderLabel = (p: AxisRenderingParametersBase, v: number, last: boolean) => {
			let r7: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			if (this.angleAxis == null) {
				return false;
			}
			if (v > r7.effectiveMaximum) {
				return false;
			}
			let embedded: boolean = false;
			embedded = this.labelSettings == null || (this.labelSettings.actualLocation == AxisLabelsLocation.InsideTop || this.labelSettings.actualLocation == AxisLabelsLocation.InsideBottom);
			let panelAngle: number = 0;
			if (embedded) {
				panelAngle = this.crossingValueRadians;
			}
			let x: number = r7.center.x + v * Math.cos(panelAngle);
			let y: number = r7.center.y + v * Math.sin(panelAngle);
			x = ViewportUtils.transformXToViewport(x, r7.windowRect, r7.viewportRect);
			y = ViewportUtils.transformYToViewport(y, r7.windowRect, r7.viewportRect);
			if (x <= p.viewportRect.right && x >= p.viewportRect.left && ((y <= p.viewportRect.bottom && y >= p.viewportRect.top) || !embedded)) {
				return true;
			}
			return false;
		};
		renderer.getLabelLocation = (p: AxisRenderingParametersBase, value: number) => {
			let r8: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, p);
			return new LabelPosition(ViewportUtils.transformXToViewport(r8.center.x + value, r8.windowRect, r8.viewportRect));
		};
		renderer.snapMajorValue = (p: AxisRenderingParametersBase, value: number, i: number, interval: number) => {
			if (value < p.actualMinimumValue) {
				return p.actualMinimumValue;
			} else if (value > p.actualMaximumValue) {
				return p.actualMaximumValue;
			}
			return value;
		};
		return renderer;
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		return this.getScaledValue3(unscaledValue);
	}
	getScaledValue4(unscaledValue: number, isLogarithmic: boolean, isInverted: boolean, radiusExtentScale: number, innerRadiusExtentScale: number): number {
		let scaledValue: number = 0;
		if (isLogarithmic) {
			if (unscaledValue <= 0) {
				scaledValue = (Math.log(this.actualMinimumValue) - this.logActualMinimumValue) / (this.logActualMaximumValue - this.logActualMinimumValue);
			} else {
				scaledValue = (Math.log(unscaledValue) - this.logActualMinimumValue) / (this.logActualMaximumValue - this.logActualMinimumValue);
			}
		} else {
			scaledValue = (unscaledValue - this.actualMinimumValue) / (this.actualMaximumValue - this.actualMinimumValue);
		}
		if (isInverted) {
			scaledValue = 1 - scaledValue;
		}
		scaledValue = innerRadiusExtentScale + (scaledValue * (radiusExtentScale - innerRadiusExtentScale));
		scaledValue /= 2;
		return scaledValue;
	}
	getScaledValue3(unscaledValue: number): number {
		return this.getScaledValue4(unscaledValue, this.isReallyLogarithmic, this.isInvertedCached, this.actualRadiusExtentScale, this.actualInnerRadiusExtentScale);
	}
	getUnscaledValue3(scaledValue: number): number {
		let unscaledValue: number = scaledValue * 2;
		unscaledValue = (unscaledValue - this.actualInnerRadiusExtentScale) / (this.actualRadiusExtentScale - this.actualInnerRadiusExtentScale);
		if (this.isInverted) {
			unscaledValue = 1 - unscaledValue;
		}
		if (this.isReallyLogarithmic) {
			return Math.exp(unscaledValue * (this.logActualMaximumValue - this.logActualMinimumValue) + this.logActualMinimumValue);
		} else {
			return this.actualMinimumValue + unscaledValue * (this.actualMaximumValue - this.actualMinimumValue);
		}
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		return this.getUnscaledValue3(scaledValue);
	}
	get radiusExtentScale(): number {
		return <number>this.getValue(NumericRadiusAxis.radiusExtentScaleProperty);
	}
	set radiusExtentScale(value: number) {
		this.setValue(NumericRadiusAxis.radiusExtentScaleProperty, value);
	}
	static readonly radiusExtentScalePropertyName: string = "RadiusExtentScale";
	static readonly radiusExtentScaleProperty: DependencyProperty = DependencyProperty.register(NumericRadiusAxis.radiusExtentScalePropertyName, Number_$type, (<any>NumericRadiusAxis).$type, new PropertyMetadata(2, 0.75, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericRadiusAxis>sender).raisePropertyChanged(NumericRadiusAxis.radiusExtentScalePropertyName, e.oldValue, e.newValue)));
	private _actualRadiusExtentScale: number = 0;
	get actualRadiusExtentScale(): number {
		return this._actualRadiusExtentScale;
	}
	set actualRadiusExtentScale(value: number) {
		this._actualRadiusExtentScale = value;
	}
	get innerRadiusExtentScale(): number {
		return <number>this.getValue(NumericRadiusAxis.innerRadiusExtentScaleProperty);
	}
	set innerRadiusExtentScale(value: number) {
		this.setValue(NumericRadiusAxis.innerRadiusExtentScaleProperty, value);
	}
	static readonly innerRadiusExtentScalePropertyName: string = "InnerRadiusExtentScale";
	static readonly innerRadiusExtentScaleProperty: DependencyProperty = DependencyProperty.register(NumericRadiusAxis.innerRadiusExtentScalePropertyName, Number_$type, (<any>NumericRadiusAxis).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericRadiusAxis>sender).raisePropertyChanged(NumericRadiusAxis.innerRadiusExtentScalePropertyName, e.oldValue, e.newValue)));
	private _actualInnerRadiusExtentScale: number = 0;
	get actualInnerRadiusExtentScale(): number {
		return this._actualInnerRadiusExtentScale;
	}
	set actualInnerRadiusExtentScale(value: number) {
		this._actualInnerRadiusExtentScale = value;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Axis.crossingValuePropertyName:
			this.crossingValueRadians = this.convertToDouble(this.crossingValue) * Math.PI / 180;
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case NumericRadiusAxis.radiusExtentScalePropertyName:
			this.actualRadiusExtentScale = this.radiusExtentScale;
			if (this.actualRadiusExtentScale < 0) {
				this.actualRadiusExtentScale = 0.1;
			}
			if (this.actualRadiusExtentScale > 1) {
				this.actualRadiusExtentScale = 1;
			}
			if (this.actualInnerRadiusExtentScale >= this.actualRadiusExtentScale) {
				this.actualInnerRadiusExtentScale = this.actualRadiusExtentScale - 0.01;
				if (this.actualInnerRadiusExtentScale < 0) {
					this.actualInnerRadiusExtentScale = 0;
					this.actualRadiusExtentScale = 0.01;
				}
			}
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			if (this.angleAxis != null) {
				this.angleAxis.renderAxis();
			}
			for (let s of fromEnum<Series>(this.directSeries())) {
				s.renderSeries(false);
			}
			break;

			case NumericRadiusAxis.innerRadiusExtentScalePropertyName:
			this.actualInnerRadiusExtentScale = this.innerRadiusExtentScale;
			if (this.actualInnerRadiusExtentScale < 0) {
				this.actualInnerRadiusExtentScale = 0.1;
			}
			if (this.actualInnerRadiusExtentScale > 1) {
				this.actualInnerRadiusExtentScale = 1;
			}
			if (this.actualInnerRadiusExtentScale >= this.actualRadiusExtentScale) {
				this.actualInnerRadiusExtentScale = this.actualRadiusExtentScale - 0.01;
				if (this.actualInnerRadiusExtentScale < 0) {
					this.actualInnerRadiusExtentScale = 0;
					this.actualRadiusExtentScale = 0.01;
				}
			}
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			if (this.angleAxis != null) {
				this.angleAxis.renderAxis();
			}
			for (let s1 of fromEnum<Series>(this.directSeries())) {
				s1.thumbnailDirty = true;
				s1.renderSeries(false);
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.notifyThumbnailAppearanceChanged();
			}
			break;

			case Axis.crossingAxisPropertyName:
			let angleAxis: NumericAngleAxis = typeCast<NumericAngleAxis>((<any>NumericAngleAxis).$type, newValue);
			let catAxis: CategoryAngleAxis = typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, newValue);
			if (angleAxis == null && catAxis == null) {
				this.onAngleAxisChanged(null);
			}
			if (angleAxis != null) {
				this.onAngleAxisChanged(angleAxis);
				angleAxis.onRadiusAxisChanged(this);
			}
			if (catAxis != null) {
				this.onAngleAxisChanged(catAxis);
				catAxis.onRadiusAxisChanged(this);
			}
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case Axis.isInvertedPropertyName:
			if (this.angleAxis != null) {
				this.angleAxis.mustInvalidateLabels = true;
				this.angleAxis.renderAxis1(false);
			}
			break;

		}

	}
	private _crossingValueRadians: number = 0;
	protected get crossingValueRadians(): number {
		return this._crossingValueRadians;
	}
	protected set crossingValueRadians(value: number) {
		this._crossingValueRadians = value;
	}
	onAngleAxisChanged(angleAxis: Axis): void {
		this.angleAxis = angleAxis;
	}
	private _angleAxis: Axis = null;
	get angleAxis(): Axis {
		if (this._angleAxis != null) {
			return this._angleAxis;
		}
		let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (dataChart != null) {
			for (let i = 0; i < dataChart.axes.count; i++) {
				if (typeCast<NumericAngleAxis>((<any>NumericAngleAxis).$type, dataChart.axes._inner[i]) !== null || typeCast<CategoryAngleAxis>((<any>CategoryAngleAxis).$type, dataChart.axes._inner[i]) !== null) {
					return dataChart.axes._inner[i];
				}
			}
		}
		return this._angleAxis;
	}
	set angleAxis(value: Axis) {
		this._angleAxis = value;
	}
	resolveCrossingAxis(): Axis {
		return this.angleAxis;
	}
	createRenderingParamsInstance(): NumericAxisRenderingParameters {
		return new PolarAxisRenderingParameters();
	}
	createRenderingParams(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): NumericAxisRenderingParameters {
		let renderingParams: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, super.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport));
		let closestRadius: number = this.renderingManager.getClosestRadiusValue(windowRect);
		let furthestRadius: number = this.renderingManager.getFurthestRadiusValue(windowRect);
		let maxRadius: number = 0.5 * this.actualRadiusExtentScale;
		let minRadius: number = 0.5 * this.actualInnerRadiusExtentScale;
		let visibleMinimum: number, visibleMaximum: number;
		if (Rect.l_op_Equality(windowRect, SeriesViewer.standardRect)) {
			visibleMaximum = this.actualMaximumValue;
			visibleMinimum = this.actualMinimumValue;
		} else {
			visibleMaximum = Math.min(furthestRadius, maxRadius);
			visibleMinimum = this.getUnscaledValue3(closestRadius);
			visibleMaximum = this.getUnscaledValue3(visibleMaximum);
			let $ret = this.snapVisibleExtents(viewportRect, windowRect, visibleMinimum, visibleMaximum);
			visibleMinimum = $ret.p2;
			visibleMaximum = $ret.p3;
		}
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		let minLen: number = closestRadius;
		let maxLen: number = furthestRadius;
		let resolution: number = Math.min(viewportRect.width, viewportRect.height) * (this.actualRadiusExtentScale - this.actualInnerRadiusExtentScale) / 2;
		renderingParams.center = center;
		let trueMaxLen: number = Math.max(maxLen, minLen);
		let trueMinLen: number = Math.min(minLen, maxLen);
		renderingParams.maxLength = trueMaxLen;
		renderingParams.minLength = trueMinLen;
		let trueVisibleMinimum: number = Math.min(visibleMinimum, visibleMaximum);
		let trueVisibleMaximum: number = Math.max(visibleMinimum, visibleMaximum);
		if (trueVisibleMinimum < this.actualMinimumValue) {
			trueVisibleMinimum = this.actualMinimumValue;
		}
		if (trueVisibleMaximum > this.actualMaximumValue) {
			trueVisibleMaximum = this.actualMaximumValue;
		}
		this.actualVisibleMinimumValue = trueVisibleMinimum;
		this.actualVisibleMaximumValue = trueVisibleMaximum;
		renderingParams.rangeInfos.add(((() => {
			let $ret = new RangeInfo();
			$ret.visibleMinimum = trueVisibleMinimum;
			$ret.visibleMaximum = trueVisibleMaximum;
			$ret.resolution = resolution;
			return $ret;
		})()));
		let angleAxis: IAngleScaler = typeCast<IAngleScaler>(IAngleScaler_$type, this.angleAxis);
		if (angleAxis != null) {
			let minAngle: number;
			let maxAngle: number;
			let $ret1 = angleAxis.getMinMaxAngle(windowRect, minAngle, maxAngle);
			minAngle = $ret1.p1;
			maxAngle = $ret1.p2;
			renderingParams.minAngle = Math.min(minAngle, maxAngle);
			renderingParams.maxAngle = Math.max(minAngle, maxAngle);
		}
		let effectiveMaximum: number = this.getEffectiveMaximumLength();
		if (maxLen >= maxRadius) {
			maxLen = effectiveMaximum;
		}
		if (minLen < minRadius) {
			minLen = minRadius;
		}
		renderingParams.minLength = minLen;
		renderingParams.maxLength = maxLen;
		renderingParams.effectiveMaximum = effectiveMaximum;
		renderingParams.tickmarkValues = this.actualTickmarkValues;
		let linearTicks: LinearTickmarkValues = typeCast<LinearTickmarkValues>((<any>LinearTickmarkValues).$type, renderingParams.tickmarkValues);
		if (linearTicks != null) {
			linearTicks.minTicks = this.getMinTicks(center, renderingParams.minLength, renderingParams.maxLength, windowRect, viewportRect);
		}
		return renderingParams;
	}
	private snapVisibleExtents(viewportRect: Rect, windowRect: Rect, visibleMinimum: number, visibleMaximum: number): { p2?: number; p3?: number; } {
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		let extent: number = 0;
		if (this.isInverted) {
			extent = this.getScaledValue3(this.actualMinimumValue);
		} else {
			extent = this.getScaledValue3(this.actualMaximumValue);
		}
		let crossingValue: number = 0;
		if (this.crossingValue != null) {
			crossingValue = this.crossingValueRadians;
		}
		let x: number = center.x + extent * Math.cos(crossingValue);
		let y: number = center.y + extent * Math.sin(crossingValue);
		center.x = ViewportUtils.transformXToViewport(center.x, windowRect, viewportRect);
		center.y = ViewportUtils.transformYToViewport(center.y, windowRect, viewportRect);
		x = ViewportUtils.transformXToViewport(x, windowRect, viewportRect);
		y = ViewportUtils.transformYToViewport(y, windowRect, viewportRect);
		if (x >= viewportRect.left && x <= viewportRect.right && y >= viewportRect.top && y <= viewportRect.bottom) {
			if (this.isInverted) {
				visibleMaximum = this.actualMinimumValue;
			} else {
				visibleMaximum = this.actualMaximumValue;
			}
		}
		if (center.x >= viewportRect.left && center.x <= viewportRect.right && center.y >= viewportRect.top && center.y <= viewportRect.bottom) {
			if (this.isInverted) {
				visibleMinimum = this.actualMaximumValue;
			} else {
				visibleMinimum = this.actualMinimumValue;
			}
		}
		return {
			p2: visibleMinimum,
			p3: visibleMaximum

		};
	}
	private getMinTicks(center: Point, minLen: number, maxLen: number, windowRect: Rect, viewportRect: Rect): number {
		let radViewportLength: number = ViewportUtils.transformXToViewportLength(maxLen - minLen, windowRect, viewportRect);
		let viewportRatio: number = radViewportLength / Math.min(viewportRect.width, viewportRect.height);
		if (viewportRatio > 0.7) {
			return 10;
		}
		return 5;
	}
	getEffectiveMaximumLength(): number {
		let value: number = 0;
		if (!this.isInverted) {
			value = this.getScaledValue3(this.actualMaximumValue);
		} else {
			value = this.getScaledValue3(this.actualMinimumValue);
		}
		return value;
	}
	onRangeChanged(ea: AxisRangeChangedEventArgs): void {
		if (this.angleAxis != null) {
			this.angleAxis.renderAxis();
		}
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let contentViewport: Rect = this.getContentViewport();
		let renderParams = this.renderer.render(animate, viewportRect, windowRect, effectiveViewportRect, contentViewport);
		if (renderParams != null) {
			this.actualInterval = renderParams.tickmarkValues.interval;
			this.actualMinorInterval = renderParams.tickmarkValues.actualMinorInterval;
		}
	}
	protected viewportChangedOverride(oldRect: Rect, newRect: Rect): void {
		super.viewportChangedOverride(oldRect, newRect);
		if (newRect.height != oldRect.height || newRect.width != oldRect.width) {
			this.updateRange();
		}
	}
	defineClipRegion(geom: GeometryGroup, viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): void {
		let renderingParams = typeCast<IPolarRadialRenderingParameters>(IPolarRadialRenderingParameters_$type, this.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport));
		if (renderingParams == null) {
			return;
		}
		this.renderingManager.concentricStrip(geom.children, renderingParams.minLength, renderingParams.maxLength, viewportRect, windowRect, renderingParams.center, renderingParams.minAngle, renderingParams.maxAngle);
	}
	protected get_orientation(): AxisOrientation {
		return AxisOrientation.Radial;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
	getOverlayGeometry(scaledValue: number, windowRect: Rect, viewport: Rect, effectiveViewport: any = null, contentViewport: any = null): Geometry {
		let renderParams: PolarAxisRenderingParameters = typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, this.createRenderingParams(viewport, windowRect, <Rect>effectiveViewport, <Rect>contentViewport));
		let radius: number = scaledValue;
		let pathGeometry: PathGeometry = new PathGeometry();
		let radiusX: number = ViewportUtils.transformXToViewportLength(radius, windowRect, viewport);
		let radiusY: number = ViewportUtils.transformYToViewportLength(radius, windowRect, viewport);
		if (radiusX <= 0 || radiusY <= 0) {
			return null;
		}
		let centerX: number = ViewportUtils.transformXToViewport(renderParams.center.x, windowRect, viewport);
		let centerY: number = ViewportUtils.transformYToViewport(renderParams.center.y, windowRect, viewport);
		if (renderParams.maxAngle - renderParams.minAngle < Math.PI && renderParams.maxAngle - renderParams.minAngle > 0) {
			let startPoint: Point = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(renderParams.center.x + radius * Math.cos(renderParams.minAngle), windowRect, viewport), y: ViewportUtils.transformYToViewport(renderParams.center.y + radius * Math.sin(renderParams.minAngle), windowRect, viewport) };
			let endPoint: Point = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(renderParams.center.x + radius * Math.cos(renderParams.maxAngle), windowRect, viewport), y: ViewportUtils.transformYToViewport(renderParams.center.y + radius * Math.sin(renderParams.maxAngle), windowRect, viewport) };
			let pf: PathFigure = new PathFigure();
			pf._startPoint = startPoint;
			pf._isClosed = false;
			pf._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.isLargeArc = false;
				$ret.point = endPoint;
				$ret.size = new Size(1, radiusX, radiusY);
				$ret.sweepDirection = SweepDirection.Clockwise;
				return $ret;
			})()));
			pathGeometry.figures.add(pf);
		} else {
			let pf1: PathFigure = new PathFigure();
			pf1._startPoint = <Point>{ $type: Point_$type, x: centerX, y: centerY - radiusY };
			pf1._isClosed = true;
			pf1._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.isLargeArc = false;
				$ret.point = <Point>{ $type: Point_$type, x: centerX, y: centerY + radiusY };
				$ret.size = new Size(1, radiusX, radiusY);
				$ret.sweepDirection = SweepDirection.Clockwise;
				return $ret;
			})()));
			pf1._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.isLargeArc = false;
				$ret.point = <Point>{ $type: Point_$type, x: centerX, y: centerY - radiusY };
				$ret.size = new Size(1, radiusX, radiusY);
				$ret.sweepDirection = SweepDirection.Clockwise;
				return $ret;
			})()));
			pathGeometry.figures.add(pf1);
		}
		return pathGeometry;
	}
}

/**
 * @hidden 
 */
export class AngleAxisLabelPanelView extends AxisLabelPanelBaseView {
	static $t: Type = markType(AngleAxisLabelPanelView, 'AngleAxisLabelPanelView', (<any>AxisLabelPanelBaseView).$type);
	private _angleModel: AngleAxisLabelPanel = null;
	protected get angleModel(): AngleAxisLabelPanel {
		return this._angleModel;
	}
	protected set angleModel(value: AngleAxisLabelPanel) {
		this._angleModel = value;
	}
	constructor(model: AngleAxisLabelPanel) {
		super(model);
		this.angleModel = model;
	}
	onInit(): void {
		super.onInit();
		this.angleModel.clipLabelsToBounds = true;
	}
	determineLargestLabels(rectangles: List$1<Rect>, isOverlayList: List$1<boolean>): void {
		this.angleModel.largestWidth = -1.7976931348623157E+308;
		this.angleModel.largestHeight = -1.7976931348623157E+308;
		this.angleModel.largestRenderWidth = -1.7976931348623157E+308;
		this.angleModel.largestRenderHeight = -1.7976931348623157E+308;
		for (let i: number = 0; i < this.model.textBlocks.count; i++) {
			let currentTextBlock: FrameworkElement = this.model.textBlocks._inner[i];
			let position: LabelPosition = this.model.labelPositions._inner[i];
			let isOverlay = position.isOverlay;
			let point: Point = this.angleModel.getPoint(position.value);
			let width: number = this.getDesiredWidth(currentTextBlock);
			let height: number = this.getDesiredHeight(currentTextBlock);
			let fullWidth: number = width + this.getLabelLeftMargin() + this.getLabelRightMargin();
			let fullHeight: number = height + this.getLabelTopMargin() + this.getLabelBottomMargin();
			let x: number = point.x - fullWidth / 2;
			let y: number = point.y - fullHeight / 2;
			this.angleModel.largestRenderWidth = Math.max(width, this.angleModel.largestRenderWidth);
			this.angleModel.largestRenderHeight = Math.max(height, this.angleModel.largestRenderHeight);
			this.angleModel.largestWidth = Math.max(fullWidth, this.angleModel.largestWidth);
			this.angleModel.largestHeight = Math.max(fullHeight, this.angleModel.largestHeight);
			let rect: Rect = new Rect(0, x, y, fullWidth, fullHeight);
			rectangles.add(rect);
			isOverlayList.add(isOverlay);
		}
	}
	getLabelBottomMargin(): number {
		return 0;
	}
	getLabelLeftMargin(): number {
		return 0;
	}
	getLabelRightMargin(): number {
		return 0;
	}
	getLabelTopMargin(): number {
		return 0;
	}
}

/**
 * @hidden 
 */
export class CategoryAngleAxisView extends CategoryAxisBaseView {
	static $t: Type = markType(CategoryAngleAxisView, 'CategoryAngleAxisView', (<any>CategoryAxisBaseView).$type);
	private _categoryAngleModel: CategoryAngleAxis = null;
	protected get categoryAngleModel(): CategoryAngleAxis {
		return this._categoryAngleModel;
	}
	protected set categoryAngleModel(value: CategoryAngleAxis) {
		this._categoryAngleModel = value;
	}
	constructor(model: CategoryAngleAxis) {
		super(model);
		this.categoryAngleModel = model;
	}
}

/**
 * @hidden 
 */
export class NumericAngleAxisView extends NumericAxisBaseView {
	static $t: Type = markType(NumericAngleAxisView, 'NumericAngleAxisView', (<any>NumericAxisBaseView).$type);
	private _numericAngleModel: NumericAngleAxis = null;
	protected get numericAngleModel(): NumericAngleAxis {
		return this._numericAngleModel;
	}
	protected set numericAngleModel(value: NumericAngleAxis) {
		this._numericAngleModel = value;
	}
	constructor(model: NumericAngleAxis) {
		super(model);
		this.numericAngleModel = model;
	}
}

/**
 * @hidden 
 */
export class NumericRadiusAxisView extends NumericAxisBaseView {
	static $t: Type = markType(NumericRadiusAxisView, 'NumericRadiusAxisView', (<any>NumericAxisBaseView).$type);
	private _numericRadiusModel: NumericRadiusAxis = null;
	protected get numericRadiusModel(): NumericRadiusAxis {
		return this._numericRadiusModel;
	}
	protected set numericRadiusModel(value: NumericRadiusAxis) {
		this._numericRadiusModel = value;
	}
	constructor(model: NumericRadiusAxis) {
		super(model);
		this.numericRadiusModel = model;
	}
}


