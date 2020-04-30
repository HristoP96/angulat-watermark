/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { PathFigure } from "igniteui-core/PathFigure";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { Size } from "igniteui-core/Size";
import { List$1 } from "igniteui-core/List$1";
import { PathSegment } from "igniteui-core/PathSegment";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { LineSegment } from "igniteui-core/LineSegment";
import { GeometryUtil } from "igniteui-core/GeometryUtil";
import { InterpolationMode } from "igniteui-core/InterpolationMode";
import { SweepDirection } from "igniteui-core/SweepDirection";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class BackingFrame extends Base {
	static $t: Type = markType(BackingFrame, 'BackingFrame');
	constructor() {
		super();
	}
	private _brush: Brush = null;
	get brush(): Brush {
		return this._brush;
	}
	set brush(value: Brush) {
		this._brush = value;
	}
	private _outline: Brush = null;
	get outline(): Brush {
		return this._outline;
	}
	set outline(value: Brush) {
		this._outline = value;
	}
	private _strokeThickness: number = 0;
	get strokeThickness(): number {
		return this._strokeThickness;
	}
	set strokeThickness(value: number) {
		this._strokeThickness = value;
	}
	private _startAngle: number = 0;
	get startAngle(): number {
		return this._startAngle;
	}
	set startAngle(value: number) {
		this._startAngle = value;
	}
	private _endAngle: number = 0;
	get endAngle(): number {
		return this._endAngle;
	}
	set endAngle(value: number) {
		this._endAngle = value;
	}
	private _oversweep: number = 0;
	get oversweep(): number {
		return this._oversweep;
	}
	set oversweep(value: number) {
		this._oversweep = value;
	}
	private _outerExtent: number = 0;
	get outerExtent(): number {
		return this._outerExtent;
	}
	set outerExtent(value: number) {
		this._outerExtent = value;
	}
	private _innerExtent: number = 0;
	get innerExtent(): number {
		return this._innerExtent;
	}
	set innerExtent(value: number) {
		this._innerExtent = value;
	}
	private _cornerRadius: number = 0;
	get cornerRadius(): number {
		return this._cornerRadius;
	}
	set cornerRadius(value: number) {
		this._cornerRadius = value;
	}
	interpolate(p: number, previous: BackingFrame, next: BackingFrame): void {
		this.strokeThickness = previous.strokeThickness + (next.strokeThickness - previous.strokeThickness) * p;
		this.brush = BrushUtil.getInterpolation(previous.brush, p, next.brush, InterpolationMode.RGB);
		this.outline = BrushUtil.getInterpolation(previous.outline, p, next.outline, InterpolationMode.RGB);
		this.startAngle = previous.startAngle + (next.startAngle - previous.startAngle) * p;
		this.endAngle = previous.endAngle + (next.endAngle - previous.endAngle) * p;
		this.outerExtent = previous.outerExtent + (next.outerExtent - previous.outerExtent) * p;
		this.innerExtent = previous.innerExtent + (next.innerExtent - previous.innerExtent) * p;
		this.cornerRadius = previous.cornerRadius + (next.cornerRadius - previous.cornerRadius) * p;
		this.oversweep = previous.oversweep + (next.oversweep - previous.oversweep) * p;
	}
	private doCircle(pf: PathFigure, radius: number, centerX: number, centerY: number): void {
		pf._startPoint = <Point>{ $type: Point_$type, x: radius * this.outerExtent + centerX, y: 0 + centerY };
		let as1: ArcSegment = ((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: -1 * radius * this.outerExtent + centerX, y: 0 + centerY };
			$ret.isLargeArc = false;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.size = new Size(1, radius * this.outerExtent, radius * this.outerExtent);
			return $ret;
		})());
		let as2: ArcSegment = ((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: radius * this.outerExtent + centerX, y: 0 + centerY };
			$ret.isLargeArc = false;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.size = new Size(1, radius * this.outerExtent, radius * this.outerExtent);
			return $ret;
		})());
		pf._segments.add(as1);
		pf._segments.add(as2);
		pf._isClosed = true;
	}
	getPathGeometry(radius: number, centerX: number, centerY: number): PathGeometry {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		if (this.startAngle == this.endAngle) {
			this.doCircle(pf, radius, centerX, centerY);
		} else {
			let outerExtent: number = this.outerExtent;
			let innerExtent: number = this.innerExtent;
			let startAngle: number = this.startAngle;
			let endAngle: number = this.endAngle;
			let oversweep: number = this.oversweep;
			let origStartAngle: number = startAngle;
			let origEndAngle: number = endAngle;
			startAngle -= oversweep;
			endAngle += oversweep;
			if ((endAngle - startAngle) > 2 * Math.PI) {
				this.doCircle(pf, radius, centerX, centerY);
			} else {
				this.doFitted(pf, radius, centerX, centerY);
			}
		}
		pf._isClosed = true;
		pg.figures.add(pf);
		return pg;
	}
	private closeEnough(value1: number, value2: number): boolean {
		return Math.abs(value1 - value2) < 1E-05;
	}
	private doFitted(pf: PathFigure, radius: number, centerX: number, centerY: number): void {
		let outerExtent: number = this.outerExtent;
		let innerExtent: number = this.innerExtent;
		let startAngle: number = this.startAngle;
		let endAngle: number = this.endAngle;
		let oversweep: number = this.oversweep;
		let origStartAngle: number = startAngle;
		let origEndAngle: number = endAngle;
		startAngle -= oversweep;
		endAngle += oversweep;
		let sinStart: number = Math.sin(startAngle);
		let cosStart: number = Math.cos(startAngle);
		let sinEnd: number = Math.sin(endAngle);
		let cosEnd: number = Math.cos(endAngle);
		let cornerRadius = this.cornerRadius;
		let outerRadius: number = radius * outerExtent;
		let innerRadius: number = radius * innerExtent;
		if (cornerRadius * 2 > (outerRadius - innerRadius)) {
			cornerRadius = (outerRadius - innerRadius) / 2;
		}
		let oppositeOverAdjacent = cornerRadius / (radius - cornerRadius);
		let angleDiff: number = Math.atan(oppositeOverAdjacent);
		let roundedOuterRadius: number = outerRadius - cornerRadius;
		let roundedInnerRadius: number = innerRadius + cornerRadius;
		let sinStartMinusDiff: number = Math.sin(startAngle - angleDiff);
		let sinStartPlusDiff: number = Math.sin(startAngle + angleDiff);
		let cosStartMinusDiff: number = Math.cos(startAngle - angleDiff);
		let cosStartPlusDiff: number = Math.cos(startAngle + angleDiff);
		let sinEndMinusDiff: number = Math.sin(endAngle - angleDiff);
		let sinEndPlusDiff: number = Math.sin(endAngle + angleDiff);
		let cosEndMinusDiff: number = Math.cos(endAngle - angleDiff);
		let cosEndPlusDiff: number = Math.cos(endAngle + angleDiff);
		let sinOrigStart: number = Math.sin(origStartAngle);
		let sinOrigEnd: number = Math.sin(origEndAngle);
		let cosOrigStart: number = Math.cos(origStartAngle);
		let cosOrigEnd: number = Math.cos(origEndAngle);
		pf._startPoint = <Point>{ $type: Point_$type, x: cosStart * roundedOuterRadius + centerX, y: sinStart * roundedOuterRadius + centerY };
		let as1: ArcSegment = ((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: cosStartPlusDiff * outerRadius + centerX, y: sinStartPlusDiff * outerRadius + centerY };
			$ret.isLargeArc = (angleDiff * 2) > Math.PI;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.size = new Size(1, cornerRadius, cornerRadius);
			return $ret;
		})());
		let as2: ArcSegment = ((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: cosEndMinusDiff * outerRadius + centerX, y: sinEndMinusDiff * outerRadius + centerY };
			$ret.isLargeArc = ((endAngle - angleDiff) - (startAngle + angleDiff)) > Math.PI;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.size = new Size(1, outerRadius, outerRadius);
			return $ret;
		})());
		let as3: ArcSegment = ((() => {
			let $ret = new ArcSegment();
			$ret.point = <Point>{ $type: Point_$type, x: cosEnd * roundedOuterRadius + centerX, y: sinEnd * roundedOuterRadius + centerY };
			$ret.isLargeArc = (angleDiff * 2) > Math.PI;
			$ret.sweepDirection = SweepDirection.Clockwise;
			$ret.size = new Size(1, cornerRadius, cornerRadius);
			return $ret;
		})());
		let origOuterPoint = <Point>{ $type: Point_$type, x: cosOrigEnd * outerRadius + centerX, y: sinOrigEnd * outerRadius + centerY };
		let origInnerPoint = <Point>{ $type: Point_$type, x: cosOrigEnd * innerRadius + centerX, y: sinOrigEnd * innerRadius + centerY };
		let newOuterPoint = <Point>{ $type: Point_$type, x: cosEnd * outerRadius + centerX, y: sinEnd * outerRadius + centerY };
		let newInnerPoint = <Point>{ $type: Point_$type, x: cosEnd * innerRadius + centerX, y: sinEnd * innerRadius + centerY };
		let matchingInnerY: number = newOuterPoint.y;
		let matchingInnerX: number = newOuterPoint.x;
		if (origOuterPoint.x - origInnerPoint.x != 0) {
			matchingInnerX = centerX;
			let m = (origOuterPoint.y - origInnerPoint.y) / (origOuterPoint.x - origInnerPoint.x);
			matchingInnerY = m * (centerX - newOuterPoint.x) + newOuterPoint.y;
		}
		newInnerPoint = <Point>{ $type: Point_$type, x: centerX, y: matchingInnerY };
		if (this.closeEnough(newInnerPoint.x, newOuterPoint.x) && this.closeEnough(newInnerPoint.y, newOuterPoint.y)) {
			newInnerPoint = origInnerPoint;
		}
		let inter = GeometryUtil.getCircleIntersection(newInnerPoint, newOuterPoint, <Point>{ $type: Point_$type, x: centerX, y: centerY }, innerRadius);
		let origOuterPoint2 = <Point>{ $type: Point_$type, x: cosOrigStart * outerRadius + centerX, y: sinOrigStart * outerRadius + centerY };
		let origInnerPoint2 = <Point>{ $type: Point_$type, x: cosOrigStart * innerRadius + centerX, y: sinOrigStart * innerRadius + centerY };
		let newOuterPoint2 = <Point>{ $type: Point_$type, x: cosStart * outerRadius + centerX, y: sinStart * outerRadius + centerY };
		let newInnerPoint2 = <Point>{ $type: Point_$type, x: cosStart * innerRadius + centerX, y: sinStart * innerRadius + centerY };
		let matchingInnerY2: number = newOuterPoint2.y;
		let matchingInnerX2: number = newOuterPoint2.x;
		if (origOuterPoint2.x - origInnerPoint2.x != 0) {
			matchingInnerX2 = centerX;
			let m2 = (origOuterPoint2.y - origInnerPoint2.y) / (origOuterPoint2.x - origInnerPoint2.x);
			matchingInnerY2 = m2 * (centerX - newOuterPoint2.x) + newOuterPoint2.y;
		}
		newInnerPoint2 = <Point>{ $type: Point_$type, x: matchingInnerX2, y: matchingInnerY2 };
		if (this.closeEnough(newInnerPoint2.x, newOuterPoint2.x) && this.closeEnough(newInnerPoint2.y, newOuterPoint2.y)) {
			newInnerPoint2 = origInnerPoint2;
		}
		let inter2 = GeometryUtil.getCircleIntersection(newInnerPoint2, newOuterPoint2, <Point>{ $type: Point_$type, x: centerX, y: centerY }, innerRadius);
		if (isNaN_(inter.item1.x) || isNaN_(inter.item1.y) || isNaN_(inter.item2.x) || isNaN_(inter.item2.y) || isNaN_(inter2.item1.x) || isNaN_(inter2.item1.y) || isNaN_(inter2.item2.x) || isNaN_(inter2.item2.y)) {
			pf._startPoint = <Point>{ $type: Point_$type, x: cosStart * outerRadius + centerX, y: sinStart * outerRadius + centerY };
			pf._segments.add(as2);
			let ls2: LineSegment = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: cosStart * outerRadius + centerX, y: sinStart * outerRadius + centerY };
				return $ret;
			})());
			pf._segments.add(ls2);
		} else {
			let p1: Point;
			let p2: Point;
			if ((Math.pow(inter.item1.x - newOuterPoint.x, 2) + Math.pow(inter.item1.y - newOuterPoint.y, 2)) < (Math.pow(inter.item2.x - newOuterPoint.x, 2) + Math.pow(inter.item2.y - newOuterPoint.y, 2))) {
				p1 = inter.item1;
			} else {
				p1 = inter.item2;
			}
			if ((Math.pow(inter2.item1.x - newOuterPoint2.x, 2) + Math.pow(inter2.item1.y - newOuterPoint2.y, 2)) < (Math.pow(inter2.item2.x - newOuterPoint2.x, 2) + Math.pow(inter2.item2.y - newOuterPoint2.y, 2))) {
				p2 = inter2.item1;
			} else {
				p2 = inter2.item2;
			}
			if ((Math.pow(p2.x - newOuterPoint.x, 2) + Math.pow(p2.y - newOuterPoint.y, 2)) <= (Math.pow(p1.x - newOuterPoint.x, 2) + Math.pow(p1.y - newOuterPoint.y, 2))) {
				pf._startPoint = <Point>{ $type: Point_$type, x: cosStart * outerRadius + centerX, y: sinStart * outerRadius + centerY };
				pf._segments.add(as2);
				let ls21: LineSegment = ((() => {
					let $ret = new LineSegment(1);
					$ret.point = <Point>{ $type: Point_$type, x: cosStart * outerRadius + centerX, y: sinStart * outerRadius + centerY };
					return $ret;
				})());
				pf._segments.add(ls21);
			} else {
				pf._segments.add(as1);
				pf._segments.add(as2);
				pf._segments.add(as3);
				let ls1: LineSegment = ((() => {
					let $ret = new LineSegment(1);
					$ret.point = p1;
					return $ret;
				})());
				pf._segments.add(ls1);
				let angle1: number = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: centerX, y: centerY }, p1);
				let angle2: number = GeometryUtil.getAngleTo(<Point>{ $type: Point_$type, x: centerX, y: centerY }, p2);
				while (angle2 < angle1) {
					angle2 += 2 * Math.PI;
				}
				let as5: ArcSegment = ((() => {
					let $ret = new ArcSegment();
					$ret.point = p2;
					$ret.isLargeArc = angle2 - angle1 > Math.PI;
					$ret.sweepDirection = SweepDirection.Clockwise;
					$ret.size = new Size(1, innerRadius, innerRadius);
					return $ret;
				})());
				pf._segments.add(as5);
				let ls22: LineSegment = ((() => {
					let $ret = new LineSegment(1);
					$ret.point = <Point>{ $type: Point_$type, x: cosStart * roundedOuterRadius + centerX, y: sinStart * roundedOuterRadius + centerY };
					return $ret;
				})());
				pf._segments.add(ls22);
			}
		}
	}
}


