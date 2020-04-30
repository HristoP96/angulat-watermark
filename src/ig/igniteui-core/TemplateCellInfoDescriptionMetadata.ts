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
import { TemplateCellInfoDescription } from "./TemplateCellInfoDescription";

/**
 * @hidden 
 */
export class TemplateCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(TemplateCellInfoDescriptionMetadata, 'TemplateCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TemplateCellInfoDescriptionMetadata._metadata == null) {
			TemplateCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TemplateCellInfoDescriptionMetadata.fillMetadata(context, TemplateCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("ValueRef", "(w:Value,wf:Value)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		TemplateCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TemplateCellInfo", () => new TemplateCellInfoDescription());
		context.register("TemplateCellInfo", TemplateCellInfoDescriptionMetadata._metadata);
	}
}


