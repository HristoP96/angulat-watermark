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
import { Series } from "./Series";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { RadialBase } from "./RadialBase";
import { Pool$1 } from "igniteui-core/Pool$1";
import { Path } from "igniteui-core/Path";
import { RadialFrame } from "./RadialFrame";
import { RadialBaseView } from "./RadialBaseView";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { PolarAxisRenderingParameters } from "./PolarAxisRenderingParameters";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { NumericAxisBase } from "./NumericAxisBase";
import { ViewportUtils } from "./ViewportUtils";
import { RadialAxes } from "./RadialAxes";
import { PathSegment } from "igniteui-core/PathSegment";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { AnchoredRadialSeriesView } from "./AnchoredRadialSeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Rectangle } from "igniteui-core/Rectangle";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";
import { Visibility } from "igniteui-core/Visibility";

/**
 * @hidden 
 */
export class RadialColumnSeries extends AnchoredRadialSeries {
	static $t: Type = markType(RadialColumnSeries, 'RadialColumnSeries', (<any>AnchoredRadialSeries).$type);
	protected createView(): SeriesView {
		return new RadialColumnSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.radialColumnView = <RadialColumnSeriesView>view;
	}
	private _radialColumnView: RadialColumnSeriesView;
	get radialColumnView(): RadialColumnSeriesView {
		return this._radialColumnView;
	}
	set radialColumnView(value: RadialColumnSeriesView) {
		this._radialColumnView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>RadialColumnSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
		this.renderSeries(false);
	}
	get radiusX(): number {
		return <number>this.getValue(RadialColumnSeries.radiusXProperty);
	}
	set radiusX(value: number) {
		this.setValue(RadialColumnSeries.radiusXProperty, value);
	}
	static readonly radiusXPropertyName: string = "RadiusX";
	static readonly radiusXProperty: DependencyProperty = DependencyProperty.register(RadialColumnSeries.radiusXPropertyName, Number_$type, (<any>RadialColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialColumnSeries>sender).raisePropertyChanged(RadialColumnSeries.radiusXPropertyName, e.oldValue, e.newValue)));
	get radiusY(): number {
		return <number>this.getValue(RadialColumnSeries.radiusYProperty);
	}
	set radiusY(value: number) {
		this.setValue(RadialColumnSeries.radiusYProperty, value);
	}
	static readonly radiusYPropertyName: string = "RadiusY";
	static readonly radiusYProperty: DependencyProperty = DependencyProperty.register(RadialColumnSeries.radiusYPropertyName, Number_$type, (<any>RadialColumnSeries).$type, new PropertyMetadata(2, 2, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialColumnSeries>sender).raisePropertyChanged(RadialColumnSeries.radiusYPropertyName, e.oldValue, e.newValue)));
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return axis != null && axis == this.angleAxis ? CategoryMode.Mode2 : CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let radialColumnView = <RadialColumnSeriesView>view;
		if (wipeClean) {
			radialColumnView.columns.count = 0;
		}
	}
	getItemSpan(): number {
		return this.angleAxis.getGroupSize(this.view.windowRect, this.view.viewport, this.getEffectiveViewport1(this.view));
	}
	renderFrame(frame: RadialFrame, view: RadialBaseView): void {
		super.renderFrame(frame, view);
		let buckets: List$1<number[]> = frame.buckets;
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let contentViewport: Rect = this.getContentViewport(view);
		let p: PolarAxisRenderingParameters = <PolarAxisRenderingParameters>this.valueAxis.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport);
		let columnView = <RadialColumnSeriesView>view;
		let rscale: NumericRadiusAxis = this.valueAxis;
		let refValue: number = Math.max(0, 0.5 * rscale.actualInnerRadiusExtentScale);
		refValue = Math.max(refValue, p.minLength * 0.9);
		let zero: number = ViewportUtils.transformXToViewportLength(refValue, windowRect, viewportRect);
		let groupWidthRadians: number = this.angleAxis.getGroupSize(windowRect, viewportRect, effectiveViewportRect);
		let widthAtRadius: number = Math.max(0.1 * this.valueAxis.actualRadiusExtentScale, refValue);
		let x0: number = this._axes.getXValue(0, widthAtRadius, windowRect, viewportRect);
		let y0: number = this._axes.getYValue(0, widthAtRadius, windowRect, viewportRect);
		let x1: number = this._axes.getXValue(groupWidthRadians, widthAtRadius, windowRect, viewportRect);
		let y1: number = this._axes.getYValue(groupWidthRadians, widthAtRadius, windowRect, viewportRect);
		let groupWidth: number = Math.sqrt((x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1));
		let center: Point = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(0.5, windowRect, viewportRect), y: ViewportUtils.transformYToViewport(0.5, windowRect, viewportRect) };
		for (let i: number = 0; i < buckets.count; ++i) {
			let length: number = Math.min(frame.buckets._inner[i][2], p.maxLength * 1.1);
			let x: number = this._axes.getXValue(frame.buckets._inner[i][0], length, windowRect, viewportRect);
			let y: number = this._axes.getYValue(frame.buckets._inner[i][0], length, windowRect, viewportRect);
			let radius: number = Math.sqrt((x - center.x) * (x - center.x) + (y - center.y) * (y - center.y));
			let top: number = radius;
			let bottom: number = zero;
			let angle: number = frame.buckets._inner[i][0] - (Math.PI / 2);
			let column: Path = columnView.columns.item(i);
			let leftX: number = 0 - (groupWidth / 2);
			let rightX: number = (groupWidth / 2);
			let topY: number = Math.max(bottom, top);
			let bottomY: number = Math.min(bottom, top);
			let ca: number = Math.cos(angle);
			let sa: number = Math.sin(angle);
			let p1: Point = <Point>{ $type: Point_$type, x: center.x + (leftX * ca - topY * sa), y: center.y + (leftX * sa + topY * ca) };
			let p2: Point = <Point>{ $type: Point_$type, x: center.x + (rightX * ca - topY * sa), y: center.y + (rightX * sa + topY * ca) };
			let p3: Point = <Point>{ $type: Point_$type, x: center.x + (rightX * ca - bottomY * sa), y: center.y + (rightX * sa + bottomY * ca) };
			let p4: Point = <Point>{ $type: Point_$type, x: center.x + (leftX * ca - bottomY * sa), y: center.y + (leftX * sa + bottomY * ca) };
			let pg: PathGeometry = new PathGeometry();
			let pf: PathFigure = new PathFigure();
			pf._startPoint = p1;
			pf._isClosed = true;
			let pl: PolyLineSegment = new PolyLineSegment();
			pl._points.add(p2);
			pl._points.add(p3);
			pl._points.add(p4);
			pf._segments.add(pl);
			pg.figures.add(pf);
			column.data = pg;
		}
		columnView.columns.count = buckets.count;
		this.radialColumnView.finalizeColumns();
	}
}

