/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "./type";
import { Rect } from "./Rect";
import { Size } from "./Size";
import { List$1 } from "./List$1";
import { CoreGeometryUtil } from "./CoreGeometryUtil";
import { MathUtil } from "./MathUtil";

/**
 * @hidden 
 */
export class RectUtil extends Base {
	static $t: Type = markType(RectUtil, 'RectUtil');
	static getCenter(rect: Rect): Point {
		if (rect.isEmpty) {
			return <Point>{ $type: Point_$type, x: NaN, y: NaN };
		}
		return <Point>{ $type: Point_$type, x: 0.5 * (rect.left + rect.right), y: 0.5 * (rect.bottom + rect.top) };
	}
	static getArea(rect: Rect): number {
		if (rect.isEmpty) {
			return 0;
		}
		return rect.width * rect.height;
	}
	static duplicate(rect: Rect): Rect {
		if (rect.isEmpty) {
			return rect;
		}
		return new Rect(0, rect.left, rect.top, rect.width, rect.height);
	}
	static getLeader(rect: Rect, anchor: Point): Point {
		if (rect.containsPoint(anchor)) {
			return anchor;
		}
		let C: Point = <Point>{ $type: Point_$type, x: rect.left + 0.5 * rect.width, y: rect.top + 0.5 * rect.height };
		let D: Point = <Point>{ $type: Point_$type, x: anchor.x - C.x, y: anchor.y - C.y };
		let p: number;
		if (D.x != 0) {
			p = (rect.left - C.x) / D.x;
			let y: number = C.y + p * D.y;
			if (y > rect.top && y < rect.bottom) {
				return p > 0 ? <Point>{ $type: Point_$type, x: rect.left, y: y } : <Point>{ $type: Point_$type, x: rect.right, y: C.y - p * D.y };
			}
		}
		p = (rect.top - C.y) / D.y;
		let x: number = C.x + p * D.x;
		return p > 0 ? <Point>{ $type: Point_$type, x: x, y: rect.top } : <Point>{ $type: Point_$type, x: C.x - p * D.x, y: rect.bottom };
	}
	static getDistanceSquared1(rect: Rect, pt: Point): number {
		if (rect.isEmpty) {
			return NaN;
		}
		return RectUtil.getDistanceSquared(rect, pt.x, pt.y);
	}
	static getDistanceSquared2(rect: Rect, rc: Rect): number {
		if (rect.isEmpty) {
			return Number.POSITIVE_INFINITY;
		}
		let d2: number = RectUtil.getDistanceSquared(rect, rc.left, rc.top);
		if (d2 > 0) {
			d2 = Math.min(d2, RectUtil.getDistanceSquared(rect, rc.left, rc.bottom));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, RectUtil.getDistanceSquared(rect, rc.right, rc.bottom));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, RectUtil.getDistanceSquared(rect, rc.right, rc.top));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, RectUtil.getDistanceSquared(rc, rect.left, rect.top));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, RectUtil.getDistanceSquared(rc, rect.left, rect.bottom));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, RectUtil.getDistanceSquared(rc, rect.right, rect.bottom));
		}
		if (d2 > 0) {
			d2 = Math.min(d2, RectUtil.getDistanceSquared(rc, rect.right, rect.top));
		}
		return d2;
	}
	private static getDistanceSquared(rc: Rect, X: number, Y: number): number {
		let vs: number = X - rc.left;
		let vt: number = Y - rc.top;
		let s: number = rc.width * vs;
		let t: number = rc.height * vt;
		if (s > 0) {
			let s0: number = rc.width * rc.width;
			if (s < s0) {
				vs -= (s / s0) * rc.width;
			} else {
				vs -= rc.width;
			}
		}
		if (t > 0) {
			let t0: number = rc.height * rc.height;
			if (t < t0) {
				vt -= (t / t0) * rc.height;
			} else {
				vt -= rc.height;
			}
		}
		return vs * vs + vt * vt;
	}
	static contains(rect: Rect, rc: Rect): boolean {
		if (rect.isEmpty || rc.isEmpty) {
			return false;
		}
		if (rect.left > rc.left) {
			return false;
		}
		if (rect.right < rc.right) {
			return false;
		}
		if (rect.top > rc.top) {
			return false;
		}
		if (rect.bottom < rc.bottom) {
			return false;
		}
		return true;
	}
	static intersectsWith(rect: Rect, rc: Rect): boolean {
		if (rect.isEmpty || rc.isEmpty) {
			return false;
		}
		if (rect.right < rc.left) {
			return false;
		}
		if (rect.left > rc.right) {
			return false;
		}
		if (rect.top > rc.bottom) {
			return false;
		}
		if (rect.bottom < rc.top) {
			return false;
		}
		return true;
	}
	static intersectionArea(rect: Rect, rc: Rect): number {
		if (rect.isEmpty || rc.isEmpty) {
			return 0;
		}
		let width: number = Math.min(rect.right, rc.right) - Math.max(rect.left, rc.left);
		if (width <= 0) {
			return 0;
		}
		let height: number = Math.min(rect.bottom, rc.bottom) - Math.max(rect.top, rc.top);
		if (height <= 0) {
			return 0;
		}
		return width * height;
	}
	static getInflated(rect: Rect, width: number, height: number): Rect {
		if (rect.isEmpty) {
			return rect;
		}
		return new Rect(0, rect.x - width, rect.y - height, Math.max(0, rect.width + 2 * width), Math.max(0, rect.height + 2 * height));
	}
	static inflateBy(rect: Rect, dx: number, dy: number): Rect {
		rect.x = rect.x - dx;
		rect.y = rect.y - dy;
		let width: number = rect.width + 2 * dx;
		let height: number = rect.height + 2 * dy;
		rect.width = width > 1 ? width : 1;
		rect.height = height > 1 ? height : 1;
		return rect;
	}
	static inflate1(rect: Rect, dx: number, dy: number): Rect {
		rect.x = rect.x - dx;
		rect.y = rect.y - dy;
		let width: number = rect.width + 2 * dx;
		let height: number = rect.height + 2 * dy;
		rect.width = width > 1 ? width : 1;
		rect.height = height > 1 ? height : 1;
		return rect;
	}
	static inflate(rect: Rect, thickness: number): Rect {
		let newX: number = rect.x - thickness;
		let newY: number = rect.y - thickness;
		let width: number = rect.width + thickness + thickness;
		let height: number = rect.height + thickness + thickness;
		let newWidth: number = width > 0 ? width : 0;
		let newHeight: number = height > 0 ? height : 0;
		return new Rect(0, newX, newY, newWidth, newHeight);
	}
	static round(rect: Rect): Rect {
		rect.x = Math.round(rect.x);
		rect.y = Math.round(rect.y);
		rect.width = Math.round(rect.width);
		rect.height = Math.round(rect.height);
		return rect;
	}
	static isNull(rect: Rect): boolean {
		return rect.x == 0 && rect.y == 0 && rect.width == 0 && rect.height == 0;
	}
	static size(rect: Rect): Size {
		let value = new Size(1, rect.width, rect.height);
		return value;
	}
	static normalize(current: Rect, rect: Rect): Rect {
		let normalizeRect = RectUtil.normalize1(current, RectUtil.size(rect));
		return normalizeRect;
	}
	static normalize1(current: Rect, size: Size): Rect {
		let normalizeRect = current;
		normalizeRect.x = current.x / size.width;
		normalizeRect.y = current.y / size.height;
		normalizeRect.width = current.width / size.width;
		normalizeRect.height = current.height / size.height;
		return normalizeRect;
	}
	static getTopLeft(rect: Rect): Point {
		let value = <Point>{ $type: Point_$type, x: rect.x, y: rect.y };
		return value;
	}
	static getTopRight(rect: Rect): Point {
		let value = <Point>{ $type: Point_$type, x: rect.x + rect.width, y: rect.y };
		return value;
	}
	static getBottomLeft(rect: Rect): Point {
		let value = <Point>{ $type: Point_$type, x: rect.x, y: rect.y + rect.height };
		return value;
	}
	static getBottomRight(rect: Rect): Point {
		let value = <Point>{ $type: Point_$type, x: rect.x + rect.width, y: rect.y + rect.height };
		return value;
	}
	static getCorners(rect: Rect): List$1<Point> {
		let points = ((() => {
			let $ret = new List$1<Point>(Point_$type, 0);
			$ret.add(RectUtil.getTopLeft(rect));
			$ret.add(RectUtil.getTopRight(rect));
			$ret.add(RectUtil.getBottomRight(rect));
			$ret.add(RectUtil.getBottomLeft(rect));
			return $ret;
		})());
		return points;
	}
	static rotateAboutCenter(rect: Rect, angle: number): Rect {
		angle = CoreGeometryUtil.simplifyAngle(angle);
		if (angle == 0 || angle == 180) {
			return new Rect(0, rect.left, rect.top, rect.width, rect.height);
		}
		let center = RectUtil.getCenter(rect);
		if (angle == 90 || angle == 270) {
			let halfHeight = rect.height / 2;
			let halfWidth = rect.width / 2;
			return new Rect(0, center.x - halfHeight, center.y - halfWidth, rect.height, rect.width);
		}
		return RectUtil.rotateAboutPoint(rect, center.x, center.y, angle);
	}
	static rotateAboutPoint(rect: Rect, x: number, y: number, angle: number): Rect {
		let points = RectUtil.getCorners(rect);
		let angleRadians = MathUtil.radians(angle);
		let cos = Math.cos(angleRadians);
		let sin = Math.sin(angleRadians);
		let top = 1.7976931348623157E+308;
		let left = 1.7976931348623157E+308;
		let right = -1.7976931348623157E+308;
		let bottom = -1.7976931348623157E+308;
		let p: Point;
		for (let i = 0; i < points.count; i++) {
			p = points._inner[i];
			let rotatedX = (cos * (p.x - x) - sin * (p.y - y) + x);
			let rotatedY = (sin * (p.x - x) + cos * (p.y - y) + y);
			top = Math.min(top, rotatedY);
			left = Math.min(left, rotatedX);
			right = Math.max(right, rotatedX);
			bottom = Math.max(bottom, rotatedY);
		}
		let ret = new Rect(0, left, top, right - left, bottom - top);
		return ret;
	}
}


