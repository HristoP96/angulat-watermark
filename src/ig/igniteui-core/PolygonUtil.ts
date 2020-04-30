/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, ICollection$1, ICollection$1_$type, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PolygonUtil extends Base {
	static $t: Type = markType(PolygonUtil, 'PolygonUtil');
	static polygonContainsPoint(points: IList$1<Point>, pt: Point): boolean {
		if (points == null) {
			return false;
		}
		let pointsCount: number = points.count;
		if (pointsCount < 4) {
			return false;
		}
		let c: boolean = false;
		for (let i: number = 0, j: number = pointsCount - 1; i < pointsCount; j = i++) {
			if (((points.item(i).y > pt.y) != (points.item(j).y > pt.y)) && (pt.x < (points.item(j).x - points.item(i).x) * (pt.y - points.item(i).y) / (points.item(j).y - points.item(i).y) + points.item(i).x)) {
				c = !c;
			}
		}
		return c;
	}
}


