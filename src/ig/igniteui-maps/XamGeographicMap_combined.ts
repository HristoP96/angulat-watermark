/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SeriesViewer } from "igniteui-charts/SeriesViewer";
import { IMapRenderDeferralHandler, IMapRenderDeferralHandler_$type } from "igniteui-core/IMapRenderDeferralHandler";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Rect } from "igniteui-core/Rect";
import { Base, Point, Type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, EventArgs, Boolean_$type, typeCast, Point_$type, fromEnum, Number_$type, runOn, delegateRemove, delegateCombine, markType, PointUtil, INotifyPropertyChanged, INotifyPropertyChanged_$type, PropertyChangedEventArgs, String_$type, IEnumerable, IEnumerable_$type } from "igniteui-core/type";
import { NumericXAxis } from "igniteui-charts/NumericXAxis";
import { NumericYAxis } from "igniteui-charts/NumericYAxis";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { SphericalMercatorVerticalScaler } from "./SphericalMercatorVerticalScaler";
import { Control } from "igniteui-core/Control";
import { Axis } from "igniteui-charts/Axis";
import { SphericalMercatorHorizontalScaler } from "./SphericalMercatorHorizontalScaler";
import { StraightNumericAxisBase } from "igniteui-charts/StraightNumericAxisBase";
import { ScalerParams } from "igniteui-charts/ScalerParams";
import { NumericAxisBase } from "igniteui-charts/NumericAxisBase";
import { Brush } from "igniteui-core/Brush";
import { Series } from "igniteui-charts/Series";
import { SeriesViewerView } from "igniteui-charts/SeriesViewerView";
import { List$1 } from "igniteui-core/List$1";
import { ImageTilesReadyEventArgs } from "./ImageTilesReadyEventArgs";
import { FontInfo } from "igniteui-core/FontInfo";
import { ItfConverter } from "igniteui-core/ItfConverter";
import { TriangulationSource } from "igniteui-core/TriangulationSource";
import { ChartVisualData } from "igniteui-charts/ChartVisualData";
import { AxisVisualData } from "igniteui-charts/AxisVisualData";
import { SeriesVisualData } from "igniteui-charts/SeriesVisualData";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { RectData } from "igniteui-core/RectData";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { truncate, intDivide, isNaN_ } from "igniteui-core/number";
import { XamMultiScaleImage } from "igniteui-core/XamMultiScaleImage";
import { XamMultiScaleTileSource } from "igniteui-core/XamMultiScaleTileSource";
import { DownloadingMultiScaleImageEventArgs } from "igniteui-core/DownloadingMultiScaleImageEventArgs";
import { CancellingMultiScaleImageEventArgs } from "igniteui-core/CancellingMultiScaleImageEventArgs";
import { Size } from "igniteui-core/Size";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ImagesChangedEventArgs } from "./ImagesChangedEventArgs";
import { HostSeriesView } from "./HostSeriesView";
import { ScatterTriangulationSeries } from "igniteui-charts/ScatterTriangulationSeries";
import { GeographicMapSeriesHost } from "./GeographicMapSeriesHost";
import { ScatterAreaSeries } from "igniteui-charts/ScatterAreaSeries";
import { InteractionState } from "igniteui-core/InteractionState";
import { SeriesViewerViewManager } from "igniteui-charts/SeriesViewerViewManager";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { CanvasRenderScheduler } from "igniteui-core/CanvasRenderScheduler";
import { Shape } from "igniteui-core/Shape";
import { ModifierKeys } from "igniteui-core/ModifierKeys";
import { OpenStreetMapTileSource } from "igniteui-core/OpenStreetMapTileSource";
import { SeriesView } from "igniteui-charts/SeriesView";
import { ColorScale } from "igniteui-charts/ColorScale";
import { TriangulationStatusEventArgs } from "igniteui-core/TriangulationStatusEventArgs";

/**
 * @hidden 
 */
