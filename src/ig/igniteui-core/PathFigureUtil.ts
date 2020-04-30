/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, IDisposable, IDisposable_$type, Point, fromEnum, Type, markType } from "./type";
import { PathFigureCollection } from "./PathFigureCollection";
import { PathFigure } from "./PathFigure";
import { List$1 } from "./List$1";
import { PathSegmentCollection } from "./PathSegmentCollection";
import { PathSegment } from "./PathSegment";
import { PathSegmentType } from "./PathSegmentType";
import { ArcSegment } from "./ArcSegment";
import { LineSegment } from "./LineSegment";
import { PolyLineSegment } from "./PolyLineSegment";

/**
 * @hidden 
 */
export class PathFigureUtil extends Base {
	static $t: Type = markType(PathFigureUtil, 'PathFigureUtil');
	static duplicate1(pathFigureCollection: PathFigureCollection): PathFigureCollection {
		let dup: PathFigureCollection = new PathFigureCollection();
		for (let pathFigure of fromEnum<PathFigure>(pathFigureCollection)) {
			dup.add(PathFigureUtil.duplicate(pathFigure));
		}
		return dup;
	}
	static duplicate(pathFigure: PathFigure): PathFigure {
		if (pathFigure == null) {
			return null;
		}
		let segments: PathSegmentCollection = new PathSegmentCollection();
		for (let pathSegment of fromEnum<PathSegment>(pathFigure._segments)) {
			switch (pathSegment.type) {
				case PathSegmentType.Arc:
				let arcSeg = <ArcSegment>pathSegment;
				let newArcSeg = new ArcSegment();
				newArcSeg.isLargeArc = arcSeg.isLargeArc;
				newArcSeg.point = arcSeg.point;
				newArcSeg.rotationAngle = arcSeg.rotationAngle;
				newArcSeg.size = arcSeg.size;
				newArcSeg.sweepDirection = arcSeg.sweepDirection;
				segments.add(newArcSeg);
				break;

				case PathSegmentType.Line:
				let lineSeg = <LineSegment>pathSegment;
				let newLineSeg = new LineSegment(1);
				newLineSeg.point = lineSeg.point;
				segments.add(newLineSeg);
				break;

				case PathSegmentType.PolyLine:
				let polyLineSeg = <PolyLineSegment>pathSegment;
				let newPolyLineSeg = new PolyLineSegment();
				for (let p of fromEnum<Point>(polyLineSeg._points)) {
					newPolyLineSeg._points.add(p);
				}
				segments.add(newPolyLineSeg);
				break;

			}

		}
		return ((() => {
			let $ret = new PathFigure();
			$ret.isClosed = pathFigure._isClosed;
			$ret.isFilled = pathFigure._isFilled;
			$ret.startPoint = pathFigure._startPoint;
			$ret.segments = segments;
			return $ret;
		})());
	}
}


