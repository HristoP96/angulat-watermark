/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { SplineType, SplineType_$type } from "./SplineType";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { CategoryFrame } from "./CategoryFrame";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericAxisBase } from "./NumericAxisBase";
import { CategorySeriesView } from "./CategorySeriesView";
import { ScalerParams } from "./ScalerParams";
import { Base, ICollection$1, ICollection$1_$type, Point, IList$1, IList$1_$type, Type, typeCast, Point_$type, enumGetBox, EnumUtil, markType, PointUtil } from "igniteui-core/type";
import { CollisionAvoider } from "./CollisionAvoider";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { Series } from "./Series";
import { Axis } from "./Axis";
import { MarkerSeries } from "./MarkerSeries";
import { CategorySeries } from "./CategorySeries";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Marker } from "./Marker";
import { List$1 } from "igniteui-core/List$1";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { ContentControl } from "igniteui-core/ContentControl";
import { DataContext } from "igniteui-core/DataContext";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { SafeSortedReadOnlyDoubleCollection } from "./SafeSortedReadOnlyDoubleCollection";
import { Numeric } from "igniteui-core/Numeric";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { CategoryMode } from "./CategoryMode";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, isNaN_ } from "igniteui-core/number";
import { Color } from "igniteui-core/Color";

/**
 * @hidden 
 */
