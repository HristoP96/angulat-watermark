/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEqualityComparer$1, IEqualityComparer$1_$type, Point, Point_$type, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PointComparer extends Base implements IEqualityComparer$1<Point> {
	static $t: Type = markType(PointComparer, 'PointComparer', (<any>Base).$type, [IEqualityComparer$1_$type.specialize(Point_$type)]);
	equalsC(x: Point, y: Point): boolean {
		return x.x == y.x && x.y == y.y;
	}
	getHashCodeC(obj: Point): number {
		return (obj.x) ^ (obj.y);
	}
}