export class XamGeographicMap extends SeriesViewer implements IMapRenderDeferralHandler {
	static $t: Type = markType(XamGeographicMap, 'XamGeographicMap', (<any>SeriesViewer).$type, [IMapRenderDeferralHandler_$type]);
	constructor() {
		super();
		this._defaultWorldRect_projectedHeight = SphericalMercatorVerticalScaler.getProjectedValue(XamGeographicMap._defaultWorldRect.bottom) - SphericalMercatorVerticalScaler.getProjectedValue(XamGeographicMap._defaultWorldRect.top);
		this.defaultStyleKey = (<any>XamGeographicMap).$type;
		this.backgroundContent = new OpenStreetMapImagery();
		let xAxis = ((() => {
			let $ret = new NumericXAxis();
			$ret.seriesViewer = this;
			return $ret;
		})());
		xAxis.isDisabled = true;
		this.xAxis = xAxis;
		this.xAxis.scaler = new SphericalMercatorHorizontalScaler();
		let yAxis = ((() => {
			let $ret = new NumericYAxis();
			$ret.seriesViewer = this;
			return $ret;
		})());
		yAxis.isDisabled = true;
		this.yAxis = yAxis;
		this.yAxis.scaler = new SphericalMercatorVerticalScaler();
		this.invalidateActualWorldRect();
		this.updateAxisRange();
		this.initializeScalingRatio();
	}
	private _renderer: DomRenderer = null;
	provideContainer(container: any): void {
		super.provideContainer(container);
		this.xAxis.provideRenderer(<DomRenderer><any>container);
		this.yAxis.provideRenderer(<DomRenderer><any>container);
	}
	initializeScalingRatio(): void {
		super.initializeScalingRatio();
		this.xamGeographicMapView.pixelScalingRatioChanged1(this.actualPixelScalingRatio);
	}
	isZoomingHorizontallyEnabled(): boolean {
		return this.zoomable;
	}
	isZoomingVerticallyEnabled(): boolean {
		return this.zoomable;
	}
	get zoomable(): boolean {
		return <boolean>this.getValue(XamGeographicMap.zoomableProperty);
	}
	set zoomable(value: boolean) {
		this.setValue(XamGeographicMap.zoomableProperty, value);
	}
	static readonly zoomablePropertyName: string = "Zoomable";
	static readonly zoomableProperty: DependencyProperty = DependencyProperty.register(XamGeographicMap.zoomablePropertyName, Boolean_$type, (<any>XamGeographicMap).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamGeographicMap>((<any>XamGeographicMap).$type, sender)).raisePropertyChanged(XamGeographicMap.zoomablePropertyName, e.oldValue, e.newValue)));
	static _defaultWorldRect: Rect = new Rect(2, <Point>{ $type: Point_$type, x: -180, y: -85.05112878 }, <Point>{ $type: Point_$type, x: 180, y: 85.05112878 });
	_defaultWorldRect_projectedHeight: number = 0;
	private static readonly worldRectPropertyName: string = "WorldRect";
	get worldRect(): Rect {
		return <Rect>this.getValue(XamGeographicMap.worldRectProperty);
	}
	set worldRect(value: Rect) {
		this.setValue(XamGeographicMap.worldRectProperty, value);
	}
	static readonly worldRectProperty: DependencyProperty = DependencyProperty.register(XamGeographicMap.worldRectPropertyName, (<any>Rect).$type, (<any>XamGeographicMap).$type, new PropertyMetadata(2, XamGeographicMap._defaultWorldRect, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<XamGeographicMap>sender).raisePropertyChanged(XamGeographicMap.worldRectPropertyName, e.oldValue, e.newValue)));
	static readonly actualWorldRectPropertyName: string = "ActualWorldRect";
	private _actualWorldRect: Rect = null;
	get actualWorldRect(): Rect {
		return this._actualWorldRect;
	}
	set actualWorldRect(value: Rect) {
		let changed: boolean = Rect.l_op_Inequality(this._actualWorldRect, value);
		if (changed) {
			let oldValue: any = this._actualWorldRect;
			this._actualWorldRect = value;
			this.raisePropertyChanged(XamGeographicMap.actualWorldRectPropertyName, oldValue, value);
		}
	}
	private invalidateActualWorldRect(): void {
		if (this.worldRect.isEmpty) {
			return;
		}
		this.actualWorldRect = this.padGeographicRect(this.worldRect);
	}
	private padGeographicRect(input: Rect): Rect {
		let T = input.top;
		let L = input.left;
		let W = input.width;
		let H = input.height;
		let projectedBottom = SphericalMercatorVerticalScaler.getProjectedValue(input.bottom);
		let projectedTop = SphericalMercatorVerticalScaler.getProjectedValue(input.top);
		let projectedHeight = projectedBottom - projectedTop;
		let scaleWidth = input.width / XamGeographicMap._defaultWorldRect.width;
		let scaleRatio = projectedHeight / scaleWidth;
		if (projectedHeight / scaleWidth > this._defaultWorldRect_projectedHeight) {
			let newScaleWidth = projectedHeight / this._defaultWorldRect_projectedHeight;
			let diff = newScaleWidth - scaleWidth;
			L = L - (diff / 2) * XamGeographicMap._defaultWorldRect.width;
			W = newScaleWidth * XamGeographicMap._defaultWorldRect.width;
		} else if (projectedHeight / scaleWidth < this._defaultWorldRect_projectedHeight) {
			let newProjectedHeight = this._defaultWorldRect_projectedHeight * scaleWidth;
			let diff1 = newProjectedHeight - projectedHeight;
			let newProjectedTop = projectedTop - (diff1 / 2);
			let newProjectedBottom = projectedBottom + (diff1 / 2);
			T = SphericalMercatorVerticalScaler.getUnprojectedValue(newProjectedTop);
			H = SphericalMercatorVerticalScaler.getUnprojectedValue(newProjectedBottom) - T;
		}
		let newWorldRect = new Rect(0, L, T, W, H);
		return newWorldRect;
	}
	static readonly backgroundContentPropertyName: string = "BackgroundContent";
	get backgroundContent(): GeographicMapImagery {
		return this._backgroundContent;
	}
	set backgroundContent(value: GeographicMapImagery) {
		let changed: boolean = value != this.backgroundContent;
		if (changed) {
			let oldValue: any = this.backgroundContent;
			this._backgroundContent = value;
			this.raisePropertyChanged(XamGeographicMap.backgroundContentPropertyName, oldValue, value);
		}
	}
	private _backgroundContent: GeographicMapImagery = null;
	static readonly xAxisPropertyName: string = "XAxis";
	get xAxis(): NumericXAxis {
		return this._xAxis;
	}
	set xAxis(value: NumericXAxis) {
		let changed: boolean = value != this.xAxis;
		if (changed) {
			let oldValue: any = this.xAxis;
			this._xAxis = value;
			this.raisePropertyChanged(XamGeographicMap.xAxisPropertyName, oldValue, value);
		}
	}
	private _xAxis: NumericXAxis = null;
	static readonly yAxisPropertyName: string = "YAxis";
	get yAxis(): NumericYAxis {
		return this._yAxis;
	}
	set yAxis(value: NumericYAxis) {
		let changed: boolean = value != this.yAxis;
		if (changed) {
			let oldValue: any = this.yAxis;
			this._yAxis = value;
			this.raisePropertyChanged(XamGeographicMap.yAxisPropertyName, oldValue, value);
		}
	}
	private _yAxis: NumericYAxis = null;
	private _backgroundImagery: GeographicMapImagery = null;
	get backgroundImagery(): GeographicMapImagery {
		return this._backgroundImagery;
	}
	set backgroundImagery(value: GeographicMapImagery) {
		this._backgroundImagery = value;
	}
	private static _unitRect: Rect = new Rect(0, 0, 0, 1, 1);
	getZoomRectFromGeoRect(geographic: Rect): Rect {
		return this.getZoomFromGeographicRect(geographic);
	}
	getZoomFromGeographicRect(geographic: Rect): Rect {
		let paddedGeo: Rect = this.padGeographicRect(geographic);
		let xaxis = this.xAxis;
		let yaxis = this.yAxis;
		let xParams: ScalerParams = new ScalerParams(1, XamGeographicMap._unitRect, this.viewportRect, xaxis.isInverted);
		xParams.effectiveViewportRect = this.effectiveViewport;
		let yParams: ScalerParams = new ScalerParams(1, XamGeographicMap._unitRect, this.viewportRect, yaxis.isInverted);
		yParams.effectiveViewportRect = this.effectiveViewport;
		let gL = this.xAxis.getScaledValue(paddedGeo.left, xParams);
		let gR = this.xAxis.getScaledValue(paddedGeo.right, xParams);
		let gT = this.yAxis.getScaledValue(paddedGeo.top, yParams);
		let gB = this.yAxis.getScaledValue(paddedGeo.bottom, yParams);
		let L = gL / this.viewportRect.width;
		let T = gB / this.viewportRect.height;
		let W = (gR - gL) / this.viewportRect.width;
		let H = (gT - gB) / this.viewportRect.height;
		let result: Rect = new Rect(0, L, T, W, H);
		result.intersect(XamGeographicMap._unitRect);
		if (result.isEmpty) {
			result = XamGeographicMap._unitRect;
		}
		return result;
	}
	getZoomFromGeographicPoints(northWest: Point, southEast: Point): Rect {
		let X = northWest.x;
		let Y = southEast.y;
		let W = southEast.x - northWest.x;
		let H = northWest.y - southEast.y;
		if (W < 0 || H < 0) {
			return XamGeographicMap._unitRect;
		} else {
			let geographic: Rect = new Rect(0, X, Y, W, H);
			return this.getZoomFromGeographicRect(geographic);
		}
	}
	getGeographicFromZoom(windowRect: Rect): Rect {
		let xaxis = this.xAxis;
		let yaxis = this.yAxis;
		let xParams: ScalerParams = new ScalerParams(1, windowRect, this.viewportRect, xaxis.isInverted);
		xParams.effectiveViewportRect = this.effectiveViewport;
		let yParams: ScalerParams = new ScalerParams(1, windowRect, this.viewportRect, yaxis.isInverted);
		yParams.effectiveViewportRect = this.effectiveViewport;
		let contentViewport = this.contentViewport;
		let L = xaxis.getUnscaledValue(contentViewport.left, xParams);
		let T = yaxis.getUnscaledValue(contentViewport.top, yParams);
		let R = xaxis.getUnscaledValue(contentViewport.right, xParams);
		let B = yaxis.getUnscaledValue(contentViewport.bottom, yParams);
		let W = R - L;
		let H = T - B;
		let result: Rect = new Rect(0, L, B, W, H);
		result.intersect(XamGeographicMap._defaultWorldRect);
		if (result.isEmpty) {
			result = XamGeographicMap._defaultWorldRect;
		}
		return result;
	}
	getGeographicPoint(pixelCoordinate: Point): Point {
		let geoX = this.xAxis.unscaleValue(pixelCoordinate.x);
		let geoY = this.yAxis.unscaleValue(pixelCoordinate.y);
		return <Point>{ $type: Point_$type, x: geoX, y: geoY };
	}
	getPixelPoint(geographicCoordinate: Point): Point {
		let winX = this.xAxis.scaleValue(geographicCoordinate.x);
		let winY = this.yAxis.scaleValue(geographicCoordinate.y);
		return <Point>{ $type: Point_$type, x: winX, y: winY };
	}
	getWindowPoint(geographicCoordinate: Point): Point {
		return this.getPixelPoint(geographicCoordinate);
	}
	clearTileCache(): void {
		let imagery = typeCast<GeographicMapImagery>((<any>GeographicMapImagery).$type, this.backgroundContent);
		if (imagery != null) {
			imagery.clearTileCache();
		}
	}
	prepareBrush(b: Brush): void {
	}
	getMarkerBrushByIndex(index: number): Brush {
		return this.xamGeographicMapView.getMarkerBrushByIndex(index);
	}
	getMarkerOutlineByIndex(index: number): Brush {
		return this.xamGeographicMapView.getMarkerOutlineByIndex(index);
	}
	useFixedAspectZoom(): boolean {
		return true;
	}
	styleUpdated(): void {
		this.xamGeographicMapView.styleUpdated();
		for (let series of fromEnum<Series>(this.series)) {
			series.styleUpdated();
		}
	}
	protected _geographicTopLeftPeg: Point = <Point>{ $type: Point_$type, x: NaN, y: NaN };
	protected updateGeographicPeg(): void {
		if (!this.viewportRect.isEmpty && this.viewportRect.width > 0 && this.viewportRect.height > 0) {
			let X: number = this.xAxis.unscaleValue(this.viewportRect.left);
			let Y: number = this.yAxis.unscaleValue(this.viewportRect.top);
			this._geographicTopLeftPeg = <Point>{ $type: Point_$type, x: X, y: Y };
		}
	}
	protected slideActualWindowRectToGeographicPeg(): void {
		if (isNaN_(this._geographicTopLeftPeg.x) || isNaN_(this._geographicTopLeftPeg.y)) {
			this.updateGeographicPeg();
		}
		let geoX: number = this._geographicTopLeftPeg.x;
		let geoY: number = this._geographicTopLeftPeg.y;
		if (!isNaN_(geoX) && !isNaN_(geoY)) {
			let left: number = this.actualWindowRect.left;
			let top: number = this.actualWindowRect.top;
			let width: number = this.actualWindowRect.width;
			let height: number = this.actualWindowRect.height;
			if (width > this._scaleTilesetRect.width) {
			} else {
				let xParams: ScalerParams = new ScalerParams(1, XamGeographicMap._unitRect, this.viewportRect, this.xAxis.isInverted);
				xParams.effectiveViewportRect = this.effectiveViewport;
				let pixelX: number = this.xAxis.getScaledValue(geoX, xParams);
				left = pixelX / this.viewportRect.width;
				if (left + width > this._scaleTilesetRect.right) {
					left = this._scaleTilesetRect.right - width;
				} else if (left < this._scaleTilesetRect.left) {
					left = this._scaleTilesetRect.left;
				}
			}
			if (height > this._scaleTilesetRect.height) {
			} else {
				let yParams: ScalerParams = new ScalerParams(1, XamGeographicMap._unitRect, this.viewportRect, this.yAxis.isInverted);
				yParams.effectiveViewportRect = this.effectiveViewport;
				let pixelY: number = this.yAxis.getScaledValue(geoY, yParams);
				top = pixelY / this.viewportRect.height;
				if (top + height > this._scaleTilesetRect.bottom) {
					top = this._scaleTilesetRect.bottom - height;
				} else if (top < this._scaleTilesetRect.top) {
					top = this._scaleTilesetRect.top;
				}
			}
			this.windowNotify(new Rect(0, left, top, width, height), false);
		}
	}
	protected get_isMap(): boolean {
		return true;
	}
	protected _scaleTilesetRect: Rect = null;
	protected calculateActualWindowRect(): Rect {
		let baseRect: Rect = super.calculateActualWindowRect();
		if (this.xAxis == null || this.yAxis == null) {
			return baseRect;
		}
		let xParams: ScalerParams = new ScalerParams(1, XamGeographicMap._unitRect, this.viewportRect, this.xAxis.isInverted);
		xParams.effectiveViewportRect = this.effectiveViewport;
		let yParams: ScalerParams = new ScalerParams(1, XamGeographicMap._unitRect, this.viewportRect, this.yAxis.isInverted);
		yParams.effectiveViewportRect = this.effectiveViewport;
		let tsLeft: number = this.xAxis.getScaledValue(XamGeographicMap._defaultWorldRect.left, xParams);
		let tsRight: number = this.xAxis.getScaledValue(XamGeographicMap._defaultWorldRect.right, xParams);
		let tsBottom: number = this.yAxis.getScaledValue(XamGeographicMap._defaultWorldRect.top, yParams);
		let tsTop: number = this.yAxis.getScaledValue(XamGeographicMap._defaultWorldRect.bottom, yParams);
		this._scaleTilesetRect = new Rect(0, tsLeft / this.viewportRect.width, tsTop / this.viewportRect.height, (tsRight - tsLeft) / this.viewportRect.width, (tsBottom - tsTop) / this.viewportRect.height);
		let left: number = baseRect.left;
		let top: number = baseRect.top;
		if (this.windowRect.width > this._scaleTilesetRect.width) {
			left = 0.5 - (this.windowRect.width / 2);
		} else if (left + baseRect.width > this._scaleTilesetRect.right) {
			left = this._scaleTilesetRect.right - this.windowRect.width;
		} else if (left < this._scaleTilesetRect.left) {
			left = this._scaleTilesetRect.left;
		}
		if (this.windowRect.height > this._scaleTilesetRect.height) {
			top = 0.5 - (this.windowRect.height / 2);
		} else if (top + this.windowRect.height > this._scaleTilesetRect.bottom) {
			top = this._scaleTilesetRect.bottom - this.windowRect.height;
		} else if (top < this._scaleTilesetRect.top) {
			top = this._scaleTilesetRect.top;
		}
		return new Rect(0, left, top, baseRect.width, baseRect.height);
	}
	protected computeEffectiveViewport(viewportRect: Rect): Rect {
		super.computeEffectiveViewport(this.viewportRect);
		if (viewportRect.isEmpty) {
			return Rect.empty;
		}
		let effectiveViewportRect: Rect;
		if (viewportRect.width > viewportRect.height) {
			let offset: number = intDivide(<number>truncate((viewportRect.width - viewportRect.height)), 2);
			effectiveViewportRect = new Rect(0, viewportRect.left + offset, viewportRect.top, viewportRect.height, viewportRect.height);
		} else {
			let offset1: number = intDivide(<number>truncate((viewportRect.height - viewportRect.width)), 2);
			effectiveViewportRect = new Rect(0, viewportRect.left, viewportRect.top + offset1, viewportRect.width, viewportRect.width);
		}
		return effectiveViewportRect;
	}
	getEffectiveViewport(viewportRect: Rect): Rect {
		return this.computeEffectiveViewport(viewportRect);
	}
	protected createView(): SeriesViewerView {
		return new XamGeographicMapView(this);
	}
	getBrushByIndex(index: number): Brush {
		return this.xamGeographicMapView.getBrushByIndex(index);
	}
	getOutlineByIndex(index: number): Brush {
		return this.xamGeographicMapView.getOutlineByIndex(index);
	}
	private initializeAxis(axis: Axis): void {
		if (axis != null) {
			axis.seriesViewer = this;
		}
	}
	protected onViewCreated(view: SeriesViewerView): void {
		super.onViewCreated(view);
		this.xamGeographicMapView = <XamGeographicMapView>view;
	}
	processPlotAreaSizeChanged(oldGridAreaRect: Rect, newGridAreaRect: Rect): void {
		super.processPlotAreaSizeChanged(oldGridAreaRect, newGridAreaRect);
		this.updateAxisViewport(this.xAxis);
		this.updateAxisViewport(this.yAxis);
		if (Rect.l_op_Inequality(oldGridAreaRect, newGridAreaRect)) {
			this.slideActualWindowRectToGeographicPeg();
		}
		this.zoomImmediate();
	}
	static readonly windowScalePropertyName: string = "WindowScale";
	static readonly windowScaleProperty: DependencyProperty = DependencyProperty.register(XamGeographicMap.windowScalePropertyName, Number_$type, (<any>XamGeographicMap).$type, new PropertyMetadata(2, NaN, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<XamGeographicMap>((<any>XamGeographicMap).$type, sender)).raisePropertyChanged(XamGeographicMap.windowScalePropertyName, e.oldValue, e.newValue)));
	get windowScale(): number {
		return <number>this.getValue(XamGeographicMap.windowScaleProperty);
	}
	set windowScale(value: number) {
		this.setValue(XamGeographicMap.windowScaleProperty, value);
	}
	private _actualWindowScale: number = 1;
	static readonly actualWindowScalePropertyName: string = "ActualWindowScale";
	get actualWindowScale(): number {
		return this._actualWindowScale;
	}
	set actualWindowScale(value: number) {
		let oldValue = this._actualWindowScale;
		this._actualWindowScale = value;
		this.raisePropertyChanged(XamGeographicMap.actualWindowScalePropertyName, oldValue, this._actualWindowScale);
	}
	getActualWindowScaleHorizontal(): number {
		return this.actualWindowScale;
	}
	getActualWindowScaleVertical(): number {
		return this.actualWindowScale;
	}
	protected updateAcutalWindowProperties(): void {
		super.updateAcutalWindowProperties();
		let scale = Math.min(this.actualWindowRect.width, this.actualWindowRect.height);
		this.actualWindowScale = scale;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case SeriesViewer.windowRectPropertyName:
			this.updateGeographicPeg();
			break;

			case XamGeographicMap.backgroundContentPropertyName:
			if (this.backgroundImagery != null) {
				let $t = this.backgroundImagery;
				$t.imageTilesReady = delegateRemove($t.imageTilesReady, runOn(this, this.msi_ImageTilesReady));
				this.backgroundImagery.deferralHandler = null;
			}
			this.backgroundImagery = typeCast<GeographicMapImagery>((<any>GeographicMapImagery).$type, this.backgroundContent);
			if (this.backgroundImagery != null) {
				let $t1 = this.backgroundImagery;
				$t1.imageTilesReady = delegateCombine($t1.imageTilesReady, runOn(this, this.msi_ImageTilesReady));
				this.backgroundImagery.deferralHandler = this;
			}
			this.xamGeographicMapView.onBackgroundImageryProvided(typeCast<GeographicMapImagery>((<any>GeographicMapImagery).$type, oldValue), typeCast<GeographicMapImagery>((<any>GeographicMapImagery).$type, newValue));
			if (this.backgroundImagery != null) {
				this.backgroundImagery.geographicMap = this;
				this.xamGeographicMapView.actualWindowRectUpdated(this.actualWindowRect);
				this.xamGeographicMapView.pixelScalingRatioChanged1(this.actualPixelScalingRatio);
			}
			break;

			case XamGeographicMap.yAxisPropertyName:

			case XamGeographicMap.xAxisPropertyName:
			this.unInitializeAxis(<Axis>oldValue);
			this.initializeAxis(<Axis>newValue);
			break;

			case XamGeographicMap.worldRectPropertyName:
			this.windowRect = XamGeographicMap._unitRect;
			this.invalidateActualWorldRect();
			this.updateAxisRange();
			this.updateGeographicPeg();
			this.actualWindowRect = this.calculateActualWindowRect();
			this.xamGeographicMapView.backgroundContentNeedsRefresh();
			break;

			case SeriesViewer.actualWindowRectPropertyName:
			this.xamGeographicMapView.actualWindowRectUpdated(this.actualWindowRect);
			break;

			case XamGeographicMap.actualWorldRectPropertyName:
			for (let ss of fromEnum<Series>(this.series)) {
				ss.renderSeries(false);
			}
			break;

			case XamGeographicMap.windowScalePropertyName:
			this.actualWindowScale = this.windowScale;
			break;

			case XamGeographicMap.actualWindowScalePropertyName:
			if (!this.suspendWindowRect) {
				this.updateWindowRect(this.getActualWindowScaleHorizontal(), this.getActualWindowScaleVertical());
			}
			break;

			case SeriesViewer.actualPixelScalingRatioPropertyName:
			this.xamGeographicMapView.pixelScalingRatioChanged1(this.actualPixelScalingRatio);
			break;

			case XamGeographicMap.zoomablePropertyName:
			this.updateOverviewPlusDetailPaneControlPanelVisibility();
			break;

		}

	}
	imageTilesReady: (sender: any, e: ImageTilesReadyEventArgs) => void = null;
	private msi_ImageTilesReady(sender: any, e: EventArgs): void {
		if (this.imageTilesReady != null) {
			this.imageTilesReady(this, new ImageTilesReadyEventArgs());
		}
	}
	private unInitializeAxis(axis: Axis): void {
		if (axis != null) {
			axis.seriesViewer = null;
		}
	}
	private updateAxisRange(): void {
		if (this.xAxis != null) {
			this.xAxis.minimumValue = this.actualWorldRect.left;
			this.xAxis.maximumValue = this.actualWorldRect.right;
		}
		if (this.yAxis != null) {
			this.yAxis.minimumValue = this.actualWorldRect.top;
			this.yAxis.maximumValue = this.actualWorldRect.bottom;
		}
		this.xAxis.updateRange1(true);
		this.yAxis.updateRange1(true);
	}
	private _xamGeographicMapView: XamGeographicMapView;
	get xamGeographicMapView(): XamGeographicMapView {
		return this._xamGeographicMapView;
	}
	set xamGeographicMapView(value: XamGeographicMapView) {
		this._xamGeographicMapView = value;
	}
	private _fontInfo: FontInfo = null;
	getFontInfo(): FontInfo {
		this._fontInfo = this.xamGeographicMapView.font;
		return this._fontInfo;
	}
	getAxisLineBrush(): Brush {
		return this.xamGeographicMapView.axisLineBrush;
	}
	getFontBrush(): Brush {
		return this.xamGeographicMapView.fontBrush;
	}
	protected setDataSourceForSeries(target: Series, source: any): void {
		if (typeCast<ItfConverter>((<any>ItfConverter).$type, source) !== null) {
			let itf = (<ItfConverter>source);
			let scatter = (<GeographicScatterAreaSeries>target);
			scatter.itemsSource = itf.triangulationSource.points;
			scatter.trianglesSource = itf.triangulationSource.triangles;
		} else {
			super.setDataSourceForSeries(target, source);
		}
	}
	register(source: DependencyObject, handler: (arg1: boolean) => void): void {
		this.registerBackgroundContent(source, handler);
	}
	unRegister(source: DependencyObject): void {
		this.unRegisterBackgroundContent(source);
	}
	deferredRefresh(): void {
		this.deferBackgroundRefresh();
	}
	deferAction(action: () => void): void {
		if (this._renderer != null) {
			this._renderer.setTimeout(<() => void>action, 0);
		} else {
			window.setTimeout(<() => void>action, 0);
		}
	}
	doUpdateOPDMobileMode(mobileMode: boolean): void {
		this.updateOPDMobileMode(mobileMode);
	}
	exportVisualData(): any {
		let cvd = new ChartVisualData();
		let xvd = this.xAxis.exportVisualData();
		let yvd = this.yAxis.exportVisualData();
		cvd.axes.add1(xvd);
		cvd.axes.add1(yvd);
		for (let i = 0; i < this.series.count; i++) {
			let svd = this.series._inner[i].exportVisualData();
			cvd.series.add1(svd);
		}
		cvd.name = this.name;
		cvd.contentArea = RectData.fromRect(this.viewportRect);
		cvd.centralArea = RectData.fromRect(this.viewportRect);
		cvd.plotArea = RectData.fromRect(this.viewportRect);
		return cvd;
	}
	getCurrentContentViewport(viewportRect: Rect, effectiveViewportRect: Rect, windowRect: Rect): Rect {
		return viewportRect;
	}
	onImageTilesReady(): void {
	}
	private _pendingZoomChange: Rect = Rect.empty;
	protected get pendingZoomChange(): Rect {
		return this._pendingZoomChange;
	}
	protected set pendingZoomChange(value: Rect) {
		this._pendingZoomChange = value;
	}
	zoomToGeographic(geographic: Rect): void {
		this.pendingZoomChange = geographic;
		this.zoomImmediate();
	}
	private zoomImmediate(): void {
		if (this.zoomIsReady && !this.pendingZoomChange.isEmpty) {
			let window = this.getZoomFromGeographicRect(this.pendingZoomChange);
			this.pendingZoomChange = Rect.empty;
			this.windowNotify(window, false);
		}
	}
	get zoomIsReady(): boolean {
		return !this.viewportRect.isEmpty && !this.effectiveViewport.isEmpty;
	}
}

