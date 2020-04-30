/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { RingSeriesBaseDescription } from "./RingSeriesBaseDescription";
import { Description } from "./Description";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class HierarchicalRingSeriesDescription extends RingSeriesBaseDescription {
	static $t: Type = markType(HierarchicalRingSeriesDescription, 'HierarchicalRingSeriesDescription', (<any>RingSeriesBaseDescription).$type);
	protected get_type(): string {
		return "HierarchicalRingSeries";
	}
	constructor() {
		super();
	}
	private _childrenMemberPath: string = null;
	get childrenMemberPath(): string {
		return this._childrenMemberPath;
	}
	set childrenMemberPath(value: string) {
		this._childrenMemberPath = value;
		this.markDirty("ChildrenMemberPath");
	}
}


