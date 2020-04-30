/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnSortDescriptionDescription } from "./ColumnSortDescriptionDescription";

/**
 * @hidden 
 */
export class ColumnSortDescriptionDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnSortDescriptionDescriptionMetadata, 'ColumnSortDescriptionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnSortDescriptionDescriptionMetadata._metadata == null) {
			ColumnSortDescriptionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnSortDescriptionDescriptionMetadata.fillMetadata(context, ColumnSortDescriptionDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("PropertyPath", "String");
		metadata.item("SortDirection", "ExportedType:string:ListSortDirection");
	}
	static register(context: TypeDescriptionContext): void {
		ColumnSortDescriptionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnSortDescription", () => new ColumnSortDescriptionDescription());
		context.register("ColumnSortDescription", ColumnSortDescriptionDescriptionMetadata._metadata);
	}
}


