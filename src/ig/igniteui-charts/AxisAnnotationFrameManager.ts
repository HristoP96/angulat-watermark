/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, typeCast, Number_$type, Type, markType } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { Color } from "igniteui-core/Color";
import { LinearGradientBrush } from "igniteui-core/LinearGradientBrush";
import { GradientStop } from "igniteui-core/GradientStop";
import { ColorUtil } from "igniteui-core/ColorUtil";
import { AxisAnnotationFrame } from "./AxisAnnotationFrame";
import { Series } from "./Series";
import { SeriesViewer } from "./SeriesViewer";
import { Rect } from "igniteui-core/Rect";
import { Thickness } from "igniteui-core/Thickness";
import { Axis } from "./Axis";
import { ScalerParams } from "./ScalerParams";
import { List$1 } from "igniteui-core/List$1";
import { Dictionary$2 } from "igniteui-core/Dictionary$2";
import { Pool$1 } from "igniteui-core/Pool$1";
import { AxisAnnotation } from "./AxisAnnotation";
import { HashSet$1 } from "igniteui-core/HashSet$1";
import { IAxisAnnotation } from "./IAxisAnnotation";
import { ContentInfo } from "./ContentInfo";
import { truncate, log10 } from "igniteui-core/number";
import { round10N } from "igniteui-core/numberExtended";

/**
 * @hidden 
 */
