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
import { Type, Base, IList$1, IList$1_$type, markType, TypeRegistrar } from "igniteui-core/type";
import { Control } from "igniteui-core/Control";
import { NumericAxisBase } from "./NumericAxisBase";
import { AxisLabelPanelBase } from "./AxisLabelPanelBase";
import { Axis } from "./Axis";
import { HorizontalAxisLabelPanel } from "./HorizontalAxisLabelPanel";
import { NumericAxisRenderer } from "./NumericAxisRenderer";
import { AxisRendererBase } from "./AxisRendererBase";
import { AxisLabelManager } from "./AxisLabelManager";
import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { ScalerParams } from "./ScalerParams";
import { NumericScaler } from "./NumericScaler";
import { SeriesViewer } from "./SeriesViewer";
import { Rect } from "igniteui-core/Rect";
import { NumericAxisRenderingParameters } from "./NumericAxisRenderingParameters";
import { RangeInfo } from "./RangeInfo";
import { List$1 } from "igniteui-core/List$1";
import { TickmarkValues } from "./TickmarkValues";
import { NumericScaleMode } from "./NumericScaleMode";
import { HorizontalLogarithmicScaler } from "./HorizontalLogarithmicScaler";
import { FastHorizontalLinearScaler } from "./FastHorizontalLinearScaler";
import { AxisLabelSettings } from "./AxisLabelSettings";
import { Visibility } from "igniteui-core/Visibility";
import { AxisLabelsLocation } from "./AxisLabelsLocation";
import { isNaN_ } from "igniteui-core/number";
import { StraightNumericAxisBaseView } from "./StraightNumericAxisBaseView";

/**
 * @hidden 
 */
