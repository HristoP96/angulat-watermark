/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Geometry } from "./Geometry";
import { GeometryCollection } from "./GeometryCollection";
import { GeometryType } from "./GeometryType";
import { FillRule } from "./FillRule";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GeometryGroup extends Geometry {
	static $t: Type = markType(GeometryGroup, 'GeometryGroup', (<any>Geometry).$type);
	constructor() {
		super();
		this.children = new GeometryCollection();
	}
	private _children: GeometryCollection = null;
	get children(): GeometryCollection {
		return this._children;
	}
	set children(value: GeometryCollection) {
		this._children = value;
	}
	protected get_type(): GeometryType {
		return GeometryType.Group;
	}
	get type(): GeometryType {
		return this.get_type();
	}
	private _fillRule: FillRule = <FillRule>0;
	get fillRule(): FillRule {
		return this._fillRule;
	}
	set fillRule(value: FillRule) {
		this._fillRule = value;
	}
}


