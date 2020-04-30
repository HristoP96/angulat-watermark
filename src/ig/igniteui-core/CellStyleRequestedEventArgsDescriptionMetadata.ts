/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { CellStyleRequestedEventArgsDescription } from "./CellStyleRequestedEventArgsDescription";

/**
 * @hidden 
 */
export class CellStyleRequestedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(CellStyleRequestedEventArgsDescriptionMetadata, 'CellStyleRequestedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (CellStyleRequestedEventArgsDescriptionMetadata._metadata == null) {
			CellStyleRequestedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			CellStyleRequestedEventArgsDescriptionMetadata.fillMetadata(context, CellStyleRequestedEventArgsDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("StyleKey", "String");
		metadata.item("ResolvedValueRef", "(w:ResolvedValue,wf:ResolvedValue)DataRef");
		metadata.item("RowNumber", "Number:int");
	}
	static register(context: TypeDescriptionContext): void {
		CellStyleRequestedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("CellStyleRequestedEventArgs", () => new CellStyleRequestedEventArgsDescription());
		context.register("CellStyleRequestedEventArgs", CellStyleRequestedEventArgsDescriptionMetadata._metadata);
	}
}


