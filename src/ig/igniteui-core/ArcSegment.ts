/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PathSegment } from "./PathSegment";
import { Point, Base, Type, markType } from "./type";
import { SweepDirection } from "./SweepDirection";
import { Size } from "./Size";
import { PathSegmentType } from "./PathSegmentType";

/**
 * @hidden 
 */
export class ArcSegment extends PathSegment {
	static $t: Type = markType(ArcSegment, 'ArcSegment', (<any>PathSegment).$type);
	constructor() {
		super();
		this.isLargeArc = false;
		this.sweepDirection = SweepDirection.Counterclockwise;
	}
	private _point: Point = null;
	get point(): Point {
		return this._point;
	}
	set point(value: Point) {
		this._point = value;
	}
	private _isLargeArc: boolean = false;
	get isLargeArc(): boolean {
		return this._isLargeArc;
	}
	set isLargeArc(value: boolean) {
		this._isLargeArc = value;
	}
	private _sweepDirection: SweepDirection = <SweepDirection>0;
	get sweepDirection(): SweepDirection {
		return this._sweepDirection;
	}
	set sweepDirection(value: SweepDirection) {
		this._sweepDirection = value;
	}
	private _size: Size = new Size();
	get size(): Size {
		return this._size;
	}
	set size(value: Size) {
		this._size = value;
	}
	private _rotationAngle: number = 0;
	get rotationAngle(): number {
		return this._rotationAngle;
	}
	set rotationAngle(value: number) {
		this._rotationAngle = value;
	}
	protected get_type(): PathSegmentType {
		return PathSegmentType.Arc;
	}
	get type(): PathSegmentType {
		return this.get_type();
	}
}


