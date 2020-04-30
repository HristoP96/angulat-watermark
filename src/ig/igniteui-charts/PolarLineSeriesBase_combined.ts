/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PolarBase } from "./PolarBase";
import { PathRenderer } from "./PathRenderer";
import { SeriesView } from "./SeriesView";
import { DefaultFlattener } from "./DefaultFlattener";
import { UnknownValuePlotting } from "igniteui-core/UnknownValuePlotting";
import { PolarFrame } from "./PolarFrame";
import { PolarBaseView } from "./PolarBaseView";
import { Base, Point, ICollection$1, ICollection$1_$type, IList$1, IList$1_$type, Number_$type, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { Rect } from "igniteui-core/Rect";
import { PolarLinePlanner } from "./PolarLinePlanner";
import { List$1 } from "igniteui-core/List$1";
import { ScatterFrameBase$1 } from "./ScatterFrameBase$1";
import { Series } from "./Series";
import { SeriesViewer } from "./SeriesViewer";
import { PolarAxisInfoCache } from "./PolarAxisInfoCache";
import { NumericAxisBase } from "./NumericAxisBase";
import { NumericAngleAxis } from "./NumericAngleAxis";
import { NumericRadiusAxis } from "./NumericRadiusAxis";
import { isNaN_ } from "igniteui-core/number";
import { Color } from "igniteui-core/Color";

/**
 * @hidden 
 */
export abstract class PolarLineSeriesBase extends PolarBase {
	static $t: Type = markType(PolarLineSeriesBase, 'PolarLineSeriesBase', (<any>PolarBase).$type);
	protected createView(): SeriesView {
		return new PolarLineSeriesBaseView(this);
	}
	onViewCreated(view: SeriesView): void {
		super.onViewCreated(view);
		this.polarLineBaseView = <PolarLineSeriesBaseView>view;
	}
	private _polarLineBaseView: PolarLineSeriesBaseView;
	get polarLineBaseView(): PolarLineSeriesBaseView {
		return this._polarLineBaseView;
	}
	set polarLineBaseView(value: PolarLineSeriesBaseView) {
		this._polarLineBaseView = value;
	}
	constructor() {
		super();
		this.cartesianRenderer = new PathRenderer(1, new DefaultFlattener());
		this.polarRenderer = new PathRenderer(0);
	}
	private _cartesianRenderer: PathRenderer = null;
	get cartesianRenderer(): PathRenderer {
		return this._cartesianRenderer;
	}
	set cartesianRenderer(value: PathRenderer) {
		this._cartesianRenderer = value;
	}
	private _polarRenderer: PathRenderer = null;
	get polarRenderer(): PathRenderer {
		return this._polarRenderer;
	}
	set polarRenderer(value: PathRenderer) {
		this._polarRenderer = value;
	}
	getUnknownValuePlotting(): UnknownValuePlotting {
		return UnknownValuePlotting.DontPlot;
	}
	protected get_clippingDisabled(): boolean {
		return false;
	}
	protected get clippingDisabled(): boolean {
		return this.get_clippingDisabled();
	}
	protected get_isClosed(): boolean {
		return false;
	}
	protected get isClosed(): boolean {
		return this.get_isClosed();
	}
	prepareFrame(frame: PolarFrame, view: PolarBaseView): void {
		super.prepareFrame(frame, view);
		frame.points.clear();
		let windowRect: Rect = view.windowRect;
		let viewportRect: Rect = view.viewport;
		let angleCount: number = this.angleColumn != null ? this.angleColumn.count : 0;
		let radiusCount: number = this.radiusColumn != null ? this.radiusColumn.count : 0;
		let count: number = Math.min(angleCount, radiusCount);
		let planner: PolarLinePlanner = ((() => {
			let $ret = new PolarLinePlanner();
			$ret.angleProvider = (i: number) => this.axisInfoCache.angleAxis.getScaledAngle1(this.angleColumn.item(i), this.axisInfoCache.angleAxisIsLogarithmic, this.axisInfoCache.angleAxisIsInverted);
			$ret.count = count;
			$ret.radiusProvider = (i2: number) => this.radiusAxis.getScaledValue4(this.radiusColumn.item(i2), this.axisInfoCache.radiusAxisIsLogarithmic, this.axisInfoCache.radiusAxisIsInverted, this.axisInfoCache.radiusExtentScale, this.axisInfoCache.innerRadiusExtentScale);
			$ret.resolution = this.resolution;
			$ret.useCartesianInterpolation = this.useCartesianInterpolation;
			$ret.unknownValuePlotting = this.getUnknownValuePlotting();
			$ret.transformedXProvider = (i3: number) => this.getTransformedX(frame, i3);
			$ret.transformedYProvider = (i4: number) => this.getTransformedY(frame, i4);
			$ret.viewport = viewportRect;
			$ret.window = windowRect;
			$ret.isClosed = this.isClosed;
			$ret.clippingDisabled = this.clippingDisabled;
			return $ret;
		})());
		let viableIndices: List$1<number> = new List$1<number>(Number_$type, 0);
		for (let i = 0; i < count; i++) {
			if (this.indexViable(i)) {
				viableIndices.add(i);
			}
		}
		if (this.isClosed && viableIndices.count > 0) {
			viableIndices.add(viableIndices._inner[0]);
		}
		planner.prepareLine1(frame.points, viableIndices);
	}
	private getTransformedX(frame: PolarFrame, i: number): number {
		return frame.transformed._inner[i].x;
	}
	private getTransformedY(frame: PolarFrame, i: number): number {
		return frame.transformed._inner[i].y;
	}
	private centerVisible(): boolean {
		return !this.centerNotVisible();
	}
	private centerNotVisible(): boolean {
		let window = this.seriesViewer.actualWindowRect;
		return !window.containsPoint(<Point>{ $type: Point_$type, x: 0.5, y: 0.5 });
	}
	private indexViable(i: number): boolean {
		return (this.angleColumn.item(i) >= this.axisInfoCache.angleAxis.actualMinimumValue && this.angleColumn.item(i) <= this.axisInfoCache.angleAxis.actualMaximumValue && this.radiusColumn.item(i) >= this.axisInfoCache.radiusAxis.actualMinimumValue && this.radiusColumn.item(i) <= this.axisInfoCache.radiusAxis.actualMaximumValue) || (isNaN_(this.angleColumn.item(i)) || isNaN_(this.radiusColumn.item(i)));
	}
	protected abstract clearPoints(view: SeriesView): void;
	abstract renderPoints(frame: PolarFrame, view: PolarBaseView): void;
	clearRendering(wipeClean: boolean, view: SeriesView): void {
		super.clearRendering(wipeClean, view);
		this.clearPoints(view);
	}
	private _currentRenderer: PathRenderer = null;
	get currentRenderer(): PathRenderer {
		return this._currentRenderer;
	}
	set currentRenderer(value: PathRenderer) {
		this._currentRenderer = value;
	}
	renderFrame(frame: PolarFrame, view: PolarBaseView): void {
		super.renderFrame(frame, view);
		if (this.useCartesianInterpolation) {
			this.currentRenderer = this.cartesianRenderer;
		} else {
			this.currentRenderer = this.polarRenderer;
		}
		this.currentRenderer.unknownValuePlotting = this.getUnknownValuePlotting();
		this.clearPoints(view);
		this.renderPoints(frame, view);
	}
}

/**
 * @hidden 
 */
export class PolarLineSeriesBaseView extends PolarBaseView {
	static $t: Type = markType(PolarLineSeriesBaseView, 'PolarLineSeriesBaseView', (<any>PolarBaseView).$type);
	private _polarLineBaseModel: PolarLineSeriesBase = null;
	private get polarLineBaseModel(): PolarLineSeriesBase {
		return this._polarLineBaseModel;
	}
	private set polarLineBaseModel(value: PolarLineSeriesBase) {
		this._polarLineBaseModel = value;
	}
	constructor(model: PolarLineSeriesBase) {
		super(model);
		this.polarLineBaseModel = model;
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