export abstract class SplineSeriesBase extends HorizontalAnchoredCategorySeries {
	static $t: Type = markType(SplineSeriesBase, 'SplineSeriesBase', (<any>HorizontalAnchoredCategorySeries).$type);
	protected createView(): SeriesView {
		return new SplineSeriesBaseView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.splineBaseView = <SplineSeriesBaseView>view;
	}
	private _splineBaseView: SplineSeriesBaseView;
	get splineBaseView(): SplineSeriesBaseView {
		return this._splineBaseView;
	}
	set splineBaseView(value: SplineSeriesBaseView) {
		this._splineBaseView = value;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	private _uColumn: number[] = null;
	protected get uColumn(): number[] {
		return this._uColumn;
	}
	protected set uColumn(value: number[]) {
		this._uColumn = value;
	}
	prepareDateTimeFrame(frame: CategoryFrame, windowRect: Rect, viewportRect: Rect, xaxis: CategoryAxisBase, yaxis: NumericAxisBase, view: CategorySeriesView): void {
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, xaxis);
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		if (sortingXAxis == null) {
			return;
		}
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xaxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yaxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		let markers: boolean = this.shouldDisplayMarkers();
		let markerCount: number = 0;
		let offset: number = this.getOffset(xaxis, windowRect, viewportRect, effectiveViewportRect);
		let xv: (arg1: number) => number = (i: number) => i;
		let yv: (arg1: number) => number = (i: number) => this.valueColumn.item(sortingXAxis.sortedIndices._inner[i]);
		let lastBucket: number = this.categoryView.bucketCalculator.lastBucket;
		let firstBucket: number = this.categoryView.bucketCalculator.firstBucket;
		let n: number = <number>truncate(Math.ceil(viewportRect.width / (lastBucket - firstBucket)));
		let collisionAvoider: CollisionAvoider = new CollisionAvoider();
		let bucketSize: number = this.categoryView.bucketCalculator.bucketSize;
		if (bucketSize <= 0 || (firstBucket <= 0 && lastBucket <= 0)) {
			this.categoryView.markers.count = markerCount;
			return;
		}
		let bucketCount: number = 0;
		let markerBucket: number = 0;
		for (let i: number = firstBucket; i < lastBucket + 1; ++i) {
			let bucket: number[] = null;
			let itemIndex: number = i * bucketSize;
			if (sortingXAxis != null && sortingXAxis.sortedIndices != null && itemIndex >= 0 && itemIndex < sortingXAxis.sortedIndices.count) {
				itemIndex = sortingXAxis.sortedIndices._inner[itemIndex];
			}
			if (i >= (this.valueColumn.count - 1)) {
				if (markers && this.prepareMarker(frame, frame.buckets._inner[frame.buckets.count - 1], collisionAvoider, Math.min(itemIndex, this.fastItemsSource.count - 1), markerCount, view, bucketCount - 1)) {
					++markerCount;
				}
				break;
			}
			let x1: number = xv(i);
			let y1: number = yv(i);
			let x2: number = xv(i + 1);
			let y2: number = yv(i + 1);
			let h: number = x2 - x1;
			let u1: number = this.uColumn[i];
			let u2: number = this.uColumn[i + 1];
			let unscaledValue: number = sortingXAxis.getUnscaledValueAt(sortingXAxis.sortedIndices._inner[i]);
			let firstPointX: number = xaxis.getScaledValue(unscaledValue, xParams) + offset;
			let firstPointY: number = yaxis.getScaledValue(y1, yParams);
			frame.buckets.add(<number[]>[ firstPointX, firstPointY, firstPointY ]);
			bucketCount++;
			markerBucket = bucketCount;
			for (let j: number = 1; j < n; ++j) {
				let pp: number = (<number>j) / (<number>n);
				let x: number = x1 + h * pp;
				let a: number = (x2 - x) / h;
				let b: number = (x - x1) / h;
				let y: number = a * y1 + b * y2 + ((a * a * a - a) * u1 + (b * b * b - b) * u2) * (h * h) / 6;
				let unscaledValueFirst: number = sortingXAxis.getUnscaledValueAt(sortingXAxis.sortedIndices._inner[i]);
				let unscaledValueNext: number = sortingXAxis.getUnscaledValueAt(sortingXAxis.sortedIndices._inner[i + 1]);
				let currentUnscaledValue: number = unscaledValueFirst + (unscaledValueNext - unscaledValueFirst) * pp;
				x = xaxis.getScaledValue(currentUnscaledValue, xParams) + offset;
				y = yaxis.getScaledValue(y, yParams);
				frame.buckets.add(<number[]>[ x, y, y ]);
				bucketCount++;
			}
			if (markers) {
				bucket = <number[]>[ firstPointX, firstPointY, firstPointY ];
			}
			if (markers && this.prepareMarker(frame, bucket, collisionAvoider, Math.min(itemIndex, this.fastItemsSource.count - 1), markerCount, view, markerBucket - 1)) {
				++markerCount;
			}
		}
		view.markers.count = markerCount;
	}
	prepareMarker(frame: CategoryFrame, bucket: number[], collisionAvoider: CollisionAvoider, itemIndex: number, markerCount: number, view: CategorySeriesView, bucketIndex: number): boolean {
		let x: number = bucket[0];
		let y: number = bucket[1];
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			let marker: Marker = view.markers.item(markerCount);
			(<DataContext>marker.content).item = this.fastItemsSource.item(itemIndex);
			marker.markerBucket = bucketIndex;
			return true;
		}
		return false;
	}
	getMatchingBuckets(categoryAxis: CategoryAxisBase, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, world: Point, skipUnknowns: boolean): number[][] {
		if (categoryAxis == null || categoryAxis.isSorting || this.getBucketSize(this.view) > 1 || this.getBucketSize(this.view) == 0) {
			return super.getMatchingBuckets(this.getCategoryAxis(), this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), world, skipUnknowns);
		}
		if (this.currentFrame.buckets.count == 0) {
			return null;
		}
		let lastBucket: number = this.splineBaseView.bucketCalculator.lastBucket;
		let viewportRect: Rect = this.view.viewport;
		let n: number = <number>truncate(Math.ceil(viewportRect.width / (lastBucket - firstBucket)));
		let prevBucketIndex: number = -1;
		let nextBucketIndex: number = -1;
		let exactIndex = this.getExactItemIndex(world);
		let previousIndex = this.getPreviousOrExactIndex(world, skipUnknowns);
		let nextIndex = this.getNextOrExactIndex(world, skipUnknowns);
		let prevBucket = <number>truncate(Math.floor(previousIndex / <number>this.getBucketSize(this.view)));
		let nextBucket = <number>truncate(Math.floor(nextIndex / <number>this.getBucketSize(this.view)));
		prevBucketIndex = prevBucket - this.getFirstBucket(this.view);
		nextBucketIndex = nextBucket - this.getFirstBucket(this.view);
		let actualPrev = prevBucketIndex * n;
		let actualNext = nextBucketIndex * n;
		let p: number = 0;
		if (previousIndex != nextIndex) {
			p = (exactIndex - previousIndex) / (nextIndex - previousIndex);
		}
		let actual = <number>truncate(Math.floor(actualPrev + p * (actualNext - actualPrev)));
		prevBucketIndex = actual;
		nextBucketIndex = actual + 1;
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
		let ret: number[][] = <number[][]>new Array(2);
		ret[0] = prevBucketValue;
		ret[1] = nextBucketValue;
		return ret;
	}
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.prepareFrame(frame, view);
		if (frame.buckets.count <= 1) {
			return;
		}
		if (view.bucketCalculator.bucketSize == 0) {
			return;
		}
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xaxis: CategoryAxisBase = this.cachedXAxis;
		let yaxis: NumericAxisBase = this.cachedYAxis;
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xaxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, yaxis.isInverted, effectiveViewportRect);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		frame.buckets.clear();
		frame.markers.clear();
		let markers: boolean = this.shouldDisplayMarkers();
		let markerCount: number = 0;
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.cachedXAxis);
		if (sortingXAxis != null && sortingXAxis.sortedIndices.count != this.fastItemsSource.count) {
			return;
		}
		let offset: number = this.getOffset(xaxis, windowRect, viewportRect, effectiveViewportRect);
		let xv: (arg1: number) => number = (i: number) => i;
		let yv: (arg1: number) => number = (i: number) => this.valueColumn.item(i);
		let bucketSize: number = view.bucketCalculator.bucketSize;
		if ((this.uColumn == null || this.uColumn.length != this.valueColumn.count) && bucketSize == 1) {
			let endPointsFirstDerivative: number = this.splineType == SplineType.Natural ? NaN : 0;
			if (this.cachedXAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.cachedXAxis) !== null && (<ISortingAxis><any>this.cachedXAxis).sortedIndices != null) {
				let sorted: SafeSortedReadOnlyDoubleCollection = new SafeSortedReadOnlyDoubleCollection(1, this.valueColumn, (<ISortingAxis><any>this.cachedXAxis).sortedIndices, NaN);
				yv = (i: number) => sorted.item(i);
			}
			this.uColumn = Numeric.safeCubicSplineFit(this.valueColumn.count, xv, yv, endPointsFirstDerivative, endPointsFirstDerivative);
		}
		let lastBucket: number = view.bucketCalculator.lastBucket;
		let firstBucket: number = view.bucketCalculator.firstBucket;
		let n: number = <number>truncate(Math.ceil(viewportRect.width / (lastBucket - firstBucket)));
		let collisionAvoider: CollisionAvoider = new CollisionAvoider();
		if (sortingXAxis != null) {
			this.prepareDateTimeFrame(frame, windowRect, viewportRect, xaxis, yaxis, view);
			return;
		}
		let anchoredView = <AnchoredCategorySeriesView>view;
		anchoredView.cacheValues();
		let bucketCount: number = 0;
		let markerBucket: number = 0;
		for (let i: number = firstBucket; i <= lastBucket; ++i) {
			let bucket: number[] = null;
			if (bucketSize == 1) {
				if (i >= (this.valueColumn.count - 1)) {
					if (markers && this.prepareMarker(frame, frame.buckets._inner[frame.buckets.count - 1], collisionAvoider, Math.min(i * bucketSize, this.fastItemsSource.count - 1), markerCount, view, bucketCount - 1)) {
						++markerCount;
					}
					break;
				}
				let x1: number = xv(i);
				let y1: number = yv(i);
				let x2: number = xv(i + 1);
				let y2: number = yv(i + 1);
				let h: number = x2 - x1;
				let u1: number = this.uColumn[i];
				let u2: number = this.uColumn[i + 1];
				let firstPointX: number = xaxis.getScaledValue(x1, xParams) + offset;
				let firstPointY: number = yaxis.getScaledValue(y1, yParams);
				frame.buckets.add(<number[]>[ firstPointX, firstPointY, firstPointY ]);
				bucketCount++;
				markerBucket = bucketCount;
				for (let j: number = 1; j < n; ++j) {
					let x: number = x1 + h * <number>j / <number>n;
					let a: number = (x2 - x) / h;
					let b: number = (x - x1) / h;
					let y: number = a * y1 + b * y2 + ((a * a * a - a) * u1 + (b * b * b - b) * u2) * (h * h) / 6;
					x = xaxis.getScaledValue(x, xParams) + offset;
					y = yaxis.getScaledValue(y, yParams);
					frame.buckets.add(<number[]>[ x, y, y ]);
					bucketCount++;
				}
				if (markers) {
					bucket = view.bucketCalculator.getBucket(i);
					bucket[0] = (xaxis.getScaledValue(bucket[0], xParams) + offset);
					bucket[1] = yaxis.getScaledValue(bucket[1], yParams);
					bucket[2] = yaxis.getScaledValue(bucket[2], yParams);
				}
			} else {
				bucket = view.bucketCalculator.getBucket(i);
				if (!isNaN_(bucket[0])) {
					bucket[0] = (xaxis.getScaledValue(bucket[0], xParams) + offset);
					bucket[1] = yaxis.getScaledValue(bucket[1], yParams);
					bucket[2] = yaxis.getScaledValue(bucket[2], yParams);
					frame.buckets.add(bucket);
					bucketCount++;
				}
			}
			if (markers && this.prepareMarker(frame, bucket, collisionAvoider, Math.min(i * bucketSize, this.fastItemsSource.count - 1), markerCount, view, markerBucket - 1)) {
				++markerCount;
			}
		}
		anchoredView.unCacheValues();
		view.markers.count = markerCount;
	}
	private calculateSplineValue(p: number, x1: number, y1: number, x2: number, y2: number, u1: number, u2: number): number {
		let h: number = x2 - x1;
		let x: number = x1 + h * p;
		let a: number = (x2 - x) / h;
		let b: number = (x - x1) / h;
		let y: number = a * y1 + b * y2 + ((a * a * a - a) * u1 + (b * b * b - b) * u2) * (h * h) / 6;
		return y;
	}
	getInterpolatedSeriesValue(p: number, column: IList$1<number>, prevItem: number, nextItem: number, unsortedPrevItem: number, unsortedNextItem: number, offset: number, isSorting: boolean): number {
		let prevValue: number = NaN;
		if (prevItem >= 0 && prevItem < column.count) {
			prevValue = column.item(prevItem);
		}
		let nextValue: number = NaN;
		if (nextItem >= 0 && nextItem < column.count) {
			nextValue = column.item(nextItem);
		}
		if (unsortedNextItem == 0) {
			return nextValue;
		}
		if (unsortedPrevItem == column.count - 1) {
			return prevValue;
		}
		if (isNaN_(nextValue) && offset != 0 && p <= 0.5 && !isSorting) {
			return prevValue;
		}
		if (isNaN_(prevValue) && offset != 0 && p >= 0.5 && !isSorting) {
			return nextValue;
		}
		let x1 = unsortedPrevItem;
		let x2 = unsortedNextItem;
		let y1 = prevValue;
		let y2 = nextValue;
		let u1 = NaN;
		let u2 = NaN;
		if (this.uColumn != null && unsortedPrevItem >= 0 && unsortedPrevItem < this.uColumn.length) {
			u1 = this.uColumn[unsortedPrevItem];
		}
		if (this.uColumn != null && unsortedNextItem >= 0 && unsortedNextItem < this.uColumn.length) {
			u2 = this.uColumn[unsortedNextItem];
		}
		return this.calculateSplineValue(p, x1, y1, x2, y2, u1, u2);
	}
	getOffset(axis: CategoryAxisBase, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		let categoryMode: CategoryMode = this.preferredCategoryMode(axis);
		if (categoryMode == CategoryMode.Mode0 && axis.categoryMode != CategoryMode.Mode0) {
			categoryMode = CategoryMode.Mode1;
		}
		let offset: number = 0;
		switch (categoryMode) {
			case CategoryMode.Mode0:
			offset = 0;
			break;

			case CategoryMode.Mode1:
			offset = 0.5 * axis.getCategorySize(windowRect, viewportRect, effectiveViewportRect);
			break;

			case CategoryMode.Mode2:
			offset = axis.getGroupCenter(this.index, windowRect, viewportRect, effectiveViewportRect);
			break;

		}

		if (axis.isInverted) {
			offset = -offset;
		}
		return offset;
	}
	private static readonly splineTypePropertyName: string = "SplineType";
	static readonly splineTypeProperty: DependencyProperty = DependencyProperty.register(SplineSeriesBase.splineTypePropertyName, SplineType_$type, (<any>SplineSeriesBase).$type, new PropertyMetadata(2, enumGetBox<SplineType>(SplineType_$type, SplineType.Natural), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SplineSeriesBase>sender).raisePropertyChanged(SplineSeriesBase.splineTypePropertyName, e.oldValue, e.newValue)));
	get splineType(): SplineType {
		return EnumUtil.getEnumValue<SplineType>(SplineType_$type, this.getValue(SplineSeriesBase.splineTypeProperty));
	}
	set splineType(value: SplineType) {
		this.setValue(SplineSeriesBase.splineTypeProperty, enumGetBox<SplineType>(SplineType_$type, value));
	}
	protected splineFitMustBeRecalculated(): void {
		this.uColumn = null;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case AnchoredCategorySeries.valueColumnPropertyName:

			case Series.fastItemsSourcePropertyName:
			this.splineFitMustBeRecalculated();
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case SplineSeriesBase.splineTypePropertyName:
			this.splineFitMustBeRecalculated();
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		this.splineFitMustBeRecalculated();
		super.dataUpdatedOverride(action, position, count, propertyName);
	}
}

/**
 * @hidden 
 */
export class SplineSeriesBaseView extends AnchoredCategorySeriesView {
	static $t: Type = markType(SplineSeriesBaseView, 'SplineSeriesBaseView', (<any>AnchoredCategorySeriesView).$type);
	private _splineBaseModel: SplineSeriesBase = null;
	protected get splineBaseModel(): SplineSeriesBase {
		return this._splineBaseModel;
	}
	protected set splineBaseModel(value: SplineSeriesBase) {
		this._splineBaseModel = value;
	}
	constructor(model: SplineSeriesBase) {
		super(model);
		this.splineBaseModel = model;
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 3;
		this.model.shadowOffsetX = 1;
		this.model.shadowOffsetY = 4;
		this.model.useSingleShadow = false;
	}
}


