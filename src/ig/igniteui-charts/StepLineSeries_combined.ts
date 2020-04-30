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
import { SeriesHitTestMode } from "./SeriesHitTestMode";
import { CategoryFrame } from "./CategoryFrame";
import { List$1 } from "igniteui-core/List$1";
import { CategorySeriesView } from "./CategorySeriesView";
import { Rect } from "igniteui-core/Rect";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Path } from "igniteui-core/Path";
import { ScalerParams } from "./ScalerParams";
import { Axis } from "./Axis";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { intDivide, isNaN_ } from "igniteui-core/number";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { Clipper } from "igniteui-core/Clipper";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";

/**
 * @hidden 
 */
export class StepLineSeries extends HorizontalAnchoredCategorySeries implements IIsCategoryBased {
	static $t: Type = markType(StepLineSeries, 'StepLineSeries', (<any>HorizontalAnchoredCategorySeries).$type, [IIsCategoryBased_$type]);
	protected createView(): SeriesView {
		return new StepLineSeriesView(this);
	}
	getHostReferenceValue(): number {
		return this.getReferenceValue();
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.stepView = <StepLineSeriesView>view;
	}
	private _stepView: StepLineSeriesView;
	get stepView(): StepLineSeriesView {
		return this._stepView;
	}
	set stepView(value: StepLineSeriesView) {
		this._stepView = value;
	}
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
		this.defaultStyleKey = (<any>StepLineSeries).$type;
	}
	private _lineRasterizer: CategoryLineRasterizer = null;
	get lineRasterizer(): CategoryLineRasterizer {
		return this._lineRasterizer;
	}
	set lineRasterizer(value: CategoryLineRasterizer) {
		this._lineRasterizer = value;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return typeCast<ISortingAxis>(ISortingAxis_$type, axis) !== null ? CategoryMode.Mode0 : CategoryMode.Mode1;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let stepView = <StepLineSeriesView>view;
		stepView.clearStepLine();
	}
	protected getResolvedHitTestMode(): SeriesHitTestMode {
		if (this.hitTestMode == SeriesHitTestMode.Auto) {
			return SeriesHitTestMode.ColorEncoded;
		} else {
			return super.getResolvedHitTestMode();
		}
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
	private getXValue(i: number, fromEnd: boolean, frame: CategoryFrame, width: number, xInverted: boolean, isSorting: boolean): number {
		let even: boolean;
		if (fromEnd) {
			if (isSorting) {
				even = (i & 1) == 0;
				if (even || (intDivide(i, 2)) + 1 < 0) {
					return frame.buckets._inner[(intDivide(i, 2))][0];
				}
				if (frame.buckets.count == (intDivide(i, 2)) + 1) {
					return frame.buckets._inner[(intDivide(i, 2))][0];
				}
				return frame.buckets._inner[(intDivide(i, 2)) + 1][0];
			}
			even = (i & 1) == 0;
			return frame.buckets._inner[(intDivide(i, 2))][0] + (even ? width : -width);
		}
		if (isSorting) {
			even = (i & 1) == 0;
			if (even || ((intDivide(i, 2)) + 1) >= frame.buckets.count) {
				return frame.buckets._inner[(intDivide(i, 2))][0];
			}
			if (frame.buckets.count == (intDivide(i, 2)) + 1) {
				return frame.buckets._inner[(intDivide(i, 2))][0];
			}
			return frame.buckets._inner[(intDivide(i, 2)) + 1][0];
		}
		even = (i & 1) == 0;
		return frame.buckets._inner[(intDivide(i, 2))][0] + (even ? -width : width);
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(view);
		let isSorting: boolean = typeCast<ISortingAxis>(ISortingAxis_$type, this.cachedXAxis) != null;
		let xIsInverted: boolean = this.cachedXAxis.isInverted;
		let width: number = 0;
		if (this.cachedXAxis != null) {
			width = 0.5 * this.cachedXAxis.getCategorySize(windowRect, viewportRect, effectiveViewportRect);
		}
		let buckets = frame.buckets;
		let count: number = 2 * buckets.count;
		let processedBuckets = new List$1<number[]>(Array_$type, 2, count);
		if (!this.cachedXAxis.isInverted) {
			for (let i: number = 0; i < count; i++) {
				let values: number[] = <number[]>new Array(4);
				values[0] = this.getXValue(i, false, frame, width, xIsInverted, isSorting);
				values[1] = frame.buckets._inner[(intDivide(i, 2))][1];
				values[2] = this.getXValue(i, true, frame, width, xIsInverted, isSorting);
				values[3] = frame.buckets._inner[(intDivide(i, 2))][2];
				processedBuckets.add(values);
			}
		} else {
			for (let i1: number = 0; i1 < count; i1++) {
				let values1: number[] = <number[]>new Array(4);
				values1[0] = this.getXValue(i1, true, frame, width, xIsInverted, isSorting);
				values1[1] = frame.buckets._inner[(intDivide(i1, 2))][1];
				values1[2] = this.getXValue(i1, true, frame, width, xIsInverted, isSorting);
				values1[3] = frame.buckets._inner[(intDivide(i1, 2))][2];
				processedBuckets.add(values1);
			}
		}
		let stepLineView: StepLineSeriesView = typeCast<StepLineSeriesView>((<any>StepLineSeriesView).$type, view);
		let bucketSize: number = stepLineView.bucketCalculator.bucketSize;
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
		let line0 = stepLineView.line0;
		let line1 = stepLineView.line1;
		let fillArea = stepLineView.fillArea;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(fillArea, false, true, false, false);
		fillArea._opacity = 0.75 * this.renderManager.actualRenderOpacity;
		if (view.checkFrameDirty(frame)) {
			stepLineView.rasterizeStepLine(count, processedBuckets, false, UnknownValuePlotting.DontPlot, this.getLineClipper(processedBuckets, count - 1, view.viewport, view.windowRect), bucketSize, this.resolution);
			view.updateFrameVersion(frame);
		}
	}
	get currentCategoryMode(): CategoryMode {
		return this.preferredCategoryMode(this.cachedXAxis);
	}
}

/**
 * @hidden 
 */
export class StepLineSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(StepLineSeriesView, 'StepLineSeriesView', (<any>AnchoredCategorySeriesView).$type);
	private _stepModel: StepLineSeries = null;
	protected get stepModel(): StepLineSeries {
		return this._stepModel;
	}
	protected set stepModel(value: StepLineSeries) {
		this._stepModel = value;
	}
	constructor(model: StepLineSeries) {
		super(model);
		this.stepModel = model;
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
	clearStepLine(): void {
		this.polygon01.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
		this.makeDirty();
	}
	rasterizeStepLine(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper, bucketSize: number, resolution: number): void {
		this.stepModel.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.categoryModel.fetchXAxis()) !== null ? true : false;
		this.stepModel.lineRasterizer.rasterizePolylinePaths(this.polyline0, this.polygon01, this.polyline1, count, buckets, useX0AsX1, unknownValuePlotting, clipper, bucketSize, resolution);
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
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 3;
		this.model.shadowOffsetX = 1;
		this.model.shadowOffsetY = 4;
		this.model.useSingleShadow = false;
	}
}


