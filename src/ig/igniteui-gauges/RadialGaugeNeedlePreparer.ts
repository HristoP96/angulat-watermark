/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { RadialGaugeNeedleParameters } from "./RadialGaugeNeedleParameters";
import { RadialGaugeNeedleFrame } from "./RadialGaugeNeedleFrame";
import { RadialGaugeNeedleShape } from "./RadialGaugeNeedleShape";
import { RadialGaugePivotShape } from "./RadialGaugePivotShape";
import { Brush } from "igniteui-core/Brush";
import { MorphSegment } from "./MorphSegment";
import { List$1 } from "igniteui-core/List$1";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class RadialGaugeNeedlePreparer extends Base {
	static $t: Type = markType(RadialGaugeNeedlePreparer, 'RadialGaugeNeedlePreparer');
	private _parameters: RadialGaugeNeedleParameters = null;
	get parameters(): RadialGaugeNeedleParameters {
		return this._parameters;
	}
	set parameters(value: RadialGaugeNeedleParameters) {
		this._parameters = value;
	}
	prepareNeedle(frame: RadialGaugeNeedleFrame): void {
		let p = this.parameters;
		frame.needleBrush = p.needleBrush;
		frame.needleOutline = p.needleOutline;
		frame.capBrush = p.capFill;
		frame.capOutline = p.capOutline;
		frame.needleStrokeThickness = p.needleStrokeThickness;
		frame.capStrokeThickness = p.capStrokeThickness;
		switch (p.needleShape) {
			case RadialGaugeNeedleShape.None:
			this.prepareNoneNeedle(frame);
			break;

			case RadialGaugeNeedleShape.Rectangle:
			this.prepareRectangleNeedle(frame);
			break;

			case RadialGaugeNeedleShape.Triangle:
			this.prepareTriangleNeedle(frame);
			break;

			case RadialGaugeNeedleShape.Trapezoid:
			this.prepareTrapezoidNeedle(frame);
			break;

			case RadialGaugeNeedleShape.RectangleWithBulb:
			this.prepareRectangleWithBulbNeedle(frame);
			break;

			case RadialGaugeNeedleShape.Needle:
			this.prepareNeedleNeedle(frame);
			break;

			case RadialGaugeNeedleShape.NeedleWithBulb:
			this.prepareNeedleWithBulbNeedle(frame);
			break;

			case RadialGaugeNeedleShape.TrapezoidWithBulb:
			this.prepareTrapezoidWithbulbNeedle(frame);
			break;

			case RadialGaugeNeedleShape.TriangleWithBulb:
			this.prepareTriangleWithBulbNeedle(frame);
			break;

		}

		switch (p.capShape) {
			case RadialGaugePivotShape.CircleOverlay:
			this.prepareCircle(frame, true, false);
			break;

			case RadialGaugePivotShape.CircleUnderlay:
			this.prepareCircle(frame, false, false);
			break;

			case RadialGaugePivotShape.CircleOverlayWithHole:
			this.prepareCircle(frame, true, true);
			break;

			case RadialGaugePivotShape.CircleUnderlayWithHole:
			this.prepareCircle(frame, false, true);
			break;

		}

	}
	private prepareCircle(frame: RadialGaugeNeedleFrame, isOverlay: boolean, hasCutout: boolean): void {
		let p = this.getNeedleParameters();
		let capWidth = p.capWidth;
		let capPos = p.capPos;
		let capInnerWidth = p.capInnerWidth;
		let currSeg: MorphSegment = frame.circleUnderlay;
		if (isOverlay) {
			currSeg = frame.circleOverlay;
		}
		let currPoints = currSeg.segmentPoints;
		currSeg.isArcPhase = true;
		currSeg.isClockwise = true;
		currSeg.isLargeArc = false;
		currSeg.arcRadius = capWidth;
		currPoints.add(<Point>{ $type: Point_$type, x: 0 + capWidth, y: 0 });
		currPoints.add(<Point>{ $type: Point_$type, x: 0 - capWidth, y: 0 });
		currSeg = frame.circleUnderlayUnderside;
		if (isOverlay) {
			currSeg = frame.circleOverlayUnderside;
		}
		currPoints = currSeg.segmentPoints;
		currSeg.isArcPhase = true;
		currSeg.isClockwise = true;
		currSeg.isLargeArc = true;
		currSeg.arcRadius = capWidth;
		currPoints.add(<Point>{ $type: Point_$type, x: 0 - capWidth, y: 0 });
		currPoints.add(<Point>{ $type: Point_$type, x: 0 + capWidth, y: 0 });
		if (hasCutout) {
			currSeg = frame.circleUnderlayCutout;
			if (isOverlay) {
				currSeg = frame.circleOverlayCutout;
			}
			currPoints = currSeg.segmentPoints;
			currSeg.isArcPhase = true;
			currSeg.isClockwise = false;
			currSeg.isLargeArc = false;
			currSeg.arcRadius = capInnerWidth;
			currPoints.add(<Point>{ $type: Point_$type, x: 0 + capInnerWidth, y: 0 });
			currPoints.add(<Point>{ $type: Point_$type, x: 0 - capInnerWidth, y: 0 });
			currSeg = frame.circleUnderlayCutoutUnderside;
			if (isOverlay) {
				currSeg = frame.circleOverlayCutoutUnderside;
			}
			currPoints = currSeg.segmentPoints;
			currSeg.isArcPhase = true;
			currSeg.isClockwise = false;
			currSeg.isLargeArc = true;
			currSeg.arcRadius = capInnerWidth;
			currPoints.add(<Point>{ $type: Point_$type, x: 0 - capInnerWidth, y: 0 });
			currPoints.add(<Point>{ $type: Point_$type, x: 0 + capInnerWidth, y: 0 });
		}
	}
	private prepareTriangleWithBulbNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, false, true, false, true);
	}
	private prepareTrapezoidWithbulbNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, false, false, true, true);
	}
	private prepareTrapezoidNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, false, false, true, false);
	}
	private prepareTriangleNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, false, true, false, false);
	}
	private prepareNeedleWithBulbNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, false, false, false, true);
	}
	private getYValue(startX: number, startY: number, endX: number, endY: number, currX: number): number {
		let p = 0;
		if (endX == startX) {
			p = 0;
		} else {
			p = (currX - startX) / (endX - startX);
		}
		let ret = startY + (endY - startY) * p;
		return ret;
	}
	private prepareNeedleHelper(frame: RadialGaugeNeedleFrame, isRectangle: boolean, isTriangle: boolean, isTrapezoid: boolean, withBulb: boolean): void {
		this.resetFrame(frame);
		let p = this.getNeedleParameters();
		frame.needleStartExtent = p.minExtent;
		frame.needleEndExtent = p.maxExtent;
		frame.needleWidth = 0;
		if (!isNaN_(p.maxWidth)) {
			frame.needleWidth = Math.max(frame.needleWidth, p.maxWidth);
		}
		if (!isNaN_(p.capWidth)) {
			frame.needleWidth = Math.max(frame.needleWidth, p.capWidth);
		}
		if (!isNaN_(p.pointFeatureWidth)) {
			frame.needleWidth = Math.max(frame.needleWidth, p.pointFeatureWidth);
		}
		if (!isNaN_(p.baseFeatureWidth)) {
			frame.needleWidth = Math.max(frame.needleWidth, p.baseFeatureWidth);
		}
		if (isTriangle) {
			p.pointFeatureExtent = p.maxExtent;
			p.pointFeatureWidth = 0;
		}
		if (isTrapezoid) {
			p.pointFeatureExtent = p.maxExtent;
			p.pointFeatureWidth = p.maxWidth;
		}
		if (isRectangle) {
			let max = Math.max(p.minWidth, p.maxWidth);
			p.minWidth = max;
			p.maxWidth = max;
			p.pointFeatureExtent = p.maxExtent;
			p.pointFeatureWidth = p.maxWidth;
		}
		if (isNaN_(p.pointFeatureExtent)) {
			p.pointFeatureExtent = p.maxExtent;
		}
		let hasInlineCap: boolean = p.capShape == RadialGaugePivotShape.Circle || p.capShape == RadialGaugePivotShape.CircleWithHole;
		let minWidth: number = p.minWidth;
		let maxWidth: number = p.maxWidth;
		if (!isTrapezoid && !isRectangle) {
			maxWidth = 0;
		}
		let pointFeatureWidth: number = p.pointFeatureWidth;
		let capWidth = p.capWidth;
		let minExtent = p.minExtent;
		let maxExtent = p.maxExtent;
		let baseFeaturePos = p.baseFeatureExtent;
		let pointFeaturePos = p.pointFeatureExtent;
		let baseFeatureWidth = p.baseFeatureWidth;
		let hasPointFeature: boolean = true;
		let hasBaseFeature: boolean = true;
		if (isNaN_(pointFeaturePos)) {
			hasPointFeature = false;
			pointFeaturePos = maxExtent;
		}
		if (isNaN_(baseFeaturePos)) {
			hasBaseFeature = false;
			baseFeaturePos = minExtent;
		}
		let capInnerWidth = p.capInnerWidth;
		let capPos = p.capPos;
		let intersectAngle: number = 0;
		let capStartXPos: number = capPos;
		let capEndXPos: number = capPos;
		let capStartYPos: number = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, capPos);
		let capEndYPos: number = capStartYPos;
		let hasCapHole: boolean = p.capShape == RadialGaugePivotShape.CircleWithHole;
		if (hasInlineCap) {
			let res = GeometryUtil.getCircleIntersection(<Point>{ $type: Point_$type, x: minExtent, y: minWidth }, <Point>{ $type: Point_$type, x: pointFeaturePos, y: pointFeatureWidth }, <Point>{ $type: Point_$type, x: 0, y: 0 }, capWidth);
			if (isNaN_(res.item1.x) || isNaN_(res.item1.y) || isNaN_(res.item2.x) || isNaN_(res.item2.y)) {
				hasInlineCap = false;
			} else {
				let interPoint1 = res.item1;
				let interPoint2 = res.item2;
				capStartXPos = interPoint1.x;
				capEndXPos = interPoint2.x;
				capStartYPos = interPoint1.y;
				capEndYPos = interPoint2.y;
				if (capStartXPos > capEndXPos) {
					let swap = capStartXPos;
					capStartXPos = capEndXPos;
					capEndXPos = swap;
					swap = capStartYPos;
					capStartYPos = capEndYPos;
					capEndYPos = swap;
				}
			}
		}
		if (hasCapHole) {
			let res1 = GeometryUtil.getCircleIntersection(<Point>{ $type: Point_$type, x: minExtent, y: minWidth }, <Point>{ $type: Point_$type, x: pointFeaturePos, y: pointFeatureWidth }, <Point>{ $type: Point_$type, x: 0, y: 0 }, capInnerWidth);
			if ((isNaN_(res1.item1.x) || isNaN_(res1.item1.y) || isNaN_(res1.item2.x) || isNaN_(res1.item2.y)) || hasInlineCap) {
				hasCapHole = true;
			} else {
				hasCapHole = false;
			}
		}
		if (minExtent > capEndXPos || maxExtent < capStartXPos) {
			hasInlineCap = false;
			capStartXPos = minExtent;
			capEndXPos = minExtent;
		}
		let hasStartCap: boolean = false;
		let hasEndCap: boolean = false;
		if (hasInlineCap && minExtent >= capStartXPos) {
			hasStartCap = true;
		}
		if (hasInlineCap && maxExtent <= capEndXPos) {
			hasEndCap = true;
		}
		if (isNaN_(baseFeaturePos) || baseFeaturePos > capStartXPos) {
			baseFeaturePos = capStartXPos;
		}
		if (pointFeaturePos < capEndXPos) {
			pointFeaturePos = capEndXPos;
		}
		let hasBulb: boolean = withBulb;
		let startCapWidth: number = capWidth;
		let endCapWidth: number = capWidth;
		if (baseFeaturePos + baseFeatureWidth > capStartXPos) {
			hasBulb = false;
		}
		let baseCapStartX: number = baseFeaturePos;
		let baseCapStartY: number = minWidth;
		let baseCapEndX: number = baseFeaturePos;
		let baseCapEndY: number = minWidth;
		let startCapStartX: number = capStartXPos;
		let startCapEndX: number = capEndXPos;
		let startCapStartY: number = capStartYPos;
		let startCapEndY: number = capEndYPos;
		let endCapStartX: number = capStartXPos;
		let endCapEndX: number = capEndXPos;
		let endCapStartY: number = capStartYPos;
		let endCapEndY: number = capEndYPos;
		if (hasBulb) {
			let res2 = GeometryUtil.getCircleIntersection(<Point>{ $type: Point_$type, x: minExtent, y: minWidth }, <Point>{ $type: Point_$type, x: pointFeaturePos, y: pointFeatureWidth }, <Point>{ $type: Point_$type, x: baseFeaturePos, y: 0 }, baseFeatureWidth);
			if ((!isNaN_(res2.item1.x) && !isNaN_(res2.item1.y) && !isNaN_(res2.item2.x) && !isNaN_(res2.item2.y))) {
				hasBulb = true;
				baseCapStartX = res2.item1.x;
				baseCapStartY = res2.item1.y;
				baseCapEndX = res2.item2.x;
				baseCapEndY = res2.item2.y;
				if (baseCapStartX > baseCapEndX) {
					let swap1: number = baseCapStartX;
					baseCapStartX = baseCapEndX;
					baseCapEndX = swap1;
					swap1 = baseCapStartY;
					baseCapStartY = baseCapEndY;
					baseCapEndY = swap1;
				}
			} else {
				hasBulb = false;
			}
		}
		if (hasStartCap) {
			hasBulb = false;
		}
		if (hasBulb && minExtent >= baseCapStartX) {
			hasStartCap = true;
			startCapWidth = baseFeatureWidth;
			startCapStartX = baseCapStartX;
			startCapStartY = baseCapStartY;
			startCapEndX = baseCapEndX;
			startCapEndY = baseCapEndY;
		}
		if (hasBulb && maxExtent <= baseCapEndX) {
			hasEndCap = true;
			endCapWidth = baseFeatureWidth;
			endCapWidth = baseFeatureWidth;
			endCapStartX = baseCapStartX;
			endCapStartY = baseCapStartY;
			endCapEndX = baseCapEndX;
			endCapEndY = baseCapEndY;
		}
		let currX = minExtent;
		let currSeg = frame.base;
		let currPoints = currSeg.segmentPoints;
		let currWidth = minWidth;
		if (hasStartCap) {
			currX = startCapStartX;
			currSeg.isArcPhase = true;
			currSeg.isLargeArc = false;
			currSeg.isClockwise = false;
			currSeg.arcRadius = startCapWidth;
			baseFeaturePos = startCapStartX;
			minExtent = startCapStartX;
			currWidth = startCapStartY;
			minWidth = startCapStartY;
			hasInlineCap = false;
		}
		if (hasEndCap) {
			pointFeaturePos = endCapEndX;
			maxExtent = endCapEndX;
			hasInlineCap = false;
		}
		let hasCap: boolean = hasStartCap || hasEndCap || hasInlineCap;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.baseToFeature;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currX = baseCapStartX;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.baseFeature;
		currPoints = currSeg.segmentPoints;
		if (hasBulb) {
			currSeg.isArcPhase = true;
			currSeg.isLargeArc = false;
			currSeg.isClockwise = false;
			currSeg.arcRadius = baseFeatureWidth;
		}
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currX = baseCapEndX;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.featureToCap;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currX = capStartXPos;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.cap;
		currPoints = currSeg.segmentPoints;
		if (hasCap) {
			currSeg.isArcPhase = true;
			currSeg.isLargeArc = false;
			currSeg.isClockwise = false;
			currSeg.arcRadius = capWidth;
		}
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currX = capEndXPos;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.capToFeature;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currX = pointFeaturePos;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.pointFeature;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.featureToPoint;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currX = maxExtent;
		currWidth = this.getYValue(pointFeaturePos, pointFeatureWidth, maxExtent, maxWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currSeg = frame.point;
		currPoints = currSeg.segmentPoints;
		if (hasEndCap) {
			currX = endCapEndX;
			currSeg.isArcPhase = true;
			currSeg.isLargeArc = false;
			currSeg.isClockwise = false;
			currSeg.arcRadius = endCapWidth;
		}
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: currWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.pointToFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currX = pointFeaturePos;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.pointFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.featureToCapUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currX = capEndXPos;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.capUnderside;
		currPoints = currSeg.segmentPoints;
		if (hasCap) {
			currSeg.isArcPhase = true;
			currSeg.isLargeArc = false;
			currSeg.isClockwise = false;
			currSeg.arcRadius = capWidth;
		}
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currX = capStartXPos;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.capToFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currX = baseCapEndX;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.baseFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		if (hasBulb) {
			currSeg.isArcPhase = true;
			currSeg.isLargeArc = false;
			currSeg.isClockwise = false;
			currSeg.arcRadius = baseFeatureWidth;
		}
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currX = baseCapStartX;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.featureToBaseUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currX = minExtent;
		currWidth = this.getYValue(minExtent, minWidth, pointFeaturePos, pointFeatureWidth, currX);
		currPoints.add(<Point>{ $type: Point_$type, x: currX, y: -1 * currWidth });
		currSeg = frame.cutout;
		currPoints = currSeg.segmentPoints;
		if (hasCapHole && hasCap) {
			currSeg.isArcPhase = true;
			currSeg.isClockwise = true;
			currSeg.isLargeArc = false;
			currSeg.arcRadius = capInnerWidth;
			currPoints.add(<Point>{ $type: Point_$type, x: 0 + capInnerWidth, y: 0 });
			currPoints.add(<Point>{ $type: Point_$type, x: 0 - capInnerWidth, y: 0 });
		}
		currSeg = frame.cutoutUnderside;
		currPoints = currSeg.segmentPoints;
		if (hasCapHole && hasCap) {
			currSeg.isArcPhase = true;
			currSeg.isClockwise = true;
			currSeg.isLargeArc = true;
			currSeg.arcRadius = capInnerWidth;
			currPoints.add(<Point>{ $type: Point_$type, x: 0 - capInnerWidth, y: 0 });
			currPoints.add(<Point>{ $type: Point_$type, x: 0 + capInnerWidth, y: 0 });
		}
	}
	private prepareNeedleNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, false, false, false, false);
	}
	private prepareRectangleWithBulbNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, true, false, false, true);
	}
	private getNeedleParameters(): RadialGaugeNeedleParameters {
		let p = this.parameters;
		let o = this.parameters.clone();
		let defaultMinExtent: number = 0;
		let defaultMaxExtent: number = 0.48;
		let defaultBaseFeaturePos: number = NaN;
		let defaultPointFeaturePos: number = NaN;
		let defaultCapWidth: number = 0.15;
		let defaultMinWidth: number = 0.1;
		let defaultMaxWidth: number = 0.1;
		let defaultCapInnerWidth: number = 0.1;
		let defaultBaseFeatureWidth: number = 0.14;
		let defaultPointFeatureWidth: number = 0.06;
		switch (p.needleShape) {
			case RadialGaugeNeedleShape.Needle:
			defaultPointFeaturePos = 0.4;
			break;

			case RadialGaugeNeedleShape.Trapezoid:
			defaultMinWidth = 0.06;
			defaultMaxWidth = 0.02;
			break;

			case RadialGaugeNeedleShape.NeedleWithBulb:
			defaultPointFeaturePos = 0.4;
			defaultMinExtent = -0.3;
			defaultBaseFeaturePos = -0.2;
			defaultBaseFeatureWidth = 0.14;
			break;

			case RadialGaugeNeedleShape.RectangleWithBulb:
			defaultMinExtent = -0.3;
			defaultBaseFeaturePos = -0.2;
			defaultBaseFeatureWidth = 0.14;
			break;

			case RadialGaugeNeedleShape.TrapezoidWithBulb:
			defaultMaxWidth = 0.06;
			defaultMinExtent = -0.3;
			defaultBaseFeaturePos = -0.2;
			defaultBaseFeatureWidth = 0.14;
			break;

			case RadialGaugeNeedleShape.TriangleWithBulb:
			defaultMinExtent = -0.3;
			defaultBaseFeaturePos = -0.2;
			defaultBaseFeatureWidth = 0.14;
			break;

		}

		let minExtent = p.minExtent;
		let maxExtent = p.maxExtent;
		let hasInlineCap = p.capShape == RadialGaugePivotShape.Circle || p.capShape == RadialGaugePivotShape.CircleWithHole;
		if (isNaN_(minExtent)) {
			minExtent = defaultMinExtent;
		}
		if (isNaN_(maxExtent)) {
			maxExtent = defaultMaxExtent;
		}
		let tmpMin = Math.min(minExtent, maxExtent);
		let tmpMax = Math.max(minExtent, maxExtent);
		minExtent = tmpMin;
		maxExtent = tmpMax;
		let minWidth = p.minWidth;
		if (isNaN_(minWidth)) {
			minWidth = defaultMinWidth;
		}
		let maxWidth = p.maxWidth;
		if (isNaN_(maxWidth)) {
			maxWidth = defaultMaxWidth;
		}
		let capWidth: number = p.capWidth;
		let capInnerWidth: number = p.capInnerWidth;
		if (isNaN_(capWidth)) {
			capWidth = defaultCapWidth;
		}
		if (isNaN_(capInnerWidth)) {
			capInnerWidth = defaultCapInnerWidth;
		}
		let tmpCapWidth = Math.max(capWidth, capInnerWidth);
		let tmpCapInnerWidth = Math.min(capWidth, capInnerWidth);
		capWidth = tmpCapWidth;
		capInnerWidth = tmpCapInnerWidth;
		let baseFeaturePos = p.baseFeatureExtent;
		if (isNaN_(baseFeaturePos)) {
			baseFeaturePos = defaultBaseFeaturePos;
		}
		if (!isNaN_(baseFeaturePos)) {
			if (baseFeaturePos < minExtent) {
				baseFeaturePos = NaN;
			}
			if (baseFeaturePos > 0 && minExtent <= 0) {
				baseFeaturePos = NaN;
			}
			if (baseFeaturePos > maxExtent) {
				baseFeaturePos = maxExtent;
			}
		}
		let pointFeaturePos = p.pointFeatureExtent;
		if (isNaN_(pointFeaturePos)) {
			pointFeaturePos = defaultPointFeaturePos;
		}
		if (!isNaN_(pointFeaturePos)) {
			if (pointFeaturePos > maxExtent) {
				pointFeaturePos = NaN;
			}
			if (pointFeaturePos < 0 && maxExtent >= 0) {
				pointFeaturePos = NaN;
			}
			if (pointFeaturePos < minExtent) {
				pointFeaturePos = minExtent;
			}
		}
		let capPos = 0;
		if (minExtent > 0) {
			capPos = minExtent;
		}
		if (maxExtent < 0) {
			capPos = minExtent;
		}
		if (capWidth <= 0) {
			capWidth = 0;
		}
		let baseFeatureWidth = p.baseFeatureWidth;
		let pointFeatureWidth = p.pointFeatureWidth;
		if (isNaN_(baseFeatureWidth)) {
			baseFeatureWidth = defaultBaseFeatureWidth;
		}
		if (isNaN_(pointFeatureWidth)) {
			pointFeatureWidth = defaultPointFeatureWidth;
		}
		o.capWidth = capWidth / 2;
		o.capInnerWidth = capInnerWidth / 2;
		o.baseFeatureExtent = baseFeaturePos;
		o.pointFeatureExtent = pointFeaturePos;
		o.minExtent = minExtent;
		o.maxExtent = maxExtent;
		o.capPos = capPos;
		o.minWidth = minWidth / 2;
		o.maxWidth = maxWidth / 2;
		o.pointFeatureWidth = pointFeatureWidth / 2;
		o.baseFeatureWidth = baseFeatureWidth / 2;
		return o;
	}
	private prepareRectangleNeedle(frame: RadialGaugeNeedleFrame): void {
		this.prepareNeedleHelper(frame, true, false, false, false);
	}
	private resetFrame(frame: RadialGaugeNeedleFrame): void {
		frame.base.reset();
		frame.baseToFeature.reset();
		frame.baseFeature.reset();
		frame.featureToCap.reset();
		frame.cap.reset();
		frame.capToFeature.reset();
		frame.pointFeature.reset();
		frame.featureToPoint.reset();
		frame.point.reset();
		frame.pointToFeatureUnderside.reset();
		frame.pointFeatureUnderside.reset();
		frame.featureToCapUnderside.reset();
		frame.capUnderside.reset();
		frame.capToFeatureUnderside.reset();
		frame.baseFeatureUnderside.reset();
		frame.featureToBaseUnderside.reset();
		frame.cutout.reset();
		frame.cutoutUnderside.reset();
		frame.circleOverlay.reset();
		frame.circleOverlayUnderside.reset();
		frame.circleUnderlay.reset();
		frame.circleUnderlayUnderside.reset();
		frame.circleOverlayCutout.reset();
		frame.circleOverlayCutoutUnderside.reset();
		frame.circleUnderlayCutout.reset();
		frame.circleUnderlayCutoutUnderside.reset();
	}
	private prepareNoneNeedle(frame: RadialGaugeNeedleFrame): void {
		this.resetFrame(frame);
		let minExtent = 0;
		let maxExtent = 0;
		let baseFeaturePos = 0;
		let pointFeaturePos = 0;
		let capPos = 0;
		let width: number = 0;
		let underWidth = 0;
		let currSeg = frame.base;
		let currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: minExtent, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: minExtent, y: width });
		currSeg = frame.baseToFeature;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: minExtent, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: width });
		currSeg = frame.baseFeature;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: width });
		let capStartXPos: number = capPos;
		let capEndXPos: number = capPos;
		currSeg = frame.featureToCap;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: capStartXPos, y: width });
		currSeg = frame.cap;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: capStartXPos, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: capEndXPos, y: width });
		currSeg = frame.capToFeature;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: capEndXPos, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: width });
		currSeg = frame.pointFeature;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: width });
		currSeg = frame.featureToPoint;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: maxExtent, y: width });
		currSeg = frame.point;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: maxExtent, y: width });
		currPoints.add(<Point>{ $type: Point_$type, x: maxExtent, y: underWidth });
		currSeg = frame.pointToFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: maxExtent, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: underWidth });
		currSeg = frame.pointFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: underWidth });
		currSeg = frame.featureToCapUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: pointFeaturePos, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: capEndXPos, y: underWidth });
		currSeg = frame.capUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: capEndXPos, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: capStartXPos, y: underWidth });
		currSeg = frame.capToFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: capStartXPos, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: underWidth });
		currSeg = frame.baseFeatureUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: underWidth });
		currSeg = frame.featureToBaseUnderside;
		currPoints = currSeg.segmentPoints;
		currPoints.add(<Point>{ $type: Point_$type, x: baseFeaturePos, y: underWidth });
		currPoints.add(<Point>{ $type: Point_$type, x: minExtent, y: underWidth });
	}
}


