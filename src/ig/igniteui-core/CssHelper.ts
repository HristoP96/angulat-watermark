/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { DomWrapper, DomWrapper_$type, DomRenderer, DomRenderer_$type } from "./dom";
import { List$1 } from "./List$1";
import { stringContains, stringReplace } from "./string";

/**
 * @hidden 
 */
export class CssHelper extends Base {
	static $t: Type = markType(CssHelper, 'CssHelper');
	static readonly defaultMarginValue: string = "-4321px";
	static readonly defaultColorValue: string = "rgb(3, 2, 1)";
	static readonly defaultBackgroundImageValue: string = "none";
	static readonly defaultTextAlignValue: string = "justify";
	static readonly defaultVerticalAlignValue: string = "baseline";
	static readonly defaultOpacityValue: string = "0.888";
	static readonly defaultVisibilityValue: string = "hidden";
	static readonly defaultWidthHeightValue: string = "4321px";
	static readonly maxClasses: number = 500;
	static getDisoveryElement(renderer: DomRenderer): DomWrapper {
		let elem = renderer.createElement("fakediscoveryelement");
		elem.setStyleProperty("box-sizing", "content-box");
		return elem;
	}
	static getDefaultValue(propertyName: string): string {
		if (propertyName == "color" || propertyName == "border-color" || propertyName == "border-top-color" || propertyName == "border-left-color" || propertyName == "border-right-color" || propertyName == "border-bottom-color" || propertyName == "background-color" || propertyName == "outline-color") {
			return CssHelper.defaultColorValue;
		} else if (propertyName == "margin-left" || propertyName == "margin-top" || propertyName == "margin-right" || propertyName == "margin-bottom") {
			return CssHelper.defaultMarginValue;
		} else if (propertyName == "vertical-align") {
			return CssHelper.defaultVerticalAlignValue;
		} else if (propertyName == "opacity") {
			return CssHelper.defaultOpacityValue;
		} else if (propertyName == "background-image") {
			return CssHelper.defaultBackgroundImageValue;
		} else if (propertyName == "text-align") {
			return CssHelper.defaultTextAlignValue;
		} else if (propertyName == "visibility") {
			return CssHelper.defaultVisibilityValue;
		} else if (CssHelper.isWidthProperty(propertyName)) {
			return CssHelper.defaultWidthHeightValue;
		}
		return "DEFAULT";
	}
	static numberOfClasses(discoveryElement: DomWrapper, classPrefix: string, propertyName: string): number {
		let defaultValue = CssHelper.getDefaultValue(propertyName);
		let curr = 1;
		let done = false;
		while (!done && curr < CssHelper.maxClasses) {
			let className: string = classPrefix + curr.toString();
			discoveryElement.addClass(className);
			let propValue = discoveryElement.getStyleProperty(propertyName);
			if (propValue == defaultValue) {
				break;
			}
			curr++;
		}
		return curr;
	}
	static getPropertyValue1(discoveryElement: DomWrapper, className: string, propertyName: string): string {
		if (className != null) {
			discoveryElement.addClass(className);
		}
		let ret_ = discoveryElement.getStyleProperty(propertyName);
		if (className != null) {
			discoveryElement.removeClass(className);
		}
		if (propertyName == "opacity") {
			ret_ = (Math.round(1000.0 * +ret_) / 1000.0).toString();
		}
		if (CssHelper.isEqualToDefault(ret_, CssHelper.getDefaultValue(propertyName), propertyName)) {
			return null;
		}
		return ret_;
	}
	static getPropertyValue(discoveryElement: DomWrapper, propertyName: string): string {
		return CssHelper.getPropertyValue1(discoveryElement, null, propertyName);
	}
	private static isEqualToDefault(propValue: string, defaultValue: string, propertyName: string): boolean {
		if (propValue == defaultValue) {
			return true;
		}
		if (CssHelper.isWidthProperty(propertyName) && propValue != null && stringContains(propValue, "px")) {
			let num = stringReplace(propValue, "px", "");
			let val = parseFloat(num);
			if (Math.abs(Math.round(val) - 4321) < 2) {
				return true;
			}
			return false;
		} else if (CssHelper.isMarginProperty(propertyName) && propValue != null && stringContains(propValue, "px")) {
			let num1 = stringReplace(propValue, "px", "");
			let val1 = parseFloat(num1);
			if (Math.abs(Math.round(val1) + 4321) < 2) {
				return true;
			}
			return false;
		} else {
			return propValue == defaultValue;
		}
	}
	private static isWidthProperty(propertyName: string): boolean {
		return propertyName == "width" || propertyName == "height" || propertyName == "border-top-width" || propertyName == "border-left-width" || propertyName == "border-right-width" || propertyName == "border-bottom-width" || propertyName == "border-width" || propertyName == "border-radius" || propertyName == "padding" || propertyName == "padding-top" || propertyName == "padding-left" || propertyName == "padding-bottom" || propertyName == "padding-right" || propertyName == "border-top-left-radius";
	}
	private static isMarginProperty(propertyName: string): boolean {
		return propertyName == "margin-top" || propertyName == "margin-left" || propertyName == "margin-right" || propertyName == "margin-bottom";
	}
	static getValuesForClassCollection(discoveryElement: DomWrapper, classPrefix: string, propertyNames: List$1<string>): List$1<List$1<string>> {
		let ret = new List$1<List$1<string>>((<any>List$1).$type.specialize(String_$type), 0);
		let curr = 1;
		let done = false;
		while (!done && curr < CssHelper.maxClasses) {
			let className: string = classPrefix + curr.toString();
			discoveryElement.addClass(className);
			let row: List$1<string> = new List$1<string>(String_$type, 0);
			for (let i = 0; i < propertyNames.count; i++) {
				let propertyName = propertyNames._inner[i];
				let defaultValue = CssHelper.getDefaultValue(propertyName);
				let propValue = discoveryElement.getStyleProperty(propertyName);
				if (CssHelper.isEqualToDefault(propValue, defaultValue, propertyName)) {
					done = true;
					break;
				}
				row.add(propValue);
			}
			discoveryElement.removeClass(className);
			if (!done) {
				ret.add(row);
			}
			curr++;
		}
		return ret;
	}
}


