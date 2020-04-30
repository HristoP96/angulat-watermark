/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { TemplateHeaderCellUpdatingEventArgsDescriptionMetadata } from "./TemplateHeaderCellUpdatingEventArgsDescriptionMetadata";
import { HeaderDescriptionMetadata } from "./HeaderDescriptionMetadata";
import { TemplateHeaderDescription } from "./TemplateHeaderDescription";

/**
 * @hidden 
 */
export class TemplateHeaderDescriptionMetadata extends Base {
	static $t: Type = markType(TemplateHeaderDescriptionMetadata, 'TemplateHeaderDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TemplateHeaderDescriptionMetadata._metadata == null) {
			TemplateHeaderDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TemplateHeaderDescriptionMetadata.fillMetadata(context, TemplateHeaderDescriptionMetadata._metadata);
			TemplateHeaderCellUpdatingEventArgsDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		HeaderDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("CellUpdatingRef", "EventRef::cellUpdating");
	}
	static register(context: TypeDescriptionContext): void {
		TemplateHeaderDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TemplateHeader", () => new TemplateHeaderDescription());
		context.register("TemplateHeader", TemplateHeaderDescriptionMetadata._metadata);
	}
}


