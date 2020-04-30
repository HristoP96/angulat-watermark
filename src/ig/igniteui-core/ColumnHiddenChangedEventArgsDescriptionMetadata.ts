/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { ColumnDescriptionMetadata } from "./ColumnDescriptionMetadata";
import { ColumnHiddenChangedEventArgsDescription } from "./ColumnHiddenChangedEventArgsDescription";

/**
 * @hidden 
 */
export class ColumnHiddenChangedEventArgsDescriptionMetadata extends Base {
	static $t: Type = markType(ColumnHiddenChangedEventArgsDescriptionMetadata, 'ColumnHiddenChangedEventArgsDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (ColumnHiddenChangedEventArgsDescriptionMetadata._metadata == null) {
			ColumnHiddenChangedEventArgsDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			ColumnHiddenChangedEventArgsDescriptionMetadata.fillMetadata(context, ColumnHiddenChangedEventArgsDescriptionMetadata._metadata);
			ColumnDescriptionMetadata.register(context);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		metadata.item("Column", "ExportedType:Column");
		metadata.item("IsHidden", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		ColumnHiddenChangedEventArgsDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("ColumnHiddenChangedEventArgs", () => new ColumnHiddenChangedEventArgsDescription());
		context.register("ColumnHiddenChangedEventArgs", ColumnHiddenChangedEventArgsDescriptionMetadata._metadata);
	}
}


