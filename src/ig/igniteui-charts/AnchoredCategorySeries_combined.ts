/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { CategorySeries } from "./CategorySeries";
import { IIsCategoryBased, IIsCategoryBased_$type } from "./IIsCategoryBased";
import { IHasSingleValueCategory, IHasSingleValueCategory_$type } from "./IHasSingleValueCategory";
import { IHasCategoryTrendline, IHasCategoryTrendline_$type } from "./IHasCategoryTrendline";
import { IHasTrendline } from "./IHasTrendline";
import { ITrendLineSeries, ITrendLineSeries_$type } from "./ITrendLineSeries";
import { IAnchoredCategorySeriesInteractionManager, IAnchoredCategorySeriesInteractionManager_$type } from "./IAnchoredCategorySeriesInteractionManager";
import { DVContainer } from "igniteui-core/DVContainer";
import { Type, Base, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point, String_$type, enumGetBox, EnumUtil, Number_$type, typeGetValue, typeCast, Point_$type, markType, PointUtil } from "igniteui-core/type";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Series } from "./Series";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { Brush } from "igniteui-core/Brush";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { CategoryFrame } from "./CategoryFrame";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { ICategoryScaler, ICategoryScaler_$type } from "./ICategoryScaler";
import { IScaler, IScaler_$type } from "./IScaler";
import { IBucketizer } from "./IBucketizer";
import { CategorySeriesView } from "./CategorySeriesView";
import { IPreparesCategoryTrendline } from "./IPreparesCategoryTrendline";
import { CategorySeriesMarkerCollisionAvoidance, CategorySeriesMarkerCollisionAvoidance_$type } from "./CategorySeriesMarkerCollisionAvoidance";
import { ConsolidatedItemHitTestBehavior, ConsolidatedItemHitTestBehavior_$type } from "./ConsolidatedItemHitTestBehavior";
import { SeriesView } from "./SeriesView";
import { CategoryFramePreparer } from "./CategoryFramePreparer";
import { Rect } from "igniteui-core/Rect";
import { Axis } from "./Axis";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { List$1 } from "igniteui-core/List$1";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { NumericAxisBase } from "./NumericAxisBase";
import { ITrendLineManager } from "./ITrendLineManager";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { AxisRange } from "./AxisRange";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { NumericYAxis } from "./NumericYAxis";
import { ScalerParams } from "./ScalerParams";
import { PointCollection } from "igniteui-core/PointCollection";
import { Clipper } from "igniteui-core/Clipper";
import { FramePreparer } from "./FramePreparer";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { MarkerSeries } from "./MarkerSeries";
import { CategoryMarkerManager } from "./CategoryMarkerManager";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { IDetectsCollisions } from "./IDetectsCollisions";
import { CollisionAvoider } from "./CollisionAvoider";
import { NonCollisionAvoider } from "./NonCollisionAvoider";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { SeriesViewer } from "./SeriesViewer";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { SRProvider } from "igniteui-core/SRProvider";
import { truncate, isNaN_ } from "igniteui-core/number";
import { CategoryTrendLineManagerFactory } from "./CategoryTrendLineManagerFactory";
import { Marker } from "./Marker";
import { Pool$1 } from "igniteui-core/Pool$1";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Polyline } from "igniteui-core/Polyline";
import { Shape } from "igniteui-core/Shape";

/**
 * @hidden 
 */
