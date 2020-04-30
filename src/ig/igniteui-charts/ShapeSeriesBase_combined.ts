/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Series } from "./Series";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { IFastItemColumn$1 } from "igniteui-core/IFastItemColumn$1";
import { Base, IEnumerable, IEnumerable_$type, Point, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Type, String_$type, typeCast, Point_$type, fromEnum, Array_$type, Number_$type, markType, PointUtil, runOn } from "igniteui-core/type";
import { NumericXAxis } from "./NumericXAxis";
import { NumericYAxis } from "./NumericYAxis";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { Axis } from "./Axis";
import { IFastItemsSource, IFastItemsSource_$type } from "igniteui-core/IFastItemsSource";
import { PointCollectionUtil } from "igniteui-core/PointCollectionUtil";
import { FlattenedShape } from "./FlattenedShape";
import { SeriesView } from "./SeriesView";
import { Clipper } from "igniteui-core/Clipper";
import { ScalerParams } from "./ScalerParams";
import { RenderSurface } from "./RenderSurface";
import { ISeriesInteractionManager } from "./ISeriesInteractionManager";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { FastItemsSourceEventAction } from "igniteui-core/FastItemsSourceEventAction";
import { NumericAxisBase } from "./NumericAxisBase";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { PolySimplification } from "igniteui-core/PolySimplification";
import { DefaultFlattener } from "./DefaultFlattener";
import { DataContext } from "igniteui-core/DataContext";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { AxisRange } from "./AxisRange";
import { Style } from "igniteui-core/Style";
import { StyleShapeEventArgs } from "./StyleShapeEventArgs";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { boxArray$1 } from "igniteui-core/array";
import { InvalidOperationException } from "igniteui-core/InvalidOperationException";
import { FastItemObjectColumn } from "igniteui-core/FastItemObjectColumn";
import { Path } from "igniteui-core/Path";
import { Pool$1 } from "igniteui-core/Pool$1";
import { ShapeHitRegion } from "./ShapeHitRegion";
import { StyleSelector } from "./StyleSelector";
import { PointCollection } from "igniteui-core/PointCollection";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PathFigure } from "igniteui-core/PathFigure";
import { PathSegment } from "igniteui-core/PathSegment";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { PolygonUtil } from "igniteui-core/PolygonUtil";
import { RectUtil } from "igniteui-core/RectUtil";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { truncate } from "igniteui-core/number";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export abstract class ShapeSeriesBase extends Series {
	static $t: Type = markType(ShapeSeriesBase, 'ShapeSeriesBase', (<any>Series).$type);
	constructor() {
		super();
		FastItemObjectColumn.register();
		this.shapeFilterResolutionCached = this.shapeFilterResolution;
		this.clipRect = Rect.empty;
	}
	clearAxes(): void {
		super.clearAxes();
		this.xAxis = null;
		this.yAxis = null;
	}
	getAxes(): Axis[] {
		return <Axis[]>[ this.xAxis, this.yAxis ];
	}
	getItemValue(item: any, memberPathName: string): any {
		let resolved = this.resolveMemberPath(memberPathName);
		if (resolved == ShapeSeriesBase.shapeMemberPathPropertyName) {
			return this.getItemValueByMemberPath(item, memberPathName, this.shapeMemberPath);
		}
		return null;
	}
	static readonly shapeMemberPathPropertyName: string = "ShapeMemberPath";
	static readonly shapeMemberPathProperty: DependencyProperty = DependencyProperty.register(ShapeSeriesBase.shapeMemberPathPropertyName, String_$type, (<any>ShapeSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ShapeSeriesBase>((<any>ShapeSeriesBase).$type, sender)).raisePropertyChanged(ShapeSeriesBase.shapeMemberPathPropertyName, e.oldValue, e.newValue)));
	get shapeMemberPath(): string {
		return <string>this.getValue(ShapeSeriesBase.shapeMemberPathProperty);
	}
	set shapeMemberPath(value: string) {
		this.setValue(ShapeSeriesBase.shapeMemberPathProperty, value);
	}
	private static readonly shapeColumnPropertyName: string = "ShapeColumn";
	private _shapeColumn: IFastItemColumn$1<any> = null;
	get shapeColumn(): IFastItemColumn$1<any> {
		return this._shapeColumn;
	}
	set shapeColumn(value: IFastItemColumn$1<any>) {
		let changed: boolean = this.shapeColumn != value;
		if (changed) {
			let oldValue: any = this.shapeColumn;
			this._shapeColumn = value;
			this.raisePropertyChanged(ShapeSeriesBase.shapeColumnPropertyName, oldValue, this.shapeColumn);
		}
	}
	get xAxis(): NumericXAxis {
		return <NumericXAxis>this.getValue(ShapeSeriesBase.xAxisProperty);
	}
	set xAxis(value: NumericXAxis) {
		this.setValue(ShapeSeriesBase.xAxisProperty, value);
	}
	static readonly xAxisPropertyName: string = "XAxis";
	static readonly xAxisProperty: DependencyProperty = DependencyProperty.register(ShapeSeriesBase.xAxisPropertyName, (<any>NumericXAxis).$type, (<any>ShapeSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ShapeSeriesBase>((<any>ShapeSeriesBase).$type, sender)).raisePropertyChanged(ShapeSeriesBase.xAxisPropertyName, e.oldValue, e.newValue)));
	get yAxis(): NumericYAxis {
		return <NumericYAxis>this.getValue(ShapeSeriesBase.yAxisProperty);
	}
	set yAxis(value: NumericYAxis) {
		this.setValue(ShapeSeriesBase.yAxisProperty, value);
	}
	static readonly yAxisPropertyName: string = "YAxis";
	static readonly yAxisProperty: DependencyProperty = DependencyProperty.register(ShapeSeriesBase.yAxisPropertyName, (<any>NumericYAxis).$type, (<any>ShapeSeriesBase).$type, new PropertyMetadata(2, null, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (typeCast<ShapeSeriesBase>((<any>ShapeSeriesBase).$type, sender)).raisePropertyChanged(ShapeSeriesBase.yAxisPropertyName, e.oldValue, e.newValue)));
	private isArray(array_: IEnumerable): boolean {
		let isArr = <boolean>(Array.isArray(array_));
		return isArr;
	}
	private convertToListList(val: any[]): List$1<List$1<Point>> {
		if (val == null) {
			return null;
		}
		let ret: List$1<List$1<Point>> = new List$1<List$1<Point>>((<any>List$1).$type.specialize(Point_$type), 0);
		let shape: any[];
		let curr_: any;
		let x: number;
		let y: number;
		for (let i = 0; i < val.length; i++) {
			shape = <any[]>val[i];
			let ring: List$1<Point> = new List$1<Point>(Point_$type, 0);
			for (let j = 0; j < shape.length; j++) {
				curr_ = shape[j];
				x = <number>(curr_.x);
				y = <number>(curr_.y);
				ring.add(<Point>{ $type: Point_$type, x: x, y: y });
			}
			ret.add(ring);
		}
		return ret;
	}
	protected registerObjectColumn(memberPath: string): IFastItemColumn$1<any> {
		if (this.fastItemsSource != null && this.isArray(this.itemsSource) && memberPath != null && memberPath.split('!').length != 2) {
			if (this.coercionMethods == null) {
				this.coercionMethods = {};
			}
			let methods_ = this.coercionMethods;
			methods_.convertToListList = this.convertToListList;
			memberPath += "!convertToListList";
		}
		return super.registerObjectColumn(memberPath);
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		let xAxisReady = false;
		let yAxisReady = false;
		switch (propertyName) {
			case Series.fastItemsSourcePropertyName:
			let oldFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, oldValue);
			if (oldFastItemsSource != null) {
				oldFastItemsSource.deregisterColumn(this.shapeColumn);
				this.shapeColumn = null;
			}
			let newFastItemsSource: IFastItemsSource = typeCast<IFastItemsSource>(IFastItemsSource_$type, newValue);
			if (newFastItemsSource != null) {
				this.shapeColumn = this.registerObjectColumn(this.shapeMemberPath);
			}
			xAxisReady = this.xAxis != null && !this.xAxis.updateRange();
			yAxisReady = this.yAxis != null && !this.yAxis.updateRange();
			if (xAxisReady || yAxisReady) {
				this.renderSeries(false);
			}
			break;

			case ShapeSeriesBase.shapeMemberPathPropertyName:
			if (this.fastItemsSource != null) {
				this.fastItemsSource.deregisterColumn(this.shapeColumn);
				this.shapeColumn = this.registerObjectColumn(this.shapeMemberPath);
			}
			break;

			case ShapeSeriesBase.shapeColumnPropertyName:
			this.resetBoundsColumn();
			xAxisReady = this.xAxis != null && !this.xAxis.updateRange();
			yAxisReady = this.yAxis != null && !this.yAxis.updateRange();
			if (xAxisReady || yAxisReady) {
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case ShapeSeriesBase.xAxisPropertyName:

			case ShapeSeriesBase.yAxisPropertyName:
			this._xAxis = this.xAxis;
			this._yAxis = this.yAxis;
			let oldAxis = <Axis>oldValue;
			let newAxis = <Axis>newValue;
			this.unInitializeAxis(oldAxis);
			this.initializeAxis(newAxis);
			if ((newAxis != null && !newAxis.updateRange()) || (newAxis == null && oldAxis != null)) {
				this.renderSeries(false);
			}
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.resolutionPropertyName:
			this._resolution = this.resolution;
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.actualBrushPropertyName:
			this.renderSeries(false);
			break;

			case ShapeSeriesBase.shapeFilterResolutionPropertyName:
			this.shapeFilterResolutionCached = this.shapeFilterResolution;
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

			case Series.thicknessPropertyName:
			this.renderSeries(false);
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
	private _xAxis: NumericXAxis = null;
	private _yAxis: NumericYAxis = null;
	private _resolution: number = 0;
	private _boundsColumn: List$1<Rect> = null;
	get boundsColumn(): List$1<Rect> {
		return this._boundsColumn;
	}
	set boundsColumn(value: List$1<Rect>) {
		this._boundsColumn = value;
	}
	private resetBoundsColumn(): void {
		this.boundsColumn = null;
		if (this.shapeColumn == null) {
			return;
		}
		this.boundsColumn = new List$1<Rect>((<any>Rect).$type, 2, this.shapeColumn.count);
		for (let i = 0; i < this.shapeColumn.count; i++) {
			this.boundsColumn.add(PointCollectionUtil.getBounds3((<List$1<List$1<Point>>>this.shapeColumn.item(i))));
		}
	}
	private getBounds(dataItem: any): Rect {
		if (typeCast<IEnumerable$1<IEnumerable$1<Point>>>(IEnumerable$1_$type.specialize(IEnumerable$1_$type.specialize(Point_$type)), dataItem) !== null) {
			return PointCollectionUtil.getBounds1((<IEnumerable$1<IEnumerable$1<Point>>><any>dataItem));
		} else if (typeCast<IEnumerable$1<Point>>(IEnumerable$1_$type.specialize(Point_$type), dataItem) !== null) {
			return PointCollectionUtil.getBounds((<IEnumerable$1<Point>><any>dataItem));
		}
		return Rect.empty;
	}
	private getPlotPoints(view: SeriesView, clipper: Clipper, itemPoints: any, xParams: ScalerParams, yParams: ScalerParams): List$1<FlattenedShape> {
		return this.mapAndFlatten1(view, clipper, <List$1<List$1<Point>>>itemPoints, xParams, yParams);
		if (typeCast<List$1<List$1<Point>>>((<any>List$1).$type.specialize((<any>List$1).$type.specialize(Point_$type)), itemPoints) !== null) {
			return this.mapAndFlatten1(view, clipper, <List$1<List$1<Point>>>itemPoints, xParams, yParams);
		} else if (typeCast<IEnumerable$1<IEnumerable$1<Point>>>(IEnumerable$1_$type.specialize(IEnumerable$1_$type.specialize(Point_$type)), itemPoints) !== null) {
			let rings: IEnumerable$1<IEnumerable$1<Point>> = <IEnumerable$1<IEnumerable$1<Point>>><any>itemPoints;
			let plotPoints: List$1<FlattenedShape> = new List$1<FlattenedShape>((<any>FlattenedShape).$type, 0);
			let mappedAndFlattened: FlattenedShape = null;
			for (let ring of fromEnum<IEnumerable$1<Point>>(rings)) {
				mappedAndFlattened = this.mapAndFlatten(view, clipper, PointCollectionUtil.toPointList(ring), xParams, yParams);
				if (mappedAndFlattened == null) {
					continue;
				}
				plotPoints.add(mappedAndFlattened);
			}
			return plotPoints;
		} else if (typeCast<IEnumerable$1<Point>>(IEnumerable$1_$type.specialize(Point_$type), itemPoints) !== null) {
			let points: IEnumerable$1<Point> = <IEnumerable$1<Point>><any>itemPoints;
			let singleRingPlotPoints: FlattenedShape = this.mapAndFlatten(view, clipper, PointCollectionUtil.toPointList(points), xParams, yParams);
			let plotPoints1: List$1<FlattenedShape> = new List$1<FlattenedShape>((<any>FlattenedShape).$type, 0);
			if (singleRingPlotPoints != null) {
				plotPoints1.add(singleRingPlotPoints);
			}
			return plotPoints1;
		} else {
			throw new InvalidOperationException(1, "Unrecognized data in ShapeColumn");
		}
	}
	private _boundsLeft: number[] = null;
	private _boundsTop: number[] = null;
	private _boundsRight: number[] = null;
	private _boundsBottom: number[] = null;
	protected get_isClosed(): boolean {
		return true;
	}
	protected get isClosed(): boolean {
		return this.get_isClosed();
	}
	protected shouldRecordMarkerPositions(): boolean {
		return false;
	}
	renderSeriesOverride(animate: boolean): void {
		this.renderWithView(this.view);
	}
	renderAlternateView(viewportRect: Rect, windowRect: Rect, surface: RenderSurface, viewIdentifier: string, effectiveScalingRatio: number): void {
		super.renderAlternateView(viewportRect, windowRect, surface, viewIdentifier, effectiveScalingRatio);
		let view = this.seriesInteractionManager.alternateViews.item(viewIdentifier);
		let shapeViewBase: ShapeSeriesViewBase = <ShapeSeriesViewBase>view;
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
		let shapeSeriesView = <ShapeSeriesViewBase>view;
		let $ret = view.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		if (viewportRect.width < 1 || viewportRect.height < 1 || this.shapeColumn == null) {
			return;
		}
		let xaxis = this.xAxis;
		let yaxis = this.yAxis;
		let effectiveViewportRect = this.getEffectiveViewport1(view);
		let xParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, xaxis.isInverted);
		xParams.effectiveViewportRect = effectiveViewportRect;
		let yParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, yaxis.isInverted);
		yParams.effectiveViewportRect = effectiveViewportRect;
		shapeSeriesView.initializeShapes();
		let mappedBounds: Rect = new Rect(0, 0, 0, 0, 0);
		let top: number;
		let bottom: number;
		let left: number;
		let right: number;
		let shapeCount = this.shapeColumn.count;
		if (this._boundsTop == null || this._boundsTop.length != shapeCount) {
			this._boundsTop = <number[]>new Array(shapeCount);
			this._boundsLeft = <number[]>new Array(shapeCount);
			this._boundsRight = <number[]>new Array(shapeCount);
			this._boundsBottom = <number[]>new Array(shapeCount);
		}
		let boundsTop = this._boundsTop;
		let boundsLeft = this._boundsLeft;
		let boundsRight = this._boundsRight;
		let boundsBottom = this._boundsBottom;
		let bounds: Rect;
		for (let i: number = 0; i < shapeCount; i++) {
			bounds = this.boundsColumn._inner[i];
			boundsTop[i] = bounds.top;
			boundsLeft[i] = bounds.left;
			boundsRight[i] = bounds.right;
			boundsBottom[i] = bounds.bottom;
		}
		this._xAxis.getScaledValueList(boxArray$1<number>(boundsLeft), 0, boundsLeft.length, xParams);
		this._xAxis.getScaledValueList(boxArray$1<number>(boundsRight), 0, boundsRight.length, xParams);
		this._yAxis.getScaledValueList(boxArray$1<number>(boundsTop), 0, boundsTop.length, yParams);
		this._yAxis.getScaledValueList(boxArray$1<number>(boundsBottom), 0, boundsBottom.length, yParams);
		shapeSeriesView.provideBounds(boundsLeft, boundsTop, boundsRight, boundsBottom);
		let shapeColumn = this.shapeColumn;
		let fastItemsSource = this.fastItemsSource;
		this.updateClipRect(shapeSeriesView);
		let viewportLeft = viewportRect.left;
		let viewportRight = viewportRect.right;
		let viewportTop = viewportRect.top;
		let viewportBottom = viewportRect.bottom;
		let clipper: Clipper = null;
		if (this.clipRect.isEmpty) {
			clipper = null;
		} else {
			clipper = new Clipper(1, this.clipRect.left, this.clipRect.bottom, this.clipRect.right, this.clipRect.top, this.isClosed);
		}
		let shouldRecordMarkerPositions: boolean = this.shouldRecordMarkerPositions();
		if (shouldRecordMarkerPositions) {
			shapeSeriesView.markerPositions.clear();
		}
		let actualClipper: Clipper;
		for (let i1: number = 0; i1 < shapeCount; i1++) {
			left = boundsLeft[i1];
			top = boundsTop[i1];
			bottom = boundsBottom[i1];
			right = boundsRight[i1];
			mappedBounds.x = Math.min(left, right);
			mappedBounds.y = Math.min(top, bottom);
			mappedBounds.width = Math.max(left, right) - mappedBounds.x;
			mappedBounds.height = Math.max(top, bottom) - mappedBounds.y;
			if (mappedBounds.intersectsWith(viewportRect)) {
				if (mappedBounds.x < viewportLeft || mappedBounds.y < viewportTop || mappedBounds.x > viewportRight || mappedBounds.y > viewportBottom) {
					actualClipper = clipper;
				} else {
					actualClipper = null;
				}
				let plotPoints: List$1<FlattenedShape> = this.getPlotPoints(view, actualClipper, shapeColumn.item(i1), xParams, yParams);
				if (shouldRecordMarkerPositions) {
					let maxArea: number = 0;
					let maxShape: FlattenedShape = null;
					for (let k = 0; k < plotPoints.count; k++) {
						let s = plotPoints._inner[k];
						let area = s.bounds.width * s.bounds.height;
						if (area > maxArea) {
							maxArea = area;
							maxShape = s;
						}
					}
					shapeSeriesView.markerPositions.addItem(i1, maxShape);
				}
				shapeSeriesView.addShape(i1, fastItemsSource.item(i1), mappedBounds, plotPoints);
			}
		}
		shapeSeriesView.finalizeShapes();
	}
	invalidateAxes(): void {
		super.invalidateAxes();
		if (this.xAxis != null) {
			this.xAxis.renderAxis();
		}
		if (this.yAxis != null) {
			this.yAxis.renderAxis();
		}
	}
	protected windowRectChangedOverride(oldWindowRect: Rect, newWindowRect: Rect): void {
		this.renderSeries(false);
	}
	protected viewportRectChangedOverride(oldViewportRect: Rect, newViewportRect: Rect): void {
		this.renderSeries(false);
	}
	protected dataUpdatedOverride(action: FastItemsSourceEventAction, position: number, count: number, propertyName: string): void {
		super.dataUpdatedOverride(action, position, count, propertyName);
		switch (action) {
			case FastItemsSourceEventAction.Change:
			if (propertyName == this.shapeMemberPath) {
				this.boundsColumn._inner[position] = this.getBounds(this.shapeColumn.item(position));
			}
			break;

			case FastItemsSourceEventAction.Insert:
			for (let b: number = position; b < position + count; b++) {
				this.boundsColumn.insert(b, this.getBounds(this.shapeColumn.item(b)));
			}
			break;

			case FastItemsSourceEventAction.Remove:
			this.boundsColumn.removeRange(position, count);
			break;

			case FastItemsSourceEventAction.Replace:
			for (let c: number = position; c < position + count; c++) {
				this.boundsColumn._inner[c] = this.getBounds(this.shapeColumn.item(c));
			}
			break;

			case FastItemsSourceEventAction.Reset:
			this.resetBoundsColumn();
			break;

		}

		this.renderSeries(false);
	}
	validateSeries(viewportRect: Rect, windowRect: Rect, view: SeriesView): boolean {
		let isValid: boolean = true;
		if (!super.validateSeries(viewportRect, windowRect, view) || (this.requiresShapes && this.shapeColumn == null) || windowRect.isEmpty || viewportRect.isEmpty || this.xAxis == null || this.yAxis == null || this.xAxis.seriesViewer == null || this.yAxis.seriesViewer == null || this.xAxis.actualMinimumValue == this.xAxis.actualMaximumValue || this.yAxis.actualMinimumValue == this.yAxis.actualMaximumValue || this.shapeColumn == null || this.shapeColumn.count == 0 || this.boundsColumn == null || this.boundsColumn.count == 0 || this.boundsColumn.count != this.shapeColumn.count) {
			isValid = false;
		}
		return isValid;
	}
	protected get_requiresShapes(): boolean {
		return true;
	}
	protected get requiresShapes(): boolean {
		return this.get_requiresShapes();
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.shapeSeriesView = typeCast<ShapeSeriesViewBase>((<any>ShapeSeriesViewBase).$type, view);
	}
	private _shapeSeriesView: ShapeSeriesViewBase;
	private get shapeSeriesView(): ShapeSeriesViewBase {
		return this._shapeSeriesView;
	}
	private set shapeSeriesView(value: ShapeSeriesViewBase) {
		this._shapeSeriesView = value;
	}
	private mapAndFlatten1(view: SeriesView, clipper: Clipper, points: List$1<List$1<Point>>, xParams: ScalerParams, yParams: ScalerParams): List$1<FlattenedShape> {
		let rings: List$1<FlattenedShape> = new List$1<FlattenedShape>((<any>FlattenedShape).$type, 0);
		let ring: List$1<Point>;
		let count: number = points.count;
		for (let i = 0; i < count; i++) {
			ring = points._inner[i];
			let s: FlattenedShape = this.mapAndFlatten(view, clipper, ring, xParams, yParams);
			if (s == null) {
				continue;
			}
			rings.add(s);
		}
		return rings;
	}
	private mapAndFlatten(view: SeriesView, clipper: Clipper, points: List$1<Point>, xParams: ScalerParams, yParams: ScalerParams): FlattenedShape {
		let mappedPoints: Tuple$2<number[], number[]> = this.mapPoints(points, xParams, yParams);
		let mappedX = mappedPoints.item1;
		let mappedY = mappedPoints.item2;
		let mappedCount = mappedX.length;
		let minX = 1.7976931348623157E+308;
		let minY = 1.7976931348623157E+308;
		let maxX = -1.7976931348623157E+308;
		let maxY = -1.7976931348623157E+308;
		let currX: number;
		let currY: number;
		for (let i = 0; i < mappedCount; i++) {
			currX = mappedX[i];
			currY = mappedY[i];
			minX = currX < minX ? currX : minX;
			minY = currY < minY ? currY : minY;
			maxX = currX > maxX ? currX : maxX;
			maxY = currY > maxY ? currY : maxY;
		}
		let intersects: boolean = !(minX > this.clipRect.right || maxX < this.clipRect.left || minY > this.clipRect.bottom || maxY < this.clipRect.top);
		if (!intersects) {
			return null;
		}
		let needsClip: boolean = clipper != null && (minX < this.clipRect.left || minY < this.clipRect.top || maxX > this.clipRect.right || maxY > this.clipRect.bottom);
		let fullBounds = new Rect(0, minX, minY, maxX - minX, maxY - minY);
		if (!(<ShapeSeriesViewBase>view).shouldRenderShape(fullBounds)) {
			return null;
		}
		minX = minX < this.clipRect.left ? this.clipRect.left : minX;
		maxX = maxX > this.clipRect.right ? this.clipRect.right : maxX;
		minY = minY < this.clipRect.top ? this.clipRect.top : minY;
		maxY = maxY > this.clipRect.bottom ? this.clipRect.bottom : maxY;
		let numReduced: number = PolySimplification.vertexReduction(mappedPoints, this.resolution);
		let result: List$1<Point> = new DefaultFlattener().fastFlatten(mappedPoints.item1, mappedPoints.item2, numReduced, this._resolution);
		let count = result.count;
		if (needsClip) {
			let clippedResult: List$1<Point> = new List$1<Point>(Point_$type, 0);
			clipper.target = clippedResult;
			for (let i1 = 0; i1 < count; i1++) {
				clipper.add(result._inner[i1]);
			}
			clipper.target = null;
			result = clippedResult;
		}
		if (result == null || result.count == 0) {
			return null;
		}
		let s: FlattenedShape = new FlattenedShape();
		s.shape = result;
		s.bounds = new Rect(0, minX, minY, maxX - minX, maxY - minY);
		s.fullBounds = fullBounds;
		return s;
	}
	private mapPoints(points: List$1<Point>, xParams: ScalerParams, yParams: ScalerParams): Tuple$2<number[], number[]> {
		let xAxis: NumericXAxis = this._xAxis;
		let yAxis: NumericYAxis = this._yAxis;
		let count = points.count;
		let xvals: number[] = <number[]>new Array(count);
		let yvals: number[] = <number[]>new Array(count);
		for (let i: number = 0; i < count; i++) {
			xvals[i] = points._inner[i].x;
			yvals[i] = points._inner[i].y;
		}
		xAxis.getScaledValueList(boxArray$1<number>(xvals), 0, xvals.length, xParams);
		yAxis.getScaledValueList(boxArray$1<number>(yvals), 0, yvals.length, yParams);
		return new Tuple$2<number[], number[]>(Array_$type, Array_$type, xvals, yvals);
	}
	clipRect: Rect = null;
	private updateClipRect(view: ShapeSeriesViewBase): void {
		view.updateClipRect();
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let shapeSeriesView = <ShapeSeriesViewBase>view;
		shapeSeriesView.clearRendering();
	}
	private initializeAxis(axis: Axis): void {
		if (axis != null) {
			axis.registerSeries(this);
		}
	}
	private unInitializeAxis(axis: Axis): void {
		if (axis != null) {
			axis.deregisterSeries(this);
		}
	}
	getHitDataContext(position: Point, isFinger: boolean): DataContext {
		let shape = this.shapeSeriesView.getHitShape(position, isFinger);
		let ret: DataContext = null;
		if (shape != null) {
			ret = <DataContext>shape.dataContext;
		}
		if (ret != null) {
			return ret;
		}
		return super.getHitDataContext(position, isFinger);
	}
	getItemAt(index: number): any {
		return this.fastItemsSource.item(index);
	}
	protected get_useDeferredMouseEnterAndLeave(): boolean {
		return true;
	}
	protected set_useDeferredMouseEnterAndLeave(value: boolean): void {
		super.set_useDeferredMouseEnterAndLeave(value);
	}
	static readonly shapeFilterResolutionPropertyName: string = "ShapeFilterResolution";
	static readonly shapeFilterResolutionProperty: DependencyProperty = DependencyProperty.register(ShapeSeriesBase.shapeFilterResolutionPropertyName, Number_$type, (<any>ShapeSeriesBase).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<ShapeSeriesBase>sender).raisePropertyChanged(ShapeSeriesBase.shapeFilterResolutionPropertyName, e.oldValue, e.newValue)));
	get shapeFilterResolution(): number {
		return <number>this.getValue(ShapeSeriesBase.shapeFilterResolutionProperty);
	}
	set shapeFilterResolution(value: number) {
		this.setValue(ShapeSeriesBase.shapeFilterResolutionProperty, value);
	}
	private _shapeFilterResolutionCached: number = 0;
	get shapeFilterResolutionCached(): number {
		return this._shapeFilterResolutionCached;
	}
	set shapeFilterResolutionCached(value: number) {
		this._shapeFilterResolutionCached = value;
	}
	getRange(axis: Axis): AxisRange {
		if (typeCast<NumericXAxis>((<any>NumericXAxis).$type, axis) !== null && this.boundsColumn != null) {
			let xMin = 1.7976931348623157E+308;
			let xMax = -1.7976931348623157E+308;
			for (let rect of fromEnum<Rect>(this.boundsColumn)) {
				xMin = Math.min(xMin, rect.left);
				xMax = Math.max(xMax, rect.right);
			}
			return new AxisRange(xMin, xMax);
		}
		if (typeCast<NumericYAxis>((<any>NumericYAxis).$type, axis) !== null && this.boundsColumn != null) {
			let yMin = 1.7976931348623157E+308;
			let yMax = -1.7976931348623157E+308;
			for (let rect1 of fromEnum<Rect>(this.boundsColumn)) {
				yMin = Math.min(yMin, rect1.top);
				yMax = Math.max(yMax, rect1.bottom);
			}
			return new AxisRange(yMin, yMax);
		}
		return null;
	}
	protected get_isShape(): boolean {
		return true;
	}
	onStyleShape(item: any, container: DependencyObject, style: Style): Style {
		if (this.styleShape != null) {
			if (this.shapeSeriesView.defaultShapeStyle != null && style == this.shapeSeriesView.defaultShapeStyle) {
				style = new Style();
				let d = this.shapeSeriesView.defaultShapeStyle;
				style.fill = d.fill;
				style.opacity = d.opacity;
				style.stroke = d.stroke;
				style.strokeThickness = d.strokeThickness;
			} else {
				if (style != null) {
					let nstyle = new Style();
					nstyle.fill = style.fill;
					nstyle.opacity = style.opacity;
					nstyle.stroke = style.stroke;
					nstyle.strokeThickness = style.strokeThickness;
					style = nstyle;
				} else {
					style = new Style();
				}
			}
			let e = new StyleShapeEventArgs(item, container, style);
			this.styleShape(this, e);
			return e.getStyle();
		}
		return null;
	}
	styleShape: (sender: any, e: StyleShapeEventArgs) => void = null;
}