export class AxisAnnotationFrameManager extends Base {
	static $t: Type = markType(AxisAnnotationFrameManager, 'AxisAnnotationFrameManager');
	static getContrasting(brush: Brush, darkColor: Color, lightColor: Color): Brush {
		let testColor: Color = new Color();
		if (typeCast<LinearGradientBrush>((<any>LinearGradientBrush).$type, brush) !== null) {
			if ((<LinearGradientBrush>brush).gradientStops == null || (<LinearGradientBrush>brush).gradientStops.length < 1) {
				let b = new Brush();
				b.color = darkColor;
				return b;
			}
			testColor = (<LinearGradientBrush>brush).gradientStops[0].color;
		} else {
			testColor = (<Brush>brush).color;
		}
		let ahsl = ColorUtil.getAHSL(testColor);
		let lightAHSL = ColorUtil.getAHSL(lightColor);
		let darkAHSL = ColorUtil.getAHSL(darkColor);
		let darkRatio = (ahsl[3] + 0.05) / (darkAHSL[3] + 0.05);
		let lightRadio = (lightAHSL[3] + 0.05) / (ahsl[3] + 0.05);
		if (darkRatio > lightRadio) {
			let b1 = new Brush();
			b1.color = darkColor;
		}
		let ret = new Brush();
		ret.color = lightColor;
		return ret;
	}
	static prepare(f: AxisAnnotationFrame, pos: Point, series: Series, seriesViewer: SeriesViewer, effectiveViewportRect: Rect, seriesBrush: Brush, xAxisAnnotationBackground: Brush, xAxisAnnotationTextColor: Brush, xAxisAnnotationOutline: Brush, xAxisAnnotationPadding: Thickness, xAxisAnnotationStrokeThickness: number, yAxisAnnotationBackground: Brush, yAxisAnnotationTextColor: Brush, yAxisAnnotationOutline: Brush, yAxisAnnotationPadding: Thickness, yAxisAnnotationStrokeThickness: number, showXAnnotation: boolean, showYAnnotation: boolean): void {
		let axes = series.getAxes();
		let xAxis: Axis = null;
		let yAxis: Axis = null;
		for (let i = 0; i < axes.length; i++) {
			if (axes[i].isVertical) {
				yAxis = axes[i];
			} else {
				xAxis = axes[i];
			}
		}
		let darkColor: Color = Color.fromArgb(255, 102, 102, 102);
		let lightColor: Color = Color.fromArgb(255, 255, 255, 255);
		if (xAxis != null) {
			let xParams = new ScalerParams(1, seriesViewer.actualWindowRect, xAxis.viewportRect, xAxis.isInverted);
			xParams.effectiveViewportRect = effectiveViewportRect;
			let xVal = xAxis.getUnscaledValue(pos.x, xParams);
			f.xAxisValues.add(xVal);
			f.xAxisValuePositions.add(xVal);
			if (xAxisAnnotationBackground != null) {
				f.xAxisAnnotationBackgrounds.add(xAxisAnnotationBackground);
			} else {
				f.xAxisAnnotationBackgrounds.add(seriesBrush);
			}
			if (xAxisAnnotationTextColor != null) {
				f.xAxisAnnotationTextColors.add(xAxisAnnotationTextColor);
			} else {
				f.xAxisAnnotationTextColors.add(AxisAnnotationFrameManager.getContrasting(f.xAxisAnnotationBackgrounds._inner[f.xAxisAnnotationBackgrounds.count - 1], darkColor, lightColor));
			}
			f.xAxisAnnotationPaddingsLeft.add(xAxisAnnotationPadding.left);
			f.xAxisAnnotationPaddingsTop.add(xAxisAnnotationPadding.top);
			f.xAxisAnnotationPaddingsRight.add(xAxisAnnotationPadding.right);
			f.xAxisAnnotationPaddingsBottom.add(xAxisAnnotationPadding.bottom);
			if (xAxisAnnotationStrokeThickness != null) {
				f.xAxisAnnotationStrokeThicknesses.add(xAxisAnnotationStrokeThickness);
			} else {
				f.xAxisAnnotationStrokeThicknesses.add(NaN);
			}
			if (xAxisAnnotationOutline != null) {
				f.xAxisAnnotationOutlines.add(xAxisAnnotationOutline);
			} else {
				f.xAxisAnnotationOutlines.add(null);
			}
			if (showXAnnotation) {
				f.xAxes.add(xAxis);
			} else {
				f.xAxes.add(null);
			}
		}
		if (yAxis != null) {
			let yParams = new ScalerParams(1, seriesViewer.actualWindowRect, yAxis.viewportRect, yAxis.isInverted);
			yParams.effectiveViewportRect = effectiveViewportRect;
			let yVal = yAxis.getUnscaledValue(pos.y, yParams);
			f.yAxisValues.add(yVal);
			f.yAxisValuePositions.add(yVal);
			if (yAxisAnnotationBackground != null) {
				f.yAxisAnnotationBackgrounds.add(yAxisAnnotationBackground);
			} else {
				f.yAxisAnnotationBackgrounds.add(seriesBrush);
			}
			if (yAxisAnnotationTextColor != null) {
				f.yAxisAnnotationTextColors.add(yAxisAnnotationTextColor);
			} else {
				f.yAxisAnnotationTextColors.add(AxisAnnotationFrameManager.getContrasting(f.yAxisAnnotationBackgrounds._inner[f.yAxisAnnotationBackgrounds.count - 1], darkColor, lightColor));
			}
			f.yAxisAnnotationPaddingsLeft.add(yAxisAnnotationPadding.left);
			f.yAxisAnnotationPaddingsTop.add(yAxisAnnotationPadding.top);
			f.yAxisAnnotationPaddingsRight.add(yAxisAnnotationPadding.right);
			f.yAxisAnnotationPaddingsBottom.add(yAxisAnnotationPadding.bottom);
			if (yAxisAnnotationStrokeThickness != null) {
				f.yAxisAnnotationStrokeThicknesses.add(yAxisAnnotationStrokeThickness);
			} else {
				f.yAxisAnnotationStrokeThicknesses.add(NaN);
			}
			if (yAxisAnnotationOutline != null) {
				f.yAxisAnnotationOutlines.add(yAxisAnnotationOutline);
			} else {
				f.yAxisAnnotationOutlines.add(null);
			}
			if (showYAnnotation) {
				f.yAxes.add(yAxis);
			} else {
				f.yAxes.add(null);
			}
		}
	}
	static clear(f: AxisAnnotationFrame): void {
		f.xAxes.clear();
		f.yAxes.clear();
		f.xAxisValues.clear();
		f.yAxisValues.clear();
		f.xAxisValuePositions.clear();
		f.yAxisValuePositions.clear();
		f.xAxisAnnotationBackgrounds.clear();
		f.xAxisAnnotationOutlines.clear();
		f.xAxisAnnotationPaddingsLeft.clear();
		f.xAxisAnnotationPaddingsTop.clear();
		f.xAxisAnnotationPaddingsRight.clear();
		f.xAxisAnnotationPaddingsBottom.clear();
		f.xAxisAnnotationStrokeThicknesses.clear();
		f.xAxisAnnotationTextColors.clear();
		f.yAxisAnnotationBackgrounds.clear();
		f.yAxisAnnotationOutlines.clear();
		f.yAxisAnnotationPaddingsLeft.clear();
		f.yAxisAnnotationPaddingsTop.clear();
		f.yAxisAnnotationPaddingsRight.clear();
		f.yAxisAnnotationPaddingsBottom.clear();
		f.yAxisAnnotationStrokeThicknesses.clear();
		f.yAxisAnnotationTextColors.clear();
	}
	private static applyPrecision(val: number, axis: Axis, fixedPrecision: number): number {
		if (!axis.isNumeric) {
			return val;
		}
		let precision: number = 0;
		if (fixedPrecision >= 0) {
			precision = fixedPrecision;
		} else {
			let interval = axis.resolveActualInterval();
			precision = interval == 0 ? 0 : <number>truncate(Math.max(-Math.floor(log10(interval)), 0));
			precision += 1;
		}
		return round10N(val, precision);
	}
	static updateAnnoations(owner: any, frame: AxisAnnotationFrame, modified: boolean, annotationPools: Dictionary$2<Axis, Pool$1<AxisAnnotation>>, currentAxes: List$1<Axis>, forceAxisUpdate: boolean, xFixedPrecision: number, yFixedPrecision: number, xAxisFormat: (item: any) => string, yAxisFormat: (item: any) => string): void {
		let annotatedAxes: List$1<Axis> = new List$1<Axis>((<any>Axis).$type, 0);
		let seenAxes: HashSet$1<Axis> = new HashSet$1<Axis>((<any>Axis).$type, 0);
		let annotationCount: Dictionary$2<Axis, number> = new Dictionary$2<Axis, number>((<any>Axis).$type, Number_$type, 0);
		for (let i = 0; i < frame.xAxisValues.count; i++) {
			let xAxis: Axis = frame.xAxes._inner[i];
			if (xAxis != null) {
				if (!seenAxes.contains(xAxis)) {
					annotatedAxes.add(xAxis);
					annotationCount.item(xAxis, 0);
					seenAxes.add_1(xAxis);
				}
				let xPool: Pool$1<AxisAnnotation>;
				if (!annotationPools.containsKey(xAxis)) {
					xPool = new Pool$1<AxisAnnotation>((<any>AxisAnnotation).$type);
					xPool.create = () => new AxisAnnotation();
					xPool.destroy = (a: AxisAnnotation) => {
					};
					xPool.activate = (a: AxisAnnotation) => xAxis.autoAnnotations.add(a);
					xPool.disactivate = (a: AxisAnnotation) => xAxis.autoAnnotations.remove(a);
					annotationPools.item(xAxis, xPool);
					currentAxes.add(xAxis);
				} else {
					xPool = annotationPools.item(xAxis);
				}
				let xa = xPool.item(annotationCount.item(xAxis));
				annotationCount.item(xAxis, annotationCount.item(xAxis) + 1);
				xa.checkDirty = false;
				xa.value = frame.xAxisValuePositions._inner[i];
				let val = frame.xAxisValues._inner[i];
				if (xAxisFormat != null) {
					let text = xAxisFormat(val);
					xa.text = text;
				} else {
					val = AxisAnnotationFrameManager.applyPrecision(val, xAxis, xFixedPrecision);
					xa.text = xAxis.getValueLabel(val);
				}
				xa.textColor = frame.xAxisAnnotationTextColors._inner[i];
				xa.background = frame.xAxisAnnotationBackgrounds._inner[i];
				xa.backgroundPadding = new Thickness(1, frame.xAxisAnnotationPaddingsLeft._inner[i], frame.xAxisAnnotationPaddingsTop._inner[i], frame.xAxisAnnotationPaddingsRight._inner[i], frame.xAxisAnnotationPaddingsBottom._inner[i]);
				xa.outline = frame.xAxisAnnotationOutlines._inner[i];
				xa.strokeThickness = frame.xAxisAnnotationStrokeThicknesses._inner[i];
				if (xa.checkDirty) {
					xa.checkDirty = false;
					modified = true;
				}
			}
		}
		for (let i1 = 0; i1 < frame.yAxisValues.count; i1++) {
			let yAxis: Axis = frame.yAxes._inner[i1];
			if (yAxis != null) {
				if (!seenAxes.contains(yAxis)) {
					annotatedAxes.add(yAxis);
					annotationCount.item(yAxis, 0);
					seenAxes.add_1(yAxis);
				}
				let yPool: Pool$1<AxisAnnotation>;
				if (!annotationPools.containsKey(yAxis)) {
					yPool = new Pool$1<AxisAnnotation>((<any>AxisAnnotation).$type);
					yPool.create = () => new AxisAnnotation();
					yPool.destroy = (a: AxisAnnotation) => {
					};
					yPool.activate = (a: AxisAnnotation) => yAxis.autoAnnotations.add(a);
					yPool.disactivate = (a: AxisAnnotation) => yAxis.autoAnnotations.remove(a);
					annotationPools.item(yAxis, yPool);
					currentAxes.add(yAxis);
				} else {
					yPool = annotationPools.item(yAxis);
				}
				let ya = yPool.item(annotationCount.item(yAxis));
				annotationCount.item(yAxis, annotationCount.item(yAxis) + 1);
				ya.checkDirty = false;
				let val1 = frame.yAxisValues._inner[i1];
				ya.value = frame.yAxisValuePositions._inner[i1];
				if (yAxisFormat != null) {
					let text1 = yAxisFormat(val1);
					ya.text = text1;
				} else {
					val1 = AxisAnnotationFrameManager.applyPrecision(val1, yAxis, yFixedPrecision);
					ya.text = yAxis.getValueLabel(val1);
				}
				ya.textColor = frame.yAxisAnnotationTextColors._inner[i1];
				ya.background = frame.yAxisAnnotationBackgrounds._inner[i1];
				ya.backgroundPadding = new Thickness(1, frame.yAxisAnnotationPaddingsLeft._inner[i1], frame.yAxisAnnotationPaddingsTop._inner[i1], frame.yAxisAnnotationPaddingsRight._inner[i1], frame.yAxisAnnotationPaddingsBottom._inner[i1]);
				ya.outline = frame.yAxisAnnotationOutlines._inner[i1];
				ya.strokeThickness = frame.yAxisAnnotationStrokeThicknesses._inner[i1];
				if (ya.checkDirty) {
					ya.checkDirty = false;
					modified = true;
				}
			}
		}
		for (let i2 = 0; i2 < annotatedAxes.count; i2++) {
			if (annotationPools.containsKey(annotatedAxes._inner[i2])) {
				let pool = annotationPools.item(annotatedAxes._inner[i2]);
				pool.count = annotationCount.item(annotatedAxes._inner[i2]);
			}
		}
		for (let i3 = currentAxes.count - 1; i3 >= 0; i3--) {
			if (!seenAxes.contains(currentAxes._inner[i3])) {
				modified = true;
				let pool1 = annotationPools.item(currentAxes._inner[i3]);
				pool1.count = 0;
				pool1.activate = null;
				pool1.create = null;
				pool1.destroy = null;
				pool1.disactivate = null;
				annotationPools.removeItem(currentAxes._inner[i3]);
				currentAxes.removeAt(i3);
			}
		}
		if (modified && forceAxisUpdate) {
			for (let i4 = 0; i4 < annotatedAxes.count; i4++) {
				let axis = annotatedAxes._inner[i4];
				if (axis.contentInfo.isDirty) {
					axis.doRenderAxis(true);
					axis.contentInfo.isDirty = false;
				}
			}
		}
	}
}


