/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AnnotationLayerDescriptionMetadata } from "./AnnotationLayerDescriptionMetadata";
import { CrosshairLayerDescription } from "./CrosshairLayerDescription";

/**
 * @hidden 
 */
export class CrosshairLayerDescriptionMetadata extends Base {
	static $t: Type = markType(CrosshairLayerDescriptionMetadata, 'CrosshairLayerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CrosshairLayerDescriptionMetadata._metadata == null) {
			CrosshairLayerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CrosshairLayerDescriptionMetadata.fillMetadata(context, CrosshairLayerDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnnotationLayerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("HorizontalLineStroke", "Brush");
		metadata.item("VerticalLineStroke", "Brush");
		metadata.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
		metadata.item("UseInterpolation", "Boolean");
		metadata.item("IsAxisAnnotationEnabled", "Boolean");
		metadata.item("XAxisAnnotationTextColor", "Brush");
		metadata.item("XAxisAnnotationBackground", "Brush");
		metadata.item("XAxisAnnotationInterpolatedValuePrecision", "Number:int");
		metadata.item("XAxisAnnotationOutline", "Brush");
		metadata.item("XAxisAnnotationPaddingLeft", "Number:double");
		metadata.item("XAxisAnnotationPaddingTop", "Number:double");
		metadata.item("XAxisAnnotationPaddingRight", "Number:double");
		metadata.item("XAxisAnnotationPaddingBottom", "Number:double");
		metadata.item("YAxisAnnotationPaddingLeft", "Number:double");
		metadata.item("YAxisAnnotationPaddingTop", "Number:double");
		metadata.item("YAxisAnnotationPaddingRight", "Number:double");
		metadata.item("YAxisAnnotationPaddingBottom", "Number:double");
		metadata.item("XAxisAnnotationStrokeThickness", "Number:double");
		metadata.item("YAxisAnnotationTextColor", "Brush");
		metadata.item("YAxisAnnotationBackground", "Brush");
		metadata.item("YAxisAnnotationInterpolatedValuePrecision", "Number:int");
		metadata.item("YAxisAnnotationOutline", "Brush");
		metadata.item("YAxisAnnotationStrokeThickness", "Number:double");
		metadata.item("VerticalLineVisibility", "ExportedType:string:Visibility");
		metadata.item("HorizontalLineVisibility", "ExportedType:string:Visibility");
		metadata.item("SkipUnknownValues", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		CrosshairLayerDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CrosshairLayer", () => new CrosshairLayerDescription());
		context.register("CrosshairLayer", CrosshairLayerDescriptionMetadata._metadata);
	}
}


