/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { IIsCategoryBased, IIsCategoryBased_$type } from "./IIsCategoryBased";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { CategoryMode } from "./CategoryMode";
import { CategorySeries } from "./CategorySeries";
import { SeriesView } from "./SeriesView";
import { Series } from "./Series";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Type, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Base, typeCast, Array_$type, runOn, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { CategorySeriesView } from "./CategorySeriesView";
import { Rect } from "igniteui-core/Rect";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Path } from "igniteui-core/Path";
import { NumericYAxis } from "./NumericYAxis";
import { ScalerParams } from "./ScalerParams";
import { Axis } from "./Axis";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { PointCollection } from "igniteui-core/PointCollection";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { intDivide, isNaN_ } from "igniteui-core/number";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Clipper } from "igniteui-core/Clipper";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class StepAreaSeries extends HorizontalAnchoredCategorySeries implements IIsCategoryBased {
	static $t: Type = markType(StepAreaSeries, 'StepAreaSeries', (<any>HorizontalAnchoredCategorySeries).$type, [IIsCategoryBased_$type]);
	protected createView(): SeriesView {
		return new StepAreaSeriesView(this);
	}
	getHostReferenceValue(): number {
		return this.getReferenceValue();
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.stepAreaView = <StepAreaSeriesView>view;
	}
	private _stepAreaView: StepAreaSeriesView;
	get stepAreaView(): StepAreaSeriesView {
		return this._stepAreaView;
	}
	set stepAreaView(value: StepAreaSeriesView) {
		this._stepAreaView = value;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
		this.defaultStyleKey = (<any>StepAreaSeries).$type;
	}
	private _lineRasterizer: CategoryLineRasterizer = null;
	get lineRasterizer(): CategoryLineRasterizer {
		return this._lineRasterizer;
	}
	set lineRasterizer(value: CategoryLineRasterizer) {
		this._lineRasterizer = value;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return typeCast<ISortingAxis>(ISortingAxis_$type, axis) !== null ? CategoryMode.Mode0 : CategoryMode.Mode1;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let stepAreaView = <StepAreaSeriesView>view;
		stepAreaView.clearStepArea();
	}
	private getXValue(i: number, fromEnd: boolean, frame: CategoryFrame, width: number, isSorting: boolean): number {
		if (fromEnd) {
			if (isSorting) {
				if ((i & 1) == 0 || ((intDivide(i, 2)) + 1) >= frame.buckets.count) {
					return frame.buckets._inner[(intDivide(i, 2))][0];
				}
				return frame.buckets._inner[(intDivide(i, 2)) + 1][0];
			}
			return frame.buckets._inner[(intDivide(i, 2))][0] + ((i & 1) == 1 ? -width : width);
		}
		if (isSorting) {
			if ((i & 1) == 0 || ((intDivide(i, 2)) + 1) >= frame.buckets.count) {
				return frame.buckets._inner[(intDivide(i, 2))][0];
			}
			return frame.buckets._inner[(intDivide(i, 2)) + 1][0];
		}
		return frame.buckets._inner[(intDivide(i, 2))][0] + ((i & 1) == 0 ? -width : width);
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.FromZero;
	}
	getInterpolatedSeriesValue(p: number, column: IList$1<number>, prevItem: number, nextItem: number, unsortedPrevItem: number, unsortedNextItem: number, offset: number, isSorting: boolean): number {
		let prevValue: number = NaN;
		if (prevItem >= 0 && prevItem < column.count) {
			prevValue = column.item(prevItem);
		}
		let nextValue: number = NaN;
		if (nextItem >= 0 && nextItem < column.count) {
			nextValue = column.item(nextItem);
		}
		if (unsortedNextItem == 0) {
			return nextValue;
		}
		if (unsortedPrevItem == column.count - 1) {
			return prevValue;
		}
		if (isNaN_(nextValue) && offset != 0 && p <= 0.5 && !isSorting) {
			return prevValue;
		}
		if (isNaN_(prevValue) && offset != 0 && p >= 0.5 && !isSorting) {
			return nextValue;
		}
		if (p > 0.5) {
			return nextValue;
		}
		return prevValue;
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.ColorEncoded;
		} else {
			return super.getResolvedHitTestMode();
		}
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let isSorting: boolean = typeCast<ISortingAxis>(ISortingAxis_$type, this.cachedXAxis) != null;
		let width: number = this.cachedXAxis != null ? 0.5 * this.cachedXAxis.getCategorySize(windowRect, viewportRect, effectiveViewportRect) : 0;
		if (this.cachedXAxis != null && this.cachedXAxis.isInverted) {
			width = -width;
		}
		let count: number = frame.buckets.count * 2;
		let buckets: List$1<number[]> = new List$1<number[]>(Array_$type, 2, count);
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.cachedXAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		for (let i: number = 0; i < count; i++) {
			let bucket: number[] = <number[]>new Array(4);
			bucket[0] = this.getXValue(i, false, frame, width, isSorting);
			bucket[1] = frame.buckets._inner[(intDivide(i, 2))][1];
			bucket[2] = this.getXValue(i, true, frame, width, isSorting);
			bucket[3] = frame.buckets._inner[(intDivide(i, 2))][2];
			buckets.add(bucket);
		}
		let bucketSize: number = this.categoryView.bucketCalculator.bucketSize;
		if (areStylesOverriden) {
			let xParams = new ScalerParams(0, view.windowRect, view.viewport, this.cachedXAxis.isInverted, effectiveViewportRect);
			this.performCategoryStyleOverride(buckets, -1, this.valueColumn.count, this.cachedXAxis, xParams, view.isThumbnailView);
		}
		let stepAreaView: StepAreaSeriesView = typeCast<StepAreaSeriesView>((<any>StepAreaSeriesView).$type, view);
		let line0 = stepAreaView.polyline0;
		let line1 = stepAreaView.polyline1;
		let polygon0 = stepAreaView.polygon0;
		let polygon1 = stepAreaView.polygon1;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(polygon0, false, true, false, false);
		this.renderManager.setCategoryShapeAppearance(polygon1, false, true, false, false);
		if (view.checkFrameDirty(frame)) {
			stepAreaView.rasterizeStepArea1(count, buckets, false, bucketSize, this.resolution, (p0: PointCollection, l0: PointCollection, p01: PointCollection, l1: PointCollection, f: boolean) => this.terminatePolygon(p0, 2 * frame.buckets.count, view), UnknownValuePlotting.DontPlot, this.getLineClipper1(buckets, buckets.count - 1, view.viewport, view.windowRect, true));
			view.updateFrameVersion(frame);
		}
		let yAxis = <NumericYAxis>this.fetchYAxis();
		stepAreaView.polygon0._opacity = this.actualAreaFillOpacity;
		stepAreaView.polygon1._opacity = 0.5 * this.actualAreaFillOpacity;
	}
	get currentCategoryMode(): CategoryMode {
		return this.preferredCategoryMode(this.cachedXAxis);
	}
}

