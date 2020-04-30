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
import { CategoryAngleAxisDescription } from "./CategoryAngleAxisDescription";

/**
 * @hidden 
 */
export class CategoryAngleAxisDescriptionMetadata extends Base {
	static $t: Type = markType(CategoryAngleAxisDescriptionMetadata, 'CategoryAngleAxisDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CategoryAngleAxisDescriptionMetadata._metadata == null) {
			CategoryAngleAxisDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CategoryAngleAxisDescriptionMetadata.fillMetadata(context, CategoryAngleAxisDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CategoryAxisBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("StartAngleOffset", "Number:double");
		metadata.item("Interval", "Number:double");
		metadata.item("ActualInterval", "Number:double");
		metadata.item("MinorInterval", "Number:double");
		metadata.item("ActualMinorInterval", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		CategoryAngleAxisDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CategoryAngleAxis", () => new CategoryAngleAxisDescription());
		context.register("CategoryAngleAxis", CategoryAngleAxisDescriptionMetadata._metadata);
	}
}


