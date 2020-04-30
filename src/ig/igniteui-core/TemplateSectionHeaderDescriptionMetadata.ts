/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata } from "./TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata";
import { SectionHeaderDescriptionMetadata } from "./SectionHeaderDescriptionMetadata";
import { TemplateSectionHeaderDescription } from "./TemplateSectionHeaderDescription";

/**
 * @hidden 
 */
export class TemplateSectionHeaderDescriptionMetadata extends Base {
	static $t: Type = markType(TemplateSectionHeaderDescriptionMetadata, 'TemplateSectionHeaderDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TemplateSectionHeaderDescriptionMetadata._metadata == null) {
			TemplateSectionHeaderDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TemplateSectionHeaderDescriptionMetadata.fillMetadata(context, TemplateSectionHeaderDescriptionMetadata._metadata);
			TemplateSectionHeaderCellUpdatingEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SectionHeaderDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("CellUpdatingRef", "EventRef::cellUpdating");
	}
	static register(context: TypeDescriptionContext): void {
		TemplateSectionHeaderDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TemplateSectionHeader", () => new TemplateSectionHeaderDescription());
		context.register("TemplateSectionHeader", TemplateSectionHeaderDescriptionMetadata._metadata);
	}
}


