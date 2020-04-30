/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PolarLineSeriesBase } from "./PolarLineSeriesBase";
import { DependencyProperty } from "igniteui-core/DependencyProperty";
import { DependencyObject } from "igniteui-core/DependencyObject";
import { SeriesView } from "./SeriesView";
import { Type, Point, Base, Number_$type, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { PolarFrame } from "./PolarFrame";
import { PolarBaseView } from "./PolarBaseView";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { List$1 } from "igniteui-core/List$1";
import { Series } from "./Series";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { PolarBase } from "./PolarBase";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { PolarLineSeriesBaseView } from "./PolarLineSeriesBaseView";
import { Path } from "igniteui-core/Path";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { Extensions } from "igniteui-core/Extensions";
import { Numeric } from "igniteui-core/Numeric";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";
import { StandardLegendBadges } from "igniteui-core/StandardLegendBadges";

/**
 * @hidden 
 */
export class PolarSplineAreaSeries extends PolarLineSeriesBase {
	static $t: Type = markType(PolarSplineAreaSeries, 'PolarSplineAreaSeries', (<any>PolarLineSeriesBase).$type);
	protected createView(): SeriesView {
		return new PolarSplineAreaSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polarSplineAreaView = <PolarSplineAreaSeriesView>view;
	}
	private _polarSplineAreaView: PolarSplineAreaSeriesView;
	get polarSplineAreaView(): PolarSplineAreaSeriesView {
		return this._polarSplineAreaView;
	}
	set polarSplineAreaView(value: PolarSplineAreaSeriesView) {
		this._polarSplineAreaView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>PolarSplineAreaSeries).$type;
	}
	protected clearPoints(view: SeriesView): void {
		let splineAreaView = <PolarSplineAreaSeriesView>view;
		splineAreaView.clearPolarSplineArea();
	}
	renderPoints(frame: PolarFrame, view: PolarBaseView): void {
		this.clearPoints(view);
		if (frame.points.count < 1) {
			return;
		}
		let polarSplineAreaView = <PolarSplineAreaSeriesView>view;
		polarSplineAreaView.polygon._opacity = this.actualAreaFillOpacity;
		polarSplineAreaView.renderPolarSplineArea(frame.points, this.stiffness);
	}
	protected get_isClosed(): boolean {
		return true;
	}
	get stiffness(): number {
		return <number>this.getValue(PolarSplineAreaSeries.stiffnessProperty);
	}
	set stiffness(value: number) {
		this.setValue(PolarSplineAreaSeries.stiffnessProperty, value);
	}
	static readonly stiffnessPropertyName: string = "Stiffness";
	static readonly stiffnessProperty: DependencyProperty = DependencyProperty.register(PolarSplineAreaSeries.stiffnessPropertyName, Number_$type, (<any>PolarSplineAreaSeries).$type, new PropertyMetadata(2, 0.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarSplineAreaSeries>sender).raisePropertyChanged(PolarSplineAreaSeries.stiffnessPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case PolarSplineAreaSeries.stiffnessPropertyName:
			this.renderSeries(false);
			break;

		}

	}
}

/**
 * @hidden 
 */
export class PolarSplineAreaSeriesView extends PolarLineSeriesBaseView {
	static $t: Type = markType(PolarSplineAreaSeriesView, 'PolarSplineAreaSeriesView', (<any>PolarLineSeriesBaseView).$type);
	private _polarSplineAreaModel: PolarSplineAreaSeries = null;
	protected get polarSplineAreaModel(): PolarSplineAreaSeries {
		return this._polarSplineAreaModel;
	}
	protected set polarSplineAreaModel(value: PolarSplineAreaSeries) {
		this._polarSplineAreaModel = value;
	}
	constructor(model: PolarSplineAreaSeries) {
		super(model);
		this.polarSplineAreaModel = model;
	}
	onInit(): void {
		super.onInit();
		if (!this.isThumbnailView) {
			this.model.defaultLegendItemBadgeTemplateType = StandardLegendBadges.Rect;
		}
	}
	private polyline: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	private _polygon: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	get polygon(): Path {
		return this._polygon;
	}
	clearPolarSplineArea(): void {
		Extensions.reset1((<PathGeometry>this._polygon.data));
		Extensions.reset1((<PathGeometry>this.polyline.data));
		this.makeDirty();
	}
	renderPolarSplineArea(points: List$1<Point>, stiffness: number): void {
		(<PathGeometry>this.polyline.data).figures = Numeric.spline2D1(points.count + 1, (i: number) => i < points.count ? points._inner[i].x : points._inner[i - points.count].x, (i: number) => i < points.count ? points._inner[i].y : points._inner[i - points.count].y, stiffness);
		(<PathGeometry>this._polygon.data).figures = Numeric.spline2D1(points.count + 1, (i: number) => i < points.count ? points._inner[i].x : points._inner[i - points.count].x, (i: number) => i < points.count ? points._inner[i].y : points._inner[i - points.count].y, stiffness);
		this.makeDirty();
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this._polygon._fill = this.model.actualBrush;
		this._polygon._opacity = this.model.actualAreaFillOpacity;
		this.polyline._stroke = this.model.actualOutline;
		this.polyline.strokeThickness = this.model.thickness;
		this.polyline.strokeDashArray = this.model.dashArray;
		this.polyline.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this._polygon._fill = hitBrush;
		this._polygon._opacity = 1;
		this.polyline._stroke = hitBrush;
		this.polyline.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
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