/**
 * @hidden 
 */
export abstract class GeographicMapImagery extends Control implements INotifyPropertyChanged {
	static $t: Type = markType(GeographicMapImagery, 'GeographicMapImagery', (<any>Control).$type, [INotifyPropertyChanged_$type]);
	private static readonly multiScaleImageTemplatePartName: string = "MultiScaleImage";
	constructor(tileSource: XamMultiScaleTileSource) {
		super();
		this.defaultStyleKey = (<any>GeographicMapImagery).$type;
		this.tileSource = tileSource;
		this.view = this.createView();
		this.onViewCreated(this.view);
	}
	protected onViewCreated(view: GeographicMapImageryView): void {
	}
	protected createView(): GeographicMapImageryView {
		return new GeographicMapImageryView(this);
	}
	private _view: GeographicMapImageryView;
	protected get view(): GeographicMapImageryView {
		return this._view;
	}
	protected set view(value: GeographicMapImageryView) {
		this._view = value;
	}
	private _deferralHandler: IMapRenderDeferralHandler = null;
	get deferralHandler(): IMapRenderDeferralHandler {
		return this._deferralHandler;
	}
	set deferralHandler(value: IMapRenderDeferralHandler) {
		this._deferralHandler = value;
		if (this.multiScaleImage != null) {
			this.multiScaleImage.deferralHandler = value;
		}
	}
	private multiScaleImage_ImageTilesReady(sender: any, e: EventArgs): void {
		if (this.imageTilesReady != null) {
			this.imageTilesReady(this, new ImageTilesReadyEventArgs());
		}
	}
	onMSIProvided(): void {
		let $t = this.multiScaleImage;
		$t.imageTilesReady = delegateCombine($t.imageTilesReady, runOn(this, this.multiScaleImage_ImageTilesReady));
		this.multiScaleImage.deferralHandler = this.deferralHandler;
		let $t1 = this.multiScaleImage;
		$t1.imagesChanged = delegateCombine($t1.imagesChanged, runOn(this, this.multiScaleImage_ImagesChanged));
		let $t2 = this.multiScaleImage;
		$t2.downloadingImage = delegateCombine($t2.downloadingImage, runOn(this, this.multiScaleImage_DownloadingImage));
		let $t3 = this.multiScaleImage;
		$t3.cancellingImage = delegateCombine($t3.cancellingImage, runOn(this, this.multiScaleImage_CancellingImage));
		this.multiScaleImage.referer = this.referer;
		this.multiScaleImage.userAgent = this.userAgent;
	}
	private multiScaleImage_DownloadingImage(sender: any, args: DownloadingMultiScaleImageEventArgs): void {
		if (this.downloadingImage != null) {
			this.downloadingImage(this, args);
		}
	}
	private multiScaleImage_CancellingImage(sender: any, args: CancellingMultiScaleImageEventArgs): void {
		if (this.cancellingImage != null) {
			this.cancellingImage(this, args);
		}
	}
	private updateWindowRect(): void {
		if (this.multiScaleImage != null) {
			this.view.needsRefresh();
		}
	}
	protected onPropertyUpdated(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case GeographicMapImagery.windowRectPropertyName:
			this.updateWindowRect();
			break;

			case GeographicMapImagery.geographicMapPropertyName:
			this.view.needsRefresh();
			break;

			case GeographicMapImagery.refererPropertyName:
			if (this.multiScaleImage != null) {
				this.multiScaleImage.referer = this.referer;
			}
			break;

			case GeographicMapImagery.userAgentPropertyName:
			if (this.multiScaleImage != null) {
				this.multiScaleImage.userAgent = this.userAgent;
			}
			break;

		}

		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
	private static readonly windowRectPropertyName: string = "WindowRect";
	static readonly windowRectProperty: DependencyProperty = DependencyProperty.register(GeographicMapImagery.windowRectPropertyName, (<any>Rect).$type, (<any>GeographicMapImagery).$type, new PropertyMetadata(2, Rect.empty, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<GeographicMapImagery>((<any>GeographicMapImagery).$type, sender)).onPropertyUpdated(GeographicMapImagery.windowRectPropertyName, e.oldValue, e.newValue)));
	get windowRect(): Rect {
		return <Rect>this.getValue(GeographicMapImagery.windowRectProperty);
	}
	set windowRect(value: Rect) {
		this.setValue(GeographicMapImagery.windowRectProperty, value);
	}
	private static readonly geographicMapPropertyName: string = "GeographicMap";
	get geographicMap(): XamGeographicMap {
		return <XamGeographicMap>this.getValue(GeographicMapImagery.geographicMapProperty);
	}
	set geographicMap(value: XamGeographicMap) {
		this.setValue(GeographicMapImagery.geographicMapProperty, value);
	}
	static readonly geographicMapProperty: DependencyProperty = DependencyProperty.register(GeographicMapImagery.geographicMapPropertyName, (<any>XamGeographicMap).$type, (<any>GeographicMapImagery).$type, new PropertyMetadata(2, null, GeographicMapImagery.onGeographicMapChanged1));
	private static onGeographicMapChanged1(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		(<GeographicMapImagery>d).onGeographicMapChanged(<XamGeographicMap>e.oldValue, <XamGeographicMap>e.newValue);
	}
	private onGeographicMapChanged(oldValue: XamGeographicMap, newValue: XamGeographicMap): void {
		this.onPropertyUpdated(GeographicMapImagery.geographicMapPropertyName, oldValue, newValue);
	}
	clearTileCache(): void {
		if (this.multiScaleImage != null) {
			this.multiScaleImage.invalidateTileLayer(0, 0, 0, 0);
		}
	}
	imageTilesReady: (sender: any, e: ImageTilesReadyEventArgs) => void = null;
	private _multiScaleImage: XamMultiScaleImage = null;
	get multiScaleImage(): XamMultiScaleImage {
		return this._multiScaleImage;
	}
	set multiScaleImage(value: XamMultiScaleImage) {
		this._multiScaleImage = value;
		if (this.propertyChanged != null) {
			this.propertyChanged(this, new PropertyChangedEventArgs("MultiScaleImage"));
		}
	}
	private _tileSource: XamMultiScaleTileSource = null;
	get tileSource(): XamMultiScaleTileSource {
		return this._tileSource;
	}
	set tileSource(value: XamMultiScaleTileSource) {
		this._tileSource = value;
	}
	propertyChanged: (sender: any, e: PropertyChangedEventArgs) => void = null;
	refresh(finalSize: Size): Size {
		if (this.geographicMap == null || finalSize.width < 1 || finalSize.height < 1) {
			return finalSize;
		}
		let viewportRect = new Rect(0, 0, 0, finalSize.width, finalSize.height);
		let effectiveViewportRect = this.geographicMap.getEffectiveViewport(viewportRect);
		let defaultWorldRect: Rect = XamGeographicMap._defaultWorldRect;
		let actualWorldRect: Rect = this.geographicMap.actualWorldRect;
		let windowRectZoom: number = Math.min(this.windowRect.height, this.windowRect.width);
		let worldRectZoom: number = actualWorldRect.width / defaultWorldRect.width;
		this.multiScaleImage.viewportWidth = (viewportRect.width / effectiveViewportRect.width) * windowRectZoom * worldRectZoom;
		let xaxis: NumericXAxis = this.geographicMap.xAxis;
		let yaxis: NumericYAxis = this.geographicMap.yAxis;
		let xParams: ScalerParams = new ScalerParams(1, this.windowRect, viewportRect, xaxis.isInverted);
		xParams.effectiveViewportRect = effectiveViewportRect;
		let yParams: ScalerParams = new ScalerParams(1, this.windowRect, viewportRect, yaxis.isInverted);
		yParams.effectiveViewportRect = effectiveViewportRect;
		let pixelOffsetX: number = xaxis.getScaledValue(defaultWorldRect.left, xParams);
		let pixelOffsetY: number = yaxis.getScaledValue(defaultWorldRect.bottom, yParams);
		let scaleOffsetX: number = (-pixelOffsetX / viewportRect.width) * this.multiScaleImage.viewportWidth;
		let scaleOffsetY: number = (-pixelOffsetY / viewportRect.height) * this.multiScaleImage.viewportWidth * (viewportRect.height / viewportRect.width);
		this.multiScaleImage.viewportOrigin = <Point>{ $type: Point_$type, x: scaleOffsetX, y: scaleOffsetY };
		return finalSize;
	}
	provideContext(context: RenderingContext): void {
		this.view.onContextProvided(context);
	}
	provideViewport(MapViewport: Rect): void {
		this.view.onViewportProvided(MapViewport);
	}
	provideRenderer(renderer: DomRenderer): void {
		this.view.onRendererProvided(renderer);
	}
	imagesChanged: (sender: any, e: ImagesChangedEventArgs) => void = null;
	private multiScaleImage_ImagesChanged(sender: any, e: EventArgs): void {
		if (this.imagesChanged != null) {
			this.imagesChanged(this, new ImagesChangedEventArgs());
		}
	}
	needsRefresh(): void {
		this.view.needsRefresh();
	}
	pixelScalingRatioChanged(pixelRatio: number): void {
		this.view.pixelScalingRatioChanged(pixelRatio);
	}
	cancellingImage: (sender: any, args: CancellingMultiScaleImageEventArgs) => void = null;
	downloadingImage: (sender: any, args: DownloadingMultiScaleImageEventArgs) => void = null;
	static readonly refererPropertyName: string = "Referer";
	get referer(): string {
		return <string>this.getValue(GeographicMapImagery.refererProperty);
	}
	set referer(value: string) {
		this.setValue(GeographicMapImagery.refererProperty, value);
	}
	static readonly refererProperty: DependencyProperty = DependencyProperty.register(GeographicMapImagery.refererPropertyName, String_$type, (<any>GeographicMapImagery).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<GeographicMapImagery>((<any>GeographicMapImagery).$type, o)).onPropertyUpdated(GeographicMapImagery.refererPropertyName, e.oldValue, e.newValue)));
	static readonly userAgentPropertyName: string = "UserAgent";
	get userAgent(): string {
		return <string>this.getValue(GeographicMapImagery.userAgentProperty);
	}
	set userAgent(value: string) {
		this.setValue(GeographicMapImagery.userAgentProperty, value);
	}
	static readonly userAgentProperty: DependencyProperty = DependencyProperty.register(GeographicMapImagery.userAgentPropertyName, String_$type, (<any>GeographicMapImagery).$type, new PropertyMetadata(2, null, (o: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<GeographicMapImagery>((<any>GeographicMapImagery).$type, o)).onPropertyUpdated(GeographicMapImagery.userAgentPropertyName, e.oldValue, e.newValue)));
}

