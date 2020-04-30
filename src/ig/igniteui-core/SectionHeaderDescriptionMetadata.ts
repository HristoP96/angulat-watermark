/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { DefinitionBaseDescriptionMetadata } from "./DefinitionBaseDescriptionMetadata";
import { SectionHeaderDescription } from "./SectionHeaderDescription";

/**
 * @hidden 
 */
export class SectionHeaderDescriptionMetadata extends Base {
	static $t: Type = markType(SectionHeaderDescriptionMetadata, 'SectionHeaderDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SectionHeaderDescriptionMetadata._metadata == null) {
			SectionHeaderDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SectionHeaderDescriptionMetadata.fillMetadata(context, SectionHeaderDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		DefinitionBaseDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("SelectedBackground", "Brush");
		metadata.item("ActualSelectedBackground", "Brush");
		metadata.item("PaddingLeft", "Number:int");
		metadata.item("PaddingTop", "Number:int");
		metadata.item("PaddingRight", "Number:int");
		metadata.item("PaddingBottom", "Number:int");
		metadata.item("IsCollapsable", "Boolean");
		metadata.item("SummaryDisplayMode", "ExportedType:string:GroupSummaryDisplayMode");
	}
	static register(context: TypeDescriptionContext): void {
		SectionHeaderDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SectionHeader", () => new SectionHeaderDescription());
		context.register("SectionHeader", SectionHeaderDescriptionMetadata._metadata);
	}
}


