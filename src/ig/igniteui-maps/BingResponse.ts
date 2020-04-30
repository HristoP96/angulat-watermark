/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { BingResourceSet } from "./BingResourceSet";

/**
 * @hidden 
 */
export class BingResponse extends Base {
	static $t: Type = markType(BingResponse, 'BingResponse');
	constructor() {
		super();
		this.resourceSets = new List$1<BingResourceSet>((<any>BingResourceSet).$type, 0);
	}
	private _resourceSets: List$1<BingResourceSet> = null;
	get resourceSets(): List$1<BingResourceSet> {
		return this._resourceSets;
	}
	set resourceSets(value: List$1<BingResourceSet>) {
		this._resourceSets = value;
	}
}


