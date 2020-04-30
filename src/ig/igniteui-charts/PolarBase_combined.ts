/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { MarkerSeries } from "./MarkerSeries";
import { Point, Base, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, runOn, String_$type, Boolean_$type, typeGetValue, Number_$type, enumGetBox, EnumUtil, typeCast, Point_$type, fromEnum, markType, PointUtil } from "igniteui-core/type";
import { PolarAxisInfoCache } from "./PolarAxisInfoCache";
import { SeriesRenderer$2 } from "./SeriesRenderer$2";
import { PolarFrame } from "./PolarFrame";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Series } from "./Series";
import { NumericAngleAxis } from "./NumericAngleAxis";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { TrendLineType, TrendLineType_$type } from "igniteui-core/TrendLineType";
import { Brush } from "igniteui-core/Brush";
import { PenLineCap, PenLineCap_$type } from "igniteui-core/PenLineCap";
import { DoubleCollection } from "igniteui-core/DoubleCollection";
import { SeriesView } from "./SeriesView";
import { List$1 } from "igniteui-core/List$1";
import { SeriesPointOfInterest } from "./SeriesPointOfInterest";
import { DataContext } from "igniteui-core/DataContext";
import { SeriesViewer } from "./SeriesViewer";
import { Axis } from "./Axis";
import { ScalerParams } from "./ScalerParams";
import { Rect } from "igniteui-core/Rect";
import { Marker } from "./Marker";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { DoubleAnimator } from "igniteui-core/DoubleAnimator";
import { PolarAxes } from "./PolarAxes";
import { ContentControl } from "igniteui-core/ContentControl";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { TrendLineManagerBase$1 } from "./TrendLineManagerBase$1";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { NumericAxisBase } from "./NumericAxisBase";
import { SeriesRenderingArguments } from "./SeriesRenderingArguments";
import { AxisRange } from "./AxisRange";
import { SyncLink } from "./SyncLink";
import { Frame } from "./Frame";
import { HashPool$2 } from "igniteui-core/HashPool$2";
import { Clipper } from "igniteui-core/Clipper";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { OwnedPoint } from "./OwnedPoint";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { MarkerManagerBase } from "./MarkerManagerBase";
import { PolarTrendLineManager } from "./PolarTrendLineManager";
import { TrendResolutionParams } from "./TrendResolutionParams";
import { Polyline } from "igniteui-core/Polyline";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Visibility } from "igniteui-core/Visibility";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { NumericMarkerManager } from "./NumericMarkerManager";
import { GeometryGroup } from "igniteui-core/GeometryGroup";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Shape } from "igniteui-core/Shape";
import { MarkerType } from "./MarkerType";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export abstract class PolarBase extends MarkerSeries {
	static $t: Type = markType(PolarBase, 'PolarBase', (<any>MarkerSeries).$type);
	protected createView(): SeriesView {
		return new PolarBaseView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polarView = <PolarBaseView>view;
	}
	private _polarView: PolarBaseView;
	get polarView(): PolarBaseView {
		return this._polarView;
	}
	set polarView(value: PolarBaseView) {
		this._polarView = value;
	}
	private _operatingFrame: PolarFrame = null;
	clearAxes(): void {
		super.clearAxes();
		this.angleAxis = null;
		this.radiusAxis = null;
	}
	protected get_isPolar(): boolean {
		return true;
	}
	getVisiblePointsOfInterest1(points: List$1<SeriesPointOfInterest>): boolean {
		if (!this.hasMarkers) {
			return false;
		}
		let xAxis = this.angleAxis;
		let xParams = new ScalerParams(1, this.seriesViewer.actualWindowRect, this.viewport, xAxis.isInverted);
		xParams.effectiveViewportRect = this.getEffectiveViewport1(this.view);
		let yAxis = this.radiusAxis;
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
	constructor() {
		super();
		this.thumbnailFrame = new PolarFrame();
		this.transitionFrame.retransform = runOn(this, this.retransformPoint);
		this.previousFrame.retransform = runOn(this, this.retransformPoint);
		this.currentFrame.retransform = runOn(this, this.retransformPoint);
		this.seriesRenderer = new SeriesRenderer$2<PolarFrame, PolarBaseView>((<any>PolarFrame).$type, (<any>PolarBaseView).$type, 0, runOn(this, this.prepareFrame), runOn(this, this.renderFrame), runOn(this, this.animationActive), runOn(this, this.startAnimation), runOn(this, this.checkFlush));
	}
	private checkFlush(): void {
		if (this.animator.needsFlush) {
			this.animator.flush();
		}
	}
	private doGetScaledPoints(): void {
		this.polarAxes.getScaledPoints(this._operatingFrame.transformed, this.angleColumn, this.radiusColumn, this._operatingWindowRect, this._operatingViewportRect, (j: number, a: number) => Math.cos(a), (j: number, a: number) => Math.sin(a), true);
	}
	private _locations: Point[] = null;
	private get locations(): Point[] {
		return this._locations;
	}
	private set locations(value: Point[]) {
		this._locations = value;
	}
	private _axisInfoCache: PolarAxisInfoCache = null;
	get axisInfoCache(): PolarAxisInfoCache {
		return this._axisInfoCache;
	}
	set axisInfoCache(value: PolarAxisInfoCache) {
		this._axisInfoCache = value;
	}
	private _operatingWindowRect: Rect = null;
	private _operatingViewportRect: Rect = null;
	private _seriesRenderer: SeriesRenderer$2<PolarFrame, PolarBaseView> = null;
	get seriesRenderer(): SeriesRenderer$2<PolarFrame, PolarBaseView> {
		return this._seriesRenderer;
	}
	set seriesRenderer(value: SeriesRenderer$2<PolarFrame, PolarBaseView>) {
		this._seriesRenderer = value;
	}
	get angleMemberPath(): string {
		return <string>this.getValue(PolarBase.angleMemberPathProperty);
	}
	set angleMemberPath(value: string) {
		this.setValue(PolarBase.angleMemberPathProperty, value);
	}
	static readonly angleMemberPathPropertyName: string = "AngleMemberPath";
	static readonly angleMemberPathProperty: DependencyProperty = DependencyProperty.register(PolarBase.angleMemberPathPropertyName, String_$type, (<any>PolarBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(PolarBase.angleMemberPathPropertyName, e.oldValue, e.newValue)));
	get radiusMemberPath(): string {
		return <string>this.getValue(PolarBase.radiusMemberPathProperty);
	}
	set radiusMemberPath(value: string) {
		this.setValue(PolarBase.radiusMemberPathProperty, value);
	}
	static readonly radiusMemberPathPropertyName: string = "RadiusMemberPath";
	static readonly radiusMemberPathProperty: DependencyProperty = DependencyProperty.register(PolarBase.radiusMemberPathPropertyName, String_$type, (<any>PolarBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(PolarBase.radiusMemberPathPropertyName, e.oldValue, e.newValue)));
	protected get angleColumn(): IFastItemColumn$1<number> {
		return this._angleColumn;
	}
	protected set angleColumn(value: IFastItemColumn$1<number>) {
		if (this._angleColumn != value) {
			let oldXColumn: IFastItemColumn$1<number> = this.angleColumn;
			this._angleColumn = value;
			this.raisePropertyChanged(PolarBase.angleColumnPropertyName, oldXColumn, this.angleColumn);
		}
	}
	private _angleColumn: IFastItemColumn$1<number> = null;
	static readonly angleColumnPropertyName: string = "AngleColumn";
	protected get radiusColumn(): IFastItemColumn$1<number> {
		return this._radiusColumn;
	}
	protected set radiusColumn(value: IFastItemColumn$1<number>) {
		if (this._radiusColumn != value) {
			let oldXColumn: IFastItemColumn$1<number> = this.radiusColumn;
			this._radiusColumn = value;
			this.raisePropertyChanged(PolarBase.radiusColumnPropertyName, oldXColumn, this.radiusColumn);
		}
	}
	private _radiusColumn: IFastItemColumn$1<number> = null;
	static readonly radiusColumnPropertyName: string = "RadiusColumn";
	get angleAxis(): NumericAngleAxis {
		return <NumericAngleAxis>this.getValue(PolarBase.angleAxisProperty);
	}
	set angleAxis(value: NumericAngleAxis) {
		this.setValue(PolarBase.angleAxisProperty, value);
	}
	static readonly angleAxisPropertyName: string = "AngleAxis";
	static readonly angleAxisProperty: DependencyProperty = DependencyProperty.register(PolarBase.angleAxisPropertyName, (<any>NumericAngleAxis).$type, (<any>PolarBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(PolarBase.angleAxisPropertyName, e.oldValue, e.newValue)));
	get radiusAxis(): NumericRadiusAxis {
		return <NumericRadiusAxis>this.getValue(PolarBase.radiusAxisProperty);
	}
	set radiusAxis(value: NumericRadiusAxis) {
		this.setValue(PolarBase.radiusAxisProperty, value);
	}
	static readonly radiusAxisPropertyName: string = "RadiusAxis";
	static readonly radiusAxisProperty: DependencyProperty = DependencyProperty.register(PolarBase.radiusAxisPropertyName, (<any>NumericRadiusAxis).$type, (<any>PolarBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(PolarBase.radiusAxisPropertyName, e.oldValue, e.newValue)));
	get useCartesianInterpolation(): boolean {
		return <boolean>this.getValue(PolarBase.useCartesianInterpolationProperty);
	}
	set useCartesianInterpolation(value: boolean) {
		this.setValue(PolarBase.useCartesianInterpolationProperty, value);
	}
	static readonly useCartesianInterpolationPropertyName: string = "UseCartesianInterpolation";
	static readonly useCartesianInterpolationProperty: DependencyProperty = DependencyProperty.register(PolarBase.useCartesianInterpolationPropertyName, Boolean_$type, (<any>PolarBase).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(PolarBase.useCartesianInterpolationPropertyName, e.oldValue, e.newValue)));
	get maximumMarkers(): number {
		return typeGetValue(this.getValue(PolarBase.maximumMarkersProperty));
	}
	set maximumMarkers(value: number) {
		this.setValue(PolarBase.maximumMarkersProperty, value);
	}
	static readonly maximumMarkersPropertyName: string = "MaximumMarkers";
	static readonly maximumMarkersProperty: DependencyProperty = DependencyProperty.register(PolarBase.maximumMarkersPropertyName, Number_$type, (<any>PolarBase).$type, new PropertyMetadata(2, 400, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(PolarBase.maximumMarkersPropertyName, e.oldValue, e.newValue)));
	get trendLineType(): TrendLineType {
		return EnumUtil.getEnumValue<TrendLineType>(TrendLineType_$type, this.getValue(PolarBase.trendLineTypeProperty));
	}
	set trendLineType(value: TrendLineType) {
		this.setValue(PolarBase.trendLineTypeProperty, enumGetBox<TrendLineType>(TrendLineType_$type, value));
	}
	static readonly trendLineTypeProperty: DependencyProperty = DependencyProperty.register(Series.trendLineTypePropertyName, TrendLineType_$type, (<any>PolarBase).$type, new PropertyMetadata(2, enumGetBox<TrendLineType>(TrendLineType_$type, TrendLineType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLineTypePropertyName, e.oldValue, e.newValue)));
	get trendLineBrush(): Brush {
		return <Brush>this.getValue(PolarBase.trendLineBrushProperty);
	}
	set trendLineBrush(value: Brush) {
		this.setValue(PolarBase.trendLineBrushProperty, value);
	}
	static readonly trendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineBrushPropertyName, (<any>Brush).$type, (<any>PolarBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLineBrushPropertyName, e.oldValue, e.newValue)));
	get actualTrendLineBrush(): Brush {
		return <Brush>this.getValue(PolarBase.actualTrendLineBrushProperty);
	}
	set actualTrendLineBrush(value: Brush) {
		this.setValue(PolarBase.actualTrendLineBrushProperty, value);
	}
	static readonly actualTrendLineBrushProperty: DependencyProperty = DependencyProperty.register(Series.trendLineActualBrushPropertyName, (<any>Brush).$type, (<any>PolarBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLineActualBrushPropertyName, e.oldValue, e.newValue)));
	get trendLineThickness(): number {
		return <number>this.getValue(PolarBase.trendLineThicknessProperty);
	}
	set trendLineThickness(value: number) {
		this.setValue(PolarBase.trendLineThicknessProperty, value);
	}
	static readonly trendLineThicknessProperty: DependencyProperty = DependencyProperty.register(Series.trendLineThicknessPropertyName, Number_$type, (<any>PolarBase).$type, new PropertyMetadata(2, 1.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLineThicknessPropertyName, e.oldValue, e.newValue)));
	get trendLineDashCap(): PenLineCap {
		return EnumUtil.getEnumValue<PenLineCap>(PenLineCap_$type, this.getValue(PolarBase.trendLineDashCapProperty));
	}
	set trendLineDashCap(value: PenLineCap) {
		this.setValue(PolarBase.trendLineDashCapProperty, enumGetBox<PenLineCap>(PenLineCap_$type, value));
	}
	static readonly trendLineDashCapProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashCapPropertyName, PenLineCap_$type, (<any>PolarBase).$type, new PropertyMetadata(2, enumGetBox<PenLineCap>(PenLineCap_$type, PenLineCap.Flat), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLineDashCapPropertyName, e.oldValue, e.newValue)));
	get trendLineDashArray(): DoubleCollection {
		return <DoubleCollection>this.getValue(PolarBase.trendLineDashArrayProperty);
	}
	set trendLineDashArray(value: DoubleCollection) {
		this.setValue(PolarBase.trendLineDashArrayProperty, value);
	}
	static readonly trendLineDashArrayProperty: DependencyProperty = DependencyProperty.register(Series.trendLineDashArrayPropertyName, (<any>DoubleCollection).$type, (<any>PolarBase).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLineDashArrayPropertyName, e.oldValue, e.newValue)));
	get trendLinePeriod(): number {
		return typeGetValue(this.getValue(PolarBase.trendLinePeriodProperty));
	}
	set trendLinePeriod(value: number) {
		this.setValue(PolarBase.trendLinePeriodProperty, value);
	}
	static readonly trendLinePeriodProperty: DependencyProperty = DependencyProperty.register(Series.trendLinePeriodPropertyName, Number_$type, (<any>PolarBase).$type, new PropertyMetadata(2, 7, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLinePeriodPropertyName, e.oldValue, e.newValue)));
	static readonly trendLineZIndexProperty: DependencyProperty = DependencyProperty.register(Series.trendLineZIndexPropertyName, Number_$type, (<any>PolarBase).$type, new PropertyMetadata(2, 1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(Series.trendLineZIndexPropertyName, e.oldValue, e.newValue)));
	get trendLineZIndex(): number {
		return typeGetValue(this.getValue(PolarBase.trendLineZIndexProperty));
	}
	set trendLineZIndex(value: number) {
		this.setValue(PolarBase.trendLineZIndexProperty, value);
	}
	get clipSeriesToBounds(): boolean {
		return <boolean>this.getValue(PolarBase.clipSeriesToBoundsProperty);
	}
	set clipSeriesToBounds(value: boolean) {
		this.setValue(PolarBase.clipSeriesToBoundsProperty, value);
	}
	static readonly clipSeriesToBoundsPropertyName: string = "ClipSeriesToBounds";
	static readonly clipSeriesToBoundsProperty: DependencyProperty = DependencyProperty.register(PolarBase.clipSeriesToBoundsPropertyName, Boolean_$type, (<any>PolarBase).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarBase>sender).raisePropertyChanged(PolarBase.clipSeriesToBoundsPropertyName, e.oldValue, e.newValue)));
	previousFrame: PolarFrame = new PolarFrame();
	transitionFrame: PolarFrame = new PolarFrame();
	currentFrame: PolarFrame = new PolarFrame();
	polarAxes: PolarAxes = null;
	invalidateAxes(): void {
		super.invalidateAxes();
		if (this.radiusAxis != null) {
			this.radiusAxis.renderAxis1(false);
		}
		if (this.angleAxis != null) {
			this.angleAxis.renderAxis1(false);
		}
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		let refresh: boolean = false;
		this.polarView.trendLineManager.dataUpdated(action, position, count, propertyName);
		if (this.angleAxis != null && !this.angleAxis.updateRange()) {
			refresh = true;
		}
		if (this.radiusAxis != null && !this.radiusAxis.updateRange()) {
			refresh = true;
		}
		if (refresh) {
			this.renderSeries(true);
		}
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.renderSeries(false);
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(false);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		if (!super.validateSeries(viewportRect, windowRect, view) || !view.hasSurface() || windowRect.isEmpty || viewportRect.isEmpty || this.angleAxis == null || this.radiusAxis == null || this.angleColumn == null || this.radiusColumn == null || this.angleColumn.count == 0 || this.radiusColumn.count == 0 || this.fastItemsSource == null || this.fastItemsSource.count != this.angleColumn.count || this.fastItemsSource.count != this.radiusColumn.count || this.polarAxes == null || this.angleAxis.seriesViewer == null || this.radiusAxis.seriesViewer == null || this.angleAxis.actualMinimumValue == this.angleAxis.actualMaximumValue || this.radiusAxis.actualMinimumValue == this.radiusAxis.actualMaximumValue) {
			isValid = false;
		}
		return isValid;
	}
	renderSeriesOverride(animate: boolean): void {
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = this.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		if (!this.validateSeries(viewportRect, windowRect, this.view)) {
			this.clearRendering(true, this.view);
			return;
		}
		this._operatingWindowRect = windowRect;
		this._operatingViewportRect = viewportRect;
		this.axisInfoCache = new PolarAxisInfoCache(this.angleAxis, this.radiusAxis, this.fastItemsSource);
		let args = new SeriesRenderingArguments(this, viewportRect, windowRect, animate, this.skipPrepare);
		let $ret1 = this.seriesRenderer.render(args, this.previousFrame, this.currentFrame, this.transitionFrame, this.polarView);
		this.previousFrame = $ret1.p1;
		this.currentFrame = $ret1.p2;
		this.transitionFrame = $ret1.p3;
	}
	private retransformPoint(from: Point): Point {
		let newPoint: Point = this.polarAxes.getScaledPoint(from.x, from.y, this._operatingWindowRect, this._operatingViewportRect, this.axisInfoCache.angleAxisIsLogarithmic, this.axisInfoCache.angleAxisIsInverted, this.axisInfoCache.radiusAxisIsLogarithmic, this.axisInfoCache.radiusAxisIsInverted, this.axisInfoCache.radiusExtentScale, this.axisInfoCache.innerRadiusExtentScale);
		return newPoint;
	}
	getRange(axis: Axis): AxisRange {
		if (axis != null && axis == this.angleAxis && this.angleColumn != null) {
			return new AxisRange(this.angleColumn.minimum, this.angleColumn.maximum);
		}
		if (axis != null && axis == this.radiusAxis && this.radiusColumn != null) {
			return new AxisRange(this.radiusColumn.minimum, this.radiusColumn.maximum);
		}
		return null;
	}
	scrollIntoView(item: any): boolean {
		let windowRect: Rect = this.view.windowRect;
		windowRect = windowRect.copy();
		let viewportRect: Rect = this.view.viewport;
		let index: number = !windowRect.isEmpty && !viewportRect.isEmpty && this.fastItemsSource != null ? this.fastItemsSource.indexOf(item) : -1;
		if (this.angleAxis == null || this.angleColumn == null || this.radiusAxis == null || this.radiusColumn == null) {
			return false;
		}
		if (index < 0 || index > this.angleColumn.count - 1 || index > this.radiusColumn.count - 1) {
			return false;
		}
		let scaledAngle: number = this.angleAxis.getScaledAngle(this.angleColumn.item(index));
		let scaledRadius: number = this.radiusAxis.getScaledValue3(this.radiusColumn.item(index));
		let cx: number = 0.5 + (Math.cos(scaledAngle) * scaledRadius);
		let cy: number = 0.5 + (Math.sin(scaledAngle) * scaledRadius);
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
	getItem(world: Point): any {
		return null;
	}
	getItemIndex(world: Point): number {
		return -1;
	}
	getAxes(): Axis[] {
		return <Axis[]>[ this.angleAxis, this.radiusAxis ];
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == PolarBase.angleMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.angleMemberPath);
		}
		if (resolved == PolarBase.radiusMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.radiusMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		if (this.polarView.trendLineManager.propertyUpdated(sender, propertyName, oldValue, newValue)) {
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
		}
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue) != null) {
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.angleColumn);
				(<IFastItemsSource><any>oldValue).deregisterColumn(this.radiusColumn);
				this.angleColumn = null;
				this.radiusColumn = null;
			}
			if (typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue) != null) {
				this.angleColumn = this.registerDoubleColumn(this.angleMemberPath);
				this.radiusColumn = this.registerDoubleColumn(this.radiusMemberPath);
			}
			if ((this.radiusAxis != null && !this.radiusAxis.updateRange()) || (this.angleAxis != null && !this.angleAxis.updateRange())) {
				this.renderSeries(false);
			}
			break;

			case PolarBase.angleAxisPropertyName:
			if (this.angleAxis != null && this.radiusAxis != null) {
				this.polarAxes = new PolarAxes(this.radiusAxis, this.angleAxis);
			}
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			if (this.angleAxis != null && !this.angleAxis.updateRange()) {
				this.renderSeries(false);
			} else if (oldValue != null && newValue == null) {
				this.clearRendering(true, this.view);
			}
			break;

			case PolarBase.radiusAxisPropertyName:
			if (this.angleAxis != null && this.radiusAxis != null) {
				this.polarAxes = new PolarAxes(this.radiusAxis, this.angleAxis);
			}
			if (oldValue != null) {
				(<Axis>oldValue).deregisterSeries(this);
			}
			if (newValue != null) {
				(<Axis>newValue).registerSeries(this);
			}
			if (this.radiusAxis != null && !this.radiusAxis.updateRange()) {
				this.renderSeries(false);
			} else if (oldValue != null && newValue == null) {
				this.clearRendering(true, this.view);
			}
			if (this.angleAxis != null && !this.angleAxis.updateRange()) {
				this.angleAxis.refresh();
			}
			break;

			case PolarBase.angleMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.angleColumn);
				this.angleColumn = this.registerDoubleColumn(this.angleMemberPath);
			}
			break;

			case PolarBase.angleColumnPropertyName:
			this.polarView.trendLineManager.reset();
			if (this.angleAxis != null && !this.angleAxis.updateRange()) {
				this.renderSeries(false);
			}
			break;

			case PolarBase.radiusMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.radiusColumn);
				this.radiusColumn = this.registerDoubleColumn(this.radiusMemberPath);
			}
			break;

			case PolarBase.radiusColumnPropertyName:
			this.polarView.trendLineManager.reset();
			if (this.radiusAxis != null && !this.radiusAxis.updateRange()) {
				this.renderSeries(false);
			}
			break;

			case PolarBase.useCartesianInterpolationPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case PolarBase.maximumMarkersPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.transitionProgressPropertyName:
			this.axisInfoCache = new PolarAxisInfoCache(this.angleAxis, this.radiusAxis, this.fastItemsSource);
			this._operatingWindowRect = this.view.windowRect;
			this._operatingViewportRect = this.view.viewport;
			this.transitionFrame.useCartesianInterpolation = this.useCartesianInterpolation;
			this.transitionFrame.interpolate2(<number>this.transitionProgress, this.previousFrame, this.currentFrame);
			if (this.clearAndAbortIfInvalid1(this.view)) {
				return;
			}
			if (this.transitionProgress == 1) {
				this.renderFrame(this.currentFrame, this.polarView);
			} else {
				this.renderFrame(this.transitionFrame, this.polarView);
			}
			if (this.seriesViewer != null) {
				this.seriesViewer.raiseSeriesAnimating(this);
			}
			break;

			case Series.trendLineBrushPropertyName:
			this.updateIndexedProperties();
			break;

			case PolarBase.clipSeriesToBoundsPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.trendLineTypePropertyName:
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	canUseAsRadiusAxis(axis: any): boolean {
		if (typeCast<NumericRadiusAxis>((<any>NumericRadiusAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	canUseAsAngleAxis(axis: any): boolean {
		if (typeCast<NumericAngleAxis>((<any>NumericAngleAxis).$type, axis) !== null) {
			return true;
		}
		return false;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let polarView = <PolarBaseView>view;
		if (wipeClean) {
			polarView.markers.clear();
		}
		polarView.trendLineManager.clearPoints();
	}
	private getTrendlineClipper(viewportRect: Rect, target: IList$1<Point>): Clipper {
		let top: number = viewportRect.top - 10;
		let bottom: number = viewportRect.bottom + 10;
		let left: number = viewportRect.left - 10;
		let right: number = viewportRect.right + 10;
		let clipper = ((() => {
			let $ret = new Clipper(1, left, bottom, right, top, false);
			$ret.target = target;
			return $ret;
		})());
		return clipper;
	}
	calculateCachedPoints(frame: PolarFrame, count: number, windowRect: Rect, viewportRect: Rect): void {
		frame.cachedPoints = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 1, count);
		let itemsSource: IFastItemsSource = this.fastItemsSource;
		for (let i: number = 0; i < count; i++) {
			let point: Point = frame.transformed._inner[i];
			if (!isInfinity(point.x) && !isInfinity(point.y)) {
				let columnValues = <Point>{ $type: Point_$type, x: this.angleColumn.item(i), y: this.radiusColumn.item(i) };
				let p = <Point>{ $type: Point_$type, x: point.x, y: point.y };
				frame.cachedPoints.addItem(itemsSource.item(i), ((() => {
					let $ret = new OwnedPoint();
					$ret.ownerItem = itemsSource.item(i);
					$ret.columnValues = columnValues;
					$ret.point = p;
					return $ret;
				})()));
			}
		}
	}
	prepareFrame(frame: PolarFrame, view: PolarBaseView): void {
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		frame.markers.clear();
		frame.trendLine.clear();
		let count: number = Math.min(this.angleColumn != null ? this.angleColumn.count : 0, this.radiusColumn != null ? this.radiusColumn.count : 0);
		if (count < 1) {
			return;
		}
		this.axisInfoCache = new PolarAxisInfoCache(this.angleAxis, this.radiusAxis, this.fastItemsSource);
		this._operatingFrame = frame;
		this._operatingViewportRect = viewportRect;
		this._operatingWindowRect = windowRect;
		view.markerManager.winnowMarkers(frame.markers, this.maximumMarkers, windowRect, viewportRect, this.resolution);
		if (count <= this.maximumMarkers) {
			this.calculateCachedPoints(frame, count, windowRect, viewportRect);
		}
		let clipper: Clipper = this.getTrendlineClipper(viewportRect, frame.trendLine);
		let angleMin: number = Math.min(this.angleAxis.actualMinimumValue, this.angleAxis.actualMaximumValue);
		let angleMax: number = Math.max(this.angleAxis.actualMaximumValue, this.angleAxis.actualMinimumValue);
		view.trendLineManager.useCartesianInterpolation = this.useCartesianInterpolation;
		view.trendLineManager.unknownValuePlotting = UnknownValuePlotting.LinearInterpolate;
		view.trendLineManager.radiusExtentScale = this.radiusAxis.actualRadiusExtentScale;
		view.trendLineManager.innerRadiusExtentScale = this.radiusAxis.actualInnerRadiusExtentScale;
		view.trendLineManager.projectX = (angle: number, radius: number) => this.polarAxes.getXValue(angle, radius, windowRect, viewportRect, Math.cos);
		view.trendLineManager.projectY = (angle: number, radius: number) => this.polarAxes.getYValue(angle, radius, windowRect, viewportRect, Math.sin);
		let viable = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < this.angleColumn.count; i++) {
			if (this.angleColumn.item(i) >= angleMin && this.angleColumn.item(i) <= angleMax) {
				viable.add(this.angleColumn.item(i));
			}
		}
		let viableRadius: IList$1<number> = this.radiusColumn;
		if (viable.count != this.angleColumn.count) {
			viableRadius = new List$1<number>(Number_$type, 0);
			for (let i1 = 0; i1 < this.angleColumn.count; i1++) {
				if (this.angleColumn.item(i1) >= angleMin && this.angleColumn.item(i1) <= angleMax) {
					viableRadius.add(this.radiusColumn.item(i1));
				}
			}
		}
		view.trendLineManager.prepareLine(frame.trendLine, this.trendLineType, viable, viableRadius, this.trendLinePeriod, runOn(this.angleAxis, this.angleAxis.getScaledAngle), runOn(this.radiusAxis, this.radiusAxis.getScaledValue3), ((() => {
			let $ret = new TrendResolutionParams();
			$ret.resolution = this.resolution;
			$ret.viewport = viewportRect;
			$ret.window = windowRect;
			return $ret;
		})()), clipper, angleMin, angleMax);
	}
	renderFrame(frame: PolarFrame, view: PolarBaseView): void {
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let contentViewport: Rect = this.getContentViewport(view);
		this.axisInfoCache = new PolarAxisInfoCache(this.angleAxis, this.radiusAxis, this.fastItemsSource);
		view.markerManager.render(frame.markers, this.useLightweightMarkers);
		view.renderMarkers();
		let clipper: Clipper = this.getTrendlineClipper(viewportRect, view.trendLineManager.trendPolyline.points);
		view.trendLineManager.rasterizeTrendLine1(frame.trendLine, clipper);
		this.applyClipping(viewportRect, windowRect, effectiveViewportRect, contentViewport, view);
	}
	private applyClipping(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect, view: PolarBaseView): void {
		view.applyClipping(viewportRect, windowRect, effectiveViewportRect, contentViewport);
	}
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.index < 0) {
			return;
		}
		this.polarView.updateTrendlineBrush();
	}
	private _thumbnailFrame: PolarFrame = null;
	get thumbnailFrame(): PolarFrame {
		return this._thumbnailFrame;
	}
	set thumbnailFrame(value: PolarFrame) {
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
		let thumbnailView: PolarBaseView = <PolarBaseView>this.thumbnailView;
		if (!this.skipThumbnailPrepare) {
			this.thumbnailFrame = new PolarFrame();
			this.prepareFrame(this.thumbnailFrame, thumbnailView);
		}
		this.skipThumbnailPrepare = false;
		this.renderFrame(this.thumbnailFrame, thumbnailView);
		this.thumbnailDirty = false;
	}
	private _alternateFrame: PolarFrame = null;
	private get alternateFrame(): PolarFrame {
		return this._alternateFrame;
	}
	private set alternateFrame(value: PolarFrame) {
		this._alternateFrame = value;
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let polarBaseView: PolarBaseView = <PolarBaseView>view;
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(polarBaseView)) {
			return;
		}
		if (this.alternateFrame == null) {
			this.alternateFrame = new PolarFrame();
		}
		this.prepareFrame(this.alternateFrame, polarBaseView);
		this.renderFrame(this.alternateFrame, polarBaseView);
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
	getMarkerLocations(Markers: HashPool$2<any, Marker>, WindowRect: Rect, Viewport: Rect): Point[] {
		this.doGetScaledPoints();
		return this._operatingFrame.transformed.toArray();
	}
	getActiveIndexes(Markers: HashPool$2<any, Marker>): List$1<number> {
		let indexes: List$1<number> = new List$1<number>(Number_$type, 0);
		let source: IFastItemsSource = this.fastItemsSource;
		for (let key of fromEnum<any>(this.polarView.markers.activeKeys)) {
			indexes.add(source.indexOf(key));
		}
		return indexes;
	}
	getColumnValues(i: number): Point {
		return <Point>{ $type: Point_$type, x: this.angleColumn.item(i), y: this.radiusColumn.item(i) };
	}
	protected exportVisualDataOverride(svd: any): void {
		super.exportVisualDataOverride(svd);
		this.seriesVisualDataManager.exportTrendlineData(this, svd, this.polarView.trendLineManager.trendPolyline);
	}
}

