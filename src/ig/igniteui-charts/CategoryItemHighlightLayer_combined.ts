/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnnotationLayer } from "./AnnotationLayer";
import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { CategoryItemHighlightType, CategoryItemHighlightType_$type } from "./CategoryItemHighlightType";
import { DataTemplate } from "igniteui-core/DataTemplate";
import { CategoryItemHighlightLayerFrame } from "./CategoryItemHighlightLayerFrame";
import { Type, Point, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Base, IEnumerable$1, IEnumerable$1_$type, Boolean_$type, enumGetBox, EnumUtil, Number_$type, fromEnum, typeCast, Point_$type, markType, PointUtil, runOn } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { SeriesView } from "./SeriesView";
import { ContentInfo } from "./ContentInfo";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { Frame } from "./Frame";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { ItemHighlightFrameRect } from "./ItemHighlightFrameRect";
import { SeriesViewer } from "./SeriesViewer";
import { List$1 } from "igniteui-core/List$1";
import { IHasCategoryAxis } from "./IHasCategoryAxis";
import { IHasCategoryModePreference, IHasCategoryModePreference_$type } from "./IHasCategoryModePreference";
import { CategoryMode } from "./CategoryMode";
import { Rect } from "igniteui-core/Rect";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Axis } from "./Axis";
import { MarkerType } from "./MarkerType";
import { MarkerSeries } from "./MarkerSeries";
import { DataContext } from "igniteui-core/DataContext";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Rectangle } from "igniteui-core/Rectangle";
import { ContentControl } from "igniteui-core/ContentControl";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { Visibility } from "igniteui-core/Visibility";
import { isNaN_, isInfinity, truncate } from "igniteui-core/number";
import { AnnotationLayerView } from "./AnnotationLayerView";
import { Marker } from "./Marker";
import { Brush } from "igniteui-core/Brush";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { LinearGradientBrush } from "igniteui-core/LinearGradientBrush";
import { GradientStop } from "igniteui-core/GradientStop";
import { Color } from "igniteui-core/Color";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { DataTemplatePassInfo } from "igniteui-core/DataTemplatePassInfo";
import { DataTemplateRenderInfo } from "igniteui-core/DataTemplateRenderInfo";
import { DataTemplateMeasureInfo } from "igniteui-core/DataTemplateMeasureInfo";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class CategoryItemHighlightLayer extends AnnotationLayer {
	static $t: Type = markType(CategoryItemHighlightLayer, 'CategoryItemHighlightLayer', (<any>AnnotationLayer).$type);
	constructor() {
		super();
		let previousFrame = new CategoryItemHighlightLayerFrame();
		let currentFrame = new CategoryItemHighlightLayerFrame();
		let transitionFrame = new CategoryItemHighlightLayerFrame();
		this.previousFrame = previousFrame;
		this.currentFrame = currentFrame;
		this.transitionFrame = transitionFrame;
		this.defaultStyleKey = (<any>CategoryItemHighlightLayer).$type;
	}
	protected createView(): SeriesView {
		return new CategoryItemHighlightLayerView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.itemView = <CategoryItemHighlightLayerView>view;
	}
	private _itemView: CategoryItemHighlightLayerView;
	protected get itemView(): CategoryItemHighlightLayerView {
		return this._itemView;
	}
	protected set itemView(value: CategoryItemHighlightLayerView) {
		this._itemView = value;
	}
	get targetSeries(): Series {
		return <Series>this.getValue(CategoryItemHighlightLayer.targetSeriesProperty);
	}
	set targetSeries(value: Series) {
		this.setValue(CategoryItemHighlightLayer.targetSeriesProperty, value);
	}
	static readonly targetSeriesPropertyName: string = "TargetSeries";
	static readonly targetSeriesProperty: DependencyProperty = DependencyProperty.register(CategoryItemHighlightLayer.targetSeriesPropertyName, (<any>Series).$type, (<any>CategoryItemHighlightLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryItemHighlightLayer>sender).raisePropertyChanged(CategoryItemHighlightLayer.targetSeriesPropertyName, e.oldValue, e.newValue)));
	get useInterpolation(): boolean {
		return <boolean>this.getValue(CategoryItemHighlightLayer.useInterpolationProperty);
	}
	set useInterpolation(value: boolean) {
		this.setValue(CategoryItemHighlightLayer.useInterpolationProperty, value);
	}
	static readonly useInterpolationPropertyName: string = "UseInterpolation";
	static readonly useInterpolationProperty: DependencyProperty = DependencyProperty.register(CategoryItemHighlightLayer.useInterpolationPropertyName, Boolean_$type, (<any>CategoryItemHighlightLayer).$type, new PropertyMetadata(2, false, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryItemHighlightLayer>sender).raisePropertyChanged(CategoryItemHighlightLayer.useInterpolationPropertyName, e.oldValue, e.newValue)));
	get highlightType(): CategoryItemHighlightType {
		return EnumUtil.getEnumValue<CategoryItemHighlightType>(CategoryItemHighlightType_$type, this.getValue(CategoryItemHighlightLayer.highlightTypeProperty));
	}
	set highlightType(value: CategoryItemHighlightType) {
		this.setValue(CategoryItemHighlightLayer.highlightTypeProperty, enumGetBox<CategoryItemHighlightType>(CategoryItemHighlightType_$type, value));
	}
	static readonly highlightTypePropertyName: string = "HighlightType";
	static readonly highlightTypeProperty: DependencyProperty = DependencyProperty.register(CategoryItemHighlightLayer.highlightTypePropertyName, CategoryItemHighlightType_$type, (<any>CategoryItemHighlightLayer).$type, new PropertyMetadata(2, enumGetBox<CategoryItemHighlightType>(CategoryItemHighlightType_$type, CategoryItemHighlightType.Auto), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryItemHighlightLayer>sender).raisePropertyChanged(CategoryItemHighlightLayer.highlightTypePropertyName, e.oldValue, e.newValue)));
	get markerTemplate(): DataTemplate {
		return <DataTemplate>this.getValue(CategoryItemHighlightLayer.markerTemplateProperty);
	}
	set markerTemplate(value: DataTemplate) {
		this.setValue(CategoryItemHighlightLayer.markerTemplateProperty, value);
	}
	static readonly markerTemplatePropertyName: string = "MarkerTemplate";
	static readonly markerTemplateProperty: DependencyProperty = DependencyProperty.register(CategoryItemHighlightLayer.markerTemplatePropertyName, (<any>DataTemplate).$type, (<any>CategoryItemHighlightLayer).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryItemHighlightLayer>sender).raisePropertyChanged(CategoryItemHighlightLayer.markerTemplatePropertyName, e.oldValue, e.newValue)));
	get bandHighlightWidth(): number {
		return <number>this.getValue(CategoryItemHighlightLayer.bandHighlightWidthProperty);
	}
	set bandHighlightWidth(value: number) {
		this.setValue(CategoryItemHighlightLayer.bandHighlightWidthProperty, value);
	}
	static readonly bandHighlightWidthPropertyName: string = "BandHighlightWidth";
	static readonly bandHighlightWidthProperty: DependencyProperty = DependencyProperty.register(CategoryItemHighlightLayer.bandHighlightWidthPropertyName, Number_$type, (<any>CategoryItemHighlightLayer).$type, new PropertyMetadata(2, 10, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryItemHighlightLayer>sender).raisePropertyChanged(CategoryItemHighlightLayer.bandHighlightWidthPropertyName, e.oldValue, e.newValue)));
	get skipUnknownValues(): boolean {
		return <boolean>this.getValue(CategoryItemHighlightLayer.skipUnknownValuesProperty);
	}
	set skipUnknownValues(value: boolean) {
		this.setValue(CategoryItemHighlightLayer.skipUnknownValuesProperty, value);
	}
	static readonly skipUnknownValuesPropertyName: string = "SkipUnknownValues";
	static readonly skipUnknownValuesProperty: DependencyProperty = DependencyProperty.register(CategoryItemHighlightLayer.skipUnknownValuesPropertyName, Boolean_$type, (<any>CategoryItemHighlightLayer).$type, new PropertyMetadata(2, true, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<CategoryItemHighlightLayer>sender).raisePropertyChanged(CategoryItemHighlightLayer.skipUnknownValuesPropertyName, e.oldValue, e.newValue)));
	protected onDependentSeriesRender(series: Series, animate: boolean): void {
		if (this.targetSeries == null || this.targetSeries == series) {
			if (!this.contentInfo.isDirty) {
				this.renderSeries(animate);
			}
		}
	}
	protected isSeriesValid(series: Series): boolean {
		if (!super.isSeriesValid(series)) {
			return false;
		}
		let res = this.getCategoryPosition(series);
		if (!res.item1) {
			return false;
		}
		return true;
	}
	protected prepareFrame(frame: Frame, view: SeriesView): void {
		super.prepareFrame(frame, view);
		let f = <CategoryItemHighlightLayerFrame>frame;
		let useInterpolation = this.useInterpolation;
		f.rects.clear();
		if (isNaN_(this.currentPosition.x) && isNaN_(this.currentPosition.y)) {
			return;
		}
		if (this.isSeriesValid(this.targetSeries)) {
			this.prepareSeries(this.targetSeries, f, useInterpolation);
		} else {
			for (let series of fromEnum<Series>(this.seriesViewer.series)) {
				if (this.isSeriesValid(series)) {
					this.prepareSeries(series, f, useInterpolation);
				}
			}
		}
	}
	private _useInterpolation: boolean = false;
	private _skipUnknownValues: boolean = true;
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case CategoryItemHighlightLayer.targetSeriesPropertyName:
			this.renderSeries(true);
			break;

			case CategoryItemHighlightLayer.useInterpolationPropertyName:
			this._useInterpolation = <boolean>newValue;
			this.renderSeries(true);
			break;

			case CategoryItemHighlightLayer.highlightTypePropertyName:
			this.renderSeries(true);
			break;

			case CategoryItemHighlightLayer.bandHighlightWidthPropertyName:
			this._mode0HighlightWidth = this.bandHighlightWidth;
			this.renderSeries(true);
			break;

			case CategoryItemHighlightLayer.skipUnknownValuesPropertyName:
			this._skipUnknownValues = <boolean>newValue;
			this.renderSeries(true);
			break;

		}

	}
	private _mode0HighlightWidth: number = 10;
	private prepareSeries(series: Series, f: CategoryItemHighlightLayerFrame, useInterpolation: boolean): void {
		if (this.view == null || this.view.windowRect.isEmpty || this.view.viewport.isEmpty) {
			return;
		}
		if (!series.isCategory && !series.isFinancial) {
			return;
		}
		let cat = <IHasCategoryAxis><any>series;
		if (cat.categoryAxis == null) {
			return;
		}
		let xPos = this.currentPosition.x;
		xPos = this.view.viewport.left + this.view.viewport.width * (xPos - this.view.windowRect.left) / this.view.windowRect.width;
		let yPos = this.currentPosition.y;
		yPos = this.view.viewport.top + this.view.viewport.height * (yPos - this.view.windowRect.top) / this.view.windowRect.height;
		let skipUnknowns = this.skipUnknownValues;
		let isPointTypeCategorySeries: boolean = true;
		let modePref = typeCast<IHasCategoryModePreference>(IHasCategoryModePreference_$type, series);
		let preferredMode: CategoryMode = CategoryMode.Mode0;
		if (modePref != null) {
			preferredMode = modePref.preferredCategoryMode(cat.categoryAxis);
			if (preferredMode == CategoryMode.Mode2) {
				isPointTypeCategorySeries = false;
			}
		}
		let usePointType = true;
		if (!isPointTypeCategorySeries || this.highlightType == CategoryItemHighlightType.Shape) {
			usePointType = false;
		}
		if (this.highlightType == CategoryItemHighlightType.Marker) {
			usePointType = true;
		}
		let res = this.getCategoryPosition(series);
		if (!res.item1) {
			return;
		}
		if (usePointType) {
			let pt = series.getSeriesValuePosition(res.item2, this.useInterpolation, skipUnknowns);
			if (preferredMode != CategoryMode.Mode0 && !cat.categoryAxis.isSorting) {
				let x = pt.x;
				if (series.isFinancial) {
					x -= (<IHasCategoryAxis><any>series).getOffsetValue();
					x += (<IHasCategoryAxis><any>series).getCategoryWidth() * 0.5;
					pt = <Point>{ $type: Point_$type, x: x, y: pt.y };
				} else if (series.isCategory) {
					x -= (<IHasCategoryAxis><any>series).getOffsetValue();
					x += (<IHasCategoryAxis><any>series).getCategoryWidth() * 0.5;
					pt = <Point>{ $type: Point_$type, x: x, y: pt.y };
				}
			}
			if (!isNaN_(pt.x) && !isNaN_(pt.y)) {
				pt = this.toWorldPosition(pt);
			}
			this.preparePoint(pt, f, series);
		} else {
			let pt1 = series.getSeriesValuePosition(res.item2, this.useInterpolation, skipUnknowns);
			let rect: Rect;
			let effectiveViewport = this.getEffectiveViewport1(this.view);
			if (series.isVertical) {
				let y = pt1.y;
				let catAxis = cat.categoryAxis;
				let groupWidth: number = this._mode0HighlightWidth;
				if (preferredMode != CategoryMode.Mode0) {
					groupWidth = catAxis.getGroupSize(this.view.windowRect, this.view.viewport, effectiveViewport);
				}
				if (isNaN_(groupWidth) || isInfinity(groupWidth)) {
					return;
				}
				rect = new Rect(0, this.viewport.left, y - groupWidth / 2, this.viewport.width, groupWidth);
			} else {
				let x1 = pt1.x;
				let catAxis1 = cat.categoryAxis;
				let groupWidth1: number = this._mode0HighlightWidth;
				if (preferredMode != CategoryMode.Mode0) {
					groupWidth1 = catAxis1.getGroupSize(this.view.windowRect, this.view.viewport, effectiveViewport);
				}
				if (isNaN_(groupWidth1) || isInfinity(groupWidth1)) {
					return;
				}
				rect = new Rect(0, x1 - groupWidth1 / 2, this.viewport.top, groupWidth1, this.viewport.height);
			}
			rect.intersect(this.view.viewport);
			this.prepareRect(rect, f, series);
		}
	}
	preparePoint(pt: Point, frame: CategoryItemHighlightLayerFrame, target: Series): void {
		let n = new ItemHighlightFrameRect();
		n.left = pt.x;
		n.top = pt.y;
		n.brush = this.getBrush();
		n.outline = this.getOutline();
		if (n.brush == null) {
			if (target.hasMarkers) {
				n.brush = this.itemView.getLightenedBrush(target.getActualMarkerBrush());
			} else {
				n.brush = this.itemView.getLightenedBrush(target.actualBrush);
			}
		}
		if (n.outline == null) {
			if (target.hasMarkers) {
				n.outline = this.itemView.getLightenedBrush(target.getActualMarkerOutlineBrush());
			} else {
				n.outline = this.itemView.getLightenedBrush(target.actualOutline);
			}
		}
		n.strokeThickness = this.thickness;
		n.timeStamp = Base.getHashCodeStatic(target);
		n.dataItem = this.getDataItem(target, pt);
		let targetTemplate = (typeCast<MarkerSeries>((<any>MarkerSeries).$type, target) !== null) ? (<MarkerSeries>target).actualMarkerTemplate : null;
		if (targetTemplate == null || targetTemplate == MarkerSeries.nullMarkerTemplate) {
			let markerType = MarkerSeries.resolveMarkerType(target, MarkerType.Automatic);
			switch (markerType) {
				case MarkerType.Circle:

				case MarkerType.Hidden:
				targetTemplate = this.seriesViewer.circleMarkerTemplate;
				break;

				case MarkerType.Triangle:
				targetTemplate = this.seriesViewer.triangleMarkerTemplate;
				break;

				case MarkerType.Pyramid:
				targetTemplate = this.seriesViewer.pyramidMarkerTemplate;
				break;

				case MarkerType.Square:
				targetTemplate = this.seriesViewer.squareMarkerTemplate;
				break;

				case MarkerType.Diamond:
				targetTemplate = this.seriesViewer.diamondMarkerTemplate;
				break;

				case MarkerType.Pentagon:
				targetTemplate = this.seriesViewer.pentagonMarkerTemplate;
				break;

				case MarkerType.Hexagon:
				targetTemplate = this.seriesViewer.hexagonMarkerTemplate;
				break;

				case MarkerType.Tetragram:
				targetTemplate = this.seriesViewer.tetragramMarkerTemplate;
				break;

				case MarkerType.Pentagram:
				targetTemplate = this.seriesViewer.pentagramMarkerTemplate;
				break;

				case MarkerType.Hexagram:
				targetTemplate = this.seriesViewer.hexagramMarkerTemplate;
				break;

			}

		}
		n.markerTemplate = this.markerTemplate != null ? this.markerTemplate : targetTemplate;
		if (!isNaN_(n.left) && !isNaN_(n.top)) {
			frame.rects.addItem(n.timeStamp, n);
		}
	}
	private getDataItem(target: Series, pt: Point): DataContext {
		let item = target.getItem(pt);
		let exactIndex = target.getExactItemIndex(pt);
		if (this.useInterpolation && exactIndex != Math.floor(exactIndex)) {
			item = null;
		}
		return ((() => {
			let $ret = new DataContext();
			$ret.series = target;
			$ret.item = item;
			return $ret;
		})());
	}
	prepareRect(rect: Rect, frame: CategoryItemHighlightLayerFrame, target: Series): void {
		let n: ItemHighlightFrameRect = new ItemHighlightFrameRect();
		n.left = rect.left;
		n.top = rect.top;
		n.right = rect.right;
		n.bottom = rect.bottom;
		n.brush = this.getBrush();
		n.outline = this.getOutline();
		if (n.brush == null) {
			if (target != null) {
				n.brush = this.itemView.getLightenedTranslucentBrush(target.actualBrush);
			}
		}
		if (n.outline == null) {
			if (target != null) {
				n.outline = this.itemView.getLightenedTranslucentBrush(target.actualOutline);
			}
		}
		n.strokeThickness = this.thickness;
		n.timeStamp = Base.getHashCodeStatic(target);
		if (!rect.isEmpty) {
			frame.rects.addItem(n.timeStamp, n);
		}
	}
	protected renderFrame(frame: Frame, view: SeriesView): void {
		super.renderFrame(frame, view);
		let rectPool = this.itemView.rectPool;
		let markerPool = this.itemView.markerPool;
		let rectCount = 0;
		let markerCount = 0;
		let f = <CategoryItemHighlightLayerFrame>frame;
		for (let rect of fromEnum<ItemHighlightFrameRect>(f.rects.values)) {
			if (rect.markerTemplate != null) {
				let markerVisual = markerPool.item(markerCount);
				this.renderPoint(rect, markerVisual);
				markerCount++;
			} else {
				let rectVisual = rectPool.item(rectCount);
				this.renderRect(rect, rectVisual);
				rectCount++;
			}
		}
		rectPool.count = rectCount;
		markerPool.count = markerCount;
	}
	renderPoint(rect: ItemHighlightFrameRect, markerVisual: ContentControl): void {
		if (isNaN_(rect.left) || isNaN_(rect.top) || isNaN_(rect.strokeThickness) || rect.dataItem == null) {
			markerVisual._visibility = Visibility.Collapsed;
			return;
		}
		let pt = <Point>{ $type: Point_$type, x: rect.left, y: rect.top };
		let dc = <DataContext>rect.dataItem;
		dc.itemBrush = rect.brush;
		let newPt = (<Series>dc.series).getSeriesValuePosition(pt, this.animationActive() || this._useInterpolation, this._skipUnknownValues);
		if (isNaN_(newPt.x) || isNaN_(newPt.y)) {
			markerVisual._visibility = Visibility.Collapsed;
			return;
		}
		this.itemView.positionMarker(markerVisual, newPt.x, newPt.y);
		markerVisual.contentTemplate = rect.markerTemplate;
		markerVisual.content = rect.dataItem;
	}
	renderRect(rect: ItemHighlightFrameRect, rectVisual: Rectangle): void {
		if (isNaN_(rect.left) || isNaN_(rect.top) || isNaN_(rect.bottom) || isNaN_(rect.right) || isNaN_(rect.strokeThickness)) {
			rectVisual._visibility = Visibility.Collapsed;
			return;
		}
		this.itemView.positionRectangle(rectVisual, rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top);
		rectVisual._fill = rect.brush;
		rectVisual._stroke = rect.outline;
		rectVisual.strokeThickness = rect.strokeThickness;
		if (this.dashArray != null) {
			rectVisual.strokeDashArray = this.dashArray;
		} else {
			rectVisual.strokeDashArray = null;
		}
		rectVisual.strokeDashCap = <number>this.dashCap;
	}
	protected requiresPrepare(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export class CategoryItemHighlightLayerView extends AnnotationLayerView {
	static $t: Type = markType(CategoryItemHighlightLayerView, 'CategoryItemHighlightLayerView', (<any>AnnotationLayerView).$type);
	constructor(model: CategoryItemHighlightLayer) {
		super(model);
		this.itemModel = model;
		this.visibleMarkers = new List$1<ContentControl>((<any>ContentControl).$type, 0);
		this.visibleRects = new List$1<Rectangle>((<any>Rectangle).$type, 0);
	}
	private _itemModel: CategoryItemHighlightLayer = null;
	protected get itemModel(): CategoryItemHighlightLayer {
		return this._itemModel;
	}
	protected set itemModel(value: CategoryItemHighlightLayer) {
		this._itemModel = value;
	}
	private _rectPool: Pool$1<Rectangle> = null;
	get rectPool(): Pool$1<Rectangle> {
		return this._rectPool;
	}
	set rectPool(value: Pool$1<Rectangle>) {
		this._rectPool = value;
	}
	private _markerPool: Pool$1<ContentControl> = null;
	get markerPool(): Pool$1<ContentControl> {
		return this._markerPool;
	}
	set markerPool(value: Pool$1<ContentControl>) {
		this._markerPool = value;
	}
	onInit(): void {
		super.onInit();
		this.rectPool = ((() => {
			let $ret = new Pool$1<Rectangle>((<any>Rectangle).$type);
			$ret.create = runOn(this, this.rectCreate);
			$ret.activate = runOn(this, this.rectActivate);
			$ret.disactivate = runOn(this, this.rectDisactivate);
			$ret.destroy = runOn(this, this.rectDestroy);
			return $ret;
		})());
		this.markerPool = ((() => {
			let $ret = new Pool$1<ContentControl>((<any>ContentControl).$type);
			$ret.create = runOn(this, this.markerCreate);
			$ret.activate = runOn(this, this.markerActivate);
			$ret.disactivate = runOn(this, this.markerDisactivate);
			$ret.destroy = runOn(this, this.markerDestroy);
			return $ret;
		})());
	}
	private _visibleMarkers: List$1<ContentControl> = null;
	protected get visibleMarkers(): List$1<ContentControl> {
		return this._visibleMarkers;
	}
	protected set visibleMarkers(value: List$1<ContentControl>) {
		this._visibleMarkers = value;
	}
	private _visibleRects: List$1<Rectangle> = null;
	protected get visibleRects(): List$1<Rectangle> {
		return this._visibleRects;
	}
	protected set visibleRects(value: List$1<Rectangle>) {
		this._visibleRects = value;
	}
	private rectCreate(): Rectangle {
		let rect: Rectangle = new Rectangle();
		rect.isHitTestVisible = false;
		this.visibleRects.add(rect);
		return rect;
	}
	private rectActivate(rect: Rectangle): void {
		rect._visibility = Visibility.Visible;
	}
	private rectDisactivate(rect: Rectangle): void {
		rect._visibility = Visibility.Collapsed;
	}
	private rectDestroy(rect: Rectangle): void {
		this.visibleRects.remove(rect);
	}
	private markerCreate(): ContentControl {
		let marker: ContentControl = new Marker();
		this.visibleMarkers.add(marker);
		return marker;
	}
	private markerActivate(marker: ContentControl): void {
		marker._visibility = Visibility.Visible;
	}
	private markerDisactivate(marker: ContentControl): void {
		marker._visibility = Visibility.Collapsed;
	}
	private markerDestroy(marker: ContentControl): void {
		this.visibleMarkers.remove(marker);
	}
	getLightenedBrush(brush: Brush): Brush {
		if (brush == null) {
			return brush;
		}
		return BrushUtil.getLightened(brush, 0.3);
	}
	getLightenedTranslucentBrush(brush: Brush): Brush {
		if (brush != null) {
			let b = BrushUtil.getLightened(brush, 0.3);
			if (b.isGradient) {
				let grad = <LinearGradientBrush>b;
				if (grad.gradientStops != null) {
					for (let i = 0; i < grad.gradientStops.length; i++) {
						let stop = grad.gradientStops[i];
						stop.color = Color.fromArgb(<number>truncate(Math.round(<number>(stop.color.a) * 0.3)), stop.color.r, stop.color.g, stop.color.b);
						stop.color = stop.color;
					}
				}
			} else {
				b.color = Color.fromArgb(<number>truncate(Math.round(<number>(b.color.a & 255) * 0.3)), b.color.r, b.color.g, b.color.b);
				b.color = b.color;
			}
			return b;
		} else {
			return null;
		}
	}
	positionRectangle(rectVisual: Rectangle, left: number, top: number, width: number, height: number): void {
		rectVisual._visibility = Visibility.Visible;
		rectVisual.canvasLeft = left;
		rectVisual.canvasTop = top;
		rectVisual.width = width;
		rectVisual.height = height;
	}
	positionMarker(markerVisual: ContentControl, x: number, y: number): void {
		markerVisual.canvasLeft = x;
		markerVisual.canvasTop = y;
	}
	protected setupMarkerAppearanceOverride(item: any, index: number): void {
		super.setupMarkerAppearanceOverride(item, index);
		let marker = <ContentControl>item;
		let context = <DataContext>marker.content;
		if (context != null) {
			if (context.itemBrush != null) {
				context.actualItemBrush = context.itemBrush;
			}
			let s = <Series>context.series;
			if (s.hasMarkers) {
				context.outline = s.getActualMarkerOutlineBrush();
			}
			context.thickness = 0.5;
		}
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender && !isHitContext) {
			for (let i = 0; i < this.visibleRects.count; i++) {
				let rect = this.visibleRects._inner[i];
				if (rect._visibility == Visibility.Visible) {
					context.renderRectangle(rect);
				}
			}
			if (this.visibleMarkers.count > 0) {
				let passInfo: DataTemplatePassInfo = new DataTemplatePassInfo();
				passInfo.isHitTestRender = isHitContext;
				passInfo.context = context.getUnderlyingContext();
				passInfo.viewportTop = this.viewport.top;
				passInfo.viewportLeft = this.viewport.left;
				passInfo.viewportWidth = this.viewport.width;
				passInfo.viewportHeight = this.viewport.height;
				passInfo.passID = "ItemMarkers";
				let renderInfo: DataTemplateRenderInfo = new DataTemplateRenderInfo();
				renderInfo.isHitTestRender = isHitContext;
				renderInfo.passInfo = passInfo;
				let measureInfo: DataTemplateMeasureInfo = new DataTemplateMeasureInfo();
				measureInfo.passInfo = passInfo;
				let isConstant: boolean = false;
				let cont: any = context.getUnderlyingContext();
				measureInfo.context = cont;
				renderInfo.context = cont;
				measureInfo.renderContext = context;
				renderInfo.renderContext = context;
				let constantWidth: number = 0;
				let constantHeight: number = 0;
				let _runningTemplates: Dictionary$2<DataTemplate, DataTemplate> = new Dictionary$2<DataTemplate, DataTemplate>((<any>DataTemplate).$type, (<any>DataTemplate).$type, 0);
				for (let i1: number = 0; i1 < this.visibleMarkers.count; i1++) {
					let marker = this.visibleMarkers._inner[i1];
					let template = marker.contentTemplate;
					if (!_runningTemplates.containsKey(template)) {
						_runningTemplates.addItem(template, template);
						if (template != null && template.passStarting != null) {
							template.passStarting(passInfo);
						}
					}
					if (marker._visibility == Visibility.Collapsed) {
						continue;
					}
					this.setupMarkerAppearance(marker, i1, isHitContext);
					if (!isConstant) {
						measureInfo.data = marker.content;
						measureInfo.width = marker.width;
						measureInfo.height = marker.height;
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
				}
				for (let template1 of fromEnum<DataTemplate>(_runningTemplates.keys)) {
					if (template1 != null && template1.passCompleted != null) {
						template1.passCompleted(passInfo);
					}
				}
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		for (let i = 0; i < this.visibleRects.count; i++) {
			this.model.seriesVisualDataManager.exportRectangleData(svd, this.visibleRects._inner[i], "catItemRect", <string[]>[ "Main", "CategoryItem" ]);
		}
		for (let i1 = 0; i1 < this.visibleMarkers.count; i1++) {
			this.model.seriesVisualDataManager.exportMarkerVisualDataFromMarker(this.model, svd, <ContentControl>this.visibleMarkers._inner[i1]);
		}
	}
}


