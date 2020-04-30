/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, markType } from "./type";
import { UIElementPropertyId } from "./UIElementPropertyId";

/**
 * @hidden 
 */
export abstract class UIElementPropertyAccessor extends Base {
	static $t: Type = markType(UIElementPropertyAccessor, 'UIElementPropertyAccessor');
	private _id: UIElementPropertyId = <UIElementPropertyId>0;
	get id(): UIElementPropertyId {
		return this._id;
	}
	set id(value: UIElementPropertyId) {
		this._id = value;
	}
	abstract setValue(target: any, value: any): void;
	abstract getValue(target: any): any;
}


