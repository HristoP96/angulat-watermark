/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EventArgs, Base, Type, markType, Point, Point_$type, typeCast, PointUtil, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Number_$type, ValueType, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, runOn, delegateCombine, fromEnum, Boolean_$type, enumGetBox, EnumUtil, fromEn, String_$type, getInstanceType, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, Array_$type, toNullable, TypeRegistrar } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { Style } from "igniteui-core/Style";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { Series } from "./Series";
import { List$1 } from "igniteui-core/List$1";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { CategorySeries } from "./CategorySeries";
import { NumericAxisBase } from "./NumericAxisBase";
import { ISupportsMarkers, ISupportsMarkers_$type } from "./ISupportsMarkers";
import { CategoryFrame } from "./CategoryFrame";
import { IDetectsCollisions } from "./IDetectsCollisions";
import { Rect } from "igniteui-core/Rect";
import { CategorySeriesView } from "./CategorySeriesView";
import { FramePreparer } from "./FramePreparer";
import { PointCollection } from "igniteui-core/PointCollection";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { SeriesView } from "./SeriesView";
import { Axis } from "./Axis";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { ScalerParams } from "./ScalerParams";
import { AxisRange } from "./AxisRange";
import { IChartLegend } from "igniteui-core/IChartLegend";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { ITrendLineManager } from "./ITrendLineManager";
import { CategoryBucketCalculator } from "./CategoryBucketCalculator";
import { RenderSurface } from "./RenderSurface";
import { isNaN_, isInfinity, truncate } from "igniteui-core/number";
import { Control } from "igniteui-core/Control";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { Path } from "igniteui-core/Path";
import { MarkerSeries } from "./MarkerSeries";
import { CategoryMode } from "./CategoryMode";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { XamDataChart } from "./XamDataChart";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { NumericYAxis } from "./NumericYAxis";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { DataContext } from "igniteui-core/DataContext";
import { SeriesViewer } from "./SeriesViewer";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { IScaler, IScaler_$type } from "./IScaler";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { IIsCategoryBased, IIsCategoryBased_$type } from "./IIsCategoryBased";
import { Marker } from "./Marker";
import { CategoryMarkerManager } from "./CategoryMarkerManager";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { dateMinValue, dateMaxValue } from "igniteui-core/date";
import { NumericXAxis } from "./NumericXAxis";
import { CategoryYAxis } from "./CategoryYAxis";
import { AnchoredCategoryBucketCalculator } from "./AnchoredCategoryBucketCalculator";
import { IStacked100Series, IStacked100Series_$type } from "./IStacked100Series";
import { SplineSeriesBase } from "./SplineSeriesBase";
import { CollisionAvoider } from "./CollisionAvoider";
import { ContentControl } from "igniteui-core/ContentControl";
import { SafeSortedReadOnlyDoubleCollection } from "./SafeSortedReadOnlyDoubleCollection";
import { Numeric } from "igniteui-core/Numeric";
import { SplineType } from "./SplineType";
import { ICategoryScaler, ICategoryScaler_$type } from "./ICategoryScaler";
import { IBucketizer } from "./IBucketizer";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { SeriesViewerView } from "./SeriesViewerView";
import { CategoryFramePreparer } from "./CategoryFramePreparer";
import { SyncLink } from "./SyncLink";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { XamDataChartView } from "./XamDataChartView";
import { CategoryXAxis } from "./CategoryXAxis";
import { IBarSeries, IBarSeries_$type } from "./IBarSeries";
import { Debug } from "igniteui-core/Debug";
import { Color } from "igniteui-core/Color";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { IProvidesViewport } from "./IProvidesViewport";
import { ISupportsErrorBars } from "./ISupportsErrorBars";
import { ValuesHolder } from "./ValuesHolder";
import { PreparationParams } from "./PreparationParams";
import { SingleValuesHolder } from "./SingleValuesHolder";
import { IHasSingleValueCategory } from "./IHasSingleValueCategory";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { IDateTimeAxis } from "./IDateTimeAxis";
import { stringIsNullOrEmpty } from "igniteui-core/string";
import { SplineSeriesBaseView } from "./SplineSeriesBaseView";
import { Canvas } from "igniteui-core/Canvas";
import { Panel } from "igniteui-core/Panel";
import { UIElement } from "igniteui-core/UIElement";
import { PlatformConstants } from "igniteui-core/PlatformConstants";

/**
 * @hidden 
 */
export class StackedSeriesCreatedEventArgs extends EventArgs {
	static $t: Type = markType(StackedSeriesCreatedEventArgs, 'StackedSeriesCreatedEventArgs', (<any>EventArgs).$type);
	constructor(series: StackedFragmentSeries) {
		super();
		this.series = series;
	}
	private _series: StackedFragmentSeries = null;
	get series(): StackedFragmentSeries {
		return this._series;
	}
	set series(value: StackedFragmentSeries) {
		this._series = value;
	}
	get brush(): Brush {
		return this.series.brush;
	}
	set brush(value: Brush) {
		this.series.brush = value;
	}
	get legendItemTemplate(): DataTemplate {
		return this.series.legendItemTemplate;
	}
	set legendItemTemplate(value: DataTemplate) {
		this.series.legendItemTemplate = value;
	}
	get legendItemBadgeTemplate(): DataTemplate {
		return this.series.legendItemBadgeTemplate;
	}
	set legendItemBadgeTemplate(value: DataTemplate) {
		this.series.legendItemBadgeTemplate = value;
	}
	get legendItemVisibility(): Visibility {
		return this.series.legendItemVisibility;
	}
	set legendItemVisibility(value: Visibility) {
		this.series.legendItemVisibility = value;
	}
	get outline(): Brush {
		return this.series.outline;
	}
	set outline(value: Brush) {
		this.series.outline = value;
	}
	get dashArray(): DoubleCollection {
		return this.series.dashArray;
	}
	set dashArray(value: DoubleCollection) {
		this.series.dashArray = value;
	}
	get dashCap(): PenLineCap {
		return this.series.dashCap;
	}
	set dashCap(value: PenLineCap) {
		this.series.dashCap = value;
	}
	get index(): number {
		return this.series.index;
	}
	get thickness(): number {
		return this.series.thickness;
	}
	set thickness(value: number) {
		this.series.thickness = value;
	}
	get title(): any {
		return this.series.title;
	}
	set title(value: any) {
		this.series.title = value;
	}
	get markerBrush(): Brush {
		return this.series.markerBrush;
	}
	set markerBrush(value: Brush) {
		this.series.markerBrush = value;
	}
	get markerOutline(): Brush {
		return this.series.markerOutline;
	}
	set markerOutline(value: Brush) {
		this.series.markerOutline = value;
	}
	get markerStyle(): Style {
		return this.series.markerStyle;
	}
	set markerStyle(value: Style) {
		this.series.markerStyle = value;
	}
	get markerTemplate(): DataTemplate {
		return this.series.markerTemplate;
	}
	set markerTemplate(value: DataTemplate) {
		this.series.markerTemplate = value;
	}
	get markerType(): MarkerType {
		return this.series.markerType;
	}
	set markerType(value: MarkerType) {
		this.series.markerType = value;
	}
	get startCap(): PenLineCap {
		return this.series.actualStartCap;
	}
	set startCap(value: PenLineCap) {
		this.series.startCap = value;
	}
	get endCap(): PenLineCap {
		return this.series.actualEndCap;
	}
	set endCap(value: PenLineCap) {
		this.series.endCap = value;
	}
}

/**
 * @hidden 
 */
export abstract class FragmentBase extends HorizontalAnchoredCategorySeries {
	static $t: Type = markType(FragmentBase, 'FragmentBase', (<any>HorizontalAnchoredCategorySeries).$type);
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
	}
	private _lineRasterizer: CategoryLineRasterizer = null;
	get lineRasterizer(): CategoryLineRasterizer {
		return this._lineRasterizer;
	}
	set lineRasterizer(value: CategoryLineRasterizer) {
		this._lineRasterizer = value;
	}
	private _logicalSeriesLink: StackedFragmentSeries = null;
	get logicalSeriesLink(): StackedFragmentSeries {
		return this._logicalSeriesLink;
	}
	set logicalSeriesLink(value: StackedFragmentSeries) {
		this._logicalSeriesLink = value;
	}
	private _parentSeries: StackedSeriesBase = null;
	get parentSeries(): StackedSeriesBase {
		return this._parentSeries;
	}
	set parentSeries(value: StackedSeriesBase) {
		this._parentSeries = value;
	}
	protected get_isHighlightingSupported(): boolean {
		return false;
	}
	protected get_isDropShadowSupported(): boolean {
		return false;
	}
	protected get_isFragment(): boolean {
		return true;
	}
	getFragmentIndex(): number {
		let parentSeries: StackedSeriesBase = this.parentSeries;
		if (parentSeries.index == -1 || parentSeries.stackedSeriesManager == null || parentSeries.stackedSeriesManager.seriesVisual.indexOf(this) == -1) {
			return -1;
		}
		return parentSeries.stackedSeriesManager.seriesVisual.indexOf(this);
	}
	getLogicalFragmentIndex(): number {
		let parentSeries: StackedSeriesBase = this.parentSeries;
		if (parentSeries.index == -1 || parentSeries.series.count == 0 || parentSeries.series.indexOf(this.logicalSeriesLink) == -1) {
			return -1;
		}
		return parentSeries.series.indexOf(this.logicalSeriesLink);
	}
	resolveLegendIndex(): number {
		let parentSeries = this.parentSeries;
		if (parentSeries.reverseLegendOrder) {
			return -1 + parentSeries.index + parentSeries.actualSeries.count - parentSeries.stackedSeriesManager.seriesVisual.indexOf(this);
		}
		return super.resolveLegendIndex();
	}
	resolveParentSeries(): Series {
		return this.parentSeries;
	}
	getCategoryAxis(): CategoryAxisBase {
		if (this.parentSeries == null) {
			return null;
		}
		return <CategoryAxisBase>this.parentSeries.fetchXAxis();
	}
	getValueAxis(): NumericAxisBase {
		if (this.parentSeries == null) {
			return null;
		}
		return <NumericAxisBase>this.parentSeries.fetchYAxis();
	}
	prepareMarker(markersHost: ISupportsMarkers, frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, value: number, itemIndex: number, markerCount: number, markerBucket: number): boolean {
		let x: number = bucket[0];
		let y: number = bucket[1];
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			markersHost.updateMarkerTemplate(markerCount, itemIndex, markerBucket);
			return true;
		}
		return false;
	}
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		frame.clearFrame();
		if (this.valueColumn == null || this.parentSeries == null || this.logicalSeriesLink == null) {
			return;
		}
		if (this.logicalSeriesLink.lowValues.count == 0 || this.logicalSeriesLink.highValues.count == 0) {
			return;
		}
		this.getFramePreparer(view).prepareFrame(frame, view);
	}
	terminatePolygon1(polygon: PointCollection, buckets: List$1<number[]>, view: CategorySeriesView): void {
		let worldZeroValue: number = this.getWorldZeroValue(view);
		let zero: number = worldZeroValue;
		let positive: boolean = this.logicalSeriesLink.positive;
		let seriesCollection: ObservableCollection$1<AnchoredCategorySeries> = positive ? this.parentSeries.stackedSeriesManager.positiveSeries : this.parentSeries.stackedSeriesManager.negativeSeries;
		let seriesIndex: number = seriesCollection.indexOf(this);
		if (polygon.count == 0) {
			return;
		}
		if (seriesIndex == -1) {
			return;
		}
		let foundValidSeries: boolean = false;
		for (let index: number = seriesIndex; index >= 0; index--) {
			if (foundValidSeries) {
				break;
			}
			if (index == 0) {
				polygon.add(<Point>{ $type: Point_$type, x: polygon._inner[polygon.count - 1].x, y: zero });
				polygon.add(<Point>{ $type: Point_$type, x: polygon._inner[0].x, y: zero });
				break;
			}
			let previousSeries: FragmentBase = typeCast<FragmentBase>((<any>FragmentBase).$type, seriesCollection._inner[index - 1]);
			if (previousSeries != null && previousSeries.lineRasterizer != null && previousSeries.lineRasterizer.flattenedLinePoints.count > 0 && this.view != null && previousSeries.validateSeries(this.view.viewport, this.view.windowRect, this.view)) {
				foundValidSeries = true;
				for (let i: number = previousSeries.lineRasterizer.flattenedLinePoints.count - 1; i >= 0; i--) {
					polygon.add(previousSeries.lineRasterizer.flattenedLinePoints._inner[i]);
				}
			}
		}
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		let xAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.parentSeries.fetchXAxis());
		let yAxis: Axis = this.parentSeries.fetchYAxis();
		if (this.parentSeries == null || xAxis == null || xAxis.itemsSource == null || yAxis == null || this.parentSeries.fastItemsSource == null || xAxis.seriesViewer == null || yAxis.seriesViewer == null) {
			isValid = false;
		}
		if (this.valueColumn == null) {
			return false;
		}
		if (isInfinity(this.valueColumn.minimum) && isInfinity(this.valueColumn.maximum)) {
			isValid = false;
		}
		if (isNaN_(this.valueColumn.minimum) && isNaN_(this.valueColumn.maximum)) {
			isValid = false;
		}
		return isValid;
	}
	getWorldZeroValue(view: CategorySeriesView): number {
		let value: number = 0;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.getReferenceValue();
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.yAxis != null) {
			value = this.yAxis.getScaledValue(0, yParams);
		}
		return value;
	}
	getRange(axis: Axis): AxisRange {
		return null;
	}
	getLegendItemIndex(): number {
		if (this.parentSeries == null) {
			return -1;
		}
		let index: number = this.parentSeries.index;
		let start: number = 0;
		let incr: number = 1;
		if (this.parentSeries.reverseLegendOrder) {
			start = this.parentSeries.actualSeries.count - 1;
			incr = -1;
		}
		for (let i = start; this.parentSeries.reverseLegendOrder ? i >= 0 : i < this.parentSeries.actualSeries.count; i += incr) {
			let series = this.parentSeries.actualSeries._inner[i];
			if (series.visualSeriesLink == this) {
				return index;
			}
			if (this.parentSeries.actualLegend == null || series.actualVisibility != Visibility.Visible || series.actualLegendItemVisibility != Visibility.Visible) {
				continue;
			}
			index++;
		}
		return -1;
	}
	updateLegend(legend: IChartLegend): void {
		if (legend == null) {
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.parentSeries == null) {
			return;
		}
		let yAxis: NumericAxisBase = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, this.parentSeries.fetchYAxis());
		if (yAxis == null) {
			return;
		}
		switch (propertyName) {
			case AnchoredCategorySeries.valueColumnPropertyName:
			if (this.anchoredView.hasTrendLineManager) {
				this.anchoredView.trendLineManager.reset();
			}
			if (yAxis != null && !yAxis.updateRange()) {
				this.parentSeries.getSeriesView().bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

			case Series.actualBrushPropertyName:
			if (this.logicalSeriesLink != null) {
				this.logicalSeriesLink.actualBrush = this.actualBrush;
			}
			break;

		}

	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
	}
}

/**
 * @hidden 
 */
export class AreaFragment extends FragmentBase {
	static $t: Type = markType(AreaFragment, 'AreaFragment', (<any>FragmentBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>AreaFragment).$type;
	}
	protected createView(): SeriesView {
		return new AreaFragmentView(this);
	}
	private _areaFragmentView: AreaFragmentView;
	get areaFragmentView(): AreaFragmentView {
		return this._areaFragmentView;
	}
	set areaFragmentView(value: AreaFragmentView) {
		this._areaFragmentView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.areaFragmentView = <AreaFragmentView>view;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	protected testRangeAreaOver(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.areaFragmentView.polygon0.data;
		if (this.testOverPoly(position, pathData1)) {
			return true;
		}
		let pathData2 = <PathGeometry>this.areaFragmentView.polygon1.data;
		if (this.testOverPoly(position, pathData2)) {
			return true;
		}
		return false;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testNearStrokes(position, isFinger)) {
			return true;
		}
		if (this.testRangeAreaOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	private testNearStrokes(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.areaFragmentView.polyline0.data;
		if (this.testNearStroke(position, isFinger, pathData1)) {
			return true;
		}
		let pathData2 = <PathGeometry>this.areaFragmentView.polyline1.data;
		if (this.testNearStroke(position, isFinger, pathData2)) {
			return true;
		}
		return false;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let areaFragmentView = <AreaFragmentView>view;
		areaFragmentView.clearRendering();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		this.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null ? true : false;
		let areaView: AreaFragmentView = typeCast<AreaFragmentView>((<any>AreaFragmentView).$type, view);
		let bucketSize: number = areaView.bucketCalculator.bucketSize;
		this.lineRasterizer.rasterizePolygonPaths(areaView.polygon0, areaView.polyline0, areaView.polygon1, areaView.polyline1, frame.buckets.count, frame.buckets, true, bucketSize, this.resolution, (p0: PointCollection, l0: PointCollection, p01: PointCollection, l1: PointCollection, f: boolean) => this.terminatePolygon1(p0, frame.buckets, view), UnknownValuePlotting.LinearInterpolate);
		areaView.polygon0._opacity = this.actualAreaFillOpacity;
		areaView.polygon1._opacity = 0.5 * this.actualAreaFillOpacity;
	}
	updateActualAreaFillOpacity(): void {
		let chart = (typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer));
		if (chart != null) {
			this.actualAreaFillOpacity = isNaN_(this.areaFillOpacity) ? this.parentSeries.actualAreaFillOpacity : this.areaFillOpacity;
		}
	}
}

/**
 * @hidden 
 */
export class ColumnFragment extends FragmentBase {
	static $t: Type = markType(ColumnFragment, 'ColumnFragment', (<any>FragmentBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>ColumnFragment).$type;
	}
	protected createView(): SeriesView {
		return new ColumnFragmentView(this);
	}
	private _columnFragmentView: ColumnFragmentView;
	get columnFragmentView(): ColumnFragmentView {
		return this._columnFragmentView;
	}
	set columnFragmentView(value: ColumnFragmentView) {
		this._columnFragmentView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.columnFragmentView = <ColumnFragmentView>view;
	}
	get radiusX(): number {
		return <number>this.getValue(ColumnFragment.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(ColumnFragment.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(ColumnFragment.radiusXPropertyName, Number_$type, (<any>ColumnFragment).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ColumnFragment>sender).raisePropertyChanged(ColumnFragment.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(ColumnFragment.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(ColumnFragment.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(ColumnFragment.radiusYPropertyName, Number_$type, (<any>ColumnFragment).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ColumnFragment>sender).raisePropertyChanged(ColumnFragment.radiusYPropertyName, e.oldValue, e.newValue)));
	get fragmentXAxis(): CategoryAxisBase {
		return this.parentSeries != null ? typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.parentSeries.fetchXAxis()) : null;
	}
	get fragmentYAxis(): NumericAxisBase {
		return this.parentSeries != null ? typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.parentSeries.fetchYAxis()) : null;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode2;
	}
	getCategoryAxis(): CategoryAxisBase {
		return this.fragmentXAxis;
	}
	getValueAxis(): NumericAxisBase {
		return this.fragmentYAxis;
	}
	fetchXAxis(): Axis {
		return null;
	}
	fetchYAxis(): Axis {
		return null;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let columnFragmentView = <ColumnFragmentView>view;
		if (wipeClean && columnFragmentView.columns != null) {
			this.currentFrame.markers.clear();
			columnFragmentView.columns.count = 0;
		}
	}
	getRange(axis: Axis): AxisRange {
		if (this.valueColumn == null || this.valueColumn.count == 0) {
			return null;
		}
		return new AxisRange(this.valueColumn.minimum, this.valueColumn.maximum);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		if (this.parentSeries == null) {
			return false;
		}
		return this.parentSeries.validateFragmentSeries(this, viewportRect, windowRect, this.getParentView(view));
	}
	useParentMarkerCanvas(): boolean {
		return true;
	}
	getBucketSize(view: SeriesView): number {
		if (this.parentSeries != null) {
			return (<CategorySeries>this.parentSeries).getBucketSize(this.parentSeries.view);
		}
		return super.getBucketSize(view);
	}
	getFirstBucket(view: SeriesView): number {
		if (this.parentSeries != null) {
			return (<CategorySeries>this.parentSeries).getFirstBucket(this.parentSeries.view);
		}
		return super.getBucketSize(view);
	}
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this.getCategoryAxis() == null || this.fragmentYAxis == null) {
			return Rect.empty;
		}
		let pos = this.fromWorldPosition(world);
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.fragmentYAxis.isInverted, effectiveViewportRect);
		let matching = this.getMatchingBuckets(this.getCategoryAxis(), this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), world, true);
		if (matching == null) {
			return Rect.empty;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let prevDist = Math.abs(pos.x - prevBucketValue[0]);
		let nextDist = Math.abs(pos.x - nextBucketValue[0]);
		let groupWidth: number = this.getCategoryAxis().getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		if (prevDist < nextDist) {
			let left: number = prevBucketValue[0] - 0.5 * groupWidth;
			let top: number = prevBucketValue[1];
			let bottom: number = prevBucketValue[2];
			return new Rect(0, left, Math.min(top, bottom), groupWidth, Math.max(top, bottom) - Math.min(top, bottom));
		} else {
			let left1: number = nextBucketValue[0] - 0.5 * groupWidth;
			let top1: number = nextBucketValue[1];
			let bottom1: number = nextBucketValue[2];
			return new Rect(0, left1, Math.min(top1, bottom1), groupWidth, Math.max(top1, bottom1) - Math.min(top1, bottom1));
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
	protected testShapesOver(position: Point, isFinger: boolean): boolean {
		let box = this.getSeriesValueBoundingBoxFromSeriesPixel(position);
		if (box.isEmpty) {
			return false;
		}
		let inflated = this.inflateBox(box, this.getHitTestAllowance(isFinger));
		return inflated.containsPoint(position);
	}
	protected inflateBox(box: Rect, p: number): Rect {
		let boxCenterX = box.left + box.width / 2;
		let boxCenterY = box.top + box.height / 2;
		let left = boxCenterX - ((box.width / 2) + p);
		let top = boxCenterY - (box.height / 2);
		let height = box.height;
		let width = box.width + p * 2;
		return new Rect(0, left, top, width, height);
	}
	item(sender: any, point: Point): any {
		let frameworkElement: FrameworkElement = typeCast<FrameworkElement>((<any>FrameworkElement).$type, sender);
		let dataContext: DataContext = frameworkElement != null ? typeCast<DataContext>((<any>DataContext).$type, frameworkElement.dataContext) : null;
		let item: any = dataContext != null ? dataContext.item : null;
		if (item == null) {
			let viewportRect: Rect = this.view.viewport;
			let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
			let world: Point = <Point>{ $type: Point_$type, x: windowRect.left + windowRect.width * (point.x - viewportRect.left) / viewportRect.width, y: windowRect.top + windowRect.height * (point.y - viewportRect.top) / viewportRect.height };
			item = this.getItem(world);
		}
		return item;
	}
	getItem(world: Point): any {
		let index: number = 0;
		if (typeCast<ISortingAxis>(ISortingAxis_$type, this.getCategoryAxis()) !== null) {
			index = this.getItemIndexSorted(world);
			if (index == -1) {
				return null;
			}
		} else {
			index = this.getItemIndex(world);
		}
		return index >= 0 && this.fastItemsSource != null && index < this.fastItemsSource.count ? this.fastItemsSource.item(index) : null;
	}
	getItemIndexSorted(world: Point): number {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		if (windowRect.isEmpty || viewportRect.isEmpty) {
			return -1;
		}
		let xAxis = this.getCategoryAxis();
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xAxis.isInverted, effectiveViewportRect);
		let sorting: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.fragmentXAxis);
		let contentViewport = this.getContentViewport(this.view);
		let left: number = xAxis.getUnscaledValue(contentViewport.left, xParams);
		let right: number = xAxis.getUnscaledValue(contentViewport.right, xParams);
		let windowX: number = (world.x - windowRect.left) / windowRect.width;
		let axisValue: number = left + ((right - left) * windowX);
		if (<number>truncate(axisValue) <= dateMinValue().getTime() || <number>truncate(axisValue) >= dateMaxValue().getTime()) {
			return -1;
		}
		let itemIndex: number = sorting.getIndexClosestToUnscaledValue(axisValue);
		return itemIndex;
	}
	getItemIndex(world: Point): number {
		if (this.parentSeries == null) {
			return -1;
		}
		return this.parentSeries.getFragmentItemIndex(world);
	}
	prepareMarker(markersHost: ISupportsMarkers, frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, value: number, itemIndex: number, markerCount: number, markerBucket: number): boolean {
		let zero: number = 0;
		let x: number = bucket[0];
		let y: number = value < zero ? bucket[2] : bucket[1];
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			markersHost.updateMarkerTemplate(markerCount, itemIndex, markerBucket);
			return true;
		}
		return false;
	}
	private getParentView(view: SeriesView): SeriesView {
		if (view.isAlternateView) {
			return this.parentSeries.seriesInteractionManager.alternateViews.item(view.alternateViewIdentifier);
		} else if (view == this.thumbnailView) {
			return this.parentSeries.thumbnailView;
		} else {
			return this.parentSeries.categoryView;
		}
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		this.seriesInteractionManager.ensureAlternateView(this, viewportRect, windowRect, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let categorySeriesView: CategorySeriesView = <CategorySeriesView>view;
		view.prepAltSurface(surface);
		let parentView = <CategorySeriesView>this.getParentView(view);
		parentView.bucketCalculator.calculateBuckets(this.resolution);
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
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		frame.clearFrame();
		if (this.valueColumn == null || this.parentSeries == null || this.logicalSeriesLink == null || this.logicalSeriesLink.highValues.count == 0 || this.logicalSeriesLink.lowValues.count == 0) {
			return;
		}
		let parentFrame: CategoryFrame;
		if (view.isAlternateView) {
			parentFrame = this.parentSeries.alternateFrame;
		} else if (view == this.thumbnailView) {
			parentFrame = this.parentSeries.thumbnailFrame;
		} else {
			parentFrame = this.parentSeries.currentFrame;
		}
		let parentView: CategorySeriesView = typeCast<CategorySeriesView>((<any>CategorySeriesView).$type, this.getParentView(view));
		frame.buckets.clear();
		frame.markers.clear();
		let firstBucket: number = parentView.bucketCalculator.firstBucket;
		let lastbucket: number = parentView.bucketCalculator.lastBucket;
		let yScaler: IScaler = this.parentSeries.framePreparer.categoryBasedHost.yScaler;
		let sortingScaler: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.parentSeries.framePreparer.categoryBasedHost.scaler);
		let isLogarithmicYScaler: boolean = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, yScaler) !== null && (<NumericAxisBase><any>yScaler).isReallyLogarithmic;
		let bucketCalculator: StackedBucketCalculator = typeCast<StackedBucketCalculator>((<any>StackedBucketCalculator).$type, parentView.bucketCalculator);
		let bucketSize = parentView.bucketCalculator.bucketSize;
		let markerCount = 0;
		for (let i: number = firstBucket; i <= lastbucket; i++) {
			let itemIndex: number = i * bucketSize;
			if (this._visibility != Visibility.Visible) {
				break;
			}
			if (i >= this.valueColumn.count || i >= parentFrame.buckets.count + firstBucket) {
				continue;
			}
			let value: number = this.valueColumn.item(i);
			let isValidBucket: boolean = !isLogarithmicYScaler || (isLogarithmicYScaler && value > 0);
			let bucket: number[];
			if (sortingScaler == null) {
				bucket = bucketCalculator.getBucket1(this, i, i, view.windowRect, view.viewport, parentFrame);
			} else {
				bucket = bucketCalculator.getBucket1(this, i, sortingScaler.sortedIndices._inner[i], view.windowRect, view.viewport, parentFrame);
			}
			frame.buckets.add(bucket);
			if (isValidBucket) {
				if (this.prepareMarker(view, frame, bucket, this.framePreparer.categoryBasedHost.provideCollisionDetector(), value, itemIndex, markerCount, i)) {
					markerCount++;
				}
			}
		}
		view.markers.count = markerCount;
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		if (this.parentSeries == null) {
			return;
		}
		this.parentSeries.renderFragment(this, frame, view);
		CategoryMarkerManager.rasterizeMarkers(this, frame.markers, view.markers, this.useLightweightMarkers);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
	}
}

