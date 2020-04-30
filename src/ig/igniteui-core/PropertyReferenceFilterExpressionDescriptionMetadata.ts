/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FilterExpressionDescriptionMetadata } from "./FilterExpressionDescriptionMetadata";
import { PropertyReferenceFilterExpressionDescription } from "./PropertyReferenceFilterExpressionDescription";

/**
 * @hidden 
 */
export class PropertyReferenceFilterExpressionDescriptionMetadata extends Base {
	static $t: Type = markType(PropertyReferenceFilterExpressionDescriptionMetadata, 'PropertyReferenceFilterExpressionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (PropertyReferenceFilterExpressionDescriptionMetadata._metadata == null) {
			PropertyReferenceFilterExpressionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			PropertyReferenceFilterExpressionDescriptionMetadata.fillMetadata(context, PropertyReferenceFilterExpressionDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		FilterExpressionDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("PropertyReference", "String");
	}
	static register(context: TypeDescriptionContext): void {
		PropertyReferenceFilterExpressionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("PropertyReferenceFilterExpression", () => new PropertyReferenceFilterExpressionDescription());
		context.register("PropertyReferenceFilterExpression", PropertyReferenceFilterExpressionDescriptionMetadata._metadata);
	}
}


