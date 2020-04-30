/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatGroupTextEventArgsDescriptionMetadata } from "./FormatGroupTextEventArgsDescriptionMetadata";
import { ColumnSortDescriptionDescriptionMetadata } from "./ColumnSortDescriptionDescriptionMetadata";
import { ColumnGroupDescriptionDescription } from "./ColumnGroupDescriptionDescription";

/**
 * @hidden 
 */
export class ColumnGroupDescriptionDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnGroupDescriptionDescriptionMetadata, 'ColumnGroupDescriptionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnGroupDescriptionDescriptionMetadata._metadata == null) {
			ColumnGroupDescriptionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnGroupDescriptionDescriptionMetadata.fillMetadata(context, ColumnGroupDescriptionDescriptionMetadata._metadata);
			FormatGroupTextEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColumnSortDescriptionDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
		metadata.item("DisplayName", "String");
		metadata.item("FormatTextRef", "EventRef::formatText");
	}
	static register(context: TypeDescriptionContext): void {
		ColumnGroupDescriptionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnGroupDescription", () => new ColumnGroupDescriptionDescription());
		context.register("ColumnGroupDescription", ColumnGroupDescriptionDescriptionMetadata._metadata);
	}
}


