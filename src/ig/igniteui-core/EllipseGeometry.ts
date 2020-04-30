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
export class EllipseGeometry extends Geometry {
	static $t: Type = markType(EllipseGeometry, 'EllipseGeometry', (<any>Geometry).$type);
	private _center: Point = null;
	get center(): Point {
		return this._center;
	}
	set center(value: Point) {
		this._center = value;
	}
	private _radiusX: number = 0;
	get radiusX(): number {
		return this._radiusX;
	}
	set radiusX(value: number) {
		this._radiusX = value;
	}
	private _radiusY: number = 0;
	get radiusY(): number {
		return this._radiusY;
	}
	set radiusY(value: number) {
		this._radiusY = value;
	}
	protected get_type(): GeometryType {
		return GeometryType.Ellipse;
	}
	get type(): GeometryType {
		return this.get_type();
	}
}