export abstract class AnchoredCategorySeries extends CategorySeries implements IIsCategoryBased, IHasSingleValueCategory, IHasCategoryTrendline, ITrendLineSeries {
	static $t: Type = markType(AnchoredCategorySeries, 'AnchoredCategorySeries', (<any>CategorySeries).$type, [IIsCategoryBased_$type, IHasSingleValueCategory_$type, IHasCategoryTrendline_$type, ITrendLineSeries_$type]);
	private _anchoredCategorySeriesInteractionManager: IAnchoredCategorySeriesInteractionManager = null;
	get anchoredCategorySeriesInteractionManager(): IAnchoredCategorySeriesInteractionManager {
		if (this._anchoredCategorySeriesInteractionManager == null) {
			this._anchoredCategorySeriesInteractionManager = <IAnchoredCategorySeriesInteractionManager><any>DVContainer.instance.createInstance(IAnchoredCategorySeriesInteractionManager_$type, () => this.res.dataChart_InteractivityNotLoaded);
		}
		return this._anchoredCategorySeriesInteractionManager;
	}
	private _anchoredView: AnchoredCategorySeriesView;
	get anchoredView(): AnchoredCategorySeriesView {
		return this._anchoredView;
	}
	set anchoredView(value: AnchoredCategorySeriesView) {
		this._anchoredView = value;
	}
	getHostReferenceValue(): number {
		return this.getReferenceValue();
	}
	protected createView(): SeriesView {
		let view = new AnchoredCategorySeriesView(this);
		return view;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.anchoredView = <AnchoredCategorySeriesView>view;
	}
	private _shouldSuspendChangedNotification: boolean = false;
	get shouldSuspendChangedNotification(): boolean {
		return this._shouldSuspendChangedNotification;
	}
	set shouldSuspendChangedNotification(value: boolean) {
		this._shouldSuspendChangedNotification = value;
	}
	constructor() {
		super();
		this.framePreparer = new CategoryFramePreparer(1, this, this.categoryView, this, this, this.categoryView.bucketCalculator);
	}
	get valueMemberPath(): string {
		return <string>this.getValue(AnchoredCategorySeries.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(AnchoredCategorySeries.valueMemberPathProperty, value);
	}
	static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == AnchoredCategorySeries.valueMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.valueMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(AnchoredCategorySeries.valueMemberPathPropertyName, String_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(AnchoredCategorySeries.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	get valueColumn(): IFastItemColumn$1<number> {
		return this._valueColumn;
	}
	set valueColumn(value: IFastItemColumn$1<number>) {
		if (this._valueColumn != value) {
			let oldValueColumn: IFastItemColumn$1<number> = this._valueColumn;
			this._valueColumn = value;
			if (!this.shouldSuspendChangedNotification) {
				this.raisePropertyChanged(AnchoredCategorySeries.valueColumnPropertyName, oldValueColumn, this._valueColumn);
			}
		}
	}
	private _valueColumn: IFastItemColumn$1<number> = null;
	static readonly valueColumnPropertyName: string = "ValueColumn";
	get trendLineType(): TrendLineType {
		return EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, this.getValue(AnchoredCategorySeries.trendLineTypeProperty));
	}
	set trendLineType(value: TrendLineType) {
		this.setValue(AnchoredCategorySeries.trendLineTypeProperty, enumGetBox<TrendLineType>(TrendLineType_$type, value));
	}
	static readonly trendLineTypeProperty: DependencyProperty = DependencyProperty.register(Series.trendLineTypePropertyName, TrendLineType_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, enumGetBox<TrendLineType>(TrendLineType_$type, TrendLineType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLineTypePropertyName, e.oldValue, e.newValue)));
	get trendLineBrush(): Brush {
		return <Brush>this.getValue(AnchoredCategorySeries.trendLineBrushProperty);
	}
	set trendLineBrush(value: Brush) {
		this.setValue(AnchoredCategorySeries.trendLineBrushProperty, value);
	}
	static readonly trendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineBrushPropertyName, (<any>Brush).$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLineBrushPropertyName, e.oldValue, e.newValue)));
	get actualTrendLineBrush(): Brush {
		return <Brush>this.getValue(AnchoredCategorySeries.actualTrendLineBrushProperty);
	}
	set actualTrendLineBrush(value: Brush) {
		this.setValue(AnchoredCategorySeries.actualTrendLineBrushProperty, value);
	}
	static readonly actualTrendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineActualBrushPropertyName, (<any>Brush).$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLineActualBrushPropertyName, e.oldValue, e.newValue)));
	get trendLineThickness(): number {
		return <number>this.getValue(AnchoredCategorySeries.trendLineThicknessProperty);
	}
	set trendLineThickness(value: number) {
		this.setValue(AnchoredCategorySeries.trendLineThicknessProperty, value);
	}
	static readonly trendLineThicknessProperty: DependencyProperty = DependencyProperty.register(Series.trendLineThicknessPropertyName, Number_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, 1.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLineThicknessPropertyName, e.oldValue, e.newValue)));
	get trendLineDashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(AnchoredCategorySeries.trendLineDashCapProperty));
	}
	set trendLineDashCap(value: PenLineCap) {
		this.setValue(AnchoredCategorySeries.trendLineDashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly trendLineDashCapProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashCapPropertyName, PenLineCap_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLineDashCapPropertyName, e.oldValue, e.newValue)));
	get trendLineDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(AnchoredCategorySeries.trendLineDashArrayProperty);
	}
	set trendLineDashArray(value: DoubleCollection) {
		this.setValue(AnchoredCategorySeries.trendLineDashArrayProperty, value);
	}
	static readonly trendLineDashArrayProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLineDashArrayPropertyName, e.oldValue, e.newValue)));
	get trendLinePeriod(): number {
		return typeGetValue(this.getValue(AnchoredCategorySeries.trendLinePeriodProperty));
	}
	set trendLinePeriod(value: number) {
		this.setValue(AnchoredCategorySeries.trendLinePeriodProperty, value);
	}
	static readonly trendLinePeriodProperty: DependencyProperty = DependencyProperty.register(Series.trendLinePeriodPropertyName, Number_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, 7, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLinePeriodPropertyName, e.oldValue, e.newValue)));
	static readonly trendLineZIndexProperty: DependencyProperty = DependencyProperty.register(Series.trendLineZIndexPropertyName, Number_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, 1001, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>sender).raisePropertyChanged(Series.trendLineZIndexPropertyName, e.oldValue, e.newValue)));
	get trendLineZIndex(): number {
		return typeGetValue(this.getValue(AnchoredCategorySeries.trendLineZIndexProperty));
	}
	set trendLineZIndex(value: number) {
		this.setValue(AnchoredCategorySeries.trendLineZIndexProperty, value);
	}
	scrollIntoView(item: any): boolean {
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let xAxis: Axis = this.fetchXAxis();
		let yAxis: Axis = this.fetchYAxis();
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		let offset = xAxis != null ? this.framePreparer.getOffset(typeCast<ICategoryScaler>(ICategoryScaler_$type, xAxis), unitRect, unitRect, effectiveViewportRect) : 0;
		return this.anchoredCategorySeriesInteractionManager.scrollIntoView(this, this.valueColumn, xAxis, yAxis, offset, item);
	}
	protected getCategoryItemsHelper(orderedStartIndex: number, orderedEndIndex: number, axis: Axis): any[] {
		if (orderedEndIndex < orderedStartIndex || orderedStartIndex < 0 || orderedStartIndex > this.valueColumn.count || orderedEndIndex < 0 || orderedEndIndex > this.valueColumn.count || axis == null) {
			return null;
		}
		let ret: any[] = <any[]>new Array((orderedEndIndex - orderedStartIndex) + 1);
		let isSorting: boolean = axis.isSorting;
		let sortedIndices: List$1<number> = null;
		if (isSorting) {
			sortedIndices = (<ISortingAxis><any>axis).sortedIndices;
		}
		for (let i = orderedStartIndex; i <= orderedEndIndex; i++) {
			let ind = i;
			if (isSorting) {
				ind = sortedIndices._inner[ind];
			}
			ret[i - orderedStartIndex] = this.fastItemsSource.item(i);
		}
		return ret;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.anchoredView.hasTrendLineManager && this.anchoredView.trendLineManager.propertyUpdated(sender, propertyName, oldValue, newValue)) {
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
		}
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.valueColumn);
				this.valueColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
			}
			let yaxis = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, this.fetchYAxis());
			if (yaxis != null && !yaxis.updateRange()) {
				this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case AnchoredCategorySeries.valueMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.valueColumn);
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
			}
			this.cachedValueMemberPath = this.valueMemberPath;
			break;

			case AnchoredCategorySeries.valueColumnPropertyName:
			if (this.anchoredView.hasTrendLineManager) {
				this.anchoredView.trendLineManager.reset();
			}
			let yaxis2 = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, this.fetchYAxis());
			if (yaxis2 != null && !yaxis2.updateRange()) {
				this.anchoredView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			this.updateFinalValue();
			this.updatePercentChange();
			break;

			case Series.trendLineBrushPropertyName:
			this.updateIndexedProperties();
			break;

			case AnchoredCategorySeries.errorBarSettingsPropertyName:
			this.renderSeries(false);
			break;

			case Series.trendLineTypePropertyName:
			this.notifyThumbnailAppearanceChanged();
			break;

			case AnchoredCategorySeries.markerCollisionAvoidancePropertyName:
			this.renderSeries(false);
			break;

		}

	}
	getRange(axis: Axis): AxisRange {
		if (this.valueColumn == null || this.valueColumn.count == 0) {
			return null;
		}
		if (axis == this.fetchXAxis()) {
			return new AxisRange(0, this.valueColumn.count - 1);
		}
		if (axis == this.fetchYAxis()) {
			return new AxisRange(this.valueColumn.minimum, this.valueColumn.maximum);
		}
		return null;
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
		this.updateFinalValue();
		this.updatePercentChange();
	}
	protected getTransitionFromZeroValue(): number {
		return this.getWorldZeroValue(this.categoryView);
	}
	getWorldZeroValue(view: CategorySeriesView): number {
		let value: number = 0;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let yAxis: NumericYAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.fetchYAxis());
		if (!windowRect.isEmpty && !viewportRect.isEmpty && yAxis != null) {
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yAxis.isInverted, effectiveViewportRect);
			if (yAxis.isVertical) {
				p.referenceValue = this.getReferenceValue();
			}
			value = yAxis.getScaledValue(yAxis.referenceValue, p);
		}
		return value;
	}
	terminatePolygon(polygon: PointCollection, count: number, view: CategorySeriesView): void {
		let worldZeroValue: number = this.getWorldZeroValue(view);
		if (polygon.count > 0) {
			let zero: number = worldZeroValue;
			polygon.add(<Point>{ $type: Point_$type, x: polygon._inner[polygon.count - 1].x, y: zero });
			polygon.add(<Point>{ $type: Point_$type, x: polygon._inner[0].x, y: zero });
		}
	}
	getLineClipper(buckets: List$1<number[]>, endIndex: number, viewportRect: Rect, windowRect: Rect): Clipper {
		return this.getLineClipper1(buckets, endIndex, viewportRect, windowRect, false);
	}
	getLineClipper1(buckets: List$1<number[]>, endIndex: number, viewportRect: Rect, windowRect: Rect, closed: boolean): Clipper {
		return CategorySeries.getClipper(buckets, endIndex, viewportRect, windowRect, closed);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		let anchoredView = <AnchoredCategorySeriesView>view;
		if (this.valueColumn == null || this.valueColumn.count == 0 || anchoredView.bucketCalculator.bucketSize < 1) {
			isValid = false;
		}
		return isValid;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let catView = <AnchoredCategorySeriesView>view;
		catView.hideErrorBars();
		if (catView.hasTrendLineManager) {
			catView.trendLineManager.clearPoints();
		}
	}
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.prepareFrame(frame, view);
		this.getFramePreparer(view).prepareFrame(frame, view);
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let anchoredView: AnchoredCategorySeriesView = typeCast<AnchoredCategorySeriesView>((<any>AnchoredCategorySeriesView).$type, view);
		anchoredView.markerAppearanceHandled = true;
		if (anchoredView.hasTrendLineManager) {
			anchoredView.trendLineManager.rasterizeTrendLine(frame.trend);
		}
		if (this.shouldDisplayMarkers()) {
			CategoryMarkerManager.rasterizeMarkers(this, frame.markers, view.markers, this.useLightweightMarkers);
			this.colorizeMarkers(view, frame);
			view.renderMarkers();
		}
		this.renderErrorBars(frame, view);
	}
	private _alternateFrame: CategoryFrame = null;
	get alternateFrame(): CategoryFrame {
		return this._alternateFrame;
	}
	set alternateFrame(value: CategoryFrame) {
		this._alternateFrame = value;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let categorySeriesView: CategorySeriesView = <CategorySeriesView>view;
		categorySeriesView.bucketCalculator.calculateBuckets(this.resolution);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(categorySeriesView)) {
			return;
		}
		if (this.alternateFrame == null) {
			this.alternateFrame = new CategoryFrame(3);
		}
		this.alternateFrame.clearFrame();
		this.prepareFrame(this.alternateFrame, categorySeriesView);
		this.renderFrame(this.alternateFrame, categorySeriesView);
	}
	renderErrorBars(frame: CategoryFrame, view: CategorySeriesView): void {
	}
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.index < 0) {
			return;
		}
		this.anchoredView.resetTrendlineBrush();
		if (this.trendLineBrush != null) {
			this.anchoredView.bindTrendlineBrushToActualTrendlineBrush();
		} else {
			this.anchoredView.bindTrendlineBrushToActualBrush();
		}
	}
	item(sender: any, point: Point): any {
		if (this.anchoredView.hasTrendLineManager && sender == this.anchoredView.trendLineManager.trendPolyline) {
			return null;
		}
		return super.item(sender, point);
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
		return this.anchoredView.bucketCalculator;
	}
	get currentMode2Index(): number {
		return this.getMode2Index();
	}
	provideCollisionDetector(): IDetectsCollisions {
		if (this.markerCollisionAvoidance == CategorySeriesMarkerCollisionAvoidance.Omit) {
			return new CollisionAvoider();
		}
		return NonCollisionAvoider.instance;
	}
	get trendlinePreparer(): IPreparesCategoryTrendline {
		return this.anchoredView.hasTrendLineManager ? <IPreparesCategoryTrendline><any><any>this.anchoredView.trendLineManager : null;
	}
	private _cachedValueMemberPath: string = null;
	protected get cachedValueMemberPath(): string {
		return this._cachedValueMemberPath;
	}
	protected set cachedValueMemberPath(value: string) {
		this._cachedValueMemberPath = value;
	}
	abstract setXAxis(xAxis: Axis): void;
	abstract setYAxis(yAxis: Axis): void;
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		if (this.anchoredView.hasTrendLineManager) {
			this.seriesVisualDataManager.exportTrendlineData(this, svd, this.anchoredView.trendLineManager.trendPolyline);
		}
	}
	private static readonly markerCollisionAvoidancePropertyName: string = "MarkerCollisionAvoidance";
	static readonly markerCollisionAvoidanceProperty: DependencyProperty = DependencyProperty.register(AnchoredCategorySeries.markerCollisionAvoidancePropertyName, CategorySeriesMarkerCollisionAvoidance_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, enumGetBox<CategorySeriesMarkerCollisionAvoidance>(CategorySeriesMarkerCollisionAvoidance_$type, CategorySeriesMarkerCollisionAvoidance.Omit), (oo: DependencyObject, ee: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>oo).raisePropertyChanged(AnchoredCategorySeries.markerCollisionAvoidancePropertyName, ee.oldValue, ee.newValue)));
	get markerCollisionAvoidance(): CategorySeriesMarkerCollisionAvoidance {
		return EnumUtil.getEnumValue<CategorySeriesMarkerCollisionAvoidance>(CategorySeriesMarkerCollisionAvoidance_$type, this.getValue(AnchoredCategorySeries.markerCollisionAvoidanceProperty));
	}
	set markerCollisionAvoidance(value: CategorySeriesMarkerCollisionAvoidance) {
		this.setValue(AnchoredCategorySeries.markerCollisionAvoidanceProperty, enumGetBox<CategorySeriesMarkerCollisionAvoidance>(CategorySeriesMarkerCollisionAvoidance_$type, value));
	}
	getItem(world: Point): any {
		let xAxis: Axis = this.fetchXAxis();
		let yAxis: Axis = this.fetchYAxis();
		return this.anchoredCategorySeriesInteractionManager.getItem(this, world, this.getBucketSize(this.view), this.valueColumn, xAxis, yAxis, this.consolidatedItemHitTestBehavior == ConsolidatedItemHitTestBehavior.NearestY, (pp: Point) => super.getItem(pp));
	}
	private static readonly consolidatedItemHitTestBehaviorPropertyName: string = "ConsolidatedItemHitTestBehavior";
	static readonly consolidatedItemHitTestBehaviorProperty: DependencyProperty = DependencyProperty.register(AnchoredCategorySeries.consolidatedItemHitTestBehaviorPropertyName, ConsolidatedItemHitTestBehavior_$type, (<any>AnchoredCategorySeries).$type, new PropertyMetadata(2, enumGetBox<ConsolidatedItemHitTestBehavior>(ConsolidatedItemHitTestBehavior_$type, ConsolidatedItemHitTestBehavior.Basic), (oo: DependencyObject, ee: DependencyPropertyChangedEventArgs) => (<AnchoredCategorySeries>oo).raisePropertyChanged(AnchoredCategorySeries.consolidatedItemHitTestBehaviorPropertyName, ee.oldValue, ee.newValue)));
	get consolidatedItemHitTestBehavior(): ConsolidatedItemHitTestBehavior {
		return EnumUtil.getEnumValue<ConsolidatedItemHitTestBehavior>(ConsolidatedItemHitTestBehavior_$type, this.getValue(AnchoredCategorySeries.consolidatedItemHitTestBehaviorProperty));
	}
	set consolidatedItemHitTestBehavior(value: ConsolidatedItemHitTestBehavior) {
		this.setValue(AnchoredCategorySeries.consolidatedItemHitTestBehaviorProperty, enumGetBox<ConsolidatedItemHitTestBehavior>(ConsolidatedItemHitTestBehavior_$type, value));
	}
	get mayContainUnknowns(): boolean {
		return this.valueColumn == null || this.valueColumn.mayContainUnknowns;
	}
	getReferenceValue(): number {
		return Series.getReferenceValue1(this.valueColumn, typeCast<ISortingAxis>(ISortingAxis_$type, this.fetchXAxis()));
	}
	getVisibleRange(): AxisRange {
		if (this.valueColumn == null) {
			return null;
		}
		let xAxis = this.getCategoryAxis();
		let xParams: ScalerParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.seriesViewer.viewportRect, xAxis.isInverted, this.getEffectiveViewport());
		let left: number = (xAxis.getUnscaledValue(this.seriesViewer.viewportRect.left, xParams));
		let right: number = (xAxis.getUnscaledValue(this.seriesViewer.viewportRect.right, xParams));
		let sorting: ISortingAxis = null;
		if (xAxis.isSorting) {
			sorting = <ISortingAxis><any>xAxis;
			left = sorting.getIndexClosestToUnscaledValue(left);
			right = sorting.getIndexClosestToUnscaledValue(right);
		} else {
			left = Math.floor(left);
			right = Math.ceil(right);
		}
		if (isNaN_(left) || isNaN_(right)) {
			return null;
		}
		left = Math.max(0, Math.min(this.valueColumn.count - 1, left));
		right = Math.max(0, Math.min(this.valueColumn.count - 1, right));
		let min: number = 1.7976931348623157E+308;
		let max: number = -1.7976931348623157E+308;
		for (let ii: number = <number>truncate(left); ii <= <number>truncate(right); ii++) {
			let index: number = ii;
			if (sorting != null) {
				index = sorting.sortedIndices._inner[ii];
			}
			min = Math.min(min, this.valueColumn.item(index));
			max = Math.max(max, this.valueColumn.item(index));
		}
		return new AxisRange(min, max);
	}
	private updateFinalValue(): void {
		this.finalValue = this.valueColumn == null || this.valueColumn.count == 0 ? NaN : this.valueColumn.item(this.valueColumn.count - 1);
	}
}

