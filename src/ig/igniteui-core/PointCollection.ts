/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { Point, Base, Point_$type, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PointCollection extends List$1<Point> {
	static $t: Type = markType(PointCollection, 'PointCollection', (<any>List$1).$type.specialize(Point_$type));
	constructor(initNumber: number);
	constructor(initNumber: number, source_: List$1<Point>);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				super(Point_$type, 0);
			}
			break;

			case 1:
			{
				let source_: List$1<Point> = <List$1<Point>>_rest[0];
				super(Point_$type, 0);
				this._inner = source_._inner;
			}
			break;

		}

	}
}


