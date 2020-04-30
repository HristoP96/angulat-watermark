/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalRangeCategorySeries } from "./HorizontalRangeCategorySeries";
import { SeriesView } from "./SeriesView";
import { RangeCategorySeries } from "./RangeCategorySeries";
import { Point, Type, Base, ICollection$1, ICollection$1_$type, Array_$type, typeCast, runOn, markType } from "igniteui-core/type";
import { Series } from "./Series";
import { MarkerSeries } from "./MarkerSeries";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { CategorySeries } from "./CategorySeries";
import { CategoryFrame } from "./CategoryFrame";
import { CategorySeriesView } from "./CategorySeriesView";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Polyline } from "igniteui-core/Polyline";
import { Polygon } from "igniteui-core/Polygon";
import { ScalerParams } from "./ScalerParams";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { Axis } from "./Axis";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { isNaN_ } from "igniteui-core/number";
import { RangeCategorySeriesView } from "./RangeCategorySeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class RangeAreaSeries extends HorizontalRangeCategorySeries {
	static $t: Type = markType(RangeAreaSeries, 'RangeAreaSeries', (<any>HorizontalRangeCategorySeries).$type);
	protected createView(): SeriesView {
		return new RangeAreaSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.rangeAreaView = <RangeAreaSeriesView>view;
	}
	private _rangeAreaView: RangeAreaSeriesView;
	get rangeAreaView(): RangeAreaSeriesView {
		return this._rangeAreaView;
	}
	set rangeAreaView(value: RangeAreaSeriesView) {
		this._rangeAreaView = value;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	protected testRangeAreaOver(position: Point, lowPosition: Point, highPosition: Point, isFinger: boolean): boolean {
		if (isNaN_(lowPosition.x) || isNaN_(lowPosition.y)) {
			return false;
		}
		if (isNaN_(highPosition.x) || isNaN_(highPosition.y)) {
			return false;
		}
		if ((position.y <= lowPosition.y && position.y >= highPosition.y)) {
			return true;
		}
		return false;
	}
	testHit(position: Point, isFinger: boolean): boolean {
		if (this.testHighLowStrokeOver(position, isFinger)) {
			return true;
		}
		if (this.testMarkersOver(position, isFinger)) {
			return true;
		}
		return false;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>RangeAreaSeries).$type;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let rangeAreaView = <RangeAreaSeriesView>view;
		rangeAreaView.clearRangeArea();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let count: number = frame.buckets.count;
		let buckets: List$1<number[]> = new List$1<number[]>(Array_$type, 2, count);
		for (let i: number = 0; i < count; i++) {
			let frameBucket = frame.buckets._inner[i];
			let bucket: number[] = <number[]>new Array(4);
			bucket[0] = frameBucket[0];
			bucket[1] = frameBucket[1];
			let frameBucket2 = frame.buckets._inner[frame.buckets.count - 1 - i];
			bucket[2] = frameBucket2[0];
			bucket[3] = frameBucket2[2];
			buckets.add(bucket);
		}
		let rangeAreaView: RangeAreaSeriesView = typeCast<RangeAreaSeriesView>((<any>RangeAreaSeriesView).$type, view);
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(rangeAreaView);
		this.renderManager.initCategoryRenderSettings(this, this.shouldOverrideCategoryStyle(), this.xAxis, runOn(this, this.getCategoryItems), this.getBucketSize(view), this.getFirstBucket(view));
		let areStylesOverriden: boolean = false;
		let args = this.renderManager.categoryOverrideArgs;
		if (args != null) {
			areStylesOverriden = true;
		}
		if (areStylesOverriden) {
			let xParams = new ScalerParams(0, view.windowRect, view.viewport, this.xAxis.isInverted, effectiveViewportRect);
			this.performCategoryStyleOverride(buckets, -1, this.lowColumn.count, this.xAxis, xParams, view.isThumbnailView);
		}
		let line0 = rangeAreaView.polyline0;
		let line1 = rangeAreaView.polyline1;
		let fillArea = rangeAreaView.polygon01;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(fillArea, false, true, false, false);
		if (view.checkFrameDirty(frame)) {
			rangeAreaView.rasterizeRangeArea(frame.buckets.count, buckets, false);
			view.updateFrameVersion(frame);
		}
		rangeAreaView.polygon01._opacity = this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
	}
}

/**
 * @hidden 
 */
export class RangeAreaSeriesView extends RangeCategorySeriesView {
	static $t: Type = markType(RangeAreaSeriesView, 'RangeAreaSeriesView', (<any>RangeCategorySeriesView).$type);
	private _rangeAreaModel: RangeAreaSeries = null;
	protected get rangeAreaModel(): RangeAreaSeries {
		return this._rangeAreaModel;
	}
	protected set rangeAreaModel(value: RangeAreaSeries) {
		this._rangeAreaModel = value;
	}
	constructor(model: RangeAreaSeries) {
		super(model);
		this.rangeAreaModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private _polyline0: Polyline = new Polyline();
	private _polygon01: Polygon = new Polygon();
	private _polyline1: Polyline = new Polyline();
	get polyline0(): Polyline {
		return this._polyline0;
	}
	get polygon01(): Polygon {
		return this._polygon01;
	}
	get polyline1(): Polyline {
		return this._polyline1;
	}
	clearRangeArea(): void {
		this._polygon01.points.clear();
		this._polyline0.points.clear();
		this._polyline1.points.clear();
	}
	rasterizeRangeArea(count: number, buckets: List$1<number[]>, useX0asX1: boolean): void {
		this.rasterizePolygon(this._polyline0, this._polygon01, this._polyline1, count, buckets, useX0asX1);
		this.makeDirty();
	}
	private _hitPolyline1: Polyline = new Polyline();
	private _hitPolyline0: Polyline = new Polyline();
	private _hitPolygon01: Polygon = new Polygon();
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		this._hitPolyline0.points = this._polyline0.points;
		this._hitPolyline1.points = this._polyline1.points;
		this._hitPolygon01.points = this._polygon01.points;
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
				context.renderPolygon(this._hitPolygon01);
				context.renderPolyline(this._hitPolyline0);
				context.renderPolyline(this._hitPolyline1);
			} else {
				context.renderPolygon(this._polygon01);
				context.renderPolyline(this._polyline0);
				context.renderPolyline(this._polyline1);
			}
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPolylineData(svd, this._polyline0, "lowerShape", <string[]>[ "Lower" ]);
		this.model.seriesVisualDataManager.exportPolylineData(svd, this._polyline1, "upperShape", <string[]>[ "Upper", "Main" ]);
		this.model.seriesVisualDataManager.exportPolygonData(svd, this._polygon01, "fillShape", <string[]>[ "Fill" ]);
	}
}


