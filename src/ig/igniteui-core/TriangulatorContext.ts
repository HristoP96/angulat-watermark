/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IList$1, IList$1_$type, Point, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { Triangle } from "./Triangle";
import { LinkedList$1 } from "./LinkedList$1";
import { HalfEdgeSet } from "./HalfEdgeSet";
import { PointTester } from "./PointTester";

/**
 * @hidden 
 */
export class TriangulatorContext extends Base {
	static $t: Type = markType(TriangulatorContext, 'TriangulatorContext');
	count: number = 0;
	xColumn: IList$1<number> = null;
	yColumn: IList$1<number> = null;
	result: List$1<Triangle> = null;
	s0: Point = null;
	s1: Point = null;
	s2: Point = null;
	triangleList: LinkedList$1<Triangle> = null;
	completedList: LinkedList$1<Triangle> = null;
	indices: List$1<number> = null;
	edgeBuffer: HalfEdgeSet = null;
	pointTester: PointTester = null;
	stepSize: number = 0;
	currentStart: number = 0;
	currentEnd: number = 0;
	async: boolean = false;
}


