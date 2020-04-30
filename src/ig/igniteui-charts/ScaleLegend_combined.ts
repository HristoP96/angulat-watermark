/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { LegendBase } from "./LegendBase";
import { IChartScaleLegend, IChartScaleLegend_$type } from "igniteui-core/IChartScaleLegend";
import { IChartLegend } from "igniteui-core/IChartLegend";
import { UIElement } from "igniteui-core/UIElement";
import { TextBlock } from "igniteui-core/TextBlock";
import { IScaleLegendSeries } from "igniteui-core/IScaleLegendSeries";
import { LegendBaseView } from "./LegendBaseView";
import { Type, Base, typeCast, markType, Point, runOn, Point_$type, PointUtil } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { Color } from "igniteui-core/Color";
import { Brush } from "igniteui-core/Brush";
import { ColorUtil } from "igniteui-core/ColorUtil";
import { Shape } from "igniteui-core/Shape";
import { GradientData } from "./GradientData";
import { RenderingContext } from "igniteui-core/RenderingContext";
import { Size } from "igniteui-core/Size";
import { Polygon } from "igniteui-core/Polygon";
import { GradientStopData } from "./GradientStopData";
import { List$1 } from "igniteui-core/List$1";
import { LegendBaseViewManager } from "./LegendBaseViewManager";
import { DomRenderer, DomRenderer_$type } from "igniteui-core/dom";
import { IInternalLegendOwner, IInternalLegendOwner_$type } from "igniteui-core/IInternalLegendOwner";
import { ILegendSeries } from "igniteui-core/ILegendSeries";
import { FrameworkElement } from "igniteui-core/FrameworkElement";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class ScaleLegend extends LegendBase implements IChartScaleLegend {
	static $t: Type = markType(ScaleLegend, 'ScaleLegend', (<any>LegendBase).$type, [IChartScaleLegend_$type]);
	createView(): LegendBaseView {
		return new ScaleLegendView(this);
	}
	onViewCreated(view: LegendBaseView): void {
		super.onViewCreated(view);
		this.scaleView = <ScaleLegendView>view;
	}
	private _scaleView: ScaleLegendView = null;
	get scaleView(): ScaleLegendView {
		return this._scaleView;
	}
	set scaleView(value: ScaleLegendView) {
		this._scaleView = value;
	}
	get legendScaleElement(): UIElement {
		return this.scaleView.legendScaleElement;
	}
	get minText(): TextBlock {
		return this.scaleView.minText;
	}
	get maxText(): TextBlock {
		return this.scaleView.maxText;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>ScaleLegend).$type;
	}
	private _minimumValue: number = 0;
	get minimumValue(): number {
		return this._minimumValue;
	}
	set minimumValue(value: number) {
		this._minimumValue = value;
	}
	private _maximumValue: number = 0;
	get maximumValue(): number {
		return this._maximumValue;
	}
	set maximumValue(value: number) {
		this._maximumValue = value;
	}
	private _series: IScaleLegendSeries = null;
	get series(): IScaleLegendSeries {
		return this._series;
	}
	set series(value: IScaleLegendSeries) {
		this._series = value;
	}
	restoreOriginalStateInternal(): void {
		this.scaleView.restoreOriginalState();
	}
	restoreOriginalState(): void {
		this.restoreOriginalStateInternal();
	}
	private getFirstColor(brush: Brush): Color {
		if (brush == null) {
			return this.scaleView.getTransparentBrush();
		}
		return ColorUtil.getColor(brush);
	}
	initializeLegendInternal(series: IScaleLegendSeries): void {
		this.series = series;
		this.renderLegend();
	}
	initializeLegend(series: IScaleLegendSeries): void {
		this.initializeLegendInternal(series);
	}
	protected get_isScale(): boolean {
		return true;
	}
	renderLegend(): void {
		if (this.legendScaleElement == null || this.series == null || !this.series.legendReady) {
			return;
		}
		if (this.series == null || !this.series.isAttachedTo(this)) {
			return;
		}
		let useSeriesBrush: boolean = false;
		let legendScaleShapeElement: Shape = typeCast<Shape>((<any>Shape).$type, this.legendScaleElement);
		if (legendScaleShapeElement != null) {
			let gradient = this.scaleView.buildGradient();
			if (!this.series.forScaleColors((color: Brush, colorOffset: number) => this.scaleView.addGradientStop(gradient, this.getFirstColor(color), colorOffset))) {
				useSeriesBrush = true;
			}
			this.scaleView.setScaleFill(legendScaleShapeElement, useSeriesBrush, gradient);
		}
		if (this.minText != null) {
			this.minText.text = this.series.minScaleText;
		}
		if (this.maxText != null) {
			this.maxText.text = this.series.maxScaleText;
		}
	}
}

