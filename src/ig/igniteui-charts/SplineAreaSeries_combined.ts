/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SplineSeriesBase } from "./SplineSeriesBase";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { SeriesView } from "./SeriesView";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { Type, Point, Base, ICollection$1, ICollection$1_$type, typeCast, runOn, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Series } from "./Series";
import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { MarkerSeries } from "./MarkerSeries";
import { CategoryFrame } from "./CategoryFrame";
import { CategorySeriesView } from "./CategorySeriesView";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Path } from "igniteui-core/Path";
import { NumericYAxis } from "./NumericYAxis";
import { ScalerParams } from "./ScalerParams";
import { CategorySeries } from "./CategorySeries";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { Axis } from "./Axis";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { PointCollection } from "igniteui-core/PointCollection";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { SplineSeriesBaseView } from "./SplineSeriesBaseView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Clipper } from "igniteui-core/Clipper";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class SplineAreaSeries extends SplineSeriesBase {
	static $t: Type = markType(SplineAreaSeries, 'SplineAreaSeries', (<any>SplineSeriesBase).$type);
	protected createView(): SeriesView {
		return new SplineAreaSeriesView(this);
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.FromZero;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.splineAreaView = <SplineAreaSeriesView>view;
	}
	private _splineAreaView: SplineAreaSeriesView;
	get splineAreaView(): SplineAreaSeriesView {
		return this._splineAreaView;
	}
	set splineAreaView(value: SplineAreaSeriesView) {
		this._splineAreaView = value;
	}
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
		this.defaultStyleKey = (<any>SplineAreaSeries).$type;
	}
	private _lineRasterizer: CategoryLineRasterizer = null;
	get lineRasterizer(): CategoryLineRasterizer {
		return this._lineRasterizer;
	}
	set lineRasterizer(value: CategoryLineRasterizer) {
		this._lineRasterizer = value;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let splineAreaView = <SplineAreaSeriesView>view;
		splineAreaView.clearSplineArea();
	}
	testHit(position: Point, isFinger: boolean): boolean {
		let snapPosition = this.getSeriesValuePosition(this.toWorldPosition(position), true, false);
		if (this.testAreaOver(position, snapPosition, isFinger)) {
			return true;
		}
		if (this.testHighLowStrokeOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let bucketSize: number = this.categoryView.bucketCalculator.bucketSize;
		let splineAreaView: SplineAreaSeriesView = typeCast<SplineAreaSeriesView>((<any>SplineAreaSeriesView).$type, view);
		let buckets = frame.buckets;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.cachedXAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		if (areStylesOverriden) {
			let xParams = new ScalerParams(0, view.windowRect, view.viewport, this.cachedXAxis.isInverted, effectiveViewportRect);
			this.performCategoryStyleOverride(buckets, -1, this.valueColumn.count, this.cachedXAxis, xParams, view.isThumbnailView);
		}
		let line0 = splineAreaView.line0;
		let line1 = splineAreaView.line1;
		let polygon0 = splineAreaView.polygon0;
		let polygon1 = splineAreaView.polygon1;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(polygon0, false, true, false, false);
		this.renderManager.setCategoryShapeAppearance(polygon1, false, true, false, false);
		polygon0._opacity = this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
		polygon1._opacity = 0.5 * this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
		if (view.checkFrameDirty(frame)) {
			splineAreaView.rasterizeSplineArea1(frame.buckets.count, buckets, true, bucketSize, this.resolution, (p0: PointCollection, l0: PointCollection, p1: PointCollection, l1: PointCollection, f: boolean) => this.terminatePolygon(p0, frame.buckets.count, view), UnknownValuePlotting.DontPlot, frame.buckets.count == 1 ? null : this.getLineClipper1(buckets, buckets.count - 1, view.viewport, view.windowRect, true));
			view.updateFrameVersion(frame);
		}
		let yAxis = <NumericYAxis>this.fetchYAxis();
	}
}

/**
 * @hidden 
 */
export class SplineAreaSeriesView extends SplineSeriesBaseView {
	static $t: Type = markType(SplineAreaSeriesView, 'SplineAreaSeriesView', (<any>SplineSeriesBaseView).$type);
	private _splineAreaModel: SplineAreaSeries = null;
	protected get splineAreaModel(): SplineAreaSeries {
		return this._splineAreaModel;
	}
	protected set splineAreaModel(value: SplineAreaSeries) {
		this._splineAreaModel = value;
	}
	constructor(model: SplineAreaSeries) {
		super(model);
		this.splineAreaModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private _polygon0: Path = new Path();
	private polyline0: Path = new Path();
	private _polygon1: Path = new Path();
	private polyline1: Path = new Path();
	get line0(): Path {
		return this.polyline0;
	}
	get line1(): Path {
		return this.polyline1;
	}
	get polygon0(): Path {
		return this._polygon0;
	}
	get polygon1(): Path {
		return this._polygon1;
	}
	clearSplineArea(): void {
		this._polygon0.data = null;
		this._polygon1.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
		this.makeDirty();
	}
	rasterizeSplineArea(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting): void {
		this.rasterizeSplineArea1(count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting, null);
	}
	rasterizeSplineArea1(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper): void {
		this.splineAreaModel.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.categoryModel.fetchXAxis()) !== null ? true : false;
		this.splineAreaModel.lineRasterizer.rasterizePolygonPaths1(this._polygon0, this.polyline0, this._polygon1, this.polyline1, count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting, clipper);
		this.makeDirty();
	}
	private _hitPolygon0: Path = new Path();
	private _hitPolyline0: Path = new Path();
	private _hitPolygon1: Path = new Path();
	private _hitPolyline1: Path = new Path();
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		this._hitPolygon0.data = this._polygon0.data;
		this._hitPolyline0.data = this.polyline0.data;
		this._hitPolygon1.data = this._polygon1.data;
		this._hitPolyline1.data = this.polyline1.data;
		let hitBrush: Brush = this.getHitBrush();
		this._hitPolygon0._fill = hitBrush;
		this._hitPolygon0._opacity = 1;
		this._hitPolygon1._fill = hitBrush;
		this._hitPolygon1._opacity = 1;
		this._hitPolyline0._stroke = hitBrush;
		this._hitPolyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPolyline1._stroke = hitBrush;
		this._hitPolyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (isHitContext) {
			context.renderPath(this._hitPolygon0);
			context.renderPath(this._hitPolygon1);
			context.renderPath(this._hitPolyline0);
			context.renderPath(this._hitPolyline1);
		} else {
			context.renderPath(this._polygon0);
			context.renderPath(this._polygon1);
			context.renderPath(this.polyline0);
			context.renderPath(this.polyline1);
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline0, "lowerShape", <string[]>[ "Lower" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline1, "upperShape", <string[]>[ "Upper", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this._polygon1, "translucentShape", <string[]>[ "Translucent" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this._polygon0, "fillShape", <string[]>[ "Fill" ]);
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 5;
		this.model.shadowOffsetX = 1;
		this.model.shadowOffsetY = -3;
	}
}


