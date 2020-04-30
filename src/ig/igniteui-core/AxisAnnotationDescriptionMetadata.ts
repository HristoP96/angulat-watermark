/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisAnnotationDescription } from "./AxisAnnotationDescription";

/**
 * @hidden 
 */
export class AxisAnnotationDescriptionMetadata extends Base {
	static $t: Type = markType(AxisAnnotationDescriptionMetadata, 'AxisAnnotationDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AxisAnnotationDescriptionMetadata._metadata == null) {
			AxisAnnotationDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AxisAnnotationDescriptionMetadata.fillMetadata(context, AxisAnnotationDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ValueRef", "(w:Value,wf:Value)DataRef");
		metadata.item("Text", "String");
		metadata.item("FormatLabelRef", "(w:FormatLabel,wf:FormatLabel)MethodRef");
		metadata.item("TextColor", "Brush");
		metadata.item("Background", "Brush");
		metadata.item("Outline", "Brush");
		metadata.item("StrokeThickness", "Number:double");
		metadata.item("BackgroundPaddingLeft", "Number:double");
		metadata.item("BackgroundPaddingTop", "Number:double");
		metadata.item("BackgroundPaddingRight", "Number:double");
		metadata.item("BackgroundPaddingBottom", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		AxisAnnotationDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("AxisAnnotation", () => new AxisAnnotationDescription());
		context.register("AxisAnnotation", AxisAnnotationDescriptionMetadata._metadata);
	}
}


