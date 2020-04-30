/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RadialBucketCalculator } from "./RadialBucketCalculator";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Base, Type, markType, Point, Point_$type, String_$type, enumGetBox, EnumUtil, Number_$type, typeGetValue, typeCast, PointUtil } from "igniteui-core/type";
import { isNaN_, intDivide, isInfinity } from "igniteui-core/number";
import { RadialBase } from "./RadialBase";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Series } from "./Series";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { Brush } from "igniteui-core/Brush";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { RadialFrame } from "./RadialFrame";
import { SeriesView } from "./SeriesView";
import { Axis } from "./Axis";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { SeriesViewer } from "./SeriesViewer";
import { RadialAxes } from "./RadialAxes";
import { AxisRange } from "./AxisRange";
import { NumericAxisBase } from "./NumericAxisBase";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { RadialBaseView } from "./RadialBaseView";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { CategoryAngleAxis } from "./CategoryAngleAxis";
import { CategoryMode } from "./CategoryMode";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { CollisionAvoider } from "./CollisionAvoider";
import { Clipper } from "igniteui-core/Clipper";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { Marker } from "./Marker";
import { List$1 } from "igniteui-core/List$1";
import { MarkerSeries } from "./MarkerSeries";
import { RadialTrendLineManager } from "./RadialTrendLineManager";
import { Pool$1 } from "igniteui-core/Pool$1";
import { ContentControl } from "igniteui-core/ContentControl";
import { DataContext } from "igniteui-core/DataContext";
import { PointCollection } from "igniteui-core/PointCollection";
import { CategoryMarkerManager } from "./CategoryMarkerManager";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { SyncLink } from "./SyncLink";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { CategoryFrame } from "./CategoryFrame";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Polyline } from "igniteui-core/Polyline";
import { Shape } from "igniteui-core/Shape";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class AnchoredRadialBucketCalculator extends RadialBucketCalculator {
	static $t: Type = markType(AnchoredRadialBucketCalculator, 'AnchoredRadialBucketCalculator', (<any>RadialBucketCalculator).$type);
	private _anchoredView: AnchoredRadialSeriesView = null;
	private get anchoredView(): AnchoredRadialSeriesView {
		return this._anchoredView;
	}
	private set anchoredView(value: AnchoredRadialSeriesView) {
		this._anchoredView = value;
	}
	constructor(view: AnchoredRadialSeriesView) {
		super(view);
		this.anchoredView = view;
	}
	getBucket(bucket: number): number[] {
		let valueColumn: IFastItemColumn$1<number> = this.anchoredView.anchoredRadialModel.valueColumn;
		let i0: number = Math.min(bucket * this.bucketSize, valueColumn.count - 1);
		let i1: number = Math.min(i0 + this.bucketSize - 1, valueColumn.count - 1);
		let min: number = NaN;
		let max: number = NaN;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = valueColumn.item(i);
			if (!isNaN_(min)) {
				if (!isNaN_(y)) {
					min = Math.min(min, y);
					max = Math.max(max, y);
				}
			} else {
				min = y;
				max = y;
			}
		}
		if (!isNaN_(min)) {
			return <number[]>[ 0.5 * (i0 + i1), min, max ];
		}
		return <number[]>[ 0.5 * (i0 + i1), NaN, NaN ];
	}
}

/**
 * @hidden 
 */
