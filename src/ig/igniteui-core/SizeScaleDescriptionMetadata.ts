/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { PropertyUpdatedEventArgsDescriptionMetadata } from "./PropertyUpdatedEventArgsDescriptionMetadata";
import { SizeScaleDescription } from "./SizeScaleDescription";

/**
 * @hidden 
 */
export class SizeScaleDescriptionMetadata extends Base {
	static $t: Type = markType(SizeScaleDescriptionMetadata, 'SizeScaleDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SizeScaleDescriptionMetadata._metadata == null) {
			SizeScaleDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SizeScaleDescriptionMetadata.fillMetadata(context, SizeScaleDescriptionMetadata._metadata);
			PropertyUpdatedEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("MinimumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
		metadata.item("IsLogarithmic", "Boolean");
		metadata.item("LogarithmBase", "Number:int");
		metadata.item("PropertyUpdatedRef", "EventRef::propertyUpdated");
	}
	static register(context: TypeDescriptionContext): void {
		SizeScaleDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SizeScale", () => new SizeScaleDescription());
		context.register("SizeScale", SizeScaleDescriptionMetadata._metadata);
	}
}