/**
 * @hidden 
 */
export class GeographicMapImageryView extends Base {
	static $t: Type = markType(GeographicMapImageryView, 'GeographicMapImageryView');
	constructor(model: GeographicMapImagery) {
		super();
		this.mapViewport = Rect.empty;
		this.model = model;
		this.model.multiScaleImage = new XamMultiScaleImage();
		this.model.multiScaleImage.source = this.model.tileSource;
		this.model.onMSIProvided();
	}
	private _model: GeographicMapImagery = null;
	protected get model(): GeographicMapImagery {
		return this._model;
	}
	protected set model(value: GeographicMapImagery) {
		this._model = value;
	}
	needsRefresh(): void {
		if (this.mapViewport.isEmpty) {
			return;
		}
		this.model.refresh(new Size(1, this.mapViewport.width, this.mapViewport.height));
	}
	private _mapViewport: Rect = null;
	protected get mapViewport(): Rect {
		return this._mapViewport;
	}
	protected set mapViewport(value: Rect) {
		this._mapViewport = value;
	}
	onContextProvided(context: RenderingContext): void {
		this.model.multiScaleImage.provideContext(context);
	}
	private _renderer: DomRenderer = null;
	private get renderer(): DomRenderer {
		return this._renderer;
	}
	private set renderer(value: DomRenderer) {
		this._renderer = value;
	}
	onRendererProvided(renderer: DomRenderer): void {
		this.renderer = renderer;
		this.model.multiScaleImage.provideRenderer(renderer);
	}
	onViewportProvided(mapViewport: Rect): void {
		this.mapViewport = mapViewport;
		this.model.multiScaleImage.provideViewport(mapViewport);
		this.model.needsRefresh();
	}
	private _pixelRatio: number = 1;
	get pixelRatio(): number {
		return this._pixelRatio;
	}
	pixelScalingRatioChanged(pixelRatio: number): void {
		this._pixelRatio = pixelRatio;
		this.model.multiScaleImage.pixelScalingRatioChanged(pixelRatio);
	}
}

