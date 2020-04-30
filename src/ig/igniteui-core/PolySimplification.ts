/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "./type";
import { Tuple$2 } from "./Tuple$2";

/**
 * @hidden 
 */
export class PolySimplification extends Base {
	static $t: Type = markType(PolySimplification, 'PolySimplification');
	static vertexReduction(points: Tuple$2<number[], number[]>, tolerance: number): number {
		let x = points.item1;
		let y = points.item2;
		if (x.length == 0) {
			return 0;
		}
		let insertIndex: number = 0;
		let refIndex: number = 0;
		let squareTolerance: number = tolerance * tolerance;
		insertIndex++;
		let dx: number;
		let dy: number;
		let dist: number;
		for (let i: number = 0; i < x.length; i++) {
			dx = x[i] - x[refIndex];
			dy = y[i] - y[refIndex];
			dist = (dx * dx) + (dy * dy);
			if (dist > squareTolerance) {
				x[insertIndex] = x[i];
				y[insertIndex] = y[i];
				insertIndex++;
				refIndex = i;
			}
		}
		return insertIndex;
	}
	private static squareDistance(p1: Point, p2: Point): number {
		let dx: number = p2.x - p1.x;
		let dy: number = p2.y - p1.y;
		return (dx * dx) + (dy * dy);
	}
}


