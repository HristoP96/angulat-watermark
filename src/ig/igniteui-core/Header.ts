/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Point_$type, Type, markType, PointUtil } from "./type";
import { ShapeType } from "./ShapeType";
import { Rect } from "./Rect";
import { List$1 } from "./List$1";
import { XBaseField } from "./XBaseField";

/**
 * @hidden 
 */
export class Header extends Base {
	static $t: Type = markType(Header, 'Header');
	private _shapeType: ShapeType = <ShapeType>0;
	get shapeType(): ShapeType {
		return this._shapeType;
	}
	set shapeType(value: ShapeType) {
		this._shapeType = value;
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
	get xYMin(): Point {
		return <Point>{ $type: Point_$type, x: this.bounds.left, y: this.bounds.top };
	}
	get xYMax(): Point {
		return <Point>{ $type: Point_$type, x: this.bounds.right, y: this.bounds.bottom };
	}
	dbfBaseFields: List$1<XBaseField> = new List$1<XBaseField>((<any>XBaseField).$type, 0);
}


