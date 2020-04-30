/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, Type, String_$type, Delegate_$type, markType, getInstanceType } from "./type";
import { Dictionary$2 } from "./Dictionary$2";
import { TypeDescriptionPlatform } from "./TypeDescriptionPlatform";
import { stringReplace } from "./string";

/**
 * @hidden 
 */
export class TypeDescriptionCleanups extends Base {
	static $t: Type = markType(TypeDescriptionCleanups, 'TypeDescriptionCleanups');
	private _cleanups: Dictionary$2<string, (arg1: any) => void> = new Dictionary$2<string, (arg1: any) => void>(String_$type, Delegate_$type, 0);
	constructor() {
		super();
		this._cleanups.item("Series", (s: any) => {
			let s_ = s;
			if (s_.removeAxes) s_.removeAxes();
		});
	}
	cleanup(platform: TypeDescriptionPlatform, obj: any): void {
		if (obj == null) {
			return;
		}
		let typeName: string = "";
		let type: Type;
		let obj_ = obj;
		let impl_ = obj_.i;
		let hasImpl = <boolean>(impl_);
		if (hasImpl) {
			type = getInstanceType(impl_);
		} else {
			impl_ = obj_._chart || obj_._map || obj_._gauge;
			hasImpl = <boolean>(impl_);
			if (hasImpl) {
				type = getInstanceType(impl_);
			} else {
				return;
			}
		}
		while (type != null) {
			typeName = type.typeName;
			typeName = stringReplace(stringReplace(typeName, "Ultra", ""), "Xam", "");
			if (this._cleanups.containsKey(typeName)) {
				this._cleanups.item(typeName)(obj);
			}
			type = type.baseType;
			if (type != null && (type.typeName == "Object" || type.typeName == "Base")) {
				return;
			}
		}
	}
}


