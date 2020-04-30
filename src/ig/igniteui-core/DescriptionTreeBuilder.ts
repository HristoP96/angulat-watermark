/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, typeCast, Array_$type, Type, markType } from "./type";
import { List$1 } from "./List$1";
import { HashSet$1 } from "./HashSet$1";
import { DescriptionTreeNode } from "./DescriptionTreeNode";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Description } from "./Description";
import { DescriptionPropertyValue } from "./DescriptionPropertyValue";

/**
 * @hidden 
 */
export class DescriptionTreeBuilder extends Base {
	static $t: Type = markType(DescriptionTreeBuilder, 'DescriptionTreeBuilder');
	static getPropertyKeys(item_: any): List$1<string> {
		let propertyKey_: string = null;
		let ret_: List$1<string> = new List$1<string>(String_$type, 0);
		let seen_: HashSet$1<string> = new HashSet$1<string>(String_$type, 0);
		let exclusions_ = {};
		
            let seen = new Set<string>();
    let comp = item_;
    while (comp = (comp.prototype || Object.getPrototypeOf(comp))) {
        if (comp == Base.prototype) {
            break;
        }
        let props = Object.getOwnPropertyNames(comp.constructor.prototype);
        for (let i = 0; i < props.length; i++) {
            if (!seen.has(props[i])) {
                seen.add(props[i]);
                ret_.add(props[i])
            }
        }
    }
    ;
		return ret_;
	}
	static createTree(context: TypeDescriptionContext, description_: Description): DescriptionTreeNode {
		let root: DescriptionTreeNode = new DescriptionTreeNode();
		if (description_ == null) {
			return null;
		}
		let keys = DescriptionTreeBuilder.getPropertyKeys(description_);
		for (let i = 0; i < keys.count; i++) {
			let key_ = keys._inner[i];
			if (key_.toLowerCase() != "type" && !description_.isDirty(DescriptionTreeBuilder.toPascal(key_))) {
				continue;
			}
			let value = description_[key_];
			if (typeCast<Description>((<any>Description).$type, value) !== null) {
				let subTree = DescriptionTreeBuilder.createTree(context, <Description>value);
				value = subTree;
			}
			if (typeCast<any[]>(Array_$type, value) !== null) {
				let arr: any[] = <any[]>value;
				let newArr: any[] = <any[]>new Array(arr.length);
				for (let j = 0; j < newArr.length; j++) {
					let item: any = arr[j];
					if (typeCast<Description>((<any>Description).$type, item) !== null) {
						let subTree1 = DescriptionTreeBuilder.createTree(context, <Description>item);
						newArr[j] = subTree1;
					} else {
						newArr[j] = item;
					}
				}
				value = newArr;
			}
			if (key_.toLowerCase() == "type") {
				root.type = <string>value;
			}
			root.add(DescriptionTreeBuilder.toPascal(key_), value);
		}
		if (root.has("type")) {
			let type = <string>root.get("type").value;
			let values = root.items();
			for (let i1 = 0; i1 < values.count; i1++) {
				let value1 = values._inner[i1];
				value1.metadata = context.getMetadata(type, value1.propertyName);
			}
		}
		return root;
	}
	private static toPascal(key_: string): string {
		if (key_ == null) {
			return null;
		}
		return key_.substr(0, 1).toUpperCase() + key_.substr(1);
	}
}


