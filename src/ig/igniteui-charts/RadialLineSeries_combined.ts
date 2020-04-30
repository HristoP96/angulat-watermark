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
import { Type, Base, Array_$type, enumGetBox, EnumUtil, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { CategoryMode } from "./CategoryMode";
import { CategoryAxisBase } from "./CategoryAxisBase";
import { RadialFrame } from "./RadialFrame";
import { RadialBaseView } from "./RadialBaseView";
import { Rect } from "igniteui-core/Rect";
import { List$1 } from "igniteui-core/List$1";
import { RadialAxes } from "./RadialAxes";
import { RadialBucketCalculator } from "./RadialBucketCalculator";
import { Series } from "./Series";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { AnchoredRadialSeriesView } from "./AnchoredRadialSeriesView";
import { Path } from "igniteui-core/Path";
import { Clipper } from "igniteui-core/Clipper";
import { CategoryLineRasterizer } from "./CategoryLineRasterizer";
import { Shape } from "igniteui-core/Shape";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";

/**
 * @hidden 
 */
export class RadialLineSeries extends AnchoredRadialSeries {
	static $t: Type = markType(RadialLineSeries, 'RadialLineSeries', (<any>AnchoredRadialSeries).$type);
	protected createView(): SeriesView {
		return new RadialLineSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.radialLineView = <RadialLineSeriesView>view;
	}
	private _radialLineView: RadialLineSeriesView;
	get radialLineView(): RadialLineSeriesView {
		return this._radialLineView;
	}
	set radialLineView(value: RadialLineSeriesView) {
		this._radialLineView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>RadialLineSeries).$type;
	}
	onApplyTemplate(): void {
		super.onApplyTemplate();
	}
	preferredCategoryMode(axis: CategoryAxisBase): CategoryMode {
		return CategoryMode.Mode0;
	}
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		let radialLineView = <RadialLineSeriesView>view;
		radialLineView.clearRadialLine();
	}
	renderFrame(frame: RadialFrame, view: RadialBaseView): void {
		super.renderFrame(frame, view);
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let buckets = frame.buckets;
		let count: number = buckets.count;
		let processedBuckets = new List$1<number[]>(Array_$type, 2, count);
		let radius: number = 0;
		for (let i: number = 0; i < count; i++) {
			let values: number[] = <number[]>new Array(4);
			processedBuckets.add(values);
			values[0] = this._axes.getXValue(frame.buckets._inner[i][0], frame.buckets._inner[i][1], windowRect, viewportRect);
			values[1] = this._axes.getYValue(frame.buckets._inner[i][0], frame.buckets._inner[i][1], windowRect, viewportRect);
			values[2] = this._axes.getXValue(frame.buckets._inner[i][0], frame.buckets._inner[i][2], windowRect, viewportRect);
			let y1: number = frame.buckets._inner[i][2];
			values[3] = this._axes.getYValue(frame.buckets._inner[i][0], y1, windowRect, viewportRect);
			if (y1 > radius) {
				radius = y1;
			}
		}
		let lineView = <RadialLineSeriesView>view;
		lineView.renderRadialLine(count, processedBuckets, false, this.unknownValuePlotting, this.getLineClipper(processedBuckets, count - 1, view), lineView.bucketCalculator.bucketSize, this.resolution);
	}
	private static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(RadialLineSeries.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>RadialLineSeries).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<RadialLineSeries>sender).raisePropertyChanged(RadialLineSeries.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(RadialLineSeries.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(RadialLineSeries.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case RadialLineSeries.unknownValuePlottingPropertyName:
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
export class RadialLineSeriesView extends AnchoredRadialSeriesView {
	static $t: Type = markType(RadialLineSeriesView, 'RadialLineSeriesView', (<any>AnchoredRadialSeriesView).$type);
	private _radialLineModel: RadialLineSeries = null;
	protected get radialLineModel(): RadialLineSeries {
		return this._radialLineModel;
	}
	protected set radialLineModel(value: RadialLineSeries) {
		this._radialLineModel = value;
	}
	constructor(model: RadialLineSeries) {
		super(model);
		this.radialLineModel = model;
	}
	private polyline0: Path = new Path();
	private polygon01: Path = new Path();
	private polyline1: Path = new Path();
	clearRadialLine(): void {
		this.polyline0.data = null;
		this.polygon01.data = null;
		this.polyline1.data = null;
		this.makeDirty();
	}
	renderRadialLine(count: number, buckets: List$1<number[]>, useX0AsX1: boolean, unknownValuePlotting: UnknownValuePlotting, clipper: Clipper, bucketSize: number, resolution: number): void {
		this.anchoredRadialModel.lineRasterizer.rasterizePolylinePaths(this.polyline0, this.polygon01, this.polyline1, count, buckets, useX0AsX1, unknownValuePlotting, clipper, bucketSize, resolution);
		this.makeDirty();
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polyline0._stroke = this.model.actualBrush;
		this.polyline0.strokeThickness = this.model.thickness;
		this.polyline0.strokeDashArray = this.model.dashArray;
		this.polyline0.strokeDashCap = <number>this.model.dashCap;
		this.polyline1._stroke = this.model.actualBrush;
		this.polyline1.strokeThickness = this.model.thickness;
		this.polyline1.strokeDashArray = this.model.dashArray;
		this.polyline1.strokeDashCap = <number>this.model.dashCap;
		this.polygon01._fill = this.model.actualBrush;
		this.polygon01._opacity = 0.75;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polyline0._stroke = hitBrush;
		this.polyline0.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polyline1._stroke = hitBrush;
		this.polyline1.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this.polygon01._fill = hitBrush;
		this.polygon01._opacity = 1;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this.polygon01);
			context.renderPath(this.polyline0);
			context.renderPath(this.polyline1);
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


