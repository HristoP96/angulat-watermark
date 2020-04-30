/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Point, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { Rect } from "igniteui-core/Rect";

/**
 * @hidden 
 */
export class FlattenedShape extends Base {
	static $t: Type = markType(FlattenedShape, 'FlattenedShape');
	private _shape: List$1<Point> = null;
	get shape(): List$1<Point> {
		return this._shape;
	}
	set shape(value: List$1<Point>) {
		this._shape = value;
	}
	private _bounds: Rect = null;
	get bounds(): Rect {
		return this._bounds;
	}
	set bounds(value: Rect) {
		this._bounds = value;
	}
	private _fullBounds: Rect = null;
	get fullBounds(): Rect {
		return this._fullBounds;
	}
	set fullBounds(value: Rect) {
		this._fullBounds = value;
	}
}


