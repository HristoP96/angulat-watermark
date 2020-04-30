/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Shape } from "./Shape";
import { PointCollection } from "./PointCollection";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Polyline extends Shape {
	static $t: Type = markType(Polyline, 'Polyline', (<any>Shape).$type);
	constructor() {
		super();
		this.points = new PointCollection(0);
	}
	private _points: PointCollection = null;
	get points(): PointCollection {
		return this._points;
	}
	set points(value: PointCollection) {
		this._points = value;
	}
}


