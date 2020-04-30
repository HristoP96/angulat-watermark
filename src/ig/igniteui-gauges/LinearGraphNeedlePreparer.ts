/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";
import { LinearGraphNeedleParameters } from "./LinearGraphNeedleParameters";
import { LinearGraphNeedleFrame } from "./LinearGraphNeedleFrame";
import { MorphSegment } from "./MorphSegment";
import { List$1 } from "igniteui-core/List$1";
import { LinearGraphNeedleShape } from "./LinearGraphNeedleShape";
import { LinearScaleOrientation } from "./LinearScaleOrientation";
import { isNaN_ } from "igniteui-core/number";

/**
 * @hidden 
 */
export class LinearGraphNeedlePreparer extends Base {
	static $t: Type = markType(LinearGraphNeedlePreparer, 'LinearGraphNeedlePreparer');
	private _parameters: LinearGraphNeedleParameters = null;
	get parameters(): LinearGraphNeedleParameters {
		return this._parameters;
	}
	set parameters(value: LinearGraphNeedleParameters) {
		this._parameters = value;
	}
	prepareNeedle(frame: LinearGraphNeedleFrame): void {
		this.prepareNeedleHelper(frame);
	}
	private prepareNeedleHelper(frame: LinearGraphNeedleFrame): void {
		this.resetFrame(frame);
		let p = this.getNeedleParameters();
		frame.needleStartExtent = p.outerExtent;
		frame.needleEndExtent = p.innerExtent;
		frame.needleWidth = 0;
		if (!isNaN_(p.outerBaseWidth)) {
			frame.needleWidth = Math.max(frame.needleWidth, p.outerBaseWidth);
		}
		if (!isNaN_(p.innerBaseWidth)) {
			frame.needleWidth = Math.max(frame.needleWidth, p.innerBaseWidth);
		}
		let segmentsCount = 7;
		let segments: MorphSegment[] = <MorphSegment[]>new Array(segmentsCount);
		let points: Point[] = <Point[]>new Array(segmentsCount + 1);
		this.prepareSegmentsAndPoints(frame, segments, points, p);
		for (let i: number = 0; i < segmentsCount; i++) {
			let currPoints = segments[i].segmentPoints;
			currPoints.add(points[i]);
			currPoints.add(points[i + 1]);
		}
	}
	private prepareSegmentsAndPoints(frame: LinearGraphNeedleFrame, segments: MorphSegment[], segmentPoints: Point[], p: LinearGraphNeedleParameters): void {
		let innerExtent = p.innerExtent;
		let outerExtent = p.outerExtent;
		let innerPointExtent = p.innerPointExtent;
		let outerPointExtent = p.outerPointExtent;
		if (p.scaleOrientation == LinearScaleOrientation.Horizontal) {
			innerExtent = 1 - innerExtent;
			outerExtent = 1 - outerExtent;
			innerPointExtent = 1 - innerPointExtent;
			outerPointExtent = 1 - outerPointExtent;
			segments[0] = frame.outerBase;
			segments[1] = frame.outerPoint;
			segments[2] = frame.feature;
			segments[3] = frame.innerPoint;
			segments[4] = frame.innerBase;
			segments[5] = frame.innerPointUnderside;
			segments[6] = frame.featureUnderside;
			segmentPoints[0] = <Point>{ $type: Point_$type, x: (-1) * p.outerBaseWidth, y: outerExtent };
			segmentPoints[1] = <Point>{ $type: Point_$type, x: p.outerBaseWidth, y: outerExtent };
			segmentPoints[2] = <Point>{ $type: Point_$type, x: p.outerPointWidth, y: outerPointExtent };
			segmentPoints[3] = <Point>{ $type: Point_$type, x: p.innerPointWidth, y: innerPointExtent };
			segmentPoints[4] = <Point>{ $type: Point_$type, x: p.innerBaseWidth, y: innerExtent };
			segmentPoints[5] = <Point>{ $type: Point_$type, x: (-1) * p.innerBaseWidth, y: innerExtent };
			segmentPoints[6] = <Point>{ $type: Point_$type, x: (-1) * p.innerPointWidth, y: innerPointExtent };
			segmentPoints[7] = <Point>{ $type: Point_$type, x: (-1) * p.outerPointWidth, y: outerPointExtent };
		} else {
			segments[0] = frame.outerBase;
			segments[1] = frame.outerPoint;
			segments[2] = frame.feature;
			segments[3] = frame.innerPoint;
			segments[4] = frame.innerBase;
			segments[5] = frame.innerPointUnderside;
			segments[6] = frame.featureUnderside;
			segmentPoints[0] = <Point>{ $type: Point_$type, x: outerExtent, y: (-1) * p.outerBaseWidth };
			segmentPoints[1] = <Point>{ $type: Point_$type, x: outerExtent, y: p.outerBaseWidth };
			segmentPoints[2] = <Point>{ $type: Point_$type, x: outerPointExtent, y: p.outerPointWidth };
			segmentPoints[3] = <Point>{ $type: Point_$type, x: innerPointExtent, y: p.innerPointWidth };
			segmentPoints[4] = <Point>{ $type: Point_$type, x: innerExtent, y: p.innerBaseWidth };
			segmentPoints[5] = <Point>{ $type: Point_$type, x: innerExtent, y: (-1) * p.innerBaseWidth };
			segmentPoints[6] = <Point>{ $type: Point_$type, x: innerPointExtent, y: (-1) * p.innerPointWidth };
			segmentPoints[7] = <Point>{ $type: Point_$type, x: outerPointExtent, y: (-1) * p.outerPointWidth };
		}
	}
	private getNeedleParameters(): LinearGraphNeedleParameters {
		let p = this.parameters;
		let defaultOuterExtent: number = 0.85;
		let defaultInnerExtent: number = 0.25;
		let defaultNeedleInnerPointExtent: number = 0.45;
		let defaultWidth: number = p.defaultWidth;
		let defaultTrapezoidInnerBaseWidthRatio: number = 0.5;
		let innerExtent = p.innerExtent;
		let outerExtent = p.outerExtent;
		let innerPointExtent = p.innerPointExtent;
		let outerPointExtent = p.outerPointExtent;
		let innerBaseWidth = p.innerBaseWidth;
		let outerBaseWidth = p.outerBaseWidth;
		let innerPointWidth = p.innerPointWidth;
		let outerPointWidth = p.outerPointWidth;
		if (isNaN_(innerExtent)) {
			innerExtent = defaultInnerExtent;
		}
		if (isNaN_(outerExtent)) {
			outerExtent = defaultOuterExtent;
		}
		if (isNaN_(innerPointExtent)) {
			if (p.needleShape == LinearGraphNeedleShape.Needle) {
				innerPointExtent = defaultNeedleInnerPointExtent;
			} else {
				innerPointExtent = defaultInnerExtent;
			}
		}
		if (isNaN_(outerPointExtent)) {
			outerPointExtent = defaultOuterExtent;
		}
		if (isNaN_(outerBaseWidth)) {
			outerBaseWidth = defaultWidth;
		}
		if (isNaN_(innerBaseWidth)) {
			if (p.needleShape == LinearGraphNeedleShape.Trapezoid) {
				innerBaseWidth = outerBaseWidth * defaultTrapezoidInnerBaseWidthRatio;
			} else {
				innerBaseWidth = defaultWidth;
			}
		}
		if (isNaN_(innerPointWidth)) {
			innerPointWidth = defaultWidth;
		}
		if (isNaN_(outerPointWidth)) {
			outerPointWidth = defaultWidth;
		}
		switch (p.needleShape) {
			case LinearGraphNeedleShape.Triangle:

			case LinearGraphNeedleShape.Rectangle:

			case LinearGraphNeedleShape.Trapezoid:
			outerPointExtent = outerExtent;
			innerPointExtent = innerExtent;
			break;

		}

		if (p.needleShape == LinearGraphNeedleShape.Needle) {
			innerBaseWidth = 0;
			innerPointWidth = outerBaseWidth;
			outerPointWidth = outerBaseWidth;
			outerPointExtent = outerExtent;
		}
		if (p.needleShape == LinearGraphNeedleShape.Triangle) {
			innerBaseWidth = 0;
			innerPointWidth = 0;
			outerPointWidth = outerBaseWidth;
		}
		if (p.needleShape == LinearGraphNeedleShape.Trapezoid) {
			innerPointWidth = innerBaseWidth;
			outerPointWidth = outerBaseWidth;
		}
		if (p.needleShape == LinearGraphNeedleShape.Rectangle) {
			let max = Math.max(innerBaseWidth, outerBaseWidth);
			innerBaseWidth = max;
			outerBaseWidth = max;
			innerPointWidth = max;
			outerPointWidth = max;
		}
		p.innerExtent = innerExtent;
		p.outerExtent = outerExtent;
		p.innerPointExtent = innerPointExtent;
		p.outerPointExtent = outerPointExtent;
		p.innerBaseWidth = innerBaseWidth;
		p.outerBaseWidth = outerBaseWidth;
		p.innerPointWidth = innerPointWidth;
		p.outerPointWidth = outerPointWidth;
		return p;
	}
	private resetFrame(frame: LinearGraphNeedleFrame): void {
		frame.innerBase.reset();
		frame.innerPoint.reset();
		frame.feature.reset();
		frame.outerPoint.reset();
		frame.outerBase.reset();
		frame.outerPointUnderside.reset();
		frame.featureUnderside.reset();
		frame.innerPointUnderside.reset();
		frame.cutout.reset();
		frame.cutoutUnderside.reset();
	}
}


