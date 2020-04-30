/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, IList$1, IList$1_$type, ICollection$1, ICollection$1_$type, Point_$type, Type, markType, PointUtil } from "./type";
import { Rect } from "./Rect";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { Tuple$2 } from "./Tuple$2";
import { isNaN_, isInfinity } from "./number";

/**
 * @hidden 
 */
export class GeometryUtil extends Base {
	static $t: Type = markType(GeometryUtil, 'GeometryUtil');
	static simplifyAngle(angle: number): number {
		if (isNaN_(angle) || isInfinity(angle)) {
			return angle;
		}
		while (angle > 360) {
			angle -= 360;
		}
		while (angle < 0) {
			angle += 360;
		}
		return angle;
	}
	static angleFromSlope(slope: number): number {
		return Math.atan(slope);
	}
	static slope(point1: Point, point2: Point): number {
		return (point2.y - point1.y) / (point2.x - point1.x);
	}
	static eccentricity(bounds: Rect): number {
		return 1 - Math.pow(bounds.height / 2, 2) / Math.pow(bounds.width / 2, 2);
	}
	static pointOnEllipse(theta: number, eccentricity: number, center: Point, halfHeight: number, extent: number): Point {
		let cos: number = Math.cos(theta);
		let sin: number = Math.sin(theta);
		let r: number = Math.sqrt(halfHeight * halfHeight / (1 - (eccentricity * Math.pow(cos, 2))));
		r *= extent;
		return <Point>{ $type: Point_$type, x: r * cos + center.x, y: r * sin + center.y };
	}
	static findCenter(width: number, height: number, exploded: boolean, angle: number, radius: number): Point {
		let center: Point;
		if (exploded) {
			center = GeometryUtil.findRadialPoint(<Point>{ $type: Point_$type, x: width / 2, y: height / 2 }, angle, radius);
		} else {
			center = <Point>{ $type: Point_$type, x: width / 2, y: height / 2 };
		}
		return center;
	}
	static findRadialPoint(center: Point, angle: number, radius: number): Point {
		angle = angle / 180 * Math.PI;
		let y: number = center.y + radius * Math.sin(angle);
		let x: number = center.x + radius * Math.cos(angle);
		return <Point>{ $type: Point_$type, x: x, y: y };
	}
	static pointAtDistance(p1: Point, p2: Point, distance: number): Point {
		let x3 = p2.x - p1.x;
		let y3 = p2.y - p1.y;
		let length = Math.sqrt(x3 * x3 + y3 * y3);
		x3 = x3 / length * distance;
		y3 = y3 / length * distance;
		return <Point>{ $type: Point_$type, x: p1.x + x3, y: p1.y + y3 };
	}
	static getSegmentLength(p1: Point, p2: Point): number {
		let a = Math.abs(p2.x - p1.x);
		let b = Math.abs(p2.y - p1.y);
		return Math.sqrt(a * a + b * b);
	}
	static getCenterFromArcSegment(startPoint: Point, endPoint: Point, radius: number, isCounter: boolean, isLargeArc: boolean): Point {
		return CoreGeometryUtil.getCenterFromArcSegment(startPoint, endPoint, radius, isCounter, isLargeArc);
	}
	static getAngleTo(center: Point, toPoint: Point): number {
		let radius: number = Math.sqrt(Math.pow(toPoint.x - center.x, 2) + Math.pow(toPoint.y - center.y, 2));
		let angle: number = Math.acos((toPoint.x - center.x) / radius);
		if ((toPoint.y - center.y) < 0) {
			angle = (2 * Math.PI) - angle;
		}
		return angle;
	}
	static getCircleIntersection(startPoint: Point, endPoint: Point, circleCenter: Point, circleRadius: number): Tuple$2<Point, Point> {
		let x1 = startPoint.x - circleCenter.x;
		let y1 = startPoint.y - circleCenter.y;
		let x2 = endPoint.x - circleCenter.x;
		let y2 = endPoint.y - circleCenter.y;
		let dx = x2 - x1;
		let dy = y2 - y1;
		let dr = Math.sqrt(dx * dx + dy * dy);
		let det = x1 * y2 - x2 * y1;
		let radSquared = circleRadius * circleRadius;
		let drSquared = dr * dr;
		let detSquared = det * det;
		let disc = radSquared * drSquared - detSquared;
		if (disc < 0) {
			return new Tuple$2<Point, Point>(Point_$type, Point_$type, <Point>{ $type: Point_$type, x: NaN, y: NaN }, <Point>{ $type: Point_$type, x: NaN, y: NaN });
		}
		let signDy = 1;
		if (dy < 0) {
			signDy = -1;
		}
		let interX1 = (det * dy + signDy * dx * Math.sqrt(disc)) / drSquared;
		let interX2 = (det * dy - signDy * dx * Math.sqrt(disc)) / drSquared;
		let interY1 = (-1 * det * dx + Math.abs(dy) * Math.sqrt(disc)) / drSquared;
		let interY2 = (-1 * det * dx - Math.abs(dy) * Math.sqrt(disc)) / drSquared;
		return new Tuple$2<Point, Point>(Point_$type, Point_$type, <Point>{ $type: Point_$type, x: interX1 + circleCenter.x, y: interY1 + circleCenter.y }, <Point>{ $type: Point_$type, x: interX2 + circleCenter.x, y: interY2 + circleCenter.y });
	}
	static isPointNearLineSegment(targetPoint: Point, startPoint: Point, endPoint: Point, closeness: number): boolean {
		let closeness2 = closeness * closeness;
		let x1 = startPoint.x;
		let y1 = startPoint.y;
		let x2 = endPoint.x;
		let y2 = endPoint.y;
		let x0 = targetPoint.x;
		let y0 = targetPoint.y;
		if (y1 == y2) {
			let yClose = Math.abs(y1 - y0) < closeness;
			let xInRange = x0 >= Math.min(x1, x2) - closeness && x0 <= Math.max(x1, x2) + closeness;
			if (yClose && xInRange) {
				return true;
			} else {
				return false;
			}
		}
		if (x1 == x2) {
			let xClose = Math.abs(x1 - x0) < closeness;
			let yInRange = y0 >= Math.min(y1, y2) - closeness && y0 <= Math.max(y1, y2) + closeness;
			if (xClose && yInRange) {
				return true;
			} else {
				return false;
			}
		}
		let dx = x2 - x1;
		let dy = y2 - y1;
		let segDistance2 = dx * dx + dy * dy;
		if (segDistance2 == 0) {
			return (x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1) < closeness2;
		}
		let t = ((x0 - x1) * dx + (y0 - y1) * dy) / segDistance2;
		t = t < 0 ? 0 : (t > 1 ? 1 : t);
		let xt = x1 + dx * t;
		let yt = y1 + dy * t;
		let dist = (xt - x0) * (xt - x0) + (yt - y0) * (yt - y0);
		if (dist < closeness2) {
			return true;
		}
		return false;
	}
	static isPointNearPolyline(targetPoint: Point, firstPoint: Point, linePoints: IList$1<Point>, closeness: number): boolean {
		let startPoint: Point;
		let endPoint: Point;
		let closeness2 = closeness * closeness;
		let lineCount = linePoints.count;
		if (lineCount == 0) {
			return (targetPoint.x - firstPoint.x) * (targetPoint.x - firstPoint.x) + (targetPoint.y - firstPoint.y) * (targetPoint.y - firstPoint.y) < closeness2;
		}
		let x0 = targetPoint.x;
		let y0 = targetPoint.y;
		for (let i = 0; i < lineCount; i++) {
			if (i == 0) {
				endPoint = linePoints.item(i);
				startPoint = firstPoint;
			} else {
				endPoint = linePoints.item(i);
				startPoint = linePoints.item(i - 1);
			}
			let x1 = startPoint.x;
			let y1 = startPoint.y;
			let x2 = endPoint.x;
			let y2 = endPoint.y;
			if (y1 == y2) {
				let yClose = Math.abs(y1 - y0) < closeness;
				let xInRange = x0 >= Math.min(x1, x2) - closeness && x0 <= Math.max(x1, x2) + closeness;
				if (yClose && xInRange) {
					return true;
				} else {
					continue;
				}
			}
			if (x1 == x2) {
				let xClose = Math.abs(x1 - x0) < closeness;
				let yInRange = y0 >= Math.min(y1, y2) - closeness && y0 <= Math.max(y1, y2) + closeness;
				if (xClose && yInRange) {
					return true;
				} else {
					continue;
				}
			}
			let dx = x2 - x1;
			let dy = y2 - y1;
			let segDistance2 = dx * dx + dy * dy;
			if (segDistance2 == 0) {
				return (x0 - x1) * (x0 - x1) + (y0 - y1) * (y0 - y1) < closeness2;
			}
			let t = ((x0 - x1) * dx + (y0 - y1) * dy) / segDistance2;
			t = t < 0 ? 0 : (t > 1 ? 1 : t);
			let xt = x1 + dx * t;
			let yt = y1 + dy * t;
			let dist = (xt - x0) * (xt - x0) + (yt - y0) * (yt - y0);
			if (dist < closeness2) {
				return true;
			}
		}
		return false;
	}
}


