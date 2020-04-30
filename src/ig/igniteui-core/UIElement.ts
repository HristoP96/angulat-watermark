/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { DependencyObject } from "./DependencyObject";
import { Transform } from "./Transform";
import { Base, Type, markType } from "./type";

/**
 * @hidden 
 */
export class UIElement extends DependencyObject {
	static $t: Type = markType(UIElement, 'UIElement', (<any>DependencyObject).$type);
	private _renderTransform: Transform = null;
	get renderTransform(): Transform {
		return this._renderTransform;
	}
	set renderTransform(value: Transform) {
		this._renderTransform = value;
	}
}


