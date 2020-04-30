/* 
THIS INFRAGISTICS ULTIMATE SOFTWARE LICENSE  AGREEMENT ("AGREEMENT") LOCATED HERE: 
https://www.infragistics.com/legal/license/igultimate-la 
https://www.infragistics.com/legal/license/igultimate-eula 
GOVERNS THE LICENSING, INSTALLATION AND USE OF INFRAGISTICS SOFTWARE. BY DOWNLOADING AND/OR INSTALLING AND USING INFRAGISTICS SOFTWARE:  you are indicating that you have read and understand this Agreement, and agree to be legally bound by it on behalf of the yourself and your company.
*/

import { Base, String_$type, Type, markType } from "./type";
import { TypeDescriptionContext } from "./TypeDescriptionContext";
import { Dictionary$2 } from "./Dictionary$2";
import { AxisDescriptionMetadata } from "./AxisDescriptionMetadata";

/**
 * @hidden 
 */
export class NumericAxisBaseDescriptionMetadata extends Base {
	static $t: Type = markType(NumericAxisBaseDescriptionMetadata, 'NumericAxisBaseDescriptionMetadata');
	private static _metadata: Dictionary$2<string, string> = null;
	private static ensureMetadata(context: TypeDescriptionContext): void {
		if (NumericAxisBaseDescriptionMetadata._metadata == null) {
			NumericAxisBaseDescriptionMetadata._metadata = new Dictionary$2<string, string>(String_$type, String_$type, 0);
			NumericAxisBaseDescriptionMetadata.fillMetadata(context, NumericAxisBaseDescriptionMetadata._metadata);
		}
	}
	static fillMetadata(context: TypeDescriptionContext, metadata: Dictionary$2<string, string>): void {
		AxisDescriptionMetadata.fillMetadata(context, metadata);
		metadata.item("MinimumValue", "Number:double");
		metadata.item("ActualMinimumValue", "Number:double");
		metadata.item("ActualVisibleMinimumValue", "Number:double");
		metadata.item("MaximumValue", "Number:double");
		metadata.item("ActualMaximumValue", "Number:double");
		metadata.item("ActualVisibleMaximumValue", "Number:double");
		metadata.item("Interval", "Number:double");
		metadata.item("ActualInterval", "Number:double");
		metadata.item("MinorInterval", "Number:double");
		metadata.item("ActualMinorInterval", "Number:double");
		metadata.item("ReferenceValue", "Number:double");
		metadata.item("IsLogarithmic", "Boolean");
		metadata.item("ActualIsLogarithmic", "Boolean");
		metadata.item("LogarithmBase", "Number:int");
		metadata.item("AbbreviateLargeNumbers", "Boolean");
	}
	static register(context: TypeDescriptionContext): void {
		NumericAxisBaseDescriptionMetadata.ensureMetadata(context);
		context.register("NumericAxisBase", NumericAxisBaseDescriptionMetadata._metadata);
	}
}