export abstract class AnchoredRadialSeries extends RadialBase {
	static $t: Type = markType(AnchoredRadialSeries, 'AnchoredRadialSeries', (<any>RadialBase).$type);
	protected createView(): SeriesView {
		return new AnchoredRadialSeriesView(this);
	}
	clearAxes(): void {
		super.clearAxes();
		this.angleAxis = null;
		this.valueAxis = null;
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == AnchoredRadialSeries.valueMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.valueMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.anchoredRadialView = <AnchoredRadialSeriesView>view;
	}
	private _anchoredRadialView: AnchoredRadialSeriesView;
	get anchoredRadialView(): AnchoredRadialSeriesView {
		return this._anchoredRadialView;
	}
	set anchoredRadialView(value: AnchoredRadialSeriesView) {
		this._anchoredRadialView = value;
	}
	constructor() {
		super();
		this.thumbnailFrame = new RadialFrame(3);
		this.lineRasterizer = new CategoryLineRasterizer();
	}
	private _lineRasterizer: CategoryLineRasterizer = null;
	get lineRasterizer(): CategoryLineRasterizer {
		return this._lineRasterizer;
	}
	set lineRasterizer(value: CategoryLineRasterizer) {
		this._lineRasterizer = value;
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.angleAxis, null, this.valueColumn);
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.angleAxis, null, this.valueColumn);
	}
	getDistanceToIndex(world: Point, index: number, axis: Axis, p: ScalerParams, offset: number): number {
		if (this.valueColumn == null) {
			return Number.POSITIVE_INFINITY;
		}
		return this.getDistanceToIndexHelper(world, index, this.angleAxis, p, offset, this.valueColumn.count, null);
	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.angleAxis, this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let angleParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.angleAxis.isInverted, effectiveViewportRect);
		angleParams.effectiveViewportRect = this.seriesViewer.viewportRect;
		return this.getSeriesValueHelper(this.valueColumn, world, this.angleAxis, angleParams, offset, null, useInterpolation, skipUnknowns);
	}
	getSeriesValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		if (this.valueAxis == null || this.angleAxis == null || this.view == null || this.view.windowRect.isEmpty || this.view.viewport.isEmpty) {
			return <Point>{ $type: Point_$type, x: NaN, y: NaN };
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let valueParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.valueAxis.isInverted, effectiveViewportRect);
		valueParams.effectiveViewportRect = this.getEffectiveViewport1(this.view);
		let value = this.getSeriesValue(world, useInterpolation, skipUnknowns);
		value = this.valueAxis.getScaledValue(value, valueParams);
		let angle = this._axes.getAngleTo(world);
		if (!useInterpolation && this.angleAxis != null) {
			let prevItem = this.getPreviousOrExactIndex(world, skipUnknowns);
			let nextItem = this.getNextOrExactIndex(world, skipUnknowns);
			let offset = this.getOffset(this.angleAxis, this.view.windowRect, this.view.viewport, effectiveViewportRect);
			let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.angleAxis.isInverted, effectiveViewportRect);
			xParams.effectiveViewportRect = this.seriesViewer.viewportRect;
			let distToPrev = this.getDistanceToIndex(world, prevItem, this.angleAxis, xParams, offset);
			let distToNext = this.getDistanceToIndex(world, nextItem, this.angleAxis, xParams, offset);
			if (distToNext <= distToPrev) {
				angle = this.angleAxis.getScaledValue(nextItem, xParams) + offset;
			} else {
				angle = this.angleAxis.getScaledValue(prevItem, xParams) + offset;
			}
		}
		let xPos = this._axes.getXValue(angle, value, this.view.windowRect, this.view.viewport);
		let yPos = this._axes.getYValue(angle, value, this.view.windowRect, this.view.viewport);
		return <Point>{ $type: Point_$type, x: xPos, y: yPos };
	}
	get valueMemberPath(): string {
		return <string>this.getValue(AnchoredRadialSeries.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(AnchoredRadialSeries.valueMemberPathProperty, value);
	}
	static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(AnchoredRadialSeries.valueMemberPathPropertyName, String_$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(AnchoredRadialSeries.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	get valueColumn(): IFastItemColumn$1<number> {
		return this._valueColumn;
	}
	set valueColumn(value: IFastItemColumn$1<number>) {
		if (this._valueColumn != value) {
			let oldValueColumn: IFastItemColumn$1<number> = this._valueColumn;
			this._valueColumn = value;
			this.raisePropertyChanged(AnchoredRadialSeries.valueColumnPropertyName, oldValueColumn, this._valueColumn);
		}
	}
	private _valueColumn: IFastItemColumn$1<number> = null;
	static readonly valueColumnPropertyName: string = "ValueColumn";
	get trendLineType(): TrendLineType {
		return EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, this.getValue(AnchoredRadialSeries.trendLineTypeProperty));
	}
	set trendLineType(value: TrendLineType) {
		this.setValue(AnchoredRadialSeries.trendLineTypeProperty, enumGetBox<TrendLineType>(TrendLineType_$type, value));
	}
	static readonly trendLineTypeProperty: DependencyProperty = DependencyProperty.register(Series.trendLineTypePropertyName, TrendLineType_$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, enumGetBox<TrendLineType>(TrendLineType_$type, TrendLineType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLineTypePropertyName, e.oldValue, e.newValue)));
	get trendLineBrush(): Brush {
		return <Brush>this.getValue(AnchoredRadialSeries.trendLineBrushProperty);
	}
	set trendLineBrush(value: Brush) {
		this.setValue(AnchoredRadialSeries.trendLineBrushProperty, value);
	}
	static readonly trendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineBrushPropertyName, (<any>Brush).$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLineBrushPropertyName, e.oldValue, e.newValue)));
	get actualTrendLineBrush(): Brush {
		return <Brush>this.getValue(AnchoredRadialSeries.actualTrendLineBrushProperty);
	}
	set actualTrendLineBrush(value: Brush) {
		this.setValue(AnchoredRadialSeries.actualTrendLineBrushProperty, value);
	}
	static readonly actualTrendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineActualBrushPropertyName, (<any>Brush).$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLineActualBrushPropertyName, e.oldValue, e.newValue)));
	get trendLineThickness(): number {
		return <number>this.getValue(AnchoredRadialSeries.trendLineThicknessProperty);
	}
	set trendLineThickness(value: number) {
		this.setValue(AnchoredRadialSeries.trendLineThicknessProperty, value);
	}
	static readonly trendLineThicknessProperty: DependencyProperty = DependencyProperty.register(Series.trendLineThicknessPropertyName, Number_$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, 1.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLineThicknessPropertyName, e.oldValue, e.newValue)));
	get trendLineDashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(AnchoredRadialSeries.trendLineDashCapProperty));
	}
	set trendLineDashCap(value: PenLineCap) {
		this.setValue(AnchoredRadialSeries.trendLineDashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly trendLineDashCapProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashCapPropertyName, PenLineCap_$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLineDashCapPropertyName, e.oldValue, e.newValue)));
	get trendLineDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(AnchoredRadialSeries.trendLineDashArrayProperty);
	}
	set trendLineDashArray(value: DoubleCollection) {
		this.setValue(AnchoredRadialSeries.trendLineDashArrayProperty, value);
	}
	static readonly trendLineDashArrayProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLineDashArrayPropertyName, e.oldValue, e.newValue)));
	get trendLinePeriod(): number {
		return typeGetValue(this.getValue(AnchoredRadialSeries.trendLinePeriodProperty));
	}
	set trendLinePeriod(value: number) {
		this.setValue(AnchoredRadialSeries.trendLinePeriodProperty, value);
	}
	static readonly trendLinePeriodProperty: DependencyProperty = DependencyProperty.register(Series.trendLinePeriodPropertyName, Number_$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, 7, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLinePeriodPropertyName, e.oldValue, e.newValue)));
	static readonly trendLineZIndexProperty: DependencyProperty = DependencyProperty.register(Series.trendLineZIndexPropertyName, Number_$type, (<any>AnchoredRadialSeries).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredRadialSeries>sender).raisePropertyChanged(Series.trendLineZIndexPropertyName, e.oldValue, e.newValue)));
	get trendLineZIndex(): number {
		return typeGetValue(this.getValue(AnchoredRadialSeries.trendLineZIndexProperty));
	}
	set trendLineZIndex(value: number) {
		this.setValue(AnchoredRadialSeries.trendLineZIndexProperty, value);
	}
	getRange(axis: Axis): AxisRange {
		if (axis != null && axis == this.angleAxis && this.valueColumn != null && this.valueColumn.count > 0) {
			return new AxisRange(0, this.valueColumn.count - 1);
		}
		if (axis != null && axis == this.valueAxis && this.valueColumn != null && this.valueColumn.count > 0) {
			return new AxisRange(this.valueColumn.minimum, this.valueColumn.maximum);
		}
		return null;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.anchoredRadialView.trendLineManager.propertyUpdated(sender, propertyName, oldValue, newValue)) {
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
		}
		let valueAxis: NumericAxisBase = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, this.valueAxis);
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) !== null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.valueColumn);
				this.valueColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) !== null) {
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
				this.anchoredRadialView.bucketCalculator.calculateBuckets(this.resolution);
			}
			if (valueAxis != null && !valueAxis.updateRange()) {
				this.anchoredRadialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case AnchoredRadialSeries.valueMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.valueColumn);
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
			}
			break;

			case AnchoredRadialSeries.valueColumnPropertyName:
			if (valueAxis != null && !valueAxis.updateRange()) {
				this.anchoredRadialView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case Series.trendLineBrushPropertyName:
			this.updateIndexedProperties();
			break;

			case Series.trendLineTypePropertyName:
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		switch (action) {
			case FastItemsSourceEventAction.Reset:

			case FastItemsSourceEventAction.Insert:

			case FastItemsSourceEventAction.Remove:
			this.anchoredRadialView.bucketCalculator.calculateBuckets(this.resolution);
			break;

		}

		this.anchoredRadialView.trendLineManager.dataUpdated(action, position, count, propertyName);
		switch (action) {
			case FastItemsSourceEventAction.Reset:
			if (this.valueAxis != null && !this.valueAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Insert:
			if (this.valueAxis != null && !this.valueAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Remove:
			if (this.valueAxis != null && !this.valueAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Replace:
			if (this.valueMemberPath != null && this.anchoredRadialView.bucketCalculator.bucketSize > 0 && this.valueAxis != null && !this.valueAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Change:
			if (propertyName == this.valueMemberPath) {
				if (this.valueAxis != null && !this.valueAxis.updateRange()) {
					this.renderSeries(true);
				}
			}
			break;

		}

	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		let anchoredView = <AnchoredRadialSeriesView>view;
		if (this.fastItemsSource == null || this.fastItemsSource.count == 0 || this.angleAxis == null || this.valueColumn == null || this.angleAxis.cachedItemsCount == 0 || this.valueAxis == null || isInfinity(this.valueAxis.actualMinimumValue) || isInfinity(this.valueAxis.actualMaximumValue) || anchoredView.bucketCalculator.bucketSize < 1) {
			isValid = false;
		}
		return isValid;
	}
	getOffsetValue(): number {
		return this.getOffset(this.angleAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getCategoryWidth(): number {
		return this.angleAxis.getCategorySize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	protected get_isClosed(): boolean {
		return false;
	}
	protected get isClosed(): boolean {
		return this.get_isClosed();
	}
	protected getOffset(angleAxis: CategoryAngleAxis, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let offset = 0;
		let categoryMode = this.preferredCategoryMode(angleAxis);
		if (categoryMode == CategoryMode.Mode0 && angleAxis.categoryMode != CategoryMode.Mode0) {
			categoryMode = CategoryMode.Mode1;
		}
		switch (categoryMode) {
			case CategoryMode.Mode0:
			offset = 0;
			break;

			case CategoryMode.Mode1:
			offset = 0.5 * angleAxis.getCategorySize(windowRect, viewportRect, effectiveViewportRect);
			break;

			case CategoryMode.Mode2:
			offset = angleAxis.getGroupCenter(this.getMode2Index(), windowRect, viewportRect, effectiveViewportRect);
			break;

		}

		if (angleAxis.isInverted) {
			offset = -offset;
		}
		return offset;
	}
	prepareFrame(frame: RadialFrame, view: RadialBaseView): void {
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let angleAxis: CategoryAngleAxis = this.angleAxis;
		let valueAxis: NumericRadiusAxis = this.valueAxis;
		let minValue: number = valueAxis.actualMinimumValue;
		let maxValue: number = valueAxis.actualMaximumValue;
		frame.buckets.clear();
		frame.markers.clear();
		frame.trend.clear();
		let markers: boolean = this.shouldDisplayMarkers();
		let markerCount: number = 0;
		let anchoredRadialView = <AnchoredRadialSeriesView>view;
		let collisionAvoider: CollisionAvoider = new CollisionAvoider();
		let offset: number = 0;
		let lastBucket: number = view.bucketCalculator.lastBucket;
		offset = this.getOffset(angleAxis, windowRect, viewportRect, effectiveViewportRect);
		anchoredRadialView.trendLineManager.radiusExtentScale = this.valueAxis.actualRadiusExtentScale;
		anchoredRadialView.trendLineManager.innerRadiusExtentScale = this.valueAxis.actualInnerRadiusExtentScale;
		anchoredRadialView.trendLineManager.projectX = (angle: number, radius: number) => this.projectX(angle, radius, windowRect, viewportRect);
		anchoredRadialView.trendLineManager.projectY = (angle: number, radius: number) => this.projectY(angle, radius, windowRect, viewportRect);
		let clipper: Clipper = ((() => {
			let $ret = new Clipper(0, viewportRect, false);
			$ret.target = frame.trend;
			return $ret;
		})());
		let resParams = ((() => {
			let $ret = new TrendResolutionParams();
			$ret.bucketSize = view.bucketCalculator.bucketSize;
			$ret.firstBucket = view.bucketCalculator.firstBucket;
			$ret.lastBucket = lastBucket;
			$ret.offset = offset;
			$ret.resolution = this.resolution;
			$ret.viewport = viewportRect;
			$ret.window = windowRect;
			return $ret;
		})());
		anchoredRadialView.trendLineManager.prepareLine(frame.trend, this.trendLineType, this.valueColumn, this.trendLinePeriod, (a: number) => this.angleAxis.getScaledAngle(a), (r: number) => this.valueAxis.getScaledValue3(r), resParams, clipper);
		let inNans: boolean = true;
		if (this.repeatExists(view)) {
			lastBucket--;
		}
		for (let i: number = view.bucketCalculator.firstBucket; i <= lastBucket; ++i) {
			let index: number = i;
			if (index * view.bucketCalculator.bucketSize >= this.angleAxis.cachedItemsCount) {
				index -= intDivide((this.angleAxis.cachedItemsCount), view.bucketCalculator.bucketSize);
			}
			let bucket: number[] = view.bucketCalculator.getBucket(index);
			if (!isNaN_(bucket[0])) {
				bucket[0] = angleAxis.getScaledAngle(bucket[0]) + offset;
				if (bucket[1] < minValue || bucket[1] > maxValue) {
					continue;
				}
				bucket[1] = valueAxis.getScaledValue3(bucket[1]);
				if (view.bucketCalculator.bucketSize > 1) {
					if (bucket[2] < minValue || bucket[2] > maxValue) {
						continue;
					}
					bucket[2] = valueAxis.getScaledValue3(bucket[2]);
				} else {
					bucket[2] = bucket[1];
				}
				if ((isNaN_(bucket[1]) || isNaN_(bucket[2])) && inNans && this.isClosed && this.centerVisible()) {
					lastBucket++;
				} else {
					inNans = false;
				}
				frame.buckets.add(bucket);
				if (markers) {
					let j: number = Math.min(index * view.bucketCalculator.bucketSize, this.fastItemsSource.count - 1);
					let x: number = this._axes.getXValue(bucket[0], bucket[1], windowRect, viewportRect);
					let y: number = this._axes.getYValue(bucket[0], bucket[1], windowRect, viewportRect);
					let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
					if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
						frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
						let marker: Marker = view.markers.item(markerCount);
						marker.currentIndex = j;
						(<DataContext>marker.content).item = this.fastItemsSource.item(j);
						++markerCount;
					}
				}
			} else {
				if (inNans && this.isClosed && this.centerVisible()) {
					lastBucket++;
				}
			}
		}
		view.markers.count = markerCount;
		return;
	}
	private projectX(angle: number, radius: number, windowRect: Rect, viewportRect: Rect): number {
		return this._axes.getXValue(angle, radius, windowRect, viewportRect);
	}
	private projectY(angle: number, radius: number, windowRect: Rect, viewportRect: Rect): number {
		return this._axes.getYValue(angle, radius, windowRect, viewportRect);
	}
	private repeatExists(view: RadialBaseView): boolean {
		let anchoredView = <AnchoredRadialSeriesView>view;
		return !this.isClosed && anchoredView.bucketCalculator.firstBucket == 0 && anchoredView.bucketCalculator.lastBucket == this.angleAxis.cachedItemsCount;
	}
	getLineClipper(buckets: List$1<number[]>, endIndex: number, view: SeriesView): Clipper {
		let clipper: Clipper = null;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		if (endIndex > -1 && !windowRect.isEmpty && !viewportRect.isEmpty) {
			let left: number = buckets._inner[0][0] < viewportRect.left - 2000 ? viewportRect.left - 10 : NaN;
			let bottom: number = viewportRect.bottom + 10;
			let right: number = buckets._inner[endIndex][0] > viewportRect.right + 2000 ? viewportRect.right + 10 : NaN;
			let top: number = viewportRect.top - 10;
			clipper = new Clipper(1, left, bottom, right, top, false);
		}
		return clipper;
	}
	protected terminationPoint: Point = <Point>{ $type: Point_$type, x: 0, y: 0 };
	terminatePolygon(polygon0: PointCollection, line0: PointCollection, polygon01: PointCollection, line1: PointCollection, finished: boolean): void {
		if (polygon0.count > 0 && line1.count > 0) {
			if (!finished || this.centerNotVisible()) {
				polygon0.add(this.terminationPoint);
				polygon0.add(polygon0._inner[0]);
				line1.add(this.terminationPoint);
				line1.add(line1._inner[0]);
			}
		}
	}
	private centerVisible(): boolean {
		return !this.centerNotVisible();
	}
	private centerNotVisible(): boolean {
		let window = this.view.windowRect;
		return !window.containsPoint(<Point>{ $type: Point_$type, x: 0.5, y: 0.5 });
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let radView = <AnchoredRadialSeriesView>view;
		if (wipeClean) {
			radView.markers.clear();
		}
		radView.trendLineManager.clearPoints();
	}
	renderFrame(frame: RadialFrame, view: RadialBaseView): void {
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let contentViewport: Rect = this.getContentViewport(view);
		let anchoredView = <AnchoredRadialSeriesView>view;
		anchoredView.trendLineManager.rasterizeTrendLine(frame.trend);
		CategoryMarkerManager.rasterizeMarkers(this, frame.markers, anchoredView.markers, this.useLightweightMarkers);
		anchoredView.renderMarkers();
		this.applyClipping(viewportRect, windowRect, effectiveViewportRect, contentViewport, anchoredView);
	}
	private applyClipping(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect, view: AnchoredRadialSeriesView): void {
		view.applyClipping(viewportRect, windowRect, effectiveViewportRect, contentViewport);
	}
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.index < 0) {
			return;
		}
		this.anchoredRadialView.updateTrendlineBrush();
	}
	item(sender: any, point: Point): any {
		if (sender == this.anchoredRadialView.trendLineManager.trendPolyline) {
			return null;
		}
		return super.item(sender, point);
	}
	scrollIntoView(item: any): boolean {
		let windowRect: Rect = this.view.windowRect;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view.viewport;
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		if (this.angleAxis == null || this.valueColumn == null || this.valueAxis == null) {
			return false;
		}
		if (index < 0 || index > this.valueColumn.count - 1) {
			return false;
		}
		let scaledAngle: number = this.angleAxis.getScaledAngle(index);
		let scaledRadius: number = this.valueAxis.getScaledValue3(this.valueColumn.item(index));
		if (isNaN_(scaledRadius)) {
			scaledRadius = (this.valueAxis.actualInnerRadiusExtentScale + this.valueAxis.actualRadiusExtentScale) / 2;
		}
		let cx: number = 0.5 + (Math.cos(scaledAngle) * scaledRadius);
		let cy: number = 0.5 + (Math.sin(scaledAngle) * scaledRadius);
		if (!isNaN_(cx)) {
			if (cx < windowRect.left + 0.1 * windowRect.width) {
				cx = cx + 0.4 * windowRect.width;
				windowRect.x = cx - 0.5 * windowRect.width;
			}
			if (cx > windowRect.right - 0.1 * windowRect.width) {
				cx = cx - 0.4 * windowRect.width;
				windowRect.x = cx - 0.5 * windowRect.width;
			}
		}
		if (!isNaN_(cy)) {
			if (cy < windowRect.top + 0.1 * windowRect.height) {
				cy = cy + 0.4 * windowRect.height;
				windowRect.y = cy - 0.5 * windowRect.height;
			}
			if (cy > windowRect.bottom - 0.1 * windowRect.height) {
				cy = cy - 0.4 * windowRect.height;
				windowRect.y = cy - 0.5 * windowRect.height;
			}
		}
		if (this.syncLink != null) {
			this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	private _thumbnailFrame: RadialFrame = null;
	get thumbnailFrame(): RadialFrame {
		return this._thumbnailFrame;
	}
	set thumbnailFrame(value: RadialFrame) {
		this._thumbnailFrame = value;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
		if (!this.thumbnailDirty) {
			this.view.prepSurface(surface);
			return;
		}
		this.view.prepSurface(surface);
		let thumbnailView: AnchoredRadialSeriesView = typeCast<AnchoredRadialSeriesView>((<any>AnchoredRadialSeriesView).$type, this.thumbnailView);
		thumbnailView.bucketCalculator.calculateBuckets(this.resolution);
		if (this.clearAndAbortIfInvalid1(this.thumbnailView)) {
			return;
		}
		if (!this.skipThumbnailPrepare) {
			this.thumbnailFrame = new RadialFrame(3);
			this.prepareFrame(this.thumbnailFrame, thumbnailView);
		}
		this.skipThumbnailPrepare = false;
		this.renderFrame(this.thumbnailFrame, thumbnailView);
		this.thumbnailDirty = false;
	}
	private _alternateFrame: RadialFrame = null;
	private get alternateFrame(): RadialFrame {
		return this._alternateFrame;
	}
	private set alternateFrame(value: RadialFrame) {
		this._alternateFrame = value;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let radialSeriesView: AnchoredRadialSeriesView = <AnchoredRadialSeriesView>view;
		radialSeriesView.bucketCalculator.calculateBuckets(this.resolution);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(radialSeriesView)) {
			return;
		}
		if (this.alternateFrame == null) {
			this.alternateFrame = new RadialFrame(3);
		}
		this.alternateFrame.clearFrame();
		this.prepareFrame(this.alternateFrame, radialSeriesView);
		this.renderFrame(this.alternateFrame, radialSeriesView);
	}
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		this.seriesVisualDataManager.exportTrendlineData(this, svd, this.anchoredRadialView.trendLineManager.trendPolyline);
	}
}

/**
 * @hidden 
 */
export class AnchoredRadialSeriesView extends RadialBaseView {
	static $t: Type = markType(AnchoredRadialSeriesView, 'AnchoredRadialSeriesView', (<any>RadialBaseView).$type);
	private _anchoredRadialModel: AnchoredRadialSeries = null;
	get anchoredRadialModel(): AnchoredRadialSeries {
		return this._anchoredRadialModel;
	}
	set anchoredRadialModel(value: AnchoredRadialSeries) {
		this._anchoredRadialModel = value;
	}
	constructor(model: AnchoredRadialSeries) {
		super(model);
		this.bucketCalculator = new AnchoredRadialBucketCalculator(this);
		this.anchoredRadialModel = model;
		this.trendLineManager = new RadialTrendLineManager();
	}
	private _trendLineManager: RadialTrendLineManager = null;
	get trendLineManager(): RadialTrendLineManager {
		return this._trendLineManager;
	}
	set trendLineManager(value: RadialTrendLineManager) {
		this._trendLineManager = value;
	}
	applyClipping(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): void {
	}
	updateTrendlineBrush(): void {
		this.anchoredRadialModel.actualTrendLineBrush = null;
		if (this.anchoredRadialModel.trendLineBrush != null) {
			this.anchoredRadialModel.actualTrendLineBrush = this.anchoredRadialModel.trendLineBrush;
		} else {
			this.anchoredRadialModel.actualTrendLineBrush = this.anchoredRadialModel.actualBrush;
		}
	}
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		if (context.shouldRender) {
			if (!isHitContext) {
			}
			if (this.anchoredRadialModel.trendLineType != TrendLineType.None && !isHitContext) {
				let polyline: Polyline = this.trendLineManager.trendPolyline;
				polyline.strokeThickness = this.anchoredRadialModel.trendLineThickness;
				polyline._stroke = this.anchoredRadialModel.actualTrendLineBrush;
				polyline.strokeDashArray = this.anchoredRadialModel.trendLineDashArray;
				polyline.strokeDashCap = <number>this.anchoredRadialModel.trendLineDashCap;
				context.renderPolyline(polyline);
			}
		}
		super.renderMarkersOverride(context, isHitContext);
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'>";
		if (this.anchoredRadialModel.angleAxis.label != null) {
			tooltipTemplate += "<span>${item." + this.anchoredRadialModel.angleAxis.label + "}</span><br/>";
		}
		tooltipTemplate += "<span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.anchoredRadialModel.title + ": </span><span class='ui-priority-primary'>" + "${item." + this.anchoredRadialModel.valueMemberPath + "}</span></div>";
		return tooltipTemplate;
	}
}


