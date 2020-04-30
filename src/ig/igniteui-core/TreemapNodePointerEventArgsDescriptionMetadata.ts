/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TreemapNodePointerEventArgsDescription } from "./TreemapNodePointerEventArgsDescription";

/**
 * @hidden 
 */
export class TreemapNodePointerEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(TreemapNodePointerEventArgsDescriptionMetadata, 'TreemapNodePointerEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TreemapNodePointerEventArgsDescriptionMetadata._metadata == null) {
			TreemapNodePointerEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TreemapNodePointerEventArgsDescriptionMetadata.fillMetadata(context, TreemapNodePointerEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Value", "Number:double");
		metadata.item("Sum", "Number:double");
		metadata.item("CustomValueRef", "(w:CustomValue,wf:CustomValue)DataRef");
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("ParentItemRef", "(w:ParentItem,wf:ParentItem)DataRef");
		metadata.item("Position", "Point");
		metadata.item("IsRightButton", "Boolean");
		metadata.item("IsHandled", "Boolean");
		metadata.item("IsOverHeader", "Boolean");
		metadata.item("Label", "String");
		metadata.item("ParentValue", "Number:double");
		metadata.item("ParentLabel", "String");
		metadata.item("ParentSum", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		TreemapNodePointerEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TreemapNodePointerEventArgs", () => new TreemapNodePointerEventArgsDescription());
		context.register("TreemapNodePointerEventArgs", TreemapNodePointerEventArgsDescriptionMetadata._metadata);
	}
}


