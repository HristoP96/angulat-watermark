/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FinancialSeries } from "./FinancialSeries";
import { ITrendLineSeries, ITrendLineSeries_$type } from "./ITrendLineSeries";
import { IndicatorDisplayType, IndicatorDisplayType_$type } from "./IndicatorDisplayType";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { Brush } from "igniteui-core/Brush";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { List$1 } from "igniteui-core/List$1";
import { AxisRange } from "./AxisRange";
import { SeriesView } from "./SeriesView";
import { CategoryFrame } from "./CategoryFrame";
import { Axis } from "./Axis";
import { Series } from "./Series";
import { Point, IList$1, IList$1_$type, Base, ICollection$1, ICollection$1_$type, Type, Number_$type, typeCast, IEnumerable$1, enumGetBox, EnumUtil, typeGetValue, runOn, markType, ValueType } from "igniteui-core/type";
import { NumericYAxis } from "./NumericYAxis";
import { NumericAxisBase } from "./NumericAxisBase";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { ITrendLineManager } from "./ITrendLineManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { CategoryTrendLineManagerFactory } from "./CategoryTrendLineManagerFactory";
import { FinancialSeriesView } from "./FinancialSeriesView";
import { FinancialBucketCalculator } from "./FinancialBucketCalculator";
import { SeriesViewer } from "./SeriesViewer";
import { SyncLink } from "./SyncLink";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { IPreparesCategoryTrendline } from "./IPreparesCategoryTrendline";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Clipper } from "igniteui-core/Clipper";
import { CategorySeries } from "./CategorySeries";
import { NotImplementedException } from "igniteui-core/NotImplementedException";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { Path } from "igniteui-core/Path";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { isNaN_ } from "igniteui-core/number";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { Pool$1 } from "igniteui-core/Pool$1";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { Extensions } from "igniteui-core/Extensions";
import { IndicatorRenderer } from "./IndicatorRenderer";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Polyline } from "igniteui-core/Polyline";

/**
 * @hidden 
 */
