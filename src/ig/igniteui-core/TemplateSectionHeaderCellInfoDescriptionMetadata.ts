/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SectionHeaderCellInfoDescriptionMetadata } from "./SectionHeaderCellInfoDescriptionMetadata";
import { TemplateSectionHeaderCellInfoDescription } from "./TemplateSectionHeaderCellInfoDescription";

/**
 * @hidden 
 */
export class TemplateSectionHeaderCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(TemplateSectionHeaderCellInfoDescriptionMetadata, 'TemplateSectionHeaderCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TemplateSectionHeaderCellInfoDescriptionMetadata._metadata == null) {
			TemplateSectionHeaderCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TemplateSectionHeaderCellInfoDescriptionMetadata.fillMetadata(context, TemplateSectionHeaderCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SectionHeaderCellInfoDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		TemplateSectionHeaderCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TemplateSectionHeaderCellInfo", () => new TemplateSectionHeaderCellInfoDescription());
		context.register("TemplateSectionHeaderCellInfo", TemplateSectionHeaderCellInfoDescriptionMetadata._metadata);
	}
}


