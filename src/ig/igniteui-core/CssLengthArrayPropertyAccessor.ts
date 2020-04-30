/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { Base, Number_$type, Type, markType } from "./type";
import { DoubleCollection } from "./DoubleCollection";
import { DomWrapper, DomWrapper_$type } from "./dom";
import { List$1 } from "./List$1";
import { stringReplace, stringJoin1 } from "./string";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class CssLengthArrayPropertyAccessor extends UIElementPropertyAccessor {
	static $t: Type = markType(CssLengthArrayPropertyAccessor, 'CssLengthArrayPropertyAccessor', (<any>UIElementPropertyAccessor).$type);
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
		let ret: DoubleCollection = new DoubleCollection();
		let wrapper = <DomWrapper><any>target;
		let pixels = wrapper.getStyleProperty(this.propertyName);
		let parts = pixels.split(' ');
		for (let i = 0; i < parts.length; i++) {
			let pixelsNum = parseFloat(stringReplace(parts[i], "px", ""));
			if (isNaN_(pixelsNum)) {
				pixelsNum = 0;
			}
			ret.add(pixelsNum);
		}
		return ret;
	}
	setValue(target: any, value: any): void {
		let wrapper = <DomWrapper><any>target;
		let val = <DoubleCollection>value;
		let vals: string[] = <string[]>new Array(val.count);
		for (let i = 0; i < val.count; i++) {
			vals[i] = val._inner[i].toString();
		}
		let valText: string = stringJoin1<number>(Number_$type, " ", val);
		wrapper.setStyleProperty(this.propertyName, valText);
	}
}


