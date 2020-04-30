/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { ICollection$1, ICollection$1_$type, Base, Type, markType, IList$1, IList$1_$type, Point, String_$type, typeCast, Point_$type, PointUtil } from "igniteui-core/type";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { isNaN_ } from "igniteui-core/number";
import { CategorySeries } from "./CategorySeries";
import { IIsCategoryBased, IIsCategoryBased_$type } from "./IIsCategoryBased";
import { IHasHighLowValueCategory, IHasHighLowValueCategory_$type } from "./IHasHighLowValueCategory";
import { RangeCategoryFramePreparer } from "./RangeCategoryFramePreparer";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Series } from "./Series";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { ICategoryScaler, ICategoryScaler_$type } from "./ICategoryScaler";
import { IScaler, IScaler_$type } from "./IScaler";
import { IBucketizer } from "./IBucketizer";
import { CategorySeriesView } from "./CategorySeriesView";
import { CategoryFrame } from "./CategoryFrame";
import { SeriesView } from "./SeriesView";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { List$1 } from "igniteui-core/List$1";
import { MarkerSeries } from "./MarkerSeries";
import { CategoryMarkerManager } from "./CategoryMarkerManager";
import { Polyline } from "igniteui-core/Polyline";
import { Polygon } from "igniteui-core/Polygon";
import { Rect } from "igniteui-core/Rect";
import { Axis } from "./Axis";
import { ScalerParams } from "./ScalerParams";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { SyncLink } from "./SyncLink";
import { AxisRange } from "./AxisRange";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { FramePreparer } from "./FramePreparer";
import { IDetectsCollisions } from "./IDetectsCollisions";
import { CollisionAvoider } from "./CollisionAvoider";
import { RenderSurface } from "./RenderSurface";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";
import { SeriesViewer } from "./SeriesViewer";
import { SeriesViewerView } from "./SeriesViewerView";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { FastFlattener } from "igniteui-core/FastFlattener";
import { Shape } from "igniteui-core/Shape";

/**
 * @hidden 
 */
