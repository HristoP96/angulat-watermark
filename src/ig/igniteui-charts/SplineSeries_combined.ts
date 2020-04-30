/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { SplineSeriesBase } from "./SplineSeriesBase";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { SeriesView } from "./SeriesView";
import { Type, Base, ICollection$1, ICollection$1_$type, typeCast, runOn, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { CategoryFrame } from "./CategoryFrame";
import { CategorySeriesView } from "./CategorySeriesView";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Path } from "igniteui-core/Path";
import { ScalerParams } from "./ScalerParams";
import { Series } from "./Series";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { CategorySeries } from "./CategorySeries";
import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { Axis } from "./Axis";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { SplineSeriesBaseView } from "./SplineSeriesBaseView";
import { Clipper } from "igniteui-core/Clipper";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class SplineSeries extends SplineSeriesBase {
	static $t: Type = markType(SplineSeries, 'SplineSeries', (<any>SplineSeriesBase).$type);
	protected createView(): SeriesView {
		return new SplineSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.splineView = <SplineSeriesView>view;
	}
	private _splineView: SplineSeriesView;
	get splineView(): SplineSeriesView {
		return this._splineView;
	}
	set splineView(value: SplineSeriesView) {
		this._splineView = value;
	}
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
		this.defaultStyleKey = (<any>SplineSeries).$type;
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
		let splineView = <SplineSeriesView>view;
		splineView.clearSplineLines();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let categoryView = view;
		let bucketSize: number = categoryView.bucketCalculator.bucketSize;
		let splineView: SplineSeriesView = typeCast<SplineSeriesView>((<any>SplineSeriesView).$type, view);
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
		let line0 = splineView.line0;
		let line1 = splineView.line1;
		let fillArea = splineView.fillArea;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(fillArea, false, true, false, false);
		fillArea._opacity = 0.75 * this.renderManager.actualRenderOpacity;
		if (view.checkFrameDirty(frame)) {
			splineView.rasterizeSpline(buckets.count, buckets, true, UnknownValuePlotting.DontPlot, this.getLineClipper(buckets, buckets.count - 1, view.viewport, view.windowRect), bucketSize, this.resolution);
			view.updateFrameVersion(frame);
		}
	}
}

/**
 * @hidden 
 */
export class SplineSeriesView extends SplineSeriesBaseView {
	static $t: Type = markType(SplineSeriesView, 'SplineSeriesView', (<any>SplineSeriesBaseView).$type);
	private _splineModel: SplineSeries = null;
	protected get splineModel(): SplineSeries {
		return this._splineModel;
	}
	protected set splineModel(value: SplineSeries) {
		this._splineModel = value;
	}
	constructor(model: SplineSeries) {
		super(model);
		this.splineModel = model;
	}
	private polyline0: Path = new Path();
	private polygon01: Path = new Path();
	private polyline1: Path = new Path();
	get line0(): Path {
		return this.polyline0;
	}
	get line1(): Path {
		return this.polyline1;
	}
	get fillArea(): Path {
		return this.polygon01;
	}
	clearSplineLines(): void {
		this.polygon01.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
		this.makeDirty();
	}
	rasterizeSpline(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper, bucketSize: number, resolution: number): void {
		this.splineModel.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.categoryModel.fetchXAxis()) !== null ? true : false;
		this.splineModel.lineRasterizer.rasterizePolylinePaths(this.polyline0, this.polygon01, this.polyline1, count, buckets, useX0AsX1, unknownValuePlotting, clipper, bucketSize, resolution);
		this.makeDirty();
	}
	private _hitPolyline1: Path = new Path();
	private _hitPolyline0: Path = new Path();
	private _hitPolygon01: Path = new Path();
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		this._hitPolyline0.data = this.polyline0.data;
		this._hitPolyline1.data = this.polyline1.data;
		this._hitPolygon01.data = this.polygon01.data;
		let hitBrush: Brush = this.getHitBrush();
		this._hitPolyline0._stroke = hitBrush;
		this._hitPolyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPolyline1._stroke = hitBrush;
		this._hitPolyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._hitPolygon01._fill = hitBrush;
		this._hitPolygon01._opacity = 1;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			if (isHitContext) {
				context.renderPath(this._hitPolygon01);
				context.renderPath(this._hitPolyline0);
				context.renderPath(this._hitPolyline1);
			} else {
				context.renderPath(this.polygon01);
				context.renderPath(this.polyline0);
				context.renderPath(this.polyline1);
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline0, "lowerShape", <string[]>[ "Lower", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline1, "upperShape", <string[]>[ "Upper" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon01, "translucentShape", <string[]>[ "Translucent" ]);
	}
}


