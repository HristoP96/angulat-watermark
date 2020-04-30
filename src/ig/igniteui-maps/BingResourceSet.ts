/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "igniteui-core/type";
import { List$1 } from "igniteui-core/List$1";
import { ImageryMetadata } from "./ImageryMetadata";

/**
 * @hidden 
 */
export class BingResourceSet extends Base {
	static $t: Type = markType(BingResourceSet, 'BingResourceSet');
	constructor() {
		super();
		this.resources = new List$1<ImageryMetadata>((<any>ImageryMetadata).$type, 0);
	}
	private _resources: List$1<ImageryMetadata> = null;
	get resources(): List$1<ImageryMetadata> {
		return this._resources;
	}
	set resources(value: List$1<ImageryMetadata>) {
		this._resources = value;
	}
}


