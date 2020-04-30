/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { KDPointData } from "./KDPointData";
import { SearchData } from "./SearchData";

/**
 * @hidden 
 */
export class KDTreeNode2D extends Base {
	static $t: Type = markType(KDTreeNode2D, 'KDTreeNode2D');
	unfinished: boolean = false;
	isX: boolean = false;
	descendantCount: number = 0;
	median: KDPointData = null;
	leftChild: KDTreeNode2D = null;
	rightChild: KDTreeNode2D = null;
	otherPoints: KDPointData[] = null;
	searchData: SearchData = null;
}


