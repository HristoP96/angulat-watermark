/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TimeAxisBaseDescriptionMetadata } from "./TimeAxisBaseDescriptionMetadata";
import { CategoryDateTimeXAxisDescription } from "./CategoryDateTimeXAxisDescription";

/**
 * @hidden 
 */
export class CategoryDateTimeXAxisDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryDateTimeXAxisDescriptionMetadata, 'CategoryDateTimeXAxisDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryDateTimeXAxisDescriptionMetadata._metadata == null) {
			CategoryDateTimeXAxisDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryDateTimeXAxisDescriptionMetadata.fillMetadata(context, CategoryDateTimeXAxisDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		TimeAxisBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("DisplayType", "ExportedType:string:TimeAxisDisplayType");
		metadata.item("Interval", "Number:long");
		metadata.item("ActualInterval", "Number:long");
		metadata.item("MinorInterval", "Number:long");
		metadata.item("ActualMinorInterval", "Number:long");
	}
	static register(context: TypeDescriptionContext): void {
		CategoryDateTimeXAxisDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CategoryDateTimeXAxis", () => new CategoryDateTimeXAxisDescription());
		context.register("CategoryDateTimeXAxis", CategoryDateTimeXAxisDescriptionMetadata._metadata);
	}
}