/**
 * @hidden 
 */
export abstract class ShapeSeriesViewBase extends SeriesView {
	static $t: Type = markType(ShapeSeriesViewBase, 'ShapeSeriesViewBase', (<any>SeriesView).$type);
	constructor(model: ShapeSeriesBase) {
		super(model);
		this.shapeModel = model;
		this.elements = this.createElementsPool();
		this.visibleElements = new List$1<Path>((<any>Path).$type, 0);
		this.markerPositions = new Dictionary$2<number, FlattenedShape>(Number_$type, (<any>FlattenedShape).$type, 0);
	}
	private _markerPositions: Dictionary$2<number, FlattenedShape> = null;
	get markerPositions(): Dictionary$2<number, FlattenedShape> {
		return this._markerPositions;
	}
	set markerPositions(value: Dictionary$2<number, FlattenedShape>) {
		this._markerPositions = value;
	}
	protected createElementsPool(): Pool$1<FrameworkElement> {
		return ((() => {
			let $ret = new Pool$1<FrameworkElement>((<any>FrameworkElement).$type);
			$ret.create = runOn(this, this.elementCreate);
			$ret.activate = runOn(this, this.elementActivate);
			$ret.disactivate = runOn(this, this.elementDeactivate);
			$ret.destroy = runOn(this, this.elementDestroy);
			return $ret;
		})());
	}
	shouldRenderShape(bounds: Rect): boolean {
		return bounds.width >= this.shapeModel.shapeFilterResolutionCached && bounds.height >= this.shapeModel.shapeFilterResolutionCached;
	}
	static toPointCollections(points: List$1<FlattenedShape>): List$1<PointCollection> {
		let ret: List$1<PointCollection> = new List$1<PointCollection>((<any>PointCollection).$type, 0);
		let pointColl: FlattenedShape;
		let count: number = points.count;
		for (let i = 0; i < count; i++) {
			pointColl = points._inner[i];
			let coll = new PointCollection(1, pointColl.shape);
			ret.add(coll);
		}
		return ret;
	}
	private _shapeModel: ShapeSeriesBase = null;
	protected get shapeModel(): ShapeSeriesBase {
		return this._shapeModel;
	}
	protected set shapeModel(value: ShapeSeriesBase) {
		this._shapeModel = value;
	}
	private _shapeHitRegions: List$1<ShapeHitRegion> = new List$1<ShapeHitRegion>((<any>ShapeHitRegion).$type, 0);
	addShape(i: number, item: any, bounds: Rect, points: List$1<FlattenedShape>): void {
		if (points != null && points.count > 0) {
			let rings: List$1<PointCollection> = ShapeSeriesViewBase.toPointCollections(points);
			bounds.intersect(this.viewport);
			if (!this.shouldRenderShape(bounds)) {
			} else {
				let shape: PathGeometry = this.getShapeGeometry(i, rings);
				if (shape != null) {
					let element: FrameworkElement = this.getShapeElement(this.shapeCount, item);
					for (let j = 0; j < points.count; j++) {
						let r: ShapeHitRegion = new ShapeHitRegion();
						r.bounds = points._inner[j].bounds;
						r.points = points._inner[j].shape;
						r.index = i;
						r.element = element;
						this._shapeHitRegions.add(r);
					}
					this.clearValues(element);
					this.applyData(element, shape);
					this.applyStyling1(element, item);
					this.shapeCount = this.shapeCount + 1;
				}
			}
		}
	}
	protected getShapeElement(i: number, item: any): FrameworkElement {
		let element = this.elements.item(this.shapeCount);
		if (element.dataContext != null) {
			(<DataContext>element.dataContext).item = item;
		}
		return element;
	}
	protected abstract applyData(element: FrameworkElement, data: PathGeometry): void;
	static applyStyling(view: ShapeSeriesViewBase, shape: Path, item: any): void {
		if (shape._fill == null) {
			shape._fill = view.model.actualBrush;
		}
		if (shape._stroke == null) {
			shape._stroke = view.model.actualOutline;
		}
		if (shape.style == null) {
			shape.strokeThickness = view.model.thickness;
		}
	}
	protected applyStyling1(shape: FrameworkElement, item: any): void {
		if (shape == null) {
			return;
		}
		let selected: boolean = false;
		if (this._styleSelector != null) {
			let selectedStyle = this._styleSelector.selectStyle(item, shape);
			if (selectedStyle != null) {
				selected = true;
			}
			shape.style = selectedStyle;
		}
		if (!selected) {
			shape.style = this._shapeStyle;
		}
		shape.style = this.shapeModel.onStyleShape(item, shape, shape.style);
	}
	protected clearValues(element: FrameworkElement): void {
	}
	private addSmallShape(bounds: Rect, brush: Brush): void {
		let left: number = <number>truncate(Math.floor(bounds.left));
		let right: number = <number>truncate(Math.ceil(bounds.right));
		let top: number = <number>truncate(Math.floor(bounds.top));
		let bottom: number = <number>truncate(Math.ceil(bounds.bottom));
		for (let x: number = left; x < right; x++) {
			for (let y: number = top; y < bottom; y++) {
				this.setPixel(x, y, brush);
			}
		}
	}
	private setPixel(x: number, y: number, brush: Brush): void {
	}
	protected abstract getShapeGeometry(i: number, points: List$1<PointCollection>): PathGeometry;
	initializeShapes(): void {
		this.shapeCount = 0;
	}
	finalizeShapes(): void {
		this.elements.count = this.shapeCount;
		this.makeDirty();
	}
	private _shapeCount: number = 0;
	private get shapeCount(): number {
		return this._shapeCount;
	}
	private set shapeCount(value: number) {
		this._shapeCount = value;
	}
	regenerateBitmap(width: number, height: number): void {
	}
	clearRendering(): void {
		this.elements.count = 0;
		this.makeDirty();
	}
	private _visibleElements: List$1<Path> = null;
	protected get visibleElements(): List$1<Path> {
		return this._visibleElements;
	}
	protected set visibleElements(value: List$1<Path>) {
		this._visibleElements = value;
	}
	elementCreate(): FrameworkElement {
		let s: ShapeSeriesBase = this.shapeModel;
		let path: Path = ((() => {
			let $ret = new Path();
			$ret.dataContext = ((() => {
				let $ret = new DataContext();
				$ret.series = s;
				return $ret;
			})());
			return $ret;
		})());
		this.visibleElements.add(path);
		return path;
	}
	elementActivate(path: FrameworkElement): void {
		path._visibility = Visibility.Visible;
	}
	elementDeactivate(path: FrameworkElement): void {
		(<DataContext>path.dataContext).item = null;
		path._visibility = Visibility.Collapsed;
	}
	elementDestroy(path: FrameworkElement): void {
		this.visibleElements.remove(<Path>path);
	}
	private _elements: Pool$1<FrameworkElement> = null;
	protected get elements(): Pool$1<FrameworkElement> {
		return this._elements;
	}
	protected set elements(value: Pool$1<FrameworkElement>) {
		this._elements = value;
	}
	getShapeGeometry1(i: number, points: List$1<PointCollection>, fill: boolean): PathGeometry {
		if (points == null) {
			return null;
		}
		let pathGeometry: PathGeometry = new PathGeometry();
		let ring: PointCollection;
		let count = points.count;
		for (let j = 0; j < count; j++) {
			ring = points._inner[j];
			if (ring.count < 1) {
				continue;
			}
			let polylineSegment: PolyLineSegment = new PolyLineSegment();
			polylineSegment._points = ring;
			let pathFigure: PathFigure = new PathFigure();
			pathFigure._isFilled = fill;
			pathFigure._isClosed = fill;
			pathFigure._startPoint = ring._inner[0];
			pathFigure._segments.add(polylineSegment);
			pathGeometry.figures.add(pathFigure);
		}
		return pathGeometry;
	}
	protected setupItemAppearanceOverride(item: any, index: number): void {
		super.setupItemAppearanceOverride(item, index);
		let path = <Path>item;
		path._fill = this.model.actualBrush;
		path._stroke = this.model.actualOutline;
		path.strokeThickness = this.model.thickness;
		if (path.style != null) {
			this.context.applyStyle(path, path.style);
		}
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
		super.setupItemHitAppearanceOverride(item, index);
		let path = <Path>item;
		let hitBrush = this.getHitBrush1(index);
		path._fill = hitBrush;
		path._stroke = hitBrush;
		path.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		for (let i: number = 0; i < this.visibleElements.count; i++) {
			let path = this.visibleElements._inner[i];
			if (path._visibility != Visibility.Collapsed) {
				this.setupItemAppearance(path, i, isHitContext);
				context.renderPath(path);
			}
		}
	}
	private _styleSelector: StyleSelector = null;
	private _shapeStyle: Style = null;
	get defaultShapeStyle(): Style {
		return this._shapeStyle;
	}
	shapeStyleSelectorChanged(styleSelector: StyleSelector): void {
		this._styleSelector = styleSelector;
	}
	shapeStyleChanged(shapeStyle: Style): void {
		this._shapeStyle = shapeStyle;
	}
	getHitShape(position: Point, isFinger: boolean): FrameworkElement {
		return this.getHitShape1(position, isFinger, false);
	}
	getHitShape1(position: Point, isFinger: boolean, polyline: boolean): FrameworkElement {
		if (this._shapeHitRegions.count == 0) {
			return null;
		}
		let xVal = position.x;
		let yVal = position.y;
		let hitRegionsCount = this._shapeHitRegions.count;
		let regions = this._shapeHitRegions;
		let currRegion: ShapeHitRegion = null;
		for (let i = 0; i < hitRegionsCount; i++) {
			currRegion = regions._inner[i];
			if (currRegion.points == null || currRegion.points.count == 0) {
				continue;
			}
			if (xVal >= currRegion.bounds.left && xVal <= currRegion.bounds.right && yVal >= currRegion.bounds.top && yVal <= currRegion.bounds.bottom) {
				if (polyline) {
					let distance = this.shapeModel.thickness / 2 + this.shapeModel.getHitTestAllowance(isFinger);
					if (GeometryUtil.isPointNearPolyline(position, currRegion.points._inner[0], currRegion.points, distance)) {
						return currRegion.element;
					}
				} else {
					if (PolygonUtil.polygonContainsPoint(currRegion.points, position)) {
						return currRegion.element;
					}
				}
			}
		}
		return null;
	}
	private _boundsLeft: number[] = null;
	private _boundsTop: number[] = null;
	private _boundsRight: number[] = null;
	private _boundsBottom: number[] = null;
	provideBounds(boundsLeft: number[], boundsTop: number[], boundsRight: number[], boundsBottom: number[]): void {
		this._boundsLeft = boundsLeft;
		this._boundsTop = boundsTop;
		this._boundsRight = boundsRight;
		this._boundsBottom = boundsBottom;
		this._shapeHitRegions.clear();
	}
	updateClipRect(): void {
		let r: Rect = this.viewport;
		let p: Path = ((() => {
			let $ret = new Path();
			$ret.style = this._shapeStyle;
			return $ret;
		})());
		p.strokeThickness = 1;
		if (this.context != null) {
			this.context.applyStyle(p, p.style);
		}
		this.shapeModel.clipRect = RectUtil.inflate(r, p.strokeThickness);
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		if (this.elements.active == null) {
			return;
		}
		for (let i = 0; i < this.elements.active.count; i++) {
			let shape = typeCast<Path>((<any>Path).$type, this.elements.active._inner[i]);
			if (shape._visibility != Visibility.Collapsed) {
				this.model.seriesVisualDataManager.exportPathData(svd, shape, "shape" + i, <string[]>[ "Main " ]);
			}
		}
	}
}


