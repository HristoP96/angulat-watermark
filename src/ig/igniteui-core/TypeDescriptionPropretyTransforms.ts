/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Delegate_$type, Type, markType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { DescriptionTreeAction } from "./DescriptionTreeAction";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";
import { TypeDescriptionPlatform } from "./TypeDescriptionPlatform";
import { TypeDescriptionMetadata } from "./TypeDescriptionMetadata";
import { stringReplace } from "./string";

/**
 * @hidden 
 */
export class TypeDescriptionPropretyTransforms extends Base {
	static $t: Type = markType(TypeDescriptionPropretyTransforms, 'TypeDescriptionPropretyTransforms');
	private _transforms: Dictionary$2<string, (arg1: any, arg2: DescriptionTreeAction) => any> = new Dictionary$2<string, (arg1: any, arg2: DescriptionTreeAction) => any>(String_$type, Delegate_$type, 0);
	constructor() {
		super();
		this._transforms.item("VisibilityToBooleanTransform", (l: any, m: DescriptionTreeAction) => {
			if (l.toString().toLowerCase() == "visible") {
				return true;
			}
			return false;
		});
		this._transforms.item("FontFamilyTransform", (l: any, m: DescriptionTreeAction) => {
			let style = this.getCurrentStyle(m);
			let size = this.getCurrentSize(m);
			let weight = this.getCurrentWeight(m);
			let familyString = <string>l;
			if (familyString == null) {
				familyString = "Verdana";
			}
			return style + " " + weight + " " + size + " " + familyString;
		});
		this._transforms.item("FontStyleTransform", (l: any, m: DescriptionTreeAction) => {
			let family = this.getCurrentFamily(m);
			let size = this.getCurrentSize(m);
			let weight = this.getCurrentWeight(m);
			let styleString = <string>l;
			if (styleString == null) {
				styleString = "normal";
			}
			return styleString + " " + weight + " " + size + " " + family;
		});
		this._transforms.item("FontSizeTransform", (l: any, m: DescriptionTreeAction) => {
			let family = this.getCurrentFamily(m);
			let style = this.getCurrentStyle(m);
			let weight = this.getCurrentWeight(m);
			let sizeString = <string>l != null ? l.toString() + "px" : null;
			if (sizeString == null) {
				sizeString = "14px";
			}
			return style + " " + weight + " " + sizeString + " " + family;
		});
		this._transforms.item("FontWeightTransform", (l: any, m: DescriptionTreeAction) => {
			let family = this.getCurrentFamily(m);
			let size = this.getCurrentSize(m);
			let style = this.getCurrentStyle(m);
			let weightString = <string>l;
			if (weightString == null) {
				weightString = "normal";
			}
			weightString = weightString.toLowerCase();
			return style + " " + weightString + " " + size + " " + family;
		});
	}
	getCurrentFamily(action: DescriptionTreeAction): string {
		let prop = stringReplace(stringReplace(stringReplace(action.propertyName, "Style", "Family"), "Weight", "Family"), "Size", "Family");
		let family: string = "Verdana";
		if (action.targetNode.has(prop)) {
			family = <string>action.targetNode.get(prop).value;
			if (family == null) {
				family = "Verdana";
			}
		}
		return family;
	}
	getCurrentStyle(action: DescriptionTreeAction): string {
		let prop = stringReplace(stringReplace(stringReplace(action.propertyName, "Family", "Style"), "Weight", "Style"), "Size", "Style");
		let style: string = "normal";
		if (action.targetNode.has(prop)) {
			style = <string>action.targetNode.get(prop).value;
			if (style == null) {
				style = "normal";
			}
		}
		return style;
	}
	getCurrentSize(action: DescriptionTreeAction): string {
		let prop = stringReplace(stringReplace(stringReplace(action.propertyName, "Family", "Size"), "Weight", "Size"), "Style", "Size");
		let size: string = "14px";
		if (action.targetNode.has(prop)) {
			size = <string>action.targetNode.get(prop).value;
			if (size == null) {
				size = "14px";
			} else {
				size = size.toString() + "px";
			}
		}
		return size;
	}
	getCurrentWeight(action: DescriptionTreeAction): string {
		let prop = stringReplace(stringReplace(stringReplace(action.propertyName, "Family", "Weight"), "Size", "Weight"), "Style", "Weight");
		let weight: string = "normal";
		if (action.targetNode.has(prop)) {
			weight = <string>action.targetNode.get(prop).value;
			if (weight == null) {
				weight = "normal";
			}
			weight = weight.toLowerCase();
		}
		return weight;
	}
	transform(platform: TypeDescriptionPlatform, propertyValue: any, action: DescriptionTreeAction): any {
		let meta = action.propertyMetadata;
		if (meta == null) {
			return propertyValue;
		}
		let transformName = meta.getTransformName(platform);
		if (transformName != null && this._transforms.containsKey(transformName)) {
			let transform = this._transforms.item(transformName);
			return transform(propertyValue, action);
		}
		return propertyValue;
	}
}