export class RangeCategoryBucketCalculator extends CategoryBucketCalculator {
	static $t: Type = markType(RangeCategoryBucketCalculator, 'RangeCategoryBucketCalculator', (<any>CategoryBucketCalculator).$type);
	private _rangeView: RangeCategorySeriesView = null;
	get rangeView(): RangeCategorySeriesView {
		return this._rangeView;
	}
	set rangeView(value: RangeCategorySeriesView) {
		this._rangeView = value;
	}
	constructor(view: RangeCategorySeriesView) {
		super(view);
		this.rangeView = view;
	}
	getBucketWithoutUnknowns(bucket: number): number[] {
		let allowHighLowCrossing: boolean = false;
		let lowColumn = this._lowValues;
		let highColumn = this._highValues;
		let lowCount = this._lowValuesCount;
		let highCount = this._highValuesCount;
		let count: number = Math.min(lowCount, highCount);
		let i0: number = bucket * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, count - 1);
		let min: number = 1.7976931348623157E+308;
		let max: number = -1.7976931348623157E+308;
		let first: boolean = true;
		let lowVal: number = 0;
		let highVal: number = 0;
		let low: number;
		let high: number;
		for (let i: number = i0; i <= i1; ++i) {
			lowVal = lowColumn[i];
			highVal = highColumn[i];
			if (lowVal < highVal) {
				low = lowVal;
				high = highVal;
			} else {
				high = lowVal;
				low = highVal;
			}
			if (!first) {
				min = min < low ? min : low;
				max = max > low ? max : low;
				min = min < high ? min : high;
				max = max > high ? max : high;
			} else {
				min = Math.min(min, low);
				max = Math.max(max, low);
				max = Math.max(max, high);
				min = Math.min(min, high);
				first = false;
			}
		}
		if (allowHighLowCrossing && highVal < lowVal) {
			let temp: number = min;
			min = max;
			max = temp;
		}
		if (!first) {
			let ret: number[] = <number[]>new Array(3);
			ret[0] = 0.5 * (i0 + i1);
			ret[1] = min;
			ret[2] = max;
			return ret;
		}
		let np: number[] = <number[]>new Array(3);
		np[0] = NaN;
		np[1] = NaN;
		np[2] = NaN;
		return np;
	}
	getBucket(bucket: number): number[] {
		let allowHighLowCrossing: boolean = false;
		let lowColumn = this._lowValues;
		let highColumn = this._highValues;
		let lowCount = this._lowValuesCount;
		let highCount = this._highValuesCount;
		let count: number = Math.min(lowCount, highCount);
		let i0: number = bucket * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, count - 1);
		let min: number = NaN;
		let max: number = NaN;
		let first: boolean = true;
		let lowVal: number = 0;
		let highVal: number = 0;
		let low: number;
		let high: number;
		for (let i: number = i0; i <= i1; ++i) {
			lowVal = lowColumn[i];
			highVal = highColumn[i];
			if (lowVal < highVal) {
				low = lowVal;
				high = highVal;
			} else {
				high = lowVal;
				low = highVal;
			}
			if (!first) {
				if (!isNaN_(low)) {
					min = min < low ? min : low;
					max = max > low ? max : low;
				}
				if (!isNaN_(high)) {
					min = min < high ? min : high;
					max = max > high ? max : high;
				}
			} else {
				if (!isNaN_(low)) {
					if (isNaN_(min)) {
						min = low;
					} else {
						min = Math.min(min, low);
					}
					if (!isNaN_(max)) {
						max = Math.max(max, low);
					}
				}
				if (!isNaN_(high)) {
					if (isNaN_(max)) {
						max = high;
					} else {
						max = Math.max(max, high);
					}
					if (!isNaN_(min)) {
						min = Math.min(min, high);
					}
				}
				if (!isNaN_(min) && !isNaN_(max)) {
					first = false;
				}
			}
		}
		if (highVal < lowVal && allowHighLowCrossing) {
			let temp: number = min;
			min = max;
			max = temp;
		}
		if (!first) {
			let ret: number[] = <number[]>new Array(3);
			ret[0] = 0.5 * (i0 + i1);
			ret[1] = min;
			ret[2] = max;
			return ret;
		}
		let np: number[] = <number[]>new Array(3);
		np[0] = NaN;
		np[1] = NaN;
		np[2] = NaN;
		return np;
	}
	private _lowValuesCount: number = 0;
	private _highValuesCount: number = 0;
	private _lowValues: number[] = null;
	private _highValues: number[] = null;
	cacheValues(): void {
		this._lowValuesCount = this.rangeView.rangeModel.lowColumn.count;
		this._highValuesCount = this.rangeView.rangeModel.highColumn.count;
		this._lowValues = <number[]>this.rangeView.rangeModel.lowColumn.asArray();
		this._highValues = <number[]>this.rangeView.rangeModel.highColumn.asArray();
	}
	unCacheValues(): void {
		this._lowValues = null;
		this._highValues = null;
	}
}

/**
 * @hidden 
 */
