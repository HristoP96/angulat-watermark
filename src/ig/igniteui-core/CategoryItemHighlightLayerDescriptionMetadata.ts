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
import { CategoryItemHighlightLayerDescription } from "./CategoryItemHighlightLayerDescription";

/**
 * @hidden 
 */
export class CategoryItemHighlightLayerDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryItemHighlightLayerDescriptionMetadata, 'CategoryItemHighlightLayerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryItemHighlightLayerDescriptionMetadata._metadata == null) {
			CategoryItemHighlightLayerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryItemHighlightLayerDescriptionMetadata.fillMetadata(context, CategoryItemHighlightLayerDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnnotationLayerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TargetSeriesRef", "(w:TargetSeries,wf:TargetSeries)DataRef::object");
		metadata.item("UseInterpolation", "Boolean");
		metadata.item("HighlightType", "ExportedType:string:CategoryItemHighlightType");
		metadata.item("MarkerTemplateRef", "(w:MarkerTemplate,wf:MarkerTemplate)DataRef::object");
		metadata.item("BandHighlightWidth", "Number:double");
		metadata.item("SkipUnknownValues", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		CategoryItemHighlightLayerDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CategoryItemHighlightLayer", () => new CategoryItemHighlightLayerDescription());
		context.register("CategoryItemHighlightLayer", CategoryItemHighlightLayerDescriptionMetadata._metadata);
	}
}


