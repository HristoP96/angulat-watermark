/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, IEnumerator$1, IEnumerator$1_$type, ICollection$1, ICollection$1_$type, IEnumerable$1, IEnumerable$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, fromEnum, Point_$type, Type, markType, PointUtil } from "./type";
import { Flattener } from "./Flattener";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { PointCollection } from "./PointCollection";
import { Clipper } from "./Clipper";
import { isInfinity } from "./number";

/**
 * @hidden 
 */
export class PointCollectionUtil extends Base {
	static $t: Type = markType(PointCollectionUtil, 'PointCollectionUtil');
	static flattenTo(points: IList$1<Point>, list: IList$1<Point>, E: number): void {
		if (list == null) {
			return;
		}
		list.clear();
		if (points.count >= 2) {
			let indices: IList$1<number> = Flattener.flatten3(points.count, (i: number) => points.item(i).x, (i: number) => points.item(i).y, E);
			for (let i of fromEnum<number>(indices)) {
				list.add(points.item(i));
			}
		}
	}
	static getBounds(points: IEnumerable$1<Point>): Rect {
		let xmin: number = Number.POSITIVE_INFINITY;
		let ymin: number = Number.POSITIVE_INFINITY;
		let xmax: number = Number.NEGATIVE_INFINITY;
		let ymax: number = Number.NEGATIVE_INFINITY;
		for (let point of fromEnum<Point>(points)) {
			xmin = Math.min(xmin, point.x);
			ymin = Math.min(ymin, point.y);
			xmax = Math.max(xmax, point.x);
			ymax = Math.max(ymax, point.y);
		}
		if (isInfinity(xmin) || isInfinity(ymin) || isInfinity(ymin) || isInfinity(ymax)) {
			return Rect.empty;
		}
		return new Rect(0, xmin, ymin, xmax - xmin, ymax - ymin);
	}
	static getBounds1(points: IEnumerable$1<IEnumerable$1<Point>>): Rect {
		let result: Rect = Rect.empty;
		for (let ring of fromEnum<IEnumerable$1<Point>>(points)) {
			result.union(PointCollectionUtil.getBounds(ring));
		}
		return result;
	}
	static getBounds2(points: IList$1<Point>): Rect {
		let xmin: number = Number.POSITIVE_INFINITY;
		let ymin: number = Number.POSITIVE_INFINITY;
		let xmax: number = Number.NEGATIVE_INFINITY;
		let ymax: number = Number.NEGATIVE_INFINITY;
		let p: Point;
		for (let i = 0; i < points.count; i++) {
			p = points.item(i);
			xmin = Math.min(xmin, p.x);
			ymin = Math.min(ymin, p.y);
			xmax = Math.max(xmax, p.x);
			ymax = Math.max(ymax, p.y);
		}
		if (isInfinity(xmin) || isInfinity(ymin) || isInfinity(ymin) || isInfinity(ymax)) {
			return Rect.empty;
		}
		return new Rect(0, xmin, ymin, xmax - xmin, ymax - ymin);
	}
	static getBounds3(points: List$1<List$1<Point>>): Rect {
		if (points == null) {
			return Rect.empty;
		}
		let result: Rect = Rect.empty;
		let ring: List$1<Point>;
		for (let i = 0; i < points.count; i++) {
			ring = points._inner[i];
			result.union(PointCollectionUtil.getBounds2(ring));
		}
		return result;
	}
	static getBounds4(points: List$1<PointCollection>): Rect {
		let result: Rect = Rect.empty;
		let ring: PointCollection;
		for (let i = 0; i < points.count; i++) {
			ring = points._inner[i];
			result.union(PointCollectionUtil.getBounds2(ring));
		}
		return result;
	}
	static clipTo(points: IList$1<Point>, list: IList$1<Point>, clipper: Clipper): void {
		let pointCount = points.count;
		for (let i = 0; i < pointCount; i++) {
			clipper.add(points.item(i));
		}
		clipper.target = null;
	}
	static getCentroid(points: IEnumerable$1<Point>): Point {
		let x: number = 0;
		let y: number = 0;
		let c: number = 0;
		for (let point of fromEnum<Point>(points)) {
			x += point.x;
			y += point.y;
			c += 1;
		}
		return <Point>{ $type: Point_$type, x: x / c, y: y / c };
	}
	static toPointCollection(points: IEnumerable$1<Point>): PointCollection {
		let result: PointCollection = new PointCollection(0);
		for (let p of fromEnum<Point>(points)) {
			result.add(p);
		}
		return result;
	}
	static toPointList(points: IEnumerable$1<Point>): List$1<Point> {
		let result: List$1<Point> = new List$1<Point>(Point_$type, 0);
		for (let p of fromEnum<Point>(points)) {
			result.add(p);
		}
		return result;
	}
	static toPointCollections(points: List$1<List$1<Point>>): List$1<PointCollection> {
		let ret: List$1<PointCollection> = new List$1<PointCollection>((<any>PointCollection).$type, 0);
		let pointColl: List$1<Point>;
		let count: number = points.count;
		for (let i = 0; i < count; i++) {
			pointColl = points._inner[i];
			let coll = new PointCollection(1, pointColl);
			ret.add(coll);
		}
		return ret;
	}
}


