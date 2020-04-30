/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { List$1 } from "./List$1";
import { PathFigure } from "./PathFigure";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class PathFigureCollection extends List$1<PathFigure> {
	static $t: Type = markType(PathFigureCollection, 'PathFigureCollection', (<any>List$1).$type.specialize((<any>PathFigure).$type));
	constructor() {
		super((<any>PathFigure).$type, 0);
	}
}


