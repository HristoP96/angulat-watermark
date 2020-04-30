/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnchoredRadialSeries } from "./AnchoredRadialSeries";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { Type, Point, Base, Number_$type, Point_$type, markType, PointUtil, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, runOn, fromEnum } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { RadialBase } from "./RadialBase";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Path } from "igniteui-core/Path";
import { Series } from "./Series";
import { RadialFrame } from "./RadialFrame";
import { RadialBaseView } from "./RadialBaseView";
import { Rect } from "igniteui-core/Rect";
import { PolarAxisRenderingParameters } from "./PolarAxisRenderingParameters";
import { List$1 } from "igniteui-core/List$1";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { NumericAxisBase } from "./NumericAxisBase";
import { ViewportUtils } from "./ViewportUtils";
import { SliceCoords } from "./SliceCoords";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { PathSegment } from "igniteui-core/PathSegment";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { Size } from "igniteui-core/Size";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { SweepDirection } from "igniteui-core/SweepDirection";
import { AnchoredRadialSeriesView } from "./AnchoredRadialSeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { DataContext } from "igniteui-core/DataContext";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class RadialPieSeries extends AnchoredRadialSeries {
	static $t: Type = markType(RadialPieSeries, 'RadialPieSeries', (<any>AnchoredRadialSeries).$type);
	protected createView(): SeriesView {
		return new RadialPieSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.radialPieView = <RadialPieSeriesView>view;
	}
	private _radialPieView: RadialPieSeriesView;
	get radialPieView(): RadialPieSeriesView {
		return this._radialPieView;
	}
	set radialPieView(value: RadialPieSeriesView) {
		this._radialPieView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>RadialPieSeries).$type;
	}
	get radiusX(): number {
		return <number>this.getValue(RadialPieSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(RadialPieSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(RadialPieSeries.radiusXPropertyName, Number_$type, (<any>RadialPieSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialPieSeries>sender).raisePropertyChanged(RadialPieSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(RadialPieSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(RadialPieSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(RadialPieSeries.radiusYPropertyName, Number_$type, (<any>RadialPieSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialPieSeries>sender).raisePropertyChanged(RadialPieSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return axis != null && axis == this.angleAxis ? CategoryMode.Mode2 : CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let radialPieView = <RadialPieSeriesView>view;
		if (wipeClean && radialPieView.slices != null) {
			radialPieView.slices.count = 0;
		}
	}
	getItemSpan(): number {
		return this.angleAxis.getGroupSize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	renderFrame(frame: RadialFrame, view: RadialBaseView): void {
		super.renderFrame(frame, view);
		let pieView = <RadialPieSeriesView>view;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let contentViewport: Rect = this.getContentViewport(view);
		let p: PolarAxisRenderingParameters = <PolarAxisRenderingParameters>this.valueAxis.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport);
		let buckets: List$1<number[]> = frame.buckets;
		let rscale: NumericRadiusAxis = this.valueAxis;
		let refValue: number = Math.max(0, 0.5 * rscale.actualInnerRadiusExtentScale);
		let zero: number = refValue;
		zero = Math.max(zero, p.minLength);
		let groupWidthRadians: number = this.angleAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		let radiusX: number = this.radiusX;
		let radiusY: number = this.radiusY;
		let doRounded: boolean = (radiusX > 0 && radiusY > 0);
		let radius: number = 0;
		for (let i: number = 0; i < buckets.count; ++i) {
			let slice: Path = pieView.slices.item(i);
			let angleRadians: number = buckets._inner[i][0];
			let length: number = Math.min(buckets._inner[i][2], p.maxLength);
			let pg: PathGeometry = null;
			if (doRounded) {
				pg = this.drawRoundedSlice(windowRect, viewportRect, angleRadians - (groupWidthRadians * 0.5), angleRadians + (groupWidthRadians * 0.5), zero, length, center, radiusX, radiusY);
			} else {
				pg = this.drawSlice(windowRect, viewportRect, angleRadians - (groupWidthRadians * 0.5), angleRadians + (groupWidthRadians * 0.5), zero, length, center);
			}
			slice.data = pg;
			let sliceRadius = buckets._inner[i][2];
			if (sliceRadius > radius) {
				radius = sliceRadius;
			}
		}
		pieView.radius = ViewportUtils.transformXToViewportLength(radius, windowRect, viewportRect);
		pieView.center = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(center.x, windowRect, viewportRect), y: ViewportUtils.transformYToViewport(center.y, windowRect, viewportRect) };
		pieView.slices.count = buckets.count;
		pieView.slicesUpdated();
	}
	private drawSlice(windowRect: Rect, viewportRect: Rect, startAngle: number, endAngle: number, zero: number, radius: number, center: Point): PathGeometry {
		let sc: SliceCoords = SliceCoords.getSliceCoords(windowRect, viewportRect, startAngle, endAngle, zero, radius, center);
		let pf: PathFigure = new PathFigure();
		pf._startPoint = sc.a;
		pf._isClosed = true;
		pf._segments.add(((() => {
			let $ret = new LineSegment(1);
			$ret.point = sc.b;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.c;
			$ret.size = sc.outerSize;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.isLargeArc = sc.isLargeArc;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new LineSegment(1);
			$ret.point = sc.d;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.a;
			$ret.size = sc.innerSize;
			$ret.sweepDirection = SweepDirection.Counterclockwise;
			$ret.isLargeArc = sc.isLargeArc;
			return $ret;
		})()));
		let pg: PathGeometry = new PathGeometry();
		pg.figures.add(pf);
		return pg;
	}
	private drawRoundedSlice(windowRect: Rect, viewportRect: Rect, startAngle: number, endAngle: number, zero: number, radius: number, center: Point, radiusX: number, radiusY: number): PathGeometry {
		let sc: SliceCoords = SliceCoords.getRoundedSliceCoords(windowRect, viewportRect, startAngle, endAngle, zero, radius, center, radiusX, radiusY);
		if (sc == null) {
			return this.drawSlice(windowRect, viewportRect, startAngle, endAngle, zero, radius, center);
		}
		let pf: PathFigure = new PathFigure();
		pf._startPoint = sc.a;
		pf._isClosed = true;
		let rotationAngle: number = ((startAngle + ((endAngle - startAngle) * 0.5)) * 180 / Math.PI) + 90;
		let lowerCornerSize: Size = new Size(1, sc.cornerSize.width * (zero / radius), sc.cornerSize.height * (zero / radius));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.a2;
			$ret.size = lowerCornerSize;
			$ret.rotationAngle = rotationAngle;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.isLargeArc = false;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new LineSegment(1);
			$ret.point = sc.b;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.b2;
			$ret.size = sc.cornerSize;
			$ret.rotationAngle = rotationAngle;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.isLargeArc = false;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.c;
			$ret.size = sc.outerSize;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.isLargeArc = sc.isLargeArc;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.c2;
			$ret.size = sc.cornerSize;
			$ret.rotationAngle = rotationAngle;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.isLargeArc = false;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new LineSegment(1);
			$ret.point = sc.d;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.d2;
			$ret.size = lowerCornerSize;
			$ret.rotationAngle = rotationAngle;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.isLargeArc = false;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = sc.a;
			$ret.size = sc.innerSize;
			$ret.sweepDirection = SweepDirection.Counterclockwise;
			$ret.isLargeArc = sc.isLargeArc;
			return $ret;
		})()));
		let pg: PathGeometry = new PathGeometry();
		pg.figures.add(pf);
		return pg;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case RadialPieSeries.radiusXPropertyName:

			case RadialPieSeries.radiusYPropertyName:
			this.renderSeries(false);
			break;

		}

	}
}

/**
 * @hidden 
 */
export class RadialPieSeriesView extends AnchoredRadialSeriesView {
	static $t: Type = markType(RadialPieSeriesView, 'RadialPieSeriesView', (<any>AnchoredRadialSeriesView).$type);
	private _radialPieModel: RadialPieSeries = null;
	protected get radialPieModel(): RadialPieSeries {
		return this._radialPieModel;
	}
	protected set radialPieModel(value: RadialPieSeries) {
		this._radialPieModel = value;
	}
	constructor(model: RadialPieSeries) {
		super(model);
		this.radialPieModel = model;
		this.slices = ((() => {
			let $ret = new Pool$1<Path>((<any>Path).$type);
			$ret.create = runOn(this, this.pieCreate);
			$ret.activate = runOn(this, this.pieActivate);
			$ret.disactivate = runOn(this, this.pieDisactivate);
			$ret.destroy = runOn(this, this.pieDestroy);
			return $ret;
		})());
	}
	slices: Pool$1<Path> = null;
	onInit(): void {
		super.onInit();
		this.visibleSlices = new List$1<Path>((<any>Path).$type, 0);
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private _visibleSlices: List$1<Path> = null;
	protected get visibleSlices(): List$1<Path> {
		return this._visibleSlices;
	}
	protected set visibleSlices(value: List$1<Path>) {
		this._visibleSlices = value;
	}
	pieCreate(): Path {
		let slice: Path = ((() => {
			let $ret = new Path();
			$ret.dataContext = ((() => {
				let $ret = new DataContext();
				$ret.series = this.model;
				return $ret;
			})());
			return $ret;
		})());
		this.visibleSlices.add(slice);
		slice._visibility = Visibility.Collapsed;
		return slice;
	}
	pieActivate(slice: Path): void {
		slice._visibility = Visibility.Visible;
	}
	pieDisactivate(slice: Path): void {
		slice._visibility = Visibility.Collapsed;
	}
	pieDestroy(slice: Path): void {
		this.visibleSlices.remove(slice);
	}
	protected setupItemAppearanceOverride(item: any, index: number): void {
		super.setupItemAppearanceOverride(item, index);
		let slice = <Path>item;
		slice._stroke = this.model.actualOutline;
		slice.strokeThickness = this.model.thickness;
		slice._fill = this.model.actualBrush;
		slice.strokeDashArray = this.model.dashArray;
		slice.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
		super.setupItemHitAppearanceOverride(item, index);
		let slice = <Path>item;
		let hitBrush = this.getHitBrush1(index);
		slice._stroke = hitBrush;
		slice.strokeThickness = this.model.thickness;
		slice._fill = hitBrush;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			for (let i: number = 0; i < this.visibleSlices.count; i++) {
				let slice = this.visibleSlices._inner[i];
				this.setupItemAppearance(slice, i, isHitContext);
				context.renderPath(slice);
			}
		}
	}
	slicesUpdated(): void {
		this.makeDirty();
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let i: number = 0;
		for (let slice of fromEnum<Path>(this.slices.active)) {
			this.model.seriesVisualDataManager.exportPathData(svd, slice, "slice" + i, <string[]>[ "Main", "Fill" ]);
			i++;
		}
	}
}


