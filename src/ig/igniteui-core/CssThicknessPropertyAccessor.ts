/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { Base, Type, markType } from "./type";
import { DomWrapper, DomWrapper_$type } from "./dom";
import { Thickness } from "./Thickness";
import { stringReplace } from "./string";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class CssThicknessPropertyAccessor extends UIElementPropertyAccessor {
	static $t: Type = markType(CssThicknessPropertyAccessor, 'CssThicknessPropertyAccessor', (<any>UIElementPropertyAccessor).$type);
	private _leftName: string = null;
	private _topName: string = null;
	private _rightName: string = null;
	private _bottomName: string = null;
	constructor(propertyName: string) {
		super();
		this.propertyName = propertyName;
		if (this.propertyName == "border-width") {
			this._leftName = "border-left-width";
			this._topName = "border-top-width";
			this._rightName = "border-right-width";
			this._bottomName = "border-bottom-width";
		} else {
			this._leftName = this.propertyName + "-left";
			this._topName = this.propertyName + "-top";
			this._rightName = this.propertyName + "-right";
			this._bottomName = this.propertyName + "-bottom";
		}
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
		let left = wrapper.getStyleProperty(this._leftName);
		let top = wrapper.getStyleProperty(this._topName);
		let right = wrapper.getStyleProperty(this._rightName);
		let bottom = wrapper.getStyleProperty(this._bottomName);
		let leftNum = parseFloat(stringReplace(left, "px", ""));
		let topNum = parseFloat(stringReplace(left, "px", ""));
		let rightNum = parseFloat(stringReplace(left, "px", ""));
		let bottomNum = parseFloat(stringReplace(left, "px", ""));
		if (isNaN_(leftNum)) {
			leftNum = 0;
		}
		if (isNaN_(topNum)) {
			topNum = 0;
		}
		if (isNaN_(rightNum)) {
			rightNum = 0;
		}
		if (isNaN_(bottomNum)) {
			bottomNum = 0;
		}
		return new Thickness(1, leftNum, topNum, rightNum, bottomNum);
	}
	setValue(target: any, value: any): void {
		let wrapper = <DomWrapper><any>target;
		let b: Thickness = <Thickness>value;
		let t = b.top + "px " + b.right + "px " + b.bottom + "px " + b.left + "px";
		wrapper.setStyleProperty(this.propertyName, t);
	}
}


