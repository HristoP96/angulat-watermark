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
import { SectionHeaderCellInfoDescription } from "./SectionHeaderCellInfoDescription";

/**
 * @hidden 
 */
export class SectionHeaderCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(SectionHeaderCellInfoDescriptionMetadata, 'SectionHeaderCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SectionHeaderCellInfoDescriptionMetadata._metadata == null) {
			SectionHeaderCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SectionHeaderCellInfoDescriptionMetadata.fillMetadata(context, SectionHeaderCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ResolvedText", "String");
		metadata.item("ResolvedSummaryText", "String");
		metadata.item("SummaryDisplayMode", "ExportedType:string:GroupSummaryDisplayMode");
	}
	static register(context: TypeDescriptionContext): void {
		SectionHeaderCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SectionHeaderCellInfo", () => new SectionHeaderCellInfoDescription());
		context.register("SectionHeaderCellInfo", SectionHeaderCellInfoDescriptionMetadata._metadata);
	}
}


