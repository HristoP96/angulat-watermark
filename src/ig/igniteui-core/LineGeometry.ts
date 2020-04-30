/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Geometry } from "./Geometry";
import { Point, Base, Type, markType } from "./type";
import { GeometryType } from "./GeometryType";

/**
 * @hidden 
 */
export class LineGeometry extends Geometry {
	static $t: Type = markType(LineGeometry, 'LineGeometry', (<any>Geometry).$type);
	private _startPoint: Point = null;
	get startPoint(): Point {
		return this._startPoint;
	}
	set startPoint(value: Point) {
		this._startPoint = value;
	}
	private _endPoint: Point = null;
	get endPoint(): Point {
		return this._endPoint;
	}
	set endPoint(value: Point) {
		this._endPoint = value;
	}
	protected get_type(): GeometryType {
		return GeometryType.Line;
	}
	get type(): GeometryType {
		return this.get_type();
	}
}


