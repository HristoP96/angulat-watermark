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
import { NumericCellInfoDescription } from "./NumericCellInfoDescription";

/**
 * @hidden 
 */
export class NumericCellInfoDescriptionMetadata extends Base {
	static $t: Type = markType(NumericCellInfoDescriptionMetadata, 'NumericCellInfoDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (NumericCellInfoDescriptionMetadata._metadata == null) {
			NumericCellInfoDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			NumericCellInfoDescriptionMetadata.fillMetadata(context, NumericCellInfoDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		CellInfoDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("NumericValue", "Number:double");
		metadata.item("HasDecimalValue", "Boolean");
		metadata.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
		metadata.item("NegativePrefix", "String");
		metadata.item("PositivePrefix", "String");
		metadata.item("NegativeSuffix", "String");
		metadata.item("PositiveSuffix", "String");
		metadata.item("MaxFractionDigits", "Number:int");
		metadata.item("MinFractionDigits", "Number:int");
		metadata.item("MinIntegerDigits", "Number:int");
		metadata.item("ShowGroupingSeparator", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		NumericCellInfoDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("NumericCellInfo", () => new NumericCellInfoDescription());
		context.register("NumericCellInfo", NumericCellInfoDescriptionMetadata._metadata);
	}
}


