/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { PathSegment } from "./PathSegment";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PathSegmentCollection extends List$1<PathSegment> {
	static $t: Type = markType(PathSegmentCollection, 'PathSegmentCollection', (<any>List$1).$type.specialize((<any>PathSegment).$type));
	constructor() {
		super((<any>PathSegment).$type, 0);
	}
}


