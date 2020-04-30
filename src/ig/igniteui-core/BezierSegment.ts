/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PathSegment } from "./PathSegment";
import { Point, Base, Point_$type, Type, markType, PointUtil } from "./type";
import { PathSegmentType } from "./PathSegmentType";

/**
 * @hidden 
 */
export class BezierSegment extends PathSegment {
	static $t: Type = markType(BezierSegment, 'BezierSegment', (<any>PathSegment).$type);
	private _point1: Point = null;
	get point1(): Point {
		return this._point1;
	}
	set point1(value: Point) {
		this._point1 = value;
	}
	private _point2: Point = null;
	get point2(): Point {
		return this._point2;
	}
	set point2(value: Point) {
		this._point2 = value;
	}
	private _point3: Point = null;
	get point3(): Point {
		return this._point3;
	}
	set point3(value: Point) {
		this._point3 = value;
	}
	constructor(initNumber: number);
	constructor(initNumber: number, cp1: Point, cp2: Point, p: Point);
	constructor(initNumber: number, ..._rest: any[]);
	constructor(initNumber: number, ..._rest: any[]) {
		super();
		initNumber = (initNumber == void 0) ? 0 : initNumber;
		switch (initNumber) {
			case 0:
			{
				this.point1 = this.point2 = this.point3 = <Point>{ $type: Point_$type, x: 0, y: 0 };
			}
			break;

			case 1:
			{
				let cp1: Point = <Point>_rest[0];
				let cp2: Point = <Point>_rest[1];
				let p: Point = <Point>_rest[2];
				this.point1 = cp1;
				this.point2 = cp2;
				this.point3 = p;
			}
			break;

		}

	}
	protected get_type(): PathSegmentType {
		return PathSegmentType.Bezier;
	}
	get type(): PathSegmentType {
		return this.get_type();
	}
}


