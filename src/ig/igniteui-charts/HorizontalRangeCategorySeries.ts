/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RangeCategorySeries } from "./RangeCategorySeries";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { NumericYAxis } from "./NumericYAxis";
import { Axis } from "./Axis";
import { Series } from "./Series";
import { Point, Base, Type, Point_$type, runOn, typeCast, markType, PointUtil } from "igniteui-core/type";
import { CategorySeries } from "./CategorySeries";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { SeriesView } from "./SeriesView";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { RangeValueList } from "./RangeValueList";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { SeriesViewer } from "./SeriesViewer";
import { CategorySeriesView } from "./CategorySeriesView";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { CategoryXAxis } from "./CategoryXAxis";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";

/**
 * @hidden 
 */
export abstract class HorizontalRangeCategorySeries extends RangeCategorySeries {
	static $t: Type = markType(HorizontalRangeCategorySeries, 'HorizontalRangeCategorySeries', (<any>RangeCategorySeries).$type);
	get xAxis(): CategoryAxisBase {
		return <CategoryAxisBase>this.getValue(HorizontalRangeCategorySeries.xAxisProperty);
	}
	set xAxis(value: CategoryAxisBase) {
		this.setValue(HorizontalRangeCategorySeries.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(HorizontalRangeCategorySeries.xAxisPropertyName, (<any>CategoryAxisBase).$type, (<any>HorizontalRangeCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HorizontalRangeCategorySeries>sender).raisePropertyChanged(HorizontalRangeCategorySeries.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(HorizontalRangeCategorySeries.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(HorizontalRangeCategorySeries.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(HorizontalRangeCategorySeries.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>HorizontalRangeCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HorizontalRangeCategorySeries>sender).raisePropertyChanged(HorizontalRangeCategorySeries.yAxisPropertyName, e.oldValue, e.newValue)));
	fetchXAxis(): Axis {
		return this.xAxis;
	}
	fetchYAxis(): Axis {
		return this.yAxis;
	}
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
	getHighStrokeSegments(position: Point): Point[][] {
		let matching = this.getMatchingBuckets(this.getCategoryAxis(), this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), this.toWorldPosition(position), true);
		if (matching == null) {
			return null;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let ret: Point[][] = <Point[][]>new Array(1);
		let seg: Point[] = <Point[]>new Array(2);
		seg[0] = <Point>{ $type: Point_$type, x: prevBucketValue[0], y: prevBucketValue[2] };
		seg[1] = <Point>{ $type: Point_$type, x: nextBucketValue[0], y: nextBucketValue[2] };
		ret[0] = seg;
		return ret;
	}
	getLowStrokeSegments(position: Point): Point[][] {
		let matching = this.getMatchingBuckets(this.getCategoryAxis(), this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), this.toWorldPosition(position), true);
		if (matching == null) {
			return null;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let ret: Point[][] = <Point[][]>new Array(1);
		let seg: Point[] = <Point[]>new Array(2);
		seg[0] = <Point>{ $type: Point_$type, x: prevBucketValue[0], y: prevBucketValue[1] };
		seg[1] = <Point>{ $type: Point_$type, x: nextBucketValue[0], y: nextBucketValue[1] };
		ret[0] = seg;
		return ret;
	}
	protected get_isRange(): boolean {
		return true;
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.Computational;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	getOffsetValue(): number {
		return this.RangeFramePreparer.getOffset(this.xAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getCategoryWidth(): number {
		return this.xAxis.getCategorySize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), new RangeValueList(this.highColumn, this.lowColumn));
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), new RangeValueList(this.highColumn, this.lowColumn));
	}
	getDistanceToIndex(world: Point, index: number, axis: Axis, p: ScalerParams, offset: number): number {
		if (axis == null) {
			return Number.POSITIVE_INFINITY;
		}
		let count = this.xAxis.cachedItemsCount;
		return this.getDistanceToIndexHelper(world, index, this.xAxis, p, offset, count, runOn(this, this.getExactUnsortedItemIndex));
	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.seriesViewer == null) {
			return NaN;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let xParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		let offset = this.RangeFramePreparer.getOffset(this.xAxis, this.seriesViewer.actualWindowRect, this.view.viewport, effectiveViewportRect);
		return this.getSeriesValueHelper(new RangeValueList(this.highColumn, this.lowColumn), world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesLowValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.seriesViewer == null) {
			return NaN;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let xParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		let offset = this.RangeFramePreparer.getOffset(this.xAxis, this.seriesViewer.actualWindowRect, this.view.viewport, effectiveViewportRect);
		return this.getSeriesValueHelper(this.lowColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesHighValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.seriesViewer == null) {
			return NaN;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let xParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.view.viewport, this.xAxis.isInverted, effectiveViewportRect);
		let offset = this.RangeFramePreparer.getOffset(this.xAxis, this.seriesViewer.actualWindowRect, this.view.viewport, effectiveViewportRect);
		return this.getSeriesValueHelper(this.highColumn, world, this.xAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesHighValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.RangeFramePreparer.getOffset(this.xAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, runOn(this, this.getSeriesHighValue), (w: Point, skip: boolean) => this.getPreviousOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.highColumn), (w: Point, skip: boolean) => this.getNextOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.highColumn));
	}
	getSeriesLowValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.RangeFramePreparer.getOffset(this.xAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, runOn(this, this.getSeriesLowValue), (w: Point, skip: boolean) => this.getPreviousOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.lowColumn), (w: Point, skip: boolean) => this.getNextOrExactIndexHelper(w, skip, this.xAxis, runOn(this, this.getExactUnsortedItemIndex), this.lowColumn));
	}
	getSeriesValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.RangeFramePreparer.getOffset(this.xAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.yAxis, this.xAxis, null, null, null);
	}
	updateNumericAxisRange(): boolean {
		return this.yAxis != null && this.yAxis.updateRange();
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case HorizontalRangeCategorySeries.xAxisPropertyName:
			this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
			this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
			this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case HorizontalRangeCategorySeries.yAxisPropertyName:
			this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
			this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
			this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			this.updateNumericAxisRange();
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	canUseAsYAxis(axis: any): boolean {
		if (typeCast<NumericYAxis>((<any>NumericYAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	canUseAsXAxis(axis: any): boolean {
		if (typeCast<CategoryXAxis>((<any>CategoryXAxis).$type, axis) !== null || (<Axis>axis).isDateTime) {
			return true;
		}
		return false;
	}
}


