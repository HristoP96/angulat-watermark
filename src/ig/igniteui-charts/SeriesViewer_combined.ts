/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Control } from "igniteui-core/Control";
import { INotifyPropertyChanged, INotifyPropertyChanged_$type, Type, Base, Point, EventArgs, PropertyChangedEventArgs, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IEnumerable, IEnumerable_$type, IEnumerable$1, IEnumerable$1_$type, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, NotSupportedException, callStaticConstructors, Point_$type, delegateCombine, runOn, delegateRemove, fromEnum, fromEn, typeCast, Boolean_$type, Number_$type, typeGetValue, enumGetBox, toEnum, EnumUtil, String_$type, markType, PointUtil, TypeRegistrar, Delegate_$type } from "igniteui-core/type";
import { ILegendOwner, ILegendOwner_$type } from "igniteui-core/ILegendOwner";
import { IInternalLegendOwner, IInternalLegendOwner_$type } from "igniteui-core/IInternalLegendOwner";
import { ISeriesViewerWidget } from "./ISeriesViewerWidget";
import { SRProvider } from "igniteui-core/SRProvider";
import { DVContainer } from "igniteui-core/DVContainer";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { IChartLegend, IChartLegend_$type } from "igniteui-core/IChartLegend";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Rect } from "igniteui-core/Rect";
import { ChartHitTestMode, ChartHitTestMode_$type } from "./ChartHitTestMode";
import { InteractionState, InteractionState_$type } from "igniteui-core/InteractionState";
import { WindowResponse, WindowResponse_$type } from "./WindowResponse";
import { Visibility, Visibility_$type } from "igniteui-core/Visibility";
import { IOverviewPlusDetailPane } from "igniteui-core/IOverviewPlusDetailPane";
import { SeriesViewerComponentsFromView } from "./SeriesViewerComponentsFromView";
import { Brush } from "igniteui-core/Brush";
import { ModifierKeys, ModifierKeys_$type } from "igniteui-core/ModifierKeys";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { HorizontalAlignment, HorizontalAlignment_$type } from "igniteui-core/HorizontalAlignment";
import { CanvasRenderScheduler } from "igniteui-core/CanvasRenderScheduler";
import { SyncSettings } from "./SyncSettings";
import { Thread, CultureInfo } from "igniteui-core/culture";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { SeriesViewerComponentsForView } from "./SeriesViewerComponentsForView";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { PropertyUpdatedEventArgs } from "igniteui-core/PropertyUpdatedEventArgs";
import { NotifyCollectionChangedEventArgs } from "igniteui-core/NotifyCollectionChangedEventArgs";
import { ObservableCollection$1 } from "igniteui-core/ObservableCollection$1";
import { PropertyChangedEventArgs$1 } from "igniteui-core/PropertyChangedEventArgs$1";
import { Size } from "igniteui-core/Size";
import { List$1 } from "igniteui-core/List$1";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { MouseEventArgs } from "igniteui-core/MouseEventArgs";
import { MouseButtonEventArgs } from "igniteui-core/MouseButtonEventArgs";
import { Key } from "igniteui-core/Key";
import { EventProxy } from "igniteui-core/EventProxy";
import { RectChangedEventArgs } from "igniteui-core/RectChangedEventArgs";
import { MathUtil } from "igniteui-core/MathUtil";
import { DeviceUtils } from "igniteui-core/DeviceUtils";
import { Thickness } from "igniteui-core/Thickness";
import { AxisTitlePosition, AxisTitlePosition_$type } from "./AxisTitlePosition";
import { FontInfo } from "igniteui-core/FontInfo";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { CoercionInfo } from "./CoercionInfo";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { FastItemsSource } from "igniteui-core/FastItemsSource";
import { FontUtil } from "igniteui-core/FontUtil";
import { NotifyCollectionChangedAction } from "igniteui-core/NotifyCollectionChangedAction";
import { ChartContentType, ChartContentType_$type } from "./ChartContentType";
import { defaultDVDateParse, dateNow } from "igniteui-core/date";
import { isNaN_, isInfinity, logBase, log10, truncate } from "igniteui-core/number";
import { stringIsNullOrEmpty, stringEmpty } from "igniteui-core/string";
import { ISchedulableRender, ISchedulableRender_$type } from "igniteui-core/ISchedulableRender";
import { Rectangle } from "igniteui-core/Rectangle";
import { Path } from "igniteui-core/Path";
import { Line } from "igniteui-core/Line";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { TextBlock } from "igniteui-core/TextBlock";
import { ITileZoomTile, ITileZoomTile_$type } from "./ITileZoomTile";
import { IOverviewPlusDetailControl } from "igniteui-core/IOverviewPlusDetailControl";
import { RenderSurface } from "./RenderSurface";
import { Shape } from "igniteui-core/Shape";
import { PathFigureCollection } from "igniteui-core/PathFigureCollection";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { Geometry } from "igniteui-core/Geometry";
import { DataContext } from "igniteui-core/DataContext";
import { LabelPanelsArrangeState } from "./LabelPanelsArrangeState";
import { MarkerTemplates } from "./MarkerTemplates";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { AxisLabelsLocation, AxisLabelsLocation_$type } from "./AxisLabelsLocation";
import { IProvidesViewport, IProvidesViewport_$type } from "./IProvidesViewport";
import { ArgumentNullException } from "igniteui-core/ArgumentNullException";
import { DomRenderer, DomRenderer_$type, DomWrapper, DomWrapper_$type, DomWrapperPosition } from "igniteui-core/dom";
import { PointerTooltipStyle } from "./PointerTooltipStyle";
import { CanvasViewRenderer } from "igniteui-core/CanvasViewRenderer";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { DefaultPaletteInfo } from "./DefaultPaletteInfo";
import { CssGradientUtil } from "igniteui-core/CssGradientUtil";
import { AxisRange } from "./AxisRange";
import { LinearNumericSnapper } from "./LinearNumericSnapper";
import { AxisAnnotationCollection } from "./AxisAnnotationCollection";
import { VerticalAlignment, VerticalAlignment_$type } from "igniteui-core/VerticalAlignment";
import { Canvas } from "igniteui-core/Canvas";
import { IFastItemsSourceProvider, IFastItemsSourceProvider_$type } from "igniteui-core/IFastItemsSourceProvider";
import { AxisExtentType } from "./AxisExtentType";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { LabelPosition } from "./LabelPosition";
import { LabelFontHeuristics } from "./LabelFontHeuristics";
import { AxisOrientation } from "./AxisOrientation";
import { Pool$1 } from "igniteui-core/Pool$1";
import { AxisComponentsFromView } from "./AxisComponentsFromView";
import { FastReflectionHelper } from "igniteui-core/FastReflectionHelper";
import { IAxisAnnotation } from "./IAxisAnnotation";
import { AxisRangeChangedEventArgs } from "./AxisRangeChangedEventArgs";
import { ISeriesViewerWidgetOptions } from "./ISeriesViewerWidgetOptions";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { RectangleGeometry } from "igniteui-core/RectangleGeometry";
import { PathRenderingInfo } from "./PathRenderingInfo";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { BrushUtilCore } from "igniteui-core/BrushUtilCore";
import { RenderRequestedEventArgs } from "./RenderRequestedEventArgs";
import { ScalerParams } from "./ScalerParams";
import { CategoryMode, CategoryMode_$type } from "./CategoryMode";
import { GridMode, GridMode_$type } from "./GridMode";
import { Panel } from "igniteui-core/Panel";
import { UIElement } from "igniteui-core/UIElement";
import { RectUtil } from "igniteui-core/RectUtil";
import { TickmarkValues } from "./TickmarkValues";
import { RotateTransform } from "igniteui-core/RotateTransform";
import { TransformGroup } from "igniteui-core/TransformGroup";
import { Transform } from "igniteui-core/Transform";
import { ICategoryScaler, ICategoryScaler_$type } from "./ICategoryScaler";
import { IScaler } from "./IScaler";
import { FastItemsSourceEventArgs } from "igniteui-core/FastItemsSourceEventArgs";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { AngleSimplifier } from "igniteui-core/AngleSimplifier";
import { TranslateTransform } from "igniteui-core/TranslateTransform";
import { NumericAxisRenderingParameters } from "./NumericAxisRenderingParameters";
import { RangeInfo } from "./RangeInfo";
import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { LogarithmicTickmarkValues } from "./LogarithmicTickmarkValues";
import { LinearTickmarkValues } from "./LinearTickmarkValues";
import { CategoryAxisRenderingParameters } from "./CategoryAxisRenderingParameters";
import { TickmarkValuesInitializationParameters } from "./TickmarkValuesInitializationParameters";
import { INumberAbbreviator } from "./INumberAbbreviator";
import { NumberAbbreviatorFactory } from "./NumberAbbreviatorFactory";
import { HighlightingState } from "./HighlightingState";
import { Marker } from "./Marker";
import { Polyline } from "igniteui-core/Polyline";
import { ContentControl } from "igniteui-core/ContentControl";
import { Polygon } from "igniteui-core/Polygon";
import { ILegendSeries, ILegendSeries_$type } from "igniteui-core/ILegendSeries";
import { ILegendTemplateProvider, ILegendTemplateProvider_$type } from "igniteui-core/ILegendTemplateProvider";
import { StandardLegendItems } from "igniteui-core/StandardLegendItems";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { Color } from "igniteui-core/Color";
import { TransitionInSpeedType, TransitionInSpeedType_$type } from "./TransitionInSpeedType";
import { SeriesHitTestMode, SeriesHitTestMode_$type } from "./SeriesHitTestMode";
import { SeriesComponentsForView } from "./SeriesComponentsForView";
import { Binding } from "igniteui-core/Binding";
import { SeriesPointOfInterest } from "./SeriesPointOfInterest";
import { SeriesComponentsFromView } from "./SeriesComponentsFromView";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { ISortingAxis } from "./ISortingAxis";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { Style } from "igniteui-core/Style";
import { FastItemsSourceReference } from "igniteui-core/FastItemsSourceReference";
import { Debug } from "igniteui-core/Debug";
import { stringFormat } from "igniteui-core/stringExtended";
import { EasingFunctions } from "igniteui-core/EasingFunctions";
import { DataTemplatePassInfo } from "igniteui-core/DataTemplatePassInfo";
import { HashPool$2 } from "igniteui-core/HashPool$2";

/**
 * @hidden 
 */
export abstract class SeriesViewer extends Control implements INotifyPropertyChanged, ILegendOwner, IInternalLegendOwner {
	static $t: Type = markType(SeriesViewer, 'SeriesViewer', (<any>Control).$type, [INotifyPropertyChanged_$type, ILegendOwner_$type, IInternalLegendOwner_$type]);
	private _widget: ISeriesViewerWidget = null;
	get widget(): ISeriesViewerWidget {
		return this._widget;
	}
	set widget(value: ISeriesViewerWidget) {
		this._widget = value;
	}
	private _view: SeriesViewerView = null;
	protected get_view(): SeriesViewerView {
		return this._view;
	}
	protected set_view(value: SeriesViewerView): void {
		this._view = value;
	}
	get view(): SeriesViewerView {
		return this.get_view();
	}
	set view(value: SeriesViewerView) {
		this.set_view(value);
	}
	static staticInit(): void {
		SeriesViewer.standardRect = new Rect(0, 0, 0, 1, 1);
	}
	private _sr: SRProvider = null;
	private get sRP(): SRProvider {
		if (this._sr == null) {
			this._sr = new SRProvider(this.view.viewManager.container);
		}
		return this._sr;
	}
	private _seriesViewerInteractionManager: ISeriesViewerInteractionManager = null;
	get seriesViewerInteractionManager(): ISeriesViewerInteractionManager {
		if (this._seriesViewerInteractionManager == null) {
			this._seriesViewerInteractionManager = <ISeriesViewerInteractionManager><any>DVContainer.instance.createInstance(ISeriesViewerInteractionManager_$type, () => this.sRP.dataChart_InteractivityNotLoaded);
		}
		return this._seriesViewerInteractionManager;
	}
	get isInteractivityLoaded(): boolean {
		return DVContainer.instance.checkLoaded("InteractivityFactoryManager");
	}
	constructor() {
		super();
		DVContainer.instance.registerIfLoaded("AnnotationFactoryManager");
		DVContainer.instance.registerIfLoaded("InteractivityFactoryManager");
		DVContainer.instance.registerIfLoaded("VisualDataFactoryManager");
		this._actualWindowRect = Rect.empty;
		this._crosshairPoint = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		this.lastZoomTime = dateNow();
		this.isDefaultCrosshairDisabled = false;
		this.isDefaultTooltipDisabled = false;
		this.canvasRenderScheduler = new CanvasRenderScheduler();
		this.thumbnailCanvasRenderScheduler = new CanvasRenderScheduler();
		this.alternateViewRenderScheduler = new CanvasRenderScheduler();
		SeriesViewer.standardRect = new Rect(0, 0, 0, 1, 1);
		this.syncSettings = ((() => {
			let $ret = new SyncSettings();
			$ret.synchronizeHorizontally = true;
			$ret.synchronizeVertically = true;
			return $ret;
		})());
		this.view = this.createView();
		this.onViewCreated(this.view);
		this.view.onInit();
		this.updateCrosshairVisibility();
		this.initializeOPD();
		this.actualSyncLink = new SyncLink();
		this.updateSyncLink(null, this.actualSyncLink);
		this.chartContentManager = new ChartContentManager(this);
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
		let $t = this.series;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.series_CollectionChanged));
		let $t1 = this.series;
		$t1.collectionResetting = delegateCombine($t1.collectionResetting, runOn(this, this.series_CollectionResetting));
		this.highlightingAnimator = new DoubleAnimator(0, 1, this.highlightingTransitionDuration);
		let $t2 = this.highlightingAnimator;
		$t2.propertyChanged = delegateCombine($t2.propertyChanged, runOn(this, this.highlightingAnimator_PropertyChanged));
		this.view.createLayout();
		this.invalidateActualWindowRect();
		this.initializeScalingRatio();
	}
	private _previousOPD: IOverviewPlusDetailPane = null;
	initializeOPD(): void {
		if (this._previousOPD != null && this.overviewPlusDetailPane == null) {
			let $t = this.overviewPlusDetailPane;
			$t.thumbnailSizeChanged = delegateRemove($t.thumbnailSizeChanged, runOn(this, this.oPD_ThumbnailSizeChanged));
		}
		if (this.overviewPlusDetailPane != null) {
			let $t1 = this.overviewPlusDetailPane;
			$t1.thumbnailSizeChanged = delegateCombine($t1.thumbnailSizeChanged, runOn(this, this.oPD_ThumbnailSizeChanged));
		}
		if (this._overviewPlusDetailPaneBackgroundImageUri != null) {
			this.overviewPlusDetailPane.backgroundImageUri = this._overviewPlusDetailPaneBackgroundImageUri;
		}
		if (this.overviewPlusDetailPane != null) {
			this.overviewPlusDetailPane.initializeScalingRatio(this.actualPixelScalingRatio);
		}
		if (this._previousOPD == null && this.overviewPlusDetailPane != null) {
			this.notifyThumbnailDataChanged();
		}
		this._previousOPD = this.overviewPlusDetailPane;
	}
	private oPD_ThumbnailSizeChanged(sender: any, e: PropertyChangedEventArgs$1<Size>): void {
		this.overviewPlusDetailPane.surfaceIsDirty = true;
		for (let series of fromEnum<Series>(this.series)) {
			series.thumbnailDirty = true;
		}
	}
	initializeScalingRatio(): void {
		this.view.initializeScalingRatio();
		if (this.overviewPlusDetailPane != null) {
			this.overviewPlusDetailPane.initializeScalingRatio(this.actualPixelScalingRatio);
		}
	}
	get series(): SeriesCollection {
		return this._series;
	}
	private _series: SeriesCollection = new SeriesCollection();
	private series_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		this.cachedEffectiveIsSquare = this.effectiveIsSquare();
		if (e.oldItems != null) {
			for (let series of fromEn<Series>(e.oldItems)) {
				series.syncLink = null;
				series.seriesViewer = null;
				this.removeDataSource(series);
				this.view.removeSeries(series);
			}
		}
		if (e.newItems != null) {
			for (let series1 of fromEn<Series>(e.newItems)) {
				if (!this.view.seriesAttached(series1)) {
					this.updateDataSourceFor(series1);
					this.view.attachSeries(series1);
					series1.seriesViewer = this;
					series1.syncLink = this.actualSyncLink;
					series1.updateSeriesIndexedPropertiesInternal();
				}
			}
		}
		this.notifyThumbnailAppearanceChanged();
		this.onHoverBehaviorOverridesChanged();
	}
	private _skipDataCleanup: boolean = false;
	get skipDataCleanup(): boolean {
		return this._skipDataCleanup;
	}
	set skipDataCleanup(value: boolean) {
		this._skipDataCleanup = value;
	}
	protected removeDataSource(item: any): void {
		if (!this.skipDataCleanup) {
			if (typeCast<Series>((<any>Series).$type, item) !== null) {
				(<Series>item).itemsSource = null;
			} else if (typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, item) !== null) {
				(<CategoryAxisBase>item).itemsSource = null;
			}
		}
		this.removeSpecificDataSource((<FrameworkElement>item).name, true);
	}
	private series_CollectionResetting(sender: any, e: EventArgs): void {
		this.cachedEffectiveIsSquare = this.effectiveIsSquare();
		for (let series of fromEnum<Series>(this.series)) {
			series.syncLink = null;
			series.seriesViewer = null;
			this.removeDataSource(series);
			this.view.removeSeries(series);
		}
	}
	matchRatio(width: number, height: number, widthChanging: boolean, heightChanging: boolean): { p0?: number; p1?: number; } {
		let viewport: Rect = this.viewportRect;
		let viewportWidth: number = viewport.width;
		let viewportHeight: number = viewport.height;
		let viewportRatio: number = viewportWidth / viewportHeight;
		let matchRatio: number = width / height;
		if (isNaN_(viewportRatio)) {
			return {
				p0: width,
				p1: height

			};
		}
		if (isNaN_(matchRatio) || widthChanging || heightChanging || Math.abs(viewportRatio - matchRatio) > 0.0001) {
			if (widthChanging && heightChanging) {
				if (width > height) {
					height = width / viewportRatio;
				} else {
					width = height * viewportRatio;
				}
			} else if (widthChanging) {
				height = width / viewportRatio;
			} else {
				width = height * viewportRatio;
			}
		}
		if (height > 1) {
			let scale: number = 1 / height;
			height = 1;
			width = width * scale;
		}
		if (width > 1) {
			let scale1: number = 1 / width;
			width = 1;
			height = height * scale1;
		}
		return {
			p0: width,
			p1: height

		};
	}
	effectiveIsSquare(): boolean {
		return false;
	}
	protected get isHighlightingInitialized(): boolean {
		return this._seriesViewerInteractionManager != null;
	}
	get highlightingManager(): IHighlightingManager {
		return this.seriesViewerInteractionManager.highlightingManager;
	}
	private _highlightingAnimator: DoubleAnimator = null;
	get highlightingAnimator(): DoubleAnimator {
		return this._highlightingAnimator;
	}
	set highlightingAnimator(value: DoubleAnimator) {
		this._highlightingAnimator = value;
	}
	private highlightingAnimator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.updateHighlights(this.highlightingAnimator.transitionProgress);
	}
	updateHighlights(transitionProgress: number): void {
		let stillRunning = this.highlightingManager.tick(transitionProgress);
		if (transitionProgress == 1 && stillRunning && this.highlightingAnimator.intervalMilliseconds > 0) {
			this.highlightingAnimator.start();
		}
		let dirtySeries = this.highlightingManager.dirtySeries;
		for (let i = 0; i < dirtySeries.count; i++) {
			let series = dirtySeries._inner[i];
			series.onVisualPropertiesChangedImmediate();
		}
		if (!stillRunning) {
			this.highlightingAnimator.stop();
		}
	}
	hideToolTip(): void {
		this.view.hideTooltip();
		this.hideDragCrosshairAndTooltip();
		for (let i = 0; i < this.series.count; i++) {
			if (this.series._inner[i].isAnnotationLayer) {
			}
		}
	}
	getBrushByIndex(index: number): Brush {
		return null;
	}
	getOutlineByIndex(index: number): Brush {
		return null;
	}
	getMarkerBrushByIndex(index: number): Brush {
		return null;
	}
	getMarkerOutlineByIndex(index: number): Brush {
		return null;
	}
	private _chartContentManager: ChartContentManager = null;
	get chartContentManager(): ChartContentManager {
		return this._chartContentManager;
	}
	set chartContentManager(value: ChartContentManager) {
		this._chartContentManager = value;
	}
	static readonly crosshairPointPropertyName: string = "CrosshairPoint";
	get crosshairPoint(): Point {
		return this._crosshairPoint;
	}
	set crosshairPoint(value: Point) {
		if (PointUtil.notEquals(this._crosshairPoint, value)) {
			let oldCrosshairPoint: Point = this._crosshairPoint;
			this._crosshairPoint = value;
			this.raisePropertyChanged(SeriesViewer.crosshairPointPropertyName, oldCrosshairPoint, this._crosshairPoint);
		}
	}
	private _crosshairPoint: Point = null;
	get isInDragOperation(): boolean {
		return this.state == InteractionState.DragZoom || this.state == InteractionState.DragPan;
	}
	get legend(): IChartLegend {
		return <IChartLegend><any>this.getValue(SeriesViewer.legendProperty);
	}
	set legend(value: IChartLegend) {
		this.setValue(SeriesViewer.legendProperty, value);
	}
	static readonly legendPropertyName: string = "Legend";
	static readonly legendProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.legendPropertyName, IChartLegend_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let chart: SeriesViewer = typeCast<SeriesViewer>((<any>SeriesViewer).$type, sender);
		chart.raisePropertyChanged(SeriesViewer.legendPropertyName, e.oldValue, e.newValue);
	}));
	get animateSeriesWhenAxisRangeChanges(): boolean {
		return <boolean>this.getValue(SeriesViewer.animateSeriesWhenAxisRangeChangesProperty);
	}
	set animateSeriesWhenAxisRangeChanges(value: boolean) {
		this.setValue(SeriesViewer.animateSeriesWhenAxisRangeChangesProperty, value);
	}
	static readonly animateSeriesWhenAxisRangeChangesPropertyName: string = "AnimateSeriesWhenAxisRangeChanges";
	static readonly animateSeriesWhenAxisRangeChangesProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.animateSeriesWhenAxisRangeChangesPropertyName, Boolean_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let chart: SeriesViewer = typeCast<SeriesViewer>((<any>SeriesViewer).$type, sender);
		chart.raisePropertyChanged(SeriesViewer.animateSeriesWhenAxisRangeChangesPropertyName, e.oldValue, e.newValue);
	}));
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
	onLegendSortChanged(): void {
		this.onLegendSortChanged1(this.series);
	}
	onLegendSortChanged1(seriesCollection: IEnumerable): void {
		for (let currSeries of fromEn<Series>(seriesCollection)) {
			let legend: IChartLegend = currSeries.actualLegend;
			if (legend == null) {
				continue;
			}
			let item: Control = currSeries.legendItem;
			if (item == null) {
				continue;
			}
			if (legend.containsChild(item)) {
				legend.removeChild(item);
			}
			if (!legend.containsChild(item) && currSeries.legendItemVisibility != Visibility.Collapsed) {
				legend.addChildInOrder(item, currSeries);
			}
		}
	}
	onSeriesMouseEnter(series: Series, item: any, data: any): void {
		this.raiseSeriesMouseEnter(series, item, typeCast<MouseEventArgs>((<any>MouseEventArgs).$type, data));
	}
	onSeriesMouseMove(series: Series, item: any, data: any): void {
		this.raiseSeriesMouseMove(series, item, typeCast<MouseEventArgs>((<any>MouseEventArgs).$type, data));
	}
	onSeriesMouseLeave(series: Series, item: any, data: any): void {
		this.raiseSeriesMouseLeave(series, item, typeCast<MouseEventArgs>((<any>MouseEventArgs).$type, data));
	}
	onSeriesMouseLeftButtonDown(series: Series, item: any, data: any): void {
		this.raiseSeriesMouseLeftButtonDown(series, item, typeCast<MouseButtonEventArgs>((<any>MouseButtonEventArgs).$type, data));
	}
	onSeriesMouseLeftButtonUp(series: Series, item: any, data: any): void {
		let args = typeCast<MouseButtonEventArgs>((<any>MouseButtonEventArgs).$type, data);
		if (args != null) {
			this.raiseSeriesMouseLeftButtonUp(series, item, typeCast<MouseButtonEventArgs>((<any>MouseButtonEventArgs).$type, data));
		}
	}
	onSeriesMouseRightButtonDown(series: Series, item: any, data: any): void {
	}
	onSeriesMouseRightButtonUp(series: Series, item: any, data: any): void {
	}
	seriesCursorMouseMove: (sender: any, e: ChartCursorEventArgs) => void = null;
	raiseSeriesCursorMouseMove(series: Series, item: any): void {
		if (this.seriesCursorMouseMove != null && this.crosshairsVisible) {
			this.seriesCursorMouseMove(this, new ChartCursorEventArgs(this, series, item));
		}
	}
	seriesMouseLeftButtonDown: (sender: any, e: DataChartMouseButtonEventArgs) => void = null;
	raiseSeriesMouseLeftButtonDown(series: Series, item: any, e: MouseButtonEventArgs): void {
		if (this.seriesMouseLeftButtonDown != null) {
			this.seriesMouseLeftButtonDown(this, new DataChartMouseButtonEventArgs(this, series, item, e));
		}
	}
	seriesMouseLeftButtonUp: (sender: any, e: DataChartMouseButtonEventArgs) => void = null;
	raiseSeriesMouseLeftButtonUp(series: Series, item: any, e: MouseButtonEventArgs): void {
		if (this.seriesMouseLeftButtonUp != null) {
			this.seriesMouseLeftButtonUp(this, new DataChartMouseButtonEventArgs(this, series, item, e));
		}
	}
	seriesMouseMove: (sender: any, e: ChartMouseEventArgs) => void = null;
	raiseSeriesMouseMove(series: Series, item: any, e: MouseEventArgs): void {
		if (this.seriesMouseMove != null) {
			this.seriesMouseMove(this, new ChartMouseEventArgs(this, series, item, e));
		}
	}
	seriesMouseEnter: (sender: any, e: ChartMouseEventArgs) => void = null;
	raiseSeriesMouseEnter(series: Series, item: any, e: MouseEventArgs): void {
		if (this.seriesMouseEnter != null) {
			this.seriesMouseEnter(this, new ChartMouseEventArgs(this, series, item, e));
		}
	}
	seriesMouseLeave: (sender: any, e: ChartMouseEventArgs) => void = null;
	raiseSeriesMouseLeave(series: Series, item: any, e: MouseEventArgs): void {
		if (this.seriesMouseLeave != null) {
			this.seriesMouseLeave(this, new ChartMouseEventArgs(this, series, item, e));
		}
	}
	private _viewport: Rect = Rect.empty;
	protected get_viewportRect(): Rect {
		return this._viewport;
	}
	get viewportRect(): Rect {
		return this.get_viewportRect();
	}
	private _effectiveViewport: Rect = Rect.empty;
	get effectiveViewport(): Rect {
		return this._effectiveViewport;
	}
	set effectiveViewport(value: Rect) {
		this._effectiveViewport = value;
	}
	getScaledEffectiveViewport(otherViewport: Rect, mainViewport: Rect, mainEffectiveViewport: Rect): Rect {
		let effective = mainEffectiveViewport;
		let viewport = mainViewport;
		let left = (effective.left - viewport.left) / viewport.width;
		let top = (effective.top - viewport.top) / viewport.height;
		let right = (effective.right - viewport.left) / viewport.width;
		let bottom = (effective.bottom - viewport.top) / viewport.height;
		left = otherViewport.left + left * otherViewport.width;
		top = otherViewport.top + top * otherViewport.height;
		right = otherViewport.left + right * otherViewport.width;
		bottom = otherViewport.top + bottom * otherViewport.height;
		return new Rect(0, left, top, right - left, bottom - top);
	}
	private _contentViewportDirty: boolean = true;
	private _contentViewport: Rect = null;
	protected get_contentViewport(): Rect {
		if (this._contentViewportDirty) {
			this._contentViewportDirty = false;
			let contentViewport = this.getCurrentContentViewport(this.viewportRect, this.effectiveViewport, this.actualWindowRect);
			this._contentViewport = contentViewport;
		}
		return this._contentViewport;
	}
	get contentViewport(): Rect {
		return this.get_contentViewport();
	}
	getCurrentContentViewport(viewportRect: Rect, effectiveViewportRect: Rect, windowRect: Rect): Rect {
		let effective = effectiveViewportRect;
		let window = windowRect;
		let viewport = viewportRect;
		if (viewport.isEmpty) {
			return Rect.empty;
		}
		if (effective.isEmpty) {
			return viewportRect;
		}
		let l = (effective.left - viewport.left) / viewport.width;
		let r = (effective.right - viewport.left) / viewport.width;
		let t = (effective.top - viewport.top) / viewport.height;
		let b = (effective.bottom - viewport.top) / viewport.height;
		l = viewport.left + (l - window.left) / window.width * viewport.width;
		r = viewport.left + (r - window.left) / window.width * viewport.width;
		t = viewport.top + (t - window.top) / window.height * viewport.height;
		b = viewport.top + (b - window.top) / window.height * viewport.height;
		let contentViewport = new Rect(0, l, t, r - l, b - t);
		contentViewport.intersect(viewport);
		return contentViewport;
	}
	protected computeEffectiveViewport(viewportRect: Rect): Rect {
		this._contentViewportDirty = true;
		return Rect.empty;
	}
	getSafeViewportForInitialZoom(): Rect {
		return this.viewportRect;
	}
	protected updateAxisViewport(axis: Axis): void {
		axis.viewportRect = this.viewportRect;
	}
	static readonly windowRectPropertyName: string = "WindowRect";
	static readonly windowRectProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.windowRectPropertyName, (<any>Rect).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, new Rect(0, 0, 0, 1, 1), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.windowRectPropertyName, e.oldValue, e.newValue)));
	get windowRect(): Rect {
		return <Rect>this.getValue(SeriesViewer.windowRectProperty);
	}
	set windowRect(value: Rect) {
		this.setValue(SeriesViewer.windowRectProperty, value);
	}
	static readonly useTiledZoomingPropertyName: string = "UseTiledZooming";
	static readonly useTiledZoomingProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.useTiledZoomingPropertyName, Boolean_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.useTiledZoomingPropertyName, e.oldValue, e.newValue)));
	get useTiledZooming(): boolean {
		return <boolean>this.getValue(SeriesViewer.useTiledZoomingProperty);
	}
	set useTiledZooming(value: boolean) {
		this.setValue(SeriesViewer.useTiledZoomingProperty, value);
	}
	private _actualUseTiledZooming: boolean = false;
	get actualUseTiledZooming(): boolean {
		return this._actualUseTiledZooming;
	}
	set actualUseTiledZooming(value: boolean) {
		this._actualUseTiledZooming = value;
	}
	static readonly preferHigherResolutionTilesPropertyName: string = "PreferHigherResolutionTiles";
	static readonly preferHigherResolutionTilesProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.preferHigherResolutionTilesPropertyName, Boolean_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.preferHigherResolutionTilesPropertyName, e.oldValue, e.newValue)));
	get preferHigherResolutionTiles(): boolean {
		return <boolean>this.getValue(SeriesViewer.preferHigherResolutionTilesProperty);
	}
	set preferHigherResolutionTiles(value: boolean) {
		this.setValue(SeriesViewer.preferHigherResolutionTilesProperty, value);
	}
	static readonly defaultZoomCacheSize: number = 30;
	static readonly zoomTileCacheSizePropertyName: string = "ZoomTileCacheSize";
	static readonly zoomTileCacheSizeProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.zoomTileCacheSizePropertyName, Number_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, SeriesViewer.defaultZoomCacheSize, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.zoomTileCacheSizePropertyName, e.oldValue, e.newValue)));
	get zoomTileCacheSize(): number {
		return typeGetValue(this.getValue(SeriesViewer.zoomTileCacheSizeProperty));
	}
	set zoomTileCacheSize(value: number) {
		this.setValue(SeriesViewer.zoomTileCacheSizeProperty, value);
	}
	private _actualZoomTileCacheSize: number = SeriesViewer.defaultZoomCacheSize;
	get actualZoomTileCacheSize(): number {
		return this._actualZoomTileCacheSize;
	}
	set actualZoomTileCacheSize(value: number) {
		this._actualZoomTileCacheSize = value;
	}
	get highlightingTransitionDuration(): number {
		return typeGetValue(this.getValue(SeriesViewer.highlightingTransitionDurationProperty));
	}
	set highlightingTransitionDuration(value: number) {
		this.setValue(SeriesViewer.highlightingTransitionDurationProperty, value);
	}
	static readonly highlightingTransitionDurationPropertyName: string = "HighlightingTransitionDuration";
	static readonly highlightingTransitionDurationProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.highlightingTransitionDurationPropertyName, Number_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, 300, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.highlightingTransitionDurationPropertyName, e.oldValue, e.newValue)));
	processPlotAreaSizeChanged(oldGridAreaRect: Rect, newGridAreaRect: Rect): void {
		if (!newGridAreaRect.isEmpty) {
			this._viewport = newGridAreaRect;
			this._effectiveViewport = this.computeEffectiveViewport(this._viewport);
			this.view.viewportChanged(this._viewport);
		}
		if (this.effectiveIsSquare()) {
			if (this.actualSyncLink != null) {
				this.windowNotify(this.actualWindowRect, false);
			}
		}
		this.onPlotAreaSizeChanged(oldGridAreaRect, newGridAreaRect);
	}
	private _componentsForView: SeriesViewerComponentsForView = new SeriesViewerComponentsForView();
	getComponentsForView(): SeriesViewerComponentsForView {
		return this._componentsForView;
	}
	get isPagePanningAllowed(): boolean {
		return <boolean>this.getValue(SeriesViewer.isPagePanningAllowedProperty);
	}
	set isPagePanningAllowed(value: boolean) {
		this.setValue(SeriesViewer.isPagePanningAllowedProperty, value);
	}
	static readonly isPagePanningAllowedPropertyName: string = "IsPagePanningAllowed";
	static readonly isPagePanningAllowedProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.isPagePanningAllowedPropertyName, Boolean_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.isPagePanningAllowedPropertyName, e.oldValue, e.newValue)));
	private _contentHitTestMode: ChartHitTestMode = ChartHitTestMode.Auto;
	static readonly contentHitTestModePropertyName: string = "ContentHitTestMode";
	get contentHitTestMode(): ChartHitTestMode {
		return this._contentHitTestMode;
	}
	set contentHitTestMode(value: ChartHitTestMode) {
		let oldValue = this._contentHitTestMode;
		this._contentHitTestMode = value;
		if (oldValue != this._contentHitTestMode) {
			this.raisePropertyChanged(SeriesViewer.contentHitTestModePropertyName, enumGetBox<ChartHitTestMode>(ChartHitTestMode_$type, oldValue), enumGetBox<ChartHitTestMode>(ChartHitTestMode_$type, this._contentHitTestMode));
		}
	}
	recalculateResolvedHitTestMode(): void {
		this.actualContentHitTestMode = this.getResolvedHitTestMode();
	}
	protected getResolvedHitTestMode(): ChartHitTestMode {
		if (!this.isInteractivityLoaded) {
			return ChartHitTestMode.Computational;
		}
		return this.seriesViewerInteractionManager.getResolvedHitTestmode(this);
	}
	private _actualContentHitTestMode: ChartHitTestMode = ChartHitTestMode.Computational;
	static readonly actualContentHitTestModePropertyName: string = "ActualContentHitTestMode";
	get actualContentHitTestMode(): ChartHitTestMode {
		return this._actualContentHitTestMode;
	}
	set actualContentHitTestMode(value: ChartHitTestMode) {
		let oldValue = this._actualContentHitTestMode;
		this._actualContentHitTestMode = value;
		if (oldValue != this._actualContentHitTestMode) {
			this.raisePropertyChanged(SeriesViewer.actualContentHitTestModePropertyName, enumGetBox<ChartHitTestMode>(ChartHitTestMode_$type, oldValue), enumGetBox<ChartHitTestMode>(ChartHitTestMode_$type, this._actualContentHitTestMode));
		}
	}
	get isSurfaceInteractionDisabled(): boolean {
		return <boolean>this.getValue(SeriesViewer.isSurfaceInteractionDisabledProperty);
	}
	set isSurfaceInteractionDisabled(value: boolean) {
		this.setValue(SeriesViewer.isSurfaceInteractionDisabledProperty, value);
	}
	static readonly isSurfaceInteractionDisabledPropertyName: string = "IsSurfaceInteractionDisabled";
	static readonly isSurfaceInteractionDisabledProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.isSurfaceInteractionDisabledPropertyName, Boolean_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.isSurfaceInteractionDisabledPropertyName, e.oldValue, e.newValue)));
	seriesAnimating: (series: Series) => void = null;
	raiseSeriesAnimating(s: Series): void {
		if (this.seriesAnimating != null) {
			this.seriesAnimating(s);
		}
	}
	abstract isZoomingHorizontallyEnabled(): boolean;
	abstract isZoomingVerticallyEnabled(): boolean;
	isZoomingEnabled(): boolean {
		return this.isZoomingHorizontallyEnabled() || this.isZoomingVerticallyEnabled();
	}
	onDetachedFromUI(): void {
		this.view.onDetachedFromUI();
		SyncManager.suspendSyncChannel(this);
	}
	onAttachedToUI(): void {
		this.view.onAttachedToUI();
		SyncManager.ensureSyncChannel(this);
	}
	get state(): InteractionState {
		return this._state;
	}
	set state(value: InteractionState) {
		if (this.state != value) {
			this._state = value;
			if (this.isInteractivityLoaded) {
				this.seriesViewerInteractionManager.onStateChanged(this);
			}
		}
	}
	private _interactionHide: boolean = false;
	private _state: InteractionState = InteractionState.None;
	onMouseEnter(pt: Point): void {
		this.crosshairNotify(this.toWorld(pt));
	}
	onMouseLeave(pt: Point): void {
		this.crosshairNotify(<Point>{ $type: Point_$type, x: NaN, y: NaN });
	}
	onMouseWheel(pt: Point, delta: number): boolean {
		return this.seriesViewerInteractionManager.onMouseWheel(this, pt, delta);
	}
	onDoubleTap(pt: Point): void {
		this.seriesViewerInteractionManager.onDoubleTap(this, pt);
	}
	onKeyDown(key: Key): boolean {
		return this.seriesViewerInteractionManager.onKeyDown(this, key);
	}
	private _pinching: boolean = false;
	private _crosshairsVisible: boolean = false;
	get crosshairsVisible(): boolean {
		return this._crosshairsVisible;
	}
	set crosshairsVisible(value: boolean) {
		this._crosshairsVisible = value;
	}
	private _crossHairActivated: boolean = false;
	get areCrossHairsActivated(): boolean {
		return this._crossHairActivated;
	}
	set areCrossHairsActivated(value: boolean) {
		this._crossHairActivated = value;
	}
	protected get_isIsoScaled(): boolean {
		return this.cachedEffectiveIsSquare || this.useFixedAspectZoom();
	}
	get isIsoScaled(): boolean {
		return this.get_isIsoScaled();
	}
	onDragDelta(point: Point): void {
		this.seriesViewerInteractionManager.onDragDelta(this, point);
	}
	get dragCrosshairActivated(): boolean {
		return this._crossHairActivated;
	}
	private _tooltipStyle: string = null;
	get tooltipStyle(): string {
		return this._tooltipStyle;
	}
	set tooltipStyle(value: string) {
		this._tooltipStyle = value;
	}
	onPlotAreaHold(pt: Point): void {
		this.seriesViewerInteractionManager.onPlotAreaHold(this, pt);
	}
	onDragStarted(pt: Point, isFinger: boolean): void {
		this.seriesViewerInteractionManager.onDragStarted(this, pt, isFinger);
	}
	onDragCompleted(point: Point): void {
		this.seriesViewerInteractionManager.onDragCompleted(this, point);
	}
	get pinching(): boolean {
		return this._pinching;
	}
	set pinching(value: boolean) {
		this._pinching = value;
	}
	private onZoomStart(): void {
		this.seriesViewerInteractionManager.onZoomStart(this);
	}
	onPinchStarted(point: Point): void {
		this.seriesViewerInteractionManager.onPinchStarted(this, point);
	}
	onZoomStarted(point: Point, deltaScaleX: number, deltaScaleY: number, isoDeltaScale: number): void {
		this.seriesViewerInteractionManager.onZoomStarted(this, point, deltaScaleX, deltaScaleY, isoDeltaScale);
	}
	onPinchDelta(p: number): void {
		this.seriesViewerInteractionManager.onPinchDelta(this, p);
	}
	onZoomDelta(p: Point, deltaScaleX: number, deltaScaleY: number, isoDeltaScale: number): void {
		this.seriesViewerInteractionManager.onZoomDelta(this, p, deltaScaleX, deltaScaleY, isoDeltaScale);
	}
	onManipulationStarted(point: Point): void {
		this.seriesViewerInteractionManager.onManipulationStarted(this, point);
	}
	onPinchCompleted(p: number): void {
		this.seriesViewerInteractionManager.onPinchCompleted(this, p);
	}
	onGestureCompleted(pt: Point): void {
		this.seriesViewerInteractionManager.onGestureCompleted(this, pt);
	}
	onZoomCompleted(pt: Point, scaleDeltaX: number, scaleDeltaY: number, isoScaleDelta: number): void {
		this.seriesViewerInteractionManager.onZoomCompleted(this, pt, scaleDeltaX, scaleDeltaY, isoScaleDelta);
	}
	onInfoBoxSizeChanged(size: Size): void {
		this.view.updateInfoBoxYTranslation(size.height);
	}
	hideDragCrosshairAndTooltip(): void {
		if (this._crossHairActivated) {
			this.crosshairNotify(<Point>{ $type: Point_$type, x: NaN, y: NaN });
			this.view.hideInfoBox();
		}
		this._crossHairActivated = false;
	}
	onContactStarted(pt: Point, isFinger: boolean): void {
		this.seriesViewerInteractionManager.onContactStarted(this, pt, isFinger);
	}
	resolveDefaultInteraction(isFinger: boolean): InteractionState {
		let defaultInteraction = this.view.eventProxy != null && this.view.eventProxy.rightButton ? this.rightButtonDefaultInteraction : this.defaultInteraction;
		if (defaultInteraction != InteractionState.Auto) {
			return defaultInteraction;
		}
		return this.view.resolveDefaultInteraction(isFinger);
	}
	onZoomPanInteractionStarting(): void {
		this.seriesViewerInteractionManager.onZoomPanInteractionStarting(this);
	}
	onZoomPanInteractionEnding(): void {
		this.seriesViewerInteractionManager.onZoomPanInteractionEnding(this);
	}
	startTiledZoomingIfNecessary(): void {
		this.seriesViewerInteractionManager.startTiledZoomIfNecessary(this);
	}
	endTiledZoomingIfRunning(): void {
		this.seriesViewerInteractionManager.endTiledZoomIfRunning(this);
	}
	clearTileZoomCacheDueToVisualsChange(): void {
		this.clearTileZoomCache();
	}
	clearTileZoomCache(): void {
		if (this.isInteractivityLoaded) {
			this.seriesViewerInteractionManager.clearTileZoomCache(this);
		}
	}
	prepareAxesForTiledZoom(): void {
	}
	releaseAxesFromTiledZoom(): void {
	}
	refreshAllContentAfterTiledZoom(): void {
		for (let i = 0; i < this.series.count; i++) {
			this.series._inner[i].renderSeries(false);
		}
		this.flushInternal(false, false);
	}
	onContactMoved(pt: Point, isFinger: boolean): void {
		this.seriesViewerInteractionManager.onContactMoved(this, pt, isFinger);
	}
	private _suppressCrosshairChange: boolean = false;
	get suppressCrosshairChange(): boolean {
		return this._suppressCrosshairChange;
	}
	set suppressCrosshairChange(value: boolean) {
		this._suppressCrosshairChange = value;
	}
	onContactCompleted(pt: Point, isFinger: boolean): void {
		this.seriesViewerInteractionManager.onContactCompleted(this, pt, isFinger);
	}
	updateSyncSettings(sender: any, e: PropertyUpdatedEventArgs): void {
		if (e.propertyName == SyncSettings.syncChannelPropertyName) {
			SyncManager.changeSyncChannel(this, <string>e.oldValue, <string>e.newValue);
		}
	}
	updateSyncLink(oldLink: SyncLink, newLink: SyncLink): void {
		if (oldLink != null) {
			oldLink.chartsInternal.remove(this);
			oldLink.propertyUpdated = delegateRemove(oldLink.propertyUpdated, this.propertyUpdated);
		}
		if (newLink != null) {
			newLink.chartsInternal.add(this);
			newLink.propertyUpdated = delegateCombine(newLink.propertyUpdated, this.propertyUpdated);
		}
		for (let series of fromEnum<Series>(this.series)) {
			series.syncLink = this.actualSyncLink;
			series.seriesViewer = this;
		}
	}
	crosshairNotify(notificationPoint: Point): void {
		this.actualSyncLink.crosshairNotify(this, notificationPoint);
	}
	windowNotify(windowRect: Rect, userInteraction: boolean): void {
		this.windowNotify1(windowRect, userInteraction, false);
	}
	windowNotify1(windowRect: Rect, userInteraction: boolean, force: boolean): void {
		if (!userInteraction) {
			this.actualSyncLink.windowNotify1(this, windowRect, force);
		} else {
			if (!this.isZoomingHorizontallyEnabled() && !this.isZoomingVerticallyEnabled()) {
				return;
			}
			let isValid = !windowRect.isEmpty && !isNaN_(windowRect.x) && !isNaN_(windowRect.y) && !isNaN_(windowRect.width) && !isNaN_(windowRect.height);
			let newRect = windowRect;
			if (isValid && !this.isZoomingHorizontallyEnabled()) {
				newRect = new Rect(0, 0, windowRect.y, 1, windowRect.height);
			}
			if (isValid && !this.isZoomingVerticallyEnabled()) {
				newRect = new Rect(0, windowRect.x, 0, windowRect.width, 1);
			}
			this.actualSyncLink.windowNotify(this, newRect);
		}
	}
	previewNotify(windowRect: Rect, userInteraction: boolean): void {
		if (!userInteraction) {
			this.actualSyncLink.previewNotify(this, windowRect);
		} else {
			if (!this.isZoomingHorizontallyEnabled() && !this.isZoomingVerticallyEnabled()) {
				return;
			}
			let isValid = !windowRect.isEmpty && !isNaN_(windowRect.x) && !isNaN_(windowRect.y) && !isNaN_(windowRect.width) && !isNaN_(windowRect.height);
			let newRect = windowRect;
			if (isValid && !this.isZoomingHorizontallyEnabled()) {
				newRect = new Rect(0, 0, windowRect.y, 1, windowRect.height);
			}
			if (isValid && !this.isZoomingVerticallyEnabled()) {
				newRect = new Rect(0, windowRect.x, 0, windowRect.width, 1);
			}
			this.actualSyncLink.previewNotify(this, newRect);
		}
	}
	get isSyncReady(): boolean {
		return this.actualSyncLink != null;
	}
	private *_synchronizedCharts(): IterableIterator<any> {
		if (this.actualSyncLink == null) {
			return undefined;
		}
		for (let chart of fromEnum<SeriesViewer>(this.actualSyncLink.charts)) {
			yield chart;
		}
	}
	synchronizedCharts(): IEnumerable$1<SeriesViewer> {
		return toEnum(() => this._synchronizedCharts());
	}
	toWorld(pt: Point): Point {
		let gridAreaRect: Rect = this.viewportRect;
		let x: number = this.actualWindowRect.left + this.actualWindowRect.width * pt.x / gridAreaRect.width;
		let y: number = this.actualWindowRect.top + this.actualWindowRect.height * pt.y / gridAreaRect.height;
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	toWorld1(rect: Rect): Rect {
		let gridAreaRect: Rect = this.viewportRect;
		let left: number = this.actualWindowRect.left + this.actualWindowRect.width * rect.left / gridAreaRect.width;
		let top: number = this.actualWindowRect.top + this.actualWindowRect.height * rect.top / gridAreaRect.height;
		let right: number = this.actualWindowRect.left + this.actualWindowRect.width * rect.right / gridAreaRect.width;
		let bottom: number = this.actualWindowRect.top + this.actualWindowRect.height * rect.bottom / gridAreaRect.height;
		return new Rect(0, left, top, right - left, bottom - top);
	}
	windowRectChanged: (sender: any, e: RectChangedEventArgs) => void = null;
	private raiseWindowRectChanged(oldWindowRect: Rect, newWindowRect: Rect): void {
		if (this.windowRectChanged != null && Rect.l_op_Inequality(oldWindowRect, newWindowRect)) {
			this.windowRectChanged(this, new RectChangedEventArgs(oldWindowRect, newWindowRect));
		}
	}
	onWindowRectChanged(oldRect: Rect, newRect: Rect): void {
		this.raiseWindowRectChanged(oldRect, newRect);
	}
	sizeChanged: (sender: any, e: RectChangedEventArgs) => void = null;
	onSizeChanged(oldSize: Size, newSize: Size): void {
		if (this.sizeChanged != null && Size.l_op_Inequality(oldSize, newSize)) {
			this.sizeChanged(this, new RectChangedEventArgs(new Rect(1, 0, 0, oldSize), new Rect(1, 0, 0, newSize)));
		}
	}
	private _ignoreWindowChanges: boolean = false;
	get ignoreWindowChanges(): boolean {
		return this._ignoreWindowChanges;
	}
	set ignoreWindowChanges(value: boolean) {
		this._ignoreWindowChanges = value;
	}
	rectChanged(oldRect: Rect, newRect: Rect): boolean {
		if (oldRect.width != newRect.width || oldRect.height != newRect.height || oldRect.x != newRect.x || oldRect.y != newRect.y) {
			return true;
		}
		return false;
	}
	actualWindowRectChanged: (sender: any, e: RectChangedEventArgs) => void = null;
	private raiseActualWindowRectChanged(oldRect: Rect, newRect: Rect): void {
		if (this.actualWindowRectChanged != null && this.rectChanged(oldRect, newRect)) {
			this.actualWindowRectChanged(this, new RectChangedEventArgs(oldRect, newRect));
		}
	}
	resetZoom(): void {
		this.view.resetWindowRect();
	}
	gridAreaRectChanged: (sender: any, e: RectChangedEventArgs) => void = null;
	private raiseGridAreaRectChanged(oldGridAreaRect: Rect, newGridAreaRect: Rect): void {
		if (this.gridAreaRectChanged != null && Rect.l_op_Inequality(oldGridAreaRect, newGridAreaRect)) {
			this.gridAreaRectChanged(this, new RectChangedEventArgs(oldGridAreaRect, newGridAreaRect));
		}
	}
	protected get_isMap(): boolean {
		return false;
	}
	get isMap(): boolean {
		return this.get_isMap();
	}
	onPlotAreaSizeChanged(oldGridAreaRect: Rect, newGridAreaRect: Rect): void {
		this.raiseGridAreaRectChanged(oldGridAreaRect, newGridAreaRect);
		if (this.isInteractivityLoaded) {
			this.seriesViewerInteractionManager.renderCrosshairs(this);
		}
		if (this.isMap && (Rect.l_op_Equality(oldGridAreaRect, null) || oldGridAreaRect.isEmpty || oldGridAreaRect.width == 0 || oldGridAreaRect.height == 0)) {
			this.windowNotify(this.windowRect, false);
		} else {
			this.invalidateActualWindowRect();
		}
	}
	private static readonly windowResponsePropertyName: string = "WindowResponse";
	static readonly windowResponseProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.windowResponsePropertyName, WindowResponse_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<WindowResponse>(WindowResponse_$type, WindowResponse.Immediate), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.windowResponsePropertyName, e.oldValue, e.newValue)));
	get windowResponse(): WindowResponse {
		return EnumUtil.getEnumValue<WindowResponse>(WindowResponse_$type, this.getValue(SeriesViewer.windowResponseProperty));
	}
	set windowResponse(value: WindowResponse) {
		this.setValue(SeriesViewer.windowResponseProperty, enumGetBox<WindowResponse>(WindowResponse_$type, value));
	}
	private _dontNotify: boolean = false;
	get dontNotify(): boolean {
		return this._dontNotify;
	}
	set dontNotify(value: boolean) {
		this._dontNotify = value;
	}
	static readonly windowRectMinWidthPropertyName: string = "WindowRectMinWidth";
	static readonly windowRectMinWidthProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.windowRectMinWidthPropertyName, Number_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, 0.0001, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>o).raisePropertyChanged(SeriesViewer.windowRectMinWidthPropertyName, e.oldValue, e.newValue)));
	get windowRectMinWidth(): number {
		return <number>this.getValue(SeriesViewer.windowRectMinWidthProperty);
	}
	set windowRectMinWidth(value: number) {
		this.setValue(SeriesViewer.windowRectMinWidthProperty, value);
	}
	private _syncChannel: string = null;
	get syncChannel(): string {
		return this._syncChannel;
	}
	set syncChannel(value: string) {
		this._syncChannel = value;
	}
	private _actualSyncLink: SyncLink = null;
	get actualSyncLink(): SyncLink {
		return this._actualSyncLink;
	}
	set actualSyncLink(value: SyncLink) {
		let oldValue = this._actualSyncLink;
		this._actualSyncLink = value;
		this.raisePropertyChanged(SeriesViewer.actualSyncLinkPropertyName, oldValue, this._actualSyncLink);
	}
	static readonly actualSyncLinkPropertyName: string = "ActualSyncLink";
	invalidatePanels(): void {
		this.view.resize();
	}
	static readonly overviewPlusDetailPaneVisibilityPropertyName: string = "OverviewPlusDetailPaneVisibility";
	static readonly overviewPlusDetailPaneVisibilityProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.overviewPlusDetailPaneVisibilityPropertyName, Visibility_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Collapsed), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.overviewPlusDetailPaneVisibilityPropertyName, e.oldValue, e.newValue)));
	get overviewPlusDetailPaneVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(SeriesViewer.overviewPlusDetailPaneVisibilityProperty));
	}
	set overviewPlusDetailPaneVisibility(value: Visibility) {
		this.setValue(SeriesViewer.overviewPlusDetailPaneVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	get overviewPlusDetailPane(): IOverviewPlusDetailPane {
		return this.view.getComponentsFromView().overviewPlusDetailPane;
	}
	protected updateOPDMobileMode(mobileMode: boolean): void {
		if (this.overviewPlusDetailPane != null) {
			this.overviewPlusDetailPane.mobileMode = mobileMode;
		}
	}
	get crosshairVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(SeriesViewer.crosshairVisibilityProperty));
	}
	set crosshairVisibility(value: Visibility) {
		this.setValue(SeriesViewer.crosshairVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	private _ignoreCrosshairVisibilityChange: boolean = false;
	get ignoreCrosshairVisibilityChange(): boolean {
		return this._ignoreCrosshairVisibilityChange;
	}
	set ignoreCrosshairVisibilityChange(value: boolean) {
		this._ignoreCrosshairVisibilityChange = value;
	}
	private _userSetCrosshairVisibility: boolean = false;
	get userSetCrosshairVisibility(): boolean {
		return this._userSetCrosshairVisibility;
	}
	set userSetCrosshairVisibility(value: boolean) {
		this._userSetCrosshairVisibility = value;
	}
	static readonly crosshairVisibilityPropertyName: string = "CrosshairVisibility";
	static readonly crosshairVisibilityProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.crosshairVisibilityPropertyName, Visibility_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.crosshairVisibilityPropertyName, e.oldValue, e.newValue)));
	get plotAreaBorderBrush(): Brush {
		return <Brush>this.getValue(SeriesViewer.plotAreaBorderBrushProperty);
	}
	set plotAreaBorderBrush(value: Brush) {
		this.setValue(SeriesViewer.plotAreaBorderBrushProperty, value);
	}
	static readonly plotAreaBorderBrushPropertyName: string = "PlotAreaBorderBrush";
	static readonly plotAreaBorderBrushProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.plotAreaBorderBrushPropertyName, (<any>Brush).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.plotAreaBorderBrushPropertyName, e.oldValue, e.newValue)));
	get actualPlotAreaBorderBrush(): Brush {
		return <Brush>this.getValue(SeriesViewer.actualPlotAreaBorderBrushProperty);
	}
	set actualPlotAreaBorderBrush(value: Brush) {
		this.setValue(SeriesViewer.actualPlotAreaBorderBrushProperty, value);
	}
	static readonly actualPlotAreaBorderBrushPropertyName: string = "ActualPlotAreaBorderBrush";
	static readonly actualPlotAreaBorderBrushProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.actualPlotAreaBorderBrushPropertyName, (<any>Brush).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.actualPlotAreaBorderBrushPropertyName, e.oldValue, e.newValue)));
	static readonly plotAreaBorderThicknessPropertyName: string = "PlotAreaBorderThickness";
	get plotAreaBackground(): Brush {
		return <Brush>this.getValue(SeriesViewer.plotAreaBackgroundProperty);
	}
	set plotAreaBackground(value: Brush) {
		this.setValue(SeriesViewer.plotAreaBackgroundProperty, value);
	}
	static readonly plotAreaBackgroundPropertyName: string = "PlotAreaBackground";
	static readonly plotAreaBackgroundProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.plotAreaBackgroundPropertyName, (<any>Brush).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.plotAreaBackgroundPropertyName, e.oldValue, e.newValue)));
	canDisplayAnnotations(): boolean {
		return this.state == InteractionState.None && !this._pinching && !this._suppressCrosshairChange;
	}
	allCanDisplayAnnotations(): boolean {
		if (this.actualSyncLink != null && this.actualSyncLink.charts.count > 0) {
			let canDisplay: boolean = true;
			canDisplay = this.canDisplayAnnotations();
			if (!canDisplay) {
				return false;
			}
			for (let i = 0; i < this.actualSyncLink.charts.count; i++) {
				if (!this.actualSyncLink.charts.item(i).canDisplayAnnotations()) {
					return false;
				}
			}
			return true;
		} else {
			return this.canDisplayAnnotations();
		}
	}
	private _windowEventDepth: number = 0;
	private notifyCrosshairUpdate(): void {
	}
	protected updateWindowRect(desiredWindowWidth: number, desiredWindowHeight: number): void {
		let minWidth = this.windowRectMinWidth;
		this.windowRect = new Rect(0, this.actualWindowPositionHorizontal, this.actualWindowPositionVertical, MathUtil.clamp(desiredWindowWidth, minWidth, 1), MathUtil.clamp(desiredWindowHeight, minWidth, 1));
	}
	getActualWindowScaleHorizontal(): number {
		return 1;
	}
	getActualWindowScaleVertical(): number {
		return 1;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case SeriesViewer.titlePropertyName:
			this.view.onTitlesChanged();
			break;

			case SeriesViewer.subtitlePropertyName:
			this.view.onTitlesChanged();
			break;

			case SeriesViewer.actualContentHitTestModePropertyName:
			this.onActualHitTestModeChanged();
			break;

			case SeriesViewer.contentHitTestModePropertyName:
			this.recalculateResolvedHitTestMode();
			break;

			case SeriesViewer.titleHorizontalAlignmentPropertyName:
			this.view.onTitleAlignmentChanged(oldValue, newValue);
			this.view.onTitlesChanged();
			break;

			case SeriesViewer.subtitleHorizontalAlignmentPropertyName:
			this.view.onSubtitleAlignmentChanged(oldValue, newValue);
			this.view.onTitlesChanged();
			break;

			case SeriesViewer.titleTextStylePropertyName:

			case SeriesViewer.titleTextColorPropertyName:

			case SeriesViewer.subtitleTextStylePropertyName:

			case SeriesViewer.subtitleTextColorPropertyName:

			case SeriesViewer.titleTopMarginPropertyName:

			case SeriesViewer.titleLeftMarginPropertyName:

			case SeriesViewer.titleRightMarginPropertyName:

			case SeriesViewer.titleBottomMarginPropertyName:

			case SeriesViewer.subtitleTopMarginPropertyName:

			case SeriesViewer.subtitleLeftMarginPropertyName:

			case SeriesViewer.subtitleRightMarginPropertyName:

			case SeriesViewer.subtitleBottomMarginPropertyName:
			this.view.onTitlesChanged();
			break;

			case SeriesViewer.pixelScalingRatioPropertyName:
			if (isNaN_(DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio))) {
				this.initializeScalingRatio();
			} else {
				this.actualPixelScalingRatio = DeviceUtils.clampPixelScalingRatio(this.pixelScalingRatio);
			}
			break;

			case SeriesViewer.interactionPixelScalingRatioPropertyName:
			this.actualInteractionPixelScalingRatio = this.interactionPixelScalingRatio;
			break;

			case SeriesViewer.actualPixelScalingRatioPropertyName:
			this.view.pixelScalingRatioChanged();
			break;

			case SeriesViewer.isPagePanningAllowedPropertyName:
			this.view.isPagePanningAllowedChanged();
			break;

			case SeriesViewer.actualSyncLinkPropertyName:
			this.updateSyncLink(typeCast<SyncLink>((<any>SyncLink).$type, oldValue), typeCast<SyncLink>((<any>SyncLink).$type, newValue));
			break;

			case SeriesViewer.crosshairVisibilityPropertyName:
			if (!this.ignoreCrosshairVisibilityChange) {
				this.userSetCrosshairVisibility = true;
			}
			if (this.crosshairVisibility == Visibility.Visible) {
				this.crosshairsVisible = true;
			} else {
				this.crosshairsVisible = this.actualMobileMode;
			}
			if (this.isInteractivityLoaded) {
				this.seriesViewerInteractionManager.renderCrosshairs(this);
			}
			break;

			case SeriesViewer.crosshairPointPropertyName:
			if (this.isInteractivityLoaded) {
				this.seriesViewerInteractionManager.renderCrosshairs(this);
			}
			this.notifyCrosshairUpdate();
			break;

			case SeriesViewer.windowRectPropertyName:
			if (this.actualSyncLink != null) {
				this._windowEventDepth++;
				this.windowNotify(<Rect>newValue, false);
				this._windowEventDepth--;
			}
			if (!this.windowRect.equals1(<Rect>oldValue) && this._windowEventDepth == 0) {
				this.onWindowRectChanged(<Rect>oldValue, <Rect>this.windowRect);
			}
			this.invalidateActualWindowRect();
			break;

			case SeriesViewer.windowPositionHorizontalPropertyName:
			this.actualWindowPositionHorizontal = this.windowPositionHorizontal;
			break;

			case SeriesViewer.windowPositionVerticalPropertyName:
			this.actualWindowPositionVertical = this.windowPositionVertical;
			break;

			case SeriesViewer.actualWindowPositionVerticalPropertyName:

			case SeriesViewer.actualWindowPositionHorizontalPropertyName:
			if (!this.suspendWindowRect) {
				this.updateWindowRect(this.getActualWindowScaleHorizontal(), this.getActualWindowScaleVertical());
			}
			break;

			case SeriesViewer.isSurfaceInteractionDisabledPropertyName:
			this.view.onIsInteractionDisabledChanged();
			break;

			case SeriesViewer.highlightingTransitionDurationPropertyName:
			this.highlightingAnimator.intervalMilliseconds = this.highlightingTransitionDuration;
			break;

			case SeriesViewer.overviewPlusDetailPaneVisibilityPropertyName:
			this.updateOverviewPlusDetailPaneVisibility();
			break;

			case SeriesViewer.actualWindowRectPropertyName:
			this._contentViewportDirty = true;
			if (!Base.equalsStatic(newValue, oldValue)) {
				this.actualWindowRectUpdated();
			}
			if ((<Rect>newValue).width == 1 && (<Rect>newValue).height == 1 && (<Rect>oldValue).isEmpty) {
				this.zoomLongAgo = true;
			}
			this.raiseActualWindowRectChanged(<Rect>oldValue, <Rect>newValue);
			break;

			case SeriesViewer.plotAreaBackgroundPropertyName:
			this.view.onPlotAreaBackgroundChanged(<Brush>newValue);
			break;

			case SeriesViewer.useTiledZoomingPropertyName:
			this.actualUseTiledZooming = this.useTiledZooming;
			break;

			case SeriesViewer.zoomTileCacheSizePropertyName:
			this.actualZoomTileCacheSize = this.zoomTileCacheSize;
			this.clearTileZoomCache();
			break;

			case SeriesViewer.preferHigherResolutionTilesPropertyName:
			this.seriesViewerInteractionManager.onPreferHigherResolutionTilesChanged(this);
			break;

		}

	}
	updateOverviewPlusDetailPaneVisibility(): void {
		this._useOPD = this.overviewPlusDetailPaneVisibility == Visibility.Visible;
		this.view.overviewPlusDetailPaneVisibilityChanged();
		this.updateOverviewPlusDetailPaneControlPanelVisibility();
		this.view.updateOverviewPlusDetailRects();
		this.invalidatePanels();
	}
	protected onActualHitTestModeChanged(): void {
		this.view.onActualHitTestModeChanged();
	}
	updateOverviewPlusDetailPaneControlPanelVisibility(): void {
		if (this.overviewPlusDetailPane == null) {
			return;
		}
		this.overviewPlusDetailPane.isZoomable = this.isZoomingEnabled();
	}
	private _useOPD: boolean = false;
	private _suspendWindowRect: boolean = false;
	protected get suspendWindowRect(): boolean {
		return this._suspendWindowRect;
	}
	protected set suspendWindowRect(value: boolean) {
		this._suspendWindowRect = value;
	}
	get defaultInteraction(): InteractionState {
		return EnumUtil.getEnumValue<InteractionState>(InteractionState_$type, this.getValue(SeriesViewer.defaultInteractionProperty));
	}
	set defaultInteraction(value: InteractionState) {
		this.setValue(SeriesViewer.defaultInteractionProperty, enumGetBox<InteractionState>(InteractionState_$type, value));
	}
	static readonly defaultInteractionPropertyName: string = "DefaultInteraction";
	static readonly defaultInteractionProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.defaultInteractionPropertyName, InteractionState_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<InteractionState>(InteractionState_$type, InteractionState.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.defaultInteractionPropertyName, e.oldValue, e.newValue)));
	get rightButtonDefaultInteraction(): InteractionState {
		return EnumUtil.getEnumValue<InteractionState>(InteractionState_$type, this.getValue(SeriesViewer.rightButtonDefaultInteractionProperty));
	}
	set rightButtonDefaultInteraction(value: InteractionState) {
		this.setValue(SeriesViewer.rightButtonDefaultInteractionProperty, enumGetBox<InteractionState>(InteractionState_$type, value));
	}
	static readonly rightButtonDefaultInteractionPropertyName: string = "RightButtonDefaultInteraction";
	static readonly rightButtonDefaultInteractionProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.rightButtonDefaultInteractionPropertyName, InteractionState_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<InteractionState>(InteractionState_$type, InteractionState.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.rightButtonDefaultInteractionPropertyName, e.oldValue, e.newValue)));
	get dragModifier(): ModifierKeys {
		return EnumUtil.getEnumValue<ModifierKeys>(ModifierKeys_$type, this.getValue(SeriesViewer.dragModifierProperty));
	}
	set dragModifier(value: ModifierKeys) {
		this.setValue(SeriesViewer.dragModifierProperty, enumGetBox<ModifierKeys>(ModifierKeys_$type, value));
	}
	static readonly dragModifierPropertyName: string = "DragModifier";
	static readonly dragModifierProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.dragModifierPropertyName, ModifierKeys_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<ModifierKeys>(ModifierKeys_$type, ModifierKeys.Control), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.dragModifierPropertyName, e.oldValue, e.newValue)));
	get panModifier(): ModifierKeys {
		return EnumUtil.getEnumValue<ModifierKeys>(ModifierKeys_$type, this.getValue(SeriesViewer.panModifierProperty));
	}
	set panModifier(value: ModifierKeys) {
		this.setValue(SeriesViewer.panModifierProperty, enumGetBox<ModifierKeys>(ModifierKeys_$type, value));
	}
	static readonly panModifierPropertyName: string = "PanModifier";
	static readonly panModifierProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.panModifierPropertyName, ModifierKeys_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<ModifierKeys>(ModifierKeys_$type, ModifierKeys.Shift), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.panModifierPropertyName, e.oldValue, e.newValue)));
	private _previewRect: Rect = Rect.empty;
	get previewRect(): Rect {
		return this._previewRect;
	}
	set previewRect(value: Rect) {
		let oldPreviewRect = this._previewRect;
		this._previewRect = value;
		if (this._previewRect.isEmpty) {
			this.view.hidePreviewPath();
		} else {
			this.view.updatePreviewPath(this.viewportRect, this.toGridArea(this.previewRect));
			this.view.showPreviewPath();
			this.raisePropertyChanged("PreviewRect", oldPreviewRect, this._previewRect);
		}
	}
	private _lastZoomTime: Date = new Date();
	get lastZoomTime(): Date {
		return this._lastZoomTime;
	}
	set lastZoomTime(value: Date) {
		this._lastZoomTime = value;
	}
	private _zoomLongAgo: boolean = false;
	get zoomLongAgo(): boolean {
		return this._zoomLongAgo;
	}
	set zoomLongAgo(value: boolean) {
		this._zoomLongAgo = value;
	}
	protected updateAcutalWindowProperties(): void {
		this.actualWindowPositionHorizontal = this.actualWindowRect.x;
		this.actualWindowPositionVertical = this.actualWindowRect.y;
	}
	actualWindowRectUpdated(): void {
		this.zoomLongAgo = false;
		this.lastZoomTime = dateNow();
		if (this.isHighlightingInitialized) {
			this.highlightingManager.clear();
		}
		if (this.highlightingAnimator.animationActive()) {
			this.highlightingAnimator.stop();
		}
		let suspendWindowRectStored: boolean = this.suspendWindowRect;
		this.suspendWindowRect = true;
		this.updateAcutalWindowProperties();
		this.suspendWindowRect = suspendWindowRectStored;
		this.view.hideTooltip();
		this.view.updateZoombars(this.actualWindowRect);
	}
	static readonly windowPositionHorizontalPropertyName: string = "WindowPositionHorizontal";
	static readonly windowPositionHorizontalProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.windowPositionHorizontalPropertyName, Number_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.windowPositionHorizontalPropertyName, e.oldValue, e.newValue)));
	get windowPositionHorizontal(): number {
		return <number>this.getValue(SeriesViewer.windowPositionHorizontalProperty);
	}
	set windowPositionHorizontal(value: number) {
		this.setValue(SeriesViewer.windowPositionHorizontalProperty, value);
	}
	static readonly windowPositionVerticalPropertyName: string = "WindowPositionVertical";
	static readonly windowPositionVerticalProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.windowPositionVerticalPropertyName, Number_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.windowPositionVerticalPropertyName, e.oldValue, e.newValue)));
	get windowPositionVertical(): number {
		return <number>this.getValue(SeriesViewer.windowPositionVerticalProperty);
	}
	set windowPositionVertical(value: number) {
		this.setValue(SeriesViewer.windowPositionVerticalProperty, value);
	}
	private toGridArea(rect: Rect): Rect {
		if (this.viewportRect.isEmpty) {
			return Rect.empty;
		}
		let gridAreaRect: Rect = this.viewportRect;
		let left: number = gridAreaRect.left + (gridAreaRect.width * (rect.left - this.actualWindowRect.left) / this.actualWindowRect.width);
		let top: number = gridAreaRect.top + (gridAreaRect.height * (rect.top - this.actualWindowRect.top) / this.actualWindowRect.height);
		let right: number = gridAreaRect.left + (gridAreaRect.width * (rect.right - this.actualWindowRect.left) / this.actualWindowRect.width);
		let bottom: number = gridAreaRect.top + (gridAreaRect.height * (rect.bottom - this.actualWindowRect.top) / this.actualWindowRect.height);
		return new Rect(0, left, top, right - left, bottom - top);
	}
	private static readonly contentPresenterName: string = "ContentPresenter";
	refreshCompleted: (sender: any, e: EventArgs) => void = null;
	raiseRefreshCompleted(): void {
		if (this.refreshCompleted != null && !this.destroyed) {
			this.refreshCompleted(this, new EventArgs());
		}
	}
	protected abstract createView(): SeriesViewerView;
	protected onViewCreated(view: SeriesViewerView): void {
		this.updateOverviewPlusDetailPaneControlPanelVisibility();
	}
	static standardRect: Rect = Rect.empty;
	get circleMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.circleMarkerTemplateProperty);
	}
	set circleMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.circleMarkerTemplateProperty, value);
	}
	static readonly circleMarkerTemplatePropertyName: string = "CircleMarkerTemplate";
	static readonly circleMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.circleMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.circleMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get triangleMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.triangleMarkerTemplateProperty);
	}
	set triangleMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.triangleMarkerTemplateProperty, value);
	}
	static readonly triangleMarkerTemplatePropertyName: string = "TriangleMarkerTemplate";
	static readonly triangleMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.triangleMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.triangleMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get pyramidMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.pyramidMarkerTemplateProperty);
	}
	set pyramidMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.pyramidMarkerTemplateProperty, value);
	}
	static readonly pyramidMarkerTemplatePropertyName: string = "PyramidMarkerTemplate";
	static readonly pyramidMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.pyramidMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.pyramidMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get squareMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.squareMarkerTemplateProperty);
	}
	set squareMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.squareMarkerTemplateProperty, value);
	}
	static readonly squareMarkerTemplatePropertyName: string = "SquareMarkerTemplate";
	static readonly squareMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.squareMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.squareMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get diamondMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.diamondMarkerTemplateProperty);
	}
	set diamondMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.diamondMarkerTemplateProperty, value);
	}
	static readonly diamondMarkerTemplatePropertyName: string = "DiamondMarkerTemplate";
	static readonly diamondMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.diamondMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.diamondMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get pentagonMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.pentagonMarkerTemplateProperty);
	}
	set pentagonMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.pentagonMarkerTemplateProperty, value);
	}
	static readonly pentagonMarkerTemplatePropertyName: string = "PentagonMarkerTemplate";
	static readonly pentagonMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.pentagonMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.pentagonMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get hexagonMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.hexagonMarkerTemplateProperty);
	}
	set hexagonMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.hexagonMarkerTemplateProperty, value);
	}
	static readonly hexagonMarkerTemplatePropertyName: string = "HexagonMarkerTemplate";
	static readonly hexagonMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.hexagonMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.hexagonMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get tetragramMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.tetragramMarkerTemplateProperty);
	}
	set tetragramMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.tetragramMarkerTemplateProperty, value);
	}
	static readonly tetragramMarkerTemplatePropertyName: string = "TetragramMarkerTemplate";
	static readonly tetragramMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.tetragramMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.tetragramMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get pentagramMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.pentagramMarkerTemplateProperty);
	}
	set pentagramMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.pentagramMarkerTemplateProperty, value);
	}
	static readonly pentagramMarkerTemplatePropertyName: string = "PentagramMarkerTemplate";
	static readonly pentagramMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.pentagramMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.pentagramMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get hexagramMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(SeriesViewer.hexagramMarkerTemplateProperty);
	}
	set hexagramMarkerTemplate(value: DataTemplate) {
		this.setValue(SeriesViewer.hexagramMarkerTemplateProperty, value);
	}
	static readonly hexagramMarkerTemplatePropertyName: string = "HexagramMarkerTemplate";
	static readonly hexagramMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.hexagramMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.hexagramMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get title(): string {
		return <string>this.getValue(SeriesViewer.titleProperty);
	}
	set title(value: string) {
		this.setValue(SeriesViewer.titleProperty, value);
	}
	static readonly titlePropertyName: string = "Title";
	static readonly titleProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.titlePropertyName, String_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.titlePropertyName, e.oldValue, e.newValue)));
	static readonly titleHorizontalAlignmentPropertyName: string = "TitleHorizontalAlignment";
	static readonly titleHorizontalAlignmentProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.titleHorizontalAlignmentPropertyName, HorizontalAlignment_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, HorizontalAlignment.Center), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.titleHorizontalAlignmentPropertyName, e.oldValue, e.newValue)));
	get titleHorizontalAlignment(): HorizontalAlignment {
		return EnumUtil.getEnumValue<HorizontalAlignment>(HorizontalAlignment_$type, this.getValue(SeriesViewer.titleHorizontalAlignmentProperty));
	}
	set titleHorizontalAlignment(value: HorizontalAlignment) {
		this.setValue(SeriesViewer.titleHorizontalAlignmentProperty, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, value));
	}
	static readonly subtitleHorizontalAlignmentPropertyName: string = "SubtitleHorizontalAlignment";
	static readonly subtitleHorizontalAlignmentProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.subtitleHorizontalAlignmentPropertyName, HorizontalAlignment_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, HorizontalAlignment.Center), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.subtitleHorizontalAlignmentPropertyName, e.oldValue, e.newValue)));
	get subtitleHorizontalAlignment(): HorizontalAlignment {
		return EnumUtil.getEnumValue<HorizontalAlignment>(HorizontalAlignment_$type, this.getValue(SeriesViewer.subtitleHorizontalAlignmentProperty));
	}
	set subtitleHorizontalAlignment(value: HorizontalAlignment) {
		this.setValue(SeriesViewer.subtitleHorizontalAlignmentProperty, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, value));
	}
	private _titleTextStyle: string = null;
	get titleTextStyle(): string {
		return this._titleTextStyle;
	}
	set titleTextStyle(value: string) {
		let oldValue = this._titleTextStyle;
		this._titleTextStyle = value;
		this.raisePropertyChanged(SeriesViewer.titleTextStylePropertyName, oldValue, value);
	}
	static readonly titleTextStylePropertyName: string = "TitleTextStyle";
	private _subtitleTextStyle: string = null;
	get subtitleTextStyle(): string {
		return this._subtitleTextStyle;
	}
	set subtitleTextStyle(value: string) {
		let oldValue = this._subtitleTextStyle;
		this._subtitleTextStyle = value;
		this.raisePropertyChanged(SeriesViewer.subtitleTextStylePropertyName, oldValue, value);
	}
	static readonly subtitleTextStylePropertyName: string = "SubtitleTextStyle";
	private _titleTextColor: Brush = null;
	get titleTextColor(): Brush {
		return this._titleTextColor;
	}
	set titleTextColor(value: Brush) {
		let oldValue: Brush = this._titleTextColor;
		this._titleTextColor = value;
		this.raisePropertyChanged(SeriesViewer.titleTextColorPropertyName, oldValue, value);
	}
	static readonly titleTextColorPropertyName: string = "TitleTextColor";
	private _subtitleTextColor: Brush = null;
	get subtitleTextColor(): Brush {
		return this._subtitleTextColor;
	}
	set subtitleTextColor(value: Brush) {
		let oldValue: Brush = this._subtitleTextColor;
		this._subtitleTextColor = value;
		this.raisePropertyChanged(SeriesViewer.subtitleTextColorPropertyName, oldValue, value);
	}
	static readonly subtitleTextColorPropertyName: string = "SubtitleTextColor";
	private _titleTopMargin: number = NaN;
	get titleTopMargin(): number {
		return this._titleTopMargin;
	}
	set titleTopMargin(value: number) {
		let oldValue: number = this._titleTopMargin;
		this._titleTopMargin = value;
		this.raisePropertyChanged(SeriesViewer.titleTopMarginPropertyName, oldValue, value);
	}
	static readonly titleTopMarginPropertyName: string = "TitleTopMargin";
	private _titleLeftMargin: number = NaN;
	get titleLeftMargin(): number {
		return this._titleLeftMargin;
	}
	set titleLeftMargin(value: number) {
		let oldValue: number = this._titleLeftMargin;
		this._titleLeftMargin = value;
		this.raisePropertyChanged(SeriesViewer.titleLeftMarginPropertyName, oldValue, value);
	}
	static readonly titleLeftMarginPropertyName: string = "TitleLeftMargin";
	private _titleRightMargin: number = NaN;
	get titleRightMargin(): number {
		return this._titleRightMargin;
	}
	set titleRightMargin(value: number) {
		let oldValue: number = this._titleRightMargin;
		this._titleRightMargin = value;
		this.raisePropertyChanged(SeriesViewer.titleRightMarginPropertyName, oldValue, value);
	}
	static readonly titleRightMarginPropertyName: string = "TitleRightMargin";
	private _titleBottomMargin: number = NaN;
	get titleBottomMargin(): number {
		return this._titleBottomMargin;
	}
	set titleBottomMargin(value: number) {
		let oldValue: number = this._titleBottomMargin;
		this._titleBottomMargin = value;
		this.raisePropertyChanged(SeriesViewer.titleBottomMarginPropertyName, oldValue, value);
	}
	static readonly titleBottomMarginPropertyName: string = "TitleBottomMargin";
	private _subtitleTopMargin: number = NaN;
	get subtitleTopMargin(): number {
		return this._subtitleTopMargin;
	}
	set subtitleTopMargin(value: number) {
		let oldValue: number = this._subtitleTopMargin;
		this._subtitleTopMargin = value;
		this.raisePropertyChanged(SeriesViewer.subtitleTopMarginPropertyName, oldValue, value);
	}
	static readonly subtitleTopMarginPropertyName: string = "SubtitleTopMargin";
	private _subtitleLeftMargin: number = NaN;
	get subtitleLeftMargin(): number {
		return this._subtitleLeftMargin;
	}
	set subtitleLeftMargin(value: number) {
		let oldValue: number = this._subtitleLeftMargin;
		this._subtitleLeftMargin = value;
		this.raisePropertyChanged(SeriesViewer.subtitleLeftMarginPropertyName, oldValue, value);
	}
	static readonly subtitleLeftMarginPropertyName: string = "SubtitleLeftMargin";
	private _subtitleRightMargin: number = NaN;
	get subtitleRightMargin(): number {
		return this._subtitleRightMargin;
	}
	set subtitleRightMargin(value: number) {
		let oldValue: number = this._subtitleRightMargin;
		this._subtitleRightMargin = value;
		this.raisePropertyChanged(SeriesViewer.subtitleRightMarginPropertyName, oldValue, value);
	}
	static readonly subtitleRightMarginPropertyName: string = "SubtitleRightMargin";
	private _subtitleBottomMargin: number = NaN;
	get subtitleBottomMargin(): number {
		return this._subtitleBottomMargin;
	}
	set subtitleBottomMargin(value: number) {
		let oldValue: number = this._subtitleBottomMargin;
		this._subtitleBottomMargin = value;
		this.raisePropertyChanged(SeriesViewer.subtitleBottomMarginPropertyName, oldValue, value);
	}
	static readonly subtitleBottomMarginPropertyName: string = "SubtitleBottomMargin";
	get subtitle(): string {
		return <string>this.getValue(SeriesViewer.subtitleProperty);
	}
	set subtitle(value: string) {
		this.setValue(SeriesViewer.subtitleProperty, value);
	}
	static readonly subtitlePropertyName: string = "Subtitle";
	static readonly subtitleProperty: DependencyProperty = DependencyProperty.register(SeriesViewer.subtitlePropertyName, String_$type, (<any>SeriesViewer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<SeriesViewer>sender).raisePropertyChanged(SeriesViewer.subtitlePropertyName, e.oldValue, e.newValue)));
	getDefaultHorizontalAxisTitleMargin(): Thickness {
		return this.view.getDefaultHorizontalAxisTitleMargin();
	}
	getDefaultVerticalAxisTitleMargin(): Thickness {
		return this.view.getDefaultVerticalAxisTitleMargin();
	}
	getDefaultHorizontalAxisTitlePosition(axis: Axis): AxisTitlePosition {
		return this.view.getDefaultHorizontalAxisTitlePosition(axis);
	}
	getDefaultVerticalAxisTitlePosition(axis: Axis): AxisTitlePosition {
		return this.view.getDefaultVerticalAxisTitlePosition(axis);
	}
	abstract getFontInfo(): FontInfo;
	getFontHeight(): number {
		return this.view.fontHeight;
	}
	abstract getFontBrush(): Brush;
	abstract getAxisLineBrush(): Brush;
	private _tooltipTemplate: any = null;
	get tooltipTemplate(): any {
		return this._tooltipTemplate;
	}
	set tooltipTemplate(value: any) {
		this._tooltipTemplate = value;
	}
	provideContainer(container: any): void {
		this.view.onContainerProvided(container);
	}
	onContainerResized(width: number, height: number): void {
		this.view.onContainerResized(width, height);
	}
	notifyContainerResized(): void {
		this.view.notifyContainerResized();
	}
	getContainerRect(): Rect {
		return this.view.getContainerRect();
	}
	ensureCorrectSize(): void {
		this.view.ensureCorrectSize();
	}
	getContainerOffsets(): Point {
		return this.view.getContainerOffsets();
	}
	getDefaultVerticalAxisFont(): FontInfo {
		return this.view.getDefaultVerticalAxisFont();
	}
	getDefaultHorizontalAxisFont(): FontInfo {
		return this.view.getDefaultHorizontalAxisFont();
	}
	getDefaultHorizontalAxisColor(): Brush {
		return this.view.getDefaultHorizontalAxisColor();
	}
	getDefaultverticalAxisColor(): Brush {
		return this.view.getDefaultVerticalAxisColor();
	}
	attachSeries(s: Series): void {
		this.view.attachSeries(s);
	}
	removeSeries(s: Series): void {
		this.view.removeSeries(s);
	}
	private _canvasRenderScheduler: CanvasRenderScheduler = null;
	get canvasRenderScheduler(): CanvasRenderScheduler {
		return this._canvasRenderScheduler;
	}
	set canvasRenderScheduler(value: CanvasRenderScheduler) {
		this._canvasRenderScheduler = value;
	}
	private _thumbnailCanvasRenderScheduler: CanvasRenderScheduler = null;
	get thumbnailCanvasRenderScheduler(): CanvasRenderScheduler {
		return this._thumbnailCanvasRenderScheduler;
	}
	set thumbnailCanvasRenderScheduler(value: CanvasRenderScheduler) {
		this._thumbnailCanvasRenderScheduler = value;
	}
	private _alternateViewRenderScheduler: CanvasRenderScheduler = null;
	get alternateViewRenderScheduler(): CanvasRenderScheduler {
		return this._alternateViewRenderScheduler;
	}
	set alternateViewRenderScheduler(value: CanvasRenderScheduler) {
		this._alternateViewRenderScheduler = value;
	}
	private _mobileMode: boolean = false;
	get mobileMode(): boolean {
		return this._mobileMode;
	}
	set mobileMode(value: boolean) {
		let oldMode = this._mobileMode;
		this._mobileMode = value;
		if (oldMode != this._mobileMode) {
			this.view.mobileModeChanged(this._mobileMode);
		}
	}
	private _actualMobileMode: boolean = false;
	get actualMobileMode(): boolean {
		return this._actualMobileMode;
	}
	set actualMobileMode(value: boolean) {
		let oldMode = this._actualMobileMode;
		this._actualMobileMode = value;
		if (oldMode != this._actualMobileMode) {
			this.view.actualMobileModeChanged(this._actualMobileMode);
		}
	}
	private _syncSettings: SyncSettings = null;
	get syncSettings(): SyncSettings {
		return this._syncSettings;
	}
	set syncSettings(value: SyncSettings) {
		this._syncSettings = value;
	}
	addTooltipToView(control: any): void {
		this.view.addTooltipToView(control);
	}
	removeTooltipFromView(control: any): void {
		this.view.removeTooltipFromView(control);
	}
	notifySetItem(source_: any, index: number, oldItem: any, newItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		let itemsSource = this.actualSyncLink.peekItemsSource(<IEnumerable><any>source_);
		if (itemsSource == null) {
			return;
		}
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(2, NotifyCollectionChangedAction.Replace, newItem, oldItem, index));
	}
	notifyClearItems(source_: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		let itemsSource = this.actualSyncLink.peekItemsSource(<IEnumerable><any>source_);
		if (itemsSource == null) {
			return;
		}
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(0, NotifyCollectionChangedAction.Reset));
	}
	notifyInsertItem(source_: any, index: number, newItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		let itemsSource = this.actualSyncLink.peekItemsSource(<IEnumerable><any>source_);
		if (itemsSource == null) {
			return;
		}
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Add, newItem, index));
	}
	notifyRemoveItem(source_: any, index: number, oldItem: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		let itemsSource = this.actualSyncLink.peekItemsSource(<IEnumerable><any>source_);
		if (itemsSource == null) {
			return;
		}
		itemsSource.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Remove, oldItem, index));
	}
	destroyed: boolean = false;
	protected _widgetLevelSource: any = null;
	protected _specificSources: Dictionary$2<string, any> = new Dictionary$2<string, any>(String_$type, (<any>Base).$type, 0);
	private _manageDataSources: boolean = false;
	get manageDataSources(): boolean {
		return this._manageDataSources;
	}
	set manageDataSources(value: boolean) {
		this._manageDataSources = value;
	}
	destroy(): void {
		this.destroyed = true;
		let toDestroy = new List$1<Series>((<any>Series).$type, 0);
		for (let i = 0; i < this.series.count; i++) {
			toDestroy.add(this.series._inner[i]);
		}
		for (let i1 = 0; i1 < toDestroy.count; i1++) {
			if (toDestroy._inner[i1].view != null) {
				toDestroy._inner[i1].view.destroy();
			}
			this.series.remove(toDestroy._inner[i1]);
			this.removeSpecificDataSource(toDestroy._inner[i1].name, true);
			toDestroy._inner[i1].itemsSource = null;
			toDestroy._inner[i1].provideContext(null, null);
		}
		this.destroyOverride();
		this.removeWidgetLevelDataSource();
		this.onDetachedFromUI();
		this.view.onContainerProvided(null);
	}
	protected destroyOverride(): void {
	}
	setWidgetLevelDataSource(source_: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		this._widgetLevelSource = source_;
		this.updateDataSources();
	}
	removeWidgetLevelDataSource(): void {
		this._widgetLevelSource = null;
		this.updateDataSources();
	}
	setSpecificDataSource(targetName: string, source_: any): void {
		if (source_.dataView && source_.dataSource) { source_ = source_.dataView() };
		if (stringIsNullOrEmpty(targetName) == false) {
			if (!this._specificSources.containsKey(targetName)) {
				this._specificSources.addItem(targetName, source_);
			} else {
				this._specificSources.item(targetName, source_);
			}
		}
		this.updateDataSources();
	}
	removeSpecificDataSource(targetName: string, dontUpdate: boolean): void {
		if (stringIsNullOrEmpty(targetName) == false) {
			if (this._specificSources.containsKey(targetName)) {
				this._specificSources.removeItem(targetName);
			}
		}
		if (!dontUpdate) {
			this.updateDataSources();
		}
	}
	protected setDataSourceForSeries(target: Series, source: any): void {
		if (target.itemsSource != source) {
			target.itemsSource = <IEnumerable><any>source;
		}
	}
	protected updateDataSourceFor(target: any): void {
		if (!this.manageDataSources) {
			return;
		}
		if (typeCast<Series>((<any>Series).$type, target) !== null) {
			let series: Series = <Series>target;
			if (this._specificSources.containsKey(series.name)) {
				let specific = this._specificSources.item(series.name);
				this.setDataSourceForSeries(series, specific);
			} else {
				this.setDataSourceForSeries(series, this._widgetLevelSource);
			}
		}
		if (typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, target) !== null) {
			let cat = <CategoryAxisBase>target;
			if (this._specificSources.containsKey(cat.name)) {
				let specific1 = this._specificSources.item(cat.name);
				if (cat.itemsSource != specific1) {
					cat.itemsSource = <IEnumerable><any>specific1;
				}
			} else {
				if (cat.itemsSource != this._widgetLevelSource) {
					cat.itemsSource = <IEnumerable><any>this._widgetLevelSource;
				}
			}
		}
	}
	protected updateDataSources(): void {
		if (!this.manageDataSources) {
			return;
		}
		for (let series of fromEnum<Series>(this.series)) {
			this.updateDataSourceFor(series);
		}
	}
	private _topMargin: number = NaN;
	get topMargin(): number {
		return this._topMargin;
	}
	set topMargin(value: number) {
		this._topMargin = value;
		this.invalidatePanels();
	}
	private _leftMargin: number = NaN;
	get leftMargin(): number {
		return this._leftMargin;
	}
	set leftMargin(value: number) {
		this._leftMargin = value;
		this.invalidatePanels();
	}
	private _rightMargin: number = NaN;
	get rightMargin(): number {
		return this._rightMargin;
	}
	set rightMargin(value: number) {
		this._rightMargin = value;
		this.invalidatePanels();
	}
	private _bottomMargin: number = NaN;
	get bottomMargin(): number {
		return this._bottomMargin;
	}
	set bottomMargin(value: number) {
		this._bottomMargin = value;
		this.invalidatePanels();
	}
	private _autoMarginWidth: number = 20;
	get autoMarginWidth(): number {
		return this._autoMarginWidth;
	}
	set autoMarginWidth(value: number) {
		this._autoMarginWidth = value;
		this.invalidatePanels();
	}
	private _autoMarginHeight: number = NaN;
	get autoMarginHeight(): number {
		return this._autoMarginHeight;
	}
	set autoMarginHeight(value: number) {
		this._autoMarginHeight = value;
		this.invalidatePanels();
	}
	shouldAddAutoMargins(): boolean {
		return false;
	}
	private _isAntiAliasingEnabledDuringInteraction: boolean = true;
	static readonly isAntiAliasingEnabledDuringInteractionPropertyName: string = "IsAntiAliasingEnabledDuringInteraction";
	get isAntiAliasingEnabledDuringInteraction(): boolean {
		return this._isAntiAliasingEnabledDuringInteraction;
	}
	set isAntiAliasingEnabledDuringInteraction(value: boolean) {
		let oldValue = this._isAntiAliasingEnabledDuringInteraction;
		this._isAntiAliasingEnabledDuringInteraction = value;
		this.raisePropertyChanged(SeriesViewer.isAntiAliasingEnabledDuringInteractionPropertyName, oldValue, this._isAntiAliasingEnabledDuringInteraction);
	}
	private _pixelScalingRatio: number = NaN;
	static readonly pixelScalingRatioPropertyName: string = "PixelScalingRatio";
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		let oldValue = this._pixelScalingRatio;
		this._pixelScalingRatio = value;
		this.raisePropertyChanged(SeriesViewer.pixelScalingRatioPropertyName, oldValue, this._pixelScalingRatio);
	}
	private _interactionPixelScalingRatio: number = NaN;
	static readonly interactionPixelScalingRatioPropertyName: string = "InteractionPixelScalingRatio";
	get interactionPixelScalingRatio(): number {
		return this._interactionPixelScalingRatio;
	}
	set interactionPixelScalingRatio(value: number) {
		let oldValue = this._interactionPixelScalingRatio;
		this._interactionPixelScalingRatio = value;
		this.raisePropertyChanged(SeriesViewer.interactionPixelScalingRatioPropertyName, oldValue, this._interactionPixelScalingRatio);
	}
	static getCoercionMethod(memberPath: string, coercionMethods: any): CoercionInfo {
		let info: CoercionInfo = new CoercionInfo();
		info.memberPath = memberPath;
		info.coercionMethod = null;
		let parsed = FastItemsSource.parseMemberPath(memberPath);
		if (parsed.item2 == null) {
			return info;
		}
		if (coercionMethods != null) {
			let methods_ = coercionMethods;
			let key_ = parsed.item2;
			let val_: (arg1: any) => any = null;
			if (typeof methods_[key_] != 'undefined') { val_ = <(p1: any) => any>(<any>methods_)[key_]; };
			info.memberPath = parsed.item1;
			info.coercionMethod = val_;
		} else if (parsed.item2 == "defaultDateParse") {
			let func = defaultDVDateParse;
			info.memberPath = parsed.item1;
			info.coercionMethod = <(arg1: any) => any>func;
		}
		return info;
	}
	private _overviewPlusDetailPaneBackgroundImageUri: string = null;
	get overviewPlusDetailPaneBackgroundImageUri(): string {
		return this._overviewPlusDetailPaneBackgroundImageUri;
	}
	set overviewPlusDetailPaneBackgroundImageUri(value: string) {
		this._overviewPlusDetailPaneBackgroundImageUri = value;
		if (this.overviewPlusDetailPane == null) {
			return;
		}
		this.overviewPlusDetailPane.backgroundImageUri = this._overviewPlusDetailPaneBackgroundImageUri;
	}
	private _actualPixelScalingRatio: number = 1;
	static readonly actualPixelScalingRatioPropertyName: string = "ActualPixelScalingRatio";
	get actualPixelScalingRatio(): number {
		return this._actualPixelScalingRatio;
	}
	set actualPixelScalingRatio(value: number) {
		let oldValue = this._actualPixelScalingRatio;
		this._actualPixelScalingRatio = value;
		this.raisePropertyChanged(SeriesViewer.actualPixelScalingRatioPropertyName, oldValue, this._actualPixelScalingRatio);
	}
	private _actualInteractionPixelScalingRatio: number = NaN;
	static readonly actualInteractionPixelScalingRatioPropertyName: string = "ActualInteractionPixelScalingRatio";
	get actualInteractionPixelScalingRatio(): number {
		return this._actualInteractionPixelScalingRatio;
	}
	set actualInteractionPixelScalingRatio(value: number) {
		let oldValue = this._actualInteractionPixelScalingRatio;
		this._actualInteractionPixelScalingRatio = value;
		this.raisePropertyChanged(SeriesViewer.actualInteractionPixelScalingRatioPropertyName, oldValue, this._actualInteractionPixelScalingRatio);
	}
	protected static readonly actualWindowRectPropertyName: string = "ActualWindowRect";
	private _actualWindowRect: Rect = null;
	get actualWindowRect(): Rect {
		return this._actualWindowRect;
	}
	set actualWindowRect(value: Rect) {
		let changed: boolean = Rect.l_op_Inequality(this._actualWindowRect, value);
		if (changed) {
			let oldValue: any = this._actualWindowRect;
			this._actualWindowRect = value;
			this.raisePropertyChanged(SeriesViewer.actualWindowRectPropertyName, oldValue, value);
		}
	}
	private invalidateActualWindowRect(): void {
		this.actualWindowRect = this.calculateActualWindowRect();
	}
	protected calculateActualWindowRect(): Rect {
		return new Rect(0, Math.min(1, Math.max(0, this.windowRect.left)), Math.min(1, Math.max(0, this.windowRect.top)), Math.min(1, Math.max(0, this.windowRect.width)), Math.min(1, Math.max(0, this.windowRect.height)));
	}
	private _actualWindowPositionHorizontal: number = 0;
	static readonly actualWindowPositionHorizontalPropertyName: string = "ActualWindowPositionHorizontal";
	get actualWindowPositionHorizontal(): number {
		return this._actualWindowPositionHorizontal;
	}
	set actualWindowPositionHorizontal(value: number) {
		let oldValue: number = this._actualWindowPositionHorizontal;
		this._actualWindowPositionHorizontal = value;
		this.raisePropertyChanged(SeriesViewer.actualWindowPositionHorizontalPropertyName, oldValue, this._actualWindowPositionHorizontal);
	}
	private _actualWindowPositionVertical: number = 0;
	static readonly actualWindowPositionVerticalPropertyName: string = "ActualWindowPositionVertical";
	get actualWindowPositionVertical(): number {
		return this._actualWindowPositionVertical;
	}
	set actualWindowPositionVertical(value: number) {
		let oldValue: number = this._actualWindowPositionVertical;
		this._actualWindowPositionVertical = value;
		this.raisePropertyChanged(SeriesViewer.actualWindowPositionVerticalPropertyName, oldValue, this._actualWindowPositionVertical);
	}
	notifyThumbnailDataChanged(): void {
		if (this._useOPD && this.overviewPlusDetailPane != null) {
			this.overviewPlusDetailPane.surfaceIsDirty = true;
			this.overviewPlusDetailPane.doRefresh(false);
		}
		this.clearTileZoomCacheDueToVisualsChange();
	}
	notifyThumbnailAppearanceChanged(): void {
		if (this._useOPD && this.overviewPlusDetailPane != null) {
			this.overviewPlusDetailPane.surfaceIsDirty = true;
			this.overviewPlusDetailPane.doRefresh(false);
		}
		this.clearTileZoomCacheDueToVisualsChange();
	}
	flush(): void {
		this.flushInternal(true, true);
	}
	flushInternal(forceLayout: boolean, forceOverlay: boolean): void {
		this.chartContentManager.force();
		if (forceLayout) {
			this.view.ensurePanelsArranged();
			this.chartContentManager.force();
		}
		this.canvasRenderScheduler.flush();
		if (forceOverlay) {
			this.view.overlayScheduler.flush();
		}
		this.zoomLongAgo = true;
	}
	useFixedAspectZoom(): boolean {
		return false;
	}
	private _background: DependencyObject = null;
	private _backgroundContentInfo: ContentInfo = null;
	protected registerBackgroundContent(content: DependencyObject, refresh: (arg1: boolean) => void): void {
		if (this._background != null) {
			this.unRegisterBackgroundContent(this._background);
			this._background = null;
			this._backgroundContentInfo = null;
		}
		this._background = content;
		this._backgroundContentInfo = this.chartContentManager.subscribe(ChartContentType.Background, content, refresh);
	}
	protected unRegisterBackgroundContent(content: DependencyObject): void {
		this.chartContentManager.unsubscribe(ChartContentType.Background, content);
		this._background = null;
		this._backgroundContentInfo = null;
	}
	deferBackgroundRefresh(): void {
		this.chartContentManager.refresh(ChartContentType.Background, this._background, this._backgroundContentInfo, false);
	}
	private _isDefaultCrosshairDisabled: boolean = false;
	get isDefaultCrosshairDisabled(): boolean {
		return this._isDefaultCrosshairDisabled;
	}
	set isDefaultCrosshairDisabled(value: boolean) {
		this._isDefaultCrosshairDisabled = value;
	}
	private _isDefaultTooltipDisabled: boolean = false;
	get isDefaultTooltipDisabled(): boolean {
		return this._isDefaultTooltipDisabled;
	}
	set isDefaultTooltipDisabled(value: boolean) {
		this._isDefaultTooltipDisabled = value;
	}
	private _isAnnotationLayerPresent: boolean = false;
	get isAnnotationLayerPresent(): boolean {
		return this._isAnnotationLayerPresent;
	}
	set isAnnotationLayerPresent(value: boolean) {
		this._isAnnotationLayerPresent = value;
	}
	onHoverBehaviorOverridesChanged(): void {
		let crosshairDisabled: boolean = false;
		let tooltipDisabled: boolean = false;
		let containsAnnotationLayer: boolean = false;
		for (let i = 0; i < this.series.count; i++) {
			let series = this.series._inner[i];
			if (series.isDefaultCrosshairBehaviorDisabled) {
				crosshairDisabled = true;
			}
			if (series.isDefaultTooltipBehaviorDisabled) {
				tooltipDisabled = true;
			}
			if (series.isAnnotationLayer) {
				containsAnnotationLayer = true;
			}
		}
		this.isDefaultCrosshairDisabled = crosshairDisabled;
		this.isDefaultTooltipDisabled = tooltipDisabled;
		this.isAnnotationLayerPresent = containsAnnotationLayer;
	}
	private _isThumbnailRequired: boolean = false;
	get isThumbnailRequired(): boolean {
		return this._useOPD;
	}
	beforeContentRefresh(): void {
		this.view.beforeContentRefresh();
		for (let i = 0; i < this.series.count; i++) {
			this.series._inner[i].onBeforeContentRefresh();
		}
	}
	justZoomed(): boolean {
		return this.view.justZoomed();
	}
	private _uniqueIndex: number = 0;
	getNextUniqueIndex(): number {
		let toUse = this._uniqueIndex;
		this._uniqueIndex++;
		return toUse;
	}
	getTitleFontInfo(): FontInfo {
		if (this.titleTextStyle == null) {
			return null;
		}
		return FontUtil.toFontInfo(this.view.viewManager.container, this.titleTextStyle);
	}
	getSubtitleFontInfo(): FontInfo {
		if (this.subtitleTextStyle == null) {
			return null;
		}
		return FontUtil.toFontInfo(this.view.viewManager.container, this.subtitleTextStyle);
	}
	updateCrosshairVisibility(): void {
		let mobileMode = false;
		mobileMode = this.actualMobileMode;
		this.ignoreCrosshairVisibilityChange = true;
		this.crosshairsVisible = (mobileMode && !this.userSetCrosshairVisibility) || this.crosshairVisibility == Visibility.Visible;
		this.ignoreCrosshairVisibilityChange = false;
	}
	private _cachedEffectiveIsSquare: boolean = false;
	protected get cachedEffectiveIsSquare(): boolean {
		return this._cachedEffectiveIsSquare;
	}
	protected set cachedEffectiveIsSquare(value: boolean) {
		this._cachedEffectiveIsSquare = value;
	}
	private _isHosted: boolean = false;
	get isHosted(): boolean {
		return this._isHosted;
	}
	set isHosted(value: boolean) {
		this._isHosted = value;
	}
	seriesDataUpdated: (sender: any, e: EventArgs) => void = null;
	raiseSeriesDataUpdated(): void {
		if (this.seriesDataUpdated != null) {
			this.seriesDataUpdated(this, EventArgs.empty);
		}
	}
}

/**
 * @hidden 
 */
export abstract class SeriesViewerView extends Base implements ISchedulableRender {
	static $t: Type = markType(SeriesViewerView, 'SeriesViewerView', (<any>Base).$type, [ISchedulableRender_$type]);
	constructor(model: SeriesViewer) {
		super();
		this.containerWidth = 0;
		this.containerHeight = 0;
		this.model = model;
		this.model.crosshairPoint = <Point>{ $type: Point_$type, x: NaN, y: NaN };
		this.model.windowResponse = WindowResponse.Immediate;
		this.viewManager = new SeriesViewerViewManager(this);
		this.horizontalCrosshairLine = ((() => {
			let $ret = new Line();
			$ret.visibility = Visibility.Collapsed;
			return $ret;
		})());
		this.verticalCrosshairLine = ((() => {
			let $ret = new Line();
			$ret.visibility = Visibility.Collapsed;
			return $ret;
		})());
	}
	initializeScalingRatio(): void {
		this.viewManager.initializeScalingRatio();
	}
	private _model: SeriesViewer = null;
	protected get_model(): SeriesViewer {
		return this._model;
	}
	protected set_model(value: SeriesViewer): void {
		this._model = value;
	}
	get model(): SeriesViewer {
		return this.get_model();
	}
	set model(value: SeriesViewer) {
		this.set_model(value);
	}
	onInit(): void {
		this.model.ignoreCrosshairVisibilityChange = true;
		this.model.crosshairVisibility = Visibility.Collapsed;
		this.model.ignoreCrosshairVisibilityChange = false;
		this.previewPath = new Path();
		this.dragPathRect = new Rectangle();
		this.dragPathRect._visibility = Visibility.Collapsed;
		this.setDefaultMarkerTemplates();
		this.attachedSeries = new SeriesCollection();
		this.attachedAxes = new AxisCollection();
		this.overlayScheduler = new CanvasRenderScheduler();
		this.overlayScheduler.register(this);
		this.overlayScheduler.dependsOn.add(this.model.thumbnailCanvasRenderScheduler);
		if (this.model.overviewPlusDetailPaneVisibility == Visibility.Visible) {
			this.initializeOPD();
		}
		let $t = this.model;
		$t.windowRectChanged = delegateCombine($t.windowRectChanged, runOn(this, this.model_WindowRectChanged));
		let $t1 = this.model;
		$t1.gridAreaRectChanged = delegateCombine($t1.gridAreaRectChanged, runOn(this, this.model_GridAreaRectChanged));
		this.overviewPlusDetailViewportHost = new OverviewPlusDetailViewportHost(this);
		this.overviewPlusDetailPaneVisibilityChanged();
	}
	private initializeOPD(): void {
		if (this.overviewPlusDetailPane == null) {
			this.overviewPlusDetailPane = this.viewManager.createOPD();
		}
		this.model.overviewPlusDetailPane.provideContext(this.overlayContext);
		this.model.overviewPlusDetailPane.provideContainer(this.container);
		this.model.overviewPlusDetailPane.provideEventSource(this.eventProxy);
		this.overviewPlusDetailPane.world = new Rect(0, 0, 0, 1, 1);
		this.overviewPlusDetailPane.window = this.model.windowRect;
		this.overviewPlusDetailPane.surfaceViewer = <IOverviewPlusDetailControl><any>TypeRegistrar.create("SeriesViewerSurfaceViewer", this.model, this);
		this.overviewPlusDetailPane.viewScheduler = this.overlayScheduler;
		this.updateOverviewPlusDetailRects();
		let $t = this.overviewPlusDetailPane;
		$t.windowChanging = delegateCombine($t.windowChanging, runOn(this, this.overviewPlusDetailPane_WindowChanging));
		let $t1 = this.overviewPlusDetailPane;
		$t1.windowChanged = delegateCombine($t1.windowChanged, runOn(this, this.overviewPlusDetailPane_WindowChanged));
	}
	private _overlayScheduler: CanvasRenderScheduler = null;
	get overlayScheduler(): CanvasRenderScheduler {
		return this._overlayScheduler;
	}
	set overlayScheduler(value: CanvasRenderScheduler) {
		this._overlayScheduler = value;
	}
	private _overviewPlusDetailPane: IOverviewPlusDetailPane = null;
	get overviewPlusDetailPane(): IOverviewPlusDetailPane {
		return this._overviewPlusDetailPane;
	}
	set overviewPlusDetailPane(value: IOverviewPlusDetailPane) {
		this._overviewPlusDetailPane = value;
	}
	private overviewPlusDetailPane_WindowChanging(sender: any, e: PropertyChangedEventArgs$1<Rect>): void {
		let newWindowRect: Rect = e.newValue;
		if (this.overviewPlusDetailPane != null) {
			newWindowRect = this.overviewPlusDetailPane.changeRect(e.oldValue, e.newValue, this.model.isZoomingHorizontallyEnabled(), this.model.isZoomingVerticallyEnabled(), this.overviewPlusDetailPane.world);
		}
		if (newWindowRect.isEmpty) {
			this.overviewPlusDetailPane.window = e.oldValue;
		} else if (!newWindowRect.equals1(e.newValue)) {
			this.overviewPlusDetailPane.window = newWindowRect;
		}
		if (this.model.windowResponse == WindowResponse.Immediate) {
			let aspect: number = this.model.viewportRect.width / this.model.viewportRect.height;
			newWindowRect = new Rect(0, newWindowRect.left / aspect, newWindowRect.top, newWindowRect.width / aspect, newWindowRect.height);
			this.model.windowRect = newWindowRect;
		}
	}
	private overviewPlusDetailPane_WindowChanged(sender: any, e: PropertyChangedEventArgs$1<Rect>): void {
		let newWindowRect: Rect = e.newValue;
		if (this.overviewPlusDetailPane != null) {
			newWindowRect = this.overviewPlusDetailPane.changeRect(e.oldValue, e.newValue, this.model.isZoomingHorizontallyEnabled(), this.model.isZoomingVerticallyEnabled(), this.overviewPlusDetailPane.world);
		}
		if (newWindowRect.isEmpty) {
			newWindowRect = e.oldValue;
		} else if (!newWindowRect.equals1(e.newValue)) {
			this.overviewPlusDetailPane.window = newWindowRect;
		}
		let aspect: number = this.model.viewportRect.width / this.model.viewportRect.height;
		newWindowRect = new Rect(0, newWindowRect.left / aspect, newWindowRect.top, newWindowRect.width / aspect, newWindowRect.height);
		this.model.windowRect = newWindowRect;
	}
	updateOverviewPlusDetailRects(): void {
		if (this.overviewPlusDetailPane == null) {
			return;
		}
		if (this.model.overviewPlusDetailPaneVisibility != Visibility.Visible) {
			return;
		}
		let aspect: number = 1;
		if (this.model.viewportRect.isEmpty == false) {
			aspect = this.model.viewportRect.width / this.model.viewportRect.height;
		}
		let oldRect = this.overviewPlusDetailPane.world;
		let newRect = new Rect(0, 0, 0, aspect, 1);
		this.overviewPlusDetailPane.world = newRect;
		if (oldRect.width != newRect.width || oldRect.height != newRect.height || oldRect.x != newRect.x || oldRect.y != newRect.y) {
			this.overviewPlusDetailPane.surfaceViewer.isDirty = true;
		}
		this.overviewPlusDetailPane.window = new Rect(0, this.model.windowRect.left * aspect, this.model.windowRect.top, this.model.windowRect.width * aspect, this.model.windowRect.height);
	}
	private model_WindowRectChanged(sender: any, e: RectChangedEventArgs): void {
		this.updateOverviewPlusDetailRects();
	}
	private model_GridAreaRectChanged(sender: any, e: RectChangedEventArgs): void {
		this.updateOverviewPlusDetailRects();
	}
	private _overviewPlusDetailViewportHost: OverviewPlusDetailViewportHost = null;
	get overviewPlusDetailViewportHost(): OverviewPlusDetailViewportHost {
		return this._overviewPlusDetailViewportHost;
	}
	set overviewPlusDetailViewportHost(value: OverviewPlusDetailViewportHost) {
		this._overviewPlusDetailViewportHost = value;
	}
	getThumbnail(width: number, height: number, surface: RenderSurface): void {
		let first: boolean = true;
		for (let s of fromEnum<Series>(this.model.series)) {
			if (first && s.thumbnailDirty) {
				first = false;
				surface.surface.clearRectangle(0, 0, width, height);
			}
			s.renderThumbnail(new Rect(0, 0, 0, width, height), surface);
		}
	}
	setDefaultCursor(): void {
		this.viewManager.setDefaultCursor();
	}
	goToIdleState(): void {
	}
	setHandCursor(): void {
		this.viewManager.setHandCursor();
	}
	hideTooltip(): void {
		for (let i = 0; i < this.model.series.count; i++) {
			this.model.series._inner[i].view.hideTooltip();
		}
	}
	goToDraggingVisualState(): void {
	}
	goToPanningVisualState(): void {
	}
	removeSeries(series: Series): void {
		let index: number = this.attachedSeries.indexOf(series);
		if (index >= 0) {
			this.attachedSeries.removeAt(index);
		}
		if (series.isStacked) {
			series.forSubVisualSeries((s: Series) => {
				s.seriesViewer = null;
				index = this.attachedSeries.indexOf(s);
				if (index >= 0) {
					this.attachedSeries.removeAt(index);
				}
				return true;
			});
		}
		this.model.recalculateResolvedHitTestMode();
		series.provideContext(null, null);
		this.onSeriesRemoved();
	}
	onSeriesRemoved(): void {
		if (this.model.destroyed) {
			return;
		}
		if (this.attachedSeries.count == 0) {
			if (this.mainContext != null && Rect.l_op_Inequality(this.model.viewportRect, null) && !this.model.viewportRect.isEmpty) {
				if (this.model.actualPixelScalingRatio != 1) {
					this.mainContext.save();
					this.mainContext.scale(this.model.actualPixelScalingRatio, this.model.actualPixelScalingRatio);
				}
				this.mainContext.clearRectangle(this.model.viewportRect.left, this.model.viewportRect.top, this.model.viewportRect.width, this.model.viewportRect.height);
				if (this.model.actualPixelScalingRatio != 1) {
					this.mainContext.restore();
				}
			}
		}
		this.model.canvasRenderScheduler.schedule();
	}
	seriesAttached(series: Series): boolean {
		series.onViewportChanged(series.view.viewport, this._currentPlotArea);
		return this.attachedSeries.contains(series);
	}
	private _attachedSeries: SeriesCollection = null;
	protected get attachedSeries(): SeriesCollection {
		return this._attachedSeries;
	}
	protected set attachedSeries(value: SeriesCollection) {
		this._attachedSeries = value;
	}
	private _attachedAxes: AxisCollection = null;
	protected get attachedAxes(): AxisCollection {
		return this._attachedAxes;
	}
	protected set attachedAxes(value: AxisCollection) {
		this._attachedAxes = value;
	}
	private _shouldMergeOverlayContext: boolean = false;
	get shouldMergeOverlayContext(): boolean {
		return this._shouldMergeOverlayContext;
	}
	set shouldMergeOverlayContext(value: boolean) {
		this._shouldMergeOverlayContext = value;
	}
	attachSeries(series: Series): void {
		if (!this.attachedSeries.contains(series)) {
			this.attachedSeries.add(series);
			if (series.isStacked) {
				series.forSubVisualSeries((s: Series) => {
					this.attachedSeries.add(s);
					return true;
				});
			}
			this.model.recalculateResolvedHitTestMode();
		}
		series.provideContext(this.mainContext, this.hitContext);
		this.model.invalidatePanels();
	}
	propagateHitContext(hitContext: RenderingContext): void {
		this.hitContext = hitContext;
		for (let i = 0; i < this.attachedSeries.count; i++) {
			this.attachedSeries._inner[i].provideContext(this.mainContext, this.hitContext);
		}
		for (let i1 = 0; i1 < this.attachedAxes.count; i1++) {
			this.attachedAxes._inner[i1].provideContext(this.mainContext, this.hitContext);
		}
	}
	createLayout(): void {
	}
	cancelMouseInteractions(): void {
		this.hideDragPath();
		this.hideTooltip();
	}
	hideDragPath(): void {
		this.dragPathRect._visibility = Visibility.Collapsed;
		this.makeDirty();
	}
	focusChart(): void {
	}
	plotAreaCaptureMouse(): void {
	}
	private _dragPathRect: Rectangle = null;
	protected get dragPathRect(): Rectangle {
		return this._dragPathRect;
	}
	protected set dragPathRect(value: Rectangle) {
		this._dragPathRect = value;
	}
	private _previewPath: Path = null;
	protected get previewPath(): Path {
		return this._previewPath;
	}
	protected set previewPath(value: Path) {
		this._previewPath = value;
	}
	showDragPath(): void {
		this.dragPathRect._visibility = Visibility.Visible;
		this.makeDirty();
	}
	updateDragPath(rect: Rect): void {
		this.dragPathRect.canvasTop = rect.top + this.model.viewportRect.top;
		this.dragPathRect.canvasLeft = rect.left + this.model.viewportRect.left;
		this.dragPathRect.width = rect.width;
		this.dragPathRect.height = rect.height;
		this.dragPathRect._stroke = this.viewManager.getBlackBrush();
		this.dragPathRect._fill = null;
		this.dragPathRect.strokeThickness = 0.5;
		this.makeDirty();
	}
	completeMouseCapture(): void {
	}
	onTemplateProvided(): void {
	}
	updateVerticalCrosshair(x1: number, y1: number, x2: number, y2: number): void {
		this.verticalCrosshairLine.x1 = x1;
		this.verticalCrosshairLine.y1 = y1;
		this.verticalCrosshairLine.x2 = x2;
		this.verticalCrosshairLine.y2 = y2;
		this.makeDirty();
	}
	private _verticalCrosshairLine: Line = null;
	protected get verticalCrosshairLine(): Line {
		return this._verticalCrosshairLine;
	}
	protected set verticalCrosshairLine(value: Line) {
		this._verticalCrosshairLine = value;
	}
	private _horizontalCrosshairLine: Line = null;
	protected get horizontalCrosshairLine(): Line {
		return this._horizontalCrosshairLine;
	}
	protected set horizontalCrosshairLine(value: Line) {
		this._horizontalCrosshairLine = value;
	}
	showVerticalCrosshair(): void {
		this.verticalCrosshairLine._visibility = Visibility.Visible;
		this.makeDirty();
	}
	hideVerticalCrosshair(): void {
		if (this.verticalCrosshairLine._visibility == Visibility.Visible) {
			this.verticalCrosshairLine._visibility = Visibility.Collapsed;
			this.makeDirty();
		}
	}
	updateHorizontalCrosshair(x1: number, y1: number, x2: number, y2: number): void {
		this.horizontalCrosshairLine.x1 = x1;
		this.horizontalCrosshairLine.y1 = y1;
		this.horizontalCrosshairLine.x2 = x2;
		this.horizontalCrosshairLine.y2 = y2;
		this.makeDirty();
	}
	showHorizontalCrosshair(): void {
		this.horizontalCrosshairLine._visibility = Visibility.Visible;
		this.makeDirty();
	}
	hideHorizontalCrosshair(): void {
		if (this.horizontalCrosshairLine._visibility == Visibility.Visible) {
			this.horizontalCrosshairLine._visibility = Visibility.Collapsed;
			this.makeDirty();
		}
	}
	hidePreviewPath(): void {
		this.previewPath._visibility = Visibility.Collapsed;
		this.makeDirty();
	}
	private toAntiClockwisePath(rect: Rect): PathFigureCollection {
		let figures: PathFigureCollection = new PathFigureCollection();
		let figure: PathFigure = new PathFigure();
		figure._isClosed = true;
		figure._startPoint = <Point>{ $type: Point_$type, x: rect.left, y: rect.top };
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.left, y: rect.bottom }));
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.right, y: rect.bottom }));
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.right, y: rect.top }));
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.left, y: rect.top }));
		figures.add(figure);
		return figures;
	}
	private toClockwisePath(rect: Rect): PathFigureCollection {
		let figures: PathFigureCollection = new PathFigureCollection();
		let figure: PathFigure = new PathFigure();
		figure._isClosed = true;
		figure._startPoint = <Point>{ $type: Point_$type, x: rect.left, y: rect.top };
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.right, y: rect.top }));
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.right, y: rect.bottom }));
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.left, y: rect.bottom }));
		figure._segments.add(new LineSegment(0, <Point>{ $type: Point_$type, x: rect.left, y: rect.top }));
		figures.add(figure);
		return figures;
	}
	updatePreviewPath(viewportRect: Rect, rect: Rect): void {
		rect.intersect(viewportRect);
		let pg1: PathGeometry = new PathGeometry();
		pg1.figures = this.toClockwisePath(viewportRect);
		let pg2: PathGeometry = new PathGeometry();
		pg2.figures = this.toAntiClockwisePath(rect);
		let geometryGroup: GeometryGroup = new GeometryGroup();
		geometryGroup.children.add(pg1);
		geometryGroup.children.add(pg2);
		this.previewPath.data = geometryGroup;
		this.previewPath._fill = this.viewManager.getBlackBrush();
		this.previewPath._opacity = 0.1;
		this.makeDirty();
	}
	showPreviewPath(): void {
		this.previewPath._visibility = Visibility.Visible;
		this.makeDirty();
	}
	updateZoombars(WindowRect: Rect): void {
	}
	removeAxis(axis: Axis): void {
		let index: number = this.attachedAxes.indexOf(axis);
		this.attachedAxes.removeAt(index);
		axis.provideContext(null, null);
		this.resize();
		this.model.removeSpecificDataSource(axis.name, true);
	}
	removeLabelPanel(axis: Axis): void {
	}
	attachAxis(axis: Axis): void {
		if (!this.attachedAxes.contains(axis)) {
			this.attachedAxes.add(axis);
		}
		axis.provideContext(this.mainContext, this.hitContext);
		this.resize();
	}
	addLabelPanel(axis: Axis): void {
	}
	private _componentsFromView: SeriesViewerComponentsFromView = new SeriesViewerComponentsFromView();
	getComponentsFromView(): SeriesViewerComponentsFromView {
		this._componentsFromView.overviewPlusDetailPane = this.overviewPlusDetailPane;
		return this._componentsFromView;
	}
	static getAllSeries(series: Series): List$1<Series> {
		let seriesList = series.seriesViewer.series;
		let allSeries: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
		for (let i = 0; i < seriesList.count; i++) {
			allSeries.add(seriesList._inner[i]);
			if (seriesList._inner[i].isStacked) {
				seriesList._inner[i].forSubVisualSeries((s: Series) => {
					allSeries.add(s);
					return true;
				});
			}
		}
		return allSeries;
	}
	resetWindowRect(): void {
		this.model.windowRect = new Rect(0, 0, 0, 1, 1);
	}
	private _viewManager: SeriesViewerViewManager = null;
	get viewManager(): SeriesViewerViewManager {
		return this._viewManager;
	}
	set viewManager(value: SeriesViewerViewManager) {
		this._viewManager = value;
	}
	private _backgroundContext: RenderingContext = null;
	protected get backgroundContext(): RenderingContext {
		return this._backgroundContext;
	}
	protected set backgroundContext(value: RenderingContext) {
		this._backgroundContext = value;
	}
	private _overlayContext: RenderingContext = null;
	get overlayContext(): RenderingContext {
		return this._overlayContext;
	}
	set overlayContext(value: RenderingContext) {
		this._overlayContext = value;
	}
	private _mainContext: RenderingContext = null;
	get mainContext(): RenderingContext {
		return this._mainContext;
	}
	set mainContext(value: RenderingContext) {
		this._mainContext = value;
	}
	private _hitContext: RenderingContext = null;
	protected get hitContext(): RenderingContext {
		return this._hitContext;
	}
	protected set hitContext(value: RenderingContext) {
		this._hitContext = value;
	}
	private _mSPointerEnabled: boolean = false;
	get mSPointerEnabled(): boolean {
		return this._mSPointerEnabled;
	}
	set mSPointerEnabled(value: boolean) {
		this._mSPointerEnabled = value;
	}
	private _pointerEnabled: boolean = false;
	get pointerEnabled(): boolean {
		return this._pointerEnabled;
	}
	set pointerEnabled(value: boolean) {
		this._pointerEnabled = value;
	}
	private _container: any = null;
	protected get container(): any {
		return this._container;
	}
	protected set container(value: any) {
		this._container = value;
	}
	onContainerProvided(container: any): void {
		if (container == this.container) {
			return;
		}
		if (container == null) {
			if (this.eventProxy != null) {
				this.eventProxy.destroy();
			}
			this.viewManager.onContainerProvided(null);
			this.backgroundContext = null;
			this.overlayContext = null;
			this.mainContext = null;
			this.hitContext = null;
			this.eventProxy = null;
			if (this.model.overviewPlusDetailPane != null) {
				this.model.overviewPlusDetailPane.provideContext(null);
				this.model.overviewPlusDetailPane.provideContainer(null);
				this.model.overviewPlusDetailPane.provideEventSource(null);
			}
			return;
		}
		this.container = container;
		if (this.shouldMergeOverlayContext) {
			this.overlayScheduler.dependsOn.add(this.model.canvasRenderScheduler);
		}
		this.viewManager.onContainerProvided(container);
		this.backgroundContext = this.viewManager.backgroundContext;
		this.overlayContext = this.viewManager.overlayContext;
		this.mainContext = this.viewManager.mainContext;
		this.hitContext = this.viewManager.hitContext;
		this.mSPointerEnabled = false;
		try {
			this.mSPointerEnabled = <boolean>(window.navigator.msPointerEnabled && MSGesture !== undefined);
		}
		catch (e) {
		}
		this.pointerEnabled = false;
		try {
			this.pointerEnabled = <boolean>(window.navigator.pointerEnabled);
		}
		catch (e1) {
		}
		if (this.mSPointerEnabled || this.pointerEnabled) {
			this.useDeltaZoom = true;
		}
		this.eventProxy = this.viewManager.eventProxy;
		if (this.eventProxy != null) {
			this.eventProxy.viewport = this.model.viewportRect;
			this.eventProxy.shouldInteract = runOn(this, this.shouldInteract);
			let $t = this.eventProxy;
			$t.onContactCompleted = delegateCombine($t.onContactCompleted, runOn(this, this.onContactCompleted));
			let $t1 = this.eventProxy;
			$t1.onContactMoved = delegateCombine($t1.onContactMoved, runOn(this, this.onContactMoved));
			let $t2 = this.eventProxy;
			$t2.onContactStarted = delegateCombine($t2.onContactStarted, runOn(this, this.onContactStarted));
			let $t3 = this.eventProxy;
			$t3.onDragCompleted = delegateCombine($t3.onDragCompleted, runOn(this.model, this.model.onDragCompleted));
			let $t4 = this.eventProxy;
			$t4.onFlingStarted = delegateCombine($t4.onFlingStarted, runOn(this, this.eventProxy_OnFlingStarted));
			let $t5 = this.eventProxy;
			$t5.onDragDelta = delegateCombine($t5.onDragDelta, (p: Point) => this.model.onDragDelta(p));
			let $t6 = this.eventProxy;
			$t6.onDragStarted = delegateCombine($t6.onDragStarted, (p: Point) => this.model.onDragStarted(p, true));
			let $t7 = this.eventProxy;
			$t7.onKeyDown = delegateCombine($t7.onKeyDown, runOn(this.model, this.model.onKeyDown));
			let $t8 = this.eventProxy;
			$t8.onMouseDown = delegateCombine($t8.onMouseDown, runOn(this, this.onMouseDown));
			let $t9 = this.eventProxy;
			$t9.onMouseLeave = delegateCombine($t9.onMouseLeave, runOn(this, this.onMouseLeave));
			let $t10 = this.eventProxy;
			$t10.onMouseOver = delegateCombine($t10.onMouseOver, runOn(this, this.onMouseOver));
			let $t11 = this.eventProxy;
			$t11.onMouseUp = delegateCombine($t11.onMouseUp, runOn(this, this.onMouseUp));
			let $t12 = this.eventProxy;
			$t12.onMouseWheel = delegateCombine($t12.onMouseWheel, runOn(this.model, this.model.onMouseWheel));
			if (this.eventProxy.supportsNonIsometricZoom) {
				let $t13 = this.eventProxy;
				$t13.onZoomDelta = delegateCombine($t13.onZoomDelta, (p: Point, dx: number, dy: number, isoDeltaScale: number) => this.model.onZoomDelta(p, dx, dy, isoDeltaScale));
				let $t14 = this.eventProxy;
				$t14.onZoomStarted = delegateCombine($t14.onZoomStarted, (p: Point, dx: number, dy: number, isoDeltaScale: number) => this.model.onZoomStarted(p, dx, dy, isoDeltaScale));
				let $t15 = this.eventProxy;
				$t15.onZoomCompleted = delegateCombine($t15.onZoomCompleted, (p: Point, dx: number, dy: number, isoDeltaScale: number) => this.model.onZoomCompleted(p, dx, dy, isoDeltaScale));
			} else {
				let $t16 = this.eventProxy;
				$t16.onPinchDelta = delegateCombine($t16.onPinchDelta, (p: Point, d: number) => this.model.onPinchDelta(d));
				let $t17 = this.eventProxy;
				$t17.onPinchStarted = delegateCombine($t17.onPinchStarted, (p: Point, d: number) => this.model.onPinchStarted(p));
				let $t18 = this.eventProxy;
				$t18.onGestureCompleted = delegateCombine($t18.onGestureCompleted, (p: Point, d: number) => this.model.onGestureCompleted(p));
			}
			let $t19 = this.eventProxy;
			$t19.onDoubleTap = delegateCombine($t19.onDoubleTap, (p: Point) => this.model.onDoubleTap(p));
			let $t20 = this.eventProxy;
			$t20.onHold = delegateCombine($t20.onHold, runOn(this, this.onHold));
		}
		if (this.model.overviewPlusDetailPane != null) {
			this.model.overviewPlusDetailPane.provideContext(this.overlayContext);
			this.model.overviewPlusDetailPane.provideContainer(container);
			this.model.overviewPlusDetailPane.provideEventSource(this.eventProxy);
		}
		for (let axis of fromEnum<Axis>(this.attachedAxes)) {
			axis.view.updateStrokeBrushesFromCss();
			this.attachAxis(axis);
		}
		for (let series of fromEnum<Series>(this.attachedSeries)) {
			this.attachSeries(series);
		}
	}
	private eventProxy_OnFlingStarted(point: Point, velocityX: number, velocityY: number): boolean {
		if (this.model.areCrossHairsActivated) {
			return false;
		}
		return true;
	}
	protected onContactMoved(p: Point, isFinger: boolean): void {
		this.model.onContactMoved(p, isFinger);
	}
	protected onContactStarted(p: Point, isFinger: boolean): void {
		this.model.seriesViewerInteractionManager.onImmediateModeContactStarted(this.model, p, isFinger);
	}
	protected onHold(p: Point): void {
		this.model.onPlotAreaHold(p);
	}
	protected onContactCompleted(p: Point, isFinger: boolean): void {
		this.model.onContactCompleted(p, isFinger);
	}
	provideBackgroundContext(context: RenderingContext): void {
	}
	protected get_requiresBackground(): boolean {
		return false;
	}
	get requiresBackground(): boolean {
		return this.get_requiresBackground();
	}
	private _eventProxy: EventProxy = null;
	get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	set eventProxy(value: EventProxy) {
		this._eventProxy = value;
	}
	updateCurrentFontHeight(): void {
		this.fontHeight = FontUtil.getCurrentFontHeight(this.viewManager.container, this.model.getFontInfo());
	}
	private _fontHeight: number = 0;
	get fontHeight(): number {
		return this._fontHeight;
	}
	set fontHeight(value: number) {
		this._fontHeight = value;
	}
	getHitSeries(p: Point, forceUpdate: boolean, context: DataContext, isFinger: boolean): { ret: Series; p2: DataContext; } {
		return {
			ret: ((() => { let $ret = this.model.seriesViewerInteractionManager.getHitSeries(this.model, this.attachedSeries, this.hitContext, p, forceUpdate, context, isFinger); context = $ret.p5; return $ret.ret; })()),
			p2: context

		};
	}
	getSeriesViewerViewContainerWidth(): number {
		return this.containerWidth;
	}
	getSeriesViewerViewContainerHeight(): number {
		return this.containerHeight;
	}
	private _containerWidth: number = 0;
	get containerWidth(): number {
		return this._containerWidth;
	}
	set containerWidth(value: number) {
		this._containerWidth = value;
	}
	private _containerHeight: number = 0;
	get containerHeight(): number {
		return this._containerHeight;
	}
	set containerHeight(value: number) {
		this._containerHeight = value;
	}
	private _currentPlotArea: Rect = Rect.empty;
	private _sizeChanged: boolean = false;
	notifyContainerResized(): void {
		this.viewManager.notifyContainerResized();
	}
	onContainerResized(width: number, height: number): void {
		let oldWidth: number = this.containerWidth;
		let oldHeight: number = this.containerHeight;
		if (this.containerWidth != width) {
			this._sizeChanged = true;
		}
		this.containerWidth = width;
		if (this.containerHeight != height) {
			this._sizeChanged = true;
		}
		this.containerHeight = height;
		if (this._sizeChanged) {
			let oldSize: Size = new Size(1, oldWidth, oldHeight);
			let newSize: Size = new Size(1, width, height);
			this.model.onSizeChanged(oldSize, newSize);
		}
		this.onTitlesChanged();
		this.resize();
		this.model.canvasRenderScheduler.schedule();
	}
	resize(): void {
		this._panelsDirty = true;
		this.model.chartContentManager.makePending();
	}
	private _actualTopMargin: number = 0;
	private _actualLeftMargin: number = 0;
	private _actualRightMargin: number = 0;
	private _actualBottomMargin: number = 0;
	private _titlesDirty: boolean = true;
	private _fromEmpty: boolean = false;
	private determinePlotAreaSize(): void {
		if (this.containerWidth == 0 || this.containerHeight == 0) {
			return;
		}
		this._panelsDirty = false;
		this._fromEmpty = false;
		if (this._titlesDirty) {
			this.onTitleChanged();
			this.onSubtitleChanged();
			this._titlesDirty = false;
			this.makeDirty();
		}
		let _newPlotAreaWidth: number = this.containerWidth;
		let _newPlotAreaHeight: number = this.containerHeight;
		let leftMargin: number = this.model.leftMargin;
		let rightMargin: number = this.model.rightMargin;
		let bottomMargin: number = this.model.bottomMargin;
		let topMargin: number = this.model.topMargin;
		let autoMarginHeight: number = this.model.autoMarginHeight;
		let autoMarginWidth: number = this.model.autoMarginWidth;
		if (isNaN_(autoMarginHeight)) {
			autoMarginHeight = this.fontHeight / 2;
		}
		if (isNaN_(autoMarginWidth)) {
			autoMarginWidth = 0;
		}
		let autoAddMargins: boolean = this.model.shouldAddAutoMargins();
		let labelPanels = new List$1<AxisLabelPanelBase>((<any>AxisLabelPanelBase).$type, 0);
		for (let axis of fromEnum<Axis>(this.attachedAxes)) {
			if (axis.labelPanel != null) {
				labelPanels.add(axis.labelPanel);
				axis.labelPanel.seriesViewerSizeChanged = () => this._sizeChanged;
			}
		}
		if (autoAddMargins) {
			let hasOutsideLeft: boolean = false;
			let hasOutsideRight: boolean = false;
			let hasOutsideTop: boolean = false;
			let hasOutsideBottom: boolean = false;
			for (let panel of fromEnum<AxisLabelPanelBase>(labelPanels)) {
				if (LabelPanelArranger.resolveLabelLocation(panel) == AxisLabelsLocation.OutsideLeft && (panel.axis.labelSettings == null || panel.axis.labelSettings.visibility == Visibility.Visible)) {
					hasOutsideLeft = true;
				}
				if (LabelPanelArranger.resolveLabelLocation(panel) == AxisLabelsLocation.OutsideRight && (panel.axis.labelSettings == null || panel.axis.labelSettings.visibility == Visibility.Visible)) {
					hasOutsideRight = true;
				}
				if (LabelPanelArranger.resolveLabelLocation(panel) == AxisLabelsLocation.OutsideTop && (panel.axis.labelSettings == null || panel.axis.labelSettings.visibility == Visibility.Visible)) {
					hasOutsideTop = true;
				}
				if (LabelPanelArranger.resolveLabelLocation(panel) == AxisLabelsLocation.OutsideBottom && (panel.axis.labelSettings == null || panel.axis.labelSettings.visibility == Visibility.Visible)) {
					hasOutsideBottom = true;
				}
				if (panel.axis != null && panel.axis.labelSettings != null) {
					panel.axis.labelSettings.actualLocation = panel.axis.labelSettings.location;
				}
			}
			if (hasOutsideLeft || hasOutsideRight) {
				if (!hasOutsideTop && isNaN_(topMargin)) {
					topMargin = autoMarginHeight;
				}
				if (!hasOutsideBottom && isNaN_(bottomMargin)) {
					bottomMargin = autoMarginHeight;
				}
			}
			if (hasOutsideBottom || hasOutsideTop) {
				if (!hasOutsideLeft && isNaN_(leftMargin)) {
					leftMargin = autoMarginWidth;
				}
				if (!hasOutsideRight && isNaN_(rightMargin)) {
					rightMargin = autoMarginWidth;
				}
			}
		}
		if (isNaN_(topMargin)) {
			topMargin = 0;
		}
		if (isNaN_(leftMargin)) {
			leftMargin = 0;
		}
		if (isNaN_(rightMargin)) {
			rightMargin = 0;
		}
		if (isNaN_(bottomMargin)) {
			bottomMargin = 0;
		}
		let titleHeight = this.getTitleContainerHeight();
		topMargin += titleHeight;
		let subtitleHeight = this.getSubtitleContainerHeight();
		topMargin += subtitleHeight;
		let gridAreaRect: Rect = new Rect(0, leftMargin, topMargin, _newPlotAreaWidth - (leftMargin + rightMargin), _newPlotAreaHeight - (topMargin + bottomMargin));
		gridAreaRect = LabelPanelArranger.preparePanels(labelPanels, gridAreaRect);
		let finalSize: Size = new Size(1, Math.max(0, _newPlotAreaWidth - (leftMargin + rightMargin)), Math.max(0, _newPlotAreaHeight - (topMargin + bottomMargin)));
		if (this.model.effectiveIsSquare() && gridAreaRect.width != gridAreaRect.height) {
			if (gridAreaRect.width < gridAreaRect.height) {
				topMargin += (gridAreaRect.height - gridAreaRect.width) / 2;
				gridAreaRect.top = gridAreaRect.top + ((gridAreaRect.height - gridAreaRect.width) / 2);
				finalSize.height = finalSize.height - (gridAreaRect.height - gridAreaRect.width);
				gridAreaRect.height = gridAreaRect.width;
			} else {
				leftMargin += (gridAreaRect.width - gridAreaRect.height) / 2;
				gridAreaRect.left = gridAreaRect.left + ((gridAreaRect.width - gridAreaRect.height) / 2);
				finalSize.width = finalSize.width - (gridAreaRect.width - gridAreaRect.height);
				gridAreaRect.width = gridAreaRect.height;
			}
		}
		this._actualTopMargin = topMargin - (titleHeight + subtitleHeight);
		this._actualLeftMargin = leftMargin;
		this._actualRightMargin = rightMargin;
		this._actualBottomMargin = bottomMargin;
		this._currentPlotArea = gridAreaRect;
		let arrangeState = ((() => {
			let $ret = new LabelPanelsArrangeState();
			$ret.left = leftMargin;
			$ret.insideLeft = leftMargin;
			$ret.bottom = topMargin + finalSize.height;
			$ret.insideBottom = topMargin + finalSize.height;
			$ret.right = leftMargin + finalSize.width;
			$ret.insideRight = leftMargin + finalSize.width;
			$ret.top = topMargin;
			$ret.insideTop = topMargin;
			return $ret;
		})());
		LabelPanelArranger.arrangePanels(labelPanels, arrangeState, this._currentPlotArea, (p: AxisLabelPanelBase, b: Rect) => {
			if (!p.labelViewport.equals1(b)) {
				p.labelViewport = b;
				p.axis.view.labelNeedRearrange();
			}
		});
		let changed: boolean = false;
		if (this._sizeChanged) {
			this._sizeChanged = false;
			changed = true;
		}
		this.model.processPlotAreaSizeChanged(this.model.viewportRect, this._currentPlotArea);
		for (let axis1 of fromEnum<Axis>(this.attachedAxes)) {
			if (Rect.l_op_Equality(axis1.viewportRect, null) || axis1.viewportRect.isEmpty) {
				this._fromEmpty = true;
			}
			if (axis1.viewportRect.equals1(this._currentPlotArea) && !this.viewManager.mustHandleRectChanged()) {
				continue;
			}
			axis1.handleRectChanged(axis1.viewportRect, this._currentPlotArea);
		}
		for (let series of fromEnum<Series>(this.attachedSeries)) {
			if (Rect.l_op_Equality(series.view.viewport, null) || series.view.viewport.isEmpty) {
				this._fromEmpty = true;
			}
			if (series.view.viewport.equals1(this._currentPlotArea) && !this.viewManager.mustHandleRectChanged()) {
				continue;
			}
			series.onViewportChanged(series.view.viewport, this._currentPlotArea);
		}
		this.updateOPDSize();
		this.provideBackgroundViewport(this._currentPlotArea);
		this.viewManager.mustHandleRectChanged1(false);
	}
	private updateOPDSize(): void {
		if (this.model.overviewPlusDetailPane != null && !this._currentPlotArea.isEmpty) {
			let element = this.model.overviewPlusDetailPane;
			let opdWidth: number = (this.model.actualMobileMode) ? this._currentPlotArea.width : Number.POSITIVE_INFINITY;
			let opdHeight: number = (this.model.actualMobileMode) ? this._currentPlotArea.height : Number.POSITIVE_INFINITY;
			let desiredSize = element.getDesiredSize(new Size(1, opdWidth, opdHeight));
			this.model.overviewPlusDetailPane.arrange(new Rect(0, this._currentPlotArea.right - desiredSize.width, this._currentPlotArea.bottom - desiredSize.height, desiredSize.width, desiredSize.height));
			this.updateOverviewPlusDetailRects();
		}
	}
	getTitleFont(): FontInfo {
		let font = this.model.getFontInfo();
		let defFont = this.getDefaultTitleFont();
		if (this.model.getTitleFontInfo() != null) {
			font = this.model.getTitleFontInfo();
		} else if (defFont != null) {
			font = defFont;
		}
		return font;
	}
	getSubtitleFont(): FontInfo {
		let font = this.model.getFontInfo();
		let defFont = this.getDefaultSubtitleFont();
		if (this.model.getSubtitleFontInfo() != null) {
			font = this.model.getSubtitleFontInfo();
		} else if (defFont != null) {
			font = defFont;
		}
		return font;
	}
	private getTitleBrush(): Brush {
		let fontBrush = this.model.getFontBrush();
		let defBrush = this.getDefaultTitleBrush();
		if (this.model.titleTextColor != null) {
			fontBrush = this.model.titleTextColor;
		} else if (defBrush != null) {
			fontBrush = defBrush;
		}
		return fontBrush;
	}
	private getSubtitleBrush(): Brush {
		let fontBrush = this.model.getFontBrush();
		let defBrush = this.getDefaultSubtitleBrush();
		if (this.model.subtitleTextColor != null) {
			fontBrush = this.model.subtitleTextColor;
		} else if (defBrush != null) {
			fontBrush = defBrush;
		}
		return fontBrush;
	}
	private getTitleContainerHeight(): number {
		if (this.model.title == null || !(typeCast<XamDataChart>((<any>XamDataChart).$type, this.model) !== null)) {
			return 0;
		}
		let font = this.getTitleFont();
		let height = 0;
		height = FontUtil.getCurrentFontHeight(this.viewManager.container, font);
		let margin = this.getTitleMargin();
		height += margin.top + margin.bottom;
		return height;
	}
	private _subTitleHeight: number = NaN;
	private getSubtitleContainerHeight(): number {
		if (this.model.subtitle == null || !(typeCast<XamDataChart>((<any>XamDataChart).$type, this.model) !== null)) {
			return 0;
		}
		if (!isNaN_(this._subTitleHeight)) {
			return this._subTitleHeight;
		}
		let font = this.getSubtitleFont();
		this._subTitleHeight = FontUtil.getCurrentFontHeight(this.viewManager.container, font);
		let margin = this.getSubtitleMargin();
		this._subTitleHeight += margin.top + margin.bottom;
		return this._subTitleHeight;
	}
	getTitleMargin(): Thickness {
		let defaultMargin = this.viewManager.getDefaultChartTitleMargin();
		let top = isNaN_(this.model.titleTopMargin) ? defaultMargin.top : this.model.titleTopMargin;
		let left = isNaN_(this.model.titleLeftMargin) ? defaultMargin.left : this.model.titleLeftMargin;
		let right = isNaN_(this.model.titleRightMargin) ? defaultMargin.right : this.model.titleRightMargin;
		let bottom = isNaN_(this.model.titleBottomMargin) ? defaultMargin.bottom : this.model.titleBottomMargin;
		return new Thickness(1, left, top, right, bottom);
	}
	getSubtitleMargin(): Thickness {
		let defaultMargin = this.viewManager.getDefaultChartSubTitleMargin();
		let top = isNaN_(this.model.subtitleTopMargin) ? defaultMargin.top : this.model.subtitleTopMargin;
		let left = isNaN_(this.model.subtitleLeftMargin) ? defaultMargin.left : this.model.subtitleLeftMargin;
		let right = isNaN_(this.model.subtitleRightMargin) ? defaultMargin.right : this.model.subtitleRightMargin;
		let bottom = isNaN_(this.model.subtitleBottomMargin) ? defaultMargin.bottom : this.model.subtitleBottomMargin;
		return new Thickness(1, left, top, right, bottom);
	}
	protected provideBackgroundViewport(viewport: Rect): void {
	}
	makeDirty(): void {
		if (!this._isDirty) {
			this._isDirty = true;
			this.overlayScheduler.schedule();
		}
	}
	private _renderedRect: Rect = Rect.empty;
	protected render(): void {
		if (this.overlayContext == null) {
			return;
		}
		if (this.overlayContext.shouldRender) {
			if (this.model.actualPixelScalingRatio != 1) {
				this.overlayContext.save();
				this.overlayContext.scale(this.model.actualPixelScalingRatio, this.model.actualPixelScalingRatio);
			}
			if (!this._renderedRect.isEmpty) {
				if (!this.shouldMergeOverlayContext) {
					this.overlayContext.clearRectangle(this._renderedRect.left, this._renderedRect.top, this._renderedRect.width, this._renderedRect.height);
				}
			}
		}
		this.renderOverride();
		if (this.overlayContext.shouldRender) {
			if (this.model.actualPixelScalingRatio != 1) {
				this.overlayContext.restore();
			}
		}
	}
	isValid(): boolean {
		return true;
	}
	preRender(): void {
		this.viewManager.ensureCorrectSize(this.containerWidth, this.containerHeight);
		this.preRenderOverride();
	}
	protected preRenderOverride(): void {
	}
	protected _gradientsEnabled: boolean = false;
	protected renderOverride(): void {
		if (this.overlayContext.shouldRender) {
			this._renderedRect = new Rect(0, 0, 0, this.containerWidth, this.containerHeight);
			if (this.visibleTiles != null && this.visibleTiles.count > 0) {
				this.hidePlotContent();
				this.overlayContext.save();
				this.overlayContext.setRectangleClip(this.model.viewportRect);
				if (!this.shouldMergeOverlayContext) {
					this.overlayContext.clearRectangle(this.model.viewportRect.left, this.model.viewportRect.top, this.model.viewportRect.width, this.model.viewportRect.height);
				}
			}
			this.overlayContext.renderLine(this.horizontalCrosshairLine);
			this.overlayContext.renderLine(this.verticalCrosshairLine);
			this.overlayContext.renderPath(this.previewPath);
			this.overlayContext.renderRectangle(this.dragPathRect);
			this.overlayContext.setFontInfo(this.getTitleFont());
			if (this._titleText != null) {
				this._titleText.fill = this.getTitleBrush();
				this.overlayContext.renderTextBlock(this._titleText);
			}
			this.overlayContext.setFontInfo(this.getSubtitleFont());
			if (this._subTitleText != null) {
				this._subTitleText.fill = this.getSubtitleBrush();
				this.overlayContext.renderTextBlock(this._subTitleText);
			}
			if (this.visibleTiles != null && this.visibleTiles.count > 0) {
				this.viewManager.renderTiles(this.visibleTiles);
				this.overlayContext.restore();
			}
			if (this.shouldClearTiles) {
				this.showPlotContent();
				this.shouldClearTiles = false;
				this.visibleTiles.clear();
				this.model.seriesViewerInteractionManager.clearVisibleTiles(this.model);
				this.makeDirty();
			}
		}
	}
	onDetachedFromUI(): void {
		this.viewManager.onDetachedFromUI();
	}
	onAttachedToUI(): void {
		this.viewManager.onAttachedToUI();
	}
	getContainerRect(): Rect {
		return new Rect(0, 0, 0, this.containerWidth, this.containerHeight);
	}
	getContainerOffsets(): Point {
		return this.viewManager.getContainerOffsets();
	}
	private setDefaultMarkerTemplates(): void {
		this.model.circleMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderCircleMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.triangleMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderTriangleMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.pyramidMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderPyramidMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.squareMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderSquareMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.diamondMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderDiamondMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.pentagonMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderPentagonMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.hexagonMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderHexagonMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.tetragramMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderTetragramMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.pentagramMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderPentagramMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
		this.model.hexagramMarkerTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderHexagramMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
	}
	styleUpdated(): void {
		this.viewManager.styleUpdated();
		this.setDefaultBrushes();
		let oldFontHeight = this.fontHeight;
		this.updateCurrentFontHeight();
		if (oldFontHeight != this.fontHeight) {
			this.model.invalidatePanels();
		}
	}
	overviewPlusDetailPaneVisibilityChanged(): void {
		if (this.model.overviewPlusDetailPaneVisibility == Visibility.Visible) {
			this.initializeOPD();
			this.model.initializeOPD();
		}
		if (this.model.overviewPlusDetailPane != null) {
			let visibility = this.model.overviewPlusDetailPaneVisibility;
			this.model.overviewPlusDetailPane.visibility = visibility;
			this.model.overviewPlusDetailPane.doRefresh(false);
		}
	}
	protected shouldInteract(p: Point): boolean {
		return this.model.seriesViewerInteractionManager.shouldInteract(this.model, p);
	}
	onMouseOver(p: Point, onMouseMove: boolean, isFinger: boolean): void {
		this.model.seriesViewerInteractionManager.onImmediateModeMouseOver(this.model, this.attachedSeries, this.hitContext, p, onMouseMove, isFinger);
	}
	protected onMouseLeave(p: Point): void {
		this.model.seriesViewerInteractionManager.onImmediateModeMouseLeave(this.model, p);
	}
	protected onMouseDown(p: Point): void {
		this.model.seriesViewerInteractionManager.onImmediateModeMouseDown(this.model, this.eventProxy, p);
	}
	protected onMouseUp(p: Point): void {
		this.model.seriesViewerInteractionManager.onImmediateModeMouseUp(this.model, this.eventProxy, p);
	}
	setDefaultBrushes(): void {
	}
	get currentModifiers(): ModifierKeys {
		return this.eventProxy.currentModifiers;
	}
	viewportChanged(_viewport: Rect): void {
		if (this.eventProxy != null) {
			this.eventProxy.viewport = this.model.viewportRect;
		}
	}
	mobileModeChanged(mobileMode: boolean): void {
		this.model.seriesViewerInteractionManager.onMobileModeChanged(this.model, mobileMode);
		this.model.actualMobileMode = mobileMode;
	}
	actualMobileModeChanged(actualMobileMode: boolean): void {
		this.model.updateCrosshairVisibility();
		this.viewManager.updateMobileMode(actualMobileMode);
		if (this.model.overviewPlusDetailPane != null) {
			this.model.overviewPlusDetailPane.mobileMode = actualMobileMode;
		}
		this.updateOverviewPlusDetailPaneVisibility();
	}
	protected updateOverviewPlusDetailPaneVisibility(): void {
		this.model.updateOverviewPlusDetailPaneVisibility();
	}
	private _isDirty: boolean = false;
	get isDirty(): boolean {
		return this._isDirty;
	}
	set isDirty(value: boolean) {
		this._isDirty = value;
	}
	undirty(clearRect: boolean): void {
		this._isDirty = false;
		this.render();
	}
	get index(): number {
		return 10;
	}
	postRender(): void {
	}
	ensurePanelsArranged(): void {
		this.resize();
	}
	protected _infoBoxVisible: boolean = false;
	hideInfoBox(): void {
		this.viewManager.hideInfoBox();
	}
	showInfoBox(): void {
		this.viewManager.showInfoBox();
	}
	clearInfoBox(isVertical: boolean): void {
		this.viewManager.clearInfoBox();
	}
	addToInfoBox(control: any): void {
		this.viewManager.addToInfoBox(control);
	}
	updateInfoBoxXTranslation(x: number): void {
		this.viewManager.updateInfoBoxXTranslation(x);
	}
	updateInfoBoxYTranslation(p: number): void {
		this.viewManager.updateInfoBoxYTranslation(p);
	}
	addTooltipToView(control: any): void {
		this.viewManager.addTooltipToView(control);
	}
	removeTooltipFromView(control: any): void {
		this.viewManager.removeTooltipFromView(control);
	}
	onPlotAreaBackgroundChanged(plotAreaBackground: Brush): void {
		this.model.canvasRenderScheduler.schedule();
	}
	checkInteractionCompleted(pt: Point): void {
	}
	private _useDeltaZoom: boolean = false;
	get useDeltaZoom(): boolean {
		return this._useDeltaZoom;
	}
	set useDeltaZoom(value: boolean) {
		this._useDeltaZoom = value;
	}
	resolveDefaultInteraction(isFinger: boolean): InteractionState {
		if (this.model.actualMobileMode) {
			return InteractionState.DragPan;
		} else {
			return InteractionState.DragZoom;
		}
	}
	onIsInteractionDisabledChanged(): void {
		if (this.eventProxy != null) {
			this.eventProxy.isInteractionDisabled = this.model.isSurfaceInteractionDisabled;
		}
		if (this.overviewPlusDetailPane != null) {
			this.overviewPlusDetailPane.isSurfaceInteractionDisabled = this.model.isSurfaceInteractionDisabled;
		}
	}
	private _titleText: TextBlock = null;
	private _subTitleText: TextBlock = null;
	getDesiredTextWidth(text: TextBlock, font: FontInfo): number {
		if (text == null || this.overlayContext == null) {
			return 0;
		}
		this.overlayContext.setFontInfo(font);
		return this.overlayContext.measureTextBlockWidth(text);
	}
	getDesiredTextHeight(text: string, font: FontInfo): number {
		if (text == null) {
			return 0;
		}
		let height = 0;
		height = FontUtil.getCurrentFontHeight(this.viewManager.container, font);
		return height;
	}
	onTitlesChanged(): void {
		this._titlesDirty = true;
		this.resize();
		this.makeDirty();
	}
	private getTitle(title: string, margin: Thickness, font: FontInfo, alignment: HorizontalAlignment): TextBlock {
		if (title == null) {
			return null;
		}
		let result: TextBlock = ((() => {
			let $ret = new TextBlock();
			$ret.text = title;
			$ret.canvasTop = margin.top;
			return $ret;
		})());
		let textWidth: number = this.getDesiredTextWidth(result, font);
		result.canvasTop = margin.top;
		let textHeight: number = this.getDesiredTextHeight(title, font);
		result.actualWidth = textWidth;
		result.actualHeight = textHeight;
		switch (alignment) {
			case HorizontalAlignment.Left:
			result.canvasLeft = margin.left;
			break;

			case HorizontalAlignment.Right:
			result.canvasLeft = Math.max((this.containerWidth - margin.right) - textWidth, margin.left);
			break;

			default:

			case HorizontalAlignment.Center:

			case HorizontalAlignment.Stretch:
			let left: number = (this.containerWidth / 2) - (textWidth / 2);
			left += margin.left;
			left -= margin.right;
			result.canvasLeft = left;
			break;

		}

		return result;
	}
	onTitleChanged(): void {
		this._titleText = typeCast<XamDataChart>((<any>XamDataChart).$type, this.model) !== null ? this.getTitle(this.model.title, this.getTitleMargin(), this.getTitleFont(), this.getTitleAlignment()) : null;
	}
	onSubtitleChanged(): void {
		this._subTitleHeight = NaN;
		this._subTitleText = typeCast<XamDataChart>((<any>XamDataChart).$type, this.model) !== null ? this.getTitle(this.model.subtitle, this.getSubtitleMargin(), this.getSubtitleFont(), this.getSubtitleAlignment()) : null;
		if (this._subTitleText != null) {
			this._subTitleText.canvasTop += this.getTitleContainerHeight();
		}
	}
	getDefaultHorizontalAxisTitlePosition(axis: Axis): AxisTitlePosition {
		let position = this.viewManager.getDefaultHorizontalAxisTitlePosition();
		if (position == AxisTitlePosition.Auto) {
			let actualLocation = LabelPanelArranger.resolveLabelLocation(axis.labelPanel);
			if (axis.crossingAxis == null) {
				if (actualLocation == AxisLabelsLocation.InsideTop) {
					return AxisTitlePosition.Bottom;
				}
				if (actualLocation == AxisLabelsLocation.InsideBottom) {
					return AxisTitlePosition.Top;
				}
			} else {
				if (actualLocation == AxisLabelsLocation.InsideTop) {
					return AxisTitlePosition.Top;
				}
				if (actualLocation == AxisLabelsLocation.InsideBottom) {
					return AxisTitlePosition.Bottom;
				}
			}
			if (actualLocation == AxisLabelsLocation.OutsideTop) {
				return AxisTitlePosition.Top;
			}
			return AxisTitlePosition.Bottom;
		}
		return position;
	}
	getDefaultVerticalAxisTitlePosition(axis: Axis): AxisTitlePosition {
		let position = this.viewManager.getDefaultVerticalAxisTitlePosition();
		if (position == AxisTitlePosition.Auto) {
			let actualLocation = LabelPanelArranger.resolveLabelLocation(axis.labelPanel);
			if (axis.crossingAxis == null) {
				if (actualLocation == AxisLabelsLocation.InsideRight) {
					return AxisTitlePosition.Left;
				}
				if (actualLocation == AxisLabelsLocation.InsideLeft) {
					return AxisTitlePosition.Right;
				}
			} else {
				if (actualLocation == AxisLabelsLocation.InsideRight) {
					return AxisTitlePosition.Right;
				}
				if (actualLocation == AxisLabelsLocation.InsideLeft) {
					return AxisTitlePosition.Left;
				}
			}
			if (actualLocation == AxisLabelsLocation.OutsideRight) {
				return AxisTitlePosition.Right;
			}
			return AxisTitlePosition.Left;
		}
		return position;
	}
	onZoomPanInteractionEnding(): void {
		if (!isNaN_(this.model.actualInteractionPixelScalingRatio)) {
			if (!isNaN_(DeviceUtils.clampPixelScalingRatio(this.model.pixelScalingRatio))) {
				this.model.actualPixelScalingRatio = DeviceUtils.clampPixelScalingRatio(this.model.pixelScalingRatio);
			} else {
				this.initializeScalingRatio();
			}
		}
		if (!this.model.isAntiAliasingEnabledDuringInteraction) {
			this.viewManager.enableAntiAliasingIfPossible();
		}
	}
	onZoomPanInteractionStarting(): void {
		if (!isNaN_(DeviceUtils.clampPixelScalingRatio(this.model.actualInteractionPixelScalingRatio))) {
			this.model.actualPixelScalingRatio = DeviceUtils.clampPixelScalingRatio(this.model.actualInteractionPixelScalingRatio);
		}
		if (!this.model.isAntiAliasingEnabledDuringInteraction) {
			this.viewManager.disableAntiAliasingIfPossible();
		}
	}
	getDefaultVerticalAxisFont(): FontInfo {
		return this.viewManager.getDefaultVerticalAxisFont();
	}
	getDefaultVerticalAxisColor(): Brush {
		return this.viewManager.getDefaultVerticalAxisColor();
	}
	getDefaultHorizontalAxisFont(): FontInfo {
		return this.viewManager.getDefaultHorizontalAxisFont();
	}
	getDefaultHorizontalAxisColor(): Brush {
		return this.viewManager.getDefaultHorizontalAxisColor();
	}
	getDefaultTitleFont(): FontInfo {
		return this.viewManager.getDefaultChartTitleFont();
	}
	getDefaultSubtitleFont(): FontInfo {
		return this.viewManager.getDefaultChartSubTitleFont();
	}
	getDefaultTitleBrush(): Brush {
		return this.viewManager.getDefaultChartTitleColor();
	}
	getDefaultSubtitleBrush(): Brush {
		return this.viewManager.getDefaultChartSubTitleColor();
	}
	get actualLeftMargin(): number {
		return this._actualLeftMargin;
	}
	get actualRightMargin(): number {
		return this._actualRightMargin;
	}
	get actualTopMargin(): number {
		return this._actualTopMargin;
	}
	get actualBottomMargin(): number {
		return this._actualBottomMargin;
	}
	get titleText(): TextBlock {
		return this._titleText;
	}
	get subTitleText(): TextBlock {
		return this._subTitleText;
	}
	getContentArea(): Rect {
		return new Rect(0, 0, 0, this.containerWidth, this.containerHeight);
	}
	getDefaultVerticalAxisTitleMargin(): Thickness {
		return this.viewManager.getDefaultVerticalAxisTitleMargin();
	}
	getDefaultHorizontalAxisTitleMargin(): Thickness {
		return this.viewManager.getDefaultHorizontalAxisTitleMargin();
	}
	private _hasUserTitleAlignment: boolean = false;
	private _hasUserSubtitleAlignment: boolean = false;
	onSubtitleAlignmentChanged(oldValue: any, newValue: any): void {
		this._hasUserSubtitleAlignment = true;
	}
	onTitleAlignmentChanged(oldValue: any, newValue: any): void {
		this._hasUserTitleAlignment = true;
	}
	getTitleAlignment(): HorizontalAlignment {
		if (this._hasUserTitleAlignment) {
			return this.model.titleHorizontalAlignment;
		} else {
			let ret = HorizontalAlignment.Center;
			switch (this.viewManager.getDefaultChartTitleTextAlign()) {
				case "left":
				ret = HorizontalAlignment.Left;
				break;

				case "right":
				ret = HorizontalAlignment.Right;
				break;

			}

			return ret;
		}
	}
	getSubtitleAlignment(): HorizontalAlignment {
		if (this._hasUserSubtitleAlignment) {
			return this.model.subtitleHorizontalAlignment;
		} else {
			let ret = HorizontalAlignment.Center;
			switch (this.viewManager.getDefaultChartSubTitleTextAlign()) {
				case "left":
				ret = HorizontalAlignment.Left;
				break;

				case "right":
				ret = HorizontalAlignment.Right;
				break;

			}

			return ret;
		}
	}
	private _panelsDirty: boolean = true;
	beforeContentRefresh(): void {
		if (this._panelsDirty) {
			this.determinePlotAreaSize();
			if (this._fromEmpty) {
				this.model.chartContentManager.force();
			}
			if (this._panelsDirty) {
				this.determinePlotAreaSize();
			}
		}
	}
	justZoomed(): boolean {
		if (this.model.zoomLongAgo) {
			return false;
		}
		if ((dateNow().getTime() - this.model.lastZoomTime.getTime()) < 300) {
			return true;
		}
		return false;
	}
	ensureCorrectSize(): void {
		this.viewManager.ensureCorrectSize(this.containerWidth, this.containerHeight);
	}
	isPagePanningAllowedChanged(): void {
		this.viewManager.isPagePanningAllowedChanged(this.model.isPagePanningAllowed);
	}
	shouldInteractForDirection(direction: Point): boolean {
		let window = this.model.actualWindowRect;
		let isUpAllowed: boolean = window.top > 0;
		let isLeftAllowed: boolean = window.left > 0;
		let isRightAllowed: boolean = window.right < 1;
		let isDownAllowed: boolean = window.bottom < 1;
		let isUpRequested: boolean = direction.y < 0;
		let isDownRequested: boolean = direction.y > 0;
		let isLeftRequested: boolean = direction.x < 0;
		let isRightRequested: boolean = direction.x > 0;
		if (isUpAllowed && isUpRequested) {
			return true;
		}
		if (isLeftAllowed && isLeftRequested) {
			return true;
		}
		if (isDownAllowed && isDownRequested) {
			return true;
		}
		if (isRightRequested && isRightAllowed) {
			return true;
		}
		return false;
	}
	pixelScalingRatioChanged(): void {
		this.viewManager.pixelScalingRatioChanged();
		this.model.canvasRenderScheduler.schedule();
		this.model.thumbnailCanvasRenderScheduler.schedule();
		this.model.alternateViewRenderScheduler.schedule();
		this.overlayScheduler.schedule();
	}
	private visibleTiles: List$1<ITileZoomTile> = null;
	displayZoomTiles(existing: Dictionary$2<any, ITileZoomTile>, newTiles: List$1<ITileZoomTile>, tileSize: number): void {
		this.shouldClearTiles = false;
		if (this.visibleTiles == null) {
			this.visibleTiles = new List$1<ITileZoomTile>(ITileZoomTile_$type, 0);
		}
		for (let i = 0; i < this.visibleTiles.count; i++) {
			while (i < this.visibleTiles.count && !existing.containsKey(this.visibleTiles._inner[i].content)) {
				this.visibleTiles.removeAt(i);
			}
		}
		for (let i1 = 0; i1 < newTiles.count; i1++) {
			this.visibleTiles.add(newTiles._inner[i1]);
		}
		this.makeDirty();
	}
	acquireTileContent(window: Rect, tile: ITileZoomTile, tileSize: number): any {
		return this.viewManager.acquireTileContent(window, tile, tileSize);
	}
	destroyAllTileContent(): void {
		this.viewManager.destroyAllTileContent();
	}
	destroyTileContent(tile: ITileZoomTile): void {
		this.viewManager.destroyTileContent(tile);
	}
	hideZoomTiles(): void {
		if (this.visibleTiles == null) {
			return;
		}
		this.shouldClearTiles = true;
		this.makeDirty();
	}
	private _shouldClearTiles: boolean = false;
	get shouldClearTiles(): boolean {
		return this._shouldClearTiles;
	}
	set shouldClearTiles(value: boolean) {
		this._shouldClearTiles = value;
	}
	private _cacheClearTimer: number = 0;
	deferCacheClear(): void {
		this.viewManager.deferCacheClear();
	}
	cancelDeferredCacheClear(): void {
		this.viewManager.cancelDeferredCacheClear();
	}
	deferEndToTiledZoom(delay: number): void {
		this.viewManager.deferEndToTiledZoom(delay);
	}
	cancelEndToTiledZoom(): void {
		this.viewManager.cancelEndToTiledZoom();
	}
	private _plotContentShown: boolean = true;
	hidePlotContent(): void {
		if (this._plotContentShown) {
			this._plotContentShown = false;
			this.mainContext.clearRectangle(this.model.viewportRect.left, this.model.viewportRect.top, this.model.viewportRect.width, this.model.viewportRect.height);
			this.model.canvasRenderScheduler.isDisabled = true;
		}
	}
	showPlotContent(): void {
		if (!this._plotContentShown) {
			this._plotContentShown = true;
			this.model.canvasRenderScheduler.isDisabled = false;
			this.model.canvasRenderScheduler.schedule1(this.mainContext, this.hitContext);
		}
	}
	onTileZoomEnding(): void {
	}
	onActualHitTestModeChanged(): void {
		this.viewManager.onActualHitTestModeChanged();
	}
}

/**
 * @hidden 
 */
export class OverviewPlusDetailViewportHost extends Base implements IProvidesViewport {
	static $t: Type = markType(OverviewPlusDetailViewportHost, 'OverviewPlusDetailViewportHost', (<any>Base).$type, [IProvidesViewport_$type]);
	constructor(view: SeriesViewerView) {
		super();
		if (view == null) {
			throw new ArgumentNullException(0, "view");
		}
		this.view = view;
	}
	private _view: SeriesViewerView = null;
	get view(): SeriesViewerView {
		return this._view;
	}
	set view(value: SeriesViewerView) {
		this._view = value;
	}
	getViewInfo(viewportRect: Rect, windowRect: Rect): { p0: Rect; p1: Rect; } {
		viewportRect = new Rect(0, 0, 0, this.view.overviewPlusDetailPane.worldRectViewport.width, this.view.overviewPlusDetailPane.worldRectViewport.height);
		windowRect = SeriesViewer.standardRect;
		return {
			p0: viewportRect,
			p1: windowRect

		};
	}
	getEffectiveViewport(): Rect {
		if (!this.view.model.isMap) {
			if (this.view.model.effectiveViewport.isEmpty) {
				return this.view.model.effectiveViewport;
			}
			return this.view.model.getScaledEffectiveViewport(this.view.overviewPlusDetailPane.previewViewportdRect, this.view.model.viewportRect, this.view.model.effectiveViewport);
		}
		return Rect.empty;
	}
}

/**
 * @hidden 
 */
export class SeriesViewerViewManager extends Base {
	static $t: Type = markType(SeriesViewerViewManager, 'SeriesViewerViewManager');
	private _container: DomRenderer = null;
	get container(): DomRenderer {
		return this._container;
	}
	set container(value: DomRenderer) {
		this._container = value;
	}
	private _backgroundCanvas: DomWrapper = null;
	protected get backgroundCanvas(): DomWrapper {
		return this._backgroundCanvas;
	}
	protected set backgroundCanvas(value: DomWrapper) {
		this._backgroundCanvas = value;
	}
	private _overlayCanvas: DomWrapper = null;
	protected get overlayCanvas(): DomWrapper {
		return this._overlayCanvas;
	}
	protected set overlayCanvas(value: DomWrapper) {
		this._overlayCanvas = value;
	}
	private _mainCanvas: DomWrapper = null;
	protected get mainCanvas(): DomWrapper {
		return this._mainCanvas;
	}
	protected set mainCanvas(value: DomWrapper) {
		this._mainCanvas = value;
	}
	private _hitCanvas: DomWrapper = null;
	protected get hitCanvas(): DomWrapper {
		return this._hitCanvas;
	}
	protected set hitCanvas(value: DomWrapper) {
		this._hitCanvas = value;
	}
	private _shadowCanvas: DomWrapper = null;
	get shadowCanvas(): DomWrapper {
		return this._shadowCanvas;
	}
	set shadowCanvas(value: DomWrapper) {
		this._shadowCanvas = value;
	}
	private _backgroundContext: RenderingContext = null;
	get backgroundContext(): RenderingContext {
		return this._backgroundContext;
	}
	set backgroundContext(value: RenderingContext) {
		this._backgroundContext = value;
	}
	private _overlayContext: RenderingContext = null;
	get overlayContext(): RenderingContext {
		return this._overlayContext;
	}
	set overlayContext(value: RenderingContext) {
		this._overlayContext = value;
	}
	private _mainContext: RenderingContext = null;
	get mainContext(): RenderingContext {
		return this._mainContext;
	}
	set mainContext(value: RenderingContext) {
		this._mainContext = value;
	}
	private _hitContext: RenderingContext = null;
	get hitContext(): RenderingContext {
		return this._hitContext;
	}
	set hitContext(value: RenderingContext) {
		this._hitContext = value;
	}
	private _shadowContext: RenderingContext = null;
	get shadowContext(): RenderingContext {
		return this._shadowContext;
	}
	set shadowContext(value: RenderingContext) {
		this._shadowContext = value;
	}
	private _eventProxy: EventProxy = null;
	get eventProxy(): EventProxy {
		return this._eventProxy;
	}
	set eventProxy(value: EventProxy) {
		this._eventProxy = value;
	}
	private _owner: SeriesViewerView = null;
	constructor(owner: SeriesViewerView) {
		super();
		this._owner = owner;
	}
	private _infoBox: DomWrapper = null;
	protected get infoBox(): DomWrapper {
		return this._infoBox;
	}
	protected set infoBox(value: DomWrapper) {
		this._infoBox = value;
	}
	pixelScalingRatioChanged(): void {
	}
	onContainerProvided(theContainer: any): void {
		if (theContainer == null) {
			if (this.eventProxy != null) {
				this.eventProxy.destroy();
			}
			this.container = null;
			if (this.backgroundCanvas != null) {
				this.backgroundCanvas.remove();
			}
			this.backgroundCanvas = null;
			if (this.overlayCanvas != null) {
				this.overlayCanvas.remove();
			}
			this.overlayCanvas = null;
			if (this.mainCanvas != null) {
				this.mainCanvas.remove();
			}
			this.mainCanvas = null;
			if (this.hitCanvas != null) {
				this.hitCanvas.remove();
			}
			this.hitCanvas = null;
			if (this.shadowCanvas != null) {
				this.shadowCanvas.remove();
			}
			this.shadowCanvas = null;
			this.backgroundContext = null;
			this.overlayContext = null;
			this.mainContext = null;
			this.hitContext = null;
			if (this.infoBox != null) {
				this.infoBox.remove();
			}
			this.infoBox = null;
			this.eventProxy = null;
			this._owner.model.highlightingAnimator.provideRenderer(null);
			this._owner.model.canvasRenderScheduler.provideRenderer(null);
			this._owner.model.thumbnailCanvasRenderScheduler.provideRenderer(null);
			this._owner.model.alternateViewRenderScheduler.provideRenderer(null);
			this._owner.overlayScheduler.provideRenderer(null);
			return;
		}
		this.container = <DomRenderer><any>theContainer;
		this._owner.model.highlightingAnimator.provideRenderer(this.container);
		this._owner.model.canvasRenderScheduler.provideRenderer(this.container);
		this._owner.model.thumbnailCanvasRenderScheduler.provideRenderer(this.container);
		this._owner.model.alternateViewRenderScheduler.provideRenderer(this.container);
		this._owner.overlayScheduler.provideRenderer(this.container);
		this._owner.model.chartContentManager.provideRenderer(this.container);
		this.onRendererProvided();
		this.container.rootWrapper.setStyleProperty("position", "relative");
		this.backgroundCanvas = this.container.createElement("canvas");
		this.backgroundCanvas.setStyleProperty("position", "absolute");
		this.backgroundCanvas.setStyleProperty("top", "0px");
		this.backgroundCanvas.setStyleProperty("left", "0px");
		this.overlayCanvas = this.container.createElement("canvas");
		this.overlayCanvas.setStyleProperty("position", "absolute");
		this.overlayCanvas.setStyleProperty("top", "0px");
		this.overlayCanvas.setStyleProperty("left", "0px");
		this.mainCanvas = this.container.createElement("canvas");
		this.mainCanvas.setStyleProperty("position", "absolute");
		this.mainCanvas.setStyleProperty("top", "0px");
		this.mainCanvas.setStyleProperty("left", "0px");
		this.hitCanvas = this.container.createElement("canvas");
		this.hitCanvas.setStyleProperty("position", "absolute");
		this.hitCanvas.setStyleProperty("top", "0px");
		this.hitCanvas.setStyleProperty("left", "0px");
		this.shadowCanvas = this.container.createElement("canvas");
		this.shadowCanvas.setStyleProperty("position", "absolute");
		this.shadowCanvas.setStyleProperty("top", "0px");
		this.shadowCanvas.setStyleProperty("left", "0px");
		this.container.append(this.backgroundCanvas);
		this.container.append(this.mainCanvas);
		this.container.append(this.overlayCanvas);
		this.backgroundContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.backgroundCanvas));
		this.overlayContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.overlayCanvas));
		this.mainContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.mainCanvas));
		if (this._owner.model.actualContentHitTestMode != ChartHitTestMode.Computational) {
			this.hitContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.hitCanvas));
			this._cachedHitContext = this.hitContext;
		} else {
			this.hitContext = new RenderingContext(null, null);
		}
		this.shadowContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.shadowCanvas));
		this._owner.provideBackgroundContext(this.backgroundContext);
		this._owner.onContainerResized(this.container.rootWrapper.width(), this.container.rootWrapper.height());
		{
			if (<boolean>(TypeRegistrar.isRegistered('CanvasGestureDOMEventProxy'))) {
				let overlayCanvas_ = this.overlayCanvas;
				let container_ = this.container;
				this.eventProxy = <EventProxy>(TypeRegistrar.create('CanvasGestureDOMEventProxy', overlayCanvas_, container_, false));
			} else {
				this.eventProxy = null;
			}
			if (this.eventProxy != null) {
				this.eventProxy.shouldInteractForDirection = runOn(this._owner, this._owner.shouldInteractForDirection);
			}
		}
		this.infoBox = this.container.createElement("div");
		this.infoBox.hide();
		this.infoBox.setStyleProperty("position", "absolute");
		this.infoBox.setStyleProperty("z-index", "10000");
		this.infoBox.addClass(this._owner.model.tooltipStyle);
		this.container.append(this.infoBox);
	}
	static whenAttachedToDom(renderer: DomRenderer, action: () => void): void {
		action();
		return;
	}
	private onRendererProvided(): void {
		this._owner.setDefaultBrushes();
		this._owner.updateCurrentFontHeight();
		this.styleUpdated();
	}
	initializeScalingRatio(): void {
		let userRatio = this._owner.model.pixelScalingRatio;
		let actualRatio = this._owner.model.actualPixelScalingRatio;
		if (!isNaN_(userRatio) && userRatio != 0) {
			return;
		}
		if (<any>window.devicePixelRatio != undefined && window.devicePixelRatio != actualRatio) {
			this._owner.model.actualPixelScalingRatio = window.devicePixelRatio;
		}
	}
	createOPD(): IOverviewPlusDetailPane {
		if (<boolean>(TypeRegistrar.isRegistered('XamOverviewPlusDetailPane'))) {
			let overlayCanvas_ = this.overlayCanvas;
			let container_ = this.container;
			return <IOverviewPlusDetailPane><any>(TypeRegistrar.create('XamOverviewPlusDetailPane'));
		}
		return null;
	}
	setDefaultCursor(): void {
		this.overlayCanvas.setStyleProperty("cursor", "default");
	}
	setHandCursor(): void {
		this.overlayCanvas.setStyleProperty("cursor", "pointer");
	}
	getBlackBrush(): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "#000000";
			return $ret;
		})());
	}
	private _currentCanvasWidth: number = 0;
	private _currentCanvasHeight: number = 0;
	private _currentPixelRatio: number = 1;
	containerSizeChanging(width: number, height: number, pixelScale: number): void {
		this._currentCanvasWidth = width;
		this._currentCanvasHeight = height;
		this._currentPixelRatio = pixelScale;
		let pixelWidth = width;
		let pixelHeight = height;
		if (pixelScale != 1) {
			pixelWidth = Math.round(width * pixelScale);
			pixelHeight = Math.round(height * pixelScale);
		}
		if (this.backgroundCanvas != null) {
			this.backgroundCanvas.setAttribute("width", pixelWidth.toString());
			this.backgroundCanvas.setAttribute("height", pixelHeight.toString());
			this.backgroundCanvas.setStyleProperty("width", width.toString() + "px");
			this.backgroundCanvas.setStyleProperty("height", height.toString() + "px");
		}
		if (this.overlayCanvas != null) {
			this.overlayCanvas.setAttribute("width", pixelWidth.toString());
			this.overlayCanvas.setAttribute("height", pixelHeight.toString());
			this.overlayCanvas.setStyleProperty("width", width.toString() + "px");
			this.overlayCanvas.setStyleProperty("height", height.toString() + "px");
			this.overlayCanvas.setAttribute("tabindex", "0");
			this.overlayCanvas.setStyleProperty("outline", "0");
		}
		if (this.mainCanvas != null) {
			this.mainCanvas.setAttribute("width", pixelWidth.toString());
			this.mainCanvas.setAttribute("height", pixelHeight.toString());
			this.mainCanvas.setStyleProperty("width", width.toString() + "px");
			this.mainCanvas.setStyleProperty("height", height.toString() + "px");
		}
		if (this.hitCanvas != null) {
			this.hitCanvas.setAttribute("width", pixelWidth.toString());
			this.hitCanvas.setAttribute("height", pixelHeight.toString());
			this.hitCanvas.setStyleProperty("width", width.toString() + "px");
			this.hitCanvas.setStyleProperty("height", height.toString() + "px");
		}
		if (this.shadowCanvas != null) {
			this.shadowCanvas.setAttribute("width", pixelWidth.toString());
			this.shadowCanvas.setAttribute("height", pixelHeight.toString());
			this.shadowCanvas.setStyleProperty("width", width.toString() + "px");
			this.shadowCanvas.setStyleProperty("height", height.toString() + "px");
		}
		this._owner.model.canvasRenderScheduler.schedule();
		this._owner.model.thumbnailCanvasRenderScheduler.schedule();
		this._owner.model.alternateViewRenderScheduler.schedule();
	}
	getContainerOffsets(): Point {
		if (this.eventProxy == null) {
			return <Point>{ $type: Point_$type, x: 0, y: 0 };
		}
		let offset = this.eventProxy.getOffsetRelative(this.container.rootWrapper);
		return <Point>{ $type: Point_$type, x: offset.left, y: offset.top };
	}
	mustHandleRectChanged(): boolean {
		return false;
	}
	mustHandleRectChanged1(ignore: boolean): void {
	}
	getDefaultPalette1(brushes: BrushCollection, outlines: BrushCollection, fontBrush: Brush, font: FontInfo, axisLineBrush: Brush): { p0: BrushCollection; p1: BrushCollection; p2: Brush; p3: FontInfo; p4: Brush; } {
		let palette = this.getDefaultPalette();
		brushes = palette.brushes;
		outlines = palette.outlines;
		fontBrush = palette.fontBrush;
		font = palette.font;
		axisLineBrush = palette.axisLineBrush;
		return {
			p0: brushes,
			p1: outlines,
			p2: fontBrush,
			p3: font,
			p4: axisLineBrush

		};
	}
	getDefaultPalette(): DefaultPaletteInfo {
		let paletteInfo = new DefaultPaletteInfo();
		paletteInfo.brushes = new BrushCollection();
		paletteInfo.outlines = new BrushCollection();
		paletteInfo.markerBrushes = new BrushCollection();
		paletteInfo.markerOutlines = new BrushCollection();
		let names = new List$1<string>(String_$type, 0);
		names.add("background-image");
		this.container.startCSSQuery();
		let fillsPalette = this.container.getCssDefaultValuesForClassCollection("ui-chart-fill-palette-", names.toArray());
		let numFillsPaletteColors: number = fillsPalette.length;
		let outlinesPalette = this.container.getCssDefaultValuesForClassCollection("ui-chart-outline-palette-", names.toArray());
		let numOutlinesPaletteColors: number = outlinesPalette.length;
		let markerFillsPalette = this.container.getCssDefaultValuesForClassCollection("ui-chart-marker-fill-palette-", names.toArray());
		let numMarkerFillsPaletteColors: number = markerFillsPalette.length;
		let markerOutlinesPalette = this.container.getCssDefaultValuesForClassCollection("ui-chart-marker-outline-palette-", names.toArray());
		let numMarkerOutlinesPaletteColors: number = markerOutlinesPalette.length;
		for (let i: number = 0; i < numFillsPaletteColors; i++) {
			paletteInfo.brushes.add(CssGradientUtil.brushFromGradientString(fillsPalette[i][0]));
		}
		for (let i1: number = 0; i1 < numOutlinesPaletteColors; i1++) {
			paletteInfo.outlines.add(CssGradientUtil.brushFromGradientString(outlinesPalette[i1][0]));
		}
		for (let i2: number = 0; i2 < numMarkerFillsPaletteColors; i2++) {
			paletteInfo.markerBrushes.add(CssGradientUtil.brushFromGradientString(markerFillsPalette[i2][0]));
		}
		for (let i3: number = 0; i3 < numMarkerOutlinesPaletteColors; i3++) {
			paletteInfo.markerOutlines.add(CssGradientUtil.brushFromGradientString(markerOutlinesPalette[i3][0]));
		}
		names.clear();
		let fillIndex: number = 0;
		let outlineIndex: number = 0;
		let numPaletteColors: number = Math.min(numFillsPaletteColors, numOutlinesPaletteColors);
		let palette: string[][] = null;
		if (numFillsPaletteColors == 0) {
			names.add("background-color");
		}
		if (numOutlinesPaletteColors == 0) {
			names.add("border-top-color");
			outlineIndex = numFillsPaletteColors == 0 ? 1 : 0;
		}
		if (names.count > 0) {
			palette = this.container.getCssDefaultValuesForClassCollection("ui-chart-palette-", names.toArray());
			numPaletteColors = palette.length;
		}
		if (numFillsPaletteColors == 0) {
			if (numPaletteColors > 0) {
				for (let i4 = 0; i4 < numPaletteColors; i4++) {
					let fillBrush = new Brush();
					fillBrush._fill = palette[i4][fillIndex];
					paletteInfo.brushes.add(fillBrush);
				}
			} else {
				paletteInfo.brushes.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#50a8be";
					return $ret;
				})()));
				paletteInfo.brushes.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#fc6754";
					return $ret;
				})()));
				paletteInfo.brushes.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#fec33c";
					return $ret;
				})()));
				paletteInfo.brushes.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#3c6399";
					return $ret;
				})()));
				paletteInfo.brushes.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#91af49";
					return $ret;
				})()));
			}
		}
		if (numOutlinesPaletteColors == 0) {
			if (numPaletteColors > 0) {
				for (let i5 = 0; i5 < numPaletteColors; i5++) {
					let outlineBrush = new Brush();
					outlineBrush._fill = palette[i5][outlineIndex];
					paletteInfo.outlines.add(outlineBrush);
				}
			} else {
				paletteInfo.outlines.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#B1BFC9";
					return $ret;
				})()));
				paletteInfo.outlines.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#798995";
					return $ret;
				})()));
				paletteInfo.outlines.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#4F606C";
					return $ret;
				})()));
				paletteInfo.outlines.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#374650";
					return $ret;
				})()));
				paletteInfo.outlines.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#162C3B";
					return $ret;
				})()));
			}
		}
		names.clear();
		let numMarkerColors: number = Math.min(numMarkerFillsPaletteColors, numMarkerOutlinesPaletteColors);
		if (numMarkerFillsPaletteColors == 0) {
			names.add("background-color");
		}
		if (numMarkerOutlinesPaletteColors == 0) {
			names.add("border-top-color");
			outlineIndex = numMarkerFillsPaletteColors == 0 ? 1 : 0;
		}
		if (names.count > 0) {
			palette = this.container.getCssDefaultValuesForClassCollection("ui-chart-marker-palette-", names.toArray());
			numMarkerColors = palette.length;
		}
		if (numMarkerFillsPaletteColors == 0) {
			if (numMarkerColors > 0) {
				for (let i6 = 0; i6 < numMarkerColors; i6++) {
					let fillBrush1 = ((() => {
						let $ret = new Brush();
						$ret.fill = palette[i6][fillIndex];
						return $ret;
					})());
					paletteInfo.markerBrushes.add(fillBrush1);
				}
			} else {
				paletteInfo.markerBrushes.add(((() => {
					let $ret = new Brush();
					$ret.fill = "#FFFFFF";
					return $ret;
				})()));
			}
		}
		if (numMarkerOutlinesPaletteColors == 0) {
			if (numMarkerColors > 0) {
				for (let i7 = 0; i7 < numMarkerColors; i7++) {
					let outlineBrush1 = ((() => {
						let $ret = new Brush();
						$ret.fill = palette[i7][outlineIndex];
						return $ret;
					})());
					paletteInfo.markerOutlines.add(outlineBrush1);
				}
			} else {
				for (let brush of fromEnum<Brush>(paletteInfo.brushes)) {
					paletteInfo.markerOutlines.add(brush);
				}
			}
		}
		let axisStrokeColor = this.container.getCssDefaultPropertyValue("ui-chart-axis", "border-top-color");
		if (axisStrokeColor != null) {
			paletteInfo.axisLineBrush = new Brush();
			paletteInfo.axisLineBrush._fill = axisStrokeColor;
		} else {
			let axisStroke: Brush = new Brush();
			axisStroke._fill = "#989EA3";
			paletteInfo.axisLineBrush = axisStroke;
		}
		paletteInfo.fontBrush = new Brush();
		paletteInfo.fontBrush._fill = this.container.getCssDefaultPropertyValue("", "color");
		paletteInfo.crosshairBrush = paletteInfo.fontBrush;
		let crosshairStrokeColor = this.container.getCssDefaultPropertyValue("ui-chart-crosshair", "border-top-color");
		if (crosshairStrokeColor != null) {
			paletteInfo.crosshairBrush = new Brush();
			paletteInfo.crosshairBrush._fill = crosshairStrokeColor;
		}
		this.container.endCSSQuery();
		paletteInfo.font = FontUtil.getFont(this.container);
		let negativeBrush: Brush = ((() => {
			let $ret = new Brush();
			$ret.fill = "#C62828";
			return $ret;
		})());
		paletteInfo.negativeBrushes = new BrushCollection();
		paletteInfo.negativeBrushes.add(negativeBrush);
		paletteInfo.negativeOutlines = new BrushCollection();
		paletteInfo.negativeOutlines.add(negativeBrush);
		return paletteInfo;
	}
	getChartSpecificDefaults(opacity: number, margins: number[], axisStroke: Brush, axisMajorStroke: Brush, categoryAxisTickLength: number, alignsGridLines: boolean): { p0: number; p1: number[]; p2: Brush; p3: Brush; p4: number; p5: boolean; } {
		this.container.startCSSQuery();
		let cssOpacity = this.container.getCssDefaultPropertyValue("ui-chart-area-fill-opacity", "opacity");
		opacity = cssOpacity != null ? parseFloat(cssOpacity) : 1;
		margins = <number[]>new Array(4);
		let marginTop = this.container.getCssDefaultPropertyValue("ui-chart-render-margins", "margin-top");
		let marginRight = this.container.getCssDefaultPropertyValue("ui-chart-render-margins", "margin-right");
		let marginBottom = this.container.getCssDefaultPropertyValue("ui-chart-render-margins", "margin-bottom");
		let marginLeft = this.container.getCssDefaultPropertyValue("ui-chart-render-margins", "margin-left");
		margins[0] = marginTop != null ? parseFloat(marginTop) : NaN;
		margins[1] = marginRight != null ? parseFloat(marginRight) : NaN;
		margins[2] = marginBottom != null ? parseFloat(marginBottom) : NaN;
		margins[3] = marginLeft != null ? parseFloat(marginLeft) : NaN;
		axisStroke = axisMajorStroke = null;
		let cssAxisStroke = this.container.getCssDefaultPropertyValue("ui-chart-axis-stroke", "border-top-color");
		if (cssAxisStroke != null) {
			let b = new Brush();
			b._fill = cssAxisStroke;
			axisStroke = b;
		}
		let cssAxisMajorStroke = this.container.getCssDefaultPropertyValue("ui-chart-axis-major-line", "border-top-color");
		if (cssAxisMajorStroke != null) {
			let b1 = new Brush();
			b1._fill = cssAxisMajorStroke;
			axisMajorStroke = b1;
		}
		let cssAlignsGridLines = this.container.getCssDefaultPropertyValue("ui-chart-aligned-gridlines", "visibility");
		alignsGridLines = cssAlignsGridLines != null && cssAlignsGridLines == "visible";
		let cssCategoryAxisTickLength = this.container.getCssDefaultPropertyValue("ui-chart-category-axis-tick", "height");
		if (cssCategoryAxisTickLength != null) {
			categoryAxisTickLength = parseFloat(cssCategoryAxisTickLength);
			if (Math.abs(categoryAxisTickLength) > 4000) {
				categoryAxisTickLength = 0;
			}
		} else {
			cssCategoryAxisTickLength = this.container.getCssDefaultPropertyValue("ui-chart-category-axis-tick", "width");
			categoryAxisTickLength = cssCategoryAxisTickLength != null ? parseFloat(cssCategoryAxisTickLength) : 0;
		}
		this.container.endCSSQuery();
		return {
			p0: opacity,
			p1: margins,
			p2: axisStroke,
			p3: axisMajorStroke,
			p4: categoryAxisTickLength,
			p5: alignsGridLines

		};
	}
	clearInfoBox(): void {
		this.infoBox.removeChildren();
	}
	updateInfoBoxXTranslation(x_: number): void {
		let box_ = this.infoBox;
		let offset_ = this.eventProxy.getOffsetRelative(this.infoBox);
		let container = this.getContainerOffsets();
		x_ = container.x + this._owner.model.viewportRect.left + x_;
		box_.setOffset(x_, this._owner.model.viewportRect.top + this._infoBoxYPosition + container.y);
	}
	private _infoBoxYPosition: number = 0;
	updateInfoBoxYTranslation(y_: number): void {
		this._infoBoxYPosition = y_;
		let box_ = this.infoBox;
		let offset_ = this.infoBox.getOffset();
		let container = this.getContainerOffsets();
		y_ = this._owner.model.viewportRect.top + this._infoBoxYPosition + container.y;
		box_.setOffset(offset_.left, y_);
	}
	addToInfoBox(control: any): void {
		let c = <DomWrapper><any>control;
		c.show();
		this.infoBox.append(c);
	}
	hideInfoBox(): void {
		this.infoBox.hide();
	}
	showInfoBox(): void {
		this.infoBox.show();
	}
	addTooltipToView(control: any): void {
		this.container.appendToBody(<DomWrapper><any>control);
	}
	removeTooltipFromView(control: any): void {
		(<DomWrapper><any>control).remove();
	}
	notifyContainerResized(): void {
		if (this.container == null) {
			return;
		}
		this.initializeScalingRatio();
		this._owner.onContainerResized(this.container.rootWrapper.width(), this.container.rootWrapper.height());
	}
	private _defaultChartTitleFont: FontInfo = null;
	getDefaultChartTitleFont(): FontInfo {
		return this._defaultChartTitleFont;
	}
	private _defaultChartTitleMargin: Thickness = new Thickness(0, 0);
	getDefaultChartTitleMargin(): Thickness {
		return this._defaultChartTitleMargin;
	}
	private _defaultChartTitleTextAlign: string = null;
	getDefaultChartTitleTextAlign(): string {
		return this._defaultChartTitleTextAlign;
	}
	private _defaultChartSubTitleTextAlign: string = stringEmpty();
	getDefaultChartSubTitleTextAlign(): string {
		return this._defaultChartSubTitleTextAlign;
	}
	private _defaultChartSubTitleMargin: Thickness = new Thickness(0, 0);
	getDefaultChartSubTitleMargin(): Thickness {
		return this._defaultChartSubTitleMargin;
	}
	private _defaultChartTitleColor: Brush = null;
	getDefaultChartTitleColor(): Brush {
		return this._defaultChartTitleColor;
	}
	private _defaultChartSubTitleColor: Brush = null;
	getDefaultChartSubTitleColor(): Brush {
		return this._defaultChartSubTitleColor;
	}
	private _defaultChartSubTitleFont: FontInfo = null;
	getDefaultChartSubTitleFont(): FontInfo {
		return this._defaultChartSubTitleFont;
	}
	private _defaultAxisTitlePosition: AxisTitlePosition = AxisTitlePosition.Auto;
	getDefaultHorizontalAxisTitlePosition(): AxisTitlePosition {
		return this._defaultAxisTitlePosition;
	}
	private _defaultVerticalAxisTitlePosition: AxisTitlePosition = AxisTitlePosition.Auto;
	getDefaultVerticalAxisTitlePosition(): AxisTitlePosition {
		return this._defaultVerticalAxisTitlePosition;
	}
	private _defaultVerticalAxisFont: FontInfo = null;
	getDefaultVerticalAxisFont(): FontInfo {
		return this._defaultVerticalAxisFont;
	}
	private _defaultVerticalAxisColor: Brush = null;
	getDefaultVerticalAxisColor(): Brush {
		return this._defaultVerticalAxisColor;
	}
	private _defaultHorizontalAxisFont: FontInfo = null;
	getDefaultHorizontalAxisFont(): FontInfo {
		return this._defaultHorizontalAxisFont;
	}
	private _defaultHorizontalAxisColor: Brush = null;
	getDefaultHorizontalAxisColor(): Brush {
		return this._defaultHorizontalAxisColor;
	}
	private _defaultHorizontalAxisTitleMargin: Thickness = new Thickness(0, 0);
	getDefaultHorizontalAxisTitleMargin(): Thickness {
		return this._defaultHorizontalAxisTitleMargin;
	}
	private _defaultVerticalAxisTitleMargin: Thickness = new Thickness(0, 0);
	getDefaultVerticalAxisTitleMargin(): Thickness {
		return this._defaultVerticalAxisTitleMargin;
	}
	styleUpdated(): void {
		this.container.startCSSQuery();
		this.updateChartTitle();
		this.updateChartSubTitle();
		this.updateDefaulVerrticalAxis();
		this.updateDefaultHorizontalAxis();
		this.updatePointerTooltipStyle();
		this.container.endCSSQuery();
	}
	private updatePointerTooltipStyle(): void {
		let className: string = "ui-chart-pointer-tooltip";
		let backgroundColor = this.container.getCssDefaultPropertyValue(className, "background-color");
		let borderColor = this.container.getCssDefaultPropertyValue(className, "border-top-color");
		let borderRadius = this.container.getCssDefaultPropertyValue(className, "border-top-left-radius");
		let borderWidth = this.container.getCssDefaultPropertyValue(className, "border-top-width");
		let style = new PointerTooltipStyle();
		style.cornerRadius = borderRadius != null ? parseFloat(borderRadius) : 0;
		style.fillColor = backgroundColor != null ? Brush.create(backgroundColor) : ((() => {
			let $ret = new Brush();
			$ret.fill = "white";
			return $ret;
		})());
		style.strokeColor = borderColor != null ? Brush.create(borderColor) : ((() => {
			let $ret = new Brush();
			$ret.fill = "gray";
			return $ret;
		})());
		style.strokeThickness = borderWidth != null ? parseFloat(borderWidth) : 0;
		this._pointerTooltipStyle = style;
	}
	private updateChartTitle(): void {
		let className: string = "ui-chart-title";
		this._defaultChartTitleFont = FontUtil.getFontForClass(this.container, className);
		this._defaultChartTitleColor = ((() => {
			let $ret = new Brush();
			$ret.fill = this.container.getCssDefaultPropertyValue(className, "color");
			return $ret;
		})());
		this._defaultChartTitleTextAlign = this.container.getCssDefaultPropertyValue(className, "text-align");
		if (this._defaultChartTitleTextAlign == null) {
			this._defaultChartTitleTextAlign = "center";
		}
		let marginTop = this.container.getCssDefaultPropertyValue(className, "margin-top");
		let marginBottom = this.container.getCssDefaultPropertyValue(className, "margin-bottom");
		let marginLeft = this.container.getCssDefaultPropertyValue(className, "margin-left");
		let marginRight = this.container.getCssDefaultPropertyValue(className, "margin-right");
		let marginTopDb = marginTop != null ? parseFloat(marginTop) : 0;
		let marginBottomDb = marginBottom != null ? parseFloat(marginBottom) : 0;
		let marginLeftDb = marginLeft != null ? parseFloat(marginLeft) : 0;
		let marginRightDb = marginRight != null ? parseFloat(marginRight) : 0;
		this._defaultChartTitleMargin = new Thickness(1, marginLeftDb, marginTopDb, marginRightDb, marginBottomDb);
	}
	private updateChartSubTitle(): void {
		let className: string = "ui-chart-subtitle";
		this._defaultChartSubTitleFont = FontUtil.getFontForClass(this.container, className);
		this._defaultChartSubTitleColor = ((() => {
			let $ret = new Brush();
			$ret.fill = this.container.getCssDefaultPropertyValue(className, "color");
			return $ret;
		})());
		this._defaultChartSubTitleTextAlign = this.container.getCssDefaultPropertyValue(className, "text-align");
		if (this._defaultChartSubTitleTextAlign == null) {
			this._defaultChartSubTitleTextAlign = "center";
		}
		let marginTop = this.container.getCssDefaultPropertyValue(className, "margin-top");
		let marginBottom = this.container.getCssDefaultPropertyValue(className, "margin-bottom");
		let marginLeft = this.container.getCssDefaultPropertyValue(className, "margin-left");
		let marginRight = this.container.getCssDefaultPropertyValue(className, "margin-right");
		let marginTopDb = marginTop != null ? parseFloat(marginTop) : 0;
		let marginBottomDb = marginBottom != null ? parseFloat(marginBottom) : 0;
		let marginLeftDb = marginLeft != null ? parseFloat(marginLeft) : 0;
		let marginRightDb = marginRight != null ? parseFloat(marginRight) : 0;
		this._defaultChartSubTitleMargin = new Thickness(1, marginLeftDb, marginTopDb, marginRightDb, marginBottomDb);
	}
	private updateDefaultHorizontalAxis(): void {
		let className: string = "ui-chart-horizontal-axis-title";
		this._defaultHorizontalAxisFont = FontUtil.getFontForClass(this.container, className);
		this._defaultHorizontalAxisColor = ((() => {
			let $ret = new Brush();
			$ret.fill = this.container.getCssDefaultPropertyValue(className, "color");
			return $ret;
		})());
		let val = this.container.getCssDefaultPropertyValue(className, "vertical-align");
		if (val == null) {
			this._defaultAxisTitlePosition = AxisTitlePosition.Auto;
		} else if (val.toLowerCase() == "bottom") {
			this._defaultAxisTitlePosition = AxisTitlePosition.Bottom;
		} else {
			this._defaultAxisTitlePosition = AxisTitlePosition.Top;
		}
		let marginTop = this.container.getCssDefaultPropertyValue(className, "margin-top");
		let marginBottom = this.container.getCssDefaultPropertyValue(className, "margin-bottom");
		let marginLeft = this.container.getCssDefaultPropertyValue(className, "margin-left");
		let marginRight = this.container.getCssDefaultPropertyValue(className, "margin-right");
		let marginTopDb = marginTop != null ? parseFloat(marginTop) : 2;
		let marginBottomDb = marginBottom != null ? parseFloat(marginBottom) : 2;
		let marginLeftDb = marginLeft != null ? parseFloat(marginLeft) : 2;
		let marginRightDb = marginRight != null ? parseFloat(marginRight) : 2;
		this._defaultHorizontalAxisTitleMargin = new Thickness(1, marginLeftDb, marginTopDb, marginRightDb, marginBottomDb);
	}
	private updateDefaulVerrticalAxis(): void {
		let className: string = "ui-chart-vertical-axis-title";
		this._defaultVerticalAxisFont = FontUtil.getFontForClass(this.container, className);
		this._defaultVerticalAxisColor = ((() => {
			let $ret = new Brush();
			$ret.fill = this.container.getCssDefaultPropertyValue(className, "color");
			return $ret;
		})());
		let val = this.container.getCssDefaultPropertyValue(className, "text-align");
		if (val == null) {
			this._defaultVerticalAxisTitlePosition = AxisTitlePosition.Auto;
		} else if (val.toLowerCase() == "right") {
			this._defaultVerticalAxisTitlePosition = AxisTitlePosition.Right;
		} else {
			this._defaultVerticalAxisTitlePosition = AxisTitlePosition.Left;
		}
		let marginTop = this.container.getCssDefaultPropertyValue(className, "margin-top");
		let marginBottom = this.container.getCssDefaultPropertyValue(className, "margin-bottom");
		let marginLeft = this.container.getCssDefaultPropertyValue(className, "margin-left");
		let marginRight = this.container.getCssDefaultPropertyValue(className, "margin-right");
		let marginTopDb = marginTop != null ? parseFloat(marginTop) : 0;
		let marginBottomDb = marginBottom != null ? parseFloat(marginBottom) : 0;
		let marginLeftDb = marginLeft != null ? parseFloat(marginLeft) : 0;
		let marginRightDb = marginRight != null ? parseFloat(marginRight) : 0;
		this._defaultVerticalAxisTitleMargin = new Thickness(1, marginLeftDb, marginTopDb, marginRightDb, marginBottomDb);
	}
	ensureCorrectSize(width: number, height: number): void {
		let pixelRatio = this._owner.model.actualPixelScalingRatio;
		if (width != this._currentCanvasWidth || height != this._currentCanvasHeight || pixelRatio != this._currentPixelRatio) {
			this.containerSizeChanging(width, height, this._owner.model.actualPixelScalingRatio);
			this._owner.model.canvasRenderScheduler.flush();
			this._owner.overlayScheduler.flush();
		}
	}
	private _pointerTooltipStyle: PointerTooltipStyle = null;
	getPointerTooltipStyle(): PointerTooltipStyle {
		return this._pointerTooltipStyle;
	}
	isPagePanningAllowedChanged(allowed: boolean): void {
		if (this.eventProxy == null) {
			return;
		}
		this.eventProxy.deferredTouchStartMode = allowed;
		this.eventProxy.shouldInteractForDirection = runOn(this._owner, this._owner.shouldInteractForDirection);
	}
	private _tileMap: Dictionary$2<string, Tuple$2<DomWrapper, RenderingContext>> = new Dictionary$2<string, Tuple$2<DomWrapper, RenderingContext>>(String_$type, (<any>Tuple$2).$type.specialize(DomWrapper_$type, (<any>RenderingContext).$type), 0);
	acquireTileContent(window: Rect, tile: ITileZoomTile, tileSize: number): any {
		let canvas: Tuple$2<DomWrapper, RenderingContext>;
		if (!((() => { let $ret = this._tileMap.tryGetValue(tile.iD.toString(), canvas); canvas = $ret.p1; return $ret.ret; })())) {
			let canv = this.container.createElement("canvas");
			canv.setAttribute("width", tileSize.toString());
			canv.setAttribute("height", tileSize.toString());
			canv.setStyleProperty("width", tileSize.toString() + "px");
			canv.setStyleProperty("height", tileSize.toString() + "px");
			let context = this.container.get2DCanvasContext(canv);
			let r = new RenderingContext(new CanvasViewRenderer(), context);
			let t = new Tuple$2<DomWrapper, RenderingContext>(DomWrapper_$type, (<any>RenderingContext).$type, canv, r);
			canvas = t;
			this._tileMap.addItem(tile.iD.toString(), canvas);
		}
		let viewport = new Rect(0, 0, 0, tileSize, tileSize);
		let surface: RenderSurface = new RenderSurface();
		surface.surface = canvas.item2;
		for (let i = 0; i < this._owner.model.series.count; i++) {
			let series = this._owner.model.series._inner[i];
			series.renderAlternateView(viewport, window, surface, "tile", 1);
		}
		this._owner.model.alternateViewRenderScheduler.flush();
		return canvas.item1;
	}
	destroyTileContent(tile: ITileZoomTile): void {
		this._tileMap.removeItem(tile.iD.toString());
	}
	destroyAllTileContent(): void {
		this._tileMap.clear();
	}
	renderTiles(visibleTiles: List$1<ITileZoomTile>): void {
		for (let i = 0; i < visibleTiles.count; i++) {
			let tile = visibleTiles._inner[i];
			let content = <DomWrapper><any>tile.content;
			this._owner.overlayContext.drawImage(content.getNativeElement(), 1, tile.xPosition + this._owner.model.viewportRect.left, tile.yPosition + this._owner.model.viewportRect.top, tile.width, tile.height);
		}
	}
	private _cacheClearID: number = -1;
	deferCacheClear(): void {
		if (this._cacheClearID != -1) {
			this.cancelDeferredCacheClear();
		}
		if (this.container != null) {
			this._cacheClearID = this.container.setTimeout(() => this._owner.model.seriesViewerInteractionManager.deferredClearOfTileZoomCache(this._owner.model), 5000);
		} else {
			this._cacheClearID = window.setTimeout(() => this._owner.model.seriesViewerInteractionManager.deferredClearOfTileZoomCache(this._owner.model), 5000);
		}
	}
	cancelDeferredCacheClear(): void {
		if (this._cacheClearID != -1) {
			if (this.container != null) {
				this.container.clearTimeout(this._cacheClearID);
			} else {
				window.clearTimeout(this._cacheClearID);
			}
			this._cacheClearID = -1;
		}
	}
	private _endTileID: number = -1;
	deferEndToTiledZoom(delay: number): void {
		if (this._endTileID != -1) {
			this.cancelEndToTiledZoom();
		}
		if (this.container != null) {
			this.container.setTimeout(() => this._owner.model.endTiledZoomingIfRunning(), delay);
		} else {
			this._endTileID = window.setTimeout(() => this._owner.model.endTiledZoomingIfRunning(), delay);
		}
	}
	cancelEndToTiledZoom(): void {
		if (this._endTileID != -1) {
			if (this.container != null) {
				this.container.clearTimeout(this._endTileID);
			} else {
				window.clearTimeout(this._endTileID);
			}
			this._endTileID = -1;
		}
	}
	private _cachedHitContext: RenderingContext = null;
	onActualHitTestModeChanged(): void {
		if (this._owner.model.actualContentHitTestMode != ChartHitTestMode.Computational) {
			if (this._cachedHitContext == null) {
				this.hitContext = new RenderingContext(new CanvasViewRenderer(), this.container.get2DCanvasContext(this.hitCanvas));
				this._cachedHitContext = this.hitContext;
			} else {
				this.hitContext = this._cachedHitContext;
			}
		} else {
			this.hitContext = new RenderingContext(null, null);
		}
		this._owner.propagateHitContext(this.hitContext);
	}
	updateMobileMode(value: boolean): void {
		if (this.container != null) {
			let className: string = "igTouch";
			if (value) {
				this.container.rootWrapper.addClass(className);
			} else {
				this.container.rootWrapper.removeClass(className);
			}
		}
	}
	disableAntiAliasingIfPossible(): void {
	}
	enableAntiAliasingIfPossible(): void {
	}
	onDetachedFromUI(): void {
		if (this.eventProxy != null) {
			this.eventProxy.unbindFromSource(this.overlayCanvas, "");
		}
	}
	onAttachedToUI(): void {
		this.initializeScalingRatio();
		if (this.eventProxy != null) {
			this.eventProxy.bindToSource(this.overlayCanvas, "");
		}
	}
}

/**
 * @hidden 
 */
export class AutoRangeCalculator extends Base {
	static $t: Type = markType(AutoRangeCalculator, 'AutoRangeCalculator');
	static calculateRange(target: NumericAxisBase, userMinimum: number, userMaximum: number, isLogarithmic: boolean, logarithmBase: number, minimumValue: number, maximumValue: number): { p5: number; p6: number; } {
		minimumValue = !isNaN_(userMinimum) && !isInfinity(userMinimum) ? userMinimum : Number.POSITIVE_INFINITY;
		maximumValue = !isNaN_(userMaximum) && !isInfinity(userMaximum) ? userMaximum : Number.NEGATIVE_INFINITY;
		let min: number = minimumValue;
		let max: number = maximumValue;
		if (isInfinity(min) || isInfinity(max)) {
			if (target != null) {
				let axisRange: AxisRange = target.getAxisRange();
				if (axisRange != null) {
					min = Math.min(min, axisRange.minimum);
					max = Math.max(max, axisRange.maximum);
				}
			}
		}
		if (!isInfinity(min) && !isInfinity(max)) {
			if (min == max && min != 0) {
				min *= min > 0 ? 0.9 : 1.1;
				max *= max > 0 ? 1.1 : 0.9;
			}
			if (min == max && min == 0) {
				max = 1;
			}
			if (userMinimum > userMaximum) {
				let temp: number = userMaximum;
				userMaximum = userMinimum;
				userMinimum = temp;
			}
			let actualMinimum: number = isNaN_(userMinimum) || isInfinity(userMinimum) ? min : userMinimum;
			let actualMaximum: number = isNaN_(userMaximum) || isInfinity(userMaximum) ? max : userMaximum;
			if (isLogarithmic) {
				if (actualMinimum <= 0) {
					if (actualMaximum > 1) {
						actualMinimum = 1;
					} else {
						actualMinimum = Math.pow(logarithmBase, Math.floor(logBase(actualMaximum, logarithmBase)));
					}
				}
				if (isNaN_(userMinimum) || isInfinity(userMinimum)) {
					let log = logBase(actualMinimum, logarithmBase);
					min = Math.pow(logarithmBase, Math.floor(log));
				} else {
					min = actualMinimum;
				}
				if (isNaN_(userMaximum) || isInfinity(userMaximum)) {
					max = Math.pow(logarithmBase, Math.ceil(logBase(actualMaximum, logarithmBase)));
				} else {
					max = actualMaximum;
				}
			} else {
				let n: number = Math.pow(10, Math.floor(log10(actualMaximum - actualMinimum)) - 1);
				let axisResolution: number = target.getResolutionExtent();
				if (target != null && axisResolution > 0 && (!target.hasUserMinimum && !target.hasUserMaximum)) {
					let snapper: LinearNumericSnapper = new LinearNumericSnapper(0, min, max, axisResolution, target.resolveHeuristicResolution());
					n = snapper.interval;
				}
				if ((isNaN_(userMinimum) || isInfinity(userMinimum)) && !isNaN_(min) && !isNaN_(n) && n != 0) {
					{
						min = n * Math.floor(min / n);
					}
				} else {
					min = actualMinimum;
				}
				if ((isNaN_(userMaximum) || isInfinity(userMaximum)) && !isNaN_(max) && !isNaN_(n) && n != 0) {
					let ceilingOfQuotient: number = Math.ceil(max / n);
					{
						max = n * ceilingOfQuotient;
					}
				} else {
					max = actualMaximum;
				}
			}
		}
		minimumValue = min;
		maximumValue = max;
		return {
			p5: minimumValue,
			p6: maximumValue

		};
	}
}

/**
 * @hidden 
 */
export interface IAxisAnnotationManager { 
	owner: Axis;
onAutoAnnotionsChanged(axis: Axis, autoAnnotations: AxisAnnotationCollection, e: NotifyCollectionChangedEventArgs): void;
onAutoAnnotionsReset(axis: Axis, autoAnnotations: AxisAnnotationCollection, e: EventArgs): void;
onAnnotionsChanged(axis: Axis, annotations: AxisAnnotationCollection, e: NotifyCollectionChangedEventArgs): void;
onAnnotionsReset(axis: Axis, annotations: AxisAnnotationCollection, e: EventArgs): void;
onAddAnnotations(axis: Axis): void;
arrangeAnnotations(axis: Axis, view: AxisLabelPanelBaseView, textBlocks: List$1<FrameworkElement>, labelBounds: List$1<Rect>, useRotation: boolean, effectiveAngle: number, leftMargin: number, topMargin: number, rightMargin: number, bottomMargin: number): void;
}

/**
 * @hidden 
 */
export let IAxisAnnotationManager_$type = new Type(null, 'IAxisAnnotationManager');

/**
 * @hidden 
 */
export class AxisLabelSettings extends Base implements INotifyPropertyChanged {
	static $t: Type = markType(AxisLabelSettings, 'AxisLabelSettings', (<any>Base).$type, [INotifyPropertyChanged_$type]);
	constructor() {
		super();
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
	}
	private _textStyle: string = null;
	get textStyle(): string {
		return this._textStyle;
	}
	set textStyle(value: string) {
		let oldValue = this._textStyle;
		this._textStyle = value;
		this.raisePropertyChanged(AxisLabelSettings.textStylePropertyName, oldValue, value);
	}
	static readonly textStylePropertyName: string = "TextStyle";
	private _textColor: Brush = null;
	get textColor(): Brush {
		return this._textColor;
	}
	set textColor(value: Brush) {
		let oldValue: Brush = this._textColor;
		this._textColor = value;
		this.raisePropertyChanged(AxisLabelSettings.textColorPropertyName, oldValue, value);
	}
	static readonly textColorPropertyName: string = "TextColor";
	static readonly locationPropertyName: string = "Location";
	get location(): AxisLabelsLocation {
		return this._location;
	}
	set location(value: AxisLabelsLocation) {
		let oldValue: AxisLabelsLocation = this._location;
		this._location = value;
		this.raisePropertyChanged(AxisLabelSettings.locationPropertyName, enumGetBox<AxisLabelsLocation>(AxisLabelsLocation_$type, oldValue), enumGetBox<AxisLabelsLocation>(AxisLabelsLocation_$type, value));
	}
	private _location: AxisLabelsLocation = AxisLabelsLocation.OutsideBottom;
	static readonly visibilityPropertyName: string = "Visibility";
	get visibility(): Visibility {
		return this._visibility;
	}
	set visibility(value: Visibility) {
		let oldValue: Visibility = this._visibility;
		this._visibility = value;
		this.raisePropertyChanged(AxisLabelSettings.visibilityPropertyName, enumGetBox<Visibility>(Visibility_$type, oldValue), enumGetBox<Visibility>(Visibility_$type, value));
	}
	private _visibility: Visibility = Visibility.Visible;
	static readonly showFirstLabelPropertyName: string = "ShowFirstLabel";
	get showFirstLabel(): boolean {
		return this._showFirstLabel;
	}
	set showFirstLabel(value: boolean) {
		let oldValue: boolean = this._showFirstLabel;
		this._showFirstLabel = value;
		this.raisePropertyChanged(AxisLabelSettings.showFirstLabelPropertyName, oldValue, value);
	}
	private _showFirstLabel: boolean = true;
	private _actualLocation: AxisLabelsLocation = <AxisLabelsLocation>0;
	get actualLocation(): AxisLabelsLocation {
		return this._actualLocation;
	}
	set actualLocation(value: AxisLabelsLocation) {
		this._actualLocation = value;
	}
	private _axis: Axis = null;
	get axis(): Axis {
		return this._axis;
	}
	set axis(value: Axis) {
		this._axis = value;
	}
	registerAxis(axis: Axis): void {
		this.axis = axis;
	}
	unregisterAxis(axis: Axis): void {
		this.axis = null;
	}
	static readonly anglePropertyName: string = "Angle";
	get angle(): number {
		return this._angle;
	}
	set angle(value: number) {
		let oldValue: number = this._angle;
		this._angle = value;
		this.raisePropertyChanged(AxisLabelSettings.anglePropertyName, oldValue, value);
	}
	private _angle: number = 0;
	static readonly extentPropertyName: string = "Extent";
	get extent(): number {
		return this._extent;
	}
	set extent(value: number) {
		let oldValue: number = this._extent;
		this._extent = value;
		this.raisePropertyChanged(AxisLabelSettings.extentPropertyName, oldValue, value);
	}
	private _extent: number = NaN;
	static readonly marginPropertyName: string = "Margin";
	set margin(value: number) {
		this.topMargin = this.rightMargin = this.bottomMargin = this.leftMargin = value;
	}
	static readonly leftMarginPropertyName: string = "LeftMargin";
	get leftMargin(): number {
		return this._leftMargin;
	}
	set leftMargin(value: number) {
		let oldValue: number = this._leftMargin;
		this._leftMargin = value;
		this.raisePropertyChanged(AxisLabelSettings.leftMarginPropertyName, oldValue, value);
	}
	private _leftMargin: number = 2;
	static readonly rightMarginPropertyName: string = "RightMargin";
	get rightMargin(): number {
		return this._rightMargin;
	}
	set rightMargin(value: number) {
		let oldValue: number = this._rightMargin;
		this._rightMargin = value;
		this.raisePropertyChanged(AxisLabelSettings.rightMarginPropertyName, oldValue, value);
	}
	private _rightMargin: number = 2;
	static readonly topMarginPropertyName: string = "TopMargin";
	get topMargin(): number {
		return this._topMargin;
	}
	set topMargin(value: number) {
		let oldValue: number = this._topMargin;
		this._topMargin = value;
		this.raisePropertyChanged(AxisLabelSettings.topMarginPropertyName, oldValue, value);
	}
	private _topMargin: number = 2;
	static readonly bottomMarginPropertyName: string = "BottomMargin";
	get bottomMargin(): number {
		return this._bottomMargin;
	}
	set bottomMargin(value: number) {
		let oldValue: number = this._bottomMargin;
		this._bottomMargin = value;
		this.raisePropertyChanged(AxisLabelSettings.bottomMarginPropertyName, oldValue, value);
	}
	private _bottomMargin: number = 2;
	static readonly horizontalAlignmentPropertyName: string = "HorizontalAlignment";
	private _horizontalAlignment: HorizontalAlignment = AxisLabelSettings.horizontalAlignmentPropertyDefaultValue;
	static readonly horizontalAlignmentPropertyDefaultValue: HorizontalAlignment = HorizontalAlignment.Left;
	get horizontalAlignment(): HorizontalAlignment {
		return this._horizontalAlignment;
	}
	set horizontalAlignment(value: HorizontalAlignment) {
		let oldValue: HorizontalAlignment = this._horizontalAlignment;
		this._horizontalAlignment = value;
		this.raisePropertyChanged(AxisLabelSettings.horizontalAlignmentPropertyName, enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, oldValue), enumGetBox<HorizontalAlignment>(HorizontalAlignment_$type, value));
	}
	static readonly verticalAlignmentPropertyName: string = "VerticalAlignment";
	private _verticalAlignment: VerticalAlignment = AxisLabelSettings.verticalAlignmentPropertyDefaultValue;
	static readonly verticalAlignmentPropertyDefaultValue: VerticalAlignment = VerticalAlignment.Center;
	get verticalAlignment(): VerticalAlignment {
		return this._verticalAlignment;
	}
	set verticalAlignment(value: VerticalAlignment) {
		let oldValue: VerticalAlignment = this._verticalAlignment;
		this._verticalAlignment = value;
		this.raisePropertyChanged(AxisLabelSettings.verticalAlignmentPropertyName, enumGetBox<VerticalAlignment>(VerticalAlignment_$type, oldValue), enumGetBox<VerticalAlignment>(VerticalAlignment_$type, value));
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case AxisLabelSettings.locationPropertyName:
			this.actualLocation = this.location;
			break;

		}

		if (this.axis == null || this.axis.chart == null) {
			return;
		}
		switch (propertyName) {
			case AxisLabelSettings.anglePropertyName:
			this.axis.mustInvalidateLabels = true;
			this.axis.renderAxis();
			break;

			case AxisLabelSettings.textStylePropertyName:
			this._fontInfo = null;
			this.axis.mustInvalidateLabels = true;
			if (this.axis.seriesViewer != null) {
				this.axis.seriesViewer.invalidatePanels();
			}
			this.axis.renderAxis();
			break;

			case AxisLabelSettings.locationPropertyName:

			case AxisLabelSettings.extentPropertyName:

			case AxisLabelSettings.visibilityPropertyName:

			case AxisLabelSettings.horizontalAlignmentPropertyName:

			case AxisLabelSettings.verticalAlignmentPropertyName:

			case AxisLabelSettings.topMarginPropertyName:

			case AxisLabelSettings.rightMarginPropertyName:

			case AxisLabelSettings.bottomMarginPropertyName:

			case AxisLabelSettings.leftMarginPropertyName:

			case AxisLabelSettings.showFirstLabelPropertyName:
			this.axis.mustInvalidateLabels = true;
			if (this.axis.seriesViewer != null) {
				this.axis.seriesViewer.invalidatePanels();
			}
			this.axis.renderAxis();
			break;

			case AxisLabelSettings.textColorPropertyName:
			this.axis.renderAxis();
			break;

		}

	}
	hasUserAngle(): boolean {
		return this._angle != 0;
	}
	hasUserExtent(): boolean {
		return !isNaN_(this._extent);
	}
	static readonly extentPropertyDefault: number = NaN;
	get hasFontInfo(): boolean {
		return this.textStyle != null;
	}
	private _fontInfo: FontInfo = null;
	getFontInfo(renderer: DomRenderer): FontInfo {
		if (this._fontInfo == null) {
			this._fontInfo = FontUtil.toFontInfo(renderer, this.textStyle);
		}
		return this._fontInfo;
	}
}

/**
 * @hidden 
 */
export class TitleSettings extends AxisLabelSettings {
	static $t: Type = markType(TitleSettings, 'TitleSettings', (<any>AxisLabelSettings).$type);
	constructor() {
		super();
		this.horizontalAlignment = HorizontalAlignment.Center;
		this.leftMargin = NaN;
		this.rightMargin = NaN;
		this.topMargin = NaN;
		this.bottomMargin = NaN;
	}
	static readonly axisTitlePositionPropertyName: string = "AxisTitlePosition";
	private _titlePosition: AxisTitlePosition = TitleSettings.positionPropertyDefaultValue;
	static readonly positionPropertyDefaultValue: AxisTitlePosition = AxisTitlePosition.Auto;
	get position(): AxisTitlePosition {
		return this._titlePosition;
	}
	set position(value: AxisTitlePosition) {
		let oldValue: AxisTitlePosition = this._titlePosition;
		this._titlePosition = value;
		this.raisePropertyChanged(TitleSettings.axisTitlePositionPropertyName, enumGetBox<AxisTitlePosition>(AxisTitlePosition_$type, oldValue), enumGetBox<AxisTitlePosition>(AxisTitlePosition_$type, value));
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.axis == null || this.axis.seriesViewer == null) {
			return;
		}
		switch (propertyName) {
			case TitleSettings.axisTitlePositionPropertyName:
			this.axis.mustInvalidateLabels = true;
			this.axis.renderAxis();
			break;

		}

	}
}

/**
 * @hidden 
 */
export abstract class Axis extends Control implements INotifyPropertyChanged {
	static $t: Type = markType(Axis, 'Axis', (<any>Control).$type, [INotifyPropertyChanged_$type]);
	createView(): AxisView {
		return new AxisView(this);
	}
	private _view: AxisView = null;
	protected get_view(): AxisView {
		return this._view;
	}
	protected set_view(value: AxisView): void {
		this._view = value;
	}
	get view(): AxisView {
		return this.get_view();
	}
	set view(value: AxisView) {
		this.set_view(value);
	}
	onViewCreated(view: AxisView): void {
	}
	addAnnotations(): void {
		if (this.isAnnotationLoaded) {
			this.axisAnnotationManager.onAddAnnotations(this);
		}
	}
	private _sr: SRProvider = null;
	get sRP(): SRProvider {
		if (this._sr == null) {
			this._sr = new SRProvider(this.domRenderer);
		}
		if (this._sr.container == null) {
			this._sr.container = this.domRenderer;
		}
		return this._sr;
	}
	private _axisVisualDataManager: IAxisVisualDataManager = null;
	get axisVisualDataManager(): IAxisVisualDataManager {
		if (this._axisVisualDataManager == null) {
			this._axisVisualDataManager = <IAxisVisualDataManager><any>DVContainer.instance.createInstance(IAxisVisualDataManager_$type, () => this.sRP.dataChart_VisualDataNotLoaded);
		}
		return this._axisVisualDataManager;
	}
	getResolutionExtent(): number {
		return this.viewportRect.width;
	}
	resolveActualMinimumValue(): any {
		return null;
	}
	resolveActualMaximumValue(): any {
		return null;
	}
	protected get_isCategory(): boolean {
		return false;
	}
	get isCategory(): boolean {
		return this.get_isCategory();
	}
	protected get_isNumeric(): boolean {
		return false;
	}
	get isNumeric(): boolean {
		return this.get_isNumeric();
	}
	protected get_isAngular(): boolean {
		return false;
	}
	get isAngular(): boolean {
		return this.get_isAngular();
	}
	protected get_isRadial(): boolean {
		return false;
	}
	get isRadial(): boolean {
		return this.get_isRadial();
	}
	protected get_isVertical(): boolean {
		return false;
	}
	get isVertical(): boolean {
		return this.get_isVertical();
	}
	protected get_isSorting(): boolean {
		return false;
	}
	get isSorting(): boolean {
		return this.get_isSorting();
	}
	protected get_isDateTime(): boolean {
		return false;
	}
	get isDateTime(): boolean {
		return this.get_isDateTime();
	}
	protected get_isPiecewise(): boolean {
		return false;
	}
	get isPiecewise(): boolean {
		return this.get_isPiecewise();
	}
	protected get_isCategoryDateTime(): boolean {
		return false;
	}
	get isCategoryDateTime(): boolean {
		return this.get_isCategoryDateTime();
	}
	protected get_isContinuous(): boolean {
		return true;
	}
	get isContinuous(): boolean {
		return this.get_isContinuous();
	}
	resolveCrossingAxis(): Axis {
		return this.crossingAxis;
	}
	constructor() {
		super();
		DVContainer.instance.registerIfLoaded("VisualDataFactoryManager");
		DVContainer.instance.registerIfLoaded("AnnotationFactoryManager");
		this.extentOverride = NaN;
		this.view = this.createView();
		this.onViewCreated(this.view);
		this.view.onInit();
		this.textBlocks = ((() => {
			let $ret = new Pool$1<TextBlock>((<any>TextBlock).$type);
			$ret.create = runOn(this.view, this.view.textBlockCreate);
			$ret.activate = runOn(this.view, this.view.textBlockActivate);
			$ret.disactivate = runOn(this.view, this.view.textBlockDisactivate);
			$ret.destroy = runOn(this.view, this.view.textBlockDestroy);
			return $ret;
		})());
		this.annotationTextBlocks = ((() => {
			let $ret = new Pool$1<TextBlock>((<any>TextBlock).$type);
			$ret.create = runOn(this.view, this.view.textBlockCreate);
			$ret.activate = runOn(this.view, this.view.textBlockActivate);
			$ret.disactivate = runOn(this.view, this.view.textBlockDisactivate);
			$ret.destroy = runOn(this.view, this.view.textBlockDestroy);
			return $ret;
		})());
		this.annotationBackings = ((() => {
			let $ret = new Pool$1<Rectangle>((<any>Rectangle).$type);
			$ret.create = runOn(this.view, this.view.annotationBackingCreate);
			$ret.activate = runOn(this.view, this.view.annotationBackingActivate);
			$ret.disactivate = runOn(this.view, this.view.annotationBackingDisactivate);
			$ret.destroy = runOn(this.view, this.view.annotationBackingDestroy);
			return $ret;
		})());
		this.viewportOverride = Rect.empty;
		this.labelDataContext = new List$1<any>((<any>Base).$type, 0);
		this.labelPositions = new List$1<LabelPosition>((<any>LabelPosition).$type, 0);
		this.labelPanel = this.createLabelPanel();
		this.labelPanel.labelSettings = this.labelSettings;
		this.labelPanel.axis = this;
		this.series = new List$1<Series>((<any>Series).$type, 0);
		let $t = this._annotations;
		$t.collectionResetting = delegateCombine($t.collectionResetting, runOn(this, this._annotations_CollectionResetting));
		let $t1 = this._annotations;
		$t1.collectionChanged = delegateCombine($t1.collectionChanged, runOn(this, this._annotations_CollectionChanged));
		let $t2 = this._autoAnnotations;
		$t2.collectionResetting = delegateCombine($t2.collectionResetting, runOn(this, this._autoAnnotations_CollectionResetting));
		let $t3 = this._autoAnnotations;
		$t3.collectionChanged = delegateCombine($t3.collectionChanged, runOn(this, this._autoAnnotations_CollectionChanged));
		this.defaultStyleKey = (<any>Axis).$type;
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
		this.seriesViewer_ActualWindowRectChanged = (o: any, e: RectChangedEventArgs) => {
			if (this.seriesViewer == null || !this.seriesViewer.ignoreWindowChanges) {
				this.windowRectChangedOverride(e.oldRect, e.newRect);
			}
		};
		this.view.bindLabelPanelStyle();
	}
	private _axisAnnotationManager: IAxisAnnotationManager = null;
	get axisAnnotationManager(): IAxisAnnotationManager {
		if (this._axisAnnotationManager == null) {
			this._axisAnnotationManager = <IAxisAnnotationManager><any>DVContainer.instance.createInstance(IAxisAnnotationManager_$type, () => this.sRP.dataChart_InteractivityNotLoaded);
			this._axisAnnotationManager.owner = this;
		}
		return this._axisAnnotationManager;
	}
	get isAnnotationLoaded(): boolean {
		return DVContainer.instance.checkLoaded("AnnotationFactoryManager");
	}
	private _autoAnnotations_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (!this.isAnnotationLoaded) {
			return;
		}
		this.axisAnnotationManager.onAutoAnnotionsChanged(this, this._autoAnnotations, e);
	}
	private _autoAnnotations_CollectionResetting(sender: any, e: EventArgs): void {
		if (!this.isAnnotationLoaded) {
			return;
		}
		this.axisAnnotationManager.onAutoAnnotionsReset(this, this._autoAnnotations, e);
	}
	private _annotations_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (!this.isAnnotationLoaded) {
			return;
		}
		this.axisAnnotationManager.onAnnotionsChanged(this, this._annotations, e);
	}
	private _annotations_CollectionResetting(sender: any, e: EventArgs): void {
		if (!this.isAnnotationLoaded) {
			return;
		}
		this.axisAnnotationManager.onAnnotionsReset(this, this._annotations, e);
	}
	provideRenderer(renderer: DomRenderer): void {
		this.domRenderer = renderer;
		this.applyDefaultSettings();
		this.labelPanel.labelSettings = this.labelSettings;
	}
	get formatLabel(): (item: any) => string {
		return <(item: any) => string>this.getValue(Axis.formatLabelProperty);
	}
	set formatLabel(value: (item: any) => string) {
		this.setValue(Axis.formatLabelProperty, value);
	}
	static readonly formatLabelPropertyName: string = "FormatLabel";
	static readonly formatLabelProperty: DependencyProperty = DependencyProperty.register(Axis.formatLabelPropertyName, Delegate_$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.formatLabelPropertyName, e.oldValue, e.newValue)));
	handleRectChanged(oldRect: Rect, newRect: Rect): void {
		if (!oldRect.equals1(newRect)) {
			this.viewportChangedOverride(oldRect, newRect);
		}
	}
	abstract createLabelPanel(): AxisLabelPanelBase;
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.view.onTemplateProvided();
	}
	private _rootCanvas: Canvas = null;
	get rootCanvas(): Canvas {
		return this._rootCanvas;
	}
	set rootCanvas(value: Canvas) {
		this._rootCanvas = value;
	}
	private static readonly rootCanvasName: string = "RootCanvas";
	get fastItemsSourceProvider(): IFastItemsSourceProvider {
		return this._fastItemsSourceProvider;
	}
	set fastItemsSourceProvider(value: IFastItemsSourceProvider) {
		if (this.fastItemsSourceProvider != value) {
			let oldChart: IFastItemsSourceProvider = this.fastItemsSourceProvider;
			this._fastItemsSourceProvider = value;
			this.raisePropertyChanged(Axis.fastItemsSourceProviderPropertyName, oldChart, this._fastItemsSourceProvider);
		}
	}
	private _fastItemsSourceProvider: IFastItemsSourceProvider = null;
	static readonly fastItemsSourceProviderPropertyName: string = "FastItemsSourceProvider";
	static readonly seriesViewerPropertyName: string = "SeriesViewer";
	get seriesViewer(): SeriesViewer {
		return this._seriesViewer;
	}
	set seriesViewer(value: SeriesViewer) {
		if (this.seriesViewer != value) {
			let oldChart: SeriesViewer = this.seriesViewer;
			this._seriesViewer = value;
			this.raisePropertyChanged(Axis.seriesViewerPropertyName, oldChart, this._seriesViewer);
		}
	}
	private _seriesViewer: SeriesViewer = null;
	get chart(): XamDataChart {
		return typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
	}
	set chart(value: XamDataChart) {
		this.seriesViewer = value;
	}
	readonly seriesViewer_ActualWindowRectChanged: (sender: any, e: RectChangedEventArgs) => void = null;
	private _useSmartAxis: boolean = false;
	get useSmartAxis(): boolean {
		return this._useSmartAxis;
	}
	set useSmartAxis(value: boolean) {
		if (this._useSmartAxis == value) {
			return;
		}
		this._useSmartAxis = value;
		let labelViewport: Rect = null;
		if (this.labelPanel != null && Rect.l_op_Inequality(this.labelPanel.labelViewport, null)) {
			labelViewport = this.labelPanel.labelViewport;
		}
		this.labelPanel = this.createLabelPanel();
		this.labelPanel.axis = this;
		this.labelPanel.labelSettings = this.labelSettings;
		if (Rect.l_op_Inequality(labelViewport, null)) {
			this.labelPanel.labelViewport = labelViewport;
		}
		if (this.seriesViewer != null && this.seriesViewer.view != null) {
			this.labelPanel.view.onContextProvided(this.seriesViewer.view.mainContext);
			this.refreshAxis1(true);
		}
	}
	private _smartAxisExtent: number = NaN;
	get smartAxisExtent(): number {
		return this._smartAxisExtent;
	}
	set smartAxisExtent(value: number) {
		let oldValue: number = this._smartAxisExtent;
		if (oldValue != value) {
			this._smartAxisExtent = value;
			this.actualSmartAxisExtent = value;
			this.refreshAxis1(true);
		}
	}
	private _actualSmartAxisExtent: number = 50;
	get actualSmartAxisExtent(): number {
		return this._actualSmartAxisExtent;
	}
	set actualSmartAxisExtent(value: number) {
		this._actualSmartAxisExtent = value;
	}
	private _smartAxisMinimumExtent: number = 0;
	get smartAxisMinimumExtent(): number {
		return this._smartAxisMinimumExtent;
	}
	set smartAxisMinimumExtent(value: number) {
		this._smartAxisMinimumExtent = value;
		this.refreshAxis1(true);
	}
	private _smartAxisMaximumExtent: number = 150;
	get smartAxisMaximumExtent(): number {
		return this._smartAxisMaximumExtent;
	}
	set smartAxisMaximumExtent(value: number) {
		this._smartAxisMaximumExtent = value;
		this.refreshAxis1(true);
	}
	private _smartAxisExtentType: AxisExtentType = AxisExtentType.Pixel;
	get smartAxisExtentType(): AxisExtentType {
		return this._smartAxisExtentType;
	}
	set smartAxisExtentType(value: AxisExtentType) {
		let oldValue: AxisExtentType = this._smartAxisExtentType;
		if (oldValue != value) {
			this._smartAxisExtentType = value;
			this.refreshAxis1(true);
		}
	}
	private _smartAxisAngle: number = NaN;
	get smartAxisAngle(): number {
		return this._smartAxisAngle;
	}
	set smartAxisAngle(value: number) {
		this._smartAxisAngle = value;
		this.refreshAxis();
	}
	private _actualSmartAxisAngle: number = 0;
	get actualSmartAxisAngle(): number {
		return this._actualSmartAxisAngle;
	}
	set actualSmartAxisAngle(value: number) {
		this._actualSmartAxisAngle = value;
	}
	private _smartAxisMinimumAngle: number = 0;
	get smartAxisMinimumAngle(): number {
		return this._smartAxisMinimumAngle;
	}
	set smartAxisMinimumAngle(value: number) {
		this._smartAxisMinimumAngle = value;
		this.refreshAxis();
	}
	private _smartAxisMaximumAngle: number = 180;
	get smartAxisMaximumAngle(): number {
		return this._smartAxisMaximumAngle;
	}
	set smartAxisMaximumAngle(value: number) {
		this._smartAxisMaximumAngle = value;
		this.refreshAxis();
	}
	private _smartAxisFont: FontInfo = null;
	private _smartAxisDefaultFont: FontInfo = null;
	get smartAxisFont(): FontInfo {
		if (this._smartAxisFont == null) {
			if (this._smartAxisDefaultFont == null) {
				this._smartAxisDefaultFont = this.view.getSmartAxisDefaultFont();
			}
			return this._smartAxisDefaultFont;
		}
		return this._smartAxisFont;
	}
	set smartAxisFont(value: FontInfo) {
		this._smartAxisFont = value;
		this._smartAxisFontSize = FontUtil.getFontSize(this._smartAxisFont);
		this.refreshAxis();
	}
	private _smartAxisFontName: string = "Verdana";
	get smartAxisFontName(): string {
		return this._smartAxisFontName;
	}
	set smartAxisFontName(value: string) {
		this._smartAxisFontName = value;
		let size: number = this._smartAxisFontSize;
		if (isNaN_(size)) {
			size = 12;
		}
		this.smartAxisFont.fontFamily = value;
		this.smartAxisFont.fontSize = size;
		this.labelPanel.createFontInfoMap();
		this.refreshAxis();
	}
	private _smartAxisFontSize: number = NaN;
	get smartAxisFontSize(): number {
		return this._smartAxisFontSize;
	}
	set smartAxisFontSize(value: number) {
		this._smartAxisFontSize = value;
		this.smartAxisFont = FontUtil.getFontWithNewFontSize(this.smartAxisFont, this._smartAxisFontSize);
		this.refreshAxis();
	}
	private _actualSmartAxisFontSize: number = 0;
	get actualSmartAxisFontSize(): number {
		return this._actualSmartAxisFontSize;
	}
	set actualSmartAxisFontSize(value: number) {
		this._actualSmartAxisFontSize = value;
	}
	private _smartAxisMinimumFontSize: number = 8;
	get smartAxisMinimumFontSize(): number {
		return this._smartAxisMinimumFontSize;
	}
	set smartAxisMinimumFontSize(value: number) {
		this._smartAxisMinimumFontSize = value;
		this.refreshAxis();
	}
	private _smartAxisMaximumFontSize: number = 16;
	get smartAxisMaximumFontSize(): number {
		return this._smartAxisMaximumFontSize;
	}
	set smartAxisMaximumFontSize(value: number) {
		this._smartAxisMaximumFontSize = value;
		this.refreshAxis();
	}
	private _smartAxisNumberOfStaggerLevels: number = -1;
	get smartAxisNumberOfStaggerLevels(): number {
		return this._smartAxisNumberOfStaggerLevels;
	}
	set smartAxisNumberOfStaggerLevels(value: number) {
		this._smartAxisNumberOfStaggerLevels = value;
		this.refreshAxis();
	}
	private _smartAxisMinimumStaggerLevels: number = 1;
	get smartAxisMinimumStaggerLevels(): number {
		return this._smartAxisMinimumStaggerLevels;
	}
	set smartAxisMinimumStaggerLevels(value: number) {
		this._smartAxisMinimumStaggerLevels = value;
		this.refreshAxis();
	}
	private _smartAxisMaximumStaggerLevels: number = 3;
	get smartAxisMaximumStaggerLevels(): number {
		return this._smartAxisMaximumStaggerLevels;
	}
	set smartAxisMaximumStaggerLevels(value: number) {
		this._smartAxisMaximumStaggerLevels = value;
		this.refreshAxis();
	}
	private _actualSmartAxisNumberOfStaggerLevels: number = 0;
	get actualSmartAxisNumberOfStaggerLevels(): number {
		return this._actualSmartAxisNumberOfStaggerLevels;
	}
	set actualSmartAxisNumberOfStaggerLevels(value: number) {
		this._actualSmartAxisNumberOfStaggerLevels = value;
	}
	private _smartAxisVerticalAlignment: VerticalAlignment = VerticalAlignment.Top;
	get smartAxisVerticalAlignment(): VerticalAlignment {
		return this._smartAxisVerticalAlignment;
	}
	set smartAxisVerticalAlignment(value: VerticalAlignment) {
		this._smartAxisVerticalAlignment = value;
		this.refreshAxis();
	}
	private _smartAxisTopMargin: number = 0;
	get smartAxisTopMargin(): number {
		return this._smartAxisTopMargin;
	}
	set smartAxisTopMargin(value: number) {
		this._smartAxisTopMargin = value;
		this.refreshAxis();
	}
	private _smartAxisProximityMargin: number = 2;
	get smartAxisProximityMargin(): number {
		return this._smartAxisProximityMargin;
	}
	set smartAxisProximityMargin(value: number) {
		this._smartAxisProximityMargin = value;
		this.refreshAxis();
	}
	unlockSmartAxisLabelPanel(): void {
		this.labelPanel.unlockAndRefresh();
	}
	private refreshAxis(): void {
		this.refreshAxis1(false);
	}
	private refreshAxis1(shouldResizeAxisPanel: boolean): void {
		if (shouldResizeAxisPanel) {
			this.labelPanel.unlock();
		}
		this.mustInvalidateLabels = true;
		this.refresh();
	}
	private _titleTextBlock: TextBlock = null;
	get titleTextBlock(): TextBlock {
		return this._titleTextBlock;
	}
	set titleTextBlock(value: TextBlock) {
		this._titleTextBlock = value;
	}
	get title(): string {
		return <string>this.getValue(Axis.titleProperty);
	}
	set title(value: string) {
		this.setValue(Axis.titleProperty, value);
	}
	static readonly titlePropertyName: string = "Title";
	static readonly titleProperty: DependencyProperty = DependencyProperty.register(Axis.titlePropertyName, String_$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.titlePropertyName, e.oldValue, e.newValue)));
	get stroke(): Brush {
		return <Brush>this.getValue(Axis.strokeProperty);
	}
	set stroke(value: Brush) {
		this.setValue(Axis.strokeProperty, value);
	}
	static readonly strokePropertyName: string = "Stroke";
	static readonly strokeProperty: DependencyProperty = DependencyProperty.register(Axis.strokePropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.strokePropertyName, e.oldValue, e.newValue)));
	get actualStroke(): Brush {
		return <Brush>this.getValue(Axis.actualStrokeProperty);
	}
	set actualStroke(value: Brush) {
		this.setValue(Axis.actualStrokeProperty, value);
	}
	static readonly actualStrokePropertyName: string = "ActualStroke";
	static readonly actualStrokeProperty: DependencyProperty = DependencyProperty.register(Axis.actualStrokePropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.actualStrokePropertyName, e.oldValue, e.newValue)));
	get strokeThickness(): number {
		return <number>this.getValue(Axis.strokeThicknessProperty);
	}
	set strokeThickness(value: number) {
		this.setValue(Axis.strokeThicknessProperty, value);
	}
	static readonly strokeThicknessPropertyName: string = "StrokeThickness";
	static readonly strokeThicknessProperty: DependencyProperty = DependencyProperty.register(Axis.strokeThicknessPropertyName, Number_$type, (<any>Axis).$type, new PropertyMetadata(2, DeviceUtils.toPixelUnits(2), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.strokeThicknessPropertyName, e.oldValue, e.newValue)));
	get strokeDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(Axis.strokeDashArrayProperty);
	}
	set strokeDashArray(value: DoubleCollection) {
		this.setValue(Axis.strokeDashArrayProperty, value);
	}
	static readonly strokeDashArrayPropertyName: string = "StrokeDashArray";
	static readonly strokeDashArrayProperty: DependencyProperty = DependencyProperty.register(Axis.strokeDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.strokeDashArrayPropertyName, e.oldValue, e.newValue)));
	get strip(): Brush {
		return <Brush>this.getValue(Axis.stripProperty);
	}
	set strip(value: Brush) {
		this.setValue(Axis.stripProperty, value);
	}
	static readonly stripPropertyName: string = "Strip";
	static readonly stripProperty: DependencyProperty = DependencyProperty.register(Axis.stripPropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.stripPropertyName, e.oldValue, e.newValue)));
	get majorStroke(): Brush {
		return <Brush>this.getValue(Axis.majorStrokeProperty);
	}
	set majorStroke(value: Brush) {
		this.setValue(Axis.majorStrokeProperty, value);
	}
	static readonly majorStrokePropertyName: string = "MajorStroke";
	static readonly majorStrokeProperty: DependencyProperty = DependencyProperty.register(Axis.majorStrokePropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.majorStrokePropertyName, e.oldValue, e.newValue)));
	get actualMajorStroke(): Brush {
		return <Brush>this.getValue(Axis.actualMajorStrokeProperty);
	}
	set actualMajorStroke(value: Brush) {
		this.setValue(Axis.actualMajorStrokeProperty, value);
	}
	static readonly actualMajorStrokePropertyName: string = "ActualMajorStroke";
	static readonly actualMajorStrokeProperty: DependencyProperty = DependencyProperty.register(Axis.actualMajorStrokePropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.actualMajorStrokePropertyName, e.oldValue, e.newValue)));
	get majorStrokeThickness(): number {
		return <number>this.getValue(Axis.majorStrokeThicknessProperty);
	}
	set majorStrokeThickness(value: number) {
		this.setValue(Axis.majorStrokeThicknessProperty, value);
	}
	static readonly majorStrokeThicknessPropertyName: string = "MajorStrokeThickness";
	static readonly majorStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(Axis.majorStrokeThicknessPropertyName, Number_$type, (<any>Axis).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.majorStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get majorStrokeDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(Axis.majorStrokeDashArrayProperty);
	}
	set majorStrokeDashArray(value: DoubleCollection) {
		this.setValue(Axis.majorStrokeDashArrayProperty, value);
	}
	static readonly majorStrokeDashArrayPropertyName: string = "MajorStrokeDashArray";
	static readonly majorStrokeDashArrayProperty: DependencyProperty = DependencyProperty.register(Axis.majorStrokeDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.majorStrokeDashArrayPropertyName, e.oldValue, e.newValue)));
	get minorStroke(): Brush {
		return <Brush>this.getValue(Axis.minorStrokeProperty);
	}
	set minorStroke(value: Brush) {
		this.setValue(Axis.minorStrokeProperty, value);
	}
	static readonly minorStrokePropertyName: string = "MinorStroke";
	static readonly minorStrokeProperty: DependencyProperty = DependencyProperty.register(Axis.minorStrokePropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.minorStrokePropertyName, e.oldValue, e.newValue)));
	get actualMinorStroke(): Brush {
		return <Brush>this.getValue(Axis.actualMinorStrokeProperty);
	}
	set actualMinorStroke(value: Brush) {
		this.setValue(Axis.actualMinorStrokeProperty, value);
	}
	static readonly actualMinorStrokePropertyName: string = "ActualMinorStroke";
	static readonly actualMinorStrokeProperty: DependencyProperty = DependencyProperty.register(Axis.actualMinorStrokePropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.actualMinorStrokePropertyName, e.oldValue, e.newValue)));
	get minorStrokeThickness(): number {
		return <number>this.getValue(Axis.minorStrokeThicknessProperty);
	}
	set minorStrokeThickness(value: number) {
		this.setValue(Axis.minorStrokeThicknessProperty, value);
	}
	static readonly minorStrokeThicknessPropertyName: string = "MinorStrokeThickness";
	static readonly minorStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(Axis.minorStrokeThicknessPropertyName, Number_$type, (<any>Axis).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.minorStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get minorStrokeDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(Axis.minorStrokeDashArrayProperty);
	}
	set minorStrokeDashArray(value: DoubleCollection) {
		this.setValue(Axis.minorStrokeDashArrayProperty, value);
	}
	static readonly minorStrokeDashArrayPropertyName: string = "MinorStrokeDashArray";
	static readonly minorStrokeDashArrayProperty: DependencyProperty = DependencyProperty.register(Axis.minorStrokeDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.minorStrokeDashArrayPropertyName, e.oldValue, e.newValue)));
	get tickStroke(): Brush {
		return <Brush>this.getValue(Axis.tickStrokeProperty);
	}
	set tickStroke(value: Brush) {
		this.setValue(Axis.tickStrokeProperty, value);
	}
	static readonly tickStrokePropertyName: string = "TickStroke";
	static readonly tickStrokeProperty: DependencyProperty = DependencyProperty.register(Axis.tickStrokePropertyName, (<any>Brush).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.tickStrokePropertyName, e.oldValue, e.newValue)));
	get tickStrokeThickness(): number {
		return <number>this.getValue(Axis.tickStrokeThicknessProperty);
	}
	set tickStrokeThickness(value: number) {
		this.setValue(Axis.tickStrokeThicknessProperty, value);
	}
	static readonly tickStrokeThicknessPropertyName: string = "TickStrokeThickness";
	static readonly tickStrokeThicknessProperty: DependencyProperty = DependencyProperty.register(Axis.tickStrokeThicknessPropertyName, Number_$type, (<any>Axis).$type, new PropertyMetadata(2, DeviceUtils.toPixelUnits(2), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.tickStrokeThicknessPropertyName, e.oldValue, e.newValue)));
	get tickStrokeDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(Axis.tickStrokeDashArrayProperty);
	}
	set tickStrokeDashArray(value: DoubleCollection) {
		this.setValue(Axis.tickStrokeDashArrayProperty, value);
	}
	static readonly tickStrokeDashArrayPropertyName: string = "TickStrokeDashArray";
	static readonly tickStrokeDashArrayProperty: DependencyProperty = DependencyProperty.register(Axis.tickStrokeDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.tickStrokeDashArrayPropertyName, e.oldValue, e.newValue)));
	get tickLength(): number {
		return <number>this.getValue(Axis.tickLengthProperty);
	}
	set tickLength(value: number) {
		this.setValue(Axis.tickLengthProperty, value);
	}
	static readonly tickLengthPropertyName: string = "TickLength";
	static readonly tickLengthProperty: DependencyProperty = DependencyProperty.register(Axis.tickLengthPropertyName, Number_$type, (<any>Axis).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.tickLengthPropertyName, e.oldValue, e.newValue)));
	private _actualTickLength: number = 0;
	get actualTickLength(): number {
		return this._actualTickLength;
	}
	set actualTickLength(value: number) {
		this._actualTickLength = value;
	}
	private updateActualTickLength(): void {
		if (this.tickLength > 0) {
			this.actualTickLength = this.tickLength;
			return;
		}
		let chart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (chart != null && isNaN_(this.tickLength) && this.isCategory && (this.isVertical || this.orientation == AxisOrientation.Horizontal)) {
			this.actualTickLength = chart.chartView.defaultCategoryAxisTickLength;
			return;
		}
		this.actualTickLength = 0;
	}
	get isDisabled(): boolean {
		return <boolean>this.getValue(Axis.isDisabledProperty);
	}
	set isDisabled(value: boolean) {
		this.setValue(Axis.isDisabledProperty, value);
	}
	static readonly isDisabledPropertyName: string = "IsDisabled";
	static readonly isDisabledProperty: DependencyProperty = DependencyProperty.register(Axis.isDisabledPropertyName, Boolean_$type, (<any>Axis).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.isDisabledPropertyName, e.oldValue, e.newValue)));
	get isInverted(): boolean {
		return <boolean>this.getValue(Axis.isInvertedProperty);
	}
	set isInverted(value: boolean) {
		this.setValue(Axis.isInvertedProperty, value);
	}
	private _isInvertedCached: boolean = false;
	get isInvertedCached(): boolean {
		return this._isInvertedCached;
	}
	set isInvertedCached(value: boolean) {
		this._isInvertedCached = value;
	}
	static readonly isInvertedPropertyName: string = "IsInverted";
	static readonly isInvertedProperty: DependencyProperty = DependencyProperty.register(Axis.isInvertedPropertyName, Boolean_$type, (<any>Axis).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.isInvertedPropertyName, e.oldValue, e.newValue)));
	get useEnhancedIntervalManagement(): boolean {
		return <boolean>this.getValue(Axis.useEnhancedIntervalManagementProperty);
	}
	set useEnhancedIntervalManagement(value: boolean) {
		this.setValue(Axis.useEnhancedIntervalManagementProperty, value);
	}
	static readonly useEnchancedIntervalManagementPropertyName: string = "UseEnhancedIntervalManagement";
	static readonly useEnhancedIntervalManagementProperty: DependencyProperty = DependencyProperty.register(Axis.useEnchancedIntervalManagementPropertyName, Boolean_$type, (<any>Axis).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.useEnchancedIntervalManagementPropertyName, e.oldValue, e.newValue)));
	get enhancedIntervalMinimumCharacters(): number {
		return typeGetValue(this.getValue(Axis.enhancedIntervalMinimumCharactersProperty));
	}
	set enhancedIntervalMinimumCharacters(value: number) {
		this.setValue(Axis.enhancedIntervalMinimumCharactersProperty, value);
	}
	static readonly enhancedIntervalMinimumCharactersPropertyName: string = "EnhancedIntervalMinimumCharacters";
	static readonly enhancedIntervalMinimumCharactersProperty: DependencyProperty = DependencyProperty.register(Axis.enhancedIntervalMinimumCharactersPropertyName, Number_$type, (<any>Axis).$type, new PropertyMetadata(2, -1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.enhancedIntervalMinimumCharactersPropertyName, e.oldValue, e.newValue)));
	static readonly labelSettingsPropertyName: string = "LabelSettings";
	static readonly labelSettingsProperty: DependencyProperty = DependencyProperty.register(Axis.labelSettingsPropertyName, (<any>AxisLabelSettings).$type, (<any>Axis).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.labelSettingsPropertyName, e.oldValue, e.newValue)));
	get labelSettings(): AxisLabelSettings {
		return <AxisLabelSettings>this.getValue(Axis.labelSettingsProperty);
	}
	set labelSettings(value: AxisLabelSettings) {
		this.setValue(Axis.labelSettingsProperty, value);
	}
	getDefaultLabelSettingsAngle(): number {
		return 0;
	}
	getDefaultLabelSettingsHorizontalAlignment(): HorizontalAlignment {
		if (this.isVertical) {
			return HorizontalAlignment.Right;
		}
		return HorizontalAlignment.Left;
	}
	getDefaultLabelSettingsVerticalAlignment(): VerticalAlignment {
		return VerticalAlignment.Center;
	}
	getDefaultTitleSettingsHorizontalAlignment(): HorizontalAlignment {
		return HorizontalAlignment.Center;
	}
	getDefaultTitleSettingsVerticalAlignment(): VerticalAlignment {
		return VerticalAlignment.Center;
	}
	getDefaultLabelSettingsLeftMargin(): number {
		if (this.isVertical) {
			return DeviceUtils.toPixelUnits(5);
		}
		return 0;
	}
	getDefaultLabelSettingsTopMargin(): number {
		if (!this.isVertical && !this.isAngular) {
			return DeviceUtils.toPixelUnits(5);
		}
		return 0;
	}
	getDefaultLabelSettingsRightMargin(): number {
		if (this.isVertical) {
			return DeviceUtils.toPixelUnits(5);
		}
		return 0;
	}
	getDefaultLabelSettingsBottomMargin(): number {
		if (!this.isVertical && !this.isAngular) {
			return DeviceUtils.toPixelUnits(5);
		}
		return 0;
	}
	getDefaultTitleSettingsLeftMargin(): number {
		return NaN;
	}
	getDefaultTitleSettingsTopMargin(): number {
		return NaN;
	}
	getDefaultTitleSettingsRightMargin(): number {
		return NaN;
	}
	getDefaultTitleSettingsBottomMargin(): number {
		return NaN;
	}
	getDefaultLabelSettingsLocation(): AxisLabelsLocation {
		if (this.isVertical) {
			return AxisLabelsLocation.OutsideLeft;
		}
		if (this.isRadial) {
			return AxisLabelsLocation.InsideBottom;
		}
		return AxisLabelsLocation.OutsideBottom;
	}
	getDefaultTitleSettingsLocation(): AxisLabelsLocation {
		return AxisLabelsLocation.OutsideBottom;
	}
	get crossingAxis(): Axis {
		return <Axis>this.getValue(Axis.crossingAxisProperty);
	}
	set crossingAxis(value: Axis) {
		this.setValue(Axis.crossingAxisProperty, value);
	}
	static readonly crossingAxisPropertyName: string = "CrossingAxis";
	static readonly crossingAxisProperty: DependencyProperty = DependencyProperty.register(Axis.crossingAxisPropertyName, (<any>Axis).$type, (<any>Axis).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.crossingAxisPropertyName, e.oldValue, e.newValue)));
	get crossingValue(): any {
		return this.getValue(Axis.crossingValueProperty);
	}
	set crossingValue(value: any) {
		this.setValue(Axis.crossingValueProperty, value);
	}
	static readonly crossingValuePropertyName: string = "CrossingValue";
	static readonly crossingValueProperty: DependencyProperty = DependencyProperty.register(Axis.crossingValuePropertyName, (<any>Base).$type, (<any>Axis).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.crossingValuePropertyName, e.oldValue, e.newValue)));
	rangeChanged: (sender: any, e: AxisRangeChangedEventArgs) => void = null;
	protected raiseRangeChanged(ea: AxisRangeChangedEventArgs): void {
		if (this.rangeChanged != null) {
			this.rangeChanged(this, ea);
		}
	}
	static readonly titleSettingsPropertyName: string = "TitleSettings";
	static readonly titleSettingsProperty: DependencyProperty = DependencyProperty.register(Axis.titleSettingsPropertyName, (<any>TitleSettings).$type, (<any>Axis).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.titleSettingsPropertyName, e.oldValue, e.newValue)));
	get titleSettings(): TitleSettings {
		return <TitleSettings>this.getValue(Axis.titleSettingsProperty);
	}
	set titleSettings(value: TitleSettings) {
		this.setValue(Axis.titleSettingsProperty, value);
	}
	getDefaultTitleSettingsAngle(): number {
		if (this.isVertical) {
			return -90;
		}
		return 0;
	}
	getAxisInterval(): number {
		return NaN;
	}
	get annotations(): AxisAnnotationCollection {
		return this._annotations;
	}
	private _annotations: AxisAnnotationCollection = new AxisAnnotationCollection();
	get autoAnnotations(): AxisAnnotationCollection {
		return this._autoAnnotations;
	}
	private _autoAnnotations: AxisAnnotationCollection = new AxisAnnotationCollection();
	private _viewport: Rect = Rect.empty;
	get viewportRect(): Rect {
		if (this.viewportOverride.isEmpty) {
			return this._viewport;
		}
		return this.viewportOverride;
	}
	set viewportRect(value: Rect) {
		this._viewport = value;
	}
	private _viewportOverride: Rect = null;
	get viewportOverride(): Rect {
		return this._viewportOverride;
	}
	set viewportOverride(value: Rect) {
		this._viewportOverride = value;
	}
	updateLineVisibility(): void {
		let visible: Visibility = Visibility.Visible;
		let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (dataChart != null && dataChart.gridMode == GridMode.None) {
			visible = Visibility.Collapsed;
		}
		this.view.updateLineVisibility(visible);
	}
	validateAxis(viewportRect: Rect, windowRect: Rect, view: AxisView): boolean {
		return this.seriesViewer != null;
	}
	isValid(): boolean {
		let window: Rect = Rect.empty;
		if (this.seriesViewer != null) {
			window = this.seriesViewer.windowRect;
		}
		return this.validateAxis(this.viewportRect, window, this.view);
	}
	private _labelDataContext: List$1<any> = null;
	get labelDataContext(): List$1<any> {
		return this._labelDataContext;
	}
	set labelDataContext(value: List$1<any>) {
		this._labelDataContext = value;
	}
	private _labelPositions: List$1<LabelPosition> = null;
	get labelPositions(): List$1<LabelPosition> {
		return this._labelPositions;
	}
	set labelPositions(value: List$1<LabelPosition>) {
		this._labelPositions = value;
	}
	private _labelPanel: AxisLabelPanelBase = null;
	get labelPanel(): AxisLabelPanelBase {
		return this._labelPanel;
	}
	set labelPanel(value: AxisLabelPanelBase) {
		this._labelPanel = value;
	}
	protected viewportChangedOverride(oldRect: Rect, newRect: Rect): void {
		this.viewportRect = newRect;
		this.mustInvalidateLabels = true;
		this.updateRange();
		this.renderAxis1(false);
		if (this.seriesViewer != null) {
			this.seriesViewer.chartContentManager.viewportChanged(ChartContentType.Axis, this, this.contentInfo, newRect);
		}
	}
	private _mustInvalidateLabels: boolean = false;
	get mustInvalidateLabels(): boolean {
		return this._mustInvalidateLabels;
	}
	set mustInvalidateLabels(value: boolean) {
		this._mustInvalidateLabels = value;
	}
	protected getEffectiveViewportForUnitViewport(): Rect {
		if (this.seriesViewer == null || this.seriesViewer.effectiveViewport.isEmpty) {
			return Rect.empty;
		}
		let effective = this.seriesViewer.effectiveViewport;
		let viewport = this.viewportRect;
		let left = (effective.left - viewport.left) / viewport.width;
		let top = (effective.top - viewport.top) / viewport.height;
		let right = (effective.right - viewport.left) / viewport.width;
		let bottom = (effective.bottom - viewport.top) / viewport.height;
		return new Rect(0, left, top, right - left, bottom - top);
	}
	protected windowRectChangedOverride(oldRect: Rect, newRect: Rect): void {
		this.mustInvalidateLabels = true;
		this.renderAxis1(true);
	}
	refresh(): void {
		this.renderAxis1(false);
	}
	private _contentInfo: ContentInfo = null;
	get contentInfo(): ContentInfo {
		return this._contentInfo;
	}
	set contentInfo(value: ContentInfo) {
		this._contentInfo = value;
	}
	private _domRenderer: DomRenderer = null;
	get domRenderer(): DomRenderer {
		return this._domRenderer;
	}
	set domRenderer(value: DomRenderer) {
		this._domRenderer = value;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Axis.seriesViewerPropertyName:
			let oldSeriesViewer = typeCast<SeriesViewer>((<any>SeriesViewer).$type, oldValue);
			if (oldSeriesViewer != null) {
				this.domRenderer = null;
				oldSeriesViewer.actualWindowRectChanged = delegateRemove(oldSeriesViewer.actualWindowRectChanged, this.seriesViewer_ActualWindowRectChanged);
				oldSeriesViewer.chartContentManager.unsubscribe(ChartContentType.Axis, this);
				this.view.detachFromChart(oldSeriesViewer);
			}
			let newSeriesViewer = typeCast<SeriesViewer>((<any>SeriesViewer).$type, newValue);
			if (newSeriesViewer != null) {
				this.domRenderer = newSeriesViewer.view.viewManager.container;
				newSeriesViewer.actualWindowRectChanged = delegateCombine(newSeriesViewer.actualWindowRectChanged, this.seriesViewer_ActualWindowRectChanged);
				this.contentInfo = newSeriesViewer.chartContentManager.subscribe(ChartContentType.Axis, this, runOn(this, this.doRenderAxis));
				if (this.labelSettings == null && this.domRenderer != null) {
					this.provideRenderer(this.domRenderer);
				}
				this.view.attachToChart(newSeriesViewer);
				if (this.rangeDirty && !this.contentInfo.rangeDirty) {
					this.rangeDirty = false;
					this.updateRange();
				}
				this.updateActualBrushes();
				this.updateActualTickLength();
			}
			break;

			case Axis.isDisabledPropertyName:
			this.renderAxis1(false);
			break;

			case Axis.isInvertedPropertyName:
			this.isInvertedCached = this.isInverted;
			let rangeChangedEventArgs = new AxisRangeChangedEventArgs(0, 0, 0, 1, 1);
			this.doRaiseRangeChanged(rangeChangedEventArgs);
			for (let series of fromEnum<Series>(this.series)) {
				series.invalidateAxes();
				if (series.seriesViewer != null) {
					series.notifyThumbnailAppearanceChanged();
				}
			}
			break;

			case Axis.labelPropertyName:
			this.view.onLabelChanged();
			if (typeCast<DataTemplate>((<any>DataTemplate).$type, newValue) !== null) {
				this.usingTemplate = true;
			} else {
				this.usingTemplate = false;
			}
			this.mustInvalidateLabels = true;
			this.resetLabelPanel();
			this.renderAxis1(false);
			break;

			case Axis.majorStrokeThicknessPropertyName:

			case Axis.minorStrokeThicknessPropertyName:

			case Axis.strokeThicknessPropertyName:
			this.renderAxis1(false);
			break;

			case Axis.labelSettingsPropertyName:
			let labelSettings = typeCast<AxisLabelSettings>((<any>AxisLabelSettings).$type, newValue);
			if (labelSettings != null) {
				labelSettings.registerAxis(this);
				this._currentLabelSettings = labelSettings;
			} else {
				this._currentLabelSettings = new AxisLabelSettings();
			}
			if (this.labelPanel != null) {
				this.labelPanel.labelSettings = this._currentLabelSettings;
			}
			if (this.view.ready()) {
				this.view.changeLabelSettings(this._currentLabelSettings);
			}
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case Axis.titlePropertyName:
			this.view.onTitleChange();
			break;

			case Axis.titleSettingsPropertyName:
			let titleSettings = typeCast<TitleSettings>((<any>TitleSettings).$type, newValue);
			if (titleSettings != null) {
				titleSettings.registerAxis(this);
			} else {
				titleSettings = new TitleSettings();
			}
			if (this.titleTextBlock != null) {
				this.titleTextBlock.dataContext = titleSettings;
			}
			this.view.onTitleChange();
			this.renderAxis1(false);
			break;

			case Axis.tickLengthPropertyName:
			this.mustInvalidateLabels = true;
			this.updateActualTickLength();
			this.view.labelNeedRearrange();
			this.renderAxis1(false);
			break;

			case Axis.enhancedIntervalMinimumCharactersPropertyName:

			case Axis.useEnchancedIntervalManagementPropertyName:
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case Axis.crossingAxisPropertyName:
			if (this.seriesViewer != null) {
				this.seriesViewer.invalidatePanels();
			}
			break;

			case Axis.minorStrokePropertyName:
			this.updateActualBrushes();
			if (newValue != null) {
				this.shouldRenderMinorLines = true;
				this.renderAxis1(false);
			} else {
				this.shouldRenderMinorLines = false;
			}
			break;

			case Axis.crossingValuePropertyName:
			if (this.crossingAxis != null) {
				this.crossingAxis.renderAxis();
			}
			break;

			case Axis.strokePropertyName:

			case Axis.majorStrokePropertyName:
			this.updateActualBrushes();
			this.renderAxis1(false);
			break;

			case Axis.strokeDashArrayPropertyName:

			case Axis.majorStrokeDashArrayPropertyName:

			case Axis.minorStrokeDashArrayPropertyName:

			case Axis.formatLabelPropertyName:

			case Axis.tickStrokePropertyName:

			case Axis.tickStrokeThicknessPropertyName:

			case Axis.tickStrokeDashArrayPropertyName:

			case Axis.actualStrokePropertyName:

			case Axis.actualMajorStrokePropertyName:

			case Axis.actualMinorStrokePropertyName:

			case Axis.stripPropertyName:
			this.renderAxis1(false);
			break;

			case Axis.minExtentPropertyName:
			this.view.labelNeedRearrange();
			break;

		}

	}
	private _coercionMethods: any = null;
	get coercionMethods(): any {
		return this._coercionMethods;
	}
	set coercionMethods(value: any) {
		this._coercionMethods = value;
	}
	private _expectFunctions: boolean = false;
	protected get_expectFunctions(): boolean {
		return this._expectFunctions;
	}
	protected set_expectFunctions(value: boolean): void {
		this._expectFunctions = value;
	}
	get expectFunctions(): boolean {
		return this.get_expectFunctions();
	}
	set expectFunctions(value: boolean) {
		this.set_expectFunctions(value);
	}
	private _shouldRenderMinorLines: boolean = false;
	get shouldRenderMinorLines(): boolean {
		return this._shouldRenderMinorLines;
	}
	set shouldRenderMinorLines(value: boolean) {
		this._shouldRenderMinorLines = value;
	}
	private resetLabelPanel(): void {
		this.textBlocks.count = 0;
		this.annotationTextBlocks.count = 0;
		this.annotationBackings.count = 0;
		if (this.view.ready()) {
			this.view.resetLabelPanel();
		}
	}
	private _usingTemplate: boolean = false;
	get usingTemplate(): boolean {
		return this._usingTemplate;
	}
	set usingTemplate(value: boolean) {
		this._usingTemplate = value;
	}
	protected horizontalStrip(geometry: GeometryCollection, y0: number, y1: number, viewportRect: Rect): void {
		let ymin: number = Math.min(y0, y1);
		let ymax: number = Math.max(y0, y1);
		if (ymin < viewportRect.bottom && ymax > viewportRect.top) {
			let strip: RectangleGeometry = new RectangleGeometry();
			strip.rect = new Rect(0, viewportRect.left, ymin, viewportRect.width, ymax - ymin);
			geometry.add(strip);
		}
	}
	protected horizontalLine(geometry: GeometryCollection, y: number, viewportRect: Rect, renderingInfo: PathRenderingInfo, isAxisLine: boolean): void {
		let inView: boolean = y <= viewportRect.bottom && y >= viewportRect.top;
		if (!isAxisLine && inView) {
			inView = !this.isGridLineColliding(y, renderingInfo.strokeThickness, viewportRect, false);
		}
		if (inView) {
			if (renderingInfo.alignToPixels) {
				y = this.alignLineToPixels(y, viewportRect.top, viewportRect.bottom, renderingInfo);
			}
			let line: LineGeometry = new LineGeometry();
			line.startPoint = <Point>{ $type: Point_$type, x: viewportRect.left, y: y };
			line.endPoint = <Point>{ $type: Point_$type, x: viewportRect.right, y: y };
			geometry.add(line);
		}
	}
	protected verticalStrip(geometry: GeometryCollection, x0: number, x1: number, viewportRect: Rect): void {
		let xmin: number = Math.min(x0, x1);
		let xmax: number = Math.max(x0, x1);
		if (xmax > viewportRect.left && xmin < viewportRect.right) {
			let strip: RectangleGeometry = new RectangleGeometry();
			strip.rect = new Rect(0, xmin, viewportRect.top, xmax - xmin, viewportRect.height);
			geometry.add(strip);
		}
	}
	protected verticalLine(geometry: GeometryCollection, x: number, viewportRect: Rect, renderingInfo: PathRenderingInfo, isAxisLine: boolean): void {
		let inView: boolean = x >= viewportRect.left && x <= viewportRect.right;
		if (!inView) {
			let roundedX: number = <number>truncate(Math.round(x));
			let roundedLeft: number = <number>truncate(Math.round(viewportRect.left));
			let roundedRight: number = <number>truncate(Math.round(viewportRect.right));
			if (roundedX >= roundedLeft && roundedX <= roundedRight) {
				inView = true;
			}
		}
		if (!isAxisLine && inView) {
			inView = !this.isGridLineColliding(x, renderingInfo.strokeThickness, viewportRect, true);
		}
		if (inView) {
			if (renderingInfo.alignToPixels) {
				x = this.alignLineToPixels(x, viewportRect.left, viewportRect.right, renderingInfo);
			}
			let majorLine: LineGeometry = new LineGeometry();
			majorLine.startPoint = <Point>{ $type: Point_$type, x: x, y: viewportRect.top };
			majorLine.endPoint = <Point>{ $type: Point_$type, x: x, y: viewportRect.bottom };
			geometry.add(majorLine);
		}
	}
	private isGridLineColliding(position: number, lineThickness: number, viewport: Rect, isVertical: boolean): boolean {
		let overlap: boolean = false;
		let dataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (dataChart != null && dataChart.shouldClipGridlines && !viewport.isEmpty) {
			for (let axis of fromEnum<Axis>(dataChart.axes)) {
				if (axis._visibility != Visibility.Visible || axis.strokeThickness < 1 || axis.actualStroke == null || BrushUtilCore.isFullyTransparent(axis.actualStroke) || axis.viewportRect.isEmpty) {
					continue;
				}
				if (axis.crossingAxis != null && axis.hasCrossingValue()) {
					let crossingValue = this.isVertical ? viewport.left : viewport.top;
					let relativeCrossingValue = 0;
					let $ret = axis.scaleCrossingValue(crossingValue, relativeCrossingValue, axis.seriesViewer.windowRect, viewport, axis.getCurrentEffectiveViewport(), isVertical ? viewport.left : viewport.top, isVertical ? viewport.right : viewport.bottom);
					crossingValue = $ret.p0;
					relativeCrossingValue = $ret.p1;
					let axisLineRect: Rect = Rect.empty;
					let gridLineRect: Rect = Rect.empty;
					if (isVertical && axis.isVertical) {
						axisLineRect = new Rect(0, crossingValue - (axis.strokeThickness / 2), axis.viewportRect.top, axis.strokeThickness, axis.viewportRect.height);
						gridLineRect = new Rect(0, position - (lineThickness / 2), viewport.top, lineThickness, viewport.height);
					} else if (!isVertical && !axis.isVertical) {
						axisLineRect = new Rect(0, axis.viewportRect.left, crossingValue - (axis.strokeThickness / 2), axis.viewportRect.width, axis.strokeThickness);
						gridLineRect = new Rect(0, viewport.left, position - (lineThickness / 2), viewport.width, lineThickness);
					}
					if (axisLineRect.left <= gridLineRect.right && gridLineRect.left <= axisLineRect.right && axisLineRect.top <= gridLineRect.bottom && gridLineRect.top <= axisLineRect.bottom) {
						overlap = true;
						break;
					}
				} else {
					let axisLineRect1: Rect = Rect.empty;
					let gridLineRect1: Rect = Rect.empty;
					if (isVertical && axis.isVertical) {
						axisLineRect1 = new Rect(0, axis.viewportRect.left, axis.viewportRect.top, axis.strokeThickness, axis.viewportRect.height);
						gridLineRect1 = new Rect(0, position - (lineThickness / 2), viewport.top, lineThickness, viewport.height);
					} else if (!isVertical && !axis.isVertical) {
						axisLineRect1 = new Rect(0, axis.viewportRect.left, axis.viewportRect.bottom - (axis.strokeThickness / 2), axis.viewportRect.width, axis.strokeThickness);
						gridLineRect1 = new Rect(0, viewport.left, position - (lineThickness / 2), viewport.width, lineThickness);
					}
					if (axisLineRect1.left <= gridLineRect1.right && gridLineRect1.left <= axisLineRect1.right && axisLineRect1.top <= gridLineRect1.bottom && gridLineRect1.top <= axisLineRect1.bottom) {
						overlap = true;
						break;
					}
				}
			}
		}
		return overlap;
	}
	protected scaleCrossingValue(crossingValue: number, relativeCrossingValue: number, window: Rect, viewport: Rect, effectiveViewport: Rect, constraintLeft: number, constraintRight: number): { p0: number; p1: number; } {
		let size: number = Math.abs(constraintLeft - constraintRight);
		crossingValue = <number>this.crossingValue;
		crossingValue = this.crossingAxis.scaleValue(crossingValue);
		let categoryAxis = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.crossingAxis);
		if (categoryAxis != null && categoryAxis.categoryMode == CategoryMode.Mode2) {
			let offset = 0.5 * categoryAxis.getCategorySize(window, viewport, effectiveViewport);
			let isHorizontal: boolean = categoryAxis.orientation == AxisOrientation.Horizontal;
			if (categoryAxis.isInverted == isHorizontal) {
				offset = -offset;
			}
			crossingValue = crossingValue + offset;
		}
		relativeCrossingValue = crossingValue - constraintLeft;
		if (crossingValue < constraintLeft) {
			crossingValue = constraintLeft;
		} else if (crossingValue > constraintRight) {
			crossingValue = constraintRight;
		}
		if (relativeCrossingValue < 0) {
			relativeCrossingValue = 0;
		} else if (relativeCrossingValue > size) {
			relativeCrossingValue = size;
		}
		return {
			p0: crossingValue,
			p1: relativeCrossingValue

		};
	}
	alignLineToPixels(value: number, min: number, max: number, renderingInfo: PathRenderingInfo): number {
		let result = value;
		if (renderingInfo != null && renderingInfo.strokeThickness > 0) {
			let remainder = renderingInfo.strokeThickness % 2;
			if (remainder == 0 || remainder == 1) {
				let sign: number = 1;
				result = Math.floor(value);
				if (result + 0.5 < value) {
					sign = -1;
					result = Math.ceil(value);
				}
				if (remainder == 1) {
					result += 0.5 * sign;
				}
				if (result >= max) {
					result -= 1;
				} else if (result <= min) {
					result += 1;
				}
			}
		}
		return result;
	}
	clearMarks(geometry: GeometryCollection): void {
		this.view.clearMarks(geometry);
	}
	protected clearAllMarks(): void {
		this.textBlocks.count = 0;
		this.annotationTextBlocks.count = 0;
		this.annotationBackings.count = 0;
		this.view.clearAllMarks();
		this.labelDataContext.clear();
		this.labelPositions.clear();
	}
	renderAxis(): void {
		this.renderAxis1(false);
	}
	renderAxis1(animate: boolean): void {
		if (this.seriesViewer != null) {
			this.seriesViewer.chartContentManager.refresh(ChartContentType.Axis, this, this.contentInfo, animate);
			if (this.renderRequested != null) {
				let args = new RenderRequestedEventArgs();
				args.animate = animate;
				this.renderRequested(this, args);
				animate = args.animate;
			}
		}
	}
	renderRequested: (sender: any, e: RenderRequestedEventArgs) => void = null;
	private _labelFontHeuristics: LabelFontHeuristics = null;
	get labelFontHeuristics(): LabelFontHeuristics {
		return this._labelFontHeuristics;
	}
	set labelFontHeuristics(value: LabelFontHeuristics) {
		this._labelFontHeuristics = value;
	}
	static minHeuristicResolution: number = 7;
	resolveHeuristicVerticalResolution(): number {
		if (this.labelFontHeuristics == null) {
			return -1;
		}
		if (isNaN_(this.labelFontHeuristics.labelHeight)) {
			return -1;
		}
		if (this.labelSettings != null && (this.labelSettings.angle != 0)) {
			return -1;
		}
		return Math.max(Axis.minHeuristicResolution, this.labelFontHeuristics.labelHeight);
	}
	resolveHeuristicHorizontalResolution(): number {
		if (this.labelFontHeuristics == null) {
			return -1;
		}
		if (isNaN_(this.labelFontHeuristics.labelMinimumWidth) && isNaN_(this._preciseWidthHeuristic)) {
			return -1;
		}
		if (this.labelSettings != null && (this.labelSettings.angle != 0)) {
			return -1;
		}
		let value = this.labelFontHeuristics.labelMinimumWidth;
		if (!isNaN_(this._preciseWidthHeuristic) && this.enhancedIntervalMinimumCharacters == -1) {
			return this._preciseWidthHeuristic;
		}
		return Math.max(Axis.minHeuristicResolution, this.labelFontHeuristics.labelMinimumWidth);
	}
	resolveHeuristicResolution(): number {
		if (this.isVertical) {
			return this.resolveHeuristicVerticalResolution();
		} else {
			return this.resolveHeuristicHorizontalResolution();
		}
	}
	protected get shouldUsePreciseWidthHeuristic(): boolean {
		return this.enhancedIntervalMinimumCharacters == -1;
	}
	doRenderAxis(animate: boolean): void {
		if (this.view.isDisabled()) {
			return;
		}
		let lastPos: number = 0;
		let lastCount: number = 0;
		if (this.labelPositions != null && this.labelPositions.count > 0) {
			lastPos = this.labelPositions._inner[this.labelPositions.count - 1].value;
			lastCount = this.labelPositions.count;
		}
		if (this.mustInvalidateLabels && this.useEnhancedIntervalManagement) {
			this.labelFontHeuristics = this.gatherLabelFontHeuristics();
		}
		this.renderAxisOverride(animate);
		if (!this.isVertical && this.mustInvalidateLabels && this.useEnhancedIntervalManagement && this.shouldUsePreciseWidthHeuristic) {
			if (this.ensurePreciseWidthHeuristic()) {
				this.renderAxisOverride(animate);
			}
		}
		let currPos: number = 1;
		let currCount: number = 0;
		if (this.labelPositions != null && this.labelPositions.count > 0) {
			currPos = this.labelPositions._inner[this.labelPositions.count - 1].value;
			currCount = this.labelPositions.count;
		}
		if (this.useSmartAxis) {
			this.mustInvalidateLabels = true;
		}
		let markedLabelsForRearrange: boolean = false;
		if (currPos != lastPos || currCount != lastCount || this.mustInvalidateLabels) {
			this.mustInvalidateLabels = false;
			if (this.view.ready()) {
				this.view.labelNeedRearrange();
				markedLabelsForRearrange = true;
			}
		}
		this.view.ensureRender();
		if (!markedLabelsForRearrange) {
			this.ensureExtentUpdated();
		}
	}
	private _preciseWidthHeuristic: number = NaN;
	private ensurePreciseWidthHeuristic(): boolean {
		if (!isNaN_(this._preciseWidthHeuristic) || this.labelDataContext == null || this.labelDataContext.count == 0) {
			return false;
		}
		let fontInfo = this.getFontInfo();
		if (fontInfo == null) {
			return false;
		}
		let maxWidth: number = -1.7976931348623157E+308;
		for (let i = 0; i < this.labelDataContext.count; i++) {
			let context = this.labelDataContext._inner[i];
			if (typeof context === 'string') {
				let width = FontUtil.measureStringWidth(<string>context, fontInfo, this.view.context);
				maxWidth = Math.max(width, maxWidth);
			}
		}
		maxWidth += 5;
		if (this.labelSettings != null) {
			maxWidth += this.labelSettings.leftMargin + this.labelSettings.rightMargin;
		}
		this._preciseWidthHeuristic = maxWidth;
		return true;
	}
	resetCachedEnhancedInterval(): void {
		this._preciseWidthHeuristic = NaN;
		this.renderAxis1(false);
	}
	private _priorHeuristicLength: number = -1;
	gatherLabelFontHeuristics(): LabelFontHeuristics {
		let fontInfo = this.getFontInfo();
		if (fontInfo == null) {
			return null;
		}
		let wideChar = "W";
		let wideCharWidth = FontUtil.measureStringWidth(wideChar, fontInfo, this.view.context);
		if (this._priorHeuristicLength != wideCharWidth || this.labelFontHeuristics == null) {
			this._priorHeuristicLength = wideCharWidth;
			let mainHeight = FontUtil.getCurrentFontHeight(this.seriesViewer.view.viewManager.container, fontInfo);
			if (this.labelFontHeuristics == null) {
				this.labelFontHeuristics = new LabelFontHeuristics();
			}
			this.labelFontHeuristics.labelHeight = mainHeight;
			this.labelFontHeuristics.labelMinimumDesiredCharacters = this.enhancedIntervalMinimumCharacters;
			this.labelFontHeuristics.labelWidestCharacterGuess = wideCharWidth;
			this.labelFontHeuristics.labelMinimumWidth = this.labelFontHeuristics.labelWidestCharacterGuess * this.labelFontHeuristics.labelMinimumDesiredCharacters;
		}
		return this.labelFontHeuristics;
	}
	getFontInfo(): FontInfo {
		let font: FontInfo = null;
		if (this.seriesViewer != null) {
			font = this.seriesViewer.getFontInfo();
		}
		if (this.labelSettings != null && this.labelSettings.hasFontInfo) {
			if (this.seriesViewer != null) {
				font = this.labelSettings.getFontInfo(this.seriesViewer.view.viewManager.container);
			}
		}
		return font;
	}
	private ensureExtentUpdated(): void {
		if (!this.view.ready()) {
			return;
		}
		if (!this.hasUserExtent()) {
			this.view.ensureAutoExtent();
		}
	}
	private _rangeDirty: boolean = false;
	get rangeDirty(): boolean {
		return this._rangeDirty;
	}
	set rangeDirty(value: boolean) {
		this._rangeDirty = value;
	}
	updateRange(): boolean {
		return this.updateRange1(false);
	}
	updateRange1(immediate: boolean): boolean {
		if (immediate || this.seriesViewer == null) {
			let ret: boolean = this.updateRangeOverride();
			if (ret) {
				this.mustInvalidateLabels = true;
			}
			this.rangeDirty = false;
			return ret;
		}
		if (!this.rangeDirty) {
			this.rangeDirty = true;
			this.seriesViewer.chartContentManager.rangeDirty(this, this.contentInfo);
		}
		return false;
	}
	updateRangeOverride(): boolean {
		return false;
	}
	protected renderAxisOverride(animate: boolean): void {
		if (this.titleTextBlock != null) {
			if ((this.titleSettings == null || this.titleSettings.visibility == Visibility.Visible) && (this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.title != null) {
				this.titleTextBlock._visibility = Visibility.Visible;
			} else {
				this.titleTextBlock._visibility = Visibility.Collapsed;
			}
		}
	}
	updateActualBrushes(): void {
		let chart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (chart == null) {
			return;
		}
		let stroke: Brush = null, majorStroke: Brush = null, minorStroke: Brush = null;
		if (this.isCategory && !this.isAngular) {
			stroke = chart.defaultAxisStroke;
			for (let series of fromEnum<Series>(this.series)) {
				if (series.isScatter || series.isRadial || series.isPolar || series.isRadial) {
					majorStroke = chart.defaultAxisMajorStroke;
					minorStroke = chart.defaultAxisMinorStroke;
					break;
				}
			}
		} else if (this.isNumeric && !this.isAngular) {
			majorStroke = chart.defaultAxisMajorStroke;
			minorStroke = chart.defaultAxisMinorStroke;
			stroke = this.crossingAxis != null ? chart.defaultAxisStroke : null;
			for (let series1 of fromEnum<Series>(this.series)) {
				if (series1.isScatter || series1.isRadial || series1.isPolar || series1.isRadial) {
					stroke = chart.defaultAxisStroke;
					break;
				}
			}
		} else if (this.isAngular || this.orientation == AxisOrientation.Radial) {
			stroke = chart.defaultAxisStroke;
			majorStroke = chart.defaultAxisMajorStroke;
			minorStroke = chart.defaultAxisMinorStroke;
		}
		this.actualStroke = this.stroke != null ? this.stroke : stroke;
		this.actualMajorStroke = this.majorStroke != null ? this.majorStroke : majorStroke;
		this.actualMinorStroke = this.minorStroke != null ? this.minorStroke : minorStroke;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
	private _series: List$1<Series> = null;
	get series(): List$1<Series> {
		return this._series;
	}
	set series(value: List$1<Series>) {
		this._series = value;
	}
	registerSeries(series: Series): boolean {
		let present: boolean = this.series.contains(series);
		if (!present) {
			this.series.add(series);
		}
		this.updateActualBrushes();
		return !present;
	}
	deregisterSeries(series: Series): boolean {
		let present: boolean = this.series.contains(series);
		if (present) {
			this.series.remove(series);
		}
		this.updateActualBrushes();
		return present;
	}
	static readonly labelPropertyName: string = "Label";
	static readonly labelProperty: DependencyProperty = DependencyProperty.register(Axis.labelPropertyName, (<any>Base).$type, (<any>Axis).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Axis>sender).raisePropertyChanged(Axis.labelPropertyName, e.oldValue, e.newValue)));
	get label(): any {
		return this.getValue(Axis.labelProperty);
	}
	set label(value: any) {
		this.setValue(Axis.labelProperty, value);
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == Axis.labelPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, <string>this.label);
		}
		return null;
	}
	private _memberPathMap: Dictionary$2<string, string> = new Dictionary$2<string, string>(String_$type, String_$type, 0);
	protected resolveMemberPath(memberPathName: string): string {
		if (!this._memberPathMap.containsKey(memberPathName)) {
			let resolved = memberPathName.charAt(0).toUpperCase() + memberPathName.substr(1);
			this._memberPathMap.addItem(memberPathName, resolved);
		}
		return this._memberPathMap.item(memberPathName);
	}
	private _helpers: Dictionary$2<string, FastReflectionHelper> = new Dictionary$2<string, FastReflectionHelper>(String_$type, (<any>FastReflectionHelper).$type, 0);
	protected getItemValueByMemberPath(item: any, memberPathName: string, memberPathValue: string): any {
		let helper: FastReflectionHelper = null;
		if (!this._helpers.containsKey(memberPathName)) {
			helper = new FastReflectionHelper(false, memberPathValue);
			this._helpers.addItem(memberPathName, helper);
		} else {
			helper = this._helpers.item(memberPathName);
		}
		helper.propertyName = memberPathValue;
		return helper.getPropertyValue(item);
	}
	getLabel(dataItem: any): any {
		return this.view.getLabelValue(dataItem);
	}
	getValueLabel(value: number): string {
		return this.view.getValueLabel(value);
	}
	resolveActualInterval(): number {
		return NaN;
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		return 0;
	}
	getScaledValue1(unscaledValue: number, p: ScalerParams, categoryMode: CategoryMode): number {
		return 0;
	}
	getCurrentEffectiveViewportForViewport(forViewport: Rect): Rect {
		if (this.seriesViewer == null) {
			return Rect.empty;
		}
		if (!forViewport.equals1(this.viewportRect)) {
			return Rect.empty;
		}
		return this.seriesViewer.effectiveViewport;
	}
	getCurrentEffectiveViewport(): Rect {
		if (this.seriesViewer == null) {
			return Rect.empty;
		}
		return this.seriesViewer.effectiveViewport;
	}
	getContentViewport(): Rect {
		if (this.seriesViewer == null || this.seriesViewer.contentViewport.isEmpty) {
			return this.viewportRect;
		}
		return this.seriesViewer.contentViewport;
	}
	protected getInitialSafeViewport(viewport: Rect, effectiveViewport: Rect): Rect {
		if (effectiveViewport.isEmpty) {
			return viewport;
		}
		return effectiveViewport;
	}
	getScaledValue2(unscaledValue: number, windowRect: Rect, viewportRect: Rect): number {
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewportForViewport(viewportRect);
		let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		return this.getScaledValue(unscaledValue, p);
	}
	getScaledValueList(unscaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
	}
	getScaledBucketValueList(unscaledValues: IList$1<number[]>, bucketIndexes: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		return 0;
	}
	getUnscaledValue1(scaledValue: number, p: ScalerParams, categoryMode: CategoryMode): number {
		return 0;
	}
	getUnscaledValue2(scaledValue: number, windowRect: Rect, viewportRect: Rect): number {
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewportForViewport(viewportRect);
		let p: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		return this.getUnscaledValue(scaledValue, p);
	}
	getUnscaledValueList(scaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
	}
	scaleValue(unscaledValue: number): number {
		let effectiveViewportRect = this.getCurrentEffectiveViewport();
		let p: ScalerParams = new ScalerParams(0, this.seriesViewer.windowRect, this.viewportRect, this.isInverted, effectiveViewportRect);
		return this.getScaledValue(unscaledValue, p);
	}
	abstract get orientation(): AxisOrientation;
	private _measuredSize: Size = new Size();
	get measuredSize(): Size {
		return this._measuredSize;
	}
	set measuredSize(value: Size) {
		this._measuredSize = value;
	}
	overrideViewport(): void {
		this.viewportOverride = new Rect(0, 0, 0, this.measuredSize.width, this.measuredSize.height);
	}
	_axisComponentsForView: AxisComponentsForView = new AxisComponentsForView();
	getAxisComponentsForView(): AxisComponentsForView {
		this._axisComponentsForView.labelPanel = this.labelPanel;
		return this._axisComponentsForView;
	}
	private _extentOverride: number = 0;
	get extentOverride(): number {
		return this._extentOverride;
	}
	set extentOverride(value: number) {
		this._extentOverride = value;
	}
	private static readonly minExtentPropertyName: string = "MinExtent";
	private _minExtent: number = 0;
	get minExtent(): number {
		return this._minExtent;
	}
	set minExtent(value: number) {
		let oldValue: number = this.minExtent;
		if (value != oldValue) {
			this._minExtent = value;
			this.raisePropertyChanged(Axis.minExtentPropertyName, oldValue, this.minExtent);
		}
	}
	hasUserExtent(): boolean {
		if (!isNaN_(this.extentOverride)) {
			return true;
		}
		if (this.labelSettings == null) {
			return false;
		} else {
			return this.labelSettings.hasUserExtent();
		}
	}
	getUserExtent(): number {
		if (!isNaN_(this.extentOverride)) {
			return this.extentOverride;
		}
		if (this.labelSettings == null) {
			return 50;
		}
		return this.labelSettings.extent;
	}
	protected applyDefaultSettings(): void {
		this.view.applyDefaultSettings();
	}
	doRaiseRangeChanged(rangeChangedEventArgs: AxisRangeChangedEventArgs): void {
		this.raiseRangeChanged(rangeChangedEventArgs);
	}
	private _textBlocks: Pool$1<TextBlock> = null;
	get textBlocks(): Pool$1<TextBlock> {
		return this._textBlocks;
	}
	set textBlocks(value: Pool$1<TextBlock>) {
		this._textBlocks = value;
	}
	private _annotationTextBlocks: Pool$1<TextBlock> = null;
	get annotationTextBlocks(): Pool$1<TextBlock> {
		return this._annotationTextBlocks;
	}
	set annotationTextBlocks(value: Pool$1<TextBlock>) {
		this._annotationTextBlocks = value;
	}
	private _annotationBackings: Pool$1<Rectangle> = null;
	get annotationBackings(): Pool$1<Rectangle> {
		return this._annotationBackings;
	}
	set annotationBackings(value: Pool$1<Rectangle>) {
		this._annotationBackings = value;
	}
	get axisLines(): Path {
		return this.getAxisComponentsFromView().axisLines;
	}
	get majorLines(): Path {
		return this.getAxisComponentsFromView().majorLines;
	}
	get strips(): Path {
		return this.view.getAxisComponentsFromView().strips;
	}
	get minorLines(): Path {
		return this.getAxisComponentsFromView().minorLines;
	}
	getSyncSettings(): SyncSettings {
		return SyncManager.getSyncSettings(this._seriesViewer);
	}
	getAxisComponentsFromView(): AxisComponentsFromView {
		return this.view.getAxisComponentsFromView();
	}
	private _currentLabelSettings: AxisLabelSettings = new AxisLabelSettings();
	get currentLabelSettings(): AxisLabelSettings {
		return this._currentLabelSettings;
	}
	provideContext(context: RenderingContext, hitContext: RenderingContext): void {
		if (this.labelPanel != null) {
			this.labelPanel.provideContext(context);
		}
		this.view.onContextProvided(context, hitContext);
	}
	hasCrossingValue(): boolean {
		return this.crossingValue != null;
	}
	exportVisualData(): any {
		return this.axisVisualDataManager.exportVisualData(this);
	}
	private *_directSeries(): IterableIterator<any> {
		for (let i = 0; i < this.series.count; i++) {
			let currentSeries = this.series._inner[i];
			yield currentSeries;
		}
	}
	directSeries(): IEnumerable$1<Series> {
		return toEnum(() => this._directSeries());
	}
	provideDateTimeMemberPath(memberPath: string): void {
	}
	provideValidRangeMinimum(minimumValue: any): void {
	}
	provideValidRangeMaximum(maximumValue: any): void {
	}
	private _culture: CultureInfo = null;
	get culture(): CultureInfo {
		return this._culture;
	}
	set culture(value: CultureInfo) {
		this._culture = value;
	}
	getOverlayGeometry(scaledValue: number, windowRect: Rect, viewport: Rect, effectiveViewport: any = null, contentViewport: any = null): Geometry {
		if (this.isVertical) {
			let lineGeometry: LineGeometry = new LineGeometry();
			lineGeometry.startPoint = <Point>{ $type: Point_$type, x: viewport.left, y: scaledValue };
			lineGeometry.endPoint = <Point>{ $type: Point_$type, x: viewport.right, y: scaledValue };
			return lineGeometry;
		} else {
			let lineGeometry1: LineGeometry = new LineGeometry();
			lineGeometry1.startPoint = <Point>{ $type: Point_$type, x: scaledValue, y: viewport.bottom };
			lineGeometry1.endPoint = <Point>{ $type: Point_$type, x: scaledValue, y: viewport.top };
			return lineGeometry1;
		}
	}
}

/**
 * @hidden 
 */
export class AxisCollection extends ObservableCollection$1<Axis> {
	static $t: Type = markType(AxisCollection, 'AxisCollection', (<any>ObservableCollection$1).$type.specialize((<any>Axis).$type));
	constructor() {
		super((<any>Axis).$type, 0);
		this.propertyChanged = delegateCombine(this.propertyChanged, (o: any, e: PropertyChangedEventArgs) => {
			if (e.propertyName == "Name") {
				for (let i: number = 0; i < this.count; ++i) {
					if (this._inner[i].name == e.propertyName) {
						this.onCollectionChanged(new NotifyCollectionChangedEventArgs(2, NotifyCollectionChangedAction.Replace, this._inner[i], this._inner[i], i));
					}
				}
			}
		});
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
export class AxisLabelManager extends Base {
	static $t: Type = markType(AxisLabelManager, 'AxisLabelManager');
	private _labelDataContext: List$1<any> = null;
	get labelDataContext(): List$1<any> {
		return this._labelDataContext;
	}
	set labelDataContext(value: List$1<any>) {
		this._labelDataContext = value;
	}
	private _labelPositions: List$1<LabelPosition> = null;
	get labelPositions(): List$1<LabelPosition> {
		return this._labelPositions;
	}
	set labelPositions(value: List$1<LabelPosition>) {
		this._labelPositions = value;
	}
	private _targetPanel: AxisLabelPanelBase = null;
	get targetPanel(): AxisLabelPanelBase {
		return this._targetPanel;
	}
	set targetPanel(value: AxisLabelPanelBase) {
		this._targetPanel = value;
	}
	private _axis: Axis = null;
	get axis(): Axis {
		return this._axis;
	}
	set axis(value: Axis) {
		this._axis = value;
	}
	private _floatPanelAction: (arg1: number) => void = null;
	get floatPanelAction(): (arg1: number) => void {
		return this._floatPanelAction;
	}
	set floatPanelAction(value: (arg1: number) => void) {
		this._floatPanelAction = value;
	}
	constructor() {
		super();
		this.floatPanelAction = (crossing: number) => {
		};
	}
	clear(windowRect: Rect, viewportRect: Rect): void {
		this.labelDataContext.clear();
		this.labelPositions.clear();
		this.targetPanel.axis = this.axis;
		this.targetPanel.windowRect = windowRect;
		this.targetPanel.viewportRect = viewportRect;
		if (viewportRect.isEmpty || windowRect.isEmpty) {
			this.setTextBlockCount(0);
			this.axis.annotationTextBlocks.count = 0;
			this.axis.annotationBackings.count = 0;
		}
		if (this.axis.textBlocks.count == 0 && this.axis.annotationTextBlocks.count == 0) {
			this.targetPanel.children.clear();
		}
	}
	addLabelObject(labelObject: any, position: LabelPosition): void {
		this.labelDataContext.add1(labelObject);
		this.labelPositions.add(position);
	}
	updateLabelPanel(): void {
		this.targetPanel.labelDataContext = this.labelDataContext;
		this.targetPanel.labelPositions = this.labelPositions;
	}
	static bindLabel(label: FrameworkElement): void {
		AxisLabelManager.bindLabel1(label, false);
	}
	private static bindLabel1(label: FrameworkElement, isTitle: boolean): void {
	}
	static bindTitleLabel(label: FrameworkElement): void {
		AxisLabelManager.bindLabel1(label, true);
	}
	addLabel(label: FrameworkElement): void {
		this.targetPanel.children.add(label);
	}
	setLabelInterval(p: number): void {
		this.targetPanel.interval = p;
	}
	floatPanel(crossingValue: number): void {
		this.floatPanelAction(crossingValue);
	}
	getTextBlock(i: number): FrameworkElement {
		let tb: TextBlock = this.axis.textBlocks.item(i);
		return tb;
	}
	setTextBlockCount(p: number): void {
		if (this.axis == null) {
			return;
		}
		this.axis.textBlocks.count = p;
	}
	get labelsHidden(): boolean {
		if (this.axis == null || this.axis.labelSettings == null) {
			return false;
		}
		return this.axis.labelSettings.visibility != Visibility.Visible;
	}
	resetLabels(): void {
		this.axis.textBlocks.count = 0;
		this.axis.annotationTextBlocks.count = 0;
		this.axis.annotationBackings.count = 0;
		this.axis.labelPanel.textBlocks.clear();
	}
	notifyMustRefresh(): void {
		this.axis.mustInvalidateLabels = true;
	}
	addAnnotations(): void {
		this.axis.addAnnotations();
	}
}

/**
 * @hidden 
 */
export abstract class AxisLabelPanelBase extends Panel {
	static $t: Type = markType(AxisLabelPanelBase, 'AxisLabelPanelBase', (<any>Panel).$type);
	createView(): AxisLabelPanelBaseView {
		return new AxisLabelPanelBaseView(this);
	}
	onViewCreated(view: AxisLabelPanelBaseView): void {
	}
	private _view: AxisLabelPanelBaseView;
	get view(): AxisLabelPanelBaseView {
		return this._view;
	}
	set view(value: AxisLabelPanelBaseView) {
		this._view = value;
	}
	private _finalBoundsFromLabelArranger: Rect = null;
	get finalBoundsFromLabelArranger(): Rect {
		return this._finalBoundsFromLabelArranger;
	}
	set finalBoundsFromLabelArranger(value: Rect) {
		this._finalBoundsFromLabelArranger = value;
	}
	createFontInfoMap(): void {
	}
	unlockAndRefresh(): void {
	}
	unlock(): void {
	}
	constructor() {
		super();
		this.cachedOverlayExtent = NaN;
		this.viewportRect = Rect.empty;
		this.labelViewport = Rect.empty;
		this.view = this.createView();
		this.onViewCreated(this.view);
		this.view.onInit();
		this.textBlocks = new List$1<FrameworkElement>((<any>FrameworkElement).$type, 0);
		this.labelPositions = new List$1<LabelPosition>((<any>LabelPosition).$type, 0);
		this.labelBounds = new List$1<Rect>((<any>Rect).$type, 0);
		this.useStaggering = false;
		this.useRotation = false;
		this.useWrapping = false;
		this.foundCollisions = false;
		this._widthAndHeightAreSet = false;
	}
	private _interval: number = 0;
	get interval(): number {
		return this._interval;
	}
	set interval(value: number) {
		this._interval = value;
	}
	private _axis: Axis = null;
	get axis(): Axis {
		return this._axis;
	}
	set axis(value: Axis) {
		this._axis = value;
	}
	private _widthAndHeightAreSet: boolean = false;
	get widthAndHeightAreSet(): boolean {
		return this._widthAndHeightAreSet;
	}
	set widthAndHeightAreSet(value: boolean) {
		this._widthAndHeightAreSet = value;
	}
	private _labelDatacontext: List$1<any> = null;
	get labelDataContext(): List$1<any> {
		return this._labelDatacontext;
	}
	set labelDataContext(value: List$1<any>) {
		let oldValue: List$1<any> = this._labelDatacontext;
		this._labelDatacontext = value;
		if (oldValue == null && oldValue != value) {
			this.makeDirty();
		}
	}
	private _labelPositions: List$1<LabelPosition> = null;
	get labelPositions(): List$1<LabelPosition> {
		return this._labelPositions;
	}
	set labelPositions(value: List$1<LabelPosition>) {
		this._labelPositions = value;
	}
	private _viewportRect: Rect = null;
	get viewportRect(): Rect {
		return this._viewportRect;
	}
	set viewportRect(value: Rect) {
		this._viewportRect = value;
	}
	private _windowRect: Rect = Rect.empty;
	get windowRect(): Rect {
		return this._windowRect;
	}
	set windowRect(value: Rect) {
		let old: Rect = this._windowRect;
		this._windowRect = value;
		this.windowRectChanged(old, this._windowRect);
	}
	private _labelViewport: Rect = null;
	get labelViewport(): Rect {
		return this._labelViewport;
	}
	set labelViewport(value: Rect) {
		let old: Rect = this._labelViewport;
		this._labelViewport = value;
		this.labelViewportSizeChanged(old, this._labelViewport);
	}
	private _crossingValue: number = 0;
	get crossingValue(): number {
		return this._crossingValue;
	}
	set crossingValue(value: number) {
		this._crossingValue = value;
	}
	private _seriesViewerSizeChanged: () => boolean = null;
	get seriesViewerSizeChanged(): () => boolean {
		return this._seriesViewerSizeChanged;
	}
	set seriesViewerSizeChanged(value: () => boolean) {
		this._seriesViewerSizeChanged = value;
	}
	private _textBlocks: List$1<FrameworkElement> = null;
	get textBlocks(): List$1<FrameworkElement> {
		return this._textBlocks;
	}
	set textBlocks(value: List$1<FrameworkElement>) {
		this._textBlocks = value;
	}
	private _labelBounds: List$1<Rect> = null;
	get labelBounds(): List$1<Rect> {
		return this._labelBounds;
	}
	set labelBounds(value: List$1<Rect>) {
		this._labelBounds = value;
	}
	private _labelSettings: AxisLabelSettings = null;
	get labelSettings(): AxisLabelSettings {
		return this._labelSettings;
	}
	set labelSettings(value: AxisLabelSettings) {
		this._labelSettings = value;
	}
	private _foundCollisions: boolean = false;
	get foundCollisions(): boolean {
		return this._foundCollisions;
	}
	set foundCollisions(value: boolean) {
		this._foundCollisions = value;
	}
	private _useRotation: boolean = false;
	get useRotation(): boolean {
		return this._useRotation;
	}
	set useRotation(value: boolean) {
		this._useRotation = value;
	}
	private _useStaggering: boolean = false;
	get useStaggering(): boolean {
		return this._useStaggering;
	}
	set useStaggering(value: boolean) {
		this._useStaggering = value;
	}
	private _useWrapping: boolean = false;
	get useWrapping(): boolean {
		return this._useWrapping;
	}
	set useWrapping(value: boolean) {
		this._useWrapping = value;
	}
	private _longestTextBlock: any = null;
	get longestTextBlock(): any {
		return this._longestTextBlock;
	}
	set longestTextBlock(value: any) {
		this._longestTextBlock = value;
	}
	private _areLabelsUnevenlySpaced: boolean = false;
	get areLabelsUnevenlySpaced(): boolean {
		return this._areLabelsUnevenlySpaced;
	}
	set areLabelsUnevenlySpaced(value: boolean) {
		this._areLabelsUnevenlySpaced = value;
	}
	protected detectCollisions(rectangles: List$1<Rect>, isOverlay: List$1<boolean>): boolean {
		for (let i: number = 0; i < rectangles.count - 1; i++) {
			if (isOverlay._inner[i]) {
				continue;
			}
			for (let j: number = i; j < rectangles.count - 1; j++) {
				if (isOverlay._inner[j + 1]) {
					continue;
				}
				if (rectangles._inner[i].intersectsWith(rectangles._inner[j + 1])) {
					return true;
				}
			}
		}
		return false;
	}
	protected staggerLabels(largestHeight: number, rectangles: List$1<Rect>, isOverlay: List$1<boolean>): { ret: number; p1?: List$1<Rect>; } {
		return {
			ret: 0,
			p1: rectangles

		};
	}
	createBoundsRectangles(): List$1<Rect> {
		return null;
	}
	bindExtent(): void {
	}
	applyPanelRotation(finalSize: Size): void {
	}
	getEffectiveAngle(): number {
		return this.labelSettings != null ? this.labelSettings.angle : 0;
	}
	getTitleEffectiveAngle(): number {
		return this.axis.titleSettings != null ? this.axis.titleSettings.angle : 0;
	}
	shouldDisplay(index: number, bounds: Rect): boolean {
		if (index == 0 && !this.axis.isAngular && this.labelSettings != null) {
			if (this.axis.isVertical) {
				if (!this.labelSettings.showFirstLabel && this.axis.seriesViewer.getActualWindowScaleVertical() == 1) {
					return false;
				}
			} else {
				if (!this.labelSettings.showFirstLabel && this.axis.seriesViewer.getActualWindowScaleHorizontal() == 1) {
					return false;
				}
			}
		}
		return true;
	}
	getDesiredWidth(element: any): number {
		return this.view.getDesiredWidth(element);
	}
	getWidthBounds(element: any): number {
		return this.view.getWidthBounds(element);
	}
	getHeightBounds(element: any): number {
		return this.view.getHeightBounds(element);
	}
	getDesiredHeight(element: any): number {
		return this.view.getDesiredHeight(element);
	}
	isHorizontalPanel(): boolean {
		return false;
	}
	protected windowRectChanged(oldRect: Rect, newRect: Rect): void {
	}
	protected labelViewportSizeChanged(oldRect: Rect, newRect: Rect): void {
	}
	determineLabelBounds(): List$1<Rect> {
		if (this.children.count < 1 || this.labelPositions.count == 0) {
			return new List$1<Rect>((<any>Rect).$type, 0);
		}
		this.textBlocks = new List$1<FrameworkElement>((<any>FrameworkElement).$type, 0);
		this.labelBounds = new List$1<Rect>((<any>Rect).$type, 0);
		this.bindExtent();
		this.view.determineLongestLabel();
		let angle: number = this.getEffectiveAngle();
		if (angle % 360 == 0) {
			this.useRotation = false;
		}
		if (this.textBlocks.count == 0) {
			return new List$1<Rect>((<any>Rect).$type, 0);
		}
		this.labelBounds = this.createBoundsRectangles();
		this._widthAndHeightAreSet = true;
		return this.labelBounds;
	}
	getRotatedRectWidth(angleDegrees: number, rect: Size): number {
		let rad: number = angleDegrees * (Math.PI / 180);
		let rotatedTitleWidth: number = Math.abs(rect.width * Math.cos(rad)) + Math.abs(rect.height * Math.sin(rad));
		return rotatedTitleWidth;
	}
	getRotatedRectHeight(angleDegrees: number, rect: Size): number {
		let rad = angleDegrees * (Math.PI / 180);
		let rotatedTitleHeight = Math.abs(rect.height * Math.cos(rad)) + Math.abs(rect.width * Math.sin(rad));
		return rotatedTitleHeight;
	}
	getTitleWidth(): number {
		let titleWidth = this.view.getAxisTitleDesiredWidth();
		return titleWidth;
	}
	getTitleHeight(): number {
		let titleHeight = this.view.getAxisTitleDesiredHeight();
		return titleHeight;
	}
	getTitleHeightBounds(): number {
		if (this.axis.title == null || (this.axis.titleSettings != null && this.axis.titleSettings.visibility == Visibility.Collapsed)) {
			return 0;
		}
		let height = this.getTitleHeight();
		let width = this.getTitleWidth();
		let rect = new Rect(0, 0, 0, width, height);
		let angleDegrees = this.getTitleEffectiveAngle();
		let rotated = RectUtil.rotateAboutCenter(rect, angleDegrees);
		return rotated.height + this.view.getTitleTopMargin() + this.view.getTitleBottomMargin();
	}
	getTitleWidthBounds(): number {
		if (this.axis.title == null || (this.axis.titleSettings != null && this.axis.titleSettings.visibility == Visibility.Collapsed)) {
			return 0;
		}
		let height = this.getTitleHeight();
		let width = this.getTitleWidth();
		let rect = new Rect(0, 0, 0, width, height);
		let angleDegrees = this.getTitleEffectiveAngle();
		let rotated = RectUtil.rotateAboutCenter(rect, angleDegrees);
		return rotated.width + this.view.getTitleLeftMargin() + this.view.getTitleRightMargin();
	}
	arrangeLabels(finalSize: Size): Size {
		if (this.axis == null || this.children.count == 0) {
			return finalSize;
		}
		this.arrangeTitle(finalSize);
		this.createTicks();
		this.arrangeTicks(finalSize);
		this.labelBounds = this.determineLabelBounds();
		if (this.textBlocks.count != this.labelBounds.count) {
			return finalSize;
		}
		let leftMargin = this.view.getLabelLeftMargin();
		let topMargin = this.view.getLabelTopMargin();
		let rightMargin = this.view.getLabelRightMargin();
		let botomMargin = this.view.getLabelBottomMargin();
		if (this.useRotation) {
			for (let i: number = 0; i < this.textBlocks.count; i++) {
				if (this.shouldDisplay(i, this.labelBounds._inner[i])) {
					this.view.arrangeTextToBounds(this.textBlocks._inner[i], this.labelBounds._inner[i], leftMargin, topMargin, rightMargin, botomMargin);
				}
				this.setLabelRotationTransform(this.textBlocks._inner[i], this.getEffectiveAngle());
			}
		}
		for (let i1: number = 0; i1 < this.textBlocks.count; i1++) {
			if (!this.useRotation) {
				this.view.clearTransforms(this.textBlocks._inner[i1]);
			}
			if (this.shouldDisplay(i1, this.labelBounds._inner[i1])) {
				this.view.arrangeTextToBounds(this.textBlocks._inner[i1], this.labelBounds._inner[i1], leftMargin, topMargin, rightMargin, botomMargin);
			} else {
				this.view.arrangeTextToBounds(this.textBlocks._inner[i1], new Rect(0, 0, 0, 0, 0), leftMargin, topMargin, rightMargin, botomMargin);
			}
		}
		if (this.axis.annotationTextBlocks.count > 0) {
			this.axis.axisAnnotationManager.arrangeAnnotations(this.axis, this.view, this.textBlocks, this.labelBounds, this.useRotation, this.getEffectiveAngle(), leftMargin, topMargin, rightMargin, botomMargin);
		}
		this.applyPanelRotation(finalSize);
		return finalSize;
	}
	getTitleBounds(): Rect {
		return Rect.empty;
	}
	protected arrangeTitle(finalSize: Size): void {
		if (this.axis.titleTextBlock == null) {
			return;
		}
		this.view.handleMeasureLabel1(this.axis.titleTextBlock, new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
		let useTitleRotation: boolean = Math.abs(this.getTitleEffectiveAngle() - 0) > 1E-06;
		let titleBounds = this.getTitleBounds();
		let titleBoundsWidthMiddle = titleBounds.left + (titleBounds.width / 2);
		let titleBoundsHeightMiddle = titleBounds.top + (titleBounds.height / 2);
		let titleWidth = this.getTitleWidth() + this.view.getTitleLeftMargin() + this.view.getTitleRightMargin();
		let titleHeight = this.getTitleHeight() + this.view.getTitleTopMargin() + this.view.getTitleBottomMargin();
		let titleWidthHalf = titleWidth / 2;
		let titleHeightHalf = titleHeight / 2;
		let renderBounds = new Rect(0, titleBoundsWidthMiddle - titleWidthHalf, titleBoundsHeightMiddle - titleHeightHalf, titleWidth, titleHeight);
		if (useTitleRotation) {
			this.setTitleRotationTransform(this.axis.titleTextBlock);
		} else {
			this.view.clearTransforms(this.axis.titleTextBlock);
		}
		this.view.arrangeTextToBounds(this.axis.titleTextBlock, renderBounds, this.view.getTitleLeftMargin(), this.view.getTitleTopMargin(), this.view.getTitleRightMargin(), this.view.getTitleBottomMargin());
		if ((this.axis.titleSettings == null || this.axis.titleSettings.visibility == Visibility.Visible) && (this.axis.labelSettings == null || this.axis.labelSettings.visibility == Visibility.Visible) && this.axis.title != null) {
			this.axis.titleTextBlock._visibility = Visibility.Visible;
		} else {
			this.axis.titleTextBlock._visibility = Visibility.Collapsed;
			this.view.arrangeTextToBounds(this.axis.titleTextBlock, new Rect(0, 0, 0, 0, 0), 0, 0, 0, 0);
		}
	}
	protected arrangeTicks(finalSize: Size): void {
		this.view.arrangeTicks(finalSize);
	}
	protected createTicks(): void {
	}
	protected getTickValues(): IEnumerable$1<number> {
		if (typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, this.axis) !== null) {
			return (<CategoryAxisBase>this.axis).majorLinePositions;
		}
		if (typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, this.axis) !== null) {
			let values = new List$1<number>(Number_$type, 0);
			let $t = (<NumericAxisBase>this.axis).actualTickmarkValues.majorValuesArray();
			for (let i = 0; i < $t.length; i++) {
				let val = $t[i];
				let effectiveViewportRect: Rect = this.axis.getCurrentEffectiveViewport();
				let sParams = new ScalerParams(0, this.axis.seriesViewer.windowRect, this.axis.viewportRect, this.axis.isInvertedCached, effectiveViewportRect);
				values.add(this.axis.getScaledValue(val, sParams));
			}
			return values;
		}
		return null;
	}
	get actualLabelLocation(): AxisLabelsLocation {
		let actualLocation = this.labelSettings != null ? this.labelSettings.actualLocation : this.getDefaultLabelsLocation();
		if (this.axis.crossingAxis == null) {
			if (actualLocation == AxisLabelsLocation.InsideTop) {
				actualLocation = AxisLabelsLocation.InsideBottom;
			} else if (actualLocation == AxisLabelsLocation.InsideBottom) {
				actualLocation = AxisLabelsLocation.InsideTop;
			} else if (actualLocation == AxisLabelsLocation.InsideLeft) {
				actualLocation = AxisLabelsLocation.InsideRight;
			} else if (actualLocation == AxisLabelsLocation.InsideRight) {
				actualLocation = AxisLabelsLocation.InsideLeft;
			}
		}
		return actualLocation;
	}
	verticalTick(geometry: GeometryCollection, x: number, y1: number, y2: number, viewportRect: Rect, renderingInfo: PathRenderingInfo): void {
		let tickLeft: number = x;
		let tickRight: number = x;
		if (renderingInfo != null) {
			let halfStroke: number = renderingInfo.strokeThickness / 2;
			tickLeft -= halfStroke;
			tickRight += halfStroke;
		}
		if (tickRight >= viewportRect.left && tickLeft <= viewportRect.right) {
			if (renderingInfo.alignToPixels) {
				x = this.axis.alignLineToPixels(x, viewportRect.left, viewportRect.right, renderingInfo);
			}
			let tick: LineGeometry = new LineGeometry();
			tick.startPoint = <Point>{ $type: Point_$type, x: x, y: y1 };
			tick.endPoint = <Point>{ $type: Point_$type, x: x, y: y2 };
			geometry.add(tick);
		}
	}
	horizontalTick(geometry: GeometryCollection, y: number, x1: number, x2: number, viewportRect: Rect, renderingInfo: PathRenderingInfo): void {
		if (y <= viewportRect.bottom && y >= viewportRect.top) {
			if (renderingInfo.alignToPixels) {
				y = this.axis.alignLineToPixels(y, viewportRect.top, viewportRect.bottom, renderingInfo);
			}
			let tick: LineGeometry = new LineGeometry();
			tick.startPoint = <Point>{ $type: Point_$type, x: x1, y: y };
			tick.endPoint = <Point>{ $type: Point_$type, x: x2, y: y };
			geometry.add(tick);
		}
	}
	setLabelRotationTransform(label: FrameworkElement, angle: number): void {
		let effAngle: number = this.getEffectiveAngle();
		this.view.handleSetLabelRotationTransform(label, effAngle);
	}
	setTitleRotationTransform(label: FrameworkElement): void {
		let effAngle: number = this.getTitleEffectiveAngle();
		this.handleSetTitleLabelRotationTransform(label, effAngle);
	}
	handleSetTitleLabelRotationTransform(label: FrameworkElement, effAngle: number): void {
		let fe: FrameworkElement = typeCast<FrameworkElement>((<any>FrameworkElement).$type, label);
		let height = this.getTitleHeight();
		let width = this.getTitleWidth();
		let centerX: number = 0.5 * width;
		let centerY: number = 0.5 * height;
		let transform = ((() => {
			let $ret = new RotateTransform();
			$ret.angle = effAngle;
			$ret.centerX = centerX;
			$ret.centerY = centerY;
			return $ret;
		})());
		let group = new TransformGroup();
		group.children.add(transform);
		fe.renderTransform = group;
	}
	measureLabels(availableSize: Size): Size {
		if ((this.children.contains(this.axis.titleTextBlock) == false) && this.axis.titleTextBlock != null) {
			this.children.add(this.axis.titleTextBlock);
			AxisLabelManager.bindTitleLabel(this.axis.titleTextBlock);
		}
		for (let element of fromEnum<UIElement>(this.children)) {
			if (element != this.axis.titleTextBlock && element != this.view.ticks) {
				this.view.handleMeasureLabel(element);
			}
		}
		let extent = (this.axis == null || this.actualExtent <= 0 || isNaN_(this.actualExtent)) ? 50 : this.actualExtent;
		if (this.axis != null && (this.axis.series == null || this.axis.series.count == 0)) {
			if (this.axis.hasUserExtent()) {
				extent = this.axis.getUserExtent();
			}
		}
		let horizontal: boolean = this.isHorizontalPanel();
		extent = Math.min(extent, horizontal ? availableSize.height : availableSize.width);
		extent = isInfinity(extent) ? 50 : extent;
		return horizontal ? new Size(1, 50, extent) : new Size(1, extent, 50);
	}
	static readonly extentPropertyName: string = "Extent";
	static readonly extentProperty: DependencyProperty = DependencyProperty.register(AxisLabelPanelBase.extentPropertyName, Number_$type, (<any>AxisLabelPanelBase).$type, new PropertyMetadata(2, 50, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AxisLabelPanelBase>sender).actualExtent = <number>e.newValue));
	get extent(): number {
		return <number>this.getValue(AxisLabelPanelBase.extentProperty);
	}
	set extent(value: number) {
		this.setValue(AxisLabelPanelBase.extentProperty, value);
	}
	actualExtent: number = 50;
	getTitlePosition(titleSettings: TitleSettings): AxisTitlePosition {
		if (titleSettings == null) {
			return this.axis.seriesViewer.getDefaultHorizontalAxisTitlePosition(this.axis);
		}
		if (titleSettings.position == AxisTitlePosition.Auto) {
			if (this.axis != null && this.axis.seriesViewer != null) {
				return this.axis.seriesViewer.getDefaultHorizontalAxisTitlePosition(this.axis);
			}
			return AxisTitlePosition.Bottom;
		}
		return titleSettings.position;
	}
	getDefaultLabelsLocation(): AxisLabelsLocation {
		return AxisLabelsLocation.OutsideBottom;
	}
	validLocation(location: AxisLabelsLocation): boolean {
		return true;
	}
	private *_getLabels(): IterableIterator<any> {
		for (let ele of fromEnum<UIElement>(this.children)) {
			if (ele != this.axis.titleTextBlock && ele != this.view.ticks) {
				yield <UIElement>ele;
			}
		}
	}
	getLabels(): IEnumerable$1<any> {
		return toEnum(() => this._getLabels());
	}
	trimTextBlock(index: number, textblock: TextBlock, availableWidth: number, labelLeftMargin: number, labelRightMargin: number): string {
		let result: string = this.view.trimTextBlock(textblock, availableWidth, labelLeftMargin, labelRightMargin);
		return result;
	}
	considerForLongestTextBlock(textElement: any): void {
		if (this.longestTextBlock == null || this.getDesiredWidth(this.longestTextBlock) < this.getDesiredWidth(textElement)) {
			this.longestTextBlock = textElement;
		}
	}
	onProcessTextBlock(textElement: FrameworkElement): void {
		this.textBlocks.add(textElement);
	}
	private *_getTextBlocks(): IterableIterator<any> {
		for (let i: number = 0; i < this.axis.textBlocks.count; i++) {
			yield this.axis.textBlocks.item(i);
		}
		for (let i1: number = 0; i1 < this.axis.annotationTextBlocks.count; i1++) {
			yield this.axis.annotationTextBlocks.item(i1);
		}
	}
	getTextBlocks(): IEnumerable$1<any> {
		return toEnum(() => this._getTextBlocks());
	}
	private _cachedOverlayExtent: number = 0;
	protected get cachedOverlayExtent(): number {
		return this._cachedOverlayExtent;
	}
	protected set cachedOverlayExtent(value: number) {
		this._cachedOverlayExtent = value;
	}
	private _cachedOverlayRenderExtent: number = 0;
	protected get cachedOverlayRenderExtent(): number {
		return this._cachedOverlayRenderExtent;
	}
	protected set cachedOverlayRenderExtent(value: number) {
		this._cachedOverlayRenderExtent = value;
	}
	ensureExtentSet(): void {
		this.view.ensureContextFont();
		this.updateLabelBounds();
	}
	updateLabelBounds(): void {
		this.labelBounds = this.determineLabelBounds();
	}
	makeDirty(): void {
	}
	getDesiredExtent(gridAreaRect: Rect): number {
		return this.actualExtent;
	}
	measure(): void {
		this.view.measure();
	}
	provideContext(context: RenderingContext): void {
		this.view.onContextProvided(context);
	}
	arrange(): void {
		this.view.arrange();
	}
	render(): void {
		this.view.render();
	}
}

/**
 * @hidden 
 */
export abstract class CategoryAxisBase extends Axis implements ICategoryScaler {
	static $t: Type = markType(CategoryAxisBase, 'CategoryAxisBase', (<any>Axis).$type, [ICategoryScaler_$type]);
	createView(): AxisView {
		return new CategoryAxisBaseView(this);
	}
	protected get_isContinuous(): boolean {
		return false;
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.categoryView = <CategoryAxisBaseView>view;
	}
	private _categoryView: CategoryAxisBaseView;
	get categoryView(): CategoryAxisBaseView {
		return this._categoryView;
	}
	set categoryView(value: CategoryAxisBaseView) {
		this._categoryView = value;
	}
	constructor() {
		super();
		this.majorLinePositions = new List$1<number>(Number_$type, 0);
	}
	validateAxis(viewportRect: Rect, windowRect: Rect, view: AxisView): boolean {
		let isValid: boolean = super.validateAxis(viewportRect, windowRect, view);
		if (!isValid) {
			return false;
		}
		return this.itemsSource != null && this.cachedItemsCount > 0;
	}
	onDetached(): void {
		if (this.fastItemsSource != null && this.fastItemsSourceProvider != null && this.itemsSource != null) {
			this.fastItemsSource = this.fastItemsSourceProvider.releaseFastItemsSource(this.itemsSource);
		}
	}
	onAttached(): void {
		if (this.fastItemsSource == null && this.fastItemsSourceProvider != null && this.itemsSource != null) {
			this.fastItemsSource = this.fastItemsSourceProvider.getFastItemsSource(this.itemsSource);
		}
	}
	private _majorLinePositions: List$1<number> = null;
	get majorLinePositions(): List$1<number> {
		return this._majorLinePositions;
	}
	set majorLinePositions(value: List$1<number>) {
		this._majorLinePositions = value;
	}
	protected get_isCategory(): boolean {
		return true;
	}
	getCategoryBoundingBox(point: Point, useInterpolation: boolean, singularWidth: number): Rect {
		if (this.isAngular) {
			return Rect.empty;
		}
		return this.getCategoryBoundingBoxHelper(point, useInterpolation, singularWidth, this.isVertical);
	}
	getCategoryBoundingBoxHelper(point: Point, useInterpolation: boolean, singularWidth: number, isVertical: boolean): Rect {
		let i: number = 0;
		let comparison = point.x;
		let viewportMinExtreme = this.viewportRect.left;
		let viewportMaxExtreme = this.viewportRect.right;
		if (isVertical) {
			comparison = point.y;
			viewportMinExtreme = this.viewportRect.top;
			viewportMaxExtreme = this.viewportRect.bottom;
		}
		let positions = this.majorLinePositions;
		if ((isVertical && !this.isInverted) || (!isVertical && this.isInverted)) {
			positions = new List$1<number>(Number_$type, 0);
			for (let j = this.majorLinePositions.count - 1; j >= 0; j--) {
				positions.add(this.majorLinePositions._inner[j]);
			}
		}
		if (this.categoryMode == CategoryMode.Mode0) {
			if (useInterpolation) {
				let ret: Rect;
				if (isVertical) {
					ret = new Rect(0, this.viewportRect.left, point.y - singularWidth / 2, this.viewportRect.width, singularWidth);
				} else {
					ret = new Rect(0, point.x - singularWidth / 2, this.viewportRect.top, singularWidth, this.viewportRect.height);
				}
				ret.intersect(this.viewportRect);
				return ret;
			} else {
				if (comparison > viewportMaxExtreme) {
					return Rect.empty;
				}
				if (comparison < viewportMinExtreme) {
					return Rect.empty;
				}
				let minDist = 1.7976931348623157E+308;
				let minPos = -1;
				for (i = 0; i < positions.count; i++) {
					let dist = Math.abs(positions._inner[i] - comparison);
					if (dist < minDist) {
						minDist = dist;
						minPos = i;
					}
				}
				if (minPos == -1) {
					return Rect.empty;
				}
				let target = positions._inner[minPos];
				let ret1: Rect;
				if (isVertical) {
					ret1 = new Rect(0, this.viewportRect.left, target - singularWidth / 2, this.viewportRect.width, singularWidth);
				} else {
					ret1 = new Rect(0, target - singularWidth / 2, this.viewportRect.top, singularWidth, this.viewportRect.height);
				}
				ret1.intersect(this.viewportRect);
				return ret1;
			}
		} else {
			for (i = 0; i < positions.count; i++) {
				if (positions._inner[i] > comparison) {
					break;
				}
			}
			if (i == 0) {
				return Rect.empty;
			}
			if (comparison > viewportMaxExtreme) {
				return Rect.empty;
			}
			if (comparison < viewportMinExtreme) {
				return Rect.empty;
			}
			let curr = this.viewportRect.right;
			if (isVertical) {
				curr = this.viewportRect.bottom;
			}
			if (i < positions.count) {
				curr = positions._inner[i];
			}
			if (isVertical) {
				return new Rect(0, this.viewportRect.left, positions._inner[i - 1], this.viewportRect.width, curr - positions._inner[i - 1]);
			} else {
				return new Rect(0, positions._inner[i - 1], this.viewportRect.top, curr - positions._inner[i - 1], this.viewportRect.height);
			}
		}
	}
	static readonly fastItemsSourcePropertyName: string = "FastItemsSource";
	get fastItemsSource(): IFastItemsSource {
		return <IFastItemsSource><any>this.getValue(CategoryAxisBase.fastItemsSourceProperty);
	}
	set fastItemsSource(value: IFastItemsSource) {
		this.setValue(CategoryAxisBase.fastItemsSourceProperty, value);
	}
	private _fastItemsSource: IFastItemsSource = null;
	static readonly fastItemsSourceProperty: DependencyProperty = DependencyProperty.register(CategoryAxisBase.fastItemsSourcePropertyName, IFastItemsSource_$type, (<any>CategoryAxisBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryAxisBase>sender).raisePropertyChanged(CategoryAxisBase.fastItemsSourcePropertyName, e.oldValue, e.newValue)));
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	get itemsSource(): IEnumerable {
		return <IEnumerable><any>this.getValue(CategoryAxisBase.itemsSourceProperty);
	}
	set itemsSource(value: IEnumerable) {
		this.setValue(CategoryAxisBase.itemsSourceProperty, value);
	}
	static readonly itemsSourceProperty: DependencyProperty = DependencyProperty.register(CategoryAxisBase.itemsSourcePropertyName, IEnumerable_$type, (<any>CategoryAxisBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let axis: CategoryAxisBase = typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, sender);
		if (axis.fastItemsSourceProvider != null) {
			axis.fastItemsSourceProvider.releaseFastItemsSource(<IEnumerable><any>e.oldValue);
		}
		(<CategoryAxisBase>sender).raisePropertyChanged(CategoryAxisBase.itemsSourcePropertyName, e.oldValue, e.newValue);
	}));
	static readonly itemsCountPropertyName: string = "ItemsCount";
	private _itemsCount: number = 0;
	cachedItemsCount: number = 0;
	get itemsCount(): number {
		return this._itemsCount;
	}
	set itemsCount(value: number) {
		this._itemsCount = value;
		this.cachedItemsCount = this._itemsCount;
	}
	get categoryMode(): CategoryMode {
		return this._categoryMode;
	}
	set categoryMode(value: CategoryMode) {
		if (this._categoryMode != value) {
			let oldValue: CategoryMode = this._categoryMode;
			this._categoryMode = value;
			this.raisePropertyChanged(CategoryAxisBase.categoryModePropertyName, enumGetBox<CategoryMode>(CategoryMode_$type, oldValue), enumGetBox<CategoryMode>(CategoryMode_$type, value));
		}
	}
	private _categoryMode: CategoryMode = <CategoryMode>0;
	static readonly categoryModePropertyName: string = "CategoryMode";
	get gap(): number {
		return <number>this.getValue(CategoryAxisBase.gapProperty);
	}
	set gap(value: number) {
		this.setValue(CategoryAxisBase.gapProperty, value);
	}
	static readonly gapPropertyName: string = "Gap";
	static readonly gapProperty: DependencyProperty = DependencyProperty.register(CategoryAxisBase.gapPropertyName, Number_$type, (<any>CategoryAxisBase).$type, new PropertyMetadata(2, 0.2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryAxisBase>sender).raisePropertyChanged(CategoryAxisBase.gapPropertyName, e.oldValue, e.newValue)));
	get overlap(): number {
		return <number>this.getValue(CategoryAxisBase.overlapProperty);
	}
	set overlap(value: number) {
		this.setValue(CategoryAxisBase.overlapProperty, value);
	}
	static readonly overlapPropertyName: string = "Overlap";
	static readonly overlapProperty: DependencyProperty = DependencyProperty.register(CategoryAxisBase.overlapPropertyName, Number_$type, (<any>CategoryAxisBase).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryAxisBase>sender).raisePropertyChanged(CategoryAxisBase.overlapPropertyName, e.oldValue, e.newValue)));
	get useClusteringMode(): boolean {
		return <boolean>this.getValue(CategoryAxisBase.useClusteringModeProperty);
	}
	set useClusteringMode(value: boolean) {
		this.setValue(CategoryAxisBase.useClusteringModeProperty, value);
	}
	static readonly useClusteringModePropertyName: string = "UseClusteringMode";
	static readonly useClusteringModeProperty: DependencyProperty = DependencyProperty.register(CategoryAxisBase.useClusteringModePropertyName, Boolean_$type, (<any>CategoryAxisBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryAxisBase>sender).raisePropertyChanged(CategoryAxisBase.useClusteringModePropertyName, e.oldValue, e.newValue)));
	get mode2GroupCount(): number {
		return this._mode2GroupCount;
	}
	set mode2GroupCount(value: number) {
		if (value != this._mode2GroupCount) {
			let oldGroupCount: number = this._mode2GroupCount;
			this._mode2GroupCount = value;
			this.raisePropertyChanged(CategoryAxisBase.groupCountPropertyName, oldGroupCount, this._mode2GroupCount);
		}
	}
	static readonly groupCountPropertyName: string = "GroupCount";
	private _mode2GroupCount: number = 0;
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		return NaN;
	}
	getUnscaledValue3(scaledValue: number, windowRect: Rect, viewportRect: Rect, categoryMode: CategoryMode): number {
		return NaN;
	}
	getCategorySize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		return NaN;
	}
	getGroupSize(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		return NaN;
	}
	getGroupCenter(index: number, windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect): number {
		return NaN;
	}
	unscaleValue(unscaledValue: number): number {
		let windowRect: Rect = this.seriesViewer.windowRect;
		let viewportRect: Rect = this.viewportRect;
		let effectiveViewport = this.getCurrentEffectiveViewport();
		let sParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewport);
		return this.getUnscaledValue(unscaledValue, sParams);
	}
	private *_relatedSeries(): IterableIterator<any> {
		for (let currentSeries of fromEnum<Series>(this.series)) {
			yield currentSeries;
		}
		if (this.seriesViewer != null && this.seriesViewer.isSyncReady && this.shouldShareMode(this.seriesViewer)) {
			for (let chart of fromEnum<SeriesViewer>(this.seriesViewer.synchronizedCharts())) {
				if (chart != this.seriesViewer) {
					for (let currentSeries1 of fromEnum<Series>(chart.series)) {
						yield currentSeries1;
					}
				}
			}
		}
	}
	private relatedSeries(): IEnumerable$1<Series> {
		return toEnum(() => this._relatedSeries());
	}
	private hasSeries(series: Series): boolean {
		return this.series.contains(series);
	}
	shouldShareMode(chart: SeriesViewer): boolean {
		return false;
	}
	private *_relatedAxes(): IterableIterator<any> {
		let dataChart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
		if (dataChart != null && dataChart.isSyncReady && this.shouldShareMode(dataChart)) {
			for (let chart of fromEnum<SeriesViewer>(dataChart.synchronizedCharts())) {
				if (chart != this.seriesViewer) {
					let otherChart = typeCast<XamDataChart>((<any>XamDataChart).$type, chart);
					if (otherChart != null) {
						for (let axis of fromEnum<Axis>(otherChart.axes)) {
							if (typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, axis) !== null) {
								yield typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, axis);
							}
						}
					}
				}
			}
		}
	}
	private relatedAxes(): IEnumerable$1<CategoryAxisBase> {
		return toEnum(() => this._relatedAxes());
	}
	private _spreading: boolean = false;
	spread(propagate: boolean): void {
		if (this._spreading) {
			return;
		}
		try {
			this._spreading = true;
			let categoryMode: CategoryMode = CategoryMode.Mode0;
			let mode2GroupCount: number = 0;
			let mode2Present: boolean = false;
			for (let currentSeries of fromEnum<Series>(this.relatedSeries())) {
				if (!currentSeries.isCategory && !currentSeries.isRadial && !currentSeries.isFinancial) {
					continue;
				}
				let categorySeries: IHasCategoryModePreference = <IHasCategoryModePreference><any>currentSeries;
				let seriesMode: CategoryMode = categorySeries.preferredCategoryMode(this);
				if (seriesMode == CategoryMode.Mode2) {
					categoryMode = CategoryMode.Mode2;
					mode2Present = true;
					if (this.hasSeries(currentSeries)) {
						mode2GroupCount++;
					}
				}
				if (seriesMode == CategoryMode.Mode1 && !mode2Present) {
					categoryMode = CategoryMode.Mode1;
				}
			}
			let useClusteringMode = this.useClusteringMode;
			for (let axis of fromEnum<CategoryAxisBase>(this.relatedAxes())) {
				if (axis.useClusteringMode) {
					useClusteringMode = true;
				}
				if (propagate) {
					axis.spread(false);
				}
			}
			if (categoryMode == CategoryMode.Mode0 && useClusteringMode) {
				categoryMode = CategoryMode.Mode2;
				if (mode2GroupCount == 0) {
					mode2GroupCount = 1;
				}
			}
			this.categoryMode = categoryMode;
			this.mode2GroupCount = mode2GroupCount;
		}
		finally {
			this._spreading = false;
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryAxisBase.fastItemsSourceProviderPropertyName:
			if ((typeCast<IFastItemsSourceProvider>(IFastItemsSourceProvider_$type, oldValue)) != null) {
				this.fastItemsSource = (<IFastItemsSourceProvider><any>oldValue).releaseFastItemsSource(this.itemsSource);
			}
			if ((typeCast<IFastItemsSourceProvider>(IFastItemsSourceProvider_$type, newValue)) != null) {
				this.fastItemsSource = (<IFastItemsSourceProvider><any>newValue).getFastItemsSource(this.itemsSource);
			}
			this.itemsCount = 0;
			if (this.fastItemsSource != null) {
				this.itemsCount = this.fastItemsSource.count;
			}
			this.spread(true);
			break;

			case CategoryAxisBase.itemsSourcePropertyName:
			if (this.fastItemsSourceProvider != null) {
				this.fastItemsSource = this.fastItemsSourceProvider.getFastItemsSource(this.itemsSource);
			}
			break;

			case CategoryAxisBase.fastItemsSourcePropertyName:
			let oldFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			this.cacheFastItemsSource();
			this.mustInvalidateLabels = true;
			if (oldFastItemsSource != null) {
				oldFastItemsSource.event = delegateRemove(oldFastItemsSource.event, runOn(this, this.handleFastItemsSourceEvent));
			}
			this.itemsCount = 0;
			if (this.fastItemsSource != null) {
				this.itemsCount = this.fastItemsSource.count;
			}
			if (this.fastItemsSource != null) {
				let $t = this.fastItemsSource;
				$t.event = delegateCombine($t.event, runOn(this, this.handleFastItemsSourceEvent));
				this.renderAxis1(false);
				for (let currentSeries of fromEnum<Series>(this.directSeries())) {
					currentSeries.renderSeries(false);
					if (currentSeries.seriesViewer != null) {
						currentSeries.notifyThumbnailAppearanceChanged();
					}
				}
			} else {
				this.clearAllMarks();
				for (let currentSeries1 of fromEnum<Series>(this.directSeries())) {
					currentSeries1.clearRendering(true, currentSeries1.view);
					if (currentSeries1.seriesViewer != null) {
						currentSeries1.notifyThumbnailAppearanceChanged();
					}
				}
			}
			break;

			case CategoryAxisBase.itemsCountPropertyName:
			this.raiseRangeChanged(new AxisRangeChangedEventArgs(0, 0, 0, typeGetValue((oldValue)) - 1, typeGetValue((newValue)) - 1));
			this.renderAxis1(false);
			break;

			case CategoryAxisBase.useClusteringModePropertyName:
			this.mustInvalidateLabels = true;
			this.updateCategoryMode();
			this.renderAxis1(false);
			this.forceSeriesUpdate();
			break;

			case CategoryAxisBase.categoryModePropertyName:
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			this.renderCrossingAxis();
			this.forceSeriesUpdate();
			break;

			case CategoryAxisBase.overlapPropertyName:

			case CategoryAxisBase.gapPropertyName:
			this.mustInvalidateLabels = true;
			for (let currentSeries2 of fromEnum<Series>(this.directSeries())) {
				currentSeries2.thumbnailDirty = true;
				let currentCategorySeries: IHasCategoryModePreference = typeCast<IHasCategoryModePreference>(IHasCategoryModePreference_$type, currentSeries2);
				if (currentCategorySeries != null && currentCategorySeries.preferredCategoryMode(this) == CategoryMode.Mode2) {
					currentSeries2.renderSeries(false);
				}
			}
			this.renderAxis1(false);
			if (this.seriesViewer != null) {
				this.seriesViewer.notifyThumbnailAppearanceChanged();
			}
			break;

			case CategoryAxisBase.crossingValuePropertyName:

			case CategoryAxisBase.crossingAxisPropertyName:
			this.mustInvalidateLabels = true;
			this.renderAxis1(true);
			break;

		}

	}
	protected forceSeriesUpdate(): void {
		for (let currentSeries of fromEnum<Series>(this.directSeries())) {
			currentSeries.renderSeries(false);
		}
	}
	handleFastItemsSourceEvent(sender: any, e: FastItemsSourceEventArgs): void {
		this.onFastItemsSourceEvent(e);
	}
	protected onFastItemsSourceEvent(e: FastItemsSourceEventArgs): void {
		switch (e.action) {
			case FastItemsSourceEventAction.Change:

			case FastItemsSourceEventAction.Remove:

			case FastItemsSourceEventAction.Insert:

			case FastItemsSourceEventAction.Replace:

			case FastItemsSourceEventAction.Reset:
			if (this.fastItemsSource != null) {
				this.itemsCount = this.fastItemsSource.count;
			}
			this.renderAxis1(false);
			break;

		}

		if (this.fastItemsSource != null) {
			this.itemsCount = this.fastItemsSource.count;
		}
	}
	private updateCategoryMode(): void {
		let mode1Present: boolean = false, mode2Present: boolean = false;
		for (let currentSeries of fromEnum<Series>(this.series)) {
			let currentCategorySeries: IHasCategoryModePreference = typeCast<IHasCategoryModePreference>(IHasCategoryModePreference_$type, currentSeries);
			if (currentCategorySeries == null) {
				continue;
			}
			let currentMode: CategoryMode = currentCategorySeries.preferredCategoryMode(this);
			mode1Present = mode1Present || currentMode == CategoryMode.Mode1;
			mode2Present = mode2Present || currentMode == CategoryMode.Mode2;
		}
		let categoryMode = mode2Present ? CategoryMode.Mode2 : mode1Present ? CategoryMode.Mode1 : CategoryMode.Mode0;
		if (categoryMode == CategoryMode.Mode0 && this.useClusteringMode) {
			categoryMode = CategoryMode.Mode1;
			if (this.mode2GroupCount == 0) {
				this.mode2GroupCount = 1;
			}
		}
		this.categoryMode = categoryMode;
	}
	registerSeries(series: Series): boolean {
		let success: boolean = super.registerSeries(series);
		if (success) {
			this.spread(true);
			let registeredCategorySeries: IHasCategoryModePreference = typeCast<IHasCategoryModePreference>(IHasCategoryModePreference_$type, series);
			if (registeredCategorySeries != null && registeredCategorySeries.preferredCategoryMode(this) == CategoryMode.Mode2) {
				for (let currentSeries of fromEnum<Series>(this.directSeries())) {
					let currentCategorySeries: IHasCategoryModePreference = typeCast<IHasCategoryModePreference>(IHasCategoryModePreference_$type, currentSeries);
					if (currentCategorySeries != null && currentCategorySeries != registeredCategorySeries && currentCategorySeries.preferredCategoryMode(this) == CategoryMode.Mode2) {
						currentSeries.renderSeries(false);
					}
				}
			}
			this.renderAxis1(false);
			this.updateRange();
		}
		return success;
	}
	deregisterSeries(series: Series): boolean {
		let success: boolean = super.deregisterSeries(series);
		if (success) {
			this.spread(true);
			let deregisteredCategorySeries: IHasCategoryModePreference = typeCast<IHasCategoryModePreference>(IHasCategoryModePreference_$type, series);
			if (deregisteredCategorySeries != null && deregisteredCategorySeries.preferredCategoryMode(this) != CategoryMode.Mode0) {
				for (let currentSeries of fromEnum<Series>(this.directSeries())) {
					let currentCategorySeries: IHasCategoryModePreference = typeCast<IHasCategoryModePreference>(IHasCategoryModePreference_$type, currentSeries);
					if (currentCategorySeries != null) {
						currentSeries.renderSeries(false);
					}
				}
			}
			this.renderAxis1(false);
		}
		return success;
	}
	private renderCrossingAxis(): void {
		let crossingAxis: Axis = null;
		for (let currentSeries of fromEnum<Series>(this.directSeries())) {
			if (currentSeries.isCategory) {
				let yAxis: Axis = currentSeries.getMatchingAxis(this);
				if (yAxis != null && yAxis.crossingAxis == this) {
					crossingAxis = yAxis;
				}
			}
		}
		if (crossingAxis != null) {
			crossingAxis.renderAxis();
		}
	}
	cacheFastItemsSource(): void {
		this._fastItemsSource = this.fastItemsSource;
	}
	renderLabels(): void {
		let labelSettings: AxisLabelSettings = this.labelSettings;
		if (labelSettings == null) {
			labelSettings = new AxisLabelSettings();
		}
		if (labelSettings.visibility == Visibility.Collapsed) {
			this.textBlocks.count = 0;
			this.annotationTextBlocks.count = 0;
			this.annotationBackings.count = 0;
		} else {
			let textBlockCount: number = 0;
			textBlockCount = this.categoryView.addLabels(this.labelDataContext);
			this.textBlocks.count = textBlockCount;
		}
	}
	handleCollectionChanged(e: NotifyCollectionChangedEventArgs): void {
		if (this.fastItemsSource != null) {
			this.fastItemsSource.handleCollectionChanged(e);
		}
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(2, NotifyCollectionChangedAction.Replace, newItem, oldItem, index));
	}
	notifyClearItems(): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(0, NotifyCollectionChangedAction.Reset));
	}
	notifyInsertItem(index: number, newItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Add, newItem, index));
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Remove, oldItem, index));
	}
	getOffset(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, seriesIndex: number): number {
		return this.getOffset1(windowRect, viewportRect, effectiveViewportRect, seriesIndex, <number>this.categoryMode);
	}
	getOffset1(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, seriesIndex: number, categoryMode: number): number {
		let offset: number = 0;
		let kategoryMode: CategoryMode = <CategoryMode>categoryMode;
		if (kategoryMode == CategoryMode.Mode0 && this.categoryMode != CategoryMode.Mode0) {
			kategoryMode = CategoryMode.Mode1;
		}
		switch (kategoryMode) {
			case CategoryMode.Mode0:
			offset = 0;
			break;

			case CategoryMode.Mode1:
			offset = 0.5 * this.getCategorySize(windowRect, viewportRect, effectiveViewportRect);
			break;

			case CategoryMode.Mode2:
			offset = this.getGroupCenter(seriesIndex, windowRect, viewportRect, effectiveViewportRect);
			break;

		}

		if (this.isVertical != this.isInverted) {
			offset *= -1;
		}
		return offset;
	}
	getSeriesOffset(windowRect: Rect, viewportRect: Rect, effectiveViewportRect: Rect, seriesIndex: number, categoryMode: number): number {
		return this.getOffset1(windowRect, viewportRect, effectiveViewportRect, seriesIndex, categoryMode);
	}
}

/**
 * @hidden 
 */
export abstract class HorizontalAxisLabelPanelBase extends AxisLabelPanelBase {
	static $t: Type = markType(HorizontalAxisLabelPanelBase, 'HorizontalAxisLabelPanelBase', (<any>AxisLabelPanelBase).$type);
	createView(): AxisLabelPanelBaseView {
		return new HorizontalAxisLabelPanelBaseView(this);
	}
	onViewCreated(view: AxisLabelPanelBaseView): void {
		super.onViewCreated(view);
		this.horizontalView = <HorizontalAxisLabelPanelBaseView>view;
	}
	private _horizontalView: HorizontalAxisLabelPanelBaseView;
	get horizontalView(): HorizontalAxisLabelPanelBaseView {
		return this._horizontalView;
	}
	set horizontalView(value: HorizontalAxisLabelPanelBaseView) {
		this._horizontalView = value;
	}
	private _largestWidth: number = 0;
	get largestWidth(): number {
		return this._largestWidth;
	}
	set largestWidth(value: number) {
		this._largestWidth = value;
	}
	private _largestHeight: number = 0;
	get largestHeight(): number {
		return this._largestHeight;
	}
	set largestHeight(value: number) {
		this._largestHeight = value;
	}
	private _largestRenderWidth: number = 0;
	get largestRenderWidth(): number {
		return this._largestRenderWidth;
	}
	set largestRenderWidth(value: number) {
		this._largestRenderWidth = value;
	}
	private _largestRenderHeight: number = 0;
	get largestRenderHeight(): number {
		return this._largestRenderHeight;
	}
	set largestRenderHeight(value: number) {
		this._largestRenderHeight = value;
	}
	bindExtent(): void {
		this.horizontalView.bindExtent();
	}
	shouldRotate(): boolean {
		return this.labelSettings != null && this.labelSettings.hasUserAngle() && this.getEffectiveAngle() % 360 != 0;
	}
	shouldTryStagger(): boolean {
		return this.foundCollisions && !this.useRotation;
	}
	isHorizontalPanel(): boolean {
		return true;
	}
	createBoundsRectangles(): List$1<Rect> {
		let rectangles: List$1<Rect> = new List$1<Rect>((<any>Rect).$type, 0);
		let isOverlay: List$1<boolean> = new List$1<boolean>(Boolean_$type, 0);
		this.useStaggering = false;
		this.useRotation = false;
		this.useWrapping = false;
		let angleDegrees: number = this.labelSettings != null ? (this.labelSettings.angle) : 0;
		let angleRadians: number = angleDegrees * Math.PI / 180;
		if (this.shouldRotate()) {
			this.useRotation = true;
		}
		this.foundCollisions = false;
		this.determineTallestLabel(rectangles, isOverlay, angleRadians);
		this.foundCollisions = this.foundCollisions || this.detectCollisions(rectangles, isOverlay);
		if (this.foundCollisions) {
			this.hideOptionalLabels(rectangles, isOverlay);
		} else {
			this.showOptionalLabels();
		}
		let hasUserExtent: boolean = this.axis.hasUserExtent();
		if (!hasUserExtent) {
			this.calculateExtent(angleDegrees);
		} else {
			this.view.bindExtentToSettings();
		}
		if (this.useRotation) {
			for (let i: number = 0; i < rectangles.count; i++) {
				let currentRect: Rect = rectangles._inner[i];
				currentRect.x = this.labelPositions._inner[i].value;
				rectangles._inner[i] = currentRect;
			}
		}
		let staggerLevels: number = 0;
		if (this.shouldTryStagger()) {
			staggerLevels = ((() => { let $ret = this.staggerLabels(this.largestHeight, rectangles, isOverlay); rectangles = $ret.p1; return $ret.ret; })());
		}
		if (this.foundCollisions && !this.useStaggering) {
			if (staggerLevels > 0) {
				if (this.horizontalView.shouldUseWrapping()) {
					this.useWrapping = true;
				}
			}
		}
		if (this.foundCollisions && this.shouldClip()) {
			let actualWidth: number = this.labelViewport.width;
			let labelHeightSpan: number = this.getLabelSpan();
			let labelRenderHeightSpan: number = this.getLabelRenderSpan();
			let span: number = this.labelPositions.count > 1 ? this.labelPositions._inner[1].value - this.labelPositions._inner[0].value : actualWidth;
			let clipWidth: number = Math.abs(span * 0.8);
			let RectX: number = 0;
			let startClippingAngle: number = Math.abs(Math.atan(this.largestHeight / span) * 180 / Math.PI);
			let labelLeftMargin: number = this.view.getLabelLeftMargin();
			let labelRightMargin: number = this.view.getLabelRightMargin();
			for (let i1: number = 0; i1 < rectangles.count; i1++) {
				if (this.areLabelsUnevenlySpaced) {
					if (i1 > 0 && i1 < rectangles.count - 1) {
						let spanFront: number = this.labelPositions.count > 1 ? this.labelPositions._inner[i1].value - (rectangles._inner[i1 - 1].x + rectangles._inner[i1 - 1].width) : actualWidth;
						let spanEnd: number = this.labelPositions.count > 1 ? rectangles._inner[i1 + 1].x - this.labelPositions._inner[i1].value : actualWidth;
						clipWidth = Math.abs(Math.min(Math.abs(spanFront * 2), Math.abs(spanEnd * 2)) * 0.8);
					} else {
						if (i1 == 0) {
							let spanEnd1: number = this.labelPositions.count > 1 ? rectangles._inner[i1 + 1].x - this.labelPositions._inner[i1].value : actualWidth;
							clipWidth = Math.abs((span * 2) * 0.8);
						}
						if (i1 == rectangles.count - 1) {
							let spanFront1: number = this.labelPositions.count > 1 ? this.labelPositions._inner[i1].value - (rectangles._inner[i1 - 1].x + rectangles._inner[i1 - 1].width) : actualWidth;
							clipWidth = Math.abs((spanFront1 * 2) * 0.8);
						}
					}
				}
				let clipValueToUse: number = Math.min(rectangles._inner[i1].width, clipWidth);
				RectX = this.useRotation ? this.labelPositions._inner[i1].value : this.labelPositions._inner[i1].value - clipValueToUse / 2;
				let simplifiedAngleDegrees: number = AngleSimplifier.simplifyAngle(angleDegrees);
				let optimize: boolean = (simplifiedAngleDegrees >= startClippingAngle && simplifiedAngleDegrees <= 180 - startClippingAngle) || (simplifiedAngleDegrees >= 180 + startClippingAngle && simplifiedAngleDegrees <= 360 - startClippingAngle);
				let currentRect1: Rect = rectangles._inner[i1];
				if (this.useRotation && optimize) {
					let textwidth: number = this.getWidthBounds(this.textBlocks._inner[i1]);
					clipWidth = Math.min(labelHeightSpan / Math.abs(Math.sin(angleRadians)), textwidth);
				}
				currentRect1.x = RectX;
				currentRect1.width = Math.min(clipWidth, currentRect1.width);
				rectangles._inner[i1] = currentRect1;
				if (!(typeCast<TextBlock>((<any>TextBlock).$type, this.textBlocks._inner[i1]) !== null)) {
					this.textBlocks._inner[i1].width = Math.min(clipWidth, currentRect1.width);
				}
				let textBlock: TextBlock = typeCast<TextBlock>((<any>TextBlock).$type, this.textBlocks._inner[i1]);
				if (textBlock != null) {
					let newText: string = this.trimTextBlock(i1, textBlock, clipWidth, labelLeftMargin, labelRightMargin);
					if (this.useWrapping) {
						textBlock.height = labelRenderHeightSpan;
					} else if (!Base.equalsStatic(textBlock.text, newText)) {
						textBlock.text = newText;
						this.textBlocks._inner[i1].width = Math.min(clipWidth, this.getDesiredWidth(this.textBlocks._inner[i1]));
						this.largestRenderWidth = Math.min(this.largestRenderWidth, this.textBlocks._inner[i1].width);
					}
				}
			}
			if (!hasUserExtent) {
				this.calculateExtent(angleDegrees);
			}
		}
		if (this.shouldVerticalAlign()) {
			this.doVerticalAlignment(rectangles);
		}
		return rectangles;
	}
	determineTallestLabel(rectangles: List$1<Rect>, isOverlayList: List$1<boolean>, angleRadians: number): void {
		let titleHeightBounds: number = this.getTitleHeightBounds();
		let topOffset: number = this.getLabelTopOffset();
		this.largestHeight = -1.7976931348623157E+308;
		this.largestWidth = -1.7976931348623157E+308;
		this.largestRenderHeight = -1.7976931348623157E+308;
		this.largestRenderWidth = -1.7976931348623157E+308;
		let leftMargin = this.view.getLabelLeftMargin();
		let rightMargin = this.view.getLabelRightMargin();
		let topMargin = this.view.getLabelTopMargin();
		let bottomMargin = this.view.getLabelBottomMargin();
		let viewportTop = this.labelViewport.top;
		let actualHeight: number = (this.labelViewport.height - titleHeightBounds);
		let hasRealLabels: boolean = false;
		for (let i: number = 0; i < this.textBlocks.count; i++) {
			if (!this.labelPositions._inner[i].isOverlay) {
				hasRealLabels = true;
			}
		}
		for (let i1: number = 0; i1 < this.textBlocks.count; i1++) {
			if (this.labelPositions == null || i1 >= this.labelPositions.count) {
				break;
			}
			let x: number, y: number, height: number, elementWidth: number, renderWidth: number, renderHeight: number;
			let currentLabel: FrameworkElement = <FrameworkElement>this.textBlocks._inner[i1];
			renderWidth = this.getDesiredWidth(currentLabel);
			renderHeight = this.getDesiredHeight(currentLabel);
			elementWidth = renderWidth + this.view.getLabelLeftMargin() + this.view.getLabelRightMargin();
			height = renderHeight + topMargin + bottomMargin;
			let isOverlay: boolean = this.labelPositions._inner[i1].isOverlay;
			if (this.useRotation) {
				x = this.labelPositions._inner[i1].value;
			} else {
				x = this.labelPositions._inner[i1].value - elementWidth / 2;
			}
			y = viewportTop + topOffset;
			if (!isOverlay || !hasRealLabels) {
				this.largestHeight = Math.max(height, this.largestHeight);
				this.largestWidth = Math.max(elementWidth, this.largestWidth);
				this.largestRenderHeight = Math.max(renderHeight, this.largestRenderHeight);
				this.largestRenderWidth = Math.max(renderWidth, this.largestRenderWidth);
			}
			let rect: Rect = new Rect(0, x, y, elementWidth, height);
			rectangles.add(rect);
			isOverlayList.add(isOverlay);
			let lengthV: number = elementWidth * Math.abs(Math.sin(angleRadians));
			this.foundCollisions = this.foundCollisions || lengthV > actualHeight;
		}
	}
	private calculateExtent(angleDegrees: number): void {
		let rad: number = angleDegrees * (Math.PI / 180);
		let rotatedLabelHeight: number = Math.abs(this.largestRenderWidth * Math.sin(rad)) + Math.abs(this.largestRenderHeight * Math.cos(rad));
		rotatedLabelHeight += this.view.getLabelTopMargin() + this.view.getLabelBottomMargin();
		let heightBounds: number = this.getTitleHeightBounds();
		this.extent = (rotatedLabelHeight) + (heightBounds) + this.axis.actualTickLength;
	}
	private doVerticalAlignment(rectangles: List$1<Rect>): void {
		this.horizontalView.handleVerticalAlignment(rectangles);
	}
	protected hideOptionalLabels(rectangles: List$1<Rect>, isOverlayList: List$1<boolean>): void {
	}
	protected showOptionalLabels(): void {
	}
	setLabelRotationTransform(label: FrameworkElement, angle: number): void {
		let labelHeight: number = label.actualHeight;
		let labelWidth: number = label.actualWidth;
		let centerX: number = 0;
		let centerY: number = labelHeight / 2;
		let group = new TransformGroup();
		let effectiveAngle = AngleSimplifier.simplifyAngle(this.getEffectiveAngle());
		let transform = ((() => {
			let $ret = new RotateTransform();
			$ret.angle = effectiveAngle;
			$ret.centerX = centerX;
			$ret.centerY = centerY;
			return $ret;
		})());
		let yShift: number = 0;
		let xShift: number = 0;
		if (effectiveAngle != 0 && effectiveAngle != 360) {
			if (effectiveAngle > 0 && effectiveAngle < 180) {
				yShift = -Math.sin(MathUtil.radians(effectiveAngle)) * (labelHeight / 2);
			} else {
				transform.centerX = labelWidth;
				xShift = -labelWidth;
				yShift = -Math.sin(MathUtil.radians(effectiveAngle - 180)) * (labelHeight / 2);
			}
		}
		let translate = ((() => {
			let $ret = new TranslateTransform();
			$ret.y = yShift;
			$ret.x = xShift;
			return $ret;
		})());
		group.children.add(transform);
		group.children.add(translate);
		label.renderTransform = group;
	}
	protected shouldVerticalAlign(): boolean {
		return !this.useStaggering && !this.useRotation;
	}
	protected shouldClip(): boolean {
		return true;
	}
	protected staggerLabels(largestHeight: number, rectangles: List$1<Rect>, isOverlay: List$1<boolean>): { ret: number; p1?: List$1<Rect>; } {
		let staggerLevels: number = 0;
		let tempRectangles = new List$1<Rect>((<any>Rect).$type, 0);
		let topOffset = this.getLabelTopOffset() + this.labelViewport.top;
		let span = this.getLabelSpan();
		let bottomOffset = topOffset + span;
		if (largestHeight * 3 <= this.actualExtent) {
			staggerLevels = 3;
		} else if (largestHeight * 2 <= this.actualExtent) {
			staggerLevels = 2;
		} else {
			return {
				ret: staggerLevels,
				p1: rectangles

			};
		}
		let j: number = 0;
		for (let i: number = 0; i < rectangles.count; i++) {
			let rect: Rect = RectUtil.duplicate(rectangles._inner[i]);
			if (!isOverlay._inner[i]) {
				if (j % staggerLevels == 0) {
					rect.y = topOffset;
				} else if (j % staggerLevels == staggerLevels - 1) {
					rect.y = bottomOffset - rect.height;
				} else {
					rect.y = (topOffset + (span / 2)) - rect.height / 2;
				}
				j++;
			}
			tempRectangles.add(rect);
		}
		this.foundCollisions = this.detectCollisions(tempRectangles, isOverlay);
		if (!this.foundCollisions) {
			this.useStaggering = true;
			rectangles = tempRectangles;
		}
		return {
			ret: staggerLevels,
			p1: rectangles

		};
	}
	getTitleBounds(): Rect {
		let position = this.getTitlePosition(this.axis.titleSettings);
		let titleHeight = this.getTitleHeightBounds();
		let actualLocation = this.actualLabelLocation;
		let top: number = 0;
		if (position == AxisTitlePosition.Top) {
			top += this.labelViewport.top;
			if (actualLocation == AxisLabelsLocation.OutsideBottom || actualLocation == AxisLabelsLocation.InsideBottom) {
				top += this.axis.actualTickLength;
			}
		} else {
			top = this.labelViewport.bottom - titleHeight;
			if (actualLocation == AxisLabelsLocation.InsideTop || actualLocation == AxisLabelsLocation.OutsideTop) {
				top -= this.axis.actualTickLength;
			}
		}
		let titleWidth = this.getTitleWidthBounds();
		let left: number = 0;
		let horz = this.axis.titleSettings == null ? HorizontalAlignment.Center : this.axis.titleSettings.horizontalAlignment;
		if (horz == HorizontalAlignment.Left) {
			left = this.labelViewport.left;
		} else if (horz == HorizontalAlignment.Right) {
			left = this.labelViewport.right - titleWidth;
		} else {
			left = (this.labelViewport.left + (this.labelViewport.width / 2)) - (titleWidth / 2);
		}
		return new Rect(0, left, top, titleWidth, titleHeight);
	}
	getLabelTopOffset(): number {
		let offset: number = 0;
		let posistion = this.getTitlePosition(this.axis.titleSettings);
		if (posistion == AxisTitlePosition.Top) {
			offset += this.getTitleHeightBounds();
		}
		let actualLocation = this.actualLabelLocation;
		if (actualLocation == AxisLabelsLocation.OutsideBottom || actualLocation == AxisLabelsLocation.InsideBottom) {
			offset += this.axis.actualTickLength;
		}
		return offset;
	}
	getLabelBottomOffset(): number {
		let offset: number = 0;
		let posistion = this.getTitlePosition(this.axis.titleSettings);
		if (posistion == AxisTitlePosition.Bottom) {
			offset += this.getTitleHeightBounds();
		}
		let actualLocation = this.actualLabelLocation;
		if (actualLocation == AxisLabelsLocation.OutsideTop || actualLocation == AxisLabelsLocation.InsideTop) {
			offset += this.axis.actualTickLength;
		}
		return offset;
	}
	getLabelSpan(): number {
		let span = (this.actualExtent - this.getLabelTopOffset()) - this.getLabelBottomOffset();
		if (span < 0) {
			span = 0;
		}
		return span;
	}
	getLabelRenderSpan(): number {
		let span = ((this.getLabelSpan() - this.view.getLabelTopMargin()) - this.view.getLabelBottomMargin());
		if (span < 0) {
			span = 0;
		}
		return span;
	}
	protected createTicks(): void {
		let ticksGeometry = this.view.getTicksGeometry();
		this.axis.clearMarks(ticksGeometry);
		if (this.labelSettings != null && this.labelSettings.visibility != Visibility.Visible) {
			return;
		}
		let tickLength = this.axis.actualTickLength;
		if (tickLength == 0) {
			return;
		}
		let positions = this.getTickValues();
		if (positions == null) {
			return;
		}
		let y1: number = this.labelViewport.top;
		let y2: number;
		let actualLocation = this.actualLabelLocation;
		if (actualLocation == AxisLabelsLocation.OutsideTop || actualLocation == AxisLabelsLocation.InsideTop) {
			y1 = this.labelViewport.bottom;
			y2 = y1 - this.axis.actualTickLength;
		} else {
			y2 = y1 + this.axis.actualTickLength;
		}
		let tickRenderingInfo = this.view.getThicksRenderingInfo();
		for (let x of fromEnum<number>(positions)) {
			this.verticalTick(ticksGeometry, x, y1, y2, this.viewportRect, tickRenderingInfo);
		}
		if (!this.children.contains(this.view.ticks)) {
			this.children.add(this.view.ticks);
		}
	}
}

/**
 * @hidden 
 */
export class HorizontalAxisLabelPanel extends HorizontalAxisLabelPanelBase {
	static $t: Type = markType(HorizontalAxisLabelPanel, 'HorizontalAxisLabelPanel', (<any>HorizontalAxisLabelPanelBase).$type);
	getDefaultLabelsLocation(): AxisLabelsLocation {
		return AxisLabelsLocation.OutsideBottom;
	}
	validLocation(location: AxisLabelsLocation): boolean {
		return location == AxisLabelsLocation.InsideBottom || location == AxisLabelsLocation.InsideTop || location == AxisLabelsLocation.OutsideBottom || location == AxisLabelsLocation.OutsideTop;
	}
}

/**
 * @hidden 
 */
export abstract class NumericAxisBase extends Axis {
	static $t: Type = markType(NumericAxisBase, 'NumericAxisBase', (<any>Axis).$type);
	createView(): AxisView {
		return new NumericAxisBaseView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.numericView = <NumericAxisBaseView>view;
	}
	private _numericView: NumericAxisBaseView;
	get numericView(): NumericAxisBaseView {
		return this._numericView;
	}
	set numericView(value: NumericAxisBaseView) {
		this._numericView = value;
	}
	protected get_isNumeric(): boolean {
		return true;
	}
	constructor() {
		super();
		this.logarithmBaseCached = 10;
	}
	get minimumValue(): number {
		return <number>this.getValue(NumericAxisBase.minimumValueProperty);
	}
	set minimumValue(value: number) {
		this.setValue(NumericAxisBase.minimumValueProperty, value);
	}
	static readonly minimumValuePropertyName: string = "MinimumValue";
	static readonly minimumValueProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.minimumValuePropertyName, Number_$type, (<any>NumericAxisBase).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAxisBase>sender).raisePropertyChanged(NumericAxisBase.minimumValuePropertyName, e.oldValue, e.newValue)));
	static readonly actualMinimumValuePropertyName: string = "ActualMinimumValue";
	get actualMinimumValue(): number {
		return this._actualMinimumValue;
	}
	set actualMinimumValue(value: number) {
		if (this.actualMinimumValue != value) {
			let oldValue: number = this._actualMinimumValue;
			this._actualMinimumValue = value;
			this.logActualMinimumValue = Math.log(this.actualMinimumValue);
			this.raisePropertyChanged(NumericAxisBase.actualMinimumValuePropertyName, oldValue, this.actualMinimumValue);
		}
	}
	private _actualMinimumValue: number = 0;
	private _logActualMinimumValue: number = 0;
	get logActualMinimumValue(): number {
		return this._logActualMinimumValue;
	}
	set logActualMinimumValue(value: number) {
		this._logActualMinimumValue = value;
	}
	resolveActualMinimumValue(): any {
		return this.minimumValue;
	}
	static readonly actualVisibleMinimumValuePropertyName: string = "ActualVisibleMinimumValue";
	get actualVisibleMinimumValue(): number {
		return this._actualVisibleMinimumValue;
	}
	set actualVisibleMinimumValue(value: number) {
		if (this.actualVisibleMinimumValue != value) {
			let oldValue: number = this._actualVisibleMinimumValue;
			this._actualVisibleMinimumValue = value;
			this.raisePropertyChanged(NumericAxisBase.actualVisibleMinimumValuePropertyName, oldValue, this.actualVisibleMinimumValue);
		}
	}
	private _actualVisibleMinimumValue: number = 0;
	get maximumValue(): number {
		return <number>this.getValue(NumericAxisBase.maximumValueProperty);
	}
	set maximumValue(value: number) {
		this.setValue(NumericAxisBase.maximumValueProperty, value);
	}
	static readonly maximumValuePropertyName: string = "MaximumValue";
	static readonly maximumValueProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.maximumValuePropertyName, Number_$type, (<any>NumericAxisBase).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAxisBase>sender).raisePropertyChanged(NumericAxisBase.maximumValuePropertyName, e.oldValue, e.newValue)));
	static readonly actualMaximumValuePropertyName: string = "ActualMaximumValue";
	get actualMaximumValue(): number {
		return this._actualMaximumValue;
	}
	set actualMaximumValue(value: number) {
		if (this.actualMaximumValue != value) {
			let oldValue: number = this._actualMaximumValue;
			this._actualMaximumValue = value;
			this.logActualMaximumValue = Math.log(this.actualMaximumValue);
			this.raisePropertyChanged(NumericAxisBase.actualMaximumValuePropertyName, oldValue, this.actualMaximumValue);
		}
	}
	private _actualMaximumValue: number = 0;
	resolveActualMaximumValue(): any {
		return this.actualMaximumValue;
	}
	private _logActualMaximumValue: number = 0;
	get logActualMaximumValue(): number {
		return this._logActualMaximumValue;
	}
	set logActualMaximumValue(value: number) {
		this._logActualMaximumValue = value;
	}
	private _actualVisibleMaximumValue: number = 0;
	static readonly actualVisibleMaximumValuePropertyName: string = "ActualVisibleMaximumValue";
	get actualVisibleMaximumValue(): number {
		return this._actualVisibleMaximumValue;
	}
	set actualVisibleMaximumValue(value: number) {
		if (this.actualVisibleMaximumValue != value) {
			let oldValue: number = this._actualVisibleMaximumValue;
			this._actualVisibleMaximumValue = value;
			this.raisePropertyChanged(NumericAxisBase.actualVisibleMaximumValuePropertyName, oldValue, this.actualVisibleMaximumValue);
		}
	}
	static readonly intervalPropertyName: string = "Interval";
	static readonly intervalProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.intervalPropertyName, Number_$type, (<any>NumericAxisBase).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAxisBase>sender).raisePropertyChanged(NumericAxisBase.intervalPropertyName, e.oldValue, e.newValue)));
	get interval(): number {
		return <number>this.getValue(NumericAxisBase.intervalProperty);
	}
	set interval(value: number) {
		this.setValue(NumericAxisBase.intervalProperty, value);
	}
	private _actualInterval: number = 0;
	static readonly actualIntervalPropertyName: string = "ActualInterval";
	get actualInterval(): number {
		return this._actualInterval;
	}
	set actualInterval(value: number) {
		if (this.actualInterval != value) {
			let oldValue: number = this._actualInterval;
			this._actualInterval = value;
			this.raisePropertyChanged(NumericAxisBase.actualIntervalPropertyName, oldValue, this.actualInterval);
		}
	}
	resolveActualInterval(): number {
		return this.actualInterval;
	}
	static readonly minorIntervalPropertyName: string = "MinorInterval";
	static readonly minorIntervalProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.minorIntervalPropertyName, Number_$type, (<any>NumericAxisBase).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<NumericAxisBase>((<any>NumericAxisBase).$type, sender)).raisePropertyChanged(NumericAxisBase.minorIntervalPropertyName, e.oldValue, e.newValue)));
	get minorInterval(): number {
		return <number>this.getValue(NumericAxisBase.minorIntervalProperty);
	}
	set minorInterval(value: number) {
		this.setValue(NumericAxisBase.minorIntervalProperty, value);
	}
	private _actualMinorInterval: number = 0;
	static readonly actualMinorIntervalPropertyName: string = "ActualMinorInterval";
	get actualMinorInterval(): number {
		return this._actualMinorInterval;
	}
	set actualMinorInterval(value: number) {
		if (this.actualMinorInterval != value) {
			let oldValue: number = this._actualMinorInterval;
			this._actualMinorInterval = value;
			this.raisePropertyChanged(NumericAxisBase.actualMinorIntervalPropertyName, oldValue, this.actualMinorInterval);
		}
	}
	get referenceValue(): number {
		return <number>this.getValue(NumericAxisBase.referenceValueProperty);
	}
	set referenceValue(value: number) {
		this.setValue(NumericAxisBase.referenceValueProperty, value);
	}
	static readonly referenceValuePropertyName: string = "ReferenceValue";
	static readonly referenceValueProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.referenceValuePropertyName, Number_$type, (<any>NumericAxisBase).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAxisBase>sender).raisePropertyChanged(NumericAxisBase.referenceValuePropertyName, e.oldValue, e.newValue)));
	get isLogarithmic(): boolean {
		return <boolean>this.getValue(NumericAxisBase.isLogarithmicProperty);
	}
	set isLogarithmic(value: boolean) {
		this.setValue(NumericAxisBase.isLogarithmicProperty, value);
	}
	static readonly isLogarithmicPropertyName: string = "IsLogarithmic";
	static readonly isLogarithmicProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.isLogarithmicPropertyName, Boolean_$type, (<any>NumericAxisBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAxisBase>sender).raisePropertyChanged(NumericAxisBase.isLogarithmicPropertyName, e.oldValue, e.newValue)));
	private static readonly actualIsLogarithmicPropertyName: string = "ActualIsLogarithmic";
	private _actualIsLogarithmic: boolean = false;
	get actualIsLogarithmic(): boolean {
		return this._actualIsLogarithmic;
	}
	set actualIsLogarithmic(value: boolean) {
		if (this.actualIsLogarithmic != value) {
			let oldValue: boolean = this._actualIsLogarithmic;
			if (oldValue != value) {
				this._actualIsLogarithmic = value;
				this.raisePropertyChanged(NumericAxisBase.actualIsLogarithmicPropertyName, oldValue, this.actualIsLogarithmic);
			}
		}
	}
	get isReallyLogarithmic(): boolean {
		return this.actualIsLogarithmic && this.actualMinimumValue > 0 && this.logarithmBaseCached > 1;
	}
	get logarithmBase(): number {
		return typeGetValue(this.getValue(NumericAxisBase.logarithmBaseProperty));
	}
	set logarithmBase(value: number) {
		this.setValue(NumericAxisBase.logarithmBaseProperty, value);
	}
	static readonly logarithmBasePropertyName: string = "LogarithmBase";
	static readonly logarithmBaseProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.logarithmBasePropertyName, Number_$type, (<any>NumericAxisBase).$type, new PropertyMetadata(2, 10, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAxisBase>sender).raisePropertyChanged(NumericAxisBase.logarithmBasePropertyName, e.oldValue, e.newValue)));
	private _logarithmBaseCached: number = 0;
	get logarithmBaseCached(): number {
		return this._logarithmBaseCached;
	}
	set logarithmBaseCached(value: number) {
		this._logarithmBaseCached = value;
	}
	private _renderer: NumericAxisRenderer = null;
	get renderer(): NumericAxisRenderer {
		return this._renderer;
	}
	set renderer(value: NumericAxisRenderer) {
		this._renderer = value;
	}
	private _logDirty: boolean = false;
	protected get logDirty(): boolean {
		return this._logDirty;
	}
	protected set logDirty(value: boolean) {
		this._logDirty = value;
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		if (this.isReallyLogarithmic && this.seriesViewer != null) {
			let effectiveViewportRect = this.getCurrentEffectiveViewport();
			let contentViewport = this.getContentViewport();
			let renderingParams = this.createRenderingParams(this.viewportRect, this.seriesViewer.actualWindowRect, effectiveViewportRect, contentViewport);
			if (renderingParams == null) {
				return;
			}
			for (let i = 0; i < renderingParams.rangeInfos.count; i++) {
				let lBase = this.logarithmBase;
				let currentRange = renderingParams.rangeInfos._inner[i];
				let trueVisibleMinimum: number = Math.min(currentRange.visibleMinimum, currentRange.visibleMaximum);
				let trueVisibleMaximum: number = Math.max(currentRange.visibleMinimum, currentRange.visibleMaximum);
				let logMin: number = Math.floor(logBase(trueVisibleMinimum, lBase));
				let logMax: number = Math.ceil(logBase(trueVisibleMaximum, lBase));
				if (logMax - logMin < 2) {
					if (typeCast<LogarithmicTickmarkValues>((<any>LogarithmicTickmarkValues).$type, this._actualTickmarkValues) !== null) {
						this._actualTickmarkValues = new LinearTickmarkValues();
					}
				} else {
					this._actualTickmarkValues = this.tickmarkValues != null ? this.tickmarkValues : ((() => {
						let $ret = new LogarithmicTickmarkValues();
						$ret.logarithmBase = lBase;
						return $ret;
					})());
				}
			}
		}
	}
	provideValidRangeMinimum(minimumValue: any): void {
		super.provideValidRangeMinimum(minimumValue);
		this.minimumValue = <number>minimumValue;
	}
	provideValidRangeMaximum(maximumValue: any): void {
		super.provideValidRangeMinimum(maximumValue);
		this.maximumValue = <number>maximumValue;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case NumericAxisBase.minimumValuePropertyName:
			this.updateRange();
			this.renderAxis1(false);
			break;

			case NumericAxisBase.maximumValuePropertyName:
			this.updateRange();
			this.renderAxis1(false);
			break;

			case NumericAxisBase.isLogarithmicPropertyName:
			this.logDirty = true;
			this.actualIsLogarithmic = this.isLogarithmic;
			break;

			case Axis.crossingValuePropertyName:

			case Axis.crossingAxisPropertyName:

			case NumericAxisBase.intervalPropertyName:

			case NumericAxisBase.minorIntervalPropertyName:
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case NumericAxisBase.logarithmBasePropertyName:
			this.logDirty = true;
			this.logarithmBaseCached = this.logarithmBase;
			if (this.actualIsLogarithmic) {
				this.updateRange();
				this.invalidateSeries();
				this.renderAxis1(false);
			}
			break;

			case NumericAxisBase.referenceValuePropertyName:
			let ea: AxisRangeChangedEventArgs = new AxisRangeChangedEventArgs(0, this.actualMinimumValue, this.actualMinimumValue, this.actualMaximumValue, this.actualMaximumValue);
			this.raiseRangeChanged(ea);
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case NumericAxisBase.labelSettingsPropertyName:
			this.renderer = this.createRenderer();
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case NumericAxisBase.tickmarkValuesPropertyName:
			this.updateActualTickmarkValues();
			break;

			case NumericAxisBase.actualIsLogarithmicPropertyName:
			this.updateRange();
			this.invalidateSeries();
			this.mustInvalidateLabels = true;
			this.updateActualTickmarkValues();
			this.renderAxis1(false);
			break;

			case NumericAxisBase.actualTickmarkValuesPropertyName:
			this.mustInvalidateLabels = true;
			this.renderAxis1(false);
			break;

			case NumericAxisBase.abbreviateLargeNumbersPropertyName:
			this.renderAxis1(false);
			break;

		}

	}
	protected invalidateSeries(): void {
		for (let series of fromEnum<Series>(this.directSeries())) {
			series.renderSeries(false);
		}
	}
	getAxisRange(): AxisRange {
		let newRange: AxisRange = new AxisRange(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
		let rangeFound: boolean = false;
		if (this.seriesViewer != null) {
			for (let series of fromEnum<Series>(this.directSeries())) {
				let range: AxisRange = series.getRange(this);
				if (range != null) {
					rangeFound = true;
					newRange = new AxisRange(Math.min(newRange.minimum, range.minimum), Math.max(newRange.maximum, range.maximum));
				}
			}
		}
		if (rangeFound) {
			return newRange;
		}
		return null;
	}
	calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, isLogarithmic: boolean, logarithmBase: number, actualMinimumValue: number, actualMaximumValue: number): { p5: number; p6: number; } {
		let $ret = AutoRangeCalculator.calculateRange(target, minimumValue, maximumValue, isLogarithmic, logarithmBase, actualMinimumValue, actualMaximumValue);
		actualMinimumValue = $ret.p5;
		actualMaximumValue = $ret.p6;
		return {
			p5: actualMinimumValue,
			p6: actualMaximumValue

		};
	}
	updateRangeOverride(): boolean {
		let isLogarithmic: boolean = this.actualIsLogarithmic && !isNaN_(this.logarithmBase) && !isInfinity(this.logarithmBase) && this.logarithmBase > 1;
		let minimumValue: number;
		let maximumValue: number;
		let $ret = this.calculateRange(this, this.minimumValue, this.maximumValue, isLogarithmic, this.logarithmBase, minimumValue, maximumValue);
		minimumValue = $ret.p5;
		maximumValue = $ret.p6;
		if (minimumValue != this.actualMinimumValue || maximumValue != this.actualMaximumValue || this.logDirty) {
			this.logDirty = false;
			let ea: AxisRangeChangedEventArgs = new AxisRangeChangedEventArgs(0, this.actualMinimumValue, minimumValue, this.actualMaximumValue, maximumValue);
			this.actualMinimumValue = minimumValue;
			this.actualMaximumValue = maximumValue;
			this.raiseRangeChanged(ea);
			this.onRangeChanged(ea);
			this.renderAxis1(true);
			return true;
		}
		return false;
	}
	onRangeChanged(ea: AxisRangeChangedEventArgs): void {
	}
	registerSeries(series: Series): boolean {
		let success: boolean = super.registerSeries(series);
		if (success) {
			this.updateRange();
		}
		return success;
	}
	deregisterSeries(series: Series): boolean {
		let success: boolean = super.deregisterSeries(series);
		if (success) {
			this.updateRange();
		}
		return success;
	}
	instantiateRenderer(labelManager: AxisLabelManager): NumericAxisRenderer {
		return new NumericAxisRenderer(labelManager);
	}
	createRenderer(): NumericAxisRenderer {
		let labelManager: AxisLabelManager = ((() => {
			let $ret = new AxisLabelManager();
			$ret.axis = this;
			$ret.labelPositions = this.labelPositions;
			$ret.labelDataContext = this.labelDataContext;
			$ret.targetPanel = this.labelPanel;
			return $ret;
		})());
		if (this.labelSettings != null) {
			this.labelSettings.registerAxis(this);
		}
		let renderer: NumericAxisRenderer = this.instantiateRenderer(labelManager);
		renderer.clear = () => {
			let axisGeometry: GeometryCollection = this.view.getAxisLinesGeometry();
			let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
			let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
			let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
			this.updateLineVisibility();
			this.clearMarks(axisGeometry);
			this.clearMarks(stripsGeometry);
			this.clearMarks(majorGeometry);
			this.clearMarks(minorGeometry);
		};
		renderer.shouldRender = (viewport: Rect, window: Rect) => !window.isEmpty && !viewport.isEmpty;
		renderer.createRenderingParams = (viewport: Rect, window: Rect, effectiveViewportRect: Rect, contentViewport: Rect) => this.createRenderingParams(viewport, window, effectiveViewportRect, contentViewport);
		renderer.getLabelForItem = (item: any) => this.getLabel(item);
		return renderer;
	}
	createRenderingParamsInstance(): NumericAxisRenderingParameters {
		return new NumericAxisRenderingParameters();
	}
	floatLabelPanel(): void {
	}
	createScalerOverride(): NumericScaler {
		return null;
	}
	createRenderingParams(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): NumericAxisRenderingParameters {
		let parameters: NumericAxisRenderingParameters = this.createRenderingParamsInstance();
		let axisGeometry: GeometryCollection = this.view.getAxisLinesGeometry();
		let stripsGeometry: GeometryCollection = this.view.getStripsGeometry();
		let majorGeometry: GeometryCollection = this.view.getMajorLinesGeometry();
		let minorGeometry: GeometryCollection = this.view.getMinorLinesGeometry();
		let axisRenderingInfo: PathRenderingInfo = this.view.getAxisLinesPathInfo();
		let majorLinesRenderingInfo: PathRenderingInfo = this.view.getMajorLinesPathInfo();
		let minorLinesRenderingInfo: PathRenderingInfo = this.view.getMinorLinesPathInfo();
		parameters.axisGeometry = axisGeometry;
		parameters.strips = stripsGeometry;
		parameters.major = majorGeometry;
		parameters.minor = minorGeometry;
		parameters.axisRenderingInfo = axisRenderingInfo;
		parameters.majorRenderingInfo = majorLinesRenderingInfo;
		parameters.minorRenderingInfo = minorLinesRenderingInfo;
		parameters.actualMaximumValue = this.actualMaximumValue;
		parameters.actualMinimumValue = this.actualMinimumValue;
		parameters.hasUserMax = this.hasUserMaximum;
		parameters.tickmarkValues = this.actualTickmarkValues;
		parameters.viewportRect = viewportRect;
		parameters.effectiveViewportRect = effectiveViewportRect;
		parameters.contentViewport = contentViewport;
		parameters.windowRect = windowRect;
		parameters.heuristicResolution = this.resolveHeuristicResolution();
		parameters.hasUserInterval = this.hasUserInterval();
		parameters.interval = this.interval;
		parameters.minorInterval = this.minorInterval;
		parameters.label = this.label;
		if (this.label == null && this.formatLabel != null) {
			parameters.label = "Format";
		}
		parameters.shouldRenderMinorLines = this.shouldRenderMinorLines;
		parameters.abbreviateLargeNumbers = this.abbreviateLargeNumbers;
		return parameters;
	}
	unscaleValue(unscaledValue: number): number {
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let sParams: ScalerParams = new ScalerParams(0, this.seriesViewer.actualWindowRect, this.viewportRect, this.isInverted, effectiveViewportRect);
		return this.getUnscaledValue(unscaledValue, sParams);
	}
	hasUserInterval(): boolean {
		return !isNaN_(this.interval);
	}
	get hasUserMinimum(): boolean {
		return !isNaN_(this.minimumValue);
	}
	get hasUserMaximum(): boolean {
		return !isNaN_(this.maximumValue);
	}
	private updateActualTickmarkValues(): void {
		if (this.tickmarkValues != null) {
			this.actualTickmarkValues = this.tickmarkValues;
		} else if (this.actualIsLogarithmic) {
			this.actualTickmarkValues = new LogarithmicTickmarkValues();
			this.numericView.bindLogarithmBaseToActualTickmarks();
		} else {
			this.actualTickmarkValues = new LinearTickmarkValues();
		}
	}
	private static readonly tickmarkValuesPropertyName: string = "TickmarkValues";
	static readonly tickmarkValuesProperty: DependencyProperty = DependencyProperty.register(NumericAxisBase.tickmarkValuesPropertyName, (<any>TickmarkValues).$type, (<any>NumericAxisBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericAxisBase>sender).raisePropertyChanged(NumericAxisBase.tickmarkValuesPropertyName, e.oldValue, e.newValue)));
	get tickmarkValues(): TickmarkValues {
		return typeCast<TickmarkValues>((<any>TickmarkValues).$type, this.getValue(NumericAxisBase.tickmarkValuesProperty));
	}
	set tickmarkValues(value: TickmarkValues) {
		this.setValue(NumericAxisBase.tickmarkValuesProperty, value);
	}
	private static readonly actualTickmarkValuesPropertyName: string = "ActualTickmarkValues";
	private _actualTickmarkValues: TickmarkValues = null;
	get actualTickmarkValues(): TickmarkValues {
		if (this._actualTickmarkValues == null) {
			this.updateActualTickmarkValues();
		}
		return this._actualTickmarkValues;
	}
	set actualTickmarkValues(value: TickmarkValues) {
		let oldValue: any = this._actualTickmarkValues;
		let changed: boolean = oldValue != value;
		if (changed) {
			this._actualTickmarkValues = value;
			this.raisePropertyChanged(NumericAxisBase.actualTickmarkValuesPropertyName, oldValue, value);
		}
	}
	private static readonly abbreviateLargeNumbersPropertyName: string = "AbbreviateLargeNumbers";
	private _abbreviateLargeNumbers: boolean = false;
	get abbreviateLargeNumbers(): boolean {
		return this._abbreviateLargeNumbers;
	}
	set abbreviateLargeNumbers(value: boolean) {
		let oldValue: boolean = this.abbreviateLargeNumbers;
		if (value != oldValue) {
			this._abbreviateLargeNumbers = value;
			this.raisePropertyChanged(NumericAxisBase.abbreviateLargeNumbersPropertyName, oldValue, this.abbreviateLargeNumbers);
		}
	}
}

/**
 * @hidden 
 */
export abstract class NumericScaler extends DependencyObject {
	static $t: Type = markType(NumericScaler, 'NumericScaler', (<any>DependencyObject).$type);
	static readonly unitRect: Rect = new Rect(0, 0, 0, 1, 1);
	abstract calculateRange(target: NumericAxisBase, minimumValue: number, maximumValue: number, actualMinimumValue: number, actualMaximumValue: number): { p3: number; p4: number; };
	protected static readonly actualMinimumValuePropertyName: string = "ActualMinimumValue";
	static readonly actualMinimumValueProperty: DependencyProperty = DependencyProperty.register(NumericScaler.actualMinimumValuePropertyName, Number_$type, (<any>NumericScaler).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericScaler>sender).onPropertyChanged(NumericScaler.actualMinimumValuePropertyName, e.oldValue, e.newValue)));
	get actualMinimumValue(): number {
		return <number>this.getValue(NumericScaler.actualMinimumValueProperty);
	}
	set actualMinimumValue(value: number) {
		this.setValue(NumericScaler.actualMinimumValueProperty, value);
	}
	protected static readonly actualMaximumValuePropertyName: string = "ActualMaximumValue";
	static readonly actualMaximumValueProperty: DependencyProperty = DependencyProperty.register(NumericScaler.actualMaximumValuePropertyName, Number_$type, (<any>NumericScaler).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<NumericScaler>sender).onPropertyChanged(NumericScaler.actualMaximumValuePropertyName, e.oldValue, e.newValue)));
	get actualMaximumValue(): number {
		return <number>this.getValue(NumericScaler.actualMaximumValueProperty);
	}
	set actualMaximumValue(value: number) {
		this.setValue(NumericScaler.actualMaximumValueProperty, value);
	}
	protected cachedActualMinimumValue: number = 0;
	protected cachedActualMaximumValue: number = 0;
	setActualMinimumValue(value: number): void {
		this.actualMinimumValue = value;
	}
	setActualMaximumValue(value: number): void {
		this.actualMaximumValue = value;
	}
	protected onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case NumericScaler.actualMinimumValuePropertyName:
			this.cachedActualMinimumValue = this.actualMinimumValue;
			this.updateActualRange();
			break;

			case NumericScaler.actualMaximumValuePropertyName:
			this.cachedActualMaximumValue = this.actualMaximumValue;
			this.updateActualRange();
			break;

		}

	}
	private updateActualRange(): void {
		if (isNaN_(this.actualMinimumValue) || isNaN_(this.actualMaximumValue) || isInfinity(this.actualMinimumValue) || isInfinity(this.actualMaximumValue) || this.actualMinimumValue < <number>(-7.9228162514264338E+28) || this.actualMaximumValue > <number>(7.9228162514264338E+28)) {
			this.actualRange = this.actualMaximumValue - this.actualMinimumValue;
		} else {
			this.actualRange = this.actualMaximumValue - this.actualMinimumValue;
		}
	}
	private _actualRange: number = 0;
	protected get actualRange(): number {
		return this._actualRange;
	}
	protected set actualRange(value: number) {
		this._actualRange = value;
	}
	abstract getUnscaledValue(scaledValue: number, p: ScalerParams): number;
	abstract getScaledValue(unscaledValue: number, p: ScalerParams): number;
	getUnscaledValueList(scaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): IList$1<number> {
		let result: IList$1<number> = new List$1<number>(Number_$type, 2, scaledValues.count);
		for (let i: number = startIndex; i < count; i++) {
			result.add(this.getUnscaledValue(scaledValues.item(i), p));
		}
		return result;
	}
	getScaledValueList(unscaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		for (let i: number = startIndex; i < count; i++) {
			unscaledValues.item(i, this.getScaledValue(unscaledValues.item(i), p));
		}
	}
	getScaledBucketValueList(unscaledValues: IList$1<number[]>, bucketIndexes: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		for (let j = 0; j < bucketIndexes.count; j++) {
			let index = bucketIndexes.item(j);
			for (let i: number = startIndex; i < count; i++) {
				unscaledValues.item(i)[index] = this.getScaledValue(unscaledValues.item(i)[index], p);
			}
		}
	}
}

/**
 * @hidden 
 */
export class AxisRendererBase extends Base {
	static $t: Type = markType(AxisRendererBase, 'AxisRendererBase');
	constructor(labelManager: AxisLabelManager) {
		super();
		this.clear = () => {
		};
		this.shouldRender = (r1: Rect, r2: Rect) => false;
		this.onRendering = () => {
		};
		this.scaling = (p: AxisRenderingParametersBase, v: number) => v;
		this.strip = (p: AxisRenderingParametersBase, g: GeometryCollection, min: number, max: number) => {
		};
		this.line = (p: AxisRenderingParametersBase, g: GeometryCollection, v: number) => {
		};
		this.shouldRenderLines = (p: AxisRenderingParametersBase, v: number) => false;
		this.shouldRenderContent = (p: AxisRenderingParametersBase, v: number) => this.shouldRenderLines(p, v);
		this.axisLine = (p: AxisRenderingParametersBase) => {
		};
		this.determineCrossingValue = (p: AxisRenderingParametersBase) => {
		};
		this.shouldRenderLabel = (p: AxisRenderingParametersBase, v: number, last: boolean) => false;
		this.getLabelLocation = (p: AxisRenderingParametersBase, v: number) => new LabelPosition(v);
		this.transformToLabelValue = (p: AxisRenderingParametersBase, v: number) => v;
		this.getLabelForItem = (item: any) => null;
		this.snapMajorValue = (p: AxisRenderingParametersBase, v: number, i: number, interval: number) => v;
		this.adjustMajorValue = (p: AxisRenderingParametersBase, v: number, i: number, interval: number) => v;
		this.labelManager = labelManager;
		this.createRenderingParams = (r1: Rect, r2: Rect, r3: Rect, r4: Rect) => null;
	}
	private _clear: () => void = null;
	get clear(): () => void {
		return this._clear;
	}
	set clear(value: () => void) {
		this._clear = value;
	}
	private _shouldRender: (viewportRect: Rect, windowRect: Rect) => boolean = null;
	get shouldRender(): (viewportRect: Rect, windowRect: Rect) => boolean {
		return this._shouldRender;
	}
	set shouldRender(value: (viewportRect: Rect, windowRect: Rect) => boolean) {
		this._shouldRender = value;
	}
	private _onRendering: () => void = null;
	get onRendering(): () => void {
		return this._onRendering;
	}
	set onRendering(value: () => void) {
		this._onRendering = value;
	}
	private _scaling: (p: AxisRenderingParametersBase, value: number) => number = null;
	get scaling(): (p: AxisRenderingParametersBase, value: number) => number {
		return this._scaling;
	}
	set scaling(value: (p: AxisRenderingParametersBase, value: number) => number) {
		this._scaling = value;
	}
	private _strip: (p: AxisRenderingParametersBase, geometry: GeometryCollection, startValue: number, endValue: number) => void = null;
	get strip(): (p: AxisRenderingParametersBase, geometry: GeometryCollection, startValue: number, endValue: number) => void {
		return this._strip;
	}
	set strip(value: (p: AxisRenderingParametersBase, geometry: GeometryCollection, startValue: number, endValue: number) => void) {
		this._strip = value;
	}
	private _line: (p: AxisRenderingParametersBase, geometry: GeometryCollection, value: number) => void = null;
	get line(): (p: AxisRenderingParametersBase, geometry: GeometryCollection, value: number) => void {
		return this._line;
	}
	set line(value: (p: AxisRenderingParametersBase, geometry: GeometryCollection, value: number) => void) {
		this._line = value;
	}
	private _shouldRenderLines: (p: AxisRenderingParametersBase, value: number) => boolean = null;
	get shouldRenderLines(): (p: AxisRenderingParametersBase, value: number) => boolean {
		return this._shouldRenderLines;
	}
	set shouldRenderLines(value: (p: AxisRenderingParametersBase, value: number) => boolean) {
		this._shouldRenderLines = value;
	}
	private _shouldRenderContent: (p: AxisRenderingParametersBase, value: number) => boolean = null;
	get shouldRenderContent(): (p: AxisRenderingParametersBase, value: number) => boolean {
		return this._shouldRenderContent;
	}
	set shouldRenderContent(value: (p: AxisRenderingParametersBase, value: number) => boolean) {
		this._shouldRenderContent = value;
	}
	private _axisLine: (p: AxisRenderingParametersBase) => void = null;
	get axisLine(): (p: AxisRenderingParametersBase) => void {
		return this._axisLine;
	}
	set axisLine(value: (p: AxisRenderingParametersBase) => void) {
		this._axisLine = value;
	}
	private _determineCrossingValue: (p: AxisRenderingParametersBase) => void = null;
	get determineCrossingValue(): (p: AxisRenderingParametersBase) => void {
		return this._determineCrossingValue;
	}
	set determineCrossingValue(value: (p: AxisRenderingParametersBase) => void) {
		this._determineCrossingValue = value;
	}
	private _shouldRenderLabel: (p: AxisRenderingParametersBase, position: number, isLastLabel: boolean) => boolean = null;
	get shouldRenderLabel(): (p: AxisRenderingParametersBase, position: number, isLastLabel: boolean) => boolean {
		return this._shouldRenderLabel;
	}
	set shouldRenderLabel(value: (p: AxisRenderingParametersBase, position: number, isLastLabel: boolean) => boolean) {
		this._shouldRenderLabel = value;
	}
	private _getLabelLocation: (p: AxisRenderingParametersBase, value: number) => LabelPosition = null;
	get getLabelLocation(): (p: AxisRenderingParametersBase, value: number) => LabelPosition {
		return this._getLabelLocation;
	}
	set getLabelLocation(value: (p: AxisRenderingParametersBase, value: number) => LabelPosition) {
		this._getLabelLocation = value;
	}
	private _transformToLabelValue: (p: AxisRenderingParametersBase, value: number) => number = null;
	get transformToLabelValue(): (p: AxisRenderingParametersBase, value: number) => number {
		return this._transformToLabelValue;
	}
	set transformToLabelValue(value: (p: AxisRenderingParametersBase, value: number) => number) {
		this._transformToLabelValue = value;
	}
	private _labelManager: AxisLabelManager = null;
	get labelManager(): AxisLabelManager {
		return this._labelManager;
	}
	set labelManager(value: AxisLabelManager) {
		this._labelManager = value;
	}
	private _getLabelForItem: (item: any) => any = null;
	get getLabelForItem(): (item: any) => any {
		return this._getLabelForItem;
	}
	set getLabelForItem(value: (item: any) => any) {
		this._getLabelForItem = value;
	}
	private _createRenderingParams: (viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect) => AxisRenderingParametersBase = null;
	get createRenderingParams(): (viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect) => AxisRenderingParametersBase {
		return this._createRenderingParams;
	}
	set createRenderingParams(value: (viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect) => AxisRenderingParametersBase) {
		this._createRenderingParams = value;
	}
	private _snapMajorValue: (p: AxisRenderingParametersBase, value: number, absoluteIndex: number, interval: number) => number = null;
	get snapMajorValue(): (p: AxisRenderingParametersBase, value: number, absoluteIndex: number, interval: number) => number {
		return this._snapMajorValue;
	}
	set snapMajorValue(value: (p: AxisRenderingParametersBase, value: number, absoluteIndex: number, interval: number) => number) {
		this._snapMajorValue = value;
	}
	private _adjustMajorValue: (p: AxisRenderingParametersBase, value: number, absolueIndex: number, interval: number) => number = null;
	get adjustMajorValue(): (p: AxisRenderingParametersBase, value: number, absolueIndex: number, interval: number) => number {
		return this._adjustMajorValue;
	}
	set adjustMajorValue(value: (p: AxisRenderingParametersBase, value: number, absolueIndex: number, interval: number) => number) {
		this._adjustMajorValue = value;
	}
	private _getGroupCenter: (index: number, window: Rect, viewport: Rect, effectiveViewport: Rect) => number = null;
	get getGroupCenter(): (index: number, window: Rect, viewport: Rect, effectiveViewport: Rect) => number {
		return this._getGroupCenter;
	}
	set getGroupCenter(value: (index: number, window: Rect, viewport: Rect, effectiveViewport: Rect) => number) {
		this._getGroupCenter = value;
	}
	private _getUnscaledGroupCenter: (index: number) => number = null;
	get getUnscaledGroupCenter(): (index: number) => number {
		return this._getUnscaledGroupCenter;
	}
	set getUnscaledGroupCenter(value: (index: number) => number) {
		this._getUnscaledGroupCenter = value;
	}
	render(animate: boolean, viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): AxisRenderingParametersBase {
		this.clearLabels(windowRect, viewportRect);
		if (this.shouldRender(viewportRect, windowRect)) {
			this.onRendering();
			let renderingParams: AxisRenderingParametersBase = this.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport);
			this.clearLabels(windowRect, viewportRect);
			if (renderingParams == null) {
				this.resetLabels();
				return null;
			}
			if (renderingParams.rangeInfos.count > 1 && !renderingParams.hasUserInterval) {
				this.spreadInterval(renderingParams);
			}
			for (let range of fromEnum<RangeInfo>(renderingParams.rangeInfos)) {
				renderingParams.currentRangeInfo = range;
				if (isNaN_(range.visibleMaximum) || isInfinity(range.visibleMaximum) || isNaN_(range.visibleMinimum) || isInfinity(range.visibleMinimum)) {
					continue;
				}
				if (range.visibleMinimum == range.visibleMaximum) {
					continue;
				}
				this.determineCrossingValue(renderingParams);
				this.labelManager.floatPanel(renderingParams.relativeCrossingValue);
				let mode: CategoryMode = CategoryMode.Mode0;
				let mode2GroupCount: number = 0;
				let isInverted: boolean = false;
				let getUnscaledGroupCenter: (index: number) => number = (n: number) => <number>n;
				if (this.getGroupCenter != null) {
					getUnscaledGroupCenter = this.getUnscaledGroupCenter;
				}
				if (typeCast<CategoryAxisRenderingParameters>((<any>CategoryAxisRenderingParameters).$type, renderingParams) !== null) {
					mode = (<CategoryAxisRenderingParameters>renderingParams).categoryMode;
					mode2GroupCount = (<CategoryAxisRenderingParameters>renderingParams).mode2GroupCount;
					isInverted = (<CategoryAxisRenderingParameters>renderingParams).isInverted;
				}
				renderingParams.tickmarkValues = this.getTickmarkValues(renderingParams);
				renderingParams.tickmarkValues.initialize(((() => {
					let $ret = new TickmarkValuesInitializationParameters();
					$ret.visibleMinimum = renderingParams.currentRangeInfo.visibleMinimum;
					$ret.visibleMaximum = renderingParams.currentRangeInfo.visibleMaximum;
					$ret.actualMinimum = renderingParams.actualMinimumValue;
					$ret.actualMaximum = renderingParams.actualMaximumValue;
					$ret.resolution = renderingParams.currentRangeInfo.resolution;
					$ret.hasUserInterval = renderingParams.hasUserInterval;
					$ret.userInterval = renderingParams.interval;
					$ret.minorInterval = renderingParams.minorInterval;
					$ret.heuristicResolution = renderingParams.heuristicResolution;
					$ret.intervalOverride = renderingParams.currentRangeInfo.intervalOverride;
					$ret.minorCountOverride = renderingParams.currentRangeInfo.minorCountOverride;
					$ret.mode = mode;
					$ret.mode2GroupCount = mode2GroupCount;
					$ret.window = renderingParams.windowRect;
					$ret.viewport = renderingParams.viewportRect;
					$ret.isInverted = isInverted;
					$ret.getUnscaledGroupCenter = getUnscaledGroupCenter;
					return $ret;
				})()));
				this.renderInternal(renderingParams);
			}
			this.renderLabels();
			return renderingParams;
		}
		return null;
	}
	private resetLabels(): void {
		this.labelManager.resetLabels();
	}
	private spreadInterval(renderingParams: AxisRenderingParametersBase): void {
		let maxInterval: number = -1.7976931348623157E+308;
		let maxMinorCount: number = -2147483648;
		let mode: CategoryMode = CategoryMode.Mode0;
		let mode2GroupCount: number = 0;
		let isInverted: boolean = false;
		let getUnscaledGroupCenter: (index: number) => number = (n: number) => <number>n;
		if (this.getGroupCenter != null) {
			getUnscaledGroupCenter = this.getUnscaledGroupCenter;
		}
		if (typeCast<CategoryAxisRenderingParameters>((<any>CategoryAxisRenderingParameters).$type, renderingParams) !== null) {
			mode = (<CategoryAxisRenderingParameters>renderingParams).categoryMode;
			mode2GroupCount = (<CategoryAxisRenderingParameters>renderingParams).mode2GroupCount;
			isInverted = (<CategoryAxisRenderingParameters>renderingParams).isInverted;
		}
		for (let rangeInfo of fromEnum<RangeInfo>(renderingParams.rangeInfos)) {
			renderingParams.currentRangeInfo = rangeInfo;
			renderingParams.tickmarkValues.initialize(((() => {
				let $ret = new TickmarkValuesInitializationParameters();
				$ret.visibleMinimum = rangeInfo.visibleMinimum;
				$ret.visibleMaximum = rangeInfo.visibleMaximum;
				$ret.actualMinimum = renderingParams.actualMinimumValue;
				$ret.actualMaximum = renderingParams.actualMaximumValue;
				$ret.resolution = rangeInfo.resolution;
				$ret.hasUserInterval = renderingParams.hasUserInterval;
				$ret.userInterval = renderingParams.interval;
				$ret.intervalOverride = rangeInfo.intervalOverride;
				$ret.minorCountOverride = rangeInfo.minorCountOverride;
				$ret.heuristicResolution = renderingParams.heuristicResolution;
				$ret.minorInterval = renderingParams.minorInterval;
				$ret.mode = mode;
				$ret.mode2GroupCount = mode2GroupCount;
				$ret.window = renderingParams.windowRect;
				$ret.viewport = renderingParams.viewportRect;
				$ret.isInverted = isInverted;
				$ret.getUnscaledGroupCenter = getUnscaledGroupCenter;
				return $ret;
			})()));
			rangeInfo.intervalOverride = renderingParams.tickmarkValues.interval;
			rangeInfo.minorCountOverride = renderingParams.tickmarkValues.minorCount;
			if (!isNaN_(renderingParams.tickmarkValues.interval)) {
				maxInterval = Math.max(maxInterval, renderingParams.tickmarkValues.interval);
				maxMinorCount = Math.max(maxMinorCount, renderingParams.tickmarkValues.minorCount);
			}
		}
		for (let rangeInfo1 of fromEnum<RangeInfo>(renderingParams.rangeInfos)) {
			if (rangeInfo1.intervalOverride == maxInterval) {
				rangeInfo1.intervalOverride = -1;
				rangeInfo1.minorCountOverride = -1;
			} else {
				rangeInfo1.intervalOverride = maxInterval;
				rangeInfo1.minorCountOverride = maxMinorCount;
			}
		}
	}
	protected clearLabels(windowRect: Rect, viewportRect: Rect): void {
		this.clear();
		this.labelManager.clear(windowRect, viewportRect);
		this.labelManager.updateLabelPanel();
	}
	private renderLabels(): void {
		this.labelManager.updateLabelPanel();
		let mustRefresh: boolean = false;
		if (this.labelManager.labelsHidden) {
			this.labelManager.setTextBlockCount(0);
		} else {
			let textBlockCount: number = 0;
			for (let labelObj of fromEnum<any>(this.labelManager.labelDataContext)) {
				let label: FrameworkElement = typeCast<FrameworkElement>((<any>FrameworkElement).$type, labelObj);
				if (label == null) {
					label = this.labelManager.getTextBlock(textBlockCount);
					let currentText = (<TextBlock>label).text;
					let nextText = labelObj.toString();
					let currentLen: number = 0;
					let nextLen: number = 0;
					if (currentText != null) {
						currentLen = currentText.length;
					}
					if (nextText != null) {
						nextLen = nextText.length;
					}
					if (currentLen != nextLen) {
						mustRefresh = true;
					}
					(<TextBlock>label).text = nextText;
					textBlockCount++;
				} else {
					this.labelManager.addLabel(label);
				}
			}
			if (mustRefresh) {
				this.labelManager.notifyMustRefresh();
			}
			this.labelManager.addAnnotations();
			this.labelManager.setTextBlockCount(textBlockCount);
		}
	}
	private getTickmarkValues(renderingParams: AxisRenderingParametersBase): TickmarkValues {
		return renderingParams.tickmarkValues;
	}
	private renderInternal(renderingParams: AxisRenderingParametersBase): void {
		let majorTicks: number[] = renderingParams.tickmarkValues.majorValuesArray();
		let minorTicks: number[] = renderingParams.tickmarkValues.minorValuesArray();
		this.labelManager.setLabelInterval(this.scaling(renderingParams, renderingParams.tickmarkValues.interval));
		this.axisLine(renderingParams);
		for (let maj: number = 0; maj < majorTicks.length; maj++) {
			let absoluteIndex: number = renderingParams.tickmarkValues.firstIndex + maj;
			let majorTick: number = majorTicks[maj];
			let unscaledValue: number = majorTick;
			let nextUnscaledValue: number = 0;
			if (maj < majorTicks.length - 1) {
				nextUnscaledValue = majorTicks[maj + 1];
			} else {
				nextUnscaledValue = Number.POSITIVE_INFINITY;
			}
			unscaledValue = this.snapMajorValue(renderingParams, unscaledValue, absoluteIndex, renderingParams.tickmarkValues.interval);
			nextUnscaledValue = this.snapMajorValue(renderingParams, nextUnscaledValue, absoluteIndex, renderingParams.tickmarkValues.interval);
			let majorValue: number = this.scaling(renderingParams, unscaledValue);
			let nextMajorValue: number = this.scaling(renderingParams, nextUnscaledValue);
			if (this.shouldRenderLines(renderingParams, majorValue)) {
				if (absoluteIndex % 2 == 0 && this.shouldRenderContent(renderingParams, nextMajorValue) && !isInfinity(nextMajorValue)) {
					this.strip(renderingParams, renderingParams.strips, majorValue, nextMajorValue);
				}
				renderingParams.currentRenderingInfo = renderingParams.majorRenderingInfo;
				this.line(renderingParams, renderingParams.major, majorValue);
				renderingParams.currentRenderingInfo = null;
			}
			majorValue = this.adjustMajorValue(renderingParams, majorValue, absoluteIndex, renderingParams.tickmarkValues.interval);
			if (!isNaN_(majorValue) && !isInfinity(majorValue) && this.shouldRenderLabel(renderingParams, majorValue, maj == majorTicks.length - 1)) {
				let label: any = this.getLabel(renderingParams, unscaledValue, absoluteIndex, renderingParams.tickmarkValues.interval);
				if (label != null) {
					this.labelManager.addLabelObject(label, this.getLabelLocation(renderingParams, majorValue));
				}
			}
		}
		if (renderingParams.shouldRenderMinorLines) {
			for (let min: number = 0; min < minorTicks.length; min++) {
				let minorTick: number = minorTicks[min];
				let minorValue: number = this.scaling(renderingParams, minorTick);
				renderingParams.currentRenderingInfo = renderingParams.minorRenderingInfo;
				this.line(renderingParams, renderingParams.minor, minorValue);
				renderingParams.currentRenderingInfo = null;
			}
		}
	}
	getLabel(renderingParams: AxisRenderingParametersBase, unscaledValue: number, index: number, interval: number): any {
		return null;
	}
}

/**
 * @hidden 
 */
export class NumericAxisRenderer extends AxisRendererBase {
	static $t: Type = markType(NumericAxisRenderer, 'NumericAxisRenderer', (<any>AxisRendererBase).$type);
	constructor(labelManager: AxisLabelManager) {
		super(labelManager);
	}
	getLabel(renderingParams: AxisRenderingParametersBase, unscaledValue: number, index: number, interval: number): any {
		let label: any;
		if (renderingParams.label != null) {
			label = this.getLabelForItem(unscaledValue);
		} else {
			unscaledValue = Math.round(unscaledValue * 1000000) / 1000000;
			if (renderingParams.isNumeric() && (<NumericAxisRenderingParameters>renderingParams).abbreviateLargeNumbers) {
				return this.abbreviate(unscaledValue);
			}
			label = unscaledValue.toString();
		}
		return label;
	}
	private _abbreviator: INumberAbbreviator = null;
	private _noAbbreviator: boolean = false;
	private abbreviate(value: number): string {
		if (this._noAbbreviator) {
			return value.toString();
		}
		if (this._abbreviator == null) {
			this._abbreviator = NumberAbbreviatorFactory.getAbbreviator(this.labelManager.axis.sRP);
			if (this._abbreviator == null) {
				this._noAbbreviator = true;
				return value.toString();
			}
		}
		return this._abbreviator.abbreviate(value);
	}
}

/**
 * @hidden 
 */
export class VerticalAxisLabelPanel extends AxisLabelPanelBase {
	static $t: Type = markType(VerticalAxisLabelPanel, 'VerticalAxisLabelPanel', (<any>AxisLabelPanelBase).$type);
	createView(): AxisLabelPanelBaseView {
		return new VerticalAxisLabelPanelView(this);
	}
	onViewCreated(view: AxisLabelPanelBaseView): void {
		super.onViewCreated(view);
		this.verticalView = <VerticalAxisLabelPanelView>view;
	}
	private _verticalView: VerticalAxisLabelPanelView;
	get verticalView(): VerticalAxisLabelPanelView {
		return this._verticalView;
	}
	set verticalView(value: VerticalAxisLabelPanelView) {
		this._verticalView = value;
	}
	private _largestWidth: number = 0;
	get largestWidth(): number {
		return this._largestWidth;
	}
	set largestWidth(value: number) {
		this._largestWidth = value;
	}
	private _largestHeight: number = 0;
	get largestHeight(): number {
		return this._largestHeight;
	}
	set largestHeight(value: number) {
		this._largestHeight = value;
	}
	private _largestRenderWidth: number = 0;
	get largestRenderWidth(): number {
		return this._largestRenderWidth;
	}
	set largestRenderWidth(value: number) {
		this._largestRenderWidth = value;
	}
	private _largestRenderHeight: number = 0;
	get largestRenderHeight(): number {
		return this._largestRenderHeight;
	}
	set largestRenderHeight(value: number) {
		this._largestRenderHeight = value;
	}
	bindExtent(): void {
		this.verticalView.bindExtent();
	}
	getTitleEffectiveAngle(): number {
		return this.axis.titleSettings != null ? this.axis.titleSettings.angle : -90;
	}
	getLabelLeftOffset(): number {
		let offset: number = 0;
		let posistion = this.getTitlePosition(this.axis.titleSettings);
		if (posistion == AxisTitlePosition.Left) {
			offset += this.getTitleWidthBounds();
		}
		let actualLocation = this.actualLabelLocation;
		if (actualLocation == AxisLabelsLocation.OutsideRight || actualLocation == AxisLabelsLocation.InsideRight) {
			offset += this.axis.actualTickLength;
		}
		return offset;
	}
	getLabelRightOffset(): number {
		let offset: number = 0;
		let posistion = this.getTitlePosition(this.axis.titleSettings);
		if (posistion == AxisTitlePosition.Right) {
			offset += this.getTitleWidthBounds();
		}
		let actualLocation = this.actualLabelLocation;
		if (actualLocation == AxisLabelsLocation.OutsideLeft || actualLocation == AxisLabelsLocation.InsideLeft) {
			offset += this.axis.actualTickLength;
		}
		return offset;
	}
	getLabelSpan(): number {
		let span = (this.actualExtent - this.getLabelLeftOffset()) - this.getLabelRightOffset();
		if (span < 0) {
			span = 0;
		}
		return span;
	}
	getLabelRenderSpan(): number {
		let span = ((this.getLabelSpan() - this.view.getLabelLeftMargin()) - this.view.getLabelRightMargin());
		if (span < 0) {
			span = 0;
		}
		return span;
	}
	createBoundsRectangles(): List$1<Rect> {
		let rectangles = new List$1<Rect>((<any>Rect).$type, 0);
		this.useStaggering = false;
		this.useRotation = false;
		if (this.labelSettings != null && this.labelSettings.hasUserAngle() && this.getEffectiveAngle() % 360 != 0) {
			this.useRotation = true;
		}
		this.largestWidth = -1.7976931348623157E+308;
		this.largestHeight = -1.7976931348623157E+308;
		this.largestRenderWidth = -1.7976931348623157E+308;
		this.largestRenderHeight = -1.7976931348623157E+308;
		let marginLeft = this.view.getLabelLeftMargin();
		let marginTop = this.view.getLabelTopMargin();
		let marginRight = this.view.getLabelRightMargin();
		let marginBottom = this.view.getLabelBottomMargin();
		let labelLeftOffset = this.getLabelLeftOffset();
		let hasReset: boolean = false;
		if (!isNaN_(this.cachedOverlayExtent)) {
			this.largestWidth = Math.max(this.cachedOverlayExtent, this.largestWidth);
			this.largestRenderWidth = Math.max(this.cachedOverlayRenderExtent, this.largestRenderWidth);
		}
		for (let i: number = 0; i < this.textBlocks.count; i++) {
			let currentTextBlock: FrameworkElement = this.textBlocks._inner[i];
			let isOverlay = this.labelPositions._inner[i].isOverlay;
			let textHeight: number = this.getDesiredHeight(currentTextBlock);
			let textWidth: number = this.getDesiredWidth(currentTextBlock);
			let rectHeight: number = textHeight + marginTop + marginBottom;
			let rectWidth: number = textWidth + marginLeft + marginRight;
			let x: number = this.labelViewport.left + labelLeftOffset;
			let y: number = this.labelPositions._inner[i].value - rectHeight / 2;
			if (isOverlay) {
				let cached = this.cachedOverlayExtent;
				if ((isNaN_(this.cachedOverlayExtent) || rectWidth > this.cachedOverlayExtent || this.labelPositions._inner[i].resetOverlayExtent) && !hasReset) {
					if (this.labelPositions._inner[i].resetOverlayExtent) {
						hasReset = true;
					}
					this.labelPositions._inner[i].resetOverlayExtent = false;
					this.cachedOverlayExtent = rectWidth;
					this.cachedOverlayRenderExtent = textWidth;
				}
				this.largestWidth = Math.max(this.cachedOverlayExtent, this.largestWidth);
				this.largestHeight = Math.max(rectHeight, this.largestHeight);
				this.largestRenderWidth = Math.max(this.cachedOverlayRenderExtent, this.largestRenderWidth);
				this.largestRenderHeight = Math.max(textHeight, this.largestRenderHeight);
			} else {
				this.largestWidth = Math.max(rectWidth, this.largestWidth);
				this.largestHeight = Math.max(rectHeight, this.largestHeight);
				this.largestRenderWidth = Math.max(textWidth, this.largestRenderWidth);
				this.largestRenderHeight = Math.max(textHeight, this.largestRenderHeight);
			}
			let rect: Rect = new Rect(0, x, y, rectWidth, rectHeight);
			rectangles.add(rect);
		}
		let angleDegrees: number = 0;
		if (this.useRotation) {
			angleDegrees = this.getEffectiveAngle() % 360;
			if (angleDegrees < 0) {
				angleDegrees += 360;
			}
		}
		let hasUserExtent: boolean = this.axis.hasUserExtent();
		if (!hasUserExtent) {
			this.calculateExtent(angleDegrees, marginLeft, marginRight);
		} else {
			this.view.bindExtentToSettings();
		}
		if (this.useRotation) {
			for (let i1: number = 0; i1 < rectangles.count; i1++) {
				let currentRect: Rect = rectangles._inner[i1];
				currentRect.y = this.labelPositions._inner[i1].value - this.largestHeight / 2;
				rectangles._inner[i1] = currentRect;
			}
		}
		let skipClipping: boolean = false;
		if (!this.useRotation && this.largestWidth <= this.actualExtent) {
			skipClipping = true;
		}
		if (!skipClipping) {
			let actualHeight: number = this.labelViewport.height;
			let labelSpan: number = this.getLabelSpan();
			let clipWidth: number = labelSpan;
			let span: number = this.labelPositions.count > 1 ? <number>Math.abs(this.labelPositions._inner[1].value - this.labelPositions._inner[0].value) : actualHeight;
			let startClippingAngle: number = Math.abs(Math.asin(span / this.largestWidth) * (180 / Math.PI));
			let optimize: boolean = (angleDegrees >= startClippingAngle && angleDegrees <= 180 - startClippingAngle) || (angleDegrees - 180 >= startClippingAngle && angleDegrees - 180 <= 180 - startClippingAngle);
			for (let i2: number = 0; i2 < rectangles.count; i2++) {
				if (this.useRotation) {
					let angleRadians: number = angleDegrees * (Math.PI / 180);
					let textwidth: number = this.getWidthBounds(this.textBlocks._inner[i2]);
					clipWidth = Math.min(labelSpan / Math.abs(Math.cos(angleRadians)), textwidth);
					if (optimize) {
						let rad: number;
						if (angleDegrees > 0 && angleDegrees < 90) {
							rad = (Math.PI / 180) * (90 - angleDegrees);
						} else if (angleDegrees > 270 && angleDegrees < 360) {
							rad = (Math.PI / 180) * (angleDegrees - 270);
						} else {
							rad = 0;
						}
						clipWidth = span / Math.cos(rad);
					}
				}
				let currentRect1: Rect = rectangles._inner[i2];
				currentRect1.width = Math.min(currentRect1.width, clipWidth);
				rectangles._inner[i2] = currentRect1;
				if (!(typeCast<TextBlock>((<any>TextBlock).$type, this.textBlocks._inner[i2]) !== null)) {
					this.textBlocks._inner[i2].width = clipWidth;
				}
				let textBlock: TextBlock = typeCast<TextBlock>((<any>TextBlock).$type, this.textBlocks._inner[i2]);
				if (textBlock != null) {
					let newText: string = this.trimTextBlock(i2, textBlock, clipWidth, marginLeft, marginRight);
					if (!Base.equalsStatic(textBlock.text, newText)) {
						textBlock.text = newText;
						this.textBlocks._inner[i2].width = clipWidth;
					}
				}
			}
			if (!hasUserExtent) {
				this.calculateExtent(angleDegrees, marginLeft, marginRight);
			}
		}
		if (this.shouldHorizontalAlign()) {
			this.doHorizontalAlignment(rectangles);
		}
		return rectangles;
	}
	private calculateExtent(angleDegrees: number, marginLeft: number, marginRight: number): void {
		let rad: number = angleDegrees * (Math.PI / 180);
		let rotatedLabelWidth: number = Math.abs(this.largestRenderWidth * Math.cos(rad)) + Math.abs(this.largestRenderHeight * Math.sin(rad));
		let widthBounds: number = this.getTitleWidthBounds();
		let extent: number = (rotatedLabelWidth + marginLeft + marginRight) + (widthBounds) + this.axis.actualTickLength;
		this.extent = Math.max(this.axis.minExtent, extent);
	}
	private doHorizontalAlignment(rectangles: List$1<Rect>): void {
		this.verticalView.handleHorizontalAlignment(rectangles, this.largestWidth);
	}
	setLabelRotationTransform(label: FrameworkElement, angle: number): void {
		let centerX: number = 0;
		let centerY: number = this.largestRenderHeight / 2;
		let group = new TransformGroup();
		let effectiveAngle = AngleSimplifier.simplifyAngle(this.getEffectiveAngle());
		let transform = ((() => {
			let $ret = new RotateTransform();
			$ret.angle = effectiveAngle;
			$ret.centerX = centerX;
			$ret.centerY = centerY;
			return $ret;
		})());
		let xShift: number = 0;
		let yShift: number = 0;
		if (effectiveAngle != 0 && effectiveAngle != 360) {
			effectiveAngle -= 90;
			if (effectiveAngle > 0 && effectiveAngle < 180) {
				transform.centerX = this.largestRenderWidth;
				xShift = -this.largestRenderWidth + this.largestRenderHeight / 2;
				xShift = xShift + Math.sin(MathUtil.radians(effectiveAngle - 180)) * (this.largestRenderHeight / 2);
			} else {
				if (effectiveAngle >= 180) {
					xShift = xShift - Math.cos(MathUtil.radians(effectiveAngle)) * (this.largestRenderHeight / 2);
				} else {
					xShift = xShift + Math.cos(MathUtil.radians(effectiveAngle)) * (this.largestRenderHeight / 2);
				}
			}
		}
		let translate = ((() => {
			let $ret = new TranslateTransform();
			$ret.x = xShift;
			$ret.y = yShift;
			return $ret;
		})());
		group.children.add(transform);
		group.children.add(translate);
		label.renderTransform = group;
	}
	protected shouldHorizontalAlign(): boolean {
		return !this.useStaggering && !this.useRotation;
	}
	getTitleBounds(): Rect {
		let position = this.getTitlePosition(this.axis.titleSettings);
		let titleWidth = this.getTitleWidthBounds();
		let actualLocation = this.actualLabelLocation;
		let left: number = 0;
		if (position == AxisTitlePosition.Left) {
			left += this.labelViewport.left;
			if (actualLocation == AxisLabelsLocation.OutsideRight || actualLocation == AxisLabelsLocation.InsideRight) {
				left += this.axis.actualTickLength;
			}
		} else {
			left = this.labelViewport.right - titleWidth;
			if (actualLocation == AxisLabelsLocation.InsideLeft || actualLocation == AxisLabelsLocation.OutsideLeft) {
				left -= this.axis.actualTickLength;
			}
		}
		let titleHeight = this.getTitleHeightBounds();
		let top: number = 0;
		let vert: VerticalAlignment = this.axis.titleSettings == null ? VerticalAlignment.Center : this.axis.titleSettings.verticalAlignment;
		if (vert == VerticalAlignment.Top) {
			top = this.labelViewport.top;
		} else if (vert == VerticalAlignment.Bottom) {
			top = this.labelViewport.bottom - titleHeight;
		} else {
			top = (this.labelViewport.top + (this.labelViewport.height / 2)) - (titleHeight / 2);
		}
		return new Rect(0, left, top, titleWidth, titleHeight);
	}
	getTitlePosition(titleSettings: TitleSettings): AxisTitlePosition {
		if (titleSettings == null) {
			return this.axis.seriesViewer.getDefaultVerticalAxisTitlePosition(this.axis);
		}
		if (titleSettings.position == AxisTitlePosition.Auto) {
			if (this.axis != null && this.axis.seriesViewer != null) {
				return this.axis.seriesViewer.getDefaultVerticalAxisTitlePosition(this.axis);
			}
			return AxisTitlePosition.Left;
		}
		return titleSettings.position;
	}
	getDefaultLabelsLocation(): AxisLabelsLocation {
		return AxisLabelsLocation.OutsideLeft;
	}
	validLocation(location: AxisLabelsLocation): boolean {
		return location == AxisLabelsLocation.OutsideLeft || location == AxisLabelsLocation.OutsideRight || location == AxisLabelsLocation.InsideLeft || location == AxisLabelsLocation.InsideRight;
	}
	protected createTicks(): void {
		let ticksGeometry = this.view.getTicksGeometry();
		this.axis.clearMarks(ticksGeometry);
		if (this.labelSettings != null && this.labelSettings.visibility != Visibility.Visible) {
			return;
		}
		let tickLength = this.axis.actualTickLength;
		if (tickLength == 0) {
			return;
		}
		let positions = this.getTickValues();
		if (positions == null) {
			return;
		}
		let x1: number = this.labelViewport.left;
		let x2: number;
		let actualLocation = this.actualLabelLocation;
		if (actualLocation == AxisLabelsLocation.OutsideLeft || actualLocation == AxisLabelsLocation.InsideLeft) {
			x1 = this.labelViewport.right;
			x2 = x1 - tickLength;
		} else {
			x2 = x1 + tickLength;
		}
		let tickRenderingInfo = this.view.getThicksRenderingInfo();
		for (let y of fromEnum<number>(positions)) {
			this.horizontalTick(ticksGeometry, y, x1, x2, this.viewportRect, tickRenderingInfo);
		}
		if (!this.children.contains(this.view.ticks)) {
			this.children.add(this.view.ticks);
		}
	}
}

/**
 * @hidden 
 */
export interface IHasCategoryAxis { 
	readonly categoryAxis: CategoryAxisBase;
getOffsetValue(): number;
getCategoryWidth(): number;
}

/**
 * @hidden 
 */
export let IHasCategoryAxis_$type = new Type(null, 'IHasCategoryAxis');

/**
 * @hidden 
 */
export interface IHasCategoryModePreference extends IHasCategoryAxis { 
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode;
}

/**
 * @hidden 
 */
export let IHasCategoryModePreference_$type = new Type(null, 'IHasCategoryModePreference', null, [IHasCategoryAxis_$type]);

/**
 * @hidden 
 */
export interface IHighlightingManager { 
	startHighlight(info: HighlightingInfo): void;
endHighlight(info: HighlightingInfo): void;
clear(): void;
getHighlightingInfo(owner: Series, itemsSource: IFastItemsSource, indexAxis: Axis, startIndex: number, endIndex: number, isMarker: boolean): HighlightingInfo;
tick(progress: number): boolean;
inProgress: boolean;
maxHighlightingProgress: number;
sumHighlightingProgress: number;
maxMarkerHighlightingProgress: number;
sumMarkerHighlightingProgress: number;
readonly dirtySeries: List$1<Series>;
}

/**
 * @hidden 
 */
export let IHighlightingManager_$type = new Type(null, 'IHighlightingManager');

/**
 * @hidden 
 */
export class HighlightingInfo extends Base {
	static $t: Type = markType(HighlightingInfo, 'HighlightingInfo');
	constructor() {
		super();
		this.state = HighlightingState.outward;
		this.progress = 0;
		this.isMarker = false;
	}
	private _startIndex: number = 0;
	get startIndex(): number {
		return this._startIndex;
	}
	set startIndex(value: number) {
		this._startIndex = value;
	}
	private _endIndex: number = 0;
	get endIndex(): number {
		return this._endIndex;
	}
	set endIndex(value: number) {
		this._endIndex = value;
	}
	private _state: HighlightingState = <HighlightingState>0;
	get state(): HighlightingState {
		return this._state;
	}
	set state(value: HighlightingState) {
		this._state = value;
	}
	private _progress: number = 0;
	get progress(): number {
		return this._progress;
	}
	set progress(value: number) {
		this._progress = value;
	}
	private _isMarker: boolean = false;
	get isMarker(): boolean {
		return this._isMarker;
	}
	set isMarker(value: boolean) {
		this._isMarker = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
}

/**
 * @hidden 
 */
export interface ISeriesInteractionManager { 
	getDistanceToIndexHelper(target: Series, world: Point, index: number, axis: Axis, scalerParams: ScalerParams, offset: number, count: number, getExactUnsortedIndex: (arg1: Point) => number): number;
getSeriesValueHelper(target: Series, column: IList$1<number>, world: Point, axis: Axis, pars: ScalerParams, offset: number, getExactUnsortedIndex: (arg1: Point) => number, useInterpolation: boolean, skipUnknowns: boolean): number;
getInterpolatedSeriesValue(target: Series, p: number, column: IList$1<number>, prevItem: number, nextItem: number, unsortedPrevItem: number, unsortedNextItem: number, offset: number, isSorting: boolean): number;
getPreviousOrExactIndexHelper(target: Series, world: Point, skipUnknowns: boolean, indexAxis: Axis, getExactUnsortedIndex: (arg1: Point) => number, valueColumn: IList$1<number>): number;
testHighLowStrokeOver(target: Series, position: Point, isFinger: boolean): boolean;
getMatchingBuckets(target: Series, categoryAxis: CategoryAxisBase, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, world: Point, skipUnknowns: boolean): number[][];
testNearStroke(series: Series, position: Point, isFinger: boolean, pathData1: PathGeometry): boolean;
testOverPoly(series: Series, position: Point, pathData1: PathGeometry): boolean;
getNextOrExactIndexHelper(series: Series, world: Point, skipUnknowns: boolean, indexAxis: Axis, getExactUnsortedIndex: (arg1: Point) => number, valueColumn: IList$1<number>): number;
getExactUnsortedItemIndexHelper(series: Series, world: Point, axis: Axis): number;
testShapesOver(target: Series, position: Point, isFinger: boolean): boolean;
getSeriesValuePositionHelper(target: Series, world: Point, useInterpolation: boolean, skipUnknowns: boolean, offset: number, valueAxis: Axis, indexAxis: Axis, getSeriesValue: (arg1: Point, arg2: boolean, arg3: boolean) => number, getPrevious: (arg1: Point, arg2: boolean) => number, getNext: (arg1: Point, arg2: boolean) => number): Point;
modifyHighlights(target: Series, item: any, world: Point, directlyOver: boolean, leaving: boolean): void;
applyHighlightingColor(target: Series, info: HighlightingInfo, actualRenderOutline: Brush): Brush;
onMouseEnter(target: Series, pt: Point, source: any, data: any): void;
simulateHover(target: Series, point: Point): void;
onMouseMove(target: Series, point: Point, source: any, data: any): void;
onMouseLeave(target: Series, pt: Point, p: any, data: any): void;
onLeftButtonDown(target: Series, pt: Point, source: any, data: any): void;
onMouseLeftButtonUp(target: Series, pt: Point, source: any, data: any): void;
onLostMouseCapture(target: Series, pt: Point, source: any, data: any): void;
onRightButtonDown(target: Series, pt: Point, source: any, data: any): void;
onRightButtonUp(target: Series, pt: Point, source: any, data: any): void;
getDefaultTooltipTemplate(target: Series): string;
getDefaultTooltipTemplateLabelColorString(target: Series): string;
readonly isMouseLeaveDeferred: boolean;
readonly lastHoverItem: any;
updateToolTipValue(target: Series, toolTip: any): void;
showToolTip(target: Series, pt: Point, add: (arg1: any) => void): void;
hideTooltip(target: Series): void;
removeToolTipFromCurrentParent(target: Series): void;
readonly mouseIsOver: boolean;
readonly alternateViews: Dictionary$2<string, SeriesView>;
ensureAlternateView(target: Series, viewportRect: Rect, windowRect: Rect, viewIdentifier: string, effectiveScalingRatio: number): void;
removeAllAlternateViews(target: Series, oldViewer: SeriesViewer): void;
removeAlternateView(target: Series, viewIdentifier: string, seriesViewer: SeriesViewer): void;
}

/**
 * @hidden 
 */
export let ISeriesInteractionManager_$type = new Type(null, 'ISeriesInteractionManager');

/**
 * @hidden 
 */
export interface ISeriesViewerInteractionManager { 
	getResolvedHitTestmode(seriesViewer: SeriesViewer): ChartHitTestMode;
onStateChanged(seriesViewer: SeriesViewer): void;
onDragDelta(seriesViewer: SeriesViewer, point: Point): void;
onPlotAreaHold(seriesViewer: SeriesViewer, pt: Point): void;
onDragStarted(seriesViewer: SeriesViewer, pt: Point, isFinger: boolean): void;
onDragCompleted(seriesViewer: SeriesViewer, point: Point): void;
onZoomStart(seriesViewer: SeriesViewer): void;
onPinchStarted(target: SeriesViewer, point: Point): void;
onZoomStarted(target: SeriesViewer, point: Point, deltaScaleX: number, deltaScaleY: number, isoDeltaScale: number): void;
onPinchDelta(target: SeriesViewer, p: number): void;
onZoomDelta(target: SeriesViewer, p: Point, deltaScaleX: number, deltaScaleY: number, isoDeltaScale: number): void;
onManipulationStarted(target: SeriesViewer, point: Point): void;
onPinchCompleted(target: SeriesViewer, p: number): void;
onGestureCompleted(target: SeriesViewer, pt: Point): void;
onZoomCompleted(target: SeriesViewer, pt: Point, scaleDeltaX: number, scaleDeltaY: number, isoScaleDelta: number): void;
onContactStarted(target: SeriesViewer, pt: Point, isFinger: boolean): void;
onZoomPanInteractionStarting(target: SeriesViewer): void;
onZoomPanInteractionEnding(target: SeriesViewer): void;
startTiledZoomIfNecessary(target: SeriesViewer): void;
endTiledZoomIfRunning(target: SeriesViewer): void;
clearTileZoomCache(target: SeriesViewer): void;
onContactMoved(target: SeriesViewer, pt: Point, isFinger: boolean): void;
onContactCompleted(seriesViewer: SeriesViewer, pt: Point, isFinger: boolean): void;
renderCrosshairs(seriesViewer: SeriesViewer): void;
onPreferHigherResolutionTilesChanged(target: SeriesViewer): void;
onKeyDown(target: SeriesViewer, key: Key): boolean;
onMouseWheel(target: SeriesViewer, pt: Point, delta: number): boolean;
onDoubleTap(target: SeriesViewer, pt: Point): void;
deferredClearOfTileZoomCache(model: SeriesViewer): void;
clearVisibleTiles(target: SeriesViewer): void;
readonly highlightingManager: IHighlightingManager;
getHitSeries(target: SeriesViewer, attachedSeries: SeriesCollection, hitContext: RenderingContext, p: Point, forceUpdate: boolean, context: DataContext, isFinger: boolean): { ret: Series; p5: DataContext; };
shouldInteract(target: SeriesViewer, p: Point): boolean;
onImmediateModeMouseOver(target: SeriesViewer, attachedSeries: SeriesCollection, hitContext: RenderingContext, p: Point, onMouseMove: boolean, isFinger: boolean): void;
onImmediateModeMouseLeave(target: SeriesViewer, p: Point): void;
onImmediateModeMouseDown(target: SeriesViewer, ep: EventProxy, p: Point): void;
onImmediateModeMouseUp(target: SeriesViewer, ep: EventProxy, p: Point): void;
onImmediateModeContactStarted(target: SeriesViewer, p: Point, isFinger: boolean): void;
onMobileModeChanged(target: SeriesViewer, mobileMode: boolean): void;
}

/**
 * @hidden 
 */
export let ISeriesViewerInteractionManager_$type = new Type(null, 'ISeriesViewerInteractionManager');

/**
 * @hidden 
 */
export interface IDataChartVisualDataManager { 
	exportVisualData(xamDataChart: XamDataChart): any;
}

/**
 * @hidden 
 */
export let IDataChartVisualDataManager_$type = new Type(null, 'IDataChartVisualDataManager');

/**
 * @hidden 
 */
export interface IAxisVisualDataManager { 
	exportVisualData(axis: Axis): any;
}

/**
 * @hidden 
 */
export let IAxisVisualDataManager_$type = new Type(null, 'IAxisVisualDataManager');

/**
 * @hidden 
 */
export interface ISeriesVisualDataManager { 
	exportVisualData(series: Series, viewport: Rect): any;
exportMarkerVisualData(series: MarkerSeries, svd: any): void;
getMarkerVisualData(series: Series, m: Marker, markerTemplate: DataTemplate): any;
copyVisualData(target: any, source: any): void;
exportTrendlineData(series: Series, svd: any, trendPolyline: Polyline): void;
exportStackedVisualData(series: Series, viewport: Rect): any;
createFragmentVisualData(series: Series, viewport: Rect, name1: string, name2: string): any;
addSubSeriesVisualData(svd: any, fragmentVisualData: any): void;
exportRectangleData(svd: any, rectangle: Rectangle, name: string, tags: string[]): void;
exportMarkerVisualDataFromMarker(series: Series, svd: any, contentControl: ContentControl): void;
exportPathData(svd: any, path: Path, name: string, tags: string[]): void;
exportPolylineData(svd: any, polyline: Polyline, name: string, tags: string[]): void;
exportPolygonData(svd: any, polygon: Polygon, name: string, tags: string[]): void;
exportSeriesPixelsData(svd: any, pixels: number[], imageWidth: number, imageHeight: number): void;
addPointerTooltipData(svd: any, vd: any, offsetX: number, offsetY: number, categoryNames: List$1<string>): void;
exportPointerTooltipData(pointerShape: Polygon, pointerOutlineShape: Polyline, _lastRectangle: Rectangle, rect: Rect): any;
exportCalloutData(left: number, top: number, marginLeft: number, marginTop: number, svd: any, calloutBackgrond: Rectangle, calloutText: TextBlock, font: FontInfo, calloutLeaderLine: Line, v1: string, v2: string[]): void;
}

/**
 * @hidden 
 */
export let ISeriesVisualDataManager_$type = new Type(null, 'ISeriesVisualDataManager');

/**
 * @hidden 
 */
export class XamDataChart extends SeriesViewer {
	static $t: Type = markType(XamDataChart, 'XamDataChart', (<any>SeriesViewer).$type);
	static decimalMinimumValueAsDouble: number = 0;
	static decimalMaximumValueAsDouble: number = 0;
	private _xsr: SRProvider = null;
	private get XSRP(): SRProvider {
		if (this._xsr == null) {
			this._xsr = new SRProvider(this.view.viewManager.container);
		}
		return this._xsr;
	}
	private _dataChartVisualDataManager: IDataChartVisualDataManager = null;
	get dataChartVisualDataManager(): IDataChartVisualDataManager {
		if (this._dataChartVisualDataManager == null) {
			this._dataChartVisualDataManager = <IDataChartVisualDataManager><any>DVContainer.instance.createInstance(IDataChartVisualDataManager_$type, () => this.XSRP.dataChart_VisualDataNotLoaded);
		}
		return this._dataChartVisualDataManager;
	}
	static staticInit(): void {
		XamDataChart.decimalMinimumValueAsDouble = -1.7976931348623157E+308;
		XamDataChart.decimalMaximumValueAsDouble = 1.7976931348623157E+308;
	}
	static findSeriesIndex(series: Series): number {
		if (series.seriesViewer == null) {
			return -1;
		}
		if (!series.isIndexed) {
			return -1;
		}
		let allSeries = XamDataChartView.getAllSeries(series);
		if (allSeries.count == 0) {
			return -1;
		}
		let maxIndex: number = -1;
		for (let i = 0; i < allSeries.count; i++) {
			maxIndex = Math.max(maxIndex, allSeries._inner[i].index);
		}
		let index: number = maxIndex + 1;
		if (series.isFragment) {
			index = series.getFragmentIndex();
			if (index == -1) {
				return -1;
			}
			let parentSeries = series.resolveParentSeries();
			index = parentSeries.index + index;
		}
		return index;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>XamDataChart).$type;
		let $t = this.axes;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.axes_CollectionChanged));
		let $t1 = this.axes;
		$t1.collectionResetting = delegateCombine($t1.collectionResetting, runOn(this, this.axes_CollectionResetting));
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case XamDataChart.windowScaleHorizontalPropertyName:
			this.actualWindowScaleHorizontal = this.windowScaleHorizontal;
			break;

			case XamDataChart.windowScaleVerticalPropertyName:
			this.actualWindowScaleVertical = this.windowScaleVertical;
			break;

			case XamDataChart.actualWindowScaleHorizontalPropertyName:

			case XamDataChart.actualWindowScaleVerticalPropertyName:
			if (!this.suspendWindowRect) {
				this.updateWindowRect(this.getActualWindowScaleHorizontal(), this.getActualWindowScaleVertical());
			}
			break;

			case XamDataChart.gridModePropertyName:
			(<XamDataChartView>this.view).updateGridMode(newValue);
			{
				for (let axis of fromEnum<Axis>(this.axes)) {
					axis.renderAxis();
				}
			}
			break;

			case XamDataChart.horizontalZoomablePropertyName:
			this.isHorizontalZoomEnabled = this.horizontalZoomable;
			break;

			case XamDataChart.verticalZoomablePropertyName:
			this.isVerticalZoomEnabled = this.verticalZoomable;
			break;

			case XamDataChart.isHorizontalZoomEnabledPropertyName:

			case XamDataChart.isVerticalZoomEnabledPropertyName:
			this.updateOverviewPlusDetailPaneControlPanelVisibility();
			break;

			case XamDataChart.alignsGridLinesToPixelsPropertyName:

			case XamDataChart.shouldClipGridlinesPropertyName:
			if (oldValue != newValue) {
				for (let axis1 of fromEnum<Axis>(this.axes)) {
					axis1.mustInvalidateLabels = true;
					axis1.renderAxis();
				}
			}
			break;

			case XamDataChart.defaultAxisStrokePropertyName:

			case XamDataChart.defaultAxisMajorStrokePropertyName:

			case XamDataChart.defaultAxisMinorStrokePropertyName:
			for (let axis2 of fromEnum<Axis>(this.axes)) {
				axis2.updateActualBrushes();
			}
			break;

		}

	}
	private onPlotAreaMarginsChanged(): void {
		this.effectiveViewport = this.computeEffectiveViewport(this.viewportRect);
		for (let axis of fromEnum<Axis>(this.axes)) {
			axis.mustInvalidateLabels = true;
			axis.renderAxis();
		}
		for (let series of fromEnum<Series>(this.series)) {
			series.renderSeries(false);
		}
	}
	get isSquare(): boolean {
		return <boolean>this.getValue(XamDataChart.isSquareProperty);
	}
	set isSquare(value: boolean) {
		this.setValue(XamDataChart.isSquareProperty, value);
	}
	static readonly isSquarePropertyName: string = "IsSquare";
	static readonly isSquareProperty: DependencyProperty = DependencyProperty.register(XamDataChart.isSquarePropertyName, Boolean_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.isSquarePropertyName, e.oldValue, e.newValue)));
	getActualWindowScaleHorizontal(): number {
		return this.actualWindowScaleHorizontal;
	}
	getActualWindowScaleVertical(): number {
		return this.actualWindowScaleVertical;
	}
	protected updateAcutalWindowProperties(): void {
		super.updateAcutalWindowProperties();
		this.actualWindowScaleHorizontal = this.actualWindowRect.width;
		this.actualWindowScaleVertical = this.actualWindowRect.height;
	}
	static readonly windowScaleHorizontalPropertyName: string = "WindowScaleHorizontal";
	static readonly windowScaleHorizontalProperty: DependencyProperty = DependencyProperty.register(XamDataChart.windowScaleHorizontalPropertyName, Number_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.windowScaleHorizontalPropertyName, e.oldValue, e.newValue)));
	get windowScaleHorizontal(): number {
		return <number>this.getValue(XamDataChart.windowScaleHorizontalProperty);
	}
	set windowScaleHorizontal(value: number) {
		this.setValue(XamDataChart.windowScaleHorizontalProperty, value);
	}
	static readonly windowScaleVerticalPropertyName: string = "WindowScaleVertical";
	static readonly windowScaleVerticalProperty: DependencyProperty = DependencyProperty.register(XamDataChart.windowScaleVerticalPropertyName, Number_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.windowScaleVerticalPropertyName, e.oldValue, e.newValue)));
	get windowScaleVertical(): number {
		return <number>this.getValue(XamDataChart.windowScaleVerticalProperty);
	}
	set windowScaleVertical(value: number) {
		this.setValue(XamDataChart.windowScaleVerticalProperty, value);
	}
	private _actualWindowScaleHorizontal: number = 1;
	static readonly actualWindowScaleHorizontalPropertyName: string = "ActualWindowScaleHorizontal";
	get actualWindowScaleHorizontal(): number {
		return this._actualWindowScaleHorizontal;
	}
	set actualWindowScaleHorizontal(value: number) {
		let oldValue = this._actualWindowScaleHorizontal;
		this._actualWindowScaleHorizontal = value;
		this.raisePropertyChanged(XamDataChart.actualWindowScaleHorizontalPropertyName, oldValue, this._actualWindowScaleHorizontal);
	}
	private _actualWindowScaleVertical: number = 1;
	static readonly actualWindowScaleVerticalPropertyName: string = "ActualWindowScaleVertical";
	get actualWindowScaleVertical(): number {
		return this._actualWindowScaleVertical;
	}
	set actualWindowScaleVertical(value: number) {
		let oldValue = this._actualWindowScaleVertical;
		this._actualWindowScaleVertical = value;
		this.raisePropertyChanged(XamDataChart.actualWindowScaleVerticalPropertyName, oldValue, this._actualWindowScaleVertical);
	}
	isZoomingHorizontallyEnabled(): boolean {
		return this.isHorizontalZoomEnabled;
	}
	isZoomingVerticallyEnabled(): boolean {
		return this.isVerticalZoomEnabled;
	}
	get horizontalZoomable(): boolean {
		return <boolean>this.getValue(XamDataChart.horizontalZoomableProperty);
	}
	set horizontalZoomable(value: boolean) {
		this.setValue(XamDataChart.horizontalZoomableProperty, value);
	}
	static readonly horizontalZoomablePropertyName: string = "HorizontalZoomable";
	static readonly horizontalZoomableProperty: DependencyProperty = DependencyProperty.register(XamDataChart.horizontalZoomablePropertyName, Boolean_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.horizontalZoomablePropertyName, e.oldValue, e.newValue)));
	get verticalZoomable(): boolean {
		return <boolean>this.getValue(XamDataChart.verticalZoomableProperty);
	}
	set verticalZoomable(value: boolean) {
		this.setValue(XamDataChart.verticalZoomableProperty, value);
	}
	static readonly verticalZoomablePropertyName: string = "VerticalZoomable";
	static readonly verticalZoomableProperty: DependencyProperty = DependencyProperty.register(XamDataChart.verticalZoomablePropertyName, Boolean_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.verticalZoomablePropertyName, e.oldValue, e.newValue)));
	get isHorizontalZoomEnabled(): boolean {
		return <boolean>this.getValue(XamDataChart.isHorizontalZoomEnabledProperty);
	}
	set isHorizontalZoomEnabled(value: boolean) {
		this.setValue(XamDataChart.isHorizontalZoomEnabledProperty, value);
	}
	static readonly isHorizontalZoomEnabledPropertyName: string = "IsHorizontalZoomEnabled";
	static readonly isHorizontalZoomEnabledProperty: DependencyProperty = DependencyProperty.register(XamDataChart.isHorizontalZoomEnabledPropertyName, Boolean_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.isHorizontalZoomEnabledPropertyName, e.oldValue, e.newValue)));
	get isVerticalZoomEnabled(): boolean {
		return <boolean>this.getValue(XamDataChart.isVerticalZoomEnabledProperty);
	}
	set isVerticalZoomEnabled(value: boolean) {
		this.setValue(XamDataChart.isVerticalZoomEnabledProperty, value);
	}
	static readonly isVerticalZoomEnabledPropertyName: string = "IsVerticalZoomEnabled";
	static readonly isVerticalZoomEnabledProperty: DependencyProperty = DependencyProperty.register(XamDataChart.isVerticalZoomEnabledPropertyName, Boolean_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.isVerticalZoomEnabledPropertyName, e.oldValue, e.newValue)));
	get gridMode(): GridMode {
		return EnumUtil.getEnumValue<GridMode>(GridMode_$type, this.getValue(XamDataChart.gridModeProperty));
	}
	set gridMode(value: GridMode) {
		this.setValue(XamDataChart.gridModeProperty, enumGetBox<GridMode>(GridMode_$type, value));
	}
	static readonly gridModePropertyName: string = "GridMode";
	static readonly gridModeProperty: DependencyProperty = DependencyProperty.register(XamDataChart.gridModePropertyName, GridMode_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, enumGetBox<GridMode>(GridMode_$type, GridMode.BehindSeries), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.gridModePropertyName, e.oldValue, e.newValue)));
	get alignsGridLinesToPixels(): boolean {
		return <boolean>this.getValue(XamDataChart.alignsGridLinesToPixelsProperty);
	}
	set alignsGridLinesToPixels(value: boolean) {
		this.setValue(XamDataChart.alignsGridLinesToPixelsProperty, value);
	}
	static readonly alignsGridLinesToPixelsPropertyDefault: boolean = true;
	static readonly alignsGridLinesToPixelsProperty: DependencyProperty = DependencyProperty.register("AlignsGridLinesToPixels", Boolean_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, XamDataChart.alignsGridLinesToPixelsPropertyDefault, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.alignsGridLinesToPixelsPropertyName, e.oldValue, e.newValue)));
	static readonly alignsGridLinesToPixelsPropertyName: string = "AlignsGridLinesToPixels";
	get shouldClipGridlines(): boolean {
		return <boolean>this.getValue(XamDataChart.shouldClipGridlinesProperty);
	}
	set shouldClipGridlines(value: boolean) {
		this.setValue(XamDataChart.shouldClipGridlinesProperty, value);
	}
	static readonly shouldClipGridlinesPropertyName: string = "ShouldClipGridlines";
	static readonly shouldClipGridlinesProperty: DependencyProperty = DependencyProperty.register(XamDataChart.shouldClipGridlinesPropertyName, Boolean_$type, (<any>XamDataChart).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.shouldClipGridlinesPropertyName, e.oldValue, e.newValue)));
	get brushes(): BrushCollection {
		return <BrushCollection>this.getValue(XamDataChart.brushesProperty);
	}
	set brushes(value: BrushCollection) {
		this.setValue(XamDataChart.brushesProperty, value);
	}
	static readonly brushesPropertyName: string = "Brushes";
	static readonly brushesProperty: DependencyProperty = DependencyProperty.register(XamDataChart.brushesPropertyName, (<any>BrushCollection).$type, (<any>XamDataChart).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.brushesPropertyName, e.oldValue, e.newValue)));
	get markerBrushes(): BrushCollection {
		return <BrushCollection>this.getValue(XamDataChart.markerBrushesProperty);
	}
	set markerBrushes(value: BrushCollection) {
		this.setValue(XamDataChart.markerBrushesProperty, value);
	}
	static readonly markerBrushesPropertyName: string = "MarkerBrushes";
	static readonly markerBrushesProperty: DependencyProperty = DependencyProperty.register(XamDataChart.markerBrushesPropertyName, (<any>BrushCollection).$type, (<any>XamDataChart).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.markerBrushesPropertyName, e.oldValue, e.newValue)));
	get outlines(): BrushCollection {
		return <BrushCollection>this.getValue(XamDataChart.outlinesProperty);
	}
	set outlines(value: BrushCollection) {
		this.setValue(XamDataChart.outlinesProperty, value);
	}
	static readonly outlinesPropertyName: string = "Outlines";
	static readonly outlinesProperty: DependencyProperty = DependencyProperty.register(XamDataChart.outlinesPropertyName, (<any>BrushCollection).$type, (<any>XamDataChart).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.outlinesPropertyName, e.oldValue, e.newValue)));
	get markerOutlines(): BrushCollection {
		return <BrushCollection>this.getValue(XamDataChart.markerOutlinesProperty);
	}
	set markerOutlines(value: BrushCollection) {
		this.setValue(XamDataChart.markerOutlinesProperty, value);
	}
	static readonly markerOutlinesPropertyName: string = "MarkerOutlines";
	static readonly markerOutlinesProperty: DependencyProperty = DependencyProperty.register(XamDataChart.markerOutlinesPropertyName, (<any>BrushCollection).$type, (<any>XamDataChart).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.markerOutlinesPropertyName, e.oldValue, e.newValue)));
	get defaultAxisStroke(): Brush {
		return <Brush>this.getValue(XamDataChart.defaultAxisStrokeProperty);
	}
	set defaultAxisStroke(value: Brush) {
		this.setValue(XamDataChart.defaultAxisStrokeProperty, value);
	}
	static readonly defaultAxisStrokePropertyName: string = "DefaultAxisStroke";
	static readonly defaultAxisStrokeProperty: DependencyProperty = DependencyProperty.register(XamDataChart.defaultAxisStrokePropertyName, (<any>Brush).$type, (<any>XamDataChart).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.defaultAxisStrokePropertyName, e.oldValue, e.newValue)));
	get defaultAxisMajorStroke(): Brush {
		return <Brush>this.getValue(XamDataChart.defaultAxisMajorStrokeProperty);
	}
	set defaultAxisMajorStroke(value: Brush) {
		this.setValue(XamDataChart.defaultAxisMajorStrokeProperty, value);
	}
	static readonly defaultAxisMajorStrokePropertyName: string = "DefaultAxisMajorStroke";
	static readonly defaultAxisMajorStrokeProperty: DependencyProperty = DependencyProperty.register(XamDataChart.defaultAxisMajorStrokePropertyName, (<any>Brush).$type, (<any>XamDataChart).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.defaultAxisMajorStrokePropertyName, e.oldValue, e.newValue)));
	get defaultAxisMinorStroke(): Brush {
		return <Brush>this.getValue(XamDataChart.defaultAxisMinorStrokeProperty);
	}
	set defaultAxisMinorStroke(value: Brush) {
		this.setValue(XamDataChart.defaultAxisMinorStrokeProperty, value);
	}
	static readonly defaultAxisMinorStrokePropertyName: string = "DefaultAxisMinorStroke";
	static readonly defaultAxisMinorStrokeProperty: DependencyProperty = DependencyProperty.register(XamDataChart.defaultAxisMinorStrokePropertyName, (<any>Brush).$type, (<any>XamDataChart).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamDataChart>sender).raisePropertyChanged(XamDataChart.defaultAxisMinorStrokePropertyName, e.oldValue, e.newValue)));
	get axes(): AxisCollection {
		return this._axes;
	}
	private _axes: AxisCollection = new AxisCollection();
	private axes_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (e.oldItems != null) {
			for (let axis of fromEn<Axis>(e.oldItems)) {
				if (axis != null) {
					axis.fastItemsSourceProvider = null;
					axis.seriesViewer = null;
					this.removeDataSource(axis);
					this.view.removeAxis(axis);
					axis.rangeChanged = delegateRemove(axis.rangeChanged, runOn(this, this.axis_RangeChanged));
					this.view.removeLabelPanel(axis);
					if (axis.series != null) {
						for (let series of fromEnum<Series>(axis.directSeries())) {
							series.renderSeries(false);
						}
					}
				}
			}
			if (this.axes.count == 0) {
				this.resetZoom();
			}
		}
		if (e.newItems != null) {
			for (let axis1 of fromEn<Axis>(e.newItems)) {
				if (axis1 != null) {
					this.updateDataSourceFor(axis1);
					axis1.fastItemsSourceProvider = this.actualSyncLink;
					axis1.seriesViewer = this;
					axis1.view.updateStrokeBrushesFromCss();
					this.view.attachAxis(axis1);
					axis1.rangeChanged = delegateCombine(axis1.rangeChanged, runOn(this, this.axis_RangeChanged));
					this.view.addLabelPanel(axis1);
				}
			}
		}
		this.notifyThumbnailAppearanceChanged();
	}
	private axes_CollectionResetting(sender: any, e: EventArgs): void {
		let seriesList: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
		for (let axis of fromEnum<Axis>(this.axes)) {
			if (axis.series != null) {
				for (let series of fromEnum<Series>(axis.directSeries())) {
					if (!seriesList.contains(series)) {
						seriesList.add(series);
					}
				}
			}
			axis.fastItemsSourceProvider = null;
			axis.seriesViewer = null;
			this.removeDataSource(axis);
			this.view.removeAxis(axis);
			axis.rangeChanged = delegateRemove(axis.rangeChanged, runOn(this, this.axis_RangeChanged));
			this.view.removeLabelPanel(axis);
			this.resetZoom();
		}
		for (let series1 of fromEnum<Series>(this.series)) {
			if (!seriesList.contains(series1)) {
				seriesList.add(series1);
			}
		}
		for (let series2 of fromEnum<Series>(seriesList)) {
			series2.renderSeries(false);
		}
	}
	axisRangeChanged: (sender: any, e: ChartAxisRangeChangedEventArgs) => void = null;
	private axis_RangeChanged(sender: any, args: AxisRangeChangedEventArgs): void {
		let targetAxis = typeCast<Axis>((<any>Axis).$type, sender);
		if (targetAxis == null) {
			return;
		}
		this.notifyThumbnailAppearanceChanged();
		if (this.axisRangeChanged != null) {
			this.axisRangeChanged(this, new ChartAxisRangeChangedEventArgs(this, targetAxis, args.oldMinimumValue, args.minimumValue, args.oldMaximumValue, args.maximumValue));
		}
		if (targetAxis.crossingAxis != null) {
			targetAxis.crossingAxis.refresh();
		}
		targetAxis.refresh();
		let animate: boolean = this.animateSeriesWhenAxisRangeChanges;
		if (typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, targetAxis) !== null) {
			animate = true;
		}
		for (let series of fromEnum<Series>(targetAxis.directSeries())) {
			series.thumbnailDirty = true;
			this.notifyThumbnailAppearanceChanged();
			series.renderSeries(animate);
		}
		if (targetAxis.seriesViewer != null) {
			for (let series1 of fromEnum<Series>(targetAxis.seriesViewer.series)) {
				XamDataChart.onValueOverlayRangeChanged(targetAxis, animate, series1);
			}
		}
		for (let chartAxis of fromEnum<Axis>(this.axes)) {
			if (chartAxis != targetAxis && chartAxis.crossingAxis != null && chartAxis.crossingAxis == targetAxis) {
				chartAxis.refresh();
			}
		}
	}
	private static onValueOverlayRangeChanged(targetAxis: Axis, animate: boolean, series: Series): void {
	}
	updateSyncLink(oldLink: SyncLink, newLink: SyncLink): void {
		super.updateSyncLink(oldLink, newLink);
		if (this.axes == null) {
			return;
		}
		for (let axis of fromEnum<Axis>(this.axes)) {
			axis.fastItemsSourceProvider = this.actualSyncLink;
			axis.seriesViewer = this;
		}
	}
	private _fontInfo: FontInfo = null;
	getFontInfo(): FontInfo {
		this._fontInfo = this.chartView.font;
		return this._fontInfo;
	}
	styleUpdated(): void {
		this.view.styleUpdated();
		for (let axis of fromEnum<Axis>(this.axes)) {
			axis.renderAxis1(false);
		}
		for (let series of fromEnum<Series>(this.series)) {
			series.view.updateLegendItemVisual();
			series.renderSeries(false);
		}
	}
	getFontBrush(): Brush {
		return this.chartView.fontBrush;
	}
	protected destroyOverride(): void {
		super.destroyOverride();
		let toDestroy = new List$1<Axis>((<any>Axis).$type, 0);
		for (let i = 0; i < this.axes.count; i++) {
			toDestroy.add(this.axes._inner[i]);
		}
		for (let i1 = 0; i1 < toDestroy.count; i1++) {
			this.axes.remove(toDestroy._inner[i1]);
			if (typeCast<CategoryAxisBase>((<any>CategoryAxisBase).$type, toDestroy._inner[i1]) !== null) {
				let cat = <CategoryAxisBase>toDestroy._inner[i1];
				this.removeSpecificDataSource(cat.name, true);
				cat.itemsSource = null;
			}
			toDestroy._inner[i1].provideContext(null, null);
		}
	}
	getAxisLineBrush(): Brush {
		return this.chartView.axisLineBrush;
	}
	shouldAddAutoMargins(): boolean {
		return true;
	}
	protected updateDataSources(): void {
		super.updateDataSources();
		if (!this.manageDataSources) {
			return;
		}
		for (let axis of fromEnum<Axis>(this.axes)) {
			this.updateDataSourceFor(axis);
		}
	}
	getBrushByIndex(index: number): Brush {
		return this.getBrushByIndex1(index, this.brushes);
	}
	private getBrushByIndex1(index: number, brushes: BrushCollection): Brush {
		if (brushes != null && brushes.count > 0) {
			return brushes.item(index % brushes.count);
		} else {
			return null;
		}
	}
	getMarkerBrushByIndex(index: number): Brush {
		return this.getBrushByIndex1(index, this.markerBrushes);
	}
	getMarkerOutlineByIndex(index: number): Brush {
		return this.getBrushByIndex1(index, this.markerOutlines);
	}
	getOutlineByIndex(index: number): Brush {
		return this.getBrushByIndex1(index, this.outlines);
	}
	effectiveIsSquare(): boolean {
		if (this.isSquare) {
			return true;
		}
		return this.hasPolarOrRadial();
	}
	private hasPolarOrRadial(): boolean {
		for (let i = 0; i < this.series.count; i++) {
			if (this.series._inner[i].isRadial || this.series._inner[i].isPolar) {
				return true;
			}
		}
		for (let i1 = 0; i1 < this.axes.count; i1++) {
			if (this.axes._inner[i1].isAngular || this.axes._inner[i1].isRadial) {
				return true;
			}
		}
		return false;
	}
	protected createView(): SeriesViewerView {
		return new XamDataChartView(this);
	}
	protected onViewCreated(view: SeriesViewerView): void {
		super.onViewCreated(view);
		this.chartView = <XamDataChartView>view;
	}
	private _chartView: XamDataChartView;
	get chartView(): XamDataChartView {
		return this._chartView;
	}
	set chartView(value: XamDataChartView) {
		this._chartView = value;
	}
	refreshAllContentAfterTiledZoom(): void {
		for (let i = 0; i < this._axes.count; i++) {
			this._axes._inner[i].mustInvalidateLabels = true;
			this._axes._inner[i].renderAxis1(false);
		}
		super.refreshAllContentAfterTiledZoom();
	}
	private _plotAreaMarginLeft: number = 0;
	get plotAreaMarginLeft(): number {
		return this._plotAreaMarginLeft;
	}
	set plotAreaMarginLeft(value: number) {
		this._plotAreaMarginLeft = value;
		this.onPlotAreaMarginsChanged();
	}
	private _plotAreaMarginTop: number = 0;
	get plotAreaMarginTop(): number {
		return this._plotAreaMarginTop;
	}
	set plotAreaMarginTop(value: number) {
		this._plotAreaMarginTop = value;
		this.onPlotAreaMarginsChanged();
	}
	private _plotAreaMarginRight: number = 0;
	get plotAreaMarginRight(): number {
		return this._plotAreaMarginRight;
	}
	set plotAreaMarginRight(value: number) {
		this._plotAreaMarginRight = value;
		this.onPlotAreaMarginsChanged();
	}
	private _plotAreaMarginBottom: number = 0;
	get plotAreaMarginBottom(): number {
		return this._plotAreaMarginBottom;
	}
	set plotAreaMarginBottom(value: number) {
		this._plotAreaMarginBottom = value;
		this.onPlotAreaMarginsChanged();
	}
	protected computeEffectiveViewport(viewportRect: Rect): Rect {
		let baseRect = super.computeEffectiveViewport(viewportRect);
		if (viewportRect.isEmpty) {
			return Rect.empty;
		}
		if (this.plotAreaMarginLeft == 0 && this.plotAreaMarginTop == 0 && this.plotAreaMarginRight == 0 && this.plotAreaMarginBottom == 0) {
			return Rect.empty;
		}
		if (this.plotAreaMarginLeft + this.plotAreaMarginRight >= viewportRect.width || this.plotAreaMarginTop + this.plotAreaMarginBottom >= viewportRect.height) {
			return Rect.empty;
		}
		let viewportWithMargins: Rect = new Rect(0, viewportRect.left + this.plotAreaMarginLeft, viewportRect.top + this.plotAreaMarginTop, viewportRect.width - this.plotAreaMarginLeft - this.plotAreaMarginRight, viewportRect.height - this.plotAreaMarginTop - this.plotAreaMarginBottom);
		return viewportWithMargins;
	}
	getSafeViewportForInitialZoom(): Rect {
		let viewport: Rect = this.viewportRect;
		let window: Rect = this.windowRect;
		let effectiveViewport: Rect = this.effectiveViewport;
		if (effectiveViewport.isEmpty || viewport.isEmpty) {
			return viewport;
		}
		if (effectiveViewport.containsRect(viewport)) {
			return viewport;
		}
		if (viewport.containsRect(effectiveViewport)) {
			return effectiveViewport;
		}
		return viewport;
	}
	exportVisualData(): any {
		return this.dataChartVisualDataManager.exportVisualData(this);
	}
	exportSerializedVisualData(): string {
		let cvd_: any = this.exportVisualData();
		cvd_.scaleByViewport();
		return <string>(cvd_.serialize());
	}
	prepareAxesForTiledZoom(): void {
		super.prepareAxesForTiledZoom();
		for (let i = 0; i < this.axes.count; i++) {
			let currentAxis = this.axes._inner[i];
			let extent = 50;
			if (!isNaN_(currentAxis.labelPanel.extent)) {
				extent = currentAxis.labelPanel.extent;
			}
			currentAxis.extentOverride = extent;
		}
	}
	releaseAxesFromTiledZoom(): void {
		super.releaseAxesFromTiledZoom();
		for (let i = 0; i < this.axes.count; i++) {
			let currentAxis = this.axes._inner[i];
			currentAxis.extentOverride = NaN;
			currentAxis.mustInvalidateLabels = true;
			currentAxis.renderAxis1(false);
		}
	}
	findMatchingAxes(axis: Axis): List$1<Axis> {
		let list: List$1<Axis> = new List$1<Axis>((<any>Axis).$type, 0);
		for (let currentSeries of fromEnum<Series>(this.series)) {
			let matchingAxis: Axis = currentSeries.getMatchingAxis(axis);
			if (matchingAxis != null) {
				list.add(matchingAxis);
			}
		}
		return list;
	}
}

/**
 * @hidden 
 */
export class LabelPanelArranger extends Base {
	static $t: Type = markType(LabelPanelArranger, 'LabelPanelArranger');
	static preparePanels(labelPanels: List$1<AxisLabelPanelBase>, gridAreaRect: Rect): Rect {
		for (let panel of fromEnum<AxisLabelPanelBase>(labelPanels)) {
			let axis: Axis = panel.axis;
			let crossingAxis: Axis = axis.crossingAxis;
			crossingAxis = LabelPanelArranger.ensurePolarCrossing(panel, axis, crossingAxis);
			let labelLocation: AxisLabelsLocation = LabelPanelArranger.resolveLabelLocation(panel);
			let desiredWidth: number = 0;
			let desiredHeight: number = 0;
			let desiredExtent: number = 0;
			if (axis.hasUserExtent()) {
				panel.view.bindExtentToSettings();
				desiredExtent = panel.extent;
			} else {
				desiredExtent = panel.getDesiredExtent(gridAreaRect);
			}
			desiredWidth = desiredExtent;
			desiredHeight = desiredExtent;
			if (panel.axis.labelSettings != null && panel.axis.labelSettings.visibility != Visibility.Visible) {
				desiredHeight = 0;
				desiredWidth = 0;
			}
			if (panel.isHorizontalPanel()) {
				switch (labelLocation) {
					case AxisLabelsLocation.OutsideTop:
					gridAreaRect.y = Math.max(0, gridAreaRect.top + desiredHeight);
					gridAreaRect.height = Math.max(0, gridAreaRect.height - desiredHeight);
					axis.labelSettings.actualLocation = AxisLabelsLocation.OutsideTop;
					break;

					case AxisLabelsLocation.InsideTop:
					if (crossingAxis != null && (panel.crossingValue - gridAreaRect.top < desiredHeight && typeCast<HorizontalAxisLabelPanel>((<any>HorizontalAxisLabelPanel).$type, panel) !== null)) {
						axis.labelSettings.actualLocation = AxisLabelsLocation.InsideBottom;
					} else {
						axis.labelSettings.actualLocation = AxisLabelsLocation.InsideTop;
					}
					break;

					case AxisLabelsLocation.InsideBottom:
					if (crossingAxis != null && (gridAreaRect.bottom - panel.crossingValue < desiredHeight && typeCast<HorizontalAxisLabelPanel>((<any>HorizontalAxisLabelPanel).$type, panel) !== null)) {
						if (axis.labelSettings != null) {
							axis.labelSettings.actualLocation = AxisLabelsLocation.InsideTop;
						}
					} else {
						if (axis.labelSettings != null) {
							axis.labelSettings.actualLocation = AxisLabelsLocation.InsideBottom;
						}
					}
					break;

					case AxisLabelsLocation.OutsideBottom:

					default:
					if (axis.labelSettings != null) {
						axis.labelSettings.actualLocation = AxisLabelsLocation.OutsideBottom;
					}
					gridAreaRect.height = Math.max(0, gridAreaRect.height - desiredHeight);
					break;

				}

			}
			if (typeCast<VerticalAxisLabelPanel>((<any>VerticalAxisLabelPanel).$type, panel) !== null) {
				switch (labelLocation) {
					case AxisLabelsLocation.OutsideRight:
					gridAreaRect.width = Math.max(0, gridAreaRect.width - desiredWidth);
					axis.labelSettings.actualLocation = AxisLabelsLocation.OutsideRight;
					break;

					case AxisLabelsLocation.InsideLeft:
					if (crossingAxis != null && panel.crossingValue - gridAreaRect.left < desiredWidth) {
						axis.labelSettings.actualLocation = AxisLabelsLocation.InsideRight;
					} else {
						axis.labelSettings.actualLocation = AxisLabelsLocation.InsideLeft;
					}
					break;

					case AxisLabelsLocation.InsideRight:
					if (crossingAxis != null && gridAreaRect.right - panel.crossingValue < desiredWidth) {
						axis.labelSettings.actualLocation = AxisLabelsLocation.InsideLeft;
					} else {
						axis.labelSettings.actualLocation = AxisLabelsLocation.InsideRight;
					}
					break;

					case AxisLabelsLocation.OutsideLeft:

					default:
					if (axis.labelSettings != null) {
						axis.labelSettings.actualLocation = AxisLabelsLocation.OutsideLeft;
					}
					gridAreaRect.x = Math.max(0, gridAreaRect.left + desiredWidth);
					gridAreaRect.width = Math.max(0, gridAreaRect.width - desiredWidth);
					break;

				}

			}
			if (panel.axis.isAngular) {
				if (axis.labelSettings != null) {
					axis.labelSettings.actualLocation = labelLocation;
				}
			}
		}
		return gridAreaRect;
	}
	private static ensurePolarCrossing(panel: AxisLabelPanelBase, axis: Axis, crossingAxis: Axis): Axis {
		return axis.resolveCrossingAxis();
	}
	static resolveLabelLocation(panel: AxisLabelPanelBase): AxisLabelsLocation {
		if (panel == null) {
			return AxisLabelsLocation.OutsideBottom;
		} else {
			let axis: Axis = panel.axis;
			if (axis != null && axis.labelSettings != null) {
				let location: AxisLabelsLocation = axis.labelSettings.actualLocation;
				if (!panel.validLocation(location)) {
					return panel.getDefaultLabelsLocation();
				}
				return location;
			} else {
				return panel.getDefaultLabelsLocation();
			}
		}
	}
	private static arrangeLabelPanel(panel: AxisLabelPanelBase, arrangeState: LabelPanelsArrangeState, gridAreaRect: Rect, setBounds: (arg1: AxisLabelPanelBase, arg2: Rect) => void): void {
		let axis: Axis = panel.axis;
		let crossingAxis: Axis = axis.crossingAxis;
		crossingAxis = LabelPanelArranger.ensurePolarCrossing(panel, axis, crossingAxis);
		let labelLocation: AxisLabelsLocation = LabelPanelArranger.resolveLabelLocation(panel);
		let bounds: Rect;
		let desiredExtent: number = panel.getDesiredExtent(gridAreaRect);
		let panelHeight: number = Math.max(0, desiredExtent);
		let panelWidth: number = Math.max(0, desiredExtent);
		if (panel.axis != null && panel.axis.labelSettings != null && panel.axis.labelSettings.visibility == Visibility.Collapsed) {
			return;
		}
		switch (labelLocation) {
			case AxisLabelsLocation.OutsideRight:
			arrangeState.right = arrangeState.right - panelWidth;
			arrangeState.insideRight = arrangeState.insideRight - panelWidth;
			bounds = new Rect(0, arrangeState.right, gridAreaRect.top, panelWidth, gridAreaRect.height);
			setBounds(panel, bounds);
			break;

			case AxisLabelsLocation.OutsideLeft:
			bounds = new Rect(0, arrangeState.left, gridAreaRect.top, panelWidth, gridAreaRect.height);
			setBounds(panel, bounds);
			arrangeState.left = arrangeState.left + panelWidth;
			arrangeState.insideLeft = arrangeState.insideLeft + panelWidth;
			break;

			case AxisLabelsLocation.InsideRight:
			if (crossingAxis != null) {
				bounds = new Rect(0, arrangeState.left + panel.crossingValue, gridAreaRect.top, panelWidth, gridAreaRect.height);
			} else {
				arrangeState.insideRight = arrangeState.insideRight - panelWidth;
				bounds = new Rect(0, arrangeState.insideRight, gridAreaRect.top, panelWidth, gridAreaRect.height);
			}
			setBounds(panel, bounds);
			break;

			case AxisLabelsLocation.InsideLeft:
			if (crossingAxis != null) {
				bounds = new Rect(0, arrangeState.left + panel.crossingValue - panelWidth, gridAreaRect.top, panelWidth, gridAreaRect.height);
			} else {
				bounds = new Rect(0, arrangeState.insideLeft, gridAreaRect.top, panelWidth, gridAreaRect.height);
				arrangeState.insideLeft = arrangeState.insideLeft + panelWidth;
			}
			setBounds(panel, bounds);
			break;

			case AxisLabelsLocation.OutsideBottom:
			arrangeState.bottom = arrangeState.bottom - panelHeight;
			arrangeState.insideBottom = arrangeState.insideBottom - panelHeight;
			bounds = new Rect(0, gridAreaRect.left, arrangeState.bottom, gridAreaRect.width, panelHeight);
			setBounds(panel, bounds);
			break;

			case AxisLabelsLocation.OutsideTop:
			bounds = new Rect(0, gridAreaRect.left, arrangeState.top, gridAreaRect.width, panelHeight);
			setBounds(panel, bounds);
			arrangeState.top = arrangeState.top + panelHeight;
			arrangeState.insideTop = arrangeState.insideTop + panelHeight;
			break;

			case AxisLabelsLocation.InsideBottom:
			if (crossingAxis != null) {
				bounds = new Rect(0, gridAreaRect.left, arrangeState.top + panel.crossingValue, gridAreaRect.width, panelHeight);
			} else {
				arrangeState.insideBottom = arrangeState.insideBottom - panelHeight;
				bounds = new Rect(0, gridAreaRect.left, arrangeState.insideBottom, gridAreaRect.width, panelHeight);
			}
			setBounds(panel, bounds);
			break;

			case AxisLabelsLocation.InsideTop:
			if (crossingAxis != null) {
				bounds = new Rect(0, gridAreaRect.left, arrangeState.top + panel.crossingValue - panelHeight, gridAreaRect.width, panelHeight);
			} else {
				bounds = new Rect(0, gridAreaRect.left, arrangeState.insideTop, gridAreaRect.width, panelHeight);
				arrangeState.insideTop = arrangeState.insideTop + panelHeight;
			}
			setBounds(panel, bounds);
			break;

		}

		if (panel.axis.isAngular) {
			bounds = new Rect(0, gridAreaRect.left, gridAreaRect.top, gridAreaRect.width, gridAreaRect.height);
			setBounds(panel, bounds);
		}
	}
	static arrangePanels(labelPanels: List$1<AxisLabelPanelBase>, arrangeState: LabelPanelsArrangeState, gridAreaRect: Rect, setBounds: (arg1: AxisLabelPanelBase, arg2: Rect) => void): void {
		let insidePanels: List$1<AxisLabelPanelBase> = new List$1<AxisLabelPanelBase>((<any>AxisLabelPanelBase).$type, 0);
		let outsidePanels: List$1<AxisLabelPanelBase> = new List$1<AxisLabelPanelBase>((<any>AxisLabelPanelBase).$type, 0);
		for (let panel of fromEnum<AxisLabelPanelBase>(labelPanels)) {
			let labelLocation: AxisLabelsLocation = LabelPanelArranger.resolveLabelLocation(panel);
			switch (labelLocation) {
				case AxisLabelsLocation.OutsideBottom:

				case AxisLabelsLocation.OutsideLeft:

				case AxisLabelsLocation.OutsideTop:

				case AxisLabelsLocation.OutsideRight:
				outsidePanels.add(panel);
				break;

				case AxisLabelsLocation.InsideBottom:

				case AxisLabelsLocation.InsideLeft:

				case AxisLabelsLocation.InsideTop:

				case AxisLabelsLocation.InsideRight:
				insidePanels.add(panel);
				break;

			}

		}
		for (let panel1 of fromEnum<AxisLabelPanelBase>(outsidePanels)) {
			LabelPanelArranger.arrangeLabelPanel(panel1, arrangeState, gridAreaRect, setBounds);
		}
		for (let panel2 of fromEnum<AxisLabelPanelBase>(insidePanels)) {
			LabelPanelArranger.arrangeLabelPanel(panel2, arrangeState, gridAreaRect, setBounds);
		}
	}
}

/**
 * @hidden 
 */
export class ChartContentManager extends DependencyObject {
	static $t: Type = markType(ChartContentManager, 'ChartContentManager', (<any>DependencyObject).$type);
	private _owner: SeriesViewer = null;
	private _content: Dictionary$2<ChartContentType, Dictionary$2<DependencyObject, ContentInfo>> = new Dictionary$2<ChartContentType, Dictionary$2<DependencyObject, ContentInfo>>(ChartContentType_$type, (<any>Dictionary$2).$type.specialize((<any>DependencyObject).$type, (<any>ContentInfo).$type), 0);
	private _seriesList: List$1<Series> = new List$1<Series>((<any>Series).$type, 0);
	private get seriesList(): List$1<Series> {
		return this._seriesList;
	}
	private set seriesList(value: List$1<Series>) {
		this._seriesList = value;
	}
	constructor(owner: SeriesViewer) {
		super();
		this.firstTime = true;
		this.firstMeasure = true;
		this._content.addItem(ChartContentType.Series, new Dictionary$2<DependencyObject, ContentInfo>((<any>DependencyObject).$type, (<any>ContentInfo).$type, 0));
		this._content.addItem(ChartContentType.Axis, new Dictionary$2<DependencyObject, ContentInfo>((<any>DependencyObject).$type, (<any>ContentInfo).$type, 0));
		this._content.addItem(ChartContentType.Background, new Dictionary$2<DependencyObject, ContentInfo>((<any>DependencyObject).$type, (<any>ContentInfo).$type, 0));
		this._owner = owner;
	}
	subscribe(type: ChartContentType, obj: DependencyObject, refresh: (arg1: boolean) => void): ContentInfo {
		let info = this.getInfo(type, obj);
		info.refresh = refresh;
		return info;
	}
	unsubscribe(type: ChartContentType, obj: DependencyObject): void {
		let ofType = this._content.item(type);
		if (ofType.containsKey(obj)) {
			ofType.removeItem(obj);
		}
		let s: Series = typeCast<Series>((<any>Series).$type, obj);
		if (s != null && this.seriesList.contains(s)) {
			this.seriesList.remove(s);
		}
	}
	private _pending: boolean = false;
	private _renderer: DomRenderer = null;
	provideRenderer(renderer: DomRenderer): void {
		let oldRenderer = this._renderer;
		this._renderer = renderer;
		if (this._pending && oldRenderer == null && this._renderer != null) {
			this._renderer.setTimeout(runOn(this, this.doRefresh), 0);
		}
	}
	makePending(): void {
		if (!this._pending) {
			this._pending = true;
			if (this._renderer != null) {
				this._renderer.setTimeout(runOn(this, this.doRefresh), 0);
			} else {
			}
		}
	}
	refresh(type: ChartContentType, obj: DependencyObject, info: ContentInfo, animate: boolean): void {
		let contentInfo = info;
		if (!contentInfo.isDirty) {
			contentInfo.doAnimation = animate;
		} else {
			if (!animate) {
				contentInfo.doAnimation = false;
			}
		}
		if (!contentInfo.isDirty) {
			contentInfo.isDirty = true;
			this.makePending();
		}
	}
	private _previewRefreshPending: boolean = false;
	private get previewRefreshPending(): boolean {
		return this._previewRefreshPending;
	}
	private set previewRefreshPending(value: boolean) {
		this._previewRefreshPending = value;
	}
	private getInfo(type: ChartContentType, obj: DependencyObject): ContentInfo {
		let ofType = this._content.item(type);
		let info: ContentInfo = null;
		if (!((() => { let $ret = ofType.tryGetValue(obj, info); info = $ret.p1; return $ret.ret; })())) {
			info = new ContentInfo();
			info.content = obj;
			ofType.addItem(obj, info);
			let s: Series = typeCast<Series>((<any>Series).$type, obj);
			if (s != null && !this.seriesList.contains(s)) {
				if (s.isFragment) {
					let parentSeries = s.resolveParentSeries();
					let index: number = this.seriesList.indexOf(parentSeries) + 1;
					index += s.getLogicalFragmentIndex();
					if (this.seriesList.count <= index || parentSeries.getSubSeriesCount() == 0 || index == -1) {
						this.seriesList.add(s);
					} else {
						this.seriesList.insert(index, s);
					}
				} else {
					this.seriesList.add(s);
				}
			}
		}
		return info;
	}
	force(): void {
		this.doRefresh();
	}
	private doRefresh(): void {
		if (this._owner == null || this._content == null) {
			return;
		}
		if (!this._pending) {
			return;
		}
		this._pending = false;
		if (this._owner != null) {
			this._owner.beforeContentRefresh();
		}
		for (let item of fromEnum<ContentInfo>(this.inOrder())) {
			item.doRefresh();
		}
		if (!this._pending) {
			this._owner.raiseRefreshCompleted();
		}
	}
	private *_inOrder(): IterableIterator<any> {
		let ofType: Dictionary$2<DependencyObject, ContentInfo> = null;
		ofType = this._content.item(ChartContentType.Axis);
		for (let item of fromEnum<ContentInfo>(ofType.values)) {
			yield item;
		}
		ofType = this._content.item(ChartContentType.Series);
		let contentList: List$1<ContentInfo> = new List$1<ContentInfo>((<any>ContentInfo).$type, 0);
		for (let series of fromEnum<Series>(this.seriesList)) {
			if (!series.isAnnotationLayer) {
				contentList.add(ofType.item(series));
			}
		}
		for (let series1 of fromEnum<Series>(this.seriesList)) {
			if (series1.isAnnotationLayer) {
				contentList.add(ofType.item(series1));
			}
		}
		for (let item1 of fromEnum<ContentInfo>(contentList)) {
			yield item1;
		}
		ofType = this._content.item(ChartContentType.Background);
		for (let item2 of fromEnum<ContentInfo>(ofType.values)) {
			yield item2;
		}
	}
	private inOrder(): IEnumerable$1<ContentInfo> {
		return toEnum(() => this._inOrder());
	}
	ensureAxesRendered(plotSize: Size): void {
		for (let info of fromEnum<ContentInfo>(this._content.item(ChartContentType.Axis).values)) {
			(<Axis>info.content).overrideViewport();
		}
		for (let info1 of fromEnum<ContentInfo>(this._content.item(ChartContentType.Axis).values)) {
			info1.doRefresh();
		}
		for (let info2 of fromEnum<ContentInfo>(this._content.item(ChartContentType.Axis).values)) {
			(<Axis>info2.content).viewportOverride = Rect.empty;
		}
	}
	private _firstMeasure: boolean = false;
	get firstMeasure(): boolean {
		return this._firstMeasure;
	}
	set firstMeasure(value: boolean) {
		this._firstMeasure = value;
	}
	private _firstTime: boolean = false;
	get firstTime(): boolean {
		return this._firstTime;
	}
	set firstTime(value: boolean) {
		this._firstTime = value;
	}
	viewportChanged(chartContentType: ChartContentType, obj: DependencyObject, info: ContentInfo, newViewportRect: Rect): void {
		info.viewport = newViewportRect;
	}
	rangeDirty(axis: Axis, info: ContentInfo): void {
		if (!info.rangeDirty) {
			info.rangeDirty = true;
			this.makePending();
		}
	}
}

/**
 * @hidden 
 */
export class ContentInfo extends Base {
	static $t: Type = markType(ContentInfo, 'ContentInfo');
	private _content: DependencyObject = null;
	get content(): DependencyObject {
		return this._content;
	}
	set content(value: DependencyObject) {
		this._content = value;
	}
	private _refresh: (arg1: boolean) => void = null;
	get refresh(): (arg1: boolean) => void {
		return this._refresh;
	}
	set refresh(value: (arg1: boolean) => void) {
		this._refresh = value;
	}
	private _doAnimation: boolean = false;
	get doAnimation(): boolean {
		return this._doAnimation;
	}
	set doAnimation(value: boolean) {
		this._doAnimation = value;
	}
	private _isDirty: boolean = false;
	get isDirty(): boolean {
		return this._isDirty;
	}
	set isDirty(value: boolean) {
		this._isDirty = value;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	get isViewportValid(): boolean {
		if (this.viewport.isEmpty) {
			return false;
		}
		if (this.viewport.width == 0 && this.viewport.height == 0) {
			return false;
		}
		return true;
	}
	undirtyRange(): void {
		if (this.rangeDirty && typeCast<Axis>((<any>Axis).$type, this.content) !== null) {
			this.rangeDirty = false;
			let wasDirty: boolean = this.isDirty;
			this.isDirty = true;
			let ret: boolean = (<Axis>this.content).updateRange1(true);
			if (!ret) {
				this.isDirty = wasDirty;
			}
		}
	}
	doRefresh(): void {
		this.undirtyRange();
		if (typeCast<Axis>((<any>Axis).$type, this.content) !== null) {
			let axis = typeCast<Axis>((<any>Axis).$type, this.content);
			if (axis.crossingAxis != null) {
				let crossing = axis.crossingAxis;
				if (crossing.contentInfo != null && crossing.contentInfo.rangeDirty) {
					crossing.contentInfo.undirtyRange();
				}
			}
		}
		if (this.isDirty) {
			this.isDirty = false;
			this.refresh(this.doAnimation);
			this.doAnimation = false;
		}
	}
	private _rangeDirty: boolean = false;
	get rangeDirty(): boolean {
		return this._rangeDirty;
	}
	set rangeDirty(value: boolean) {
		this._rangeDirty = value;
	}
}

/**
 * @hidden 
 */
export abstract class Series extends Control implements INotifyPropertyChanged, IProvidesViewport, ILegendSeries, ILegendOwner, ILegendTemplateProvider {
	static $t: Type = markType(Series, 'Series', (<any>Control).$type, [INotifyPropertyChanged_$type, IProvidesViewport_$type, ILegendSeries_$type, ILegendOwner_$type, ILegendTemplateProvider_$type]);
	static readonly mouseOverVisualStateName: string = "MouseOver";
	static readonly normalVisualStateName: string = "Normal";
	private _view: SeriesView = null;
	get view(): SeriesView {
		return this._view;
	}
	set view(value: SeriesView) {
		this._view = value;
	}
	private static _currentUniqueIndex: number = 0;
	uniqueIndex: number = 0;
	private _customClipRect: Rect = null;
	get customClipRect(): Rect {
		return this._customClipRect;
	}
	set customClipRect(value: Rect) {
		this._customClipRect = value;
	}
	private _renderer: DomRenderer = null;
	get renderer(): DomRenderer {
		return this._renderer;
	}
	set renderer(value: DomRenderer) {
		this._renderer = value;
		this.animator.provideRenderer(this._renderer);
	}
	provideRenderer(renderer: DomRenderer): void {
		this.renderer = renderer;
	}
	resolveTooltipBrush(): string {
		return this.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this);
	}
	constructor() {
		super();
		DVContainer.instance.registerIfLoaded("AnnotationFactoryManager");
		DVContainer.instance.registerIfLoaded("InteractivityFactoryManager");
		DVContainer.instance.registerIfLoaded("VisualDataFactoryManager");
		this.uniqueIndex = Series._currentUniqueIndex++;
		this.thumbnailDirty = true;
		this.customClipRect = Rect.empty;
		this.view = this.createView();
		this.view.viewport = Rect.empty;
		this.onViewCreated(this.view);
		this.view.duringInit = true;
		this.view.onInit();
		this.view.duringInit = false;
		this.defaultStyleKey = (<any>Series).$type;
		this.seriesViewer_WindowRectChanged = (o: any, e: RectChangedEventArgs) => {
			if (this.seriesViewer == null || !this.seriesViewer.ignoreWindowChanges) {
				this.windowRectChangedOverride(e.oldRect, e.newRect);
			}
		};
		this.seriesViewer_PropertyUpdated = (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue);
		this.fastItemsSource_Event = (o: any, e: FastItemsSourceEventArgs) => {
			if (this.seriesViewer != null) {
				this.thumbnailDirty = true;
				this.seriesViewer.notifyThumbnailDataChanged();
			}
			this.dataUpdatedOverride(e.action, e.position, e.count, e.propertyName);
		};
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
		this.rootCanvas = new Canvas();
		this.animator = new DoubleAnimator(0, 1, this.transitionDuration);
		let $t = this.animator;
		$t.propertyChanged = delegateCombine($t.propertyChanged, runOn(this, this.animator_PropertyChanged));
		this.setBinding(Series.visibilityProxyProperty, ((() => {
			let $ret = new Binding(1, "Visibility");
			$ret.source = this;
			return $ret;
		})()));
		this.actualHitTestMode = this.getResolvedHitTestMode();
	}
	protected static readonly visibilityProxyPropertyName: string = "VisibilityProxy";
	private static readonly visibilityProxyProperty: DependencyProperty = DependencyProperty.register(Series.visibilityProxyPropertyName, Visibility_$type, (<any>Series).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.visibilityProxyPropertyName, e.oldValue, e.newValue)));
	protected animator_PropertyChanged(sender: any, e: PropertyChangedEventArgs): void {
		this.transitionProgress = this.animator.transitionProgress;
	}
	private _sr: SRProvider = null;
	get res(): SRProvider {
		if (this._sr == null) {
			this._sr = new SRProvider(this.renderer);
		}
		if (this._sr.container == null) {
			this._sr.container = this.renderer;
		}
		return this._sr;
	}
	private _seriesVisualDataManager: ISeriesVisualDataManager = null;
	get seriesVisualDataManager(): ISeriesVisualDataManager {
		if (this._seriesVisualDataManager == null) {
			this._seriesVisualDataManager = <ISeriesVisualDataManager><any>DVContainer.instance.createInstance(ISeriesVisualDataManager_$type, () => this.res.dataChart_VisualDataNotLoaded);
		}
		return this._seriesVisualDataManager;
	}
	protected get alternateViews(): Dictionary$2<string, SeriesView> {
		return this.seriesInteractionManager.alternateViews;
	}
	private _seriesInteractionManager: ISeriesInteractionManager = null;
	get seriesInteractionManager(): ISeriesInteractionManager {
		if (this._seriesInteractionManager == null) {
			this._seriesInteractionManager = <ISeriesInteractionManager><any>DVContainer.instance.createInstance(ISeriesInteractionManager_$type, () => this.res.dataChart_InteractivityNotLoaded);
			if (this.toolTip != null) {
				this._seriesInteractionManager.updateToolTipValue(this, this.toolTip);
			}
		}
		return this._seriesInteractionManager;
	}
	get isInteractivityLoaded(): boolean {
		return DVContainer.instance.checkLoaded("InteractivityFactoryManager");
	}
	private _animator: DoubleAnimator = null;
	get animator(): DoubleAnimator {
		return this._animator;
	}
	set animator(value: DoubleAnimator) {
		this._animator = value;
	}
	onViewCreated(view: SeriesView): void {
	}
	onSeriesAttached(): void {
		this.assertLegendItems(this.actualLegend, this.actualLegend);
		if (this.fastItemsSource == null && this.syncLink != null && this.itemsSource != null) {
			this.fastItemsSource = (<IFastItemsSourceProvider>this.syncLink).getFastItemsSource(this.itemsSource);
		}
		this.view.onSeriesAttached();
	}
	onSeriesDetached(): void {
		this.clearLegendItems();
		if (this.fastItemsSource != null && this.syncLink != null && this.itemsSource != null) {
			this.fastItemsSource = (<IFastItemsSourceProvider>this.syncLink).releaseFastItemsSource(this.itemsSource);
		}
		this.view.onSeriesDetached();
	}
	requestView(): SeriesView {
		return this.createView();
	}
	protected createView(): SeriesView {
		return new SeriesView(this);
	}
	private static readonly rootCanvasName: string = "RootCanvas";
	private _rootCanvas: Canvas = null;
	get rootCanvas(): Canvas {
		return this._rootCanvas;
	}
	set rootCanvas(value: Canvas) {
		this._rootCanvas = value;
	}
	useParentMarkerCanvas(): boolean {
		return false;
	}
	getItemValue(item: any, memberPathName: string): any {
		return null;
	}
	private _memberPathMap: Dictionary$2<string, string> = new Dictionary$2<string, string>(String_$type, String_$type, 0);
	protected resolveMemberPath(memberPathName: string): string {
		if (!this._memberPathMap.containsKey(memberPathName)) {
			let resolved = memberPathName.charAt(0).toUpperCase() + memberPathName.substr(1);
			this._memberPathMap.addItem(memberPathName, resolved);
		}
		return this._memberPathMap.item(memberPathName);
	}
	private _helpers: Dictionary$2<string, FastReflectionHelper> = new Dictionary$2<string, FastReflectionHelper>(String_$type, (<any>FastReflectionHelper).$type, 0);
	protected getItemValueByMemberPath(item: any, memberPathName: string, memberPathValue: string): any {
		let helper: FastReflectionHelper = null;
		if (!this._helpers.containsKey(memberPathName)) {
			helper = new FastReflectionHelper(false, memberPathValue);
			this._helpers.addItem(memberPathName, helper);
		} else {
			helper = this._helpers.item(memberPathName);
		}
		helper.propertyName = memberPathValue;
		return helper.getPropertyValue(item);
	}
	getExactItemIndex(world: Point): number {
		return this.getItemIndex(world);
	}
	getItemIndexSorted(world: Point): number {
		return -1;
	}
	protected get_isPrimaryAxisSortingAxis(): boolean {
		return false;
	}
	get isPrimaryAxisSortingAxis(): boolean {
		return this.get_isPrimaryAxisSortingAxis();
	}
	getCategoryAxisIfPresent(): CategoryAxisBase {
		return null;
	}
	getItemIndex(world: Point): number {
		return -1;
	}
	getItem(world: Point): any {
		return null;
	}
	protected getSeriesItem(series: Series, world: Point): any {
		return series.getItem(world);
	}
	getFragmentIndex(): number {
		return -1;
	}
	getLogicalFragmentIndex(): number {
		return -1;
	}
	getSubSeriesCount(): number {
		return -1;
	}
	get container(): ILegendOwner {
		return this.seriesViewer;
	}
	get hasSubItems(): boolean {
		return this.hasLegendSubItemsOverride();
	}
	protected hasLegendSubItemsOverride(): boolean {
		return false;
	}
	forSubItems(action: (arg1: any) => void): void {
		this.forLegendSubItemsOverride(action);
	}
	protected forLegendSubItemsOverride(action: (arg1: any) => void): void {
	}
	forSubVisualSeries(action: (arg1: Series) => boolean): void {
	}
	resolveNegativeBrush(): Brush {
		return null;
	}
	resolveLegendIndex(): number {
		return this.index;
	}
	resolveParentSeries(): Series {
		return null;
	}
	protected get_isAnnotationLayer(): boolean {
		return false;
	}
	get isAnnotationLayer(): boolean {
		return this.get_isAnnotationLayer();
	}
	protected get_isVertical(): boolean {
		return false;
	}
	get isVertical(): boolean {
		return this.get_isVertical();
	}
	protected get_isFragment(): boolean {
		return false;
	}
	get isFragment(): boolean {
		return this.get_isFragment();
	}
	protected get_isAreaOrLine(): boolean {
		return false;
	}
	get isAreaOrLine(): boolean {
		return this.get_isAreaOrLine();
	}
	protected get_isPolar(): boolean {
		return false;
	}
	get isPolar(): boolean {
		return this.get_isPolar();
	}
	protected get_isScatter(): boolean {
		return false;
	}
	get isScatter(): boolean {
		return this.get_isScatter();
	}
	protected get_isRadial(): boolean {
		return false;
	}
	get isRadial(): boolean {
		return this.get_isRadial();
	}
	protected get_isStacked(): boolean {
		return false;
	}
	get isStacked(): boolean {
		return this.get_isStacked();
	}
	protected get_isFinancial(): boolean {
		return false;
	}
	get isFinancial(): boolean {
		return this.get_isFinancial();
	}
	protected get_isRange(): boolean {
		return false;
	}
	get isRange(): boolean {
		return this.get_isRange();
	}
	protected get_isCategory(): boolean {
		return false;
	}
	get isCategory(): boolean {
		return this.get_isCategory();
	}
	protected get_isGeographic(): boolean {
		return false;
	}
	get isGeographic(): boolean {
		return this.get_isGeographic();
	}
	protected get_isShape(): boolean {
		return false;
	}
	get isShape(): boolean {
		return this.get_isShape();
	}
	protected get_isValueOverlay(): boolean {
		return false;
	}
	get isValueOverlay(): boolean {
		return this.get_isValueOverlay();
	}
	resolveHostedSeries(): Series {
		return null;
	}
	protected get_isDefaultCrosshairBehaviorDisabled(): boolean {
		return false;
	}
	get isDefaultCrosshairBehaviorDisabled(): boolean {
		return this.get_isDefaultCrosshairBehaviorDisabled();
	}
	protected get_isDefaultTooltipBehaviorDisabled(): boolean {
		return false;
	}
	get isDefaultTooltipBehaviorDisabled(): boolean {
		return this.get_isDefaultTooltipBehaviorDisabled();
	}
	getDistanceToIndex(world: Point, index: number, axis: Axis, p: ScalerParams, offset: number): number {
		return Number.POSITIVE_INFINITY;
	}
	protected getDistanceToIndexHelper(world: Point, index: number, axis: Axis, scalerParams: ScalerParams, offset: number, count: number, getExactUnsortedIndex: (arg1: Point) => number): number {
		return this.seriesInteractionManager.getDistanceToIndexHelper(this, world, index, axis, scalerParams, offset, count, getExactUnsortedIndex);
	}
	protected get_usesPresortedValueColumn(): boolean {
		return false;
	}
	get usesPresortedValueColumn(): boolean {
		return this.get_usesPresortedValueColumn();
	}
	protected getSeriesValueHelper(column: IList$1<number>, world: Point, axis: Axis, pars: ScalerParams, offset: number, getExactUnsortedIndex: (arg1: Point) => number, useInterpolation: boolean, skipUnknowns: boolean): number {
		return this.seriesInteractionManager.getSeriesValueHelper(this, column, world, axis, pars, offset, getExactUnsortedIndex, useInterpolation, skipUnknowns);
	}
	getInterpolatedSeriesValue(p: number, column: IList$1<number>, prevItem: number, nextItem: number, unsortedPrevItem: number, unsortedNextItem: number, offset: number, isSorting: boolean): number {
		return this.seriesInteractionManager.getInterpolatedSeriesValue(this, p, column, prevItem, nextItem, unsortedPrevItem, unsortedNextItem, offset, isSorting);
	}
	getPreviousOrExactIndexHelper(world: Point, skipUnknowns: boolean, indexAxis: Axis, getExactUnsortedIndex: (arg1: Point) => number, valueColumn: IList$1<number>): number {
		return this.seriesInteractionManager.getPreviousOrExactIndexHelper(this, world, skipUnknowns, indexAxis, getExactUnsortedIndex, valueColumn);
	}
	getHitTestAllowance(isFinger: boolean): number {
		return (isFinger ? SeriesView.tOUCH_HIT_THICKNESS_AUGMENT : SeriesView.hIT_THICKNESS_AUGMENT);
	}
	getHighStrokeSegments(position: Point): Point[][] {
		return null;
	}
	getLowStrokeSegments(position: Point): Point[][] {
		return null;
	}
	protected testHighLowStrokeOver(position: Point, isFinger: boolean): boolean {
		return this.seriesInteractionManager.testHighLowStrokeOver(this, position, isFinger);
	}
	getMatchingBuckets(categoryAxis: CategoryAxisBase, buckets: List$1<number[]>, bucketSize: number, firstBucket: number, world: Point, skipUnknowns: boolean): number[][] {
		return this.seriesInteractionManager.getMatchingBuckets(this, categoryAxis, buckets, bucketSize, firstBucket, world, skipUnknowns);
	}
	protected testNearStroke(position: Point, isFinger: boolean, pathData1: PathGeometry): boolean {
		return this.seriesInteractionManager.testNearStroke(this, position, isFinger, pathData1);
	}
	protected testOverPoly(position: Point, pathData1: PathGeometry): boolean {
		return this.seriesInteractionManager.testOverPoly(this, position, pathData1);
	}
	getNextOrExactIndexHelper(world: Point, skipUnknowns: boolean, indexAxis: Axis, getExactUnsortedIndex: (arg1: Point) => number, valueColumn: IList$1<number>): number {
		return this.seriesInteractionManager.getNextOrExactIndexHelper(this, world, skipUnknowns, indexAxis, getExactUnsortedIndex, valueColumn);
	}
	getExactUnsortedItemIndexHelper(world: Point, axis: Axis): number {
		return this.seriesInteractionManager.getExactUnsortedItemIndexHelper(this, world, axis);
	}
	getPreviousOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return -1;
	}
	getNextOrExactIndex(world: Point, skipUnknowns: boolean): number {
		return -1;
	}
	getSeriesValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		return NaN;
	}
	getSeriesValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return <Point>{ $type: Point_$type, x: NaN, y: NaN };
	}
	getSeriesValueBoundingBox(world: Point): Rect {
		return Rect.empty;
	}
	getSeriesValueFineGrainedBoundingBoxes(world: Point): Rect[] {
		let box = this.getSeriesValueBoundingBox(world);
		if (!box.isEmpty) {
			let ret: Rect[] = <Rect[]>new Array(1);
			ret[0] = box;
			return ret;
		}
		return null;
	}
	getSeriesValueBoundingBoxFromSeriesPixel(pixelPosition: Point): Rect {
		return this.getSeriesValueBoundingBox(this.toWorldPosition(pixelPosition));
	}
	getSeriesValueFineGrainedBoundingBoxesFromSeriesPixel(pixelPosition: Point): Rect[] {
		return this.getSeriesValueFineGrainedBoundingBoxes(this.toWorldPosition(pixelPosition));
	}
	getSeriesValueMarkerBoundingBox(world: Point): Rect {
		return Rect.empty;
	}
	getSeriesValueMarkerBoundingBoxFromSeriesPixel(pixelPosition: Point): Rect {
		return this.getSeriesValueMarkerBoundingBox(this.toWorldPosition(pixelPosition));
	}
	protected testShapesOver(position: Point, isFinger: boolean): boolean {
		return this.seriesInteractionManager.testShapesOver(this, position, isFinger);
	}
	protected getSeriesValuePositionHelper(world: Point, useInterpolation: boolean, skipUnknowns: boolean, offset: number, valueAxis: Axis, indexAxis: Axis, getSeriesValue: (arg1: Point, arg2: boolean, arg3: boolean) => number, getPrevious: (arg1: Point, arg2: boolean) => number, getNext: (arg1: Point, arg2: boolean) => number): Point {
		return this.seriesInteractionManager.getSeriesValuePositionHelper(this, world, useInterpolation, skipUnknowns, offset, valueAxis, indexAxis, getSeriesValue, getPrevious, getNext);
	}
	getSeriesHighValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		return this.getSeriesValue(world, useInterpolation, skipUnknowns);
	}
	getSeriesHighValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePosition(world, useInterpolation, skipUnknowns);
	}
	getSeriesLowValue(world: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		return this.getSeriesValue(world, useInterpolation, skipUnknowns);
	}
	getSeriesLowValuePosition(world: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		return this.getSeriesValuePosition(world, useInterpolation, skipUnknowns);
	}
	getSeriesValuePositionFromSeriesPixel(mouse: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		let world = this.toWorldPosition(mouse);
		return this.getSeriesValuePosition(world, useInterpolation, skipUnknowns);
	}
	getSeriesValueFromSeriesPixel(mouse: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let world = this.toWorldPosition(mouse);
		return this.getSeriesValue(world, useInterpolation, skipUnknowns);
	}
	getSeriesHighValuePositionFromSeriesPixel(mouse: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		let world = this.toWorldPosition(mouse);
		return this.getSeriesHighValuePosition(world, useInterpolation, skipUnknowns);
	}
	getSeriesHighValueFromSeriesPixel(mouse: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let world = this.toWorldPosition(mouse);
		return this.getSeriesHighValue(world, useInterpolation, skipUnknowns);
	}
	getSeriesLowValuePositionFromSeriesPixel(mouse: Point, useInterpolation: boolean, skipUnknowns: boolean): Point {
		let world = this.toWorldPosition(mouse);
		return this.getSeriesLowValuePosition(world, useInterpolation, skipUnknowns);
	}
	getSeriesLowValueFromSeriesPixel(mouse: Point, useInterpolation: boolean, skipUnknowns: boolean): number {
		let world = this.toWorldPosition(mouse);
		return this.getSeriesLowValue(world, useInterpolation, skipUnknowns);
	}
	getItemIndexFromSeriesPixel(mouse: Point): number {
		let world = this.toWorldPosition(mouse);
		return this.getItemIndex(world);
	}
	getItemSpan(): number {
		return 0;
	}
	getExactItemIndexFromSeriesPixel(mouse: Point): number {
		let world = this.toWorldPosition(mouse);
		return this.getExactItemIndex(world);
	}
	getItemFromSeriesPixel(mouse: Point): any {
		let world = this.toWorldPosition(mouse);
		return this.getItem(world);
	}
	getVisiblePointsOfInterest(points: List$1<SeriesPointOfInterest>, useValueAsLabel: boolean, labelPrecision: number): boolean {
		return false;
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
	protected get_hasMarkers(): boolean {
		return false;
	}
	get hasMarkers(): boolean {
		return this.get_hasMarkers();
	}
	hideToolTips(): void {
	}
	getActualMarkerBrush(): Brush {
		return null;
	}
	getActualMarkerOutlineBrush(): Brush {
		return null;
	}
	getActualMarkerTemplate(): DataTemplate {
		return null;
	}
	toWorldPosition(seriesPoint: Point): Point {
		let viewportRect: Rect = this.seriesViewer != null ? this.seriesViewer.contentViewport : this.view.viewport;
		let windowRect: Rect = this.view.windowRect;
		let world: Point = <Point>{ $type: Point_$type, x: windowRect.left + windowRect.width * (seriesPoint.x - viewportRect.left) / viewportRect.width, y: windowRect.top + windowRect.height * (seriesPoint.y - viewportRect.top) / viewportRect.height };
		return world;
	}
	fromWorldPosition(world: Point): Point {
		let viewportRect: Rect = this.seriesViewer != null ? this.seriesViewer.contentViewport : this.view.viewport;
		let windowRect: Rect = this.view.windowRect;
		let seriesX: number = viewportRect.left + (world.x - windowRect.left) / windowRect.width * viewportRect.width;
		let seriesY: number = viewportRect.top + (world.y - windowRect.top) / windowRect.height * viewportRect.height;
		return <Point>{ $type: Point_$type, x: seriesX, y: seriesY };
	}
	item(sender: any, point: Point): any {
		let dataContext: DataContext = this.view.getDataContextFromSender(sender);
		let item: any = dataContext != null ? dataContext.item : null;
		if (item == null) {
			let world: Point = this.toWorldPosition(point);
			item = this.getItem(world);
		}
		return item;
	}
	scrollIntoView(item: any): boolean {
		return false;
	}
	getRange(axis: Axis): AxisRange {
		return new AxisRange(NaN, NaN);
	}
	getVisibleRange(): AxisRange {
		return new AxisRange(NaN, NaN);
	}
	renderSeries(animate: boolean): void {
		this.skipPrepare = false;
		if (this.seriesViewer != null) {
			this.seriesViewer.chartContentManager.refresh(ChartContentType.Series, this, this.contentInfo, animate);
			if (this.renderRequested != null) {
				let args = new RenderRequestedEventArgs();
				args.animate = animate;
				this.renderRequested(this, args);
				animate = args.animate;
			}
		}
	}
	renderRequested: (sender: any, e: RenderRequestedEventArgs) => void = null;
	private doRenderSeries(animate: boolean): void {
		this.renderSeriesOverride(animate);
		this.skipPrepare = false;
	}
	renderSeriesOverride(animate: boolean): void {
		if (this.transitionInViableResolved && !this.shouldTransitionIn()) {
			this.transitionInViable = false;
		}
	}
	private _transitionInIsInProgress: boolean = false;
	protected get transitionInIsInProgress(): boolean {
		return this._transitionInIsInProgress;
	}
	protected set transitionInIsInProgress(value: boolean) {
		this._transitionInIsInProgress = value;
	}
	protected checkTransitionInterrupted(): void {
		if (this.transitionInIsInProgress && !this.transitionInViableResolved) {
			this.animator.intervalMilliseconds = <number>truncate(Math.max(this.getTotalMilliseconds(), this.getTotalTransitionInMilliseconds()));
			this.clearSpeedModifiers();
		}
	}
	protected clearSpeedModifiers(): void {
	}
	private _thumbnailView: SeriesView = null;
	get thumbnailView(): SeriesView {
		return this._thumbnailView;
	}
	set thumbnailView(value: SeriesView) {
		this._thumbnailView = value;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		if (this.thumbnailView == null) {
			this.thumbnailView = this.createView();
			this.thumbnailView.isThumbnailView = true;
			if (this.seriesViewer != null) {
				this.seriesViewer.thumbnailCanvasRenderScheduler.register(this.thumbnailView);
				this.thumbnailView.currentScheduler = this.seriesViewer.thumbnailCanvasRenderScheduler;
			}
			this.thumbnailView.onInit();
		}
		this.thumbnailView.viewport = viewportRect;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		this.seriesInteractionManager.ensureAlternateView(this, viewportRect, windowRect, viewIdentifier, effectiveScalingRatio);
	}
	getEffectiveViewport1(view: SeriesView): Rect {
		if (this.seriesViewer == null) {
			return Rect.empty;
		}
		if (view.isAlternateView) {
			return this.seriesViewer.effectiveViewport;
		}
		if (view.isThumbnailView) {
			if (this.seriesViewer.effectiveViewport.isEmpty) {
				return this.seriesViewer.effectiveViewport;
			}
			let scaled = this.seriesViewer.getScaledEffectiveViewport(view.viewport, this.seriesViewer.viewportRect, this.seriesViewer.effectiveViewport);
			return scaled;
		}
		return this.seriesViewer.effectiveViewport;
	}
	getContentViewport(view: SeriesView): Rect {
		if (this.seriesViewer == null || this.seriesViewer.contentViewport.isEmpty) {
			return view.viewport;
		}
		if (view.isAlternateView) {
			return view.viewport;
		}
		if (view.isThumbnailView) {
			if (this.seriesViewer.effectiveViewport.isEmpty) {
				return view.viewport;
			}
			if (this.seriesViewer.contentViewport.equals1(this.seriesViewer.viewportRect)) {
				return view.viewport;
			}
			let scaled = this.seriesViewer.getScaledEffectiveViewport(view.viewport, this.seriesViewer.viewportRect, this.seriesViewer.effectiveViewport);
			let contentViewport = this.seriesViewer.getCurrentContentViewport(view.viewport, scaled, this.seriesViewer.actualWindowRect);
			return contentViewport;
		}
		return this.seriesViewer.contentViewport;
	}
	getEffectiveViewportForViewport(viewport: Rect): Rect {
		if (!this.viewport.equals1(viewport)) {
			return Rect.empty;
		}
		return this.getEffectiveViewport();
	}
	getEffectiveViewportForUnitViewport(view: SeriesView): Rect {
		if (this.seriesViewer == null || this.seriesViewer.effectiveViewport.isEmpty) {
			return Rect.empty;
		}
		let effective = this.seriesViewer.effectiveViewport;
		let viewport = view.viewport;
		let left = (effective.left - viewport.left) / viewport.width;
		let top = (effective.top - viewport.top) / viewport.height;
		let right = (effective.right - viewport.left) / viewport.width;
		let bottom = (effective.bottom - viewport.top) / viewport.height;
		return new Rect(0, left, top, right - left, bottom - top);
	}
	getEffectiveViewport(): Rect {
		return this.getEffectiveViewport1(this.view);
	}
	removeAllAlternateViews(): void {
		this.removeAllAlternateViews1(null);
	}
	private removeAllAlternateViews1(oldViewer: SeriesViewer): void {
		if (this.isInteractivityLoaded) {
			this.seriesInteractionManager.removeAllAlternateViews(this, oldViewer);
		}
	}
	removeAlternateView(viewIdentifier: string): void {
		if (this.isInteractivityLoaded) {
			this.seriesInteractionManager.removeAlternateView(this, viewIdentifier, this.seriesViewer);
		}
	}
	getViewInfo(viewportRect: Rect, windowRect: Rect): { p0: Rect; p1: Rect; } {
		viewportRect = this.view.viewport;
		windowRect = this.view.windowRect;
		return {
			p0: viewportRect,
			p1: windowRect

		};
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		if (viewportRect.width == 0 || viewportRect.height == 0) {
			return false;
		}
		if (this.isFragment) {
			return true;
		}
		return this._visibility == Visibility.Visible;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		if (wipeClean) {
			this.thumbnailDirty = true;
		}
	}
	protected clearAndAbortIfInvalid(): boolean {
		return this.clearAndAbortIfInvalid1(this.view);
	}
	clearAndAbortIfInvalid1(view: SeriesView): boolean {
		let viewportRect: Rect = view.viewport;
		let windowRect: Rect = view.windowRect;
		if (!this.validateSeries(viewportRect, windowRect, view)) {
			this.clearRendering(true, view);
			return true;
		}
		return false;
	}
	onViewportChanged(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.view.viewport = newViewportRect;
		this.viewportRectChangedOverride(oldViewportRect, newViewportRect);
		if (this.seriesViewer != null) {
			this.seriesViewer.chartContentManager.viewportChanged(ChartContentType.Series, this, this.contentInfo, newViewportRect);
		}
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
	}
	private _contentInfo: ContentInfo = null;
	get contentInfo(): ContentInfo {
		return this._contentInfo;
	}
	set contentInfo(value: ContentInfo) {
		this._contentInfo = value;
	}
	private _thumbnailDirty: boolean = true;
	get thumbnailDirty(): boolean {
		return this._thumbnailDirty;
	}
	set thumbnailDirty(value: boolean) {
		this._thumbnailDirty = value;
	}
	protected forceIndexUpdate(other: Series): void {
		other.doUpdateIndexedProperties();
	}
	protected notifyThumbnailDataChanged(): void {
		this.skipThumbnailPrepare = false;
		this.thumbnailDirty = true;
		if (this.seriesViewer != null) {
			this.seriesViewer.notifyThumbnailDataChanged();
		}
	}
	notifyThumbnailAppearanceChanged(): void {
		this.skipThumbnailPrepare = false;
		this.thumbnailDirty = true;
		if (this.seriesViewer != null) {
			this.seriesViewer.notifyThumbnailAppearanceChanged();
		}
	}
	protected get_isIndexed(): boolean {
		return true;
	}
	get isIndexed(): boolean {
		return this.get_isIndexed();
	}
	protected get_isUsableInLegend(): boolean {
		return true;
	}
	get isUsableInLegend(): boolean {
		return this.get_isUsableInLegend();
	}
	protected onIsDropShadowEnabledChanged(): void {
		this.view.handleIsDropShadowEnabledChanged();
	}
	notifyVisualPropertiesChanged(): void {
		this.onVisualPropertiesChanged();
	}
	protected onVisualPropertiesChanged(): void {
		this.view.onVisualPropertiesChanged();
		this.onVisualPropertiesChangedOverride(false);
	}
	onVisualPropertiesChangedImmediate(): void {
		this.view.onVisualPropertiesChanged();
		this.onVisualPropertiesChangedOverride(true);
	}
	private _skipPrepare: boolean = false;
	protected get skipPrepare(): boolean {
		return this._skipPrepare;
	}
	protected set skipPrepare(value: boolean) {
		this._skipPrepare = value;
	}
	private _skipThumbnailPrepare: boolean = false;
	protected get skipThumbnailPrepare(): boolean {
		return this._skipThumbnailPrepare;
	}
	protected set skipThumbnailPrepare(value: boolean) {
		this._skipThumbnailPrepare = value;
	}
	protected requiresPrepare(): boolean {
		return false;
	}
	protected onVisualPropertiesChangedOverride(immediate: boolean): void {
		if (this.contentInfo == null || this.contentInfo.isDirty) {
			return;
		}
		let viewport = this.view.viewport;
		let window = this.view.windowRect;
		let mainViewValid = this.validateSeries(viewport, window, this.view);
		let thumbnailValid: boolean = this.seriesViewer != null && this.seriesViewer.isThumbnailRequired && this.thumbnailView != null && this.validateSeries(this.thumbnailView.viewport, this.thumbnailView.windowRect, this.thumbnailView);
		if (mainViewValid) {
			if (immediate) {
				this.skipPrepare = !this.requiresPrepare();
				this.doRenderSeries(false);
			} else {
				this.renderSeries(false);
				this.skipPrepare = !this.requiresPrepare();
			}
		}
		if (thumbnailValid) {
			if (!this.thumbnailDirty) {
				this.notifyThumbnailAppearanceChanged();
				this.skipThumbnailPrepare = true;
			}
		}
	}
	private _transitionInViable: boolean = false;
	protected get transitionInViable(): boolean {
		return this._transitionInViable;
	}
	protected set transitionInViable(value: boolean) {
		this._transitionInViable = value;
	}
	protected get transitionInViableResolved(): boolean {
		if (this.transitionInViable == false) {
			return false;
		}
		return this.getTotalTransitionInMilliseconds() > 0;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case Series.syncLinkPropertyName:
			if (typeCast<SyncLink>((<any>SyncLink).$type, oldValue) !== null) {
				let $t = (<SyncLink>oldValue);
				$t.propertyUpdated = delegateRemove($t.propertyUpdated, this.seriesViewer_PropertyUpdated);
				this.releaseItemsSource(typeCast<IFastItemsSourceProvider>(IFastItemsSourceProvider_$type, oldValue));
			}
			if (typeCast<SyncLink>((<any>SyncLink).$type, newValue) !== null) {
				let $t1 = (<SyncLink>newValue);
				$t1.propertyUpdated = delegateCombine($t1.propertyUpdated, this.seriesViewer_PropertyUpdated);
				this.registerItemsSource(typeCast<IFastItemsSourceProvider>(IFastItemsSourceProvider_$type, newValue));
			}
			if (this.index == -1) {
				this.index = XamDataChart.findSeriesIndex(this);
			}
			break;

			case XamDataChart.brushesPropertyName:

			case XamDataChart.markerOutlinesPropertyName:

			case XamDataChart.markerBrushesPropertyName:

			case XamDataChart.outlinesPropertyName:
			this.doUpdateIndexedProperties();
			break;

			case Series.seriesViewerPropertyName:
			if (typeCast<SeriesViewer>((<any>SeriesViewer).$type, oldValue) !== null) {
				this.renderer = null;
				let $t2 = (<SeriesViewer>oldValue);
				$t2.windowRectChanged = delegateRemove($t2.windowRectChanged, this.seriesViewer_WindowRectChanged);
				let $t3 = (<SeriesViewer>oldValue).series;
				$t3.collectionChanged = delegateRemove($t3.collectionChanged, this.seriesViewer_SeriesCollectionChanged);
				let $t4 = (<SeriesViewer>oldValue);
				$t4.propertyUpdated = delegateRemove($t4.propertyUpdated, this.seriesViewer_PropertyUpdated);
				(<SeriesViewer>oldValue).chartContentManager.unsubscribe(ChartContentType.Series, this);
				this.removeAllAlternateViews1(<SeriesViewer>oldValue);
				this.view.detachFromChart(<SeriesViewer>oldValue);
			}
			if (typeCast<SeriesViewer>((<any>SeriesViewer).$type, newValue) !== null) {
				this.renderer = (<SeriesViewer>newValue).view.viewManager.container;
				let $t5 = (<SeriesViewer>newValue);
				$t5.windowRectChanged = delegateCombine($t5.windowRectChanged, this.seriesViewer_WindowRectChanged);
				let $t6 = (<SeriesViewer>newValue).series;
				$t6.collectionChanged = delegateCombine($t6.collectionChanged, this.seriesViewer_SeriesCollectionChanged);
				let $t7 = (<SeriesViewer>newValue);
				$t7.propertyUpdated = delegateCombine($t7.propertyUpdated, this.seriesViewer_PropertyUpdated);
				this.contentInfo = (<SeriesViewer>newValue).chartContentManager.subscribe(ChartContentType.Series, this, runOn(this, this.doRenderSeries));
				this.view.attachToChart(<SeriesViewer>newValue);
				this.updateActualAreaFillOpacity();
				this.ensureDefaultTooltip();
				this.uniqueIndex = this.seriesViewer.getNextUniqueIndex();
			}
			if (this.seriesViewer == null) {
				(<any>this).externalObject._ensureTooltipDestroyed();
				this.animator.stop();
			}
			if (this.index != -1) {
				this.updateIndexedProperties();
			}
			if (this.index == -1 || newValue == null) {
				this.index = XamDataChart.findSeriesIndex(this);
			}
			this.actualLegend = this.findActualLegend();
			this.assertLegendItems1(typeCast<XamDataChart>((<any>XamDataChart).$type, oldValue), typeCast<XamDataChart>((<any>XamDataChart).$type, newValue));
			break;

			case Series.titlePropertyName:
			if (this.view != null) {
				this.view.onTitlePropertyChanged();
			}
			break;

			case Series.hitTestModePropertyName:
			this.actualHitTestMode = this.getResolvedHitTestMode();
			break;

			case Series.actualHitTestModePropertyName:
			if (this.seriesViewer != null) {
				this.seriesViewer.recalculateResolvedHitTestMode();
			}
			break;

			case Series.legendItemBadgeTemplatePropertyName:

			case Series.legendItemTemplatePropertyName:
			this.view.updateLegendItemVisual();
			break;

			case Series.brushPropertyName:

			case Series.outlinePropertyName:

			case Series.dashArrayPropertyName:

			case Series.dashCapPropertyName:
			this.doUpdateIndexedProperties();
			this.onVisualPropertiesChanged();
			break;

			case Series.indexPropertyName:
			if (typeGetValue(oldValue) != typeGetValue(newValue)) {
				this.doUpdateIndexedProperties();
				this.onVisualPropertiesChanged();
			}
			break;

			case "RadiusX":

			case "RadiusY":

			case "RoundedCornersLocation":
			this.onVisualPropertiesChanged();
			break;

			case Series.areaFillOpacityPropertyName:
			this.updateActualAreaFillOpacity();
			this.onVisualPropertiesChanged();
			break;

			case Series.startCapPropertyName:

			case Series.endCapPropertyName:

			case Series.miterLimitPropertyName:
			this.onVisualPropertiesChanged();
			break;

			case Series.isDropShadowEnabledPropertyName:
			this.onIsDropShadowEnabledChanged();
			this.onVisualPropertiesChanged();
			break;

			case Series.useSingleShadowPropertyName:

			case Series.shadowColorPropertyName:

			case Series.shadowBlurPropertyName:

			case Series.shadowOffsetXPropertyName:

			case Series.shadowOffsetYPropertyName:
			this.onVisualPropertiesChanged();
			break;

			case Series.actualBrushPropertyName:

			case Series.actualOutlinePropertyName:

			case Series.thicknessPropertyName:
			this.onVisualPropertiesChanged();
			this.view.updateLegendItemVisual();
			if (this.toolTip != null && this._seriesInteractionManager != null) {
				this.seriesInteractionManager.updateToolTipValue(this, this.toolTip);
			}
			break;

			case "Visibility":
			this.view.visibilityChanged();
			break;

			case Series.itemsSourcePropertyName:
			if (this.syncLink != null) {
				this.registerItemsSource(this.syncLink);
			}
			break;

			case Series.fastItemsSourcePropertyName:
			if (oldValue != newValue && newValue != null) {
				this.transitionInViable = true;
			}
			this.notifyThumbnailDataChanged();
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				let $t8 = (<IFastItemsSource><any>oldValue);
				$t8.event = delegateRemove($t8.event, this.fastItemsSource_Event);
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				let $t9 = (<IFastItemsSource><any>newValue);
				$t9.event = delegateCombine($t9.event, this.fastItemsSource_Event);
			}
			break;

			case XamDataChart.legendPropertyName:
			if (newValue != null) {
				if (sender == this) {
					(<IChartLegend><any>newValue).seriesOwner = this;
				} else if (typeCast<XamDataChart>((<any>XamDataChart).$type, sender) !== null) {
					(<IChartLegend><any>newValue).chartOwner = <ILegendOwner><any>sender;
				}
			}
			this.actualLegend = this.findActualLegend();
			break;

			case Series.actualLegendPropertyName:
			this.assertLegendItems(typeCast<IChartLegend>(IChartLegend_$type, oldValue), typeCast<IChartLegend>(IChartLegend_$type, newValue));
			break;

			case Series.legendItemPropertyName:
			this.assertLegendItems2(typeCast<Control>((<any>Control).$type, oldValue), typeCast<Control>((<any>Control).$type, newValue));
			break;

			case Series.legendItemVisibilityPropertyName:
			this.view.onLegendItemVisibilityChanged();
			break;

			case Series.toolTipPropertyName:
			if (this._seriesInteractionManager != null) {
				this.seriesInteractionManager.updateToolTipValue(this, this.toolTip);
			}
			break;

			case XamDataChart.crosshairPointPropertyName:
			if (this.seriesViewer != null) {
				if (!this.disableCursorEvents) {
					this.seriesViewer.raiseSeriesCursorMouseMove(this, this.getItem(this.seriesViewer.crosshairPoint));
				}
			}
			break;

			case Series.resolutionPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.transitionDurationPropertyName:

			case Series.transitionEasingFunctionPropertyName:
			this.animator.stop();
			this.animator.intervalMilliseconds = this.transitionDuration;
			this.animator.easingFunction = this.transitionEasingFunction;
			this.renderSeries(false);
			break;

			case Series.discreteLegendItemTemplatePropertyName:
			this.renderSeries(false);
			break;

			case Series.visibilityProxyPropertyName:
			if (oldValue != newValue) {
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			this.view.visibilityChanged();
			break;

			case Series.isHighlightingEnabledPropertyName:
			this.actualIsHighlightingEnabled = this.getIsHighlightingEnabled();
			this.renderSeries(false);
			break;

			case Series.showDefaultTooltipPropertyName:
			this.ensureDefaultTooltip();
			break;

			case Series.finalValuePropertyName:
			this.updatePercentChange();
			break;

		}

	}
	ensureDefaultTooltip(): void {
		if (this.seriesViewer != null && <boolean>((<any>this).externalObject.owner)) {
			let sv_ = this.seriesViewer;
			(<any>this).externalObject.owner._ensureDefaultTooltip((<any>this).externalObject);;
		}
	}
	protected getIsHighlightingEnabled(): boolean {
		return this.isHighlightingEnabled && this.isHighlightingSupported;
	}
	protected get_isHighlightingSupported(): boolean {
		return false;
	}
	protected get isHighlightingSupported(): boolean {
		return this.get_isHighlightingSupported();
	}
	private _disableCursorEvents: boolean = false;
	protected get_disableCursorEvents(): boolean {
		return this._disableCursorEvents;
	}
	protected set_disableCursorEvents(value: boolean): void {
		this._disableCursorEvents = value;
	}
	get disableCursorEvents(): boolean {
		return this.get_disableCursorEvents();
	}
	set disableCursorEvents(value: boolean) {
		this.set_disableCursorEvents(value);
	}
	protected disableCursorEventsForSeries(series: Series): void {
		series.disableCursorEvents = true;
	}
	static readonly syncLinkPropertyName: string = "SyncLink";
	get syncLink(): SyncLink {
		return this._syncLink;
	}
	set syncLink(value: SyncLink) {
		if (this.syncLink != value) {
			let oldDataChart: SyncLink = this.syncLink;
			this._syncLink = value;
			this.raisePropertyChanged(Series.syncLinkPropertyName, oldDataChart, this.syncLink);
		}
	}
	private _syncLink: SyncLink = null;
	static readonly seriesViewerPropertyName: string = "SeriesViewer";
	get seriesViewer(): SeriesViewer {
		return this._seriesViewer;
	}
	set seriesViewer(value: SeriesViewer) {
		if (this.seriesViewer != value) {
			let oldChart: SeriesViewer = this.seriesViewer;
			this._seriesViewer = value;
			this.raisePropertyChanged(Series.seriesViewerPropertyName, oldChart, this._seriesViewer);
		}
	}
	private _seriesViewer: SeriesViewer = null;
	get chart(): XamDataChart {
		return typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
	}
	set chart(value: XamDataChart) {
		this.seriesViewer = value;
	}
	readonly seriesViewer_SeriesCollectionChanged: (sender: any, e: NotifyCollectionChangedEventArgs) => void = null;
	readonly seriesViewer_PropertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	readonly seriesViewer_WindowRectChanged: (sender: any, e: RectChangedEventArgs) => void = null;
	get itemsSource(): IEnumerable {
		return <IEnumerable><any>this.getValue(Series.itemsSourceProperty);
	}
	set itemsSource(value: IEnumerable) {
		this.setValue(Series.itemsSourceProperty, value);
	}
	static readonly itemsSourcePropertyName: string = "ItemsSource";
	static readonly itemsSourceProperty: DependencyProperty = DependencyProperty.register(Series.itemsSourcePropertyName, IEnumerable_$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let series: Series = typeCast<Series>((<any>Series).$type, sender);
		if (series.syncLink != null) {
			(<IFastItemsSourceProvider>series.syncLink).releaseFastItemsSource(<IEnumerable><any>e.oldValue);
		}
		(<Series>sender).raisePropertyChanged(Series.itemsSourcePropertyName, e.oldValue, e.newValue);
	}));
	get fastItemsSource(): IFastItemsSource {
		return <IFastItemsSource><any>this.getValue(Series.fastItemsSourceProperty);
	}
	set fastItemsSource(value: IFastItemsSource) {
		this.setValue(Series.fastItemsSourceProperty, value);
	}
	static readonly fastItemsSourcePropertyName: string = "FastItemsSource";
	static readonly fastItemsSourceProperty: DependencyProperty = DependencyProperty.register(Series.fastItemsSourcePropertyName, IFastItemsSource_$type, (<any>Series).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.fastItemsSourcePropertyName, e.oldValue, e.newValue)));
	fastItemsSource_Event: (sender: any, e: FastItemsSourceEventArgs) => void = null;
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		if (this.seriesViewer != null) {
			this.seriesViewer.raiseSeriesDataUpdated();
		}
	}
	get legend(): IChartLegend {
		return <IChartLegend><any>this.getValue(Series.legendProperty);
	}
	set legend(value: IChartLegend) {
		this.setValue(Series.legendProperty, value);
	}
	static readonly legendProperty: DependencyProperty = DependencyProperty.register(XamDataChart.legendPropertyName, IChartLegend_$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let series: Series = typeCast<Series>((<any>Series).$type, sender);
		series.raisePropertyChanged(XamDataChart.legendPropertyName, e.oldValue, e.newValue);
	}));
	get legendItem(): Control {
		if (this._legendItem == null && this.actualLegend != null) {
			this._legendItem = this.getLegendItem();
		}
		return this._legendItem;
	}
	set legendItem(value: Control) {
		if (this.legendItem != value) {
			let oldLegendItem: Control = this.legendItem;
			this._legendItem = value;
			this.raisePropertyChanged(Series.legendItemPropertyName, oldLegendItem, this._legendItem);
		}
	}
	private _legendItem: Control = null;
	static readonly legendItemPropertyName: string = "LegendItem";
	provideLegendItem(): any {
		return this.getLegendItem();
	}
	protected getLegendItem(): Control {
		let legendItem: ContentControl = typeCast<ContentControl>((<any>ContentControl).$type, this._legendItem);
		let dataTemplate: DataTemplate = this.legendItemTemplate;
		if (dataTemplate == null) {
			dataTemplate = this.view.resolveLegendItemTemplate(this.defaultLegendItemTemplateType);
		}
		if (dataTemplate != null) {
			if (legendItem == null) {
				legendItem = new ContentControl();
			}
			legendItem.content = ((() => {
				let $ret = new DataContext();
				$ret.series = this;
				$ret.item = null;
				return $ret;
			})());
			legendItem.contentTemplate = dataTemplate;
		} else {
			legendItem = null;
		}
		return legendItem;
	}
	static readonly actualLegendPropertyName: string = "ActualLegend";
	get actualLegend(): IChartLegend {
		return this._actualLegend;
	}
	set actualLegend(value: IChartLegend) {
		if (this.actualLegend != value) {
			let oldActualLegend: IChartLegend = this._actualLegend;
			this._actualLegend = value;
			this.raisePropertyChanged(Series.actualLegendPropertyName, oldActualLegend, this._actualLegend);
		}
	}
	private _actualLegend: IChartLegend = null;
	get legendItemVisibility(): Visibility {
		return EnumUtil.getEnumValue<Visibility>(Visibility_$type, this.getValue(Series.legendItemVisibilityProperty));
	}
	set legendItemVisibility(value: Visibility) {
		this.setValue(Series.legendItemVisibilityProperty, enumGetBox<Visibility>(Visibility_$type, value));
	}
	static readonly legendItemVisibilityPropertyName: string = "LegendItemVisibility";
	static readonly legendItemVisibilityProperty: DependencyProperty = DependencyProperty.register(Series.legendItemVisibilityPropertyName, Visibility_$type, (<any>Series).$type, new PropertyMetadata(2, enumGetBox<Visibility>(Visibility_$type, Visibility.Visible), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.legendItemVisibilityPropertyName, e.oldValue, e.newValue)));
	get legendItemBadgeTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(Series.legendItemBadgeTemplateProperty);
	}
	set legendItemBadgeTemplate(value: DataTemplate) {
		this.setValue(Series.legendItemBadgeTemplateProperty, value);
	}
	static readonly legendItemBadgeTemplatePropertyName: string = "LegendItemBadgeTemplate";
	static readonly legendItemBadgeTemplateProperty: DependencyProperty = DependencyProperty.register(Series.legendItemBadgeTemplatePropertyName, (<any>DataTemplate).$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let series: Series = typeCast<Series>((<any>Series).$type, sender);
		series.raisePropertyChanged(Series.legendItemBadgeTemplatePropertyName, e.oldValue, e.newValue);
		if (series.legendItem != null) {
			series.legendItem = series.getLegendItem();
		}
	}));
	private _defaultLegendItemTemplateType: StandardLegendItems = <StandardLegendItems>0;
	get defaultLegendItemTemplateType(): StandardLegendItems {
		return this._defaultLegendItemTemplateType;
	}
	set defaultLegendItemTemplateType(value: StandardLegendItems) {
		this._defaultLegendItemTemplateType = value;
	}
	private _defaultLegendItemBadgeTemplateType: StandardLegendBadges = <StandardLegendBadges>0;
	get defaultLegendItemBadgeTemplateType(): StandardLegendBadges {
		return this._defaultLegendItemBadgeTemplateType;
	}
	set defaultLegendItemBadgeTemplateType(value: StandardLegendBadges) {
		this._defaultLegendItemBadgeTemplateType = value;
	}
	private _defaultDiscreteLegendItemTemplateType: StandardLegendItems = <StandardLegendItems>0;
	get defaultDiscreteLegendItemTemplateType(): StandardLegendItems {
		return this._defaultDiscreteLegendItemTemplateType;
	}
	set defaultDiscreteLegendItemTemplateType(value: StandardLegendItems) {
		this._defaultDiscreteLegendItemTemplateType = value;
	}
	get legendItemTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(Series.legendItemTemplateProperty);
	}
	set legendItemTemplate(value: DataTemplate) {
		this.setValue(Series.legendItemTemplateProperty, value);
	}
	static readonly legendItemTemplatePropertyName: string = "LegendItemTemplate";
	static readonly legendItemTemplateProperty: DependencyProperty = DependencyProperty.register(Series.legendItemTemplatePropertyName, (<any>DataTemplate).$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let series: Series = typeCast<Series>((<any>Series).$type, sender);
		series.raisePropertyChanged(Series.legendItemTemplatePropertyName, e.oldValue, e.newValue);
		if (series.legendItem != null) {
			series.legendItem = series.getLegendItem();
		}
	}));
	get discreteLegendItemTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(Series.discreteLegendItemTemplateProperty);
	}
	set discreteLegendItemTemplate(value: DataTemplate) {
		this.setValue(Series.discreteLegendItemTemplateProperty, value);
	}
	static readonly discreteLegendItemTemplatePropertyName: string = "DiscreteLegendItemTemplate";
	static readonly discreteLegendItemTemplateProperty: DependencyProperty = DependencyProperty.register(Series.discreteLegendItemTemplatePropertyName, (<any>DataTemplate).$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let series: Series = typeCast<Series>((<any>Series).$type, sender);
		series.raisePropertyChanged(Series.discreteLegendItemTemplatePropertyName, e.oldValue, e.newValue);
	}));
	get index(): number {
		return typeGetValue(this.getValue(Series.indexProperty));
	}
	set index(value: number) {
		this.setValue(Series.indexProperty, value);
	}
	static readonly indexPropertyName: string = "Index";
	static readonly indexProperty: DependencyProperty = DependencyProperty.register(Series.indexPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, -1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let series: Series = typeCast<Series>((<any>Series).$type, sender);
		series.raisePropertyChanged(Series.indexPropertyName, e.oldValue, e.newValue);
		if (series.legendItem != null) {
			series.legendItem = series.getLegendItem();
		}
	}));
	updateSeriesIndexedPropertiesInternal(): void {
		this.updateIndexedProperties();
	}
	doUpdateIndexedProperties(): void {
		this.updateIndexedProperties();
	}
	protected updateIndexedProperties(): void {
		this.notifyThumbnailAppearanceChanged();
		if (this.index < 0) {
			return;
		}
		if (this.brush != null) {
			this.view.resetActualBrush();
			this.view.bindActualToUserBrush();
		} else {
			this.actualBrush = this.seriesViewer == null ? null : this.seriesViewer.getBrushByIndex(this.index);
		}
		if (this.outline != null) {
			this.view.resetActualOutlineBrush();
			this.view.bindActualToUserOutline();
		} else {
			this.actualOutline = this.seriesViewer == null ? null : this.seriesViewer.getOutlineByIndex(this.index);
		}
	}
	static readonly transitionEasingFunctionPropertyName: string = "TransitionEasingFunction";
	static readonly transitionInEasingFunctionPropertyName: string = "TransitionInEasingFunction";
	get transitionEasingFunction(): (time: number) => number {
		return <(time: number) => number>this.getValue(Series.transitionEasingFunctionProperty);
	}
	set transitionEasingFunction(value: (time: number) => number) {
		this.setValue(Series.transitionEasingFunctionProperty, value);
	}
	static readonly transitionEasingFunctionProperty: DependencyProperty = DependencyProperty.register(Series.transitionEasingFunctionPropertyName, Delegate_$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.transitionEasingFunctionPropertyName, e.oldValue, e.newValue)));
	get transitionInEasingFunction(): (time: number) => number {
		return <(time: number) => number>this.getValue(Series.transitionInEasingFunctionProperty);
	}
	set transitionInEasingFunction(value: (time: number) => number) {
		this.setValue(Series.transitionInEasingFunctionProperty, value);
	}
	static readonly transitionInEasingFunctionProperty: DependencyProperty = DependencyProperty.register(Series.transitionInEasingFunctionPropertyName, Delegate_$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.transitionInEasingFunctionPropertyName, e.oldValue, e.newValue)));
	private _functionOrDurationUpdated: boolean = false;
	get functionOrDurationUpdated(): boolean {
		return this._functionOrDurationUpdated;
	}
	set functionOrDurationUpdated(value: boolean) {
		this._functionOrDurationUpdated = value;
	}
	get transitionDuration(): number {
		return typeGetValue(this.getValue(Series.transitionDurationProperty));
	}
	set transitionDuration(value: number) {
		this.setValue(Series.transitionDurationProperty, value);
	}
	static readonly transitionDurationPropertyName: string = "TransitionDuration";
	static readonly transitionDurationProperty: DependencyProperty = DependencyProperty.register(Series.transitionDurationPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.transitionDurationPropertyName, e.oldValue, e.newValue)));
	get transitionProgress(): number {
		return <number>this.getValue(Series.transitionProgressProperty);
	}
	set transitionProgress(value: number) {
		this.setValue(Series.transitionProgressProperty, value);
	}
	static readonly transitionProgressPropertyName: string = "TransitionProgress";
	static readonly transitionProgressProperty: DependencyProperty = DependencyProperty.register(Series.transitionProgressPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.transitionProgressPropertyName, e.oldValue, e.newValue)));
	private static readonly animationTickMilliseconds: number = 10;
	private static readonly useDispatcherTimer: boolean = false;
	animationActive(): boolean {
		return this.animator.animationActive();
	}
	startAnimation(): void {
		this.animator.start();
	}
	get resolution(): number {
		return <number>this.getValue(Series.resolutionProperty);
	}
	set resolution(value: number) {
		this.setValue(Series.resolutionProperty, value);
	}
	static readonly resolutionPropertyName: string = "Resolution";
	static readonly resolutionProperty: DependencyProperty = DependencyProperty.register(Series.resolutionPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.resolutionPropertyName, e.oldValue, e.newValue)));
	get title(): any {
		return <any>this.getValue(Series.titleProperty);
	}
	set title(value: any) {
		this.setValue(Series.titleProperty, value);
	}
	static readonly titlePropertyName: string = "Title";
	static readonly titleProperty: DependencyProperty = DependencyProperty.register(Series.titlePropertyName, (<any>Base).$type, (<any>Series).$type, new PropertyMetadata(2, "Series Title", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.titlePropertyName, e.oldValue, e.newValue)));
	get brush(): Brush {
		return <Brush>this.getValue(Series.brushProperty);
	}
	set brush(value: Brush) {
		this.setValue(Series.brushProperty, value);
	}
	static readonly brushPropertyName: string = "Brush";
	static readonly brushProperty: DependencyProperty = DependencyProperty.register(Series.brushPropertyName, (<any>Brush).$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.brushPropertyName, e.oldValue, e.newValue)));
	get actualBrush(): Brush {
		return <Brush>this.getValue(Series.actualBrushProperty);
	}
	set actualBrush(value: Brush) {
		this.setValue(Series.actualBrushProperty, value);
	}
	static readonly actualBrushPropertyName: string = "ActualBrush";
	static readonly actualBrushProperty: DependencyProperty = DependencyProperty.register(Series.actualBrushPropertyName, (<any>Brush).$type, (<any>Series).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.actualBrushPropertyName, e.oldValue, e.newValue)));
	get outline(): Brush {
		return <Brush>this.getValue(Series.outlineProperty);
	}
	set outline(value: Brush) {
		this.setValue(Series.outlineProperty, value);
	}
	static readonly outlinePropertyName: string = "Outline";
	static readonly outlineProperty: DependencyProperty = DependencyProperty.register(Series.outlinePropertyName, (<any>Brush).$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.outlinePropertyName, e.oldValue, e.newValue)));
	get actualOutline(): Brush {
		return <Brush>this.getValue(Series.actualOutlineProperty);
	}
	set actualOutline(value: Brush) {
		this.setValue(Series.actualOutlineProperty, value);
	}
	static readonly actualOutlinePropertyName: string = "ActualOutline";
	static readonly actualOutlineProperty: DependencyProperty = DependencyProperty.register(Series.actualOutlinePropertyName, (<any>Brush).$type, (<any>Series).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.actualOutlinePropertyName, e.oldValue, e.newValue)));
	static readonly lineJoinPropertyName: string = "LineJoin";
	get miterLimit(): number {
		return <number>this.getValue(Series.miterLimitProperty);
	}
	set miterLimit(value: number) {
		this.setValue(Series.miterLimitProperty, value);
	}
	static readonly miterLimitPropertyName: string = "MiterLimit";
	static readonly miterLimitProperty: DependencyProperty = DependencyProperty.register(Series.miterLimitPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, 0, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.miterLimitPropertyName, e.oldValue, e.newValue)));
	get thickness(): number {
		return <number>this.getValue(Series.thicknessProperty);
	}
	set thickness(value: number) {
		this.setValue(Series.thicknessProperty, value);
	}
	static readonly thicknessPropertyName: string = "Thickness";
	static readonly thicknessProperty: DependencyProperty = DependencyProperty.register(Series.thicknessPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, DeviceUtils.toPixelUnits(2), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.thicknessPropertyName, e.oldValue, e.newValue)));
	get dashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(Series.dashCapProperty));
	}
	set dashCap(value: PenLineCap) {
		this.setValue(Series.dashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly dashCapPropertyName: string = "DashCap";
	static readonly dashCapProperty: DependencyProperty = DependencyProperty.register(Series.dashCapPropertyName, PenLineCap_$type, (<any>Series).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.dashCapPropertyName, e.oldValue, e.newValue)));
	get dashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(Series.dashArrayProperty);
	}
	set dashArray(value: DoubleCollection) {
		this.setValue(Series.dashArrayProperty, value);
	}
	static readonly dashArrayPropertyName: string = "DashArray";
	static readonly dashArrayProperty: DependencyProperty = DependencyProperty.register(Series.dashArrayPropertyName, (<any>DoubleCollection).$type, (<any>Series).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.dashArrayPropertyName, e.oldValue, e.newValue)));
	get toolTip(): any {
		return <any>this.getValue(Series.toolTipProperty);
	}
	set toolTip(value: any) {
		this.setValue(Series.toolTipProperty, value);
	}
	static readonly toolTipPropertyName: string = "ToolTip";
	static readonly toolTipProperty: DependencyProperty = DependencyProperty.register(Series.toolTipPropertyName, (<any>Base).$type, (<any>Series).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.toolTipPropertyName, e.oldValue, e.newValue)));
	get isHighlightingEnabled(): boolean {
		return <boolean>this.getValue(Series.isHighlightingEnabledProperty);
	}
	set isHighlightingEnabled(value: boolean) {
		this.setValue(Series.isHighlightingEnabledProperty, value);
	}
	static readonly isHighlightingEnabledPropertyName: string = "IsHighlightingEnabled";
	static readonly isHighlightingEnabledProperty: DependencyProperty = DependencyProperty.register(Series.isHighlightingEnabledPropertyName, Boolean_$type, (<any>Series).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.isHighlightingEnabledPropertyName, e.oldValue, e.newValue)));
	get isDropShadowEnabled(): boolean {
		return <boolean>this.getValue(Series.isDropShadowEnabledProperty);
	}
	set isDropShadowEnabled(value: boolean) {
		this.setValue(Series.isDropShadowEnabledProperty, value);
	}
	static readonly isDropShadowEnabledPropertyName: string = "IsDropShadowEnabled";
	static readonly isDropShadowEnabledProperty: DependencyProperty = DependencyProperty.register(Series.isDropShadowEnabledPropertyName, Boolean_$type, (<any>Series).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.isDropShadowEnabledPropertyName, e.oldValue, e.newValue)));
	protected get_isDropShadowSupported(): boolean {
		return true;
	}
	get isDropShadowSupported(): boolean {
		return this.get_isDropShadowSupported();
	}
	get shadowBlur(): number {
		return <number>this.getValue(Series.shadowBlurProperty);
	}
	set shadowBlur(value: number) {
		this.setValue(Series.shadowBlurProperty, value);
	}
	static readonly shadowBlurPropertyName: string = "ShadowBlur";
	static readonly shadowBlurProperty: DependencyProperty = DependencyProperty.register(Series.shadowBlurPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.shadowBlurPropertyName, e.oldValue, e.newValue)));
	get shadowColor(): Color {
		return <Color>this.getValue(Series.shadowColorProperty);
	}
	set shadowColor(value: Color) {
		this.setValue(Series.shadowColorProperty, value);
	}
	static readonly shadowColorPropertyName: string = "ShadowColor";
	static readonly shadowColorProperty: DependencyProperty = DependencyProperty.register(Series.shadowColorPropertyName, (<any>Color).$type, (<any>Series).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.shadowColorPropertyName, e.oldValue, e.newValue)));
	get useSingleShadow(): boolean {
		return <boolean>this.getValue(Series.useSingleShadowProperty);
	}
	set useSingleShadow(value: boolean) {
		this.setValue(Series.useSingleShadowProperty, value);
	}
	static readonly useSingleShadowPropertyName: string = "UseSingleShadow";
	static readonly useSingleShadowProperty: DependencyProperty = DependencyProperty.register(Series.useSingleShadowPropertyName, Boolean_$type, (<any>Series).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.useSingleShadowPropertyName, e.oldValue, e.newValue)));
	get shadowOffsetX(): number {
		return <number>this.getValue(Series.shadowOffsetXProperty);
	}
	set shadowOffsetX(value: number) {
		this.setValue(Series.shadowOffsetXProperty, value);
	}
	static readonly shadowOffsetXPropertyName: string = "ShadowOffsetX";
	static readonly shadowOffsetXProperty: DependencyProperty = DependencyProperty.register(Series.shadowOffsetXPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.shadowOffsetXPropertyName, e.oldValue, e.newValue)));
	get shadowOffsetY(): number {
		return <number>this.getValue(Series.shadowOffsetYProperty);
	}
	set shadowOffsetY(value: number) {
		this.setValue(Series.shadowOffsetYProperty, value);
	}
	static readonly shadowOffsetYPropertyName: string = "ShadowOffsetY";
	static readonly shadowOffsetYProperty: DependencyProperty = DependencyProperty.register(Series.shadowOffsetYPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.shadowOffsetYPropertyName, e.oldValue, e.newValue)));
	private _actualIsHighlightingEnabled: boolean = false;
	get actualIsHighlightingEnabled(): boolean {
		return this._actualIsHighlightingEnabled;
	}
	set actualIsHighlightingEnabled(value: boolean) {
		this._actualIsHighlightingEnabled = value;
	}
	private static readonly areaFillOpacityPropertyName: string = "AreaFillOpacity";
	static readonly areaFillOpacityProperty: DependencyProperty = DependencyProperty.register(Series.areaFillOpacityPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.areaFillOpacityPropertyName, e.oldValue, e.newValue)));
	get areaFillOpacity(): number {
		return <number>this.getValue(Series.areaFillOpacityProperty);
	}
	set areaFillOpacity(value: number) {
		this.setValue(Series.areaFillOpacityProperty, value);
	}
	private static readonly actualAreaFillOpacityPropertyName: string = "ActualAreaFillOpacity";
	static readonly actualAreaFillOpacityProperty: DependencyProperty = DependencyProperty.register(Series.actualAreaFillOpacityPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.actualAreaFillOpacityPropertyName, e.oldValue, e.newValue)));
	get actualAreaFillOpacity(): number {
		return <number>this.getValue(Series.actualAreaFillOpacityProperty);
	}
	set actualAreaFillOpacity(value: number) {
		this.setValue(Series.actualAreaFillOpacityProperty, value);
	}
	updateActualAreaFillOpacity(): void {
		let chart = (typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer));
		if (chart != null) {
			this.actualAreaFillOpacity = isNaN_(this.areaFillOpacity) ? chart.chartView.defaultAreaFillOpacity : this.areaFillOpacity;
		}
	}
	private _isDefaultToolTipSelected: boolean = false;
	get isDefaultToolTipSelected(): boolean {
		return this._isDefaultToolTipSelected;
	}
	set isDefaultToolTipSelected(value: boolean) {
		this._isDefaultToolTipSelected = value;
	}
	get showDefaultTooltip(): boolean {
		return <boolean>this.getValue(Series.showDefaultTooltipProperty);
	}
	set showDefaultTooltip(value: boolean) {
		this.setValue(Series.showDefaultTooltipProperty, value);
	}
	static readonly showDefaultTooltipPropertyName: string = "ShowDefaultTooltip";
	static readonly showDefaultTooltipProperty: DependencyProperty = DependencyProperty.register(Series.showDefaultTooltipPropertyName, Boolean_$type, (<any>Series).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.showDefaultTooltipPropertyName, e.oldValue, e.newValue)));
	getTooltipContext(item: any): DataContext {
		return ((() => {
			let $ret = new DataContext();
			$ret.series = this;
			$ret.item = item;
			return $ret;
		})());
	}
	get transitionInDuration(): number {
		return typeGetValue(this.getValue(Series.transitionInDurationProperty));
	}
	set transitionInDuration(value: number) {
		this.setValue(Series.transitionInDurationProperty, value);
	}
	static readonly transitionInDurationPropertyName: string = "TransitionInDuration";
	static readonly transitionInDurationProperty: DependencyProperty = DependencyProperty.register(Series.transitionInDurationPropertyName, Number_$type, (<any>Series).$type, new PropertyMetadata(2, 1000, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.transitionInDurationPropertyName, e.oldValue, e.newValue)));
	get transitionInSpeedType(): TransitionInSpeedType {
		return EnumUtil.getEnumValue<TransitionInSpeedType>(TransitionInSpeedType_$type, this.getValue(Series.transitionInSpeedTypeProperty));
	}
	set transitionInSpeedType(value: TransitionInSpeedType) {
		this.setValue(Series.transitionInSpeedTypeProperty, enumGetBox<TransitionInSpeedType>(TransitionInSpeedType_$type, value));
	}
	static readonly transitionInSpeedTypePropertyName: string = "TransitionInSpeedType";
	static readonly transitionInSpeedTypeProperty: DependencyProperty = DependencyProperty.register(Series.transitionInSpeedTypePropertyName, TransitionInSpeedType_$type, (<any>Series).$type, new PropertyMetadata(2, enumGetBox<TransitionInSpeedType>(TransitionInSpeedType_$type, TransitionInSpeedType.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.transitionInSpeedTypePropertyName, e.oldValue, e.newValue)));
	protected getDefaultTransitionInSpeedType(): TransitionInSpeedType {
		return TransitionInSpeedType.Normal;
	}
	private _currentToolTipParent: any = null;
	get currentToolTipParent(): any {
		return this._currentToolTipParent;
	}
	set currentToolTipParent(value: any) {
		this._currentToolTipParent = value;
	}
	removeToolTipFromCurrentParent(): void {
		this.view.removeToolTipFromCurrentParent();
	}
	replayTransitionIn(): void {
		this.transitionInViable = true;
		this.renderSeries(true);
	}
	removeAxes(): void {
		this.clearAxes();
	}
	clearAxes(): void {
	}
	invalidateAxes(): void {
	}
	private static *_toEnumerableRange(expression: (arg1: number) => number, start: number, length: number): IterableIterator<any> {
		for (let i: number = start; i < length; i++) {
			yield expression(i);
		}
	}
	static toEnumerableRange(expression: (arg1: number) => number, start: number, length: number): IEnumerable$1<number> {
		return toEnum(() => Series._toEnumerableRange(expression, start, length));
	}
	static toEnumerable(expression: (arg1: number) => number, length: number): IEnumerable$1<number> {
		return Series.toEnumerableRange(expression, 0, length);
	}
	static readonly startCapPropertyName: string = "StartCap";
	static readonly startCapProperty: DependencyProperty = DependencyProperty.register(Series.startCapPropertyName, PenLineCap_$type, (<any>Series).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Round), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.startCapPropertyName, e.oldValue, e.newValue)));
	get startCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(Series.startCapProperty));
	}
	set startCap(value: PenLineCap) {
		this.setValue(Series.startCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly endCapPropertyName: string = "EndCap";
	static readonly endCapProperty: DependencyProperty = DependencyProperty.register(Series.endCapPropertyName, PenLineCap_$type, (<any>Series).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Round), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.endCapPropertyName, e.oldValue, e.newValue)));
	get endCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(Series.endCapProperty));
	}
	set endCap(value: PenLineCap) {
		this.setValue(Series.endCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	private _seriesComponentsForView: SeriesComponentsForView = new SeriesComponentsForView();
	getSeriesComponentsForView(): SeriesComponentsForView {
		return this._seriesComponentsForView;
	}
	setMarkerCanvas(canvas: Canvas): void {
		this.updateMarkerCanvas(canvas);
	}
	getTotalMilliseconds(): number {
		return <number><any>this.transitionDuration;
	}
	getTotalTransitionInMilliseconds(): number {
		return <number><any>this.transitionInDuration;
	}
	private _useDeferredMouseEnterAndLeave: boolean = false;
	protected get_useDeferredMouseEnterAndLeave(): boolean {
		return this._useDeferredMouseEnterAndLeave;
	}
	protected set_useDeferredMouseEnterAndLeave(value: boolean): void {
		this._useDeferredMouseEnterAndLeave = value;
	}
	protected get useDeferredMouseEnterAndLeave(): boolean {
		return this.get_useDeferredMouseEnterAndLeave();
	}
	protected set useDeferredMouseEnterAndLeave(value: boolean) {
		this.set_useDeferredMouseEnterAndLeave(value);
	}
	get shouldDeferEnterAndLeave(): boolean {
		return this.useDeferredMouseEnterAndLeave;
	}
	get mouseOverEnabled(): boolean {
		return <boolean>this.getValue(Series.mouseOverEnabledProperty);
	}
	set mouseOverEnabled(value: boolean) {
		this.setValue(Series.mouseOverEnabledProperty, value);
	}
	static readonly mouseOverEnabledPropertyName: string = "MouseOverEnabled";
	static readonly mouseOverEnabledProperty: DependencyProperty = DependencyProperty.register(Series.mouseOverEnabledPropertyName, Boolean_$type, (<any>Series).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<Series>sender).raisePropertyChanged(Series.mouseOverEnabledPropertyName, e.oldValue, e.newValue)));
	getHighlightingInfo(item: any, world: Point): HighlightingInfo {
		return null;
	}
	getMarkerHighlightingInfo(item: any, world: Point): HighlightingInfo {
		return null;
	}
	onMouseEnter(pt: Point, source: any, data: any): void {
		this.seriesInteractionManager.onMouseEnter(this, pt, source, data);
	}
	simulateHover(point: Point): void {
		this.seriesInteractionManager.simulateHover(this, point);
	}
	private assertLegendItems1(oldChart: XamDataChart, newChart: XamDataChart): void {
		if (this.actualLegend != null && this.legendItem != null) {
			if (newChart == null && this.actualLegend.containsChild(this.legendItem)) {
				this.actualLegend.removeChild(this.legendItem);
			}
			if (newChart != null && !this.actualLegend.containsChild(this.legendItem) && this.legendItemVisibility != Visibility.Collapsed) {
				this.actualLegend.addChildInOrder(this.legendItem, this);
			}
		}
	}
	private clearLegendItems(): void {
		if (this.actualLegend == null || this.legendItem == null) {
			return;
		}
		this.actualLegend.removeChild(this.legendItem);
	}
	assertLegendItems(oldLegend: IChartLegend, newLegend: IChartLegend): void {
		if (this.legendItem != null) {
			if (oldLegend != null && oldLegend.containsChild(this.legendItem)) {
				oldLegend.removeChild(this.legendItem);
			}
			if (this.seriesViewer != null && newLegend != null && !newLegend.containsChild(this.legendItem) && this.legendItemVisibility != Visibility.Collapsed) {
				newLegend.addChildInOrder(this.legendItem, this);
			}
		}
	}
	private assertLegendItems2(oldItem: Control, newItem: Control): void {
		if (this.actualLegend != null) {
			if (oldItem != null && this.actualLegend.containsChild(oldItem)) {
				this.actualLegend.removeChild(oldItem);
			}
			if (this.seriesViewer != null && newItem != null && this.legendItemVisibility != Visibility.Collapsed) {
				this.actualLegend.addChildInOrder(newItem, this);
			}
		}
	}
	releaseItemsSource(provider: IFastItemsSourceProvider): void {
		this.fastItemsSource = provider.releaseFastItemsSource(this.itemsSource);
	}
	registerItemsSource(provider: IFastItemsSourceProvider): void {
		this.fastItemsSource = provider.getFastItemsSource(this.itemsSource);
	}
	protected findActualLegend(): IChartLegend {
		if (this.legend != null) {
			return this.legend;
		}
		if (this.seriesViewer != null && this.seriesViewer.legend != null) {
			return this.seriesViewer.legend;
		}
		return null;
	}
	protected shouldTransitionIn(): boolean {
		return false;
	}
	shouldAnimate(animate: boolean): boolean {
		return (animate && this.getTotalMilliseconds() > 0) || this.animationActive() || (this.transitionInViableResolved && this.shouldTransitionIn() && this.getTotalTransitionInMilliseconds() > 0);
	}
	protected deregisterForAxis(axis: Axis): void {
		if (axis != null) {
			axis.deregisterSeries(this);
		}
	}
	protected registerForAxis(axis: Axis): void {
		if (axis != null) {
			axis.registerSeries(this);
		}
	}
	getSeriesComponentsFromView(): SeriesComponentsFromView {
		return this.view.getSeriesComponentsFromView();
	}
	updateMarkerCanvas(canvas: Canvas): void {
		this.view.setMarkerCanvas(canvas);
	}
	showTooltip(pt: Point, add: (arg1: any) => void): void {
		this.seriesInteractionManager.showToolTip(this, pt, add);
	}
	protected get_useOverlayScheduler(): boolean {
		return false;
	}
	get useOverlayScheduler(): boolean {
		return this.get_useOverlayScheduler();
	}
	provideContext(context: RenderingContext, hitContext: RenderingContext): void {
		this.view.onContextProvided(context, hitContext);
	}
	provideViewport(newViewport: Rect): void {
		this.onViewportChanged(this.viewport, newViewport);
	}
	handleCollectionChanged(e: NotifyCollectionChangedEventArgs): void {
		if (this.fastItemsSource != null) {
			this.fastItemsSource.handleCollectionChanged(e);
		}
	}
	notifySetItem(index: number, oldItem: any, newItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(2, NotifyCollectionChangedAction.Replace, newItem, oldItem, index));
	}
	notifyClearItems(): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(0, NotifyCollectionChangedAction.Reset));
	}
	notifyInsertItem(index: number, newItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Add, newItem, index));
	}
	notifyRemoveItem(index: number, oldItem: any): void {
		this.handleCollectionChanged(new NotifyCollectionChangedEventArgs(1, NotifyCollectionChangedAction.Remove, oldItem, index));
	}
	styleUpdated(): void {
		this.renderSeries(false);
	}
	private _tooltipTemplate: any = null;
	get tooltipTemplate(): any {
		return this._tooltipTemplate;
	}
	set tooltipTemplate(value: any) {
		this._tooltipTemplate = value;
	}
	private _flattenEventArgs: (arg1: any) => any = null;
	get flattenEventArgs(): (arg1: any) => any {
		return this._flattenEventArgs;
	}
	set flattenEventArgs(value: (arg1: any) => any) {
		this._flattenEventArgs = value;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		return false;
	}
	protected _coercionMethods: any = null;
	protected get_coercionMethods(): any {
		return this._coercionMethods;
	}
	protected set_coercionMethods(value: any): void {
		this._coercionMethods = value;
	}
	get coercionMethods(): any {
		return this.get_coercionMethods();
	}
	set coercionMethods(value: any) {
		this.set_coercionMethods(value);
	}
	private _expectFunctions: boolean = false;
	protected get_expectFunctions(): boolean {
		return this._expectFunctions;
	}
	protected set_expectFunctions(value: boolean): void {
		this._expectFunctions = value;
	}
	get expectFunctions(): boolean {
		return this.get_expectFunctions();
	}
	set expectFunctions(value: boolean) {
		this.set_expectFunctions(value);
	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		return null;
	}
	private _hitTestMode: SeriesHitTestMode = SeriesHitTestMode.Auto;
	static readonly hitTestModePropertyName: string = "HitTestMode";
	get hitTestMode(): SeriesHitTestMode {
		return this._hitTestMode;
	}
	set hitTestMode(value: SeriesHitTestMode) {
		let oldValue = this._hitTestMode;
		this._hitTestMode = value;
		if (oldValue != this._hitTestMode) {
			this.raisePropertyChanged(Series.hitTestModePropertyName, enumGetBox<SeriesHitTestMode>(SeriesHitTestMode_$type, oldValue), enumGetBox<SeriesHitTestMode>(SeriesHitTestMode_$type, this._hitTestMode));
		}
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		return this.hitTestMode == SeriesHitTestMode.Auto ? SeriesHitTestMode.ColorEncoded : this.hitTestMode;
	}
	private _actualHitTestMode: SeriesHitTestMode = <SeriesHitTestMode>0;
	static readonly actualHitTestModePropertyName: string = "ActualHitTestMode";
	get actualHitTestMode(): SeriesHitTestMode {
		return this._actualHitTestMode;
	}
	set actualHitTestMode(value: SeriesHitTestMode) {
		let oldValue = this._actualHitTestMode;
		this._actualHitTestMode = value;
		if (oldValue != this._actualHitTestMode) {
			this.raisePropertyChanged(Series.actualHitTestModePropertyName, enumGetBox<SeriesHitTestMode>(SeriesHitTestMode_$type, oldValue), enumGetBox<SeriesHitTestMode>(SeriesHitTestMode_$type, this._actualHitTestMode));
		}
	}
	protected registerDoubleColumn(memberPath: string): IFastItemColumn$1<number> {
		if (memberPath == null) {
			return this.fastItemsSource.registerColumn(null, null, false);
		}
		let coercionMethod: (arg1: any) => any = null;
		let info = SeriesViewer.getCoercionMethod(memberPath, this.coercionMethods);
		coercionMethod = info.coercionMethod;
		return this.fastItemsSource.registerColumn(memberPath, coercionMethod, this.expectFunctions);
	}
	protected registerIntColumn(memberPath: string): IFastItemColumn$1<number> {
		if (memberPath == null) {
			return this.fastItemsSource.registerColumnInt(null, null, false);
		}
		let coercionMethod: (arg1: any) => any = null;
		let info = SeriesViewer.getCoercionMethod(memberPath, this.coercionMethods);
		coercionMethod = info.coercionMethod;
		return this.fastItemsSource.registerColumnInt(memberPath, coercionMethod, this.expectFunctions);
	}
	protected registerObjectColumn(memberPath: string): IFastItemColumn$1<any> {
		if (memberPath == null) {
			return this.fastItemsSource.registerColumnObject(null, null, false);
		}
		let coercionMethod: (arg1: any) => any = null;
		let info = SeriesViewer.getCoercionMethod(memberPath, this.coercionMethods);
		coercionMethod = info.coercionMethod;
		return this.fastItemsSource.registerColumnObject(memberPath, coercionMethod, this.expectFunctions);
	}
	protected get viewport(): Rect {
		return this.view != null ? this.view.viewport : Rect.empty;
	}
	protected get_isNegativeColorSupported(): boolean {
		return false;
	}
	get isNegativeColorSupported(): boolean {
		return this.get_isNegativeColorSupported();
	}
	protected get_isMarkerlessDisplayPreferred(): boolean {
		return true;
	}
	get isMarkerlessDisplayPreferred(): boolean {
		return this.get_isMarkerlessDisplayPreferred();
	}
	setNegativeColors(negativeBrush: Brush, negativeOutline: Brush): void {
	}
	ensurePlatformSettings: (arg1: SeriesViewer) => void = null;
	protected copyVisualData(target: any, source: any): void {
		this.seriesVisualDataManager.copyVisualData(target, source);
	}
	exportVisualData(): any {
		let svd = this.seriesVisualDataManager.exportVisualData(this, this.viewport);
		this.exportVisualDataOverride(svd);
		this.view.exportViewShapes(svd);
		return svd;
	}
	protected exportVisualDataOverride(svd: any): void {
	}
	static readonly trendLineDashArrayPropertyName: string = "TrendLineDashArray";
	static readonly trendLineTypePropertyName: string = "TrendLineType";
	static readonly trendLinePeriodPropertyName: string = "TrendLinePeriod";
	static readonly trendLineBrushPropertyName: string = "TrendLineBrush";
	static readonly trendLineActualBrushPropertyName: string = "ActualTrendLineBrush";
	static readonly trendLineThicknessPropertyName: string = "TrendLineThickness";
	static readonly trendLineDashCapPropertyName: string = "TrendLineDashCap";
	static readonly trendLineZIndexPropertyName: string = "TrendLineZIndex";
	private _previousPoint: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
	moveCursorPoint(point: Point): void {
		if (this._previousPoint.x != point.x || this._previousPoint.y != point.y) {
			this._previousPoint = point;
			this.onCursorPointMoved(point);
		}
	}
	protected onCursorPointMoved(point: Point): void {
	}
	notifyBrushScalesDirty(): void {
	}
	notifySizeScalesDirty(): void {
	}
	getMatchingAxis(axis: Axis): Axis {
		return null;
	}
	getAxes(): Axis[] {
		return null;
	}
	getReferenceValue(): number {
		return NaN;
	}
	static getReferenceValue1(column: IList$1<number>, sortingAxis: ISortingAxis): number {
		if (column == null || column.count == 0) {
			return NaN;
		}
		if (sortingAxis != null && sortingAxis.sortedIndices != null) {
			if (sortingAxis.sortedIndices.count != column.count) {
				return NaN;
			}
			for (let ii: number = 0; ii < column.count; ii++) {
				if (!isNaN_(column.item(sortingAxis.sortedIndices._inner[ii])) && column.item(sortingAxis.sortedIndices._inner[ii]) != 0) {
					return column.item(sortingAxis.sortedIndices._inner[ii]);
				}
			}
		}
		for (let ii1: number = 0; ii1 < column.count; ii1++) {
			if (!isNaN_(column.item(ii1)) && column.item(ii1) != 0) {
				return column.item(ii1);
			}
		}
		return NaN;
	}
	onBeforeContentRefresh(): void {
	}
	private static readonly finalValuePropertyName: string = "FinalValue";
	private _finalValue: number = NaN;
	get finalValue(): number {
		return this._finalValue;
	}
	set finalValue(value: number) {
		let oldValue: number = this.finalValue;
		if (value != oldValue) {
			this._finalValue = value;
			this.raisePropertyChanged(Series.finalValuePropertyName, oldValue, this.finalValue);
		}
	}
	private static readonly percentChangePropertyName: string = "PercentChange";
	private _percentChange: number = NaN;
	get percentChange(): number {
		return this._percentChange;
	}
	set percentChange(value: number) {
		let oldValue: number = this.percentChange;
		if (value != oldValue) {
			this._percentChange = value;
			this.raisePropertyChanged(Series.percentChangePropertyName, oldValue, this.percentChange);
		}
	}
	protected updatePercentChange(): void {
		let referenceValue: number = this.getReferenceValue();
		this.percentChange = (this.finalValue - referenceValue) / referenceValue * 100;
	}
	getItemLabel(dataItem: any): any {
		return null;
	}
}

/**
 * @hidden 
 */
export abstract class MarkerSeries extends Series {
	static $t: Type = markType(MarkerSeries, 'MarkerSeries', (<any>Series).$type);
	private _markerView: MarkerSeriesView;
	get markerView(): MarkerSeriesView {
		return this._markerView;
	}
	set markerView(value: MarkerSeriesView) {
		this._markerView = value;
	}
	constructor() {
		super();
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.markerView = <MarkerSeriesView>view;
	}
	protected get_hasMarkers(): boolean {
		return true;
	}
	getActualMarkerBrush(): Brush {
		return this.actualMarkerBrush;
	}
	getActualMarkerOutlineBrush(): Brush {
		return this.actualMarkerOutline;
	}
	getActualMarkerTemplate(): DataTemplate {
		return this.cachedActualMarkerTemplate;
	}
	get markerType(): MarkerType {
		return EnumUtil.getEnumValue<MarkerType>(MarkerType_$type, this.getValue(MarkerSeries.markerTypeProperty));
	}
	set markerType(value: MarkerType) {
		this.setValue(MarkerSeries.markerTypeProperty, enumGetBox<MarkerType>(MarkerType_$type, value));
	}
	static readonly markerTypePropertyName: string = "MarkerType";
	static readonly markerTypeProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.markerTypePropertyName, MarkerType_$type, (<any>MarkerSeries).$type, new PropertyMetadata(2, enumGetBox<MarkerType>(MarkerType_$type, MarkerType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.markerTypePropertyName, e.oldValue, e.newValue)));
	get markerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(MarkerSeries.markerTemplateProperty);
	}
	set markerTemplate(value: DataTemplate) {
		this.setValue(MarkerSeries.markerTemplateProperty, value);
	}
	static readonly markerTemplatePropertyName: string = "MarkerTemplate";
	static readonly markerTemplateProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.markerTemplatePropertyName, (<any>DataTemplate).$type, (<any>MarkerSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.markerTemplatePropertyName, e.oldValue, e.newValue)));
	get actualMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(MarkerSeries.actualMarkerTemplateProperty);
	}
	set actualMarkerTemplate(value: DataTemplate) {
		this.setValue(MarkerSeries.actualMarkerTemplateProperty, value);
	}
	cachedActualMarkerTemplate: DataTemplate = null;
	static readonly actualMarkerTemplatePropertyName: string = "ActualMarkerTemplate";
	static readonly actualMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.actualMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>MarkerSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.actualMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	private static _nullMarkerTemplate: DataTemplate = null;
	static get nullMarkerTemplate(): DataTemplate {
		if (MarkerSeries._nullMarkerTemplate == null) {
			MarkerSeries._nullMarkerTemplate = new DataTemplate();
		}
		return MarkerSeries._nullMarkerTemplate;
	}
	get markerBrush(): Brush {
		return <Brush>this.getValue(MarkerSeries.markerBrushProperty);
	}
	set markerBrush(value: Brush) {
		this.setValue(MarkerSeries.markerBrushProperty, value);
	}
	static readonly markerBrushPropertyName: string = "MarkerBrush";
	static readonly markerBrushProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.markerBrushPropertyName, (<any>Brush).$type, (<any>MarkerSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => {
		let markerSeries = (typeCast<MarkerSeries>((<any>MarkerSeries).$type, sender));
		markerSeries.raisePropertyChanged(MarkerSeries.markerBrushPropertyName, e.oldValue, e.newValue);
	}));
	get actualMarkerBrush(): Brush {
		return <Brush>this.getValue(MarkerSeries.actualMarkerBrushProperty);
	}
	set actualMarkerBrush(value: Brush) {
		this.setValue(MarkerSeries.actualMarkerBrushProperty, value);
	}
	static readonly actualMarkerBrushPropertyName: string = "ActualMarkerBrush";
	static readonly actualMarkerBrushProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.actualMarkerBrushPropertyName, (<any>Brush).$type, (<any>MarkerSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.actualMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get markerOutline(): Brush {
		return <Brush>this.getValue(MarkerSeries.markerOutlineProperty);
	}
	set markerOutline(value: Brush) {
		this.setValue(MarkerSeries.markerOutlineProperty, value);
	}
	static readonly markerOutlinePropertyName: string = "MarkerOutline";
	static readonly markerOutlineProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.markerOutlinePropertyName, (<any>Brush).$type, (<any>MarkerSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.markerOutlinePropertyName, e.oldValue, e.newValue)));
	get actualMarkerOutline(): Brush {
		return <Brush>this.getValue(MarkerSeries.actualMarkerOutlineProperty);
	}
	set actualMarkerOutline(value: Brush) {
		this.setValue(MarkerSeries.actualMarkerOutlineProperty, value);
	}
	static readonly actualMarkerOutlinePropertyName: string = "ActualMarkerOutline";
	static readonly actualMarkerOutlineProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.actualMarkerOutlinePropertyName, (<any>Brush).$type, (<any>MarkerSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.actualMarkerOutlinePropertyName, e.oldValue, e.newValue)));
	get markerStyle(): Style {
		return <Style>this.getValue(MarkerSeries.markerStyleProperty);
	}
	set markerStyle(value: Style) {
		this.setValue(MarkerSeries.markerStyleProperty, value);
	}
	static readonly markerStylePropertyName: string = "MarkerStyle";
	static readonly markerStyleProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.markerStylePropertyName, (<any>Style).$type, (<any>MarkerSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.markerStylePropertyName, e.oldValue, e.newValue)));
	get useLightweightMarkers(): boolean {
		return <boolean>this.getValue(MarkerSeries.useLightweightMarkersProperty);
	}
	set useLightweightMarkers(value: boolean) {
		this.setValue(MarkerSeries.useLightweightMarkersProperty, value);
	}
	static readonly useLightweightMarkersPropertyName: string = "UseLightweightMarkers";
	static readonly useLightweightMarkersProperty: DependencyProperty = DependencyProperty.register(MarkerSeries.useLightweightMarkersPropertyName, Boolean_$type, (<any>MarkerSeries).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<MarkerSeries>sender).raisePropertyChanged(MarkerSeries.useLightweightMarkersPropertyName, e.oldValue, e.newValue)));
	shouldDisplayMarkers(): boolean {
		return this.cachedActualMarkerTemplate != null && ((this.markerType != MarkerType.None && this.markerType != MarkerType.Unset) || this.markerTemplate != null);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case MarkerSeries.markerBrushPropertyName:

			case MarkerSeries.markerTypePropertyName:

			case MarkerSeries.markerOutlinePropertyName:

			case MarkerSeries.markerTemplatePropertyName:
			this.updateIndexedProperties();
			this.onVisualPropertiesChanged();
			break;

			case MarkerSeries.actualMarkerTemplatePropertyName:
			this.cachedActualMarkerTemplate = <DataTemplate>newValue;
			if (oldValue == MarkerSeries.nullMarkerTemplate || newValue == MarkerSeries.nullMarkerTemplate || (oldValue == null || newValue != null)) {
				this.markerView.doUpdateMarkerTemplates();
				let thumbnailView: MarkerSeriesView = typeCast<MarkerSeriesView>((<any>MarkerSeriesView).$type, this.thumbnailView);
				if (thumbnailView != null) {
					thumbnailView.doUpdateMarkerTemplates();
				}
				this.renderSeries(false);
			}
			this.view.updateLegendItemVisual();
			if (this.toolTip != null && this.isInteractivityLoaded) {
				this.seriesInteractionManager.updateToolTipValue(this, this.toolTip);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case MarkerSeries.useLightweightMarkersPropertyName:
			this.markerView.setUseLightweightMode(this.useLightweightMarkers);
			this.renderSeries(false);
			break;

			case MarkerSeries.actualMarkerBrushPropertyName:

			case MarkerSeries.actualMarkerOutlinePropertyName:
			if (this.shouldDisplayMarkers()) {
				this.renderSeries(false);
			}
			break;

		}

	}
	static getMarkerTemplatePropertyName(markerType: MarkerType): string {
		switch (markerType) {
			case MarkerType.Circle:

			case MarkerType.Hidden: return XamDataChart.circleMarkerTemplatePropertyName;
			case MarkerType.Triangle: return XamDataChart.triangleMarkerTemplatePropertyName;
			case MarkerType.Pyramid: return XamDataChart.pyramidMarkerTemplatePropertyName;
			case MarkerType.Square: return XamDataChart.squareMarkerTemplatePropertyName;
			case MarkerType.Diamond: return XamDataChart.diamondMarkerTemplatePropertyName;
			case MarkerType.Pentagon: return XamDataChart.pentagonMarkerTemplatePropertyName;
			case MarkerType.Hexagon: return XamDataChart.hexagonMarkerTemplatePropertyName;
			case MarkerType.Tetragram: return XamDataChart.tetragramMarkerTemplatePropertyName;
			case MarkerType.Pentagram: return XamDataChart.pentagramMarkerTemplatePropertyName;
			case MarkerType.Hexagram: return XamDataChart.hexagramMarkerTemplatePropertyName;
			default:

			case MarkerType.Unset:

			case MarkerType.None: return null;
		}

	}
	static resolveMarkerType(series: Series, seriesMarkerType: MarkerType): MarkerType {
		let markerType: MarkerType = series.seriesViewer != null ? seriesMarkerType : MarkerType.None;
		if (markerType == MarkerType.Automatic) {
			let markerTypes: MarkerType[] = <MarkerType[]>[ MarkerType.Circle, MarkerType.Triangle, MarkerType.Pentagon, MarkerType.Tetragram, MarkerType.Diamond, MarkerType.Square, MarkerType.Hexagon, MarkerType.Pentagram, MarkerType.Pyramid, MarkerType.Hexagram ];
			markerType = series.index >= 0 ? markerTypes[series.index % markerTypes.length] : MarkerType.None;
		}
		return markerType;
	}
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.index < 0) {
			return;
		}
		if (this.markerView.hasCustomMarkerTemplate()) {
			this.markerView.clearActualMarkerTemplate();
			this.markerView.bindActualToCustomMarkerTemplate();
		} else {
			let markerType: MarkerType = MarkerSeries.resolveMarkerType(this, this.markerType);
			let markerTemplatePropertyName: string = MarkerSeries.getMarkerTemplatePropertyName(markerType);
			if (markerTemplatePropertyName == null) {
				this.actualMarkerTemplate = MarkerSeries.nullMarkerTemplate;
			} else {
				this.markerView.bindActualToMarkerTemplate(markerTemplatePropertyName);
			}
		}
		if (this.markerBrush != null && this.markerType != MarkerType.Hidden) {
			this.markerView.clearActualMarkerBrush();
			this.markerView.bindActualToMarkerBrush();
		} else {
			if (this.markerType == MarkerType.Hidden) {
				this.actualMarkerBrush = this.view.getTransparentBrush();
			} else {
				this.actualMarkerBrush = this.seriesViewer == null ? null : this.seriesViewer.getMarkerBrushByIndex(this.index);
			}
		}
		if (this.markerOutline != null) {
			this.markerView.clearActualMarkerOutline();
			this.markerView.bindActualToMarkerOutline();
		} else {
			if (this.markerType == MarkerType.Hidden) {
				this.actualMarkerOutline = this.view.getTransparentBrush();
			} else {
				this.actualMarkerOutline = this.seriesViewer == null ? null : this.seriesViewer.getMarkerOutlineByIndex(this.index);
			}
		}
	}
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		this.seriesVisualDataManager.exportMarkerVisualData(this, svd);
	}
	protected testMarkersOver(position: Point, isFinger: boolean): boolean {
		if (this.hasMarkers && this.shouldDisplayMarkers()) {
			let box = this.getSeriesValueMarkerBoundingBoxFromSeriesPixel(position);
			if (box.isEmpty) {
				return false;
			}
			let inflated = RectUtil.inflate(box, this.getHitTestAllowance(isFinger));
			if (inflated.containsPoint(position)) {
				return true;
			}
		}
		return false;
	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		let marker = this.markerView.getHitMarker(position);
		let ret: DataContext = null;
		if (marker != null) {
			ret = <DataContext>marker.content;
		}
		return ret;
	}
	static readonly markerThicknessDefault: number = 2;
}

/**
 * @hidden 
 */
export class SyncLink extends FrameworkElement implements INotifyPropertyChanged, IFastItemsSourceProvider {
	static $t: Type = markType(SyncLink, 'SyncLink', (<any>FrameworkElement).$type, [INotifyPropertyChanged_$type, IFastItemsSourceProvider_$type]);
	constructor() {
		super();
		this.propertyUpdated = delegateCombine(this.propertyUpdated, (o: any, e: PropertyUpdatedEventArgs) => this.propertyUpdatedOverride(o, e.propertyName, e.oldValue, e.newValue));
		this.chartsInternal = new ChartCollection();
		let $t = this.chartsInternal;
		$t.collectionChanged = delegateCombine($t.collectionChanged, runOn(this, this.charts_CollectionChanged));
		this.defaultWindowRect = new Rect(0, 0, 0, 1, 1);
	}
	private _syncChannel: string = null;
	get syncChannel(): string {
		return this._syncChannel;
	}
	set syncChannel(value: string) {
		this._syncChannel = value;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
	}
	releaseFastItemsSource(itemsSource: IEnumerable): IFastItemsSource {
		if (itemsSource != null) {
			let itemsSourceReference: FastItemsSourceReference = null;
			if (((() => { let $ret = this.fastItemsSources.tryGetValue(itemsSource, itemsSourceReference); itemsSourceReference = $ret.p1; return $ret.ret; })())) {
				--itemsSourceReference.references;
				if (itemsSourceReference.references == 0) {
					this.fastItemsSources.removeItem(itemsSource);
				}
			}
		}
		return null;
	}
	private static _fastItemsSourceFactory: (arg1: IEnumerable) => IFastItemsSource = null;
	static get fastItemsSourceFactory(): (arg1: IEnumerable) => IFastItemsSource {
		return SyncLink._fastItemsSourceFactory;
	}
	static set fastItemsSourceFactory(value: (arg1: IEnumerable) => IFastItemsSource) {
		SyncLink._fastItemsSourceFactory = value;
	}
	private static createDefaultFastItemsSource(data: IEnumerable): IFastItemsSource {
		return ((() => {
			let $ret = new FastItemsSource();
			$ret.itemsSource = data;
			return $ret;
		})());
	}
	getFastItemsSource(itemsSource: IEnumerable): IFastItemsSource {
		if (SyncLink.fastItemsSourceFactory == null) {
			SyncLink.fastItemsSourceFactory = SyncLink.createDefaultFastItemsSource;
		}
		let fastItemsSource: IFastItemsSource = null;
		if (itemsSource != null) {
			let itemsSourceReference: FastItemsSourceReference = null;
			if (!((() => { let $ret = this.fastItemsSources.tryGetValue(itemsSource, itemsSourceReference); itemsSourceReference = $ret.p1; return $ret.ret; })())) {
				fastItemsSource = SyncLink.fastItemsSourceFactory(itemsSource);
				itemsSourceReference = new FastItemsSourceReference(fastItemsSource);
				this.fastItemsSources.addItem(itemsSource, itemsSourceReference);
			}
			itemsSourceReference.references++;
			fastItemsSource = itemsSourceReference.fastItemsSource;
		}
		return fastItemsSource;
	}
	peekItemsSource(itemsSource: IEnumerable): IFastItemsSource {
		let fastItemsSource: IFastItemsSource = null;
		if (itemsSource != null) {
			let itemsSourceReference: FastItemsSourceReference = null;
			if (!((() => { let $ret = this.fastItemsSources.tryGetValue(itemsSource, itemsSourceReference); itemsSourceReference = $ret.p1; return $ret.ret; })())) {
				return null;
			}
			fastItemsSource = itemsSourceReference.fastItemsSource;
		}
		return fastItemsSource;
	}
	private fastItemsSources: Dictionary$2<IEnumerable, FastItemsSourceReference> = new Dictionary$2<IEnumerable, FastItemsSourceReference>(IEnumerable_$type, (<any>FastItemsSourceReference).$type, 0);
	private _defaultWindowRect: Rect = null;
	get defaultWindowRect(): Rect {
		return this._defaultWindowRect;
	}
	set defaultWindowRect(value: Rect) {
		this._defaultWindowRect = value;
	}
	private synchroniseRect(sender: SeriesViewer, chart: SeriesViewer, rect: Rect): Rect {
		return this.synchroniseRect1(sender, chart, rect, false);
	}
	private synchroniseRect1(sender: SeriesViewer, chart: SeriesViewer, rect: Rect, force: boolean): Rect {
		if (!rect.isEmpty) {
			rect = new Rect(0, rect.left, rect.top, rect.width, rect.height);
			let minWidth: number = sender.windowRectMinWidth;
			if (chart == sender) {
				if (!force) {
					if (!chart.isZoomingHorizontallyEnabled()) {
						rect.x = chart.windowRect.x;
						rect.width = chart.windowRect.width;
					}
					if (!chart.isZoomingVerticallyEnabled()) {
						rect.y = chart.windowRect.y;
						rect.height = chart.windowRect.height;
					}
				}
			} else {
				let settings: SyncSettings = SyncManager.getSyncSettings(chart);
				if (settings == null || !settings.synchronizeHorizontally) {
					rect.x = chart.windowRect.x;
					rect.width = chart.windowRect.width;
				}
				if (settings == null || !settings.synchronizeVertically) {
					rect.y = chart.windowRect.y;
					rect.height = chart.windowRect.height;
				}
			}
			let cx: number = 0.5 * (rect.left + rect.right);
			let cy: number = 0.5 * (rect.top + rect.bottom);
			let originalWidth: number = rect.width;
			let originalHeight: number = rect.height;
			let width: number = MathUtil.clamp(rect.width, minWidth, 1);
			let height: number = MathUtil.clamp(rect.height, minWidth, 1);
			if (sender.useFixedAspectZoom() && !sender.viewportRect.isEmpty) {
				let viewport: Rect = sender.viewportRect;
				let matchAspect: number = viewport.width / viewport.height;
				let projectedWidth: number = width * viewport.width;
				let projectedHeight: number = height * viewport.height;
				let projectedAspect: number = projectedWidth / projectedHeight;
				if (projectedAspect != matchAspect) {
					if (projectedHeight * matchAspect > projectedWidth) {
						projectedWidth = projectedHeight * matchAspect;
						width = projectedWidth / viewport.width;
					} else {
						projectedHeight = projectedWidth / matchAspect;
						height = projectedHeight / viewport.height;
					}
				}
			} else if (sender.effectiveIsSquare()) {
				let widthChanging: boolean = false;
				let heightChanging: boolean = false;
				if (Math.abs(width - sender.actualWindowRect.width) > minWidth) {
					widthChanging = true;
				}
				if (Math.abs(height - sender.actualWindowRect.height) > minWidth) {
					heightChanging = true;
				}
				let $ret = sender.matchRatio(width, height, widthChanging, heightChanging);
				width = $ret.p0;
				height = $ret.p1;
				width = MathUtil.clamp(width, minWidth, 1);
				height = MathUtil.clamp(height, minWidth, 1);
			}
			let widthChanged: boolean = width != originalWidth;
			let heightChanged: boolean = height != originalHeight;
			let left: number = widthChanged ? cx - 0.5 * width : rect.left;
			let top: number = heightChanged ? cy - 0.5 * height : rect.top;
			let right: number = widthChanged ? cx + 0.5 * width : rect.right;
			let bottom: number = heightChanged ? cy + 0.5 * height : rect.bottom;
			if (left < 0) {
				left = 0;
				right = left + width;
			}
			if (right > 1) {
				right = 1;
				left = right - width;
			}
			if (top < 0) {
				top = 0;
				bottom = top + height;
			}
			if (bottom > 1) {
				bottom = 1;
				top = bottom - height;
			}
			rect = new Rect(0, left, top, right - left, bottom - top);
		}
		return rect;
	}
	get charts(): IList$1<SeriesViewer> {
		return this.chartsInternal;
	}
	private _chartsInternal: ChartCollection = null;
	get chartsInternal(): ChartCollection {
		return this._chartsInternal;
	}
	set chartsInternal(value: ChartCollection) {
		this._chartsInternal = value;
	}
	private charts_CollectionChanged(sender: any, e: NotifyCollectionChangedEventArgs): void {
		if (e.newItems != null) {
			for (let chart of fromEn<SeriesViewer>(e.newItems)) {
				if (chart.windowRect.isEmpty) {
					chart.windowRect = this.synchroniseRect(null, chart, this.defaultWindowRect);
				}
			}
		}
	}
	crosshairNotify(sender: SeriesViewer, crossHairPoint: Point): void {
		for (let chart of fromEnum<SeriesViewer>(this.charts)) {
			if (chart == sender) {
				chart.crosshairPoint = <Point>{ $type: Point_$type, x: crossHairPoint.x, y: crossHairPoint.y };
			} else {
				let pt: Point = <Point>{ $type: Point_$type, x: crossHairPoint.x, y: crossHairPoint.y };
				let settings: SyncSettings = SyncManager.getSyncSettings(chart);
				if (settings == null || !settings.synchronizeHorizontally) {
					pt.x = NaN;
				}
				if (settings == null || !settings.synchronizeVertically) {
					pt.y = NaN;
				}
				chart.crosshairPoint = pt;
			}
		}
	}
	previewNotify(sender: SeriesViewer, previewRect: Rect): void {
		for (let chart of fromEnum<SeriesViewer>(this.charts)) {
			chart.previewRect = this.synchroniseRect(sender, chart, previewRect);
		}
	}
	windowNotify(sender: SeriesViewer, windowRect: Rect): void {
		this.windowNotify1(sender, windowRect, false);
	}
	windowNotify1(sender: SeriesViewer, windowRect: Rect, force: boolean): void {
		let invalid: boolean = windowRect.isEmpty || isNaN_(windowRect.x) || isNaN_(windowRect.y) || isNaN_(windowRect.width) || isNaN_(windowRect.height);
		Debug.assert1(!invalid, "SyncLink attempted to apply an invalid WindowRect");
		if (!invalid && !sender.dontNotify) {
			for (let chart of fromEnum<SeriesViewer>(this.charts)) {
				chart.dontNotify = true;
				chart.windowRect = this.synchroniseRect1(sender, chart, windowRect, force);
				chart.dontNotify = false;
			}
		}
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	propertyUpdated: (sender: any, e: PropertyUpdatedEventArgs) => void = null;
	protected raisePropertyChanged(name: string, oldValue: any, newValue: any): void {
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(name));
		}
		if (this.propertyUpdated != null) {
			this.propertyUpdated(this, new PropertyUpdatedEventArgs(name, oldValue, newValue));
		}
	}
}

/**
 * @hidden 
 */
export class SyncLinkManager extends Base {
	static $t: Type = markType(SyncLinkManager, 'SyncLinkManager');
	private static _instance: SyncLinkManager = null;
	static instance(): SyncLinkManager {
		if (SyncLinkManager._instance == null) {
			SyncLinkManager._instance = new SyncLinkManager();
		}
		return SyncLinkManager._instance;
	}
	private _links: Dictionary$2<string, SyncLink> = null;
	get linkCount(): number {
		return this._links.count;
	}
	constructor() {
		super();
		this._links = new Dictionary$2<string, SyncLink>(String_$type, (<any>SyncLink).$type, 0);
	}
	getLink(name: string): SyncLink {
		let link: SyncLink;
		if (((() => { let $ret = this._links.tryGetValue(name, link); link = $ret.p1; return $ret.ret; })())) {
			return link;
		}
		link = new SyncLink();
		link.syncChannel = name;
		this._links.addItem(name, link);
		return link;
	}
	releaseLink(link: SyncLink): void {
		if (link.charts.count == 0 && link.syncChannel != null && this._links.containsKey(link.syncChannel)) {
			this._links.removeItem(link.syncChannel);
		}
	}
}

/**
 * @hidden 
 */
export class SyncManager extends Base {
	static $t: Type = markType(SyncManager, 'SyncManager');
	static suspendSyncChannel(chart: SeriesViewer): void {
		let settings = SyncManager.getSyncSettings(chart);
		if (settings == null) {
			return;
		}
		if (!chart.isSyncReady) {
			return;
		}
		if (chart.syncChannel != settings.syncChannel) {
			return;
		}
		SyncManager.changeSyncChannel(chart, chart.syncChannel, null);
	}
	static ensureSyncChannel(chart: SeriesViewer): void {
		let settings = SyncManager.getSyncSettings(chart);
		if (settings == null) {
			return;
		}
		if (chart.isSyncReady && chart.syncChannel == settings.syncChannel) {
			return;
		}
		let lastChannel: string = null;
		if (chart.isSyncReady) {
			lastChannel = chart.syncChannel;
		}
		SyncManager.changeSyncChannel(chart, lastChannel, settings.syncChannel);
	}
	static changeSyncChannel(chart: SeriesViewer, oldSyncChannel: string, newSyncChannel: string): void {
		if (chart != null) {
			if (stringIsNullOrEmpty(newSyncChannel)) {
				let oldLink: SyncLink = chart.actualSyncLink;
				chart.actualSyncLink = null;
				chart.actualSyncLink = new SyncLink();
				if (oldLink != null) {
					SyncLinkManager.instance().releaseLink(oldLink);
				}
				chart.syncChannel = null;
			} else {
				if (!stringIsNullOrEmpty(oldSyncChannel)) {
					let oldLink1: SyncLink = chart.actualSyncLink;
					chart.actualSyncLink = null;
					if (oldLink1 != null) {
						SyncLinkManager.instance().releaseLink(oldLink1);
					}
				}
				chart.actualSyncLink = SyncLinkManager.instance().getLink(newSyncChannel);
				chart.syncChannel = newSyncChannel;
			}
		}
	}
	static setSyncSettings(target: DependencyObject, syncSettings: SyncSettings): void {
		(<SeriesViewer>target).syncSettings = syncSettings;
	}
	static getSyncSettings(target: DependencyObject): SyncSettings {
		return (<SeriesViewer>target).syncSettings;
	}
}

/**
 * @hidden 
 */
export class ChartCollection extends ObservableCollection$1<SeriesViewer> {
	static $t: Type = markType(ChartCollection, 'ChartCollection', (<any>ObservableCollection$1).$type.specialize((<any>SeriesViewer).$type));
	constructor() {
		super((<any>SeriesViewer).$type, 0);
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
export class SeriesCollection extends ObservableCollection$1<Series> {
	static $t: Type = markType(SeriesCollection, 'SeriesCollection', (<any>ObservableCollection$1).$type.specialize((<any>Series).$type));
	constructor() {
		super((<any>Series).$type, 0);
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
export class ChartCursorEventArgs extends EventArgs {
	static $t: Type = markType(ChartCursorEventArgs, 'ChartCursorEventArgs', (<any>EventArgs).$type);
	constructor(chart: SeriesViewer, series: Series, item: any) {
		super();
		this.seriesViewer = chart;
		this.series = series;
		this.item = item;
	}
	toString(): string {
		return this.seriesViewer.name + ", " + this.series.name + ", " + (this.item != null ? this.item.toString() : "");
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private _seriesViewer: SeriesViewer = null;
	get seriesViewer(): SeriesViewer {
		return this._seriesViewer;
	}
	set seriesViewer(value: SeriesViewer) {
		this._seriesViewer = value;
	}
	get chart(): XamDataChart {
		return typeCast<XamDataChart>((<any>XamDataChart).$type, this.seriesViewer);
	}
}

/**
 * @hidden 
 */
export class DataChartMouseButtonEventArgs extends EventArgs {
	static $t: Type = markType(DataChartMouseButtonEventArgs, 'DataChartMouseButtonEventArgs', (<any>EventArgs).$type);
	constructor(chart: SeriesViewer, series: Series, item: any, mouseButtonEventArgs: MouseButtonEventArgs) {
		super();
		this.chart = chart;
		this.series = series;
		this.item = item;
		this.originalEvent = mouseButtonEventArgs;
	}
	toString(): string {
		return this.chart.name + ", " + this.series.name + ", " + (this.item != null ? this.item.toString() : "") + ", " + this.getPosition(null).toString();
	}
	private _originalEvent: MouseButtonEventArgs = null;
	protected get originalEvent(): MouseButtonEventArgs {
		return this._originalEvent;
	}
	protected set originalEvent(value: MouseButtonEventArgs) {
		this._originalEvent = value;
	}
	get handled(): boolean {
		return this.originalEvent.handled;
	}
	set handled(value: boolean) {
		this.originalEvent.handled = value;
	}
	getPosition(relativeTo: UIElement): Point {
		return this.originalEvent.getPosition(relativeTo);
	}
	get originalSource(): any {
		return this.originalEvent.originalSource;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private _chart: SeriesViewer = null;
	get chart(): SeriesViewer {
		return this._chart;
	}
	set chart(value: SeriesViewer) {
		this._chart = value;
	}
}

/**
 * @hidden 
 */
export class ChartMouseEventArgs extends EventArgs {
	static $t: Type = markType(ChartMouseEventArgs, 'ChartMouseEventArgs', (<any>EventArgs).$type);
	constructor(chart: SeriesViewer, series: Series, item: any, originalEvent: MouseEventArgs) {
		super();
		this.chart = chart;
		this.series = series;
		this.item = item;
		this.originalEvent = originalEvent;
	}
	toString(): string {
		return this.chart.name + ", " + this.series.name + ", " + (this.item != null ? this.item.toString() : "") + ", " + this.getPosition(null).toString();
	}
	private _originalEvent: MouseEventArgs = null;
	private get originalEvent(): MouseEventArgs {
		return this._originalEvent;
	}
	private set originalEvent(value: MouseEventArgs) {
		this._originalEvent = value;
	}
	getPosition(relativeTo: UIElement): Point {
		return this.originalEvent.getPosition(relativeTo);
	}
	get originalSource(): any {
		return this.originalEvent.originalSource;
	}
	private _item: any = null;
	get item(): any {
		return this._item;
	}
	set item(value: any) {
		this._item = value;
	}
	private _series: Series = null;
	get series(): Series {
		return this._series;
	}
	set series(value: Series) {
		this._series = value;
	}
	private _chart: SeriesViewer = null;
	get chart(): SeriesViewer {
		return this._chart;
	}
	set chart(value: SeriesViewer) {
		this._chart = value;
	}
}

/**
 * @hidden 
 */
export class AxisComponentsForView extends Base {
	static $t: Type = markType(AxisComponentsForView, 'AxisComponentsForView');
	private _labelPanel: AxisLabelPanelBase = null;
	get labelPanel(): AxisLabelPanelBase {
		return this._labelPanel;
	}
	set labelPanel(value: AxisLabelPanelBase) {
		this._labelPanel = value;
	}
}

/**
 * @hidden 
 */
export class AxisLabelPanelBaseView extends Base {
	static $t: Type = markType(AxisLabelPanelBaseView, 'AxisLabelPanelBaseView');
	private _model: AxisLabelPanelBase = null;
	protected get model(): AxisLabelPanelBase {
		return this._model;
	}
	protected set model(value: AxisLabelPanelBase) {
		this._model = value;
	}
	private _ticks: Path = null;
	get ticks(): Path {
		return this._ticks;
	}
	set ticks(value: Path) {
		this._ticks = value;
	}
	constructor(model: AxisLabelPanelBase) {
		super();
		this.model = model;
	}
	arrangeTextToBounds(frameworkElement: FrameworkElement, rect: Rect, leftMargin: number, topMargin: number, rightMargin: number, bottomMargin: number): void {
		let tb = typeCast<FrameworkElement>((<any>FrameworkElement).$type, frameworkElement);
		if (tb != null) {
			tb._visibility = Visibility.Visible;
			if (rect.width == 0 && rect.height == 0) {
				tb._visibility = Visibility.Collapsed;
			}
			let newHeight = rect.height - (topMargin + bottomMargin);
			let newWidth = rect.width - (leftMargin + rightMargin);
			tb.canvasLeft = rect.left + leftMargin;
			tb.canvasTop = rect.top + topMargin;
			if (newWidth < 0) {
				newWidth = 0;
			}
			if (newHeight < 0) {
				newHeight = 0;
			}
			tb.actualHeight = newHeight;
			tb.actualWidth = newWidth;
			if (tb.renderTransform != null) {
				let tg: TransformGroup = <TransformGroup>tb.renderTransform;
				let rot = <RotateTransform>tg.children._inner[0];
				rot.centerX = rot.centerX + tb.canvasLeft;
				rot.centerY = rot.centerY + tb.canvasTop;
			}
		}
	}
	arrangeBackingToText(backing: Rectangle, textBlock: TextBlock, position: LabelPosition, rect: Rect, leftMargin: number, topMargin: number, rightMargin: number, bottomMargin: number): void {
		let maxMargin = Math.max(leftMargin, Math.max(topMargin, Math.max(rightMargin, bottomMargin)));
		let autoPad: Thickness = new Thickness(0, maxMargin);
		if (this.model.useRotation) {
			autoPad = new Thickness(0, Math.sqrt((maxMargin * maxMargin) / 2));
		}
		let pad = position.overlayPadding;
		if (isNaN_(pad.left) || isNaN_(pad.top) || isNaN_(pad.right) || isNaN_(pad.bottom)) {
			pad = autoPad;
		}
		if (pad.left > autoPad.left || pad.top > autoPad.top || pad.right > autoPad.right || pad.bottom > autoPad.bottom) {
			pad = autoPad;
		}
		let act = new Rect(0, rect.left - pad.left, rect.top - pad.top, rect.width + pad.left + pad.right, rect.height + pad.top + pad.bottom);
		let trans = backing.renderTransform;
		backing.renderTransform = null;
		this.arrangeTextToBounds(backing, act, leftMargin, topMargin, rightMargin, bottomMargin);
		backing.renderTransform = trans;
		backing.width = backing.actualWidth;
		backing.height = backing.actualHeight;
	}
	clearTransforms(frameworkElement: FrameworkElement): void {
		let fe: FrameworkElement = <FrameworkElement>frameworkElement;
		fe.renderTransform = null;
	}
	handleMeasureLabel(element: any): void {
	}
	handleMeasureLabel1(element: any, availableSize: Size): void {
	}
	handleSetLabelRotationTransform(label: FrameworkElement, effAngle: number): void {
		let fe: FrameworkElement = typeCast<FrameworkElement>((<any>FrameworkElement).$type, label);
		let centerX: number = 0;
		let centerY: number = 0;
		let group = new TransformGroup();
		let transform = ((() => {
			let $ret = new RotateTransform();
			$ret.angle = effAngle;
			$ret.centerX = centerX;
			$ret.centerY = centerY;
			return $ret;
		})());
		group.children.add(transform);
		fe.renderTransform = group;
	}
	setBackingRotationTransform(backing: Rectangle, textBlock: TextBlock, position: LabelPosition, rect: Rect, leftMargin: number, topMargin: number, rightMargin: number, bottomMargin: number, angle: number): void {
		let maxMargin = Math.max(leftMargin, Math.max(topMargin, Math.max(rightMargin, bottomMargin)));
		let autoPad: Thickness = new Thickness(0, maxMargin);
		if (this.model.useRotation) {
			autoPad = new Thickness(0, Math.sqrt((maxMargin * maxMargin) / 2));
		}
		let pad = position.overlayPadding;
		if (isNaN_(pad.left) || isNaN_(pad.top) || isNaN_(pad.right) || isNaN_(pad.bottom)) {
			pad = autoPad;
		}
		if (pad.left > autoPad.left || pad.top > autoPad.top || pad.right > autoPad.right || pad.bottom > autoPad.bottom) {
			pad = autoPad;
		}
		let tt = textBlock.renderTransform;
		let tg = new TransformGroup();
		let xPad = backing.canvasLeft + pad.left;
		let yPad = backing.canvasTop + pad.top;
		tg.children.add(tt);
		backing.renderTransform = tg;
	}
	trimTextBlock(textblock: TextBlock, availableWidth: number, labelLeftMargin: number, labelRightMargin: number): string {
		let length: number = textblock.text.length;
		let text: string = textblock.text;
		let originalText: string = textblock.text;
		while ((this.getDesiredWidth(textblock) + labelLeftMargin + labelRightMargin) > availableWidth && length > 0) {
			length--;
			text = text.substr(0, length) + "\u2026";
			textblock.text = text;
		}
		textblock.text = originalText;
		return text;
	}
	determineLongestLabel(): void {
		if (this.context == null) {
			return;
		}
		let labels = this.getLabels();
		for (let child of fromEnum<any>(labels)) {
			let tb = typeCast<FrameworkElement>((<any>FrameworkElement).$type, child);
			if (tb != null) {
				this.model.onProcessTextBlock(tb);
			}
			this.model.considerForLongestTextBlock(child);
		}
	}
	getLabels(): IEnumerable$1<any> {
		let textBlocks = this.model.getTextBlocks();
		let children = this.model.getLabels();
		if (!this.model.axis.usingTemplate) {
			return textBlocks;
		} else {
			return children;
		}
	}
	getDesiredHeight(element: any): number {
		return this._fontHeight;
	}
	getHeightBounds(element: any): number {
		return this.getDesiredHeight(element) + this.getLabelTopMargin() + this.getLabelBottomMargin();
	}
	onInit(): void {
		this.ticks = ((() => {
			let $ret = new Path();
			$ret.data = new GeometryGroup();
			$ret.isHitTestVisible = false;
			return $ret;
		})());
	}
	getDesiredWidth(element: any): number {
		let tb = <TextBlock>element;
		if (tb != null && tb.text != null) {
			return this.context.measureTextBlockWidth(tb);
		}
		return 0;
	}
	getWidthBounds(element: any): number {
		let tb = <TextBlock>element;
		if (tb != null && tb.text != null) {
			return this.getDesiredWidth(element) + this.getLabelLeftMargin() + this.getLabelRightMargin();
		}
		return 0;
	}
	bindExtentToSettings(): void {
		this.model.extent = this.model.axis.getUserExtent();
	}
	measure(): void {
		this.ensureContextFont();
		this.model.measureLabels(new Size(1, Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY));
	}
	private _context: RenderingContext = null;
	protected get context(): RenderingContext {
		return this._context;
	}
	protected set context(value: RenderingContext) {
		this._context = value;
	}
	getRenderingContext(): RenderingContext {
		return this.context;
	}
	onContextProvided(context: RenderingContext): void {
		this.context = context;
	}
	arrange(): void {
		if (this.model.labelViewport.isEmpty) {
			return;
		}
		let oldExtent: number = this.model.actualExtent;
		this.model.arrangeLabels(new Size(1, this.model.labelViewport.width, this.model.labelViewport.height));
		if (this.model.actualExtent != oldExtent) {
			this.model.axis.chart.invalidatePanels();
			this.onExtentChangedAfterArrange();
		}
	}
	protected onExtentChangedAfterArrange(): void {
	}
	private _renderedRect: Rect = Rect.empty;
	protected renderTextBlock(tb: TextBlock): void {
		this.context.renderTextBlock(tb);
	}
	render(): void {
		if (this.context == null) {
			return;
		}
		if (this.context.shouldRender) {
			if (this.model.axis.seriesViewer != null && this.model.axis.seriesViewer.actualPixelScalingRatio != 1) {
				this.context.save();
				this.context.scale(this.model.axis.seriesViewer.actualPixelScalingRatio, this.model.axis.seriesViewer.actualPixelScalingRatio);
			}
			this.ensureContextFont();
			this._renderedRect = this.model.labelViewport;
			let labelBrush: Brush = this.model.axis.chart.getFontBrush();
			if (this.model.labelSettings != null && this.model.labelSettings.textColor != null) {
				labelBrush = this.model.labelSettings.textColor;
			}
			if (this.model.renderTransform != null) {
				this.context.save();
				this.context.applyTransform(this.model.renderTransform);
			}
			let hasOtherLayers: boolean = false;
			for (let child of fromEnum<any>(this.getLabels())) {
				let tb = typeCast<TextBlock>((<any>TextBlock).$type, child);
				if (tb != null) {
					if (tb.canvasZIndex != 0) {
						hasOtherLayers = true;
						continue;
					}
					tb.fill = labelBrush;
					if (tb.renderTransform != null) {
						this.context.save();
						this.context.applyTransform(tb.renderTransform);
					}
					this.renderTextBlock(tb);
					if (tb.renderTransform != null) {
						this.context.restore();
					}
				}
			}
			if (hasOtherLayers) {
				for (let child1 of fromEnum<UIElement>(this.model.children)) {
					let r = typeCast<Rectangle>((<any>Rectangle).$type, child1);
					if (r != null) {
						if (r.canvasZIndex == 0) {
							continue;
						}
						if (r.renderTransform != null) {
							this.context.save();
							this.context.applyTransform(r.renderTransform);
						}
						this.context.renderRectangle(r);
						if (r.renderTransform != null) {
							this.context.restore();
						}
					}
					let t = typeCast<TextBlock>((<any>TextBlock).$type, child1);
					if (t != null) {
						if (t.canvasZIndex == 0) {
							continue;
						}
						if (t.renderTransform != null) {
							this.context.save();
							this.context.applyTransform(t.renderTransform);
						}
						if (t.fill == null) {
							t.fill = labelBrush;
						}
						this.context.renderTextBlock(t);
						if (t.renderTransform != null) {
							this.context.restore();
						}
					}
				}
			}
			if (this.model.renderTransform != null) {
				this.context.restore();
			}
			this.renderTicks();
			labelBrush = this.getAxisTitleColor();
			this.context.setFontInfo(this.getAxisTitleFont());
			let axisTitleTb = this.model.axis.titleTextBlock;
			if (axisTitleTb != null) {
				axisTitleTb.fill = labelBrush;
				if (axisTitleTb.renderTransform != null) {
					this.context.save();
					this.context.applyTransform(axisTitleTb.renderTransform);
				}
				this.context.renderTextBlock(axisTitleTb);
				if (axisTitleTb.renderTransform != null) {
					this.context.restore();
				}
			}
			if (this.model.axis.seriesViewer != null && this.model.axis.seriesViewer.actualPixelScalingRatio != 1) {
				this.context.restore();
			}
		}
	}
	getAxisTitleFont(): FontInfo {
		let font = this.model.axis.seriesViewer.getFontInfo();
		if (this.model.axis.titleSettings != null && this.model.axis.titleSettings.textStyle != null) {
			font = this.model.axis.titleSettings.getFontInfo(this.model.axis.seriesViewer.view.viewManager.container);
		} else {
			let defFont = this.model.axis.seriesViewer.getDefaultHorizontalAxisFont();
			if (defFont != null) {
				font = defFont;
			}
		}
		return font;
	}
	getAxisTitleColor(): Brush {
		let brush = this.model.axis.chart.getFontBrush();
		if (this.model.axis.titleSettings != null && this.model.axis.titleSettings.textColor != null) {
			brush = this.model.axis.titleSettings.textColor;
		} else {
			let defBrush = this.model.axis.seriesViewer.getDefaultHorizontalAxisColor();
			if (defBrush != null) {
				brush = defBrush;
			}
		}
		return brush;
	}
	private _previousFont: FontInfo = null;
	ensureContextFont(): void {
		if (this.context == null) {
			return;
		}
		let font = this.model.axis.seriesViewer.getFontInfo();
		if (this.model.labelSettings != null && this.model.labelSettings.textStyle != null) {
			font = this.model.labelSettings.getFontInfo(this.model.axis.seriesViewer.view.viewManager.container);
		}
		if (this._previousFont != font) {
			this._previousFont = font;
			this.updateCurrentFontHeight();
		}
		this.context.setFontInfo(font);
	}
	private _fontHeight: number = 0;
	private updateCurrentFontHeight(): void {
		if (this.model.axis != null && this.model.axis.seriesViewer != null) {
			if (this.model.labelSettings == null || this.model.labelSettings.textStyle == null) {
				this._fontHeight = this.model.axis.seriesViewer.view.fontHeight;
				return;
			}
			if (this._fontHeight == 0) {
				this._fontHeight = this.model.axis.seriesViewer.view.fontHeight;
			}
			let oldHeight = this._fontHeight;
			let font = this.model.axis.seriesViewer.getFontInfo();
			if (this.model.labelSettings != null && this.model.labelSettings.textStyle != null) {
				font = this.model.labelSettings.getFontInfo(this.model.axis.seriesViewer.view.viewManager.container);
			}
			let height = FontUtil.getCurrentFontHeight(this.model.axis.seriesViewer.view.viewManager.container, font);
			this._fontHeight = height;
			if (oldHeight != this._fontHeight) {
				this.model.axis.seriesViewer.invalidatePanels();
			}
		}
	}
	private _titleHeight: number = NaN;
	getAxisTitleDesiredHeight(): number {
		if (this.model.axis.title == null) {
			return 0;
		}
		if (this.model.axis.titleSettings != null && this.model.axis.titleSettings.visibility == Visibility.Collapsed) {
			return 0;
		}
		if (!isNaN_(this._titleHeight)) {
			return this._titleHeight;
		}
		let font = this.getAxisTitleFont();
		if (this.model.axis.seriesViewer == null) {
			return this._fontHeight;
		}
		this._titleHeight = FontUtil.getCurrentFontHeight(this.model.axis.seriesViewer.view.viewManager.container, font);
		return this._titleHeight;
	}
	getAxisTitleDesiredWidth(): number {
		if (this.model.axis.titleSettings != null && this.model.axis.titleSettings.visibility == Visibility.Collapsed) {
			return 0;
		}
		if (this.context == null) {
			return 0;
		}
		let tb = this.model.axis.titleTextBlock;
		if (tb != null && tb.text != null) {
			this.context.setFontInfo(this.getAxisTitleFont());
			let val = this.context.measureTextBlockWidth(tb);
			this.ensureContextFont();
			return val;
		}
		return 0;
	}
	protected renderTicks(): void {
		if (this.model.children.count == 0) {
			return;
		}
		if (this.model.axis.tickStroke == null) {
			this.ticks._stroke = this.model.axis.chart.getAxisLineBrush();
		} else {
			this.ticks._stroke = this.model.axis.tickStroke;
		}
		this.ticks.strokeThickness = this.model.axis.tickStrokeThickness;
		this.context.renderPath(this.ticks);
	}
	arrangeTicks(finalSize: Size): void {
	}
	protected getTitleMargin(): Thickness {
		return this.model.axis.seriesViewer.getDefaultHorizontalAxisTitleMargin();
	}
	getTitleTopMargin(): number {
		if (this.model.axis.titleSettings != null && !isNaN_(this.model.axis.titleSettings.topMargin)) {
			return Math.max(0, this.model.axis.titleSettings.topMargin);
		} else {
			return this.getTitleMargin().top;
		}
	}
	getTitleBottomMargin(): number {
		if (this.model.axis.titleSettings != null && !isNaN_(this.model.axis.titleSettings.bottomMargin)) {
			return Math.max(0, this.model.axis.titleSettings.bottomMargin);
		} else {
			return this.getTitleMargin().bottom;
		}
	}
	getTitleLeftMargin(): number {
		if (this.model.axis.titleSettings != null && !isNaN_(this.model.axis.titleSettings.leftMargin)) {
			return Math.max(0, this.model.axis.titleSettings.leftMargin);
		} else {
			return this.getTitleMargin().left;
		}
	}
	getTitleRightMargin(): number {
		if (this.model.axis.titleSettings != null && !isNaN_(this.model.axis.titleSettings.rightMargin)) {
			return Math.max(0, this.model.axis.titleSettings.rightMargin);
		} else {
			return this.getTitleMargin().right;
		}
	}
	getTicksGeometry(): GeometryCollection {
		return (<GeometryGroup>this.ticks.data).children;
	}
	getThicksRenderingInfo(): PathRenderingInfo {
		let ret = ((() => {
			let $ret = new PathRenderingInfo();
			$ret.stroke = this.model.axis.tickStroke;
			$ret.strokeThickness = this.model.axis.tickStrokeThickness;
			return $ret;
		})());
		if (this.model.axis != null && typeCast<XamDataChart>((<any>XamDataChart).$type, this.model.axis.chart) !== null) {
			let c: XamDataChart = <XamDataChart>this.model.axis.chart;
			if (c.alignsGridLinesToPixels && c.state != InteractionState.DragPan && c.state != InteractionState.DragZoom) {
				ret.alignToPixels = true;
			}
		}
		return ret;
	}
	getLabelTopMargin(): number {
		if (this.model.labelSettings == null) {
			return 0;
		}
		return Math.max(0, this.model.labelSettings.topMargin);
	}
	getLabelLeftMargin(): number {
		if (this.model.labelSettings == null) {
			return 0;
		}
		return Math.max(0, this.model.labelSettings.leftMargin);
	}
	getLabelRightMargin(): number {
		if (this.model.labelSettings == null) {
			return 0;
		}
		return Math.max(0, this.model.labelSettings.rightMargin);
	}
	getLabelBottomMargin(): number {
		if (this.model.labelSettings == null) {
			return 0;
		}
		return Math.max(0, this.model.labelSettings.bottomMargin);
	}
}

/**
 * @hidden 
 */
export class AxisView extends Base implements ISchedulableRender {
	static $t: Type = markType(AxisView, 'AxisView', (<any>Base).$type, [ISchedulableRender_$type]);
	private _model: Axis = null;
	protected get model(): Axis {
		return this._model;
	}
	protected set model(value: Axis) {
		this._model = value;
	}
	constructor(model: Axis) {
		super();
		this.model = model;
		this._backgroundRect = new Rectangle();
	}
	onInit(): void {
		this.axisLines = ((() => {
			let $ret = new Path();
			$ret.data = new GeometryGroup();
			return $ret;
		})());
		this.strips = ((() => {
			let $ret = new Path();
			$ret.data = new GeometryGroup();
			$ret.isHitTestVisible = false;
			$ret.stroke = null;
			return $ret;
		})());
		this.majorLines = ((() => {
			let $ret = new Path();
			$ret.data = new GeometryGroup();
			$ret.isHitTestVisible = false;
			return $ret;
		})());
		this.minorLines = ((() => {
			let $ret = new Path();
			$ret.data = new GeometryGroup();
			$ret.isHitTestVisible = false;
			return $ret;
		})());
		this.model.majorStrokeThickness = 1;
		this.model.strokeThickness = 1;
	}
	onLabelPanelStyleChanged(style: any): void {
	}
	private _axisLines: Path = null;
	get axisLines(): Path {
		return this._axisLines;
	}
	set axisLines(value: Path) {
		this._axisLines = value;
	}
	private _majorLines: Path = null;
	get majorLines(): Path {
		return this._majorLines;
	}
	set majorLines(value: Path) {
		this._majorLines = value;
	}
	private _strips: Path = null;
	get strips(): Path {
		return this._strips;
	}
	set strips(value: Path) {
		this._strips = value;
	}
	private _minorLines: Path = null;
	get minorLines(): Path {
		return this._minorLines;
	}
	set minorLines(value: Path) {
		this._minorLines = value;
	}
	textBlockCreate(): TextBlock {
		let textBlock: TextBlock = new TextBlock();
		return textBlock;
	}
	textBlockActivate(textBlock: TextBlock): void {
		textBlock._visibility = Visibility.Visible;
		textBlock.canvasZIndex = 0;
		if (textBlock.parent == null) {
			this.model.labelPanel.children.add(textBlock);
		}
	}
	textBlockDisactivate(textBlock: TextBlock): void {
		textBlock._visibility = Visibility.Collapsed;
	}
	textBlockDestroy(textBlock: TextBlock): void {
		if (this.model.labelPanel.children.contains(textBlock)) {
			this.model.labelPanel.children.remove(textBlock);
		}
	}
	annotationBackingCreate(): Rectangle {
		let backing: Rectangle = new Rectangle();
		return backing;
	}
	annotationBackingActivate(rectangle: Rectangle): void {
		if (rectangle.parent == null) {
			this.labelPanel.children.add(rectangle);
		}
		rectangle._visibility = Visibility.Visible;
	}
	annotationBackingDisactivate(rectangle: Rectangle): void {
		rectangle._visibility = Visibility.Collapsed;
	}
	annotationBackingDestroy(rectangle: Rectangle): void {
		if (this.model.labelPanel.children.contains(rectangle)) {
			this.model.labelPanel.children.remove(rectangle);
		}
	}
	onTemplateProvided(): void {
	}
	ready(): boolean {
		return true;
	}
	get index(): number {
		if (this.model.seriesViewer != null && this.model.seriesViewer.isMap) {
			return this.model.seriesViewer.series.count + 1;
		}
		let chart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.model.chart);
		let before: number = 0;
		if (chart == null) {
			return 0;
		}
		if (chart != null && chart.gridMode == GridMode.BeforeSeries) {
			let seriesIndex: number = 0;
			for (let i = 0; i < this.model.seriesViewer.series.count; i++) {
				if (this.model.seriesViewer.series._inner[i].isStacked) {
					seriesIndex += this.model.seriesViewer.series._inner[i].getSubSeriesCount();
				} else {
					seriesIndex++;
				}
			}
			before = seriesIndex;
		}
		return before + chart.axes.indexOf(this.model);
	}
	labelNeedRearrange(): void {
		this.labelPanel.measure();
		this.labelPanel.arrange();
	}
	ensureAutoExtent(): void {
		this.labelPanel.ensureExtentSet();
	}
	clearAllMarks(): void {
		if (this.labelPanel != null) {
			this.labelPanel.children.clear();
		}
		this.clearMarks((<GeometryGroup>this.axisLines.data).children);
		this.clearMarks((<GeometryGroup>this.strips.data).children);
		this.clearMarks((<GeometryGroup>this.majorLines.data).children);
		this.clearMarks((<GeometryGroup>this.minorLines.data).children);
		this.makeDirty();
	}
	updateLineVisibility(visible: Visibility): void {
		this.axisLines._visibility = visible;
		this.majorLines._visibility = visible;
		this.strips._visibility = visible;
		this.minorLines._visibility = visible;
	}
	resetLabelPanel(): void {
	}
	changeLabelSettings(_currentLabelSettings: AxisLabelSettings): void {
		this.model.mustInvalidateLabels = true;
		if (this.model.seriesViewer != null) {
			this.model.seriesViewer.invalidatePanels();
		}
		this.model.renderAxis();
	}
	private _axisComponentsFromView: AxisComponentsFromView = new AxisComponentsFromView();
	getAxisComponentsFromView(): AxisComponentsFromView {
		this._axisComponentsFromView.axisLines = this.axisLines;
		this._axisComponentsFromView.majorLines = this.majorLines;
		this._axisComponentsFromView.minorLines = this.minorLines;
		this._axisComponentsFromView.strips = this.strips;
		return this._axisComponentsFromView;
	}
	clearMarks(geometry: GeometryCollection): void {
		if (geometry != null) {
			geometry.clear();
		}
	}
	getAxisLinesGeometry(): GeometryCollection {
		return (<GeometryGroup>this.axisLines.data).children;
	}
	getAxisLinesPathInfo(): PathRenderingInfo {
		let ret = ((() => {
			let $ret = new PathRenderingInfo();
			$ret.stroke = this.model.stroke;
			$ret.strokeThickness = this.model.strokeThickness;
			$ret.dashArray = this.model.strokeDashArray;
			return $ret;
		})());
		if (typeCast<XamDataChart>((<any>XamDataChart).$type, this.model.chart) !== null) {
			let c: XamDataChart = <XamDataChart>this.model.chart;
			if (c.alignsGridLinesToPixels && c.state != InteractionState.DragPan && c.state != InteractionState.DragZoom) {
				ret.alignToPixels = true;
			}
		}
		return ret;
	}
	getStripsGeometry(): GeometryCollection {
		return (<GeometryGroup>this.strips.data).children;
	}
	getMajorLinesGeometry(): GeometryCollection {
		return (<GeometryGroup>this.majorLines.data).children;
	}
	getMajorLinesPathInfo(): PathRenderingInfo {
		let ret = ((() => {
			let $ret = new PathRenderingInfo();
			$ret.stroke = this.model.majorStroke;
			$ret.strokeThickness = this.model.majorStrokeThickness;
			$ret.dashArray = this.model.majorStrokeDashArray;
			return $ret;
		})());
		if (typeCast<XamDataChart>((<any>XamDataChart).$type, this.model.chart) !== null) {
			let c: XamDataChart = <XamDataChart>this.model.chart;
			if (c.alignsGridLinesToPixels && c.state != InteractionState.DragPan && c.state != InteractionState.DragZoom) {
				ret.alignToPixels = true;
			}
		}
		return ret;
	}
	getMinorLinesGeometry(): GeometryCollection {
		return (<GeometryGroup>this.minorLines.data).children;
	}
	getMinorLinesPathInfo(): PathRenderingInfo {
		let ret = ((() => {
			let $ret = new PathRenderingInfo();
			$ret.stroke = this.model.minorStroke;
			$ret.strokeThickness = this.model.minorStrokeThickness;
			$ret.dashArray = this.model.minorStrokeDashArray;
			return $ret;
		})());
		if (typeCast<XamDataChart>((<any>XamDataChart).$type, this.model.chart) !== null) {
			let c: XamDataChart = <XamDataChart>this.model.chart;
			if (c.alignsGridLinesToPixels && c.state != InteractionState.DragPan && c.state != InteractionState.DragZoom) {
				ret.alignToPixels = true;
			}
		}
		return ret;
	}
	protected get labelPanel(): AxisLabelPanelBase {
		return this.model.getAxisComponentsForView().labelPanel;
	}
	updateLabelPanel(model: Axis, windowRect: Rect, viewportRect: Rect): void {
		this.labelPanel.axis = model;
		this.labelPanel.windowRect = windowRect;
		this.labelPanel.viewportRect = viewportRect;
		this.makeDirty();
	}
	clearLabelPanel(): void {
		this.labelPanel.children.clear();
		this.makeDirty();
	}
	setLabelPanelInterval(p: number): void {
		this.labelPanel.interval = p;
		this.makeDirty();
	}
	updateLabelPanelContent(dataContexts: List$1<any>, positions: List$1<LabelPosition>): void {
		this.labelPanel.labelDataContext = dataContexts;
		this.labelPanel.labelPositions = positions;
	}
	setLabelPanelCrossingValue(crossingValue: number): void {
		this.labelPanel.crossingValue = crossingValue;
	}
	bindLabelPanelStyle(): void {
	}
	private _helper: FastReflectionHelper = null;
	getValueLabel(value: number): string {
		return null;
	}
	getLabelValue(dataItem_: any): any {
		if (this.model.formatLabel != null) {
			return this.model.formatLabel(dataItem_);
		}
		let label_ = this.model.label;
		let formatNumber: boolean = typeof dataItem_ === 'number' && typeof label_ === 'string';
		let labelValue_: any = null;
		if (this._helper != null) {
			labelValue_ = this._helper.getPropertyValue(dataItem_);
			if (<boolean>(labelValue_ === undefined)) {
				labelValue_ = label_;
			}
		} else {
			labelValue_ = formatNumber ? stringFormat(<string>label_, dataItem_) : (typeof dataItem_[label_] != 'undefined') ? dataItem_[label_] : label_;;
		}
		if (this.model.expectFunctions) {
			if (<boolean>(typeof(labelValue_) == 'function')) {
				labelValue_ = labelValue_();
			}
		}
		return labelValue_;
	}
	private _hitContext: RenderingContext = null;
	protected get hitContext(): RenderingContext {
		return this._hitContext;
	}
	protected set hitContext(value: RenderingContext) {
		this._hitContext = value;
	}
	private _context: RenderingContext = null;
	get context(): RenderingContext {
		return this._context;
	}
	set context(value: RenderingContext) {
		this._context = value;
	}
	onContextProvided(context: RenderingContext, hitContext: RenderingContext): void {
		this.context = context;
		this.hitContext = hitContext;
	}
	private _isDirty: boolean = false;
	get isDirty(): boolean {
		return this._isDirty;
	}
	set isDirty(value: boolean) {
		this._isDirty = value;
	}
	protected makeDirty(): void {
		if (this.model.chart == null || this.context == null) {
			return;
		}
		if (!this.isDirty) {
			this.isDirty = true;
			this.model.chart.canvasRenderScheduler.schedule();
		}
	}
	undirty(clearRect: boolean): void {
		this.isDirty = false;
		this.render(clearRect);
	}
	private _backgroundRect: Rectangle = null;
	protected render(clearRect: boolean): void {
		if (this.context == null) {
			return;
		}
		if (this.context.shouldRender) {
			if (this.model.seriesViewer != null && this.model.seriesViewer.actualPixelScalingRatio != 1) {
				this.context.save();
				this.context.scale(this.model.seriesViewer.actualPixelScalingRatio, this.model.seriesViewer.actualPixelScalingRatio);
			}
			let _container: Rect = this.model.chart.getContainerRect();
			if (clearRect) {
				this.context.clearRectangle(_container.left, _container.top, _container.width, _container.height);
			}
			if (clearRect) {
				if (this.model.seriesViewer.plotAreaBackground != null && !this.model.viewportRect.isEmpty) {
					this._backgroundRect.canvasTop = this.model.viewportRect.top;
					this._backgroundRect.canvasLeft = this.model.viewportRect.left;
					this._backgroundRect.width = this.model.viewportRect.width;
					this._backgroundRect.height = this.model.viewportRect.height;
					this._backgroundRect._fill = this.model.seriesViewer.plotAreaBackground;
					this.context.renderRectangle(this._backgroundRect);
				}
			}
			this.context.save();
			this.context.setRectangleClip(this.model.viewportRect);
			this.renderOverride();
			this.context.restore();
			if (this.model.seriesViewer != null && this.model.seriesViewer.actualPixelScalingRatio != 1) {
				this.context.restore();
			}
		}
		if (this.hitContext.shouldRender) {
			if (this.model.seriesViewer != null && this.model.seriesViewer.actualPixelScalingRatio != 1) {
				this.hitContext.save();
				this.hitContext.scale(this.model.seriesViewer.actualPixelScalingRatio, this.model.seriesViewer.actualPixelScalingRatio);
			}
			let prevRect: Rect = this._renderedRect;
			let _container1: Rect = this.model.chart.getContainerRect();
			if (!prevRect.isEmpty && clearRect) {
				this.hitContext.clearRectangle(_container1.left, _container1.top, _container1.width, _container1.height);
			}
			if (this.model.seriesViewer != null && this.model.seriesViewer.actualPixelScalingRatio != 1) {
				this.hitContext.restore();
			}
		}
	}
	postRender(): void {
		this.labelPanel.render();
	}
	private _renderedRect: Rect = Rect.empty;
	protected renderOverride(): void {
		if (this.context.shouldRender) {
			this.axisLines._stroke = this.model.actualStroke;
			this.strips._fill = this.model.strip;
			this.minorLines._stroke = this.model.actualMinorStroke;
			this.majorLines._stroke = this.model.actualMajorStroke;
			this.minorLines.strokeThickness = this.model.minorStrokeThickness;
			this.majorLines.strokeThickness = this.model.majorStrokeThickness;
			this.axisLines.strokeThickness = this.model.strokeThickness;
			this.minorLines.strokeDashArray = this.model.minorStrokeDashArray;
			this.majorLines.strokeDashArray = this.model.majorStrokeDashArray;
			this.axisLines.strokeDashArray = this.model.strokeDashArray;
			this._renderedRect = this.model.viewportRect;
			this.context.renderPath(this.axisLines);
			this.context.renderPath(this.strips);
			this.context.renderPath(this.majorLines);
			this.context.renderPath(this.minorLines);
		}
	}
	ensureRender(): void {
		this.makeDirty();
	}
	detachFromChart(oldSeriesViewer: SeriesViewer): void {
		if (oldSeriesViewer != null) {
			oldSeriesViewer.canvasRenderScheduler.unRegister(this);
			oldSeriesViewer.view.makeDirty();
		}
	}
	attachToChart(newSeriesViewer: SeriesViewer): void {
		if (newSeriesViewer != null) {
			newSeriesViewer.canvasRenderScheduler.register(this);
			this.makeDirty();
		}
	}
	getSmartAxisDefaultFont(): FontInfo {
		if (this.model.seriesViewer == null || this.model.seriesViewer.view.viewManager.container == null) {
			return null;
		}
		return FontUtil.getFont(this.model.seriesViewer.view.viewManager.container);
	}
	isDisabled(): boolean {
		return this.context == null;
	}
	onTitleChange(): void {
		if (this.model.isAngular || this.model.isRadial) {
			return;
		}
		if (this.model.title == null) {
			this.model.titleTextBlock = null;
			this.model.mustInvalidateLabels = true;
			this.model.renderAxis();
			return;
		}
		if (this.model.titleTextBlock == null) {
			let titleTextBlock: TextBlock = new TextBlock();
			titleTextBlock.text = this.model.title;
			titleTextBlock.dataContext = this.model.titleSettings;
			this.model.titleTextBlock = titleTextBlock;
		} else {
			this.model.titleTextBlock.text = this.model.title;
			this.model.titleTextBlock.dataContext = this.model.titleSettings;
		}
		this.model.mustInvalidateLabels = true;
		this.model.renderAxis();
	}
	applyDefaultSettings(): void {
		let className: string;
		let settings: AxisLabelSettings = new AxisLabelSettings();
		if (this.model.isAngular) {
			className = "ui-angular-axis-labels";
			settings.margin = 0;
		} else if (this.model.isVertical) {
			className = "ui-vertical-axis-labels";
			settings.location = AxisLabelsLocation.OutsideLeft;
		} else if (this.model.orientation == AxisOrientation.Radial) {
			className = "ui-radial-axis-labels";
			settings.location = AxisLabelsLocation.InsideBottom;
		} else {
			className = "ui-horizontal-axis-labels";
			settings.location = AxisLabelsLocation.OutsideBottom;
		}
		this.applyCssLabelSettings(settings, className);
	}
	updateStrokeBrushesFromCss(): void {
		if (this.model.seriesViewer == null) {
			return;
		}
		let chartView = (<XamDataChart>this.model.seriesViewer).chartView;
		let cssStroke = chartView.cssAxisStroke;
		let cssMajorStroke = chartView.cssAxisMajorStroke;
		if (this.model.stroke == null) {
			if (cssStroke == null) {
				this.model.stroke = chartView.axisLineBrush;
			} else if (cssStroke.color.a != 0) {
				this.model.stroke = cssStroke;
			}
		}
		if (this.model.majorStroke == null) {
			if (cssMajorStroke == null) {
				this.model.majorStroke = chartView.axisLineBrush;
			} else if (cssMajorStroke.color.a != 0) {
				this.model.majorStroke = cssMajorStroke;
			}
		}
	}
	applyCssLabelSettings(settings: AxisLabelSettings, className: string): void {
		this.model.domRenderer.startCSSQuery();
		let axisTopMargin = this.model.domRenderer.getCssDefaultPropertyValue(className, "margin-top");
		let axisRightMargin = this.model.domRenderer.getCssDefaultPropertyValue(className, "margin-right");
		let axisBottomMargin = this.model.domRenderer.getCssDefaultPropertyValue(className, "margin-bottom");
		let axisLeftMargin = this.model.domRenderer.getCssDefaultPropertyValue(className, "margin-left");
		let horizontalAlignment = this.model.domRenderer.getCssDefaultPropertyValue(className, "text-align");
		let vericalAlignment = this.model.domRenderer.getCssDefaultPropertyValue(className, "vertical-align");
		let textColor = this.model.domRenderer.getCssDefaultPropertyValue(className, "color");
		this.model.domRenderer.endCSSQuery();
		if (axisTopMargin != null) {
			settings.topMargin = parseFloat(axisTopMargin);
		}
		if (axisRightMargin != null) {
			settings.rightMargin = parseFloat(axisRightMargin);
		}
		if (axisBottomMargin != null) {
			settings.bottomMargin = parseFloat(axisBottomMargin);
		}
		if (axisLeftMargin != null) {
			settings.leftMargin = parseFloat(axisLeftMargin);
		}
		if (textColor != null) {
			if (settings.textColor == null) {
				settings.textColor = new Brush();
			}
			settings.textColor._fill = textColor;
		}
		if (horizontalAlignment != null) {
			switch (horizontalAlignment) {
				case "right":
				settings.horizontalAlignment = HorizontalAlignment.Right;
				break;

				case "left":
				settings.horizontalAlignment = HorizontalAlignment.Left;
				break;

				default:
				settings.horizontalAlignment = HorizontalAlignment.Center;
				break;

			}

		}
		if (vericalAlignment != null) {
			switch (vericalAlignment) {
				case "top":
				settings.verticalAlignment = VerticalAlignment.Top;
				break;

				case "bottom":
				settings.verticalAlignment = VerticalAlignment.Bottom;
				break;

				default:
				settings.verticalAlignment = VerticalAlignment.Center;
				break;

			}

		}
		this.model.labelSettings = settings;
	}
	preRender(): void {
		if (this.model.seriesViewer != null) {
			this.model.seriesViewer.ensureCorrectSize();
		}
	}
	isValid(): boolean {
		return this.model != null && !this.model.viewportRect.isEmpty;
	}
	exportLabelPosition(textBlock: TextBlock): Point {
		return <Point>{ $type: Point_$type, x: textBlock.canvasLeft, y: textBlock.canvasTop };
	}
	exportLabelsPanelPosition(): Point {
		return <Point>{ $type: Point_$type, x: this.model.labelPanel.labelViewport.left, y: this.model.labelPanel.labelViewport.top };
	}
	exportLabelsPanelViewport(): Rect {
		let viewport = this.model.labelPanel.labelViewport;
		return viewport;
	}
	exportTitlePosition(textBlock: TextBlock): Point {
		return <Point>{ $type: Point_$type, x: textBlock.canvasLeft, y: textBlock.canvasTop };
	}
	exportTitleMargin(textBlock: TextBlock): Thickness {
		let left = this.model.labelPanel.view.getTitleLeftMargin();
		let top = this.model.labelPanel.view.getTitleTopMargin();
		let right = this.model.labelPanel.view.getTitleRightMargin();
		let bottom = this.model.labelPanel.view.getTitleBottomMargin();
		return new Thickness(1, left, top, right, bottom);
	}
	onLabelChanged(): void {
		if (FastReflectionHelper.needsHelper(<string>this.model.label)) {
			this._helper = new FastReflectionHelper(true, <string>this.model.label);
		} else {
			this._helper = null;
		}
	}
}

/**
 * @hidden 
 */
export class CategoryAxisBaseView extends AxisView {
	static $t: Type = markType(CategoryAxisBaseView, 'CategoryAxisBaseView', (<any>AxisView).$type);
	private _categoryModel: CategoryAxisBase = null;
	protected get categoryModel(): CategoryAxisBase {
		return this._categoryModel;
	}
	protected set categoryModel(value: CategoryAxisBase) {
		this._categoryModel = value;
	}
	constructor(model: CategoryAxisBase) {
		super(model);
		this.categoryModel = model;
	}
	getValueLabel(value: number): string {
		let index: number = 0;
		if (this.categoryModel.categoryMode == 0) {
			index = <number>truncate(Math.round(value));
		} else {
			index = <number>truncate(Math.floor(value));
		}
		if (index < 0 || index > (<CategoryAxisBase>this.model).itemsCount - 1) {
			return null;
		}
		let item = (<CategoryAxisBase>this.model).fastItemsSource.item(index);
		let val = this.getLabelValue(item);
		if (val == null) {
			return null;
		}
		return val.toString();
	}
	addLabels(list: List$1<any>): number {
		let textBlockCount: number = 0;
		let needRefresh: boolean = false;
		for (let i: number = 0; i < list.count; i++) {
			let label: FrameworkElement = typeCast<FrameworkElement>((<any>FrameworkElement).$type, list._inner[i]);
			if (label == null) {
				label = this.model.textBlocks.item(i);
				let labelText = list._inner[i] == null ? "" : list._inner[i].toString();
				let currentText = (<TextBlock>label).text;
				let currentLen: number = 0;
				let nextlen: number = 0;
				if (currentText != null) {
					currentLen = currentText.length;
				}
				if (labelText != null) {
					nextlen = labelText.length;
				}
				if (currentLen != nextlen) {
					needRefresh = true;
				}
				(<TextBlock>label).text = labelText;
				textBlockCount++;
			} else {
				this.labelPanel.children.add(label);
			}
		}
		if (needRefresh) {
			this.model.mustInvalidateLabels = true;
		}
		this.model.addAnnotations();
		return textBlockCount;
	}
}

/**
 * @hidden 
 */
export class HorizontalAxisLabelPanelBaseView extends AxisLabelPanelBaseView {
	static $t: Type = markType(HorizontalAxisLabelPanelBaseView, 'HorizontalAxisLabelPanelBaseView', (<any>AxisLabelPanelBaseView).$type);
	private _horizontalModel: HorizontalAxisLabelPanelBase = null;
	protected get horizontalModel(): HorizontalAxisLabelPanelBase {
		return this._horizontalModel;
	}
	protected set horizontalModel(value: HorizontalAxisLabelPanelBase) {
		this._horizontalModel = value;
	}
	constructor(model: HorizontalAxisLabelPanelBase) {
		super(model);
		this.horizontalModel = model;
	}
	bindExtent(): void {
	}
	shouldUseWrapping(): boolean {
		return false;
	}
	handleVerticalAlignment(rectangles: List$1<Rect>): void {
		let titleHeight: number = this.model.getTitleHeightBounds();
		let topOffset: number, bottomOffset: number;
		topOffset = this.horizontalModel.getLabelTopOffset();
		bottomOffset = this.horizontalModel.getLabelBottomOffset();
		let alignment: VerticalAlignment = this.model.labelSettings != null ? this.model.labelSettings.verticalAlignment : VerticalAlignment.Center;
		let extent: number = this.model.actualExtent;
		let count: number = rectangles.count;
		let labelViewport = this.model.labelViewport;
		let span = this.horizontalModel.getLabelSpan();
		let halfSpan = span / 2;
		for (let i: number = 0; i < count; i++) {
			let rect = rectangles._inner[i];
			let halfRectHeight = rect.height / 2;
			switch (alignment) {
				case VerticalAlignment.Top:
				rect.y = labelViewport.top + topOffset;
				break;

				case VerticalAlignment.Center:

				case VerticalAlignment.Stretch:
				rect.y = (labelViewport.top + topOffset + halfSpan) - halfRectHeight;
				break;

				case VerticalAlignment.Bottom:
				rect.y = (labelViewport.bottom - bottomOffset) - rect.height;
				break;

			}

		}
	}
}

/**
 * @hidden 
 */
export class NumericAxisBaseView extends AxisView {
	static $t: Type = markType(NumericAxisBaseView, 'NumericAxisBaseView', (<any>AxisView).$type);
	private _numericModel: NumericAxisBase = null;
	protected get numericModel(): NumericAxisBase {
		return this._numericModel;
	}
	protected set numericModel(value: NumericAxisBase) {
		this._numericModel = value;
	}
	constructor(model: NumericAxisBase) {
		super(model);
		this.numericModel = model;
	}
	bindLogarithmBaseToActualTickmarks(): void {
	}
	getValueLabel(value: number): string {
		let renderingParams: AxisRenderingParametersBase = this.numericModel.renderer.createRenderingParams(this.numericModel.viewportRect, this.numericModel.seriesViewer.actualWindowRect, this.numericModel.getCurrentEffectiveViewport(), this.numericModel.getContentViewport());
		return <string>this.numericModel.renderer.getLabel(renderingParams, value, -1, NaN);
	}
}

/**
 * @hidden 
 */
export class VerticalAxisLabelPanelView extends AxisLabelPanelBaseView {
	static $t: Type = markType(VerticalAxisLabelPanelView, 'VerticalAxisLabelPanelView', (<any>AxisLabelPanelBaseView).$type);
	private _verticalModel: VerticalAxisLabelPanel = null;
	protected get verticalModel(): VerticalAxisLabelPanel {
		return this._verticalModel;
	}
	protected set verticalModel(value: VerticalAxisLabelPanel) {
		this._verticalModel = value;
	}
	constructor(model: VerticalAxisLabelPanel) {
		super(model);
		this.verticalModel = model;
	}
	bindExtent(): void {
	}
	getAxisTitleFont(): FontInfo {
		let font = this.model.axis.seriesViewer.getFontInfo();
		if (this.model.axis.titleSettings != null && this.model.axis.titleSettings.textStyle != null) {
			font = this.model.axis.titleSettings.getFontInfo(this.model.axis.seriesViewer.view.viewManager.container);
		} else {
			let defFont = this.model.axis.seriesViewer.getDefaultVerticalAxisFont();
			if (defFont != null) {
				font = defFont;
			}
		}
		return font;
	}
	protected getTitleMargin(): Thickness {
		return this.model.axis.seriesViewer.getDefaultVerticalAxisTitleMargin();
	}
	getAxisTitleColor(): Brush {
		let brush = this.model.axis.chart.getFontBrush();
		if (this.model.axis.titleSettings != null && this.model.axis.titleSettings.textColor != null) {
			brush = this.model.axis.titleSettings.textColor;
		} else {
			let defBrush = this.model.axis.seriesViewer.getDefaultverticalAxisColor();
			if (defBrush != null) {
				brush = defBrush;
			}
		}
		return brush;
	}
	handleHorizontalAlignment(rectangles: List$1<Rect>, largestWidth: number): void {
		let leftOffset: number, rightOffset: number;
		leftOffset = this.verticalModel.getLabelLeftOffset();
		rightOffset = this.verticalModel.getLabelRightOffset();
		let alignment: HorizontalAlignment = this.model.labelSettings != null ? this.model.labelSettings.horizontalAlignment : HorizontalAlignment.Center;
		let extent: number = this.model.actualExtent;
		let span = this.verticalModel.getLabelSpan();
		let halfSpan = span / 2;
		let labelViewport = this.model.labelViewport;
		for (let i: number = 0; i < rectangles.count; i++) {
			let rect = rectangles._inner[i];
			let halfRectWidth = rect.width / 2;
			switch (alignment) {
				case HorizontalAlignment.Left:
				rect.x = labelViewport.left + leftOffset;
				break;

				case HorizontalAlignment.Center:

				case HorizontalAlignment.Stretch:
				rect.x = (labelViewport.left + leftOffset + halfSpan) - halfRectWidth;
				break;

				case HorizontalAlignment.Right:
				rect.x = (labelViewport.right - rightOffset) - rect.width;
				break;

			}

		}
	}
}

/**
 * @hidden 
 */
export class XamDataChartView extends SeriesViewerView {
	static $t: Type = markType(XamDataChartView, 'XamDataChartView', (<any>SeriesViewerView).$type);
	constructor(model: XamDataChart) {
		super(model);
		this.chartModel = model;
	}
	private _chartModel: XamDataChart = null;
	protected get_chartModel(): XamDataChart {
		return this._chartModel;
	}
	protected set_chartModel(value: XamDataChart): void {
		this._chartModel = value;
	}
	protected get chartModel(): XamDataChart {
		return this.get_chartModel();
	}
	protected set chartModel(value: XamDataChart) {
		this.set_chartModel(value);
	}
	updateGridMode(newValue: any): void {
		this.model.canvasRenderScheduler.sortDirty();
	}
	protected preRenderOverride(): void {
		super.preRenderOverride();
		if (this.attachedAxes.count == 0 && this.mainContext != null) {
			if (this.model.actualPixelScalingRatio != 1) {
				this.mainContext.save();
				this.mainContext.scale(this.model.actualPixelScalingRatio, this.model.actualPixelScalingRatio);
			}
			this.mainContext.clearRectangle(0, 0, this.containerWidth, this.containerHeight);
			if (this.model.actualPixelScalingRatio != 1) {
				this.mainContext.restore();
			}
		}
	}
	setDefaultBrushes(): void {
		let axisStroke: Brush, axisMajorStroke: Brush;
		let areaFillOpacity: number = 1, categoryAxisTickLength: number = 0;
		let alignsGridLines: boolean = false;
		let defaultPalette = this.viewManager.getDefaultPalette();
		let chartMargins: number[];
		let $ret = this.viewManager.getChartSpecificDefaults(areaFillOpacity, chartMargins, axisStroke, axisMajorStroke, categoryAxisTickLength, alignsGridLines);
		areaFillOpacity = $ret.p0;
		chartMargins = $ret.p1;
		axisStroke = $ret.p2;
		axisMajorStroke = $ret.p3;
		categoryAxisTickLength = $ret.p4;
		alignsGridLines = $ret.p5;
		if (isNaN_(this.model.topMargin)) {
			this.model.topMargin = chartMargins[0];
		}
		if (isNaN_(this.model.rightMargin)) {
			this.model.rightMargin = chartMargins[1];
		}
		if (isNaN_(this.model.bottomMargin)) {
			this.model.bottomMargin = chartMargins[2];
		}
		if (isNaN_(this.model.leftMargin)) {
			this.model.leftMargin = chartMargins[3];
		}
		this.chartModel.defaultAxisStroke = defaultPalette.axisLineBrush;
		this.chartModel.defaultAxisMajorStroke = defaultPalette.axisLineBrush;
		this.chartModel.defaultAxisMinorStroke = defaultPalette.axisLineBrush;
		this.chartModel.alignsGridLinesToPixels = alignsGridLines;
		this.cssAxisStroke = axisStroke;
		this.cssAxisMajorStroke = axisMajorStroke;
		this.chartModel.brushes = defaultPalette.brushes;
		this.chartModel.outlines = defaultPalette.outlines;
		this.chartModel.markerBrushes = defaultPalette.markerBrushes != null ? defaultPalette.markerBrushes : new BrushCollection();
		this.chartModel.markerOutlines = defaultPalette.markerOutlines != null ? defaultPalette.markerOutlines : new BrushCollection();
		if (this.chartModel.markerBrushes.count == 0) {
			for (let i = 0; i < defaultPalette.brushes.count; i++) {
				this.chartModel.markerBrushes.add(defaultPalette.brushes.item(i));
			}
		}
		if (defaultPalette.markerOutlines.count == 0) {
			for (let i1 = 0; i1 < defaultPalette.outlines.count; i1++) {
				this.chartModel.markerOutlines.add(defaultPalette.outlines.item(i1));
			}
		}
		this.crosshairBrush = defaultPalette.crosshairBrush;
		this.fontBrush = defaultPalette.fontBrush;
		this.font = defaultPalette.font;
		this.axisLineBrush = defaultPalette.axisLineBrush;
		this.defaultAreaFillOpacity = areaFillOpacity;
		for (let series of fromEnum<Series>(this.chartModel.series)) {
			series.updateActualAreaFillOpacity();
		}
		this.defaultCategoryAxisTickLength = categoryAxisTickLength;
	}
	private _fontBrush: Brush = null;
	get fontBrush(): Brush {
		return this._fontBrush;
	}
	set fontBrush(value: Brush) {
		this._fontBrush = value;
	}
	private _axisLineBrush: Brush = null;
	get axisLineBrush(): Brush {
		return this._axisLineBrush;
	}
	set axisLineBrush(value: Brush) {
		this._axisLineBrush = value;
	}
	private _crosshairBrush: Brush = null;
	get crosshairBrush(): Brush {
		return this._crosshairBrush;
	}
	set crosshairBrush(value: Brush) {
		this._crosshairBrush = value;
	}
	private _cssAxisStroke: Brush = null;
	get cssAxisStroke(): Brush {
		return this._cssAxisStroke;
	}
	set cssAxisStroke(value: Brush) {
		this._cssAxisStroke = value;
	}
	private _cssAxisMajorStroke: Brush = null;
	get cssAxisMajorStroke(): Brush {
		return this._cssAxisMajorStroke;
	}
	set cssAxisMajorStroke(value: Brush) {
		this._cssAxisMajorStroke = value;
	}
	private _defaultAreaFillOpacity: number = 0;
	get defaultAreaFillOpacity(): number {
		return this._defaultAreaFillOpacity;
	}
	set defaultAreaFillOpacity(value: number) {
		this._defaultAreaFillOpacity = value;
	}
	private _defaultCategoryAxisTickLength: number = 0;
	get defaultCategoryAxisTickLength(): number {
		return this._defaultCategoryAxisTickLength;
	}
	set defaultCategoryAxisTickLength(value: number) {
		this._defaultCategoryAxisTickLength = value;
	}
	protected renderOverride(): void {
		this.horizontalCrosshairLine.strokeThickness = this.verticalCrosshairLine.strokeThickness = DeviceUtils.toPixelUnits(1.4);
		this.horizontalCrosshairLine._stroke = this.verticalCrosshairLine._stroke = this.crosshairBrush;
		super.renderOverride();
	}
	private _font: FontInfo = null;
	get font(): FontInfo {
		return this._font;
	}
	set font(value: FontInfo) {
		this._font = value;
	}
}

/**
 * @hidden 
 */
export class SeriesView extends Base implements ISchedulableRender, IProvidesViewport {
	static $t: Type = markType(SeriesView, 'SeriesView', (<any>Base).$type, [ISchedulableRender_$type, IProvidesViewport_$type]);
	private _model: Series = null;
	protected get_model(): Series {
		return this._model;
	}
	protected set_model(value: Series): void {
		this._model = value;
	}
	protected get model(): Series {
		return this.get_model();
	}
	protected set model(value: Series) {
		this.set_model(value);
	}
	private _mouseButtonUserReleased: boolean = false;
	get mouseButtonUserReleased(): boolean {
		return this._mouseButtonUserReleased;
	}
	set mouseButtonUserReleased(value: boolean) {
		this._mouseButtonUserReleased = value;
	}
	constructor(model: Series) {
		super();
		this.scalingRatioOverride = NaN;
		this.isVisible = true;
		this.model = model;
		this.isThumbnailView = false;
		this._backgroundRect = new Rectangle();
		this.mouseButtonUserReleased = false;
	}
	getDefaultTooltipTemplate(): string {
		return this.model.seriesInteractionManager.getDefaultTooltipTemplate(this.model);
	}
	hideTooltip(): void {
		if (this.model.isInteractivityLoaded) {
			this.model.seriesInteractionManager.hideTooltip(this.model);
		}
	}
	private _toolTipContext: DataContext = null;
	get toolTipContext(): DataContext {
		return this._toolTipContext;
	}
	set toolTipContext(value: DataContext) {
		this._toolTipContext = value;
	}
	onInit(): void {
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemTemplateType = StandardLegendItems.Default;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Line;
			this.model.defaultDiscreteLegendItemTemplateType = StandardLegendItems.Discrete;
			this.toolTipContext = new DataContext();
			this.toolTipContext.series = this.model;
			this.model.transitionInEasingFunction = EasingFunctions.cubicEase;
			this.applyDropShadowDefaultSettings();
		}
	}
	getEffectiveViewport(): Rect {
		return this.model.getEffectiveViewport1(this);
	}
	onVisualPropertiesChanged(): void {
		this.makeDirty();
	}
	destroy(): void {
	}
	get seriesViewerRenderer(): DomRenderer {
		if (this.model.seriesViewer != null) {
			return this.model.seriesViewer.view.viewManager.container;
		}
		return null;
	}
	private _isDirty: boolean = false;
	get isDirty(): boolean {
		return this._isDirty;
	}
	set isDirty(value: boolean) {
		this._isDirty = value;
	}
	protected get_index(): number {
		if (this.model == null || this.model.seriesViewer == null) {
			return 0;
		}
		if (this.model.seriesViewer.isMap) {
			if (this.model.isGeographic) {
				return this.model.seriesViewer.series.indexOf(this.model);
			} else {
				let index = this.model.seriesViewer.series.indexOf(this.model);
				if (index >= 0) {
					return index;
				}
				for (let i = 0; i < this.model.seriesViewer.series.count; i++) {
					if (this.model.seriesViewer.series._inner[i].isGeographic) {
						let hosted = this.model.seriesViewer.series._inner[i].resolveHostedSeries();
						if (hosted == this.model) {
							return i;
						}
					}
				}
				return index;
			}
		}
		let chart: XamDataChart = typeCast<XamDataChart>((<any>XamDataChart).$type, this.model.chart);
		let before: number = 0;
		if (chart != null) {
			if (chart.gridMode == GridMode.BehindSeries || chart.gridMode == GridMode.None) {
				before = chart.axes.count;
			}
		}
		let seriesIndex: number = 0;
		for (let i1 = 0; i1 < this.model.seriesViewer.series.count; i1++) {
			if (this.model.seriesViewer.series._inner[i1] == this.model) {
				break;
			}
			if (this.model.seriesViewer.series._inner[i1].isStacked) {
				seriesIndex += this.model.seriesViewer.series._inner[i1].getSubSeriesCount();
			} else {
				seriesIndex++;
			}
		}
		return before + seriesIndex;
	}
	get index(): number {
		return this.get_index();
	}
	protected makeDirty(): void {
		if (this.model.seriesViewer == null) {
			return;
		}
		if (!this.isDirty) {
			this.isDirty = true;
			this.currentScheduler.schedule1(this.context, this.hitContext);
		}
	}
	undirty(clearRect: boolean): void {
		this.isDirty = false;
		this.render(clearRect);
	}
	private _backgroundRect: Rectangle = null;
	onRenderFrame(): void {
		this.makeDirty();
	}
	private _transparent: Brush = null;
	getTransparentBrush(): Brush {
		if (this._transparent == null) {
			this._transparent = ((() => {
				let $ret = new Brush();
				$ret.color = Color.fromArgb(0, 0, 0, 0);
				return $ret;
			})());
		}
		return this._transparent;
	}
	private _scalingRatioOverride: number = 0;
	get scalingRatioOverride(): number {
		return this._scalingRatioOverride;
	}
	set scalingRatioOverride(value: number) {
		this._scalingRatioOverride = value;
	}
	private getScalingRatio(): number {
		if (!isNaN_(this.scalingRatioOverride)) {
			return this.scalingRatioOverride;
		}
		if (this.model.seriesViewer != null) {
			return this.model.seriesViewer.actualPixelScalingRatio;
		} else {
			return 1;
		}
	}
	protected render(clearRect: boolean): void {
		if (this.context == null) {
			return;
		}
		if (this._renderedRect.isEmpty) {
			this._renderedRect = this.viewport;
		}
		let prevRect = this._renderedRect;
		let _container: Rect = this.model.seriesViewer.getContainerRect();
		let clearLeft = _container.left;
		let clearTop = _container.top;
		let clearWidth = _container.width;
		let clearHeight = _container.height;
		let scalingRatio: number = this.getScalingRatio();
		if (this.isAlternateView) {
			clearLeft = this.viewport.left;
			clearTop = this.viewport.top;
			clearWidth = this.viewport.width;
			clearHeight = this.viewport.height;
		}
		if (this.context.shouldRender) {
			if (scalingRatio != 1) {
				this.context.save();
				this.context.scale(scalingRatio, scalingRatio);
			}
			if (clearRect) {
				this.context.clearRectangle(clearLeft, clearTop, clearWidth, clearHeight);
			}
			if (clearRect) {
				if (this.model.seriesViewer.plotAreaBackground != null && !this.viewport.isEmpty) {
					this._backgroundRect.canvasTop = this.viewport.top;
					this._backgroundRect.canvasLeft = this.viewport.left;
					this._backgroundRect.width = this.viewport.width;
					this._backgroundRect.height = this.viewport.height;
					this._backgroundRect._fill = this.model.seriesViewer.plotAreaBackground;
					this.context.renderRectangle(this._backgroundRect);
				}
			}
			if (scalingRatio != 1) {
				this.context.restore();
			}
		}
		if (this.hitContext != null && this.isVisible) {
			if (this.hitContext.shouldRender) {
				if (this.model.seriesViewer != null && scalingRatio != 1) {
					this.hitContext.save();
					this.hitContext.scale(scalingRatio, scalingRatio);
				}
				if (!prevRect.isEmpty && clearRect) {
					this.hitContext.clearRectangle(prevRect.left, prevRect.top, prevRect.width, prevRect.height);
				}
				this.setupAppearance(true);
				this.renderOverride(this.hitContext, true);
				this.renderMarkersOverride(this.hitContext, true);
				if (scalingRatio != 1) {
					this.hitContext.restore();
				}
			}
		}
		if (this.context.shouldRender && this.isVisible) {
			if (scalingRatio != 1) {
				this.context.save();
				this.context.scale(scalingRatio, scalingRatio);
			}
			this.context.save();
			if (!this.isThumbnailView && Rect.l_op_Inequality(this.model.customClipRect, null) && !this.model.customClipRect.isEmpty && (this.model.customClipRect.width != 1 || this.model.customClipRect.height != 1)) {
				this.context.setRectangleClip(new Rect(0, this.viewport.left + this.viewport.width * this.model.customClipRect.left, this.viewport.top + this.viewport.height * this.model.customClipRect.top, this.viewport.width * this.model.customClipRect.width, this.viewport.height * this.model.customClipRect.height));
			} else {
				this.context.setRectangleClip(this.viewport);
			}
			this.setupAppearance(false);
			this.context.setOpacity(this.model._opacity);
			if (this.model.isDropShadowEnabled && this.model.isDropShadowSupported && !this.isThumbnailView) {
				if (this.model.useSingleShadow) {
					this.context.enableDropShadow(this.model.shadowColor.colorString, 0, this.model.shadowOffsetX, this.model.shadowOffsetY);
					let shadowContext = this.model.seriesViewer.view.viewManager.shadowContext;
					let shadowCanvas = this.model.seriesViewer.view.viewManager.shadowCanvas;
					if (scalingRatio != 1) {
						shadowContext.save();
						shadowContext.scale(scalingRatio, scalingRatio);
					}
					shadowContext.clearRectangle(_container.left, _container.top, _container.width, _container.height);
					this.renderOverride(shadowContext, false);
					this.renderMarkersOverride(shadowContext, false);
					this.context.drawImage(shadowCanvas.getNativeElement(), 1, 0, 0, _container.width, _container.height);
					if (scalingRatio != 1) {
						shadowContext.restore();
					}
				} else {
					this.context.enableDropShadow(this.model.shadowColor.colorString, this.model.shadowBlur, this.model.shadowOffsetX, this.model.shadowOffsetY);
					this.renderOverride(this.context, false);
					this.renderMarkersOverride(this.context, false);
				}
				this.context.disableDropShadow();
			} else {
				this.renderOverride(this.context, false);
				this.renderMarkersOverride(this.context, false);
			}
			this.context.setOpacity(1);
			this.context.restore();
			if (scalingRatio != 1) {
				this.context.restore();
			}
		}
	}
	private _renderedRect: Rect = Rect.empty;
	protected setupItemAppearance(item: any, index: number, isHitContext: boolean): void {
		if (isHitContext) {
			this.setupItemHitAppearanceOverride(item, index);
		} else {
			this.setupItemAppearanceOverride(item, index);
		}
	}
	protected setupMarkerAppearance(item: any, index: number, isHitContext: boolean): void {
		if (isHitContext) {
			this.setupMarkerHitAppearanceOverride(item, index);
		} else {
			this.setupMarkerAppearanceOverride(item, index);
		}
	}
	protected getCurrentItem(index: number, isHitContext: boolean): any {
		if (isHitContext) {
			return this.getHitItem(index);
		} else {
			return this.getItem(index);
		}
	}
	protected getHitItem(index: number): any {
		return null;
	}
	protected getItem(index: number): any {
		return null;
	}
	protected setupItemAppearanceOverride(item: any, index: number): void {
	}
	protected setupMarkerAppearanceOverride(item: any, index: number): void {
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
	}
	protected setupMarkerHitAppearanceOverride(item: any, index: number): void {
	}
	protected setupAppearance(isHitContext: boolean): void {
		if (isHitContext) {
			this.setupHitAppearanceOverride();
		} else {
			this.setupAppearanceOverride();
		}
	}
	protected setupAppearanceOverride(): void {
	}
	protected setupHitAppearanceOverride(): void {
	}
	private _hitBrush: Brush = new Brush();
	protected getHitBrush1(index: number): Brush {
		return this.getHitBrush();
	}
	protected getHitBrush(): Brush {
		let seriesIndex: number = this.model.uniqueIndex;
		let num_: number = (seriesIndex + 1) * SeriesView.iTEM_ALLOCATION;
		let r: number = <number>((num_ & 0x3F) << 2);
		num_ = <number>(num_ >> 6);
		let g: number = <number>((num_ & 0x3F) << 2);
		num_ = <number>(num_ >> 6);
		let b: number = <number>((num_ & 0x3F) << 2);
		this._hitBrush._fill = "rgb(" + r + "," + g + "," + b + ")";
		return this._hitBrush;
	}
	static readonly iTEM_ALLOCATION: number = 1000;
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		this._renderedRect = this.viewport;
	}
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
	}
	onTemplateProvided(): void {
	}
	goToMouseOverState(): void {
	}
	goToNormalState(): void {
	}
	private _seriesComponentsFromView: SeriesComponentsFromView = new SeriesComponentsFromView();
	static readonly hIT_THICKNESS_AUGMENT: number = 3;
	static readonly tOUCH_HIT_THICKNESS_AUGMENT: number = 10;
	getSeriesComponentsFromView(): SeriesComponentsFromView {
		return this._seriesComponentsFromView;
	}
	setMarkerCanvas(canvas: Canvas): void {
	}
	ready(): boolean {
		return true;
	}
	onSeriesDetached(): void {
	}
	onSeriesAttached(): void {
	}
	resetActualBrush(): void {
		this.model.actualBrush = null;
	}
	bindActualToUserBrush(): void {
		this.model.actualBrush = this.model.brush;
	}
	resetActualOutlineBrush(): void {
		this.model.actualOutline = null;
	}
	bindActualToUserOutline(): void {
		this.model.actualOutline = this.model.outline;
	}
	getDataContextFromSender(sender: any): DataContext {
		if (typeCast<DataContext>((<any>DataContext).$type, sender) !== null) {
			return <DataContext>sender;
		}
		return null;
	}
	private _context: RenderingContext = null;
	protected get context(): RenderingContext {
		return this._context;
	}
	protected set context(value: RenderingContext) {
		this._context = value;
	}
	private _hitContext: RenderingContext = null;
	protected get hitContext(): RenderingContext {
		return this._hitContext;
	}
	protected set hitContext(value: RenderingContext) {
		this._hitContext = value;
	}
	onContextProvided(context: RenderingContext, hitContext: RenderingContext): void {
		this.context = context;
		this.hitContext = hitContext;
	}
	private _viewport: Rect = null;
	get viewport(): Rect {
		return this._viewport;
	}
	set viewport(value: Rect) {
		this._viewport = value;
	}
	private _alternateWindow: Rect = null;
	get alternateWindow(): Rect {
		return this._alternateWindow;
	}
	set alternateWindow(value: Rect) {
		this._alternateWindow = value;
	}
	protected get_windowRect(): Rect {
		if (this.isAlternateView) {
			return this.alternateWindow;
		} else if (this.isThumbnailView) {
			return XamDataChart.standardRect;
		} else {
			return this.model.seriesViewer != null ? this.model.seriesViewer.actualWindowRect : Rect.empty;
		}
	}
	get windowRect(): Rect {
		return this.get_windowRect();
	}
	private _isThumbnailView: boolean = false;
	get isThumbnailView(): boolean {
		return this._isThumbnailView;
	}
	set isThumbnailView(value: boolean) {
		this._isThumbnailView = value;
	}
	detachFromChart(oldSeriesViewer: SeriesViewer): void {
		if (oldSeriesViewer != null) {
			this.currentScheduler.unRegister(this);
			if (this.model.thumbnailView != null) {
				this.model.thumbnailView.currentScheduler.unRegister(this.model.thumbnailView);
			}
		}
	}
	private _currentScheduler: CanvasRenderScheduler = null;
	get currentScheduler(): CanvasRenderScheduler {
		return this._currentScheduler;
	}
	set currentScheduler(value: CanvasRenderScheduler) {
		this._currentScheduler = value;
	}
	attachToChart(newSeriesViewer: SeriesViewer): void {
		if (newSeriesViewer != null) {
			if (this.model.useOverlayScheduler) {
				this.context = this.model.seriesViewer.view.overlayContext;
				newSeriesViewer.view.overlayScheduler.register(this);
				this.currentScheduler = newSeriesViewer.view.overlayScheduler;
			} else {
				this.context = this.model.seriesViewer.view.mainContext;
				newSeriesViewer.canvasRenderScheduler.register(this);
				this.currentScheduler = newSeriesViewer.canvasRenderScheduler;
			}
			if (this.model.thumbnailView != null) {
				newSeriesViewer.thumbnailCanvasRenderScheduler.register(this.model.thumbnailView);
				this.model.thumbnailView.currentScheduler = newSeriesViewer.thumbnailCanvasRenderScheduler;
				this.model.thumbnailView.makeDirty();
			}
			if (this.model.isInteractivityLoaded) {
				for (let key of fromEnum<string>(this.model.seriesInteractionManager.alternateViews.keys)) {
					newSeriesViewer.alternateViewRenderScheduler.register(this.model.seriesInteractionManager.alternateViews.item(key));
					this.model.seriesInteractionManager.alternateViews.item(key).currentScheduler = newSeriesViewer.alternateViewRenderScheduler;
					this.model.seriesInteractionManager.alternateViews.item(key).makeDirty();
				}
			}
			this.makeDirty();
		}
	}
	postRender(): void {
		this.postRenderOverride();
	}
	protected postRenderOverride(): void {
	}
	getDataContextByIndex(itemIndex: number): DataContext {
		return null;
	}
	prepSurface(surface: RenderSurface): void {
		this.model.thumbnailView.context = surface.surface;
	}
	exportViewShapes(svd: any): void {
	}
	updateLegendItemVisual(): void {
		if (this.duringInit) {
			return;
		}
		if (this.model.seriesViewer != null) {
			let curLegend: IChartLegend = (this.model.legend != null) ? this.model.legend : this.model.seriesViewer.legend;
			if (curLegend != null && this.model.legendItem != null && curLegend.containsChild(this.model.legendItem)) {
				curLegend.removeChild(this.model.legendItem);
				let legendItem: ContentControl = <ContentControl>this.model.provideLegendItem();
				(<DataContext>legendItem.content).actualItemBrush = this.model.actualBrush;
				(<DataContext>legendItem.content).outline = this.model.outline;
				(<DataContext>legendItem.content).thickness = this.model.thickness;
				curLegend.addChildInOrder(this.model.legendItem, this.model);
			}
		}
	}
	onLegendItemVisibilityChanged(): void {
		this.model.assertLegendItems(this.model.actualLegend, this.model.actualLegend);
	}
	onTitlePropertyChanged(): void {
		this.updateLegendItemVisual();
	}
	getViewInfo(viewportRect: Rect, windowRect: Rect): { p0: Rect; p1: Rect; } {
		viewportRect = this.viewport;
		windowRect = this.windowRect;
		return {
			p0: viewportRect,
			p1: windowRect

		};
	}
	hasSurface(): boolean {
		return this.context != null;
	}
	private _isVisible: boolean = false;
	protected get isVisible(): boolean {
		return this._isVisible;
	}
	protected set isVisible(value: boolean) {
		this._isVisible = value;
	}
	visibilityChanged(): void {
		this.isVisible = this.model._visibility == Visibility.Visible;
		this.makeDirty();
	}
	removeToolTipFromCurrentParent(): void {
		this.model.seriesInteractionManager.removeToolTipFromCurrentParent(this.model);
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 5;
		this.model.shadowOffsetX = 5;
		this.model.shadowOffsetY = 5;
	}
	handleIsDropShadowEnabledChanged(): void {
	}
	preRender(): void {
		if (this.model.seriesViewer != null && !this.isThumbnailView) {
			this.model.seriesViewer.ensureCorrectSize();
		}
	}
	isValid(): boolean {
		return true;
	}
	private _duringInit: boolean = false;
	get duringInit(): boolean {
		return this._duringInit;
	}
	set duringInit(value: boolean) {
		this._duringInit = value;
	}
	private _isAlternateView: boolean = false;
	get isAlternateView(): boolean {
		return this._isAlternateView;
	}
	set isAlternateView(value: boolean) {
		this._isAlternateView = value;
	}
	prepAltSurface(surface: RenderSurface): void {
		this.context = surface.surface;
	}
	private _alternateViewIdentifier: string = null;
	get alternateViewIdentifier(): string {
		return this._alternateViewIdentifier;
	}
	set alternateViewIdentifier(value: string) {
		this._alternateViewIdentifier = value;
	}
	resolveLegendItemTemplate(type_: StandardLegendItems): DataTemplate {
		let legendTemplates_ = TypeRegistrar.get("LegendTemplates");
		let ret = <DataTemplate>(legendTemplates_.resolveLegendItemTemplate(type_));
		return ret;
	}
}

/**
 * @hidden 
 */
export abstract class MarkerSeriesView extends SeriesView {
	static $t: Type = markType(MarkerSeriesView, 'MarkerSeriesView', (<any>SeriesView).$type);
	private _markerModel: MarkerSeries = null;
	protected get markerModel(): MarkerSeries {
		return this._markerModel;
	}
	protected set markerModel(value: MarkerSeries) {
		this._markerModel = value;
	}
	private _markerHitOutlineThickness: number = 1;
	private _markerNormalOutlineThickness: number = MarkerSeries.markerThicknessDefault;
	private _markerHitThicknessAugment: number = SeriesView.hIT_THICKNESS_AUGMENT;
	constructor(model: MarkerSeries) {
		super(model);
		this._hitMarker = new Marker();
		this._hitMarker.content = new DataContext();
		this.markerModel = model;
	}
	onInit(): void {
		super.onInit();
		this.visibleMarkers = new List$1<Marker>((<any>Marker).$type, 0);
		this._hitTemplate = ((() => {
			let $ret = new DataTemplate();
			$ret.render = MarkerTemplates.renderAlignedSquareMarkerTemplate;
			$ret.measure = MarkerTemplates.measureAsEightByEightConstantMarkerTemplate;
			return $ret;
		})());
	}
	doUpdateMarkerTemplates(): void {
		for (let marker of fromEnum<Marker>(this.visibleMarkers)) {
			marker.contentTemplate = this.markerModel.cachedActualMarkerTemplate;
		}
		this.makeDirty();
	}
	setUseLightweightMode(p: boolean): void {
	}
	private _visibleMarkers: List$1<Marker> = null;
	protected get visibleMarkers(): List$1<Marker> {
		return this._visibleMarkers;
	}
	protected set visibleMarkers(value: List$1<Marker>) {
		this._visibleMarkers = value;
	}
	markerCreate(): Marker {
		let marker: Marker = new Marker();
		marker.content = ((() => {
			let $ret = new DataContext();
			$ret.series = this.model;
			return $ret;
		})());
		marker.contentTemplate = this.markerModel.cachedActualMarkerTemplate;
		this.visibleMarkers.add(marker);
		return marker;
	}
	abstract doToAllMarkers(action: (arg1: Marker) => void): void;
	markerActivate(marker: Marker): void {
		marker._visibility = Visibility.Visible;
	}
	markerDisactivate(marker: Marker): void {
		marker._visibility = Visibility.Collapsed;
	}
	markerDestroy(marker: Marker): void {
		this.visibleMarkers.remove(marker);
	}
	hasCustomMarkerTemplate(): boolean {
		return this.markerModel.markerTemplate != null;
	}
	clearActualMarkerTemplate(): void {
		this.markerModel.actualMarkerTemplate = null;
	}
	bindActualToCustomMarkerTemplate(): void {
		this.markerModel.actualMarkerTemplate = this.markerModel.markerTemplate;
	}
	getBoundingBoxForMarker(marker: Marker): Rect {
		let left = marker.canvasLeft;
		let top = marker.canvasTop;
		let width = marker.actualWidth;
		let height = marker.actualHeight;
		return new Rect(0, left - width / 2, top - width / 2, width, height);
	}
	bindActualToMarkerTemplate(p: string): void {
		switch (p) {
			case XamDataChart.circleMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.circleMarkerTemplate;
			break;

			case XamDataChart.triangleMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.triangleMarkerTemplate;
			break;

			case XamDataChart.pyramidMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.pyramidMarkerTemplate;
			break;

			case XamDataChart.squareMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.squareMarkerTemplate;
			break;

			case XamDataChart.diamondMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.diamondMarkerTemplate;
			break;

			case XamDataChart.pentagonMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.pentagonMarkerTemplate;
			break;

			case XamDataChart.hexagonMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.hexagonMarkerTemplate;
			break;

			case XamDataChart.tetragramMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.tetragramMarkerTemplate;
			break;

			case XamDataChart.pentagramMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.pentagramMarkerTemplate;
			break;

			case XamDataChart.hexagramMarkerTemplatePropertyName:
			this.markerModel.actualMarkerTemplate = this.markerModel.seriesViewer.hexagramMarkerTemplate;
			break;

		}

	}
	clearActualMarkerBrush(): void {
		this.markerModel.actualMarkerBrush = null;
	}
	bindActualToMarkerBrush(): void {
		this.markerModel.actualMarkerBrush = this.markerModel.markerBrush;
	}
	clearActualMarkerOutline(): void {
		this.markerModel.actualMarkerOutline = null;
	}
	bindActualToMarkerOutline(): void {
		this.markerModel.actualMarkerOutline = this.markerModel.markerOutline;
	}
	renderMarkers(): void {
		this.makeDirty();
	}
	private _markerAppearanceHandled: boolean = false;
	get markerAppearanceHandled(): boolean {
		return this._markerAppearanceHandled;
	}
	set markerAppearanceHandled(value: boolean) {
		this._markerAppearanceHandled = value;
	}
	protected setupMarkerAppearanceOverride(item: any, index: number): void {
		super.setupMarkerAppearanceOverride(item, index);
		if (!this.markerAppearanceHandled) {
			let marker = <Marker>item;
			let context = <DataContext>marker.content;
			if (context != null) {
				context.actualItemBrush = this.markerModel.actualMarkerBrush;
				if (context.itemBrush != null) {
					context.actualItemBrush = context.itemBrush;
				}
				context.outline = this.markerModel.actualMarkerOutline;
				context.thickness = this._markerNormalOutlineThickness;
			}
		}
	}
	private _hitMarker: Marker = new Marker();
	protected setupMarkerHitAppearanceOverride(item: any, index: number): void {
		super.setupMarkerHitAppearanceOverride(item, index);
		let marker = <Marker>item;
		this._hitMarker._visibility = marker._visibility;
		this._hitMarker.contentTemplate = marker.contentTemplate;
		this._hitMarker.width = marker.width;
		this._hitMarker.height = marker.height;
		this._hitMarker.actualWidth = marker.actualWidth;
		this._hitMarker.actualHeight = marker.actualHeight;
		this._hitMarker.canvasLeft = marker.canvasLeft;
		this._hitMarker.canvasTop = marker.canvasTop;
		let hitBrush = this.getHitBrush1(index);
		let context = <DataContext>this._hitMarker.content;
		let markerContext = <DataContext>marker.content;
		context.item = markerContext.item;
		context.series = markerContext.series;
		context.thickness = markerContext.thickness;
		if (context != null) {
			context.actualItemBrush = hitBrush;
			context.outline = hitBrush;
			context.thickness = this._markerHitOutlineThickness + this._markerHitThicknessAugment;
		}
	}
	getDataContextByIndex(itemIndex: number): DataContext {
		if (itemIndex >= 0 && itemIndex < this.visibleMarkers.count) {
			return <DataContext>this.visibleMarkers._inner[itemIndex].content;
		}
		return super.getDataContextByIndex(itemIndex);
	}
	private _hitTemplate: DataTemplate = null;
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderMarkersOverride(context, isHitContext);
		if (context.shouldRender) {
			let passInfo: DataTemplatePassInfo = new DataTemplatePassInfo();
			passInfo.isHitTestRender = isHitContext;
			passInfo.context = context.getUnderlyingContext();
			passInfo.viewportTop = this.viewport.top;
			passInfo.viewportLeft = this.viewport.left;
			passInfo.viewportWidth = this.viewport.width;
			passInfo.viewportHeight = this.viewport.height;
			passInfo.passID = "Markers";
			let renderInfo: DataTemplateRenderInfo = new DataTemplateRenderInfo();
			renderInfo.isHitTestRender = isHitContext;
			renderInfo.passInfo = passInfo;
			let measureInfo: DataTemplateMeasureInfo = new DataTemplateMeasureInfo();
			measureInfo.passInfo = passInfo;
			let isConstant: boolean = false;
			let cont: any = context.getUnderlyingContext();
			measureInfo.context = cont;
			renderInfo.context = cont;
			let constantWidth: number = 0;
			let constantHeight: number = 0;
			if (this.markerModel.cachedActualMarkerTemplate != null && this.markerModel.cachedActualMarkerTemplate.passStarting != null) {
				this.markerModel.cachedActualMarkerTemplate.passStarting(passInfo);
			}
			for (let i: number = 0; i < this.visibleMarkers.count; i++) {
				let marker = this.visibleMarkers._inner[i];
				if (marker._visibility == Visibility.Collapsed) {
					continue;
				}
				this.setupMarkerAppearance(marker, i, isHitContext);
				if (isHitContext) {
					marker = this._hitMarker;
				}
				if (!isConstant) {
					measureInfo.data = marker.content;
					measureInfo.width = marker.width;
					measureInfo.height = marker.height;
					measureInfo.renderOffsetX = 0;
					measureInfo.renderOffsetY = 0;
					measureInfo.renderContext = context;
					let template = marker.contentTemplate;
					if (template.measure != null) {
						measureInfo.data = marker.content;
						template.measure(measureInfo);
						isConstant = measureInfo.isConstant;
						if (isConstant) {
							constantWidth = measureInfo.width;
							constantHeight = measureInfo.height;
						}
					}
					renderInfo.availableWidth = measureInfo.width;
					renderInfo.availableHeight = measureInfo.height;
					renderInfo.renderOffsetX = measureInfo.renderOffsetX;
					renderInfo.renderOffsetY = measureInfo.renderOffsetY;
					renderInfo.renderContext = context;
				} else {
					renderInfo.availableWidth = constantWidth;
					renderInfo.availableHeight = constantHeight;
				}
				if (!isNaN_(marker.width) && !isInfinity(marker.width)) {
					renderInfo.availableWidth = marker.width;
				}
				if (!isNaN_(marker.height) && !isInfinity(marker.height)) {
					renderInfo.availableHeight = marker.height;
				}
				context.renderContentControl(renderInfo, marker);
				marker.actualWidth = renderInfo.availableWidth;
				marker.actualHeight = renderInfo.availableHeight;
				marker.renderOffsetX = renderInfo.renderOffsetX;
				marker.renderOffsetY = renderInfo.renderOffsetY;
			}
			if (this.markerModel.cachedActualMarkerTemplate != null && this.markerModel.cachedActualMarkerTemplate.passCompleted != null) {
				this.markerModel.cachedActualMarkerTemplate.passCompleted(passInfo);
			}
		}
	}
	initMarkers(Markers: HashPool$2<any, Marker>): void {
		Markers.create = runOn(this, this.markerCreate);
		Markers.destroy = runOn(this, this.markerDestroy);
		Markers.activate = runOn(this, this.markerActivate);
		Markers.disactivate = runOn(this, this.markerDisactivate);
	}
	initMarkers1(Markers: Pool$1<Marker>): void {
		Markers.create = runOn(this, this.markerCreate);
		Markers.destroy = runOn(this, this.markerDestroy);
		Markers.activate = runOn(this, this.markerActivate);
		Markers.disactivate = runOn(this, this.markerDisactivate);
	}
	getHitMarker(point: Point): Marker {
		let hitMarker = this.getHitMarkerWithBuffer(point, 0);
		if (hitMarker == null) {
			hitMarker = this.getHitMarkerWithBuffer(point, SeriesView.hIT_THICKNESS_AUGMENT);
		}
		return hitMarker;
	}
	private getHitMarkerWithBuffer(point: Point, buffer: number): Marker {
		let halfWidth: number;
		let halfHeight: number;
		let offsetX: number;
		let offsetY: number;
		for (let i = this.visibleMarkers.count - 1; i >= 0; i--) {
			let marker = this.visibleMarkers._inner[i];
			if (marker._visibility == Visibility.Collapsed || marker._opacity == 0) {
				continue;
			}
			halfWidth = (marker.actualWidth / 2) + buffer;
			halfHeight = (marker.actualHeight / 2) + buffer;
			offsetX = marker.renderOffsetX;
			offsetY = marker.renderOffsetY;
			if ((marker.canvasLeft + offsetX) - halfWidth <= point.x && (marker.canvasLeft + offsetX) + halfWidth >= point.x && (marker.canvasTop + offsetY) - halfHeight <= point.y && (marker.canvasTop + offsetY) + halfHeight >= point.y) {
				return marker;
			}
		}
		return null;
	}
}

/**
 * @hidden 
 */
export class ChartAxisRangeChangedEventArgs extends EventArgs {
	static $t: Type = markType(ChartAxisRangeChangedEventArgs, 'ChartAxisRangeChangedEventArgs', (<any>EventArgs).$type);
	constructor(chart: SeriesViewer, axis: Axis, oldMinimumValue: number, minimumValue: number, oldMaximumValue: number, maximumValue: number) {
		super();
		this.chart = chart;
		this.axis = axis;
		this.oldMinimumValue = oldMinimumValue;
		this.minimumValue = minimumValue;
		this.oldMaximumValue = oldMaximumValue;
		this.maximumValue = maximumValue;
	}
	private _chart: SeriesViewer = null;
	get chart(): SeriesViewer {
		return this._chart;
	}
	set chart(value: SeriesViewer) {
		this._chart = value;
	}
	private _axis: Axis = null;
	get axis(): Axis {
		return this._axis;
	}
	set axis(value: Axis) {
		this._axis = value;
	}
	private _oldMinimumValue: number = 0;
	get oldMinimumValue(): number {
		return this._oldMinimumValue;
	}
	set oldMinimumValue(value: number) {
		this._oldMinimumValue = value;
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
	}
	private _oldMaximumValue: number = 0;
	get oldMaximumValue(): number {
		return this._oldMaximumValue;
	}
	set oldMaximumValue(value: number) {
		this._oldMaximumValue = value;
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
	}
}


(function(v) { callStaticConstructors(); })(true);
