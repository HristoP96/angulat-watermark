/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { PathFigure } from "igniteui-core/PathFigure";
import { PathSegment } from "igniteui-core/PathSegment";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PointCollection } from "igniteui-core/PointCollection";
import { Size } from "igniteui-core/Size";
import { InterpolationUtil } from "igniteui-core/InterpolationUtil";
import { SweepDirection } from "igniteui-core/SweepDirection";

/**
 * @hidden 
 */
export class MorphSegment extends Base {
	static $t: Type = markType(MorphSegment, 'MorphSegment');
	constructor() {
		super();
		this.segmentPoints = new List$1<Point>(Point_$type, 0);
		this.tweenPoints = new List$1<Point>(Point_$type, 0);
	}
	segmentPoints: List$1<Point> = null;
	tweenPoints: List$1<Point> = null;
	isArcPhase: boolean = false;
	arcRadius: number = 0;
	isTween: boolean = false;
	hasTweenPoints: boolean = false;
	isLargeArc: boolean = false;
	isClockwise: boolean = false;
	generateTween(otherArc: number): void {
		this.tweenPoints.clear();
		let numPoints = 20;
		if (this.isArcPhase) {
			let p: number;
			let startPoint: Point;
			let endPoint: Point;
			if (this.segmentPoints.count == 0) {
				startPoint = <Point>{ $type: Point_$type, x: 0, y: 0 };
				endPoint = <Point>{ $type: Point_$type, x: 0, y: 0 };
			} else {
				startPoint = this.segmentPoints._inner[0];
				endPoint = this.segmentPoints._inner[1];
			}
			let center = GeometryUtil.getCenterFromArcSegment(startPoint, endPoint, this.arcRadius, !this.isClockwise, this.isLargeArc);
			let startAngle = GeometryUtil.getAngleTo(center, startPoint);
			let endAngle = GeometryUtil.getAngleTo(center, endPoint);
			while (this.isClockwise && endAngle < startAngle) {
				endAngle += Math.PI * 2;
			}
			while (!this.isClockwise && endAngle > startAngle) {
				endAngle -= Math.PI * 2;
			}
			let currAngle: number = 0;
			for (let i = 0; i < numPoints; i++) {
				p = i / <number>numPoints;
				if (this.isClockwise) {
					currAngle = startAngle + (endAngle - startAngle) * p;
				} else {
					currAngle = startAngle - (startAngle - endAngle) * p;
				}
				this.tweenPoints.add(<Point>{ $type: Point_$type, x: center.x + Math.cos(currAngle) * this.arcRadius, y: center.y + Math.sin(currAngle) * this.arcRadius });
			}
		} else {
			let p1: number;
			let startPoint1: Point;
			let endPoint1: Point;
			if (this.segmentPoints.count == 0) {
				startPoint1 = <Point>{ $type: Point_$type, x: 0, y: 0 };
				endPoint1 = <Point>{ $type: Point_$type, x: 0, y: 0 };
			} else {
				startPoint1 = this.segmentPoints._inner[0];
				endPoint1 = this.segmentPoints._inner[1];
			}
			let startX: number = startPoint1.x;
			let startY: number = startPoint1.y;
			let endX: number = endPoint1.x;
			let endY: number = endPoint1.y;
			for (let i1 = 0; i1 < numPoints; i1++) {
				p1 = i1 / <number>numPoints;
				this.tweenPoints.add(<Point>{ $type: Point_$type, x: startX + (endX - startX) * p1, y: startY + (endY - startY) * p1 });
			}
		}
		this.hasTweenPoints = true;
	}
	renderSegment(lastPoint: Point, pf: PathFigure, radius: number, centerX: number, centerY: number): Point {
		let segment: MorphSegment = this;
		let seg: PathSegment = null;
		let segPoints = segment.segmentPoints;
		let segmentPointsCount = segPoints.count;
		if (segmentPointsCount == 0) {
			return lastPoint;
		}
		if (pf._segments.count == 0) {
			let startPoint = segPoints._inner[0];
			pf._startPoint = <Point>{ $type: Point_$type, x: centerX + radius * startPoint.x, y: centerY + radius * startPoint.y };
		}
		if (segment.isArcPhase) {
			if (segmentPointsCount > 1) {
				let arc: ArcSegment = new ArcSegment();
				seg = arc;
				let endPoint = segPoints._inner[1];
				arc.point = <Point>{ $type: Point_$type, x: centerX + radius * endPoint.x, y: centerY + radius * endPoint.y };
				arc.isLargeArc = segment.isLargeArc;
				arc.sweepDirection = segment.isClockwise ? SweepDirection.Clockwise : SweepDirection.Counterclockwise;
				arc.size = new Size(1, segment.arcRadius * radius, segment.arcRadius * radius);
				lastPoint = arc.point;
			}
		} else {
			let pl: PolyLineSegment = new PolyLineSegment();
			seg = pl;
			if (segmentPointsCount > 1) {
				let currPoint: Point;
				let pts: PointCollection = pl._points;
				for (let i = 1; i < segmentPointsCount; i++) {
					currPoint = segPoints._inner[i];
					pts.add(<Point>{ $type: Point_$type, x: centerX + radius * currPoint.x, y: centerY + radius * currPoint.y });
				}
				lastPoint = pl._points._inner[pl._points.count - 1];
			}
		}
		pf._segments.add(seg);
		return lastPoint;
	}
	interpolateSegment(p: number, previous: MorphSegment, next: MorphSegment): void {
		let target = this;
		let minPoints: List$1<Point> = previous.segmentPoints;
		let minIsRaster: boolean = false;
		let maxPoints: List$1<Point> = next.segmentPoints;
		let maxIsRaster: boolean = false;
		if (minPoints.count == 0 && maxPoints.count == 0) {
			return;
		}
		target.isArcPhase = false;
		target.isTween = false;
		target.hasTweenPoints = false;
		target.isLargeArc = false;
		target.isClockwise = false;
		if (previous.isTween) {
			minIsRaster = true;
		}
		if (next.isTween) {
			maxIsRaster = true;
		}
		if (previous.isArcPhase != next.isArcPhase || previous.isTween || next.isTween || previous.isLargeArc != next.isLargeArc || previous.isClockwise != next.isClockwise) {
			minIsRaster = true;
			maxIsRaster = true;
			target.isTween = true;
		}
		if (minIsRaster && !previous.isTween) {
			if (!previous.hasTweenPoints) {
				previous.generateTween(next.arcRadius);
			}
			minPoints = previous.tweenPoints;
		}
		if (maxIsRaster && !next.isTween) {
			if (!next.hasTweenPoints) {
				next.generateTween(previous.arcRadius);
			}
			maxPoints = next.tweenPoints;
		}
		if (previous.isTween) {
			minPoints = previous.tweenPoints;
		}
		if (next.isTween) {
			maxPoints = next.tweenPoints;
		}
		target.tweenPoints.clear();
		if (previous.isArcPhase && next.isArcPhase) {
			target.isArcPhase = true;
		}
		InterpolationUtil.interpolatePoints(target.segmentPoints, p, minPoints, maxPoints);
		if (target.isTween) {
			let point: Point;
			let count: number = target.segmentPoints.count;
			for (let i = 0; i < count; i++) {
				point = target.segmentPoints._inner[i];
				target.tweenPoints.add(<Point>{ $type: Point_$type, x: point.x, y: point.y });
			}
			target.hasTweenPoints = true;
		}
		if (previous.isLargeArc == next.isLargeArc) {
			target.isLargeArc = next.isLargeArc;
		}
		if (previous.isClockwise == next.isClockwise) {
			target.isClockwise = next.isClockwise;
		}
		if (target.isArcPhase) {
			target.arcRadius = previous.arcRadius + (next.arcRadius - previous.arcRadius) * p;
		}
	}
	reset(): void {
		this.segmentPoints.clear();
		this.tweenPoints.clear();
		this.isTween = false;
		this.hasTweenPoints = false;
		this.isArcPhase = false;
	}
}