/**
 * @hidden 
 */
export class RadialColumnSeriesView extends AnchoredRadialSeriesView {
	static $t: Type = markType(RadialColumnSeriesView, 'RadialColumnSeriesView', (<any>AnchoredRadialSeriesView).$type);
	private _radialColumnModel: RadialColumnSeries = null;
	protected get radialColumnModel(): RadialColumnSeries {
		return this._radialColumnModel;
	}
	protected set radialColumnModel(value: RadialColumnSeries) {
		this._radialColumnModel = value;
	}
	constructor(model: RadialColumnSeries) {
		super(model);
		this.radialColumnModel = model;
		this.columns = ((() => {
			let $ret = new Pool$1<Path>((<any>Path).$type);
			$ret.create = runOn(this, this.columnCreate);
			$ret.activate = runOn(this, this.columnActivate);
			$ret.disactivate = runOn(this, this.columnDisactivate);
			$ret.destroy = runOn(this, this.columnDestroy);
			return $ret;
		})());
	}
	columns: Pool$1<Path> = null;
	onInit(): void {
		super.onInit();
		this.visibleColumns = new List$1<Path>((<any>Path).$type, 0);
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private _visibleColumns: List$1<Path> = null;
	protected get visibleColumns(): List$1<Path> {
		return this._visibleColumns;
	}
	protected set visibleColumns(value: List$1<Path>) {
		this._visibleColumns = value;
	}
	columnCreate(): Path {
		let column: Path = new Path();
		this.visibleColumns.add(column);
		column._visibility = Visibility.Collapsed;
		return column;
	}
	columnActivate(column: Path): void {
		column._visibility = Visibility.Visible;
	}
	columnDisactivate(column: Path): void {
		column._visibility = Visibility.Collapsed;
	}
	columnDestroy(column: Path): void {
		this.visibleColumns.remove(column);
	}
	positionRectangle(column: Rectangle, xpos: number, ypos: number, angle: number, centerX: number, centerY: number): void {
		this.makeDirty();
	}
	protected setupItemAppearanceOverride(item: any, index: number): void {
		super.setupItemAppearanceOverride(item, index);
		let column = <Path>item;
		column._fill = this.model.actualBrush;
		column._stroke = this.model.actualOutline;
		column.strokeThickness = this.model.thickness;
		column.strokeDashArray = this.model.dashArray;
		column.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupItemHitAppearanceOverride(item: any, index: number): void {
		super.setupItemHitAppearanceOverride(item, index);
		let column = <Path>item;
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
				context.renderPath(column);
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		let i: number = 0;
		for (let column of fromEnum<Path>(this.columns.active)) {
			this.model.seriesVisualDataManager.exportPathData(svd, column, "column" + i, <string[]>[ "Main", "Fill" ]);
			i++;
		}
	}
	finalizeColumns(): void {
		this.makeDirty();
	}
}


