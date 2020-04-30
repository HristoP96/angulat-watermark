/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEqualityComparer$1, IEqualityComparer$1_$type, Type, markType } from "./type";
import { HalfEdge } from "./HalfEdge";

/**
 * @hidden 
 */
export class EdgeComparer extends Base implements IEqualityComparer$1<HalfEdge> {
	static $t: Type = markType(EdgeComparer, 'EdgeComparer', (<any>Base).$type, [IEqualityComparer$1_$type.specialize((<any>HalfEdge).$type)]);
	equalsC(e1: HalfEdge, e2: HalfEdge): boolean {
		return (e1.b == e2.b && e1.e == e2.e) || (e1.b == e2.e && e1.e == e2.b);
	}
	getHashCodeC(e1: HalfEdge): number {
		return 65536 * Math.max(e1.b, e1.e) + Math.min(e1.b, e1.e);
	}
}