/**
 * @hidden 
 */
export class GeographicXYTriangulatingSeriesView extends HostSeriesView {
	static $t: Type = markType(GeographicXYTriangulatingSeriesView, 'GeographicXYTriangulatingSeriesView', (<any>HostSeriesView).$type);
	constructor(model: GeographicXYTriangulatingSeries) {
		super(model);
		this.geographicXYModel = model;
	}
	private _geographicXYModel: GeographicXYTriangulatingSeries = null;
	protected get geographicXYModel(): GeographicXYTriangulatingSeries {
		return this._geographicXYModel;
	}
	protected set geographicXYModel(value: GeographicXYTriangulatingSeries) {
		this._geographicXYModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		let hostedSeries = <ScatterTriangulationSeries>this.geographicXYModel.hostedSeries;
		hostedSeries.xMemberPath = this.geographicXYModel.longitudeMemberPath;
		hostedSeries.yMemberPath = this.geographicXYModel.latitudeMemberPath;
		hostedSeries.trianglesSource = this.geographicXYModel.trianglesSource;
		hostedSeries.triangleVertexMemberPath1 = this.geographicXYModel.triangleVertexMemberPath1;
		hostedSeries.triangleVertexMemberPath2 = this.geographicXYModel.triangleVertexMemberPath2;
		hostedSeries.triangleVertexMemberPath3 = this.geographicXYModel.triangleVertexMemberPath3;
	}
	onSeriesViewerUpdated(): void {
		let hostedSeries = <ScatterTriangulationSeries>this.geographicXYModel.hostedSeries;
		if (this.geographicXYModel.seriesViewer == null) {
			hostedSeries.xAxis = null;
			hostedSeries.yAxis = null;
			return;
		}
		hostedSeries.xAxis = (<XamGeographicMap>this.geographicXYModel.seriesViewer).xAxis;
		hostedSeries.yAxis = (<XamGeographicMap>this.geographicXYModel.seriesViewer).yAxis;
	}
	longitudeMemberPathUpdated(): void {
		(<ScatterTriangulationSeries>this.geographicXYModel.hostedSeries).xMemberPath = this.geographicXYModel.longitudeMemberPath;
	}
	latitudeMemberPathUpdated(): void {
		(<ScatterTriangulationSeries>this.geographicXYModel.hostedSeries).yMemberPath = this.geographicXYModel.latitudeMemberPath;
	}
	trianglesSourceUpdated(): void {
		(<ScatterTriangulationSeries>this.geographicXYModel.hostedSeries).trianglesSource = this.geographicXYModel.trianglesSource;
	}
	triangleVertexMemberPath1Updated(): void {
		(<ScatterTriangulationSeries>this.geographicXYModel.hostedSeries).triangleVertexMemberPath1 = this.geographicXYModel.triangleVertexMemberPath1;
	}
	triangleVertexMemberPath2Updated(): void {
		(<ScatterTriangulationSeries>this.geographicXYModel.hostedSeries).triangleVertexMemberPath2 = this.geographicXYModel.triangleVertexMemberPath2;
	}
	triangleVertexMemberPath3Updated(): void {
		(<ScatterTriangulationSeries>this.geographicXYModel.hostedSeries).triangleVertexMemberPath3 = this.geographicXYModel.triangleVertexMemberPath3;
	}
}

