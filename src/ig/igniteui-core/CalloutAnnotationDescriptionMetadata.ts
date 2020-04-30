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
import { CalloutAnnotationDescription } from "./CalloutAnnotationDescription";

/**
 * @hidden 
 */
export class CalloutAnnotationDescriptionMetadata extends Base {
	static $t: Type = markType(CalloutAnnotationDescriptionMetadata, 'CalloutAnnotationDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CalloutAnnotationDescriptionMetadata._metadata == null) {
			CalloutAnnotationDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CalloutAnnotationDescriptionMetadata.fillMetadata(context, CalloutAnnotationDescriptionMetadata._metadata);
			SeriesDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("XValueRef", "(w:XValue,wf:XValue)DataRef");
		metadata.item("YValueRef", "(w:YValue,wf:YValue)DataRef");
		metadata.item("Text", "String");
		metadata.item("KeyRef", "(w:Key,wf:Key)DataRef");
		metadata.item("ContentRef", "(w:Content,wf:Content)DataRef");
		metadata.item("Series", "ExportedType:Series");
		metadata.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
		metadata.item("TextColor", "Brush");
		metadata.item("Background", "Brush");
		metadata.item("Outline", "Brush");
		metadata.item("LeaderBrush", "Brush");
		metadata.item("StrokeThickness", "Number:double");
		metadata.item("BackgroundPaddingLeft", "Number:double");
		metadata.item("BackgroundPaddingTop", "Number:double");
		metadata.item("BackgroundPaddingRight", "Number:double");
		metadata.item("BackgroundPaddingBottom", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		CalloutAnnotationDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CalloutAnnotation", () => new CalloutAnnotationDescription());
		context.register("CalloutAnnotation", CalloutAnnotationDescriptionMetadata._metadata);
	}
}


