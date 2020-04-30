/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { EdgeClipper } from "./EdgeClipper";
import { Point, Base, Point_$type, Type, markType, PointUtil } from "./type";

/**
 * @hidden 
 */
export class TopClipper extends EdgeClipper {
	static $t: Type = markType(TopClipper, 'TopClipper', (<any>EdgeClipper).$type);
	edge: number = 0;
	protected isInside(pt: Point): boolean {
		return pt.y >= this.edge;
	}
	intersection(b: Point, e: Point): Point {
		return <Point>{ $type: Point_$type, x: b.x + (e.x - b.x) * (this.edge - b.y) / (e.y - b.y), y: this.edge };
	}
}


