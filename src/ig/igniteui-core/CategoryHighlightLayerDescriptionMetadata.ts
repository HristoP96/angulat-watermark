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
import { CategoryHighlightLayerDescription } from "./CategoryHighlightLayerDescription";

/**
 * @hidden 
 */
export class CategoryHighlightLayerDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryHighlightLayerDescriptionMetadata, 'CategoryHighlightLayerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryHighlightLayerDescriptionMetadata._metadata == null) {
			CategoryHighlightLayerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryHighlightLayerDescriptionMetadata.fillMetadata(context, CategoryHighlightLayerDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnnotationLayerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TargetAxisRef", "(w:TargetAxis,wf:TargetAxis)DataRef::object");
		metadata.item("UseInterpolation", "Boolean");
		metadata.item("BandHighlightWidth", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		CategoryHighlightLayerDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CategoryHighlightLayer", () => new CategoryHighlightLayerDescription());
		context.register("CategoryHighlightLayer", CategoryHighlightLayerDescriptionMetadata._metadata);
	}
}


