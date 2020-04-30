/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CustomContourValueResolverEventArgsDescription } from "./CustomContourValueResolverEventArgsDescription";

/**
 * @hidden 
 */
export class CustomContourValueResolverEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(CustomContourValueResolverEventArgsDescriptionMetadata, 'CustomContourValueResolverEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CustomContourValueResolverEventArgsDescriptionMetadata._metadata == null) {
			CustomContourValueResolverEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CustomContourValueResolverEventArgsDescriptionMetadata.fillMetadata(context, CustomContourValueResolverEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("ContourValues", "Array:double");
	}
	static register(context: TypeDescriptionContext): void {
		CustomContourValueResolverEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CustomContourValueResolverEventArgs", () => new CustomContourValueResolverEventArgsDescription());
		context.register("CustomContourValueResolverEventArgs", CustomContourValueResolverEventArgsDescriptionMetadata._metadata);
	}
}


