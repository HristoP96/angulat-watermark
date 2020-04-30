/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { FormatGroupTextEventArgsDescription } from "./FormatGroupTextEventArgsDescription";

/**
 * @hidden 
 */
export class FormatGroupTextEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(FormatGroupTextEventArgsDescriptionMetadata, 'FormatGroupTextEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (FormatGroupTextEventArgsDescriptionMetadata._metadata == null) {
			FormatGroupTextEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			FormatGroupTextEventArgsDescriptionMetadata.fillMetadata(context, FormatGroupTextEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("GroupName", "String");
		metadata.item("GroupValueRef", "(w:GroupValue,wf:GroupValue)DataRef");
		metadata.item("FormattedValue", "String");
		metadata.item("FormattedText", "String");
	}
	static register(context: TypeDescriptionContext): void {
		FormatGroupTextEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("FormatGroupTextEventArgs", () => new FormatGroupTextEventArgsDescription());
		context.register("FormatGroupTextEventArgs", FormatGroupTextEventArgsDescriptionMetadata._metadata);
	}
}


