/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CellInfoDescriptionMetadata } from "./CellInfoDescriptionMetadata";
import { DateTimeCellInfoDescription } from "./DateTimeCellInfoDescription";

/**
 * @hidden 
 */
export class DateTimeCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(DateTimeCellInfoDescriptionMetadata, 'DateTimeCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (DateTimeCellInfoDescriptionMetadata._metadata == null) {
			DateTimeCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			DateTimeCellInfoDescriptionMetadata.fillMetadata(context, DateTimeCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("DateTimeValue", "Date");
		metadata.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
		metadata.item("DateTimeFormat", "ExportedType:string:DateTimeFormats");
		metadata.item("IsOffsetValue", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		DateTimeCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("DateTimeCellInfo", () => new DateTimeCellInfoDescription());
		context.register("DateTimeCellInfo", DateTimeCellInfoDescriptionMetadata._metadata);
	}
}


