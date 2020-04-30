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
import { AnchoredCategorySeries } from "./AnchoredCategorySeries";
import { Type, Base, ICollection$1, ICollection$1_$type, typeCast, runOn, enumGetBox, EnumUtil, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
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
import { Axis } from "./Axis";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { CategoryFramePreparerBase } from "./CategoryFramePreparerBase";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { AnchoredCategorySeriesView } from "./AnchoredCategorySeriesView";
import { Clipper } from "igniteui-core/Clipper";
import { ISortingAxis, ISortingAxis_$type } from "./ISortingAxis";
import { Brush } from "igniteui-core/Brush";
import { Shape } from "igniteui-core/Shape";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";

/**
 * @hidden 
 */
export class LineSeries extends HorizontalAnchoredCategorySeries implements IUnknownValuePlotting {
	static $t: Type = markType(LineSeries, 'LineSeries', (<any>HorizontalAnchoredCategorySeries).$type, [IUnknownValuePlotting_$type]);
	protected createView(): SeriesView {
		return new LineSeriesView(this);
	}
	private _lineView: LineSeriesView;
	get lineView(): LineSeriesView {
		return this._lineView;
	}
	set lineView(value: LineSeriesView) {
		this._lineView = value;
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.lineView = <LineSeriesView>view;
	}
	protected get_isAreaOrLine(): boolean {
		return true;
	}
	constructor() {
		super();
		this.lineRasterizer = new CategoryLineRasterizer();
		this.defaultStyleKey = (<any>LineSeries).$type;
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
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let lineView = <LineSeriesView>view;
		lineView.clearLine();
	}
	renderFrame(frame: CategoryFrame, view: CategorySeriesView): void {
		super.renderFrame(frame, view);
		let bucketSize: number = view.bucketCalculator.bucketSize;
		let lineView: LineSeriesView = typeCast<LineSeriesView>((<any>LineSeriesView).$type, view);
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
		let line0 = lineView.line0;
		let line1 = lineView.line1;
		let fillArea = lineView.fillArea;
		this.renderManager.setCategoryShapeAppearance(line0, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(line1, true, false, true, false);
		this.renderManager.setCategoryShapeAppearance(fillArea, false, true, false, false);
		fillArea._opacity = 0.75 * this.renderManager.actualRenderOpacity;
		if (view.checkFrameDirty(frame)) {
			lineView.rasterizeLine(buckets.count, buckets, true, this.unknownValuePlotting, this.getLineClipper(buckets, buckets.count - 1, view.viewport, view.windowRect), bucketSize, this.resolution);
			view.updateFrameVersion(frame);
		}
	}
	private static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(LineSeries.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>LineSeries).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<LineSeries>sender).raisePropertyChanged(LineSeries.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(LineSeries.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(LineSeries.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case LineSeries.unknownValuePlottingPropertyName:
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
export class LineSeriesView extends AnchoredCategorySeriesView {
	static $t: Type = markType(LineSeriesView, 'LineSeriesView', (<any>AnchoredCategorySeriesView).$type);
	private _lineModel: LineSeries = null;
	protected get lineModel(): LineSeries {
		return this._lineModel;
	}
	protected set lineModel(value: LineSeries) {
		this._lineModel = value;
	}
	constructor(model: LineSeries) {
		super(model);
		this.lineModel = model;
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
	clearLine(): void {
		this.polygon01.data = null;
		this.polyline0.data = null;
		this.polyline1.data = null;
		this.makeDirty();
	}
	rasterizeLine(bucketCount: number, buckets: List$1<number[]>, useX0AsX1: boolean, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper, bucketSize: number, resolution: number): void {
		this.lineModel.lineRasterizer.isSortingAxis = typeCast<ISortingAxis>(ISortingAxis_$type, this.categoryModel.fetchXAxis()) !== null ? true : false;
		this.lineModel.lineRasterizer.rasterizePolylinePaths(this.polyline0, this.polygon01, this.polyline1, bucketCount, buckets, useX0AsX1, unknownValuePlotting, clipper, bucketSize, resolution);
		this.makeDirty();
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
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


