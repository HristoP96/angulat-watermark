/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { ScatterTriangulationSeries } from "./ScatterTriangulationSeries";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Base, EventArgs, Type, IEnumerable$1, IEnumerable$1_$type, Point, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, String_$type, typeCast, Number_$type, Point_$type, fromEnum, runOn, delegateRemove, delegateCombine, markType, PointUtil } from "igniteui-core/type";
import { Series } from "./Series";
import { ValueBrushScale } from "./ValueBrushScale";
import { ContourValueResolver } from "./ContourValueResolver";
import { FastItemIntColumn } from "igniteui-core/FastItemIntColumn";
import { Control } from "igniteui-core/Control";
import { LinearContourValueResolver } from "./LinearContourValueResolver";
import { SeriesView } from "./SeriesView";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { BrushScale } from "./BrushScale";
import { Rect } from "igniteui-core/Rect";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { ScalerParams } from "./ScalerParams";
import { NumericXAxis } from "./NumericXAxis";
import { NumericYAxis } from "./NumericYAxis";
import { ContourBuilder } from "./ContourBuilder";
import { Clipper } from "igniteui-core/Clipper";
import { List$1 } from "igniteui-core/List$1";
import { Axis } from "./Axis";
import { PolylineBuilder } from "./PolylineBuilder";
import { RectUtil } from "igniteui-core/RectUtil";
import { DataContext } from "igniteui-core/DataContext";
import { Path } from "igniteui-core/Path";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { boxArray$1 } from "igniteui-core/array";
import { isNaN_ } from "igniteui-core/number";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Brush } from "igniteui-core/Brush";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PointCollection } from "igniteui-core/PointCollection";
import { PathFigure } from "igniteui-core/PathFigure";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { BrushCollection } from "igniteui-core/BrushCollection";
import { PointCollectionUtil } from "igniteui-core/PointCollectionUtil";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { Visibility } from "igniteui-core/Visibility";
import { ShapeSeriesViewBase } from "./ShapeSeriesViewBase";
import { stringIsNullOrEmpty } from "igniteui-core/string";

/**
 * @hidden 
 */