/**
 * @hidden 
 */
export class BarFragment extends ColumnFragment {
	static $t: Type = markType(BarFragment, 'BarFragment', (<any>ColumnFragment).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>BarFragment).$type;
	}
	get barFragmentXAxis(): NumericXAxis {
		return this.parentSeries != null ? (<StackedBarSeries>this.parentSeries).xAxis : null;
	}
	get barFragmentYAxis(): CategoryYAxis {
		return this.parentSeries != null ? (<StackedBarSeries>this.parentSeries).yAxis : null;
	}
	getCategoryAxis(): CategoryAxisBase {
		if (this.parentSeries == null) {
			return null;
		}
		return <CategoryAxisBase>this.parentSeries.fetchYAxis();
	}
	getExactItemIndex(world: Point): number {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.view.viewport;
		let contentViewport: Rect = this.getContentViewport(this.view);
		let effectiveViewportRect = this.getEffectiveViewport1(this.view);
		let categoryAxis = this.getCategoryAxis();
		let rowIndex: number = -1;
		if (categoryAxis != null && !windowRect.isEmpty && !viewportRect.isEmpty) {
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, categoryAxis.isInverted, effectiveViewportRect);
			let top: number = categoryAxis.getUnscaledValue(contentViewport.top, p);
			let bottom: number = categoryAxis.getUnscaledValue(contentViewport.bottom, p);
			let windowY: number = (world.y - windowRect.top) / windowRect.height;
			let bucket: number = top + (windowY * (bottom - top));
			if (categoryAxis.categoryMode != CategoryMode.Mode0) {
				bucket -= 0.5;
			}
			rowIndex = bucket;
		}
		return rowIndex;
	}
	getValueAxis(): NumericAxisBase {
		if (this.parentSeries == null) {
			return null;
		}
		return <NumericAxisBase>this.parentSeries.fetchYAxis();
	}
	protected inflateBox(box: Rect, p: number): Rect {
		let boxCenterX = box.left + box.width / 2;
		let boxCenterY = box.top + box.height / 2;
		let left = boxCenterX - (box.width / 2);
		let top = boxCenterY - ((box.height / 2) + p);
		let height = box.height + p * 2;
		let width = box.width;
		return new Rect(0, left, top, width, height);
	}
	getSeriesValueBoundingBox(world: Point): Rect {
		if (this.getCategoryAxis() == null) {
			return Rect.empty;
		}
		let pos = this.fromWorldPosition(world);
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let categoryAxis = this.getCategoryAxis();
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, categoryAxis.isInverted, effectiveViewportRect);
		let matching = this.getMatchingBuckets(this.getCategoryAxis(), this.currentFrame.buckets, this.getBucketSize(this.view), this.getFirstBucket(this.view), world, true);
		if (matching == null) {
			return Rect.empty;
		}
		let prevBucketValue = matching[0];
		let nextBucketValue = matching[1];
		let prevDist = Math.abs(pos.y - prevBucketValue[0]);
		let nextDist = Math.abs(pos.y - nextBucketValue[0]);
		let groupWidth: number = categoryAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		if (prevDist < nextDist) {
			let top: number = prevBucketValue[0] - 0.5 * groupWidth;
			let left: number = prevBucketValue[2];
			let right: number = prevBucketValue[1];
			return new Rect(0, left, top, Math.max(right, left) - Math.min(right, left), groupWidth);
		} else {
			let top1: number = nextBucketValue[0] - 0.5 * groupWidth;
			let left1: number = nextBucketValue[2];
			let right1: number = nextBucketValue[1];
			return new Rect(0, left1, top1, Math.max(right1, left1) - Math.min(right1, left1), groupWidth);
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
	prepareMarker(markersHost: ISupportsMarkers, frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, value: number, itemIndex: number, markerCount: number, markerBucket: number): boolean {
		let y: number = bucket[0];
		let x: number = value < 0 ? bucket[2] : bucket[1];
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			markersHost.updateMarkerTemplate(markerCount, itemIndex, markerBucket);
			return true;
		}
		return false;
	}
	getItem(world: Point): any {
		let index: number = 0;
		if (typeCast<ISortingAxis>(ISortingAxis_$type, this.barFragmentYAxis) !== null) {
			index = this.getItemIndexSorted(world);
			if (index == -1) {
				return null;
			}
		} else {
			index = this.getItemIndex(world);
		}
		return index >= 0 && this.fastItemsSource != null && index < this.fastItemsSource.count ? this.fastItemsSource.item(index) : null;
	}
	getItemIndexSorted(world: Point): number {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		if (windowRect.isEmpty || viewportRect.isEmpty) {
			return -1;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.barFragmentYAxis.isInverted, effectiveViewportRect);
		let sorting: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.barFragmentYAxis);
		let contentViewport = this.getContentViewport(this.view);
		let top: number = this.barFragmentYAxis.getUnscaledValue(contentViewport.top, yParams);
		let bottom: number = this.barFragmentYAxis.getUnscaledValue(contentViewport.bottom, yParams);
		let windowY: number = (world.y - windowRect.top) / windowRect.height;
		let axisValue: number = top + ((bottom - top) * windowY);
		if (<number>truncate(axisValue) <= dateMinValue().getTime() || <number>truncate(axisValue) >= dateMaxValue().getTime()) {
			return -1;
		}
		let itemIndex: number = sorting.getIndexClosestToUnscaledValue(axisValue);
		return itemIndex;
	}
	getWorldZeroValue(view: CategorySeriesView): number {
		let value: number = 0;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.barFragmentXAxis.isInverted, effectiveViewportRect);
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.barFragmentXAxis != null) {
			value = this.barFragmentXAxis.getScaledValue(0, xParams);
		}
		return value;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.parentSeries == null || this.barFragmentXAxis == null) {
			return;
		}
		let xAxis: NumericAxisBase = this.barFragmentXAxis;
		switch (propertyName) {
			case AnchoredCategorySeries.valueColumnPropertyName:
			if (this.anchoredView.hasTrendLineManager) {
				this.anchoredView.trendLineManager.reset();
			}
			if (xAxis != null && !xAxis.updateRange()) {
				this.parentSeries.getSeriesView().bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
			}
			break;

		}

	}
}

/**
 * @hidden 
 */
export class AreaFragmentBucketCalculator extends AnchoredCategoryBucketCalculator {
	static $t: Type = markType(AreaFragmentBucketCalculator, 'AreaFragmentBucketCalculator', (<any>AnchoredCategoryBucketCalculator).$type);
	constructor(view: AnchoredCategorySeriesView) {
		super(view);
	}
	getBucketWithoutUnknowns(bucket: number): number[] {
		return this.getBucket(bucket);
	}
	getBucket(bucket: number): number[] {
		let i0: number = Math.min(bucket * this.bucketSize, this.anchoredView.anchoredModel.valueColumn.count - 1);
		let i1: number = Math.min(i0 + this.bucketSize - 1, this.anchoredView.anchoredModel.valueColumn.count - 1);
		let min: number = NaN;
		let max: number = NaN;
		let fragment: FragmentBase = <FragmentBase>this.anchoredView.anchoredModel;
		let parentSeries: StackedSeriesBase = fragment.parentSeries;
		let is100: boolean = typeCast<IStacked100Series>(IStacked100Series_$type, parentSeries) !== null;
		let valueColumn = this.anchoredView.anchoredModel.valueColumn;
		let highs = parentSeries.highs;
		let lows = parentSeries.lows;
		let logicalLows = fragment.logicalSeriesLink.lowValues;
		let logicalHighs = fragment.logicalSeriesLink.highValues;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = valueColumn.item(i);
			if (isNaN_(y) || isInfinity(y)) {
				y = 0;
			}
			let total: number = Math.abs(lows[i]) + highs[i];
			if (is100) {
				if (total == 0) {
					y = 0;
				} else if (y < 0) {
					y = (logicalLows._inner[i] + y) / total * 100;
				} else {
					y = (logicalHighs._inner[i] + y) / total * 100;
				}
			} else {
				y = y < 0 ? logicalLows._inner[i] + y : logicalHighs._inner[i] + y;
			}
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
export class LineFragmentBucketCalculator extends AnchoredCategoryBucketCalculator {
	static $t: Type = markType(LineFragmentBucketCalculator, 'LineFragmentBucketCalculator', (<any>AnchoredCategoryBucketCalculator).$type);
	constructor(view: AnchoredCategorySeriesView) {
		super(view);
	}
	getBucketWithoutUnknowns(bucket: number): number[] {
		return this.getBucket(bucket);
	}
	getBucket(bucket: number): number[] {
		let i0: number = Math.min(bucket * this.bucketSize, this.anchoredView.anchoredModel.valueColumn.count - 1);
		let i1: number = Math.min(i0 + this.bucketSize - 1, this.anchoredView.anchoredModel.valueColumn.count - 1);
		let min: number = NaN;
		let max: number = NaN;
		let fragment: FragmentBase = typeCast<FragmentBase>((<any>FragmentBase).$type, this.anchoredView.anchoredModel);
		let parentSeries: StackedSeriesBase = fragment.parentSeries;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = this.anchoredView.anchoredModel.valueColumn.item(i);
			let total: number = Math.abs(parentSeries.lows[i]) + parentSeries.highs[i];
			if (isNaN_(y) || isInfinity(y)) {
				y = 0;
			}
			if (typeCast<IStacked100Series>(IStacked100Series_$type, parentSeries) !== null) {
				if (total == 0) {
					y = 0;
				} else if (y < 0) {
					y = (fragment.logicalSeriesLink.lowValues._inner[i] + y) / total * 100;
				} else {
					y = (fragment.logicalSeriesLink.highValues._inner[i] + y) / total * 100;
				}
			} else {
				y = y < 0 ? fragment.logicalSeriesLink.lowValues._inner[i] + y : fragment.logicalSeriesLink.highValues._inner[i] + y;
			}
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
export class SplineFragmentBucketCalculator extends AnchoredCategoryBucketCalculator {
	static $t: Type = markType(SplineFragmentBucketCalculator, 'SplineFragmentBucketCalculator', (<any>AnchoredCategoryBucketCalculator).$type);
	constructor(view: AnchoredCategorySeriesView) {
		super(view);
	}
	getBucket(bucket: number): number[] {
		let i0: number = Math.min(bucket * this.bucketSize, this.anchoredView.anchoredModel.valueColumn.count - 1);
		let i1: number = Math.min(i0 + this.bucketSize - 1, this.anchoredView.anchoredModel.valueColumn.count - 1);
		let min: number = NaN;
		let max: number = NaN;
		let fragment: SplineFragmentBase = typeCast<SplineFragmentBase>((<any>SplineFragmentBase).$type, this.anchoredView.anchoredModel);
		let parentSeries: StackedSeriesBase = fragment.parentSeries;
		for (let i: number = i0; i <= i1; ++i) {
			let y: number = this.anchoredView.anchoredModel.valueColumn.item(i);
			let total: number = Math.abs(parentSeries.lows[i]) + parentSeries.highs[i];
			if (isNaN_(y) || isInfinity(y)) {
				y = 0;
			}
			if (typeCast<IStacked100Series>(IStacked100Series_$type, parentSeries) !== null) {
				if (total == 0) {
					y = 0;
				} else if (y < 0) {
					y = (fragment.logicalSeriesLink.lowValues._inner[i] + y) / total * 100;
				} else {
					y = (fragment.logicalSeriesLink.highValues._inner[i] + y) / total * 100;
				}
			} else {
				y = y < 0 ? fragment.logicalSeriesLink.lowValues._inner[i] + y : fragment.logicalSeriesLink.highValues._inner[i] + y;
			}
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
export class StackedBucketCalculator extends CategoryBucketCalculator {
	static $t: Type = markType(StackedBucketCalculator, 'StackedBucketCalculator', (<any>CategoryBucketCalculator).$type);
	constructor(view: CategorySeriesView) {
		super(view);
	}
	getBucket(index: number): number[] {
		let series: StackedSeriesBase = typeCast<StackedSeriesBase>((<any>StackedSeriesBase).$type, this.view.categoryModel);
		let count: number = Math.min(series.lows != null ? series.lows.length : 0, series.highs != null ? series.highs.length : 0);
		let i0: number = Math.min(index * this.bucketSize, count - 1);
		let i1: number = Math.min(i0 + this.bucketSize - 1, count - 1);
		let min: number = NaN;
		let max: number = NaN;
		for (let i: number = i0; i <= i1; ++i) {
			let low: number = Math.min(series.lows[i], series.highs[i]);
			let high: number = Math.max(series.lows[i], series.highs[i]);
			if (!isNaN_(min)) {
				if (!isNaN_(low)) {
					min = Math.min(min, low);
					max = Math.max(max, low);
				}
				if (!isNaN_(high)) {
					min = Math.min(min, high);
					max = Math.max(max, high);
				}
			} else {
				min = low;
				max = high;
			}
		}
		if (!isNaN_(min) && !isNaN_(max)) {
			return <number[]>[ 0.5 * (i0 + i1), min, max ];
		}
		return <number[]>[ NaN, NaN, NaN ];
	}
	getBucket1(series: AnchoredCategorySeries, index: number, sortingIndex: number, windowRect: Rect, viewportRect: Rect, currentFrame: CategoryFrame): number[] {
		return null;
	}
}

/**
 * @hidden 
 */
export class StackedBarBucketCalculator extends StackedBucketCalculator {
	static $t: Type = markType(StackedBarBucketCalculator, 'StackedBarBucketCalculator', (<any>StackedBucketCalculator).$type);
	constructor(view: CategorySeriesView) {
		super(view);
	}
	calculateBuckets(resolution: number): void {
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let series: StackedBarSeries = typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.view.categoryModel);
		let fastItemsSource: IFastItemsSource = this.view.categoryModel.fastItemsSource;
		if (windowRect.isEmpty || viewportRect.isEmpty || series.yAxis == null || fastItemsSource == null || fastItemsSource.count == 0) {
			this.bucketSize = 0;
			return;
		}
		let effectiveViewportRect: Rect = series.getEffectiveViewport1(this.view);
		let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, series.yAxis.isInverted, effectiveViewportRect);
		let contentViewport: Rect = series.getContentViewport(this.view);
		let y0: number = Math.floor(series.yAxis.getUnscaledValue1(contentViewport.top, p, CategoryMode.Mode0));
		let y1: number = Math.ceil(series.yAxis.getUnscaledValue1(contentViewport.bottom, p, CategoryMode.Mode0));
		if (!series.yAxis.isInverted) {
			y1 = Math.ceil(series.yAxis.getUnscaledValue1(contentViewport.top, p, CategoryMode.Mode0));
			y0 = Math.floor(series.yAxis.getUnscaledValue1(contentViewport.bottom, p, CategoryMode.Mode0));
		}
		let c: number = Math.floor((y1 - y0 + 1) * resolution / contentViewport.height);
		this.bucketSize = <number>truncate(Math.max(1, c));
		this.firstBucket = <number>truncate(Math.max(0, Math.floor(y0 / this.bucketSize) - 1));
		this.lastBucket = <number>truncate(Math.ceil(y1 / this.bucketSize));
	}
	getBucket(index: number): number[] {
		return super.getBucket(index);
	}
	getBucket1(series: AnchoredCategorySeries, index: number, sortingIndex: number, windowRect: Rect, viewportRect: Rect, currentFrame: CategoryFrame): number[] {
		let bucket: number[] = <number[]>[ NaN, NaN, NaN ];
		let fragment: BarFragment = typeCast<BarFragment>((<any>BarFragment).$type, series);
		if (fragment == null || fragment.logicalSeriesLink == null) {
			return bucket;
		}
		let barSeries: StackedBarSeries = typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.view.categoryModel);
		let value: number = series.valueColumn.item(sortingIndex);
		let zero: number = 0;
		let min: number = NaN;
		let max: number = NaN;
		let high: number = Number.NEGATIVE_INFINITY;
		let low: number = Number.POSITIVE_INFINITY;
		let effectiveViewportRect: Rect = barSeries.getEffectiveViewport1(this.view);
		let count: number = Math.min(barSeries.lows != null ? barSeries.lows.length : 0, barSeries.highs != null ? barSeries.highs.length : 0);
		let i0: number = sortingIndex * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, count - 1);
		for (let i: number = i0; i <= i1; ++i) {
			value = series.valueColumn.item(i);
			if (value < zero) {
				low = Math.min(low, fragment.logicalSeriesLink.lowValues._inner[i] + value);
				high = Math.max(high, fragment.logicalSeriesLink.lowValues._inner[i]);
			} else {
				low = Math.min(low, fragment.logicalSeriesLink.highValues._inner[i]);
				high = Math.max(high, fragment.logicalSeriesLink.highValues._inner[i] + value);
			}
			if (!isNaN_(min)) {
				if (!isNaN_(low)) {
					min = Math.min(min, low);
					max = Math.max(max, low);
				}
				if (!isNaN_(high)) {
					min = Math.min(min, high);
					max = Math.max(max, high);
				}
			} else {
				min = low;
				max = high;
			}
		}
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, barSeries.xAxis.isInverted, effectiveViewportRect);
		bucket = [ currentFrame.buckets._inner[index - this.firstBucket][0], barSeries.xAxis.getScaledValue(max, xParams), barSeries.xAxis.getScaledValue(min, xParams) ];
		return bucket;
	}
}

/**
 * @hidden 
 */
export class StackedColumnBucketCalculator extends StackedBucketCalculator {
	static $t: Type = markType(StackedColumnBucketCalculator, 'StackedColumnBucketCalculator', (<any>StackedBucketCalculator).$type);
	constructor(view: CategorySeriesView) {
		super(view);
	}
	getBucket(index: number): number[] {
		return super.getBucket(index);
	}
	getBucket1(series: AnchoredCategorySeries, index: number, sortingIndex: number, windowRect: Rect, viewportRect: Rect, currentFrame: CategoryFrame): number[] {
		let bucket: number[] = <number[]>[ NaN, NaN, NaN ];
		let fragment: ColumnFragment = typeCast<ColumnFragment>((<any>ColumnFragment).$type, series);
		if (fragment == null || fragment.logicalSeriesLink == null) {
			return bucket;
		}
		let columnSeries: StackedColumnSeries = typeCast<StackedColumnSeries>((<any>StackedColumnSeries).$type, this.view.categoryModel);
		let value: number = series.valueColumn.item(sortingIndex);
		let zero: number = 0;
		let min: number = NaN;
		let max: number = NaN;
		let high: number = Number.NEGATIVE_INFINITY;
		let low: number = Number.POSITIVE_INFINITY;
		let effectiveViewportRect: Rect = columnSeries.getEffectiveViewport1(this.view);
		let count: number = Math.min(columnSeries.lows != null ? columnSeries.lows.length : 0, columnSeries.highs != null ? columnSeries.highs.length : 0);
		let i0: number = sortingIndex * this.bucketSize;
		let i1: number = Math.min(i0 + this.bucketSize - 1, count - 1);
		for (let i: number = i0; i <= i1; ++i) {
			value = series.valueColumn.item(i);
			if (value < zero) {
				low = Math.min(low, fragment.logicalSeriesLink.lowValues._inner[i] + value);
				high = Math.max(high, fragment.logicalSeriesLink.lowValues._inner[i]);
			} else {
				low = Math.min(low, fragment.logicalSeriesLink.highValues._inner[i]);
				high = Math.max(high, fragment.logicalSeriesLink.highValues._inner[i] + value);
			}
			if (!isNaN_(min)) {
				if (!isNaN_(low)) {
					min = Math.min(min, low);
					max = Math.max(max, low);
				}
				if (!isNaN_(high)) {
					min = Math.min(min, high);
					max = Math.max(max, high);
				}
			} else {
				min = low;
				max = high;
			}
		}
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, columnSeries.yAxis.isInverted, effectiveViewportRect);
		bucket = [ currentFrame.buckets._inner[index - this.firstBucket][0], columnSeries.yAxis.getScaledValue(max, yParams), columnSeries.yAxis.getScaledValue(min, yParams) ];
		return bucket;
	}
}

/**
 * @hidden 
 */
export class LineFragment extends FragmentBase {
	static $t: Type = markType(LineFragment, 'LineFragment', (<any>FragmentBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>LineFragment).$type;
	}
	protected createView(): SeriesView {
		return new LineFragmentView(this);
	}
	private _lineFragmentView: LineFragmentView;
	get lineFragmentView(): LineFragmentView {
		return this._lineFragmentView;
	}
	set lineFragmentView(value: LineFragmentView) {
		this._lineFragmentView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.lineFragmentView = <LineFragmentView>view;
	}
	protected testRangeAreaOver(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.lineFragmentView.polygon01.data;
		if (this.testOverPoly(position, pathData1)) {
			return true;
		}
		return false;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testNearStrokes(position, isFinger)) {
			return true;
		}
		if (this.testRangeAreaOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	private testNearStrokes(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.lineFragmentView.polyline0.data;
		if (this.testNearStroke(position, isFinger, pathData1)) {
			return true;
		}
		let pathData2 = <PathGeometry>this.lineFragmentView.polyline1.data;
		if (this.testNearStroke(position, isFinger, pathData2)) {
			return true;
		}
		return false;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let lineFragmentView = <LineFragmentView>view;
		lineFragmentView.clearLine();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let x0: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][0];
		let y0: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][1];
		let x1: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][0];
		let y1: (arg1: number) => number = (i: number) => <number>frame.buckets._inner[i][2];
		this.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null ? true : false;
		let bucketSize: number = view.bucketCalculator.bucketSize;
		let lineFragmentView: LineFragmentView = typeCast<LineFragmentView>((<any>LineFragmentView).$type, view);
		this.lineRasterizer.rasterizePolylinePaths(lineFragmentView.polyline0, lineFragmentView.polygon01, lineFragmentView.polyline1, frame.buckets.count, frame.buckets, true, UnknownValuePlotting.LinearInterpolate, this.getLineClipper(frame.buckets, frame.buckets.count - 1, view.viewport, view.windowRect), bucketSize, this.resolution);
	}
}

