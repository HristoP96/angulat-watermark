/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialSeries } from "./FinancialSeries";
import { ITrendLineSeries, ITrendLineSeries_$type } from "./ITrendLineSeries";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Brush } from "igniteui-core/Brush";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { PriceDisplayType, PriceDisplayType_$type } from "./PriceDisplayType";
import { SeriesView } from "./SeriesView";
import { Type, Point, Base, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, enumGetBox, EnumUtil, Number_$type, typeGetValue, typeCast, fromEnum, runOn, Point_$type, markType, PointUtil } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryFrame } from "./CategoryFrame";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { FinancialSeriesView } from "./FinancialSeriesView";
import { Series } from "./Series";
import { FinancialBucketCalculator } from "./FinancialBucketCalculator";
import { ITrendLineManager } from "./ITrendLineManager";
import { Axis } from "./Axis";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { RectUtil } from "igniteui-core/RectUtil";
import { CategoryTrendLineManagerFactory } from "./CategoryTrendLineManagerFactory";
import { AxisRange } from "./AxisRange";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { ScalerParams } from "./ScalerParams";
import { SeriesViewer } from "./SeriesViewer";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { SyncLink } from "./SyncLink";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericYAxis } from "./NumericYAxis";
import { IPreparesCategoryTrendline } from "./IPreparesCategoryTrendline";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Path } from "igniteui-core/Path";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { Geometry } from "igniteui-core/Geometry";
import { RectangleGeometry } from "igniteui-core/RectangleGeometry";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_ } from "igniteui-core/number";
import { boxArray$1 } from "igniteui-core/array";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { FinancialPriceBucketCalculator } from "./FinancialPriceBucketCalculator";
import { Shape } from "igniteui-core/Shape";
import { Extensions } from "igniteui-core/Extensions";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Polyline } from "igniteui-core/Polyline";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class FinancialPriceSeries extends FinancialSeries implements ITrendLineSeries {
	static $t: Type = markType(FinancialPriceSeries, 'FinancialPriceSeries', (<any>FinancialSeries).$type, [ITrendLineSeries_$type]);
	protected createView(): SeriesView {
		return new FinancialPriceSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.financialPriceView = <FinancialPriceSeriesView>view;
	}
	private _financialPriceView: FinancialPriceSeriesView;
	get financialPriceView(): FinancialPriceSeriesView {
		return this._financialPriceView;
	}
	set financialPriceView(value: FinancialPriceSeriesView) {
		this._financialPriceView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>FinancialPriceSeries).$type;
		this.previousFrame = new CategoryFrame(5);
		this.transitionFrame = new CategoryFrame(5);
		this.currentFrame = new CategoryFrame(5);
	}
	get trendLineType(): TrendLineType {
		return EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, this.getValue(FinancialPriceSeries.trendLineTypeProperty));
	}
	set trendLineType(value: TrendLineType) {
		this.setValue(FinancialPriceSeries.trendLineTypeProperty, enumGetBox<TrendLineType>(TrendLineType_$type, value));
	}
	static readonly trendLineTypeProperty: DependencyProperty = DependencyProperty.register(Series.trendLineTypePropertyName, TrendLineType_$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, enumGetBox<TrendLineType>(TrendLineType_$type, TrendLineType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLineTypePropertyName, e.oldValue, e.newValue)));
	get trendLineBrush(): Brush {
		return <Brush>this.getValue(FinancialPriceSeries.trendLineBrushProperty);
	}
	set trendLineBrush(value: Brush) {
		this.setValue(FinancialPriceSeries.trendLineBrushProperty, value);
	}
	static readonly trendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineBrushPropertyName, (<any>Brush).$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLineBrushPropertyName, e.oldValue, e.newValue)));
	get actualTrendLineBrush(): Brush {
		return <Brush>this.getValue(FinancialPriceSeries.actualTrendLineBrushProperty);
	}
	set actualTrendLineBrush(value: Brush) {
		this.setValue(FinancialPriceSeries.actualTrendLineBrushProperty, value);
	}
	static readonly actualTrendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineActualBrushPropertyName, (<any>Brush).$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLineActualBrushPropertyName, e.oldValue, e.newValue)));
	get trendLineThickness(): number {
		return <number>this.getValue(FinancialPriceSeries.trendLineThicknessProperty);
	}
	set trendLineThickness(value: number) {
		this.setValue(FinancialPriceSeries.trendLineThicknessProperty, value);
	}
	static readonly trendLineThicknessProperty: DependencyProperty = DependencyProperty.register(Series.trendLineThicknessPropertyName, Number_$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, 1.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLineThicknessPropertyName, e.oldValue, e.newValue)));
	get trendLineDashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(FinancialPriceSeries.trendLineDashCapProperty));
	}
	set trendLineDashCap(value: PenLineCap) {
		this.setValue(FinancialPriceSeries.trendLineDashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly trendLineDashCapProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashCapPropertyName, PenLineCap_$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLineDashCapPropertyName, e.oldValue, e.newValue)));
	get trendLineDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(FinancialPriceSeries.trendLineDashArrayProperty);
	}
	set trendLineDashArray(value: DoubleCollection) {
		this.setValue(FinancialPriceSeries.trendLineDashArrayProperty, value);
	}
	static readonly trendLineDashArrayProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLineDashArrayPropertyName, e.oldValue, e.newValue)));
	get trendLinePeriod(): number {
		return typeGetValue(this.getValue(FinancialPriceSeries.trendLinePeriodProperty));
	}
	set trendLinePeriod(value: number) {
		this.setValue(FinancialPriceSeries.trendLinePeriodProperty, value);
	}
	static readonly trendLinePeriodProperty: DependencyProperty = DependencyProperty.register(Series.trendLinePeriodPropertyName, Number_$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, 7, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLinePeriodPropertyName, e.oldValue, e.newValue)));
	static readonly trendLineZIndexProperty: DependencyProperty = DependencyProperty.register(Series.trendLineZIndexPropertyName, Number_$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, 1001, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(Series.trendLineZIndexPropertyName, e.oldValue, e.newValue)));
	get trendLineZIndex(): number {
		return typeGetValue(this.getValue(FinancialPriceSeries.trendLineZIndexProperty));
	}
	set trendLineZIndex(value: number) {
		this.setValue(FinancialPriceSeries.trendLineZIndexProperty, value);
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			(<ISortingAxis><any>this.xAxis).notifyDataChanged();
		}
		this.financialPriceView.bucketCalculator.calculateBuckets(this.resolution);
		if (this.financialPriceView.hasTrendLineManager) {
			this.financialPriceView.trendLineManager.dataUpdated(action, position, count, propertyName);
		}
		if (this.yAxis != null) {
			this.yAxis.updateRange();
		}
		this.renderSeries(true);
	}
	get displayType(): PriceDisplayType {
		return EnumUtil.getEnumValue<PriceDisplayType>(PriceDisplayType_$type, this.getValue(FinancialPriceSeries.displayTypeProperty));
	}
	set displayType(value: PriceDisplayType) {
		this.setValue(FinancialPriceSeries.displayTypeProperty, enumGetBox<PriceDisplayType>(PriceDisplayType_$type, value));
	}
	static readonly displayTypePropertyName: string = "DisplayType";
	static readonly displayTypeProperty: DependencyProperty = DependencyProperty.register(FinancialPriceSeries.displayTypePropertyName, PriceDisplayType_$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, enumGetBox<PriceDisplayType>(PriceDisplayType_$type, PriceDisplayType.Candlestick), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(FinancialPriceSeries.displayTypePropertyName, e.oldValue, e.newValue)));
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.Computational;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this.currentFrame == null || this.currentFrame.buckets.count == 0) {
			return Rect.empty;
		}
		let pos = this.fromWorldPosition(world);
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let matching = this.getMatchingBuckets(this.xAxis, this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), world, true);
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let prevDist = Math.abs(pos.x - prevBucketValue[0]);
		let nextDist = Math.abs(pos.x - nextBucketValue[0]);
		let width: number = this.getItemWidth(this.financialView, effectiveViewportRect);
		width = Math.max(width, FinancialPriceSeries.mIN_WIDTH);
		let distanceFromCenter: number = (width - 1) / 2;
		if (prevDist < nextDist) {
			let left: number = prevBucketValue[0] - distanceFromCenter;
			let center: number = prevBucketValue[0];
			let right: number = prevBucketValue[0] + distanceFromCenter;
			let open: number = prevBucketValue[1];
			let high: number = prevBucketValue[2];
			let low: number = prevBucketValue[3];
			let close: number = prevBucketValue[4];
			let min = Math.min(Math.min(Math.min(open, high), low), close);
			let max = Math.max(Math.max(Math.max(open, high), low), close);
			return new Rect(0, left, min, Math.abs(right - left), max - min);
		} else {
			let left1: number = nextBucketValue[0] - distanceFromCenter;
			let center1: number = nextBucketValue[0];
			let right1: number = nextBucketValue[0] + distanceFromCenter;
			let open1: number = nextBucketValue[1];
			let high1: number = nextBucketValue[2];
			let low1: number = nextBucketValue[3];
			let close1: number = nextBucketValue[4];
			let min1 = Math.min(Math.min(Math.min(open1, high1), low1), close1);
			let max1 = Math.max(Math.max(Math.max(open1, high1), low1), close1);
			return new Rect(0, left1, min1, Math.abs(right1 - left1), max1 - min1);
		}
	}
	private getFineGrainedBoxes(bucket: number[], distanceFromCenter: number): Rect[] {
		let left: number = bucket[0] - distanceFromCenter;
		let center: number = bucket[0];
		let right: number = bucket[0] + distanceFromCenter;
		let open: number = bucket[1];
		let high: number = bucket[2];
		let low: number = bucket[3];
		let close: number = bucket[4];
		let min = Math.min(Math.min(Math.min(open, high), low), close);
		let max = Math.max(Math.max(Math.max(open, high), low), close);
		let stickTop = Math.min(high, low);
		let stickBottom = Math.max(high, low);
		let candleTop = Math.min(open, close);
		let candleBottom = Math.max(open, close);
		if (this.displayType == PriceDisplayType.OHLC) {
			let boxes = <Rect[]>new Array(3);
			let openBox = new Rect(0, left, open, distanceFromCenter, 0);
			let closeBox = new Rect(0, center, close, distanceFromCenter, 0);
			let stickBox = new Rect(0, center, stickTop, 0, stickBottom - stickTop);
			boxes[0] = openBox;
			boxes[1] = closeBox;
			boxes[2] = stickBox;
			return boxes;
		} else {
			let boxes1 = <Rect[]>new Array(2);
			let wickBox = new Rect(0, center, stickTop, 0, stickBottom - stickTop);
			let candleBox = new Rect(0, left, candleTop, distanceFromCenter * 2, candleBottom - candleTop);
			boxes1[0] = wickBox;
			boxes1[1] = candleBox;
			return boxes1;
		}
	}
	getSeriesValueFineGrainedBoundingBoxes(world: Point): Rect[] {
		let boxes = new List$1<Rect>((<any>Rect).$type, 0);
		let pos = this.fromWorldPosition(world);
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let matching = this.getMatchingBuckets(this.xAxis, this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), world, true);
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let prevDist = Math.abs(pos.x - prevBucketValue[0]);
		let nextDist = Math.abs(pos.x - nextBucketValue[0]);
		let width: number = this.getItemWidth(this.financialView, effectiveViewportRect);
		width = Math.max(width, FinancialPriceSeries.mIN_WIDTH);
		let distanceFromCenter: number = (width - 1) / 2;
		if (prevDist < nextDist) {
			return this.getFineGrainedBoxes(prevBucketValue, distanceFromCenter);
		} else {
			return this.getFineGrainedBoxes(nextBucketValue, distanceFromCenter);
		}
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testShapesOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	protected testShapesOver(position: Point, isFinger: boolean): boolean {
		let box = this.getSeriesValueBoundingBoxFromSeriesPixel(position);
		if (box.isEmpty) {
			return false;
		}
		let inflated = RectUtil.inflate(box, (this.thickness / 2) + this.getHitTestAllowance(isFinger));
		if (inflated.containsPoint(position)) {
			let boxes = this.getSeriesValueFineGrainedBoundingBoxesFromSeriesPixel(position);
			if (boxes != null) {
				for (let i = 0; i < boxes.length; i++) {
					let fineBox = boxes[i];
					let fineInflated = RectUtil.inflate(fineBox, (this.thickness / 2) + this.getHitTestAllowance(isFinger));
					if (fineInflated.containsPoint(position)) {
						return true;
					}
				}
			}
		}
		return false;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case FinancialSeries.xAxisPropertyName:
			this.financialPriceView.selectTrendlineManager();
			break;

			case Series.trendLineTypePropertyName:
			let newType = EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, newValue);
			if (newType != TrendLineType.None) {
				this.financialPriceView.trendLineManager = CategoryTrendLineManagerFactory.selectManager(this.financialPriceView.trendLineManager, this.xAxis, this.rootCanvas, this, this.res);
			}
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.financialPriceView.hasTrendLineManager && this.financialPriceView.trendLineManager != null && this.financialPriceView.trendLineManager.propertyUpdated(sender, propertyName, oldValue, newValue)) {
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
		}
		switch (propertyName) {
			case FinancialPriceSeries.displayTypePropertyName:
			if (this.rootCanvas != null) {
				this.updatePathBrushes();
				this.currentFrame.incrementFrameVersion();
				this.renderFrame(this.currentFrame, this.financialPriceView);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.trendLineBrushPropertyName:
			this.updateIndexedProperties();
			break;

			case Series.trendLineTypePropertyName:
			this.notifyThumbnailAppearanceChanged();
			break;

			case FinancialSeries.negativeBrushPropertyName:

			case FinancialPriceSeries.negativeOutlinePropertyName:
			this.onVisualPropertiesChanged();
			break;

		}

	}
	private updatePathBrushes(): void {
		this.financialPriceView.updatePathBrushes();
		if (this.thumbnailView != null) {
			(<FinancialPriceSeriesView>this.thumbnailView).updatePathBrushes();
		}
	}
	getRange(axis: Axis): AxisRange {
		if (axis != null && axis == this.yAxis && this.lowColumn != null && !isNaN_(this.lowColumn.minimum) && this.highColumn != null && !isNaN_(this.highColumn.maximum)) {
			return new AxisRange(this.lowColumn.minimum, this.highColumn.maximum);
		}
		return null;
	}
	getVisibleRange(): AxisRange {
		if (this.lowColumn == null || this.highColumn == null) {
			return null;
		}
		let xParams: ScalerParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.seriesViewer.viewportRect, this.xAxis.isInverted, this.getEffectiveViewport());
		let left: number = (this.xAxis.getUnscaledValue(this.seriesViewer.viewportRect.left, xParams));
		let right: number = (this.xAxis.getUnscaledValue(this.seriesViewer.viewportRect.right, xParams));
		let sorting: ISortingAxis = null;
		if (this.xAxis.isSorting) {
			sorting = <ISortingAxis><any>this.xAxis;
			left = sorting.getIndexClosestToUnscaledValue(left);
			right = sorting.getIndexClosestToUnscaledValue(right);
		} else {
			left = Math.floor(left);
			right = Math.ceil(right);
		}
		left = Math.max(0, Math.min(this.lowColumn.count - 1, left));
		right = Math.max(0, Math.min(this.lowColumn.count - 1, right));
		let min: number = 1.7976931348623157E+308;
		let max: number = -1.7976931348623157E+308;
		for (let ii: number = <number>truncate(left); ii <= <number>truncate(right); ii++) {
			let index: number = ii;
			if (sorting != null) {
				index = sorting.sortedIndices._inner[ii];
			}
			min = Math.min(min, this.lowColumn.item(index));
			max = Math.max(max, this.highColumn.item(index));
		}
		return new AxisRange(min, max);
	}
	getReferenceValue(): number {
		return Series.getReferenceValue1(this.openColumn, typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis));
	}
	scrollIntoView(item: any): boolean {
		let index: number = this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let windowRect: Rect = this.view.windowRect;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view.viewport;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		if (index >= 0 && Rect.l_op_Inequality(windowRect, null) && Rect.l_op_Inequality(viewportRect, null)) {
			if (this.xAxis != null) {
				let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.xAxis.isInverted, effectiveViewportRect);
				let cx: number = this.xAxis.getScaledValue(index, xParams);
				if (cx < windowRect.left + 0.1 * windowRect.width) {
					cx = cx + 0.4 * windowRect.width;
				}
				if (cx > windowRect.right - 0.1 * windowRect.width) {
					cx = cx - 0.4 * windowRect.width;
				}
				windowRect.x = cx - 0.5 * windowRect.width;
			}
			if (this.yAxis != null && this.lowColumn != null && this.highColumn != null && index < this.lowColumn.count && index < this.highColumn.count) {
				let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, effectiveViewportRect);
				yParams.referenceValue = this.getReferenceValue();
				let low: number = this.yAxis.getScaledValue(this.lowColumn.item(index), yParams);
				let high: number = this.yAxis.getScaledValue(this.highColumn.item(index), yParams);
				if (!isNaN_(low) && !isNaN_(high)) {
					let height: number = Math.abs(low - high);
					if (windowRect.height < height) {
						windowRect.height = height;
						windowRect.y = Math.min(low, high);
					} else {
						if (low < windowRect.top + 0.1 * windowRect.height) {
							low = low + 0.4 * windowRect.height;
						}
						if (low > windowRect.bottom - 0.1 * windowRect.height) {
							low = low - 0.4 * windowRect.height;
						}
						windowRect.y = low - 0.5 * windowRect.height;
					}
				}
			}
			this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		if (this.openColumn == null || this.closeColumn == null || this.highColumn == null || this.lowColumn == null) {
			isValid = false;
		}
		return isValid;
	}
	prepareFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		super.prepareFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xaxis: CategoryAxisBase = this.xAxis;
		let yaxis: NumericYAxis = this.yAxis;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xaxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, yaxis.isInverted, effectiveViewportRect);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		frame.buckets.clear();
		frame.markers.clear();
		frame.trend.clear();
		let offset: number = 0;
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis);
		if (sortingXAxis != null && (sortingXAxis.sortedIndices == null || sortingXAxis.sortedIndices.count != this.fastItemsSource.count)) {
			return;
		}
		offset = this.getOffset(windowRect, viewportRect, effectiveViewportRect);
		let priceSeriesView: FinancialPriceSeriesView = typeCast<FinancialPriceSeriesView>((<any>FinancialPriceSeriesView).$type, view);
		let resolution: number = this.resolution;
		if (this.trendLineType != TrendLineType.None) {
			let typical: number[] = <number[]>new Array(this.fastItemsSource.count);
			let typicalIndex: number = 0;
			for (let typicalPrice of fromEnum<number>(this.typicalColumn)) {
				typical[typicalIndex] = typicalPrice;
				typicalIndex++;
			}
			if (this.financialPriceView.hasTrendLineManager) {
				(<IPreparesCategoryTrendline><any><any>this.financialPriceView.trendLineManager).prepareLineCore(frame.trend, this.trendLineType, boxArray$1<number>(typical), this.trendLinePeriod, (x: number) => this.xAxis.getScaledValue(x, xParams), (y: number) => this.yAxis.getScaledValue(y, yParams), ((() => {
					let $ret = new TrendResolutionParams();
					$ret.bucketSize = view.bucketCalculator.bucketSize;
					$ret.firstBucket = view.bucketCalculator.firstBucket;
					$ret.lastBucket = view.bucketCalculator.lastBucket;
					$ret.offset = offset;
					$ret.resolution = resolution;
					$ret.viewport = viewportRect;
					return $ret;
				})()));
			}
		}
		let singlePixelSpan: number = this.xAxis.getUnscaledValue(2, xParams) - this.xAxis.getUnscaledValue(1, xParams);
		for (let i: number = view.bucketCalculator.firstBucket; i <= view.bucketCalculator.lastBucket; ++i) {
			let bucket: number[];
			if (sortingXAxis == null) {
				bucket = view.bucketCalculator.getBucket(i);
			} else {
				let index: number = sortingXAxis.sortedIndices._inner[i];
				let bucketX: number = sortingXAxis.getUnscaledValueAt(index);
				let bucketOpen: number = this.openColumn.item(index);
				let bucketHigh: number = this.highColumn.item(index);
				let bucketLow: number = this.lowColumn.item(index);
				let bucketClose: number = this.closeColumn.item(index);
				let currentOpen: number = bucketOpen;
				let currentHigh: number = bucketHigh;
				let currentLow: number = bucketLow;
				let currentClose: number = bucketClose;
				let currentX: number = bucketX;
				while (i < view.bucketCalculator.lastBucket) {
					index = sortingXAxis.sortedIndices._inner[i + 1];
					currentX = sortingXAxis.getUnscaledValueAt(index);
					if (currentX - bucketX > singlePixelSpan * resolution) {
						break;
					}
					i++;
					currentHigh = Math.max(currentHigh, this.highColumn.item(index));
					currentLow = Math.min(currentLow, this.lowColumn.item(index));
					currentClose = this.closeColumn.item(index);
				}
				let xVal: number = NaN;
				if (!isNaN_(bucketX)) {
					xVal = this.xAxis.getScaledValue(bucketX, xParams);
				}
				bucket = <number[]>[ xVal, currentOpen, currentHigh, currentLow, currentClose ];
			}
			if (!isNaN_(bucket[0])) {
				if (sortingXAxis != null) {
					bucket[0] = bucket[0] + offset;
				} else {
					bucket[0] = xaxis.getScaledValue(bucket[0], xParams) + offset;
				}
				bucket[1] = yaxis.getScaledValue(bucket[1], yParams);
				bucket[2] = yaxis.getScaledValue(bucket[2], yParams);
				bucket[3] = yaxis.getScaledValue(bucket[3], yParams);
				bucket[4] = yaxis.getScaledValue(bucket[4], yParams);
				frame.buckets.add(bucket);
			}
		}
		return;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let financialPriceView: FinancialPriceSeriesView = typeCast<FinancialPriceSeriesView>((<any>FinancialPriceSeriesView).$type, view);
		financialPriceView.clearPriceSymbols();
		if (wipeClean) {
			financialPriceView.shapes.count = 0;
		}
		if (financialPriceView.hasTrendLineManager && financialPriceView.trendLineManager != null) {
			financialPriceView.trendLineManager.clearPoints();
		}
	}
	private static readonly mIN_WIDTH: number = 3;
	protected get_hasIndividualElements(): boolean {
		return true;
	}
	renderFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		super.renderFrame(frame, view);
		if (this.xAxis == null || this.yAxis == null) {
			return;
		}
		let isDirty: boolean = false;
		if (view.checkFrameDirty(frame)) {
			isDirty = true;
			view.updateFrameVersion(frame);
		}
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.xAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		let priceSeriesView: FinancialPriceSeriesView = typeCast<FinancialPriceSeriesView>((<any>FinancialPriceSeriesView).$type, view);
		priceSeriesView.clearGroupedPriceSymbols();
		priceSeriesView.separateMode = false;
		if (priceSeriesView.hasTrendLineManager) {
			priceSeriesView.trendLineManager.clearPoints();
		}
		if (this.trendLineType != TrendLineType.None) {
			priceSeriesView.trendLineManager.rasterizeTrendLine(frame.trend);
		}
		if (areStylesOverriden) {
			this.renderSeparate(frame, view, isDirty);
		} else {
			priceSeriesView.shapes.count = 0;
			this.renderCombinedGrouping(frame, view);
		}
	}
	getItemSpan(): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		return this.getItemWidth(this.financialView, effectiveViewportRect);
	}
	private renderSeparate(frame: CategoryFrame, view: FinancialSeriesView, isDirty: boolean): void {
		let displayType: PriceDisplayType = this.displayType;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let width: number = this.getItemWidth(view, effectiveViewportRect);
		let distanceFromCenter: number = (width - 1) / 2;
		let priceView: FinancialPriceSeriesView = typeCast<FinancialPriceSeriesView>((<any>FinancialPriceSeriesView).$type, view);
		priceView.separateMode = true;
		let buckets = frame.buckets;
		let count: number = 0;
		let valueCount: number = this.fastItemsSource.count;
		let xAxis = this.xAxis;
		let xParams = new ScalerParams(0, view.windowRect, view.viewport, xAxis.isInverted, effectiveViewportRect);
		let actualBrush = this.actualBrush;
		let negativeBrush = this.negativeBrush;
		if (negativeBrush == null) {
			negativeBrush = actualBrush;
		}
		let actualOutline = this.actualOutline;
		let negativeOutline = this.negativeOutline;
		if (negativeOutline == null) {
			negativeOutline = actualOutline;
		}
		for (let i: number = 0; i < buckets.count; ++i) {
			let left: number = buckets._inner[i][0] - distanceFromCenter;
			let center: number = buckets._inner[i][0];
			let right: number = buckets._inner[i][0] + distanceFromCenter;
			let open: number = buckets._inner[i][1];
			let high: number = buckets._inner[i][2];
			let low: number = buckets._inner[i][3];
			let close: number = buckets._inner[i][4];
			if (isNaN_(open) || isNaN_(high) || isNaN_(low) || isNaN_(close)) {
				continue;
			}
			let p: Path = priceView.shapes.item(count);
			count++;
			let negative: boolean = open < close;
			let pg: PathGeometry = new PathGeometry();
			if (isDirty) {
				switch (displayType) {
					case PriceDisplayType.Candlestick:
					if (negative) {
						let tmp: number = open;
						open = close;
						close = tmp;
					}
					let pf1: PathFigure = new PathFigure();
					pf1._startPoint = <Point>{ $type: Point_$type, x: center, y: low };
					pf1._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: center, y: open };
						return $ret;
					})()));
					let pf2: PathFigure = new PathFigure();
					pf2._startPoint = <Point>{ $type: Point_$type, x: left, y: close };
					pf2._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: right, y: close };
						return $ret;
					})()));
					pf2._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: right, y: open };
						return $ret;
					})()));
					pf2._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: left, y: open };
						return $ret;
					})()));
					pf2._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: left, y: close };
						return $ret;
					})()));
					let pf3: PathFigure = new PathFigure();
					pf3._startPoint = <Point>{ $type: Point_$type, x: center, y: close };
					pf3._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: center, y: high };
						return $ret;
					})()));
					pg.figures.add(pf1);
					pg.figures.add(pf2);
					pg.figures.add(pf3);
					break;

					case PriceDisplayType.OHLC:
					let pf4: PathFigure = new PathFigure();
					pf4._startPoint = <Point>{ $type: Point_$type, x: left, y: open };
					pf4._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: center, y: open };
						return $ret;
					})()));
					let pf5: PathFigure = new PathFigure();
					pf5._startPoint = <Point>{ $type: Point_$type, x: center, y: low };
					pf5._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: center, y: high };
						return $ret;
					})()));
					let pf6: PathFigure = new PathFigure();
					pf6._startPoint = <Point>{ $type: Point_$type, x: center, y: close };
					pf6._segments.add(((() => {
						let $ret = new LineSegment(1);
						$ret.point = <Point>{ $type: Point_$type, x: right, y: close };
						return $ret;
					})()));
					pg.figures.add(pf4);
					pg.figures.add(pf5);
					pg.figures.add(pf6);
					break;

				}

			}
			if (negative) {
				this.renderManager.initialRenderFill = negativeBrush;
				this.renderManager.actualRenderFill = negativeBrush;
				this.renderManager.initialRenderOutline = this.renderManager.actualRenderOutline = negativeOutline;
				this.renderManager.actualNegativeShape = true;
			} else {
				this.renderManager.initialRenderFill = actualBrush;
				this.renderManager.actualRenderFill = actualBrush;
				this.renderManager.initialRenderOutline = this.renderManager.actualRenderOutline = actualOutline;
				this.renderManager.actualNegativeShape = false;
			}
			this.performCategoryStyleOverride(buckets, i, valueCount, xAxis, xParams, view.isThumbnailView);
			if (displayType == PriceDisplayType.OHLC) {
				this.renderManager.setCategoryShapeAppearance(p, true, false, false, false);
			} else {
				this.renderManager.setCategoryShapeAppearance(p, false, false, false, false);
			}
			if (isDirty) {
				p.data = pg;
			}
		}
		priceView.shapes.count = count;
		priceView.frameRendered();
	}
	private getItemWidth(view: FinancialSeriesView, effectiveViewport: Rect): number {
		let width: number = this.xAxis.getGroupSize(view.windowRect, view.viewport, effectiveViewport);
		width = Math.max(width, this.resolution * 0.9);
		width = Math.max(width, FinancialPriceSeries.mIN_WIDTH);
		return width;
	}
	private renderCombinedGrouping(frame: CategoryFrame, view: FinancialSeriesView): void {
		let displayType: PriceDisplayType = this.displayType;
		let effectiveViewportRect = this.getEffectiveViewport1(view);
		let width: number = this.getItemWidth(view, effectiveViewportRect);
		let distanceFromCenter: number = (width - 1) / 2;
		let priceView: FinancialPriceSeriesView = typeCast<FinancialPriceSeriesView>((<any>FinancialPriceSeriesView).$type, view);
		let positiveGroup: GeometryGroup = priceView.getPositiveGroup();
		let negativeGroup: GeometryGroup = priceView.getNegativeGroup();
		let buckets = frame.buckets;
		for (let i: number = 0; i < buckets.count; ++i) {
			let left: number = buckets._inner[i][0] - distanceFromCenter;
			let center: number = buckets._inner[i][0];
			let right: number = buckets._inner[i][0] + distanceFromCenter;
			let open: number = buckets._inner[i][1];
			let high: number = buckets._inner[i][2];
			let low: number = buckets._inner[i][3];
			let close: number = buckets._inner[i][4];
			if (isNaN_(open) || isNaN_(high) || isNaN_(low) || isNaN_(close)) {
				continue;
			}
			let negative: boolean = open < close;
			let group: GeometryGroup = negative ? negativeGroup : positiveGroup;
			switch (displayType) {
				case PriceDisplayType.Candlestick:
				if (negative) {
					let tmp: number = open;
					open = close;
					close = tmp;
				}
				group.children.add(((() => {
					let $ret = new LineGeometry();
					$ret.startPoint = <Point>{ $type: Point_$type, x: center, y: low };
					$ret.endPoint = <Point>{ $type: Point_$type, x: center, y: open };
					return $ret;
				})()));
				group.children.add(((() => {
					let $ret = new RectangleGeometry();
					$ret.rect = new Rect(0, left, close, right - left, open - close);
					return $ret;
				})()));
				group.children.add(((() => {
					let $ret = new LineGeometry();
					$ret.startPoint = <Point>{ $type: Point_$type, x: center, y: close };
					$ret.endPoint = <Point>{ $type: Point_$type, x: center, y: high };
					return $ret;
				})()));
				break;

				case PriceDisplayType.OHLC:
				group.children.add(((() => {
					let $ret = new LineGeometry();
					$ret.startPoint = <Point>{ $type: Point_$type, x: left, y: open };
					$ret.endPoint = <Point>{ $type: Point_$type, x: center, y: open };
					return $ret;
				})()));
				group.children.add(((() => {
					let $ret = new LineGeometry();
					$ret.startPoint = <Point>{ $type: Point_$type, x: center, y: low };
					$ret.endPoint = <Point>{ $type: Point_$type, x: center, y: high };
					return $ret;
				})()));
				group.children.add(((() => {
					let $ret = new LineGeometry();
					$ret.startPoint = <Point>{ $type: Point_$type, x: center, y: close };
					$ret.endPoint = <Point>{ $type: Point_$type, x: right, y: close };
					return $ret;
				})()));
				break;

			}

		}
	}
	item(sender: any, point: Point): any {
		if (this.financialPriceView.hasTrendLineManager && sender == this.financialPriceView.trendLineManager.trendPolyline) {
			return null;
		}
		return super.item(sender, point);
	}
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.index < 0) {
			return;
		}
		this.financialPriceView.updateTrendlineBrush();
	}
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		if (this.financialPriceView.hasTrendLineManager) {
			this.seriesVisualDataManager.exportTrendlineData(this, svd, this.financialPriceView.trendLineManager.trendPolyline);
		}
	}
	get negativeOutline(): Brush {
		return <Brush>this.getValue(FinancialPriceSeries.negativeOutlineProperty);
	}
	set negativeOutline(value: Brush) {
		this.setValue(FinancialPriceSeries.negativeOutlineProperty, value);
	}
	static readonly negativeOutlinePropertyName: string = "NegativeOutline";
	static readonly negativeOutlineProperty: DependencyProperty = DependencyProperty.register(FinancialPriceSeries.negativeOutlinePropertyName, (<any>Brush).$type, (<any>FinancialPriceSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialPriceSeries>sender).raisePropertyChanged(FinancialPriceSeries.negativeOutlinePropertyName, e.oldValue, e.newValue)));
	setNegativeColors(negativeBrush: Brush, negativeOutline: Brush): void {
		super.setNegativeColors(negativeBrush, negativeOutline);
		this.negativeOutline = negativeOutline;
	}
}