/**
 * @hidden 
 */
export class GeographicScatterAreaSeriesView extends GeographicXYTriangulatingSeriesView {
	static $t: Type = markType(GeographicScatterAreaSeriesView, 'GeographicScatterAreaSeriesView', (<any>GeographicXYTriangulatingSeriesView).$type);
	constructor(model: GeographicScatterAreaSeries) {
		super(model);
		this.geographicScatterAreaModel = model;
	}
	private _geographicScatterAreaModel: GeographicScatterAreaSeries = null;
	private get geographicScatterAreaModel(): GeographicScatterAreaSeries {
		return this._geographicScatterAreaModel;
	}
	private set geographicScatterAreaModel(value: GeographicScatterAreaSeries) {
		this._geographicScatterAreaModel = value;
	}
	onHostedSeriesUpdated(): void {
		super.onHostedSeriesUpdated();
		if (this.geographicScatterAreaModel.hostedScatterAreaSeries != null) {
			this.geographicScatterAreaModel.hostedScatterAreaSeries.colorMemberPath = this.geographicScatterAreaModel.colorMemberPath;
			this.geographicScatterAreaModel.hostedScatterAreaSeries.colorScale = this.geographicScatterAreaModel.colorScale;
		}
	}
	colorMemberPathUpdated(): void {
		if (this.geographicScatterAreaModel.hostedScatterAreaSeries != null) {
			this.geographicScatterAreaModel.hostedScatterAreaSeries.colorMemberPath = this.geographicScatterAreaModel.colorMemberPath;
		}
	}
	colorScaleUpdated(): void {
		if (this.geographicScatterAreaModel.hostedScatterAreaSeries != null) {
			this.geographicScatterAreaModel.hostedScatterAreaSeries.colorScale = this.geographicScatterAreaModel.colorScale;
		}
	}
}

/**
 * @hidden 
 */
