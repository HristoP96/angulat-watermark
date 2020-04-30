/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MarkerSeries } from "./MarkerSeries";
import { ISupportsErrorBars, ISupportsErrorBars_$type } from "./ISupportsErrorBars";
import { ITrendLineSeries, ITrendLineSeries_$type } from "./ITrendLineSeries";
import { ScatterAxisInfoCache } from "./ScatterAxisInfoCache";
import { NumericXAxis } from "./NumericXAxis";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { NumericYAxis } from "./NumericYAxis";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Series } from "./Series";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { Brush } from "igniteui-core/Brush";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "./CollisionAvoidanceType";
import { Axis } from "./Axis";
import { ScatterErrorBarSettings } from "./ScatterErrorBarSettings";
import { ScatterFrame } from "./ScatterFrame";
import { SeriesView } from "./SeriesView";
import { Base, Point, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, IList$1, IList$1_$type, Type, String_$type, enumGetBox, EnumUtil, Number_$type, typeGetValue, typeCast, fromEnum, Point_$type, markType, PointUtil, runOn } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { SeriesPointOfInterest } from "./SeriesPointOfInterest";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { SeriesViewer } from "./SeriesViewer";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { Marker } from "./Marker";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { Frame } from "./Frame";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { Clipper } from "igniteui-core/Clipper";
import { DataContext } from "igniteui-core/DataContext";
import { OwnedPoint } from "./OwnedPoint";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { AxisRange } from "./AxisRange";
import { SyncLink } from "./SyncLink";
import { ContentControl } from "igniteui-core/ContentControl";
import { MarkerManagerBase } from "./MarkerManagerBase";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { ScatterTrendLineManager } from "./ScatterTrendLineManager";
import { Polyline } from "igniteui-core/Polyline";
import { ErrorBarsHelper } from "./ErrorBarsHelper";
import { IErrorBarCalculator } from "igniteui-core/IErrorBarCalculator";
import { ErrorBarCalculatorType } from "igniteui-core/ErrorBarCalculatorType";
import { NumericAxisBase } from "./NumericAxisBase";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { HashPool$2 } from "igniteui-core/HashPool$2";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Visibility } from "igniteui-core/Visibility";
import { ErrorBarCalculatorReference } from "igniteui-core/ErrorBarCalculatorReference";
import { EnableErrorBars } from "./EnableErrorBars";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { Path } from "igniteui-core/Path";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { Size } from "igniteui-core/Size";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { NumericMarkerManager } from "./NumericMarkerManager";
import { Shape } from "igniteui-core/Shape";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export abstract class ScatterBase extends MarkerSeries implements ISupportsErrorBars, ITrendLineSeries {
	static $t: Type = markType(ScatterBase, 'ScatterBase', (<any>MarkerSeries).$type, [ISupportsErrorBars_$type, ITrendLineSeries_$type]);
	protected createView(): SeriesView {
		return new ScatterBaseView(this);
	}
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.scatterView = <ScatterBaseView>view;
	}
	private _scatterView: ScatterBaseView;
	get scatterView(): ScatterBaseView {
		return this._scatterView;
	}
	set scatterView(value: ScatterBaseView) {
		this._scatterView = value;
	}
	protected get_isScatter(): boolean {
		return true;
	}
	getAxes(): Axis[] {
		return <Axis[]>[ this.xAxis, this.yAxis ];
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == ScatterBase.xMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.xMemberPath);
		}
		if (resolved == ScatterBase.yMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.yMemberPath);
		}
		return null;
	}
	getVisiblePointsOfInterest(points: List$1<SeriesPointOfInterest>, useValueAsLabel: boolean, labelPrecision: number): boolean {
		if (!this.hasMarkers) {
			return false;
		}
		let xAxis = this.xAxis;
		let xParams = new ScalerParams(1, this.seriesViewer.actualWindowRect, this.viewport, xAxis.isInverted);
		xParams.effectiveViewportRect = this.getEffectiveViewport1(this.view);
		let yAxis = this.yAxis;
		let yParams = new ScalerParams(1, this.seriesViewer.actualWindowRect, this.viewport, yAxis.isInverted);
		yParams.effectiveViewportRect = this.getEffectiveViewport1(this.view);
		points.clear();
		this.markerView.doToAllMarkers((m: Marker) => {
			if (m._visibility == Visibility.Visible) {
				let p = new SeriesPointOfInterest();
				let xPos = m.canvasLeft;
				let yPos = m.canvasTop;
				if (xPos < this.viewport.left || xPos > this.viewport.right || yPos < this.viewport.top || yPos > this.viewport.bottom) {
					return;
				}
				p.xValue = xAxis.getUnscaledValue(xPos, xParams);
				p.yValue = yAxis.getUnscaledValue(yPos, yParams);
				p.dataContext = <DataContext>m.content;
				points.add(p);
			}
		});
		return true;
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			if (this.maximumMarkers <= 2000) {
				return SeriesHitTestMode.Computational;
			} else {
				return super.getResolvedHitTestMode();
			}
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	getSeriesValueMarkerBoundingBox(world: Point): Rect {
		if (!this.hasMarkers || !this.shouldDisplayMarkers()) {
			return Rect.empty;
		}
		let marker = this.markerView.getHitMarker(this.fromWorldPosition(world));
		if (marker != null) {
			return this.markerView.getBoundingBoxForMarker(marker);
		}
		return Rect.empty;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	constructor() {
		super();
		this.thumbnailFrame = new ScatterFrame();
		this._cachedWindowRect = Rect.empty;
		this._cachedViewportRect = Rect.empty;
	}
	private _axisInfoCache: ScatterAxisInfoCache = null;
	get axisInfoCache(): ScatterAxisInfoCache {
		return this._axisInfoCache;
	}
	set axisInfoCache(value: ScatterAxisInfoCache) {
		this._axisInfoCache = value;
	}
	get xAxis(): NumericXAxis {
		return <NumericXAxis>this.getValue(ScatterBase.xAxisProperty);
	}
	set xAxis(value: NumericXAxis) {
		this.setValue(ScatterBase.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(ScatterBase.xAxisPropertyName, (<any>NumericXAxis).$type, (<any>ScatterBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(ScatterBase.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(ScatterBase.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(ScatterBase.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(ScatterBase.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>ScatterBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(ScatterBase.yAxisPropertyName, e.oldValue, e.newValue)));
	get xMemberPath(): string {
		return <string>this.getValue(ScatterBase.xMemberPathProperty);
	}
	set xMemberPath(value: string) {
		this.setValue(ScatterBase.xMemberPathProperty, value);
	}
	static readonly xMemberPathPropertyName: string = "XMemberPath";
	static readonly xMemberPathProperty: DependencyProperty = DependencyProperty.register(ScatterBase.xMemberPathPropertyName, String_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(ScatterBase.xMemberPathPropertyName, e.oldValue, e.newValue)));
	get xColumn(): IFastItemColumn$1<number> {
		return this._xColumn;
	}
	set xColumn(value: IFastItemColumn$1<number>) {
		if (this._xColumn != value) {
			let oldXColumn: IFastItemColumn$1<number> = this.xColumn;
			this._xColumn = value;
			this.raisePropertyChanged(ScatterBase.xColumnPropertyName, oldXColumn, this.xColumn);
		}
	}
	private _xColumn: IFastItemColumn$1<number> = null;
	static readonly xColumnPropertyName: string = "XColumn";
	get yMemberPath(): string {
		return <string>this.getValue(ScatterBase.yMemberPathProperty);
	}
	set yMemberPath(value: string) {
		this.setValue(ScatterBase.yMemberPathProperty, value);
	}
	static readonly yMemberPathPropertyName: string = "YMemberPath";
	static readonly yMemberPathProperty: DependencyProperty = DependencyProperty.register(ScatterBase.yMemberPathPropertyName, String_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(ScatterBase.yMemberPathPropertyName, e.oldValue, e.newValue)));
	get yColumn(): IFastItemColumn$1<number> {
		return this._yColumn;
	}
	set yColumn(value: IFastItemColumn$1<number>) {
		if (this._yColumn != value) {
			let oldYColumn: IFastItemColumn$1<number> = this.yColumn;
			this._yColumn = value;
			this.raisePropertyChanged(ScatterBase.yColumnPropertyName, oldYColumn, this.yColumn);
		}
	}
	private _yColumn: IFastItemColumn$1<number> = null;
	static readonly yColumnPropertyName: string = "YColumn";
	get trendLineType(): TrendLineType {
		return EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, this.getValue(ScatterBase.trendLineTypeProperty));
	}
	set trendLineType(value: TrendLineType) {
		this.setValue(ScatterBase.trendLineTypeProperty, enumGetBox<TrendLineType>(TrendLineType_$type, value));
	}
	static readonly trendLineTypeProperty: DependencyProperty = DependencyProperty.register(Series.trendLineTypePropertyName, TrendLineType_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, enumGetBox<TrendLineType>(TrendLineType_$type, TrendLineType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLineTypePropertyName, e.oldValue, e.newValue)));
	get trendLineBrush(): Brush {
		return <Brush>this.getValue(ScatterBase.trendLineBrushProperty);
	}
	set trendLineBrush(value: Brush) {
		this.setValue(ScatterBase.trendLineBrushProperty, value);
	}
	static readonly trendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineBrushPropertyName, (<any>Brush).$type, (<any>ScatterBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLineBrushPropertyName, e.oldValue, e.newValue)));
	get actualTrendLineBrush(): Brush {
		return <Brush>this.getValue(ScatterBase.actualTrendLineBrushProperty);
	}
	set actualTrendLineBrush(value: Brush) {
		this.setValue(ScatterBase.actualTrendLineBrushProperty, value);
	}
	static readonly actualTrendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineActualBrushPropertyName, (<any>Brush).$type, (<any>ScatterBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLineActualBrushPropertyName, e.oldValue, e.newValue)));
	get trendLineThickness(): number {
		return <number>this.getValue(ScatterBase.trendLineThicknessProperty);
	}
	set trendLineThickness(value: number) {
		this.setValue(ScatterBase.trendLineThicknessProperty, value);
	}
	static readonly trendLineThicknessProperty: DependencyProperty = DependencyProperty.register(Series.trendLineThicknessPropertyName, Number_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, 1.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLineThicknessPropertyName, e.oldValue, e.newValue)));
	get trendLineDashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(ScatterBase.trendLineDashCapProperty));
	}
	set trendLineDashCap(value: PenLineCap) {
		this.setValue(ScatterBase.trendLineDashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly trendLineDashCapProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashCapPropertyName, PenLineCap_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLineDashCapPropertyName, e.oldValue, e.newValue)));
	get trendLineDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(ScatterBase.trendLineDashArrayProperty);
	}
	set trendLineDashArray(value: DoubleCollection) {
		this.setValue(ScatterBase.trendLineDashArrayProperty, value);
	}
	static readonly trendLineDashArrayProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>ScatterBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLineDashArrayPropertyName, e.oldValue, e.newValue)));
	get trendLinePeriod(): number {
		return typeGetValue(this.getValue(ScatterBase.trendLinePeriodProperty));
	}
	set trendLinePeriod(value: number) {
		this.setValue(ScatterBase.trendLinePeriodProperty, value);
	}
	static readonly trendLinePeriodProperty: DependencyProperty = DependencyProperty.register(Series.trendLinePeriodPropertyName, Number_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, 7, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLinePeriodPropertyName, e.oldValue, e.newValue)));
	get markerCollisionAvoidance(): CollisionAvoidanceType {
		return EnumUtil.getEnumValue<CollisionAvoidanceType>(CollisionAvoidanceType_$type, this.getValue(ScatterBase.markerCollisionAvoidanceProperty));
	}
	set markerCollisionAvoidance(value: CollisionAvoidanceType) {
		this.setValue(ScatterBase.markerCollisionAvoidanceProperty, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, value));
	}
	static readonly markerCollisionAvoidancePropertyName: string = "MarkerCollisionAvoidance";
	static readonly markerCollisionAvoidanceProperty: DependencyProperty = DependencyProperty.register(ScatterBase.markerCollisionAvoidancePropertyName, CollisionAvoidanceType_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, CollisionAvoidanceType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(ScatterBase.markerCollisionAvoidancePropertyName, e.oldValue, e.newValue)));
	get GetErrorBarsXAxis(): Axis {
		return this.xAxis;
	}
	get GetErrorBarsYAxis(): Axis {
		return this.yAxis;
	}
	static readonly trendLineZIndexProperty: DependencyProperty = DependencyProperty.register(Series.trendLineZIndexPropertyName, Number_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, 1001, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(Series.trendLineZIndexPropertyName, e.oldValue, e.newValue)));
	get trendLineZIndex(): number {
		return typeGetValue(this.getValue(ScatterBase.trendLineZIndexProperty));
	}
	set trendLineZIndex(value: number) {
		this.setValue(ScatterBase.trendLineZIndexProperty, value);
	}
	get maximumMarkers(): number {
		return typeGetValue(this.getValue(ScatterBase.maximumMarkersProperty));
	}
	set maximumMarkers(value: number) {
		this.setValue(ScatterBase.maximumMarkersProperty, value);
	}
	static readonly maximumMarkersPropertyName: string = "MaximumMarkers";
	static readonly maximumMarkersProperty: DependencyProperty = DependencyProperty.register(ScatterBase.maximumMarkersPropertyName, Number_$type, (<any>ScatterBase).$type, new PropertyMetadata(2, 400, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(ScatterBase.maximumMarkersPropertyName, e.oldValue, e.newValue)));
	invalidateAxes(): void {
		super.invalidateAxes();
		if (this.xAxis != null) {
			this.xAxis.renderAxis1(false);
		}
		if (this.yAxis != null) {
			this.yAxis.renderAxis1(false);
		}
	}
	get errorBarSettings(): ScatterErrorBarSettings {
		return <ScatterErrorBarSettings>this.getValue(ScatterBase.errorBarSettingsProperty);
	}
	set errorBarSettings(value: ScatterErrorBarSettings) {
		this.setValue(ScatterBase.errorBarSettingsProperty, value);
	}
	private static readonly errorBarSettingsPropertyName: string = "ErrorBarSettings";
	static readonly errorBarSettingsProperty: DependencyProperty = DependencyProperty.register(ScatterBase.errorBarSettingsPropertyName, (<any>ScatterErrorBarSettings).$type, (<any>ScatterBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterBase>sender).raisePropertyChanged(ScatterBase.errorBarSettingsPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.scatterView.trendLineManager.propertyUpdated(sender, propertyName, oldValue, newValue)) {
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
		}
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.xColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.yColumn);
				this.xColumn = null;
				this.yColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				this.xColumn = this.registerDoubleColumn(this.xMemberPath);
				this.yColumn = this.registerDoubleColumn(this.yMemberPath);
			}
			if ((this.yAxis != null && !this.yAxis.updateRange()) || (this.xAxis != null && !this.xAxis.updateRange())) {
				this.renderSeries(false);
			}
			break;

			case ScatterBase.xAxisPropertyName:
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			if ((this.xAxis != null && !this.xAxis.updateRange()) || (newValue == null && oldValue != null)) {
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterBase.yAxisPropertyName:
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			if ((this.yAxis != null && !this.yAxis.updateRange()) || (newValue == null && oldValue != null)) {
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterBase.xMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.xColumn);
				this.xColumn = this.registerDoubleColumn(this.xMemberPath);
			}
			break;

			case ScatterBase.xColumnPropertyName:
			this.scatterView.trendLineManager.reset();
			if (this.xAxis != null && !this.xAxis.updateRange()) {
				this.renderSeries(false);
			}
			break;

			case ScatterBase.yMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.yColumn);
				this.yColumn = this.registerDoubleColumn(this.yMemberPath);
			}
			break;

			case ScatterBase.yColumnPropertyName:
			this.scatterView.trendLineManager.reset();
			if (this.yAxis != null && !this.yAxis.updateRange()) {
				this.renderSeries(false);
			}
			break;

			case ScatterBase.markerCollisionAvoidancePropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterBase.maximumMarkersPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.transitionProgressPropertyName:
			this.transitionFrame.interpolate2(<number>this.transitionProgress, this.previousFrame, this.currentFrame);
			this.cacheViewInfo();
			try {
				if (this.clearAndAbortIfInvalid1(this.view)) {
					return;
				}
				if ((Math.round(this.transitionProgress * 100000) / 100000) == 1) {
					this.renderFrame(this.currentFrame, this.scatterView);
				} else {
					this.renderFrame(this.transitionFrame, this.scatterView);
				}
				if (this.seriesViewer != null) {
					this.seriesViewer.raiseSeriesAnimating(this);
				}
			}
			finally {
				this.unCacheViewInfo();
			}
			break;

			case Series.trendLineBrushPropertyName:
			this.updateIndexedProperties();
			break;

			case ScatterBase.errorBarSettingsPropertyName:
			if (this.errorBarSettings != null) {
				this.errorBarSettings.series = this;
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.trendLineTypePropertyName:
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
		if (typeCast<NumericXAxis>((<any>NumericXAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	private unCacheViewInfo(): void {
		this._cachedViewportRect = Rect.empty;
		this._cachedWindowRect = Rect.empty;
	}
	private _cachedViewportRect: Rect = null;
	private _cachedWindowRect: Rect = null;
	private cacheViewInfo(): void {
		let $ret = this.getViewInfo(this._cachedViewportRect, this._cachedWindowRect);
		this._cachedViewportRect = $ret.p0;
		this._cachedWindowRect = $ret.p1;
	}
	protected mustReact(propertyName: string, action: FastItemsSourceEventAction): boolean {
		if (action != FastItemsSourceEventAction.Change) {
			return true;
		}
		if (propertyName == null) {
			return true;
		}
		if (this.xMemberPath == propertyName || this.yMemberPath == propertyName) {
			return true;
		}
		return false;
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		let refresh: boolean = false;
		if (!this.mustReact(propertyName, action)) {
			return;
		}
		this.scatterView.trendLineManager.dataUpdated(action, position, count, propertyName);
		if (this.xAxis != null && !this.xAxis.updateRange()) {
			refresh = true;
		}
		if (this.yAxis != null && !this.yAxis.updateRange()) {
			refresh = true;
		}
		if (refresh) {
			this.renderSeries(true);
		}
	}
	prepLinePoints(frame: ScatterFrame): void {
		this.prepLinePoints1(frame, null);
	}
	prepLinePoints1(frame: ScatterFrame, clipper: Clipper): void {
		let xCount: number = this.xColumn != null ? this.xColumn.count : 0;
		let yCount: number = this.yColumn != null ? this.yColumn.count : 0;
		let count: number = Math.min(xCount, yCount);
		if (count <= this.maximumMarkers) {
			frame.points.clear();
			let linePoints: List$1<OwnedPoint> = new List$1<OwnedPoint>((<any>OwnedPoint).$type, 0);
			for (let point of fromEnum<OwnedPoint>(frame.linePoints.values)) {
				linePoints.add(point);
			}
			let fastItemsSource: IFastItemsSource = this.fastItemsSource;
			linePoints.sort2((p1: OwnedPoint, p2: OwnedPoint) => {
				let index1 = fastItemsSource.indexOf(p1.ownerItem);
				let index2 = fastItemsSource.indexOf(p2.ownerItem);
				if (index1 < index2) {
					return -1;
				}
				if (index1 > index2) {
					return 1;
				}
				return 0;
			});
			if (clipper != null) {
				clipper.target = frame.points;
			}
			for (let point1 of fromEnum<OwnedPoint>(linePoints)) {
				if (fastItemsSource.indexOf(point1.ownerItem) >= 0) {
					if (clipper != null) {
						clipper.add(point1.point);
					} else {
						frame.points.add(<Point>{ $type: Point_$type, x: point1.point.x, y: point1.point.y });
					}
				}
			}
		}
	}
	getRange(axis: Axis): AxisRange {
		if (axis != null && axis == this.xAxis && this.xColumn != null) {
			return new AxisRange(this.xColumn.minimum, this.xColumn.maximum);
		}
		if (axis != null && axis == this.yAxis && this.yColumn != null) {
			return new AxisRange(this.yColumn.minimum, this.yColumn.maximum);
		}
		return null;
	}
	getItem(world: Point): any {
		return null;
	}
	getItemIndex(world: Point): number {
		return -1;
	}
	scrollIntoView(item: any): boolean {
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.seriesViewer != null ? this.seriesViewer.viewportRect : Rect.empty;
		let unitRect: Rect = new Rect(0, 0, 0, 1, 1);
		let effectiveViewportRect = this.getEffectiveViewportForUnitViewport(this.view);
		let xParams: ScalerParams = new ScalerParams(0, unitRect, unitRect, this.xAxis.isInverted, effectiveViewportRect);
		let yParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, unitRect, unitRect, this.yAxis.isInverted, effectiveViewportRect);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		let cx: number = this.xAxis != null && this.xColumn != null && index < this.xColumn.count ? this.xAxis.getScaledValue(this.xColumn.item(index), xParams) : NaN;
		let cy: number = this.yAxis != null && this.yColumn != null && index < this.yColumn.count ? this.yAxis.getScaledValue(this.yColumn.item(index), yParams) : NaN;
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
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.renderSeries(false);
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(false);
	}
	previousFrame: ScatterFrame = null;
	transitionFrame: ScatterFrame = null;
	currentFrame: ScatterFrame = null;
	calculateCachedPoints(view: ScatterBaseView, frame: ScatterFrame, count: number, windowRect: Rect, viewportRect: Rect): void {
		frame.cachedPoints = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 1, count);
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let itemsSource: IFastItemsSource = this.fastItemsSource;
		let x: number;
		let y: number;
		let xParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.xAxisIsInverted, effectiveViewportRect);
			$ret.effectiveViewportRect = this.getEffectiveViewport1(view);
			return $ret;
		})());
		let yParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, this.axisInfoCache.yAxisIsInverted, effectiveViewportRect);
			$ret.effectiveViewportRect = this.getEffectiveViewport1(view);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		for (let i: number = 0; i < count; i++) {
			x = this.xColumn.item(i);
			y = this.yColumn.item(i);
			let point: Point = <Point>{ $type: Point_$type, x: this.axisInfoCache.xAxis.getScaledValue(x, xParams), y: this.axisInfoCache.yAxis.getScaledValue(y, yParams) };
			if (!isInfinity(point.x) && !isInfinity(point.y)) {
				let item: any = itemsSource.item(i);
				if (!frame.cachedPoints.containsKey(item)) {
					let columnValues = <Point>{ $type: Point_$type, x: x, y: y };
					let p = <Point>{ $type: Point_$type, x: point.x, y: point.y };
					frame.cachedPoints.addItem(item, ((() => {
						let $ret = new OwnedPoint();
						$ret.ownerItem = item;
						$ret.columnValues = columnValues;
						$ret.point = p;
						return $ret;
					})()));
				}
			}
		}
	}
	prepareFrame(frame: ScatterFrame, view: ScatterBaseView): void {
		frame.markers.clear();
		frame.trendLine.clear();
		frame.horizontalErrorBars.clear();
		frame.verticalErrorBars.clear();
		frame.horizontalErrorBarWidths.clear();
		frame.verticalErrorBarHeights.clear();
		let count: number = Math.min(this.xColumn != null ? this.xColumn.count : 0, this.yColumn != null ? this.yColumn.count : 0);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
		xParams.effectiveViewportRect = this.getEffectiveViewport1(view);
		let yParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		;
		yParams.effectiveViewportRect = this.getEffectiveViewport1(view);
		if (count < 1) {
			return;
		}
		this.axisInfoCache = ((() => {
			let $ret = new ScatterAxisInfoCache();
			$ret.xAxis = this.xAxis;
			$ret.yAxis = this.yAxis;
			$ret.xAxisIsInverted = this.xAxis.isInverted;
			$ret.yAxisIsInverted = this.yAxis.isInverted;
			$ret.fastItemsSource = this.fastItemsSource;
			return $ret;
		})());
		let scatterView: ScatterBaseView = <ScatterBaseView>view;
		if (count <= this.maximumMarkers) {
			this.calculateCachedPoints(scatterView, frame, count, windowRect, viewportRect);
		}
		if (this.shouldDisplayMarkers()) {
			view.markerManager.winnowMarkers(frame.markers, this.maximumMarkers, windowRect, viewportRect, this.resolution);
		}
		let clipper: Clipper = ((() => {
			let $ret = new Clipper(0, viewportRect, false);
			$ret.target = frame.trendLine;
			return $ret;
		})());
		let contentViewport = this.getContentViewport(view);
		let xmin: number = this.xAxis.getUnscaledValue(contentViewport.left, xParams);
		let xmax: number = this.xAxis.getUnscaledValue(contentViewport.right, xParams);
		view.trendLineManager.prepareLine(frame.trendLine, this.trendLineType, this.xColumn, this.yColumn, this.trendLinePeriod, (x: number) => this.xAxis.getScaledValue(x, xParams), (y: number) => this.yAxis.getScaledValue(y, yParams), ((() => {
			let $ret = new TrendResolutionParams();
			$ret.resolution = this.resolution;
			$ret.viewport = viewportRect;
			$ret.window = windowRect;
			return $ret;
		})()), clipper, xmin, xmax);
		this.prepareErrorBars(frame, view);
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let scatterView = <ScatterBaseView>view;
		scatterView.clearRendering(wipeClean);
	}
	renderFrame(frame: ScatterFrame, view: ScatterBaseView): void {
		let viewportRect: Rect = view.viewport;
		this.axisInfoCache = ((() => {
			let $ret = new ScatterAxisInfoCache();
			$ret.xAxis = this.xAxis;
			$ret.yAxis = this.yAxis;
			$ret.xAxisIsInverted = this.xAxis.isInverted;
			$ret.yAxisIsInverted = this.yAxis.isInverted;
			return $ret;
		})());
		if (this.shouldDisplayMarkers()) {
			view.markerManager.render(frame.markers, this.useLightweightMarkers);
		}
		view.renderMarkers();
		let clipper: Clipper = ((() => {
			let $ret = new Clipper(1, NaN, viewportRect.bottom, NaN, viewportRect.top, false);
			$ret.target = view.trendLineManager.trendPolyline.points;
			return $ret;
		})());
		view.trendLineManager.rasterizeTrendLine1(frame.trendLine, clipper);
		this.renderErrorBars(frame, view);
	}
	prepareErrorBars(frame: ScatterFrame, view: ScatterBaseView): void {
		let errorBarsHelper: ErrorBarsHelper = new ErrorBarsHelper(this, view);
		if (this.errorBarSettings == null) {
			return;
		}
		let horizontalCalculator: IErrorBarCalculator = this.errorBarSettings.horizontalCalculator;
		let verticalCalculator: IErrorBarCalculator = this.errorBarSettings.verticalCalculator;
		let errorBarPositionX: number = 0;
		let errorBarPositionY: number = 0;
		let errorBarPositiveSize: number = 0;
		let errorBarNegativeSize: number = 0;
		for (let key of fromEnum<any>(frame.markers.keys)) {
			let point: OwnedPoint = frame.markers.item(key);
			if (horizontalCalculator != null) {
				switch (horizontalCalculator.getCalculatorType()) {
					case ErrorBarCalculatorType.Percentage:
					let $ret = this.preparePercentageErrorBarSize(point, errorBarsHelper, horizontalCalculator, errorBarPositiveSize, errorBarNegativeSize, true);
					errorBarPositiveSize = $ret.p3;
					errorBarNegativeSize = $ret.p4;
					break;

					case ErrorBarCalculatorType.Fixed:
					let $ret1 = this.prepareFixedErrorBarSize(point, errorBarsHelper, horizontalCalculator, errorBarPositiveSize, errorBarNegativeSize, true);
					errorBarPositiveSize = $ret1.p3;
					errorBarNegativeSize = $ret1.p4;
					break;

					case ErrorBarCalculatorType.Data:
					let $ret2 = this.prepareDataErrorBarSize(point, errorBarsHelper, horizontalCalculator, key, errorBarPositiveSize, errorBarNegativeSize, true);
					errorBarPositiveSize = $ret2.p4;
					errorBarNegativeSize = $ret2.p5;
					break;

					case ErrorBarCalculatorType.StandardDeviation:
					let $ret3 = this.prepareStandardDevErrorBarSize(errorBarsHelper, horizontalCalculator, errorBarPositionX, errorBarPositiveSize, errorBarNegativeSize, true);
					errorBarPositionX = $ret3.p2;
					errorBarPositiveSize = $ret3.p3;
					errorBarNegativeSize = $ret3.p4;
					break;

					case ErrorBarCalculatorType.StandardError:
					let $ret4 = this.prepareFixedErrorBarSize(point, errorBarsHelper, horizontalCalculator, errorBarPositiveSize, errorBarNegativeSize, true);
					errorBarPositiveSize = $ret4.p3;
					errorBarNegativeSize = $ret4.p4;
					break;

				}

				;
				let p: OwnedPoint = new OwnedPoint();
				p.point = errorBarsHelper.calculateErrorBarCenterHorizontal(horizontalCalculator, this.axisInfoCache.xAxis, point.point, errorBarPositionX);
				;
				p.ownerItem = point.ownerItem;
				frame.horizontalErrorBars.addItem(key, p);
				frame.horizontalErrorBarWidths.addItem(key, <number[]>[ errorBarPositiveSize, errorBarNegativeSize ]);
			}
			if (verticalCalculator != null) {
				switch (verticalCalculator.getCalculatorType()) {
					case ErrorBarCalculatorType.Percentage:
					let $ret5 = this.preparePercentageErrorBarSize(point, errorBarsHelper, verticalCalculator, errorBarPositiveSize, errorBarNegativeSize, false);
					errorBarPositiveSize = $ret5.p3;
					errorBarNegativeSize = $ret5.p4;
					break;

					case ErrorBarCalculatorType.Fixed:
					let $ret6 = this.prepareFixedErrorBarSize(point, errorBarsHelper, verticalCalculator, errorBarPositiveSize, errorBarNegativeSize, false);
					errorBarPositiveSize = $ret6.p3;
					errorBarNegativeSize = $ret6.p4;
					break;

					case ErrorBarCalculatorType.Data:
					let $ret7 = this.prepareDataErrorBarSize(point, errorBarsHelper, verticalCalculator, key, errorBarPositiveSize, errorBarNegativeSize, false);
					errorBarPositiveSize = $ret7.p4;
					errorBarNegativeSize = $ret7.p5;
					break;

					case ErrorBarCalculatorType.StandardDeviation:
					let $ret8 = this.prepareStandardDevErrorBarSize(errorBarsHelper, verticalCalculator, errorBarPositionY, errorBarPositiveSize, errorBarNegativeSize, false);
					errorBarPositionY = $ret8.p2;
					errorBarPositiveSize = $ret8.p3;
					errorBarNegativeSize = $ret8.p4;
					break;

					case ErrorBarCalculatorType.StandardError:
					let $ret9 = this.prepareFixedErrorBarSize(point, errorBarsHelper, verticalCalculator, errorBarPositiveSize, errorBarNegativeSize, false);
					errorBarPositiveSize = $ret9.p3;
					errorBarNegativeSize = $ret9.p4;
					break;

				}

				;
				let p1: OwnedPoint = new OwnedPoint();
				p1.point = errorBarsHelper.calculateErrorBarCenterVertical(verticalCalculator, this.axisInfoCache.yAxis, point.point, errorBarPositionY);
				;
				p1.ownerItem = point.ownerItem;
				frame.verticalErrorBars.addItem(key, p1);
				frame.verticalErrorBarHeights.addItem(key, <number[]>[ errorBarPositiveSize, errorBarNegativeSize ]);
			}
		}
	}
	preparePercentageErrorBarSize(point: OwnedPoint, helper: ErrorBarsHelper, calculator: IErrorBarCalculator, positiveSize: number, negativeSize: number, horizontal: boolean): { p3?: number; p4?: number; } {
		if (horizontal) {
			let value: number;
			let refAxis: NumericAxisBase, targetAxis: NumericAxisBase;
			targetAxis = this.axisInfoCache.xAxis;
			if (this.errorBarSettings.horizontalCalculatorReference == ErrorBarCalculatorReference.X) {
				value = point.point.x;
				refAxis = this.axisInfoCache.xAxis;
			} else {
				value = point.point.y;
				refAxis = this.axisInfoCache.yAxis;
			}
			let $ret = helper.calculateDependentErrorBarSize(value, calculator, refAxis, targetAxis, positiveSize, negativeSize);
			positiveSize = $ret.p4;
			negativeSize = $ret.p5;
		} else {
			let value1: number;
			let refAxis1: NumericAxisBase, targetAxis1: NumericAxisBase;
			targetAxis1 = this.axisInfoCache.yAxis;
			if (this.errorBarSettings.verticalCalculatorReference == ErrorBarCalculatorReference.X) {
				value1 = point.point.x;
				refAxis1 = this.axisInfoCache.xAxis;
			} else {
				value1 = point.point.y;
				refAxis1 = this.axisInfoCache.yAxis;
			}
			let $ret1 = helper.calculateDependentErrorBarSize(value1, calculator, refAxis1, targetAxis1, positiveSize, negativeSize);
			positiveSize = $ret1.p4;
			negativeSize = $ret1.p5;
		}
		return {
			p3: positiveSize,
			p4: negativeSize

		};
	}
	prepareFixedErrorBarSize(point: OwnedPoint, helper: ErrorBarsHelper, calculator: IErrorBarCalculator, positiveSize: number, negativeSize: number, horizontal: boolean): { p3?: number; p4?: number; } {
		if (horizontal) {
			let $ret = helper.calculateIndependentErrorBarSize(point.point.x, calculator, this.axisInfoCache.xAxis, positiveSize, negativeSize);
			positiveSize = $ret.p3;
			negativeSize = $ret.p4;
		} else {
			let $ret1 = helper.calculateIndependentErrorBarSize(point.point.y, calculator, this.axisInfoCache.yAxis, positiveSize, negativeSize);
			positiveSize = $ret1.p3;
			negativeSize = $ret1.p4;
		}
		return {
			p3: positiveSize,
			p4: negativeSize

		};
	}
	prepareDataErrorBarSize(point: OwnedPoint, helper: ErrorBarsHelper, calculator: IErrorBarCalculator, key: any, positiveSize: number, negativeSize: number, horizontal: boolean): { p4?: number; p5?: number; } {
		let errorColumn: IFastItemColumn$1<number> = calculator.getItemColumn();
		let index: number = this.fastItemsSource.indexOf(key);
		if (errorColumn != null && index < errorColumn.count) {
			let unscaledValue: number = errorColumn.item(index);
			if (horizontal) {
				let $ret = helper.calculateFromUnscaledErrorBarValue(point.point.x, unscaledValue, this.axisInfoCache.xAxis, positiveSize, negativeSize);
				positiveSize = $ret.p3;
				negativeSize = $ret.p4;
			} else {
				let $ret1 = helper.calculateFromUnscaledErrorBarValue(point.point.y, unscaledValue, this.axisInfoCache.yAxis, positiveSize, negativeSize);
				positiveSize = $ret1.p3;
				negativeSize = $ret1.p4;
			}
		} else {
			positiveSize = negativeSize = NaN;
		}
		return {
			p4: positiveSize,
			p5: negativeSize

		};
	}
	prepareStandardDevErrorBarSize(helper: ErrorBarsHelper, calculator: IErrorBarCalculator, position: number, positiveSize: number, negativeSize: number, horizontal: boolean): { p2?: number; p3?: number; p4?: number; } {
		let $ret = helper.calculateIndependentErrorBarPosition(calculator, position);
		position = $ret.p1;
		if (horizontal) {
			let $ret1 = helper.calculateStdDevErrorBarSize(position, calculator, this.axisInfoCache.xAxis, positiveSize, negativeSize);
			positiveSize = $ret1.p3;
			negativeSize = $ret1.p4;
		} else {
			let $ret2 = helper.calculateStdDevErrorBarSize(position, calculator, this.axisInfoCache.yAxis, positiveSize, negativeSize);
			positiveSize = $ret2.p3;
			negativeSize = $ret2.p4;
		}
		return {
			p2: position,
			p3: positiveSize,
			p4: negativeSize

		};
	}
	renderErrorBars(frame: ScatterFrame, view: ScatterBaseView): void {
		if (!view.hasSurface() || this.errorBarSettings == null) {
			view.hideErrorBars();
			return;
		}
		this.renderErrorBarsHorizontal(frame, view);
		this.renderErrorBarsVertical(frame, view);
	}
	private renderErrorBarsHorizontal(frame: ScatterFrame, view: ScatterBaseView): void {
		view.attachHorizontalErrorBars();
		let errorBarsHelper: ErrorBarsHelper = new ErrorBarsHelper(this, view);
		let horizontalErrorBarsGeometry: PathGeometry = new PathGeometry();
		let horizontalCalculator: IErrorBarCalculator = this.errorBarSettings.horizontalCalculator;
		for (let key of fromEnum<any>(frame.markers.keys)) {
			if (horizontalCalculator != null && frame.horizontalErrorBarWidths.containsKey(key)) {
				let errorBarPositiveSize: number = frame.horizontalErrorBarWidths.item(key)[0];
				let errorBarNegativeSize: number = frame.horizontalErrorBarWidths.item(key)[1];
				if (!isNaN_(errorBarPositiveSize) && !isNaN_(errorBarNegativeSize)) {
					let centerHorizontal: Point = frame.horizontalErrorBars.item(key).point;
					if (this.errorBarSettings.enableErrorBarsHorizontal == EnableErrorBars.Both || this.errorBarSettings.enableErrorBarsHorizontal == EnableErrorBars.Positive) {
						errorBarsHelper.addErrorBarHorizontal(horizontalErrorBarsGeometry, centerHorizontal, errorBarPositiveSize, true);
					}
					if (this.errorBarSettings.enableErrorBarsHorizontal == EnableErrorBars.Both || this.errorBarSettings.enableErrorBarsHorizontal == EnableErrorBars.Negative) {
						errorBarsHelper.addErrorBarHorizontal(horizontalErrorBarsGeometry, centerHorizontal, errorBarNegativeSize, false);
					}
				}
			}
		}
		view.provideHorizontalErrorBarGeometry(horizontalErrorBarsGeometry);
	}
	private renderErrorBarsVertical(frame: ScatterFrame, view: ScatterBaseView): void {
		view.attachVerticalErrorBars();
		let errorBarsHelper: ErrorBarsHelper = new ErrorBarsHelper(this, view);
		let verticalErrorBarsGeometry: PathGeometry = new PathGeometry();
		let verticalCalculator: IErrorBarCalculator = this.errorBarSettings.verticalCalculator;
		for (let key of fromEnum<any>(frame.markers.keys)) {
			if (verticalCalculator != null && frame.verticalErrorBarHeights.containsKey(key)) {
				let errorBarPositiveSize: number = frame.verticalErrorBarHeights.item(key)[0];
				let errorBarNegativeSize: number = frame.verticalErrorBarHeights.item(key)[1];
				if (!isNaN_(errorBarPositiveSize) && !isNaN_(errorBarNegativeSize)) {
					let centerVertical: Point = frame.verticalErrorBars.item(key).point;
					if (this.errorBarSettings.enableErrorBarsVertical == EnableErrorBars.Both || this.errorBarSettings.enableErrorBarsVertical == EnableErrorBars.Positive) {
						errorBarsHelper.addErrorBarVertical(verticalErrorBarsGeometry, centerVertical, errorBarPositiveSize, true);
					}
					if (this.errorBarSettings.enableErrorBarsVertical == EnableErrorBars.Both || this.errorBarSettings.enableErrorBarsVertical == EnableErrorBars.Negative) {
						errorBarsHelper.addErrorBarVertical(verticalErrorBarsGeometry, centerVertical, errorBarNegativeSize, false);
					}
				}
			}
		}
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		if (!super.validateSeries(viewportRect, windowRect, view) || windowRect.isEmpty || viewportRect.isEmpty || this.xAxis == null || this.yAxis == null || this.xAxis.seriesViewer == null || this.yAxis.seriesViewer == null || this.xColumn == null || this.yColumn == null || this.xColumn.count == 0 || this.yColumn.count == 0 || this.fastItemsSource == null || this.fastItemsSource.count != this.xColumn.count || this.fastItemsSource.count != this.yColumn.count || this.xAxis.seriesViewer == null || this.yAxis.seriesViewer == null || this.xAxis.actualMinimumValue == this.xAxis.actualMaximumValue || this.yAxis.actualMinimumValue == this.yAxis.actualMaximumValue) {
			isValid = false;
		}
		return isValid;
	}
	getViewInfo(viewportRect: Rect, windowRect: Rect): { p0: Rect; p1: Rect; } {
		if (!this._cachedViewportRect.isEmpty && !this._cachedWindowRect.isEmpty) {
			viewportRect = this._cachedViewportRect;
			windowRect = this._cachedWindowRect;
			return {
				p0: viewportRect,
				p1: windowRect

			};
		}
		viewportRect = this.view.viewport;
		windowRect = this.view.windowRect;
		return {
			p0: viewportRect,
			p1: windowRect

		};
	}
	renderSeriesOverride(animate: boolean): void {
		this.cacheViewInfo();
		try {
			if (this.clearAndAbortIfInvalid1(this.view)) {
				return;
			}
			if (this.fastItemsSource != null && this.fastItemsSource.count > this.maximumMarkers) {
				animate = false;
			}
			if (this.shouldAnimate(animate) && !this.skipPrepare) {
				let previous: ScatterFrame = this.previousFrame;
				if (this.animationActive()) {
					if (this.animator.needsFlush) {
						this.animator.flush();
					}
					this.previousFrame = this.transitionFrame;
					this.transitionFrame = previous;
				} else {
					this.previousFrame = this.currentFrame;
					this.currentFrame = previous;
				}
				this.prepareFrame(this.currentFrame, this.scatterView);
				this.startAnimation();
			} else {
				if (!this.skipPrepare) {
					this.prepareFrame(this.currentFrame, this.scatterView);
				}
				this.renderFrame(this.currentFrame, this.scatterView);
			}
		}
		finally {
			this.unCacheViewInfo();
		}
	}
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.index < 0) {
			return;
		}
		this.scatterView.updateTrendlineBrush();
	}
	private _thumbnailFrame: ScatterFrame = null;
	get thumbnailFrame(): ScatterFrame {
		return this._thumbnailFrame;
	}
	set thumbnailFrame(value: ScatterFrame) {
		this._thumbnailFrame = value;
	}
	renderThumbnail(viewportRect: Rect, surface: RenderSurface): void {
		super.renderThumbnail(viewportRect, surface);
		if (!this.thumbnailDirty) {
			this.view.prepSurface(surface);
			return;
		}
		this.view.prepSurface(surface);
		if (this.clearAndAbortIfInvalid1(this.thumbnailView)) {
			return;
		}
		let thumbnailView: ScatterBaseView = typeCast<ScatterBaseView>((<any>ScatterBaseView).$type, this.thumbnailView);
		if (!this.skipThumbnailPrepare) {
			this.thumbnailFrame = new ScatterFrame();
			this.prepareFrame(this.thumbnailFrame, thumbnailView);
		}
		this.skipThumbnailPrepare = false;
		this.renderFrame(this.thumbnailFrame, thumbnailView);
		this.thumbnailDirty = false;
	}
	private _alternateFrame: ScatterFrame = null;
	private get alternateFrame(): ScatterFrame {
		return this._alternateFrame;
	}
	private set alternateFrame(value: ScatterFrame) {
		this._alternateFrame = value;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let scatterSeriesView: ScatterBaseView = <ScatterBaseView>view;
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(scatterSeriesView)) {
			return;
		}
		if (this.alternateFrame == null) {
			this.alternateFrame = new ScatterFrame();
		}
		this.prepareFrame(this.alternateFrame, scatterSeriesView);
		this.renderFrame(this.alternateFrame, scatterSeriesView);
	}
	removeUnusedMarkers(list: IDictionary$2<any, OwnedPoint>, markers: HashPool$2<any, Marker>): void {
		let remove: List$1<any> = new List$1<any>((<any>Base).$type, 0);
		for (let key of fromEnum<any>(markers.activeKeys)) {
			if (!list.containsKey(key)) {
				remove.add1(key);
			}
		}
		for (let key1 of fromEnum<any>(remove)) {
			markers.remove(key1);
		}
	}
	getMarkerLocations(view: ScatterBaseView, markers: HashPool$2<any, Marker>, locations: Point[], windowRect: Rect, viewportRect: Rect): Point[] {
		if (locations == null || locations.length != this.axisInfoCache.fastItemsSource.count) {
			locations = <Point[]>new Array(this.axisInfoCache.fastItemsSource.count);
			for (let i: number = 0; i < this.axisInfoCache.fastItemsSource.count; i++) {
				locations[i] = PointUtil.create();
			}
		}
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, this.xAxis.isInverted, effectiveViewportRect);
			$ret.effectiveViewportRect = this.getEffectiveViewport1(view);
			return $ret;
		})());
		let yParams: ScalerParams = ((() => {
			let $ret = new ScalerParams(0, windowRect, viewportRect, this.yAxis.isInverted, effectiveViewportRect);
			$ret.effectiveViewportRect = this.getEffectiveViewport1(view);
			$ret.referenceValue = this.getReferenceValue();
			return $ret;
		})());
		let contentViewport: Rect = this.getContentViewport(view);
		let minX: number = this.axisInfoCache.xAxis.getUnscaledValue(contentViewport.left, xParams);
		let maxX: number = this.axisInfoCache.xAxis.getUnscaledValue(contentViewport.right, xParams);
		let minY: number = this.axisInfoCache.yAxis.getUnscaledValue(contentViewport.bottom, yParams);
		let maxY: number = this.axisInfoCache.yAxis.getUnscaledValue(contentViewport.top, yParams);
		if (this.axisInfoCache.xAxisIsInverted) {
			let swap: number = minX;
			minX = maxX;
			maxX = swap;
		}
		if (this.axisInfoCache.yAxisIsInverted) {
			let swap1: number = minY;
			minY = maxY;
			maxY = swap1;
		}
		let cache: ScatterAxisInfoCache = this.axisInfoCache;
		let xAxis: NumericXAxis = cache.xAxis;
		let yAxis: NumericYAxis = cache.yAxis;
		let x: number;
		let y: number;
		let xColumn = this.xColumn;
		let yColumn = this.yColumn;
		for (let i1: number = 0; i1 < this.axisInfoCache.fastItemsSource.count; i1++) {
			x = xColumn.item(i1);
			y = yColumn.item(i1);
			if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
				locations[i1].x = xAxis.getScaledValue(x, xParams);
				locations[i1].y = yAxis.getScaledValue(y, yParams);
			} else {
				locations[i1].x = NaN;
				locations[i1].y = NaN;
			}
		}
		return locations;
	}
	getActiveIndexes(markers: HashPool$2<any, Marker>, indexes: List$1<number>): List$1<number> {
		if (indexes == null) {
			indexes = new List$1<number>(Number_$type, 2, markers.activeCount);
		} else {
			indexes.clear();
		}
		let i: number = 0;
		let source: IFastItemsSource = this.fastItemsSource;
		for (let key of fromEnum<any>(markers.activeKeys)) {
			indexes.add(source.indexOf(key));
		}
		return indexes;
	}
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		this.seriesVisualDataManager.exportTrendlineData(this, svd, this.scatterView.trendLineManager.trendPolyline);
	}
	getReferenceValue(): number {
		return Series.getReferenceValue1(this.yColumn, null);
	}
}