/**
 * @hidden 
 */
export abstract class SplineFragmentBase extends SplineSeriesBase {
	static $t: Type = markType(SplineFragmentBase, 'SplineFragmentBase', (<any>SplineSeriesBase).$type);
	private _logicalSeriesLink: StackedFragmentSeries = null;
	get logicalSeriesLink(): StackedFragmentSeries {
		return this._logicalSeriesLink;
	}
	set logicalSeriesLink(value: StackedFragmentSeries) {
		this._logicalSeriesLink = value;
	}
	private _lineRasterizer: CategoryLineRasterizer = null;
	get lineRasterizer(): CategoryLineRasterizer {
		return this._lineRasterizer;
	}
	set lineRasterizer(value: CategoryLineRasterizer) {
		this._lineRasterizer = value;
	}
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
	}
	private _parentSeries: StackedSeriesBase = null;
	get parentSeries(): StackedSeriesBase {
		return this._parentSeries;
	}
	set parentSeries(value: StackedSeriesBase) {
		this._parentSeries = value;
	}
	protected get_isDropShadowSupported(): boolean {
		return false;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	protected get_isFragment(): boolean {
		return true;
	}
	getFragmentIndex(): number {
		let parentSeries: StackedSeriesBase = this.parentSeries;
		if (parentSeries.index == -1 || parentSeries.stackedSeriesManager == null || parentSeries.stackedSeriesManager.seriesVisual.indexOf(this) == -1) {
			return -1;
		}
		return parentSeries.stackedSeriesManager.seriesVisual.indexOf(this);
	}
	resolveLegendIndex(): number {
		let parentSeries = this.parentSeries;
		if (parentSeries.reverseLegendOrder) {
			return -1 + parentSeries.index + parentSeries.actualSeries.count - parentSeries.stackedSeriesManager.seriesVisual.indexOf(this);
		}
		return super.resolveLegendIndex();
	}
	getLogicalFragmentIndex(): number {
		let parentSeries: StackedSeriesBase = this.parentSeries;
		if (parentSeries.index == -1 || parentSeries.series.count == 0 || parentSeries.series.indexOf(this.logicalSeriesLink) == -1) {
			return -1;
		}
		return parentSeries.series.indexOf(this.logicalSeriesLink);
	}
	resolveParentSeries(): Series {
		return this.parentSeries;
	}
	prepareMarker(frame: CategoryFrame, bucket: number[], collisionAvoider: CollisionAvoider, itemIndex: number, markerCount: number, view: CategorySeriesView, markerBucket: number): boolean {
		let x: number = bucket[0];
		let y: number = bucket[1];
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			let marker: Marker = view.markers.item(markerCount);
			(<DataContext>marker.content).item = this.fastItemsSource.item(itemIndex);
			marker.markerBucket = markerBucket;
			return true;
		}
		return false;
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = super.validateSeries(viewportRect, windowRect, view);
		let xAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.parentSeries.fetchXAxis());
		let yAxis: Axis = this.parentSeries.fetchYAxis();
		if (this.parentSeries == null || xAxis == null || xAxis.itemsSource == null || yAxis == null || this.parentSeries.fastItemsSource == null || xAxis.seriesViewer == null || yAxis.seriesViewer == null) {
			isValid = false;
		}
		if (this.valueColumn == null) {
			return false;
		}
		if (isInfinity(this.valueColumn.minimum) && isInfinity(this.valueColumn.maximum)) {
			isValid = false;
		}
		if (isNaN_(this.valueColumn.minimum) && isNaN_(this.valueColumn.maximum)) {
			isValid = false;
		}
		return isValid;
	}
	getRange(axis: Axis): AxisRange {
		return null;
	}
	prepareDateTimeFrame1(frame: CategoryFrame, windowRect: Rect, viewportRect: Rect, xaxis: CategoryAxisBase, yaxis: NumericYAxis, view: CategorySeriesView): void {
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, xaxis);
		if (sortingXAxis == null) {
			return;
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xaxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yaxis.isInverted, effectiveViewportRect);
		let singlePixelSpan: number = xaxis.getUnscaledValue(2, xParams) - xaxis.getUnscaledValue(1, xParams);
		let markers: boolean = this.shouldDisplayMarkers();
		let markerCount: number = 0;
		let offset: number = this.getOffset(xaxis, windowRect, viewportRect, effectiveViewportRect);
		let total: (arg1: number) => number = (i: number) => Math.abs(this.parentSeries.lows[i]) + this.parentSeries.highs[i];
		let xv: (arg1: number) => number = (i: number) => i;
		let yv: (arg1: number) => number = (i: number) => {
			let index: number = sortingXAxis.sortedIndices._inner[i];
			if (typeCast<IStacked100Series>(IStacked100Series_$type, this.parentSeries) !== null) {
				return this.valueColumn.item(index) < 0 ? (this.logicalSeriesLink.lowValues._inner[index] + this.valueColumn.item(index)) / total(index) * 100 : (this.logicalSeriesLink.highValues._inner[index] + this.valueColumn.item(index)) / total(index) * 100;
			} else {
				return this.valueColumn.item(index) < 0 ? this.logicalSeriesLink.lowValues._inner[index] + this.valueColumn.item(index) : this.logicalSeriesLink.highValues._inner[index] + this.valueColumn.item(index);
			}
		};
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
			for (let j: number = 1; j < n; ++j) {
				let pp: number = (<number>j) / (<number>n);
				let x: number = x1 + h * pp;
				let a: number = (x2 - x) / h;
				let b: number = (x - x1) / h;
				let y: number = a * y1 + b * y2 + ((a * a * a - a) * u1 + (b * b * b - b) * u2) * (h * h) / 6;
				let unscaledValueFirst: number = sortingXAxis.getUnscaledValueAt(sortingXAxis.sortedIndices._inner[i]);
				let unscaledValueNext: number = sortingXAxis.getUnscaledValueAt(sortingXAxis.sortedIndices._inner[i + 1]);
				if (unscaledValueFirst == unscaledValueNext && y1 == y2) {
					break;
				}
				let currentUnscaledValue: number = unscaledValueFirst + (unscaledValueNext - unscaledValueFirst) * pp;
				x = xaxis.getScaledValue(currentUnscaledValue, xParams) + offset;
				y = yaxis.getScaledValue(y, yParams);
				frame.buckets.add(<number[]>[ x, y, y ]);
				bucketCount++;
			}
			if (markers) {
				bucket = <number[]>[ firstPointX, firstPointY, firstPointY ];
			}
			if (markers && this.prepareMarker(frame, bucket, collisionAvoider, Math.min(itemIndex, this.fastItemsSource.count - 1), markerCount, view, bucketCount - 1)) {
				++markerCount;
			}
		}
		this.categoryView.markers.count = markerCount;
	}
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		frame.clearFrame();
		if (this.valueColumn == null || this.parentSeries == null || this.logicalSeriesLink == null) {
			return;
		}
		if (this.logicalSeriesLink.lowValues.count == 0 || this.logicalSeriesLink.highValues.count == 0) {
			return;
		}
		if (this.categoryView.bucketCalculator.bucketSize == 0) {
			return;
		}
		super.prepareFrame(frame, view);
		if (frame.buckets.count <= 1) {
			return;
		}
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xaxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.parentSeries.fetchXAxis());
		let yaxis: NumericYAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.parentSeries.fetchYAxis());
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xaxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yaxis.isInverted, effectiveViewportRect);
		frame.buckets.clear();
		frame.markers.clear();
		let markers: boolean = this.shouldDisplayMarkers();
		let markerCount: number = 0;
		let parentFrame: CategoryFrame;
		let parentView: CategorySeriesView;
		if (view.isAlternateView) {
			parentFrame = this.parentSeries.alternateFrame;
			parentView = <CategorySeriesView>this.parentSeries.seriesInteractionManager.alternateViews.item(view.alternateViewIdentifier);
		} else if (view == this.thumbnailView) {
			parentFrame = this.parentSeries.thumbnailFrame;
			parentView = typeCast<CategorySeriesView>((<any>CategorySeriesView).$type, this.parentSeries.thumbnailView);
		} else {
			parentFrame = this.parentSeries.currentFrame;
			parentView = this.parentSeries.categoryView;
		}
		let parentBucketSize: number = parentView.bucketCalculator.bucketSize;
		let sortingXAxis: ISortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, xaxis);
		if (sortingXAxis != null && sortingXAxis.sortedIndices.count != this.fastItemsSource.count) {
			return;
		}
		let categoryMode: CategoryMode = this.preferredCategoryMode(xaxis);
		if (categoryMode == CategoryMode.Mode0 && xaxis.categoryMode != CategoryMode.Mode0) {
			categoryMode = CategoryMode.Mode1;
		}
		let offset: number = 0;
		switch (categoryMode) {
			case CategoryMode.Mode0:
			offset = 0;
			break;

			case CategoryMode.Mode1:
			offset = 0.5 * xaxis.getCategorySize(windowRect, viewportRect, effectiveViewportRect);
			break;

			case CategoryMode.Mode2:
			let index: number = this.index;
			offset = xaxis.getGroupCenter(this.index, windowRect, viewportRect, effectiveViewportRect);
			break;

		}

		if (xaxis.isInverted) {
			offset = -offset;
		}
		let total: (arg1: number) => number = (i: number) => Math.abs(this.parentSeries.lows[i]) + this.parentSeries.highs[i];
		let xv: (arg1: number) => number = (i: number) => i;
		let yv: (arg1: number) => number = (i: number) => {
			let value: number = this.valueColumn.item(i);
			if (isNaN_(value) || isInfinity(value)) {
				value = 0;
			}
			if (typeCast<IStacked100Series>(IStacked100Series_$type, this.parentSeries) !== null) {
				if (total(i) == 0) {
					return <number>0;
				}
				return value < 0 ? (this.logicalSeriesLink.lowValues._inner[i] + value) / total(i) * 100 : (this.logicalSeriesLink.highValues._inner[i] + value) / total(i) * 100;
			}
			return value < 0 ? this.logicalSeriesLink.lowValues._inner[i] + value : this.logicalSeriesLink.highValues._inner[i] + value;
		};
		let bucketSize: number = view.bucketCalculator.bucketSize;
		let endPointsFirstDerivative: number = this.splineType == SplineType.Natural ? NaN : 0;
		if (xaxis != null && typeCast<ISortingAxis>(ISortingAxis_$type, xaxis) !== null && (<ISortingAxis><any>xaxis).sortedIndices != null) {
			let sorted: SafeSortedReadOnlyDoubleCollection = new SafeSortedReadOnlyDoubleCollection(0, this.valueColumn, (<ISortingAxis><any>xaxis).sortedIndices);
			yv = (i: number) => sorted.item(i);
		}
		this.uColumn = Numeric.safeCubicSplineFit(this.valueColumn.count, xv, yv, endPointsFirstDerivative, endPointsFirstDerivative);
		let firstBucket: number = parentView.bucketCalculator.firstBucket;
		let lastBucket: number = parentView.bucketCalculator.lastBucket;
		let n: number = <number>truncate(Math.ceil(viewportRect.width / (lastBucket - firstBucket)));
		let collisionAvoider: CollisionAvoider = new CollisionAvoider();
		if (sortingXAxis != null) {
			this.prepareDateTimeFrame1(frame, windowRect, viewportRect, xaxis, yaxis, view);
			return;
		}
		let bucketCount: number = 0;
		let markerBucket: number = 0;
		for (let i: number = firstBucket; i < lastBucket + 1; ++i) {
			if (i >= this.valueColumn.count) {
				break;
			}
			let bucket: number[] = null;
			if (bucketSize == 1) {
				if (i >= (this.valueColumn.count - 1)) {
					if (markers && frame.buckets.count > 0 && this.prepareMarker(frame, frame.buckets._inner[frame.buckets.count - 1], collisionAvoider, Math.min(i * bucketSize, this.fastItemsSource.count - 1), markerCount, view, bucketCount - 1)) {
						++markerCount;
					}
					break;
				}
				let x1: number = xv(i);
				let x2: number = xv(i + 1);
				let y1: number = yv(i);
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
					bucket = <number[]>[ firstPointX, firstPointY, firstPointY ];
				}
			} else {
				bucket = view.bucketCalculator.getBucket(i);
				if (!isNaN_(bucket[0])) {
					bucket[0] = xaxis.getScaledValue(bucket[0], xParams) + offset;
					bucket[1] = yaxis.getScaledValue(bucket[1], yParams);
					bucket[2] = yaxis.getScaledValue(bucket[2], yParams);
					frame.buckets.add(bucket);
				}
			}
			if (markers && this.prepareMarker(frame, bucket, collisionAvoider, Math.min(i * bucketSize, this.fastItemsSource.count - 1), markerCount, view, markerBucket - 1)) {
				++markerCount;
			}
		}
		view.markers.count = markerCount;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.actualBrushPropertyName:
			if (this.logicalSeriesLink != null) {
				this.logicalSeriesLink.actualBrush = this.actualBrush;
			}
			break;

		}

	}
}

/**
 * @hidden 
 */
export class SplineAreaFragment extends SplineFragmentBase {
	static $t: Type = markType(SplineAreaFragment, 'SplineAreaFragment', (<any>SplineFragmentBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>SplineAreaFragment).$type;
	}
	protected createView(): SeriesView {
		return new SplineAreaFragmentView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.splineAreaFragmentView = typeCast<SplineAreaFragmentView>((<any>SplineAreaFragmentView).$type, view);
	}
	private _splineAreaFragmentView: SplineAreaFragmentView;
	private get splineAreaFragmentView(): SplineAreaFragmentView {
		return this._splineAreaFragmentView;
	}
	private set splineAreaFragmentView(value: SplineAreaFragmentView) {
		this._splineAreaFragmentView = value;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	protected testRangeAreaOver(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.splineAreaFragmentView.polygon0.data;
		if (this.testOverPoly(position, pathData1)) {
			return true;
		}
		let pathData2 = <PathGeometry>this.splineAreaFragmentView.polygon1.data;
		if (this.testOverPoly(position, pathData2)) {
			return true;
		}
		return false;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testNearStrokes(position, isFinger)) {
			return true;
		}
		if (this.testRangeAreaOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	private testNearStrokes(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.splineAreaFragmentView.polyline0.data;
		if (this.testNearStroke(position, isFinger, pathData1)) {
			return true;
		}
		let pathData2 = <PathGeometry>this.splineAreaFragmentView.polyline1.data;
		if (this.testNearStroke(position, isFinger, pathData2)) {
			return true;
		}
		return false;
	}
	private _points: PointCollection = null;
	get points(): PointCollection {
		return this._points;
	}
	set points(value: PointCollection) {
		this._points = value;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let splineAreaFragmentView = <SplineAreaFragmentView>view;
		splineAreaFragmentView.clearRendering();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		this.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null ? true : false;
		let splineView: SplineAreaFragmentView = typeCast<SplineAreaFragmentView>((<any>SplineAreaFragmentView).$type, view);
		let bucketSize: number = view.bucketCalculator.bucketSize;
		this.lineRasterizer.rasterizePolygonPaths(splineView.polygon0, splineView.polyline0, splineView.polygon1, splineView.polyline1, frame.buckets.count, frame.buckets, true, bucketSize, this.resolution, (p0: PointCollection, l0: PointCollection, p1: PointCollection, l1: PointCollection, f: boolean) => this.terminatePolygon1(p0, frame.buckets, view), UnknownValuePlotting.DontPlot);
		splineView.polygon0._opacity = this.actualAreaFillOpacity;
		splineView.polygon1._opacity = 0.5 * this.actualAreaFillOpacity;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
	}
	terminatePolygon1(polygon: PointCollection, buckets: List$1<number[]>, view: CategorySeriesView): void {
		let worldZeroValue: number = this.getWorldZeroValue(view);
		let zero: number = worldZeroValue;
		let positive: boolean = this.logicalSeriesLink.positive;
		let seriesCollection: ObservableCollection$1<AnchoredCategorySeries> = positive ? this.parentSeries.stackedSeriesManager.positiveSeries : this.parentSeries.stackedSeriesManager.negativeSeries;
		let seriesIndex: number = seriesCollection.indexOf(this);
		if (polygon.count == 0) {
			return;
		}
		if (seriesIndex == -1) {
			return;
		}
		let foundValidSeries: boolean = false;
		for (let index: number = seriesIndex; index >= 0; index--) {
			if (foundValidSeries) {
				break;
			}
			if (index == 0) {
				polygon.add(<Point>{ $type: Point_$type, x: polygon._inner[polygon.count - 1].x, y: zero });
				polygon.add(<Point>{ $type: Point_$type, x: polygon._inner[0].x, y: zero });
				break;
			}
			let previousSeries: SplineFragmentBase = typeCast<SplineFragmentBase>((<any>SplineFragmentBase).$type, seriesCollection._inner[index - 1]);
			if (previousSeries != null && previousSeries.lineRasterizer != null && previousSeries.lineRasterizer.flattenedLinePoints.count > 0 && this.view != null && previousSeries.validateSeries(this.view.viewport, this.view.windowRect, this.view)) {
				foundValidSeries = true;
				for (let i: number = previousSeries.lineRasterizer.flattenedLinePoints.count - 1; i >= 0; i--) {
					polygon.add(previousSeries.lineRasterizer.flattenedLinePoints._inner[i]);
				}
			}
		}
	}
	getWorldZeroValue(view: CategorySeriesView): number {
		let value: number = 0;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.yAxis != null) {
			value = this.yAxis.getScaledValue(0, yParams);
		}
		return value;
	}
	updateActualAreaFillOpacity(): void {
		let chart = (typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer));
		if (chart != null) {
			this.actualAreaFillOpacity = isNaN_(this.areaFillOpacity) ? this.parentSeries.actualAreaFillOpacity : this.areaFillOpacity;
		}
	}
}

/**
 * @hidden 
 */
export class SplineFragment extends SplineFragmentBase {
	static $t: Type = markType(SplineFragment, 'SplineFragment', (<any>SplineFragmentBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>SplineFragment).$type;
	}
	protected createView(): SeriesView {
		return new SplineFragmentView(this);
	}
	private _splineFragmentView: SplineFragmentView;
	get splineFragmentView(): SplineFragmentView {
		return this._splineFragmentView;
	}
	set splineFragmentView(value: SplineFragmentView) {
		this._splineFragmentView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.splineFragmentView = <SplineFragmentView>view;
	}
	protected testRangeAreaOver(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.splineFragmentView.polygon01.data;
		if (this.testOverPoly(position, pathData1)) {
			return true;
		}
		return false;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testNearStrokes(position, isFinger)) {
			return true;
		}
		if (this.testRangeAreaOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	private testNearStrokes(position: Point, isFinger: boolean): boolean {
		let pathData1 = <PathGeometry>this.splineFragmentView.polyline0.data;
		if (this.testNearStroke(position, isFinger, pathData1)) {
			return true;
		}
		let pathData2 = <PathGeometry>this.splineFragmentView.polyline1.data;
		if (this.testNearStroke(position, isFinger, pathData2)) {
			return true;
		}
		return false;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let splineFragmentView = <SplineFragmentView>view;
		splineFragmentView.clearRendering();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		this.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.xAxis) !== null ? true : false;
		let splineView: SplineFragmentView = typeCast<SplineFragmentView>((<any>SplineFragmentView).$type, view);
		let bucketSize: number = splineView.bucketCalculator.bucketSize;
		this.lineRasterizer.rasterizePolylinePaths(splineView.polyline0, splineView.polygon01, splineView.polyline1, frame.buckets.count, frame.buckets, true, UnknownValuePlotting.DontPlot, this.getLineClipper(frame.buckets, frame.buckets.count - 1, view.viewport, view.windowRect), bucketSize, this.resolution);
	}
}

/**
 * @hidden 
 */
