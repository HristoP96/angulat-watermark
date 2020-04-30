/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisDescriptionMetadata } from "./AxisDescriptionMetadata";
import { SeriesDescriptionMetadata } from "./SeriesDescriptionMetadata";
import { ValueOverlayDescription } from "./ValueOverlayDescription";

/**
 * @hidden 
 */
export class ValueOverlayDescriptionMetadata extends Base {
	static $t: Type = markType(ValueOverlayDescriptionMetadata, 'ValueOverlayDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ValueOverlayDescriptionMetadata._metadata == null) {
			ValueOverlayDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ValueOverlayDescriptionMetadata.fillMetadata(context, ValueOverlayDescriptionMetadata._metadata);
			AxisDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SeriesDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Axis", "ExportedType:Axis");
		metadata.item("Value", "Number:double");
		metadata.item("IsAxisAnnotationEnabled", "Boolean");
		metadata.item("AxisAnnotationFormatLabelRef", "(w:AxisAnnotationFormatLabel,wf:AxisAnnotationFormatLabel)MethodRef");
		metadata.item("AxisAnnotationTextColor", "Brush");
		metadata.item("AxisAnnotationBackground", "Brush");
		metadata.item("AxisAnnotationInterpolatedValuePrecision", "Number:int");
		metadata.item("AxisAnnotationOutline", "Brush");
		metadata.item("AxisAnnotationPaddingLeft", "Number:double");
		metadata.item("AxisAnnotationPaddingTop", "Number:double");
		metadata.item("AxisAnnotationPaddingRight", "Number:double");
		metadata.item("AxisAnnotationPaddingBottom", "Number:double");
		metadata.item("AxisAnnotationStrokeThickness", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		ValueOverlayDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ValueOverlay", () => new ValueOverlayDescription());
		context.register("ValueOverlay", ValueOverlayDescriptionMetadata._metadata);
	}
}


