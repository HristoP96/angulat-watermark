/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { FrameworkElement } from "./FrameworkElement";
import { UIElementCollection } from "./UIElementCollection";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class Panel extends FrameworkElement {
	static $t: Type = markType(Panel, 'Panel', (<any>FrameworkElement).$type);
	constructor() {
		super();
		this.children = new UIElementCollection(this);
	}
	private _children: UIElementCollection = null;
	get children(): UIElementCollection {
		return this._children;
	}
	set children(value: UIElementCollection) {
		this._children = value;
	}
}


