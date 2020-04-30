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
import { TextColumnDescription } from "./TextColumnDescription";

/**
 * @hidden 
 */
export class TextColumnDescriptionMetadata extends Base {
	static $t: Type = markType(TextColumnDescriptionMetadata, 'TextColumnDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TextColumnDescriptionMetadata._metadata == null) {
			TextColumnDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TextColumnDescriptionMetadata.fillMetadata(context, TextColumnDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColumnDescriptionMetadata.fillMetadata(context, metadata);
	}
	static register(context: TypeDescriptionContext): void {
		TextColumnDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TextColumn", () => new TextColumnDescription());
		context.register("TextColumn", TextColumnDescriptionMetadata._metadata);
	}
}


