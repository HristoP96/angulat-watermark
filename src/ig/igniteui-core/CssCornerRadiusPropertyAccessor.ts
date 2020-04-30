/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { UIElementPropertyAccessor } from "./UIElementPropertyAccessor";
import { Base, Type, markType } from "./type";
import { DomWrapper, DomWrapper_$type } from "./dom";
import { CornerRadius } from "./CornerRadius";
import { stringReplace } from "./string";
import { isNaN_ } from "./number";

/**
 * @hidden 
 */
export class CssCornerRadiusPropertyAccessor extends UIElementPropertyAccessor {
	static $t: Type = markType(CssCornerRadiusPropertyAccessor, 'CssCornerRadiusPropertyAccessor', (<any>UIElementPropertyAccessor).$type);
	private _topLeftName: string = null;
	private _topRightName: string = null;
	private _bottomRightName: string = null;
	private _bottomLeftName: string = null;
	constructor(propertyName: string) {
		super();
		this.propertyName = propertyName;
		this._topLeftName = "top-left-border-radius";
		this._topRightName = "top-right-border-radius";
		this._bottomRightName = "bottom-right-border-radius";
		this._bottomLeftName = "bottom-left-border-radius";
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
		let topLeft = wrapper.getStyleProperty(this._topLeftName);
		let topRight = wrapper.getStyleProperty(this._topRightName);
		let bottomRight = wrapper.getStyleProperty(this._bottomRightName);
		let bottomLeft = wrapper.getStyleProperty(this._bottomLeftName);
		let topLeftNum = parseFloat(stringReplace(topLeft, "px", ""));
		let topRightNum = parseFloat(stringReplace(topRight, "px", ""));
		let bottomRightNum = parseFloat(stringReplace(bottomRight, "px", ""));
		let bottomLeftNum = parseFloat(stringReplace(bottomLeft, "px", ""));
		if (isNaN_(topLeftNum)) {
			topLeftNum = 0;
		}
		if (isNaN_(topRightNum)) {
			topRightNum = 0;
		}
		if (isNaN_(bottomRightNum)) {
			bottomRightNum = 0;
		}
		if (isNaN_(bottomLeftNum)) {
			bottomLeftNum = 0;
		}
		return new CornerRadius(1, topLeftNum, topRightNum, bottomRightNum, bottomLeftNum);
	}
	setValue(target: any, value: any): void {
		let wrapper = <DomWrapper><any>target;
		let b: CornerRadius = <CornerRadius>value;
		let t = b.topLeft + "px " + b.topRight + "px " + b.bottomRight + "px " + b.bottomLeft + "px";
		wrapper.setStyleProperty(this.propertyName, t);
	}
}


