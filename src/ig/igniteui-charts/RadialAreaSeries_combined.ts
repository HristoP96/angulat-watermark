/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { AnchoredRadialSeries } from "./AnchoredRadialSeries";
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { Type, Point, Base, Array_$type, Point_$type, runOn, enumGetBox, EnumUtil, markType, PointUtil } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { RadialFrame } from "./RadialFrame";
import { RadialBaseView } from "./RadialBaseView";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { RadialBase } from "./RadialBase";
import { RadialAxes } from "./RadialAxes";
import { ViewportUtils } from "./ViewportUtils";
import { RadialBucketCalculator } from "./RadialBucketCalculator";
import { Series } from "./Series";
import { PointCollection } from "igniteui-core/PointCollection";
import { Path } from "igniteui-core/Path";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { AnchoredRadialSeriesView } from "./AnchoredRadialSeriesView";
import { MarkerSeriesView } from "./MarkerSeriesView";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class RadialAreaSeries extends AnchoredRadialSeries {
	static $t: Type = markType(RadialAreaSeries, 'RadialAreaSeries', (<any>AnchoredRadialSeries).$type);
	protected createView(): SeriesView {
		return new RadialAreaSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.radialAreaView = <RadialAreaSeriesView>view;
	}
	private _radialAreaView: RadialAreaSeriesView;
	get radialAreaView(): RadialAreaSeriesView {
		return this._radialAreaView;
	}
	set radialAreaView(value: RadialAreaSeriesView) {
		this._radialAreaView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>RadialAreaSeries).$type;
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		this.radialAreaView.clearRadialArea();
	}
	renderFrame(frame: RadialFrame, view: RadialBaseView): void {
		super.renderFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let areaView = <RadialAreaSeriesView>view;
		if (view.hasSurface() && !windowRect.isEmpty && !viewportRect.isEmpty && this.angleAxis != null && this.valueAxis != null) {
			let buckets = frame.buckets;
			let count: number = buckets.count;
			let procesedBuckets = new List$1<number[]>(Array_$type, 2, count);
			let radius: number = 0;
			for (let i: number = 0; i < count; i++) {
				let values: number[] = <number[]>new Array(4);
				procesedBuckets.add(values);
				values[0] = this._axes.getXValue(frame.buckets._inner[i][0], frame.buckets._inner[i][1], windowRect, viewportRect);
				values[1] = this._axes.getYValue(frame.buckets._inner[i][0], frame.buckets._inner[i][1], windowRect, viewportRect);
				values[2] = this._axes.getXValue(frame.buckets._inner[i][0], frame.buckets._inner[i][2], windowRect, viewportRect);
				let y1: number = frame.buckets._inner[i][2];
				values[3] = this._axes.getYValue(frame.buckets._inner[i][0], y1, windowRect, viewportRect);
				if (y1 > radius) {
					radius = y1;
				}
			}
			let centerX: number = ViewportUtils.transformXToViewport(0.5, windowRect, viewportRect);
			let centerY: number = ViewportUtils.transformYToViewport(0.5, windowRect, viewportRect);
			this.terminationPoint = <Point>{ $type: Point_$type, x: centerX, y: centerY };
			areaView.rasterizeArea(frame.buckets.count, procesedBuckets, false, this.radialAreaView.bucketCalculator.bucketSize, this.resolution, runOn(this, this.terminatePolygon), this.unknownValuePlotting);
			areaView.polygon0._opacity = this.actualAreaFillOpacity;
			areaView.polygon1._opacity = this.actualAreaFillOpacity * 0.5;
		}
	}
	private static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(RadialAreaSeries.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>RadialAreaSeries).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialAreaSeries>sender).raisePropertyChanged(RadialAreaSeries.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(RadialAreaSeries.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(RadialAreaSeries.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case RadialAreaSeries.unknownValuePlottingPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
	protected get_isClosed(): boolean {
		return true;
	}
}

/**
 * @hidden 
 */
export class RadialAreaSeriesView extends AnchoredRadialSeriesView {
	static $t: Type = markType(RadialAreaSeriesView, 'RadialAreaSeriesView', (<any>AnchoredRadialSeriesView).$type);
	private _radialAreaModel: RadialAreaSeries = null;
	protected get radialAreaModel(): RadialAreaSeries {
		return this._radialAreaModel;
	}
	protected set radialAreaModel(value: RadialAreaSeries) {
		this._radialAreaModel = value;
	}
	constructor(model: RadialAreaSeries) {
		super(model);
		this.radialAreaModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.resolution = 4;
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	polygon0: Path = new Path();
	polyline0: Path = new Path();
	polygon1: Path = new Path();
	polyline1: Path = new Path();
	clearRadialArea(): void {
		this.polygon0.data = null;
		this.polyline0.data = null;
		this.polygon1.data = null;
		this.polyline1.data = null;
		this.makeDirty();
	}
	rasterizeArea(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, bucketSize: number, resolution: number, terminatePolygon: (arg1: PointCollection, arg2: PointCollection, arg3: PointCollection, arg4: PointCollection, arg5: boolean) => void, unknownValuePlotting: UnknownValuePlotting): void {
		this.anchoredRadialModel.lineRasterizer.rasterizePolygonPaths(this.polygon0, this.polyline0, this.polygon1, this.polyline1, count, buckets, useX0AsX1, bucketSize, resolution, terminatePolygon, unknownValuePlotting);
		this.makeDirty();
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polygon0._fill = this.model.actualBrush;
		this.polygon0._opacity = this.model.actualAreaFillOpacity;
		this.polygon1._fill = this.model.actualBrush;
		this.polygon1._opacity = this.model.actualAreaFillOpacity * 0.5;
		this.polyline0._stroke = this.model.actualOutline;
		this.polyline0.strokeThickness = this.model.thickness;
		this.polyline0.strokeDashArray = this.model.dashArray;
		this.polyline0.strokeDashCap = <number>this.model.dashCap;
		this.polyline1._stroke = this.model.actualOutline;
		this.polyline1.strokeThickness = this.model.thickness;
		this.polyline1.strokeDashArray = this.model.dashArray;
		this.polyline1.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polyline0._stroke = hitBrush;
		this.polyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polyline1._stroke = hitBrush;
		this.polyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polygon0._fill = hitBrush;
		this.polygon0._opacity = 1;
		this.polygon1._fill = hitBrush;
		this.polygon1._opacity = 1;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this.polygon0);
			context.renderPath(this.polygon1);
			context.renderPath(this.polyline0);
			context.renderPath(this.polyline1);
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline0, "lowerShape", <string[]>[ "Lower" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline1, "upperShape", <string[]>[ "Upper", "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon1, "translucentShape", <string[]>[ "Translucent" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polygon0, "fillShape", <string[]>[ "Fill" ]);
	}
}