export abstract class RangeCategorySeries extends CategorySeries implements IIsCategoryBased, IHasHighLowValueCategory {
	static $t: Type = markType(RangeCategorySeries, 'RangeCategorySeries', (<any>CategorySeries).$type, [IIsCategoryBased_$type, IHasHighLowValueCategory_$type]);
	protected createView(): SeriesView {
		return new RangeCategorySeriesView(this);
	}
	getHostReferenceValue(): number {
		return this.getReferenceValue();
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.rangeView = <RangeCategorySeriesView>view;
	}
	private _rangeView: RangeCategorySeriesView;
	get rangeView(): RangeCategorySeriesView {
		return this._rangeView;
	}
	set rangeView(value: RangeCategorySeriesView) {
		this._rangeView = value;
	}
	constructor() {
		super();
		this.RangeFramePreparer = new RangeCategoryFramePreparer(1, this, this.rangeView, this, this, this.rangeView.bucketCalculator);
	}
	private _RangeFramePreparer: RangeCategoryFramePreparer = null;
	get RangeFramePreparer(): RangeCategoryFramePreparer {
		return this._RangeFramePreparer;
	}
	set RangeFramePreparer(value: RangeCategoryFramePreparer) {
		this._RangeFramePreparer = value;
	}
	get lowMemberPath(): string {
		return <string>this.getValue(RangeCategorySeries.lowMemberPathProperty);
	}
	set lowMemberPath(value: string) {
		this.setValue(RangeCategorySeries.lowMemberPathProperty, value);
	}
	static readonly lowMemberPathPropertyName: string = "LowMemberPath";
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == RangeCategorySeries.highMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.highMemberPath);
		}
		if (resolved == RangeCategorySeries.highMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.highMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	static readonly lowMemberPathProperty: DependencyProperty = DependencyProperty.register(RangeCategorySeries.lowMemberPathPropertyName, String_$type, (<any>RangeCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RangeCategorySeries>sender).raisePropertyChanged(RangeCategorySeries.lowMemberPathPropertyName, e.oldValue, e.newValue)));
	get lowColumn(): IFastItemColumn$1<number> {
		return this._lowColumn;
	}
	set lowColumn(value: IFastItemColumn$1<number>) {
		if (this._lowColumn != value) {
			let oldLowColumn: IFastItemColumn$1<number> = this._lowColumn;
			this._lowColumn = value;
			this.raisePropertyChanged(RangeCategorySeries.lowColumnPropertyName, oldLowColumn, this._lowColumn);
		}
	}
	private _lowColumn: IFastItemColumn$1<number> = null;
	static readonly lowColumnPropertyName: string = "LowColumn";
	get highMemberPath(): string {
		return <string>this.getValue(RangeCategorySeries.highMemberPathProperty);
	}
	set highMemberPath(value: string) {
		this.setValue(RangeCategorySeries.highMemberPathProperty, value);
	}
	static readonly highMemberPathPropertyName: string = "HighMemberPath";
	static readonly highMemberPathProperty: DependencyProperty = DependencyProperty.register(RangeCategorySeries.highMemberPathPropertyName, String_$type, (<any>RangeCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RangeCategorySeries>sender).raisePropertyChanged(RangeCategorySeries.highMemberPathPropertyName, e.oldValue, e.newValue)));
	get highColumn(): IFastItemColumn$1<number> {
		return this._highColumn;
	}
	set highColumn(value: IFastItemColumn$1<number>) {
		if (this._highColumn != value) {
			let oldHighColumn: IFastItemColumn$1<number> = this._highColumn;
			this._highColumn = value;
			this.raisePropertyChanged(RangeCategorySeries.highColumnPropertyName, oldHighColumn, this._highColumn);
		}
	}
	private _highColumn: IFastItemColumn$1<number> = null;
	static readonly highColumnPropertyName: string = "HighColumn";
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.Expand;
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		view.markerAppearanceHandled = true;
		CategoryMarkerManager.rasterizeMarkers(this, frame.markers, view.markers, this.useLightweightMarkers);
		this.colorizeMarkers(view, frame);
	}
	protected rasterizePolygon(polyline0: Polyline, polygon01: Polygon, polyline1: Polyline, count: number, buckets: List$1<number[]>, useX0AsX1: boolean): void {
		this.rangeView.rasterizePolygon(polyline0, polygon01, polyline1, count, buckets, useX0AsX1);
	}
	scrollIntoView(item: any): boolean {
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let windowRect: Rect = this.view != null ? this.view.windowRect : Rect.empty;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view != null ? this.view.viewport : Rect.empty;
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let xAxis: Axis = this.fetchXAxis();
		let yAxis: Axis = this.fetchYAxis();
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		let cx: number;
		if (xAxis != null) {
			let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, xAxis.isInverted, effectiveViewportRect);
			cx = xAxis.getScaledValue(index, xParams);
		} else {
			cx = NaN;
		}
		let offset: number = xAxis != null ? this.RangeFramePreparer.getOffset(typeCast<ICategoryScaler>(ICategoryScaler_$type, xAxis), unitRect, unitRect, effectiveViewportRect) : 0;
		cx += offset;
		if (index >= 0 && Rect.l_op_Inequality(windowRect, null) && Rect.l_op_Inequality(viewportRect, null)) {
			if (!isNaN_(cx)) {
				if (cx < windowRect.left + 0.1 * windowRect.width) {
					cx = cx + 0.4 * windowRect.width;
				}
				if (cx > windowRect.right - 0.1 * windowRect.width) {
					cx = cx - 0.4 * windowRect.width;
				}
				windowRect.x = cx - 0.5 * windowRect.width;
			}
			if (yAxis != null && this.highColumn != null && index < this.highColumn.count) {
				let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, yAxis.isInverted, effectiveViewportRect);
				yParams.referenceValue = this.getReferenceValue();
				let high: number = yAxis.getScaledValue(this.highColumn.item(index), yParams);
				let low: number = yAxis.getScaledValue(this.lowColumn.item(index), yParams);
				if (!isNaN_(high) && !isNaN_(low)) {
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
			if (this.syncLink != null) {
				this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
			}
		}
		return index >= 0;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.lowColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.highColumn);
				this.lowColumn = null;
				this.highColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				this.lowColumn = this.registerDoubleColumn(this.lowMemberPath);
				this.highColumn = this.registerDoubleColumn(this.highMemberPath);
			}
			if (!this.updateNumericAxisRange()) {
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case RangeCategorySeries.lowMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.lowColumn);
				this.lowColumn = this.registerDoubleColumn(this.lowMemberPath);
			}
			break;

			case RangeCategorySeries.lowColumnPropertyName:
			if (!this.updateNumericAxisRange()) {
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case RangeCategorySeries.highMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.highColumn);
				this.highColumn = this.registerDoubleColumn(this.highMemberPath);
			}
			break;

			case RangeCategorySeries.highColumnPropertyName:
			if (!this.updateNumericAxisRange()) {
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

		}

	}
	getRange(axis: Axis): AxisRange {
		if (this.lowColumn == null || this.lowColumn.count == 0 || this.highColumn == null || this.highColumn.count == 0) {
			return null;
		}
		if (axis == this.fetchXAxis()) {
			let max: number = Math.min(this.lowColumn.count, this.highColumn.count);
			return new AxisRange(0, max - 1);
		}
		if (axis == this.fetchYAxis()) {
			let min: number = Math.min(this.lowColumn.minimum, this.highColumn.minimum);
			let max1: number = Math.max(this.lowColumn.maximum, this.highColumn.maximum);
			return new AxisRange(Math.min(min, max1), Math.max(min, max1));
		}
		return null;
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		if (this.fetchXAxis() != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.fetchXAxis()) !== null) {
			(<ISortingAxis><any>this.fetchXAxis()).notifyDataChanged();
		}
		let xAxis = this.fetchXAxis();
		switch (action) {
			case FastItemsSourceEventAction.Change:
			if (propertyName == this.lowMemberPath || propertyName == this.highMemberPath) {
				if (xAxis != null) {
					xAxis.updateRange();
				}
				if (!this.updateNumericAxisRange()) {
					this.renderSeries(true);
				}
			}
			break;

			case FastItemsSourceEventAction.Insert:
			if (xAxis != null) {
				xAxis.updateRange();
			}
			this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			if (!this.updateNumericAxisRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Remove:
			if (xAxis != null) {
				xAxis.updateRange();
			}
			this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			if (!this.updateNumericAxisRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Replace:
			if (xAxis != null) {
				xAxis.updateRange();
			}
			if (this.lowMemberPath != null && this.highMemberPath != null && this.categoryView.bucketCalculator.bucketSize > 0 && !this.updateNumericAxisRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Reset:
			if (xAxis != null) {
				xAxis.updateRange();
			}
			this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			if (!this.updateNumericAxisRange()) {
				this.renderSeries(true);
			}
			break;

		}

	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		if (this.lowColumn == null || this.lowColumn.count == 0 || this.highColumn == null || this.highColumn.count == 0) {
			isValid = false;
		}
		return isValid;
	}
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.prepareFrame(frame, view);
		this.RangeFramePreparer.prepareFrame(frame, view);
	}
	get currentCategoryMode(): CategoryMode {
		return this.preferredCategoryMode(typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.fetchXAxis()));
	}
	get scaler(): ICategoryScaler {
		return typeCast<ICategoryScaler>(ICategoryScaler_$type, this.fetchXAxis());
	}
	get yScaler(): IScaler {
		return typeCast<IScaler>(IScaler_$type, this.fetchYAxis());
	}
	get bucketizer(): IBucketizer {
		return this.categoryView.bucketCalculator;
	}
	get currentMode2Index(): number {
		return this.getMode2Index();
	}
	provideCollisionDetector(): IDetectsCollisions {
		return new CollisionAvoider();
	}
	get mayContainUnknowns(): boolean {
		return this.lowColumn == null || this.lowColumn.mayContainUnknowns || this.highColumn == null || this.highColumn.mayContainUnknowns;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		let dirty = this.thumbnailDirty;
		super.renderThumbnail(viewportRect, surface);
		if (!dirty) {
			this.view.prepSurface(surface);
			return;
		}
		this.view.prepSurface(surface);
		if (this.clearAndAbortIfInvalid1(this.thumbnailView)) {
			return;
		}
		let framePreparer: RangeCategoryFramePreparer = new RangeCategoryFramePreparer(1, this, typeCast<ISupportsMarkers>(ISupportsMarkers_$type, this.thumbnailView), this.seriesViewer.view.overviewPlusDetailViewportHost, this, (<CategorySeriesView>this.thumbnailView).bucketCalculator);
		if (!this.skipThumbnailPrepare) {
			this.thumbnailFrame = new CategoryFrame(3);
			this.thumbnailFrame.clearFrame();
			framePreparer.prepareFrame(this.thumbnailFrame, this.thumbnailView);
		}
		this.skipThumbnailPrepare = false;
		this.renderFrame(this.thumbnailFrame, <CategorySeriesView>this.thumbnailView);
		this.thumbnailDirty = false;
	}
	private _alternateFrame: CategoryFrame = null;
	private get alternateFrame(): CategoryFrame {
		return this._alternateFrame;
	}
	private set alternateFrame(value: CategoryFrame) {
		this._alternateFrame = value;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let categorySeriesView: RangeCategorySeriesView = <RangeCategorySeriesView>view;
		categorySeriesView.bucketCalculator.calculateBuckets(this.resolution);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(categorySeriesView)) {
			return;
		}
		let framePreparer: RangeCategoryFramePreparer = new RangeCategoryFramePreparer(1, this, typeCast<ISupportsMarkers>(ISupportsMarkers_$type, view), view, this, (<CategorySeriesView>view).bucketCalculator);
		if (this.alternateFrame == null) {
			this.alternateFrame = new CategoryFrame(3);
		}
		this.alternateFrame.clearFrame();
		framePreparer.prepareFrame(this.alternateFrame, categorySeriesView);
		this.renderFrame(this.alternateFrame, categorySeriesView);
	}
	getReferenceValue(): number {
		return Series.getReferenceValue1(this.lowColumn, typeCast<ISortingAxis>(ISortingAxis_$type, this.fetchXAxis()));
	}
}

