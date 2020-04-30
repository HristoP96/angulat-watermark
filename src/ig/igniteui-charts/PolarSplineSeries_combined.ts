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
import { Type, Base, Number_$type, markType, Point } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { PolarBase } from "./PolarBase";
import { Series } from "./Series";
import { PolarFrame } from "./PolarFrame";
import { PolarBaseView } from "./PolarBaseView";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { PolarLineSeriesBaseView } from "./PolarLineSeriesBaseView";
import { Path } from "igniteui-core/Path";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { List$1 } from "igniteui-core/List$1";
import { Extensions } from "igniteui-core/Extensions";
import { Numeric } from "igniteui-core/Numeric";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";
import { Color } from "igniteui-core/Color";

/**
 * @hidden 
 */
export class PolarSplineSeries extends PolarLineSeriesBase {
	static $t: Type = markType(PolarSplineSeries, 'PolarSplineSeries', (<any>PolarLineSeriesBase).$type);
	protected createView(): SeriesView {
		return new PolarSplineSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polarSplineView = <PolarSplineSeriesView>view;
	}
	private _polarSplineView: PolarSplineSeriesView;
	get polarSplineView(): PolarSplineSeriesView {
		return this._polarSplineView;
	}
	set polarSplineView(value: PolarSplineSeriesView) {
		this._polarSplineView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>PolarSplineSeries).$type;
	}
	get stiffness(): number {
		return <number>this.getValue(PolarSplineSeries.stiffnessProperty);
	}
	set stiffness(value: number) {
		this.setValue(PolarSplineSeries.stiffnessProperty, value);
	}
	static readonly stiffnessPropertyName: string = "Stiffness";
	static readonly stiffnessProperty: DependencyProperty = DependencyProperty.register(PolarSplineSeries.stiffnessPropertyName, Number_$type, (<any>PolarSplineSeries).$type, new PropertyMetadata(2, 0.5, (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarSplineSeries>sender).raisePropertyChanged(PolarSplineSeries.stiffnessPropertyName, e.oldValue, e.newValue)));
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case PolarSplineSeries.stiffnessPropertyName:
			this.renderSeries(false);
			break;

		}

	}
	protected clearPoints(view: SeriesView): void {
		let polarSplineView = <PolarSplineSeriesView>view;
		polarSplineView.clearPolarSpline();
	}
	renderPoints(frame: PolarFrame, view: PolarBaseView): void {
		this.clearPoints(view);
		let polarSplineView = <PolarSplineSeriesView>view;
		polarSplineView.renderPolarSpline(frame.points, this.stiffness);
	}
}

/**
 * @hidden 
 */
export class PolarSplineSeriesView extends PolarLineSeriesBaseView {
	static $t: Type = markType(PolarSplineSeriesView, 'PolarSplineSeriesView', (<any>PolarLineSeriesBaseView).$type);
	private _polarSplineModel: PolarSplineSeries = null;
	protected get polarSplineModel(): PolarSplineSeries {
		return this._polarSplineModel;
	}
	protected set polarSplineModel(value: PolarSplineSeries) {
		this._polarSplineModel = value;
	}
	constructor(model: PolarSplineSeries) {
		super(model);
		this.polarSplineModel = model;
	}
	onInit(): void {
		super.onInit();
		let pathGeometry: PathGeometry = new PathGeometry();
		pathGeometry.figures.add(((() => {
			let $ret = new PathFigure();
			return $ret;
		})()));
		this.path.data = pathGeometry;
	}
	private readonly path: Path = ((() => {
		let $ret = new Path();
		$ret.data = new PathGeometry();
		return $ret;
	})());
	clearPolarSpline(): void {
		Extensions.reset1((<PathGeometry>this.path.data));
		this.makeDirty();
	}
	renderPolarSpline(points: List$1<Point>, stiffness: number): void {
		(<PathGeometry>this.path.data).figures = Numeric.spline2D1(points.count, (i: number) => points._inner[i].x, (i: number) => points._inner[i].y, stiffness);
		this.makeDirty();
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.path._stroke = this.model.actualBrush;
		this.path.strokeThickness = this.model.thickness;
		this.path.strokeDashArray = this.model.dashArray;
		this.path.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let getHitBrush: Brush = this.getHitBrush();
		this.path._stroke = getHitBrush;
		this.path.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		context.renderPath(this.path);
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.path, "polarShape", <string[]>[ "Main" ]);
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