export abstract class StackedSeriesBase extends CategorySeries implements IIsCategoryBased {
	static $t: Type = markType(StackedSeriesBase, 'StackedSeriesBase', (<any>CategorySeries).$type, [IIsCategoryBased_$type]);
	constructor() {
		super();
		this.series = new StackedSeriesCollection();
		let $t = this.series;
		$t.collectionResetting = delegateCombine($t.collectionResetting, runOn(this, this.series_CollectionResetting));
		let $t1 = this.series;
		$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this.series_CollectionChanged));
		this.framePreparer = new StackedSeriesFramePreparer(1, this, this.stackedView, this, this, this.stackedView.bucketCalculator);
		this.stackedSeriesManager = new StackedSeriesManager(this);
		this.autoGeneratedSeries = new StackedSeriesCollection();
		let $t2 = this.autoGeneratedSeries;
		$t2.collectionChanged = delegateCombine($t2.collectionChanged, runOn(this, this.series_CollectionChanged));
		let $t3 = this.autoGeneratedSeries;
		$t3.collectionResetting = delegateCombine($t3.collectionResetting, runOn(this, this.autoGeneratedSeries_CollectionResetting));
	}
	protected get_isHighlightingSupported(): boolean {
		return false;
	}
	getHostReferenceValue(): number {
		return this.getReferenceValue();
	}
	protected createView(): SeriesView {
		return new StackedSeriesView(this);
	}
	private _stackedView: StackedSeriesView;
	get stackedView(): StackedSeriesView {
		return this._stackedView;
	}
	set stackedView(value: StackedSeriesView) {
		this._stackedView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.stackedView = <StackedSeriesView>view;
	}
	onViewportChanged(oldViewportRect: Rect, newViewportRect: Rect): void {
		super.onViewportChanged(oldViewportRect, newViewportRect);
		for (let series of fromEnum<StackedFragmentSeries>(this.series)) {
			series.visualSeriesLink.view.viewport = newViewportRect;
		}
	}
	private _series: StackedSeriesCollection = null;
	get series(): StackedSeriesCollection {
		return this._series;
	}
	set series(value: StackedSeriesCollection) {
		this._series = value;
	}
	getSubSeriesCount(): number {
		if (this.series == null) {
			return -1;
		}
		return this.series.count;
	}
	forSubVisualSeries(action: (arg1: Series) => boolean): void {
		for (let i = 0; i < this.stackedSeriesManager.seriesVisual.count; i++) {
			let series = this.stackedSeriesManager.seriesVisual._inner[i];
			if (!action(series)) {
				break;
			}
		}
	}
	static readonly autoGenerateSeriesPropertyName: string = "AutoGenerateSeries";
	static readonly autoGenerateSeriesProperty: DependencyProperty = DependencyProperty.register(StackedSeriesBase.autoGenerateSeriesPropertyName, Boolean_$type, (<any>StackedSeriesBase).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedSeriesBase>o).raisePropertyChanged(StackedSeriesBase.autoGenerateSeriesPropertyName, e.oldValue, e.newValue)));
	get autoGenerateSeries(): boolean {
		return <boolean>this.getValue(StackedSeriesBase.autoGenerateSeriesProperty);
	}
	set autoGenerateSeries(value: boolean) {
		this.setValue(StackedSeriesBase.autoGenerateSeriesProperty, value);
	}
	static readonly reverseLegendOrderPropertyName: string = "ReverseLegendOrder";
	static readonly reverseLegendOrderProperty: DependencyProperty = DependencyProperty.register(StackedSeriesBase.reverseLegendOrderPropertyName, Boolean_$type, (<any>StackedSeriesBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedSeriesBase>sender).raisePropertyChanged(StackedSeriesBase.reverseLegendOrderPropertyName, e.oldValue, e.newValue)));
	get reverseLegendOrder(): boolean {
		return <boolean>this.getValue(StackedSeriesBase.reverseLegendOrderProperty);
	}
	set reverseLegendOrder(value: boolean) {
		this.setValue(StackedSeriesBase.reverseLegendOrderProperty, value);
	}
	protected get_isStacked(): boolean {
		return true;
	}
	seriesCreated: (sender: any, e: StackedSeriesCreatedEventArgs) => void = null;
	static readonly seriesVisibilityPropertyName: string = "SeriesVisibility";
	static readonly seriesVisibilityProperty: DependencyProperty = DependencyProperty.register(StackedSeriesBase.seriesVisibilityPropertyName, Visibility_$type, (<any>StackedSeriesBase).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedSeriesBase>o).raisePropertyChanged(StackedSeriesBase.seriesVisibilityPropertyName, e.oldValue, e.newValue)));
	get seriesVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(StackedSeriesBase.seriesVisibilityProperty));
	}
	set seriesVisibility(value: Visibility) {
		this.setValue(StackedSeriesBase.seriesVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	private _minimum: number = 0;
	get minimum(): number {
		return this._minimum;
	}
	set minimum(value: number) {
		this._minimum = value;
	}
	private _maximum: number = 0;
	get maximum(): number {
		return this._maximum;
	}
	set maximum(value: number) {
		this._maximum = value;
	}
	private _highs: number[] = null;
	get highs(): number[] {
		return this._highs;
	}
	set highs(value: number[]) {
		this._highs = value;
	}
	private _lows: number[] = null;
	get lows(): number[] {
		return this._lows;
	}
	set lows(value: number[]) {
		this._lows = value;
	}
	private _stackedSeriesManager: StackedSeriesManager = null;
	get stackedSeriesManager(): StackedSeriesManager {
		return this._stackedSeriesManager;
	}
	set stackedSeriesManager(value: StackedSeriesManager) {
		this._stackedSeriesManager = value;
	}
	private _autoGeneratedSeries: StackedSeriesCollection = null;
	get autoGeneratedSeries(): StackedSeriesCollection {
		return this._autoGeneratedSeries;
	}
	set autoGeneratedSeries(value: StackedSeriesCollection) {
		this._autoGeneratedSeries = value;
	}
	get actualSeries(): StackedSeriesCollection {
		return this.autoGenerateSeries ? this.autoGeneratedSeries : this.series;
	}
	private autoGeneratedSeries_CollectionResetting(sender: any, e: EventArgs): void {
		for (let series of fromEnum<StackedFragmentSeries>(this.autoGeneratedSeries)) {
			if (this.stackedSeriesManager != null && this.stackedSeriesManager.seriesLogical.contains(series)) {
				series.parentSeries = null;
				this.stackedSeriesManager.seriesLogical.remove(series);
			}
		}
	}
	private series_CollectionResetting(sender: any, e: EventArgs): void {
		for (let series of fromEnum<StackedFragmentSeries>(this.series)) {
			if (this.stackedSeriesManager != null && this.stackedSeriesManager.seriesLogical.contains(series)) {
				series.parentSeries = null;
				this.stackedSeriesManager.seriesLogical.remove(series);
			}
		}
	}
	private series_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let series of fromEn<StackedFragmentSeries>(e.oldItems)) {
				if (this.stackedSeriesManager != null && this.stackedSeriesManager.seriesLogical.contains(series)) {
					series.parentSeries = null;
					this.stackedSeriesManager.seriesLogical.remove(series);
				}
			}
		}
		if (e.newItems != null) {
			let counter: number = e.newStartingIndex;
			for (let series1 of fromEn<StackedFragmentSeries>(e.newItems)) {
				if (this.stackedSeriesManager != null && !this.stackedSeriesManager.seriesLogical.contains(series1)) {
					series1.parentSeries = this;
					series1.updateIsDropShadowEnabled();
					series1.updateShadowBlur();
					series1.updateShadowColor();
					series1.updateUseSingleShadow();
					series1.updateShadowOffsetX();
					series1.updateShadowOffsetY();
					series1.updateBrush();
					series1.updateDashArray();
					series1.updateDashCap();
					series1.updateEndCap();
					series1.updateIsHitTestVisible();
					series1.updateLegendItemBadgeTemplate();
					series1.updateLegendItemTemplate();
					series1.updateLegendItemVisibility();
					series1.updateMarkerTemplate();
					series1.updateMarkerType();
					series1.updateMarkerBrush();
					series1.updateMarkerOutline();
					series1.updateMarkerStyle();
					series1.updateMarkerTemplate();
					series1.updateOpacity();
					series1.updateOpacityMask();
					series1.updateOutline();
					series1.updateAreaFillOpacity();
					series1.updateRadiusX();
					series1.updateRadiusY();
					series1.updateStartCap();
					series1.updateThickness();
					series1.updateToolTip();
					series1.updateUseLightweightMarkers();
					series1.updateVisibility();
					if (!this.autoGenerateSeries) {
						this.stackedSeriesManager.seriesLogical.insert(counter, series1);
						counter++;
					}
				}
			}
		}
		if (!this.autoGenerateSeries) {
			this.updateAxisRanges();
		}
	}
	simulateHover(point: Point): void {
		this.chart.view.onMouseOver(point, true, false);
	}
	getFramePreparer(view: CategorySeriesView): CategoryFramePreparer {
		if (view != null && view.isThumbnailView) {
			if (view.isAlternateView) {
				return new StackedSeriesFramePreparer(1, typeCast<IIsCategoryBased>(IIsCategoryBased_$type, this), typeCast<ISupportsMarkers>(ISupportsMarkers_$type, view), view, this, view.bucketCalculator);
			} else {
				let thumbnailView: CategorySeriesView = typeCast<CategorySeriesView>((<any>CategorySeriesView).$type, this.thumbnailView);
				return new StackedSeriesFramePreparer(1, this, typeCast<ISupportsMarkers>(ISupportsMarkers_$type, thumbnailView), this.seriesViewer.view.overviewPlusDetailViewportHost, this, thumbnailView.bucketCalculator);
			}
		} else {
			return this.framePreparer;
		}
	}
	prepareFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		frame.clearFrame();
		this.prepareData();
		this.getFramePreparer(view).prepareFrame(frame, view);
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		for (let series of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
			if (series.visualSeriesLink != null) {
				series.visualSeriesLink.clearRendering(wipeClean, series.visualSeriesLink.view);
			}
		}
	}
	calculateStackedValues(): void {
		this.prepareData();
	}
	updateAxisRanges(): void {
		let xAxis: Axis = this.fetchXAxis();
		if (xAxis != null) {
			xAxis.updateRange1(true);
		}
		let yAxis: Axis = this.fetchYAxis();
		if (yAxis != null) {
			yAxis.updateRange1(true);
		}
	}
	scrollIntoView(item: any): boolean {
		let index: number = this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view.viewport;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		if (index >= 0 && Rect.l_op_Inequality(windowRect, null) && Rect.l_op_Inequality(viewportRect, null)) {
			let xAxis: Axis = this.fetchXAxis();
			if (xAxis != null) {
				let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, xAxis.isInverted, effectiveViewportRect);
				let cx: number = xAxis.getScaledValue(index, xParams);
				if (cx < windowRect.left + 0.1 * windowRect.width) {
					cx = cx + 0.4 * windowRect.width;
				}
				if (cx > windowRect.right - 0.1 * windowRect.width) {
					cx = cx - 0.4 * windowRect.width;
				}
				windowRect.x = cx - 0.5 * windowRect.width;
			}
			let yAxis: Axis = this.fetchYAxis();
			if (yAxis != null && this.highs != null && index < this.highs.length) {
				let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, yAxis.isInverted, effectiveViewportRect);
				let high: number = yAxis.getScaledValue(this.highs[index], yParams);
				let low: number = yAxis.getScaledValue(this.lows[index], yParams);
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
			this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	getRange(axis: Axis): AxisRange {
		if (this.lows == null || this.lows.length == 0 || this.highs == null || this.highs.length == 0) {
			return null;
		}
		if (axis == this.fetchXAxis()) {
			let max: number = Math.min(this.lows.length, this.highs.length);
			return new AxisRange(0, max - 1);
		}
		if (axis == this.fetchYAxis()) {
			return new AxisRange(this.minimum, this.maximum);
		}
		return null;
	}
	shouldDisplayMarkers(): boolean {
		return false;
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		this.prepareData();
		this.updateNumericAxisRange();
		this.renderSeries(false);
	}
	getSeriesView(): CategorySeriesView {
		return this.stackedView;
	}
	getScaledWorldZeroValue(): number {
		let value: number = 0;
		let windowRect: Rect = this.view.windowRect;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let yAxis: NumericYAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.fetchYAxis());
		if (!windowRect.isEmpty && !viewportRect.isEmpty && yAxis != null) {
			let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, yAxis.isInverted, effectiveViewportRect);
			value = yAxis.getScaledValue(yAxis.referenceValue, yParams);
		}
		return value;
	}
	getUnscaledWorldZeroValue(): number {
		let yAxis: NumericYAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.fetchYAxis());
		if (yAxis != null) {
			return yAxis.referenceValue;
		}
		return 0;
	}
	getFragmentSeriesIndex(series: StackedFragmentSeries): number {
		return this.index < 0 || this.actualSeries == null || this.actualSeries.count == 0 ? -1 : this.index + this.actualSeries.indexOf(series);
	}
	getFragmentItemIndex(world: Point): number {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let xAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.fetchXAxis());
		let rowIndex: number = -1;
		if (xAxis != null && !windowRect.isEmpty && !viewportRect.isEmpty) {
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, xAxis.isInverted, effectiveViewportRect);
			let contentViewport = this.getContentViewport(this.view);
			let left: number = xAxis.getUnscaledValue(contentViewport.left, p);
			let right: number = xAxis.getUnscaledValue(contentViewport.right, p);
			let windowX: number = (world.x - windowRect.left) / windowRect.width;
			let bucket: number = left + (windowX * (right - left));
			if (xAxis.categoryMode != CategoryMode.Mode0) {
				bucket -= 0.5;
			}
			let bucketNumber: number = <number>truncate(Math.round(bucket));
			rowIndex = bucketNumber;
		}
		return rowIndex;
	}
	validateFragmentSeries(series: AnchoredCategorySeries, viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		let xAxis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.fetchXAxis());
		let yAxis: NumericYAxis = typeCast<NumericYAxis>((<any>NumericYAxis).$type, this.fetchYAxis());
		if (!view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || xAxis == null || xAxis.itemsSource == null || yAxis == null || this.fastItemsSource == null || xAxis.seriesViewer == null || yAxis.seriesViewer == null || yAxis.actualMinimumValue == yAxis.actualMaximumValue) {
			isValid = false;
		}
		let categoryView = <CategorySeriesView>view;
		let bucketSize: number = categoryView.bucketCalculator.bucketSize;
		if (series.valueColumn == null || series.valueColumn.count == 0 || bucketSize < 1 || series._visibility != Visibility.Visible) {
			isValid = false;
		}
		return isValid;
	}
	private _previousSeriesKeys: Dictionary$2<string, boolean> = new Dictionary$2<string, boolean>(String_$type, Boolean_$type, 0);
	generateSeries(): void {
		if (this.seriesViewer == null || this.stackedSeriesManager == null) {
			return;
		}
		if (!this.autoGenerateSeries) {
			this.autoGeneratedSeries.clear();
			for (let series of fromEnum<StackedFragmentSeries>(this.series)) {
				if (!this.stackedSeriesManager.seriesLogical.contains(series)) {
					this.stackedSeriesManager.seriesLogical.add(series);
				}
			}
			this.updateAxisRanges();
			return;
		}
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		this.stackedSeriesManager.renderSeries();
	}
	renderFragment(series: AnchoredCategorySeries, frame: CategoryFrame, view: CategorySeriesView): void {
	}
	protected prepareData(): void {
		if (this.fastItemsSource == null) {
			return;
		}
		let count: number = this.fastItemsSource.count;
		this.highs = <number[]>new Array(count);
		this.lows = <number[]>new Array(count);
		for (let i: number = 0; i < count; i++) {
			this.highs[i] = 0;
			this.lows[i] = 0;
		}
		this.minimum = Number.POSITIVE_INFINITY;
		this.maximum = Number.NEGATIVE_INFINITY;
		let zero: number = 0;
		for (let series of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
			this.fastItemsSource.deregisterColumn(series.valueColumn);
			series.valueColumn = this.registerDoubleColumn(series.valueMemberPath);
			if (series.visualSeriesLink != null) {
				series.visualSeriesLink.shouldSuspendChangedNotification = true;
				series.visualSeriesLink.valueColumn = series.valueColumn;
				series.visualSeriesLink.shouldSuspendChangedNotification = false;
			}
			series.positive = true;
			if (series.valueColumn != null) {
				series.highValues.clear();
				series.lowValues.clear();
				for (let i1: number = 0; i1 < series.valueColumn.count; i1++) {
					let value: number = series.valueColumn.item(i1);
					if (value < zero) {
						series.highValues.add(zero);
						series.lowValues.add(this.lows[i1]);
						this.lows[i1] = this.lows[i1] + value;
						if (series.positive) {
							series.positive = false;
						}
					} else if (value >= zero) {
						series.highValues.add(this.highs[i1]);
						series.lowValues.add(zero);
						this.highs[i1] = this.highs[i1] + value;
					} else if (isNaN_(value) || isInfinity(value)) {
						series.highValues.add(this.highs[i1]);
						series.lowValues.add(this.lows[i1]);
					}
				}
			}
		}
		for (let i2: number = 0; i2 < count; i2++) {
			this.minimum = Math.min(this.minimum, this.lows[i2]);
			this.maximum = Math.max(this.maximum, this.highs[i2]);
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategorySeries.seriesViewerPropertyName:
			if (oldValue != null && newValue == null) {
				this.deregisterForAxis(this.fetchXAxis());
				this.deregisterForAxis(this.fetchYAxis());
			}
			if (oldValue == null && newValue != null) {
				this.registerForAxis(this.fetchXAxis());
				this.registerForAxis(this.fetchYAxis());
			}
			if (this.actualSeries != null) {
				for (let series of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
					series.chart = this.seriesViewer;
				}
				this.renderSeries(false);
			}
			break;

			case Series.itemsSourcePropertyName:
			if (this.actualSeries != null) {
				for (let series1 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
					if (series1.visualSeriesLink != null) {
						series1.visualSeriesLink.itemsSource = <IEnumerable><any>newValue;
					}
				}
			}
			break;

			case CategorySeries.fastItemsSourcePropertyName:
			if (this.autoGenerateSeries) {
				this.generateSeries();
			}
			if (!this.updateNumericAxisRange()) {
				this.stackedView.bucketCalculator.calculateBuckets(this.resolution);
			}
			this.renderSeries(false);
			break;

			case StackedSeriesBase.autoGenerateSeriesPropertyName:
			this.generateSeries();
			break;

			case StackedSeriesBase.reverseLegendOrderPropertyName:
			if (this.seriesViewer != null) {
				this.seriesViewer.onLegendSortChanged1(this.stackedSeriesManager.seriesVisual);
			}
			break;

			case StackedSeriesBase.seriesVisibilityPropertyName:
			for (let series2 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series2.updateVisibility();
			}
			break;

			case Series.brushPropertyName:
			for (let series3 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series3.updateBrush();
			}
			break;

			case Series.dashArrayPropertyName:
			for (let series4 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series4.updateDashArray();
			}
			break;

			case Series.dashCapPropertyName:
			for (let series5 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series5.updateDashCap();
			}
			break;

			case Series.isDropShadowEnabledPropertyName:
			for (let series6 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series6.updateIsDropShadowEnabled();
			}
			break;

			case Series.shadowBlurPropertyName:
			for (let series7 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series7.updateShadowBlur();
			}
			break;

			case Series.shadowColorPropertyName:
			for (let series8 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series8.updateShadowColor();
			}
			break;

			case Series.useSingleShadowPropertyName:
			for (let series9 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series9.updateUseSingleShadow();
			}
			break;

			case Series.shadowOffsetXPropertyName:
			for (let series10 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series10.updateShadowOffsetX();
			}
			break;

			case Series.shadowOffsetYPropertyName:
			for (let series11 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series11.updateShadowOffsetY();
			}
			break;

			case Series.endCapPropertyName:
			for (let series12 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series12.updateEndCap();
			}
			break;

			case "IsHitTestVisible":
			for (let series13 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series13.updateIsHitTestVisible();
			}
			break;

			case Series.legendItemBadgeTemplatePropertyName:
			for (let series14 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series14.updateLegendItemBadgeTemplate();
			}
			break;

			case Series.legendItemTemplatePropertyName:
			for (let series15 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series15.updateLegendItemTemplate();
			}
			break;

			case Series.legendItemVisibilityPropertyName:
			for (let series16 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series16.updateLegendItemVisibility();
			}
			break;

			case MarkerSeries.markerTemplatePropertyName:
			for (let series17 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series17.updateMarkerTemplate();
			}
			break;

			case MarkerSeries.markerTypePropertyName:
			for (let series18 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series18.updateMarkerType();
			}
			break;

			case MarkerSeries.markerBrushPropertyName:
			for (let series19 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series19.updateMarkerBrush();
			}
			break;

			case MarkerSeries.markerOutlinePropertyName:
			for (let series20 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series20.updateMarkerOutline();
			}
			break;

			case MarkerSeries.markerStylePropertyName:
			for (let series21 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series21.updateMarkerStyle();
			}
			break;

			case "Opacity":
			for (let series22 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series22.updateOpacity();
			}
			break;

			case "OpacityMask":
			for (let series23 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series23.updateOpacityMask();
			}
			break;

			case "AreaFillOpacity":
			for (let series24 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series24.updateAreaFillOpacity();
			}
			break;

			case Series.outlinePropertyName:
			for (let series25 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series25.updateOutline();
			}
			break;

			case Series.startCapPropertyName:
			for (let series26 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series26.updateStartCap();
			}
			break;

			case Series.thicknessPropertyName:
			for (let series27 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series27.updateThickness();
			}
			break;

			case Series.toolTipPropertyName:
			for (let series28 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series28.updateToolTip();
			}
			break;

			case MarkerSeries.useLightweightMarkersPropertyName:
			for (let series29 of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series29.updateUseLightweightMarkers();
			}
			break;

		}

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
	protected shouldTransitionIn(): boolean {
		return false;
	}
	protected get_isDropShadowSupported(): boolean {
		return false;
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
		for (let fragment of fromEnum<StackedFragmentSeries>(this.series)) {
			fragment.visualSeriesLink.renderThumbnail(viewportRect, surface);
		}
		this.thumbnailDirty = false;
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
		(<CategorySeriesView>view).bucketCalculator.calculateBuckets(this.resolution);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		if (this.alternateFrame == null) {
			this.alternateFrame = new CategoryFrame(3);
		}
		this.alternateFrame.clearFrame();
		this.prepareData();
		this.getFramePreparer(<CategorySeriesView>view).prepareFrame(this.alternateFrame, view);
		this.renderFrame(this.alternateFrame, <CategorySeriesView>view);
		for (let fragment of fromEnum<StackedFragmentSeries>(this.series)) {
			fragment.visualSeriesLink.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		}
	}
	exportVisualData(): any {
		let svd = this.seriesVisualDataManager.exportStackedVisualData(this, this.viewport);
		for (let fragment of fromEnum<StackedFragmentSeries>(this.series)) {
			let fragmentVisualData = this.seriesVisualDataManager.createFragmentVisualData(this, this.viewport, getInstanceType(fragment).typeName, fragment.name);
			fragment.visualSeriesLink.view.exportViewShapes(fragmentVisualData);
			this.seriesVisualDataManager.addSubSeriesVisualData(svd, fragmentVisualData);
		}
		this.exportVisualDataOverride(svd);
		this.view.exportViewShapes(svd);
		return svd;
	}
	get mayContainUnknowns(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export abstract class HorizontalStackedSeriesBase extends StackedSeriesBase {
	static $t: Type = markType(HorizontalStackedSeriesBase, 'HorizontalStackedSeriesBase', (<any>StackedSeriesBase).$type);
	get xAxis(): CategoryAxisBase {
		return <CategoryAxisBase>this.getValue(HorizontalStackedSeriesBase.xAxisProperty);
	}
	set xAxis(value: CategoryAxisBase) {
		this.setValue(HorizontalStackedSeriesBase.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(HorizontalStackedSeriesBase.xAxisPropertyName, (<any>CategoryAxisBase).$type, (<any>HorizontalStackedSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HorizontalStackedSeriesBase>sender).raisePropertyChanged(HorizontalStackedSeriesBase.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(HorizontalStackedSeriesBase.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(HorizontalStackedSeriesBase.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(HorizontalStackedSeriesBase.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>HorizontalStackedSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<HorizontalStackedSeriesBase>sender).raisePropertyChanged(HorizontalStackedSeriesBase.yAxisPropertyName, e.oldValue, e.newValue)));
	getOffsetValue(): number {
		return this.framePreparer.getOffset(this.xAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getCategoryWidth(): number {
		return this.xAxis.getCategorySize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	fetchXAxis(): Axis {
		return this.xAxis;
	}
	fetchYAxis(): Axis {
		return this.yAxis;
	}
	getAxes(): Axis[] {
		return <Axis[]>[ this.fetchXAxis(), this.fetchYAxis() ];
	}
	updateNumericAxisRange(): boolean {
		return this.yAxis != null && this.yAxis.updateRange();
	}
	updateActualAreaFillOpacity(): void {
		let chart = (typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer));
		if (chart != null) {
			this.actualAreaFillOpacity = isNaN_(this.areaFillOpacity) ? chart.chartView.defaultAreaFillOpacity : this.areaFillOpacity;
			for (let series of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series.updateAreaFillOpacity();
			}
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case HorizontalStackedSeriesBase.xAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
			}
			break;

			case HorizontalStackedSeriesBase.yAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.updateNumericAxisRange();
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
			}
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

/**
 * @hidden 
 */
export class StackedAreaSeries extends HorizontalStackedSeriesBase {
	static $t: Type = markType(StackedAreaSeries, 'StackedAreaSeries', (<any>HorizontalStackedSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>StackedAreaSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	getRange(axis: Axis): AxisRange {
		if (this.itemsSource == null) {
			return null;
		}
		if (axis == this.xAxis) {
			return new AxisRange(0, this.fastItemsSource.count - 1);
		}
		if (axis == this.yAxis) {
			this.prepareData();
			return new AxisRange(this.minimum, this.maximum);
		}
		return null;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
}

/**
 * @hidden 
 */
export abstract class VerticalStackedSeriesBase extends StackedSeriesBase {
	static $t: Type = markType(VerticalStackedSeriesBase, 'VerticalStackedSeriesBase', (<any>StackedSeriesBase).$type);
	get xAxis(): NumericXAxis {
		return <NumericXAxis>this.getValue(VerticalStackedSeriesBase.xAxisProperty);
	}
	set xAxis(value: NumericXAxis) {
		this.setValue(VerticalStackedSeriesBase.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(VerticalStackedSeriesBase.xAxisPropertyName, (<any>NumericXAxis).$type, (<any>VerticalStackedSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<VerticalStackedSeriesBase>sender).raisePropertyChanged(VerticalStackedSeriesBase.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): CategoryYAxis {
		return <CategoryYAxis>this.getValue(VerticalStackedSeriesBase.yAxisProperty);
	}
	set yAxis(value: CategoryYAxis) {
		this.setValue(VerticalStackedSeriesBase.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	getCategoryAxis(): CategoryAxisBase {
		return <CategoryAxisBase>this.yAxis;
	}
	getValueAxis(): NumericAxisBase {
		return <NumericAxisBase>this.xAxis;
	}
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(VerticalStackedSeriesBase.yAxisPropertyName, (<any>CategoryYAxis).$type, (<any>VerticalStackedSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<VerticalStackedSeriesBase>sender).raisePropertyChanged(VerticalStackedSeriesBase.yAxisPropertyName, e.oldValue, e.newValue)));
	getOffsetValue(): number {
		return this.framePreparer.getOffset(this.yAxis, this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	getCategoryWidth(): number {
		return this.yAxis.getCategorySize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	protected get_isVertical(): boolean {
		return true;
	}
	fetchXAxis(): Axis {
		return this.xAxis;
	}
	fetchYAxis(): Axis {
		return this.yAxis;
	}
	updateNumericAxisRange(): boolean {
		return this.xAxis != null && this.xAxis.updateRange();
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case VerticalStackedSeriesBase.xAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
			}
			break;

			case VerticalStackedSeriesBase.yAxisPropertyName:
			if (oldValue != newValue) {
				this.deregisterForAxis(typeCast<Axis>((<any>Axis).$type, oldValue));
				this.registerForAxis(typeCast<Axis>((<any>Axis).$type, newValue));
				this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
				this.updateNumericAxisRange();
				this.renderSeries(false);
				this.notifyThumbnailAppearanceChanged();
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

/**
 * @hidden 
 */
export class StackedBarSeries extends VerticalStackedSeriesBase implements IIsCategoryBased, IBarSeries {
	static $t: Type = markType(StackedBarSeries, 'StackedBarSeries', (<any>VerticalStackedSeriesBase).$type, [IIsCategoryBased_$type, IBarSeries_$type]);
	constructor() {
		super();
		this.defaultStyleKey = (<any>StackedBarSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	protected createView(): SeriesView {
		return new StackedBarSeriesView(this);
	}
	private _stackedBarView: StackedBarSeriesView;
	get stackedBarView(): StackedBarSeriesView {
		return this._stackedBarView;
	}
	set stackedBarView(value: StackedBarSeriesView) {
		this._stackedBarView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.stackedBarView = <StackedBarSeriesView>view;
	}
	get radiusX(): number {
		return <number>this.getValue(StackedBarSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(StackedBarSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(StackedBarSeries.radiusXPropertyName, Number_$type, (<any>StackedBarSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedBarSeries>sender).raisePropertyChanged(StackedBarSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(StackedBarSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(StackedBarSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(StackedBarSeries.radiusYPropertyName, Number_$type, (<any>StackedBarSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedBarSeries>sender).raisePropertyChanged(StackedBarSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	getHostReferenceValue(): number {
		return this.getReferenceValue();
	}
	getSeriesView(): CategorySeriesView {
		return this.stackedBarView;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode2;
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
	getScaledWorldZeroValue(): number {
		let value: number = 0;
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.view.viewport;
		if (!windowRect.isEmpty && !viewportRect.isEmpty && this.xAxis != null) {
			let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
			let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
			value = this.xAxis.getScaledValue(this.xAxis.referenceValue, xParams);
		}
		return value;
	}
	getUnscaledWorldZeroValue(): number {
		if (this.xAxis != null) {
			return this.xAxis.referenceValue;
		}
		return 0;
	}
	getRange(axis: Axis): AxisRange {
		if (this.itemsSource == null) {
			return null;
		}
		if (axis == this.yAxis) {
			return new AxisRange(0, this.fastItemsSource.count - 1);
		}
		if (axis == this.xAxis) {
			this.prepareData();
			return new AxisRange(this.minimum, this.maximum);
		}
		return null;
	}
	scrollIntoView(item: any): boolean {
		let index: number = this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view.viewport;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.xAxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, effectiveViewportRect);
		if (index >= 0 && Rect.l_op_Inequality(windowRect, null) && Rect.l_op_Inequality(viewportRect, null)) {
			if (this.yAxis != null) {
				let cy: number = this.yAxis.getScaledValue(index, yParams);
				if (cy < windowRect.top + 0.1 * windowRect.height) {
					cy = cy + 0.4 * windowRect.height;
				}
				if (cy > windowRect.bottom - 0.1 * windowRect.height) {
					cy = cy - 0.4 * windowRect.height;
				}
				windowRect.y = cy - 0.5 * windowRect.height;
			}
			if (this.xAxis != null && this.highs != null && index < this.highs.length) {
				let high: number = this.xAxis.getScaledValue(this.highs[index], xParams);
				let low: number = this.xAxis.getScaledValue(this.lows[index], xParams);
				if (!isNaN_(high) && !isNaN_(low)) {
					let width: number = Math.abs(low - high);
					if (windowRect.width < width) {
						windowRect.width = width;
						windowRect.x = Math.min(low, high);
					} else {
						if (low < windowRect.left + 0.1 * windowRect.width) {
							low = low + 0.4 * windowRect.width;
						}
						if (low > windowRect.right - 0.1 * windowRect.width) {
							low = low - 0.4 * windowRect.width;
						}
						windowRect.x = low - 0.5 * windowRect.width;
					}
				}
			}
			this.syncLink.windowNotify1(this.seriesViewer, windowRect, true);
		}
		return index >= 0;
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		let categoryView = <CategorySeriesView>view;
		if (!view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || this.yAxis == null || this.yAxis.itemsSource == null || this.xAxis == null || this.fastItemsSource == null || this.xAxis.seriesViewer == null || this.yAxis.seriesViewer == null || this.xAxis.actualMinimumValue == this.xAxis.actualMaximumValue) {
			categoryView.bucketCalculator.bucketSize = 0;
			isValid = false;
		}
		return isValid;
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		switch (action) {
			case FastItemsSourceEventAction.Reset:

			case FastItemsSourceEventAction.Insert:

			case FastItemsSourceEventAction.Remove:
			this.categoryView.bucketCalculator.calculateBuckets(this.resolution);
			break;

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
			if (this.categoryView.bucketCalculator.bucketSize > 0) {
				this.renderSeries(true);
			}
			break;

			case FastItemsSourceEventAction.Change:
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.renderSeries(true);
			}
			break;

		}

	}
	getItemIndex(world: Point): number {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(this.view);
		let rowIndex: number = -1;
		if (this.yAxis != null && !windowRect.isEmpty && !viewportRect.isEmpty) {
			let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
			let contentViewport = this.getContentViewport(this.view);
			let top: number = this.yAxis.getUnscaledValue(contentViewport.top, p);
			let bottom: number = this.yAxis.getUnscaledValue(contentViewport.bottom, p);
			let windowY: number = (world.y - windowRect.top) / windowRect.height;
			let bucket: number = top + (windowY * (bottom - top));
			if (this.yAxis.categoryMode != CategoryMode.Mode0) {
				bucket -= 0.5;
			}
			let bucketNumber: number = <number>truncate(Math.round(bucket));
			rowIndex = bucketNumber;
		}
		return rowIndex;
	}
	getItem(world: Point): any {
		let index: number = this.getItemIndex(world);
		return index >= 0 && this.fastItemsSource != null && index < this.fastItemsSource.count ? this.fastItemsSource.item(index) : null;
	}
	updateAxisRanges(): void {
		if (this.xAxis != null) {
			this.xAxis.updateRange1(true);
		}
		if (this.yAxis != null) {
			this.yAxis.updateRange1(true);
		}
	}
	getFragmentItemIndex(world: Point): number {
		return this.getItemIndex(world);
	}
	validateFragmentSeries(series: AnchoredCategorySeries, viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		if (!view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || this.yAxis == null || this.yAxis.itemsSource == null || this.xAxis == null || this.fastItemsSource == null || this.xAxis.seriesViewer == null || this.yAxis.seriesViewer == null) {
			isValid = false;
		}
		let categoryView = <CategorySeriesView>view;
		if (series.valueColumn == null || series.valueColumn.count == 0 || categoryView.bucketCalculator.bucketSize < 1) {
			isValid = false;
		}
		return isValid;
	}
	getItemSpan(): number {
		return this.yAxis.getGroupSize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	renderFragment(series: AnchoredCategorySeries, frame: CategoryFrame, view: CategorySeriesView): void {
		let barSeries: BarFragment = typeCast<BarFragment>((<any>BarFragment).$type, series);
		let fragmentView: ColumnFragmentView = typeCast<ColumnFragmentView>((<any>ColumnFragmentView).$type, view);
		if (!this.validateSeries(view.viewport, view.windowRect, view) || barSeries == null || fragmentView == null) {
			return;
		}
		let groupWidth: number = this.yAxis.getGroupSize(view.windowRect, view.viewport, this.getEffectiveViewport1(view));
		if (isNaN_(groupWidth) || isInfinity(groupWidth)) {
			barSeries.columnFragmentView.columns.count = 0;
			return;
		}
		let counter: number = 0;
		for (let bucket of fromEnum<number[]>(frame.buckets)) {
			if (isInfinity(bucket[0]) || isNaN_(bucket[0]) || isInfinity(bucket[1]) || isInfinity(bucket[2]) || isNaN_(bucket[1]) || isNaN_(bucket[2])) {
				continue;
			}
			let top: number = bucket[0] - 0.5 * groupWidth;
			let right: number = bucket[1];
			let left: number = bucket[2];
			left = Math.max(left, -100);
			right = Math.min(right, view.viewport.right + 100);
			let column: Rectangle = fragmentView.columns.item(counter);
			column.height = groupWidth;
			column.width = Math.abs(right - left);
			fragmentView.positionRectangle(column, Math.min(right, left), top);
			counter++;
		}
		fragmentView.columns.count = counter;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case StackedBarSeries.radiusXPropertyName:

			case StackedBarSeries.radiusYPropertyName:
			for (let series of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series.updateRadiusX();
				series.updateRadiusY();
			}
			this.renderSeries(false);
			break;

			case Series.syncLinkPropertyName:
			if (this.xAxis != null) {
				this.xAxis.updateRange();
			}
			break;

			case CategorySeries.fastItemsSourcePropertyName:
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.stackedBarView.bucketCalculator.calculateBuckets(this.resolution);
			}
			this.renderSeries(false);
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
			this.stackedBarView.bucketCalculator.calculateBuckets(this.resolution);
			this.renderSeries(false);
			if (this.xAxis != null) {
				this.xAxis.updateRange();
			}
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
	get mayContainUnknowns(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export class StackedColumnSeries extends HorizontalStackedSeriesBase {
	static $t: Type = markType(StackedColumnSeries, 'StackedColumnSeries', (<any>HorizontalStackedSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>StackedColumnSeries).$type;
	}
	protected createView(): SeriesView {
		return new StackedColumnSeriesView(this);
	}
	private _stackedColumnView: StackedColumnSeriesView;
	get stackedColumnView(): StackedColumnSeriesView {
		return this._stackedColumnView;
	}
	set stackedColumnView(value: StackedColumnSeriesView) {
		this._stackedColumnView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.stackedColumnView = <StackedColumnSeriesView>view;
	}
	get radiusX(): number {
		return <number>this.getValue(StackedColumnSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(StackedColumnSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(StackedColumnSeries.radiusXPropertyName, Number_$type, (<any>StackedColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedColumnSeries>sender).raisePropertyChanged(StackedColumnSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(StackedColumnSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(StackedColumnSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(StackedColumnSeries.radiusYPropertyName, Number_$type, (<any>StackedColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedColumnSeries>sender).raisePropertyChanged(StackedColumnSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	getSeriesView(): CategorySeriesView {
		return this.stackedColumnView;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode2;
	}
	getRange(axis: Axis): AxisRange {
		if (this.itemsSource == null) {
			return null;
		}
		if (axis == this.xAxis) {
			return new AxisRange(0, this.fastItemsSource.count - 1);
		}
		if (axis == this.yAxis) {
			this.prepareData();
			return new AxisRange(this.minimum, this.maximum);
		}
		return null;
	}
	getItemSpan(): number {
		let effectiveViewport = this.getEffectiveViewport1(this.view);
		return this.xAxis.getGroupSize(this.view.windowRect, this.view.viewport, effectiveViewport);
	}
	renderFragment(series: AnchoredCategorySeries, frame: CategoryFrame, view: CategorySeriesView): void {
		let columnSeries: ColumnFragment = typeCast<ColumnFragment>((<any>ColumnFragment).$type, series);
		let fragmentView: ColumnFragmentView = typeCast<ColumnFragmentView>((<any>ColumnFragmentView).$type, view);
		if (!this.validateSeries(view.viewport, view.windowRect, view) || columnSeries == null || fragmentView == null) {
			return;
		}
		if (columnSeries == null) {
			return;
		}
		let effectiveViewport = this.getEffectiveViewport1(view);
		let groupWidth: number = this.xAxis.getGroupSize(view.windowRect, view.viewport, effectiveViewport);
		if (isNaN_(groupWidth) || isInfinity(groupWidth)) {
			columnSeries.columnFragmentView.columns.count = 0;
			return;
		}
		let counter: number = 0;
		for (let bucket of fromEnum<number[]>(frame.buckets)) {
			if (isInfinity(bucket[0]) || isNaN_(bucket[0]) || isInfinity(bucket[1]) || isInfinity(bucket[2]) || isNaN_(bucket[1]) || isNaN_(bucket[2])) {
				continue;
			}
			let left: number = bucket[0] - 0.5 * groupWidth;
			let top: number = bucket[1];
			let bottom: number = bucket[2];
			top = Math.max(top, -100);
			bottom = Math.min(bottom, view.viewport.bottom + 100);
			let column: Rectangle = fragmentView.columns.item(counter);
			column.width = groupWidth;
			column.height = Math.abs(bottom - top);
			fragmentView.positionRectangle(column, left, Math.min(bottom, top));
			counter++;
		}
		fragmentView.columns.count = counter;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case StackedColumnSeries.radiusXPropertyName:

			case StackedColumnSeries.radiusYPropertyName:
			for (let series of fromEnum<StackedFragmentSeries>(this.actualSeries)) {
				series.updateRadiusX();
				series.updateRadiusY();
			}
			this.renderSeries(false);
			break;

			case Series.syncLinkPropertyName:
			if (this.yAxis != null) {
				this.yAxis.updateRange();
			}
			break;

			case Series.seriesViewerPropertyName:
			if (this.yAxis != null) {
				this.yAxis.updateRange();
			}
			break;

		}

	}
}

/**
 * @hidden 
 */
export class StackedLineSeries extends HorizontalStackedSeriesBase {
	static $t: Type = markType(StackedLineSeries, 'StackedLineSeries', (<any>HorizontalStackedSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>StackedLineSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	getRange(axis: Axis): AxisRange {
		if (this.itemsSource == null) {
			return null;
		}
		if (axis == this.xAxis) {
			return new AxisRange(0, this.fastItemsSource.count - 1);
		}
		if (axis == this.yAxis) {
			this.prepareData();
			return new AxisRange(this.minimum, this.maximum);
		}
		return null;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
}

/**
 * @hidden 
 */
export class StackedSplineAreaSeries extends HorizontalStackedSeriesBase {
	static $t: Type = markType(StackedSplineAreaSeries, 'StackedSplineAreaSeries', (<any>HorizontalStackedSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>StackedSplineAreaSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	getRange(axis: Axis): AxisRange {
		if (this.itemsSource == null) {
			return null;
		}
		if (axis == this.xAxis) {
			return new AxisRange(0, this.fastItemsSource.count - 1);
		}
		if (axis == this.yAxis) {
			this.prepareData();
			return new AxisRange(this.minimum, this.maximum);
		}
		return null;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
}

/**
 * @hidden 
 */
export class StackedSplineSeries extends HorizontalStackedSeriesBase {
	static $t: Type = markType(StackedSplineSeries, 'StackedSplineSeries', (<any>HorizontalStackedSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>StackedSplineSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	getRange(axis: Axis): AxisRange {
		if (this.itemsSource == null) {
			return null;
		}
		if (axis == this.xAxis) {
			return new AxisRange(0, this.fastItemsSource.count - 1);
		}
		if (axis == this.yAxis) {
			this.prepareData();
			return new AxisRange(this.minimum, this.maximum);
		}
		return null;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
}

/**
 * @hidden 
 */
export class StackedFragmentSeries extends DependencyObject implements INotifyPropertyChanged {
	static $t: Type = markType(StackedFragmentSeries, 'StackedFragmentSeries', (<any>DependencyObject).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.highValues = new List$1<number>(Number_$type, 0);
		this.lowValues = new List$1<number>(Number_$type, 0);
		this.buckets = new List$1<number[]>(Array_$type, 0);
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
	}
	static readonly brushPropertyName: string = "Brush";
	static readonly brushProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.brushPropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.brushPropertyName, e.oldValue, e.newValue)));
	get brush(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.brushProperty);
	}
	set brush(value: Brush) {
		this.setValue(StackedFragmentSeries.brushProperty, value);
	}
	static readonly actualBrushPropertyName: string = "ActualBrush";
	static readonly actualBrushProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualBrushPropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualBrushPropertyName, e.oldValue, e.newValue)));
	get actualBrush(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.actualBrushProperty);
	}
	set actualBrush(value: Brush) {
		this.setValue(StackedFragmentSeries.actualBrushProperty, value);
	}
	get dashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(StackedFragmentSeries.dashArrayProperty);
	}
	set dashArray(value: DoubleCollection) {
		this.setValue(StackedFragmentSeries.dashArrayProperty, value);
	}
	static readonly dashArrayPropertyName: string = "DashArray";
	static readonly dashArrayProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.dashArrayPropertyName, (<any>DoubleCollection).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.dashArrayPropertyName, e.oldValue, e.newValue)));
	static readonly actualDashArrayPropertyName: string = "ActualDashArray";
	static readonly actualDashArrayProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualDashArrayPropertyName, e.oldValue, e.newValue)));
	get actualDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(StackedFragmentSeries.actualDashArrayProperty);
	}
	set actualDashArray(value: DoubleCollection) {
		this.setValue(StackedFragmentSeries.actualDashArrayProperty, value);
	}
	get dashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(StackedFragmentSeries.dashCapProperty));
	}
	set dashCap(value: PenLineCap) {
		this.setValue(StackedFragmentSeries.dashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly dashCapPropertyName: string = "DashCap";
	static readonly dashCapProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.dashCapPropertyName, PenLineCap_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.dashCapPropertyName, e.oldValue, e.newValue)));
	static readonly actualDashCapPropertyName: string = "ActualDashCap";
	static readonly actualDashCapProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualDashCapPropertyName, PenLineCap_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualDashCapPropertyName, e.oldValue, e.newValue)));
	get actualDashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(StackedFragmentSeries.actualDashCapProperty));
	}
	set actualDashCap(value: PenLineCap) {
		this.setValue(StackedFragmentSeries.actualDashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	get isDropShadowEnabled(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.isDropShadowEnabledProperty);
	}
	set isDropShadowEnabled(value: boolean) {
		this.setValue(StackedFragmentSeries.isDropShadowEnabledProperty, value);
	}
	private _hasUserSetDropShadow: boolean = false;
	static readonly isDropShadowEnabledPropertyName: string = "IsDropShadowEnabled";
	static readonly isDropShadowEnabledProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.isDropShadowEnabledPropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.isDropShadowEnabledPropertyName, e.oldValue, e.newValue)));
	get actualIsDropShadowEnabled(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.actualIsDropShadowEnabledProperty);
	}
	set actualIsDropShadowEnabled(value: boolean) {
		this.setValue(StackedFragmentSeries.actualIsDropShadowEnabledProperty, value);
	}
	static readonly actualIsDropShadowEnabledPropertyName: string = "ActualIsDropShadowEnabled";
	static readonly actualIsDropShadowEnabledProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualIsDropShadowEnabledPropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.actualIsDropShadowEnabledPropertyName, e.oldValue, e.newValue)));
	get shadowBlur(): number {
		return <number>this.getValue(StackedFragmentSeries.shadowBlurProperty);
	}
	set shadowBlur(value: number) {
		this.setValue(StackedFragmentSeries.shadowBlurProperty, value);
	}
	static readonly shadowBlurPropertyName: string = "ShadowBlur";
	static readonly shadowBlurProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.shadowBlurPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.shadowBlurPropertyName, e.oldValue, e.newValue)));
	get actualShadowBlur(): number {
		return <number>this.getValue(StackedFragmentSeries.actualShadowBlurProperty);
	}
	set actualShadowBlur(value: number) {
		this.setValue(StackedFragmentSeries.actualShadowBlurProperty, value);
	}
	static readonly actualShadowBlurPropertyName: string = "ActualShadowBlur";
	static readonly actualShadowBlurProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualShadowBlurPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.actualShadowBlurPropertyName, e.oldValue, e.newValue)));
	get shadowColor(): Color {
		return <Color>this.getValue(StackedFragmentSeries.shadowColorProperty);
	}
	set shadowColor(value: Color) {
		this.setValue(StackedFragmentSeries.shadowColorProperty, value);
	}
	static readonly shadowColorPropertyName: string = "ShadowColor";
	static readonly shadowColorProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.shadowColorPropertyName, (<any>Color).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.shadowColorPropertyName, e.oldValue, e.newValue)));
	get actualShadowColor(): Color {
		return <Color>this.getValue(StackedFragmentSeries.actualShadowColorProperty);
	}
	set actualShadowColor(value: Color) {
		this.setValue(StackedFragmentSeries.actualShadowColorProperty, value);
	}
	static readonly actualShadowColorPropertyName: string = "ActualShadowColor";
	static readonly actualShadowColorProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualShadowColorPropertyName, (<any>Color).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.actualShadowColorPropertyName, e.oldValue, e.newValue)));
	get useSingleShadow(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.useSingleShadowProperty);
	}
	set useSingleShadow(value: boolean) {
		this.setValue(StackedFragmentSeries.useSingleShadowProperty, value);
	}
	static readonly useSingleShadowPropertyName: string = "UseSingleShadow";
	static readonly useSingleShadowProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.useSingleShadowPropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.useSingleShadowPropertyName, e.oldValue, e.newValue)));
	private _hasUserSetSingleShadow: boolean = false;
	get actualUseSingleShadow(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.actualUseSingleShadowProperty);
	}
	set actualUseSingleShadow(value: boolean) {
		this.setValue(StackedFragmentSeries.actualUseSingleShadowProperty, value);
	}
	static readonly actualUseSingleShadowPropertyName: string = "ActualUseSingleShadow";
	static readonly actualUseSingleShadowProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualUseSingleShadowPropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.actualUseSingleShadowPropertyName, e.oldValue, e.newValue)));
	get shadowOffsetX(): number {
		return <number>this.getValue(StackedFragmentSeries.shadowOffsetXProperty);
	}
	set shadowOffsetX(value: number) {
		this.setValue(StackedFragmentSeries.shadowOffsetXProperty, value);
	}
	static readonly shadowOffsetXPropertyName: string = "ShadowOffsetX";
	static readonly shadowOffsetXProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.shadowOffsetXPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.shadowOffsetXPropertyName, e.oldValue, e.newValue)));
	get actualShadowOffsetX(): number {
		return <number>this.getValue(StackedFragmentSeries.actualShadowOffsetXProperty);
	}
	set actualShadowOffsetX(value: number) {
		this.setValue(StackedFragmentSeries.actualShadowOffsetXProperty, value);
	}
	static readonly actualShadowOffsetXPropertyName: string = "ActualShadowOffsetX";
	static readonly actualShadowOffsetXProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualShadowOffsetXPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.actualShadowOffsetXPropertyName, e.oldValue, e.newValue)));
	get shadowOffsetY(): number {
		return <number>this.getValue(StackedFragmentSeries.shadowOffsetYProperty);
	}
	set shadowOffsetY(value: number) {
		this.setValue(StackedFragmentSeries.shadowOffsetYProperty, value);
	}
	static readonly shadowOffsetYPropertyName: string = "ShadowOffsetY";
	static readonly shadowOffsetYProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.shadowOffsetYPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.shadowOffsetYPropertyName, e.oldValue, e.newValue)));
	get actualShadowOffsetY(): number {
		return <number>this.getValue(StackedFragmentSeries.actualShadowOffsetYProperty);
	}
	set actualShadowOffsetY(value: number) {
		this.setValue(StackedFragmentSeries.actualShadowOffsetYProperty, value);
	}
	static readonly actualShadowOffsetYPropertyName: string = "ActualShadowOffsetY";
	static readonly actualShadowOffsetYProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualShadowOffsetYPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.actualShadowOffsetYPropertyName, e.oldValue, e.newValue)));
	static readonly endCapPropertyName: string = "EndCap";
	static readonly endCapProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.endCapPropertyName, PenLineCap_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Round), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.endCapPropertyName, e.oldValue, e.newValue)));
	get endCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(StackedFragmentSeries.endCapProperty));
	}
	set endCap(value: PenLineCap) {
		this.setValue(StackedFragmentSeries.endCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly actualEndCapPropertyName: string = "ActualEndCap";
	static readonly actualEndCapProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualEndCapPropertyName, PenLineCap_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Round), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualEndCapPropertyName, e.oldValue, e.newValue)));
	get actualEndCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(StackedFragmentSeries.actualEndCapProperty));
	}
	set actualEndCap(value: PenLineCap) {
		this.setValue(StackedFragmentSeries.actualEndCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly isHitTestVisiblePropertyName: string = "IsHitTestVisible";
	static readonly isHitTestVisibleProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.isHitTestVisiblePropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.isHitTestVisiblePropertyName, e.oldValue, e.newValue)));
	get isHitTestVisible(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.isHitTestVisibleProperty);
	}
	set isHitTestVisible(value: boolean) {
		this.setValue(StackedFragmentSeries.isHitTestVisibleProperty, value);
	}
	static readonly actualIsHitTestVisiblePropertyName: string = "ActualIsHitTestVisible";
	static readonly actualIsHitTestVisibleProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualIsHitTestVisiblePropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, true, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualIsHitTestVisiblePropertyName, e.oldValue, e.newValue)));
	get actualIsHitTestVisible(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.actualIsHitTestVisibleProperty);
	}
	set actualIsHitTestVisible(value: boolean) {
		this.setValue(StackedFragmentSeries.actualIsHitTestVisibleProperty, value);
	}
	get legendItemBadgeTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(StackedFragmentSeries.legendItemBadgeTemplateProperty);
	}
	set legendItemBadgeTemplate(value: DataTemplate) {
		this.setValue(StackedFragmentSeries.legendItemBadgeTemplateProperty, value);
	}
	static readonly legendItemBadgeTemplatePropertyName: string = "LegendItemBadgeTemplate";
	static readonly legendItemBadgeTemplateProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.legendItemBadgeTemplatePropertyName, (<any>DataTemplate).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.legendItemBadgeTemplatePropertyName, e.oldValue, e.newValue)));
	static readonly actualLegendItemBadgeTemplatePropertyName: string = "ActualLegendItemBadgeTemplate";
	static readonly actualLegendItemBadgeTemplateProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualLegendItemBadgeTemplatePropertyName, (<any>DataTemplate).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualLegendItemBadgeTemplatePropertyName, e.oldValue, e.newValue)));
	get actualLegendItemBadgeTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(StackedFragmentSeries.actualLegendItemBadgeTemplateProperty);
	}
	set actualLegendItemBadgeTemplate(value: DataTemplate) {
		this.setValue(StackedFragmentSeries.actualLegendItemBadgeTemplateProperty, value);
	}
	get legendItemTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(StackedFragmentSeries.legendItemTemplateProperty);
	}
	set legendItemTemplate(value: DataTemplate) {
		this.setValue(StackedFragmentSeries.legendItemTemplateProperty, value);
	}
	static readonly legendItemTemplatePropertyName: string = "LegendItemTemplate";
	static readonly legendItemTemplateProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.legendItemTemplatePropertyName, (<any>DataTemplate).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.legendItemTemplatePropertyName, e.oldValue, e.newValue)));
	static readonly actualLegendItemTemplatePropertyName: string = "ActualLegendItemTemplate";
	static readonly actualLegendItemTemplateProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualLegendItemTemplatePropertyName, (<any>DataTemplate).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualLegendItemTemplatePropertyName, e.oldValue, e.newValue)));
	get actualLegendItemTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(StackedFragmentSeries.actualLegendItemTemplateProperty);
	}
	set actualLegendItemTemplate(value: DataTemplate) {
		this.setValue(StackedFragmentSeries.actualLegendItemTemplateProperty, value);
	}
	get legendItemVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(StackedFragmentSeries.legendItemVisibilityProperty));
	}
	set legendItemVisibility(value: Visibility) {
		this.setValue(StackedFragmentSeries.legendItemVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly legendItemVisibilityPropertyName: string = "LegendItemVisibility";
	static readonly legendItemVisibilityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.legendItemVisibilityPropertyName, Visibility_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.legendItemVisibilityPropertyName, e.oldValue, e.newValue)));
	static readonly actualLegendItemVisibilityPropertyName: string = "ActualLegendItemVisibility";
	static readonly actualLegendItemVisibilityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualLegendItemVisibilityPropertyName, Visibility_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualLegendItemVisibilityPropertyName, e.oldValue, e.newValue)));
	get actualLegendItemVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(StackedFragmentSeries.actualLegendItemVisibilityProperty));
	}
	set actualLegendItemVisibility(value: Visibility) {
		this.setValue(StackedFragmentSeries.actualLegendItemVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	get markerBrush(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.markerBrushProperty);
	}
	set markerBrush(value: Brush) {
		this.setValue(StackedFragmentSeries.markerBrushProperty, value);
	}
	static readonly markerBrushPropertyName: string = "MarkerBrush";
	static readonly markerBrushProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.markerBrushPropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.markerBrushPropertyName, e.oldValue, e.newValue)));
	static readonly actualMarkerBrushPropertyName: string = "ActualMarkerBrush";
	static readonly actualMarkerBrushProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualMarkerBrushPropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get actualMarkerBrush(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.actualMarkerBrushProperty);
	}
	set actualMarkerBrush(value: Brush) {
		this.setValue(StackedFragmentSeries.actualMarkerBrushProperty, value);
	}
	get markerOutline(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.markerOutlineProperty);
	}
	set markerOutline(value: Brush) {
		this.setValue(StackedFragmentSeries.markerOutlineProperty, value);
	}
	static readonly markerOutlinePropertyName: string = "MarkerOutline";
	static readonly markerOutlineProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.markerOutlinePropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.markerOutlinePropertyName, e.oldValue, e.newValue)));
	static readonly actualMarkerOutlinePropertyName: string = "ActualMarkerOutline";
	static readonly actualMarkerOutlineProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualMarkerOutlinePropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualMarkerOutlinePropertyName, e.oldValue, e.newValue)));
	get actualMarkerOutline(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.actualMarkerOutlineProperty);
	}
	set actualMarkerOutline(value: Brush) {
		this.setValue(StackedFragmentSeries.actualMarkerOutlineProperty, value);
	}
	get markerStyle(): Style {
		return <Style>this.getValue(StackedFragmentSeries.markerStyleProperty);
	}
	set markerStyle(value: Style) {
		this.setValue(StackedFragmentSeries.markerStyleProperty, value);
	}
	static readonly markerStylePropertyName: string = "MarkerStyle";
	static readonly markerStyleProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.markerStylePropertyName, (<any>Style).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.markerStylePropertyName, e.oldValue, e.newValue)));
	static readonly actualMarkerStylePropertyName: string = "ActualMarkerStyle";
	static readonly actualMarkerStyleProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualMarkerStylePropertyName, (<any>Style).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualMarkerStylePropertyName, e.oldValue, e.newValue)));
	get actualMarkerStyle(): Style {
		return <Style>this.getValue(StackedFragmentSeries.actualMarkerStyleProperty);
	}
	set actualMarkerStyle(value: Style) {
		this.setValue(StackedFragmentSeries.actualMarkerStyleProperty, value);
	}
	get markerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(StackedFragmentSeries.markerTemplateProperty);
	}
	set markerTemplate(value: DataTemplate) {
		this.setValue(StackedFragmentSeries.markerTemplateProperty, value);
	}
	static readonly markerTemplatePropertyName: string = "MarkerTemplate";
	static readonly markerTemplateProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.markerTemplatePropertyName, (<any>DataTemplate).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.markerTemplatePropertyName, e.oldValue, e.newValue)));
	static readonly actualMarkerTemplatePropertyName: string = "ActualMarkerTemplate";
	static readonly actualMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get actualMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(StackedFragmentSeries.actualMarkerTemplateProperty);
	}
	set actualMarkerTemplate(value: DataTemplate) {
		this.setValue(StackedFragmentSeries.actualMarkerTemplateProperty, value);
	}
	get markerType(): MarkerType {
		return EnumUtil.getEnumValue<MarkerType>(MarkerType_$type, this.getValue(StackedFragmentSeries.markerTypeProperty));
	}
	set markerType(value: MarkerType) {
		this.setValue(StackedFragmentSeries.markerTypeProperty, enumGetBox<MarkerType>(MarkerType_$type, value));
	}
	static readonly markerTypePropertyName: string = "MarkerType";
	static readonly markerTypeProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.markerTypePropertyName, MarkerType_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<MarkerType>(MarkerType_$type, MarkerType.Unset), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.markerTypePropertyName, e.oldValue, e.newValue)));
	static readonly actualMarkerTypePropertyName: string = "ActualMarkerType";
	static readonly actualMarkerTypeProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualMarkerTypePropertyName, MarkerType_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<MarkerType>(MarkerType_$type, MarkerType.None), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualMarkerTypePropertyName, e.oldValue, e.newValue)));
	get actualMarkerType(): MarkerType {
		return EnumUtil.getEnumValue<MarkerType>(MarkerType_$type, this.getValue(StackedFragmentSeries.actualMarkerTypeProperty));
	}
	set actualMarkerType(value: MarkerType) {
		this.setValue(StackedFragmentSeries.actualMarkerTypeProperty, enumGetBox<MarkerType>(MarkerType_$type, value));
	}
	static readonly namePropertyName: string = "Name";
	static readonly nameProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.namePropertyName, String_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.namePropertyName, e.oldValue, e.newValue)));
	get name(): string {
		return <string>this.getValue(StackedFragmentSeries.nameProperty);
	}
	set name(value: string) {
		this.setValue(StackedFragmentSeries.nameProperty, value);
	}
	static readonly opacityPropertyName: string = "Opacity";
	static readonly opacityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.opacityPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.opacityPropertyName, e.oldValue, e.newValue)));
	get opacity(): number {
		return <number>this.getValue(StackedFragmentSeries.opacityProperty);
	}
	set opacity(value: number) {
		this.setValue(StackedFragmentSeries.opacityProperty, value);
	}
	static readonly actualOpacityPropertyName: string = "ActualOpacity";
	static readonly actualOpacityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualOpacityPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualOpacityPropertyName, e.oldValue, e.newValue)));
	get actualOpacity(): number {
		return <number>this.getValue(StackedFragmentSeries.actualOpacityProperty);
	}
	set actualOpacity(value: number) {
		this.setValue(StackedFragmentSeries.actualOpacityProperty, value);
	}
	static readonly opacityMaskPropertyName: string = "OpacityMask";
	static readonly opacityMaskProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.opacityMaskPropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.opacityMaskPropertyName, e.oldValue, e.newValue)));
	get opacityMask(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.opacityMaskProperty);
	}
	set opacityMask(value: Brush) {
		this.setValue(StackedFragmentSeries.opacityMaskProperty, value);
	}
	static readonly actualOpacityMaskPropertyName: string = "ActualOpacityMask";
	static readonly actualOpacityMaskProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualOpacityMaskPropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualOpacityMaskPropertyName, e.oldValue, e.newValue)));
	get actualOpacityMask(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.actualOpacityMaskProperty);
	}
	set actualOpacityMask(value: Brush) {
		this.setValue(StackedFragmentSeries.actualOpacityMaskProperty, value);
	}
	get outline(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.outlineProperty);
	}
	set outline(value: Brush) {
		this.setValue(StackedFragmentSeries.outlineProperty, value);
	}
	static readonly outlinePropertyName: string = "Outline";
	static readonly outlineProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.outlinePropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.outlinePropertyName, e.oldValue, e.newValue)));
	static readonly actualOutlinePropertyName: string = "ActualOutline";
	static readonly actualOutlineProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualOutlinePropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualOutlinePropertyName, e.oldValue, e.newValue)));
	get actualOutline(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.actualOutlineProperty);
	}
	set actualOutline(value: Brush) {
		this.setValue(StackedFragmentSeries.actualOutlineProperty, value);
	}
	static readonly areaFillOpacityPropertyName: string = "AreaFillOpacity";
	static readonly areaFillOpacityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.areaFillOpacityPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, NaN, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.areaFillOpacityPropertyName, e.oldValue, e.newValue)));
	get areaFillOpacity(): number {
		return <number>this.getValue(StackedFragmentSeries.areaFillOpacityProperty);
	}
	set areaFillOpacity(value: number) {
		this.setValue(StackedFragmentSeries.areaFillOpacityProperty, value);
	}
	static readonly actualAreaFillOpacityPropertyName: string = "ActualAreaFillOpacity";
	static readonly actualAreaFillOpacityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualAreaFillOpacityPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualAreaFillOpacityPropertyName, e.oldValue, e.newValue)));
	get actualAreaFillOpacity(): number {
		return <number>this.getValue(StackedFragmentSeries.actualAreaFillOpacityProperty);
	}
	set actualAreaFillOpacity(value: number) {
		this.setValue(StackedFragmentSeries.actualAreaFillOpacityProperty, value);
	}
	get radiusX(): number {
		return <number>this.getValue(StackedFragmentSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(StackedFragmentSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.radiusXPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	static readonly actualRadiusXPropertyName: string = "ActualRadiusX";
	static readonly actualRadiusXProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualRadiusXPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualRadiusXPropertyName, e.oldValue, e.newValue)));
	get actualRadiusX(): number {
		return <number>this.getValue(StackedFragmentSeries.actualRadiusXProperty);
	}
	set actualRadiusX(value: number) {
		this.setValue(StackedFragmentSeries.actualRadiusXProperty, value);
	}
	get radiusY(): number {
		return <number>this.getValue(StackedFragmentSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(StackedFragmentSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.radiusYPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	static readonly actualRadiusYPropertyName: string = "ActualRadiusY";
	static readonly actualRadiusYProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualRadiusYPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 0, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualRadiusYPropertyName, e.oldValue, e.newValue)));
	get actualRadiusY(): number {
		return <number>this.getValue(StackedFragmentSeries.actualRadiusYProperty);
	}
	set actualRadiusY(value: number) {
		this.setValue(StackedFragmentSeries.actualRadiusYProperty, value);
	}
	static readonly startCapPropertyName: string = "StartCap";
	static readonly startCapProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.startCapPropertyName, PenLineCap_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Round), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.startCapPropertyName, e.oldValue, e.newValue)));
	get startCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(StackedFragmentSeries.startCapProperty));
	}
	set startCap(value: PenLineCap) {
		this.setValue(StackedFragmentSeries.startCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly actualStartCapPropertyName: string = "ActualStartCap";
	static readonly actualStartCapProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualStartCapPropertyName, PenLineCap_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Round), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualStartCapPropertyName, e.oldValue, e.newValue)));
	get actualStartCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(StackedFragmentSeries.actualStartCapProperty));
	}
	set actualStartCap(value: PenLineCap) {
		this.setValue(StackedFragmentSeries.actualStartCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	get thickness(): number {
		return <number>this.getValue(StackedFragmentSeries.thicknessProperty);
	}
	set thickness(value: number) {
		this.setValue(StackedFragmentSeries.thicknessProperty, value);
	}
	static readonly thicknessPropertyName: string = "Thickness";
	static readonly thicknessProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.thicknessPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 1.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.thicknessPropertyName, e.oldValue, e.newValue)));
	static readonly actualThicknessPropertyName: string = "ActualThickness";
	static readonly actualThicknessProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualThicknessPropertyName, Number_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, 1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualThicknessPropertyName, e.oldValue, e.newValue)));
	get actualThickness(): number {
		return <number>this.getValue(StackedFragmentSeries.actualThicknessProperty);
	}
	set actualThickness(value: number) {
		this.setValue(StackedFragmentSeries.actualThicknessProperty, value);
	}
	get title(): any {
		return <any>this.getValue(StackedFragmentSeries.titleProperty);
	}
	set title(value: any) {
		this.setValue(StackedFragmentSeries.titleProperty, value);
	}
	static readonly titlePropertyName: string = "Title";
	static readonly titleProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.titlePropertyName, (<any>Base).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, "Series Title", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.titlePropertyName, e.oldValue, e.newValue)));
	get toolTip(): any {
		return <any>this.getValue(StackedFragmentSeries.toolTipProperty);
	}
	set toolTip(value: any) {
		this.setValue(StackedFragmentSeries.toolTipProperty, value);
	}
	static readonly toolTipPropertyName: string = "ToolTip";
	static readonly toolTipProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.toolTipPropertyName, (<any>Base).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.toolTipPropertyName, e.oldValue, e.newValue)));
	static readonly actualToolTipPropertyName: string = "ActualToolTip";
	static readonly actualToolTipProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualToolTipPropertyName, (<any>Base).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualToolTipPropertyName, e.oldValue, e.newValue)));
	get actualToolTip(): any {
		return <any>this.getValue(StackedFragmentSeries.actualToolTipProperty);
	}
	set actualToolTip(value: any) {
		this.setValue(StackedFragmentSeries.actualToolTipProperty, value);
	}
	get useLightweightMarkers(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.useLightweightMarkersProperty);
	}
	set useLightweightMarkers(value: boolean) {
		this.setValue(StackedFragmentSeries.useLightweightMarkersProperty, value);
	}
	static readonly useLightweightMarkersPropertyName: string = "UseLightweightMarkers";
	static readonly useLightweightMarkersProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.useLightweightMarkersPropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.useLightweightMarkersPropertyName, e.oldValue, e.newValue)));
	static readonly actualUseLightweightMarkersPropertyName: string = "ActualUseLightweightMarkers";
	static readonly actualUseLightweightMarkersProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualUseLightweightMarkersPropertyName, Boolean_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, false, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualUseLightweightMarkersPropertyName, e.oldValue, e.newValue)));
	get actualUseLightweightMarkers(): boolean {
		return <boolean>this.getValue(StackedFragmentSeries.actualUseLightweightMarkersProperty);
	}
	set actualUseLightweightMarkers(value: boolean) {
		this.setValue(StackedFragmentSeries.actualUseLightweightMarkersProperty, value);
	}
	get valueMemberPath(): string {
		return <string>this.getValue(StackedFragmentSeries.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(StackedFragmentSeries.valueMemberPathProperty, value);
	}
	static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.valueMemberPathPropertyName, String_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>sender).raisePropertyChanged(StackedFragmentSeries.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	static readonly visibilityPropertyName: string = "Visibility";
	static readonly visibilityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.visibilityPropertyName, Visibility_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.visibilityPropertyName, e.oldValue, e.newValue)));
	get visibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(StackedFragmentSeries.visibilityProperty));
	}
	set visibility(value: Visibility) {
		this.setValue(StackedFragmentSeries.visibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly actualVisibilityPropertyName: string = "ActualVisibility";
	static readonly actualVisibilityProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.actualVisibilityPropertyName, Visibility_$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.actualVisibilityPropertyName, e.oldValue, e.newValue)));
	get actualVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(StackedFragmentSeries.actualVisibilityProperty));
	}
	set actualVisibility(value: Visibility) {
		this.setValue(StackedFragmentSeries.actualVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	private _parentSeries: StackedSeriesBase = null;
	get parentSeries(): StackedSeriesBase {
		return this._parentSeries;
	}
	set parentSeries(value: StackedSeriesBase) {
		this._parentSeries = value;
	}
	private _index: number = 0;
	get index(): number {
		return this._index;
	}
	set index(value: number) {
		this._index = value;
	}
	private _chart: SeriesViewer = null;
	get chart(): SeriesViewer {
		return this._chart;
	}
	set chart(value: SeriesViewer) {
		this._chart = value;
	}
	private _valueColumn: IFastItemColumn$1<number> = null;
	get valueColumn(): IFastItemColumn$1<number> {
		return this._valueColumn;
	}
	set valueColumn(value: IFastItemColumn$1<number>) {
		this._valueColumn = value;
	}
	private _visualSeriesLink: AnchoredCategorySeries = null;
	get visualSeriesLink(): AnchoredCategorySeries {
		return this._visualSeriesLink;
	}
	set visualSeriesLink(value: AnchoredCategorySeries) {
		this._visualSeriesLink = value;
	}
	private _highValues: List$1<number> = null;
	get highValues(): List$1<number> {
		return this._highValues;
	}
	set highValues(value: List$1<number>) {
		this._highValues = value;
	}
	private _lowValues: List$1<number> = null;
	get lowValues(): List$1<number> {
		return this._lowValues;
	}
	set lowValues(value: List$1<number>) {
		this._lowValues = value;
	}
	private _buckets: List$1<number[]> = null;
	get buckets(): List$1<number[]> {
		return this._buckets;
	}
	set buckets(value: List$1<number[]>) {
		this._buckets = value;
	}
	private _positive: boolean = false;
	get positive(): boolean {
		return this._positive;
	}
	set positive(value: boolean) {
		this._positive = value;
	}
	private _renderer: DomRenderer = null;
	get renderer(): DomRenderer {
		return this._renderer;
	}
	set renderer(value: DomRenderer) {
		this._renderer = value;
	}
	provideRenderer(renderer: DomRenderer): void {
		this.renderer = renderer;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.provideRenderer(renderer);
		}
	}
	static readonly parentOrLocalBrushPropertyName: string = "ParentOrLocalBrush";
	static readonly parentOrLocalBrushProperty: DependencyProperty = DependencyProperty.register(StackedFragmentSeries.parentOrLocalBrushPropertyName, (<any>Brush).$type, (<any>StackedFragmentSeries).$type, new PropertyMetadata(1, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<StackedFragmentSeries>o).raisePropertyChanged(StackedFragmentSeries.parentOrLocalBrushPropertyName, e.oldValue, e.newValue)));
	get parentOrLocalBrush(): Brush {
		return <Brush>this.getValue(StackedFragmentSeries.parentOrLocalBrushProperty);
	}
	set parentOrLocalBrush(value: Brush) {
		this.setValue(StackedFragmentSeries.parentOrLocalBrushProperty, value);
	}
	updateVisibility(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualVisibility = this.parentSeries._visibility != Visibility.Visible ? Visibility.Collapsed : this.visibility;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink._visibility = this.actualVisibility;
		}
	}
	updateMarkerTemplate(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualMarkerTemplate = this.markerTemplate != null ? this.markerTemplate : this.parentSeries.markerTemplate;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.markerTemplate = this.actualMarkerTemplate;
		}
	}
	updateMarkerType(): void {
		if (this.parentSeries == null) {
			return;
		}
		let localMarkerType: MarkerType = this.markerType == MarkerType.Unset ? MarkerType.None : this.markerType;
		this.actualMarkerType = this.markerType == MarkerType.Unset ? this.parentSeries.markerType : localMarkerType;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.markerType = this.actualMarkerType;
		}
	}
	updateBrush(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.parentOrLocalBrush = this.brush != null ? this.brush : this.parentSeries.brush;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.brush = this.parentOrLocalBrush;
		}
	}
	updateDashArray(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualDashArray = this.dashArray != null ? this.dashArray : this.parentSeries.dashArray;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.dashArray = this.actualDashArray;
		}
	}
	updateDashCap(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualDashCap = this.dashCap;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.dashCap = this.actualDashCap;
		}
	}
	updateIsDropShadowEnabled(): void {
		if (this.parentSeries == null) {
			return;
		}
		if (!this._hasUserSetDropShadow) {
			this.actualIsDropShadowEnabled = this.parentSeries.isDropShadowEnabled;
		} else {
			this.actualIsDropShadowEnabled = this.isDropShadowEnabled;
		}
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.isDropShadowEnabled = this.actualIsDropShadowEnabled;
		}
	}
	updateShadowBlur(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualShadowBlur = !isNaN_(this.shadowBlur) ? this.shadowBlur : this.parentSeries.shadowBlur;
		if (this.visualSeriesLink != null && !isNaN_(this.actualShadowBlur)) {
			this.visualSeriesLink.shadowBlur = this.actualShadowBlur;
		}
	}
	updateShadowColor(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualShadowColor = Color.l_op_Inequality_Lifted(toNullable<Color>((<any>Color).$type, this.shadowColor), toNullable<Color>((<any>Color).$type, null)) ? this.shadowColor : this.parentSeries.shadowColor;
		if (this.visualSeriesLink != null && Color.l_op_Inequality_Lifted(toNullable<Color>((<any>Color).$type, this.actualShadowColor), toNullable<Color>((<any>Color).$type, null))) {
			this.visualSeriesLink.shadowColor = this.actualShadowColor;
		}
	}
	updateUseSingleShadow(): void {
		if (this.parentSeries == null) {
			return;
		}
		if (!this._hasUserSetSingleShadow) {
			this.actualUseSingleShadow = this.parentSeries.useSingleShadow;
		} else {
			this.actualUseSingleShadow = this.useSingleShadow;
		}
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.useSingleShadow = this.actualUseSingleShadow;
		}
	}
	updateShadowOffsetX(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualShadowOffsetX = !isNaN_(this.shadowOffsetX) ? this.shadowOffsetX : this.parentSeries.shadowOffsetX;
		if (this.visualSeriesLink != null && !isNaN_(this.actualShadowOffsetX)) {
			this.visualSeriesLink.shadowOffsetX = this.actualShadowOffsetX;
		}
	}
	updateShadowOffsetY(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualShadowOffsetY = !isNaN_(this.shadowOffsetY) ? this.shadowOffsetY : this.parentSeries.shadowOffsetY;
		if (this.visualSeriesLink != null && !isNaN_(this.actualShadowOffsetY)) {
			this.visualSeriesLink.shadowOffsetY = this.actualShadowOffsetY;
		}
	}
	updateEndCap(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualEndCap = this.endCap;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.endCap = this.actualEndCap;
		}
	}
	updateIsHitTestVisible(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualIsHitTestVisible = this.isHitTestVisible;
	}
	updateLegendItemBadgeTemplate(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualLegendItemBadgeTemplate = this.legendItemBadgeTemplate != null ? this.legendItemBadgeTemplate : this.parentSeries.legendItemBadgeTemplate;
		if (this.visualSeriesLink != null) {
			if (this.actualLegendItemBadgeTemplate != null) {
				this.visualSeriesLink.legendItemBadgeTemplate = this.actualLegendItemBadgeTemplate;
			} else {
				this.visualSeriesLink.legendItemBadgeTemplate = null;
			}
		}
	}
	updateLegendItemTemplate(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualLegendItemTemplate = this.legendItemTemplate != null ? this.legendItemTemplate : this.parentSeries.legendItemTemplate;
		if (this.visualSeriesLink != null) {
			if (this.actualLegendItemTemplate != null) {
				this.visualSeriesLink.legendItemTemplate = this.actualLegendItemTemplate;
			} else {
				this.visualSeriesLink.legendItemTemplate = null;
			}
		}
	}
	updateLegendItemVisibility(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualLegendItemVisibility = this.parentSeries.legendItemVisibility != Visibility.Visible ? Visibility.Collapsed : this.legendItemVisibility;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.legendItemVisibility = this.actualLegendItemVisibility;
		}
	}
	updateMarkerBrush(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualMarkerBrush = this.markerBrush != null ? this.markerBrush : this.parentSeries.markerBrush;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.markerBrush = this.actualMarkerBrush;
		}
	}
	updateMarkerOutline(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualMarkerOutline = this.markerOutline != null ? this.markerOutline : this.parentSeries.markerOutline;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.markerOutline = this.actualMarkerOutline;
		}
	}
	updateMarkerStyle(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualMarkerStyle = this.markerStyle != null ? this.markerStyle : this.parentSeries.markerStyle;
		if (this.visualSeriesLink != null) {
			if (this.actualMarkerStyle != null) {
				this.visualSeriesLink.markerStyle = this.actualMarkerStyle;
			} else {
				this.visualSeriesLink.markerStyle = null;
			}
		}
	}
	updateOpacity(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualOpacity = !isNaN_(this.opacity) ? this.opacity : this.parentSeries._opacity;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink._opacity = this.actualOpacity;
		}
	}
	updateOpacityMask(): void {
	}
	updateOutline(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualOutline = this.outline != null ? this.outline : this.parentSeries.outline;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.outline = this.actualOutline;
		}
	}
	updateAreaFillOpacity(): void {
		if (this.parentSeries == null) {
			return;
		}
		let actualAreaFill: number = NaN;
		if (typeCast<StackedAreaSeries>((<any>StackedAreaSeries).$type, this.parentSeries) !== null) {
			actualAreaFill = (<StackedAreaSeries>this.parentSeries).actualAreaFillOpacity;
		}
		if (typeCast<StackedSplineAreaSeries>((<any>StackedSplineAreaSeries).$type, this.parentSeries) !== null) {
			actualAreaFill = (<StackedSplineAreaSeries>this.parentSeries).actualAreaFillOpacity;
		}
		this.actualAreaFillOpacity = !isNaN_(this.areaFillOpacity) ? this.areaFillOpacity : actualAreaFill;
		if (this.visualSeriesLink != null) {
			if (typeCast<AreaFragment>((<any>AreaFragment).$type, this.visualSeriesLink) !== null) {
				(<AreaFragment>this.visualSeriesLink).areaFillOpacity = this.actualAreaFillOpacity;
			}
			if (typeCast<SplineAreaFragment>((<any>SplineAreaFragment).$type, this.visualSeriesLink) !== null) {
				(<SplineAreaFragment>this.visualSeriesLink).areaFillOpacity = this.actualAreaFillOpacity;
			}
		}
	}
	updateRadiusX(): void {
		if (this.parentSeries == null) {
			return;
		}
		let radiusX: number = NaN;
		if (typeCast<StackedColumnSeries>((<any>StackedColumnSeries).$type, this.parentSeries) !== null) {
			radiusX = (<StackedColumnSeries>this.parentSeries).radiusX;
		}
		if (typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.parentSeries) !== null) {
			radiusX = (<StackedBarSeries>this.parentSeries).radiusX;
		}
		this.actualRadiusX = !isNaN_(radiusX) ? radiusX : this.radiusX;
		if (this.visualSeriesLink != null) {
			if (typeCast<ColumnFragment>((<any>ColumnFragment).$type, this.visualSeriesLink) !== null) {
				(<ColumnFragment>this.visualSeriesLink).radiusX = this.actualRadiusX;
			}
			if (typeCast<BarFragment>((<any>BarFragment).$type, this.visualSeriesLink) !== null) {
				(<BarFragment>this.visualSeriesLink).radiusX = this.actualRadiusX;
			}
		}
	}
	updateRadiusY(): void {
		if (this.parentSeries == null) {
			return;
		}
		let radiusY: number = NaN;
		if (typeCast<StackedColumnSeries>((<any>StackedColumnSeries).$type, this.parentSeries) !== null) {
			radiusY = (<StackedColumnSeries>this.parentSeries).radiusY;
		}
		if (typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.parentSeries) !== null) {
			radiusY = (<StackedBarSeries>this.parentSeries).radiusY;
		}
		this.actualRadiusY = !isNaN_(radiusY) ? radiusY : this.radiusY;
		if (this.visualSeriesLink != null) {
			if (typeCast<ColumnFragment>((<any>ColumnFragment).$type, this.visualSeriesLink) !== null) {
				(<ColumnFragment>this.visualSeriesLink).radiusY = this.actualRadiusY;
			}
			if (typeCast<BarFragment>((<any>BarFragment).$type, this.visualSeriesLink) !== null) {
				(<BarFragment>this.visualSeriesLink).radiusY = this.actualRadiusY;
			}
		}
	}
	updateStartCap(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualStartCap = this.startCap;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.startCap = this.actualStartCap;
		}
	}
	updateThickness(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualThickness = !isNaN_(this.thickness) ? this.thickness : this.parentSeries.thickness;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.thickness = this.actualThickness;
		}
	}
	updateToolTip(): void {
		if (this.parentSeries == null) {
			return;
		}
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.toolTip = this.toolTip;
		}
	}
	updateUseLightweightMarkers(): void {
		if (this.parentSeries == null) {
			return;
		}
		this.actualUseLightweightMarkers = this.useLightweightMarkers;
		if (this.visualSeriesLink != null) {
			this.visualSeriesLink.useLightweightMarkers = this.actualUseLightweightMarkers;
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(propertyName, oldValue, newValue));
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		if (this.parentSeries == null) {
			return;
		}
		switch (propertyName) {
			case StackedFragmentSeries.titlePropertyName:
			if (this.parentSeries == null || this.visualSeriesLink == null) {
				return;
			}
			this.visualSeriesLink.title = newValue;
			break;

			case StackedFragmentSeries.visibilityPropertyName:
			this.updateVisibility();
			break;

			case StackedFragmentSeries.brushPropertyName:
			this.updateBrush();
			break;

			case StackedFragmentSeries.dashArrayPropertyName:
			this.updateDashArray();
			break;

			case StackedFragmentSeries.dashCapPropertyName:
			this.updateDashCap();
			break;

			case StackedFragmentSeries.isDropShadowEnabledPropertyName:
			this._hasUserSetDropShadow = true;
			this.updateIsDropShadowEnabled();
			break;

			case StackedFragmentSeries.shadowBlurPropertyName:
			this.updateShadowBlur();
			break;

			case StackedFragmentSeries.shadowColorPropertyName:
			this.updateShadowColor();
			break;

			case StackedFragmentSeries.useSingleShadowPropertyName:
			this._hasUserSetDropShadow = true;
			this.updateUseSingleShadow();
			break;

			case StackedFragmentSeries.shadowOffsetXPropertyName:
			this.updateShadowOffsetX();
			break;

			case StackedFragmentSeries.shadowOffsetYPropertyName:
			this.updateShadowOffsetY();
			break;

			case StackedFragmentSeries.endCapPropertyName:
			this.updateEndCap();
			break;

			case StackedFragmentSeries.isHitTestVisiblePropertyName:
			this.updateIsHitTestVisible();
			break;

			case StackedFragmentSeries.markerTemplatePropertyName:
			this.updateMarkerTemplate();
			break;

			case StackedFragmentSeries.markerTypePropertyName:
			this.updateMarkerType();
			break;

			case StackedFragmentSeries.legendItemBadgeTemplatePropertyName:
			this.updateLegendItemBadgeTemplate();
			break;

			case StackedFragmentSeries.legendItemTemplatePropertyName:
			this.updateLegendItemTemplate();
			break;

			case StackedFragmentSeries.legendItemVisibilityPropertyName:
			this.updateLegendItemVisibility();
			break;

			case StackedFragmentSeries.markerBrushPropertyName:
			this.updateMarkerBrush();
			break;

			case StackedFragmentSeries.markerOutlinePropertyName:
			this.updateMarkerOutline();
			break;

			case StackedFragmentSeries.markerStylePropertyName:
			this.updateMarkerStyle();
			break;

			case StackedFragmentSeries.opacityPropertyName:
			this.updateOpacity();
			break;

			case StackedFragmentSeries.opacityMaskPropertyName:
			this.updateOpacityMask();
			break;

			case StackedFragmentSeries.outlinePropertyName:
			this.updateOutline();
			break;

			case StackedFragmentSeries.areaFillOpacityPropertyName:
			this.updateAreaFillOpacity();
			break;

			case StackedFragmentSeries.radiusXPropertyName:
			this.updateRadiusX();
			break;

			case StackedFragmentSeries.radiusYPropertyName:
			this.updateRadiusY();
			break;

			case StackedFragmentSeries.startCapPropertyName:
			this.updateStartCap();
			break;

			case StackedFragmentSeries.thicknessPropertyName:
			this.updateThickness();
			break;

			case StackedFragmentSeries.toolTipPropertyName:
			this.updateToolTip();
			break;

			case StackedFragmentSeries.useLightweightMarkersPropertyName:
			this.updateUseLightweightMarkers();
			break;

		}

		this.parentSeries.renderSeries(false);
	}
}

