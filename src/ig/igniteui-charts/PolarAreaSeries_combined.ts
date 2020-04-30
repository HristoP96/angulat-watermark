/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PolarLineSeriesBase } from "./PolarLineSeriesBase";
import { UnknownValuePlotting, UnknownValuePlotting_$type } from "igniteui-core/UnknownValuePlotting";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { Type, Point, Base, enumGetBox, EnumUtil, markType, IEnumerable$1, IEnumerable$1_$type, Point_$type } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { PolarFrame } from "./PolarFrame";
import { PolarBaseView } from "./PolarBaseView";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { List$1 } from "igniteui-core/List$1";
import { Series } from "./Series";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { PolarLineSeriesBaseView } from "./PolarLineSeriesBaseView";
import { Path } from "igniteui-core/Path";
import { PathRenderer } from "./PathRenderer";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class PolarAreaSeries extends PolarLineSeriesBase {
	static $t: Type = markType(PolarAreaSeries, 'PolarAreaSeries', (<any>PolarLineSeriesBase).$type);
	protected createView(): SeriesView {
		return new PolarAreaSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polarAreaView = <PolarAreaSeriesView>view;
	}
	private _polarAreaView: PolarAreaSeriesView;
	get polarAreaView(): PolarAreaSeriesView {
		return this._polarAreaView;
	}
	set polarAreaView(value: PolarAreaSeriesView) {
		this._polarAreaView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>PolarAreaSeries).$type;
	}
	protected clearPoints(view: SeriesView): void {
		let areaView = <PolarAreaSeriesView>view;
		areaView.clearPolarArea();
	}
	renderPoints(frame: PolarFrame, view: PolarBaseView): void {
		if (frame.points.count > 0) {
			let firstPoint: Point = frame.points._inner[0];
			let lastPoint: Point = frame.points._inner[frame.points.count - 1];
			let firstIsLast: boolean = firstPoint.x == lastPoint.x && firstPoint.y == lastPoint.y;
			if (!firstIsLast) {
				frame.points.add(frame.points._inner[0]);
			}
		}
		let areaView = <PolarAreaSeriesView>view;
		areaView.polygon._opacity = this.actualAreaFillOpacity;
		areaView.renderPolarArea(frame.points, this.resolution);
	}
	protected get_isClosed(): boolean {
		return true;
	}
	private static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(PolarAreaSeries.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>PolarAreaSeries).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarAreaSeries>sender).raisePropertyChanged(PolarAreaSeries.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(PolarAreaSeries.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(PolarAreaSeries.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	getUnknownValuePlotting(): UnknownValuePlotting {
		return this.unknownValuePlotting;
	}
}

/**
 * @hidden 
 */
export class PolarAreaSeriesView extends PolarLineSeriesBaseView {
	static $t: Type = markType(PolarAreaSeriesView, 'PolarAreaSeriesView', (<any>PolarLineSeriesBaseView).$type);
	private _polarAreaModel: PolarAreaSeries = null;
	protected get polarAreaModel(): PolarAreaSeries {
		return this._polarAreaModel;
	}
	protected set polarAreaModel(value: PolarAreaSeries) {
		this._polarAreaModel = value;
	}
	constructor(model: PolarAreaSeries) {
		super(model);
		this.polarAreaModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private polyline: Path = new Path();
	private _polygon: Path = new Path();
	get polygon(): Path {
		return this._polygon;
	}
	clearPolarArea(): void {
		this._polygon.data = null;
		this.polyline.data = null;
		this.makeDirty();
	}
	renderPolarArea(points: IEnumerable$1<Point>, Resolution: number): void {
		let pointsList: List$1<Point> = new List$1<Point>(Point_$type, 1, points);
		this.polarAreaModel.currentRenderer.render(this.polyline, pointsList, Resolution);
		this.polarAreaModel.currentRenderer.render(this._polygon, pointsList, Resolution);
		this.makeDirty();
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polyline._stroke = this.model.actualOutline;
		this.polyline.strokeThickness = this.model.thickness;
		this.polyline.strokeDashArray = this.model.dashArray;
		this.polyline.strokeDashCap = <number>this.model.dashCap;
		this._polygon._fill = this.model.actualBrush;
		this._polygon._opacity = this.model.actualAreaFillOpacity;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polyline._stroke = hitBrush;
		this.polyline.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
		this._polygon._fill = hitBrush;
		this._polygon._opacity = 1;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		if (context.shouldRender) {
			context.renderPath(this._polygon);
			context.renderPath(this.polyline);
		}
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline, "polarShape", <string[]>[ "Main" ]);
		this.model.seriesVisualDataManager.exportPathData(svd, this._polygon, "fillShape", <string[]>[ "Fill" ]);
	}
	protected applyDropShadowDefaultSettings(): void {
		let color = new Color();
		color.colorString = "rgba(95,95,95,0.5)";
		this.model.shadowColor = color;
		this.model.shadowBlur = 5;
		this.model.shadowOffsetX = 5;
		this.model.shadowOffsetY = 5;
	}
}


