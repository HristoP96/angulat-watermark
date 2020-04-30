/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TreemapNodeStyleDescriptionMetadata } from "./TreemapNodeStyleDescriptionMetadata";
import { TreemapNodeStylingEventArgsDescription } from "./TreemapNodeStylingEventArgsDescription";

/**
 * @hidden 
 */
export class TreemapNodeStylingEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(TreemapNodeStylingEventArgsDescriptionMetadata, 'TreemapNodeStylingEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TreemapNodeStylingEventArgsDescriptionMetadata._metadata == null) {
			TreemapNodeStylingEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TreemapNodeStylingEventArgsDescriptionMetadata.fillMetadata(context, TreemapNodeStylingEventArgsDescriptionMetadata._metadata);
			TreemapNodeStyleDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Value", "Number:double");
		metadata.item("Sum", "Number:double");
		metadata.item("CustomValueRef", "(w:CustomValue,wf:CustomValue)DataRef");
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("ParentItemRef", "(w:ParentItem,wf:ParentItem)DataRef");
		metadata.item("Label", "String");
		metadata.item("ParentValue", "Number:double");
		metadata.item("ParentLabel", "String");
		metadata.item("ParentSum", "Number:double");
		metadata.item("Style", "ExportedType:TreemapNodeStyle");
	}
	static register(context: TypeDescriptionContext): void {
		TreemapNodeStylingEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TreemapNodeStylingEventArgs", () => new TreemapNodeStylingEventArgsDescription());
		context.register("TreemapNodeStylingEventArgs", TreemapNodeStylingEventArgsDescriptionMetadata._metadata);
	}
}


