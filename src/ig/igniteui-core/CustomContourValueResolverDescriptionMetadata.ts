/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CustomContourValueResolverEventArgsDescriptionMetadata } from "./CustomContourValueResolverEventArgsDescriptionMetadata";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { CustomContourValueResolverDescription } from "./CustomContourValueResolverDescription";

/**
 * @hidden 
 */
export class CustomContourValueResolverDescriptionMetadata extends Base {
	static $t: Type = markType(CustomContourValueResolverDescriptionMetadata, 'CustomContourValueResolverDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CustomContourValueResolverDescriptionMetadata._metadata == null) {
			CustomContourValueResolverDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CustomContourValueResolverDescriptionMetadata.fillMetadata(context, CustomContourValueResolverDescriptionMetadata._metadata);
			CustomContourValueResolverEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ContourValueResolverDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("GetCustomContourValuesRef", "EventRef::getCustomContourValues");
	}
	static register(context: TypeDescriptionContext): void {
		CustomContourValueResolverDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CustomContourValueResolver", () => new CustomContourValueResolverDescription());
		context.register("CustomContourValueResolver", CustomContourValueResolverDescriptionMetadata._metadata);
	}
}


