/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ContourValueResolverDescriptionMetadata } from "./ContourValueResolverDescriptionMetadata";
import { LinearContourValueResolverDescription } from "./LinearContourValueResolverDescription";

/**
 * @hidden 
 */
export class LinearContourValueResolverDescriptionMetadata extends Base {
	static $t: Type = markType(LinearContourValueResolverDescriptionMetadata, 'LinearContourValueResolverDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (LinearContourValueResolverDescriptionMetadata._metadata == null) {
			LinearContourValueResolverDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			LinearContourValueResolverDescriptionMetadata.fillMetadata(context, LinearContourValueResolverDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ContourValueResolverDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ValueCount", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		LinearContourValueResolverDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("LinearContourValueResolver", () => new LinearContourValueResolverDescription());
		context.register("LinearContourValueResolver", LinearContourValueResolverDescriptionMetadata._metadata);
	}
}


