/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { NumericXAxis } from "./NumericXAxis";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryYAxis } from "./CategoryYAxis";
import { IVerticalAnchoredCategorySeriesInteractionManager, IVerticalAnchoredCategorySeriesInteractionManager_$type } from "./IVerticalAnchoredCategorySeriesInteractionManager";
import { DVContainer } from "igniteui-core/DVContainer";
import { Type, Base, Point, ICollection$1, ICollection$1_$type, runOn, typeCast, EnumUtil, markType } from "igniteui-core/type";
import { Series } from "./Series";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { NumericAxisBase } from "./NumericAxisBase";
import { CategorySeries } from "./CategorySeries";
import { SeriesView } from "./SeriesView";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { Axis } from "./Axis";
import { ScalerParams } from "./ScalerParams";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { Rect } from "igniteui-core/Rect";
import { MarkerSeries } from "./MarkerSeries";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { SeriesViewer } from "./SeriesViewer";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { CategorySeriesView } from "./CategorySeriesView";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { CategoryTrendLineManagerFactory } from "./CategoryTrendLineManagerFactory";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { SRProvider } from "igniteui-core/SRProvider";
import { truncate } from "igniteui-core/number";

/**
 * @hidden 
 */
export abstract class VerticalAnchoredCategorySeries extends AnchoredCategorySeries {
	static $t: Type = markType(VerticalAnchoredCategorySeries, 'VerticalAnchoredCategorySeries', (<any>AnchoredCategorySeries).$type);
	get xAxis(): NumericXAxis {
		return <NumericXAxis>this.getValue(VerticalAnchoredCategorySeries.xAxisProperty);
	}
	set xAxis(value: NumericXAxis) {
		this.setValue(VerticalAnchoredCategorySeries.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(VerticalAnchoredCategorySeries.xAxisPropertyName, (<any>NumericXAxis).$type, (<any>VerticalAnchoredCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<VerticalAnchoredCategorySeries>sender).raisePropertyChanged(VerticalAnchoredCategorySeries.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): CategoryYAxis {
		return <CategoryYAxis>this.getValue(VerticalAnchoredCategorySeries.yAxisProperty);
	}
	set yAxis(value: CategoryYAxis) {
		this.setValue(VerticalAnchoredCategorySeries.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(VerticalAnchoredCategorySeries.yAxisPropertyName, (<any>CategoryYAxis).$type, (<any>VerticalAnchoredCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<VerticalAnchoredCategorySeries>sender).raisePropertyChanged(VerticalAnchoredCategorySeries.yAxisPropertyName, e.oldValue, e.newValue)));
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
	private _verticalAnchoredCategorySeriesInteractionManager: IVerticalAnchoredCategorySeriesInteractionManager = null;
	get verticalAnchoredCategorySeriesInteractionManager(): IVerticalAnchoredCategorySeriesInteractionManager {
		if (this._verticalAnchoredCategorySeriesInteractionManager == null) {
			this._verticalAnchoredCategorySeriesInteractionManager = <IVerticalAnchoredCategorySeriesInteractionManager><any>DVContainer.instance.createInstance(IVerticalAnchoredCategorySeriesInteractionManager_$type, () => this.res.dataChart_InteractivityNotLoaded);
		}
		return this._verticalAnchoredCategorySeriesInteractionManager;
	}
	protected get_isVertical(): boolean {
		return true;
	}
	getCategoryAxis(): CategoryAxisBase {
		return this.yAxis;
	}
	getValueAxis(): NumericAxisBase {
		return this.xAxis;
	}
	getOffsetValue(): number {
		return this.framePreparer.getOffset(this.getCategoryAxis(), this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getCategoryWidth(): number {
		return this.yAxis.getCategorySize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getNextOrExactIndexHelper(world, skipUnknowns, this.getCategoryAxis(), runOn(this, this.getExactUnsortedItemIndex), this.valueColumn);
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return this.getPreviousOrExactIndexHelper(world, skipUnknowns, this.getCategoryAxis(), runOn(this, this.getExactUnsortedItemIndex), this.valueColumn);
	}
	getDistanceToIndex(world: Point, index: number, axis: Axis, p: ScalerParams, offset: number): number {
		if (this.valueColumn == null) {
			return Number.POSITIVE_INFINITY;
		}
		return this.getDistanceToIndexHelper(world, index, this.yAxis, p, offset, this.valueColumn.count, runOn(this, this.getExactUnsortedItemIndex));
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.Computational;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	getSeriesValueMarkerBoundingBox(world: Point): Rect {
		if (!this.hasMarkers || !this.shouldDisplayMarkers()) {
			return Rect.empty;
		}
		return this.verticalAnchoredCategorySeriesInteractionManager.getSeriesValueMarkerBoundingBox(this, this.currentFrame.markers, world, runOn(this, this.getMarkerBoundingBox));
	}
	private getMarkerBoundingBox(index: number): Rect {
		return this.anchoredView.getMarkerBoundingBox(index);
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
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		if (this.seriesViewer == null) {
			return NaN;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let categoryAxis = this.getCategoryAxis();
		let yParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.view.viewport, categoryAxis.isInverted, effectiveViewportRect);
		let offset = this.framePreparer.getOffset(categoryAxis, this.seriesViewer.actualWindowRect, this.view.viewport, effectiveViewportRect);
		return this.getSeriesValueHelper(this.valueColumn, world, categoryAxis, yParams, offset, runOn(this, this.getExactUnsortedItemIndex), useInterpolation, skipUnknowns);
	}
	getSeriesValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		let categoryAxis = this.getCategoryAxis();
		return this.getSeriesValuePositionHelper(world, useInterpolation, skipUnknowns, this.framePreparer.getOffset(categoryAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view)), this.getValueAxis(), categoryAxis, null, null, null);
	}
	fetchXAxis(): Axis {
		return this.xAxis;
	}
	fetchYAxis(): Axis {
		return this.yAxis;
	}
	setXAxis(xAxis: Axis): void {
		this.xAxis = typeCast<NumericXAxis>((<any>NumericXAxis).$type, xAxis);
	}
	setYAxis(yAxis: Axis): void {
		this.yAxis = typeCast<CategoryYAxis>((<any>CategoryYAxis).$type, yAxis);
	}
	updateNumericAxisRange(): boolean {
		return this.xAxis != null && this.xAxis.updateRange();
	}
	getCategoryItems(orderedStartIndex: number, orderedEndIndex: number): any[] {
		return this.getCategoryItemsHelper(orderedStartIndex, orderedEndIndex, this.yAxis);
	}
	getExactItemIndex(world: Point): number {
		return this.verticalAnchoredCategorySeriesInteractionManager.getExactItemIndex(this, world);
	}
	getExactUnsortedItemIndex(world: Point): number {
		return this.getExactUnsortedItemIndexHelper(world, this.getCategoryAxis());
	}
	getItemIndex(world: Point): number {
		return <number>truncate(Math.round(this.getExactItemIndex(world)));
	}
	getItem(world: Point): any {
		let index: number = this.getItemIndex(world);
		return index >= 0 && this.fastItemsSource != null && index < this.fastItemsSource.count ? this.fastItemsSource.item(index) : null;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case VerticalAnchoredCategorySeries.xAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
			}
			break;

			case VerticalAnchoredCategorySeries.yAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.updateNumericAxisRange();
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
			}
			break;

			case Series.trendLineTypePropertyName:
			let newType = EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, newValue);
			if (newType != TrendLineType.None) {
				this.anchoredView.trendLineManager = CategoryTrendLineManagerFactory.selectManager(this.anchoredView.trendLineManager, this.yAxis, this.rootCanvas, this, this.res);
			}
			break;

		}

	}
	canUseAsYAxis(axis: any): boolean {
		if (typeCast<CategoryYAxis>((<any>CategoryYAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	canUseAsXAxis(axis: any): boolean {
		if (typeCast<NumericXAxis>((<any>NumericXAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
}


