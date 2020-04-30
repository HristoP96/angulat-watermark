/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ShapeSeriesBase } from "./ShapeSeriesBase";
import { ShapeAxisInfoCache } from "./ShapeAxisInfoCache";
import { StyleSelector } from "./StyleSelector";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { Style } from "igniteui-core/Style";
import { MarkerType, MarkerType_$type } from "./MarkerType";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { Brush } from "igniteui-core/Brush";
import { CollisionAvoidanceType, CollisionAvoidanceType_$type } from "./CollisionAvoidanceType";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { Type, Base, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, enumGetBox, EnumUtil, typeCast, fromEnum, markType, PointUtil, IList$1, IList$1_$type, runOn } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { OwnedPoint } from "./OwnedPoint";
import { ShapeSeriesViewBase } from "./ShapeSeriesViewBase";
import { Series } from "./Series";
import { Axis } from "./Axis";
import { MarkerManagerBase } from "./MarkerManagerBase";
import { MarkerSeries } from "./MarkerSeries";
import { SeriesViewer } from "./SeriesViewer";
import { DataContext } from "igniteui-core/DataContext";
import { Marker } from "./Marker";
import { ContentControl } from "igniteui-core/ContentControl";
import { IDictionary$2 } from "igniteui-core/IDictionary$2";
import { HashPool$2 } from "igniteui-core/HashPool$2";
import { List$1 } from "igniteui-core/List$1";
import { SeriesPointOfInterest } from "./SeriesPointOfInterest";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { NumericXAxis } from "./NumericXAxis";
import { NumericYAxis } from "./NumericYAxis";
import { FlattenedShape } from "./FlattenedShape";
import { IFastItemsSource } from "igniteui-core/IFastItemsSource";
import { RectUtil } from "igniteui-core/RectUtil";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Visibility } from "igniteui-core/Visibility";
import { NumericMarkerManager } from "./NumericMarkerManager";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { Size } from "igniteui-core/Size";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PointCollection } from "igniteui-core/PointCollection";
import { Path } from "igniteui-core/Path";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { DataTemplatePassInfo } from "igniteui-core/DataTemplatePassInfo";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { SeriesVisualData } from "./SeriesVisualData";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { MarkerVisualData } from "./MarkerVisualData";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { isNaN_, isInfinity } from "igniteui-core/number";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class ScatterPolygonSeries extends ShapeSeriesBase {
	static $t: Type = markType(ScatterPolygonSeries, 'ScatterPolygonSeries', (<any>ShapeSeriesBase).$type);
	constructor() {
		super();
		this.defaultStyleKey = (<any>ScatterPolygonSeries).$type;
	}
	protected shouldRecordMarkerPositions(): boolean {
		return this.shouldDisplayMarkers();
	}
	protected renderWithView(view: SeriesView): void {
		let shapeView: ScatterPolygonSeriesView = <ScatterPolygonSeriesView>view;
		shapeView.shapeStyleChanged(this.shapeStyle);
		shapeView.shapeStyleSelectorChanged(this.shapeStyleSelector);
		super.renderWithView(view);
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		let viewportRect: Rect, windowRect: Rect;
		let $ret = view.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let effectiveViewportRect = this.getEffectiveViewport1(view);
		this.xParams = new ScalerParams(1, windowRect, viewportRect, this.xAxis.isInverted);
		this.xParams.effectiveViewportRect = effectiveViewportRect;
		this.yParams = new ScalerParams(1, windowRect, viewportRect, this.yAxis.isInverted);
		this.yParams.effectiveViewportRect = effectiveViewportRect;
		if (viewportRect.width < 1 || viewportRect.height < 1) {
			return;
		}
		this.axisInfoCache = ((() => {
			let $ret = new ShapeAxisInfoCache();
			$ret.xAxis = this.xAxis;
			$ret.yAxis = this.yAxis;
			$ret.xAxisIsInverted = this.xAxis.isInverted;
			$ret.yAxisIsInverted = this.yAxis.isInverted;
			$ret.fastItemsSource = this.fastItemsSource;
			$ret.shapeColumn = this.shapeColumn;
			return $ret;
		})());
		if (this.shouldDisplayMarkers()) {
			let markers = new Dictionary$2<any, OwnedPoint>((<any>Base).$type, (<any>OwnedPoint).$type, 0);
			shapeView.markerManager.winnowMarkers(markers, 400, windowRect, viewportRect, this.resolution);
			shapeView.markerManager.render(markers, false);
		}
	}
	private shouldDisplayMarkers(): boolean {
		return this.actualMarkerTemplate != null && ((this.markerType != MarkerType.None && this.markerType != MarkerType.Unset) || this.markerTemplate != null);
	}
	protected createView(): SeriesView {
		return new ScatterPolygonSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.shapeView = <ScatterPolygonSeriesView>view;
	}
	private _shapeView: ScatterPolygonSeriesView;
	get shapeView(): ScatterPolygonSeriesView {
		return this._shapeView;
	}
	set shapeView(value: ScatterPolygonSeriesView) {
		this._shapeView = value;
	}
	private _axisInfoCache: ShapeAxisInfoCache = null;
	get axisInfoCache(): ShapeAxisInfoCache {
		return this._axisInfoCache;
	}
	set axisInfoCache(value: ShapeAxisInfoCache) {
		this._axisInfoCache = value;
	}
	private static unitRect: Rect = new Rect(0, 0, 0, 1, 1);
	private xParams: ScalerParams = new ScalerParams(1, ScatterPolygonSeries.unitRect, ScatterPolygonSeries.unitRect, false);
	private yParams: ScalerParams = new ScalerParams(1, ScatterPolygonSeries.unitRect, ScatterPolygonSeries.unitRect, false);
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
		return this.actualMarkerTemplate;
	}
	private static readonly shapeStyleSelectorPropertyName: string = "ShapeStyleSelector";
	static readonly shapeStyleSelectorProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.shapeStyleSelectorPropertyName, (<any>StyleSelector).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.shapeStyleSelectorPropertyName, e.oldValue, e.newValue)));
	get shapeStyleSelector(): StyleSelector {
		return <StyleSelector>this.getValue(ScatterPolygonSeries.shapeStyleSelectorProperty);
	}
	set shapeStyleSelector(value: StyleSelector) {
		this.setValue(ScatterPolygonSeries.shapeStyleSelectorProperty, value);
	}
	private static readonly shapeStylePropertyName: string = "ShapeStyle";
	static readonly shapeStyleProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.shapeStylePropertyName, (<any>Style).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.shapeStylePropertyName, e.oldValue, e.newValue)));
	get shapeStyle(): Style {
		return <Style>this.getValue(ScatterPolygonSeries.shapeStyleProperty);
	}
	set shapeStyle(value: Style) {
		this.setValue(ScatterPolygonSeries.shapeStyleProperty, value);
	}
	get markerType(): MarkerType {
		return EnumUtil.getEnumValue<MarkerType>(MarkerType_$type, this.getValue(ScatterPolygonSeries.markerTypeProperty));
	}
	set markerType(value: MarkerType) {
		this.setValue(ScatterPolygonSeries.markerTypeProperty, enumGetBox<MarkerType>(MarkerType_$type, value));
	}
	static readonly markerTypePropertyName: string = "MarkerType";
	static readonly markerTypeProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.markerTypePropertyName, MarkerType_$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(2, enumGetBox<MarkerType>(MarkerType_$type, MarkerType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.markerTypePropertyName, e.oldValue, e.newValue)));
	get markerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(ScatterPolygonSeries.markerTemplateProperty);
	}
	set markerTemplate(value: DataTemplate) {
		this.setValue(ScatterPolygonSeries.markerTemplateProperty, value);
	}
	static readonly markerTemplatePropertyName: string = "MarkerTemplate";
	static readonly markerTemplateProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.markerTemplatePropertyName, (<any>DataTemplate).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.markerTemplatePropertyName, e.oldValue, e.newValue)));
	get actualMarkerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(ScatterPolygonSeries.actualMarkerTemplateProperty);
	}
	set actualMarkerTemplate(value: DataTemplate) {
		this.setValue(ScatterPolygonSeries.actualMarkerTemplateProperty, value);
	}
	static readonly actualMarkerTemplatePropertyName: string = "ActualMarkerTemplate";
	static readonly actualMarkerTemplateProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.actualMarkerTemplatePropertyName, (<any>DataTemplate).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.actualMarkerTemplatePropertyName, e.oldValue, e.newValue)));
	get markerBrush(): Brush {
		return <Brush>this.getValue(ScatterPolygonSeries.markerBrushProperty);
	}
	set markerBrush(value: Brush) {
		this.setValue(ScatterPolygonSeries.markerBrushProperty, value);
	}
	static readonly markerBrushPropertyName: string = "MarkerBrush";
	static readonly markerBrushProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.markerBrushPropertyName, (<any>Brush).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.markerBrushPropertyName, e.oldValue, e.newValue)));
	get actualMarkerBrush(): Brush {
		return <Brush>this.getValue(ScatterPolygonSeries.actualMarkerBrushProperty);
	}
	set actualMarkerBrush(value: Brush) {
		this.setValue(ScatterPolygonSeries.actualMarkerBrushProperty, value);
	}
	static readonly actualMarkerBrushPropertyName: string = "ActualMarkerBrush";
	static readonly actualMarkerBrushProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.actualMarkerBrushPropertyName, (<any>Brush).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.actualMarkerBrushPropertyName, e.oldValue, e.newValue)));
	get markerOutline(): Brush {
		return <Brush>this.getValue(ScatterPolygonSeries.markerOutlineProperty);
	}
	set markerOutline(value: Brush) {
		this.setValue(ScatterPolygonSeries.markerOutlineProperty, value);
	}
	static readonly markerOutlinePropertyName: string = "MarkerOutline";
	static readonly markerOutlineProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.markerOutlinePropertyName, (<any>Brush).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.markerOutlinePropertyName, e.oldValue, e.newValue)));
	get actualMarkerOutline(): Brush {
		return <Brush>this.getValue(ScatterPolygonSeries.actualMarkerOutlineProperty);
	}
	set actualMarkerOutline(value: Brush) {
		this.setValue(ScatterPolygonSeries.actualMarkerOutlineProperty, value);
	}
	static readonly actualMarkerOutlinePropertyName: string = "ActualMarkerOutline";
	static readonly actualMarkerOutlineProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.actualMarkerOutlinePropertyName, (<any>Brush).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.actualMarkerOutlinePropertyName, e.oldValue, e.newValue)));
	get markerStyle(): Style {
		return <Style>this.getValue(ScatterPolygonSeries.markerStyleProperty);
	}
	set markerStyle(value: Style) {
		this.setValue(ScatterPolygonSeries.markerStyleProperty, value);
	}
	static readonly markerStylePropertyName: string = "MarkerStyle";
	static readonly markerStyleProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.markerStylePropertyName, (<any>Style).$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(1, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterPolygonSeries>sender).raisePropertyChanged(ScatterPolygonSeries.markerStylePropertyName, e.oldValue, e.newValue)));
	get markerCollisionAvoidance(): CollisionAvoidanceType {
		return EnumUtil.getEnumValue<CollisionAvoidanceType>(CollisionAvoidanceType_$type, this.getValue(ScatterPolygonSeries.markerCollisionAvoidanceProperty));
	}
	set markerCollisionAvoidance(value: CollisionAvoidanceType) {
		this.setValue(ScatterPolygonSeries.markerCollisionAvoidanceProperty, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, value));
	}
	static readonly markerCollisionAvoidancePropertyName: string = "MarkerCollisionAvoidance";
	static readonly markerCollisionAvoidanceProperty: DependencyProperty = DependencyProperty.register(ScatterPolygonSeries.markerCollisionAvoidancePropertyName, CollisionAvoidanceType_$type, (<any>ScatterPolygonSeries).$type, new PropertyMetadata(2, enumGetBox<CollisionAvoidanceType>(CollisionAvoidanceType_$type, CollisionAvoidanceType.None), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ScatterPolygonSeries>((<any>ScatterPolygonSeries).$type, sender)).raisePropertyChanged(ScatterPolygonSeries.markerCollisionAvoidancePropertyName, e.oldValue, e.newValue)));
	protected updateIndexedProperties(): void {
		super.updateIndexedProperties();
		if (this.markerTemplate != null) {
			this.shapeView.bindMarkerTemplateToActual();
		} else {
			let markerType: MarkerType = MarkerSeries.resolveMarkerType(this, this.markerType);
			let markerTemplatePropertyName: string = MarkerSeries.getMarkerTemplatePropertyName(markerType);
			if (markerTemplatePropertyName == null) {
				this.actualMarkerTemplate = MarkerSeries.nullMarkerTemplate;
			} else {
				this.shapeView.bindActualToMarkerTemplate(markerTemplatePropertyName);
			}
		}
		if (this.markerBrush != null) {
			this.shapeView.bindMarkerBrushToActual();
		} else {
			this.actualMarkerBrush = this.seriesViewer == null ? null : this.seriesViewer.getMarkerBrushByIndex(this.index);
		}
		if (this.markerOutline != null) {
			this.shapeView.bindMarkerOutlineToActual();
		} else {
			this.actualMarkerOutline = this.seriesViewer == null ? null : this.seriesViewer.getMarkerOutlineByIndex(this.index);
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case ScatterPolygonSeries.markerBrushPropertyName:

			case ScatterPolygonSeries.markerTypePropertyName:

			case ScatterPolygonSeries.markerOutlinePropertyName:

			case ScatterPolygonSeries.markerTemplatePropertyName:
			this.updateIndexedProperties();
			this.renderSeries(false);
			break;

			case ScatterPolygonSeries.actualMarkerTemplatePropertyName:
			if (oldValue == MarkerSeries.nullMarkerTemplate || newValue == MarkerSeries.nullMarkerTemplate || (oldValue == null || newValue != null)) {
				this.shapeView.doUpdateMarkerTemplates();
				this.renderSeries(false);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterPolygonSeries.shapeStylePropertyName:
			this.shapeView.shapeStyleChanged(this.shapeStyle);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterPolygonSeries.shapeStyleSelectorPropertyName:
			this.shapeView.shapeStyleSelectorChanged(this.shapeStyleSelector);
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterPolygonSeries.markerCollisionAvoidancePropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		let marker = this.shapeView.getHitMarker(position);
		let ret: DataContext = null;
		if (marker != null) {
			ret = <DataContext>marker.content;
		}
		if (ret != null) {
			return ret;
		}
		return super.getHitDataContext(position, isFinger);
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
		this.shapeView.doToAllMarkers((m: Marker) => {
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
	getMarkerLocations(view: ScatterPolygonSeriesView, markers: HashPool$2<any, Marker>, locations: Point[], windowRect: Rect, viewport: Rect): Point[] {
		if (locations == null || locations.length != this.axisInfoCache.fastItemsSource.count) {
			locations = <Point[]>new Array(this.axisInfoCache.fastItemsSource.count);
			for (let i: number = 0; i < this.axisInfoCache.fastItemsSource.count; i++) {
				locations[i] = PointUtil.create();
			}
		}
		let xParms: ScalerParams = ((() => {
			let $ret = new ScalerParams(1, windowRect, viewport, this.xAxis.isInverted);
			$ret.effectiveViewportRect = this.getEffectiveViewport1(view);
			return $ret;
		})());
		let yParms: ScalerParams = ((() => {
			let $ret = new ScalerParams(1, windowRect, viewport, this.yAxis.isInverted);
			$ret.effectiveViewportRect = this.getEffectiveViewport1(view);
			return $ret;
		})());
		let minX: number = this.axisInfoCache.xAxis.getUnscaledValue(xParms.viewportRect.left, xParms);
		let maxX: number = this.axisInfoCache.xAxis.getUnscaledValue(xParms.viewportRect.right, xParms);
		let minY: number = this.axisInfoCache.yAxis.getUnscaledValue(yParms.viewportRect.bottom, yParms);
		let maxY: number = this.axisInfoCache.yAxis.getUnscaledValue(yParms.viewportRect.top, yParms);
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
		let cache = this.axisInfoCache;
		let xAxis: NumericXAxis = cache.xAxis;
		let yAxis: NumericYAxis = cache.yAxis;
		let x: number;
		let y: number;
		let viewportLeft = xParms.viewportRect.left;
		let viewportRight = xParms.viewportRect.right;
		let viewportTop = yParms.viewportRect.top;
		let viewportBottom = yParms.viewportRect.bottom;
		for (let i1: number = 0; i1 < this.axisInfoCache.fastItemsSource.count; i1++) {
			x = 0;
			y = 0;
			let shape: FlattenedShape = null;
			let $ret = view.markerPositions.tryGetValue(i1, shape);
			shape = $ret.p1;
			if (shape == null) {
				locations[i1].x = NaN;
				locations[i1].y = NaN;
			} else {
				let bounds = shape.fullBounds;
				let center = RectUtil.getCenter(bounds);
				x = center.x;
				y = center.y;
				if (x >= viewportLeft && x <= viewportRight && y >= viewportTop && y <= viewportBottom) {
					locations[i1].x = x;
					locations[i1].y = y;
				} else {
					locations[i1].x = NaN;
					locations[i1].y = NaN;
				}
			}
		}
		return locations;
	}
	getActiveIndexes(markers: HashPool$2<any, Marker>, indexes: number[]): number[] {
		if (indexes == null || indexes.length != markers.activeCount) {
			indexes = <number[]>new Array(markers.activeCount);
		}
		let i: number = 0;
		let source: IFastItemsSource = this.fastItemsSource;
		for (let key of fromEnum<any>(markers.activeKeys)) {
			indexes[i] = source.indexOf(key);
			i++;
		}
		return indexes;
	}
}

/**
 * @hidden 
 */
export class ScatterPolygonSeriesView extends ShapeSeriesViewBase {
	static $t: Type = markType(ScatterPolygonSeriesView, 'ScatterPolygonSeriesView', (<any>ShapeSeriesViewBase).$type);
	constructor(model: ScatterPolygonSeries) {
		super(model);
		this.shapeSeriesModel = model;
		this.markers = new HashPool$2<any, Marker>((<any>Base).$type, (<any>Marker).$type);
		this.visibleMarkers = new List$1<Marker>((<any>Marker).$type, 0);
		this.initMarkers(this.markers);
		this._markerManager = new NumericMarkerManager(1, (o: any) => this.markers.item(o), (i: number) => this.shapeSeriesModel.axisInfoCache.fastItemsSource.item(i), runOn(this, this.removeUnusedMarkers), runOn(this, this.getMarkerLocations), runOn(this, this.getActiveIndexes), () => this.shapeSeriesModel.markerCollisionAvoidance);
		this._markerManager.getMarkerDesiredSize = runOn(this, this.getMarkerDesiredSize);
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.ScatterPolygon;
		}
	}
	get markerManager(): NumericMarkerManager {
		return this._markerManager;
	}
	protected removeUnusedMarkers(list: IDictionary$2<any, OwnedPoint>): void {
		this.shapeSeriesModel.removeUnusedMarkers(list, this.markers);
	}
	protected getMarkerLocations(): Point[] {
		this.locations = this.shapeSeriesModel.getMarkerLocations(this, this.markers, this.locations, this.windowRect, this.viewport);
		return this.locations;
	}
	protected getActiveIndexes(): number[] {
		this.indexes = this.shapeSeriesModel.getActiveIndexes(this.markers, this.indexes);
		return this.indexes;
	}
	private locations: Point[] = null;
	private indexes: number[] = null;
	private _shapeSeriesModel: ScatterPolygonSeries = null;
	private get shapeSeriesModel(): ScatterPolygonSeries {
		return this._shapeSeriesModel;
	}
	private set shapeSeriesModel(value: ScatterPolygonSeries) {
		this._shapeSeriesModel = value;
	}
	private _markerManager: NumericMarkerManager = null;
	protected getShapeGeometry(i: number, points: List$1<PointCollection>): PathGeometry {
		return this.getShapeGeometry1(i, points, true);
	}
	protected applyStyling1(shape: FrameworkElement, item: any): void {
		super.applyStyling1(shape, item);
		ShapeSeriesViewBase.applyStyling(this, <Path>shape, item);
	}
	protected applyData(element: FrameworkElement, data: PathGeometry): void {
		let shape: Path = <Path>element;
		if (shape == null) {
			return;
		}
		shape.data = data;
	}
	private _lightweightMode: boolean = false;
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
	initMarkers(Markers: HashPool$2<any, Marker>): void {
		Markers.create = runOn(this, this.markerCreate);
		Markers.destroy = runOn(this, this.markerDestroy);
		Markers.activate = runOn(this, this.markerActivate);
		Markers.disactivate = runOn(this, this.markerDisactivate);
	}
	markerCreate(): Marker {
		let marker: Marker = new Marker();
		if (!this._lightweightMode) {
			marker.content = ((() => {
				let $ret = new DataContext();
				$ret.series = this.model;
				return $ret;
			})());
		}
		marker.contentTemplate = (<ScatterPolygonSeries>this.model).actualMarkerTemplate;
		this.visibleMarkers.add(marker);
		return marker;
	}
	private _visibleMarkers: List$1<Marker> = null;
	protected get visibleMarkers(): List$1<Marker> {
		return this._visibleMarkers;
	}
	protected set visibleMarkers(value: List$1<Marker>) {
		this._visibleMarkers = value;
	}
	markerDestroy(marker: Marker): void {
		marker.content = null;
		this.visibleMarkers.remove(marker);
	}
	markerActivate(marker: Marker): void {
		marker._visibility = Visibility.Visible;
	}
	markerDisactivate(marker: Marker): void {
		if (marker.content != null) {
			(typeCast<DataContext>((<any>DataContext).$type, marker.content)).item = null;
		}
		marker._visibility = Visibility.Collapsed;
	}
	setUseLightweightMode(useLightweight: boolean): void {
		this._lightweightMode = useLightweight;
	}
	protected setupMarkerAppearanceOverride(item: any, index: number): void {
		super.setupMarkerAppearanceOverride(item, index);
		let marker = <Marker>item;
		let context = <DataContext>marker.content;
		if (context != null) {
			if (this.shapeSeriesModel.actualMarkerBrush != null) {
				context.actualItemBrush = this.shapeSeriesModel.actualMarkerBrush;
			} else {
				context.actualItemBrush = this.shapeModel.actualBrush;
			}
			if (this.shapeSeriesModel.actualMarkerBrush != null) {
				context.outline = this.shapeSeriesModel.actualMarkerOutline;
			} else {
				context.outline = this.shapeModel.actualOutline;
			}
			context.thickness = 0.5;
		}
	}
	protected setupMarkerHitAppearanceOverride(item: any, index: number): void {
		super.setupMarkerHitAppearanceOverride(item, index);
		let marker = <Marker>item;
		let hitBrush = this.getHitBrush1(index);
		let context = <DataContext>marker.content;
		if (context != null) {
			context.actualItemBrush = hitBrush;
			context.outline = hitBrush;
			context.thickness = 1 + ShapeSeriesViewBase.hIT_THICKNESS_AUGMENT;
		}
	}
	protected renderMarkersOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderMarkersOverride(context, isHitContext);
		let passInfo: DataTemplatePassInfo = new DataTemplatePassInfo();
		passInfo.isHitTestRender = isHitContext;
		passInfo.context = context.getUnderlyingContext();
		passInfo.viewportTop = this.viewport.top;
		passInfo.viewportLeft = this.viewport.left;
		passInfo.viewportWidth = this.viewport.width;
		passInfo.viewportHeight = this.viewport.height;
		passInfo.passID = "Markers";
		let renderInfo: DataTemplateRenderInfo = new DataTemplateRenderInfo();
		renderInfo.passInfo = passInfo;
		renderInfo.isHitTestRender = isHitContext;
		let measureInfo: DataTemplateMeasureInfo = new DataTemplateMeasureInfo();
		measureInfo.passInfo = passInfo;
		let isConstant: boolean = false;
		let cont: any = context.getUnderlyingContext();
		measureInfo.context = cont;
		renderInfo.context = cont;
		let constantWidth: number = 0;
		let constantHeight: number = 0;
		if (this.shapeSeriesModel.actualMarkerTemplate != null && this.shapeSeriesModel.actualMarkerTemplate.passStarting != null) {
			this.shapeSeriesModel.actualMarkerTemplate.passStarting(passInfo);
		}
		for (let i: number = 0; i < this.visibleMarkers.count; i++) {
			let marker = this.visibleMarkers._inner[i];
			if (marker._visibility == Visibility.Collapsed) {
				continue;
			}
			this.setupMarkerAppearance(marker, i, isHitContext);
			if (!isConstant) {
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
		if (this.shapeSeriesModel.actualMarkerTemplate != null && this.shapeSeriesModel.actualMarkerTemplate.passCompleted != null) {
			this.shapeSeriesModel.actualMarkerTemplate.passCompleted(passInfo);
		}
	}
	bindMarkerTemplateToActual(): void {
		this.shapeSeriesModel.actualMarkerTemplate = null;
		this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.markerTemplate;
	}
	bindMarkerBrushToActual(): void {
		this.shapeSeriesModel.actualMarkerBrush = null;
		this.shapeSeriesModel.actualMarkerBrush = this.shapeSeriesModel.markerBrush;
	}
	bindMarkerOutlineToActual(): void {
		this.shapeSeriesModel.actualMarkerOutline = null;
		this.shapeSeriesModel.actualMarkerOutline = this.shapeSeriesModel.markerOutline;
	}
	bindActualToMarkerTemplate(markerTemplatePropertyName: string): void {
		switch (markerTemplatePropertyName) {
			case "CircleMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.circleMarkerTemplate;
			break;

			case "TriangleMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.triangleMarkerTemplate;
			break;

			case "PyramidMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.pyramidMarkerTemplate;
			break;

			case "SquareMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.squareMarkerTemplate;
			break;

			case "DiamondMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.diamondMarkerTemplate;
			break;

			case "PentagonMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.pentagonMarkerTemplate;
			break;

			case "HexagonMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.hexagonMarkerTemplate;
			break;

			case "TetragramMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.pentagonMarkerTemplate;
			break;

			case "PentagramMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.pentagramMarkerTemplate;
			break;

			case "HexagramMarkerTemplate":
			this.shapeSeriesModel.actualMarkerTemplate = this.shapeSeriesModel.seriesViewer.hexagramMarkerTemplate;
			break;

		}

	}
	doUpdateMarkerTemplates(): void {
		for (let marker of fromEnum<Marker>(this.visibleMarkers)) {
			marker.contentTemplate = this.shapeSeriesModel.actualMarkerTemplate;
		}
		this.makeDirty();
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
	getHitMarker(point: Point): Marker {
		let halfWidth: number;
		let halfHeight: number;
		let offsetX: number;
		let offsetY: number;
		for (let i = this.visibleMarkers.count - 1; i >= 0; i--) {
			let marker = this.visibleMarkers._inner[i];
			if (marker._visibility == Visibility.Collapsed || marker._opacity == 0) {
				continue;
			}
			halfWidth = (marker.actualWidth / 2) + SeriesView.hIT_THICKNESS_AUGMENT;
			halfHeight = (marker.actualHeight / 2) + SeriesView.hIT_THICKNESS_AUGMENT;
			offsetX = marker.renderOffsetX;
			offsetY = marker.renderOffsetY;
			if ((marker.canvasLeft + offsetX) - halfWidth <= point.x && (marker.canvasLeft + offsetX) + halfWidth >= point.x && (marker.canvasTop + offsetY) - halfHeight <= point.y && (marker.canvasTop + offsetY) + halfHeight >= point.y) {
				return marker;
			}
		}
		return null;
	}
	exportViewShapes(visualData: any): void {
		let svd = <SeriesVisualData>visualData;
		super.exportViewShapes(svd);
		for (let key of fromEnum<any>(this.markers.activeKeys)) {
			let marker = this.markers.item(key);
			if (marker._visibility != Visibility.Collapsed) {
				let series = typeCast<ScatterPolygonSeries>((<any>ScatterPolygonSeries).$type, this.model);
				let mvd = this.model.seriesVisualDataManager.getMarkerVisualData(series, marker, series.actualMarkerTemplate);
				svd.markerShapes.add(typeCast<MarkerVisualData>((<any>MarkerVisualData).$type, mvd));
			}
		}
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'><span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.shapeSeriesModel.title + "</span><br/>";
		tooltipTemplate += "</div>";
		return tooltipTemplate;
	}
}


