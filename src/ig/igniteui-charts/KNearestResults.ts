/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { KNearestResult } from "./KNearestResult";

/**
 * @hidden 
 */
export class KNearestResults extends Base {
	static $t: Type = markType(KNearestResults, 'KNearestResults');
	consideredCount: number = 0;
	consideredCutoff: number = 0;
	results: List$1<KNearestResult> = null;
	breakOut: boolean = false;
	currentNearestDist: number = 0;
	currentFurthestDist: number = 0;
	currentFurthestIndex: number = 0;
}


