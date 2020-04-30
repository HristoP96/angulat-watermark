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
import { SectionFooterDescription } from "./SectionFooterDescription";

/**
 * @hidden 
 */
export class SectionFooterDescriptionMetadata extends Base {
	static $t: Type = markType(SectionFooterDescriptionMetadata, 'SectionFooterDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SectionFooterDescriptionMetadata._metadata == null) {
			SectionFooterDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SectionFooterDescriptionMetadata.fillMetadata(context, SectionFooterDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		DefinitionBaseDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		SectionFooterDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SectionFooter", () => new SectionFooterDescription());
		context.register("SectionFooter", SectionFooterDescriptionMetadata._metadata);
	}
}


