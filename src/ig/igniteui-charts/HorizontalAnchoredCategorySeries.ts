/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { IHorizontalAnchoredCategorySeriesInteractionManager, IHorizontalAnchoredCategorySeriesInteractionManager_$type } from "./IHorizontalAnchoredCategorySeriesInteractionManager";
import { DVContainer } from "igniteui-core/DVContainer";
import { Type, Base, Point, ICollection$1, ICollection$1_$type, runOn, Point_$type, typeCast, EnumUtil, enumGetBox, markType, PointUtil } from "igniteui-core/type";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { NumericYAxis } from "./NumericYAxis";
import { NumericAxisBase } from "./NumericAxisBase";
import { CategoryMode, CategoryMode_$type } from "./CategoryMode";
import { Series } from "./Series";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { Rect } from "igniteui-core/Rect";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { MarkerSeries } from "./MarkerSeries";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { CategorySeries } from "./CategorySeries";
import { SeriesView } from "./SeriesView";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { ScalerParams } from "./ScalerParams";
import { SeriesViewer } from "./SeriesViewer";
import { Axis } from "./Axis";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { CategoryTrendLineManagerFactory } from "./CategoryTrendLineManagerFactory";
import { CategorySeriesView } from "./CategorySeriesView";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { CategoryXAxis } from "./CategoryXAxis";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { SRProvider } from "igniteui-core/SRProvider";

/**
 * @hidden 
 */
