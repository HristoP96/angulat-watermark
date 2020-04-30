/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { Base, Type, markType } from "./type";
import { DomWrapper, DomWrapper_$type } from "./dom";
import { stringReplace } from "./string";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class CssFloatPropertyAccessor extends UIElementPropertyAccessor {
	static $t: Type = markType(CssFloatPropertyAccessor, 'CssFloatPropertyAccessor', (<any>UIElementPropertyAccessor).$type);
	constructor(propertyName: string) {
		super();
		this.propertyName = propertyName;
	}
	private _propertyName: string = null;
	get propertyName(): string {
		return this._propertyName;
	}
	set propertyName(value: string) {
		this._propertyName = value;
	}
	getValue(target: any): any {
		let wrapper = <DomWrapper><any>target;
		let val = wrapper.getStyleProperty(this.propertyName);
		let valNum = parseFloat(stringReplace(val, "px", ""));
		if (isNaN_(valNum)) {
			valNum = 0;
		}
		return valNum;
	}
	setValue(target: any, value: any): void {
		let wrapper = <DomWrapper><any>target;
		let val: number = <number>value;
		let valText: string = val.toString();
		wrapper.setStyleProperty(this.propertyName, valText);
	}
}