export class XamGeographicMapView extends SeriesViewerView {
	static $t: Type = markType(XamGeographicMapView, 'XamGeographicMapView', (<any>SeriesViewerView).$type);
	constructor(model: XamGeographicMap) {
		super(model);
		this.mapViewport = Rect.empty;
		this.mapModel = model;
		this.mapModel.dragModifier = ModifierKeys.Control;
		this.mapModel.windowRectMinWidth = 5E-06;
	}
	resolveDefaultInteraction(isFinger: boolean): InteractionState {
		return InteractionState.DragPan;
	}
	actualMobileModeChanged(actualMobileMode: boolean): void {
		this.viewManager.updateMobileMode(actualMobileMode);
		this.mapModel.doUpdateOPDMobileMode(actualMobileMode);
		this.updateOverviewPlusDetailPaneVisibility();
	}
	private _mapModel: XamGeographicMap = null;
	protected get mapModel(): XamGeographicMap {
		return this._mapModel;
	}
	protected set mapModel(value: XamGeographicMap) {
		this._mapModel = value;
	}
	protected get_requiresBackground(): boolean {
		return true;
	}
	setDefaultBrushes(): void {
		let brushes: BrushCollection;
		let outlines: BrushCollection;
		let fontBrush: Brush;
		let font: FontInfo;
		let axisLineBrush: Brush;
		let $ret = this.viewManager.getDefaultPalette1(brushes, outlines, fontBrush, font, axisLineBrush);
		brushes = $ret.p0;
		outlines = $ret.p1;
		fontBrush = $ret.p2;
		font = $ret.p3;
		axisLineBrush = $ret.p4;
		this.fontBrush = fontBrush;
		this.font = font;
		this.axisLineBrush = axisLineBrush;
	}
	getMarkerBrushByIndex(index: number): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(0,0,0,1)";
			return $ret;
		})());
	}
	getMarkerOutlineByIndex(index: number): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "white";
			return $ret;
		})());
	}
	getBrushByIndex(index: number): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "rgba(50,50,50,.5)";
			return $ret;
		})());
	}
	getOutlineByIndex(index: number): Brush {
		return ((() => {
			let $ret = new Brush();
			$ret.fill = "white";
			return $ret;
		})());
	}
	provideBackgroundContext(context: RenderingContext): void {
		super.provideBackgroundContext(context);
		if (this.mapModel.backgroundContent != null) {
			let imagery: GeographicMapImagery = <GeographicMapImagery>this.mapModel.backgroundContent;
			imagery.provideRenderer(this.viewManager.container);
			imagery.provideContext(context);
		}
	}
	private _mapViewport: Rect = null;
	protected get mapViewport(): Rect {
		return this._mapViewport;
	}
	protected set mapViewport(value: Rect) {
		this._mapViewport = value;
	}
	protected provideBackgroundViewport(viewport: Rect): void {
		super.provideBackgroundViewport(viewport);
		this.mapViewport = viewport;
		if (this.mapModel.backgroundContent != null) {
			let imagery: GeographicMapImagery = <GeographicMapImagery>this.mapModel.backgroundContent;
			imagery.provideViewport(this.mapViewport);
		}
	}
	getViewport(): Rect {
		return new Rect(0, 0, 0, this.mapViewport.width, this.mapViewport.height);
	}
	backgroundContentNeedsRefresh(): void {
		if (this.mapModel.backgroundContent != null) {
			let imagery: GeographicMapImagery = <GeographicMapImagery>this.mapModel.backgroundContent;
			imagery.needsRefresh();
		}
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
	private _font: FontInfo = null;
	get font(): FontInfo {
		return this._font;
	}
	set font(value: FontInfo) {
		this._font = value;
	}
	actualWindowRectUpdated(actualWindowRect: Rect): void {
		if (this.mapModel.backgroundImagery != null) {
			this.mapModel.backgroundImagery.windowRect = actualWindowRect;
		}
	}
	onBackgroundImageryProvided(oldImagery: GeographicMapImagery, newImagery: GeographicMapImagery): void {
		if (this.mapModel.backgroundImagery != null) {
			this.mapModel.backgroundImagery.windowRect = this.mapModel.actualWindowRect;
		}
		if (oldImagery != null) {
			let msi = oldImagery.multiScaleImage;
			if (msi != null) {
				this.mapModel.canvasRenderScheduler.dependsOn.remove(msi.tileScheduler);
			}
			oldImagery.provideContext(null);
			oldImagery.provideRenderer(null);
		}
		if (newImagery != null) {
			let msi1 = newImagery.multiScaleImage;
			if (msi1 != null) {
				this.mapModel.canvasRenderScheduler.dependsOn.add(msi1.tileScheduler);
			}
			if (!this.mapViewport.isEmpty) {
				this.provideBackgroundViewport(this.mapViewport);
			}
			if (this.backgroundContext != null) {
				this.provideBackgroundContext(this.backgroundContext);
			}
		}
		if (newImagery == null) {
			this.clearBackgroundContent(this.backgroundContext);
		}
	}
	private clearBackgroundContent(BackgroundContext: RenderingContext): void {
		BackgroundContext.clearRectangle(this.mapViewport.left, this.mapViewport.top, this.mapViewport.width, this.mapViewport.height);
	}
	protected renderOverride(): void {
		this.horizontalCrosshairLine.strokeThickness = 1;
		this.verticalCrosshairLine.strokeThickness = 1;
		this.horizontalCrosshairLine._stroke = this.fontBrush;
		this.verticalCrosshairLine._stroke = this.fontBrush;
		super.renderOverride();
	}
	pixelScalingRatioChanged1(pixelRatio: number): void {
		this._pixelScalingRatio = pixelRatio;
		if (this.mapModel.backgroundContent != null) {
			(<GeographicMapImagery>this.mapModel.backgroundContent).pixelScalingRatioChanged(pixelRatio);
		}
	}
	private _pixelScalingRatio: number = NaN;
	get pixelScalingRatio(): number {
		return this._pixelScalingRatio;
	}
	set pixelScalingRatio(value: number) {
		this._pixelScalingRatio = value;
	}
}

/**
 * @hidden 
 */
export class OpenStreetMapImagery extends GeographicMapImagery {
	static $t: Type = markType(OpenStreetMapImagery, 'OpenStreetMapImagery', (<any>GeographicMapImagery).$type);
	constructor() {
		super(new OpenStreetMapTileSource());
	}
	static readonly tilePathPropertyName: string = "TilePath";
	get tilePath(): string {
		return <string>this.getValue(OpenStreetMapImagery.tilePathProperty);
	}
	set tilePath(value: string) {
		this.setValue(OpenStreetMapImagery.tilePathProperty, value);
	}
	static readonly tilePathProperty: DependencyProperty = DependencyProperty.register(OpenStreetMapImagery.tilePathPropertyName, String_$type, (<any>OpenStreetMapImagery).$type, new PropertyMetadata(2, null, OpenStreetMapImagery.onTilePathChanged));
	private static onTilePathChanged(d: DependencyObject, e: DependencyPropertyChangedEventArgs): void {
		(<OpenStreetMapImagery>d).onPropertyChanged(OpenStreetMapImagery.tilePathPropertyName, e.oldValue, e.newValue);
	}
	private onPropertyChanged(propertyName: string, oldValue: any, newValue: any): void {
		switch (propertyName) {
			case OpenStreetMapImagery.tilePathPropertyName:
			(<OpenStreetMapTileSource>this.tileSource).setTilePathUrl(newValue == null ? null : <string>newValue);
			this.view.needsRefresh();
			break;

		}

		super.onPropertyUpdated(propertyName, oldValue, newValue);
	}
}

/**
 * @hidden 
 */
