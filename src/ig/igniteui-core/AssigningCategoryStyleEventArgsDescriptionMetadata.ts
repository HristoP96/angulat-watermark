/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AssigningCategoryStyleEventArgsBaseDescriptionMetadata } from "./AssigningCategoryStyleEventArgsBaseDescriptionMetadata";
import { AssigningCategoryStyleEventArgsDescription } from "./AssigningCategoryStyleEventArgsDescription";

/**
 * @hidden 
 */
export class AssigningCategoryStyleEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(AssigningCategoryStyleEventArgsDescriptionMetadata, 'AssigningCategoryStyleEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (AssigningCategoryStyleEventArgsDescriptionMetadata._metadata == null) {
			AssigningCategoryStyleEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			AssigningCategoryStyleEventArgsDescriptionMetadata.fillMetadata(context, AssigningCategoryStyleEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AssigningCategoryStyleEventArgsBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("StrokeThickness", "Number:double");
		metadata.item("RadiusX", "Number:double");
		metadata.item("RadiusY", "Number:double");
	}
	static register(context: TypeDescriptionContext): void {
		AssigningCategoryStyleEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("AssigningCategoryStyleEventArgs", () => new AssigningCategoryStyleEventArgsDescription());
		context.register("AssigningCategoryStyleEventArgs", AssigningCategoryStyleEventArgsDescriptionMetadata._metadata);
	}
}


