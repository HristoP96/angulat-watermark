/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SortDescriptionDescription } from "./SortDescriptionDescription";

/**
 * @hidden 
 */
export class SortDescriptionDescriptionMetadata extends Base {
	static $t: Type = markType(SortDescriptionDescriptionMetadata, 'SortDescriptionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SortDescriptionDescriptionMetadata._metadata == null) {
			SortDescriptionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SortDescriptionDescriptionMetadata.fillMetadata(context, SortDescriptionDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("PropertyName", "String");
		metadata.item("Direction", "ExportedType:string:ListSortDirection");
	}
	static register(context: TypeDescriptionContext): void {
		SortDescriptionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SortDescription", () => new SortDescriptionDescription());
		context.register("SortDescription", SortDescriptionDescriptionMetadata._metadata);
	}
}


