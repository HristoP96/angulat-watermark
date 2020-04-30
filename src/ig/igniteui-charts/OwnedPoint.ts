/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "igniteui-core/type";

/**
 * @hidden 
 */
export class OwnedPoint extends Base {
	static $t: Type = markType(OwnedPoint, 'OwnedPoint');
	constructor() {
		super();
		this.columnValues = <Point>{ $type: Point_$type, x: 0, y: 0 };
	}
	private _point: Point = null;
	get point(): Point {
		return this._point;
	}
	set point(value: Point) {
		this._point = value;
	}
	private _ownerItem: any = null;
	get ownerItem(): any {
		return this._ownerItem;
	}
	set ownerItem(value: any) {
		this._ownerItem = value;
	}
	private _columnValues: Point = null;
	get columnValues(): Point {
		return this._columnValues;
	}
	set columnValues(value: Point) {
		this._columnValues = value;
	}
}


