/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { CalloutStyleUpdatingEventArgsDescription } from "./CalloutStyleUpdatingEventArgsDescription";

/**
 * @hidden 
 */
export class CalloutStyleUpdatingEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(CalloutStyleUpdatingEventArgsDescriptionMetadata, 'CalloutStyleUpdatingEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CalloutStyleUpdatingEventArgsDescriptionMetadata._metadata == null) {
			CalloutStyleUpdatingEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CalloutStyleUpdatingEventArgsDescriptionMetadata.fillMetadata(context, CalloutStyleUpdatingEventArgsDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
		metadata.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("Series", "ExportedType:Series");
		metadata.item("Background", "Brush");
		metadata.item("TextColor", "Brush");
		metadata.item("Outline", "Brush");
		metadata.item("LeaderBrush", "Brush");
		metadata.item("StrokeThickness", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		CalloutStyleUpdatingEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CalloutStyleUpdatingEventArgs", () => new CalloutStyleUpdatingEventArgsDescription());
		context.register("CalloutStyleUpdatingEventArgs", CalloutStyleUpdatingEventArgsDescriptionMetadata._metadata);
	}
}


