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
import { TextCellInfoDescription } from "./TextCellInfoDescription";

/**
 * @hidden 
 */
export class TextCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(TextCellInfoDescriptionMetadata, 'TextCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (TextCellInfoDescriptionMetadata._metadata == null) {
			TextCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			TextCellInfoDescriptionMetadata.fillMetadata(context, TextCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("TextValue", "String");
	}
	static register(context: TypeDescriptionContext): void {
		TextCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("TextCellInfo", () => new TextCellInfoDescription());
		context.register("TextCellInfo", TextCellInfoDescriptionMetadata._metadata);
	}
}


