/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { DateTimeColumnDescription } from "./DateTimeColumnDescription";

/**
 * @hidden 
 */
export class DateTimeColumnDescriptionMetadata extends Base {
	static $t: Type = markType(DateTimeColumnDescriptionMetadata, 'DateTimeColumnDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DateTimeColumnDescriptionMetadata._metadata == null) {
			DateTimeColumnDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DateTimeColumnDescriptionMetadata.fillMetadata(context, DateTimeColumnDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColumnDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("DateTimeFormat", "ExportedType:string:DateTimeFormats");
		metadata.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		DateTimeColumnDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("DateTimeColumn", () => new DateTimeColumnDescription());
		context.register("DateTimeColumn", DateTimeColumnDescriptionMetadata._metadata);
	}
}


