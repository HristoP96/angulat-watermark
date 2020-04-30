/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { StyleShapeEventArgsDescription } from "./StyleShapeEventArgsDescription";

/**
 * @hidden 
 */
export class StyleShapeEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(StyleShapeEventArgsDescriptionMetadata, 'StyleShapeEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (StyleShapeEventArgsDescriptionMetadata._metadata == null) {
			StyleShapeEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			StyleShapeEventArgsDescriptionMetadata.fillMetadata(context, StyleShapeEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ItemRef", "(w:Item,wf:Item)DataRef");
		metadata.item("ShapeFill", "(w:ShapeStyle.Fill,wf:ShapeFill)String");
		metadata.item("ShapeStroke", "(w:ShapeStyle.Stroke,wf:ShapeStroke)String");
		metadata.item("ShapeStrokeThickness", "(w:ShapeStyle.StrokeThickness,wf:ShapeStrokeThickness)Number:double");
		metadata.item("ShapeOpacity", "(w:ShapeStyle.Opacity,wf:ShapeOpacity)Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		StyleShapeEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("StyleShapeEventArgs", () => new StyleShapeEventArgsDescription());
		context.register("StyleShapeEventArgs", StyleShapeEventArgsDescriptionMetadata._metadata);
	}
}


