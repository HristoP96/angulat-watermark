/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { SummaryRowDescriptionMetadata } from "./SummaryRowDescriptionMetadata";
import { SummaryRowSectionDescription } from "./SummaryRowSectionDescription";

/**
 * @hidden 
 */
export class SummaryRowSectionDescriptionMetadata extends Base {
	static $t: Type = markType(SummaryRowSectionDescriptionMetadata, 'SummaryRowSectionDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (SummaryRowSectionDescriptionMetadata._metadata == null) {
			SummaryRowSectionDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			SummaryRowSectionDescriptionMetadata.fillMetadata(context, SummaryRowSectionDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		SummaryRowDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		SummaryRowSectionDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("SummaryRowSection", () => new SummaryRowSectionDescription());
		context.register("SummaryRowSection", SummaryRowSectionDescriptionMetadata._metadata);
	}
}