export abstract class GeographicXYTriangulatingSeries extends GeographicMapSeriesHost {
	static $t: Type = markType(GeographicXYTriangulatingSeries, 'GeographicXYTriangulatingSeries', (<any>GeographicMapSeriesHost).$type);
	protected createView(): SeriesView {
		return new GeographicXYTriangulatingSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.geographicXYView = <GeographicXYTriangulatingSeriesView>view;
	}
	private _geographicXYView: GeographicXYTriangulatingSeriesView;
	get geographicXYView(): GeographicXYTriangulatingSeriesView {
		return this._geographicXYView;
	}
	set geographicXYView(value: GeographicXYTriangulatingSeriesView) {
		this._geographicXYView = value;
	}
	static readonly longitudeMemberPathPropertyName: string = "LongitudeMemberPath";
	static readonly longitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicXYTriangulatingSeries.longitudeMemberPathPropertyName, String_$type, (<any>GeographicXYTriangulatingSeries).$type, new PropertyMetadata(2, "pointX", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicXYTriangulatingSeries>sender).raisePropertyChanged(GeographicXYTriangulatingSeries.longitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get longitudeMemberPath(): string {
		return <string>this.getValue(GeographicXYTriangulatingSeries.longitudeMemberPathProperty);
	}
	set longitudeMemberPath(value: string) {
		this.setValue(GeographicXYTriangulatingSeries.longitudeMemberPathProperty, value);
	}
	static readonly latitudeMemberPathPropertyName: string = "LatitudeMemberPath";
	static readonly latitudeMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicXYTriangulatingSeries.latitudeMemberPathPropertyName, String_$type, (<any>GeographicXYTriangulatingSeries).$type, new PropertyMetadata(2, "pointY", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicXYTriangulatingSeries>sender).raisePropertyChanged(GeographicXYTriangulatingSeries.latitudeMemberPathPropertyName, e.oldValue, e.newValue)));
	get latitudeMemberPath(): string {
		return <string>this.getValue(GeographicXYTriangulatingSeries.latitudeMemberPathProperty);
	}
	set latitudeMemberPath(value: string) {
		this.setValue(GeographicXYTriangulatingSeries.latitudeMemberPathProperty, value);
	}
	static readonly trianglesSourcePropertyName: string = "TrianglesSource";
	static readonly trianglesSourceProperty: DependencyProperty = DependencyProperty.register(GeographicXYTriangulatingSeries.trianglesSourcePropertyName, IEnumerable_$type, (<any>GeographicXYTriangulatingSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicXYTriangulatingSeries>sender).raisePropertyChanged(GeographicXYTriangulatingSeries.trianglesSourcePropertyName, e.oldValue, e.newValue)));
	get trianglesSource(): IEnumerable {
		return <IEnumerable><any>this.getValue(GeographicXYTriangulatingSeries.trianglesSourceProperty);
	}
	set trianglesSource(value: IEnumerable) {
		this.setValue(GeographicXYTriangulatingSeries.trianglesSourceProperty, value);
	}
	static readonly triangleVertexMemberPath1PropertyName: string = "TriangleVertexMemberPath1";
	static readonly triangleVertexMemberPath1Property: DependencyProperty = DependencyProperty.register(GeographicXYTriangulatingSeries.triangleVertexMemberPath1PropertyName, String_$type, (<any>GeographicXYTriangulatingSeries).$type, new PropertyMetadata(2, "v1", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicXYTriangulatingSeries>sender).raisePropertyChanged(GeographicXYTriangulatingSeries.triangleVertexMemberPath1PropertyName, e.oldValue, e.newValue)));
	get triangleVertexMemberPath1(): string {
		return <string>this.getValue(GeographicXYTriangulatingSeries.triangleVertexMemberPath1Property);
	}
	set triangleVertexMemberPath1(value: string) {
		this.setValue(GeographicXYTriangulatingSeries.triangleVertexMemberPath1Property, value);
	}
	static readonly triangleVertexMemberPath2PropertyName: string = "TriangleVertexMemberPath2";
	static readonly triangleVertexMemberPath2Property: DependencyProperty = DependencyProperty.register(GeographicXYTriangulatingSeries.triangleVertexMemberPath2PropertyName, String_$type, (<any>GeographicXYTriangulatingSeries).$type, new PropertyMetadata(2, "v2", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicXYTriangulatingSeries>sender).raisePropertyChanged(GeographicXYTriangulatingSeries.triangleVertexMemberPath2PropertyName, e.oldValue, e.newValue)));
	get triangleVertexMemberPath2(): string {
		return <string>this.getValue(GeographicXYTriangulatingSeries.triangleVertexMemberPath2Property);
	}
	set triangleVertexMemberPath2(value: string) {
		this.setValue(GeographicXYTriangulatingSeries.triangleVertexMemberPath2Property, value);
	}
	static readonly triangleVertexMemberPath3PropertyName: string = "TriangleVertexMemberPath3";
	static readonly triangleVertexMemberPath3Property: DependencyProperty = DependencyProperty.register(GeographicXYTriangulatingSeries.triangleVertexMemberPath3PropertyName, String_$type, (<any>GeographicXYTriangulatingSeries).$type, new PropertyMetadata(2, "v3", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicXYTriangulatingSeries>sender).raisePropertyChanged(GeographicXYTriangulatingSeries.triangleVertexMemberPath3PropertyName, e.oldValue, e.newValue)));
	get triangleVertexMemberPath3(): string {
		return <string>this.getValue(GeographicXYTriangulatingSeries.triangleVertexMemberPath3Property);
	}
	set triangleVertexMemberPath3(value: string) {
		this.setValue(GeographicXYTriangulatingSeries.triangleVertexMemberPath3Property, value);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.seriesViewerPropertyName:
			this.geographicXYView.onSeriesViewerUpdated();
			break;

			case GeographicXYTriangulatingSeries.longitudeMemberPathPropertyName:
			this.geographicXYView.longitudeMemberPathUpdated();
			break;

			case GeographicXYTriangulatingSeries.latitudeMemberPathPropertyName:
			this.geographicXYView.latitudeMemberPathUpdated();
			break;

			case GeographicXYTriangulatingSeries.trianglesSourcePropertyName:
			this.geographicXYView.trianglesSourceUpdated();
			break;

			case GeographicXYTriangulatingSeries.triangleVertexMemberPath1PropertyName:
			this.geographicXYView.triangleVertexMemberPath1Updated();
			break;

			case GeographicXYTriangulatingSeries.triangleVertexMemberPath2PropertyName:
			this.geographicXYView.triangleVertexMemberPath2Updated();
			break;

			case GeographicXYTriangulatingSeries.triangleVertexMemberPath3PropertyName:
			this.geographicXYView.triangleVertexMemberPath3Updated();
			break;

		}

	}
}

/**
 * @hidden 
 */
export class GeographicScatterAreaSeries extends GeographicXYTriangulatingSeries {
	static $t: Type = markType(GeographicScatterAreaSeries, 'GeographicScatterAreaSeries', (<any>GeographicXYTriangulatingSeries).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>GeographicScatterAreaSeries).$type;
	}
	static readonly colorMemberPathPropertyName: string = "ColorMemberPath";
	static readonly colorMemberPathProperty: DependencyProperty = DependencyProperty.register(GeographicScatterAreaSeries.colorMemberPathPropertyName, String_$type, (<any>GeographicScatterAreaSeries).$type, new PropertyMetadata(2, "value", (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<GeographicScatterAreaSeries>sender).raisePropertyChanged(GeographicScatterAreaSeries.colorMemberPathPropertyName, e.oldValue, e.newValue)));
	get colorMemberPath(): string {
		return <string>this.getValue(GeographicScatterAreaSeries.colorMemberPathProperty);
	}
	set colorMemberPath(value: string) {
		this.setValue(GeographicScatterAreaSeries.colorMemberPathProperty, value);
	}
	private static readonly colorScalePropertyName: string = "ColorScale";
	private _colorScale: ColorScale = null;
	get colorScale(): ColorScale {
		return this._colorScale;
	}
	set colorScale(value: ColorScale) {
		let changed: boolean = this._colorScale != value;
		if (changed) {
			let oldValue: any = this._colorScale;
			this._colorScale = value;
			this.raisePropertyChanged(GeographicScatterAreaSeries.colorScalePropertyName, oldValue, this._colorScale);
			if (this.hostedScatterAreaSeries != null) {
				this.hostedScatterAreaSeries.colorScale = value;
			}
		}
	}
	private _hostedScatterAreaSeries: ScatterAreaSeries;
	get hostedScatterAreaSeries(): ScatterAreaSeries {
		return this._hostedScatterAreaSeries;
	}
	set hostedScatterAreaSeries(value: ScatterAreaSeries) {
		this._hostedScatterAreaSeries = value;
	}
	protected createSeries(): Series {
		this.hostedScatterAreaSeries = new ScatterAreaSeries();
		let $t = this.hostedScatterAreaSeries;
		$t.triangulationStatusChanged = delegateCombine($t.triangulationStatusChanged, runOn(this, this.hostedScatterAreaSeries_TriangulationStatusChanged));
		return this.hostedScatterAreaSeries;
	}
	private hostedScatterAreaSeries_TriangulationStatusChanged(sender: any, args: TriangulationStatusEventArgs): void {
		if (this.triangulationStatusChanged != null) {
			this.triangulationStatusChanged(this, args);
		}
	}
	protected createView(): SeriesView {
		return new GeographicScatterAreaSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.geographicScatterAreaView = <GeographicScatterAreaSeriesView>view;
	}
	private _geographicScatterAreaView: GeographicScatterAreaSeriesView;
	get geographicScatterAreaView(): GeographicScatterAreaSeriesView {
		return this._geographicScatterAreaView;
	}
	set geographicScatterAreaView(value: GeographicScatterAreaSeriesView) {
		this._geographicScatterAreaView = value;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case GeographicScatterAreaSeries.colorMemberPathPropertyName:
			this.geographicScatterAreaView.colorMemberPathUpdated();
			break;

			case GeographicScatterAreaSeries.colorScalePropertyName:
			this.geographicScatterAreaView.colorScaleUpdated();
			break;

		}

	}
	triangulationStatusChanged: (sender: any, args: TriangulationStatusEventArgs) => void = null;
	protected get_useDeferredMouseEnterAndLeave(): boolean {
		return true;
	}
	protected set_useDeferredMouseEnterAndLeave(value: boolean): void {
		super.set_useDeferredMouseEnterAndLeave(value);
	}
}


