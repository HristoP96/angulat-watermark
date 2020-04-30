/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { LinearScaleOrientation } from "./LinearScaleOrientation";
import { PathFigure } from "igniteui-core/PathFigure";
import { LineSegment } from "igniteui-core/LineSegment";
import { List$1 } from "igniteui-core/List$1";
import { PathSegment } from "igniteui-core/PathSegment";
import { Brush } from "igniteui-core/Brush";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { InterpolationMode } from "igniteui-core/InterpolationMode";

/**
 * @hidden 
 */
export class LinearGraphRectFrame extends Base {
	static $t: Type = markType(LinearGraphRectFrame, 'LinearGraphRectFrame');
	startInnerExtent: number = 0;
	startOuterExtent: number = 0;
	endInnerExtent: number = 0;
	endOuterExtent: number = 0;
	startValue: number = 0;
	endValue: number = 0;
	brush: Brush = null;
	outline: Brush = null;
	strokeThickness: number = 0;
	getPathGeometry(startPoint: Point, breadth: number, length: number, orientation: LinearScaleOrientation): PathGeometry {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let tl: LineSegment, tr: LineSegment, br: LineSegment, bl: LineSegment;
		if (orientation == LinearScaleOrientation.Vertical) {
			tl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: startPoint.x + breadth * this.endInnerExtent, y: length - this.endValue };
				return $ret;
			})());
			tr = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: startPoint.x + breadth * this.endOuterExtent, y: length - this.endValue };
				return $ret;
			})());
			br = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: startPoint.x + breadth * this.startOuterExtent, y: length - this.startValue };
				return $ret;
			})());
			bl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: startPoint.x + breadth * this.startInnerExtent, y: length - this.startValue };
				return $ret;
			})());
		} else {
			tl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: this.startValue, y: breadth * (1 - this.startOuterExtent) };
				return $ret;
			})());
			tr = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: this.endValue, y: breadth * (1 - this.endOuterExtent) };
				return $ret;
			})());
			br = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: this.endValue, y: breadth * (1 - this.endInnerExtent) };
				return $ret;
			})());
			bl = ((() => {
				let $ret = new LineSegment(1);
				$ret.point = <Point>{ $type: Point_$type, x: this.startValue, y: breadth * (1 - this.startInnerExtent) };
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
	static interpolate(p: number, q: number, min: LinearGraphRectFrame, max: LinearGraphRectFrame): LinearGraphRectFrame {
		let ret: LinearGraphRectFrame = new LinearGraphRectFrame();
		ret.brush = BrushUtil.getInterpolation(min.brush, p, max.brush, InterpolationMode.RGB);
		ret.outline = BrushUtil.getInterpolation(min.outline, p, max.outline, InterpolationMode.RGB);
		ret.strokeThickness = q * min.strokeThickness + p * max.strokeThickness;
		ret.startInnerExtent = q * min.startInnerExtent + p * max.startInnerExtent;
		ret.startOuterExtent = q * min.startOuterExtent + p * max.startOuterExtent;
		ret.startValue = q * min.startValue + p * max.startValue;
		ret.endValue = q * min.endValue + p * max.endValue;
		ret.endInnerExtent = q * min.endInnerExtent + p * max.endInnerExtent;
		ret.endOuterExtent = q * min.endOuterExtent + p * max.endOuterExtent;
		return ret;
	}
}