export class ScatterContourSeries extends ScatterTriangulationSeries {
	static $t: Type = markType(ScatterContourSeries, 'ScatterContourSeries', (<any>ScatterTriangulationSeries).$type);
	constructor() {
		super();
		FastItemIntColumn.register();
		this.defaultStyleKey = (<any>ScatterContourSeries).$type;
		this.valueResolver = new LinearContourValueResolver();
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == ScatterContourSeries.valueMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.valueMemberPath);
		}
		return super.getItemValue(item, memberPathName);
	}
	private _contourLineView: ScatterContourSeriesView;
	private get contourLineView(): ScatterContourSeriesView {
		return this._contourLineView;
	}
	private set contourLineView(value: ScatterContourSeriesView) {
		this._contourLineView = value;
	}
	protected createView(): SeriesView {
		this.contourLineView = new ScatterContourSeriesView(this);
		return this.contourLineView;
	}
	private static readonly valueMemberPathPropertyName: string = "ValueMemberPath";
	static readonly valueMemberPathProperty: DependencyProperty = DependencyProperty.register(ScatterContourSeries.valueMemberPathPropertyName, String_$type, (<any>ScatterContourSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterContourSeries>sender).raisePropertyChanged(ScatterContourSeries.valueMemberPathPropertyName, e.oldValue, e.newValue)));
	get valueMemberPath(): string {
		return <string>this.getValue(ScatterContourSeries.valueMemberPathProperty);
	}
	set valueMemberPath(value: string) {
		this.setValue(ScatterContourSeries.valueMemberPathProperty, value);
	}
	private static readonly valueColumnPropertyName: string = "ValueColumn";
	private _valueColumn: IFastItemColumn$1<number> = null;
	get valueColumn(): IFastItemColumn$1<number> {
		return this._valueColumn;
	}
	set valueColumn(value: IFastItemColumn$1<number>) {
		let changed: boolean = this.valueColumn != value;
		if (changed) {
			let oldValue: any = this.valueColumn;
			this._valueColumn = value;
			this.raisePropertyChanged(ScatterContourSeries.valueColumnPropertyName, oldValue, this.valueColumn);
		}
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			let oldFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			if (oldFastItemsSource != null) {
				oldFastItemsSource.deregisterColumn(this.valueColumn);
				this.valueColumn = null;
			}
			let newFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue);
			if (newFastItemsSource != null) {
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
			}
			this.renderSeries(false);
			break;

			case ScatterContourSeries.valueMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.valueColumn);
				this.valueColumn = this.registerDoubleColumn(this.valueMemberPath);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterContourSeries.valueResolverPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case ScatterContourSeries.fillScalePropertyName:
			let oldScale = <BrushScale>oldValue;
			let newScale = <BrushScale>newValue;
			if (oldScale != null) {
				oldScale.unregisterSeries(this);
			}
			if (newScale != null) {
				newScale.registerSeries(this);
			}
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.actualBrushPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		if (wipeClean) {
			(<ScatterContourSeriesView>view).clearContours(wipeClean);
		}
	}
	renderSeriesOverride(animate: boolean): void {
		super.renderSeriesOverride(animate);
		this.renderWithView(this.view);
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		view.prepAltSurface(surface);
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		this.renderWithView(view);
	}
	protected renderWithView(view: SeriesView): void {
		if (this.clearAndAbortIfInvalid1(view)) {
			return;
		}
		let windowRect: Rect;
		let viewportRect: Rect;
		let contourLineView = <ScatterContourSeriesView>view;
		let $ret = view.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let xParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, this.xAxis.isInverted);
		xParams.effectiveViewportRect = this.getEffectiveViewport1(view);
		let yParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, this.yAxis.isInverted);
		yParams.effectiveViewportRect = this.getEffectiveViewport1(view);
		let xAxis: NumericXAxis = this.xAxis;
		let yAxis: NumericYAxis = this.yAxis;
		let trCount: number = this.triangleVertexColumn1.count;
		let xSource: number[];
		let xArr_ = this.xColumn.asArray();
		xSource = <number[]>(xArr_.slice(0));
		let ySource: number[];
		let yArr_ = this.yColumn.asArray();
		ySource = <number[]>(yArr_.slice(0));
		let valueSource: number[] = this.valueColumn.asArray();
		let triangleVertexSource1: number[] = this.triangleVertexColumn1.asArray();
		let triangleVertexSource2: number[] = this.triangleVertexColumn2.asArray();
		let triangleVertexSource3: number[] = this.triangleVertexColumn3.asArray();
		let contourValuesEnum: IEnumerable$1<number> = this.valueResolver.getContourValues(this.valueColumn);
		let contourValues: number[] = new List$1<number>(Number_$type, 1, contourValuesEnum).toArray();
		xAxis.getScaledValueList(boxArray$1<number>(xSource), 0, xSource.length, xParams);
		yAxis.getScaledValueList(boxArray$1<number>(ySource), 0, ySource.length, yParams);
		let count: number = contourValues.length;
		let contours: ContourBuilder[] = <ContourBuilder[]>new Array(count);
		for (let i: number = 0; i < count; ++i) {
			contours[i] = new ContourBuilder();
		}
		let viewportTop: number = viewportRect.top;
		let viewportLeft: number = viewportRect.left;
		let viewportRight: number = viewportRect.right;
		let viewportBottom: number = viewportRect.bottom;
		let minY: number;
		let maxY: number;
		let minX: number;
		let maxX: number;
		let xSourceCount: number = xSource.length;
		for (let ii: number = 0; ii < trCount; ii++) {
			let v1: number = triangleVertexSource1[ii];
			let v2: number = triangleVertexSource2[ii];
			let v3: number = triangleVertexSource3[ii];
			if ((v1 >= xSourceCount) || (v2 >= xSourceCount) || (v3 >= xSourceCount) || (v1 < 0) || (v2 < 0) || (v3 < 0)) {
				continue;
			}
			let x1: number = xSource[v1];
			let y1: number = ySource[v1];
			let pt1: Point = <Point>{ $type: Point_$type, x: x1, y: y1 };
			let x2: number = xSource[v2];
			let y2: number = ySource[v2];
			let pt2: Point = <Point>{ $type: Point_$type, x: x2, y: y2 };
			let x3: number = xSource[v3];
			let y3: number = ySource[v3];
			let pt3: Point = <Point>{ $type: Point_$type, x: x3, y: y3 };
			minY = pt2.y < pt3.y ? pt2.y : pt3.y;
			minY = pt1.y < minY ? pt1.y : minY;
			maxY = pt2.y > pt3.y ? pt2.y : pt3.y;
			maxY = pt1.y > maxY ? pt1.y : maxY;
			minX = pt2.x < pt3.x ? pt2.x : pt3.x;
			minX = pt1.x < minX ? pt1.x : minX;
			maxX = pt2.x > pt3.x ? pt2.x : pt3.x;
			maxX = pt1.x > maxX ? pt1.x : maxX;
			if (minY < viewportBottom && maxY > viewportTop && minX < viewportRight && maxX > viewportLeft) {
				let value0: number = valueSource[v1];
				let value1: number = valueSource[v2];
				let value2: number = valueSource[v3];
				if (isNaN_(value0) || isNaN_(value1) || isNaN_(value2)) {
					continue;
				}
				for (let j = 0; j < count; j++) {
					let contourValue: number = contourValues[j];
					let contour: ContourBuilder = contours[j];
					switch ((value0 < contourValue ? 1 : 0) | (value1 < contourValue ? 2 : 0) | (value2 < contourValue ? 4 : 0)) {
						case 0: break;
						case 1:
						contour.addSegment(contour.point(v1, pt1.x, pt1.y, value0, v2, pt2.x, pt2.y, value1, contourValue), contour.point(v3, pt3.x, pt3.y, value2, v1, pt1.x, pt1.y, value0, contourValue));
						break;

						case 2:
						contour.addSegment(contour.point(v2, pt2.x, pt2.y, value1, v3, pt3.x, pt3.y, value2, contourValue), contour.point(v1, pt1.x, pt1.y, value0, v2, pt2.x, pt2.y, value1, contourValue));
						break;

						case 3:
						contour.addSegment(contour.point(v2, pt2.x, pt2.y, value1, v3, pt3.x, pt3.y, value2, contourValue), contour.point(v3, pt3.x, pt3.y, value2, v1, pt1.x, pt1.y, value0, contourValue));
						break;

						case 4:
						contour.addSegment(contour.point(v3, pt3.x, pt3.y, value2, v1, pt1.x, pt1.y, value0, contourValue), contour.point(v2, pt2.x, pt2.y, value1, v3, pt3.x, pt3.y, value2, contourValue));
						break;

						case 5:
						contour.addSegment(contour.point(v1, pt1.x, pt1.y, value0, v2, pt2.x, pt2.y, value1, contourValue), contour.point(v2, pt2.x, pt2.y, value1, v3, pt3.x, pt3.y, value2, contourValue));
						break;

						case 6:
						contour.addSegment(contour.point(v3, pt3.x, pt3.y, value2, v1, pt1.x, pt1.y, value0, contourValue), contour.point(v1, pt1.x, pt1.y, value0, v2, pt2.x, pt2.y, value1, contourValue));
						break;

						case 7: break;
					}

				}
			}
		}
		let clipper: Clipper = new Clipper(0, RectUtil.inflate(viewportRect, 2), false);
		let allPoints: List$1<List$1<List$1<Point>>> = new List$1<List$1<List$1<Point>>>((<any>List$1).$type.specialize((<any>List$1).$type.specialize(Point_$type)), 0);
		for (let i1: number = 0; i1 < count; ++i1) {
			let contour1: ContourBuilder = contours[i1];
			let rings: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
			let polylines = contour1.getPolylines();
			for (let j1 = 0; j1 < polylines.count; j1++) {
				let indices = polylines._inner[j1];
				let pointCollection: List$1<Point> = new List$1<Point>(Point_$type, 0);
				clipper.target = pointCollection;
				for (let index of fromEnum<number>(indices)) {
					clipper.add(<Point>{ $type: Point_$type, x: contour1.x.item(index), y: contour1.y.item(index) });
				}
				clipper.target = null;
				rings.add(pointCollection);
			}
			allPoints.add(rings);
		}
		contourLineView.applyVisuals(allPoints, contourValues);
	}
	private static readonly fillScalePropertyName: string = "FillScale";
	static readonly fillScaleProperty: DependencyProperty = DependencyProperty.register(ScatterContourSeries.fillScalePropertyName, (<any>ValueBrushScale).$type, (<any>ScatterContourSeries).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ScatterContourSeries>sender).raisePropertyChanged(ScatterContourSeries.fillScalePropertyName, e.oldValue, e.newValue)));
	get fillScale(): ValueBrushScale {
		return <ValueBrushScale>this.getValue(ScatterContourSeries.fillScaleProperty);
	}
	set fillScale(value: ValueBrushScale) {
		this.setValue(ScatterContourSeries.fillScaleProperty, value);
	}
	private static readonly valueResolverPropertyName: string = "ValueResolver";
	private _valueResolver: ContourValueResolver = null;
	get valueResolver(): ContourValueResolver {
		return this._valueResolver;
	}
	set valueResolver(value: ContourValueResolver) {
		let changed: boolean = value != this.valueResolver;
		if (changed) {
			if (this._valueResolver != null) {
				let $t = this._valueResolver;
				$t.updated = delegateRemove($t.updated, runOn(this, this.valueResolverEvent));
			}
			let oldValue: any = this._valueResolver;
			this._valueResolver = value;
			if (this._valueResolver != null) {
				let $t1 = this._valueResolver;
				$t1.updated = delegateCombine($t1.updated, runOn(this, this.valueResolverEvent));
			}
			this.raisePropertyChanged(ScatterContourSeries.valueResolverPropertyName, oldValue, value);
			this.renderSeries(false);
		}
	}
	private valueResolverEvent(sender: any, e: EventArgs): void {
		this.renderSeries(false);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		return super.validateSeries(viewportRect, windowRect, view) && this.valueResolver != null && this.xColumn != null && this.yColumn != null && this.triangleVertexColumn1 != null && this.triangleVertexColumn2 != null && this.triangleVertexColumn3 != null && this.xColumn.count > 0 && this.yColumn.count > 0 && this.triangleVertexColumn1.count > 0 && this.triangleVertexColumn2.count > 0 && this.triangleVertexColumn3.count > 0;
	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		let path: Path = this.contourLineView.getHitShape(position, isFinger);
		if (path != null) {
			return <DataContext>path.dataContext;
		}
		return null;
	}
}

