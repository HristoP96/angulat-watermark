/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateCellInfoDescriptionMetadata } from "./TemplateCellInfoDescriptionMetadata";
import { TemplateHeaderCellInfoDescription } from "./TemplateHeaderCellInfoDescription";

/**
 * @hidden 
 */
export class TemplateHeaderCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(TemplateHeaderCellInfoDescriptionMetadata, 'TemplateHeaderCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TemplateHeaderCellInfoDescriptionMetadata._metadata == null) {
			TemplateHeaderCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TemplateHeaderCellInfoDescriptionMetadata.fillMetadata(context, TemplateHeaderCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		TemplateCellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("IsFilterUIVisible", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		TemplateHeaderCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TemplateHeaderCellInfo", () => new TemplateHeaderCellInfoDescription());
		context.register("TemplateHeaderCellInfo", TemplateHeaderCellInfoDescriptionMetadata._metadata);
	}
}