/**
 * @hidden 
 */
export class PolarBaseView extends MarkerSeriesView {
	static $t: Type = markType(PolarBaseView, 'PolarBaseView', (<any>MarkerSeriesView).$type);
	private _polarModel: PolarBase = null;
	protected get polarModel(): PolarBase {
		return this._polarModel;
	}
	protected set polarModel(value: PolarBase) {
		this._polarModel = value;
	}
	private _markerManager: MarkerManagerBase = null;
	get markerManager(): MarkerManagerBase {
		return this._markerManager;
	}
	set markerManager(value: MarkerManagerBase) {
		this._markerManager = value;
	}
	constructor(model: PolarBase) {
		super(model);
		this.polarModel = model;
		this.markers = new HashPool$2<any, Marker>((<any>Base).$type, (<any>Marker).$type);
		this.initMarkers(this.markers);
		this.trendLineManager = new PolarTrendLineManager();
	}
	private _trendLineManager: PolarTrendLineManager = null;
	get trendLineManager(): PolarTrendLineManager {
		return this._trendLineManager;
	}
	set trendLineManager(value: PolarTrendLineManager) {
		this._trendLineManager = value;
	}
	onInit(): void {
		super.onInit();
		this.markerManager = this.createMarkerManager();
		if (!this.isThumbnailView) {
			this.polarModel.maximumMarkers = 1000;
			this.markerModel.markerType = MarkerType.Automatic;
		}
	}
	protected createMarkerManager(): MarkerManagerBase {
		let m = new NumericMarkerManager(0, (o: any) => this.markers.item(o), (i: number) => this.polarModel.axisInfoCache.fastItemsSource.item(i), runOn(this, this.removeUnusedMarkers), runOn(this, this.getMarkerLocations), runOn(this, this.getActiveIndexes));
		m.populateColumnValues = true;
		m.getColumnValues = runOn(this.polarModel, this.polarModel.getColumnValues);
		return m;
	}
	protected removeUnusedMarkers(list: IDictionary$2<any, OwnedPoint>): void {
		this.polarModel.removeUnusedMarkers(list, this.markers);
	}
	protected getMarkerLocations(): Point[] {
		return this.polarModel.getMarkerLocations(this.markers, this.windowRect, this.viewport);
	}
	protected getActiveIndexes(): List$1<number> {
		return this.polarModel.getActiveIndexes(this.markers);
	}
	applyClipping(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): void {
		if (this.polarModel.clipSeriesToBounds) {
			let geom = new GeometryGroup();
			this.polarModel.radiusAxis.defineClipRegion(geom, viewportRect, windowRect, effectiveViewportRect, contentViewport);
		} else {
		}
	}
	updateTrendlineBrush(): void {
		if (this.polarModel.trendLineBrush != null) {
			this.polarModel.actualTrendLineBrush = this.polarModel.trendLineBrush;
		} else {
			this.polarModel.actualTrendLineBrush = this.polarModel.actualBrush;
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
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		if (context.shouldRender) {
			if (this.polarModel.trendLineType != TrendLineType.None && !isHitContext) {
				let polyline: Polyline = this.trendLineManager.trendPolyline;
				polyline.strokeThickness = this.polarModel.trendLineThickness;
				polyline._stroke = this.polarModel.actualTrendLineBrush;
				polyline.strokeDashCap = <number>this.polarModel.trendLineDashCap;
				polyline.strokeDashArray = this.polarModel.trendLineDashArray;
				context.renderPolyline(polyline);
			}
		}
		super.renderMarkersOverride(context, isHitContext);
	}
	protected getGradientBounds(): Rect {
		return Rect.empty;
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'><span>" + "${item." + this.polarModel.angleMemberPath + "}" + "</span><br/><span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.polarModel.title + ": </span><span class='ui-priority-primary'>" + "${item." + this.polarModel.radiusMemberPath + "}</span></div>";
		return tooltipTemplate;
	}
}


