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
import { NumericColumnDescription } from "./NumericColumnDescription";

/**
 * @hidden 
 */
export class NumericColumnDescriptionMetadata extends Base {
	static $t: Type = markType(NumericColumnDescriptionMetadata, 'NumericColumnDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (NumericColumnDescriptionMetadata._metadata == null) {
			NumericColumnDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			NumericColumnDescriptionMetadata.fillMetadata(context, NumericColumnDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		ColumnDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("NegativePrefix", "String");
		metadata.item("PositivePrefix", "String");
		metadata.item("NegativeSuffix", "String");
		metadata.item("PositiveSuffix", "String");
		metadata.item("MaxFractionDigits", "Number:int");
		metadata.item("MinFractionDigits", "Number:int");
		metadata.item("MinIntegerDigits", "Number:int");
		metadata.item("ShowGroupingSeparator", "Boolean");
		metadata.item("FormatOverrideRef", "(w:FormatOverride,wf:FormatOverride)DataRef");
	}
	static register(context: TypeDescriptionContext): void {
		NumericColumnDescriptionMetadata.ensureMetadata(context);
		context.registerDescriptionConstructor("NumericColumn", () => new NumericColumnDescription());
		context.register("NumericColumn", NumericColumnDescriptionMetadata._metadata);
	}
}