/**
 * @hidden 
 */
export class AnchoredCategoryBucketCalculator extends CategoryBucketCalculator {
	static $t: Type = markType(AnchoredCategoryBucketCalculator, 'AnchoredCategoryBucketCalculator', (<any>CategoryBucketCalculator).$type);
	constructor(view: AnchoredCategorySeriesView) {
		super(view);
		this.anchoredView = view;
	}
	private _anchoredView: AnchoredCategorySeriesView = null;
	protected get anchoredView(): AnchoredCategorySeriesView {
		return this._anchoredView;
	}
	protected set anchoredView(value: AnchoredCategorySeriesView) {
		this._anchoredView = value;
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
		let min: number = 0;
		let max: number = 0;
		let first: boolean = true;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = column[i];
			if (!first) {
				if (!isNaN_(y)) {
					min = min < y ? min : y;
					max = max > y ? max : y;
				}
			} else {
				if (!isNaN_(y)) {
					min = y;
					max = y;
					first = false;
				}
			}
		}
		if (!first) {
			return <number[]>[ 0.5 * (i0 + i1), min, max ];
		}
		return <number[]>[ 0.5 * (i0 + i1), NaN, NaN ];
	}
	private _values: number[] = null;
	private _count: number = 0;
	cacheValues(): void {
		this._count = this.anchoredView.anchoredModel.valueColumn.count;
		this._values = <number[]>this.anchoredView.anchoredModel.valueColumn.asArray();
	}
	unCacheValues(): void {
		this._values = null;
	}
}