/**
 * @hidden 
 */
export class StackedSeriesCollection extends ObservableCollection$1<StackedFragmentSeries> {
	static $t: Type = markType(StackedSeriesCollection, 'StackedSeriesCollection', (<any>ObservableCollection$1).$type.specialize((<any>StackedFragmentSeries).$type));
	constructor() {
		super((<any>StackedFragmentSeries).$type, 0);
	}
	collectionResetting: (sender: any, e: EventArgs) => void = null;
	protected clearItems(): void {
		if (this.collectionResetting != null) {
			this.collectionResetting(this, null);
		}
		super.clearItems();
	}
}

/**
 * @hidden 
 */
export class StackedSeriesFramePreparer extends CategoryFramePreparer {
	static $t: Type = markType(StackedSeriesFramePreparer, 'StackedSeriesFramePreparer', (<any>CategoryFramePreparer).$type);
	constructor(initNumber: number, host: IIsCategoryBased);
	constructor(initNumber: number, host: IIsCategoryBased, markersHost: ISupportsMarkers, viewportHost: IProvidesViewport, errorBarsHost: ISupportsErrorBars, bucketizingHost: IBucketizer);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				let host: IIsCategoryBased = <IIsCategoryBased>_rest[0];
				super(0, host);
			}
			break;

			case 1:
			{
				let host: IIsCategoryBased = <IIsCategoryBased>_rest[0];
				let markersHost: ISupportsMarkers = <ISupportsMarkers>_rest[1];
				let viewportHost: IProvidesViewport = <IProvidesViewport>_rest[2];
				let errorBarsHost: ISupportsErrorBars = <ISupportsErrorBars>_rest[3];
				let bucketizingHost: IBucketizer = <IBucketizer>_rest[4];
				super(1, host, markersHost, viewportHost, errorBarsHost, bucketizingHost);
			}
			break;

		}

	}
	protected getValues(p: PreparationParams): ValuesHolder {
		let h: SingleValuesHolder = new SingleValuesHolder();
		if (typeCast<StackedColumnSeries>((<any>StackedColumnSeries).$type, this.categoryBasedHost) !== null || typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.categoryBasedHost) !== null) {
			let host: StackedSeriesBase = typeCast<StackedSeriesBase>((<any>StackedSeriesBase).$type, this.categoryBasedHost);
			if (host.actualSeries.count > 0) {
				h.values = host.actualSeries._inner[0].valueColumn;
			}
			return h;
		}
		let values: IList$1<number> = this.valuesProvider.valueColumn;
		h.values = values;
		return h;
	}
	protected prepareData(p: PreparationParams, h: ValuesHolder, offset: number, markers: boolean, errorBars: boolean): number {
		let markerCount: number = 0;
		let isCluster: boolean = false;
		let endBucket: number[];
		let isSortingScaler: boolean = p.sortingScaler != null;
		let collisionAvoider: IDetectsCollisions = this.categoryBasedHost.provideCollisionDetector();
		let highMarkerFidelity: boolean = p.useHighMarkerFidelity;
		let effectiveViewportRect: Rect = p.effectiveViewportRect;
		let mayContainUknowns: boolean = this.categoryBasedHost.mayContainUnknowns;
		let sParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, p.scaler.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, p.yScaler.isInverted, effectiveViewportRect);
		yParams.referenceValue = this.categoryBasedHost.getHostReferenceValue();
		let singlePixelSpan: number = (p.scaler.getUnscaledValue(2, sParams) - p.scaler.getUnscaledValue(1, sParams));
		let windowRect: Rect = p.windowRect;
		let viewportRect: Rect = p.viewportRect;
		let isLogarithmicYScaler: boolean = typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, p.yScaler) !== null && (<NumericAxisBase><any>p.yScaler).isReallyLogarithmic;
		for (let i: number = p.firstBucket; i <= p.lastBucket; ++i) {
			let bucket: number[];
			if (p.sortingScaler == null) {
				if (!mayContainUknowns) {
					bucket = this.bucketizingHost.getBucketWithoutUnknowns(i);
				} else {
					bucket = this.bucketizingHost.getBucket(i);
				}
			} else {
				bucket = ((() => { let $ret = this.sortingBucketize(p, i, h, singlePixelSpan, isCluster, endBucket, offset); i = $ret.p1; isCluster = $ret.p4; endBucket = $ret.p5; return $ret.ret; })());
			}
			let isValidBucket: boolean = !isLogarithmicYScaler || (isLogarithmicYScaler && bucket[1] > 0);
			let bucketX = bucket[0];
			if (!isNaN_(bucket[0])) {
				this.scaleBucketValues(p, bucket, offset, isSortingScaler, sParams, yParams);
				p.frame.buckets.add(bucket);
				let itemIndex: number = i * p.bucketSize;
				let unsortedIndex: number = itemIndex;
				if (p.sortingScaler != null && p.sortingScaler.sortedIndices != null && itemIndex >= 0 && itemIndex < p.sortingScaler.sortedIndices.count) {
					itemIndex = p.sortingScaler.sortedIndices._inner[itemIndex];
				}
				let markerBucket = bucket;
				if (highMarkerFidelity && itemIndex < h.count) {
					markerBucket = <number[]>new Array(bucket.length);
					markerBucket[0] = bucketX;
					this.storeYValues(h, itemIndex, true, p.isFragment);
					markerBucket[1] = h.tempY0;
					markerBucket[2] = h.tempY1;
					this.scaleBucketValues(p, markerBucket, offset, isSortingScaler, sParams, yParams);
				}
				if (markers && isValidBucket && this.prepareMarker(p.frame, markerBucket, collisionAvoider, Math.min(itemIndex, h.count - 1), markerCount, p.frame.buckets.count - 1)) {
					++markerCount;
				}
			}
		}
		return markerCount;
	}
	protected prepareMarker(frame: CategoryFrame, bucket: number[], collisionAvoider: IDetectsCollisions, itemIndex: number, markerCount: number, markerBucket: number): boolean {
		let x: number = bucket[0];
		let y: number = bucket[1];
		if (typeCast<IBarSeries>(IBarSeries_$type, this.markersHost) !== null) {
			y = bucket[0];
			x = bucket[1];
		}
		let markerRect: Rect = new Rect(0, x - 5, y - 5, 11, 11);
		if (!isNaN_(x) && !isNaN_(y) && !isInfinity(x) && !isInfinity(y) && collisionAvoider.tryAdd(markerRect)) {
			frame.markers.add(<Point>{ $type: Point_$type, x: x, y: y });
			this.markersHost.updateMarkerTemplate(markerCount, itemIndex, markerBucket);
			return true;
		}
		return false;
	}
}