/**
 * @hidden 
 */
export class FinancialPriceSeriesView extends FinancialSeriesView {
	static $t: Type = markType(FinancialPriceSeriesView, 'FinancialPriceSeriesView', (<any>FinancialSeriesView).$type);
	private _financialPriceModel: FinancialPriceSeries = null;
	protected get financialPriceModel(): FinancialPriceSeries {
		return this._financialPriceModel;
	}
	protected set financialPriceModel(value: FinancialPriceSeries) {
		this._financialPriceModel = value;
	}
	constructor(model: FinancialPriceSeries) {
		super(model);
		this.financialPriceModel = model;
		this.visibleShapes = new List$1<Path>((<any>Path).$type, 0);
		this.shapes = ((() => {
			let $ret = new Pool$1<Path>((<any>Path).$type);
			$ret.create = runOn(this, this.shapeCreate);
			$ret.activate = runOn(this, this.shapeActivate);
			$ret.disactivate = runOn(this, this.shapeDisactivate);
			$ret.destroy = runOn(this, this.shapeDestroy);
			return $ret;
		})());
	}
	private _shapes: Pool$1<Path> = null;
	get shapes(): Pool$1<Path> {
		return this._shapes;
	}
	set shapes(value: Pool$1<Path>) {
		this._shapes = value;
	}
	shapeCreate(): Path {
		let shape: Path = new Path();
		this.visibleShapes.add(shape);
		shape._visibility = Visibility.Collapsed;
		return shape;
	}
	private _visibleShapes: List$1<Path> = null;
	protected get visibleShapes(): List$1<Path> {
		return this._visibleShapes;
	}
	protected set visibleShapes(value: List$1<Path>) {
		this._visibleShapes = value;
	}
	shapeActivate(shape: Path): void {
		shape._visibility = Visibility.Visible;
	}
	shapeDisactivate(shape: Path): void {
		shape._visibility = Visibility.Collapsed;
	}
	shapeDestroy(shape: Path): void {
		this.visibleShapes.remove(shape);
	}
	protected createBucketCalculator(): FinancialBucketCalculator {
		return new FinancialPriceBucketCalculator(this);
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.financialModel.negativeBrush = ((() => {
				let $ret = new Brush();
				$ret.fill = "#C62828";
				return $ret;
			})());
			this.financialPriceModel.negativeOutline = this.financialModel.negativeBrush;
			this.financialModel.resolution = 5;
			this.financialModel.thickness = 1;
		}
	}
	private positivePath: Path = ((() => {
		let $ret = new Path();
		$ret.data = new GeometryGroup();
		return $ret;
	})());
	private negativePath: Path = ((() => {
		let $ret = new Path();
		$ret.data = new GeometryGroup();
		return $ret;
	})());
	private _trendLineManager: ITrendLineManager = null;
	get trendLineManager(): ITrendLineManager {
		if (this._trendLineManager == null) {
			this._trendLineManager = CategoryTrendLineManagerFactory.selectManager(this._trendLineManager, this.model.getCategoryAxisIfPresent(), this.model.rootCanvas, this.model, this.model.res);
		}
		return this._trendLineManager;
	}
	set trendLineManager(value: ITrendLineManager) {
		this._trendLineManager = value;
	}
	get hasTrendLineManager(): boolean {
		return this._trendLineManager != null;
	}
	updatePathBrushes(): void {
		if (this.financialPriceModel.displayType == PriceDisplayType.OHLC) {
			this.positivePath._stroke = this.model.actualBrush;
		} else {
			this.positivePath._stroke = this.model.actualOutline;
		}
		if (this.financialPriceModel.displayType == PriceDisplayType.OHLC) {
			this.negativePath._stroke = this.financialModel.negativeBrush;
		} else {
			this.negativePath._stroke = this.financialPriceModel.negativeOutline;
		}
	}
	clearPriceSymbols(): void {
		this.makeDirty();
		this.shapes.count = 0;
		this.clearGroupedPriceSymbols();
	}
	clearGroupedPriceSymbols(): void {
		let positiveGroup: GeometryGroup = typeCast<GeometryGroup>((<any>GeometryGroup).$type, this.positivePath.data);
		let negativeGroup: GeometryGroup = typeCast<GeometryGroup>((<any>GeometryGroup).$type, this.negativePath.data);
		Extensions.reset(positiveGroup);
		Extensions.reset(negativeGroup);
	}
	getPositiveGroup(): GeometryGroup {
		this.makeDirty();
		return typeCast<GeometryGroup>((<any>GeometryGroup).$type, this.positivePath.data);
	}
	getNegativeGroup(): GeometryGroup {
		this.makeDirty();
		return typeCast<GeometryGroup>((<any>GeometryGroup).$type, this.negativePath.data);
	}
	updateTrendlineBrush(): void {
		this.financialPriceModel.actualTrendLineBrush = null;
		if (this.financialPriceModel.trendLineBrush != null) {
			this.financialPriceModel.actualTrendLineBrush = this.financialPriceModel.trendLineBrush;
		} else {
			this.financialPriceModel.actualTrendLineBrush = this.financialPriceModel.actualBrush;
		}
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.positivePath.strokeThickness = this.model.thickness;
		this.positivePath.strokeDashArray = this.model.dashArray;
		this.positivePath.strokeDashCap = <number>this.model.dashCap;
		if (this.financialPriceModel.displayType == PriceDisplayType.OHLC) {
			this.positivePath._stroke = this.model.actualBrush;
		} else {
			this.positivePath._stroke = this.model.actualOutline;
			this.positivePath._fill = this.model.actualBrush;
		}
		this.negativePath.strokeThickness = this.model.thickness;
		this.negativePath.strokeDashArray = this.model.dashArray;
		this.negativePath.strokeDashCap = <number>this.model.dashCap;
		if (this.financialPriceModel.displayType == PriceDisplayType.OHLC) {
			this.negativePath._stroke = this.financialModel.negativeBrush;
		} else {
			this.negativePath._stroke = this.financialPriceModel.negativeOutline;
			this.negativePath._fill = this.financialModel.negativeBrush;
		}
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.positivePath.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		if (this.financialPriceModel.displayType == PriceDisplayType.OHLC) {
			this.positivePath._stroke = hitBrush;
		} else {
			this.positivePath._stroke = hitBrush;
			this.positivePath._fill = hitBrush;
		}
		this.negativePath.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		if (this.financialPriceModel.displayType == PriceDisplayType.OHLC) {
			this.negativePath._stroke = hitBrush;
		} else {
			this.negativePath._stroke = hitBrush;
			this.negativePath._fill = hitBrush;
		}
	}
	protected getItem(index: number): any {
		return this.visibleShapes._inner[index];
	}
	private _hitItem: Path = new Path();
	protected getHitItem(index: number): any {
		let item = this.visibleShapes._inner[index];
		this._hitItem._visibility = item._visibility;
		this._hitItem.data = item.data;
		let hitBrush = this.getHitBrush1(index);
		this._hitItem._fill = hitBrush;
		this._hitItem._stroke = hitBrush;
		this._hitItem.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		return this._hitItem;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			if (this.separateMode) {
				for (let i = 0; i < this.visibleShapes.count; i++) {
					let shape = <Path>this.getCurrentItem(i, isHitContext);
					if (shape._visibility == Visibility.Visible) {
						context.renderPath(shape);
					}
				}
			} else {
				context.renderPath(this.positivePath);
				context.renderPath(this.negativePath);
			}
		}
	}
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		if (context.shouldRender) {
			if (this.financialPriceModel.trendLineType != TrendLineType.None && !isHitContext) {
				let polyline: Polyline = this.trendLineManager.trendPolyline;
				polyline.strokeThickness = this.financialPriceModel.trendLineThickness;
				polyline._stroke = this.financialPriceModel.actualTrendLineBrush;
				polyline.strokeDashArray = this.financialPriceModel.trendLineDashArray;
				polyline.strokeDashCap = <number>this.financialPriceModel.trendLineDashCap;
				context.renderPolyline(polyline);
			}
		}
		super.renderMarkersOverride(context, isHitContext);
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.positivePath, "positivePathShape", <string[]>[ "Positive", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.negativePath, "negativePathShape", <string[]>[ "Negative" ]);
	}
	frameRendered(): void {
		this.makeDirty();
	}
	private _separateMode: boolean = false;
	get separateMode(): boolean {
		return this._separateMode;
	}
	set separateMode(value: boolean) {
		this._separateMode = value;
	}
	selectTrendlineManager(): void {
		if (this.hasTrendLineManager) {
			this._trendLineManager = CategoryTrendLineManagerFactory.selectManager(this._trendLineManager, this.model.getCategoryAxisIfPresent(), this.model.rootCanvas, this.model, this.model.res);
		}
	}
}


