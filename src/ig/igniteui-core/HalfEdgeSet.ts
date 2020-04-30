/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, IEnumerable$1, IEnumerable$1_$type, IEnumerable, IEnumerable_$type, IEnumerator$1, IEnumerator$1_$type, IEnumerator, IEnumerator_$type, Type, markType, getEnumerator } from "./type";
import { HalfEdge } from "./HalfEdge";
import { Dictionary$2 } from "./Dictionary$2";
import { EdgeComparer } from "./EdgeComparer";

/**
 * @hidden 
 */
export class HalfEdgeSet extends Base implements IEnumerable$1<HalfEdge> {
	static $t: Type = markType(HalfEdgeSet, 'HalfEdgeSet', (<any>Base).$type, [IEnumerable$1_$type.specialize((<any>HalfEdge).$type)]);
	constructor() {
		super();
		this.edges = new Dictionary$2<HalfEdge, any>((<any>HalfEdge).$type, (<any>Base).$type, 2, new EdgeComparer());
	}
	getEnumerator(): IEnumerator$1<HalfEdge> {
		return getEnumerator(this.edges.keys);
	}
	getEnumeratorObject(): IEnumerator {
		return this.getEnumerator();
	}
	add(edge: HalfEdge): void {
		this.edges.addItem(edge, null);
	}
	remove(edge: HalfEdge): void {
		this.edges.removeItem(edge);
	}
	clear(): void {
		this.edges.clear();
	}
	get count(): number {
		return this.edges.count;
	}
	contains(edge: HalfEdge): boolean {
		return this.edges.containsKey(edge);
	}
	private edges: Dictionary$2<HalfEdge, any> = null;
}