/**
 * @hidden 
 */
export class ScatterContourSeriesView extends SeriesView {
	static $t: Type = markType(ScatterContourSeriesView, 'ScatterContourSeriesView', (<any>SeriesView).$type);
	private _paths: Pool$1<Path> = null;
	private get paths(): Pool$1<Path> {
		return this._paths;
	}
	private set paths(value: Pool$1<Path>) {
		this._paths = value;
	}
	private _contourLineModel: ScatterContourSeries = null;
	private get contourLineModel(): ScatterContourSeries {
		return this._contourLineModel;
	}
	private set contourLineModel(value: ScatterContourSeries) {
		this._contourLineModel = value;
	}
	constructor(model: ScatterContourSeries) {
		super(model);
		this.visiblePaths = new List$1<Path>((<any>Path).$type, 0);
		this.contourLineModel = model;
		this.paths = ((() => {
			let $ret = new Pool$1<Path>((<any>Path).$type);
			$ret.create = runOn(this, this.pathCreate);
			$ret.destroy = runOn(this, this.pathDestroy);
			$ret.activate = runOn(this, this.pathActivate);
			$ret.disactivate = runOn(this, this.pathDeactivate);
			return $ret;
		})());
	}
	private _visiblePaths: List$1<Path> = null;
	protected get visiblePaths(): List$1<Path> {
		return this._visiblePaths;
	}
	protected set visiblePaths(value: List$1<Path>) {
		this._visiblePaths = value;
	}
	private pathCreate(): Path {
		let pth: Path = new Path();
		pth.dataContext = ((() => {
			let $ret = new DataContext();
			$ret.series = this.model;
			return $ret;
		})());
		this.visiblePaths.add(pth);
		return pth;
	}
	private pathActivate(pth: Path): void {
		pth._visibility = Visibility.Visible;
	}
	private pathDeactivate(pth: Path): void {
		pth._visibility = Visibility.Collapsed;
	}
	private pathDestroy(pth: Path): void {
		this.visiblePaths.remove(pth);
	}
	private _contourBrushes: List$1<Brush> = new List$1<Brush>((<any>Brush).$type, 0);
	private _contourValues: number[] = null;
	applyVisuals(contours: List$1<List$1<List$1<Point>>>, contourValues: number[]): void {
		let counter: number = 0;
		this._contourValues = contourValues;
		this._contourBrushes.clear();
		let actualFillScale = this.contourLineModel.fillScale;
		if (actualFillScale == null) {
			actualFillScale = new ValueBrushScale();
			actualFillScale.brushes.add(BrushUtil.getLightened(this.model.actualBrush, -0.5));
			actualFillScale.brushes.add(this.model.actualBrush);
		} else if (actualFillScale.brushes == null) {
			actualFillScale.brushes = new BrushCollection();
			actualFillScale.brushes.add(BrushUtil.getLightened(this.model.actualBrush, -0.5));
			actualFillScale.brushes.add(this.model.actualBrush);
		} else if (actualFillScale.brushes.count == 0) {
			actualFillScale.brushes.add(BrushUtil.getLightened(this.model.actualBrush, -0.5));
			actualFillScale.brushes.add(this.model.actualBrush);
		}
		for (let i = 0; i < contourValues.length; i++) {
			let contourValue: number = contourValues[i];
			let contour: List$1<List$1<Point>> = contours._inner[counter];
			let pathGeometry: PathGeometry = new PathGeometry();
			for (let j = 0; j < contour.count; j++) {
				let segment = contour._inner[j];
				if (segment.count == 0) {
					continue;
				}
				let pointCollection: PointCollection = PointCollectionUtil.toPointCollection(segment);
				let pathFigure: PathFigure = ((() => {
					let $ret = new PathFigure();
					$ret.isClosed = false;
					$ret.isFilled = false;
					$ret.startPoint = pointCollection._inner[0];
					return $ret;
				})());
				pathFigure._segments.add(((() => {
					let $ret = new PolyLineSegment();
					$ret.points = pointCollection;
					return $ret;
				})()));
				pathGeometry.figures.add(pathFigure);
			}
			this.paths.item(counter).data = pathGeometry;
			if (this.paths.item(counter).dataContext != null) {
				(<DataContext>this.paths.item(counter).dataContext).item = contourValue;
			}
			if (actualFillScale != null) {
				let stroke = actualFillScale.getBrushByValue(contourValue, this.contourLineModel.valueColumn);
				if (stroke == null) {
					stroke = this.model.actualBrush;
				}
				this._contourBrushes.add(stroke);
			} else {
				this._contourBrushes.add(this.model.actualBrush);
			}
			counter++;
		}
		this.paths.count = counter;
		this.makeDirty();
	}
	protected setupItemAppearanceOverride(item: any, index: number): void {
		super.setupItemAppearanceOverride(item, index);
		let path = <Path>item;
		path._stroke = this._contourBrushes._inner[index];
		path.strokeThickness = this.model.thickness;
		if (path.style != null) {
			this.context.applyStyle(path, path.style);
		}
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
		super.setupItemHitAppearanceOverride(item, index);
		let path = <Path>item;
		let hitBrush = this.getHitBrush1(index);
		path._stroke = hitBrush;
		path.strokeThickness = this.model.thickness + ShapeSeriesViewBase.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		for (let i = 0; i < this.visiblePaths.count; i++) {
			let path = this.visiblePaths._inner[i];
			if (path._visibility != Visibility.Collapsed) {
				this.setupItemAppearance(path, i, isHitContext);
				context.renderPath(path);
			}
		}
	}
	clearContours(wipeClean: boolean): void {
		this.paths.count = 0;
		this.makeDirty();
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let contours = new List$1<Tuple$2<number, Path>>((<any>Tuple$2).$type.specialize(Number_$type, (<any>Path).$type), 0);
		if (this._contourValues != null) {
			for (let i = 0; i < this.paths.count; i++) {
				contours.add(new Tuple$2<number, Path>(Number_$type, (<any>Path).$type, this._contourValues[i], this.paths.item(i)));
			}
		}
		contours.sort2((p1: Tuple$2<number, Path>, p2: Tuple$2<number, Path>) => {
			if (p1.item1 < p2.item1) {
				return -1;
			} else if (p1.item1 > p2.item1) {
				return 1;
			}
			return 0;
		});
		for (let i1 = 0; i1 < contours.count; i1++) {
			let shape = typeCast<Path>((<any>Path).$type, contours._inner[i1].item2);
			if (shape._visibility != Visibility.Collapsed) {
				this.model.seriesVisualDataManager.exportPathData(svd, shape, "contour" + i1, <string[]>[ "Main " ]);
			}
		}
	}
	getDefaultTooltipTemplate(): string {
		let tooltipTemplate: string = "<div class='ui-chart-default-tooltip-content'><span";
		let labelColorString: string = this.model.seriesInteractionManager.getDefaultTooltipTemplateLabelColorString(this.model);
		if (!stringIsNullOrEmpty(labelColorString)) {
			tooltipTemplate += " style='color:" + labelColorString + "'";
		}
		tooltipTemplate += ">" + this.contourLineModel.title + "</span><br/>";
		if (!stringIsNullOrEmpty(this.contourLineModel.valueMemberPath)) {
			tooltipTemplate += "<span>Value: ${item}</span>";
		}
		tooltipTemplate += "</div>";
		return tooltipTemplate;
	}
	getHitShape(position: Point, isFinger: boolean): Path {
		for (let i = 0; i < this.visiblePaths.count; i++) {
			let path = this.visiblePaths._inner[i];
			let geo = typeCast<PathGeometry>((<any>PathGeometry).$type, path.data);
			if (geo != null) {
				for (let j = 0; j < geo.figures.count; j++) {
					let figure = geo.figures._inner[j];
					let startPoint = geo.figures._inner[j]._startPoint;
					for (let k = 0; k < figure._segments.count; k++) {
						let polySegment = typeCast<PolyLineSegment>((<any>PolyLineSegment).$type, figure._segments._inner[k]);
						if (polySegment != null) {
							let distance = this.contourLineModel.thickness / 2 + this.contourLineModel.getHitTestAllowance(isFinger);
							if (polySegment._points.count > 0 && GeometryUtil.isPointNearPolyline(position, startPoint, polySegment._points, distance)) {
								return path;
							}
						}
					}
				}
			}
		}
		return null;
	}
}


