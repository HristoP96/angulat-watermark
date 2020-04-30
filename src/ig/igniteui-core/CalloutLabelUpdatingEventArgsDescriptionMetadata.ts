/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CalloutLabelUpdatingEventArgsDescription } from "./CalloutLabelUpdatingEventArgsDescription";

/**
 * @hidden 
 */
export class CalloutLabelUpdatingEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(CalloutLabelUpdatingEventArgsDescriptionMetadata, 'CalloutLabelUpdatingEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CalloutLabelUpdatingEventArgsDescriptionMetadata._metadata == null) {
			CalloutLabelUpdatingEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CalloutLabelUpdatingEventArgsDescriptionMetadata.fillMetadata(context, CalloutLabelUpdatingEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("XValueRef", "(w:XValue,j:xValue,wf:XValue)DataRef");
		metadata.item("YValueRef", "(w:YValue,j:yValue,wf:YValue)DataRef");
		metadata.item("ItemRef", "(w:Item,j:item,wf:Item)DataRef");
		metadata.item("LabelRef", "(w:Label,j:label,wf:Label)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		CalloutLabelUpdatingEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CalloutLabelUpdatingEventArgs", () => new CalloutLabelUpdatingEventArgsDescription());
		context.register("CalloutLabelUpdatingEventArgs", CalloutLabelUpdatingEventArgsDescriptionMetadata._metadata);
	}
}


