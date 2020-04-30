/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { Base, Type, markType } from "./type";
import { DomWrapper, DomWrapper_$type } from "./dom";
import { Brush } from "./Brush";

/**
 * @hidden 
 */
export class CssColorPropertyAccessor extends UIElementPropertyAccessor {
	static $t: Type = markType(CssColorPropertyAccessor, 'CssColorPropertyAccessor', (<any>UIElementPropertyAccessor).$type);
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
		let color = wrapper.getStyleProperty(this.propertyName);
		return Brush.create(color);
	}
	setValue(target: any, value: any): void {
		let wrapper = <DomWrapper><any>target;
		let b: Brush = <Brush>value;
		let color = b._fill;
		wrapper.setStyleProperty(this.propertyName, color);
	}
}