/**
 * @hidden 
 */
export class RangeCategorySeriesView extends CategorySeriesView {
	static $t: Type = markType(RangeCategorySeriesView, 'RangeCategorySeriesView', (<any>CategorySeriesView).$type);
	private _rangeModel: RangeCategorySeries = null;
	get rangeModel(): RangeCategorySeries {
		return this._rangeModel;
	}
	set rangeModel(value: RangeCategorySeries) {
		this._rangeModel = value;
	}
	constructor(model: RangeCategorySeries) {
		super(model);
		this.rangeModel = model;
	}
	rasterizePolygon(polyline0: Polyline, polygon01: Polygon, polyline1: Polyline, count: number, buckets: List$1<number[]>, useX0AsX1: boolean): void {
		polyline0.points.clear();
		polygon01.points.clear();
		polyline1.points.clear();
		let indexes = FastFlattener.chunkedFastFlatten1(count, buckets, true, useX0AsX1, this.model.resolution);
		let indexes2 = FastFlattener.chunkedFastFlatten1(count, buckets, false, useX0AsX1, this.model.resolution);
		let indexCount = indexes.count;
		let index2Count = indexes2.count;
		let index: number;
		let bucket: number[];
		let x0: number;
		let y0: number;
		for (let i = 0; i < indexCount; i++) {
			index = indexes.item(i);
			bucket = buckets._inner[index];
			x0 = bucket[0];
			y0 = bucket[1];
			polyline0.points.add(<Point>{ $type: Point_$type, x: x0, y: y0 });
			polygon01.points.add(<Point>{ $type: Point_$type, x: x0, y: y0 });
		}
		let x1: number;
		let y1: number;
		for (let i1 = 0; i1 < index2Count; i1++) {
			index = indexes2.item(i1);
			bucket = buckets._inner[index];
			if (useX0AsX1) {
				x1 = bucket[0];
				y1 = bucket[2];
			} else {
				x1 = bucket[2];
				y1 = bucket[3];
			}
			polyline1.points.add(<Point>{ $type: Point_$type, x: x1, y: y1 });
			polygon01.points.add(<Point>{ $type: Point_$type, x: x1, y: y1 });
		}
		polyline0.isHitTestVisible = polyline0.points.count > 0;
		polygon01.isHitTestVisible = polygon01.points.count > 0;
		polyline1.isHitTestVisible = polyline1.points.count > 0;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new RangeCategoryBucketCalculator(this);
	}
}


