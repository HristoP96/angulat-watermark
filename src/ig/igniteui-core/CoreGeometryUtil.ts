/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "./type";
import { isNaN_, isInfinity } from "./number";

/**
 * @hidden 
 */
export class CoreGeometryUtil extends Base {
	static $t: Type = markType(CoreGeometryUtil, 'CoreGeometryUtil');
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
	static getCenterFromArcSegment(startPoint: Point, endPoint: Point, radius: number, isCounter: boolean, isLargeArc: boolean): Point {
		let midway: Point = <Point>{ $type: Point_$type, x: (startPoint.x + endPoint.x) / 2, y: (startPoint.y + endPoint.y) / 2 };
		let vectorX: number = endPoint.x - startPoint.x;
		let vectorY: number = endPoint.y - startPoint.y;
		let vectorLength: number = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
		let rotatedVectorX: number = vectorY;
		let rotatedVectorY: number = vectorX * -1;
		if (isLargeArc == isCounter) {
			rotatedVectorX = vectorY * -1;
			rotatedVectorY = vectorX;
		}
		let maxAbs: number = Math.max(Math.abs(rotatedVectorX), Math.abs(rotatedVectorY));
		rotatedVectorX = rotatedVectorX / maxAbs;
		rotatedVectorY = rotatedVectorY / maxAbs;
		let rotatedVectorLength: number = Math.sqrt(rotatedVectorX * rotatedVectorX + rotatedVectorY * rotatedVectorY);
		let normalizedVectorX: number = rotatedVectorX / rotatedVectorLength;
		let normalizedVectorY: number = rotatedVectorY / rotatedVectorLength;
		let halfChordLength: number = vectorLength / 2;
		let distToCenter: number = Math.sqrt(radius * radius - halfChordLength * halfChordLength);
		if (isNaN_(distToCenter)) {
			distToCenter = 0;
		}
		let centerVectorX: number = distToCenter * normalizedVectorX;
		let centerVectorY: number = distToCenter * normalizedVectorY;
		let center: Point = <Point>{ $type: Point_$type, x: midway.x + centerVectorX, y: midway.y + centerVectorY };
		return center;
	}
}


