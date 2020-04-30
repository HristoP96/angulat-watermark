/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { HorizontalAnchoredCategorySeries } from "./HorizontalAnchoredCategorySeries";
import { IUnknownValuePlotting, IUnknownValuePlotting_$type } from "igniteui-core/IUnknownValuePlotting";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { CategoryTransitionInMode } from "./CategoryTransitionInMode";
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Type, Point, Base, ICollection$1, ICollection$1_$type, typeCast, runOn, enumGetBox, EnumUtil, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { Series } from "./Series";
import { MarkerSeries } from "./MarkerSeries";
import { CategoryFrame } from "./CategoryFrame";
import { CategorySeriesView } from "./CategorySeriesView";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";
import { AssigningCategoryStyleEventArgs } from "./AssigningCategoryStyleEventArgs";
import { Path } from "igniteui-core/Path";
import { NumericYAxis } from "./NumericYAxis";
import { ScalerParams } from "./ScalerParams";
import { CategorySeriesRenderManager } from "./CategorySeriesRenderManager";
import { CategorySeries } from "./CategorySeries";
import { Axis } from "./Axis";
import { PointCollection } from "igniteui-core/PointCollection";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
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
export class AreaSeries extends HorizontalAnchoredCategorySeries implements IUnknownValuePlotting {
	static $t: Type = markType(AreaSeries, 'AreaSeries', (<any>HorizontalAnchoredCategorySeries).$type, [IUnknownValuePlotting_$type]);
	protected createView(): SeriesView {
		return new AreaSeriesView(this);
	}
	protected getDefaultTransitionInMode(): CategoryTransitionInMode {
		return CategoryTransitionInMode.FromZero;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.areaView = <AreaSeriesView>view;
	}
	private _areaView: AreaSeriesView;
	get areaView(): AreaSeriesView {
		return this._areaView;
	}
	set areaView(value: AreaSeriesView) {
		this._areaView = value;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
		this.defaultStyleKey = (<any>AreaSeries).$type;
		this.categoryMode = CategoryMode.Mode0;
	}
	private _lineRasterizer: CategoryLineRasterizer = null;
	get lineRasterizer(): CategoryLineRasterizer {
		return this._lineRasterizer;
	}
	set lineRasterizer(value: CategoryLineRasterizer) {
		this._lineRasterizer = value;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return this.categoryMode;
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
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let areaView = <AreaSeriesView>view;
		areaView.clearAreaLines();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let bucketSize: number = view.bucketCalculator.bucketSize;
		let areaView: AreaSeriesView = typeCast<AreaSeriesView>((<any>AreaSeriesView).$type, view);
		let buckets = frame.buckets;
		let effectiveViewportRect: Rect = this.getEffectiveViewport1(areaView);
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
		let line0 = areaView.line0;
		let line1 = areaView.line1;
		let polygon0 = areaView.polygon0;
		let polygon1 = areaView.polygon1;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, true);
		this.renderManager.setCategoryShapeAppearance(polygon0, false, true, false, false);
		this.renderManager.setCategoryShapeAppearance(polygon1, false, true, false, false);
		if (view.checkFrameDirty(frame)) {
			areaView.rasterizeArea1(buckets.count, buckets, true, bucketSize, this.resolution, (p0: PointCollection, l0: PointCollection, p01: PointCollection, l1: PointCollection, f: boolean) => this.terminatePolygon(p0, frame.buckets.count, view), this.unknownValuePlotting, buckets.count == 1 ? null : this.getLineClipper1(buckets, buckets.count - 1, view.viewport, view.windowRect, true));
			view.updateFrameVersion(frame);
		}
		let yAxis = <NumericYAxis>this.fetchYAxis();
		polygon0._opacity = this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
		polygon1._opacity = 0.5 * this.renderManager.actualRenderOpacity * this.actualAreaFillOpacity;
	}
	private static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(AreaSeries.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>AreaSeries).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<AreaSeries>sender).raisePropertyChanged(AreaSeries.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(AreaSeries.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(AreaSeries.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case AreaSeries.unknownValuePlottingPropertyName:
			this.framePreparer.skipUnknowns = this.unknownValuePlotting == UnknownValuePlotting.LinearInterpolate;
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
}

/**
 * @hidden 
 */
export class AreaSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(AreaSeriesView, 'AreaSeriesView', (<any>AnchoredCategorySeriesView).$type);
	private _areaModel: AreaSeries = null;
	protected get areaModel(): AreaSeries {
		return this._areaModel;
	}
	protected set areaModel(value: AreaSeries) {
		this._areaModel = value;
	}
	constructor(model: AreaSeries) {
		super(model);
		this.areaModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
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
	private _polygon0: Path = new Path();
	private polyline0: Path = new Path();
	private _polygon1: Path = new Path();
	private polyline1: Path = new Path();
	clearAreaLines(): void {
		this._polygon0.data = null;
		this._polygon1.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
		this.makeDirty();
	}
	rasterizeArea(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting): void {
		this.rasterizeArea1(count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting, null);
	}
	rasterizeArea1(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper): void {
		this.areaModel.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.categoryModel.fetchXAxis()) !== null ? true : false;
		this.areaModel.lineRasterizer.rasterizePolygonPaths1(this._polygon0, this.polyline0, this._polygon1, this.polyline1, count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting, clipper);
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


