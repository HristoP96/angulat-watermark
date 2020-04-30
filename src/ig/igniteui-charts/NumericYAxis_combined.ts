/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { StraightNumericAxisBase } from "./StraightNumericAxisBase";
import { IScaler, IScaler_$type } from "./IScaler";
import { AxisOrientation } from "./AxisOrientation";
import { AxisView } from "./AxisView";
import { Type, IList$1, IList$1_$type, Base, markType } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { NumericAxisBase } from "./NumericAxisBase";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { VerticalAxisLabelPanel } from "./VerticalAxisLabelPanel";
import { Axis } from "./Axis";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { NumericScaler } from "./NumericScaler";
import { SeriesViewer } from "./SeriesViewer";
import { NumericAxisRenderer } from "./NumericAxisRenderer";
import { AxisRendererBase } from "./AxisRendererBase";
import { AxisLabelManager } from "./AxisLabelManager";
import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { NumericAxisRenderingParameters } from "./NumericAxisRenderingParameters";
import { RangeInfo } from "./RangeInfo";
import { List$1 } from "igniteui-core/List$1";
import { TickmarkValues } from "./TickmarkValues";
import { NumericScaleMode } from "./NumericScaleMode";
import { VerticalLogarithmicScaler } from "./VerticalLogarithmicScaler";
import { FastVerticalLinearScaler } from "./FastVerticalLinearScaler";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { Visibility } from "igniteui-core/Visibility";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { isNaN_ } from "igniteui-core/number";
import { StraightNumericAxisBaseView } from "./StraightNumericAxisBaseView";

/**
 * @hidden 
 */
