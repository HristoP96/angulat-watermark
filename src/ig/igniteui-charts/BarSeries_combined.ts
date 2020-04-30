/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { VerticalAnchoredCategorySeries } from "./VerticalAnchoredCategorySeries";
import { IIsCategoryBased, IIsCategoryBased_$type } from "./IIsCategoryBased";
import { IBarSeries, IBarSeries_$type } from "./IBarSeries";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryMode } from "./CategoryMode";
import { CategorySeries } from "./CategorySeries";
import { ICategoryScaler } from "./ICategoryScaler";
import { IScaler } from "./IScaler";
import { SeriesView } from "./SeriesView";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { Series } from "./Series";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Rect } from "igniteui-core/Rect";
import { Point, Type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, ICollection$1, ICollection$1_$type, Base, IList$1, IList$1_$type, typeCast, Number_$type, fromEnum, runOn, markType } from "igniteui-core/type";
import { ScalerParams } from "./ScalerParams";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { Axis } from "./Axis";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { MarkerSeries } from "./MarkerSeries";
import { Control } from "igniteui-core/Control";
import { CategorySeriesView } from "./CategorySeriesView";
import { BarFramePreparer } from "./BarFramePreparer";
import { CategoryFramePreparer } from "./CategoryFramePreparer";
import { SeriesViewer } from "./SeriesViewer";
import { SeriesViewerView } from "./SeriesViewerView";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { Debug } from "igniteui-core/Debug";
import { NumericAxisBase } from "./NumericAxisBase";
import { AxisRange } from "./AxisRange";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { SyncLink } from "./SyncLink";
import { CategoryYAxis } from "./CategoryYAxis";
import { NumericXAxis } from "./NumericXAxis";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { ITrendLineManager } from "./ITrendLineManager";
import { CategoryTrendLineManagerFactory } from "./CategoryTrendLineManagerFactory";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_, isInfinity } from "igniteui-core/number";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";
import { BarTrendLineManager } from "./BarTrendLineManager";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class BarSeries extends VerticalAnchoredCategorySeries implements IIsCategoryBased, IBarSeries {
	static $t: Type = markType(BarSeries, 'BarSeries', (<any>VerticalAnchoredCategorySeries).$type, [IIsCategoryBased_$type, IBarSeries_$type]);
	protected createView(): SeriesView {
		return new BarSeriesView(this);
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.FromZero;
	}
	getHostReferenceValue(): number {
		return this.getReferenceValue();
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.barView = <BarSeriesView>view;
	}
	private _barView: BarSeriesView;
	get barView(): BarSeriesView {
		return this._barView;
	}
	set barView(value: BarSeriesView) {
		this._barView = value;
	}
	protected get_hasIndividualElements(): boolean {
		return true;
	}
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this.xAxis == null || this.yAxis == null || this.currentFrame.buckets.count == 0) {
			return Rect.empty;
		}
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
		let pos = this.fromWorldPosition(world);
		let previousIndex = this.getPreviousOrExactIndex(world, true);
		let nextIndex = this.getNextOrExactIndex(world, true);
		let prevBucket = <number>truncate(Math.floor(previousIndex / <number>this.getBucketSize(this.view)));
		let nextBucket = <number>truncate(Math.floor(nextIndex / <number>this.getBucketSize(this.view)));
		let prevBucketIndex = prevBucket - this.getFirstBucket(this.view);
		let nextBucketIndex = nextBucket - this.getFirstBucket(this.view);
		if (prevBucketIndex < 0) {
			prevBucketIndex = 0;
		}
		if (prevBucketIndex > this.currentFrame.buckets.count - 1) {
			prevBucketIndex = this.currentFrame.buckets.count - 1;
		}
		if (nextBucketIndex < 0) {
			nextBucketIndex = 0;
		}
		if (nextBucketIndex > this.currentFrame.buckets.count - 1) {
			nextBucketIndex = this.currentFrame.buckets.count - 1;
		}
		let prevBucketValue = this.currentFrame.buckets._inner[prevBucketIndex];
		let nextBucketValue = this.currentFrame.buckets._inner[nextBucketIndex];
		let prevDist = Math.abs(pos.y - prevBucketValue[0]);
		let nextDist = Math.abs(pos.y - nextBucketValue[0]);
		let zero: number = this.getWorldZeroValue(this.categoryView);
		let groupWidth: number = this.yAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		if (prevDist < nextDist) {
			let top: number = prevBucketValue[0] - 0.5 * groupWidth;
			let right: number = prevBucketValue[1];
			let left: number = zero;
			return new Rect(0, Math.min(left, right), top, Math.max(left, right) - Math.min(left, right), groupWidth);
		} else {
			let top1: number = nextBucketValue[0] - 0.5 * groupWidth;
			let right1: number = nextBucketValue[1];
			let left1: number = zero;
			return new Rect(0, Math.min(left1, right1), top1, Math.max(left1, right1) - Math.min(left1, right1), groupWidth);
		}
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testShapesOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>BarSeries).$type;
		this.framePreparer = new BarFramePreparer(1, this, this.barView, this, this, this.barView.bucketCalculator);
	}
	getFramePreparer(view: CategorySeriesView): CategoryFramePreparer {
		let categoryView: CategorySeriesView = typeCast<CategorySeriesView>((<any>CategorySeriesView).$type, view);
		if (categoryView != null && categoryView.isThumbnailView) {
			if (categoryView.isAlternateView) {
				return new BarFramePreparer(1, this, typeCast<ISupportsMarkers>(ISupportsMarkers_$type, categoryView), categoryView, this, categoryView.bucketCalculator);
			} else {
				return new BarFramePreparer(1, this, typeCast<ISupportsMarkers>(ISupportsMarkers_$type, categoryView), this.seriesViewer.view.overviewPlusDetailViewportHost, this, categoryView.bucketCalculator);
			}
		} else {
			return this.framePreparer;
		}
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
	}
	get radiusX(): number {
		return <number>this.getValue(BarSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(BarSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(BarSeries.radiusXPropertyName, Number_$type, (<any>BarSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BarSeries>sender).raisePropertyChanged(BarSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(BarSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(BarSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(BarSeries.radiusYPropertyName, Number_$type, (<any>BarSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<BarSeries>sender).raisePropertyChanged(BarSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode2;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let barView: BarSeriesView = typeCast<BarSeriesView>((<any>BarSeriesView).$type, view);
		if (wipeClean && barView != null && barView.columns != null) {
			barView.columns.count = 0;
		}
	}
	getMode2Index(): number {
		let result: number = 0;
		for (let currentSeries of fromEnum<Series>(this.seriesViewer.series)) {
			if (currentSeries == this) {
				return result;
			}
			let currentCategorySeries: IBarSeries = typeCast<IBarSeries>(IBarSeries_$type, currentSeries);
			if (currentCategorySeries != null && currentCategorySeries.yAxis == this.yAxis && currentCategorySeries.getPreferredCategoryMode() == CategoryMode.Mode2) {
				result++;
			}
		}
		Debug.assert1(false, "CategorySeries.GetMode2Index failed to find series");
		return -1;
	}
	getWorldZeroValue(view: CategorySeriesView): number {
		let value: number = 0;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.xAxis != null) {
			let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
			value = this.xAxis.getScaledValue(this.xAxis.referenceValue, xParams);
		}
		return value;
	}
	getRange(axis: Axis): AxisRange {
		if (this.valueColumn == null || this.valueColumn.count == 0) {
			return null;
		}
		if (axis == this.yAxis) {
			return new AxisRange(0, this.valueColumn.count - 1);
		}
		if (axis == this.xAxis) {
			return new AxisRange(this.valueColumn.minimum, this.valueColumn.maximum);
		}
		return null;
	}
	scrollIntoView(item: any): boolean {
		let windowRect: Rect = this.view.windowRect;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view.viewport;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.xAxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, effectiveViewportRect);
		let cy: number = this.yAxis != null ? this.yAxis.getScaledValue(index, yParams) : NaN;
		let offset: number = this.yAxis != null ? this.framePreparer.getOffset(this.yAxis, unitRect, unitRect, effectiveViewportRect) : 0;
		cy += offset;
		let cx: number = this.xAxis != null && this.valueColumn != null && index < this.valueColumn.count ? this.xAxis.getScaledValue(this.valueColumn.item(index), xParams) : NaN;
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
	getItemSpan(): number {
		return this.yAxis.getGroupSize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let buckets: List$1<number[]> = frame.buckets;
		if (!view.hasSurface()) {
			return;
		}
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
		let yAxis = this.yAxis;
		let yParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
		let xscale: NumericXAxis = this.xAxis;
		let zero: number = xscale.getScaledValue(xscale.referenceValue, xParams);
		let groupWidth: number = this.yAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		let barView: BarSeriesView = typeCast<BarSeriesView>((<any>BarSeriesView).$type, view);
		if (isNaN_(groupWidth) || isInfinity(groupWidth) || isNaN_(zero)) {
			barView.columns.count = 0;
			return;
		}
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.yAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		this.renderManager.initialRenderRadiusX = this.radiusX;
		this.renderManager.initialRenderRadiusY = this.radiusY;
		this.renderManager.actualRenderRadiusX = this.radiusX;
		this.renderManager.actualRenderRadiusY = this.radiusY;
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		let isSorting: boolean = this.xAxis.isSorting;
		let valueCount: number = this.valueColumn.count;
		for (let i: number = 0; i < buckets.count; ++i) {
			let top: number = buckets._inner[i][0] - 0.5 * groupWidth;
			let right: number = buckets._inner[i][1];
			let left: number = zero;
			left = Math.max(left, -100);
			right = Math.min(right, viewportRect.right + 100);
			let column: Rectangle = barView.columns.item(i);
			column.height = groupWidth;
			column.width = Math.abs(right - left);
			if (areStylesOverriden) {
				this.performCategoryStyleOverride(buckets, i, valueCount, yAxis, yParams, view.isThumbnailView);
			}
			this.renderManager.setCategoryShapeAppearance(column, false, false, false, false);
			column.radiusX = this.renderManager.actualRenderRadiusX;
			column.radiusY = this.renderManager.actualRenderRadiusY;
			barView.setColumnPosition(column, Math.min(right, left), top);
		}
		barView.columns.count = buckets.count;
		view.updateFrameVersion(frame);
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		switch (action) {
			case FastItemsSourceEventAction.Reset:

			case FastItemsSourceEventAction.Insert:

			case FastItemsSourceEventAction.Remove:
			this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
			break;

		}

		if (this.anchoredView.hasTrendLineManager) {
			this.anchoredView.trendLineManager.dataUpdated(action, position, count, propertyName);
		}
		switch (action) {
			case FastItemsSourceEventAction.Reset:
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Insert:
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Remove:
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Replace:
			if (this.valueMemberPath != null && this.anchoredView.bucketCalculator.bucketSize > 0) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Change:
			if (propertyName == this.valueMemberPath) {
				if (this.xAxis != null && !this.xAxis.updateRange()) {
					this.renderSeries(true);
				}
			}
			break;

		}

	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case VerticalAnchoredCategorySeries.xAxisPropertyName:
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
			if (this.xAxis != null && this.xAxis.updateRange()) {
				this.renderSeries(false);
			}
			break;

			case VerticalAnchoredCategorySeries.yAxisPropertyName:
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			if (this.anchoredView.hasTrendLineManager) {
				this.anchoredView.trendLineManager = CategoryTrendLineManagerFactory.selectManager(this.anchoredView.trendLineManager, this.yAxis, this.rootCanvas, this, this.res);
			}
			this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			break;

			case Series.fastItemsSourcePropertyName:
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case AnchoredCategorySeries.valueColumnPropertyName:
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case Series.seriesViewerPropertyName:
			if (oldValue != null && newValue == null) {
				this.deregisterForAxis(this.xAxis);
				this.deregisterForAxis(this.yAxis);
			}
			if (oldValue == null && newValue != null) {
				this.registerForAxis(this.xAxis);
				this.registerForAxis(this.yAxis);
			}
			this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			break;

		}

	}
	getPreferredCategoryMode(): CategoryMode {
		return this.preferredCategoryMode(this.yAxis);
	}
	get currentCategoryMode(): CategoryMode {
		return this.preferredCategoryMode(this.yAxis);
	}
	get scaler(): ICategoryScaler {
		return this.yAxis;
	}
	get yScaler(): IScaler {
		return this.xAxis;
	}
}

/**
 * @hidden 
 */
export class BarBucketCalculator extends CategoryBucketCalculator {
	static $t: Type = markType(BarBucketCalculator, 'BarBucketCalculator', (<any>CategoryBucketCalculator).$type);
	constructor(view: BarSeriesView) {
		super(view);
		this.barView = view;
	}
	private _barView: BarSeriesView = null;
	protected get barView(): BarSeriesView {
		return this._barView;
	}
	protected set barView(value: BarSeriesView) {
		this._barView = value;
	}
	calculateBuckets(resolution: number): void {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let fastItemsSource: IFastItemsSource = this.view.categoryModel.fastItemsSource;
		if (windowRect.isEmpty || viewportRect.isEmpty || this.barView.barModel.yAxis == null || fastItemsSource == null || fastItemsSource.count == 0) {
			this.bucketSize = 0;
			return;
		}
		let barSeries: BarSeries = typeCast<BarSeries>((<any>BarSeries).$type, this.view.categoryModel);
		let contentViewport: Rect = barSeries.getContentViewport(this.view);
		let effectiveViewportRect: Rect = barSeries.getEffectiveViewport1(this.view);
		let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, barSeries.yAxis.isInverted, effectiveViewportRect);
		let y0: number = Math.floor(barSeries.yAxis.getUnscaledValue1(contentViewport.top, p, CategoryMode.Mode0));
		let y1: number = Math.ceil(barSeries.yAxis.getUnscaledValue1(contentViewport.bottom, p, CategoryMode.Mode0));
		if (!barSeries.yAxis.isInverted) {
			y1 = Math.ceil(barSeries.yAxis.getUnscaledValue1(contentViewport.top, p, CategoryMode.Mode0));
			y0 = Math.floor(barSeries.yAxis.getUnscaledValue1(contentViewport.bottom, p, CategoryMode.Mode0));
		}
		let c: number = Math.floor((y1 - y0 + 1) * resolution / contentViewport.height);
		this.bucketSize = <number>truncate(Math.max(1, c));
		this.firstBucket = <number>truncate(Math.max(0, Math.floor(y0 / this.bucketSize) - 1));
		this.lastBucket = <number>truncate(Math.ceil(y1 / this.bucketSize));
	}
	getBucketWithoutUnknowns(bucket: number): number[] {
		let column = this._values;
		let count = this._count;
		let i0: number = bucket * this.bucketSize;
		let i1: number = i0 + this.bucketSize - 1;
		let maxIndex: number = count - 1;
		i0 = i0 < maxIndex ? i0 : maxIndex;
		i1 = i1 < maxIndex ? i1 : maxIndex;
		let min: number = 1.7976931348623157E+308;
		let max: number = -1.7976931348623157E+308;
		let first: boolean = true;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = column[i];
			min = min < y ? min : y;
			max = max > y ? max : y;
			Math.max(max, y);
			first = false;
		}
		if (!first) {
			return <number[]>[ 0.5 * (i0 + i1), min, max ];
		}
		return <number[]>[ 0.5 * (i0 + i1), NaN, NaN ];
	}
	getBucket(bucket: number): number[] {
		let column = this._values;
		let count = this._count;
		let i0: number = bucket * this.bucketSize;
		let i1: number = i0 + this.bucketSize - 1;
		let maxIndex: number = count - 1;
		i0 = i0 < maxIndex ? i0 : maxIndex;
		i1 = i1 < maxIndex ? i1 : maxIndex;
		let min: number = NaN;
		let max: number = NaN;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = column[i];
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
	private _values: number[] = null;
	private _count: number = 0;
	cacheValues(): void {
		this._count = this.barView.barModel.valueColumn.count;
		this._values = <number[]>this.barView.barModel.valueColumn.asArray();
	}
	unCacheValues(): void {
		this._values = null;
	}
}

/**
 * @hidden 
 */
export class BarSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(BarSeriesView, 'BarSeriesView', (<any>AnchoredCategorySeriesView).$type);
	private _barModel: BarSeries = null;
	get barModel(): BarSeries {
		return this._barModel;
	}
	set barModel(value: BarSeries) {
		this._barModel = value;
	}
	constructor(model: BarSeries) {
		super(model);
		this.barModel = model;
		this.columns = ((() => {
			let $ret = new Pool$1<Rectangle>((<any>Rectangle).$type);
			$ret.create = runOn(this, this.columnCreate);
			$ret.activate = runOn(this, this.columnActivate);
			$ret.disactivate = runOn(this, this.columnDisactivate);
			$ret.destroy = runOn(this, this.columnDestroy);
			return $ret;
		})());
		this.trendLineManager = new BarTrendLineManager();
	}
	private _columns: Pool$1<Rectangle> = null;
	get columns(): Pool$1<Rectangle> {
		return this._columns;
	}
	set columns(value: Pool$1<Rectangle>) {
		this._columns = value;
	}
	onInit(): void {
		super.onInit();
		this.visibleColumns = new List$1<Rectangle>((<any>Rectangle).$type, 0);
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	columnCreate(): Rectangle {
		let column: Rectangle = new Rectangle();
		this.visibleColumns.add(column);
		column._visibility = Visibility.Collapsed;
		return column;
	}
	private _visibleColumns: List$1<Rectangle> = null;
	get visibleColumns(): List$1<Rectangle> {
		return this._visibleColumns;
	}
	set visibleColumns(value: List$1<Rectangle>) {
		this._visibleColumns = value;
	}
	columnActivate(column: Rectangle): void {
		column._visibility = Visibility.Visible;
	}
	columnDisactivate(column: Rectangle): void {
		column._visibility = Visibility.Collapsed;
	}
	columnDestroy(column: Rectangle): void {
		this.visibleColumns.remove(column);
	}
	setColumnPosition(column: Rectangle, x: number, y: number): void {
		if (!this.isDirty) {
			this.makeDirty();
		}
		column.canvasTop = y;
		column.canvasLeft = x;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new BarBucketCalculator(this);
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
		super.setupItemHitAppearanceOverride(item, index);
		let rect: Rectangle = <Rectangle>item;
		let brush = this.getHitBrush1(index);
		rect._fill = brush;
		rect._stroke = brush;
		rect.strokeThickness = this.model.thickness;
	}
	protected getItem(index: number): any {
		return this.visibleColumns._inner[index];
	}
	private _hitItem: Rectangle = new Rectangle();
	protected getHitItem(index: number): any {
		let item = this.visibleColumns._inner[index];
		this._hitItem.canvasLeft = item.canvasLeft;
		this._hitItem.canvasTop = item.canvasTop;
		this._hitItem.width = item.width;
		this._hitItem.height = item.height;
		let hitBrush = this.getHitBrush1(index);
		this._hitItem._fill = hitBrush;
		this._hitItem._stroke = hitBrush;
		this._hitItem.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		return this._hitItem;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			for (let i: number = 0; i < this.visibleColumns.count; i++) {
				let column = <Rectangle>this.getCurrentItem(i, isHitContext);
				this.setupItemAppearance(column, i, isHitContext);
				context.renderRectangle(column);
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let i: number = 0;
		let toSort: List$1<Rectangle> = new List$1<Rectangle>((<any>Rectangle).$type, 0);
		for (let column of fromEnum<Rectangle>(this.columns.active)) {
			toSort.add(column);
		}
		toSort.sort2((c1: Rectangle, c2: Rectangle) => {
			if (c1.canvasTop > c2.canvasTop) {
				return -1;
			} else if (c1.canvasTop < c2.canvasTop) {
				return 1;
			} else {
				return 0;
			}
		});
		for (let column1 of fromEnum<Rectangle>(toSort)) {
			this.model.seriesVisualDataManager.exportRectangleData(svd, column1, "column" + i, <string[]>[ "Main", "Fill" ]);
		}
		i++;
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 5;
		this.model.shadowOffsetX = 5;
		this.model.shadowOffsetY = -5;
	}
}


