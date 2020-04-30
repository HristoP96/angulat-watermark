/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { PathSegment } from "./PathSegment";
import { PointCollection } from "./PointCollection";
import { PathSegmentType } from "./PathSegmentType";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PolyLineSegment extends PathSegment {
	static $t: Type = markType(PolyLineSegment, 'PolyLineSegment', (<any>PathSegment).$type);
	constructor() {
		super();
		this._points = new PointCollection(0);
	}
	_points: PointCollection = null;
	get points(): PointCollection {
		return this._points;
	}
	set points(value: PointCollection) {
		this._points = value;
	}
	protected get_type(): PathSegmentType {
		return PathSegmentType.PolyLine;
	}
	get type(): PathSegmentType {
		return this.get_type();
	}
}


