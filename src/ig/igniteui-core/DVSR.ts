/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { DomRenderer, DomRenderer_$type } from "./dom";
import { stringEmpty } from "./string";

/**
 * @hidden 
 */
export class DVSR extends Base {
	static $t: Type = markType(DVSR, 'DVSR');
	private _container: DomRenderer = null;
	get container(): DomRenderer {
		return this._container;
	}
	set container(value: DomRenderer) {
		this._container = value;
	}
	constructor(container: DomRenderer) {
		super();
		this._container = container;
	}
	getString(resourceName_: string): string {
		let resource: string = stringEmpty();
		resourceName_ = resourceName_.charAt(0).toLowerCase() + resourceName_.substr(1);
		resource = this._container.getResourceString(resourceName_);
		return resource;
	}
}


