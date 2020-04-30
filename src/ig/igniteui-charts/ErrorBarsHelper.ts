/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType, PointUtil } from "igniteui-core/type";
import { ISupportsErrorBars } from "./ISupportsErrorBars";
import { IProvidesViewport } from "./IProvidesViewport";
import { IErrorBarCalculator } from "igniteui-core/IErrorBarCalculator";
import { ErrorBarCalculatorType } from "igniteui-core/ErrorBarCalculatorType";
import { NumericAxisBase } from "./NumericAxisBase";
import { Rect } from "igniteui-core/Rect";
import { ScalerParams } from "./ScalerParams";
import { Axis } from "./Axis";
import { PathGeometry } from "igniteui-core/PathGeometry";

/**
 * @hidden 
 */
export class ErrorBarsHelper extends Base {
	static $t: Type = markType(ErrorBarsHelper, 'ErrorBarsHelper');
	constructor(errorBarsHost: ISupportsErrorBars, viewportHost: IProvidesViewport) {
		super();
		this.errorBarsHost = errorBarsHost;
		this.viewportHost = viewportHost;
	}
	private _errorBarsHost: ISupportsErrorBars = null;
	private get errorBarsHost(): ISupportsErrorBars {
		return this._errorBarsHost;
	}
	private set errorBarsHost(value: ISupportsErrorBars) {
		this._errorBarsHost = value;
	}
	private _viewportHost: IProvidesViewport = null;
	private get viewportHost(): IProvidesViewport {
		return this._viewportHost;
	}
	private set viewportHost(value: IProvidesViewport) {
		this._viewportHost = value;
	}
	isCalculatorIndependent(calculator: IErrorBarCalculator): boolean {
		let type: ErrorBarCalculatorType = calculator.getCalculatorType();
		if (type == ErrorBarCalculatorType.Percentage || type == ErrorBarCalculatorType.Data) {
			return false;
		} else {
			return true;
		}
	}
	calculateIndependentErrorBarPosition(calculator: IErrorBarCalculator, position: number): { p1?: number; } {
		if (calculator.hasConstantPosition()) {
			position = calculator.getPosition();
		}
		return {
			p1: position

		};
	}
	calculateStdDevErrorBarSize(unscaledValue: number, calculator: IErrorBarCalculator, axis: NumericAxisBase, positiveSize: number, negativeSize: number): { p3?: number; p4?: number; } {
		let windowRect: Rect;
		let viewportRect: Rect;
		let effectiveViewportRect: Rect;
		let $ret = this.viewportHost.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		effectiveViewportRect = this.viewportHost.getEffectiveViewport();
		let sParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, axis.isInverted, effectiveViewportRect);
		let scaledValue: number = axis.getScaledValue(unscaledValue, sParams);
		let errorBarValue: number = calculator.getIndependentValue();
		positiveSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue + errorBarValue, sParams) - scaledValue));
		negativeSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue - errorBarValue, sParams) - scaledValue));
		return {
			p3: positiveSize,
			p4: negativeSize

		};
	}
	calculateIndependentErrorBarSize(scaledValue: number, calculator: IErrorBarCalculator, axis: NumericAxisBase, positiveSize: number, negativeSize: number): { p3?: number; p4?: number; } {
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = this.viewportHost.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let sParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, axis.isInverted);
		let unscaledValue: number = axis.getUnscaledValue(scaledValue, sParams);
		let errorBarValue: number = calculator.getIndependentValue();
		positiveSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue + errorBarValue, sParams) - scaledValue));
		negativeSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue - errorBarValue, sParams) - scaledValue));
		return {
			p3: positiveSize,
			p4: negativeSize

		};
	}
	calculateDependentErrorBarSize1(scaledValue: number, calculator: IErrorBarCalculator, axis: NumericAxisBase, positiveSize: number, negativeSize: number): { p3?: number; p4?: number; } {
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = this.viewportHost.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let sParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, axis.isInverted);
		let unscaledValue: number = axis.getUnscaledValue(scaledValue, sParams);
		let errorBarValue: number = calculator.getDependentValue(unscaledValue);
		positiveSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue + errorBarValue, sParams) - scaledValue));
		negativeSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue - errorBarValue, sParams) - scaledValue));
		return {
			p3: positiveSize,
			p4: negativeSize

		};
	}
	calculateDependentErrorBarSize(scaledValue: number, calculator: IErrorBarCalculator, refAxis: NumericAxisBase, targetAxis: NumericAxisBase, positiveSize: number, negativeSize: number): { p4?: number; p5?: number; } {
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = this.viewportHost.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let refParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, refAxis.isInverted);
		let targetParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, targetAxis.isInverted);
		let unscaledValue: number = refAxis.getUnscaledValue(scaledValue, refParams);
		let errorBarValue: number = calculator.getDependentValue(unscaledValue);
		positiveSize = <number>Math.abs(Math.round(refAxis.getScaledValue(unscaledValue + errorBarValue, targetParams) - scaledValue));
		negativeSize = <number>Math.abs(Math.round(refAxis.getScaledValue(unscaledValue - errorBarValue, targetParams) - scaledValue));
		return {
			p4: positiveSize,
			p5: negativeSize

		};
	}
	calculateFromUnscaledErrorBarValue(value: number, unscaledErrorBarValue: number, axis: NumericAxisBase, positiveSize: number, negativeSize: number): { p3?: number; p4?: number; } {
		let windowRect: Rect;
		let viewportRect: Rect;
		let $ret = this.viewportHost.getViewInfo(viewportRect, windowRect);
		viewportRect = $ret.p0;
		windowRect = $ret.p1;
		let sParams: ScalerParams = new ScalerParams(1, windowRect, viewportRect, axis.isInverted);
		let unscaledValue: number = axis.getUnscaledValue(value, sParams);
		positiveSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue + unscaledErrorBarValue, sParams) - value));
		negativeSize = <number>Math.abs(Math.round(axis.getScaledValue(unscaledValue - unscaledErrorBarValue, sParams) - value));
		return {
			p3: positiveSize,
			p4: negativeSize

		};
	}
	addErrorBarVertical(errorBarsGeometry: PathGeometry, position: Point, errorBarLength: number, positive: boolean): void {
	}
	addErrorBarHorizontal(errorBarsGeomety: PathGeometry, position: Point, errorBarLength: number, positive: boolean): void {
	}
	calculateErrorBarCenterHorizontal(calculator: IErrorBarCalculator, axis: NumericAxisBase, point: Point, mean: number): Point {
		let center: Point = PointUtil.create();
		if (calculator.getCalculatorType() == ErrorBarCalculatorType.StandardDeviation) {
			let windowRect: Rect;
			let viewportRect: Rect;
			let effectiveViewportRect: Rect;
			let $ret = this.viewportHost.getViewInfo(viewportRect, windowRect);
			viewportRect = $ret.p0;
			windowRect = $ret.p1;
			effectiveViewportRect = this.viewportHost.getEffectiveViewport();
			let sParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, axis.isInverted, effectiveViewportRect);
			center.x = Math.round(axis.getScaledValue(mean, sParams));
			center.y = Math.round(point.y);
		} else {
			center.x = Math.round(point.x);
			center.y = Math.round(point.y);
		}
		return center;
	}
	calculateErrorBarCenterVertical(calculator: IErrorBarCalculator, axis: NumericAxisBase, point: Point, mean: number): Point {
		let center: Point = PointUtil.create();
		if (calculator.getCalculatorType() == ErrorBarCalculatorType.StandardDeviation) {
			let windowRect: Rect;
			let viewportRect: Rect;
			let effectiveViewportRect: Rect;
			let $ret = this.viewportHost.getViewInfo(viewportRect, windowRect);
			viewportRect = $ret.p0;
			windowRect = $ret.p1;
			effectiveViewportRect = this.viewportHost.getEffectiveViewport();
			let sParams: ScalerParams = new ScalerParams(0, windowRect, viewportRect, axis.isInverted, effectiveViewportRect);
			center.x = Math.round(point.x);
			center.y = Math.round(axis.getScaledValue(mean, sParams));
		} else {
			center.x = Math.round(point.x);
			center.y = Math.round(point.y);
		}
		return center;
	}
}