export abstract class HorizontalAnchoredCategorySeries extends AnchoredCategorySeries {
	static $t: Type = markType(HorizontalAnchoredCategorySeries, 'HorizontalAnchoredCategorySeries', (<any>AnchoredCategorySeries).$type);
	private _horizontalAnchoredCategorySeriesInteractionManager: IHorizontalAnchoredCategorySeriesInteractionManager = null;
	get horizontalAnchoredCategorySeriesInteractionManager(): IHorizontalAnchoredCategorySeriesInteractionManager {
		if (this._horizontalAnchoredCategorySeriesInteractionManager == null) {
			this._horizontalAnchoredCategorySeriesInteractionManager = <IHorizontalAnchoredCategorySeriesInteractionManager><any>DVContainer.instance.createInstance(IHorizontalAnchoredCategorySeriesInteractionManager_$type, () => this.res.dataChart_InteractivityNotLoaded);
		}
		return this._horizontalAnchoredCategorySeriesInteractionManager;
	}
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
	get xAxis(): CategoryAxisBase {
		return <CategoryAxisBase>this.getValue(HorizontalAnchoredCategorySeries.xAxisProperty);
	}
	set xAxis(value: CategoryAxisBase) {
		this.setValue(HorizontalAnchoredCategorySeries.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(HorizontalAnchoredCategorySeries.xAxisPropertyName, (<any>CategoryAxisBase).$type, (<any>HorizontalAnchoredCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HorizontalAnchoredCategorySeries>sender).raisePropertyChanged(HorizontalAnchoredCategorySeries.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(HorizontalAnchoredCategorySeries.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(HorizontalAnchoredCategorySeries.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(HorizontalAnchoredCategorySeries.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>HorizontalAnchoredCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HorizontalAnchoredCategorySeries>sender).raisePropertyChanged(HorizontalAnchoredCategorySeries.yAxisPropertyName, e.oldValue, e.newValue)));
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.Computational;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	getCategoryAxis(): CategoryAxisBase {
		return this.cachedXAxis;
	}
	getValueAxis(): NumericAxisBase {
		return this.cachedYAxis;
	}
	getSeriesValueMarkerBoundingBox(world: Point): Rect {
		if (this.currentFrame == null || this.currentFrame.markers.count == 0 || !this.hasMarkers || !this.shouldDisplayMarkers()) {
			return Rect.empty;
		}
		return this.horizontalAnchoredCategorySeriesInteractionManager.getSeriesValueMarkerBoundingBox(this, this.currentFrame.markers, world, runOn(this, this.getMarkerBoundingBox));
	}
	private getMarkerBoundingBox(index: number): Rect {
		return this.anchoredView.getMarkerBoundingBox(index);
	}
	protected testAreaOver(position: Point, snapPosition: Point, isFinger: boolean): boolean {
		return this.horizontalAnchoredCategorySeriesInteractionManager.testAreaOver(this, this.getValueAxis(), position, snapPosition, isFinger);
	}
	getHighStrokeSegments(position: Point): Point[][] {
		return this.horizontalAnchoredCategorySeriesInteractionManager.getHighStrokeSegments(this, this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), position);
	}
	getLowStrokeSegments(position: Point): Point[][] {
		return this.horizontalAnchoredCategorySeriesInteractionManager.getLowStrokeSegments(this, this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), position);
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testHighLowStrokeOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	getOffsetValue(): number {
		return this.framePreparer.getOffset(this.getCategoryAxis(), this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getCategoryWidth(): number {
		let effectiveViewport = this.getEffectiveViewport1(this.view);
		return this.getCategoryAxis().getCategorySize(this.view.windowRect, this.view.viewport, effectiveViewport);
	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.seriesViewer == null) {
			return NaN;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let categoryAxis = this.getCategoryAxis();
		let xParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.view.viewport, categoryAxis.isInverted, effectiveViewportRect);
		let offset = this.framePreparer.getOffset(categoryAxis, this.seriesViewer.actualWindowRect, this.view.viewport, effectiveViewportRect);
		return this.getSeriesValueHelper(this.valueColumn, world, categoryAxis, xParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.getCategoryAxis(), runOn(this, this.getExactUnsortedItemIndex), this.valueColumn);
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.getCategoryAxis(), runOn(this, this.getExactUnsortedItemIndex), this.valueColumn);
	}
	getDistanceToIndex(world: Point, index: number, axis: Axis, p: ScalerParams, offset: number): number {
		if (this.valueColumn == null) {
			return Number.POSITIVE_INFINITY;
		}
		return this.getDistanceToIndexHelper(world, index, this.getCategoryAxis(), p, offset, this.valueColumn.count, runOn(this, this.getExactUnsortedItemIndex));
	}
	getSeriesValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		if (this.getCategoryAxis() == null || this.getValueAxis() == null) {
			return <Point>{ $type: Point_$type, x: NaN, y: NaN };
		}
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.framePreparer.getOffset(this.getCategoryAxis(), this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.getValueAxis(), this.getCategoryAxis(), null, null, null);
	}
	fetchXAxis(): Axis {
		return this.cachedXAxis;
	}
	fetchYAxis(): Axis {
		return this.cachedYAxis;
	}
	setXAxis(xAxis: Axis): void {
		this.xAxis = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, xAxis);
	}
	setYAxis(yAxis: Axis): void {
		this.yAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, yAxis);
	}
	updateNumericAxisRange(): boolean {
		return this.cachedYAxis != null && this.cachedYAxis.updateRange();
	}
	private _cachedXAxis: CategoryAxisBase = null;
	protected get_cachedXAxis(): CategoryAxisBase {
		return this._cachedXAxis;
	}
	protected set_cachedXAxis(value: CategoryAxisBase): void {
		this._cachedXAxis = value;
	}
	protected get cachedXAxis(): CategoryAxisBase {
		return this.get_cachedXAxis();
	}
	protected set cachedXAxis(value: CategoryAxisBase) {
		this.set_cachedXAxis(value);
	}
	private _cachedYAxis: NumericAxisBase = null;
	protected get_cachedYAxis(): NumericAxisBase {
		return this._cachedYAxis;
	}
	protected set_cachedYAxis(value: NumericAxisBase): void {
		this._cachedYAxis = value;
	}
	protected get cachedYAxis(): NumericAxisBase {
		return this.get_cachedYAxis();
	}
	protected set cachedYAxis(value: NumericAxisBase) {
		this.set_cachedYAxis(value);
	}
	cacheXAxis(xAxis: CategoryAxisBase): void {
		this.cachedXAxis = xAxis;
	}
	cacheYAxis(yAxis: NumericYAxis): void {
		this.cachedYAxis = yAxis;
	}
	getCategoryItems(orderedStartIndex: number, orderedEndIndex: number): any[] {
		return this.getCategoryItemsHelper(orderedStartIndex, orderedEndIndex, this.cachedXAxis);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case HorizontalAnchoredCategorySeries.xAxisPropertyName:
			this.cacheXAxis(this.xAxis);
			if (this.anchoredView.hasTrendLineManager) {
				this.anchoredView.trendLineManager = CategoryTrendLineManagerFactory.selectManager(this.anchoredView.trendLineManager, this.cachedXAxis, this.rootCanvas, this, this.res);
			}
			break;

			case Series.trendLineTypePropertyName:
			let newType = EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, newValue);
			if (newType != TrendLineType.None) {
				this.anchoredView.trendLineManager = CategoryTrendLineManagerFactory.selectManager(this.anchoredView.trendLineManager, this.cachedXAxis, this.rootCanvas, this, this.res);
			}
			break;

		}

		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case HorizontalAnchoredCategorySeries.xAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.cacheXAxis(this.xAxis);
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
			}
			break;

			case HorizontalAnchoredCategorySeries.yAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.cacheYAxis(this.yAxis);
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.updateNumericAxisRange();
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
			}
			break;

			case HorizontalAnchoredCategorySeries.categoryModePropertyName:
			if (this.xAxis != null) {
				this.xAxis.spread(true);
			}
			break;

		}

	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		if (this.cachedXAxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, this.cachedXAxis) !== null) {
			(<ISortingAxis><any>this.cachedXAxis).notifyDataChanged();
		}
		switch (action) {
			case FastItemsSourceEventAction.Reset:
			if (this.cachedXAxis != null) {
				this.cachedXAxis.updateRange();
			}
			if (this.cachedYAxis != null && !this.cachedYAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Insert:
			if (this.cachedXAxis != null) {
				this.cachedXAxis.updateRange();
			}
			if (this.cachedYAxis != null && !this.cachedYAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Remove:
			if (this.cachedXAxis != null) {
				this.cachedXAxis.updateRange();
			}
			if (this.cachedYAxis != null && !this.cachedYAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Replace:
			if (this.cachedValueMemberPath != null && this.anchoredView.bucketCalculator.bucketSize > 0 && this.cachedYAxis != null && !this.cachedYAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Change:
			if (propertyName == this.cachedValueMemberPath) {
				if (this.cachedXAxis != null) {
					this.cachedXAxis.updateRange();
				}
				if (this.cachedYAxis != null && !this.cachedYAxis.updateRange()) {
					this.renderSeries(true);
				}
			}
			break;

		}

	}
	canUseAsXAxis(axis: any): boolean {
		if (typeCast<CategoryXAxis>((<any>CategoryXAxis).$type, axis) !== null || (<Axis>axis).isDateTime) {
			return true;
		}
		return false;
	}
	canUseAsYAxis(axis: any): boolean {
		if (typeCast<NumericYAxis>((<any>NumericYAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	private static readonly categoryModePropertyName: string = "CategoryMode";
	private _categoryMode: CategoryMode = <CategoryMode>0;
	get categoryMode(): CategoryMode {
		return this._categoryMode;
	}
	set categoryMode(value: CategoryMode) {
		let oldValue: CategoryMode = this.categoryMode;
		if (value != oldValue) {
			this._categoryMode = value;
			this.raisePropertyChanged(HorizontalAnchoredCategorySeries.categoryModePropertyName, enumGetBox<CategoryMode>(CategoryMode_$type, oldValue), enumGetBox<CategoryMode>(CategoryMode_$type, this.categoryMode));
		}
	}
}


