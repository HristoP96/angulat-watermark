/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { Geometry } from "./Geometry";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class GeometryCollection extends List$1<Geometry> {
	static $t: Type = markType(GeometryCollection, 'GeometryCollection', (<any>List$1).$type.specialize((<any>Geometry).$type));
	constructor() {
		super((<any>Geometry).$type, 0);
	}
}


