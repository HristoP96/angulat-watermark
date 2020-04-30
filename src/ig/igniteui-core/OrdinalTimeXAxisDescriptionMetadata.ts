/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryXAxisDescriptionMetadata } from "./CategoryXAxisDescriptionMetadata";
import { OrdinalTimeXAxisDescription } from "./OrdinalTimeXAxisDescription";

/**
 * @hidden 
 */
export class OrdinalTimeXAxisDescriptionMetadata extends Base {
	static $t: Type = markType(OrdinalTimeXAxisDescriptionMetadata, 'OrdinalTimeXAxisDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (OrdinalTimeXAxisDescriptionMetadata._metadata == null) {
			OrdinalTimeXAxisDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			OrdinalTimeXAxisDescriptionMetadata.fillMetadata(context, OrdinalTimeXAxisDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CategoryXAxisDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("DateTimeMemberPath", "String");
		metadata.item("MinimumValue", "Date");
		metadata.item("MaximumValue", "Date");
	}
	static register(context: TypeDescriptionContext): void {
		OrdinalTimeXAxisDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("OrdinalTimeXAxis", () => new OrdinalTimeXAxisDescription());
		context.register("OrdinalTimeXAxis", OrdinalTimeXAxisDescriptionMetadata._metadata);
	}
}