export class NumericYAxis extends StraightNumericAxisBase implements IScaler {
	static $t: Type = markType(NumericYAxis, 'NumericYAxis', (<any>StraightNumericAxisBase).$type, [IScaler_$type]);
	createView(): AxisView {
		return new NumericYAxisView(this);
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>NumericYAxis).$type;
		this.renderer = this.createRenderer();
	}
	createLabelPanel(): AxisLabelPanelBase {
		return new VerticalAxisLabelPanel();
	}
	protected get_isVertical(): boolean {
		return true;
	}
	getResolutionExtent(): number {
		return this.viewportRect.height;
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (this.cachedActualScaler != null) {
			return this.cachedActualScaler.getScaledValue(unscaledValue, p);
		}
		return this.actualScaler.getScaledValue(unscaledValue, p);
	}
	getScaledValueList(unscaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		if (this.cachedActualScaler != null) {
			this.cachedActualScaler.getScaledValueList(unscaledValues, startIndex, count, p);
			return;
		}
		this.actualScaler.getScaledValueList(unscaledValues, startIndex, count, p);
	}
	getScaledBucketValueList(unscaledValues: IList$1<number[]>, bucketIndexes: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		if (this.cachedActualScaler != null) {
			this.cachedActualScaler.getScaledBucketValueList(unscaledValues, bucketIndexes, startIndex, count, p);
			return;
		}
		this.actualScaler.getScaledBucketValueList(unscaledValues, bucketIndexes, startIndex, count, p);
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (this.cachedActualScaler != null) {
			return this.cachedActualScaler.getUnscaledValue(scaledValue, p);
		}
		return this.actualScaler.getUnscaledValue(scaledValue, p);
	}
	getUnscaledValueList(scaledValues: IList$1<number>, startIndex: number, count: number, p: ScalerParams): void {
		if (this.cachedActualScaler != null) {
			this.cachedActualScaler.getUnscaledValueList(scaledValues, startIndex, count, p);
			return;
		}
		this.actualScaler.getUnscaledValueList(scaledValues, startIndex, count, p);
	}
	scrollRangeIntoView(minimum: number, maximum: number): void {
		if (this.seriesViewer == null || minimum == NaN || maximum == NaN) {
			return;
		}
		let proportionMin: number = this.getProportionalAxisValue(minimum, this);
		let proportionMax: number = this.getProportionalAxisValue(maximum, this);
		if (proportionMin == NaN || proportionMax == NaN) {
			return;
		}
		this.seriesViewer.windowRect = new Rect(0, this.seriesViewer.windowRect.x, proportionMax, this.seriesViewer.windowRect.width, proportionMin - proportionMax);
	}
	createRenderer(): NumericAxisRenderer {
		let renderer: NumericAxisRenderer = super.createRenderer();
		renderer.labelManager.floatPanelAction = (crossing: number) => {
			if (this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) {
				this.labelPanel.crossingValue = crossing;
				if (this.labelSettings != null && (this.labelSettings.location == AxisLabelsLocation.InsideRight || this.labelSettings.location == AxisLabelsLocation.InsideLeft)) {
					this.seriesViewer.invalidatePanels();
				}
			}
		};
		renderer.line = (p: AxisRenderingParametersBase, g: GeometryCollection, value: number) => this.horizontalLine(g, value, p.viewportRect, p.currentRenderingInfo, false);
		renderer.strip = (p: AxisRenderingParametersBase, g: GeometryCollection, start: number, end: number) => this.horizontalStrip(g, start, end, p.viewportRect);
		renderer.scaling = (p: AxisRenderingParametersBase, unscaled: number) => {
			let effectiveViewport = p.effectiveViewportRect;
			let sParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, this.isInvertedCached, effectiveViewport);
			return this.getScaledValue(unscaled, sParams);
		};
		renderer.shouldRenderLines = (p: AxisRenderingParametersBase, value: number) => true;
		renderer.axisLine = (p: AxisRenderingParametersBase) => this.verticalLine(p.axisGeometry, p.crossingValue, p.viewportRect, p.axisRenderingInfo, true);
		renderer.determineCrossingValue = (p: AxisRenderingParametersBase) => {
			p.crossingValue = this.labelSettings != null && (this.labelSettings.location == AxisLabelsLocation.InsideRight || this.labelSettings.location == AxisLabelsLocation.OutsideRight) ? p.viewportRect.right : p.viewportRect.left;
			let effectiveViewport = p.effectiveViewportRect;
			let sParams2: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, this.isInvertedCached, effectiveViewport);
			if (this.crossingAxis != null && this.crossingAxis.seriesViewer != null) {
				let crossingValue = p.crossingValue;
				let relativeCrossingValue = p.relativeCrossingValue;
				let $ret = this.scaleCrossingValue(crossingValue, relativeCrossingValue, p.windowRect, p.viewportRect, p.effectiveViewportRect, p.viewportRect.left, p.viewportRect.right);
				crossingValue = $ret.p0;
				relativeCrossingValue = $ret.p1;
				p.crossingValue = crossingValue;
				p.relativeCrossingValue = relativeCrossingValue;
			}
		};
		renderer.shouldRenderLabel = (p: AxisRenderingParametersBase, value: number, last: boolean) => {
			let pixelValue: number = Math.round(value);
			return pixelValue >= Math.floor(p.viewportRect.top) && pixelValue <= Math.ceil(p.viewportRect.bottom);
		};
		return renderer;
	}
	createRenderingParams(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): NumericAxisRenderingParameters {
		let resolvedViewportRect: Rect = contentViewport;
		let renderingParams: NumericAxisRenderingParameters = super.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport);
		let yParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		let visibleMinimum: number = NaN;
		let visibleMaximum: number = NaN;
		if (!this.isInverted && windowRect.top == 0) {
			visibleMaximum = this.actualMaximumValue;
		} else if (this.isInverted && windowRect.bottom == 1) {
			visibleMinimum = this.actualMaximumValue;
		}
		if (isNaN_(visibleMinimum)) {
			visibleMinimum = this.getUnscaledValue(resolvedViewportRect.bottom, yParams);
		}
		if (isNaN_(visibleMaximum)) {
			visibleMaximum = this.getUnscaledValue(resolvedViewportRect.top, yParams);
		}
		let trueVisibleMinimum: number = Math.min(visibleMinimum, visibleMaximum);
		let trueVisibleMaximum: number = Math.max(visibleMinimum, visibleMaximum);
		this.actualVisibleMinimumValue = trueVisibleMinimum;
		this.actualVisibleMaximumValue = trueVisibleMaximum;
		let newRangeInfo = ((() => {
			let $ret = new RangeInfo();
			$ret.visibleMinimum = trueVisibleMinimum;
			$ret.visibleMaximum = trueVisibleMaximum;
			$ret.resolution = resolvedViewportRect.height;
			return $ret;
		})());
		renderingParams.rangeInfos.add(newRangeInfo);
		return renderingParams;
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = this.viewportRect;
		let effectiveViewportRect: Rect = this.getCurrentEffectiveViewport();
		let contentViewport: Rect = this.getContentViewport();
		let renderParams = this.renderer.render(animate, viewportRect, windowRect, effectiveViewportRect, contentViewport);
		if (renderParams != null) {
			this.actualInterval = renderParams.tickmarkValues.interval;
			this.actualMinorInterval = renderParams.tickmarkValues.actualMinorInterval;
		}
	}
	protected viewportChangedOverride(oldRect: Rect, newRect: Rect): void {
		super.viewportChangedOverride(oldRect, newRect);
		if (newRect.height != oldRect.height) {
			this.updateRange();
		}
	}
	protected get_orientation(): AxisOrientation {
		return AxisOrientation.Vertical;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
	createScalerOverride(): NumericScaler {
		if (this.isLogarithmic) {
			return new VerticalLogarithmicScaler();
		}
		switch (this.scaleMode) {
			case NumericScaleMode.Linear: return new FastVerticalLinearScaler();
			case NumericScaleMode.Logarithmic: return new VerticalLogarithmicScaler();
		}

		return null;
	}
}

/**
 * @hidden 
 */
export class NumericYAxisView extends StraightNumericAxisBaseView {
	static $t: Type = markType(NumericYAxisView, 'NumericYAxisView', (<any>StraightNumericAxisBaseView).$type);
	constructor(model: NumericYAxis) {
		super(model);
		this.yModel = model;
	}
	private _yModel: NumericYAxis = null;
	protected get yModel(): NumericYAxis {
		return this._yModel;
	}
	protected set yModel(value: NumericYAxis) {
		this._yModel = value;
	}
}


