/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { Brush } from "igniteui-core/Brush";
import { BrushUtil } from "igniteui-core/BrushUtil";
import { PathGeometry } from "igniteui-core/PathGeometry";
import { PathFigure } from "igniteui-core/PathFigure";
import { PathSegment } from "igniteui-core/PathSegment";
import { LineSegment } from "igniteui-core/LineSegment";
import { Tuple$2 } from "igniteui-core/Tuple$2";
import { List$1 } from "igniteui-core/List$1";
import { PolyLineSegment } from "igniteui-core/PolyLineSegment";
import { PointCollection } from "igniteui-core/PointCollection";
import { ArcSegment } from "igniteui-core/ArcSegment";
import { Size } from "igniteui-core/Size";
import { InterpolationMode } from "igniteui-core/InterpolationMode";
import { SweepDirection } from "igniteui-core/SweepDirection";

/**
 * @hidden 
 */
export class RadialGaugeRangeFrame extends Base {
	static $t: Type = markType(RadialGaugeRangeFrame, 'RadialGaugeRangeFrame');
	startInnerExtent: number = 0;
	startOuterExtent: number = 0;
	startAngle: number = 0;
	endAngle: number = 0;
	endInnerExtent: number = 0;
	endOuterExtent: number = 0;
	brush: Brush = null;
	outline: Brush = null;
	strokeThickness: number = 0;
	static interpolate(p: number, q: number, min: RadialGaugeRangeFrame, max: RadialGaugeRangeFrame): RadialGaugeRangeFrame {
		let ret: RadialGaugeRangeFrame = new RadialGaugeRangeFrame();
		ret.brush = BrushUtil.getInterpolation(min.brush, p, max.brush, InterpolationMode.RGB);
		ret.outline = BrushUtil.getInterpolation(min.outline, p, max.outline, InterpolationMode.RGB);
		ret.strokeThickness = q * min.strokeThickness + p * max.strokeThickness;
		ret.startInnerExtent = q * min.startInnerExtent + p * max.startInnerExtent;
		ret.startOuterExtent = q * min.startOuterExtent + p * max.startOuterExtent;
		ret.startAngle = q * min.startAngle + p * max.startAngle;
		ret.endAngle = q * min.endAngle + p * max.endAngle;
		ret.endInnerExtent = q * min.endInnerExtent + p * max.endInnerExtent;
		ret.endOuterExtent = q * min.endOuterExtent + p * max.endOuterExtent;
		return ret;
	}
	getPathGeometry(radius: number, centerX: number, centerY: number): PathGeometry {
		let pg: PathGeometry = new PathGeometry();
		let pf: PathFigure = new PathFigure();
		let resolution = 4;
		let arcThresh = 1 / radius;
		let useOuterArc: boolean = false;
		if (Math.abs(this.startOuterExtent - this.endOuterExtent) < arcThresh) {
			useOuterArc = true;
		}
		let useInnerArc: boolean = false;
		if (Math.abs(this.startInnerExtent - this.endInnerExtent) < arcThresh) {
			useInnerArc = true;
		}
		let doCircle = false;
		if ((this.endAngle - this.startAngle) >= 2 * Math.PI) {
			doCircle = true;
		}
		if (useInnerArc && useOuterArc && doCircle) {
			let seg1 = this.getArc(0, Math.PI, this.startOuterExtent, radius, centerX, centerY, true);
			pf._startPoint = seg1.item1;
			let seg2 = this.getArc(Math.PI, 0, this.startOuterExtent, radius, centerX, centerY, true);
			let pf2 = new PathFigure();
			let seg3 = this.getArc(0, Math.PI, this.startInnerExtent, radius, centerX, centerY, false);
			pf2._startPoint = seg3.item1;
			let seg4 = this.getArc(Math.PI, 0, this.startInnerExtent, radius, centerX, centerY, false);
			pf._segments.add(seg1.item2);
			pf._segments.add(seg2.item2);
			pf2._segments.add(seg3.item2);
			pf2._segments.add(seg4.item2);
			pg.figures.add(pf);
			pg.figures.add(pf2);
			return pg;
		}
		let outerSeg: PathSegment = null;
		if (useOuterArc) {
			let res = this.getArc(this.startAngle, this.endAngle, Math.max(0, this.startOuterExtent), radius, centerX, centerY, true);
			pf._startPoint = res.item1;
			outerSeg = res.item2;
		} else {
			let res1 = this.getRasterArc(this.startAngle, this.endAngle, this.startOuterExtent, this.endOuterExtent, radius, centerX, centerY, true, resolution);
			pf._startPoint = res1.item1;
			outerSeg = res1.item2;
		}
		let innerSeg: PathSegment = null;
		let lineSeg: LineSegment = new LineSegment(1);
		if (useInnerArc) {
			let res2 = this.getArc(this.startAngle, this.endAngle, Math.max(0, this.startInnerExtent), radius, centerX, centerY, false);
			innerSeg = res2.item2;
			lineSeg.point = res2.item1;
		} else {
			let res3 = this.getRasterArc(this.startAngle, this.endAngle, this.startInnerExtent, this.endInnerExtent, radius, centerX, centerY, false, resolution);
			innerSeg = res3.item2;
			lineSeg.point = res3.item1;
		}
		pf._segments.add(outerSeg);
		pf._segments.add(lineSeg);
		pf._segments.add(innerSeg);
		pf._isFilled = true;
		pf._isClosed = true;
		pg.figures.add(pf);
		return pg;
	}
	private getRasterArc(startingAngle: number, endingAngle: number, startExtent: number, endExtent: number, radius: number, centerX: number, centerY: number, isClockwise: boolean, resolution: number): Tuple$2<Point, PathSegment> {
		let seg: PolyLineSegment = new PolyLineSegment();
		let startExt = radius * startExtent;
		let endExt = radius * endExtent;
		let maxExt = Math.max(startExt, endExt);
		let diameter = maxExt + maxExt;
		let angleStep = Math.asin(resolution / diameter) * 2;
		let p: Point;
		let rad: number;
		let inter: number;
		let extentRange: number = endExt - startExt;
		let angleRange: number = Math.abs(endingAngle - startingAngle);
		let pts: PointCollection = seg._points;
		if (isClockwise) {
			let currAngle: number;
			for (currAngle = startingAngle; currAngle < endingAngle; currAngle += angleStep) {
				inter = (currAngle - startingAngle) / angleRange;
				rad = startExt + inter * extentRange;
				p = <Point>{ $type: Point_$type, x: centerX + Math.cos(currAngle) * rad, y: centerY + Math.sin(currAngle) * rad };
				pts.add(p);
			}
			currAngle = endingAngle;
			inter = (currAngle - startingAngle) / angleRange;
			rad = startExt + inter * extentRange;
			p = <Point>{ $type: Point_$type, x: centerX + Math.cos(currAngle) * rad, y: centerY + Math.sin(currAngle) * rad };
			pts.add(p);
		} else {
			let currAngle1: number;
			for (currAngle1 = endingAngle; currAngle1 > startingAngle; currAngle1 -= angleStep) {
				inter = (currAngle1 - endingAngle) / angleRange;
				rad = endExt + inter * extentRange;
				p = <Point>{ $type: Point_$type, x: centerX + Math.cos(currAngle1) * rad, y: centerY + Math.sin(currAngle1) * rad };
				pts.add(p);
			}
			currAngle1 = startingAngle;
			inter = (currAngle1 - endingAngle) / angleRange;
			rad = endExt + inter * extentRange;
			p = <Point>{ $type: Point_$type, x: centerX + Math.cos(currAngle1) * rad, y: centerY + Math.sin(currAngle1) * rad };
			pts.add(p);
		}
		return new Tuple$2<Point, PathSegment>(Point_$type, (<any>PathSegment).$type, pts._inner[0], seg);
	}
	private getArc(startingAngle: number, endingAngle: number, extent: number, radius: number, centerX: number, centerY: number, isClockwise: boolean): Tuple$2<Point, PathSegment> {
		let ext = extent * radius;
		let arc: ArcSegment = new ArcSegment();
		arc.sweepDirection = isClockwise ? SweepDirection.Clockwise : SweepDirection.Counterclockwise;
		arc.isLargeArc = endingAngle - startingAngle > Math.PI;
		arc.size = new Size(1, ext, ext);
		let end: number = isClockwise ? endingAngle : startingAngle;
		let start: number = isClockwise ? startingAngle : endingAngle;
		arc.point = <Point>{ $type: Point_$type, x: centerX + Math.cos(end) * ext, y: centerY + Math.sin(end) * ext };
		let startPoint = <Point>{ $type: Point_$type, x: centerX + Math.cos(start) * ext, y: centerY + Math.sin(start) * ext };
		return new Tuple$2<Point, PathSegment>(Point_$type, (<any>PathSegment).$type, startPoint, arc);
	}
}