/**
 * @hidden 
 */
export class ScaleLegendView extends LegendBaseView {
	static $t: Type = markType(ScaleLegendView, 'ScaleLegendView', (<any>LegendBaseView).$type);
	constructor(model: ScaleLegend) {
		super(model);
		this.scaleModel = model;
		this.minText = new TextBlock();
		this.maxText = new TextBlock();
		this.legendScaleElement = new Polygon();
	}
	private _scaleModel: ScaleLegend = null;
	get scaleModel(): ScaleLegend {
		return this._scaleModel;
	}
	set scaleModel(value: ScaleLegend) {
		this._scaleModel = value;
	}
	private static readonly legendScaleElementName: string = "LegendScale";
	private _legendScaleElement: Shape = null;
	get legendScaleElement(): Shape {
		return this._legendScaleElement;
	}
	set legendScaleElement(value: Shape) {
		this._legendScaleElement = value;
	}
	private _minText: TextBlock = null;
	get minText(): TextBlock {
		return this._minText;
	}
	set minText(value: TextBlock) {
		this._minText = value;
	}
	private _maxText: TextBlock = null;
	get maxText(): TextBlock {
		return this._maxText;
	}
	set maxText(value: TextBlock) {
		this._maxText = value;
	}
	restoreOriginalState(): void {
	}
	detachContent(): void {
	}
	getTransparentBrush(): Color {
		return Color.fromArgb(0, 0, 0, 0);
	}
	buildGradient(): any {
		return new GradientData();
	}
	addGradientStop(gradient: any, color: Color, colorOffset: number): void {
		let data = <GradientData>gradient;
		data.gradientStops.add(((() => {
			let $ret = new GradientStopData();
			$ret.brush = ((() => {
				let $ret = new Brush();
				$ret.color = color;
				return $ret;
			})());
			$ret.offset = colorOffset;
			return $ret;
		})()));
	}
	setScaleFill(legendScaleShapeElement: Shape, useSeriesBrush: boolean, gradient: any): void {
		if (useSeriesBrush) {
			this.currBrush = this.scaleModel.series.actualMarkerBrush;
			this.currGradient = null;
		} else {
			this.currBrush = null;
			this.currGradient = <GradientData>gradient;
			this.currGradient.sort();
		}
		this.makeDirty();
	}
	private _currGradient: GradientData = null;
	protected get currGradient(): GradientData {
		return this._currGradient;
	}
	protected set currGradient(value: GradientData) {
		this._currGradient = value;
	}
	private _scaleContext: RenderingContext = null;
	protected get scaleContext(): RenderingContext {
		return this._scaleContext;
	}
	protected set scaleContext(value: RenderingContext) {
		this._scaleContext = value;
	}
	private _scaleSize: Size = new Size();
	protected get scaleSize(): Size {
		return this._scaleSize;
	}
	protected set scaleSize(value: Size) {
		this._scaleSize = value;
	}
	onContainerProvided(container: any): void {
		super.onContainerProvided(container);
		this.scaleContext = this.viewManager.getScaleContext(container);
		this.scaleSize = this.viewManager.getScaleContainerSize();
		this.makeDirty();
	}
	protected isDirty: boolean = false;
	protected makeDirty(): void {
		if (!this.isDirty) {
			this.isDirty = true;
			if (this.viewManager.container != null) {
				this.viewManager.container.setTimeout(runOn(this, this.undirty), 0);
			} else {
				window.setTimeout(runOn(this, this.undirty), 0);
			}
		}
	}
	undirty(): void {
		if (this.isDirty) {
			this.isDirty = false;
			this.render();
		}
	}
	private render(): void {
		if (this.scaleContext == null) {
			return;
		}
		this.refreshScaleShape();
	}
	static readonly tEXT_MARGIN: number = 0;
	getDesiredWidth(element: any): number {
		let tb = typeCast<TextBlock>((<any>TextBlock).$type, element);
		if (tb != null && tb.text != null) {
			return this.scaleContext.measureTextBlockWidth(tb) + ScaleLegendView.tEXT_MARGIN;
		}
		return 0;
	}
	getDesiredHeight(element: any): number {
		return this.fontHeight + ScaleLegendView.tEXT_MARGIN;
	}
	private _fontHeight: number = 0;
	protected get fontHeight(): number {
		return this._fontHeight;
	}
	protected set fontHeight(value: number) {
		this._fontHeight = value;
	}
	private _fontBrush: Brush = null;
	protected get fontBrush(): Brush {
		return this._fontBrush;
	}
	protected set fontBrush(value: Brush) {
		this._fontBrush = value;
	}
	private refreshScaleShape(): void {
		if (this.scaleModel.series == null || this.scaleModel.series.container == null || (this.currGradient == null && this.currBrush == null)) {
			return;
		}
		if (this.scaleContext.shouldRender) {
			let internalOwner = typeCast<IInternalLegendOwner>(IInternalLegendOwner_$type, this.scaleModel.series.container);
			this.scaleContext.setFontInfo(internalOwner.getFontInfo());
			this.fontHeight = internalOwner.getFontHeight();
			this.fontBrush = internalOwner.getFontBrush();
			let minWidth: number = this.getDesiredWidth(this.minText);
			let maxWidth: number = this.getDesiredWidth(this.maxText);
			let textWidth: number = Math.max(minWidth, maxWidth) + 4;
			if (textWidth >= this.scaleSize.width) {
				textWidth = 0;
			}
			let scaleWidth: number = this.scaleSize.width - textWidth;
			let left: number = 2;
			let top: number = 2;
			scaleWidth = scaleWidth - 4;
			let scaleHeight: number = this.scaleSize.height - 4;
			let textLeft: number = left + scaleWidth + 4;
			let textTop: number = top;
			let textHeight: number = scaleHeight;
			let point1 = <Point>{ $type: Point_$type, x: left + (3 / 5) * scaleWidth, y: top };
			let point2 = <Point>{ $type: Point_$type, x: left + (5 / 5) * scaleWidth, y: top };
			let point3 = <Point>{ $type: Point_$type, x: left + (5 / 5) * scaleWidth, y: scaleHeight };
			let point4 = <Point>{ $type: Point_$type, x: left, y: scaleHeight };
			let p: Polygon = <Polygon>this.legendScaleElement;
			p.points.clear();
			p.points.add(point1);
			p.points.add(point2);
			p.points.add(point3);
			p.points.add(point4);
			this.minText.canvasLeft = textLeft;
			this.minText.canvasTop = textTop;
			this.minText.fill = this.fontBrush;
			this.maxText.canvasLeft = textLeft;
			this.maxText.canvasTop = textTop + textHeight - (this.getDesiredHeight(this.minText));
			this.maxText.fill = this.fontBrush;
			this.scaleContext.clearRectangle(0, 0, this.scaleSize.width, this.scaleSize.height);
			if (this.currGradient == null && this.currBrush != null) {
				p._fill = this.currBrush;
				this.scaleContext.renderPolygon(p);
			} else {
				this.viewManager.renderGradientShape(this.scaleContext, p, this.currGradient, new Rect(0, top, left, scaleWidth, scaleHeight));
			}
			if (textWidth > 0) {
				this.scaleContext.renderTextBlock(this.minText);
				this.scaleContext.renderTextBlock(this.maxText);
			}
		}
	}
	private _currBrush: Brush = null;
	get currBrush(): Brush {
		return this._currBrush;
	}
	set currBrush(value: Brush) {
		this._currBrush = value;
	}
	onSizeChanged(): void {
		super.onSizeChanged();
	}
}