/**
 * @hidden 
 */
export class AreaFragmentView extends AnchoredCategorySeriesView {
	static $t: Type = markType(AreaFragmentView, 'AreaFragmentView', (<any>AnchoredCategorySeriesView).$type);
	private _areaFragmentModel: AreaFragment = null;
	get areaFragmentModel(): AreaFragment {
		return this._areaFragmentModel;
	}
	set areaFragmentModel(value: AreaFragment) {
		this._areaFragmentModel = value;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	constructor(model: AreaFragment) {
		super(model);
		this.areaFragmentModel = model;
	}
	polygon0: Path = new Path();
	polyline0: Path = new Path();
	polygon1: Path = new Path();
	polyline1: Path = new Path();
	clearRendering(): void {
		this.polygon0.data = null;
		this.polygon1.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new AreaFragmentBucketCalculator(this);
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polygon0._fill = this.model.actualBrush;
		this.polygon1._fill = this.model.actualBrush;
		this.polygon0._opacity = this.model.actualAreaFillOpacity;
		this.polygon1._opacity = 0.5 * this.model.actualAreaFillOpacity;
		this.polyline0._stroke = this.model.actualOutline;
		this.polyline0.strokeThickness = this.model.thickness;
		this.polyline0.strokeDashArray = this.model.dashArray;
		this.polyline0.strokeDashCap = <number>this.model.dashCap;
		this.polyline1._stroke = this.model.actualOutline;
		this.polyline1.strokeThickness = this.model.thickness;
		this.polyline1.strokeDashArray = this.model.dashArray;
		this.polyline1.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polygon0._fill = hitBrush;
		this.polygon1._fill = hitBrush;
		this.polygon0._opacity = 1;
		this.polygon1._opacity = 1;
		this.polyline0._stroke = hitBrush;
		this.polyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polyline1._stroke = hitBrush;
		this.polyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		context.renderPath(this.polygon0);
		context.renderPath(this.polygon1);
		context.renderPath(this.polyline0);
		context.renderPath(this.polyline1);
	}
	protected get_index(): number {
		let parentSeries = this.areaFragmentModel.parentSeries;
		let fragmentCount = parentSeries.series.count;
		let actualIndex = parentSeries.series.indexOf(this.areaFragmentModel.logicalSeriesLink);
		let reverseIndex = (fragmentCount - 1) - actualIndex;
		let parentIndex = parentSeries.view.index;
		return parentIndex + reverseIndex;
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline0, "lowerShape", <string[]>[ "Lower" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline1, "upperShape", <string[]>[ "Upper", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon1, "translucentShape", <string[]>[ "Translucent" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon0, "fillShape", <string[]>[ "Fill" ]);
	}
}

/**
 * @hidden 
 */
export class ColumnFragmentView extends AnchoredCategorySeriesView {
	static $t: Type = markType(ColumnFragmentView, 'ColumnFragmentView', (<any>AnchoredCategorySeriesView).$type);
	private _columnFragmentModel: ColumnFragment = null;
	get columnFragmentModel(): ColumnFragment {
		return this._columnFragmentModel;
	}
	set columnFragmentModel(value: ColumnFragment) {
		this._columnFragmentModel = value;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	constructor(model: ColumnFragment) {
		super(model);
		this.columnFragmentModel = model;
		this.high = new List$1<number>(Number_$type, 0);
		this.low = new List$1<number>(Number_$type, 0);
		this.columns = ((() => {
			let $ret = new Pool$1<Rectangle>((<any>Rectangle).$type);
			$ret.create = runOn(this, this.columnCreate);
			$ret.activate = runOn(this, this.columnActivate);
			$ret.disactivate = runOn(this, this.columnDisactivate);
			$ret.destroy = runOn(this, this.columnDestroy);
			return $ret;
		})());
		this.visibleColumns = new List$1<Rectangle>((<any>Rectangle).$type, 0);
	}
	private _visibleColumns: List$1<Rectangle> = null;
	protected get visibleColumns(): List$1<Rectangle> {
		return this._visibleColumns;
	}
	protected set visibleColumns(value: List$1<Rectangle>) {
		this._visibleColumns = value;
	}
	private _columns: Pool$1<Rectangle> = null;
	get columns(): Pool$1<Rectangle> {
		return this._columns;
	}
	set columns(value: Pool$1<Rectangle>) {
		this._columns = value;
	}
	private _high: List$1<number> = null;
	get high(): List$1<number> {
		return this._high;
	}
	set high(value: List$1<number>) {
		this._high = value;
	}
	private _low: List$1<number> = null;
	get low(): List$1<number> {
		return this._low;
	}
	set low(value: List$1<number>) {
		this._low = value;
	}
	private columnCreate(): Rectangle {
		let column: Rectangle = ((() => {
			let $ret = new Rectangle();
			$ret.dataContext = ((() => {
				let $ret = new DataContext();
				$ret.series = this.model;
				return $ret;
			})());
			return $ret;
		})());
		this.visibleColumns.add(column);
		column._visibility = Visibility.Collapsed;
		return column;
	}
	private columnActivate(column: Rectangle): void {
		column._visibility = Visibility.Visible;
	}
	private columnDisactivate(column: Rectangle): void {
		column._visibility = Visibility.Collapsed;
	}
	private columnDestroy(column: Rectangle): void {
		this.visibleColumns.remove(column);
	}
	protected setupItemAppearanceOverride(item: any, index: number): void {
		super.setupItemAppearanceOverride(item, index);
		let column = <Rectangle>item;
		column._fill = this.model.actualBrush;
		column._stroke = this.model.actualOutline;
		column.strokeThickness = this.model.thickness;
		column.strokeDashArray = this.model.dashArray;
		column.strokeDashCap = <number>this.model.dashCap;
		column.radiusX = this.columnFragmentModel.radiusX;
		column.radiusY = this.columnFragmentModel.radiusY;
	}
	positionRectangle(column: Rectangle, left: number, top: number): void {
		let dirty: boolean = false;
		if (column.canvasTop != top) {
			dirty = true;
			column.canvasTop = top;
		}
		if (column.canvasLeft != left) {
			dirty = true;
			column.canvasLeft = left;
		}
		if (dirty) {
			this.makeDirty();
		}
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
		super.setupItemHitAppearanceOverride(item, index);
		let column = <Rectangle>item;
		let hitBrush = this.getHitBrush1(index);
		column._fill = hitBrush;
		column._stroke = hitBrush;
		column.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			for (let i: number = 0; i < this.visibleColumns.count; i++) {
				let column = this.visibleColumns._inner[i];
				this.setupItemAppearance(column, i, isHitContext);
				context.renderRectangle(column);
			}
		}
	}
	protected get_index(): number {
		let parentSeries = this.columnFragmentModel.parentSeries;
		let fragmentCount = parentSeries.series.count;
		let actualIndex = parentSeries.series.indexOf(this.columnFragmentModel.logicalSeriesLink);
		let reverseIndex = (fragmentCount - 1) - actualIndex;
		let parentIndex = parentSeries.view.index;
		return parentIndex + reverseIndex;
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let i: number = 0;
		let toSort: List$1<Rectangle> = new List$1<Rectangle>((<any>Rectangle).$type, 0);
		for (let column of fromEnum<Rectangle>(this.columns.active)) {
			toSort.add(column);
		}
		toSort.sort2((c1: Rectangle, c2: Rectangle) => {
			if (c1.canvasLeft < c2.canvasLeft) {
				return -1;
			} else if (c1.canvasLeft > c2.canvasLeft) {
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
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate = "<div class='ui-chart-default-tooltip-content'>";
		let axis: Axis = null;
		if (this.columnFragmentModel.getCategoryAxis().isCategory) {
			axis = this.columnFragmentModel.fragmentXAxis;
		} else if (this.columnFragmentModel.fragmentYAxis.isCategory) {
			axis = this.columnFragmentModel.fragmentYAxis;
		}
		if (axis.isDateTime) {
			let dateTimeAxis = <IDateTimeAxis><any>axis;
			tooltipTemplate += "<span>${item." + dateTimeAxis.dateTimeMemberPath + "}</span><br/>";
		}
		if (axis != null && axis.label != null) {
			tooltipTemplate += "<span>${item." + axis.label + "}</span><br/>";
		}
		tooltipTemplate += "<span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.columnFragmentModel.title + ": </span><span class='ui-priority-primary'>" + "${item." + this.columnFragmentModel.valueMemberPath + "}</span></div>";
		return tooltipTemplate;
	}
}

/**
 * @hidden 
 */
export class LineFragmentView extends AnchoredCategorySeriesView {
	static $t: Type = markType(LineFragmentView, 'LineFragmentView', (<any>AnchoredCategorySeriesView).$type);
	private _lineFragmentModel: LineFragment = null;
	get lineFragmentModel(): LineFragment {
		return this._lineFragmentModel;
	}
	set lineFragmentModel(value: LineFragment) {
		this._lineFragmentModel = value;
	}
	constructor(model: LineFragment) {
		super(model);
		this.lineFragmentModel = model;
	}
	polyline0: Path = new Path();
	polygon01: Path = new Path();
	polyline1: Path = new Path();
	clearLine(): void {
		this.polygon01.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new LineFragmentBucketCalculator(this);
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polyline0._stroke = this.model.actualBrush;
		this.polyline0.strokeThickness = this.model.thickness;
		this.polyline0.strokeDashArray = this.model.dashArray;
		this.polyline0.strokeDashCap = <number>this.model.dashCap;
		this.polyline1._stroke = this.model.actualBrush;
		this.polyline1.strokeThickness = this.model.thickness;
		this.polyline1.strokeDashArray = this.model.dashArray;
		this.polyline1.strokeDashCap = <number>this.model.dashCap;
		this.polygon01._fill = this.model.actualBrush;
		this.polygon01._opacity = 0.75;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polyline0._stroke = hitBrush;
		this.polyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polyline1._stroke = hitBrush;
		this.polyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polygon01._fill = hitBrush;
		this.polygon01._opacity = 1;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this.polygon01);
			context.renderPath(this.polyline0);
			context.renderPath(this.polyline1);
		}
	}
	protected get_index(): number {
		let parentSeries = this.lineFragmentModel.parentSeries;
		let fragmentCount = parentSeries.series.count;
		let actualIndex = parentSeries.series.indexOf(this.lineFragmentModel.logicalSeriesLink);
		let reverseIndex = (fragmentCount - 1) - actualIndex;
		let parentIndex = parentSeries.view.index;
		return parentIndex + reverseIndex;
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline0, "lowerShape", <string[]>[ "Lower", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline1, "upperShape", <string[]>[ "Upper" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon01, "translucentShape", <string[]>[ "Translucent" ]);
	}
}

/**
 * @hidden 
 */
export class SplineAreaFragmentView extends SplineSeriesBaseView {
	static $t: Type = markType(SplineAreaFragmentView, 'SplineAreaFragmentView', (<any>SplineSeriesBaseView).$type);
	private _splineAreaFragmentModel: SplineAreaFragment = null;
	private get splineAreaFragmentModel(): SplineAreaFragment {
		return this._splineAreaFragmentModel;
	}
	private set splineAreaFragmentModel(value: SplineAreaFragment) {
		this._splineAreaFragmentModel = value;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	constructor(model: SplineAreaFragment) {
		super(model);
		this.splineAreaFragmentModel = model;
	}
	polygon0: Path = new Path();
	polyline0: Path = new Path();
	polygon1: Path = new Path();
	polyline1: Path = new Path();
	clearRendering(): void {
		this.polygon0.data = null;
		this.polygon1.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polygon0._fill = this.model.actualBrush;
		this.polygon1._fill = this.model.actualBrush;
		this.polygon0._opacity = this.model.actualAreaFillOpacity;
		this.polygon1._opacity = 0.5 * this.model.actualAreaFillOpacity;
		this.polyline0._stroke = this.model.actualOutline;
		this.polyline0.strokeThickness = this.model.thickness;
		this.polyline0.strokeDashArray = this.model.dashArray;
		this.polyline0.strokeDashCap = <number>this.model.dashCap;
		this.polyline1._stroke = this.model.actualOutline;
		this.polyline1.strokeThickness = this.model.thickness;
		this.polyline1.strokeDashArray = this.model.dashArray;
		this.polyline1.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polygon0._fill = hitBrush;
		this.polygon1._fill = hitBrush;
		this.polygon1._opacity = 1;
		this.polygon0._opacity = 1;
		this.polyline0._stroke = hitBrush;
		this.polyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polyline1._stroke = hitBrush;
		this.polyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this.polygon0);
			context.renderPath(this.polygon1);
			context.renderPath(this.polyline0);
			context.renderPath(this.polyline1);
		}
	}
	protected get_index(): number {
		let parentSeries = this.splineAreaFragmentModel.parentSeries;
		let fragmentCount = parentSeries.series.count;
		let actualIndex = parentSeries.series.indexOf(this.splineAreaFragmentModel.logicalSeriesLink);
		let reverseIndex = (fragmentCount - 1) - actualIndex;
		let parentIndex = parentSeries.view.index;
		return parentIndex + reverseIndex;
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline0, "lowerShape", <string[]>[ "Lower" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline1, "upperShape", <string[]>[ "Upper", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon1, "translucentShape", <string[]>[ "Translucent" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon0, "fillShape", <string[]>[ "Fill" ]);
	}
}

/**
 * @hidden 
 */
export class SplineFragmentView extends SplineSeriesBaseView {
	static $t: Type = markType(SplineFragmentView, 'SplineFragmentView', (<any>SplineSeriesBaseView).$type);
	private _splineFragmentModel: SplineFragment = null;
	get splineFragmentModel(): SplineFragment {
		return this._splineFragmentModel;
	}
	set splineFragmentModel(value: SplineFragment) {
		this._splineFragmentModel = value;
	}
	constructor(model: SplineFragment) {
		super(model);
		this.splineFragmentModel = model;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new SplineFragmentBucketCalculator(this);
	}
	polyline0: Path = new Path();
	polygon01: Path = new Path();
	polyline1: Path = new Path();
	clearRendering(): void {
		this.polygon01.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polyline0._stroke = this.model.actualBrush;
		this.polyline0.strokeThickness = this.model.thickness;
		this.polyline0.strokeDashArray = this.model.dashArray;
		this.polyline0.strokeDashCap = <number>this.model.dashCap;
		this.polyline1._stroke = this.model.actualBrush;
		this.polyline1.strokeThickness = this.model.thickness;
		this.polyline1.strokeDashArray = this.model.dashArray;
		this.polyline1.strokeDashCap = <number>this.model.dashCap;
		this.polygon01._fill = this.model.actualBrush;
		this.polygon01._opacity = 0.75;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polyline0._stroke = hitBrush;
		this.polyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polyline1._stroke = hitBrush;
		this.polyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polygon01._fill = hitBrush;
		this.polygon01._opacity = 0.75;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this.polygon01);
			context.renderPath(this.polyline0);
			context.renderPath(this.polyline1);
		}
	}
	protected get_index(): number {
		let parentSeries = this.splineFragmentModel.parentSeries;
		let fragmentCount = parentSeries.series.count;
		let actualIndex = parentSeries.series.indexOf(this.splineFragmentModel.logicalSeriesLink);
		let reverseIndex = (fragmentCount - 1) - actualIndex;
		let parentIndex = parentSeries.view.index;
		return parentIndex + reverseIndex;
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline0, "lowerShape", <string[]>[ "Lower", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline1, "upperShape", <string[]>[ "Upper" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon01, "translucentShape", <string[]>[ "Translucent" ]);
	}
}

/**
 * @hidden 
 */
export class StackedSeriesView extends CategorySeriesView {
	static $t: Type = markType(StackedSeriesView, 'StackedSeriesView', (<any>CategorySeriesView).$type);
	private _stackedModel: StackedSeriesBase = null;
	get stackedModel(): StackedSeriesBase {
		return this._stackedModel;
	}
	set stackedModel(value: StackedSeriesBase) {
		this._stackedModel = value;
	}
	private readonly _plotArea: Canvas = new Canvas();
	get plotArea(): Canvas {
		return this._plotArea;
	}
	private readonly _seriesPanel: Panel = new Panel();
	get seriesPanel(): Panel {
		return this._seriesPanel;
	}
	constructor(model: StackedSeriesBase) {
		super(model);
		this.stackedModel = model;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new StackedBucketCalculator(this);
	}
	hideTooltip(): void {
		super.hideTooltip();
		for (let i = 0; i < this.stackedModel.stackedSeriesManager.seriesVisual.count; i++) {
			this.stackedModel.stackedSeriesManager.seriesVisual._inner[i].view.hideTooltip();
		}
	}
	onContextProvided(context: RenderingContext, hitContext: RenderingContext): void {
		super.onContextProvided(context, hitContext);
		for (let fragment of fromEnum<StackedFragmentSeries>(this.stackedModel.series)) {
			fragment.visualSeriesLink.view.onContextProvided(context, hitContext);
		}
	}
	protected applyDropShadowDefaultSettings(): void {
		let colorString: string = "rgba(95,95,95,0.5)";
		let useSingleShadow: boolean = true;
		let blur: number = 5, offsetX: number = 5, offsetY: number = 5;
		let model = this.model;
		if (typeCast<StackedAreaSeries>((<any>StackedAreaSeries).$type, model) !== null || typeCast<StackedSplineAreaSeries>((<any>StackedSplineAreaSeries).$type, model) !== null) {
			offsetX = 1;
			offsetY = -3;
		} else if (typeCast<StackedLineSeries>((<any>StackedLineSeries).$type, model) !== null || typeCast<StackedSplineSeries>((<any>StackedSplineSeries).$type, model) !== null) {
			blur = 3;
			offsetX = 1;
			offsetY = 4;
			useSingleShadow = false;
		} else if (typeCast<StackedColumnSeries>((<any>StackedColumnSeries).$type, model) !== null) {
			offsetX = 5;
			offsetY = 0;
		}
		let color = new Color();
		color.colorString = colorString;
		model.shadowColor = color;
		model.shadowBlur = blur;
		model.shadowOffsetX = offsetX;
		model.shadowOffsetY = offsetY;
		model.useSingleShadow = useSingleShadow;
	}
}

/**
 * @hidden 
 */
export class StackedBarSeriesView extends StackedSeriesView {
	static $t: Type = markType(StackedBarSeriesView, 'StackedBarSeriesView', (<any>StackedSeriesView).$type);
	private _stackedBarModel: StackedBarSeries = null;
	get stackedBarModel(): StackedBarSeries {
		return this._stackedBarModel;
	}
	set stackedBarModel(value: StackedBarSeries) {
		this._stackedBarModel = value;
	}
	constructor(model: StackedBarSeries) {
		super(model);
		this.stackedBarModel = model;
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new StackedBarBucketCalculator(this);
	}
}

/**
 * @hidden 
 */
export class StackedColumnSeriesView extends StackedSeriesView {
	static $t: Type = markType(StackedColumnSeriesView, 'StackedColumnSeriesView', (<any>StackedSeriesView).$type);
	constructor(model: StackedColumnSeries) {
		super(model);
	}
	createBucketCalculator(): CategoryBucketCalculator {
		return new StackedColumnBucketCalculator(this);
	}
}

/**
 * @hidden 
 */
export class StackedSeriesManager extends Base {
	static $t: Type = markType(StackedSeriesManager, 'StackedSeriesManager');
	constructor(parent: StackedSeriesBase) {
		super();
		if (parent == null) {
			return;
		}
		this.parentSeries = parent;
		this.seriesVisual = new ObservableCollection$1<AnchoredCategorySeries>((<any>AnchoredCategorySeries).$type, 0);
		this.seriesLogical = new StackedSeriesCollection();
		this.positiveSeries = new ObservableCollection$1<AnchoredCategorySeries>((<any>AnchoredCategorySeries).$type, 0);
		this.negativeSeries = new ObservableCollection$1<AnchoredCategorySeries>((<any>AnchoredCategorySeries).$type, 0);
		this.plotArea = this.parentSeries.stackedView.plotArea;
		this.seriesPanel = this.parentSeries.stackedView.seriesPanel;
		let $t = this.seriesLogical;
		$t.collectionChanged = delegateCombine($t.collectionChanged, (o: any, e: NotifyCollectionChangedEventArgs) => {
			if (e.oldItems != null) {
				for (let logicalSeries of fromEn<StackedFragmentSeries>(e.oldItems)) {
					if (this.seriesVisual.contains(logicalSeries.visualSeriesLink)) {
						this.seriesVisual.remove(logicalSeries.visualSeriesLink);
					}
				}
			}
			if (e.newItems != null) {
				let counter: number = e.newStartingIndex;
				for (let logicalSeries1 of fromEn<StackedFragmentSeries>(e.newItems)) {
					let series: AnchoredCategorySeries = this.createSeries(logicalSeries1);
					this.seriesVisual.insert(counter, series);
					counter++;
				}
			}
		});
		let $t1 = this.seriesVisual;
		$t1.collectionChanged = delegateCombine($t1.collectionChanged, (o: any, e: NotifyCollectionChangedEventArgs) => {
			if (e.oldItems != null) {
				for (let visualSeries of fromEn<AnchoredCategorySeries>(e.oldItems)) {
					visualSeries.clearRendering(true, visualSeries.view);
					visualSeries.seriesViewer = null;
					visualSeries.syncLink = null;
					visualSeries.itemsSource = null;
					visualSeries.legend = null;
					if (this.seriesPanel != null && this.seriesPanel.children.contains(visualSeries)) {
						this.seriesPanel.children.remove(visualSeries);
					}
					if (this.parentSeries.seriesViewer != null) {
						this.parentSeries.seriesViewer.removeSeries(visualSeries);
					}
				}
			}
			if (e.newItems != null) {
				for (let visualSeries1 of fromEn<AnchoredCategorySeries>(e.newItems)) {
					visualSeries1.seriesViewer = this.parentSeries.seriesViewer;
					visualSeries1.syncLink = this.parentSeries.syncLink;
					if (!this.seriesPanel.children.contains(visualSeries1)) {
						this.seriesPanel.children.add(visualSeries1);
					}
					if (this.parentSeries.seriesViewer != null) {
						this.parentSeries.seriesViewer.attachSeries(visualSeries1);
					}
				}
			}
			this.parentSeries.renderSeries(false);
		});
	}
	private _parentSeries: StackedSeriesBase = null;
	get parentSeries(): StackedSeriesBase {
		return this._parentSeries;
	}
	set parentSeries(value: StackedSeriesBase) {
		this._parentSeries = value;
	}
	private _seriesVisual: ObservableCollection$1<AnchoredCategorySeries> = null;
	get seriesVisual(): ObservableCollection$1<AnchoredCategorySeries> {
		return this._seriesVisual;
	}
	set seriesVisual(value: ObservableCollection$1<AnchoredCategorySeries>) {
		this._seriesVisual = value;
	}
	private _seriesLogical: StackedSeriesCollection = null;
	get seriesLogical(): StackedSeriesCollection {
		return this._seriesLogical;
	}
	set seriesLogical(value: StackedSeriesCollection) {
		this._seriesLogical = value;
	}
	private _positiveSeries: ObservableCollection$1<AnchoredCategorySeries> = null;
	get positiveSeries(): ObservableCollection$1<AnchoredCategorySeries> {
		return this._positiveSeries;
	}
	set positiveSeries(value: ObservableCollection$1<AnchoredCategorySeries>) {
		this._positiveSeries = value;
	}
	private _negativeSeries: ObservableCollection$1<AnchoredCategorySeries> = null;
	get negativeSeries(): ObservableCollection$1<AnchoredCategorySeries> {
		return this._negativeSeries;
	}
	set negativeSeries(value: ObservableCollection$1<AnchoredCategorySeries>) {
		this._negativeSeries = value;
	}
	private _plotArea: Canvas = null;
	get plotArea(): Canvas {
		return this._plotArea;
	}
	set plotArea(value: Canvas) {
		this._plotArea = value;
	}
	private _seriesPanel: Panel = null;
	get seriesPanel(): Panel {
		return this._seriesPanel;
	}
	set seriesPanel(value: Panel) {
		this._seriesPanel = value;
	}
	createSeries(seriesFragment: StackedFragmentSeries): AnchoredCategorySeries {
		if (typeCast<StackedLineSeries>((<any>StackedLineSeries).$type, this.parentSeries) !== null) {
			let series: LineFragment = new LineFragment();
			series.provideRenderer(seriesFragment.renderer);
			series.parentSeries = this.parentSeries;
			seriesFragment.visualSeriesLink = series;
			series.logicalSeriesLink = seriesFragment;
			series.view.viewport = this.parentSeries.view.viewport;
			this.setSeriesBindings(series, seriesFragment);
			this.createExternalFragmentWrapper(series);
			return series;
		}
		if (typeCast<StackedColumnSeries>((<any>StackedColumnSeries).$type, this.parentSeries) !== null) {
			let series1: ColumnFragment = new ColumnFragment();
			series1.provideRenderer(seriesFragment.renderer);
			series1.parentSeries = this.parentSeries;
			seriesFragment.visualSeriesLink = series1;
			series1.logicalSeriesLink = seriesFragment;
			series1.view.viewport = this.parentSeries.view.viewport;
			this.setSeriesBindings(series1, seriesFragment);
			this.createExternalFragmentWrapper(series1);
			return series1;
		}
		if (typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.parentSeries) !== null) {
			let series2: BarFragment = new BarFragment();
			series2.provideRenderer(seriesFragment.renderer);
			series2.parentSeries = typeCast<StackedBarSeries>((<any>StackedBarSeries).$type, this.parentSeries);
			seriesFragment.visualSeriesLink = series2;
			series2.logicalSeriesLink = seriesFragment;
			series2.view.viewport = this.parentSeries.view.viewport;
			this.setSeriesBindings(series2, seriesFragment);
			this.createExternalFragmentWrapper(series2);
			return series2;
		}
		if (typeCast<StackedAreaSeries>((<any>StackedAreaSeries).$type, this.parentSeries) !== null) {
			let series3: AreaFragment = new AreaFragment();
			series3.provideRenderer(seriesFragment.renderer);
			series3.parentSeries = this.parentSeries;
			seriesFragment.visualSeriesLink = series3;
			series3.logicalSeriesLink = seriesFragment;
			series3.view.viewport = this.parentSeries.view.viewport;
			this.setSeriesBindings(series3, seriesFragment);
			this.createExternalFragmentWrapper(series3);
			return series3;
		}
		if (typeCast<StackedSplineSeries>((<any>StackedSplineSeries).$type, this.parentSeries) !== null) {
			let series4: SplineFragment = new SplineFragment();
			series4.provideRenderer(seriesFragment.renderer);
			series4.parentSeries = this.parentSeries;
			seriesFragment.visualSeriesLink = series4;
			series4.logicalSeriesLink = seriesFragment;
			series4.view.viewport = this.parentSeries.view.viewport;
			this.setSeriesBindings(series4, seriesFragment);
			this.createExternalFragmentWrapper(series4);
			return series4;
		}
		if (typeCast<StackedSplineAreaSeries>((<any>StackedSplineAreaSeries).$type, this.parentSeries) !== null) {
			let series5: SplineAreaFragment = new SplineAreaFragment();
			series5.provideRenderer(seriesFragment.renderer);
			series5.parentSeries = this.parentSeries;
			seriesFragment.visualSeriesLink = series5;
			series5.logicalSeriesLink = seriesFragment;
			series5.view.viewport = this.parentSeries.view.viewport;
			this.setSeriesBindings(series5, seriesFragment);
			this.createExternalFragmentWrapper(series5);
			return series5;
		}
		return null;
	}
	private setSeriesBindings(visualSeries: AnchoredCategorySeries, logicalSeries: StackedFragmentSeries): void {
		visualSeries.brush = logicalSeries.parentOrLocalBrush;
		visualSeries.dashArray = logicalSeries.actualDashArray;
		visualSeries.dashCap = logicalSeries.actualDashCap;
		visualSeries.endCap = logicalSeries.actualEndCap;
		visualSeries.itemsSource = this.parentSeries.itemsSource;
		visualSeries.legend = this.parentSeries.actualLegend;
		visualSeries.legendItemTemplate = logicalSeries.actualLegendItemTemplate;
		visualSeries.legendItemVisibility = logicalSeries.actualLegendItemVisibility;
		visualSeries.markerBrush = logicalSeries.actualMarkerBrush;
		visualSeries.markerOutline = logicalSeries.actualMarkerOutline;
		visualSeries.markerStyle = logicalSeries.actualMarkerStyle;
		visualSeries.markerTemplate = logicalSeries.actualMarkerTemplate;
		visualSeries.markerType = logicalSeries.actualMarkerType;
		visualSeries.miterLimit = this.parentSeries.miterLimit;
		visualSeries._opacity = logicalSeries.opacity;
		visualSeries.outline = logicalSeries.actualOutline;
		visualSeries.resolution = this.parentSeries.resolution;
		visualSeries.startCap = logicalSeries.actualStartCap;
		visualSeries.thickness = logicalSeries.actualThickness;
		visualSeries.title = logicalSeries.title;
		visualSeries.useLightweightMarkers = logicalSeries.actualUseLightweightMarkers;
		visualSeries.valueMemberPath = logicalSeries.valueMemberPath;
		visualSeries._visibility = logicalSeries.actualVisibility;
		let areaFragment: AreaFragment = typeCast<AreaFragment>((<any>AreaFragment).$type, visualSeries);
		if (areaFragment != null) {
			areaFragment.actualAreaFillOpacity = logicalSeries.actualAreaFillOpacity;
		}
		let splineAreaFragment: SplineAreaFragment = typeCast<SplineAreaFragment>((<any>SplineAreaFragment).$type, visualSeries);
		if (splineAreaFragment != null) {
			splineAreaFragment.actualAreaFillOpacity = logicalSeries.actualAreaFillOpacity;
		}
		let columnFragment: ColumnFragment = typeCast<ColumnFragment>((<any>ColumnFragment).$type, visualSeries);
		if (columnFragment != null) {
			columnFragment.radiusX = logicalSeries.actualRadiusX;
			columnFragment.radiusY = logicalSeries.actualRadiusY;
		}
		let barFragment: BarFragment = typeCast<BarFragment>((<any>BarFragment).$type, visualSeries);
		if (barFragment != null) {
			barFragment.radiusX = logicalSeries.actualRadiusX;
			barFragment.radiusY = logicalSeries.actualRadiusY;
		}
		visualSeries.toolTip = logicalSeries.toolTip;
		visualSeries.isDropShadowEnabled = logicalSeries.actualIsDropShadowEnabled;
		visualSeries.useSingleShadow = logicalSeries.actualUseSingleShadow;
		logicalSeries.updateShadowBlur();
		logicalSeries.updateShadowColor();
		logicalSeries.updateShadowOffsetX();
		logicalSeries.updateShadowOffsetY();
	}
	renderSeries(): void {
		this.positiveSeries.clear();
		this.negativeSeries.clear();
		let index = 0;
		for (let series of fromEnum<AnchoredCategorySeries>(this.seriesVisual)) {
			series.thumbnailDirty = true;
			series.index = this.parentSeries.getFragmentSeriesIndex(this.seriesLogical._inner[index]);
			series.syncLink = this.parentSeries.syncLink;
			series.seriesViewer = this.parentSeries.seriesViewer;
			if (this.seriesLogical._inner[index].positive) {
				this.positiveSeries.add(series);
			} else {
				this.negativeSeries.add(series);
			}
			if (typeCast<StackedLineSeries>((<any>StackedLineSeries).$type, this.parentSeries) !== null || typeCast<StackedAreaSeries>((<any>StackedAreaSeries).$type, this.parentSeries) !== null || typeCast<StackedSplineSeries>((<any>StackedSplineSeries).$type, this.parentSeries) !== null || typeCast<StackedSplineAreaSeries>((<any>StackedSplineAreaSeries).$type, this.parentSeries) !== null) {
				series.setXAxis(this.parentSeries.fetchXAxis());
				series.setYAxis(this.parentSeries.fetchYAxis());
			}
			series.renderSeries(false);
			index++;
		}
	}
	private createExternalFragmentWrapper(fragment: Series): void {
		let fragment_ = fragment;
		(<any>fragment_).externalObject = TypeRegistrar.createFromInternal(fragment_, PlatformConstants.Prefix, PlatformConstants.Postfix);
		(<any>fragment_).externalObject._implementation = fragment_;
	}
}