export abstract class FinancialIndicator extends FinancialSeries implements ITrendLineSeries {
	static $t: Type = markType(FinancialIndicator, 'FinancialIndicator', (<any>FinancialSeries).$type, [ITrendLineSeries_$type]);
	protected createView(): SeriesView {
		return new FinancialIndicatorView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.indicatorView = <FinancialIndicatorView>view;
	}
	private _indicatorView: FinancialIndicatorView;
	get indicatorView(): FinancialIndicatorView {
		return this._indicatorView;
	}
	set indicatorView(value: FinancialIndicatorView) {
		this._indicatorView = value;
	}
	constructor() {
		super();
		this.previousFrame = new CategoryFrame(3);
		this.transitionFrame = new CategoryFrame(3);
		this.currentFrame = new CategoryFrame(3);
		this.indicatorColumn = new List$1<number>(Number_$type, 0);
		this.indicatorRange = new AxisRange(-100, 100);
	}
	ensureYRangeThenRender(animate: boolean): void {
		if (this.yAxis != null && !this.yAxis.updateRange()) {
			this.renderSeries(true);
		}
	}
	protected testAreaOver(position: Point, snapPosition: Point, isFinger: boolean): boolean {
		if (isNaN_(snapPosition.x) || isNaN_(snapPosition.y)) {
			return false;
		}
		let valueAxis = this.yAxis;
		let referencePosition = 0;
		if (valueAxis != null) {
			referencePosition = valueAxis.scaleValue(valueAxis.referenceValue);
		}
		if ((position.y >= referencePosition && position.y <= snapPosition.y) || (position.y <= referencePosition && position.y >= snapPosition.y)) {
			return true;
		}
		return false;
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.Computational;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this.xAxis == null || this.yAxis == null) {
			return Rect.empty;
		}
		let pos = this.fromWorldPosition(world);
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		let matching = this.getMatchingBuckets(this.xAxis, this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), world, true);
		if (matching == null) {
			return Rect.empty;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let prevDist = Math.abs(pos.x - prevBucketValue[0]);
		let nextDist = Math.abs(pos.x - nextBucketValue[0]);
		let zero: number = this.yAxis.getScaledValue(this.yAxis.referenceValue, yParams);
		let groupWidth: number = 1;
		if (prevDist < nextDist) {
			let left: number = prevBucketValue[0] - 0.5 * groupWidth;
			let top: number = prevBucketValue[1];
			let bottom: number = zero;
			return new Rect(0, left, Math.min(top, bottom), groupWidth, Math.max(top, bottom) - Math.min(top, bottom));
		} else {
			let left1: number = nextBucketValue[0] - 0.5 * groupWidth;
			let top1: number = nextBucketValue[1];
			let bottom1: number = zero;
			return new Rect(0, left1, Math.min(top1, bottom1), groupWidth, Math.max(top1, bottom1) - Math.min(top1, bottom1));
		}
	}
	testHit(position: Point, isFinger: boolean): boolean {
		let snapPosition = this.getSeriesValuePosition(this.toWorldPosition(position), true, false);
		if (this.displayType == IndicatorDisplayType.Area) {
			if (this.testAreaOver(position, snapPosition, isFinger)) {
				return true;
			}
		}
		if (this.displayType == IndicatorDisplayType.Area || this.displayType == IndicatorDisplayType.Line) {
			if (this.testHighLowStrokeOver(position, isFinger)) {
				return true;
			}
		}
		if (this.displayType == IndicatorDisplayType.Column) {
			if (this.testShapesOver(position, isFinger)) {
				return true;
			}
		}
		return false;
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			(<ISortingAxis><any>this.xAxis).notifyDataChanged();
		}
		if (this.indicatorView.hasTrendLineManager) {
			this.indicatorView.trendLineManager.dataUpdated(action, position, count, propertyName);
		}
		if (propertyName != null && this.mappingToColumnName.containsKey(propertyName)) {
			let $ret = this.mappingToColumnName.tryGetValue(propertyName, propertyName);
			propertyName = $ret.p1;
		}
		if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
			action = FastItemsSourceEventAction.Reset;
			position = 0;
			count = this.fastItemsSource.count;
		}
		switch (action) {
			case FastItemsSourceEventAction.Change:
			if (this.shouldUpdateIndicator(position, count, propertyName)) {
				this.updateIndicator(position, count, propertyName);
				this.ensureYRangeThenRender(true);
			}
			break;

			case FastItemsSourceEventAction.Replace:
			if (this.shouldUpdateIndicator(position, this.fastItemsSource.count - position, propertyName)) {
				this.updateIndicator(position, this.fastItemsSource.count - position, propertyName);
				this.ensureYRangeThenRender(true);
			}
			break;

			case FastItemsSourceEventAction.Insert:
			if (this.shouldUpdateIndicator(position, this.fastItemsSource.count - position, propertyName)) {
				let newVals: number[] = <number[]>new Array(count);
				for (let j = 0; j < count; j++) {
					newVals[j] = 0;
				}
				this.indicatorColumn.insertRange(position, <IEnumerable$1<number>><any>newVals);
				this.updateIndicator(position, this.fastItemsSource.count - position, propertyName);
				this.ensureYRangeThenRender(true);
			}
			break;

			case FastItemsSourceEventAction.Remove:
			if (this.shouldUpdateIndicator(position, this.fastItemsSource.count - position, propertyName)) {
				this.indicatorColumn.removeRange(position, count);
				this.updateIndicator(position, this.fastItemsSource.count - position, propertyName);
				this.ensureYRangeThenRender(true);
			}
			break;

			case FastItemsSourceEventAction.Reset:
			if (this.shouldUpdateIndicator(position, this.fastItemsSource.count - position, propertyName)) {
				this.indicatorColumn = new List$1<number>(Number_$type, 2, this.fastItemsSource.count);
				let newVals1: number[] = <number[]>new Array(count);
				for (let j1 = 0; j1 < count; j1++) {
					newVals1[j1] = 0;
				}
				this.indicatorColumn.insertRange(0, <IEnumerable$1<number>><any>newVals1);
				this.updateIndicator(position, this.fastItemsSource.count - position, propertyName);
				this.ensureYRangeThenRender(true);
			}
			break;

		}

	}
	get displayType(): IndicatorDisplayType {
		return EnumUtil.getEnumValue<IndicatorDisplayType>(IndicatorDisplayType_$type, this.getValue(FinancialIndicator.displayTypeProperty));
	}
	set displayType(value: IndicatorDisplayType) {
		this.setValue(FinancialIndicator.displayTypeProperty, enumGetBox<IndicatorDisplayType>(IndicatorDisplayType_$type, value));
	}
	static readonly displayTypePropertyName: string = "DisplayType";
	static readonly displayTypeProperty: DependencyProperty = DependencyProperty.register(FinancialIndicator.displayTypePropertyName, IndicatorDisplayType_$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, enumGetBox<IndicatorDisplayType>(IndicatorDisplayType_$type, IndicatorDisplayType.Line), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(FinancialIndicator.displayTypePropertyName, e.oldValue, e.newValue)));
	get ignoreFirst(): number {
		return typeGetValue(this.getValue(FinancialIndicator.ignoreFirstProperty));
	}
	set ignoreFirst(value: number) {
		this.setValue(FinancialIndicator.ignoreFirstProperty, value);
	}
	static readonly ignoreFirstPropertyName: string = "IgnoreFirst";
	static readonly ignoreFirstProperty: DependencyProperty = DependencyProperty.register(FinancialIndicator.ignoreFirstPropertyName, Number_$type, (<any>FinancialSeries).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(FinancialIndicator.ignoreFirstPropertyName, e.oldValue, e.newValue)));
	get trendLineType(): TrendLineType {
		return EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, this.getValue(FinancialIndicator.trendLineTypeProperty));
	}
	set trendLineType(value: TrendLineType) {
		this.setValue(FinancialIndicator.trendLineTypeProperty, enumGetBox<TrendLineType>(TrendLineType_$type, value));
	}
	static readonly trendLineTypeProperty: DependencyProperty = DependencyProperty.register(Series.trendLineTypePropertyName, TrendLineType_$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, enumGetBox<TrendLineType>(TrendLineType_$type, TrendLineType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLineTypePropertyName, e.oldValue, e.newValue)));
	get trendLineBrush(): Brush {
		return <Brush>this.getValue(FinancialIndicator.trendLineBrushProperty);
	}
	set trendLineBrush(value: Brush) {
		this.setValue(FinancialIndicator.trendLineBrushProperty, value);
	}
	static readonly trendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineBrushPropertyName, (<any>Brush).$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLineBrushPropertyName, e.oldValue, e.newValue)));
	get actualTrendLineBrush(): Brush {
		return <Brush>this.getValue(FinancialIndicator.actualTrendLineBrushProperty);
	}
	set actualTrendLineBrush(value: Brush) {
		this.setValue(FinancialIndicator.actualTrendLineBrushProperty, value);
	}
	static readonly actualTrendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineActualBrushPropertyName, (<any>Brush).$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLineActualBrushPropertyName, e.oldValue, e.newValue)));
	get trendLineThickness(): number {
		return <number>this.getValue(FinancialIndicator.trendLineThicknessProperty);
	}
	set trendLineThickness(value: number) {
		this.setValue(FinancialIndicator.trendLineThicknessProperty, value);
	}
	static readonly trendLineThicknessProperty: DependencyProperty = DependencyProperty.register(Series.trendLineThicknessPropertyName, Number_$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, 1.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLineThicknessPropertyName, e.oldValue, e.newValue)));
	get trendLineDashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(FinancialIndicator.trendLineDashCapProperty));
	}
	set trendLineDashCap(value: PenLineCap) {
		this.setValue(FinancialIndicator.trendLineDashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly trendLineDashCapProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashCapPropertyName, PenLineCap_$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLineDashCapPropertyName, e.oldValue, e.newValue)));
	get trendLineDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(FinancialIndicator.trendLineDashArrayProperty);
	}
	set trendLineDashArray(value: DoubleCollection) {
		this.setValue(FinancialIndicator.trendLineDashArrayProperty, value);
	}
	static readonly trendLineDashArrayProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>FinancialIndicator).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLineDashArrayPropertyName, e.oldValue, e.newValue)));
	get trendLinePeriod(): number {
		return typeGetValue(this.getValue(FinancialIndicator.trendLinePeriodProperty));
	}
	set trendLinePeriod(value: number) {
		this.setValue(FinancialIndicator.trendLinePeriodProperty, value);
	}
	static readonly trendLinePeriodProperty: DependencyProperty = DependencyProperty.register(Series.trendLinePeriodPropertyName, Number_$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, 7, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLinePeriodPropertyName, e.oldValue, e.newValue)));
	protected trendPeriodOverride(): number {
		return -1;
	}
	static readonly trendLineZIndexProperty: DependencyProperty = DependencyProperty.register(Series.trendLineZIndexPropertyName, Number_$type, (<any>FinancialIndicator).$type, new PropertyMetadata(2, 1001, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<FinancialIndicator>sender).raisePropertyChanged(Series.trendLineZIndexPropertyName, e.oldValue, e.newValue)));
	get trendLineZIndex(): number {
		return typeGetValue(this.getValue(FinancialIndicator.trendLineZIndexProperty));
	}
	set trendLineZIndex(value: number) {
		this.setValue(FinancialIndicator.trendLineZIndexProperty, value);
	}
	private _indicatorColumn: List$1<number> = null;
	get indicatorColumn(): List$1<number> {
		return this._indicatorColumn;
	}
	set indicatorColumn(value: List$1<number>) {
		this._indicatorColumn = value;
	}
	private _indicatorRange: AxisRange = null;
	protected get indicatorRange(): AxisRange {
		return this._indicatorRange;
	}
	protected set indicatorRange(value: AxisRange) {
		this._indicatorRange = value;
	}
	protected abstract indicatorOverride(position: number, count: number): boolean;
	protected abstract basedOn(position: number, count: number): IList$1<string>;
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case FinancialSeries.xAxisPropertyName:
			this.indicatorView.selectTrendlineManager();
			break;

			case Series.trendLineTypePropertyName:
			let newType = EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, newValue);
			if (newType != TrendLineType.None) {
				this.indicatorView.trendLineManager = CategoryTrendLineManagerFactory.selectManager(this.indicatorView.trendLineManager, this.xAxis, this.rootCanvas, this, this.res);
			}
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.indicatorView.hasTrendLineManager && this.indicatorView.trendLineManager.propertyUpdated(sender, propertyName, oldValue, newValue)) {
			this.renderSeries(false);
			let thumbnailView = typeCast<FinancialIndicatorView>((<any>FinancialIndicatorView).$type, this.thumbnailView);
			if (thumbnailView != null && thumbnailView.hasTrendLineManager) {
				thumbnailView.trendLineManager.propertyUpdated(sender, propertyName, oldValue, newValue);
			}
			this.notifyThumbnailAppearanceChanged();
		}
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			if (this.fastItemsSource != null) {
				this.indicatorColumn = new List$1<number>(Number_$type, 2, this.fastItemsSource.count);
				let newVals: number[] = <number[]>new Array(this.fastItemsSource.count);
				for (let j = 0; j < this.fastItemsSource.count; j++) {
					newVals[j] = 0;
				}
				this.indicatorColumn.insertRange(0, <IEnumerable$1<number>><any>newVals);
				this.updateIndicator(0, this.fastItemsSource.count, null);
				if (this.yAxis != null && !this.yAxis.updateRange()) {
					this.financialView.bucketCalculator.calculateBuckets(this.resolution);
					this.renderSeries(false);
				}
			}
			break;

			case Series.trendLineBrushPropertyName:
			this.updateIndexedProperties();
			break;

			case FinancialIndicator.displayTypePropertyName:
			this.clearRendering(true, this.view);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case FinancialSeries.openColumnPropertyName:

			case FinancialSeries.highColumnPropertyName:

			case FinancialSeries.lowColumnPropertyName:

			case FinancialSeries.closeColumnPropertyName:

			case FinancialSeries.volumeColumnPropertyName:
			if (this.fastItemsSource != null) {
				if (this.indicatorColumn.count != this.fastItemsSource.count) {
					this.indicatorColumn = new List$1<number>(Number_$type, 2, this.fastItemsSource.count);
					let newVals1: number[] = <number[]>new Array(this.fastItemsSource.count);
					for (let j1 = 0; j1 < this.fastItemsSource.count; j1++) {
						newVals1[j1] = 0;
					}
					this.indicatorColumn.insertRange(0, <IEnumerable$1<number>><any>newVals1);
				}
				if (this.shouldUpdateIndicator(0, this.fastItemsSource.count - 1, propertyName)) {
					this.fullIndicatorRefresh();
				}
			}
			break;

			case FinancialSeries.xAxisPropertyName:
			if (this.xAxis != null && (typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null || typeCast<ISortingAxis>(ISortingAxis_$type, oldValue) !== null)) {
				this.fullIndicatorRefresh();
			}
			break;

			case FinancialSeries.yAxisPropertyName:

			case FinancialIndicator.ignoreFirstPropertyName:
			this.fullIndicatorRefresh();
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.trendLineTypePropertyName:
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.indicatorColumn == null) {
			return super.getSeriesValue(world, useInterpolation, skipUnknowns);
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let offset = this.getOffset(this.view.windowRect, this.view.viewport, effectiveViewportRect);
		let xParams: ScalerParams = new ScalerParams(0, this.view.windowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		xParams.effectiveViewportRect = this.seriesViewer.viewportRect;
		return this.getSeriesValueHelper(this.indicatorColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		if (this.indicatorColumn == null) {
			return super.getPreviousOrExactIndex(world, skipUnknowns);
		}
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.indicatorColumn);
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		if (this.indicatorColumn == null) {
			return super.getNextOrExactIndex(world, skipUnknowns);
		}
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.indicatorColumn);
	}
	protected get_usesPresortedValueColumn(): boolean {
		return true;
	}
	private shouldUpdateIndicator(position: number, count: number, updatedPropertyName: string): boolean {
		if (updatedPropertyName == null) {
			return true;
		}
		if (this.basedOn(position, count).contains(updatedPropertyName)) {
			return true;
		}
		return false;
	}
	private updateIndicator(position: number, count: number, updatedPropertyName: string): void {
		this.indicatorOverride(position, count);
	}
	getRange(axis: Axis): AxisRange {
		if (this.fastItemsSource == null) {
			return null;
		}
		if (axis != null && axis == this.yAxis) {
			return this.indicatorRange;
		}
		return null;
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
			if (this.yAxis != null && this.indicatorColumn != null && index < this.indicatorColumn.count) {
				let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, effectiveViewportRect);
				yParams.referenceValue = this.getReferenceValue();
				let cy: number = this.yAxis.getScaledValue(this.indicatorColumn._inner[index], yParams);
				if (cy < windowRect.top + 0.1 * windowRect.height) {
					cy = cy + 0.4 * windowRect.height;
				}
				if (cy > windowRect.bottom - 0.1 * windowRect.height) {
					cy = cy - 0.4 * windowRect.height;
				}
				windowRect.y = cy - 0.5 * windowRect.height;
			}
			this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		if (this.indicatorColumn == null || this.indicatorColumn.count == 0) {
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
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yaxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		frame.buckets.clear();
		frame.markers.clear();
		frame.trend.clear();
		let offset: number = 0;
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis);
		if (sortingXAxis != null && sortingXAxis.sortedIndices.count != this.fastItemsSource.count) {
			return;
		}
		offset = this.getOffset(windowRect, viewportRect, effectiveViewportRect);
		let _trendPeriod: number = this.trendPeriodOverride();
		if (_trendPeriod == -1) {
			_trendPeriod = this.trendLinePeriod;
		}
		let indicatorView: FinancialIndicatorView = typeCast<FinancialIndicatorView>((<any>FinancialIndicatorView).$type, view);
		if (indicatorView.hasTrendLineManager) {
			(<IPreparesCategoryTrendline><any><any>indicatorView.trendLineManager).prepareLineCore(frame.trend, this.trendLineType, this.indicatorColumn, _trendPeriod, (x: number) => this.xAxis.getScaledValue(x, xParams), (y: number) => this.yAxis.getScaledValue(y, yParams), ((() => {
				let $ret = new TrendResolutionParams();
				$ret.bucketSize = view.bucketCalculator.bucketSize;
				$ret.firstBucket = view.bucketCalculator.firstBucket;
				$ret.lastBucket = view.bucketCalculator.lastBucket;
				$ret.offset = offset;
				$ret.resolution = this.resolution;
				$ret.viewport = viewportRect;
				$ret.window = windowRect;
				return $ret;
			})()));
		}
		let singlePixelSpan: number = this.xAxis.getUnscaledValue(2, xParams) - this.xAxis.getUnscaledValue(1, xParams);
		for (let i: number = view.bucketCalculator.firstBucket; i <= view.bucketCalculator.lastBucket; ++i) {
			let bucket: number[];
			if (sortingXAxis == null) {
				bucket = view.bucketCalculator.getBucket(i);
			} else {
				let index: number = sortingXAxis.sortedIndices._inner[i];
				let bucketX: number = sortingXAxis.getUnscaledValueAt(index);
				let bucketY0: number = this.indicatorColumn._inner[i];
				let bucketY1: number = bucketY0;
				let currentX: number = bucketX;
				while (i < view.bucketCalculator.lastBucket) {
					index = sortingXAxis.sortedIndices._inner[i + 1];
					currentX = sortingXAxis.getUnscaledValueAt(index);
					if (currentX - bucketX > singlePixelSpan) {
						break;
					}
					i++;
					let y: number = this.indicatorColumn._inner[i];
					bucketY0 = Math.min(bucketY0, y);
					bucketY1 = Math.max(bucketY1, y);
				}
				let xVal: number = NaN;
				if (!isNaN_(bucketX)) {
					xVal = this.xAxis.getScaledValue(bucketX, xParams);
				}
				bucket = <number[]>[ xVal, bucketY0, bucketY1 ];
			}
			if (!isNaN_(bucket[0])) {
				if (this.xAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null) {
					bucket[0] = bucket[0] + offset;
				} else {
					bucket[0] = xaxis.getScaledValue(bucket[0], xParams) + offset;
				}
				bucket[1] = yaxis.getScaledValue(bucket[1], yParams);
				if (view.bucketCalculator.bucketSize > 1 || sortingXAxis != null) {
					bucket[2] = yaxis.getScaledValue(bucket[2], yParams);
				} else {
					bucket[2] = bucket[1];
				}
				frame.buckets.add(bucket);
			}
		}
		return;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let indicatorView = <FinancialIndicatorView>view;
		indicatorView.clearIndicatorVisual(wipeClean);
		if (indicatorView.hasTrendLineManager) {
			indicatorView.trendLineManager.clearPoints();
		}
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		switch (this.displayType) {
			case IndicatorDisplayType.Area: return CategoryTransitionInMode.FromZero;
			case IndicatorDisplayType.Column: return CategoryTransitionInMode.FromZero;
			case IndicatorDisplayType.Line: return CategoryTransitionInMode.SweepFromCategoryAxisMinimum;
		}

		return CategoryTransitionInMode.FromZero;
	}
	renderFrame(frame: CategoryFrame, view: FinancialSeriesView): void {
		super.renderFrame(frame, view);
		let indicatorView: FinancialIndicatorView = typeCast<FinancialIndicatorView>((<any>FinancialIndicatorView).$type, view);
		let x0: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][0];
		let y0: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][1];
		if (indicatorView.hasTrendLineManager) {
			indicatorView.trendLineManager.clearPoints();
			indicatorView.trendLineManager.rasterizeTrendLine(frame.trend);
		}
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let zero: number = 0;
		let positiveBrush = this.actualBrush;
		let negativeBrush = this.negativeBrush;
		if (view.checkFrameDirty(frame)) {
			indicatorView.clearIndicatorVisual(false);
			if (frame.buckets.count > 0) {
				switch (this.displayType) {
					case IndicatorDisplayType.Line:
					let lineClipper: Clipper = CategorySeries.getClipper(frame.buckets, frame.buckets.count - 1, viewportRect, view.windowRect, false);
					indicatorView.rasterizeLine(frame.buckets.count, x0, y0, true, lineClipper);
					break;

					case IndicatorDisplayType.Area:
					if (this.yAxis != null) {
						zero = this.getWorldZeroValue(view);
					} else {
						zero = 0.5 * (viewportRect.top + viewportRect.bottom);
					}
					let areaClipper: Clipper = CategorySeries.getClipper(frame.buckets, frame.buckets.count - 1, viewportRect, view.windowRect, false);
					indicatorView.rasterizeArea(frame.buckets.count, x0, y0, true, zero, areaClipper);
					break;

					case IndicatorDisplayType.Column:
					zero = this.getWorldZeroValue(view);
					indicatorView.rasterizeColumns(frame.buckets.count, x0, y0, true, zero);
					break;

					default: throw new NotImplementedException(0);
				}

			}
			view.updateFrameVersion(frame);
		}
		let buckets = frame.buckets;
		let valueCount = this.fastItemsSource.count;
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.xAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		this.renderManager.initialRenderFill = positiveBrush;
		this.renderManager.actualRenderFill = positiveBrush;
		if (areStylesOverriden) {
			let xParams = new ScalerParams(0, view.windowRect, view.viewport, this.xAxis.isInverted, effectiveViewportRect);
			this.renderManager.actualNegativeShape = false;
			this.performCategoryStyleOverride(buckets, -1, valueCount, this.xAxis, xParams, view.isThumbnailView);
		}
		this.renderManager.setCategoryShapeAppearance(indicatorView.positivePath0, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(indicatorView.positivePath1, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(indicatorView.positivePath01, false, true, false, false);
		indicatorView.positivePath01._opacity = 0.8 * this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
		this.renderManager.setCategoryShapeAppearance(indicatorView.positiveColumns, true, false, false, false);
		this.renderManager.initialRenderFill = negativeBrush;
		this.renderManager.actualRenderFill = negativeBrush;
		if (areStylesOverriden) {
			let xParams1 = new ScalerParams(0, view.windowRect, view.viewport, this.xAxis.isInverted, effectiveViewportRect);
			this.renderManager.actualNegativeShape = true;
			this.performCategoryStyleOverride(buckets, -1, valueCount, this.xAxis, xParams1, view.isThumbnailView);
		}
		this.renderManager.setCategoryShapeAppearance(indicatorView.negativePath0, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(indicatorView.negativePath1, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(indicatorView.negativePath01, false, true, false, false);
		indicatorView.negativePath01._opacity = 0.8 * this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
		this.renderManager.setCategoryShapeAppearance(indicatorView.negativeColumns, true, false, false, false);
		indicatorView.updateHitTests();
	}
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.index < 0) {
			return;
		}
		if (this.indicatorView.hasTrendLineManager) {
			this.indicatorView.updateTrendlineBrush();
		}
	}
	protected fullIndicatorRefresh(): void {
		if (this.indicatorView.hasTrendLineManager) {
			this.indicatorView.trendLineManager.reset();
		}
		this.indicatorOverride(0, this.indicatorColumn.count);
		if (this.yAxis != null && !this.yAxis.updateRange()) {
			this.renderSeries(false);
		}
	}
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		this.seriesVisualDataManager.exportTrendlineData(this, svd, this.indicatorView.trendLineManager.trendPolyline);
	}
}