/**
 * @hidden 
 */
export class AnchoredCategorySeriesView extends CategorySeriesView {
	static $t: Type = markType(AnchoredCategorySeriesView, 'AnchoredCategorySeriesView', (<any>CategorySeriesView).$type);
	private _anchoredModel: AnchoredCategorySeries = null;
	get anchoredModel(): AnchoredCategorySeries {
		return this._anchoredModel;
	}
	set anchoredModel(value: AnchoredCategorySeries) {
		this._anchoredModel = value;
	}
	constructor(model: AnchoredCategorySeries) {
		super(model);
		this.anchoredModel = model;
	}
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
	resetTrendlineBrush(): void {
		this.anchoredModel.actualTrendLineBrush = null;
	}
	bindTrendlineBrushToActualTrendlineBrush(): void {
		this.anchoredModel.actualTrendLineBrush = this.anchoredModel.trendLineBrush;
	}
	bindTrendlineBrushToActualBrush(): void {
		this.anchoredModel.actualTrendLineBrush = this.anchoredModel.actualBrush;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new AnchoredCategoryBucketCalculator(this);
	}
	cacheValues(): void {
		this.bucketCalculator.cacheValues();
	}
	unCacheValues(): void {
		this.bucketCalculator.unCacheValues();
	}
	getMarkerBoundingBox(index: number): Rect {
		let marker = this.markers.item(index);
		return this.getBoundingBoxForMarker(marker);
	}
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		if (context.shouldRender) {
			if (this.anchoredModel.trendLineType != TrendLineType.None && !isHitContext) {
				let polyline: Polyline = this.trendLineManager.trendPolyline;
				polyline.strokeThickness = this.anchoredModel.trendLineThickness;
				polyline._stroke = this.anchoredModel.actualTrendLineBrush;
				polyline.strokeDashArray = this.anchoredModel.trendLineDashArray;
				polyline.strokeDashCap = <number>this.anchoredModel.trendLineDashCap;
				context.renderPolyline(polyline);
			}
		}
		super.renderMarkersOverride(context, isHitContext);
	}
	getDefaultTooltipTemplate(): string {
		return this.anchoredModel.anchoredCategorySeriesInteractionManager.getDefaultTooltipTemplate(this.model, this.anchoredModel.valueMemberPath);
	}
}


