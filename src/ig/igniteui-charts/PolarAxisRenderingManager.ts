/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, typeCast, Type, markType, PointUtil } from "igniteui-core/type";
import { PathFigure } from "igniteui-core/PathFigure";
import { Rect } from "igniteui-core/Rect";
import { ViewportUtils } from "./ViewportUtils";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { Size } from "igniteui-core/Size";
import { List$1 } from "igniteui-core/List$1";
import { PathSegment } from "igniteui-core/PathSegment";
import { GeometryCollection } from "igniteui-core/GeometryCollection";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { LineSegment } from "igniteui-core/LineSegment";
import { Geometry } from "igniteui-core/Geometry";
import { LineGeometry } from "igniteui-core/LineGeometry";
import { AxisRenderingParametersBase } from "./AxisRenderingParametersBase";
import { PolarAxisRenderingParameters } from "./PolarAxisRenderingParameters";
import { RadialAxisRenderingParameters } from "./RadialAxisRenderingParameters";
import { RangeInfo } from "./RangeInfo";
import { SweepDirection } from "igniteui-core/SweepDirection";

/**
 * @hidden 
 */
export class PolarAxisRenderingManager extends Base {
	static $t: Type = markType(PolarAxisRenderingManager, 'PolarAxisRenderingManager');
	drawEllipse(radius: number, center: Point, minAngle: number, maxAngle: number, windowRect: Rect, viewportRect: Rect): PathFigure {
		let radiusX: number = ViewportUtils.transformXToViewportLength(radius, windowRect, viewportRect);
		let radiusY: number = ViewportUtils.transformYToViewportLength(radius, windowRect, viewportRect);
		let centerX: number = ViewportUtils.transformXToViewport(center.x, windowRect, viewportRect);
		let centerY: number = ViewportUtils.transformYToViewport(center.y, windowRect, viewportRect);
		if (maxAngle - minAngle < Math.PI && maxAngle - minAngle > 0) {
			let startPoint: Point = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(center.x + radius * Math.cos(minAngle), windowRect, viewportRect), y: ViewportUtils.transformYToViewport(center.y + radius * Math.sin(minAngle), windowRect, viewportRect) };
			let endPoint: Point = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(center.x + radius * Math.cos(maxAngle), windowRect, viewportRect), y: ViewportUtils.transformYToViewport(center.y + radius * Math.sin(maxAngle), windowRect, viewportRect) };
			let pf: PathFigure = new PathFigure();
			pf._startPoint = startPoint;
			pf._isClosed = false;
			pf._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.isLargeArc = false;
				$ret.point = endPoint;
				$ret.size = new Size(1, radiusX, radiusY);
				$ret.sweepDirection = SweepDirection.Clockwise;
				return $ret;
			})()));
			return pf;
		} else {
			let pf1: PathFigure = new PathFigure();
			pf1._startPoint = <Point>{ $type: Point_$type, x: centerX, y: centerY - radiusY };
			pf1._isClosed = true;
			pf1._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.isLargeArc = false;
				$ret.point = <Point>{ $type: Point_$type, x: centerX, y: centerY + radiusY };
				$ret.size = new Size(1, radiusX, radiusY);
				$ret.sweepDirection = SweepDirection.Clockwise;
				return $ret;
			})()));
			pf1._segments.add(((() => {
				let $ret = new ArcSegment();
				$ret.isLargeArc = false;
				$ret.point = <Point>{ $type: Point_$type, x: centerX, y: centerY - radiusY };
				$ret.size = new Size(1, radiusX, radiusY);
				$ret.sweepDirection = SweepDirection.Clockwise;
				return $ret;
			})()));
			return pf1;
		}
	}
	concentricStrip(geometry: GeometryCollection, radius0: number, radius1: number, viewportRect: Rect, windowRect: Rect, center: Point, minAngle: number, maxAngle: number): void {
		let minRadius: number = Math.min(radius0, radius1);
		let maxRadius: number = Math.max(radius0, radius1);
		let strip: PathGeometry = new PathGeometry();
		let innerFigure: PathFigure = null;
		let connector1: LineSegment = null;
		let outerFigure: PathFigure = null;
		let connector2: LineSegment = null;
		if (minRadius > 0) {
			innerFigure = this.drawEllipse(minRadius, center, minAngle, maxAngle, windowRect, viewportRect);
			if (maxAngle - minAngle < Math.PI && maxAngle - minAngle > 0) {
				let seg: ArcSegment = typeCast<ArcSegment>((<any>ArcSegment).$type, innerFigure._segments._inner[0]);
				if (seg != null) {
					let startPoint: Point = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(center.x + maxRadius * Math.cos(maxAngle), windowRect, viewportRect), y: ViewportUtils.transformYToViewport(center.y + maxRadius * Math.sin(maxAngle), windowRect, viewportRect) };
					connector1 = ((() => {
						let $ret = new LineSegment(1);
						$ret.point = startPoint;
						return $ret;
					})());
				}
			}
		}
		if (maxRadius > 0) {
			outerFigure = this.drawEllipse(maxRadius, center, minAngle, maxAngle, windowRect, viewportRect);
		}
		if (minRadius > 0) {
			if (maxAngle - minAngle < Math.PI && maxAngle - minAngle > 0) {
				let swap: Point = outerFigure._startPoint;
				let seg1: ArcSegment = typeCast<ArcSegment>((<any>ArcSegment).$type, outerFigure._segments._inner[0]);
				if (seg1 != null) {
					outerFigure._startPoint = seg1.point;
					seg1.point = swap;
					seg1.sweepDirection = SweepDirection.Counterclockwise;
					let startPoint1: Point = <Point>{ $type: Point_$type, x: ViewportUtils.transformXToViewport(center.x + minRadius * Math.cos(minAngle), windowRect, viewportRect), y: ViewportUtils.transformYToViewport(center.y + minRadius * Math.sin(minAngle), windowRect, viewportRect) };
					connector2 = ((() => {
						let $ret = new LineSegment(1);
						$ret.point = startPoint1;
						return $ret;
					})());
				}
			}
		}
		if (connector1 != null && connector2 != null) {
			innerFigure._segments.add(connector1);
			let seg2: PathSegment = outerFigure._segments._inner[0];
			outerFigure._segments.remove(seg2);
			innerFigure._segments.add(seg2);
			innerFigure._segments.add(connector2);
			innerFigure._isClosed = true;
			strip.figures.add(innerFigure);
		} else {
			if (innerFigure != null) {
				strip.figures.add(innerFigure);
				this.reverseArcFigure(outerFigure);
			}
			if (outerFigure != null) {
				strip.figures.add(outerFigure);
			}
		}
		geometry.add(strip);
	}
	private reverseArcFigure(figure: PathFigure): void {
		if (figure._segments.count > 1) {
			let seg1: ArcSegment = typeCast<ArcSegment>((<any>ArcSegment).$type, figure._segments._inner[0]);
			let seg2: ArcSegment = typeCast<ArcSegment>((<any>ArcSegment).$type, figure._segments._inner[1]);
			figure._segments._inner[0] = seg2;
			figure._segments._inner[1] = seg1;
			let startPoint: Point = seg2.point;
			let seg2Point: Point = figure._startPoint;
			let seg1Point: Point = seg1.point;
			figure._startPoint = startPoint;
			seg2.point = seg1Point;
			seg1.point = seg2Point;
			seg1.sweepDirection = SweepDirection.Counterclockwise;
			seg2.sweepDirection = SweepDirection.Counterclockwise;
		} else {
			let swap: Point = figure._startPoint;
			let seg: ArcSegment = typeCast<ArcSegment>((<any>ArcSegment).$type, figure._segments._inner[0]);
			if (seg != null) {
				figure._startPoint = seg.point;
				seg.point = swap;
				seg.sweepDirection = SweepDirection.Counterclockwise;
			}
		}
	}
	concentricLine(geometry: GeometryCollection, radius: number, viewportRect: Rect, windowRect: Rect, center: Point, startAngle: number, endAngle: number): void {
		if (radius > 0) {
			let line: PathGeometry = new PathGeometry();
			line.figures.add(this.drawEllipse(radius, center, startAngle, endAngle, windowRect, viewportRect));
			geometry.add(line);
		}
	}
	radialStrip(geometry: GeometryCollection, startAngle: number, endAngle: number, viewportRect: Rect, windowRect: Rect, minLength: number, maxLength: number, center: Point): void {
		let angleMin: number = Math.min(startAngle, endAngle);
		let angleMax: number = Math.max(startAngle, endAngle);
		let isLargeArc: boolean = false;
		if (angleMax - angleMin > Math.PI) {
			isLargeArc = true;
		}
		let cosAngleMin: number = Math.cos(angleMin);
		let sinAngleMin: number = Math.sin(angleMin);
		let startXmin: number = center.x + cosAngleMin * minLength;
		let startYmin: number = center.y + sinAngleMin * minLength;
		let endXmin: number = center.x + cosAngleMin * maxLength;
		let endYmin: number = center.y + sinAngleMin * maxLength;
		let cosAngleMax: number = Math.cos(angleMax);
		let sinAngleMax: number = Math.sin(angleMax);
		let startXmax: number = center.x + cosAngleMax * minLength;
		let startYmax: number = center.y + sinAngleMax * minLength;
		let endXmax: number = center.x + cosAngleMax * maxLength;
		let endYmax: number = center.y + sinAngleMax * maxLength;
		startXmin = ViewportUtils.transformXToViewport(startXmin, windowRect, viewportRect);
		startYmin = ViewportUtils.transformYToViewport(startYmin, windowRect, viewportRect);
		endXmin = ViewportUtils.transformXToViewport(endXmin, windowRect, viewportRect);
		endYmin = ViewportUtils.transformYToViewport(endYmin, windowRect, viewportRect);
		startXmax = ViewportUtils.transformXToViewport(startXmax, windowRect, viewportRect);
		startYmax = ViewportUtils.transformYToViewport(startYmax, windowRect, viewportRect);
		endXmax = ViewportUtils.transformXToViewport(endXmax, windowRect, viewportRect);
		endYmax = ViewportUtils.transformYToViewport(endYmax, windowRect, viewportRect);
		let pf: PathFigure = new PathFigure();
		pf._startPoint = <Point>{ $type: Point_$type, x: startXmin, y: startYmin };
		pf._isClosed = true;
		pf._segments.add(((() => {
			let $ret = new LineSegment(1);
			$ret.point = <Point>{ $type: Point_$type, x: endXmin, y: endYmin };
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: endXmax, y: endYmax };
			$ret.size = new Size(1, ViewportUtils.transformXToViewportLength(maxLength, windowRect, viewportRect), ViewportUtils.transformYToViewportLength(maxLength, windowRect, viewportRect));
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.isLargeArc = isLargeArc;
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new LineSegment(1);
			$ret.point = <Point>{ $type: Point_$type, x: startXmax, y: startYmax };
			return $ret;
		})()));
		pf._segments.add(((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: startXmin, y: startYmin };
			$ret.size = new Size(1, ViewportUtils.transformXToViewportLength(minLength, windowRect, viewportRect), ViewportUtils.transformYToViewportLength(minLength, windowRect, viewportRect));
			$ret.sweepDirection = SweepDirection.Counterclockwise;
			$ret.isLargeArc = isLargeArc;
			return $ret;
		})()));
		let pg: PathGeometry = new PathGeometry();
		pg.figures.add(pf);
		geometry.add(pg);
	}
	radialLine(geometry: GeometryCollection, angle: number, viewportRect: Rect, windowRect: Rect, minLength: number, maxLength: number, center: Point): void {
		let radialLine: LineGeometry = new LineGeometry();
		let cosX: number = Math.cos(angle);
		let sinX: number = Math.sin(angle);
		let startX: number = center.x + cosX * minLength;
		let startY: number = center.y + sinX * minLength;
		let endX: number = center.x + cosX * maxLength;
		let endY: number = center.y + sinX * maxLength;
		startX = ViewportUtils.transformXToViewport(startX, windowRect, viewportRect);
		startY = ViewportUtils.transformYToViewport(startY, windowRect, viewportRect);
		endX = ViewportUtils.transformXToViewport(endX, windowRect, viewportRect);
		endY = ViewportUtils.transformYToViewport(endY, windowRect, viewportRect);
		radialLine.startPoint = <Point>{ $type: Point_$type, x: startX, y: startY };
		radialLine.endPoint = <Point>{ $type: Point_$type, x: endX, y: endY };
		geometry.add(radialLine);
	}
	inXBand(center: Point, bounds: Rect): boolean {
		return center.x >= bounds.left && center.x <= bounds.right;
	}
	inYBand(center: Point, bounds: Rect): boolean {
		return center.y >= bounds.top && center.y <= bounds.bottom;
	}
	closestCorner(center: Point, bounds: Rect): number {
		let dist1: number = Math.sqrt(Math.pow(center.x - bounds.left, 2) + Math.pow(center.y - bounds.top, 2));
		let dist2: number = Math.sqrt(Math.pow(center.x - bounds.right, 2) + Math.pow(center.y - bounds.top, 2));
		let dist3: number = Math.sqrt(Math.pow(center.x - bounds.right, 2) + Math.pow(center.y - bounds.bottom, 2));
		let dist4: number = Math.sqrt(Math.pow(center.x - bounds.left, 2) + Math.pow(center.y - bounds.bottom, 2));
		return Math.min(dist1, Math.min(dist2, Math.min(dist3, dist4)));
	}
	furthestCorner(center: Point, bounds: Rect): number {
		let dist1: number = Math.sqrt(Math.pow(center.x - bounds.left, 2) + Math.pow(center.y - bounds.top, 2));
		let dist2: number = Math.sqrt(Math.pow(center.x - bounds.right, 2) + Math.pow(center.y - bounds.top, 2));
		let dist3: number = Math.sqrt(Math.pow(center.x - bounds.right, 2) + Math.pow(center.y - bounds.bottom, 2));
		let dist4: number = Math.sqrt(Math.pow(center.x - bounds.left, 2) + Math.pow(center.y - bounds.bottom, 2));
		return Math.max(dist1, Math.max(dist2, Math.max(dist3, dist4)));
	}
	getClosestRadiusValue(windowRect: Rect): number {
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		if (this.inXBand(center, windowRect) && this.inYBand(center, windowRect)) {
			return 0;
		}
		if (this.inXBand(center, windowRect)) {
			if (center.y < windowRect.top) {
				return windowRect.top - center.y;
			} else {
				return center.y - windowRect.bottom;
			}
		}
		if (this.inYBand(center, windowRect)) {
			if (center.x < windowRect.left) {
				return windowRect.left - center.x;
			} else {
				return center.x - windowRect.right;
			}
		}
		return this.closestCorner(center, windowRect);
	}
	getFurthestRadiusValue(windowRect: Rect): number {
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		return this.furthestCorner(center, windowRect);
	}
	protected getAngleTo(center: Point, toPoint: Point): number {
		let radius: number = Math.sqrt(Math.pow(toPoint.x - center.x, 2) + Math.pow(toPoint.y - center.y, 2));
		let angle: number = Math.acos((toPoint.x - center.x) / radius);
		if ((toPoint.y - center.y) < 0) {
			angle = (2 * Math.PI) - angle;
		}
		return angle;
	}
	private lineCheck(maxValueRadiusPoint: Point, rectPoint: Point): number {
		return ((maxValueRadiusPoint.y - 0.5) * rectPoint.x) + ((0.5 - maxValueRadiusPoint.x) * rectPoint.y) + ((maxValueRadiusPoint.x * 0.5) - (0.5 * maxValueRadiusPoint.y));
	}
	getMinMaxAngle(windowRect: Rect, minAngle: number, maxAngle: number): { p1: number; p2: number; } {
		let center: Point = <Point>{ $type: Point_$type, x: 0.5, y: 0.5 };
		if (this.inXBand(center, windowRect) && this.inYBand(center, windowRect)) {
			minAngle = 0;
			maxAngle = Math.PI * 2;
			return {
				p1: minAngle,
				p2: maxAngle

			};
		}
		let angle1: number = this.getAngleTo(center, <Point>{ $type: Point_$type, x: windowRect.left, y: windowRect.top });
		let angle2: number = this.getAngleTo(center, <Point>{ $type: Point_$type, x: windowRect.right, y: windowRect.top });
		let angle3: number = this.getAngleTo(center, <Point>{ $type: Point_$type, x: windowRect.right, y: windowRect.bottom });
		let angle4: number = this.getAngleTo(center, <Point>{ $type: Point_$type, x: windowRect.left, y: windowRect.bottom });
		if (this.inYBand(center, windowRect) && windowRect.left > center.x) {
			minAngle = angle1;
			maxAngle = 2 * Math.PI + angle4;
			return {
				p1: minAngle,
				p2: maxAngle

			};
		}
		minAngle = Math.min(angle1, Math.min(angle2, Math.min(angle3, angle4)));
		maxAngle = Math.max(angle1, Math.max(angle2, Math.max(angle3, angle4)));
		return {
			p1: minAngle,
			p2: maxAngle

		};
	}
	determineView(windowRect: Rect, renderingParams: AxisRenderingParametersBase, actualMinimumValue: number, actualMaximumValue: number, isInverted: boolean, getUnscaledAngle: (arg1: number) => number, resolution: number): void {
		let minAngle: number;
		let maxAngle: number;
		let $ret = this.getMinMaxAngle(windowRect, minAngle, maxAngle);
		minAngle = $ret.p1;
		maxAngle = $ret.p2;
		let trueMinAngle: number = Math.min(minAngle, maxAngle);
		let trueMaxAngle: number = Math.max(minAngle, maxAngle);
		if (typeCast<PolarAxisRenderingParameters>((<any>PolarAxisRenderingParameters).$type, renderingParams) !== null) {
			(<PolarAxisRenderingParameters>renderingParams).minAngle = trueMinAngle;
			(<PolarAxisRenderingParameters>renderingParams).maxAngle = trueMaxAngle;
		} else if (typeCast<RadialAxisRenderingParameters>((<any>RadialAxisRenderingParameters).$type, renderingParams) !== null) {
			(<RadialAxisRenderingParameters>renderingParams).minAngle = trueMinAngle;
			(<RadialAxisRenderingParameters>renderingParams).maxAngle = trueMaxAngle;
		}
		if (minAngle == 0 && maxAngle == Math.PI * 2) {
			let visibleMinimum: number = actualMinimumValue;
			let visibleMaximum: number = actualMaximumValue;
			let trueVisibleMinimum: number = Math.min(visibleMinimum, visibleMaximum);
			let trueVisibleMaximum: number = Math.max(visibleMinimum, visibleMaximum);
			renderingParams.rangeInfos.add(((() => {
				let $ret = new RangeInfo();
				$ret.visibleMinimum = trueVisibleMinimum;
				$ret.visibleMaximum = trueVisibleMaximum;
				$ret.resolution = resolution;
				return $ret;
			})()));
			return;
		} else {
			if (maxAngle > Math.PI * 2) {
				maxAngle = maxAngle - Math.PI * 2;
			}
			let visibleMinimum1: number = getUnscaledAngle(minAngle);
			let visibleMaximum1: number = getUnscaledAngle(maxAngle);
			if (visibleMinimum1 < actualMinimumValue || visibleMinimum1 > actualMaximumValue) {
				visibleMinimum1 = getUnscaledAngle(minAngle + Math.PI * 2);
			}
			if (visibleMaximum1 < actualMinimumValue || visibleMaximum1 > actualMaximumValue) {
				visibleMaximum1 = getUnscaledAngle(maxAngle + Math.PI * 2);
			}
			let trueVisibleMinimum1: number = Math.min(visibleMinimum1, visibleMaximum1);
			let trueVisibleMaximum1: number = Math.max(visibleMinimum1, visibleMaximum1);
			if ((!isInverted && visibleMinimum1 > visibleMaximum1) || (isInverted && visibleMinimum1 < visibleMaximum1)) {
				let range1: number = (actualMaximumValue - trueVisibleMaximum1);
				let range2: number = (trueVisibleMinimum1 - actualMinimumValue);
				renderingParams.rangeInfos.add(((() => {
					let $ret = new RangeInfo();
					$ret.visibleMinimum = trueVisibleMaximum1;
					$ret.visibleMaximum = actualMaximumValue;
					$ret.resolution = (range1 / (range1 + range2)) * resolution;
					return $ret;
				})()));
				renderingParams.rangeInfos.add(((() => {
					let $ret = new RangeInfo();
					$ret.visibleMinimum = actualMinimumValue;
					$ret.visibleMaximum = trueVisibleMinimum1;
					$ret.resolution = (range2 / (range1 + range2)) * resolution;
					return $ret;
				})()));
			} else {
				renderingParams.rangeInfos.add(((() => {
					let $ret = new RangeInfo();
					$ret.visibleMinimum = trueVisibleMinimum1;
					$ret.visibleMaximum = trueVisibleMaximum1;
					$ret.resolution = resolution;
					return $ret;
				})()));
			}
		}
	}
}