/**
 * @hidden 
 */
export class FinancialIndicatorBucketCalculator extends FinancialBucketCalculator {
	static $t: Type = markType(FinancialIndicatorBucketCalculator, 'FinancialIndicatorBucketCalculator', (<any>FinancialBucketCalculator).$type);
	constructor(view: FinancialSeriesView) {
		super(view);
		this.indicatorView = <FinancialIndicatorView>view;
	}
	private _indicatorView: FinancialIndicatorView = null;
	protected get indicatorView(): FinancialIndicatorView {
		return this._indicatorView;
	}
	protected set indicatorView(value: FinancialIndicatorView) {
		this._indicatorView = value;
	}
	getBucket(index: number): number[] {
		let i0: number = index * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, this.indicatorView.indicatorModel.indicatorColumn.count - 1);
		let min: number = NaN;
		let max: number = NaN;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = this.indicatorView.indicatorModel.indicatorColumn._inner[i];
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
		return <number[]>[ NaN, NaN, NaN ];
	}
}

/**
 * @hidden 
 */
export class FinancialIndicatorView extends FinancialSeriesView {
	static $t: Type = markType(FinancialIndicatorView, 'FinancialIndicatorView', (<any>FinancialSeriesView).$type);
	private _indicatorModel: FinancialIndicator = null;
	get indicatorModel(): FinancialIndicator {
		return this._indicatorModel;
	}
	set indicatorModel(value: FinancialIndicator) {
		this._indicatorModel = value;
	}
	constructor(model: FinancialIndicator) {
		super(model);
		this.indicatorModel = model;
		this.columns = ((() => {
			let $ret = new Pool$1<LineGeometry>((<any>LineGeometry).$type);
			$ret.create = runOn(this, this.createColumn);
			$ret.destroy = runOn(this, this.destroyColumn);
			return $ret;
		})());
	}
	protected createBucketCalculator(): FinancialBucketCalculator {
		return new FinancialIndicatorBucketCalculator(this);
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.financialModel.negativeBrush = ((() => {
				let $ret = new Brush();
				$ret.fill = "#C62828";
				return $ret;
			})());
			this.financialModel.thickness = 2;
		}
	}
	private readonly columns: Pool$1<LineGeometry> = null;
	private createColumn(): LineGeometry {
		return new LineGeometry();
	}
	private destroyColumn(column: LineGeometry): void {
	}
	positivePath0: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	negativePath0: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	positivePath01: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	negativePath01: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	positivePath1: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	negativePath1: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	positiveColumns: Path = ((() => {
		let $ret = new Path();
		$ret.data = new GeometryGroup();
		return $ret;
	})());
	negativeColumns: Path = ((() => {
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
	clearIndicatorVisual(wipeClean: boolean): void {
		Extensions.reset1((<PathGeometry>this.positivePath0.data));
		Extensions.reset1((<PathGeometry>this.positivePath01.data));
		Extensions.reset1((<PathGeometry>this.positivePath1.data));
		Extensions.reset1((<PathGeometry>this.negativePath0.data));
		Extensions.reset1((<PathGeometry>this.negativePath01.data));
		Extensions.reset1((<PathGeometry>this.negativePath1.data));
		Extensions.reset((<GeometryGroup>this.positiveColumns.data));
		Extensions.reset((<GeometryGroup>this.negativeColumns.data));
		if (wipeClean) {
			this.columns.count = 0;
		}
		this.makeDirty();
	}
	updateHitTests(): void {
	}
	rasterizeLine(count: number, x0: (arg1: number) => number, y0: (arg1: number) => number, colorByGradient: boolean, clipper: Clipper): void {
		IndicatorRenderer.rasterizeLine(count, x0, y0, colorByGradient, this.windowRect, this.viewport, this.positivePath0, this.negativePath0, this.bucketCalculator.bucketSize, this.model.resolution, clipper);
		this.makeDirty();
	}
	rasterizeArea(count: number, x0: (arg1: number) => number, y0: (arg1: number) => number, colorByGradient: boolean, worldZero: number, clipper: Clipper): void {
		IndicatorRenderer.rasterizeArea(count, x0, y0, colorByGradient, this.windowRect, this.viewport, this.positivePath0, this.positivePath01, this.negativePath0, this.negativePath01, worldZero, this.bucketCalculator.bucketSize, this.model.resolution, clipper);
		this.makeDirty();
	}
	rasterizeColumns(count: number, x0: (arg1: number) => number, y0: (arg1: number) => number, colorByGradient: boolean, worldZero: number): void {
		IndicatorRenderer.rasterizeColumns(count, x0, y0, colorByGradient, this.viewport, worldZero, this.columns, this.positiveColumns, this.negativeColumns);
		this.makeDirty();
	}
	updateTrendlineBrush(): void {
		this.indicatorModel.actualTrendLineBrush = null;
		if (this.indicatorModel.trendLineBrush != null) {
			this.indicatorModel.actualTrendLineBrush = this.indicatorModel.trendLineBrush;
		} else {
			this.indicatorModel.actualTrendLineBrush = this.indicatorModel.actualBrush;
		}
	}
	private _hitPositivePath0: Path = new Path();
	private _hitPositivePath1: Path = new Path();
	private _hitPositivePath01: Path = new Path();
	private _hitPositiveColumns: Path = new Path();
	private _hitNegativePath0: Path = new Path();
	private _hitNegativePath1: Path = new Path();
	private _hitNegativePath01: Path = new Path();
	private _hitNegativeColumns: Path = new Path();
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this._hitPositivePath0.data = this.positivePath0.data;
		this._hitPositivePath1.data = this.positivePath1.data;
		this._hitPositivePath01.data = this.positivePath01.data;
		this._hitPositiveColumns.data = this.positiveColumns.data;
		this._hitNegativePath0.data = this.negativePath0.data;
		this._hitNegativePath1.data = this.negativePath1.data;
		this._hitNegativePath01.data = this.negativePath01.data;
		this._hitNegativeColumns.data = this.negativeColumns.data;
		this._hitPositivePath0._stroke = hitBrush;
		this._hitPositivePath1._stroke = hitBrush;
		this._hitPositivePath0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPositivePath1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPositivePath01._fill = hitBrush;
		this._hitPositivePath01._opacity = 1;
		this._hitPositiveColumns._stroke = hitBrush;
		this._hitPositiveColumns.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitNegativePath0._stroke = hitBrush;
		this._hitNegativePath1._stroke = hitBrush;
		this._hitNegativePath0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitNegativePath1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitNegativePath01._fill = hitBrush;
		this._hitNegativePath01._opacity = 1;
		this._hitNegativeColumns._stroke = hitBrush;
		this._hitNegativeColumns.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			if (isHitContext) {
				if (this.indicatorModel.displayType == IndicatorDisplayType.Column) {
					context.renderPath(this._hitPositiveColumns);
					context.renderPath(this._hitNegativeColumns);
				} else {
					context.renderPath(this._hitPositivePath01);
					context.renderPath(this._hitPositivePath0);
					context.renderPath(this._hitPositivePath1);
					context.renderPath(this._hitNegativePath01);
					context.renderPath(this._hitNegativePath0);
					context.renderPath(this._hitNegativePath1);
				}
			} else {
				if (this.indicatorModel.displayType == IndicatorDisplayType.Column) {
					context.renderPath(this.positiveColumns);
					context.renderPath(this.negativeColumns);
				} else {
					context.renderPath(this.positivePath01);
					context.renderPath(this.positivePath0);
					context.renderPath(this.positivePath1);
					context.renderPath(this.negativePath01);
					context.renderPath(this.negativePath0);
					context.renderPath(this.negativePath1);
				}
			}
		}
	}
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		if (context.shouldRender) {
			if (this.indicatorModel.trendLineType != TrendLineType.None && !isHitContext) {
				let polyline: Polyline = this.trendLineManager.trendPolyline;
				polyline.strokeThickness = this.indicatorModel.trendLineThickness;
				polyline._stroke = this.indicatorModel.actualTrendLineBrush;
				polyline.strokeDashCap = <number>this.indicatorModel.trendLineDashCap;
				polyline.strokeDashArray = this.indicatorModel.trendLineDashArray;
				context.renderPolyline(polyline);
			}
		}
		super.renderMarkersOverride(context, isHitContext);
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.positiveColumns, "positiveColumnsShape", <string[]>[ "Positive", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.negativeColumns, "negativeColumnsShape", <string[]>[ "Negative" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.positivePath0, "positive0", <string[]>[ "Positive", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.positivePath1, "positive1", <string[]>[ "Positive" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.positivePath01, "positive01", <string[]>[ "PositiveFill" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.negativePath0, "negative0", <string[]>[ "Negative", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.negativePath1, "negative1", <string[]>[ "Negative" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.negativePath01, "negative01", <string[]>[ "NegativeFill" ]);
	}
	selectTrendlineManager(): void {
		if (this.hasTrendLineManager) {
			this._trendLineManager = CategoryTrendLineManagerFactory.selectManager(this._trendLineManager, this.model.getCategoryAxisIfPresent(), this.model.rootCanvas, this.model, this.model.res);
		}
	}
}


