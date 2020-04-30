/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { LinearScaleOrientation } from "./LinearScaleOrientation";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { List$1 } from "igniteui-core/List$1";
import { PathSegment } from "igniteui-core/PathSegment";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class LinearGraphBackingFrame extends Base {
	static $t: Type = markType(LinearGraphBackingFrame, 'LinearGraphBackingFrame');
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
	getPathGeometry(breadth: number, length: number, orientation: LinearScaleOrientation): PathGeometry {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let tl: LineSegment, tr: LineSegment, br: LineSegment, bl: LineSegment;
		if (orientation == LinearScaleOrientation.Vertical) {
			tl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: breadth * this.innerExtent, y: 0 };
				return $ret;
			})());
			tr = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: breadth * this.outerExtent, y: 0 };
				return $ret;
			})());
			br = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: breadth * this.outerExtent, y: length };
				return $ret;
			})());
			bl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: breadth * this.innerExtent, y: length };
				return $ret;
			})());
		} else {
			tl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: 0, y: breadth * (1 - this.outerExtent) };
				return $ret;
			})());
			tr = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: length, y: breadth * (1 - this.outerExtent) };
				return $ret;
			})());
			br = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: length, y: breadth * (1 - this.innerExtent) };
				return $ret;
			})());
			bl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: 0, y: breadth * (1 - this.innerExtent) };
				return $ret;
			})());
		}
		pf._startPoint = tl.point;
		pf._segments.add(tr);
		pf._segments.add(br);
		pf._segments.add(bl);
		pf._isClosed = true;
		pg.figures.add(pf);
		return pg;
	}
	interpolate(p: number, previous: LinearGraphBackingFrame, next: LinearGraphBackingFrame): void {
		this.strokeThickness = previous.strokeThickness + (next.strokeThickness - previous.strokeThickness) * p;
		this.brush = BrushUtil.getInterpolation(previous.brush, p, next.brush, InterpolationMode.RGB);
		this.outline = BrushUtil.getInterpolation(previous.outline, p, next.outline, InterpolationMode.RGB);
		this.outerExtent = previous.outerExtent + (next.outerExtent - previous.outerExtent) * p;
		this.innerExtent = previous.innerExtent + (next.innerExtent - previous.innerExtent) * p;
	}
}