export class NumericXAxis extends StraightNumericAxisBase implements IScaler {
	static $t: Type = markType(NumericXAxis, 'NumericXAxis', (<any>StraightNumericAxisBase).$type, [IScaler_$type]);
	createView(): AxisView {
		return new NumericXAxisView(this);
	}
	onViewCreated(view: AxisView): void {
		super.onViewCreated(view);
		this.xView = <NumericXAxisView>view;
	}
	private _xView: NumericXAxisView;
	get xView(): NumericXAxisView {
		return this._xView;
	}
	set xView(value: NumericXAxisView) {
		this._xView = value;
	}
	constructor() {
		super();
		this.defaultStyleKey = (<any>NumericXAxis).$type;
		this.renderer = this.createRenderer();
	}
	createLabelPanel(): AxisLabelPanelBase {
		if (this.useSmartAxis) {
			return <AxisLabelPanelBase>(TypeRegistrar.create('HorizontalSmartAxisLabelPanel'));
		} else {
			return new HorizontalAxisLabelPanel();
		}
	}
	createRenderer(): NumericAxisRenderer {
		let renderer: NumericAxisRenderer = super.createRenderer();
		renderer.labelManager.floatPanelAction = (crossing: number) => {
			if ((this.labelSettings == null || this.labelSettings.visibility == Visibility.Visible) && this.crossingAxis != null) {
				this.labelPanel.crossingValue = crossing;
				if (this.labelSettings != null && (this.labelSettings.location == AxisLabelsLocation.InsideTop || this.labelSettings.location == AxisLabelsLocation.InsideBottom)) {
					this.seriesViewer.invalidatePanels();
				}
			}
		};
		renderer.line = (p: AxisRenderingParametersBase, g: GeometryCollection, value: number) => this.verticalLine(g, value, p.viewportRect, p.currentRenderingInfo, false);
		renderer.strip = (p: AxisRenderingParametersBase, g: GeometryCollection, start: number, end: number) => this.verticalStrip(g, start, end, p.viewportRect);
		renderer.scaling = (p: AxisRenderingParametersBase, unscaled: number) => {
			let effectiveViewport = p.effectiveViewportRect;
			let sParams: ScalerParams = new ScalerParams(0, p.windowRect, p.viewportRect, this.isInvertedCached, effectiveViewport);
			return this.getScaledValue(unscaled, sParams);
		};
		renderer.shouldRenderLines = (p: AxisRenderingParametersBase, value: number) => true;
		renderer.axisLine = (p: AxisRenderingParametersBase) => this.horizontalLine(p.axisGeometry, p.crossingValue, p.viewportRect, p.axisRenderingInfo, true);
		renderer.determineCrossingValue = (p: AxisRenderingParametersBase) => {
			p.crossingValue = p.viewportRect.bottom;
			if (this.crossingAxis != null && this.crossingAxis.seriesViewer != null) {
				let crossingValue = p.crossingValue;
				let relativeCrossingValue = p.relativeCrossingValue;
				let $ret = this.scaleCrossingValue(crossingValue, relativeCrossingValue, p.windowRect, p.viewportRect, p.effectiveViewportRect, p.viewportRect.top, p.viewportRect.bottom);
				crossingValue = $ret.p0;
				relativeCrossingValue = $ret.p1;
				p.crossingValue = crossingValue;
				p.relativeCrossingValue = relativeCrossingValue;
			}
		};
		renderer.shouldRenderLabel = (p: AxisRenderingParametersBase, value: number, last: boolean) => {
			let pixelValue: number = Math.round(value);
			return pixelValue >= Math.floor(p.viewportRect.left) && pixelValue <= Math.ceil(p.viewportRect.right);
		};
		return renderer;
	}
	getScaledValue(unscaledValue: number, p: ScalerParams): number {
		if (this.cachedActualScaler != null) {
			return this.cachedActualScaler.getScaledValue(unscaledValue, p);
		}
		return this.actualScaler.getScaledValue(unscaledValue, p);
	}
	getUnscaledValue(scaledValue: number, p: ScalerParams): number {
		if (this.cachedActualScaler != null) {
			return this.cachedActualScaler.getUnscaledValue(scaledValue, p);
		}
		return this.actualScaler.getUnscaledValue(scaledValue, p);
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
		this.seriesViewer.windowRect = new Rect(0, proportionMin, this.seriesViewer.windowRect.y, proportionMax - proportionMin, this.seriesViewer.windowRect.height);
	}
	createRenderingParams(viewportRect: Rect, windowRect: Rect, effectiveViewportRect: Rect, contentViewport: Rect): NumericAxisRenderingParameters {
		let resolvedViewportRect: Rect = contentViewport;
		let renderingParams: NumericAxisRenderingParameters = super.createRenderingParams(viewportRect, windowRect, effectiveViewportRect, contentViewport);
		let xParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, this.isInverted, effectiveViewportRect);
		let visibleMinimum: number = NaN;
		let visibleMaximum: number = NaN;
		if (!this.isInverted && windowRect.right == 1) {
			visibleMaximum = this.actualMaximumValue;
		} else if (this.isInverted && windowRect.left == 0) {
			visibleMinimum = this.actualMaximumValue;
		}
		if (isNaN_(visibleMinimum)) {
			visibleMinimum = this.getUnscaledValue(resolvedViewportRect.left, xParams);
		}
		if (isNaN_(visibleMaximum)) {
			visibleMaximum = this.getUnscaledValue(resolvedViewportRect.right, xParams);
		}
		let trueVisibleMinimum: number = Math.min(visibleMinimum, visibleMaximum);
		let trueVisibleMaximum: number = Math.max(visibleMinimum, visibleMaximum);
		this.actualVisibleMinimumValue = trueVisibleMinimum;
		this.actualVisibleMaximumValue = trueVisibleMaximum;
		renderingParams.rangeInfos.add(((() => {
			let $ret = new RangeInfo();
			$ret.visibleMinimum = trueVisibleMinimum;
			$ret.visibleMaximum = trueVisibleMaximum;
			$ret.resolution = resolvedViewportRect.width;
			return $ret;
		})()));
		return renderingParams;
	}
	protected renderAxisOverride(animate: boolean): void {
		super.renderAxisOverride(animate);
		let windowRect: Rect = this.seriesViewer != null ? this.seriesViewer.actualWindowRect : Rect.empty;
		let viewportRect: Rect = !windowRect.isEmpty ? this.viewportRect : Rect.empty;
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
		return AxisOrientation.Horizontal;
	}
	get orientation(): AxisOrientation {
		return this.get_orientation();
	}
	createScalerOverride(): NumericScaler {
		if (this.isLogarithmic) {
			return new HorizontalLogarithmicScaler();
		}
		switch (this.scaleMode) {
			case NumericScaleMode.Linear: return new FastHorizontalLinearScaler();
			case NumericScaleMode.Logarithmic: return new HorizontalLogarithmicScaler();
		}

		return null;
	}
}

/**
 * @hidden 
 */
export class NumericXAxisView extends StraightNumericAxisBaseView {
	static $t: Type = markType(NumericXAxisView, 'NumericXAxisView', (<any>StraightNumericAxisBaseView).$type);
	private _xModel: NumericXAxis = null;
	protected get xModel(): NumericXAxis {
		return this._xModel;
	}
	protected set xModel(value: NumericXAxis) {
		this._xModel = value;
	}
	constructor(model: NumericXAxis) {
		super(model);
		this.xModel = model;
	}
}