/**
 * @hidden 
 */
export class StepAreaSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(StepAreaSeriesView, 'StepAreaSeriesView', (<any>AnchoredCategorySeriesView).$type);
	private _stepAreaModel: StepAreaSeries = null;
	protected get stepAreaModel(): StepAreaSeries {
		return this._stepAreaModel;
	}
	protected set stepAreaModel(value: StepAreaSeries) {
		this._stepAreaModel = value;
	}
	constructor(model: StepAreaSeries) {
		super(model);
		this.stepAreaModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private _polygon0: Path = new Path();
	private _polyline0: Path = new Path();
	private _polygon1: Path = new Path();
	private _polyline1: Path = new Path();
	get polygon0(): Path {
		return this._polygon0;
	}
	get polyline0(): Path {
		return this._polyline0;
	}
	get polygon1(): Path {
		return this._polygon1;
	}
	get polyline1(): Path {
		return this._polyline1;
	}
	clearStepArea(): void {
		this._polygon0.data = null;
		this._polygon1.data = null;
		this._polyline0.data = null;
		this._polyline1.data = null;
		this.makeDirty();
	}
	rasterizeStepArea(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting): void {
		this.rasterizeStepArea(count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting);
	}
	rasterizeStepArea1(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper): void {
		this.stepAreaModel.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.categoryModel.fetchXAxis()) !== null ? true : false;
		this.stepAreaModel.lineRasterizer.rasterizePolygonPaths1(this._polygon0, this._polyline0, this._polygon1, this._polyline1, count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting, clipper);
		this.makeDirty();
	}
	private _hitPolygon0: Path = new Path();
	private _hitPolyline0: Path = new Path();
	private _hitPolygon1: Path = new Path();
	private _hitPolyline1: Path = new Path();
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		this._hitPolygon0.data = this._polygon0.data;
		this._hitPolyline0.data = this._polyline0.data;
		this._hitPolygon1.data = this._polygon1.data;
		this._hitPolyline1.data = this._polyline1.data;
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
			context.renderPath(this._polyline0);
			context.renderPath(this._polyline1);
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this._polyline0, "lowerShape", <string[]>[ "Lower" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this._polyline1, "upperShape", <string[]>[ "Upper", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this._polygon1, "translucentShape", <string[]>[ "Translucent" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this._polygon0, "fillShape", <string[]>[ "Fill" ]);
	}
}


