/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CategoryAxisBaseDescriptionMetadata } from "./CategoryAxisBaseDescriptionMetadata";
import { CategoryXAxisDescription } from "./CategoryXAxisDescription";

/**
 * @hidden 
 */
export class CategoryXAxisDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryXAxisDescriptionMetadata, 'CategoryXAxisDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryXAxisDescriptionMetadata._metadata == null) {
			CategoryXAxisDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryXAxisDescriptionMetadata.fillMetadata(context, CategoryXAxisDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CategoryAxisBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("Interval", "Number:double");
		metadata.item("ActualInterval", "Number:double");
		metadata.item("MinorInterval", "Number:double");
		metadata.item("ActualMinorInterval", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		CategoryXAxisDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CategoryXAxis", () => new CategoryXAxisDescription());
		context.register("CategoryXAxis", CategoryXAxisDescriptionMetadata._metadata);
	}
}