/**
 * @hidden 
 */
export class ScatterBaseView extends MarkerSeriesView {
	static $t: Type = markType(ScatterBaseView, 'ScatterBaseView', (<any>MarkerSeriesView).$type);
	private _markerManager: MarkerManagerBase = null;
	get markerManager(): MarkerManagerBase {
		return this._markerManager;
	}
	set markerManager(value: MarkerManagerBase) {
		this._markerManager = value;
	}
	private _locations: Point[] = null;
	protected get locations(): Point[] {
		return this._locations;
	}
	protected set locations(value: Point[]) {
		this._locations = value;
	}
	private _scatterModel: ScatterBase = null;
	protected get scatterModel(): ScatterBase {
		return this._scatterModel;
	}
	protected set scatterModel(value: ScatterBase) {
		this._scatterModel = value;
	}
	private _indexes: List$1<number> = null;
	protected get indexes(): List$1<number> {
		return this._indexes;
	}
	protected set indexes(value: List$1<number>) {
		this._indexes = value;
	}
	constructor(model: ScatterBase) {
		super(model);
		this.scatterModel = model;
		this.markers = new HashPool$2<any, Marker>((<any>Base).$type, (<any>Marker).$type);
		this.initMarkers(this.markers);
		this.trendLineManager = new ScatterTrendLineManager();
	}
	private _horizontalErrorBarsPath: Path = null;
	private get horizontalErrorBarsPath(): Path {
		return this._horizontalErrorBarsPath;
	}
	private set horizontalErrorBarsPath(value: Path) {
		this._horizontalErrorBarsPath = value;
	}
	private _verticalErrorBarsPath: Path = null;
	private get verticalErrorBarsPath(): Path {
		return this._verticalErrorBarsPath;
	}
	private set verticalErrorBarsPath(value: Path) {
		this._verticalErrorBarsPath = value;
	}
	private _trendLineManager: ScatterTrendLineManager = null;
	get trendLineManager(): ScatterTrendLineManager {
		return this._trendLineManager;
	}
	set trendLineManager(value: ScatterTrendLineManager) {
		this._trendLineManager = value;
	}
	onInit(): void {
		super.onInit();
		this.markerManager = this.createMarkerManager();
		this.horizontalErrorBarsPath = new Path();
		this.verticalErrorBarsPath = new Path();
		if (!this.isThumbnailView) {
			this.scatterModel.maximumMarkers = 2000;
		}
	}
	private _markerMeasureInfo: DataTemplateMeasureInfo = null;
	getMarkerDesiredSize(marker: Marker): Size {
		if (this._markerMeasureInfo == null) {
			this._markerMeasureInfo = new DataTemplateMeasureInfo();
			this._markerMeasureInfo.context = this.context.getUnderlyingContext();
		}
		this._markerMeasureInfo.width = marker.width;
		this._markerMeasureInfo.height = marker.height;
		this._markerMeasureInfo.data = marker.content;
		let template = marker.contentTemplate;
		if (template.measure != null) {
			template.measure(this._markerMeasureInfo);
		}
		return new Size(1, this._markerMeasureInfo.width, this._markerMeasureInfo.height);
	}
	protected createMarkerManager(): MarkerManagerBase {
		let markerManager = new NumericMarkerManager(1, (o: any) => this.markers.item(o), (i: number) => this.scatterModel.axisInfoCache.fastItemsSource.item(i), runOn(this, this.removeUnusedMarkers), runOn(this, this.getMarkerLocations), runOn(this, this.getActiveIndexes), () => this.scatterModel.markerCollisionAvoidance);
		markerManager.getMarkerDesiredSize = runOn(this, this.getMarkerDesiredSize);
		return markerManager;
	}
	protected removeUnusedMarkers(list: IDictionary$2<any, OwnedPoint>): void {
		this.scatterModel.removeUnusedMarkers(list, this.markers);
	}
	getVisibleMarkersInternal(): List$1<Marker> {
		return this.visibleMarkers;
	}
	getMarkerLocationsInternal(): Point[] {
		return this.locations;
	}
	protected getMarkerLocations(): Point[] {
		this.locations = this.scatterModel.getMarkerLocations(this, this.markers, this.locations, this.windowRect, this.viewport);
		return this.locations;
	}
	protected getActiveIndexes(): List$1<number> {
		this.indexes = this.scatterModel.getActiveIndexes(this.markers, this.indexes);
		return this.indexes;
	}
	attachHorizontalErrorBars(): void {
	}
	provideHorizontalErrorBarGeometry(horizontalErrorBarsGeometry: PathGeometry): void {
	}
	attachVerticalErrorBars(): void {
	}
	provideVerticalErrorBarGeometry(verticalErrorBarsGeometry: PathGeometry): void {
	}
	updateTrendlineBrush(): void {
		if (this.scatterModel.trendLineBrush != null) {
			this.scatterModel.actualTrendLineBrush = this.scatterModel.trendLineBrush;
		} else {
			this.scatterModel.actualTrendLineBrush = this.scatterModel.actualBrush;
		}
	}
	private _markers: HashPool$2<any, Marker> = null;
	get markers(): HashPool$2<any, Marker> {
		return this._markers;
	}
	set markers(value: HashPool$2<any, Marker>) {
		this._markers = value;
	}
	doToAllMarkers(action: (arg1: Marker) => void): void {
		this.markers.doToAll(action);
	}
	hideErrorBars(): void {
	}
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderMarkersOverride(context, isHitContext);
		if (context.shouldRender) {
			if (this.scatterModel.trendLineType != TrendLineType.None && !isHitContext) {
				let polyline: Polyline = this.trendLineManager.trendPolyline;
				polyline.strokeThickness = this.scatterModel.trendLineThickness;
				polyline._stroke = this.scatterModel.actualTrendLineBrush;
				polyline.strokeDashArray = this.scatterModel.trendLineDashArray;
				polyline.strokeDashCap = <number>this.scatterModel.trendLineDashCap;
				context.renderPolyline(polyline);
			}
		}
	}
	clearRendering(wipeClean: boolean): void {
		if (wipeClean) {
			this.hideErrorBars();
			this.markers.clear();
		}
		this.trendLineManager.clearPoints();
		this.makeDirty();
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'><span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.scatterModel.title + "</span><br/><span>" + "x: </span><span class='ui-priority-primary'>${item." + this.scatterModel.xMemberPath + "}</span><br/><span>" + "y: </span><span class='ui-priority-primary'>${item." + this.scatterModel.yMemberPath + "}</span></div>";
		return tooltipTemplate;
	}
}


