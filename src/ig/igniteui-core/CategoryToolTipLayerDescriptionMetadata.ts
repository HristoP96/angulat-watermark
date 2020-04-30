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
import { CategoryToolTipLayerDescription } from "./CategoryToolTipLayerDescription";

/**
 * @hidden 
 */
export class CategoryToolTipLayerDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryToolTipLayerDescriptionMetadata, 'CategoryToolTipLayerDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryToolTipLayerDescriptionMetadata._metadata == null) {
			CategoryToolTipLayerDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryToolTipLayerDescriptionMetadata.fillMetadata(context, CategoryToolTipLayerDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AnnotationLayerDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TargetAxisRef", "(w:TargetAxis,wf:TargetAxis)DataRef::object");
		metadata.item("UseInterpolation", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		CategoryToolTipLayerDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CategoryToolTipLayer", () => new CategoryToolTipLayerDescription());
		context.register("CategoryToolTipLayer", CategoryToolTipLayerDescriptionMetadata._metadata);
	}
}


