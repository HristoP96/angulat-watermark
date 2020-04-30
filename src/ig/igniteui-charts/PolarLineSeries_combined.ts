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
import { Type, Base, enumGetBox, EnumUtil, markType, Point } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { PolarFrame } from "./PolarFrame";
import { PolarBaseView } from "./PolarBaseView";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { Series } from "./Series";
import { PolarBase } from "./PolarBase";
import { DependencyPropertyChangedEventArgs } from "igniteui-core/DependencyPropertyChangedEventArgs";
import { PropertyMetadata } from "igniteui-core/PropertyMetadata";
import { PolarLineSeriesBaseView } from "./PolarLineSeriesBaseView";
import { Path } from "igniteui-core/Path";
import { List$1 } from "igniteui-core/List$1";
import { PathRenderer } from "./PathRenderer";
import { Shape } from "igniteui-core/Shape";
import { Brush } from "igniteui-core/Brush";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { ISeriesVisualDataManager } from "./ISeriesVisualDataManager";

/**
 * @hidden 
 */
export class PolarLineSeries extends PolarLineSeriesBase {
	static $t: Type = markType(PolarLineSeries, 'PolarLineSeries', (<any>PolarLineSeriesBase).$type);
	protected createView(): SeriesView {
		return new PolarLineSeriesView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polarLineView = <PolarLineSeriesView>view;
	}
	private _polarLineView: PolarLineSeriesView;
	get polarLineView(): PolarLineSeriesView {
		return this._polarLineView;
	}
	set polarLineView(value: PolarLineSeriesView) {
		this._polarLineView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>PolarLineSeries).$type;
	}
	protected clearPoints(view: SeriesView): void {
		let lineView = <PolarLineSeriesView>view;
		lineView.clearPolarLine();
	}
	renderPoints(frame: PolarFrame, view: PolarBaseView): void {
		let lineView = <PolarLineSeriesView>view;
		lineView.renderPolarLine(frame.points, this.resolution);
	}
	private static readonly unknownValuePlottingPropertyName: string = "UnknownValuePlotting";
	static readonly unknownValuePlottingProperty: DependencyProperty = DependencyProperty.register(PolarLineSeries.unknownValuePlottingPropertyName, UnknownValuePlotting_$type, (<any>PolarLineSeries).$type, new PropertyMetadata(2, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, UnknownValuePlotting.DontPlot), (sender: DependencyObject, e: DependencyPropertyChangedEventArgs) => (<PolarLineSeries>sender).raisePropertyChanged(PolarLineSeries.unknownValuePlottingPropertyName, e.oldValue, e.newValue)));
	get unknownValuePlotting(): UnknownValuePlotting {
		return EnumUtil.getEnumValue<UnknownValuePlotting>(UnknownValuePlotting_$type, this.getValue(PolarLineSeries.unknownValuePlottingProperty));
	}
	set unknownValuePlotting(value: UnknownValuePlotting) {
		this.setValue(PolarLineSeries.unknownValuePlottingProperty, enumGetBox<UnknownValuePlotting>(UnknownValuePlotting_$type, value));
	}
	getUnknownValuePlotting(): UnknownValuePlotting {
		return this.unknownValuePlotting;
	}
	protected propertyUpdatedOverride(sender: any, propertyName: string, oldValue: any, newValue: any): void {
		super.propertyUpdatedOverride(sender, propertyName, oldValue, newValue);
		switch (propertyName) {
			case PolarLineSeries.unknownValuePlottingPropertyName:
			this.renderSeries(false);
			this.notifyThumbnailAppearanceChanged();
			break;

		}

	}
}

/**
 * @hidden 
 */
export class PolarLineSeriesView extends PolarLineSeriesBaseView {
	static $t: Type = markType(PolarLineSeriesView, 'PolarLineSeriesView', (<any>PolarLineSeriesBaseView).$type);
	private _polarLineModel: PolarLineSeries = null;
	protected get polarLineModel(): PolarLineSeries {
		return this._polarLineModel;
	}
	protected set polarLineModel(value: PolarLineSeries) {
		this._polarLineModel = value;
	}
	constructor(model: PolarLineSeries) {
		super(model);
		this.polarLineModel = model;
	}
	onInit(): void {
		super.onInit();
	}
	private polyline: Path = new Path();
	clearPolarLine(): void {
		this.polyline.data = null;
		this.makeDirty();
	}
	renderPolarLine(points: List$1<Point>, resolution: number): void {
		this.polarLineModel.currentRenderer.render(this.polyline, points, resolution);
		this.makeDirty();
	}
	protected setupAppearanceOverride(): void {
		super.setupAppearanceOverride();
		this.polyline._stroke = this.model.actualBrush;
		this.polyline.strokeThickness = this.model.thickness;
		this.polyline.strokeDashArray = this.model.dashArray;
		this.polyline.strokeDashCap = <number>this.model.dashCap;
	}
	protected setupHitAppearanceOverride(): void {
		super.setupHitAppearanceOverride();
		let hitBrush: Brush = this.getHitBrush();
		this.polyline._stroke = hitBrush;
		this.polyline.strokeThickness = this.model.thickness + SeriesView.hIT_THICKNESS_AUGMENT;
	}
	protected renderOverride(context: RenderingContext, isHitContext: boolean): void {
		super.renderOverride(context, isHitContext);
		context.renderPath(this.polyline);
	}
	exportViewShapes(svd: any): void {
		super.exportViewShapes(svd);
		this.model.seriesVisualDataManager.exportPathData(svd, this.polyline, "polarShape", <string[]>[ "Main" ]);
	}
}


